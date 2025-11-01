import { Injectable } from '@nestjs/common';
import { CustomPasswordDto } from './dto/custom-password.dto';
import { PasswordType } from '../common/enum/password-type.enum';

@Injectable()
export class CustomPasswordService {
  private readonly UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  private readonly NUMBERS = '0123456789';
  private readonly SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  generate(dto: CustomPasswordDto): string[] {
    switch (dto.type) {
      case PasswordType.CUSTOM:
        return this.generateCustom(dto);
      case PasswordType.SIMPLE:
        return this.generateSimple(dto);
      default:
        throw new Error('Tipo de senha inválido');
    }
  }

  private generateCustom(dto: CustomPasswordDto): string[] {
    let chars = '';
    if (dto.uppercase) chars += this.UPPERCASE;
    if (dto.lowercase) chars += this.LOWERCASE;
    if (dto.numbers) chars += this.NUMBERS;
    if (dto.symbols) chars += this.SYMBOLS;

    if (!chars.length) throw new Error('Pelo menos um tipo de caractere deve ser selecionado');

    const passwords: string[] = [];
    for (let i = 0; i < (dto.count || 1); i++) {
      let password = '';
      for (let j = 0; j < dto.length; j++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
      passwords.push(password);
    }
    return passwords;
  }

  private generateSimple(dto: CustomPasswordDto): string[] {
    const chars = this.LOWERCASE + this.NUMBERS; // Apenas letras minúsculas e números
    const passwords: string[] = [];
    for (let i = 0; i < (dto.count || 1); i++) {
      let password = '';
      for (let j = 0; j < dto.length; j++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
      passwords.push(password);
    }
    return passwords;
  }
}
