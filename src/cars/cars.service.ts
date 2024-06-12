import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { UpdateCardDto,CreateCardDto } from './dto';
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
    let cardDB = this.getOneCar(id)
    const { name, price } = updateCardDto;
    if (name) cardDB.name = name;
    if (price) cardDB.price = price;
    return {
      message: `el carro ${id} fue actualizado`,
      ...cardDB
    };
  }

  deleteCar(id: string){

    let cardDB = this.getOneCar(id)
    this.cards.splice(this.cards.indexOf(cardDB), 1)
    return {
      message: `el carro ${id} fue eliminado`
    }
  }
}
