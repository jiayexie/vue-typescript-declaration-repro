import Vue from "vue";
import ErrorComponent from "./components/error";

let v = new Vue({
    el: "#app",
    template: `<error-component message="you have an error"></error-component>`,
    components: {
        ErrorComponent
    }
});
