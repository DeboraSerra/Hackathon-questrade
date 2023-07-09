export interface HttpRequest {
  body: any,
  params?: string
  cpf?: string
}

export interface HttpResponse {
  statusCode: number,
  body: any
}
