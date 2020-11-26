var blogApp = new Vue({
  el: '#blogApp',

  data() {
    return {
      loading_text: 'Загрузка...',
      loading_errored_text: 'Проблема с API',
      posts: [],
      site_settings: [],
      loading: true,
      errored: false
      }
  },
  methods: {
    getSettings() {
      axios
        .get('https://heroku-lumen-kxxb.herokuapp.com/api/settings')
        .then(response => (this.site_settings = response.data.data))
        .catch(error => {console.log(error);
           this.errored = true;
         })
         .finally(() => {
           this.loading = false;
         });
    },
   getPosts() {
     axios
       .get('https://heroku-lumen-kxxb.herokuapp.com/api/blog/all')
       .then(response => (this.posts = response.data.data.items));
   }
 },
 created() {
      this.getPosts()
      this.getSettings()

 }
})

Vue.component('blog-item', {
  props: ['item'],
  template:  `
  <div class="card mb-4">
    <img class="card-img-top" v-bind:src="item.lead_img_url" alt="Card image cap">
    <div class="card-body">
      <h2 class="card-title">{{ item.title }}</h2>

      <p class="card-text">
        {{ item.lead_text }}
      </p>
      <a v-bind:href="item.slug" class="btn btn-primary">Read More &rarr;</a>
    </div>
    <div class="card-footer text-muted">
      Posted on {{ item.created_at }} by
      <a v-bind:href="item.author_profile_url">{{ item.author }}</a>
    </div>
  </div>
  `
})


Vue.component('widget-item', {
  props: ['item'],
  template:  `
    <div class="card my-4" >
      <h5 class="card-header">{{ item.title }} {{ item.available }}</h5>
      <div class="card-body">

        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for...">
          <span class="input-group-append">
            <button class="btn btn-secondary" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div>
  `
})
