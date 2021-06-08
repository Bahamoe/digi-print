#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
};
const fs = require("fs");
const path = require("path");

// let output = `
//       ${chalk.yellow.bold("╔═╗┬  ┬ ┬┌─┐┬ ┬  ╔╦╗┌─┐┌┐┌┌─┐┬─┐")}
//       ${chalk.yellow.bold("║╣ │  │ │├─┤├─┤  ║║║├─┤││││ │├┬┘")}
//       ${chalk.yellow.bold("╚═╝┴─┘┴└┘┴ ┴┴ ┴  ╩ ╩┴ ┴┘└┘└─┘┴└─")}
let output = `
  ${chalk
    .hex("#AC92EB")
    .bold(
      "██████  ██  ██████  ██ ████████  █████  ██      ███████ ███    ██ ████████"
    )}
  ${chalk
    .hex("#4FC1E8")
    .bold(
      "██   ██ ██ ██       ██    ██    ██   ██ ██      ██      ████   ██    ██"
    )}
  ${chalk
    .hex("#A0D568")
    .bold(
      "██   ██ ██ ██   ███ ██    ██    ███████ ██      █████   ██ ██  ██    ██"
    )}
  ${chalk
    .hex("#FFCE54")
    .bold(
      "██   ██ ██ ██    ██ ██    ██    ██   ██ ██      ██      ██  ██ ██    ██"
    )}
  ${chalk
    .hex("#ED5564")
    .bold(
      "██████  ██  ██████  ██    ██    ██   ██ ███████ ███████ ██   ████    ██"
    )}
`;

const [, ...trimmed] = output.split("\n");
const card = chalk.white(boxen(trimmed.join("\n"), options));
fs.writeFileSync(path.join(__dirname, "bin/output"), card);
console.log(card);
