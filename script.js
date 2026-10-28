const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '✕' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const student = data.get('student');
  const studentClass = data.get('class');
  const subject = data.get('subject');
  const guardian = data.get('guardian');
  const message = data.get('message') || 'Sem mensagem adicional.';
  const text = `Olá, AGS — Academia Global do Saber! Pretendo informações sobre inscrição.%0A%0ANome do aluno: ${encodeURIComponent(student)}%0AClasse/preparação: ${encodeURIComponent(studentClass)}%0ADisciplina: ${encodeURIComponent(subject)}%0AContacto: ${encodeURIComponent(guardian)}%0AMensagem: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/258860438223?text=${text}`, '_blank', 'noopener');
});