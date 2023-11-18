import React from 'react'
import photo from '../../assets/Background.png'
const index = () => {
  return (
    <> 
    <div className='flex justify-center items-center  font-bold bg-gray-400 h-screen' >
    <img src={photo} alt="" className=' w-48 rounded-full'/>

      <div className=' py-8'>
        <div className='m-3.5 bg-red-400 rounded-3xl '>Yesica Zemanate</div> <br />
      <div className='m-3.5 bg-red-400 rounded-3xl '>Age : 22 </div><br />
      <div className='m-3.5 bg-red-400 rounded-3xl '>city ​​of residence: Popayan Cauca </div>
      <br />
      <div className='m-3.5 bg-red-400 rounded-3xl '>cell phone: 3162401788</div>
       <br />
      
      </div>
      <div className='bg-red-400 rounded-lg min-w-max'>
        <p>I am a student at the Sena Regional Cauca CTPI, <br />I study as a technologist in software analysis and development. <br />
        I lived in Balboa Cauca <br /> and for two years I have lived in the city of Popayan.</p>
      </div>

    </div>
    </>
  )
}
export default index
