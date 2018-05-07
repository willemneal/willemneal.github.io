

// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Login = { props: ["email","password"],
                template: window.document.getElementById("login-temp") }
const Home = { props: ["account","ready"],
            template: window.document.getElementById("home-temp") }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})




var app = new Vue({
    el: '#app',
    data: {
      email:"",
      password:"",
      account:null,
      ready:false
    }
    ,
    methods: {
      reverseMessage: function () {
        this.email = this.email.split('').reverse().join('')
      }
    },
    router

})
