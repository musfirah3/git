// Task1 4/6/23
// var zakatPercentage = 0.025;
// Here + sign convert the prompt(string) into number or we may use Number or parseInt before the prompt
// var input = +prompt("Enter your value","Must be a number");
// var result = zakatPercentage * input;
//  alert("Your Zakat is "+result); 
//  upper + shows concatenation




// Task 2
// var wheat = 250;
// var barley = 450;
// var dates= 2100;
// var raisin = 2800;
// var  familyMembers=+prompt("Total number of family members?");
// var fitrahMethod=prompt("Choose the fitrah method \n 1)Wheat 250/= \n 2)Barley 450/=\n 3)Dates 2100/= \n 4)Raisin 2800/=");
// fitrahMethod=fitrahMethod.toLowerCase();
// if (fitrahMethod == "wheat"){
//     totalFitrah=wheat * familyMembers;
// } else if (fitrahMethod =="barley"){
//     var totalFitrah= barley * familyMembers;
// }
// else if(fitrahMethod=="dates"){
//     var totalFitrah= dates * familyMembers;
// }
// else if(fitrahMethod=="raisin"){
//  var totalFitrah= raisin * familyMembers;
// }
// else{
//     alert("Invalid Output")
// }
// alert("Amount of fitrah for this year is "+" " + totalFitrah);



// Task 3
// var secretNumber= "8";
// var guessNumber=prompt("Guess the number between 1- 10");
// if (guessNumber == secretNumber){
// alert("Congratulation! You guessed the secret number")
// }
// else if(guessNumber>secretNumber){
// alert("Your guessed number is greater than secret number")
// }
// else if(guessNumber<secretNumber){
//     alert("Your guessed number is less than secret number")
// }else{
//     alert("Invalid Output")
// }





// Task 4
// var userName=prompt("Enter your name");
// var lowerCase=userName.toLowerCase();
// var capitailize = userName[0].toUpperCase();
// var show = capitailize + lowerCase.slice(1);
// alert(show);




// Task 5
// contactNames=[];
// contactNumbers=[];
// var names = prompt("Enter a contact name");
// var names2 = prompt("Enter a contact name");
// var names3 = prompt("Enter a contact name");
// var numbers = +prompt("Enter a contact number");
// var numbers2 = +prompt("Enter a contact number");
// var numbers3 = +prompt("Enter a contact number");

// contactNames.push(names,names2,names3);

// contactNumbers.push(numbers,numbers2,numbers3);

// console.log("Your contact names "+contactNames);
// console.log("Your contact numbers "+contactNumbers);




// Task 6
// var product=["iPhone","android","samsung","huwaie"];
// var input =prompt("Enter the position of the brand you want:\n" +  product);
// if(input==0){
// console.log("Your product is: "+product.splice(0,1));
// }
// else if(input==1){
//     console.log("Your product is: "+product.splice(1,1));
// }

// else if(input==2){
//     console.log("Your product is: "+product.splice(2,1));
// }

// else if(input==3){
//     console.log("Your product is: "+product.splice(3,1));
// }
// else{
//     console.log(" Your desried item is not available");
// }
// console.log("Reamining items: "+product);
// console.log("Total number of items:"+product.length);





// Task 7
// var nationality = prompt("Enter your citizenship");
// nationality=nationality.toLowerCase();
// var gender = prompt("Enter your gender");
// gender=gender.toLowerCase();
// var age = +prompt("Enter your age");
// if (nationality == "pakistani" || nationality == "indian") {
//     if (gender == "male") {
//         if (age >= 18) {
//             alert("You are eligible to vote");
//         } else {
//             alert("You are not eligible to vote");
//         }
//     } else if (gender == "female") {
//         if (age >= 18) {
//             var materialStatus = prompt("Enter your material status");
//             if (materialStatus == "married") {
//                 alert("You are eligible to vote");
//             } else {
//                 alert("You are not eligible to vote");
//             }
//         }
//     }
//     else if (age < 18) {
//         alert("You are not eligible to vote");
//     }

// }
// else {
//     alert("You are not eligible to vote");
// }





// Task 8
// var worldCupSquad=["Babar Azam (c)", "Shadab Khan", "Asif Ali", "Fakhar Zaman", "Haider Ali", "Haris Rauf", "Iftikhar Ahmed", "Khushdil Shah", "Mohammad Hasnain", "Mohammad Nawaz", "Mohammad Rizwan", "Mohammad Wasim", "Naseem Shah", "Shaheen Shah Afridi ", "Shan Masood"];
// var finalTeam=worldCupSquad.slice(0,11);
// console.log("Players which will play tommorrow's match are: \n"+finalTeam);