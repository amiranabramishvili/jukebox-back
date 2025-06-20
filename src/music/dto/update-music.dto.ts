import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicDto } from './create-music.dto';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateMusicDto extends PartialType(CreateMusicDto) {
    @IsOptional()
    @IsString()
    name: string;

    @IsUrl()
    @IsOptional()
    url: string;
}
