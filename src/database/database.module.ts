/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Movie } from '../ganres/entities/ganres_movies.entity';
import { Ganre } from '../ganres/entities/ganres.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('POSTGRES_URL'),
        synchronize: true,
        entities: [Movie],
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule { }
