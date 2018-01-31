var VideoListEntryView = Backbone.View.extend({

  events: {
    'click': 'clickHandler'
  },

  clickHandler: function() {
    this.model.select();
  },

  render: function() {
    var html = [
      '<div class="video-list-entry media">',
      '<div class="media-left">',
      `<img class="media-object" src="${this.model.get('snippet').thumbnails.default.url}" />`,
      '</div>',
      '<div class="media-body">',
      `<div class="video-list-entry-title">${this.model.get('snippet').title}</div>`,
      `<div class="video-list-entry-detail">${this.model.get('snippet').description}</div>`,
      '</div>',
      '</div>'
    ].join('');
    this.$el.html($(html));
    return this.$el;
  },

  //template: templateURL('src/templates/videoListEntry.html')

});
