import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { createCommentDto } from './dto/createComment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}
  @Post()
  async createComment(@Body() body: createCommentDto) {
    return await this.commentService.create(body);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: number) {
    return await this.commentService.delete(id);
  }

  @Put(':id')
  async updateComment(@Param('id') id: number, @Body() body: createCommentDto) {
    return await this.commentService.update(body, id);
  }
}
