const back = document.getElementById('voltar');
const play = document.getElementById('play');
const skip = document.getElementById('proxima');
const musica = document.getElementById('musica');
const nome = document.getElementById('titulo');

const playlist = 6;
let quantidadeMusicas = 1;
let musicaTocando = false;

const nomesMusicas = [
    'Happier Than Ever - Billie Eilish',
    'Rise - League of Legends',
    'STAR WALKIN - Lil Nas X',
    'Tatto - Loreen',
    'Greedy - Tate McRae',
    'Gods - NewJeans'
];

function tocarMusica () {
    musica.play();
}

function pausarEtocar () {
    if (musicaTocando === false){
        tocarMusica();
        play.src = "./img/pause.png";
        musicaTocando = true;
    } else { 
        musica.pause();
        play.src = "./img/play.png";
        musicaTocando = false;
    }
}

function proximaMusica () {
    if (quantidadeMusicas === playlist) {
        quantidadeMusicas = 1;
    } else {
        quantidadeMusicas = quantidadeMusicas + 1;
    }

    musica.src = './Músicas/' + quantidadeMusicas + '.mp3';
    tocarMusica ();
    trocarNome ();
}

function voltarMusica () {
    if (quantidadeMusicas === 1) {
        quantidadeMusicas = playlist;
    } else {
        quantidadeMusicas = quantidadeMusicas - 1;
    }

    musica.src = './Músicas/' + quantidadeMusicas + '.mp3';
    tocarMusica ();
    trocarNome ();
}

function trocarNome () {
    nome.textContent = nomesMusicas[quantidadeMusicas - 1];
}

play.addEventListener('click', pausarEtocar);
skip.addEventListener('click', proximaMusica);
back.addEventListener('click', voltarMusica);
trocarNome ();

//Para dispositivos touchscreen//
play.addEventListener('touchstart', pausarEtocar);
skip.addEventListener('touchstart', proximaMusica);
back.addEventListener('touchstart', voltarMusica);
play.removeEventListener('touchstart', pausarEtocar);