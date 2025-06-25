import { encode, decode } from "../tlv.js";
test("round", ()=>{const o={"00":"01"}; expect(decode(encode(o))).toEqual(o);});
