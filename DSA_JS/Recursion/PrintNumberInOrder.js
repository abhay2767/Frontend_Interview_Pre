function printIncreaseOrder(x) {
    let n = 10;
    if (x > n) return;
    console.log("Increasing Order:-", x++)
    printIncreaseOrder(x)
}

printIncreaseOrder(1)

function printDecreaseOrder(x) {
    if (x < 1) return;
    console.log("Decreasing Order:- ", x--)
    printDecreaseOrder(x)
}

printDecreaseOrder(10)