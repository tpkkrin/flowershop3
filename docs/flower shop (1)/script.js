document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращение отправки формы
  
    // Показать сообщение об успешной отправке
    const successMessage = document.getElementById('successMessage');
    
    // Устанавливаем временные стили для теста
    successMessage.style.position = 'fixed';
    successMessage.style.top = '50%';
    successMessage.style.left = '50%';
    successMessage.style.transform = 'translate(-50%, -50%)';
    successMessage.style.backgroundColor = 'green';
    successMessage.style.color = 'white';
    successMessage.style.padding = '20px';
    successMessage.style.borderRadius = '10px';
    successMessage.style.zIndex = '1000';
    successMessage.style.display = 'block';
  
    // Удаляем класс hidden, если он есть
    successMessage.classList.remove('hidden');
    
    // Скрыть сообщение через 3 секунды
    setTimeout(() => {
      successMessage.style.display = 'none'; // Прячем сообщение
      successMessage.classList.add('hidden'); // Возвращаем класс hidden
    }, 3000);
  
    // Сброс формы
    this.reset();
  });