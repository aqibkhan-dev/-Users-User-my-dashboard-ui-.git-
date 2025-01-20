/** @format */

import PageTitle from '@/components/PageTitle'
import { Users, CreditCard, Activity, Layout } from 'lucide-react'
import Card, { CardProps } from '@/components/Card'
import BarChart from '@/components/BarChart'
import Email from '@/components/Email'
import SideNavbar from '@/components/SideNavbar'
import Right from '@/components/Right'

const cardData: CardProps[] = [
  {
    label: 'Bank Balance',
    amount: '$143,624',
    discription: 'Your bank balance',
    icon: Layout
  },
  {
    label: 'Subscriptions',
    amount: '+2350',
    discription: '+180.1% from last month',
    icon: Users
  },
  {
    label: 'Sales',
    amount: '+12,234',
    discription: '+19% from last month',
    icon: CreditCard
  },
  {
    label: 'Active Now',
    amount: '+573',
    discription: '+201 since last hour',
    icon: Activity
  }
]

export default function Home () {
  return (
    <>
      <div className='flex'>
        
      <div className='bg-[#c4e0eb] p-10 rounded-tl-lg rounded-bl-lg'>
        <SideNavbar />
      </div>
      <div className='flex flex-col gap-5 bg-[#c4e0eb] p-4 rounded-bl-none rounded-tr-none'>
        <PageTitle title='Good morning, James' />

        <section className='grid w-full grid-cols-1 gap-4 gap-x-8  transition-all sm:grid-cols-2 xl:grid-cols-4 '>
          {cardData.map((d, i) => (
            <Card
              icon={d.icon}
              key={i}
              amount={d.amount}
              discription={d.discription}
              label={d.label}
            />
          ))}
        </section>
        <section className='grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-3'>
          
            <div className='flex gap-3 min-w-[200px] lg:flex-col '>
              <div className='shadow-md p-6 rounded-lg bg-[#d3e5ed]'>
                <h1 className='font-medium'>New client</h1>
                <div className='flex justify-between'>
                  <p className='text-5xl font-bold'>54 </p>
                  <span className='bg-green-100 font-normal rounded-lg p-3'>
                    +18.7%
                  </span>
                </div>
              </div>

              <div className='shadow-md p-6 rounded-lg bg-[#d3e5ed]'>
                <h1 className='font-medium'>invoices overdue</h1>
                <div className='flex justify-between'>
                  <p className='text-5xl font-bold'>6 </p>
                  <span className='bg-red-200 font-normal rounded-lg p-3'>
                    +2.7%
                  </span>
                </div>
              </div>
            </div>
       

          <div className='shadow-lg rounded-lg col-span-2 bg-[#d3e5ed]'>
            <div className='flex justify-between items-center '>
              <h2 className='p-4 font-semibold'>Revenue</h2>
              <p className='pr-1'>Last 7 days VS prior week</p>
            </div>
            <BarChart />
          </div>
        </section>

        <Email />
      </div>
      <Right/>
      </div>
    </>
  )
}
