import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PasswordStrengthService } from './password-strength.service';
import { PasswordStrengthDto } from './dto/password-strength.dto';

@ApiTags('Password Strength')
@Controller('password-strength')
export class PasswordStrengthController {
  constructor(private readonly service: PasswordStrengthService) {}

  @Post()
  @ApiOperation({ summary: 'Verifica a força de uma senha' })
  @ApiResponse({ status: 200, description: 'Resultado da força da senha.' })
  check(@Body() dto: PasswordStrengthDto) {
    return this.service.checkStrength(dto.password);
  }
}
