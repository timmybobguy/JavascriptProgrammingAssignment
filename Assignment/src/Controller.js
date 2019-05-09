class Controller {
	static setup() {
		let theNumberArray = new NumberArray()

		theNumberArray.addValues(130, 186)
		theNumberArray.addValues(650, 699)
		theNumberArray.addValues(99, 132)
		theNumberArray.addValues(150, 272)
		theNumberArray.addValues(128, 291)
		theNumberArray.addValues(302, 331)
		theNumberArray.addValues(95, 199)
		theNumberArray.addValues(945, 1890)
		theNumberArray.addValues(368, 788)
		theNumberArray.addValues(961, 1601)

		theNumberArray.calculateCorrelation()
		console.log(theNumberArray.calculateB1())


		return theNumberArray
	}




}
