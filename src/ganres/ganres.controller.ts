import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { GanresService } from './ganres.service';
import { PaginationParams } from '../utils/pagination-params';
import { MessagePattern } from '@nestjs/microservices';

@Controller('ganres')
export class GanresController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly ganresService: GanresService) { }

  //** Connect Movie with Ganres
  @Post()
  @MessagePattern({ cmd: 'createMovieGanre' })
  @HttpCode(HttpStatus.CREATED)
  async createMovieGanre(@Body() ganreDto: any): Promise<any> {
    return this.ganresService.createMovieGanre(ganreDto);
  }

  //** Create Ganre with/without Movie
  @Post('movie')
  @MessagePattern({ cmd: 'createGanre' })
  @HttpCode(HttpStatus.CREATED)
  async createGanre(@Body() ganre: any): Promise<any> {
    return this.ganresService.createGanre(ganre);
  }

  @Get()
  @MessagePattern({ cmd: 'getGanres' })
  async getGanres(@Query() { offset, limit }: PaginationParams): Promise<any> {
    return this.ganresService.getGanres(offset, limit);
  }

  @Get(':movie_id')
  @MessagePattern({ cmd: 'getMoviesGanres' })
  async getMoviesGanres(@Param('movie_id') movie_id: number): Promise<any> {
    return this.ganresService.getMovieGanres(movie_id);
  }

  @Patch(':ganre_id')
  @MessagePattern({ cmd: 'updateGanre' })
  async updateGanre(
    @Param('ganre_id') ganre_id: number,
    @Body() ganre_name: any,
  ): Promise<any> {
    return this.ganresService.updateGanre(ganre_id, ganre_name);
  }

  @Delete(':ganre_id')
  @MessagePattern({ cmd: 'deleteGanre' })
  async deleteGanre(@Param('ganre_id') ganre_id: number): Promise<any> {
    return this.ganresService.deleteGanre(ganre_id);
  }
}
