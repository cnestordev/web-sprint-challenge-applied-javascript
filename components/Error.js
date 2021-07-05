const cardsContainer = document.querySelector('.cards-container')

function errorCard(error) {
    const cardDiv = document.createElement('div')
    const header = document.createElement('div')


    //give elements attributes
    cardDiv.classList.add('card')
    header.classList.add('headline')


    //add text content to elements
    header.textContent = `Uh oh! Error: ${error}`

    //append elements
    cardDiv.appendChild(header)

    //return parent
    cardsContainer.appendChild(cardDiv)
}

export default errorCard