import { IsString } from 'class-validator';

export class createCategoryDto {
  @IsString()
  label: string;
}
