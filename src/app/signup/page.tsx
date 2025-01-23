"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { ChangeEvent, useState } from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import Src1 from "../../../public/assets/images/Editing body text-bro.svg"
import { emailRegex } from '../../../utils/constants'
export default function Signup() {
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [firstName,setFirstName] = useState<string>('');
    const [lastName,setLastName] = useState<string>('');
  return (
    <main className='w-100 min-h-[100vh] flex justify-center items-center flex-wrap'>
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
                    x:-50
                },
                animate:{
                    opacity:1,
                    x:0
                },
                exit:{
                    opacity:0,
                    x:50
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
                    <CardTitle className='text-center md:text-2xl lg:text-4xl'>
                        <h3>Register</h3>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <label htmlFor='first-name'>first name</label>
                        <Input value={firstName} onChange={(e:ChangeEvent<HTMLInputElement>)=>setFirstName(e.target.value)} id='first-name' name='first-name' type='text' placeholder='first name'/>
                    </div>
                    <div>
                        <label htmlFor='last-name'>last name</label>
                        <Input value={lastName} onChange={(e:ChangeEvent<HTMLInputElement>)=>setLastName(e.target.value)} id='last-name' name='last-name' type='text' placeholder='last name'/>
                    </div>
                    <div>
                        <label htmlFor='email'>first name</label>
                        <Input value={email} onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} id='email' name='email' type='email' placeholder='email'/>
                    </div>
                    <div>
                        <label htmlFor='password'>password</label>
                        <Input value={password} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} id='password' name='password' type='password' placeholder='password'/>
                    </div>
                </CardContent>
                <CardFooter className='flex flex-row justify-center items-center gap-2'>
                    <Button disabled={firstName.length === 0 || lastName.length === 0 || email.length === 0 || !email.match(emailRegex) || password.length ===0} className='bg-primary flex-1' type='submit'>register</Button>
                </CardFooter> 
            </Card>
        </motion.form>
    </main>
  )
}
