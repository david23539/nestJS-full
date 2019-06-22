import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseAdapterPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value.age, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    } else {
      value.age = val;
      return value;
    }
  }
}
