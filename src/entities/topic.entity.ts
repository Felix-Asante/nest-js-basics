import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entity';
import { Category } from './category.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  topic: string;

  @Column({ nullable: false })
  description: string;

  @ManyToOne(() => Category, (category) => category.topic)
  category: Category;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
