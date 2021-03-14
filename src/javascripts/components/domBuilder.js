import getProjects from '../helpers/data/projectsData';
import navEvents from '../helpers/navEvents';
import createProjectCards from './createProjectCards';

const domBuilder = () => {
  navEvents();
  getProjects().then((projects) => createProjectCards(projects));
};

export default domBuilder;
