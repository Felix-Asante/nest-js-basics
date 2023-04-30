import { IsOptional, IsString } from 'class-validator';

export class updateTopicDto {
  @IsString()
  @IsOptional()
  topic: string;
  @IsString()
  @IsOptional()
  description: string;
}
