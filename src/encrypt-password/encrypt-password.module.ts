import { Module } from '@nestjs/common';
import { EncryptPasswordService } from './encrypt-password.service';
import { EncryptPasswordController } from './encrypt-password.controller';

@Module({
  providers: [EncryptPasswordService],
  controllers: [EncryptPasswordController]
})
export class EncryptPasswordModule {}
