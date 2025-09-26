const questionMarks = (str) => {
    if (str.length >= 5) {
        let newArr = str.replace(/[^0-9?]/g, "").split("");
        let sums = [];
        let sum = 0;
        let iterator = 0
        newArr.forEach(item => {
            if(item !== "?"){       
                sum = parseInt(item) + parseInt(newArr[iterator + 4])
                sums.push(sum)
                console.log(sum)
            }
        });
        console.log(newArr)
        console.log(sum)
        return sums.includes(10) ?  true : false
    }else{
       return console.log("5 karakter olmalı!")
    }
}
console.log(questionMarks("asdas9ass1/5/%&35s2d9as2d????5s"))