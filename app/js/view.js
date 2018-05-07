

const Login = { template: window.document.getElementById("login-temp").value }
const Home = { template: window.document.getElementById("home-temp").value }
const NotFound = {template: {"<p>noting there<p>"}}
const routes = {
  '/': Home,
  '/login': Login
}


var app = new Vue({
    el: '#app',
    data: {
      email:"",
      password:"",
      account:null,
      ready:false,
      currentRoute: window.location.pathname
    }
    ,
    methods: {
      reverseMessage: function () {
        this.email = this.email.split('').reverse().join('')
      }
    },
    computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
   },
    render(h) { return h(this.ViewComponent) }

})
