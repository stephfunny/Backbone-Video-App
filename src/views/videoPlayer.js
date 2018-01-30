var VideoPlayerView = Backbone.View.extend({


  render: function() {
    var html = [
      '<div class="video-player">',
      '<div class="embed-responsive embed-responsive-16by9">',
      `<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1w8Z0UOXVaY" allowFullScreen></iframe>`,
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
