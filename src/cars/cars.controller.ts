import { ConflictException, Controller, ForbiddenException, Get, HttpException, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';


@Controller('cars')
export class CarsController {


    constructor(private readonly carsService: CarsService){}

    @Get()
    getAllcars(){
        return this.carsService.getAllcars()
    }

    @Get(':id')
    getOneCar(@Param('id',ParseIntPipe) id:number ){    
        return this.carsService.getOneCar(id)
    }

}
