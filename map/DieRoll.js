//function to roll die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generates number between 1-6
}

function simulateDieRolls() {
    //map to store count
    let dieCount = {
        1: 0, 
        2: 0, 
        3: 0, 
        4: 0,
        5: 0, 
        6: 0 
    };
    let maxRolls = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        dieCount[roll]++;

        if (dieCount[roll] === maxRolls) {
            reachedMax = true;
        }
    }

    //find max and min occurrences
    let maxNumber = 1, minNumber = 1;
    let maxCount = dieCount[1], minCount = dieCount[1];

    //find max and min
    for (let num in dieCount) {
        if (dieCount[num] > maxCount) {
            maxCount = dieCount[num];
            maxNumber = num;
        }
        if (dieCount[num] < minCount) {
            minCount = dieCount[num];
            minNumber = num;
        }
    }
    console.log("number that appeared most", maxNumber, "with", dieCount[maxNumber]);
    console.log("number that appeared least", minNumber, "with", dieCount[minNumber]);
}

simulateDieRolls();
