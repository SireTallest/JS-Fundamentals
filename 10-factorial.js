const args = process.argv.length - 1;

const factorial = parseInt(process.argv[2]);

function computeFactorial(factorial) {
    if (isNaN(factorial) || factorial === 0) {
        return 1;
    } else {
        return  factorial * computeFactorial(factorial - 1);
    }
}

console.log(computeFactorial(factorial));