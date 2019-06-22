import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './common/common.module';
import { logger } from './logger.middleware';
import { CatsController } from './cats/cats.controller';
import { AuthServiceService } from './auth-service/auth-service.service';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService, AuthServiceService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      // .apply(LoggerMiddleware) // a nivel de clase
      .apply(logger) //a nivel de funcion
      .exclude({path: 'cats/crear', method: RequestMethod.POST}) // una forma de excluir rutas
      // .forRoutes('cats'); // todos los metodos de cats
      // .forRoutes({path: 'cats/asinc', method: RequestMethod.GET}); // todos los metodos de cats por get
      // .forRoutes({path: 'ca*s', method: RequestMethod.ALL}); // todos los metodos comodines
      .forRoutes(CatsController); // todos los metodos del Controller por clase

  }
}
