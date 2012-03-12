$(document).ready(function() {
    var $container = $("div.main-image-area > div.img-wrapper"),
        $vp = $($("#vp-content").text()),
        $feeds = $vp.find("#vp-feed"),
        width = $container.width(),
        height = $container.height(),
        url = 'http://search.twitter.com/search.json?q=hsopen&rpp=5&include_entities=true&with_twitter_user_id=true&result_type=mixed',
        iterator = 0;

    var renderResults = function($column1, $column2, data) {
        for(i in data.results) {
            var res = data.results[i],
                date = new Date(res.created_at),
                $vpfi = $('<div class="vp-feed-item"><div class="vp-feed-user"><strong>' + res.from_user_name + '</strong></div><div>' + res.text + '</div><div class="vp-feed-date">' + date.getDate() + '</div></div>');
            if(iterator % 2 == 0) {
                $column1.append($vpfi);
            } else {
                $column2.append($vpfi);
            }
            iterator++;
        }
    }

    $.getJSON(url + '&callback=?', function(data) {
        $container.append($vp);
        $vp.css('margin-top', -height + 'px');
        $vp.height(height);
        $feeds.height(height-85);
        $vp.animate({ 'opacity': 1 });
        var $column1 = $vp.find("#column1").first(),
            $column2 = $vp.find("#column2").first();
            console.log(data);
        renderResults($column1, $column2, data);
        $.getJSON(url + data.results.next_page + '&callback=?', function(data) {
            renderResults($column1, $column2, data);
            $.getJSON(url + data.results.next_page + '&callback=?', function(data) {
                renderResults($column1, $column2, data);
            });
        });
    });
});