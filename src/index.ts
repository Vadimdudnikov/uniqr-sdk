import { encode, decode } from "./tlv.js";
import { crc } from "./crc.js";

export type Instrument = "SBP" | "CRUB";

export function generateQR(opts: {
  merchantId: string;
  instruments: Instrument[];
  amount?: string;
  static?: boolean;
}): string {
  const base = { "00": "100000000007", "01": opts.merchantId };

  const mai: Record<string, any> = {};
  opts.instruments.forEach((ins, i) => {
    mai[(26 + i).toString()] = { ...base, "02": ins };
  });

  const body: any = {
    "00": "01",
    "01": opts.static ? "11" : "12",
    ...mai,
    "53": "643",
    "58": "RU",
    "59": "MERCHANT",
    "60": "CITY",
  };
  if (opts.amount) body["54"] = opts.amount;

  let tlv = encode(body);
  const sum = crc(tlv + "64");
  return tlv + "64" + "04" + sum;
}

export function validateQR(tlv: string) {
  const given = tlv.slice(-4);
  const body = tlv.slice(0, -8);
  return {
    crcOk: crc(body + "64") === given,
    data: decode(body),
  };
}

