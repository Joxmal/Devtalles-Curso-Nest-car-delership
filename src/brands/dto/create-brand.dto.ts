import { IsNotEmpty, IsString, IsNumber, MinLength,  } from 'class-validator';


export class CreateBrandDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    readonly name: string;




}
