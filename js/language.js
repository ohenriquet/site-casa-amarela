// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    function initLanguagePicker(picker) {
      var button = picker.querySelector('button'),
        form = picker.querySelector('form'),
        select = form.querySelector('select');
  
      button.addEventListener('click', function () {
        var expanded = button.getAttribute('aria-expanded') === 'true' || false;
        button.setAttribute('aria-expanded', !expanded);
      });
  
      document.addEventListener('click', function (event) {
        if (!picker.contains(event.target)) {
          button.setAttribute('aria-expanded', 'false');
        }
      });
  
      select.addEventListener('change', function () {
        var language = select.value;
        if (language === 'en') {
          window.location.href = '/en';
        } else {
          window.location.href = '/';
        }
      });
    }
  
    var pickers = document.querySelectorAll('.js-language-picker');
    Array.prototype.forEach.call(pickers, function (picker) {
      initLanguagePicker(picker);
    });
  });
  