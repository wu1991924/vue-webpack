/**
 * Created by iris_wu on 2017/3/27.
 */
import Vue from 'vue';
import './list.css';

Vue.component('list', Vue.extend({
    template: 'list.html',
    data () {
        return {
            peoples: [{
                name: "小红",
                age: 20
            }, {
                name: "张三",
                age: 12
            }, {
                name: "三五",
                age: 78
            }, {
                name: "阿文",
                age: 22
            }, {
                name: "李六",
                age: 78
            },]
        }
    },
    methods: {
        goHomePage (){
            this.$route.router.go({name: "index"});
        }
    }
}))