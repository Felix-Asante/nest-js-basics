import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { Topic } from 'src/entities/topic.entity';
import { CommentsService } from 'src/comments/comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Topic])],
  providers: [TopicsService, CommentsService],
  controllers: [TopicsController],
})
export class TopicsModule {}
