import { z } from "zod";

const REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]$/

export const RegisterSchema = z.object({
  cpf: z.string().length(11),
  email: z.string().email(),
  password: z.string().min(8).regex(REGEX),
  proofOfIncome: z.string(),
  phone: z.string().length(13)
}).required();
