function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1);
		arr.push(root2);
		return arr;
	}
}
solveEquation(1, 0, -1);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (amount <= contribution || percent < 0 || countMonths <= 0) {
        return 0;
    }
    const monthlyPercent = (percent / 100) / 12;
    const creditBody = amount - contribution;
    const monthlyPayment = (creditBody * monthlyPercent) / (1 - Math.pow(1 + monthlyPercent, -countMonths));
    const totalAmount = monthlyPayment * countMonths + contribution;
    return parseFloat(totalAmount.toFixed(2));
}
console.log(calculateTotalMortgage(6, 21, 5000000, 240));

