import { crc } from "../crc.js";

test("crc16 known vector (CCITT)", () => {
  expect(crc("000201")).toBe("EF3E");
});

