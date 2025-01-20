import Image from 'next/image'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { Progress } from './ui/progress'

// type Props = {}

export default function Right () {
  return (
    <>
      <div className='bg-[#c4e0eb] min-h-[100vh] rounded-r-lg lg:h-[100%] '>
        <div className='flex gap-5 items-center h-[10%]'>
          <svg
            className='w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path d='M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z' />
          </svg>
          <svg
            className='w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z' />
          </svg>
          <svg
            className='w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path d='M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z' />
          </svg>
          <div className='flex relative'>
            <Image
              className='rounded-full w-10 h-10 object-cover m-3'
              alt='server image'
              src={'/images/1.jpg'}
              height={40}
              width={40}
            />
            <HoverCard>
              <HoverCardTrigger asChild>
           <div className='absolute left-14 top-5 '>
           <ChevronDown/>
           </div>
              </HoverCardTrigger>
              <HoverCardContent className='w-60'>
                <div className='flex justify-between space-x-4'>
                  <div className='space-y-1'>
                    <h4 className='text-sm font-semibold'>Formation status</h4>
                    <p className='text-sm'>
                      in progress
                    </p>
                    <Progress />

                      <Button className='text-xs text-muted-foreground bg-[#d3e5ed]'>
                        View status
                      </Button>
                    
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <div className='h-[40%] mt-28'>
          <div className='flex flex-col justify-evenly h-80 pl-10  '>
            <h3 className='font-bold'>Your to-Do list</h3>
            <div className='flex items-center'>
              <div className='bg-black text-white rounded-lg p-1 text-center mr-3'>
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
                  className='lucide lucide-receipt'
                >
                  <path d='M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z' />
                  <path d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' />
                  <path d='M12 17.5v-11' />
                </svg>
              </div>
              <div className='line-clamp-2'>
                <p className='font-semibold'>Run payroll</p>
                <p className='text-[#9e9eaa] text-sm'>Mar 4 at 6:00 pm</p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='bg-black text-white rounded-lg p-1 text-center mr-3'>
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
                  className='lucide lucide-clock'
                >
                  <circle cx='12' cy='12' r='10' />
                  <polyline points='12 6 12 12 16 14' />
                </svg>
              </div>
              <div className='line-clamp-2'>
                <p className='font-semibold'>Review time off request</p>
                <p className='text-[#9e9eaa] text-sm'>Mar 7 at 6:00 pm</p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='bg-black text-white rounded-lg p-1 text-center mr-3'>
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
                  className='lucide lucide-clipboard-pen'
                >
                  <rect width='8' height='4' x='8' y='2' rx='1' />
                  <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5' />
                  <path d='M4 13.5V6a2 2 0 0 1 2-2h2' />
                  <path d='M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z' />
                </svg>
              </div>
              <div className='line-clamp-2'>
                <p className='font-semibold'>Sign board resolution</p>
                <p className='text-[#9e9eaa] text-sm'>Mar 12 at 6:00 pm</p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='bg-black text-white rounded-lg p-1 text-center mr-3'>
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
                  className='lucide lucide-book-check'
                >
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20' />
                  <path d='m9 9.5 2 2 4-4' />
                </svg>
              </div>
              <div className='line-clamp-2'>
                <p className='font-semibold'>Finish onboarding Tony</p>
                <p className='text-[#9e9eaa] text-sm'>Mar 12 at 7:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className='h-[30%] flex items-center justify-center'>
          <div className='m-5 h-[150px] w-[300px] bg-black text-white rounded-xl p-4'>
            <div className='leading-10'>
              <h4 id='title'>Board meeting</h4>
              <p className='text-[#9e9eaa] text-sm'>
                <p className='inline-block bg-[#66e19d] rounded-full h-3 w-3 mr-2'></p>
                Feb 22 at 6:00 PM
              </p>
            </div>
            <p className='text-[#9e9eaa] text-sm pl-5'>
              You have been invited to attend a metting of the Board Directors.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
