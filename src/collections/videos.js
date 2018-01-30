var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(videos) {
    for (var i = 0; i < videos.length; i++) {
      this.models.push(new Video(videos[i]));
    }
  }



});
