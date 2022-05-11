import { MailerModule } from "@nestjs-modules/mailer"
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export const mailConfig = {
    transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ilikobagirov@gmail.com', // generated ethereal user
            pass: '0504964647' // generated ethereal password
        },
    },
    defaults: {
        from: '"nest-modules" <user@outlook.com>', // outgoing email ID
    },
    template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
            strict: true,
        },
    },

}