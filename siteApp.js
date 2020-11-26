var siteApp = new Vue({
  el: '#siteApp',
  data() {
    return {
      data: null
    };
  },
  mounted() {
    axios
      .get('http://kxxb-backend.local/api/settings')
      .then(response => (this.data = response.data.data))
      .catch(error => console.log(error));
  }
})
