var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', function(e) {
      //console.log('collection has been selected. this is videoplayer listening', e);
      this.model = e;
      this.render();
    }, this);
  },

  render: function() {
    var html = [
      '<div class="video-player">',
      '<div class="embed-responsive embed-responsive-16by9">',
      `<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${this.model.get('id')}" allowFullScreen></iframe>`,
      '</div><div class="video-player-details">',
      `<h3>${this.model.get('snippet').title}</h3>`, //vid title
      `<div>${this.model.get('snippet').description}</div></div></div>` //video description
    ].join('');

    this.$el.html($(html));
    return this.$el;

  },


});
//this.$el.html('<div class="loading">Please wait...</div>');
//template: templateURL('src/templates/videoPlayer.html')
//https://www.youtube.com/watch?v=${this.model.get('id')}
