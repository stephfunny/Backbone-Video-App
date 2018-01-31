var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();

    // window.videos = new Videos(window.exampleVideoData);
    // window.searchView = new SearchView({el: '.search'})
    // window.videoListView = new VideoListView({collection: window.videos, el: '.list'})
    // window.videoPlayerView = new VideoPlayerView({model: window.videos.models[0], el: '.player'})
  },

  render: function() {
    this.$el.html(this.template());
    // this.$el.find('.search').prepend(window.searchView.render.call(window.searchView));
    // this.$el.find('.list').prepend(window.videoListView.render());
    // this.$el.find('.player').prepend(window.videoPlayerView.render());
    new SearchView({el: '.search'}).render();
    new VideoListView({collection: this.videos, el: '.list'}).render();
    new VideoPlayerView({collection: this.videos, model: this.videos.models[0], el: '.player'}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
