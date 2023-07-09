export interface UserSign {
  name: string;
  cpf: string;
  email: string;
  phone: string;
}

export interface JwtSign {
  handle(user: UserSign): string;
}
