import { Car } from "./car.model";

export const carsProviders = [
  {
    provide: 'CARS_REPOSITORY',
    useValue: Car,
  },
];