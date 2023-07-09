import { ServerError } from "../errors";
import { HttpResponse } from "../protocols/http";

export const serverError = (): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export const notFound = (error: Error): HttpResponse => {
  return {
    statusCode: 404,
    body: error
  }
}

export const ok = (result: any): HttpResponse => {
  return {
    statusCode: 200,
    body: result
  }
}

export const created = (result: any): HttpResponse => {
  return {
    statusCode: 201,
    body: result
  }
}

export const noContent = (): HttpResponse => {
  return {
    statusCode: 204,
    body: "No Content"
  }
}