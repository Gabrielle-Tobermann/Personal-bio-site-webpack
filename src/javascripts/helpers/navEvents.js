const navEvents = () => {
  document.querySelector('#navToBio').addEventListener('click', () => {
    const element = document.querySelector('#bioPage');
    element.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('#navToTechnologies').addEventListener('click', () => {
    const element = document.querySelector('#technologiesPage');
    element.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('#navToProjects').addEventListener('click', () => {
    const element = document.querySelector('#projectsPage');
    element.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('#navToContact').addEventListener('click', () => {
    const element = document.querySelector('#contactPage');
    element.scrollIntoView({ behavior: 'smooth' });
  });
};

export default navEvents;
