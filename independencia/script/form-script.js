document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    console.log('Dados do Formulário:', formData);

    form.reset();
  });
});
