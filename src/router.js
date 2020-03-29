import VueRouter from "vue-router"

function view(path, view) {
    return { path, component: require(`./views/${view}.vue`).default }
}

const routes = [
    view('/foo', 'Test')
]

export default new VueRouter({
    routes
})