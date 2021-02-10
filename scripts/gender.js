const selectGender = () => {
    const genderOptions = document.querySelectorAll('.gender__option');

    genderOptions.forEach(option => {
        option.addEventListener('click', OnOptionClicked);
    });

    function OnOptionClicked(event) {
        genderOptions.forEach(option => {
            option.classList.remove('gender__option--active');
        });

        event.target.closest('.gender__option').classList.add('gender__option--active');
        
        document.querySelector('button').disabled = false;
    }
}

export default selectGender;