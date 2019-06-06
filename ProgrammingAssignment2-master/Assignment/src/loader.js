new Vue({
  el: '#app',
  data: {
    content: []
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

      reader.onload = (e) => {
        this.content =  e.target.result.split(/\n/)
      }
	
	  for (var i = 0; i < this.content.length; i++) {
		theNumberArray.addValues(this.content[i])
	  }
      reader.readAsText(file)

    }
	
  }
})