import { Card } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARDS_SEED:Card[] = [
  {
    id: uuid(),
    name: 'S60',
    price: 250000
  },
  {
     id: uuid(),
    name: 'Civic',
    price: 120000
  },
  {
     id: uuid(),
    name: 'A4',
    price: 500000
  },
  {
     id: uuid(),
    name: 'Corolla',
    price: 100000
  },
  {
     id: uuid(),
    name: '320i',
    price: 450000
  }
]