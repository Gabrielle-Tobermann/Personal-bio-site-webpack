const navEvents = () => {
  document.querySelector('#navToBio').addEventListener('click', () => {
    const element = document.querySelector('#bioPage');
    element.scrollIntoView({ behavior: 'smooth' });
  });
};

export default navEvents;
