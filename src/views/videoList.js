var VideoListView = Backbone.View.extend({

  // render: function() {
  //   this.$el.children().detach();
  //   this.$el.html(this.template());
  //   return this;
  // },

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    var arr = [];
    for (var i = 0; i < this.collection.models.length; i++) {
      var newView = new VideoListEntryView({model: this.collection.models[i]});
      this.$el.append(newView.render());
    }
    return this.$el;
  }



  //template: templateURL('src/templates/videoList.html')

});
