export interface ValidateResponse {
  error: 'InvalidParam' | 'MissingParam' | '';
  param: string; 
}
