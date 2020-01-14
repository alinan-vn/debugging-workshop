document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  let joke;

  function fetchJoke(){
    // let data = {}
    
    // let toConfig = {
    //   method: "POST",
    //   headers: {
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // }

    return fetch('https://icanhazdadjoke.com/', {headers: {
          "Accept": "application/json"
        }})
    .then(resp => resp.json())
    .then(json => joke = json.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    // if(username === "") return;
    const username = document.getElementById('name-input').value
    newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${joke}`
    jokeList.appendChild(newJokeLi)

    fetchJoke()
    
  })
})
