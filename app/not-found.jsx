import Link from 'next/link'
import Image from 'next/image'
import notFound from "../public/404.svg"
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
    <Image src={notFound} alt="Not Found" width="400" />
      <Link className='mt-4 px-4 py-2 rounded border-solid border-purple-700 border-2 text-purple-700 hover:bg-purple-700 hover:text-white' href="/">Return Home</Link>
    </div>
  )
}