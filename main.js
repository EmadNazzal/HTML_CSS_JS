let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6');
let emad = document.querySelector('.emad');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px'
    mountains3.style.top = value * 2 + 'px'
    mountains4.style.top = value * 1.5 + 'px'
    river.style.top = value + 'px'
    boat6.style.top = value + 'px'
    boat6.style.left = value *3 + 'px'
    emad.style.fontSize = value + 'px'
    if(scrollY >= 92){
        emad.stye.fontsize = 92 + 'px';
        emad.stye.position = 'fixed';
        if(scrollY >= 200){
            emad.style.display = 'none';

        } else {
            emad.style.display = 'block';
        }
        if(scrollY >= 117){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
         } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'

         }
    }
}

// Controlling the position of the title "Nazzal" did not work.
