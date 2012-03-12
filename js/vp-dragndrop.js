$(function(){
	var $drop =  $("div.main-image-area").append("<div id=\"vp-drop\">");

	// Tells the browser that we *can* drop on this target
	$drop.on('dragover',  cancel);
	$drop.on('dragenter', cancel);

	$drop.on('drop', function (event) {
  		console.log(event);

      // stops the browser from redirecting off to the text.
  		if (event.preventDefault) {
    		event.preventDefault();
  		}

  		$(this).append('<b>' + event.originalEvent.dataTransfer.getData('URL') + '</b>');
      $(this).append("<p>" + event.originalEvent.dataTransfer.getData('Text') + '</p>');


  		return false;
	});

	function cancel(event) {
  		if (event.preventDefault) {
    		event.preventDefault();
  		}
  		return false;
	}


});