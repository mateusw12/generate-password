<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A NestJS API for generating, encrypting, and validating passwords.
</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
</p>

## Description

This project is a **NestJS API** for password management. It provides endpoints for:

- **Generating passwords** with different strategies:
  - `CUSTOM` – custom characters (uppercase, lowercase, numbers, symbols)
  - `SIMPLE` – only letters and numbers
  - `PRONUNCIABLE` – easy-to-pronounce passwords
  - `HEX` – hexadecimal passwords
  - `BASE64` – base64-encoded passwords
  - `STRONG` – strong passwords with a mix of all character types
- **Encrypting passwords** using modern hashing (`argon2`) with configurable parameters
- **Comparing passwords** against stored hashes
- **Password strength check** (returns a score and warnings)
- **Advanced hashing options** with time/memory/parallelism configuration

The API is fully documented with **Swagger**, making it easy to test endpoints.

## Project setup

```bash
$ npm install
```

## Running the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production
$ npm run start:prod
```

