const bestSalesMonth = () => {
    const datesArray = []
    yearlyFigures.forEach((sale, index) =>{
        profitArray.push(yearlyFigures[index].purchase_date)
    })
    var numMapping = {};
    for(var i = 0; i < profitArray.length; i++){
        if(numMapping[profitArray[i]] === undefined){
            numMapping[profitArray[i]] = 0;
        }        
        numMapping[profitArray[i]] += 1;
    }
    console.log(numMapping)
    return datesArray
}
console.log(bestSalesMonth())
console.log()