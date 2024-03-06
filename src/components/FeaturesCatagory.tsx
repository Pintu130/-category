'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { fetchPrducts } from '@/assets/data'
const FeaturesCatagory = () => {
    const [getProduct, setGetProduct] = useState('');

    useEffect(() => {
        (async () => {
            const data = await fetchPrducts();
            console.log("🚀 ~ data:", data)
            // if (data?.length > 0) {
            //     setGetProduct(data);
            // }
        })();
    }, [])

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-base md:text-lg font-semibold italic'>Featured  Catagories</h2>
                    <p className='text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white mt-2 '>Purchase With the Best </p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    <div className='flex justify-center'>
                        <BackgroundGradient className='text-black flex flex-col rounded-[22px] bg-white overflow-hidden h-full max-w-sm'>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow-0'>
                                <p></p>
                                <p></p>
                                sgssgssgss gssgss
                                gssgss gssg ssgssg
                                ssgssgssg
                            </div>

                        </BackgroundGradient>
                    </div>
                </div>
            </div>
            <div className='text-center mt-20 '>
                <Link href={'/category'} className='bg-white text-black font-normal mx-auto rounded-md px-4 py-2 border border-neutral-600 transition duration-200 hover:bg-gray-200'>View all Product</Link>
            </div>
        </div>
    )
}

export default FeaturesCatagory