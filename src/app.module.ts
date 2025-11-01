import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomPasswordModule } from './custom-password/custom-password.module';

@Module({
  imports: [CustomPasswordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
