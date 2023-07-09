import axios from 'axios'

export const api = axios.create({
  baseURL: `http://localhost:${process.env.NEXT_PUBLIC_API_PORT}/api`,
})
