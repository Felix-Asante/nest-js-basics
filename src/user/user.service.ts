import { Injectable } from '@nestjs/common';
import { UpdateUserDto, createUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findById(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async create(body: createUserDto) {
    const user = this.userRepository.create(body);
    return await this.userRepository.save(user);
  }

  async updateUser(id: string, body: UpdateUserDto) {
    return await this.userRepository.update(id, body);
  }
}
