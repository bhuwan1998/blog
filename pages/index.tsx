import type { NextPage } from 'next'
import {PostCard, PostWidget, Layout, Header, Categories} from './components'
import Head from 'next/head'
import Image from 'next/image'

// dummy post list to test 
const posts = [
  {title : 'React testing', excerpt: 'Learn React Testing'}, 
  {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'}
]

const Home: NextPage = () => {
  return (
    // The class name below shows the margin of x is set to auto, padding for x is set to 10 and margin bottom is 8 
    // container gives the space a specific width 
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title> Living in the terminal </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className= "grid grid-cols-1 lg:grid-cols-12 gap-12"></div>
      <div className='lg:col-span-8 col-span-1'>
        {posts.map((post, index) => (
          <PostCard post={post} />
         ))}
      </div>
      <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>


          </div>
        
      </div>
    </div>
  )
}

export default Home
