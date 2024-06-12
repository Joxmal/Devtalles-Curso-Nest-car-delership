import { IsNotEmpty, IsString, IsNumber, MinLength,  } from 'class-validator';


export class CreateCardDto {
   
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price:number

  
}