const bestSalesMonth = () => {
    const datesArray = []
    yearlyFigures.forEach((sale, index) =>{
        profitArray.push(yearlyFigures[index].purchase_date)
    })
    return datesArray
}
console.log(bestSalesMonth())