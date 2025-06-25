# UniQR-SDK 🚀  
Генератор и валидатор **«универсального QR»** (СБП + цифровой рубль) на TypeScript.

| npm | build | coverage |
|-----|-------|----------|
| [![npm](https://img.shields.io/npm/v/uniqr-sdk)](https://npmjs.com/uniqr-sdk) | ![CI](https://github.com/ВАШ_ЮЗЕР/uniqr-sdk/actions/workflows/ci.yml/badge.svg) | ![cov](./badges/coverage.svg) |

## Быстрый старт

```bash
pnpm add uniqr-sdk
```

```ts
import { generateQR } from 'uniqr-sdk';

const tlv = generateQR({
  merchantId: 'S1',
  instruments: ['SBP', 'CRUB'],
  amount: '199'
});
console.log(tlv); // 00020101…
```
