import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ganre } from './ganres.entity';
import { Exclude } from 'class-transformer';

@Entity('ganres_movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: number;

  @ManyToOne(() => Ganre, (ganre) => ganre.ganres, {
    eager: false,
  })
  @JoinColumn({ name: 'ganre_id' })
  ganre: Ganre;

  @Column()
  @Exclude()
  ganre_id: number;
}
