import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-cards-dto';
import { Card } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { UpdateCardDto } from './dto/update-cards-dto';

@Injectable()
export class CarsService {

  private cards: Card[] = [
    {
      id: "77892161-59e0-45b9-bdb1-eae52a2cdc73" ,
      name: "toyota",
      price: 100,
    },
    {
      id: uuid(),
      name: "toyota-version-new",
      price: 200,
    },
    {
      id: uuid(),
      name: "aveo",
      price: 150,
    }
  ];

  getAllcars() {
    return this.cards
  }

  getOneCar(id: string) {
    console.log(id)
    const car = this.cards.find((c) => c.id ===id) ;
    if (!car) throw new NotFoundException(`el carro ${id} no existe`);
    return car
  }

  createCar(cardObject:CreateCardDto){

    const findCar = this.cards.find((c) => c.name === cardObject.name)
    if (findCar) throw new NotFoundException(`el carro ${cardObject.name} ya existe`)

    console.log(cardObject)

    const cardNew = {
      id: uuid(),
      ...cardObject
    }

    this.cards.push(
      cardNew
    )
    return cardNew
  }

  updatecart(id: string, updateCardDto:UpdateCardDto) {
    console.log(id, updateCardDto)
    return {
      message: `el carro ${id} fue actualizado`,
      Object: updateCardDto
    }
  }

  deleteCar(id: string){
     console.log(id)
    const index = this.cards.findIndex((c) => c.id ===id) 
    if (index === -1) throw new NotFoundException(`el carro ${id} no existe`)
    this.cards.splice(index, 1)
    return {
      message: `el carro ${id} fue eliminado`
    }
  }
}
