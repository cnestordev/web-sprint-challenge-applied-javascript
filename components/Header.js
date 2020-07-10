// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container')

function Header() {
    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const header = document.createElement('h1')
    const tempSpan = document.createElement('span')

    //give elements attributes
    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    //give elements text content
    dateSpan.textContent = "July 10th 2020"
    header.textContent = "Lambda Times"
    tempSpan.textContent = "98 F"

    //append elements
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(header)
    headerDiv.appendChild(tempSpan)

    //return parent element
    return headerDiv
}

headerContainer.appendChild(Header())
