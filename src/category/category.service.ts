import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';
import { createCategoryDto } from './dto/createCategory.dto';
import { TopicsService } from 'src/topics/topics.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly topicService: TopicsService,
  ) {}

  async find() {
    return await this.categoryRepository.find();
  }

  async findCategory(id: number) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) throw new NotFoundException();

    return category;
  }

  async create(body: createCategoryDto) {
    const category = this.categoryRepository.create(body);
    return this.categoryRepository.save(category);
  }
  async update(id: number, body: createCategoryDto) {
    await this.findCategory(id);
    return this.categoryRepository.update(id, body);
  }

  async delete(id: number) {
    await this.findCategory(id);
    return this.categoryRepository.delete(id);
  }

  async findCategoryTopics(id: number) {
    await this.findCategory(id);
    return this.topicService.findByCategoryId(id);
  }
}
