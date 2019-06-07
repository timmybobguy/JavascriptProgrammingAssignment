new Vue({
  el: '#app',
  data: {
    message: "Please load X Values",
    messageData: ["Please load X Values","Please load Y Values"],
    contentX: [],
    contentY: [],
    secondFile: false,
    showButton: false,
    correlation: "",
    b0: "",
    b1: ""
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files
      if (files.length) {
        this.loadNumbers(files[0])
      }
    },

    loadNumbers(file) {
      let reader = new FileReader()

      if (this.secondFile == false) {
        reader.onload = (e) => {
          this.contentX =  e.target.result.split(/\n/)
        }
        this.secondFile = true
        this.message = this.messageData[1]
      } else {
        reader.onload = (e) => {
          this.contentY =  e.target.result.split(/\n/)
        }
        this.secondFile = false
        this.message = this.messageData[0]
        this.showButton = true
      }

      reader.readAsText(file)

    },
    calculate() {
      if (this.secondFile == false) {
        let answerArray = []
        answerArray = calculate(this.contentX, this.contentY)
        this.correlation = answerArray[0]
        if (this.correlation < -0.25) {
          this.correlation = String(answerArray[0]) + " (There is a strong negative correlation between these arrays)"
        } else if (this.correlation > 0.25) {
          this.correlation = String(answerArray[0]) + " (There is a strong positive correlation between these arrays)"
        } else {
          this.correlation = String(answerArray[0]) + " (There is little to no correlation between these arrays)"
        }
        this.b0 = answerArray[1]
        this.b1 = answerArray[2]
      }
    }

  }
})
