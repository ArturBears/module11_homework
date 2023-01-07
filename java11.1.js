function simplyNamber(num){
    if ((num < 2) || (num > 1000)) {
        return "data is not correct";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let volumeNambers = Math.floor(Math.random() * 2000);
let s = simplyNamber(volumeNambers);
console.log("Number " + volumeNambers + ' Prime number = ' + s);