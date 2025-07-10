import { IsOptional, IsString } from 'class-validator';

export class SearchMusicDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  url?: string;
}
