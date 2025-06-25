#!/usr/bin/env node
import { Command } from "commander";
import { generateQR, validateQR } from "../index.js";

const cli = new Command();
cli
  .command("gen")
  .option("-m, --merchant <id>", "Merchant ID", "M1")
  .option("-a, --amount <sum>", "Amount")
  .option("-i, --instruments <csv>", "SBP,CRUB", "CRUB")
  .action(o => {
    console.log(
      generateQR({
        merchantId: o.merchant,
        instruments: o.instruments.split(","),
        amount: o.amount,
      }),
    );
  });

cli
  .command("val <tlv>")
  .action(t => console.log(validateQR(t)));

cli.parse();

