$('.rating').raty();

$('.bar-percentage[data-percentage]').each(function () {
    var progress = $(this);
    var percentage = Math.ceil($(this).attr('data-percentage'));
    $({
        countNum: 0
    }).animate({
        countNum: percentage
    }, {
        duration: 2000,
        easing: 'linear',
        step: function () {
            // What todo on every count
            var pct = '';
            if (percentage === 0) {
                pct = Math.floor(this.countNum) + '%';
            } else {
                pct = Math.floor(this.countNum + 1) + '%';
            }
            progress.text(pct) && progress.siblings().children().css('width', pct);
        }
    });
});

$(document).ready(function () {
    var progressBars = document.getElementsByClassName('progress-bar');
    var thumbnails = document.getElementsByClassName('thumbnail');
    var i;
    for (i = 0; i < progressBars.length; i++) {
        var thumbnailId = thumbnails[i].id;
        var progressBarId = progressBars[i].id;
        
        alert(thumbnailId + " -- " + progressBarId);
        
        var progressBar = document.getElementById(progressBarId);
        var thumbnail = document.getElementById(thumbnailId);
        
        var percent = progressBar.getAttribute('aria-valuenow');
        var spread = 100;
        var ratio = percent / spread;
        var red, green;
        
        alert(ratio);
        if (ratio < 0.25) {
            red = 1;
            green = 4 * ratio;
        } else if (ratio < 0.5) {
            green = 1;
            red = 1 + 4 * (0 - percent + 0.25 * spread) / spread;
        } else if (ratio < 0.75) {
            green = 1;
            red = 4 * (percent - 0 - 0.5 * spread) / spread;
        } else {
            green = 1;
            red = 1 + 4 * (0 - percent + 0.75 * spread) / spread;
        }

        progressBar.style.backgroundColor = "rgb(" + red * 255 + "," + green * 255 + ",0)";
        progressBar.style.color = "#000";
        
       //
        
        
        
        
        
        thumbnail.style.backgroundColor = "rgb(" + red * 255 + "," + green * 255 + ",0)";
    }
});