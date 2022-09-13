export interface ErrorMessage {
  code: string;
  message: string;
}

export interface DataResponse<T> {
  errors: ErrorMessage[];
  response: T[];
}

export interface ErrorResponse {
  success: boolean;
  errorMessage: ErrorMessage;
}
