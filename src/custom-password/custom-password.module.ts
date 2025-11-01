import { Module } from '@nestjs/common';
import { CustomPasswordService } from './custom-password.service';
import { CustomPasswordController } from './custom-password.controller';

@Module({
  providers: [CustomPasswordService],
  controllers: [CustomPasswordController]
})
export class CustomPasswordModule {}
