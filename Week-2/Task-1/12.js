function printMultiplicationTable(number) {
    let i = 1;
    while (i <= 10) {
        console.log(`${number} x ${i} = ${number * i}`);
        i++;
    }
}

// Example usage:
printMultiplicationTable(5);
