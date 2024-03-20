function asyncFunction() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const result = 'Hiii';
            resolve(result);
        },  1000);
    });
}

asyncFunction()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
