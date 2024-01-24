/////////////task1


// function calculateRemainingYears(currentYear, PensionYear) {
//   let remainingYears = PensionYear - currentYear;

//   if (remainingYears < 0) {
//     remainingYears = 0;
//   } else if (remainingYears === 0) {
//     console.log("This is the Pension year.");
//   }

//   return remainingYears;
// }

// let currentYear = 2024;
// let PensionYear = 2070;
// let result = calculateRemainingYears(currentYear, PensionYear);
// console.log("Remaining years: " + result);





/////////////Task2





// function calculator(number1, number2, operator) {
//   let result;

//   if (typeof number1 !== 'number' && number2 !== 'number') {
//     return "Invalid input. Both number1 and number2 must be numbers.";
//   }

//   switch (operator) {
//     case '+':
//       result = number1 + number2;

//       break;

//     case '-':
//       result = number1 - number2;

//       break;
//       case '/':
//          if (number2 !== 0) {
//          result = number1 / number2;
//           }else {
//          return "Cannot divide by zero.";
//          }

//       break;

//     case '*':
//       result = number1 * number2;

//       break;

//     default:
//       return "Invalid operator. Supported operators are '+', '-', '*', '/'.";
//   }

//   return result;
// }

// let num1 = 43;
// let num2 = 1;
// let operation = "+";
// let result = calculator(num1, num2, operation);

// console.log(`Result of ${num1} ${operation} ${num2} is: ${result}`);




///////////task3





// function checkPasswordStrength(password){
   
//     if (password.length===0) {
//         return "Password is empty, Please enter password"
//     }
//     if (password.length<8) {

//         return "Weak Password. it should contain at least 8 character long ";
        
//     } else if (password.length>16){
//         return "Weak password. It should be at most 16 characters long."
//     }

//     else{
//         return "Strong password good job"
//     }
// }


// let password1="pass1"  //8 characterze naklebia
// let password2="goodpass1"  // good password
// let password3="strongpassword777" //17 characters sheicavs


// console.log(checkPasswordStrength(password1) );
// console.log(checkPasswordStrength(password2) );
// console.log(checkPasswordStrength(password3) );




////////task4




//დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!



// let input='Ferrari'; 



// switch (input) {
//     case 'Ferrari':
//             console.log("Ferrari is Found");       
//         break;

//     case 'Lamborghini':
//         console.log("Lamborghini is Found");    
//         break;

//     case 'Pagani':
//         console.log("Pagani is Found");
//         break;

//     default:
//         console.log("Invalid Car Brand");
//         break;
// }






////////task5



// function findLargestNumber() {
   
//     let number1 = prompt("44");

    
//     let number2 = prompt("7");

    
//     let number3 = prompt("10");

        ///parseFloat stringebs adzlevs ricxvit mnishvnelobas    
//     let largestNumber =(parseFloat(number1), parseFloat(number2), parseFloat(number3));

    
//     console.log("The largest number is: " + largestNumber);
// }


// findLargestNumber();








