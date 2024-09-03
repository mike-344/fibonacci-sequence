function fibonacciIterative(n){
    let arr = [0, 1]
    let fib;
    if (n === 1){
        return [0]
    }
    if (n===2){
        return [0, 1]
    }
    if(n > 2){
    for (let i = 2; i < n; i++){
        fib = (arr[arr.length-1]) + (arr[arr.length - 2])
        arr.push(fib)
    }
    return arr;
}
}


function fibonacciRecursive(n) {
    
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

   
    let arr = fibonacciRecursive(n - 1);
    let nextFib = (arr[arr.length - 1] || 0) + (arr[arr.length - 2] || 0);
    arr.push(nextFib);

    return arr;
}

console.log(fibonacciRecursive(8))






