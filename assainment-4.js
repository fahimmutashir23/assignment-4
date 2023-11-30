


function cubeNumber(numbers) {
    if (typeof(numbers) === "number"){
        let cube = numbers * numbers * numbers
    
        return cube
    }
    else{
        return "please enter a valid number"
    }
}
let input = 4;
let result = cubeNumber(input);




function matchFinder(string1, string2) {
    if(typeof(string1) === 'string' && typeof(string2) === 'string' ){

        let check = string1.includes(string2);
        return check;
    }
    else{
        return 'please enter a valid input'
    }
    }

let input1 = "John Doe";
let input2 = "ohn";
let result = matchFinder(input1, input2);
console.log(result);





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




function findAddress(obj) {
    let add1 = obj.street;
    let add2 = obj.house;
    let add3 = obj.society;
    let finalresult = ""

    if(add1 === undefined){
        finalresult += '__,'
    }
    else{
        finalresult += add1 + ','
    }
    if(add2 === undefined){
        finalresult += '__,'
    }
    else{
        finalresult += add2 + ','
    }
    if(add3 === undefined){
        finalresult += '__'
    }
    else{
        finalresult += add3
    }
    return finalresult
    
}
    
let address = {
    street: 10,
    house: '15A',
    society: 'EarthPerfect'
}
let result = findAddress(address);
console.log(result);





function canPay(changeArray , totalDue){

      if(changeArray.length === 0){
        return "please enter a valid ammount"
      }

      else{
        let sum = 0;
        for(let i = 0; i < changeArray.length; i++){
            sum += changeArray[i];
        }
        
        if(sum >= totalDue){
            return true;
        }
        else{
            return false;
        }
      }
}

let input1 = [2, 3, 5];
let input2 = 10;
let result = canPay(input1, input2);
