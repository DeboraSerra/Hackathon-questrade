import { UserLogin, UserRegister } from "../../domain/models";

export interface LoginRepositorie {
  handle(user: UserLogin): Promise<UserRegister>;
}