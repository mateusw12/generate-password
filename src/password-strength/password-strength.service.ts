import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordStrengthService {
  checkStrength(password: string) {
    let score = 0;

    if (!password) return { score, strength: 'very weak' };

    // Comprimento
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Letras maiúsculas e minúsculas
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;

    // Números
    if (/\d/.test(password)) score += 1;

    // Símbolos
    if (/[\W_]/.test(password)) score += 1;

    // Classificação
    let strength = 'weak';
    if (score <= 2) strength = 'weak';
    else if (score <= 4) strength = 'medium';
    else strength = 'strong';

    return { score, strength };
  }
}
