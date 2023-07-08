import { UserRegister } from "../../domain/models";

export interface RegisterRepositorie {
  handle(user: UserRegister): Promise<void>;
}
