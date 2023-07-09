import jwt from 'jsonwebtoken';
import env from "../../main/config/env";
import { UserSign } from '../../domain/models/user-sign';

const secretKey = env.jwt_secret;

export const JwtSign = (user: UserSign) => {
  return jwt.sign(user, secretKey, { expiresIn: '3d' });
}
