import {
  IsInt,
  Min,
  Max,
  IsBoolean,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PasswordType } from 'src/common/enum/password-type.enum';

export class CustomPasswordDto {
  @ApiProperty({ description: 'Tipo de senha', enum: PasswordType })
  @IsEnum(PasswordType)
  type: PasswordType;

  @ApiProperty({ description: 'Tamanho da senha', minimum: 4, maximum: 128 })
  @IsInt()
  @Min(4)
  @Max(128)
  length: number;

  @ApiProperty({
    description: 'Quantidade de senhas',
    minimum: 1,
    maximum: 100,
    default: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(100)
  count?: number = 1;

  @ApiProperty({
    description: 'Incluir letras maiúsculas',
    required: false,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  uppercase?: boolean = true;

  @ApiProperty({
    description: 'Incluir letras minúsculas',
    required: false,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  lowercase?: boolean = true;

  @ApiProperty({
    description: 'Incluir números',
    required: false,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  numbers?: boolean = true;

  @ApiProperty({
    description: 'Incluir símbolos',
    required: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  symbols?: boolean = false;
}
