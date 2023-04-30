import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommentsService } from 'src/comments/comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Comment } from 'src/entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Comment])],
  controllers: [UserController],
  providers: [UserService, CommentsService],
})
export class UserModule {}
