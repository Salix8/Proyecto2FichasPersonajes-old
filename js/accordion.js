window.addEventListener(`load`, ()=>{
    let accordion = document.getElementsByClassName(`accordion`);
    let i;

    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener(`click`, function() {
        
            this.classList.toggle(`active__accordion`);
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + `%`;
            } 
        });
    }
});