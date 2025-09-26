// const findintersection=(arr)=>{
//   let intersection =[];
//   let sectionOne = arr[0].replace(/\s/g,"").split(",")
//   let sectionTwo = arr[1].replace(/\s/g,"").split(",")
//   sectionTwo.forEach(item => {
//     if(sectionOne.includes(item)){
//         intersection.push(item)
//     }
//   });
//   if(intersection.length > 0){
//    return intersection.toString()
//   } else{
//     return false
//   }
// }


const findintersection = (arr) => {
    let intersection = [];
    let merged = [arr.join()];
    let sectionOne = merged[0].replace(/\s/g, "").split(",")
    sectionOne.forEach(item => {
        if (sectionOne.indexOf(item) !== sectionOne.lastIndexOf(item) && !intersection.includes(item)) {
            intersection.push(item);
        }
    });
    if(intersection.length != 0){
        let toplam = intersection.map(Number)
        return toplam.reduce((a,b)=>a+b,0)
    }else{
        return false
    }
}

console.log(findintersection(["1, 2  , 3, 4", "1 ,5,6,4"]))