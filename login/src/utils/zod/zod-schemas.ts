import { z } from "zod";

const REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]$/

export const RegisterSchema = z.object({
  name: z.string().min(5, '"name" must have more of 4 characters'),
  cpf: z.string().length(11),
  email: z.string().email(),
  password: z.string().min(8).regex(REGEX),
  proofOfIncome: z.string(),
  phone: z.string().length(13)
}).required();

export const LoginSchema = z.object({
  cpf: z.string().length(11),
  password: z.string().min(8).regex(REGEX),
}).required();

export const UpdateSchema = z.object({
  name: z.string().min(5, '"name" must have more of 4 characters').optional(),
  cpf: z.string().length(11),
  email: z.string().email().optional(),
  password: z.string().min(8).regex(REGEX).optional(),
  proofOfIncome: z.string().optional(),
  phone: z.string().length(13).optional()
}).required();
