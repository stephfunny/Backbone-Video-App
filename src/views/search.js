var SearchView = Backbone.View.extend({
  // el:
  // ,
  render: function() {
    this.$el.html(this.template());
    console.log(this);
    console.log(this.$el.html());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
