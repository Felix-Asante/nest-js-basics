import { IsNumber, IsString } from 'class-validator';
import { Category } from 'src/entities/category.entity';

export class createTopicDto {
  @IsString()
  topic: string;
  @IsString()
  description: string;
  @IsNumber()
  category: Category;
}
