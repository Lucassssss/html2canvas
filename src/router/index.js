import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EditorMain from '@/components/editor/Main'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'editorMain',
        component: EditorMain
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }]
})