'use strict';

// Tüm butonları seçme
const buttons = document.querySelectorAll('.btn');

// Tüm butonlara tıklama olayı eklemek için forEach döngüsü kullanma
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Tüm butonları gizleme
        buttons.forEach(btn => {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        });

        // Tıklanan butona göre ilgili modali gösterme
        //contains yöntemi, bir DOM öğesinin belirtilen bir sınıfı içerip
        //içermediğini kontrol eden bir JavaScript yöntemidir
        if (button.classList.contains('success-btn')) {
            const successModal = document.querySelector('.success-modal');
            successModal.classList.add('open');
        } else if (button.classList.contains('fail-btn')) {
            const failModal = document.querySelector('.fail-modal');
            failModal.classList.add('open');
        }
    });
});

// Tüm modal butonlarını seçme
const modalButtons = document.querySelectorAll('.modal-btn');

// Modal butonlarına tıklama olayı eklemek için forEach döngüsü kullanma
modalButtons.forEach(modalButton=>{
    modalButton.addEventListener('click', function(){
        //Tıklanan modal butonunun parent modalını bulma
        const parentModal=modalButton.closest('.modal');

        // Parent modalına '.open' sınıfını kaldırarak modalı kapatma
        parentModal.classList.remove('open');

        // Tüm butonları gösterme
        buttons.forEach(btn=>{
            btn.style.opacity='1';
            btn.style.visibility='visible';
        })
    })
})
