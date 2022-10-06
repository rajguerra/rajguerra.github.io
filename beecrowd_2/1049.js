var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var A = lines[0];
var B = lines[1];
var C = lines[2];

if (A == 'vertebrado') {
  if (B == "ave") {
    if (C == "carnivoro") {
      console.log("aguia");
    } else if (C == "onivoro") {
      console.log("pomba");
    }
  } else if (B == "mamifero") {
    if (C == "onivoro") {
      console.log("homem");
    } else if (C == "herbivoro") {
      console.log("vaca");
    }
  }
} else if (A == "invertebrado") {
  if (B == "inseto") {
    if (C == "hematofago") {
      console.log("pulga");
    } else if (C == "herbivoro") {
      console.log("lagarta");
    }
  } else if (B == "anelideo") {
    if (C == "hematofago") {
      console.log("sanguessuga");
    } else if (C == "onivoro") {
      console.log("minhoca");
    }
  }
}