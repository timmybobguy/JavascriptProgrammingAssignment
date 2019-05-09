class NumberArray {
	constructor () {
		this.allMyXValues = []
		this.allMyYValues = []
	}

	addValues(newXvalue, newYvalue) {
		this.allMyXValues.push(newXvalue)
		this.allMyYValues.push(newYvalue)

	}

	xTotal() {
		xTotal = 0
		for (var i = 0; i < n; i++) {
			xTotal += Number(this.allMyXValues[i])
		}
		return xTotal
	}

	yTotal() {
		yTotal = 0
		for (var i = 0; i < n; i++) {
			yTotal += Number(this.allMyYValues[i])
		}
		return yTotal
	}

	n() {
		return this.allMyXValues.length
	}

	xSquared() {
		xSquared = 0
		for (var i = 0; i < n; i++) {
			xSquared += Math.pow(Number(this.allMyXValues[i]),2)
		}
		return xSquared
	}

	ySquared() {
		ySquared = 0
		for (var i = 0; i < n; i++) {
			ySquared += Math.pow(Number(this.allMyYValues[i]),2)
		}
		return ySquared
	}

	xTimesy() {
		xTimesy = 0
		for (var i = 0; i < n; i++) {
			xTimesy += ((Number(this.allMyXValues[i]))*(Number(this.allMyYValues[i])))
		}
		return xTimesy
	}
	calculateCorrelation() {
		return ((n()*xTimesy())-(xTotal()*yTotal())) / Math.sqrt(((n()*xSquared())-(Math.pow(xTotal(),2))) * ((n()*ySquared())-(Math.pow(yTotal(),2))))
	}

	calculateLinearRegression() {
		var xAve = xTotal / n
		console.log(xAve)
	}






}
