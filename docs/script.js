function playAudio(letter) {
    var audio = new Audio('audio/' + letter + '.mp3');
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}
