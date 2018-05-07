
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/about': About
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
