import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomPasswordModule } from './custom-password/custom-password.module';
import { EncryptPasswordModule } from './encrypt-password/encrypt-password.module';

@Module({
  imports: [CustomPasswordModule, EncryptPasswordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
