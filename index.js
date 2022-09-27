Vue.createApp({
    data() {
        return {
            message: null,
            result: null,
            count: null
        }
    },
    methods: {
        Do() {
            if (this.count && this.message)
                if (this.count > 0)
                    this.result = this.message.repeat(this.count)
                else
                    this.result = "Must be a non-negative number: " + this.count
            else
                this.result = "Please type in both a count and a message"
        }
    }
}).mount("#app")