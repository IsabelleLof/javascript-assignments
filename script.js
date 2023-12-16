//Uppgift från Patrik:

//You are given an array of objects representing students. Each student has a name,
//age, and an array of grades. Write a function that takes this array as input and
//returns an object with the average grade for each student.
//
//Sample Input:

const students1 = [
  { name: "Alice", age: 20, grades: [80, 90, 75] },
  { name: "Bob", age: 22, grades: [95, 87, 92] },
  { name: "Charlie", age: 21, grades: [70, 65, 80] },
];

function showAllTheGrades(grades) {
  let allGrades = 0;

  allGrades = students1.forEach((student3) => {
    const grades = student3.grades;
    const allGrades = grades > 50;

    console.log(grades);
  });
  return allGrades;
}

console.log(showAllTheGrades(students1));

//Pseudo code
//write a function
//practice to use forEach to see the grades for each student first?
//filter so you can see all the grades from the students

function filterGrades(student) {
  let gradesStudents = student.grades;

  students1.forEach((student) => {
    if (student.grades) {
      eachStudentsgrades = student;
    }
  });
  return gradesStudents;
}

console.log(filterGrades(students1));

//Your task is to write a JavaScript function to solve this problem.
//Open the browser console to view the results after solving.

//--------------------------------------------------------------------------------

//Från dagens lektion:

const students = [
  { name: "Isabelle", grades: [80, 90, 75] }, // 0
  { name: "Patric", color: "blue", grades: [20, 10, 35] }, // 1
  { name: "y", color: "red", grades: [40, 90, 75] }, // 2
];

function filterStudentsByName(inputname) {
  let studentObject = null; // placeholder

  students.forEach(function (student) {
    if (student.name == inputname) {
      studentObject = student;
      console.log(studentObject);
    }
  });

  return studentObject;
}

function findNameInStudents(inputname) {
  return filterStudentsByName(inputname);
}

console.log(findNameInStudents("Patric"));

// 4. Shoppingcart med separata priser (3p)
// Skriv klart funktionen calculateTotalPrice2 som tar en array med produkter
// och ett objekt med priser som input och returnerar det totala priset

const modelPrices4 = {
  EOS_70D: 100,
  D3400: 120,
  Hero_4: 80,
  Phantom: 50,
  Karma: 200,
};

const shoppingCart4 = [
  { name: "Camera", brand: "Canon", model: "EOS_70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero_4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

function calculateTotalPrice2(shoppingCart, prices) {
  // Din kod här
  let totalPrice = 0;

  shoppingCart.forEach((product) => {
    const model = product.model;
    const price = prices[model];

    totalPrice = totalPrice + price;
  });
  return totalPrice;
}

console.log(calculateTotalPrice2(shoppingCart4, modelPrices4)); // Ska logga 550

//Exempel från chatgpt:
var prices = { car: 10000, bike: 5000, truck: 20000 };
var model = "bike";
console.log(prices[model]); // Output: 5000

//Exemepel från openAi:

const students6 = [
  { name: "Alice", age: 20, grades: [80, 90, 75] },
  { name: "Bob", age: 22, grades: [95, 87, 92] },
  { name: "Charlie", age: 21, grades: [70, 65, 80] },
];

function showAllTheGrades(students) {
  //let allGrades = [];
  //let averageGrades = [];
  let gradesForEachStudents = null;
  let sumOfGradesForEach = 0;

  students.forEach((student) => {
    gradesForEachStudents = student.grades;
    //sumOfGradesForEach = gradesForEachStudents.join("");
    console.log(gradesForEachStudents);

    // gradesForEachStudents.forEach((grades) => {
    //   sumOfGradesForEach = grades + sumOfGradesForEach;
    //   console.log(sumOfGradesForEach);

    // });
    //averageGrades = grades.concat(grades);
    //console.log(grades);
    //console.log(averageGrades);
    //allGrades = allGrades.concat(grades);
  });
  return gradesForEachStudents;
}

function findNameInStudents(gradesForEachStudents) {
  for (let i = 0; i < gradesForEachStudents.length; i++) {
    const element = gradesForEachStudents[i];
    console.log(element);
  }
}

console.log(showAllTheGrades(students6));

//Från google:

const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

console.log(sum);

//Från chatgpt:

let a = [1, 2, 3, 4, 5];
//console.log(a[2]); // Output: 3

//Exempel från chatgpt:

//Ta ut modelen "truck" ur objektet "prices" och visa priset:

var prices = { car: 10000, bike: 5000, truck: 20000 };

const modelTruck = "truck";

let price = 0;

price = prices[modelTruck];

console.log(price);

//-----------------------------------------------------------------------------------------

//Provfrågor från provet:

// 1. Booleans (3p)
// Skriv en funktion howFast som tar en siffra som input och
// returner följande sträng:
// "Fast" om siffran är högre eller lika med 100
// "Slow" om siffran är lägre eller lika med 20
// "Medium" om siffran är 30 till och med 50
// "Unknown" om inget av ovan stämmer

// function howFast(number) {
//   //Din kod här
// }

// console.log(howFast(20)); // Ska logga "Slow"
// console.log(howFast(50)); // Ska logga "Medium"
// console.log(howFast(100)); // Ska logga "Fast"
// console.log(howFast(25)); // Ska logga "Unknown"

//Annat exempel från chatGpt:

function temperatureStatus(temperature) {
  //Din kod här
  if (temperature <= 5 && temperature >= -4) {
    return "Låg temperatur";
  } else if (temperature >= 10 && temperature <= 30) {
    return "Mellan temperatur";
  } else if (temperature >= 35) {
    return "Hög temperatur";
  } else {
    return "Okänd temperatur";
  }
}

console.log(temperatureStatus(5)); // Ska logga "Låg temperatur"
console.log(temperatureStatus(20)); // Ska logga "Mellan temperatur"
console.log(temperatureStatus(35)); // Ska logga "Hög temperatur"
console.log(temperatureStatus(-5)); // Ska logga "Okänd temperatur"

// // 2. String-arrays (3p)
// // Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// // input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// // tips: använd indexOf eller includes

// function filterWordsWithLetterA(words) {
//   //Din kod här
// }

// console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]

// // 3. Shoppingcart (3p)
// // Skriv klart funktionen calculateTotalPrice som tar en array med produkter
// // som input och returnerar det totala priset

// const products = [
//   { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
//   { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
// ];

// const products2 = [
//   { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
//   { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
//   { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
// ];

// function calculateTotalPrice(shoppingCart) {
//   // Din kod här
// }

// console.log(calculateTotalPrice(products)); // Ska logga 220
// console.log(calculateTotalPrice(products2)); // Ska logga 330

// // 4. Shoppingcart med separata priser (3p)
// // Skriv klart funktionen calculateTotalPrice2 som tar en array med produkter
// // och ett objekt med priser som input och returnerar det totala priset

// const modelPrices = {
//   EOS_70D: 100,
//   D3400: 120,
//   Hero_4: 80,
//   Phantom: 50,
//   Karma: 200,
// };

// const shoppingCart = [
//   { name: "Camera", brand: "Canon", model: "EOS_70D" },
//   { name: "Camera", brand: "Nikon", model: "D3400" },
//   { name: "Camera", brand: "GoPro", model: "Hero_4" },
//   { name: "Drone", brand: "DJI", model: "Phantom" },
//   { name: "Drone", brand: "GoPro", model: "Karma" },
// ];

// function calculateTotalPrice2(shoppingCart, prices) {
//   // Din kod här
// }

// console.log(calculateTotalPrice2(shoppingCart, modelPrices)); // Ska logga 550

// 5. Betygsätt produkter (3p)
// Skriv en funktion rateProducts som tar emot en array med produkter och ett objekt med betyg som input.
// Funktionen ska lägga till ett betyg (om det finns) till varje produkt och returnera den uppdaterade produktslistan.

//javascript
//Copy code
const productRatings = {
  EOS_70D: 4.5,
  D3400: 3.8,
  Hero_4: 4.0,
  Phantom: 4.2,
  Karma: 3.9,
};

const productsList = [
  { name: "Camera", brand: "Canon", model: "EOS_70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero_4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

function rateProducts(products, ratings) {
  // Din kod här
}

console.log(rateProducts(productsList, productRatings));

// Ska returnera en uppdaterad lista med betyg för varje produkt.

//Uppgiften kräver att du skapar en funktion rateProducts, som lägger till betyg (om de finns) för varje produkt i listan baserat på objektet med betyg (productRatings). Funktionen ska sedan returnera den uppdaterade produktslistan.

// // 5.1 Spread med objekt (2p)
// // Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// // av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// // Om speed är över 100 ska isFast vara true annars ska det vara false

// const car = {
//   name: "Volvo",
//   speed: 120,
// };

// function addIsFast(car) {
//   // Din kod här
// }
// console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }

// // 5.2  Spread med arrayer (2p)
// // Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
// // och använder spread operatorn för att kombinera dem till en enda array.
// // Returnera den nya arrayen

// function combineArrays(arr1, arr2) {
//   // Din kod här
// }

// console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]

// // 6. (3p) Arrayer och Funktioner
// // Skriv klart funktionen median som tar en array av nummer
// // och returnerar median-värdet. Median-värdet är det mittersta
// // numret i en serie med nummer. T.ex: är medianvärdet 7 i [1, 5, 7, 23, 120]
// // I en array med jämnt antal nummer är median-värdet medelvärdet av
// // de två mittersta talen: T.ex: 7.5 i [1, 5, 10, 33].
// // Medelvärdet räknas då ut så här: (5 + 10)/2 = 7.5

// // Följ denna algoritm för att lösa uppgiften:
// // 1. Sortera arrayen med funktionen sortArray
// // 2. Kolla om arrayens längd är udda eller jämn med funktionen isEven
// // 3. Om arrayens längd är udda returnera talet på mitten-position ((arrayens längd - 1) / 2)
// // 4. Om arryens längd är jämn räkna ut och returnera medelvärdet av de två mittersta talen.
// //    Dessa har positioner: arrayens längd / 2 och  arrayens längd / 2 - 1
// // OBS! Er funktion median måste använda funktionerna sortArray och isEven

// function sortArray(arr) {
//   return arr.sort((a, b) => a - b);
// }

// function isEven(num) {
//   return num % 2 == 0;
// }

// function median(arr) {
//   //Din kod här
// }

// console.log(median([1, 5, 7, 23, 120])); // ska logga 7
// console.log(median([1, 5, 10, 33])); // ska logga 7.5

// // 7.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// // Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// // Visa endast posts från användaren med userId: 1

// // 7.2 (3p)
// // Varje post ska ha padding: 20px och margin: 10px
// // Texten på title ska vara bold
// // Text-färgen ska vara grå
// // Backgrundsfärgen på varje post ska vara ljus-grå
// // När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// // Visa posts i fyra kolumner för desktop och en kolumn för mobil

// // 7.3 (3p)
// // Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// // och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// // Visa title och body från varje post
// // Under varje post visa alla dess tillhörande kommentarer.
// // name och body visas för varje kommentar.
// // Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// // Styla posts och comments på samma sätt som ovan.
// // tips: comments är kopplade till posts med postId
