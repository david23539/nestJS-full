import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class JoiValidationPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: Object);
    transform(value: any, metadata: ArgumentMetadata): any;
}
