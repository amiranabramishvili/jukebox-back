import { IsOptional, IsString } from 'class-validator';

export class SearchAlbumDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  artistName?: string;
}
