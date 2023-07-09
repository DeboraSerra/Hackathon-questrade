import decode from 'jwt-decode'
import { cookies } from 'next/dist/client/components/headers'

interface User {
  cpf: string
  name: string
  email: string
  phone: string
}

export function getUser(): User | null {
  const token = localStorage.getItem('token')
  if (!token) {
    return null
  }
  const user: User = decode(token)
  return user
}