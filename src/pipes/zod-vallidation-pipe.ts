import {
    PipeTransform,
    ArgumentMetadata,
    BadRequestException
} from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';
import { fromZodError } from 'zod-validation-error';


export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodSchema) { }

    transform(value: unknown) {
        try {
            this.schema.parse(value);

        } catch (error) {
            // Se for um erro de validação do Zod, formatamos o erro e lançamos uma exceção BadRequest
            if (error instanceof ZodError) {
                throw new BadRequestException({ // Aqui estamos lançando uma exceção BadRequest com um objeto contendo a mensagem de erro, o status code e os erros formatados
                    message: 'Validation failed',
                    statusCode: 400,
                    errors: fromZodError(error) // Aqui estamos formatando os erros de validação do Zod
                })
            }

            throw new BadRequestException('Validation failed')
        }

        return value;
    }
}
