import { HttpStatus } from '@nestjs/common';
import { ApiExceptionInfoType } from 'src/exception/type/apiexceptioninfo.type';

export const ERROR_MESSAGE: { [key: string]: ApiExceptionInfoType } = {
    VALIDATION_ERROR: { status: HttpStatus.BAD_REQUEST, code: 200001, message: 'bad request.' },
    UNKNOWN_HTTPEXCEPTION: { status: HttpStatus.INTERNAL_SERVER_ERROR, code: 900001, message: 'unknown httpexception occured.' },
    UNEXPECTED_ERROR: { status: HttpStatus.INTERNAL_SERVER_ERROR, code: 999999, message: 'unexpected error occured.' },
};
