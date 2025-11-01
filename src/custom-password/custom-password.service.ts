import { Injectable } from '@nestjs/common';
import { CustomPasswordDto } from './dto/custom-password.dto';
import { PasswordType } from '../common/enum/password-type.enum';

@Injectable()
export class CustomPasswordService {
  private readonly UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  private readonly NUMBERS = '0123456789';
  private readonly SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  private readonly CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
  private readonly VOWELS = 'aeiou';

  private readonly HEX_CHARS_LOWER = '0123456789abcdef';
  private readonly HEX_CHARS_UPPER = '0123456789ABCDEF';

  private readonly BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  generate(dto: CustomPasswordDto): string[] {
    switch (dto.type) {
      case PasswordType.CUSTOM:
        return this.generateCustom(dto);
      case PasswordType.SIMPLE:
        return this.generateSimple(dto);
      case PasswordType.PRONUNCIABLE:
        return this.generatePronunciable(dto);
      case PasswordType.HEX:
        return this.generateHex(dto);
      case PasswordType.BASE64:
        return this.generateBase64(dto);
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

    return this.generateFromChars(chars, dto);
  }

  private generateSimple(dto: CustomPasswordDto): string[] {
    const chars = this.LOWERCASE + this.NUMBERS;
    return this.generateFromChars(chars, dto);
  }

  private generatePronunciable(dto: CustomPasswordDto): string[] {
    const passwords: string[] = [];
    const useUppercase = dto.uppercase ?? true;
    const useNumbers = dto.numbers ?? true;

    for (let i = 0; i < (dto.count || 1); i++) {
      let password = '';
      let useConsonant = true;

      for (let j = 0; j < dto.length; j++) {
        let char = '';
        if (useConsonant) {
          char = this.CONSONANTS[Math.floor(Math.random() * this.CONSONANTS.length)];
        } else {
          char = this.VOWELS[Math.floor(Math.random() * this.VOWELS.length)];
        }

        if (useUppercase && Math.random() > 0.5) char = char.toUpperCase();
        if (useNumbers && Math.random() < 0.2) {
          char = this.NUMBERS[Math.floor(Math.random() * this.NUMBERS.length)];
        }

        password += char;
        useConsonant = !useConsonant;
      }

      passwords.push(password);
    }

    return passwords;
  }

  private generateHex(dto: CustomPasswordDto): string[] {
    const chars = dto.uppercase ? this.HEX_CHARS_UPPER : this.HEX_CHARS_LOWER;
    return this.generateFromChars(chars, dto);
  }

  private generateBase64(dto: CustomPasswordDto): string[] {
    return this.generateFromChars(this.BASE64_CHARS, dto);
  }

  private generateFromChars(chars: string, dto: CustomPasswordDto): string[] {
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
