var siteApp = new Vue({
  el: '#siteApp',
  data() {
    return {
      data: null
    };
  },
  mounted() {
    axios
      .get('https://heroku-lumen-kxxb.herokuapp.com/api/settings')
      .then(response => (this.data = response.data.data))
      .catch(error => console.log(error));
  }
})
