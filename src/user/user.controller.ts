import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { createUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentsService } from 'src/comments/comments.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentsService,
  ) {}

  @Get('/')
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') userId: number) {
    return this.userService.findById(userId);
  }

  //    can also access field from the body
  // @Body('field')
  @Post('')
  async create(@Body() body: createUserDto) {
    return this.userService.create(body);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: createUserDto) {
    return this.userService.updateUser(id, body);
  }

  @Get(':id/comments')
  getUserComments(@Param('id') id: string) {
    return this.commentService.findUserComments(id);
  }
}
