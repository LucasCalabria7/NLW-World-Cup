let delay = -0.4
function createCard(date, day, game) {
  delay = delay + 0.4;
  return `
        <section class="card" style="animation-delay: ${delay}s" >
          <h2>${date} <span>${day}</span></h2>
          <ul>
          ${game}
          </ul>
        </section>
  `
}

function createGame(player1, hour, player2) {
  return `
              <li>
              <img src="./assets/icon-${player1}.svg" alt="logo ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="logo ${player2}" />
            </li>
  `
}

document.querySelector("#cards").innerHTML = `
      ${createCard("20/11", "Domingo", createGame("qatar", "10:00", "ecuador"))}

      ${createCard("21/11", "Segunda", createGame("england", "10:00", "iran") + createGame("netherlands", "13:00", "senegal"))}

      ${createCard("22/11", "Terça", createGame("argentina", "07:00", "arabia") + createGame("france", "16:00", "australia"))}

      ${createCard("23/11", "Quarta", createGame("germany", "10:00", "japan") + createGame("spain", "13:00", "costa") + createGame("canada", "16:00", "belgium"))}

      ${createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia") + createGame("portugal", "13:00", "gana"))}

      ${createCard("25/11", "Sexta", createGame("netherlands", "13:00", "ecuador") + createGame("usa", "16:00", "england"))}

      ${createCard("26/11", "Sábado", createGame("france", "13:00", "denmark") + createGame("argentina", "16:00", "mexico"))}

      ${createCard("27/11", "Domingo", createGame("spain", "16:00", "germany"))}

      ${createCard("28/11", "Segunda", createGame("brazil", "13:00", "switzer") + createGame("uruguai", "16:00", "portugal"))}

      ${createCard("30/11", "Quarta", createGame("tunisia", "12:00", "france") + createGame("poland", "16:00", "argentina"))}

      ${createCard("01/12", "Quinta", createGame("croatia", "12:00", "belgium") + createGame("japan", "16:00", "spain") + createGame("germany", "16:00", "costa"))}

            ${createCard("02/12", "Sexta", createGame("portugal", "12:00", "korea") + createGame("gana", "12:00", "uruguai") + createGame("brazil", "16:00", "cameroon"))}
`