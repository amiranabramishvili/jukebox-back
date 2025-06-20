import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  releaseDate: string;

  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => Array.isArray(value) ? value : [value])
  musics: string[];

  @IsString()
  @IsNotEmpty()
  artistName: string;
}
