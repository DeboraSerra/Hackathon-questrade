import { UserLogin, UserPayload } from "../../models";

export interface Login {
  handle(user: UserLogin): Promise<UserPayload>;
}
