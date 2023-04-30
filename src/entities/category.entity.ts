import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Topic } from './topic.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  label: string;

  @OneToMany(() => Topic, (topic) => topic.category)
  topic: Topic;
}
