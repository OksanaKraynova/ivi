/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GanresService } from './ganres.service';
import { Ganre } from './entities/ganres.entity';
import { GanresController } from './ganres.controller';
import { Movie } from './entities/ganres_movies.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ganre]),
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [GanresController],
  providers: [GanresService],
})
export class GanresModule { }
