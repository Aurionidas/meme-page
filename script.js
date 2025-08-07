/*
Obtengo la informacion de el label seleccionado para carbiar otros elementos de la pagina
*/
let selectedAudio = ""; // Valor por defecto
document.querySelectorAll('input[name="option"]').forEach(input => {
    input.addEventListener('change', function() {
        const selectedLabel = this.nextElementSibling;
        const selectedValue = selectedLabel.dataset.txt;
        memeImage(selectedValue);
    });
});

playAudio = function() {
    let audioID = ""; // Needs to be global if stop button to be used.
    switch (selectedAudio) {
        case "Lizard":
            audioID = 'lizard-audio';
            break;
        case "Tortuga":
            audioID = 'tortuga-audio';
            break;
        case "Perro HP":
            audioID = 'perro-audio';
            break;
        case "Yamete Kudasai":
            audioID = 'yamete-audio';
            break;
        default:
            audioID = 'lizard-audio';
    }
    const audio = document.getElementById(audioID);
    audio.currentTime = 0;
    audio.play();
/*    
    const audio = document.getElementById('lizard-audio');
    audio.currentTime = 0;
    audio.play();
*/

}


stopAudio = function() {
    const audio = document.getElementById('lizard-audio');
    audio.pause();
    audio.currentTime = 0;
}



function memeImage(selectedValue) {
    const mainMeme = document.getElementById('main-meme');
    let src = "";

    switch (selectedValue) {
        case "Lizard":
            src = "media/lizard-meme.png";
            selectedAudio= "Lizard";
            break;
        case "Tortuga":
            src = "media/tortuga-meme.png";
            selectedAudio = "Tortuga";
            break;
        case "Perro HP":
            src = "media/perro-meme.png";
            selectedAudio = "Perro HP";
            break;
        case "Yamete Kudasai":
            src = "media/yameto-meme.png";
            selectedAudio = "Yamete Kudasai";
            break;
        default:
            src = "media/lizard-meme.png";
            selectedAudio = "Lizard";
    }
    mainMeme.src = src;
    return 
}
