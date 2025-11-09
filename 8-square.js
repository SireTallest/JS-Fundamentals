const args = process.argv.length - 1;
const argsInt = parseInt(process.argv[2]);

for (let i = 0; i < argsInt; i++) {
    console.log("X".repeat(argsInt));
}

if (isNaN(argsInt)) {
    console.log("Missing size");
}
