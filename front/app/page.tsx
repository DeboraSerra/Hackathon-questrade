'use client'
import Login from '@/components/Login/Login'
import { context } from '@/lib/context'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

export default function Home() {
  const { isLogged } = useContext(context)
  const router = useRouter()

  useEffect(() => {
    if (isLogged) {
      router.push('/dashboard')
    }
  }, [])
  return (
    <main className="h-full flex justify-center items-center">
      <Login />
    </main>
  )
}
