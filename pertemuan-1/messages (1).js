// messages.js
import helloWorld from "./HelloWorld.js";

async function messages() {
  let msg = await helloWorld();
  console.log(msg);
}

messages();
