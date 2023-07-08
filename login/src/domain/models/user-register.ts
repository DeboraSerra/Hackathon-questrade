export interface UserRegister {
  // XXXXXXXXXXX
  cpf: string;

  email: string;

  // Min = 8, 1 Letra maiúscula, 1 Letra minúscula, 1 número e 1 caracter especial
  password: string;

  proofOfIncome: string;

  // XX XXXXX-XXXX
  phone: string;
}
