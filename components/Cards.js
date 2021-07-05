import errorCard from './Error'
const cardsContainer = document.querySelector('.cards-container')

//loop through each item in the object, then loop through that array item and pass the item into the component.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        for (const item in res.data.articles) {
            res.data.articles[item].forEach(item => {
                createArticle(item)
            })
        }
    })
    .catch(err => errorCard(err.response.status))

function createArticle(articleObj) {
    const cardDiv = document.createElement('div')
    const headline = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const span = document.createElement('span')

    //give elements attributes
    cardDiv.classList.add('card')
    headline.classList.add('headline')
    authorDiv.classList.add('author')
    imgContainer.classList.add('img-container')
    image.setAttribute('src', articleObj.authorPhoto)

    //add text content to elements
    headline.textContent = articleObj.headline
    span.textContent = articleObj.authorName

    //append elements
    cardDiv.appendChild(headline)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
    authorDiv.appendChild(span)
    imgContainer.appendChild(image)

    //add event listener
    cardDiv.addEventListener('click', () => console.log(articleObj.headline))

    //return parent
    cardsContainer.appendChild(cardDiv)
}

export default createArticle