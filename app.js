// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listFriends = [];

function aadFriend() {
  let friend = document.getElementById('amigo').value;
  if (validBlank(friend)) {
    listFriends.push(friend);
    clieanFriend();
    addTextNewLi("#listaAmigos", friend);
    document.querySelector("#resultado").innerHTML = '';
  }
}
function randomFriend() {
  if (listFriends.length == 0) {
    alert("Por favor, inserte al menos un amigo.");
    return;
  }
  let friend = listFriends[Math.floor(Math.random() * listFriends.length)];
  addTextToElement("#resultado", friend);
  clearListFriend();
}

function validBlank(friend) {
  if (friend == "") {
    alert("Por favor, inserte un nombre.");
    return false;
  }
  return true;
}

function clieanFriend() {
  document.querySelector('#amigo').value = '';
}

function addTextNewLi(listaId, texto) {
  let lista = document.querySelector(listaId);
  if (!lista) return console.error("Elemento no encontrado:", listaId);
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = texto;
  lista.appendChild(nuevoElemento);
  return;
}

function addTextToElement(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function clearListFriend() {
  document.querySelector('#amigo').value = '';
  listFriends = [];
  document.querySelector("#listaAmigos").innerHTML = '';
}