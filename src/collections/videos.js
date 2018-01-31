var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(videos) {
    for (var i = 0; i < videos.length; i++) {
      this.models.push(new Video(videos[i]));
    }
  },

  search: function() {

    var keyword = $('.form-control').val();
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&key=${window.YOUTUBE_API_KEY}`;

    $.ajax({
      url: url,
      success: function(data) {
        console.log('success!', data);
      },
      dataType: 'json'
    });

  }


});
