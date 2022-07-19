const checkbox = document.querySelector('.navigation__checkbox');
const menu = document.querySelector('.bar');
const navToggle = document.getElementById('navi-toggle');

checkbox.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

function closeNav() {
  navToggle.checked = false;
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

const closePort = document.querySelector('closePort');
closePort.addEventListener('click', closeNav);

const closeAbout = document.querySelector('.closeAbout');
closeAbout.addEventListener('click', closeNav);

const closeContact = document.querySelector('.closeContact');
closeContact.addEventListener('click', closeNav);

const closeEmail = document.querySelector('.closeEmail');
closeEmail.addEventListener('click', closeNav);
