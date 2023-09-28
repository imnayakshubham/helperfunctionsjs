export const isValidNumber = (value: number | string | null | undefined) => {
    try {
        if (value === undefined || value === null || value === "") {
            return false;
        }
        const numValue = Number(value);
        return !isNaN(numValue);
    } catch (error) {
        console.log(`Something went wrong: ${JSON.stringify(error)}`)
        throw error;
    }
}

export const isInRange = (range: [number, number], userInput: number) => {
    try {
        if (range.length !== 2) {
            throw new Error(`'range' array must contain exactly 2 elements.`);
        }
        const [min, max] = range;
        if (userInput >= min && userInput <= max) {
            console.log(`${userInput} is in the range [${min}, ${max}]`);
            return true;
        } else {
            console.log(`${userInput} is NOT in the range [${min}, ${max}]`);
            return false;
        }
    } catch (error) {
        console.log(`Something went wrong: ${JSON.stringify(error)}`)
        throw error;
    }
}


export const generateRandomNumbersInRange = (
    range: [number, number],
    count: number,
    step: number = 1,
    precision: number = 2,
    unique: boolean = false
): number[] => {
    const [min, max] = range; // Destructure the range values
    if (min >= max) {
        throw new Error("Minimum value must be less than the maximum value.");
    }

    if (step <= 0) {
        throw new Error("Step must be greater than zero.");
    }

    const randomNumbers: Set<number> = new Set();
    while (randomNumbers.size < count) {
        const randomNumber = Math.random() * (max - min) + min;
        const roundedNumber = Math.floor(randomNumber / step) * step;
        const roundedToPrecision = parseFloat(
            roundedNumber.toFixed(precision)
        );

        if (!unique || !randomNumbers.has(roundedToPrecision)) {
            randomNumbers.add(roundedToPrecision);
        }
    }

    return Array.from(randomNumbers);
}

