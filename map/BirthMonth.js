//function to generate birth month
function generateBirthMonths() {
    //map to store birth date
    let birthMonthMap = new Map();
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []);
    }

    //generate 50 random birth months
    for (let i = 1; i <= 50; i++) {
        let randomMonth = Math.floor(Math.random() * 12) + 1; 
        birthMonthMap.get(randomMonth).push(i);
    }
    return birthMonthMap;
}

//generate and store birth months
let birthMonths = generateBirthMonths();

//print result
for (let [month, individuals] of birthMonths.entries()) {
    console.log(`Month ${month} `, individuals.join(", "));
}
