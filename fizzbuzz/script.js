const fs = require('fs');

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getFizzBuzzStr(num) {
    if (isPrime(num)) return `${num} FIZZBUZZ++`;

    const words = [
        [num % 3 === 0, 'FIZZ'],
        [num % 5 === 0, 'BUZZ']
    ].filter(([condition]) => condition)
        .map(([, word]) => word)
        .join('');

    return words ? `${num} ${words}` : num.toString();
}

function runFizzBuzz(start, end) {
    const stream = fs.createWriteStream('fizzbuzz.log', { flags: 'a' });

    const timestamp = new Date().toISOString();
    stream.write(`\n--- FizzBuzz++ Run at ${timestamp} ---\n`);

    for (let i = start; i <= end; i++) {
        const result = getFizzBuzzStr(i);
        console.log(result);
        stream.write(result + '\n');
    }
    stream.end();
}

runFizzBuzz(1, 500);