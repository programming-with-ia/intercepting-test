import Link from 'next/link'
import React from 'react'

async function Page({params}:{params: {temp: string[]}}) {
    const {temp} = await params
    console.log(temp)
  return (
    <div className='text-lg'>Showcase Simple Page
        <Link href={`/templates/${temp.join("/")}`}>templates {temp.join(" -> ")}</Link>
    </div>
  )
}

export default Page