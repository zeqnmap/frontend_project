const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

const orderButton = document.getElementById('order-action');
const formFields = {
  car: document.getElementById('car'),
  name: document.getElementById('name'),
  phone: document.getElementById('phone'),
};

const validationRules = {
  car: (value) => value.trim() !== '',
  name: (value) => value.trim() !== '',
  phone: (value) => {
    const phoneDigits = value.replace(/\D/g, '');
    return phoneDigits.length >= 10;
  },
};

orderButton.addEventListener('click', function () {
  let isFormValid = true;

  for (const [fieldName, fieldElement] of Object.entries(formFields)) {
    const rule = validationRules[fieldName];
    const isFieldValid = rule(fieldElement.value);

    fieldElement.style.borderColor = isFieldValid ? 'white' : 'red';

    if (!isFieldValid) {
      isFormValid = false;
    }
  }
  9;

  if (isFormValid) {
    alert('Спасибобо за заявку! Мы скоро свяжемся с вами');

    Object.values(formFields).forEach((field) => {
      field.value = '';
      field.style.borderColor = '';
    });
  }
});