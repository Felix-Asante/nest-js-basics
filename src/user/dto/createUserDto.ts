import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsEmail,
  IsNumberString,
  Min,
  Length,
} from 'class-validator';

export class createUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  @Length(8)
  password: string;

  @IsNumberString()
  @Length(10)
  phone: string;
}

export class UpdateUserDto extends PartialType(createUserDto) {}
