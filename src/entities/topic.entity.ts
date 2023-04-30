import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  topic: string;

  @Column({ nullable: false })
  description: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
