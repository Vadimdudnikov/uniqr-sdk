import { generateQR, validateQR } from "../index.js";

test("SBP+CRUB dual QR validates", () => {
  const tlv = generateQR({
    merchantId: "M1",
    instruments: ["SBP", "CRUB"],
    amount: "199",
  });
  const res = validateQR(tlv);
  expect(res.crcOk).toBe(true);
  expect(res.data["26"]["02"]).toBe("SBP");
  expect(res.data["27"]["02"]).toBe("CRUB");
});

