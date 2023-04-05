alert ("Atenção! O conteúdo a seguir é sensível para pessoas que facilmente se emocionam. Não nos responsabilizamos por quaisquer problemas mentais (tais como esquizofrenia) gerados após o consumo! Em caso de vício, um médico deverá ser consultado! ")

function tocaSom (seletorAudio) 
{
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') 
    {
        elemento.play();
    }
    else 
    {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.key');

for (let contador = 0; contador < listaDeTeclas.length; contador++) 
{

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sound_${instrumento}`; 

    tecla.onclick = function () 
    {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) 
    {
        if (evento.code === 'Space' || evento.code === 'Enter') 
        {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () 
    {
        tecla.classList.remove('ativa');
    }

}