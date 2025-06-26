import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateMusicDto } from "src/music/dto/create-music.dto";

export class CreateAlbumDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    releaseDate: string;

    @ValidateNested()
    @Type(() => CreateMusicDto)
    music: CreateMusicDto;

    @IsString()
    @IsNotEmpty()
    artistName: string;

}
