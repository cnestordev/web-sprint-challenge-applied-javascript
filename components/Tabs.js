import createArticle from './Cards'
const cardsContainer = document.querySelector('.cards-container')
const topicsDiv = document.querySelector('.topics')
let filtered = false

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        res.data.topics.forEach(item => {
            const tabDiv = document.createElement('div')
            tabDiv.classList.add('tab')
            tabDiv.textContent = item
            tabDiv.addEventListener('click', () => {
                if (!filtered) {
                    filtered = true
                    const sibling = document.querySelector('.title')
                    sibling.insertAdjacentElement('afterend', createAllTab())
                }
                axios.get('https://lambda-times-backend.herokuapp.com/articles')
                    .then(res => {
                        if (item === "node.js") item = "node"
                        const items = res.data.articles[item]
                        cardsContainer.innerHTML = ''
                        items.forEach(item => createArticle(item))
                    })
            })
            topicsDiv.appendChild(tabDiv)
        })
    })

function createAllTab() {
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    tabDiv.classList.add('allTab')
    tabDiv.textContent = "All"
    tabDiv.addEventListener('click', () => {
        removeTab()
        axios.get('https://lambda-times-backend.herokuapp.com/articles')
            .then(res => {
                for (const item in res.data.articles) {
                    res.data.articles[item].forEach(item => {
                        createArticle(item)
                    })
                }
            })
    })
    return tabDiv
}

function removeTab() {
    const allTab = document.querySelector('.allTab')
    allTab.remove()
    filtered = false
}