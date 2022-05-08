import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Car } from './car.model';
import { CarRequestDto } from './Car.request.dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private catsService: CarsService) { }

    @Get()
    async findAll(): Promise<Car[]> {
        return await this.catsService.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id' })
    async findOne(@Param() params): Promise<Car> {
        return await this.catsService.findOne(params.id);
    }

    @Post()
    async create(@Body() body: CarRequestDto): Promise<Car> {
        return await this.catsService.create(body);
    }


    @Put(':id')
    @ApiParam({ name: 'id' })
    async update(@Param() params, @Body() body: CarRequestDto) {
        return await this.catsService.update(params.id, body);
    }

    @Delete(':id')
    @ApiParam({ name: 'id' })
    async delete(@Param() params) {
        return await this.catsService.delete(params.id);
    }
}
