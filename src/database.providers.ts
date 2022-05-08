import { Sequelize } from 'sequelize-typescript';
import { Car } from './cars/car.model';
export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: '127.0.0.1',
                port: 5432,
                username: 'postgres',
                password: 'ilham123',
                database: 'firstNestApp',
                define: {
                    timestamps: false
                },
            });
            sequelize.addModels([Car]);
            await sequelize.sync();
            return sequelize;
        },
    },
];