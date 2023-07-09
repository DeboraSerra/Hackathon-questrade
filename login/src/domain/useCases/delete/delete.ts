export interface Delete {
  handle(cpf: string): Promise<void>;
}
