"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const config = require("config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const serverConfig = config.get('server');
    const logger = new common_1.Logger('Tyche App');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    logger.log(`Tyche App Running in "${process.env.NODE_ENV}" mode`);
    if (process.env.NODE_ENV !== 'production') {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('TYCHE REST APIs')
            .setDescription('Supported Rest APIs for the Tyche Application')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const port = process.env.TYCHE_PORT || serverConfig.port;
    await app.listen(port);
    logger.log(`Listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map