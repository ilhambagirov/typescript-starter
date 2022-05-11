import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import { error } from 'console';
import e from 'express';
import { Car } from './car.model';
import { CarRequestDto } from './Car.request.dto';
import { SentMessageInfo } from 'nodemailer';

@Injectable()
export class CarsService {
    constructor(
        @Inject('CARS_REPOSITORY')
        private carsRepository: typeof Car,
        private readonly mailerService: MailerService
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

    async sendEmail(content: string, email: string): Promise<any> {
        this.mailerService.sendMail({
            to: email,
            from: 'ilikobagirov@gmail.com',
            subject: 'Really ??? ✔',
            text: content,
            html: `<b>${content}</b>`,
        }).then()
    }
}