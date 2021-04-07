var vm = new Vue({
        el: "#app",
        data: {
            a: '',
            b: '',
            result: '',
            opt: "+",
        },
        methods: {
            getResult() {
                switch (this.opt) {
                    case "+":
                        this.result = parseInt(this.a) + parseInt(this.b)
                        break
                    case "-":
                        this.result = parseInt(this.a) - parseInt(this.b)
                        break
                    case "*":
                        this.result = parseInt(this.a) * parseInt(this.b)
                        break
                    case "/":
                        this.result = parseInt(this.a) / parseInt(this.b)
                        break
                }
            },
            clearData() {
                this.a = ''
                this.b = ''
                this.opt = "+"
                this.result = ''
            }
        }
    })