let background = document.getElementById('welcome')
let list = document.getElementById('list')
let listMenu = document.querySelectorAll('#list-menu')
let character = document.getElementById('character')
let aboutMe = document.getElementById('about-me')
let myArt = document.getElementById('my-art')
let charEye = document.getElementById('character-eye')
let overlay = document.getElementById('overlay')
let backgroundComp = document.getElementById('computer-background')
let bubble = document.getElementById('bubble')
let overlay2 = document.getElementById('overlay2')
let mode = document.getElementById('mode')
let computer = document.getElementById('computer')
let arts = document.getElementById('arts')
let contact = document.getElementById('contact')
let listSosmed = document.querySelectorAll('.list-sosmed')
let listArt = document.querySelectorAll('#list-art')

const sounds = {
    comp: new Audio('./sounds/comp.mp3'),
    phone: new Audio('./sounds/phone.mp3'),
    contact: new Audio('./sounds/contact.mp3'),
    mode: new Audio('./sounds/mode.mp3'),
    hover: new Audio('./sounds/hover.mp3'),
    hover2: new Audio('./sounds/hover2.mp3'),
    hmm: new Audio('./sounds/hm.mp3'),
};



function lamp() {
    playSound('mode') 
    type(`It looks like I haven't paid the electricity bill yet...`)
}


function playSound(name) {
    const sound = sounds[name];

    if (!sound) {
        console.warn(`Sound "${name}" tidak ditemukan`);
        return;
    }

    sound.currentTime = 0;
    sound.play();
}

let typingTimer

let tap = 0

overlay2.addEventListener('click', ()=> {
    tap = tap + 1
    if(tap % 3 === 0){
        type('Hey, what are you looking for?')
        playSound('hmm')
        }
})


function type(kata) {
      clearInterval(typingTimer);

    const text = kata;
    let index = 0;

    bubble.textContent = '';

    typingTimer = setInterval(() => {
        bubble.textContent += text[index];
        index++;

        if (index >= text.length) {
            clearInterval(typingTimer);
        }
    }, 50);
}

let typed = null

mode.addEventListener('mouseenter', ()=> {
        playSound('hover')

})

window.addEventListener('mousemove', (e)=> {
    const rect = character.getBoundingClientRect()
    
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    let posY = e.clientY - centerY
    let posX = e.clientX - centerX


    mode.style.top = -posY/100 + 'px'
    mode.style.left = -posX/100 + 'px'
    bubble.style.top = posY/40 + 'px'
    bubble.style.left = posX/40 + 'px'
    backgroundComp.style.left = -posX/20 + 'px'
    backgroundComp.style.top = -posY/20 + 'px'
    list.style.left = posX/20 + 'px'
    list.style.top = posY/20 + 'px'
    charEye.style.top = posY/10 + 'px'
    charEye.style.left = posX/30 + 'px'
    character.style.top = posY/40 + 'px'
    character.style.left = posX/50 + 'px'
    background.style.backgroundPositionX = -posX/90 + 'px'
    background.style.backgroundPositionY = -posY/90 + 'px'
})


overlay2.addEventListener('mouseover', ()=> {
    type('Hmmm...')
})

listMenu.forEach(menu => {
    menu.addEventListener('mouseenter', (e)=> {
        character.style.transition = 'scale 1s ease'
        character.style.scale = '1.2'
        playSound('hover')
    })
    menu.addEventListener('mouseout', ()=> {
        character.style.transition = 'scale 1.5s ease'
        character.style.scale = '1'
    })
})
    
listSosmed.forEach(sosmed => {
    sosmed.addEventListener('mouseover', (e)=> {
        playSound('hover')
    })
})
    
listArt.forEach(art => {
    art.addEventListener('mouseover', (e)=> {
        playSound('hover2')
    })
})
    


function showAboutMe() {
    aboutMe.style.transition = 'all 0.5s ease'
    aboutMe.style.opacity = '100%'
    aboutMe.style.right = '0'
    overlay.style.transition = 'all 0.5s ease'
    overlay.style.opacity = '100%'
    overlay.style.top = '0'
    type('Pleased to meet you')
    playSound('phone')
}

function hideAboutMe() {
    aboutMe.style.transition = 'all 0.5s ease'
    aboutMe.style.opacity = '0%'
    aboutMe.style.right = '-1000px'
    overlay.style.transition = 'all 0.5s ease'
    overlay.style.opacity = '0%'
    overlay.style.top = '100%'
    playSound('phone')

    
}


function showMyArt() {
    myArt.style.transition = 'all 1s ease'
    myArt.style.top = '0%'
    myArt.style.display = 'flex'
    backgroundComp.style.transition = 'opacity 2s ease'
    backgroundComp.style.opacity = '100%'
    playSound('comp')
    
}

function hideMyArt() {
    myArt.style.transition = 'all 1s ease'
    myArt.style.top = '100%'
    backgroundComp.style.transition = 'opacity 0.5s ease'
    backgroundComp.style.opacity = '0%'
    playSound('comp')



}

function showContact() {
    contact.style.transform = 'translateX(-800px)'
    overlay.style.transition = 'all 0.5s ease'
    overlay.style.opacity = '100%'
    overlay.style.top = '0'
    type(`Don't hesitate to get in touch`)
    playSound('contact')
}
function hideContact() {
    contact.style.transform = 'translateX(1500px)'
    overlay.style.transition = 'all 0.5s ease'
    overlay.style.opacity = '0%'
    overlay.style.top = '100%'
    playSound('contact')

}



listMenu[0].addEventListener('mouseover', ()=> {
    type('Who is this')
})

listMenu[1].addEventListener('mouseover', ()=> {
    type('What kind of things are here?')
})

listMenu[2].addEventListener('mouseover', ()=> {
    type('If you need anything, just contact')
})

function responsive() {

    const designWidth = 1920;
    const designHeight = 1080;

    const scaleX = window.innerWidth / designWidth;
    const scaleY = window.innerHeight / designHeight;

    const scale = Math.min(scaleX, scaleY);

    document.querySelector("#welcome").style.zoom = scale;
}

window.addEventListener("resize", responsive);

responsive();
