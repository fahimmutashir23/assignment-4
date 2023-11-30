// // let numbers = [10,20,30,40,50];
// // let     sum = 0;


// // for(let i =0; i< numbers.length; i++) {
// //     sum += numbers[i];
// // }
// // console.log(sum)


// function findEqualElements(arr) {
    
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return 'equal'
//             }
//         }
//     }

// }

// const array = [5, 5];
// const equalPairs = findEqualElements(array);
// console.log(equalPairs)

// if (equalPairs.length > 0) {
//     console.log("Equal elements:");
//     for (const pair of equalPairs) {
//         console.log(pair[0], "and", pair[1]);
//     }
// } else {
//     console.log("No equal elements found.");
// }


function sortMaker(arr) {
    if(arr[0] <= 0 || arr[1] <= 0){
        return "Invalid Input";
    }
    else{
        if(arr[0] > arr[1]){
            return arr;
        }
        else if (arr[0] === arr[1]){
            return 'equal'
        }
        else{
            let finalArr = arr.reverse();
            return finalArr;
        }
    }
}

let points = [3,5];
let result = sortMaker(points);


