import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from 'src/entities/topic.entity';
import { Repository } from 'typeorm';
import { createTopicDto } from './dto/createTopic.dto';
import { updateTopicDto } from './dto/updateTopic.dto';
import { CommentsService } from 'src/comments/comments.service';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>,
    private readonly commentService: CommentsService,
  ) {}

  async findTopics() {
    return this.topicRepository.find();
  }

  async findTopic(id: number) {
    const topic = await this.topicRepository.findOne({ where: { id } });
    if (!topic) throw new NotFoundException();
    return topic;
  }
  async create(body: createTopicDto) {
    const topic = this.topicRepository.create(body);
    return this.topicRepository.save(topic);
  }

  async update(id: number, body: updateTopicDto) {
    await this.findTopic(id);
    return this.topicRepository.update(id, body);
  }

  async delete(id: number) {
    await this.findTopic(id);
    return this.topicRepository.delete(id);
  }

  async findComments(id: number) {
    await this.findTopic(id);
    return await this.commentService.findTopicComments(id);
  }

  async findByCategoryId(id: number) {
    return this.topicRepository.find({ where: { category: { id } } });
  }
}
