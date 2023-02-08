import { RequestMethod, Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
//import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { logger } from './common/middleware/logger.middleware'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsController } from './cats/cats.controller'
import { CatsModule } from './cats/cats.module'

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      //.apply(LoggerMiddleware)
      .apply(logger)
      .exclude(
        //{ path: 'cats', method: RequestMethod.GET },
        //'cats/?(.*)'
        ''
      )
      .forRoutes(CatsController)
  }
}
