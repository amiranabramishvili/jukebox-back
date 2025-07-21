import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { UserRepository } from "src/user/user.repository";
import * as brcypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { RegisterUserDto } from "./dto/register-user.dto";

@Injectable()
export class AuthService {
    constructor(private userRepository: UserRepository, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string) {
      const user = await this.userRepository.findByEmail(email);
      if (!user) {
        throw new UnauthorizedException();
      }
      
      const isPasswordValid = user.password && await brcypt.compare(pass, user.password);  

      if (!isPasswordValid) {
        return null;
      }

      const { password, ...rest } = user;
      return rest;
    }

    async generateToken(userId: number) {
        const token = await this.jwtService.signAsync({userId});
        return { token };
    }

    async register(registerUserDto: RegisterUserDto) {
      const createUserDto = {
        ...registerUserDto,
        name: registerUserDto.name || `user_${Date.now()}`,
        password: await brcypt.hash(registerUserDto.password, 10)
      };
      const user = await this.userRepository.create(createUserDto);
      
      
      if (!user) {
        throw new InternalServerErrorException('Can not register');
      }

      return await this.generateToken(user.id);
    }
}