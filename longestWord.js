const longestWord =(str)=>{

    const arr = str.replace(/[^a-zA-Z ]/g,"").split(" ")
    arr.sort((a,b)=> b.length - a.length)
    return arr[0];
}

console.log(longestWord("muhammed%4&-  asd sadasdasd zaar/,,+ keremmmmm%%%4"))


//Nokatalama işaretlerini kaldır