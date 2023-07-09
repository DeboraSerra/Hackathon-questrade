export interface LoginPayload {
  cpf: string;
  password: string;
}

export interface RegisterPayload {
  cpf: string
  password: string
  email: string
  name: string
  phone: string
  proofOfIncome: string
}

export interface UpdateProfilePayload {
  cpf: string
  password?: string
  email?: string
  name?: string
  phone?: string
  proofOfIncome?: string
}