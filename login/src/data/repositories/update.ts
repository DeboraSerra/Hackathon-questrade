import { UserRegister, UserUpdate } from "../../domain/models";

export interface UpdateRepositorie {
  handle(user: UserUpdate): Promise<UserRegister>;
}
