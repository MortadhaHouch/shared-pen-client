import React from 'react'
import { posts } from '../../../utils/constants'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import { AiFillLike,AiFillDislike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import Image from 'next/image';
export default function community() {
  return (
    <main className='w-full min-h-[100vh] flex flex-col justify-start items-center flex-wrap'>
      <section className='w-full flex flex-col justify-center gap-2 items-center bg-white py-20 dark:bg-black'>
      {
        posts.map((post,index)=>{
          return(
            <Card key={index} className='w-[clamp(300px,40%,450px)] flex flex-col justify-center items-center gap-2 border-2 border-slate-500'>
              <CardHeader className='w-full'>
                <div className='w-full font-semibold text-black dark:text-white grid grid-cols-[50px,1fr] grid-rows-2 gap-x-3'>
                  <Image src={post.author.avatar} alt="avatar" className='rounded-full col-span-1 row-span-2 border'/>
                  <h3 className='col-span-1 row-span-1'>{post.author.firstName} {post.author.lastName}</h3>
                  <span className='col-span-1 row-span-1 opacity-65'>{post.author.email}</span>
                </div>
                <span className='opacity-50'>{post.date.toLocaleDateString()}</span>
              </CardHeader>
              <CardContent>
                <h4 className='font-semibold text-black dark:text-white'>{post.title}</h4>
                <p>{post.description}</p>
              </CardContent>
              <CardFooter className='w-full flex flex-row justify-between items-center gap-2'>
                <Button className='flex flex-row justify-center items-center flex-1'><span>{post.likes}</span><AiFillLike /></Button>
                <Button className='flex flex-row justify-center items-center flex-1'><span>{post.dislikes}</span><AiFillDislike /></Button>
                <Button className='flex flex-row justify-center items-center flex-1'><span>{post.comments.length}</span><FaCommentAlt/></Button>
              </CardFooter>
            </Card>
          )
        })
      }
      </section>
    </main>
  )
}
