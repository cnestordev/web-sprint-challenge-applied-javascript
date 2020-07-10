import createArticle from './Cards'
console.log(createArticle)
const topicsDiv = document.querySelector('.topics')
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        res.data.topics.forEach(item => {
            const tabDiv = document.createElement('div')
            tabDiv.classList.add('tab')
            tabDiv.textContent = item
            tabDiv.addEventListener('click', () => console.log(item))
            topicsDiv.appendChild(tabDiv)
        })
    })