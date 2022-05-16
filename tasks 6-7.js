const header = [
{
    name: "Name",
    email: "Email",
    balance: "Balance"
}
];
const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 }
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 }
  }
];

// Реалізувати функцію, яка повертає масив користувачів, використовуючи параметр з ключами.

////////////Остаточно максимально заплуталась//////////////

// function getUsersData(users, header) {
//     const newHeader = Object.keys(header[0]) /// keys name, email, balance
//     let name = newHeader.name;
//     let email = newHeader.email;
//     let balance = newHeader.balance;
//     for(let i = 0; i < users.length; i++){
//         if(Object.keys(users[i]) === name || 
//         Object.keys(users[i]) === email ||
//          Object.keys(users[i]) === balance){
//             return users[i];
//         }
//     }
// }
// console.log(getUsersData(users, header));
// console.log(getUsersData(users, Object.keys(header)));

// function checkAvailability(arr, val) {
//   return arr.some(function(arrVal) {
//     return val === arrVal;
//   });
// }
// checkAvailability(users, 'male'); 

/* [{
        name: "Buckner Osborne",
        email: "bucknerosborne@empirica.com",
        balance: 2853.33
 }, …] */


// Реалізувати функцію, яка повертає загальний баланс користувачів.

function getBalance(users){
    return users.balance;
}

function getTotalBalance(users) {
    const userBalance = users.map(getBalance);
    let result = userBalance.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    return result;
}
console.log(getTotalBalance(users)); // 7141.35
