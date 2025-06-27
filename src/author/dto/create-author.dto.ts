import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";
import { CreateMusicDto } from "src/music/dto/create-music.dto";

export class CreateAuthorDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    biography: string;

    @ValidateNested()
    @Type(() => CreateMusicDto)
    music: CreateMusicDto


}
