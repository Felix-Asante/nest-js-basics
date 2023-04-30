import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMConfig } from './config/ormConfig';
import { TopicsModule } from './topics/topics.module';
import { TopicsService } from './topics-/topics-.service';

@Module({
  imports: [
    UserModule,
    CommentsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(ORMConfig),
    TopicsModule,
  ],
  controllers: [AppController],
  providers: [AppService, TopicsService],
})
export class AppModule {}
