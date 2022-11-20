import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  sendEmailVerification,
  updatePassword,
  sendPasswordResetEmail,
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  
} from "firebase/auth";
import { toast } from "react-hot-toast";
import store from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth";
import { openModal } from "./store/modal";

const firebaseConfig = {
    /*apiKey: process.env.REACT_APP_API_KEY, ,*/ 
  apiKey: 'AIzaSyC4vt4q8fNqtUu_Q67kcV9ccGxYrmgRi7k',
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// REGISTER

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("registration is successfull");
    return user;
  } catch (error) {
    toast.error(error.message);
    console.log(error.message);
  }
};

// LOGIN
export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
    console.log(error.message);
  }
};

// LOGOUT
export const logout = async (email, password) => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
    console.log(error.message);
  }
};

//UPDATE PROFILE
export const update = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("profile updated");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

// GET CURRENT USER
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("USER: ", user);
    store.dispatch(loginHandle(user));
  } else {
    console.log("SESSION CLOSED");
    store.dispatch(logoutHandle());
  }
});

// UPDATE EMAIL
export const updateMail = async (mail) => {
  console.log("mail", mail);
  try {
    await updateEmail(auth.currentUser, mail.email);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

// VERIFY EMAIL
export const verifyEmail = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    toast.success("Email sent");
  } catch (error) {
    toast.error(error.message);
  }
};

// UPDATE PASSWORD
export const updatePass = async (data) => {
  console.log("updatePass data: ", data);
  try {
    await updatePassword(auth.currentUser, data.newPass);
    toast.success("Password updated");
    return true
  } catch (error) {
    if(error.code === 'auth/requires-recent-login') {
      store.dispatch(openModal( {
        name: 're-auth-modal'
      }))
    }
    toast.error(error.message);
  }
};

// RESET PASSWORD
export const resetPass = async (email) => {
  try {
    auth.languageCode = "de";
    await sendPasswordResetEmail(auth, email);
    toast.success("Email sent to reset password");
  } catch (error) {
    toast.error(error.message);
  }
};

// DELETE ACCOUNT
export const deleteAccount = async () => {
  try {
    await deleteUser(auth.currentUser);
    toast.success("Your account has been deleted successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

// LOGIN WITH GOOGLE
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
  } catch (error) {
    toast.error(error.message);
  }
};

// LOGIN WITH PHONE NUMBER
export const loginWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;


  } catch (error) {
    toast.error(error.message)
  }
}
export default app;
