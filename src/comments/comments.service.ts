import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { Repository } from 'typeorm';
import { createCommentDto } from './dto/createComment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async findComment(id: number) {
    return this.commentRepository.findOne({ where: { id } });
  }

  async create(body: createCommentDto) {
    const comment = this.commentRepository.create(body);
    return await this.commentRepository.save(comment);
  }

  async update(body: createCommentDto, id: number) {
    const comment = await this.findComment(id);

    if (!comment) throw new NotFoundException();
    return await this.commentRepository.update(id, body);
  }

  async delete(id: number) {
    const comment = await this.findComment(id);
    if (!comment) {
      throw new NotFoundException();
    }

    return await this.commentRepository.delete(id);
  }

  findUserComments(userId: number) {
    return this.commentRepository.find({ where: { user: { id: userId } } });
  }
  async findTopicComments(topicId: number) {
    return await this.commentRepository.find({
      where: { topic: { id: topicId } },
    });
  }
}
