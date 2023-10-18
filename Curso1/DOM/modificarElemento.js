
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

$newCard.innerHTML = `
    <img src = "../img/surft.jpg" alt = "Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//remplazar
//$cards.replaceChild($newCard,$cards.children[1]);

//borrar
$cards.removeChild($cards.lastElementChild)

//insertar nueva
//$cards.insertBefore($newCard,$cards.firstChild);


//📌Nuevos metodos

// .insertAdjacent...
//   .insertAdjacentElement(position, el)
//   .insertAdjacentHTML(position, html)
//   .insertAdjacentText(position, text)

// //Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)






/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); */
//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);
 