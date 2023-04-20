import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Movie } from './ganres_movies.entity';

@Entity()
export class Ganre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Movie, (movie) => movie.ganre)
  ganres: Movie[];
}
