"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import Src1 from "../../../public/assets/images/Editing body text-amico.svg"
export default function Login() {
  return (
    <main 
        className='w-100 min-h-[100vh] flex justify-center items-center flex-wrap'
    >
        <motion.div
            initial="initialState"
            animate="animateState"
            variants={{
                initialState:{
                    opacity:0,
                    x:-50
                },
                animateState:{
                    opacity:1,
                    x:0
                },exitState:{
                    opacity:0,
                    x:50
                }
            }}
            exit="exitState"
            transition={{
                duration:.5,
                type:"spring",
            }}
            className='w-[clamp(300px,50%,450px)]'>
            <Image src={Src1} alt='' className="w-full"/>
        </motion.div>
        <motion.form 
            action="" 
            className='w-[clamp(300px,50%,450px)]'
            initial="initial"
            animate="animate"
            variants={{
                initial:{
                    opacity:0,
                    x:50
                },
                animate:{
                    opacity:1,
                    x:0
                },exit:{
                    opacity:0,
                    x:-50
                }
            }}
            exit="exit"
            transition={{
                duration:.5,
                type:"spring",
            }}
        >
            <Card>
                <CardHeader>
                    <CardTitle className='text-center md:text-2xl lg:text-4xl'>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <label htmlFor="email">email</label>
                        <Input type='email' placeholder='email'/>
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <Input type='password' placeholder='password'/>
                    </div>
                </CardContent>
                <CardFooter className='flex flex-row justify-center items-center gap-2'>
                    <Button className='bg-secondary flex-1' type='reset'>reset</Button>
                    <Button className='bg-primary flex-1' type='submit'>register</Button>
                </CardFooter>
            </Card>
        </motion.form>
    </main>
  )
}
