import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EncryptPasswordDto {
  @ApiProperty({ description: 'Senha a ser criptografada', minLength: 4 })
  @IsString()
  @MinLength(4)
  password: string;

  @ApiProperty({
    description: 'Número de rounds de salt para o bcrypt',
    minimum: 4,
    maximum: 20,
    default: 10,
    required: false,
  })
  saltRounds?: number = 10;
}
