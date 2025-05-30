import { useState } from 'react'



function App() {
  const [color, setColor] = useState('black')

  return (

    <div className='w-full h-screen duration-200' style={{ background: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => {
            setColor('red')
          }} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ background: 'red' }}>click</button>
          <button onClick={()=>{
            setColor('green')
          }} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ background: 'green' }}>click</button>
          <button onClick={() => {
            setColor('blue')
          }} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{ background: 'blue' }}>click</button>
          <button onClick={() => {
            setColor('yellow')
          }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ background: 'yellow' }}>click</button>
          <button onClick={() => {
            setColor('violet')
          }} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ background: 'violet' }}>click</button>
          <button onClick={() => {
            setColor('orange')
          }} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ background: 'orange' }}>click</button>
           <button onClick={() => {
            setColor('purple')
          }} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ background: 'purple' }}>click</button>
           <button onClick={() => {
            setColor('gray')
          }} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ background: '' }}>click</button>



        </div>
      </div>

    </div>

  )
}

export default App
