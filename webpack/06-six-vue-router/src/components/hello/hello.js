/**
 * Created by iris_wu on 2017/3/27.
 */
import Vue from 'vue';
import './hello.css';

Vue.component('hello', Vue.extend({
    template: 'hello.html',
    data () {
        return {
            hello: "这里是嵌套路由！！！1"
        }
    }
}))