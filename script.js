let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  
  
  // Part 1
  const mainTitle = document.getElementById('main-title')
  mainTitle.textContent = "DOM Toretto"
  
  // Part 2
  const body = document.querySelector('body')
  body.style.backgroundColor = '#B8860B'
  
  // Part 3
  const donsFaveThings = document.getElementById('favorite-things');
  donsFaveThings.lastElementChild.remove()
  
  // Part 4
  const specialTitle = document.querySelectorAll('.special-title');
  specialTitle.forEach((element) => {
    element.style.fontSize = '2rem';
  })
    
  // Part 5
  const pastRaces = document.getElementById('past-races');
  if(pastRaces.hasChildNodes()){
    pastRaces.removeChild(pastRaces.children[3]);
  }
  
  // Part 6
  const newCityNode = document.createElement("li");
  newCityNode.innerHTML = "Macau";
  pastRaces.appendChild(newCityNode);

  // Part 7

  const newDivBlogPost = document.createElement('div');
  newDivBlogPost.classList.add('blog-post', 'purple')
  const newH2 = document.createElement('h2');
  newH2.innerHTML = 'Macau'
  const newPara = document.createElement('p');
  newPara.innerHTML = 'I almost skidded into a casino!';

  newDivBlogPost.append(newH2, newPara)
  document.body.appendChild(newDivBlogPost)
  console.log(newDivBlogPost)


  // append Div to Body
  // add ul and li as well ?

  // Part 8


  // Part 9




});
