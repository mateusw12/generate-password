import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PasswordStrengthDto {
  @ApiProperty({ description: 'Senha a ser verificada', minLength: 4 })
  @IsString()
  @MinLength(4)
  password: string;
}
