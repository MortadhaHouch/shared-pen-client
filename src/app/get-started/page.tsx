import { HeroScroll } from '@/components/main/HeroScroll'
import { Meteors } from '@/components/main/Meteors'
import { Spotlight } from '@/components/main/Spotlight'
import { TracingBeam } from '@/components/main/TracingBeam'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'

interface ScrollElementComponent {
    title: string;
    description: string;
    image: string;
}
const features: ScrollElementComponent[] = [
    {
      title: "Real-Time Collaboration",
      description: "Work on the same document simultaneously with your team, with updates reflected instantly for all participants.",
      image: "",
    },
    {
      title: "Rich Text Formatting",
      description: "Customize your text with a variety of formatting options, including fonts, colors, and styles.",
      image: "",
    },
    {
      title: "online storage",
      description: "Save and access your documents securely from popular online platforms like Google Drive and Dropbox.",
      image: "",
    },
    {
      title: "Offline Mode",
      description: "Edit documents even without an internet connection, with changes synced automatically once you’re back online.",
      image: "",
    },
    {
      title: "Live Cursor Tracking",
      description: "See your collaborators’ cursors in real-time, allowing for smoother collaboration and coordination.",
      image: "",
    },
    {
      title: "Keyboard Shortcuts",
      description: "Enhance your productivity with a wide range of intuitive keyboard shortcuts.",
      image: "",
    },
    {
      title: "Dark Mode",
      description: "Switch to dark mode for a comfortable editing experience in low-light environments.",
      image: "",
    },
  ];
export default function GetStarted() {
  return (
    <main className='w-full min-h-[100vh] flex flex-col justify-center items-center flex-wrap'>
        <Spotlight/>
        <TracingBeam className="w-full flex flex-col justify-center items-center">
        {
            features.map((element, index) => (
                <div key={index} className='flex flex-col justify-center items-center flex-wrap'>
                    <HeroScroll description={element.description} title={element.title} image={element.image}/>
                </div>
            ))
        }
        </TracingBeam>
        <Meteors className='w-full min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold dark:text-white'>
                Still doubting <br />
                <span className='text-4xl md:text-[6rem] text-purple-400 font-bold mt-1 leading-none'>
                    Get started
                </span>
            </h1>
            <form action="" className='flex flex-col justify-center items-center gap-2 backdrop-blur-lg p-4 rounded-lg w-[clamp(300px,60%,450px)]'>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                    <Label title='email' htmlFor='email'/>
                    <Input type='email' className='w-full shadow-sm focus:shadow-md focus:transition-shadow' name="email" placeholder='Enter your email'/>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                    <Label title='password' htmlFor='password'/>
                    <Input type='password' className='w-full shadow-sm focus:shadow-md focus:transition-shadow' placeholder='Enter your password'/>
                </div>
                <Button>
                    Get started
                </Button>
            </form>
        </Meteors>
    </main>
  )
}
