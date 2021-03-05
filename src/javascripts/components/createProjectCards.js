import printToDom from '../helpers/printToDom';

const createProjectCards = (arr) => {
  let domString = '';

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].available === true) {
      domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
    <div class="img-container" style="background-image: url('${arr[i].screenshot}');"></div>
    <div class="card-body">
      <p class="card-text">${arr[i].title}</p>
      <p class="card-text">${arr[i].description}</p>
      <p class="card-text">${arr[i].technologiesUsed}</p>
      <p class="card-text">${arr[i].available}</p>
      <p class="card-text">${arr[i].url}</p>
      <p class="card-text">${arr[i].githubUrl}</p>
      
    </div>
  </div>`;
    }
  }

  printToDom('#projectsPage', domString);
};

export default createProjectCards;
