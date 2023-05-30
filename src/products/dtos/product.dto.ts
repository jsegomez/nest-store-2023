import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNumber, IsPositive, IsUrl, IsNotEmpty } from "class-validator";

export class CreateProductDTO{
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  readonly image: string;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO){}

