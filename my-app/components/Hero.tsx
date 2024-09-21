import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col 
      gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      
      {/* Hero Map Section */}
      <div className='hero-map' />

      {/* LEFT Section */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-52 lg:bold-88'>Wilderness Spot</h1>
        <p className='regular-16 mt-6 text-gray-50 xl:max-w-[520px]'>
          Welcome to Wilderness Spot, your ultimate camping destination for those who crave adventure and a close connection with nature. Nestled in a pristine wilderness, our campsite offers a peaceful retreat from the hustle and bustle of everyday life. Whether you're an experienced camper or new to the outdoors, Wilderness Spot provides everything you need for an unforgettable outdoor experience. Enjoy the beauty of nature, explore scenic trails, and unwind under the stars. At Wilderness Spot, adventure awaits!
        </p>

        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                alt="star"
                width={24}
                height={24}
                key={index}
              />
            ))}
          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>
            199k
            <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
          </p>
        </div>

        {/* Buttons Section */}
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button 
            type='button'
            title='Download App'
            variant='btn_green'
          />
          <Button 
            type='button'
            title='How we work?'
            icon='/play.svg'
            variant='btn_white_text' 
          />
        </div>
      </div>

      {/* RIGHT Section */}
      <div className='relative flex flex-1 items-start'>
        <div className='relative z-20 flex w-[268px] flex-col gap-8
          rounded-3xl bg-green-90 px-7 py-8'>


          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <p className='regular-16 text-gray-20'>Location</p>
              <Image src="/close.svg" alt='close' width={24} height={24} />
            </div>
            <p className='bold-20 text-white'>Aguas Calientes</p>
          </div>



          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Distance</p>
              <p className='bold-20 text-white'>173.28 mi</p>
            </div>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Elevation</p>
              <p className='bold-20 text-white'>2.040km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
