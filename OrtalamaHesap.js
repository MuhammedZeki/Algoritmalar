/* Beklenen çıktı:
{
  "Engineering": {
    "totalSalary": 250000,
    "averageAge": 35.66,
    "count":3
  },
  "Marketing": {
    "totalSalary": 125000,
    "averageAge": 26.5
  }
}
*/


// const employees = [
//   { name: "Ayşe", department: "Engineering", salary: 75000, age: 32 },
//   { name: "Mehmet", department: "Marketing", salary: 60000, age: 28 },
//   { name: "Fatma", department: "Engineering", salary: 85000, age: 35 },
//   { name: "Can", department: "Marketing", salary: 65000, age: 25 },
//   { name: "Elif", department: "Engineering", salary: 90000, age: 40 }
// ];

// const OrtalamaHesap=(arr)=>{
//     let obj={};
//     arr.forEach((item)=>{
//         if(obj[item.department]){
//             obj[item.department].totolPrice += item.salary;
//             obj[item.department].totalAge += item.age;
//             obj[item.department].count += 1;
//         }else{
//             obj[item.department] = {
//                 totolPrice:item.salary,
//                 totalAge:item.age,
//                 count:1
//             }
//         }
//     })
//     let sonuc={};
//     for(let item in obj){
//         const ortalamaYas = obj[item].totalAge / obj[item].count;
//         sonuc[item]={
//             totalSalary: obj[item].totolPrice,
//             averageAge : parseFloat(ortalamaYas.toFixed(2))
//         }
//     }
//     return sonuc
// }
// console.log(OrtalamaHesap(employees))



/*
Beklenen çıktı:
{
  "18-25": {
    "count": 3,
    "averageScore": 83.66
  },
  "26-35": {
    "count": 2,
    "averageScore": 93.5
  },
  "36+": {
    "count": 1,
    "averageScore": 65
  }
}
*/ 
const participants = [
  { id: 1, age: 22, engagementScore: 85 },
  { id: 2, age: 30, engagementScore: 92 },
  { id: 3, age: 19, engagementScore: 78 },
  { id: 4, age: 38, engagementScore: 65 },
  { id: 5, age: 25, engagementScore: 88 },
  { id: 6, age: 34, engagementScore: 95 }
];

const OrtalamaHesap=(arr)=>{
    const result={};
    arr.forEach(item => {
        let yasGrup;
        if(item.age >= 18 && item.age <= 25){
            yasGrup="18-25";
        }else if(item.age >= 26 && item.age <=35){
            yasGrup="26-35";
        }else{
            yasGrup="36+";
        }
        if(result[yasGrup]){
            result[yasGrup].engagementScore += item.engagementScore;
            result[yasGrup].count += 1;
        }else{
            result[yasGrup]={
                engagementScore :item.engagementScore,
                count:1
            }
        }
    });
    const newObj={};
    for(let item in result){
        const ortalama = result[item].engagementScore / result[item].count;
        if(!newObj[item]){
            newObj[item]={
                averageScore:parseFloat(ortalama.toFixed(2)),
                count:result[item].count
            }
        }
    }
    return newObj;
}
console.log(OrtalamaHesap(participants));