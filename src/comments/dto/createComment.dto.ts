import { IsNumber, IsString } from 'class-validator';
import { User } from 'src/entities';
import { Topic } from 'src/entities/topic.entity';

export class createCommentDto {
  @IsString()
  description: string;
  @IsNumber()
  user: User;
  @IsNumber()
  topic: Topic;
}
