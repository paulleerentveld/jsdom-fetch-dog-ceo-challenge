console.log('%c HI', 'color: firebrick');

function fetchImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response){
      return response.json();
    })
    .then(function(json) {
        return json.message
    });

  }

fetchImages().then(element => {
    element.forEach(element => {
        let dogImg = document.createElement('img');
        dogImg.src = element;
        document.querySelector('#dog-image-container').append(dogImg);
        dogImg.style.width='50%';
        dogImg.style.height='50%';
    })
})

function fetchBreed() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response){
      return response.json();
    })
    .then(function(json) {
        return Object.keys(json.message)
    });

  }

fetchBreed().then(element => {
  let li = document.createElement('li');
    element.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML= element;
        document.querySelector('#dog-breeds').append(li);
        li.className='doglist';
        li.id = element;
        li.addEventListener('click', onClick);
    })

  })

function onClick(event) {
    let targetId=event.srcElement.id;
    let target =document.querySelector(`.doglist#${targetId}`);
    target.style.color='red';
  }

const list = document.getElementsByTagName("li");

function filterList(e) {
  let filter =  e.target.value;
  for (i=0;i<list.length;i++) {
    let text= list[i].textContent || list[i].innerText;
    if (text.startsWith(filter)) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}

function readEvent(event) {
  console.log(event);
}

const breedDrop= document.getElementById("breed-dropdown");

breedDrop.addEventListener('change',filterList) ;