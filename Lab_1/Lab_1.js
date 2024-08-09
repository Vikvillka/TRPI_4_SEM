// задание 1
function validateForm() {
    const lastName = document.getElementById('secondName').value;
    const firstName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const about = document.getElementById('about').value;
    
    let nameRegex = /[a-zA-Zа-яА-Я]{1,20}/;
    let emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]{2,5}/;
    let phoneRegex = /\(0\d{2}\)\d{3}-\d{2}-\d{2}/;

    let secondNameError = document.getElementById("secondNameError");
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let selectError = document.getElementById("selectError");
    let aboutError = document.getElementById("aboutError");


    let errors = 0;

    if (!nameRegex.test(lastName)) {
        errors++;
        secondNameError.textContent = 'Поле Фамилия должно содержать только буквы и быть длиной от 1 до 20 символов.';
    }

    if (!nameRegex.test(firstName)) {
        errors++;
        nameError.textContent = 'Поле Имя должно содержать только буквы и быть длиной от 1 до 20 символов.';
    }

    if (!emailRegex.test(email)) {
        errors++;
        emailError.textContent = 'Поле E-mail должно быть в формате example@example.com.';
    }

    if (!phoneRegex.test(phone)) {
        errors++;
        phoneError.textContent = 'Номер телефона должен быть в формате (0XX)XXX-XX-XX.';
    }

    let select = document.getElementById("select");
    if (select.value === "Выберите вариант") {
        errors++;
        selectError.textContent = 'Выберите город.';
    }

    if (about == "") {
        errors++;
        aboutError.textContent = 'Расскажите о себе.';
    }

    if (errors > 0) {
        return false;
    }
    let city = document.getElementById("select").value;
    let course3 = document.getElementById("cours3").checked;
    let bstu = document.getElementById("bstu").checked;

    if (city !== "Минск" || !course3 || !bstu) {
    let confirmMessage = "Вы уверены в своих ответах?\n\nГород: " + city + "\nНа каком курсе Вы учитесь?: " + (course3 ? "3" : "другой курс") + "\nУчусь в БГТУ: " + (bstu ? "Да" : "Нет");
    let confirmed = confirm(confirmMessage);

        if (!confirmed) {
            return false;
        }
    }
    return true;
}