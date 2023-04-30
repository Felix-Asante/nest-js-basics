import { IsString } from 'class-validator';

export class createTopicDto {
  @IsString()
  topic: string;
  @IsString()
  description: string;
}
