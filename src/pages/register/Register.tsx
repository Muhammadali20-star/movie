import React from 'react'
import photo from '@/assets/UZ.svg'
import photo2 from '@/assets/icons8-facebook (2).svg'
import photo3 from '@/assets/icons8-google.svg'

const Register = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col gap-4'>
        <div className='text-center'>
        <h2 className='text-3xl dark:text-[#FFFFFF] text-slate-900 font-medium leading-9'>Регистрация</h2>
        <p className='dark:text-[#777777] text-slate-900 font-normal leading-6'>Введите номер телефона для того <br /> чтобы войти или пройти регистрацию</p>
        </div>
        <div className='flex gap-3 border dark:border-black dark:bg-slate-900 bg-white border-gray-200 w-96 h-12 mx-auto rounded-[12px] px-3 items-center mt-4'>
            <img src={photo} alt="" />
            <input type="number"  className='flex-1  outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm'  placeholder='+998 88 800-90-00' />
        </div>
        <div className='w-96 h-12 mx-auto bg-red-500 py-2 text-center border border-red-500 rounded-[12px]'>
        <button className='dark:text-[#FFFFFF] text-slate-900 font-medium leading-5'>Register</button>
        </div>
        <div className='grid place-items-center'>
            <h2 className='dark:text-[#FFFFFF] text-slate-900 font-normal leading-6'>Или</h2>
        </div>
        <div className='flex gap-2 justify-center mt-6'>
            <div className='flex gap-3 items-center px-6  rounded-[12px] w-44 h-16 dark:bg-slate-900 bg-white'>
                <img src={photo2} alt="" />
                <h2 className='dark:text-[#FFFFFF] text-slate-900 font-medium leading-5'>Facebook</h2>
            </div>
            <div className='flex gap-3 items-center px-6  rounded-[12px] w-44 h-16 dark:bg-slate-900 bg-white'>
                <img src={photo3} alt="" />
                <h2 className='dark:text-[#FFFFFF] text-slate-900 font-medium leading-5'>Google</h2>
            </div>
        </div>
        </div>
    </div>
  )
}

export default React.memo(Register)