import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseAdapterPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
