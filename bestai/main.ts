'use strict';
let sample
module.exports.array = function(a){
    return a
}
module.exports.arrayType = function(a){
    return typeof a[0]
}
module.exports.randomNumber = function(max){
    return Math.floor(Math.random() * max);
}
module.exports.randomChoice = function(a){
    return a[Math.floor(Math.random() * a.length)];
}
module.exports.lcm = function(num1, num2){
    let min = (num1 > num2) ? num1 : num2;
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            break;
        }
        min++;
    }
    return min
}
module.exports.hcf = function(number1, number2){
    while(number1 != number2){
        if(number1 > number2) {
            number1 -= number2;
        }
        else {
            number2 -= number1;
        }
    }
    return number1
}
module.exports.unique = function(a){
    let u = [...new Set(a)];  
    return u
}
module.exports.array2d = function(a){ 
    var newArr = [];
    while(a.length) newArr.push(a.splice(0,3));
    return newArr
}
module.exports.arrayFlat = function(a){
    return a.flat()
}
module.exports.matrix = function(rows, cols, defaultValue){
    var arr = [];
    for(var i=0; i < rows; i++){
        arr.push([]);
        arr[i].push( new Array(cols));  
        for(var j=0; j < cols; j++){
          arr[i][j] = defaultValue;
        }
    }
  return arr;
  }
module.exports.train = function(a){
    sample = a
    return "Trained!"
}
module.exports.predict = function(a){
    return sample[a]
}
module.exports.infplus = function(){
    var re = ""
    re = 1e308
    return re
}
