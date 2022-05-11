import { Module } from '@nestjs/common';
import { DatabaseModule } from './db.module';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { carsProviders } from './cars/cats.providers';
import { mailConfig } from './mail.config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [DatabaseModule, MailerModule.forRoot(mailConfig)],
  controllers: [CarsController],
  providers: [CarsService, ...carsProviders],
})
export class AppModule { }
