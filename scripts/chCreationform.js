//This function's purpose is to determine the behaviour of the character creation page depending on wether or not the user has already selected the character's gender


const chCreationForm = () => {

    const formBtn = document.querySelector('button');

    formBtn.addEventListener('click', () => {
        const selectedCard = document.querySelector('.gender__option--active');

        //If selectedCard is anything other than undefined, it means that the user has selected it's gender
        if(selectedCard) {
            let isMale = (selectedCard.dataset.ismale == 'true');
            swapSections(isMale);
            selectedCard.classList.remove('gender__option--active');
            return;
        }
        console.log('No ha seleccionado');
        return;
    });

    //Swaps to the next section where the user must fill the form in order to continue
    function swapSections(isMale) {
        const genderSection = document.querySelector('.gender');
        const chCreationSection = document.querySelector('.ch-creation');
        const chImg = chCreationSection.querySelector('img');
        const chTitle = chCreationSection.querySelector('h2');

        if(isMale == true) {
            chImg.setAttribute('src', './assets/boy.png');
            chTitle.innerText = 'BOY';
            chCreationSection.classList.add('ch-creation--reverse');
        } else {
            chImg.setAttribute('src', './assets/girl.png');
            chTitle.innerText = 'GIRL';
        }

        genderSection.classList.add('inactive');
        chCreationSection.classList.remove('inactive');
        formBtn.innerText = 'Create';
        formBtn.disabled = true;
    } 
}

export default chCreationForm;