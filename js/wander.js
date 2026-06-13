const poems = [
  '/poems/expired-grant.html',
  '/poems/eliminated-position.html',
  '/poems/deleted-student-work.html',
  '/poems/closed-lab.html',
  '/poems/orphaned-partnership.html',
  '/poems/decommissioned-server.html',
];

function randomPoem(exclude) {
  const options = exclude ? poems.filter(p => p !== exclude) : poems;
  return options[Math.floor(Math.random() * options.length)];
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        window.location.href = randomPoem();
      });
    }
  });
});
