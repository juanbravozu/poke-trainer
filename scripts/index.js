window.addEventListener('load', () => {
    const genderOptions = document.querySelectorAll('.gender__option');
    const genderContainer = document.querySelector('.gender');
    const formContainer = document.querySelector('.ch-creation');
    const button = document.querySelector('button');

    genderOptions.forEach((option) => {
        option.addEventListener('click', optionClickHandler);
    });

    button.addEventListener('click', () => {
        genderContainer.classList.add('inactive');
        formContainer.classList.remove('inactive');

        const selectedOption = document.querySelector('.gender__option--active');

        const isMale = selectedOption.dataset.ismale == 'true';

        const img = formContainer.querySelector('img');
        const genderText = formContainer.querySelector('h2');

        if(isMale) {
            formContainer.classList.add('ch-creation--reverse');
            img.setAttribute('src', './assets/boy.png'); //setAttribute(atributo, valor);
            genderText.innerText = 'BOY';
        } else {
            img.setAttribute('src', './assets/girl.png');
            genderText.innerText = 'GIRL';
        }
        button.disabled = true;
    });

    function optionClickHandler(event) {

        genderOptions.forEach(option => {
            option.classList.remove('gender__option--active');
        });

        event.target.classList.add('gender__option--active');

        button.disabled = false;
    }
});