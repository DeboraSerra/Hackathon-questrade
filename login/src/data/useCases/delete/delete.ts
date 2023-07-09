import { Delete } from "../../../domain/useCases/delete/delete";
import { DeleteRepositorie } from "../../repositories";

export class DeleteAdapter implements Delete {
  constructor(
    private repositorie: DeleteRepositorie
  ) {}

  async handle(cpf: string): Promise<void> {
    await this.repositorie.handle(cpf);
  }
}
