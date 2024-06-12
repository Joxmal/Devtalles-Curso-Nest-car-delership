import { IsNotEmpty, IsString, IsNumber, IsOptional,  } from 'class-validator';


export class UpdateCardDto {
   
  @IsString()
  @IsOptional()
  readonly name?: string;

  
  @IsNumber()
  @IsOptional()
  readonly price?:number

  
}