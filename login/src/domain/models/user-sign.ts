export interface UserSign {
  cpf: string;
  email: string;
  phone: string;
}

export interface JwtSign {
  handle(user: UserSign): string;
}
