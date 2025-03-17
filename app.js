// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Challenge Sayuri

const nombres = [];

document.getElementById('adicionar-btn').addEventListener('click', adicionarNombre);
document.getElementById('sortear-btn').addEventListener('click', sortearAmigo);

function adicionarNombre() {
  const inputNombre = document.getElementById('nombre');
  const nombre = inputNombre.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  nombres.push(nombre);
  mostrarLista();
  inputNombre.value = '';
}

function mostrarLista() {
  const lista = document.getElementById('lista-nombres');
  lista.innerHTML = '';

  nombres.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert('Agrega al menos un nombre para realizar el sorteo.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const amigoSecreto = nombres[indiceAleatorio];

  document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}`;
}
