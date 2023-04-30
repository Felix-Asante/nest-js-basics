import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { createCategoryDto } from './dto/createCategory.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAllCategory() {
    return await this.categoryService.find();
  }
  @Post()
  async createCategory(@Body() body: createCategoryDto) {
    return await this.categoryService.create(body);
  }

  @Get(':id/topics')
  async findCategoryTopics(@Param('id') id: number) {
    return await this.categoryService.findCategoryTopics(id);
  }
  @Put(':id')
  async updateCategory(
    @Param('id') id: number,
    @Body() body: createCategoryDto,
  ) {
    return await this.categoryService.update(id, body);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    return await this.categoryService.delete(id);
  }
}
