import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  findUserComments(userId: string) {
    return [];
  }
}
