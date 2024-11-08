import Link from 'next/link'
import React from 'react'

async function Page({params}:{params: {temp: string[]}}) {
    const {temp} = await params
    console.log(temp)
  return (
    <div>Simple Page
        <Link href={`/showcase/${temp.join("/")}`}>To Same Path <span className='opacity-70'>{temp.join(" -> ")}</span></Link>
        <Link href={`/showcase/single`}>To Single Path</Link>
        <Link href={`/showcase/multi/slug`}>multi-slug</Link>
    </div>
  )
}

export default Page