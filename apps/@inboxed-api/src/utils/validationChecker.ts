import { Request, Response, NextFunction } from 'express';
import { validationResult, Result, ValidationError } from 'express-validator';

type ErrorResponse = [{ msg: string; status: number }];

export const CheckValidation = (req: Request, res: Response, next: NextFunction): void | Response<ErrorResponse> => {
  const result: Result<ValidationError> = validationResult(req);

  if (!result.isEmpty()) {
    const rawErrors: ValidationError[] = result.array();

    const errors = rawErrors.map((error) => {
      return { msg: error.msg, status: 400 };
    });
    return res.status(400).json(errors);
  }

  return next();
};
