import testCases from "./testCases.json";
import { rgb } from "./rgb";

if (typeof process === "object") {
  testCases.forEach(({ input, output }, index) => {
    const [r, g, b] = input;
    console.log(`TEST CASE ${index + 1}: `, rgb(r, g, b) === output);
  });
}
