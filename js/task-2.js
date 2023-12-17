// let number = 5;
// if (number > 10) {
//     console.log("Good");
// }
// else {console.log('Bad')}

// const points = 5000;
// const balance = -1000;
// let message;

// if (balance >=0) {
//     message = 'pos';
// }
// else {
//     message = 'negative';
// }
// console.log(message);

// let points = 4000;
// if(points >= 7000)
// {points += points * 0.1}
// else if(points <= 5000)
//  {points -= points * 0.15}
// console.log(points)

//     const c = 15;

// if (true) {
//    const a = 5;
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// if (true) {
//     const b = 10;
//     concole.log(a);
//     concole.log(b);
//     concole.log(c);

// }
//     console.log(a);
//     concole.log(b);
//     concole.log(c);

// const hours = 16;
// const minutes = 0;
// let timestring;
// if (minutes === 0) {timestring = `${hours} годин рівно. `

// }
// else {
//     timestring = `${hours} годин, ${minutes} хвилин.`
// }
//     console.log(timestring)

// const daysUntilDeadLine = -2;

// if (daysUntilDeadLine == 0) {
//     console.log('Today');
// }
// else if(daysUntilDeadLine == 1) {
//     console.log ('Tomorrow');
// }
// else if(daysUntilDeadLine ==  2) {
//     console.log ('Overmorrow');
// }
// else if(daysUntilDeadLine >= 3)
//     console.log('Data in the future');
// else {console.log
// ('проїбав ти свій дедлайн!');
// }

// if (daysUntilDeadLine < 0) {console.log
//    ('проїбав ти свій дедлайн!');

// }
// switch (daysUntilDeadLine) {
//     case 0:
//         console.log('Today');
//         break;
//         case 1:
//         console.log ('Tomorrow');
//         break;
//         case 2:
//         console.log ('Overmorrow');
//         break;
//         default:
//         console.log('Data in the future');
//         break;
// }

// const option = 0;
// let message = "";

// switch (option) {
//   case 1:
//     console.log("самовивіз.");
//     break;
//   case 2:
//     console.log('доставка кур"єром');
//     break;
//   case 3:
//     console.log("Post");
//     break;
//   default:
//     console.log("call");
//     break;
// }
// console.log(message);

//.............................................................&& === and; || === or; ! === not;

// const resOfLogin = true;
// const resOfPass = true;
// const res = resOfLogin && resOfPass;

// console.log(res);


// const benzin = true;
// const gaz = true;
// console.log(benzin || gaz);


// const sub = 'vip'
// if (sub === 'pro' || sub === 'vip') {
//     console.log ('маєш доступ')
// }

// const isOnLine = true;
// const isFriend = true;
// const isDnd = false;
// if (isOnLine && isFriend && !isDnd) {console.log ('hello, Amigo!')
    
// }


// part || //
// slice

// const username = "Jacob Mercer";
// console.log(username);
// const firstname = username.slice(0, 5)
// console.log(firstname)
// const lastname = username.slice(-6)
// console.log(lastname)

//  toLowerCade/toUpperCase

// const username = "Jacob Mercer";
// const result = username.toUpperCase()
// const result2 = username.toLowerCase()
// console.log(result)
// console.log(result2)
// приклад:

// const email = "max544@gmail.com"
// const userInput = "Max544@gmail.com".toLowerCase()

// console.log(email === userInput);

// IncLudes шукаЄ певну відповідність в тілі тексту, тощо

// const username = "Jacob Mercer";
// console.log(username)
// const result = username.includes("cob")
// console.log(result)

// startWith/endWith  шукає певну відповідінсть на початку і кінці тексту, тощо



// const username = "Jacob Mercer";
// console.log(username)
// const result = username.startsWith("jac")
// console.log(result)
// const result2 = username.endsWith("cer")
// console.log(result2)


// indexOf допомагає знайти індекс, порядковий номер, комбінація тощо



// const username = "Jacob Mercer";
// console.log(username)
// const index = username.indexOf('b')
// console.log(index)

// trim викорстовується для прибирання " " пробілів зліва та справа
// const correctLogin = "Andrii123"
// const userInput = "           Andrii123      "
// console.log(correctLogin === userInput.trim( ))

// приклад:

// const email = "max544@gmail.com"
// const userInput = "Max544@gmail.com".toLowerCase()

// console.log(email === userInput);

//  написати скрипт який перевіряє наявність / і додає / в разі відсутності.
  
// let link = "htths://mriya-media.com";
// if (!link.endsWith('/')) {link += '/'
// }
//     console.log(link)
// =======================

// let url = "htths://mriya-media.com";

// if (!url.endsWith('/') && url.includes('my-site')) {url += '/'
    
// }
// console.log(url)


// let url = "htths://mriya-media.com";
// url = !url.endsWith('/') && url.includes('my-site') ? url += '/' : url;
// console.log(url)
 


// const BlackListWord1 = "spam"
// const BlackListWord2 = "sale"

// const string1 = "Hello, I'm Prince Abdoul".toLowerCase()
// const string2 = "Biggest SALE this week".toLowerCase()
// const string3 = "#fatlivesmatter advert".toLowerCase( )

// const result1 = !string1.includes(BlackListWord1) && !string1.includes(BlackListWord2)
// const result2 = !string2.includes(BlackListWord1) && !string2.includes(BlackListWord2)
// const result3 = !string3.includes(BlackListWord1) && !string3.includes(BlackListWord2)

// console.log(string1, result1)
// console.log(string2, result2)
// console.log(string3, result3)

// ______________________________ЦИКЛИ____________________________
// console.log("before")

// for (let x = 20; x > 0; x --){
// console.log('loop running!')

// }

// console.log("after")

// або:


// console.log("before")
// let x = 20
// for (; x > 0;){
// console.log('loop running!')
//  x --
// }

// console.log("after")

// -- = зменшення на 1, ++ = збільшення на 1.



// ___while___

// console.log("before");

// let number = 25;

// while (number > -20) {
//     console.log("executing..", number > -20, number)
//     number -= 10
// }

// console.log("after");


// _____do Wile_____

// console.log("Before while loop");
// let counter = 0;
// console.log("After while loop");

// while (false) {
//     console.log("Some code")
// }
// while-звертається до умови і робить або ні, do while-робить, потім звертається до умови.

    
//     do {
//     console.log("Some code")
// } while (false);


// ______task_____

//  написати цикл від а до в, кратне 5.

// const a = 20
// const b = 100
// for (let x = a; x <= b; x++){
//     if (x % 5 != 0) {
//         continue
//     }console.log(x)
// }

// написати скрипт, що підраховує суму всіх парних чисел від min to max;

// const min = 0
// const max = 5
// let total = 0
// for (let x = min; x <= max; x++)
// {
//     if (x % 2 === 0 && x != 0) {
//     total += x

//     }
// console.log(total)
// }

// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі


// function normalizeInput(input, to) {
//     if (to === 'upper') {
//         return input.toUpperCase()
//     } else if(to === 'lower') {
//             return input.toLowerCase ()
  
//         }
  
//     }


// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.
// function checkForName(fullName, firstName) {
// const lowerFull = fullName.toLowerCase()
// const LowerFirst = firstName.toLowerCase()  
// return lowerFull.includes(LowerFirst)
// }
  
// Функція checkFileExtension(fileName, ext) приймає два параметри:

// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:

// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext){ 
// if (fileName.endsWith(ext))
// {return "File extension matches";} 
// else {return("File extension does not match")
//     }
// }
//   Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення
// function getFileName(file) {
//     // Знаходимо індекс крапки, яка відокремлює ім'я файлу від розширення
//     const dotIndex = file.indexOf('.');

//     // Перевіряємо, чи є крапка та чи вона не є останнім символом рядка
//     if (dotIndex !== -1 && dotIndex !== file.length - 1) {
//         // Якщо є розширення, повертаємо ім'я файлу без розширення
//         return file.slice(0, dotIndex);
//     } else {
//         // Якщо немає розширення або крапка є останнім символом, повертаємо саме ім'я файлу
//         return file;
//     }
// }