const next = document.getElementById('container-right-arrow')
const back = document.getElementById('container-left-arrow')
const container = document.getElementById('container')

const imageList = ['./assets/background1.png', './assets/background2.jpg', './assets/background3.jpg','./assets/background4.jpg','./assets/background5.jpg',]

var mode=1

next.onclick = () =>{
    if(mode>=0 && mode<=4){
        mode++
    }
    console.log(mode)
    switch(mode){
        case 1:
            container.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9)),url(${imageList[mode - 1]})`
            break;
        case 2:
            container.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9)),url(${imageList[mode - 1]})`
            break;
        case 3:
            container.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9)),url(${imageList[mode - 1]})`
            break;
        case 4:
            container.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9)),url(${imageList[mode - 1]})`
            mode =0
            break;
            
    }
}

back.onclick = () =>{
    if(mode>1 && mode<=5){
        mode--
    }
    console.log(mode)
    switch(mode){
        case 1:
            container.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9)),url(${imageList[mode - 1]})`
            mode =5
            break;
        case 2:
            container.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9)),url(${imageList[mode - 1]})`
            break;
        case 3:
            container.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9)),url(${imageList[mode - 1]})`
            break;
        case 4:
            container.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9)),url(${imageList[mode - 1]})`
            break;
    }
}