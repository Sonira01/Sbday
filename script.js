const birthday = new Date('2026-01-18T00:00:00');

const countdown = () => {
  const now = new Date();
  const diff = birthday - now;

  const message = document.getElementById('birthdayMessage');

  if (diff <= 0) {
    document.querySelector('.countdown').style.display = 'none';
    message.style.display = 'inline-block';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
};

countdown();
setInterval(countdown, 1000);
