import * as cowsay from "cowsay"
import "dotenv/config";

let output = cowsay.say({ text: `Hello from ${process.env.NAME}` });

console.log(output);