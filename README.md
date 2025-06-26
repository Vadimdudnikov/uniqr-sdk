# UniQR-SDK 🚀  
Генератор и валидатор **универсального QR** (СБП + цифровой рубль) на TypeScript.

| npm | CI | coverage | postman |
|-----|----|----------|---------|
| [![npm](https://img.shields.io/npm/v/uniqr-sdk)](https://www.npmjs.com/package/uniqr-sdk) | ![CI](https://github.com/Vadimdudnikov/uniqr-sdk/actions/workflows/ci.yml/badge.svg) | ![cov](./badges/coverage.svg) |[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/vadim-9897865/uniqe-demo/collection/hjwf5es/uniqr-demo?action=share&creator=46206182)|

---

## Быстрый старт

```bash
pnpm add uniqr-sdk
```

```ts
import { generateQR } from 'uniqr-sdk';

const tlv = generateQR({
  merchantId:   'S1',
  instruments:  ['SBP', 'CRUB'],
  amount:       '199'
});
console.log(tlv);        // → 00020101…
```

---

## Демо

| Канал | Как запустить |
|-------|---------------|
| **Web-виджет** | <https://uniqr-demo.vercel.app> |
| **Docker REST** | ```docker run -p 8080:8080 ghcr.io/vadimdudnikov/uniqr-demo:0.1``` |
| **CLI** | ```npm i -g uniqr-sdk && uniqr gen -m S1 -i CRUB -a 99``` |

---

## Возможности

* **🔀 Один QR — два инструмента.** СБП и цифровой рубль в одной TLV-строке (`26`, `27` MAI).  
* **🧩 Полный API.** `generateQR`, `validateQR`, TLV-encode/decode, CRC-16 (CCITT).  
* **📦 Лёгкий рантайм.** < 35 kB gzip, без нативных зависимостей.  
* **🛠️ Сразу ESM + TypeScript.** Подходит для Node 20 и браузера; полные `.d.ts`.  
* **⚡ Docker-демо 45 MB.** Один `docker run` — и REST-шлюз готов.  

---

## Лицензия
MIT — см. [LICENSE](LICENSE).

> **Связаться:** vadimdudnikov73@gmail.com • TG @vadimdudnikov
