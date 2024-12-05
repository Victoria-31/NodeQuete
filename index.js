import * as cowsay from "cowsay"
import "dotenv/config";

let output = cowsay.say({ text: `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}` });

console.log(output);