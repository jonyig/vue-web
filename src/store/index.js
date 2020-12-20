import Vue from 'vue';
import Vuex from 'vuex';
// root

// modules

Vue.use( Vuex );

const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})
export default new Vuex.Store({
    // root
    // 將整理好的 modules 放到 vuex 中組合
    modules,
    // 嚴格模式，禁止直接修改 state
    strict: true
});