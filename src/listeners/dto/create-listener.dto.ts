import { IsNumber } from "class-validator";

export class CreateListenerDto {
    @IsNumber()
    userId!: number;

    @IsNumber()
    musicId!: number;
}
