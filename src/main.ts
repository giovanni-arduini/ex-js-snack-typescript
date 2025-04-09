// Ts Snack 1

let data: unknown;

if (typeof data === "string") {
  console.log(data.toUpperCase());
} else if (typeof data === "number") {
  console.log(data * 2);
} else if (typeof data === "boolean") {
  data = true ? console.log("Yes") : console.log("No");
} else console.log("Tipo non supportato");
