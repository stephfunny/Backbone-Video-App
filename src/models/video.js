var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  },
  render: function() {
    var html = [
      '<div class="video-list-entry media">',
        '<div class="media-left">',
          `<img class="media-object" src="${this.get('snippet').thumbnails.default.url}" />`,
        '</div>',
        '<div class="media-body">',
          `<div class="video-list-entry-title">${this.get('snippet').title}</div>`,
          `<div class="video-list-entry-detail">${this.get('snippet').description}</div>`,
        '</div>',
      '</div>'
    ].join('');
    this.$el = $(html);
    return this.$el;

  }

});
