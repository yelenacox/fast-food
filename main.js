const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredient of rawIngredients) {
    if (ingredient === 'egg'){
        finishedFood.push('biscuit')
    } else {
        if (ingredient === "beef patty"){
            finishedFood.push('burger')
        } else {
            if (ingredient === 'potato'){
                finishedFood.push('fries')
            }
        }
    }
	/*
		Write your if/else code here. In each block use .push() to insert
		the correct string into the finishedFood array.
	*/
}

console.log(finishedFood)

const rainfallPerMonth = [ 5, 12, 18, 20, 22, 17, 29, 21, 20, 22, 30, 9 ]
let totalRainfall = 0  // Start at 0 and add to it in the loop

for (const rain of rainfallPerMonth) {
	totalRainfall += rain
}

// To find the average, you take the total and divide by the number of items
const averageRainfall = totalRainfall / rainfallPerMonth.length

console.log(`Total rainfall was ${totalRainfall} inches
Average rainfall was ${averageRainfall} inches
`)