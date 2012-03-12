$(document).ready(function() {
    var $container = $("div.main-image-area > div.img-wrapper"),
        width = $container.width(),
        height = $container.height();
    console.log(width, height);
    $.getJSON('http://search.twitter.com/search.json?q=hsopen&rpp=5&include_entities=true&with_twitter_user_id=true&result_type=mixed&callback=?', function(data) {
        
    });
});