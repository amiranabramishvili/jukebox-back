import { IsString, IsUrl } from "class-validator";

export class CreateFileDto {
    @IsString()
    fileName: string;

    @IsUrl()
    url: string;
}
