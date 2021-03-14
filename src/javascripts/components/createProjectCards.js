import printToDom from '../helpers/printToDom';

const createProjectCards = (arr) => {
  let domString = '';

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].available === true) {
      domString += `<div class="card my-2 border-0 mb-5 rounded bg-transparent" style="width: 572px;" id=${i}>
      <img src="${arr[i].screenshot}" class="card-img-top" alt="..." id="card-image"></img>
    <div class="card-body">
      <p class="card-text font-weight-bold" id="card-title">${arr[i].title}</p>
      <p class="card-text">${arr[i].description}</p>
      <p class="card-text">${arr[i].technologiesUsed}</p>
      <p class="card-text font-weight-bold">LINKS:</p>
      <p class="card-text"><a href="${arr[i].url}"> ${arr[i].url}</a></p>
      <p class="card-text"><a href="${arr[i].githubUrl}">${arr[i].githubUrl}</a></p> 
    </div>
  </div>`;
    }
  }

  printToDom('#projects', domString);
};

export default createProjectCards;
