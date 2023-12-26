import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Product page</h1>
        <Link href='/products/image-to-text-converter'>Go to image to text converter</Link>
    </div>
  )
}

export default page