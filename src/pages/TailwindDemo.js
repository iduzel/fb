import React from 'react'

const TailwindDemo = () => {
  return (
    <div className=' md:h-screen p-7 flex flex-col justify-center items-center gap-5  '>
      <h1 className='border-8 border-yellow-200  py-4 px-4 first-letter:capitalize rounded-lg md:rounded-full shadow-2xl shadow-blue-300' >tailwindDemo</h1>
      <button className="bg-violet-500 hover:bg-yellow-300 active:bg-orange-500 focus:outline-none focus:ring focus:ring-black-700  p-7 rounded text-sm md:text-2xl font-bold opacity-50  hover:opacity-100">
        Save changes
      </button>
      <div className="divide-y  divide-black">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <table className="table-auto border  p-3 border-spacing-2 border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2 rounded ">Song</th>
            <th className="border border-slate-300 p-2 rounded ">Artist</th>
            <th className="border border-slate-300 p-2 rounded ">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 p-2 rounded">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="border border-slate-300 p-2 rounded">Malcolm Lockyer</td>
            <td className="border border-slate-300 p-2 rounded">1961</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 rounded ">Witchy Woman</td>
            <td className="border border-slate-300 p-2 rounded ">The Eagles</td>
            <td className="border border-slate-300 p-2 rounded ">1972</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 rounded ">Shining Star</td>
            <td className="border border-slate-300 p-2 rounded ">Earth, Wind, and Fire</td>
            <td className="border border-slate-300 p-2 rounded ">1975</td>
          </tr>
          <tr>
            <td className='border p-2'>Shining Star</td>
            <td className='border p-2'>Earth, Wind, and Fire</td>
            <td className='border p-2'>1975</td>
          </tr>
          <tr>
            <td >Shining Star</td>
            <td >Earth, Wind, and Fire</td>
            <td >1975</td>
          </tr>
        </tbody>
      </table>

     

    </div>
  )
}

export default TailwindDemo