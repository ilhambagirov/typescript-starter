import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { response } from 'express';
import { request } from 'http';
import { Car } from './car.model';
import { CarRequestDto } from './Car.request.dto';
import { CarsService } from './cars.service';
import { MailResponseDto } from './mail.response.dto';

@Controller('cars')
export class CarsController {
    constructor(private catsService: CarsService) { }

    @Get('list')
    async findAll(): Promise<Car[]> {
        return await this.catsService.findAll();
    }

    @Get('detail/:id')
    @ApiParam({ name: 'id' })
    async findOne(@Param() params): Promise<Car> {
        return await this.catsService.findOne(params.id);
    }

    @Post('create')
    async create(@Body() body: CarRequestDto): Promise<Car> {
        return await this.catsService.create(body);
    }


    @Put('edit/:id')
    @ApiParam({ name: 'id' })
    async update(@Param() params, @Body() body: CarRequestDto) {
        return await this.catsService.update(params.id, body);
    }

    @Delete('/delete/:id')
    @ApiParam({ name: 'id' })
    async delete(@Param() params) {
        return await this.catsService.delete(params.id);
    }

    @Post('/sendMail/')
    async senMaild(@Body() body: MailResponseDto) {
        return await this.catsService.sendEmail(body.content, body.email);
    }
}
