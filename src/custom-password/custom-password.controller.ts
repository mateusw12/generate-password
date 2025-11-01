import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CustomPasswordDto } from './dto/custom-password.dto';
import { CustomPasswordService } from './custom-password.service';

@ApiTags('Custom Password')
@Controller('custom-passwords')
export class CustomPasswordController {
  constructor(private readonly customPasswordService: CustomPasswordService) {}

  @Post()
  @ApiOperation({ summary: 'Gerar senha customizada' })
  @ApiResponse({
    status: 201,
    description: 'Senhas geradas com sucesso',
    type: [String],
  })
  generateCustom(@Body() dto: CustomPasswordDto): string[] {
    return this.customPasswordService.generate(dto);
  }
}
