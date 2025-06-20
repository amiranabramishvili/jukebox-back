import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateMusicDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsUrl()
  @IsOptional()
  url: string;
}
