import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { LocalStrategy } from "./strategies/local.strategy";
import { jwtConstants } from "./constants/jwt.constants";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
 imports: [JwtModule.register({ secret: jwtConstants.secret, signOptions: { expiresIn: '60d' } }), UserModule],
 controllers: [AuthController],
 providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
