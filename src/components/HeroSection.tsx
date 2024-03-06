import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full mx-auto rounded-md relative flex flex-col items-center justify-center overflow-hidden py-10 md:py-0'>
            <Spotlight
                className="-top-40 left-0 md:left-96 md:-top-20"
                fill="white"
            />
            <div className='p-4 z-10 relative text-center w-full'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
                    100 Best Category 2021!
                </h1>
                <p className='text-neutral-300 max-w-lg mx-auto text-base md:text-lg mt-4 font-normal'>
                    Presenting the 100 Best Category Products of 2021! Explore our meticulously curated selection across various categories, showcasing innovation, quality, and style. Elevate your lifestyle with the finest offerings of the year, ensuring a memorable and exceptional experience in every aspect.
                </p>
                <div className='mt-4'>
                    <Link href={'/category'}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-black text-white border-neutral-700"
                        >
                            Explore Category
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection