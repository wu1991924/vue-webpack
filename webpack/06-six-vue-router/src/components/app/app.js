/**
 * Created by iris_wu on 2017/3/27.
 */
//import hello from "../hello/hello";
import Vue from 'vue';
import './app.css';

Vue.components('app', Vue.extend({
    template: 'app.html',
    data () {
        return {
            name: "guowenfh",
            age: "21"
        }
    },
    methods: {
        golist (){
            this.$route.router.go({name: "list"});
        }
    },
}))