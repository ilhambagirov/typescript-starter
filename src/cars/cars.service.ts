import { Inject, Injectable } from '@nestjs/common';
import { Car } from './car.model';
import { CarRequestDto } from './Car.request.dto';

@Injectable()
export class CarsService {
    constructor(
        @Inject('CARS_REPOSITORY')
        private carsRepository: typeof Car
    ) { }
    async findAll(): Promise<Car[]> {
        return await this.carsRepository.findAll<Car>();
    }

    async findOne(id: number): Promise<Car> {
        return await this.carsRepository.findOne<Car>({
            where: {
                id
            }
        });
    }

    async create(car: CarRequestDto): Promise<Car> {
        return await this.carsRepository.create({ ...car });
    }

    async update(id: number, car: CarRequestDto) {
        return await this.carsRepository.update({ ...car }, { where: { id } });
    }

    async delete(id: number) {
        return await this.carsRepository.destroy({
            where: {
                id
            }
        });
    }
}
