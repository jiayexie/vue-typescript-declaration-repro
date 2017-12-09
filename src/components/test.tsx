import Vue, { VNode } from 'vue';

interface MixinMethods {
    aMethodFromMixin(): void;
}

const exampleMixin = Vue.extend({
    methods: {
        aMethodFromMixin() {
            console.log('hello from the world');
        }
    }
})

const component1 = Vue.extend<{}, MixinMethods, {}, {}>({
    mixins: [exampleMixin],
    render(h): VNode {
        this.aMethodFromMixin();
        return <div>Test</div>;
    }
})

interface MyMethodsOnly {
    myOwnMethod(): void;
}

const component2 = Vue.extend<{}, MyMethodsOnly, {}, {}>({
    mixins: [exampleMixin],
    methods: {
        myOwnMethod() {
            this.aMethodFromMixin();
            console.log('hello from myself');
        }
    },
    render(h): VNode {
        this.aMethodFromMixin();
        return <div>Test</div>;
    }
})

interface MyMethods extends MixinMethods {
    myOwnMethod(): void;
}

const component3 = Vue.extend<{}, MyMethods, {}, {}>({
    mixins: [exampleMixin],
    methods: {
        myOwnMethod() {
            this.aMethodFromMixin();
            console.log('hello from myself');
        }
    },
    render(h): VNode {
        this.aMethodFromMixin();
        return <div>Test</div>;
    }
})
