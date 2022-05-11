import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = function (app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('First Nest App')
        .setDescription('Yayyy')
        .setVersion('1.0')
        .addTag('NestJs')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
}
