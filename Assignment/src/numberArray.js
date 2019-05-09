class NumberArray {
	constructor () {
		this.allMyXValues = []
		this.allMyYValues = []
	}

	addValues(newXvalue, newYvalue) {
		this.allMyXValues.push(newXvalue)
		this.allMyYValues.push(newYvalue)

	}

	calculateCorrelation() {

		var n = this.allMyXValues.length

		var xTotal = 0
		for (var i = 0; i < n; i++) {
			xTotal += Number(this.allMyXValues[i])
		}
		var yTotal = 0
		for (var i = 0; i < n; i++) {
			yTotal += Number(this.allMyYValues[i])
		}
		var xSquared = 0
		for (var i = 0; i < n; i++) {
			xSquared += Math.pow(Number(this.allMyXValues[i]),2)
		}
		var ySquared = 0
		for (var i = 0; i < n; i++) {
			ySquared += Math.pow(Number(this.allMyYValues[i]),2)
		}
		var xTimesy = 0
		for (var i = 0; i < n; i++) {
			xTimesy += ((Number(this.allMyXValues[i]))*(Number(this.allMyYValues[i])))
		}

		var finalValue = ((n*xTimesy)-(xTotal*yTotal)) / Math.sqrt(((n*xSquared)-(Math.pow(xTotal,2))) * ((n*ySquared)-(Math.pow(yTotal,2))))
		console.log(finalValue)

		return finalValue
	}






}
