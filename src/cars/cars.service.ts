import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

  private cards = [
    {
      id: 1,
      name: "toyota",
      price: 100,
    },
    {
      id: 3,
      name: "toyota-version-new",
      price: 200,
    },
    {
      id: 4,
      name: "aveo",
      price: 150,
    }
  ];

  getAllcars() {
    return this.cards
  }

  getOneCar(id: number) {
    const car = this.cards.find((c) => c.id ===id) ;
    if (!car) throw new NotFoundException(`el usuario ${id} no existe`);
    return car
  }
}
