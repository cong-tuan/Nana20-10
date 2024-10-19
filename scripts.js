document.getElementById('show-message-btn').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    document.querySelector('.small-image').style.display = 'none';
    // document.querySelector('.small-video').style.display = 'block';
    var video = document.querySelector('.small-video');
    video.style.display = 'block';
    video.play(); // Bắt đầu phát video
});