console.log("I'm ready!");
// Iteration 1: Names and Input

//1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Jose Daniel";
//1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Juan";
//1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!.`
  );
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let printHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  printHacker1 += hacker1[i].toUpperCase();

  if (printHacker1[printHacker1.length - 1] !== " ") {
    printHacker1 += " ";
  }
}
console.log(printHacker1);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let hacker1Reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  hacker1Reverse += hacker1[i];
}
console.log(hacker1Reverse);

//3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1

//Generate 3 paragraphs. Store the text in a new string variable named longText.
let longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus diam quis dui lobortis ultricies. Maecenas posuere blandit vehicula. Vestibulum imperdiet, metus quis rhoncus rhoncus, libero neque porttitor quam, vitae tincidunt turpis purus a libero. Quisque suscipit eget eros sit amet scelerisque. Vestibulum lobortis est ac eleifend consectetur. Cras porta ligula mollis tortor convallis, nec interdum dolor dignissim. Proin nunc ipsum, convallis vitae diam porttitor, finibus eleifend tellus. Nam scelerisque neque massa, sed rhoncus nisl ultrices id. Maecenas mattis tempor velit, a tempor risus ornare eu. Ut id eros a sapien fringilla ultrices ut ac lectus.

Nullam eu orci a arcu elementum pulvinar vitae ut nunc. Quisque in ullamcorper tellus. In malesuada arcu nulla, eu pretium felis vestibulum vitae. Proin tincidunt orci nec libero congue, vel elementum ligula viverra. Phasellus neque metus, auctor volutpat suscipit sollicitudin, malesuada et purus. Cras commodo, ligula non sodales ultrices, lorem lorem lobortis quam, porta pharetra quam felis at erat. Morbi luctus molestie congue. Aliquam imperdiet vehicula lacus, quis euismod nunc porttitor vitae. Maecenas egestas enim in massa pharetra, a tempor tellus pulvinar. Morbi id augue lectus. Nunc varius ornare laoreet. Mauris sed facilisis metus, non bibendum dolor. Curabitur vel egestas dui.

Donec ac enim at nulla venenatis maximus ut nec mi. Nam eget ornare erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non ligula magna. Integer interdum massa eu condimentum tristique. Phasellus laoreet est arcu, sit amet ullamcorper enim dignissim vel. Aliquam dapibus purus leo, nec gravida mauris vehicula eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;
//Make your program count the number of words in the string.
console.log(
  ` Numero de palabras en este texto: ${longText.split(" ").length}.`
); //Metodo que se me ocurre pero es de arrays,

let wordsCounter = 0;
for (let i = 0; i < longText.length; i++) {
  //sin usar split();
  if (
    longText[i] !== " " &&
    longText[i + 1] === " " &&
    !(longText[i] === " " && longText[i + 1] === " ")
  ) {
    wordsCounter++;
  }
  if (i === longText.length - 1) {
    wordsCounter++;
  }
}
console.log(` Numero de palabras en este texto: ${wordsCounter}.`);

//Make your program count the number of times the Latin word et appears.
let counter = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] + longText[i + 1] === "et") {
    counter++;
  }
}
console.log(`La palabra latina "et" aparece: ${counter} veces.`);

//Bonus 2
//Palindrome: es una frase o palabra que se lee igual de izquierda a derecha que de derecha a izquierda.

let phrase = "Yo dono rosas, oro no doy".toLowerCase();
let checkPalindrome = false;
let phraseToCheck = "";
let phraseReverse = "";
let countPhrase = phraseReverse.length - 1;

//Primero relleno una variable sin puntos, comas y espacios para poder comparar
for (let i = phrase.length - 1; i >= 0; i--) {
    
    /*   if (phrase[i] !== " " && phrase[i] !== "," && phrase[i] !== "." && phrase[i] !== ":") {
        phraseToCheck += phrase[i];
      }; */

    switch (phrase[i]) {
        case " ":
        case ",":
        case ".":
        case "!":
        case "?":
        case "¿":
        case "¡":
        case ":":
        case "(":
        case ")":
        case "'":
            break;
        default:
            phraseToCheck += phrase[i];
            break;
    };
};

//Luego relleno la variable phraseReverse para hacer la comparacion entre las dos.
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseReverse += phraseToCheck[i];
};

// Y a continuacion voy mirando caracter por caracter a ver si coinciden ambas.
for (let i = 0; phraseToCheck.length > i; i++) {
  if (phraseToCheck[i] == phraseReverse[i]) {
    countPhrase--;
    checkPalindrome = true;
    continue; //Si es true entonces continua chekeando.
  } else {
    checkPalindrome = false;
    break; //Si no es asi entonces para el bucle y devuelve false a la variable checkPalindrome.
  };
};

//Imprimo los resultados.
if (checkPalindrome) {
  console.log(`La frase/palabra: '${phrase}' es Palindrome.`);
} else {
  console.log(`La frase/palabra: '${phrase}' no es Palindrome.`);
};
