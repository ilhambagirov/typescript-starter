import { Module } from '@nestjs/common';
import { DatabaseModule } from './db.module';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { carsProviders } from './cars/cats.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CarsController],
  providers: [CarsService, ...carsProviders],
})
export class AppModule { }
