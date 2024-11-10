import Link from 'next/link'
import React from 'react'

async function Page({params}:{params: {temp: string[]}}) {
    const {temp} = await params
    console.log(temp)
  return (
    <div className='text-lg text-red-400'>Showcase Intercepting Page
        <Link href={"/templates/single"}>Single</Link>
    </div>
  )
}

export default Page