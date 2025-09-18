'use strict';

(async _ => {
  let user = JSON.parse(localStorage.getItem('user'));
  if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();

    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);

    const response = await fetch('https://script.google.com/macros/s/AKfycbxLOea0QX5Y6u0rA7WWJGyUFU_r-9kIAuQ7Ty2YVvhpXIkABg1CD8DZUhC2qZhUtTxQsA/exec', {
      method: 'POST',
      body: formData
    })
    await response.json();
    localStorage.removeItem('user');
  } else {
    localStorage.removeItem('user');
  }
})()

