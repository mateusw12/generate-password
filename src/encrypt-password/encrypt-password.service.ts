import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EncryptPasswordDto } from './dto/encrypt-password.dto';
import * as argon2 from 'argon2';

@Injectable()
export class EncryptPasswordService {
  async encrypt(dto: EncryptPasswordDto): Promise<string> {
    const saltRounds = dto.saltRounds ?? 10;
    const hash = await bcrypt.hash(dto.password, saltRounds);
    return hash;
  }

  async modernEncrypt(dto: EncryptPasswordDto): Promise<string> {
    const timeCost = dto.saltRounds ?? 3; // padrão 3 iterações
    const memoryCost = 2 ** 16; // 64MB de memória
    const parallelism = 1; // paralelismo simples

    return await argon2.hash(dto.password, {
      type: argon2.argon2id,
      timeCost,
      memoryCost,
      parallelism,
    });
  }

  async modernCompare(password: string, hash: string): Promise<boolean> {
    return await argon2.verify(hash, password);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
