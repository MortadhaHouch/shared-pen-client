import { AppSidebar } from '@/components/main/AppSidebar'
import React from 'react'

export default function Dashboard({children}:{children:React.ReactNode}) {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-2">
        <AppSidebar/>
        {children}
    </main>
  )
}
