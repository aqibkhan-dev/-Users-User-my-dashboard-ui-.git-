'Use client'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import Image from 'next/image'

// interface Props {
// }
// Define the props here if any

// const Email: React.FC<Props> = props => {
//   return (
//     <>
//       <div className='overflow-auto bg-[#d3e5ed] rounded-[20px 20px 0 0] shadow-lg p-5 rounded-lg '>
//       <h1 className='font-bold mb-4'>Recent Email</h1>
//       <Table>
//         <TableBody>
//           <TableRow>
//             <Image
//               className='rounded-[50%] object-cover m-3'
//               alt='server image'
//               src={'/images/1.jpg'}
//               height={100}
//               width={50}
//             />
//             <TableCell>Hannah Morgan</TableCell>
//             <TableCell>Meeting scheduled</TableCell>
//             <TableCell className='text-right'>1:24 pm</TableCell>
//           </TableRow>
//         </TableBody>
//         <TableBody>
//           <TableRow>
//             <Image
//               className='rounded-[50%] object-cover m-3'
//               alt='server image'
//               src={'/images/2.jpg'}
//               height={100}
//               width={50}
//             />
//             <TableCell>Megan Clark</TableCell>
//             <TableCell>Update on marketing campaign</TableCell>
//             <TableCell className='text-right'>12:30 pm</TableCell>
//           </TableRow>
//         </TableBody>
//         <TableBody>
//           <TableRow>
//             <Image
//               className='rounded-[50%] object-cover m-3'
//               alt='server image'
//               src={'/images/3.jpg'}
//               height={100}
//               width={50}
//             />
//             <TableCell>Brandon Williams</TableCell>
//             <TableCell>Designly 2.0 is about to launch</TableCell>
//             <TableCell className='text-right'>Yesterday at 8:57 pm</TableCell>
//           </TableRow>
//         </TableBody>
//         <TableBody>
//           <TableRow>
//             <Image
//               className='rounded-[50%] object-cover m-3'
//               alt='server image'
//               src={'/images/4.jpg'}
//               height={100}
//               width={50}
//             />
//             <TableCell>Reid Smith</TableCell>
//             <TableCell>My friend Julie loves launch</TableCell>
//             <TableCell className='text-right'>Yesterday at 8:57 pm</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//       </div>
//     </>
//   )
// }

import React from 'react'

export default function Email () {
  return (
    <> 
      <div className='overflow-auto bg-[#d3e5ed] rounded-[20px 20px 0 0] shadow-lg p-5 rounded-lg '>
         <h1 className='font-bold mb-4'>Recent Email</h1>
        <Table>  
          <TableBody>            
            <TableRow> 
              <Image
                className='rounded-full w-10 h-10 object-cover m-3'
                alt='server image'
                src={'/images/1.jpg'}
                height={100}
                width={50}
              />
              <TableCell>Hannah Morgan</TableCell>
              <TableCell>Meeting scheduled</TableCell>
              <TableCell className='text-right'>1:24 pm</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <Image
                className='rounded-full w-10 h-10 object-cover m-3'
                alt='server image'
                src={'/images/2.jpg'}
                height={100}
                width={50}
              />
              <TableCell>Megan Clark</TableCell>
              <TableCell>Update on marketing campaign</TableCell>
              <TableCell className='text-right'>12:30 pm</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <Image
                className='rounded-full  w-10 h-10  object-cover m-3'
                alt='server image'
                src={'/images/3.jpg'}
                height={100}
                width={50}
              />
              <TableCell>Brandon Williams</TableCell>
              <TableCell>Designly 2.0 is about to launch</TableCell>
              <TableCell className='text-right'>Yesterday at 8:57 pm</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <Image
                className='rounded-full w-10 h-10  object-cover m-3'
                alt='server image'
                src={'/images/4.jpg'}
                height={100}
                width={50}
              />
              <TableCell>Reid Smith</TableCell>
              <TableCell>My friend Julie loves launch</TableCell>
              <TableCell className='text-right'>Yesterday at 8:57 pm</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  )
}


