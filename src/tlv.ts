/** Recursively encodes an object into TLV string */
export function encode(obj: Record<string, any>): string {
  return Object.entries(obj)
    .map(([tag, value]) => {
      const val =
        typeof value === "object" ? encode(value) : String(value);
      return `${tag}${val.length.toString().padStart(2, "0")}${val}`;
    })
    .join("");
}

/** Decodes TLV string back to object */
export function decode(str: string): Record<string, any> {
  let i = 0;
  const out: Record<string, any> = {};
  while (i < str.length) {
    const tag = str.slice(i, i + 2);
    const len = Number(str.slice(i + 2, i + 4));
    const val = str.slice(i + 4, i + 4 + len);
    i += 4 + len;
    out[tag] =
      /^[0-9]{2}$/.test(val.slice(0, 2)) && tag >= "26" && tag <= "49"
        ? decode(val)
        : val;
  }
  return out;
}

