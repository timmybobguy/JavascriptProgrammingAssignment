new Vue({
  el: '#app',
  data: {
    message: "Please load X Values",
    messageData: ["Please load X Values","Please load Y Values"],
    contentX: [],
    contentY: [],
    secondFile: false
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
      }


      reader.readAsText(file)

    }

  }
})
