$(function() {
	var data = [10, 12, 15, 16, 18, 49, 60, 120, 124, 123, 109, 89, 50, 89, 90, 120, 30, 20, 22, 21];

	var $canvas =  $("<canvas id=\"chart\" width='560' height='40' style='border-bottom: 1px solid #000;'>");
	$("div.main-image-area").append($canvas);

    var canvasObj = document.getElementById("chart");
    
    var width = canvasObj.width;
    var height = canvasObj.height;

    console.log("w=" + width + ",h=" + height);

    if (canvasObj.getContext) {
        ctx = canvasObj.getContext("2d");

        if (ctx) {
        	ctx.strokeStyle = "#333";
    		ctx.lineWidth = 2;
    		
    		ctx.beginPath();

    		var dx = width / data.length;

    		var x = 0;	

    		var max = 0;
    		for (i in data) {
    			if (data[i] > max) {
    				max = data[i];
    			}
    		}	
    		var ratio = (height-2) / max;

    		for (i in data) {
    			var y = height - data[i] * ratio;
    			if (i == 0) {
    				ctx.moveTo(x, height-data[i]*ratio);
    			} else {
    				ctx.lineTo(x, height-data[i]*ratio);		
    			}
    			console.log("p(" + x + "," + y + ")");
    			x = x+dx;    			
    		}
			ctx.stroke();
        }
    }


});

function draw(data) {

}