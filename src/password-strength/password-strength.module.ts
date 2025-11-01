import { Module } from '@nestjs/common';
import { PasswordStrengthService } from './password-strength.service';
import { PasswordStrengthController } from './password-strength.controller';

@Module({
  providers: [PasswordStrengthService],
  controllers: [PasswordStrengthController]
})
export class PasswordStrengthModule {}
