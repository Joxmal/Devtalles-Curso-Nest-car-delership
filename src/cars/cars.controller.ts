import { Body, ConflictException, Controller, Delete, ForbiddenException, Get, HttpException, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDto } from './dto/create-cards-dto';
import { UpdateCardDto } from './dto/update-cards-dto';


@Controller('cars')
export class CarsController {


    constructor(private readonly carsService: CarsService){}

    @Get()
    getAllcars(){
        return this.carsService.getAllcars()
    }

    @Get(':id')
    getOneCar(@Param('id',ParseUUIDPipe) id:string ){    
        return this.carsService.getOneCar(id)
    }

    @Post()
    createCar(@Body() createCardDto:CreateCardDto){
        return this.carsService.createCar(createCardDto)
    }

    @Patch(':id')
    updatecart(
        @Param('id',ParseUUIDPipe) id:string,
        @Body() updateCardDto:UpdateCardDto 
    ){
        return this.carsService.updatecart(id,updateCardDto)
    }


    @Delete(':id')
    deleteCar(@Param('id',ParseUUIDPipe) id:string) {
        return this.carsService.deleteCar(id)
    }

}
