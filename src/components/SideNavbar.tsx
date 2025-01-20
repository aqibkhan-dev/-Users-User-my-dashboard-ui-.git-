/** @format */
'use client'

import { ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

export default function SideNavbar () {
  return (
    <>
      {/* <div className='relative min-w-[80px] px-3 pb-10'>
        <div className='absolute right-[-20px] top-7'>
          <Button
            //  onClick={toggleSidebar}
            variant='secondary'
            className='rounded-full p-2'
          >
            <ChevronRight />
          </Button>
        </div> */}
        <div className='flex flex-col h-[93%] ml-2 mt-2 justify-between bg-[#040516] rounded-lg items-center text-[#f6f6ff] p-1 font-bold'>
          <div className='flex flex-col gap-5 cursor-pointer text-lg items-center'>
            <p className='mt-10 mb-12'>dappr</p>
            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-school'
              >
                <path d='M14 22v-4a2 2 0 1 0-4 0v4' />
                <path d='m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10' />
                <path d='M18 5v17' />
                <path d='m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6' />
                <path d='M6 5v17' />
                <circle cx='12' cy='9' r='2' />
              </svg>
            </div>

            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-chart-column-stacked'
              >
                <path d='M11 13H7' />
                <path d='M19 9h-4' />
                <path d='M3 3v16a2 2 0 0 0 2 2h16' />
                <rect x='15' y='5' width='4' height='12' rx='1' />
                <rect x='7' y='8' width='4' height='9' rx='1' />
              </svg>
            </div>
            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-landmark'
              >
                <line x1='3' x2='21' y1='22' y2='22' />
                <line x1='6' x2='6' y1='18' y2='11' />
                <line x1='10' x2='10' y1='18' y2='11' />
                <line x1='14' x2='14' y1='18' y2='11' />
                <line x1='18' x2='18' y1='18' y2='11' />
                <polygon points='12 2 20 7 4 7' />
              </svg>
            </div>
            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-mail'
              >
                <rect width='20' height='16' x='2' y='4' rx='2' />
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
              </svg>
            </div>

            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-square-play'
              >
                <rect width='18' height='18' x='3' y='3' rx='2' />
                <path d='m9 8 6 4-6 4Z' />
              </svg>
            </div>
            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-users'
              >
                <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                <circle cx='9' cy='7' r='4' />
                <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                <path d='M16 3.13a4 4 0 0 1 0 7.75' />
              </svg>
            </div>
            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-file-text'
              >
                <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
                <path d='M14 2v4a2 2 0 0 0 2 2h4' />
                <path d='M10 9H8' />
                <path d='M16 13H8' />
                <path d='M16 17H8' />
              </svg>
            </div>
            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-badge-dollar-sign'
              >
                <path d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z' />
                <path d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' />
                <path d='M12 18V6' />
              </svg>
            </div>
          </div>
          <div className='text-[#fff]'>
            <div className='mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-settings'
              >
                <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
                <circle cx='12' cy='12' r='3' />
              </svg>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}
