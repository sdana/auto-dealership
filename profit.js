const yearProfit = () => {
    profitArray = []
    yearlyFigures.forEach((sale, index) =>{
        profitArray.push(yearlyFigures[index].gross_profit)
    })
    return profitArray.reduce((current, next) => {return current+next})
}
console.log(`Profit this year: ${yearProfit()}`)