import { UserPayload, UserUpdate } from "../../models";

export interface Update {
  handle(user: UserUpdate): Promise<UserPayload>;
}
