import jwt from 'jsonwebtoken';
import env from "../../main/config/env";
import { JwtSign, UserSign } from '../../domain/models/user-sign';

const secretKey = env.jwt_secret;

export class JwtSignAdapter implements JwtSign {
  handle(user: UserSign): string {
    return jwt.sign(user, secretKey, { expiresIn: '3d' });
  }
}
