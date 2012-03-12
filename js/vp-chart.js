$(function() {
	var data = [10, 12, 15, 16, 18, 49, 60, 120, 124, 123, 109, 89, 50, 89, 90, 120, 30, 20, 22, 21];

	var $canvas =  $("<canvas id=\"chart\" width='560' height='40' style='border-bottom: 1px solid #000;'>");
	$("div.main-image-area").append($canvas);

    var canvasObj = document.getElementById("chart");
    
    var width = canvasObj.width;
    var height = canvasObj.height;

    console.log("w=" + width + ",h=" + height);

    var ctx;
    if (canvasObj.getContext) {
        ctx = canvasObj.getContext("2d");

        if (ctx) {
        	
        	drawChart(data, ctx);
        	
        }
    }

    function drawChart(data) {
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

		var timeslot = dx * 3;
		for (var i = 0; i * timeslot < width; i++) {
			if (i % 2 == 0) 
				ctx.fillStyle = "#eee";
			else
				ctx.fillStyle = "#fff";
			ctx.fillRect(i*timeslot, 0, (i+1)*timeslot, height);
		}

		var y = 0;
		for (i in data) {
			y = height - data[i] * ratio;
			if (i == 0) {
				ctx.moveTo(x, y);
			} else {
				ctx.lineTo(x, y);		
			}
			console.log("p(" + x + "," + y + ")");
			x = x + dx;    			
		}
		ctx.stroke();
	    
	    var tx = x - dx - 8;
	    var ty = 26;
	    var text = "" + data[data.length-1];
	    console.log("Text: " +text+ "(" + tx + "," + ty + ")");
	    ctx.lineWidth = 1.2;
	    ctx.font = "14px tahoma";
	    ctx.strokeStyle = "#000";
	    ctx.fillStyle = "#f00";
	    ctx.strokeText(text, tx, ty);

	    var y = 0;
	    var x = 0;
		for (i in data) {
			y = height - data[i] * ratio;
			if (i == 4 || i == 6) {
				tweetMarker(x, y);
			}
			x = x + dx;    			
		}
		
	}

	function tweetMarker(x, y) {
		ctx.save();
		ctx.strokeStyle = "#fff";
	    ctx.fillStyle = "#a9f";

	    ctx.beginPath();  
	    ctx.arc(x, y, 4.2,0,Math.PI*2,true);
	    ctx.closePath();
	    ctx.stroke();
	    ctx.fill();
	    ctx.restore();
	}
});

