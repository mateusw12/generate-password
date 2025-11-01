import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComparePasswordDto {
  @ApiProperty({ description: 'Senha a ser verificada', minLength: 4 })
  @IsString()
  @MinLength(4)
  password: string;

  @ApiProperty({ description: 'Hash para comparar a senha' })
  @IsString()
  hash: string;
}
