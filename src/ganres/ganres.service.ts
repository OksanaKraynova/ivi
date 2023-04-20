/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ganre as GanresEntity } from './entities/ganres.entity';
import { Movie as MoviesEntity } from './entities/ganres_movies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GanresService {
  constructor(
    @InjectRepository(GanresEntity)
    private ganresRepository: Repository<GanresEntity>,
    @InjectRepository(MoviesEntity)
    private ganresMoviesRepository: Repository<MoviesEntity>,
  ) { }

  //** Create many ganres for movie
  async createMovieGanre(ganre: any): Promise<any> {
    const data = []

    for (const ganre_id of ganre.ganres) {
      data.push({ movie_id: ganre.movie_id, ganre_id })
    }

    const result = await this.ganresMoviesRepository
      .createQueryBuilder()
      .insert()
      .into(MoviesEntity)
      .values(data)
      .execute()

    return result
  }

  //** Create Ganres with/without Movie ID
  async createGanre(ganre: any): Promise<any> {
    await this.ganresRepository.create(ganre);
    const { id, movie_id, name } = await this.ganresRepository.save(ganre);

    if (movie_id) {
      const ganreMoviesDto = {
        movie_id,
        ganre_id: id
      }
      await this.ganresMoviesRepository.save(ganreMoviesDto);

      return {
        ganre: name,
        movie_id
      }
    }
    return {
      ganre: name,
      ganre_id: id
    }
  }

  //** Get All Ganres
  async getGanres(
    offset?: number,
    limit?: number,
  ): Promise<any> {

    const [items, count] = await this.ganresRepository.findAndCount({
      order: {
        id: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return {
      items,
      count
    };
  }

  //** Get Ganres By Movie ID
  async getMovieGanres(movie_id: number): Promise<any> {
    const movieGanres = await this.ganresMoviesRepository.find({
      where: { movie_id },
      relations: {
        ganre: true,
      }
    })

    if (movieGanres) {
      const ganres = [];
      for (const data of movieGanres) {
        //ganres.push(data.ganre); // {id:1, name:'ganre'}
        ganres.push(data.ganre.name);
      }

      const data = {
        movie_id,
        ganres
      }
      return data
    }

    throw new HttpException(
      'Ganre with this movie id does not exist',
      HttpStatus.NOT_FOUND);
  }

  //** Update Ganre Name
  async updateGanre(ganre_id: number, name: any): Promise<any> {
    const ganreExist = await this.ganresRepository.findOneBy({ id: ganre_id })

    if (ganreExist) {
      await this.ganresRepository.update(ganre_id, name);
      return {
        statusCode: HttpStatus.OK,
        message: 'User has been updated'
      }
    };

    throw new HttpException(
      'Ganre with this id was not found',
      HttpStatus.NOT_FOUND
    );
  }

  //** Delete Ganre
  async deleteGanre(ganre_id: number): Promise<any> {
    const movieExist = await this.ganresMoviesRepository.findOneBy({ ganre_id })

    if (!movieExist) {
      const result = await this.ganresRepository.delete(ganre_id);
      if (!result.affected) {
        throw new HttpException('Ganre with this id was not found', HttpStatus.NOT_FOUND,);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Ganre has been deleted'
      };
    } else {
      throw new HttpException(
        'Cannot delete, the genre has movie',
        HttpStatus.FORBIDDEN);
    }
  }
}
