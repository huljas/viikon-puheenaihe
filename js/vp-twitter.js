$(document).ready(function() {
    var $container = $("div.main-image-area > div.img-wrapper"),
        $vp = $($("#vp-content").text()),
        $feeds = $vp.find("#vp-feed"),
        width = $container.width(),
        height = $container.height(),
        url = 'http://search.twitter.com/search.json?q=hsopen&rpp=5&include_entities=true&with_twitter_user_id=true&result_type=mixed';
    var renderResults = function($column1, $column2, data) {
        for(i in data.results) {
            var res = data.results[i],
                $vpfi = $('<div class="vp-feed-item">' + res.text + '</div>');;
            if(i % 2 == 0) {
                $column1.append($vpfi);
            } else {
                $column2.append($vpfi);
            }
        }
    }
    
    $.getJSON(url + '&callback=?', function(data) {
        $container.append($vp);
        $vp.height(height);
        $feeds.height(height-85);
        $vp.css('margin-top', -height + 'px');
        var $column1 = $vp.find("#column1").first(),
            $column2 = $vp.find("#column2").first();
        
        renderResults($column1, $column2, data);
        
        $.getJSON(url + data.results.next_page + '&callback=?', function(data) {
            renderResults($column1, $column2, data);
        });
        
    });
});