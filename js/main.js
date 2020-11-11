// PARTE 1

// Trova l'elemento con classe .hamburger-menu, che rappresenta il bottone hamburger
var el = document.getElementsByClassName('hamburger-menu')[0];

// Aggiunge un Event Listener al click
el.addEventListener('click', function(){
    el.classList.toggle('change'); // Alterna l'hamburger con una X
})


// PARTE 2

// Trova l'elemento con classe .mobile-menu, che rappresenta il menu da mobile
var menu = document.getElementsByClassName('mobile-menu')[0];

// Aggiunge un Event Listener al click del bottone hamburger che alterna
// la visibilità del menu mobile
el.addEventListener('click', function(){
    if(menu.style.display === 'block'){ // Se il display è block
        menu.style.display = 'none'; // Impostalo a none, nascondendo
                                     // l'elemento
    }
    else{  // Altrimenti
        menu.style.display = 'block'; // Impostalo a none, nascondendo
                                      // l'elemento
    }
})

