// Реалізувати функцію, яка приймає три числові параметри і повертає суму двох більших чисел.
function sumMax(a, b, c){
    if(a <= b && a <= c){
        return b + c;
    }else if(b <= a && b <= c){
        return a + c;
    } else return a + b;
}
console.log(sumMax(2, 5, 1));



// Реалізувати власну функцію max(arr), яка поверне найбільший елемент масиву без використання Math.max().
const max = function(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  };

console.log(max([1, 0, 7, -3])); // 7


const users = [
  { id: 1, name: 'Bob', score: 100 },
  { id: 2, name: 'Ted', score: 50 },
  { id: 3, name: 'Alice', score: 125 },
];
// Реалізувати функцію, яка повертає юзера за іменем (Array.find).
const findUser = function(users, lookupName) {
    for(let i = 0; i < users.length; i++){
        let user = users[i].name;
        if(user === lookupName){
            return users[i];
        }
    }
};
console.log(findUser(users, 'Ted')); // { id: 2, name: 'Ted', score: 50 }


// Реалізувати функцію, яка знайде найбільший score, користуючись функцією max.
const userScore = users.map(getScore);
function getScore(users){
    return users.score;
}
console.log(max(userScore));



// Реалізувати функцію, яка поверне юзера з найбільшим score. Можна шукати циклом, а можна скористатися Array.reduce.

const maxScore = function(users){
    let userScore =  users.map(getScore);

    for(let j = 0; j < userScore.length; j++){
        let wasSwap = false;
        for(let i = 0; i <= userScore.length; i++){ 
            if(userScore[i] < userScore[i + 1]){
            let a = userScore[i];
            userScore[i] = userScore[i + 1];
            userScore[i + 1] = a;
            wasSwap = true;
            }   
        }
        if (!wasSwap) break;
    } return userScore[0];
};

const maxScoreUser = function(users, param){
    for(let i = 0; i < users.length; i++){
        if(users[i].score === param){
            console.log(users[i])
        }
    }
}
maxScoreUser(users, maxScore(users))
