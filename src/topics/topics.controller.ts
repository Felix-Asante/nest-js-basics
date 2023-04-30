import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createTopicDto } from './dto/createTopic.dto';
import { TopicsService } from './topics.service';
import { updateTopicDto } from './dto/updateTopic.dto';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicService: TopicsService) {}

  @Get()
  async findTopics() {
    return await this.topicService.findTopics();
  }

  @Post()
  async createTopic(@Body() body: createTopicDto) {
    return await this.topicService.create(body);
  }

  @Put(':id')
  async updateTopic(@Body() body: updateTopicDto, @Param('id') id: number) {
    return await this.topicService.update(id, body);
  }

  @Delete(':id')
  async deleteTopic(@Param('id') id: number) {
    return await this.topicService.delete(id);
  }

  @Get(':id')
  async findTopic(@Param('id') id: number) {
    return await this.topicService.findTopic(id);
  }

  @Get(':id/comments')
  async findTopicComments(@Param('id') id: number) {
    return this.topicService.findComments(id);
  }
}
