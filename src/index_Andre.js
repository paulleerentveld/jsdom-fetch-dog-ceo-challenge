function fetchImgs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => json.message);
   }
   
   function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
      return Object.keys(json.message)
    });
   }
   
   document.addEventListener('DOMContentLoaded', function() {
    fetchImgs().then(imgs => {
      imgs.forEach(element => {
        let list = document.createElement('div');
        list.innerHTML = `<img src=${element}></img>`
   
        document.querySelector('#dog-image-container').append(list);
      });
    })
   
    fetchDogs().then(dogs => {
      dogs.forEach(element => {
        let list = document.createElement('li');
        list.innerHTML = `${element}`
   
        list.addEventListener('click', (e) => {
          list.style.color = 'blue';
        })
        document.querySelector('#dog-breeds').append(list);
      });
    }).then(() => {
      const breedDrop = document.getElementById("breed-dropdown");
      let listOfDogs = document.querySelectorAll("#dog-breeds > li");
     
      breedDrop.addEventListener('change',(e) => {
        let filter = e.target.value;
   
        let filteredDogs = Array.from(listOfDogs)
          .filter(element => element.innerHTML[0] === filter);
   
        document.querySelector('#dog-breeds').innerHTML = "";
       
        filteredDogs.forEach(dog => {
          document.querySelector('#dog-breeds').append(dog);
        })
         
      })
    })
   
   });