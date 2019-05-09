class Controller {
	static setup() {
		let theNumberArray = new NumberArray()
		
		theNumberArray.addValues(83, 11.2)
		theNumberArray.addValues(116, 9.3)
		theNumberArray.addValues(186, 21.6)
		theNumberArray.addValues(81, 6.9)
		theNumberArray.addValues(114, 10.2)
		
		theNumberArray.calculateCorrelation()
		
		
		return theNumberArray
	}

	


}