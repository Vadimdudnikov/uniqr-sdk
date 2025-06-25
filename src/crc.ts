import { crc16 } from "crc";

export const crc = (data: string) =>
  crc16(Buffer.from(data, "utf8"))
    .toString(16)
    .toUpperCase()
    .padStart(4, "0");
