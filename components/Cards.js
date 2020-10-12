// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector(".cards-container")

axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((response)=>
    response.data.articles.bootstrap.forEach(i => cardContainer.append(article(i))),
    response.data.articles.javascript.forEach(i => cardContainer.append(article(i))),
    response.data.articles.jquery.forEach(i => cardContainer.append(article(i))),
    response.data.articles.node.forEach(i => cardContainer.append(article(i))),
    response.data.articles.tech.forEach(i => cardContainer.append(article(i)))
)
.catch((err)=>(console.log(err)))



const article=(object) =>{
const articleCard = document.createElemnt("div")
articleCard.classList.add("card")

const headlineDiv = document.createElement("div")
headlineDiv.classList.add("headline")
headlineDiv.textContent=`${object.articles.headline}`
articleCard.append (headlineDiv)

const authorA = document.createElement("div")
author.classList.add("author")
headlineDiv.append(authorA)

const image = document.createElement("div")
image.classList.add("image-container")
author.append(image)

const photo = document.createElement("img")
image.src= object.articles.authorPhoto
image.append (photo)

const authorB = document.createElement("span")
authorB.textContent=`${object.articles.authorName}`
authorA.append(authorB)

return articleCard
}

