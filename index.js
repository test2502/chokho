async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
            console.log("Hello Universe");
        }, 3000);
    })
}

getdata()