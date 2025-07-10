import { IsOptional, IsString } from 'class-validator';

export class SearchAuthorDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}
