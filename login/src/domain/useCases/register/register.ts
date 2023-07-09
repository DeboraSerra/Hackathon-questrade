import { UserPayload, UserRegister } from "../../models";

export interface Register {
  handle(user: UserRegister): Promise<UserPayload>;
}
