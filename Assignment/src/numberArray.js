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
		var xTotal = 0
		for (var i = 0; i < this.n(); i++) {
			xTotal += Number(this.allMyXValues[i])
		}
		return xTotal
	}

	yTotal() {
		var yTotal = 0
		for (var i = 0; i < this.n(); i++) {
			yTotal += Number(this.allMyYValues[i])
		}
		return yTotal
	}

	n() {
		return this.allMyXValues.length
	}

	xSquared() {
		var xSquared = 0
		for (var i = 0; i < this.n(); i++) {
			xSquared += Math.pow(Number(this.allMyXValues[i]),2)
		}
		return xSquared
	}

	ySquared() {
		var ySquared = 0
		for (var i = 0; i < this.n(); i++) {
			ySquared += Math.pow(Number(this.allMyYValues[i]),2)
		}
		return ySquared
	}

	xTimesy() {
		var xTimesy = 0
		for (var i = 0; i < this.n(); i++) {
			xTimesy += ((Number(this.allMyXValues[i]))*(Number(this.allMyYValues[i])))
		}
		return xTimesy
	}
	calculateCorrelation() {
		return ((this.n()*this.xTimesy())-(this.xTotal()*this.yTotal())) / Math.sqrt(((this.n()*this.xSquared())-(Math.pow(this.xTotal(),2))) * ((this.n()*this.ySquared())-(Math.pow(this.yTotal(),2))))
	}

	calculateLinearRegression() {
		var xAve = this.xTotal() / this.n()
		console.log(xAve)
	}






}
