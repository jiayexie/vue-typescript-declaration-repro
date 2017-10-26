import Vue from "vue";

const component = Vue.extend({
    data() {
        return {
            tip: 'The URL may be misspelled or the page you are looking for is no longer available.'
        };
    },
    props: {
        message: String
    },
    computed: {
        errorMsg(): string {
            return 'We are sorry, ' + this.message;
        }
    },
    methods: {
        sayHello() {
            this.errorMsg
        }
    // },
    // render(createElement) {
    //     return createElement('div', this.message);
    }
});

export default component;