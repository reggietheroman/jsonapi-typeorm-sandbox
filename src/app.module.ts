import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JsonApiModule } from '@klerick/json-api-nestjs';
import { TypeOrmJsonApiModule } from '@klerick/json-api-nestjs-typeorm';
import { Users } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'app_user',
      password: 'secret',
      database: 'app_db',
      entities: [Users],
      synchronize: false, // set to fales in production
      logging: false,
    }),
    JsonApiModule.forRoot(TypeOrmJsonApiModule, {
      entities: [Users],
      options: {
        debug: true,
        requiredSelectField: false,
        operationUrl: 'operation',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
