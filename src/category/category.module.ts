import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { TopicsService } from 'src/topics/topics.service';
import { Topic } from 'src/entities/topic.entity';
import { CommentsService } from 'src/comments/comments.service';
import { Comment } from 'src/entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Topic, Comment])],
  providers: [CategoryService, TopicsService, CommentsService],
  controllers: [CategoryController],
})
export class CategoryModule {}
