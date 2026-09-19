//tem[erature Checker//
function temperaturchecker(temp) {

    if (temp<20){
    
    return"cold";
    

}else if (temp<30 && temp>20){
    
    return"normal"

}else
    {return"hot";}
}

console.log(temperaturchecker(25))