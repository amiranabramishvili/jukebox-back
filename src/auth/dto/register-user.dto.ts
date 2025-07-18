import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class RegisterUserDto {
    @IsString()
    name?: string;

    @IsEmail()
    email!: string;

    @IsStrongPassword()
    password!: string;
}