import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EncryptPasswordService } from './encrypt-password.service';
import { EncryptPasswordDto } from './dto/encrypt-password.dto';
import { ComparePasswordDto } from './dto/compare-password.dto';

@ApiTags('Password Encryption')
@Controller('encrypt-password')
export class EncryptPasswordController {
  constructor(private readonly service: EncryptPasswordService) {}

  @Post("encrypt")
  @ApiOperation({ summary: 'Criptografa uma senha usando bcrypt' })
  @ApiResponse({ status: 201, description: 'Senha criptografada com sucesso.' })
  async encrypt(@Body() dto: EncryptPasswordDto): Promise<{ hash: string }> {
    const hash = await this.service.encrypt(dto);
    return { hash };
  }

  @Post("modern-encrypt")
  @ApiOperation({ summary: 'Criptografa uma senha usando bcrypt' })
  @ApiResponse({ status: 201, description: 'Senha criptografada com sucesso.' })
  async modernEncrypt(@Body() dto: EncryptPasswordDto): Promise<{ hash: string }> {
    const hash = await this.service.modernEncrypt(dto);
    return { hash };
  }

  @Post('modern-compare')
  @ApiOperation({ summary: 'Compara uma senha com um hash existente' })
  @ApiResponse({ status: 200, description: 'Resultado da comparação.' })
  async modernCompare(@Body() dto: ComparePasswordDto): Promise<{ match: boolean }> {
    const match = await this.service.modernCompare(dto.password, dto.hash);
    return { match };
  }

  @Post('compare')
  @ApiOperation({ summary: 'Compara uma senha com um hash existente' })
  @ApiResponse({ status: 200, description: 'Resultado da comparação.' })
  async compare(@Body() dto: ComparePasswordDto): Promise<{ match: boolean }> {
    const match = await this.service.compare(dto.password, dto.hash);
    return { match };
  }
}
