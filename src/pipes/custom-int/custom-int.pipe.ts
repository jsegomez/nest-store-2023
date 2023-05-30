import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const result = parseInt(value, 10);
    if(isNaN(result)){
      throw new BadRequestException(`Parámetro: ${value} no es un número`)
    }

    return value;
  }
}










