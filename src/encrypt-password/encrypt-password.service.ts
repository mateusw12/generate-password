import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EncryptPasswordDto } from './dto/encrypt-password.dto';

@Injectable()
export class EncryptPasswordService {
  async encrypt(dto: EncryptPasswordDto): Promise<string> {
    const saltRounds = dto.saltRounds ?? 10;
    const hash = await bcrypt.hash(dto.password, saltRounds);
    return hash;
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
