import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateMusicDto } from "src/music/dto/create-music.dto";

export class CreatePlaylistDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    userId: string

   
}
