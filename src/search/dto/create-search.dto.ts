import { IsOptional, IsString } from "class-validator";

export class CreateSearchDto {
    @IsString()
    query: string

    @IsOptional()
    @IsString()
    type?: string

    @IsOptional()
    @IsString()
    userId?:string

    @IsString()
    keyword: string
}
