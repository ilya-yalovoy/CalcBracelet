let Rombolino = {
    bracelet: {
        backgroundImage: 'url("./img/Rombolino/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        braceletName: ['', 'Black', 'Camel', 'Red', 'Light blue', 'Blue', 'Avio', 'Orange', 'Brown', 'Dark brown', 'Light green', 'Dark green', 'Coral', 'Pastel pink', 'Lilac', 'Dark grey', 'Celestial'],
        colorNum: 16,
        top: 0,
        left: 0,
        transform: 'rotate(0deg)'
    },
    fish: {
        backgroundImage: 'url("./img/Fish/11.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '63% auto',
        fishName: ['', 'Night Blue', 'Cream Yellow', 'Lemon Yellow', 'Pale Yellow', 'Red', 'Tan', 'Army Green', 'Lavender', 'Bottle Green',  'Dark Red', 'Silver', 'Black', 'Blue', 'Taupe', 'Mustard', 'Eggplant', 'Barbie Pink', 'Pale Pink', 'Mauve'],
        top: '3%',
        left: '1%',
        transform: 'rotate(180deg)'
    }
}
let Flatsea = {
    bracelet: {
        backgroundImage: 'url("./img/Flatsea/4.png")',
        backgroundPosition: '20% center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        braceletName: ['', 'Grey', 'Beige', 'Fucsia', 'Purple', 'Orange', 'Red', 'Dark red', 'Bordeaux','Mud', 'Dark brown', 'Dark chocolate', 'Turquoise', 'Dark blue'],
        colorNum: 13,
        top: 0,
        left: 0,
        transform: 'rotate(0deg) translateX(6%)'
    },
    fish: {
        backgroundImage: 'url("./img/Fish/11.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '70% auto',
        fishName: ['', 'Night Blue', 'Cream Yellow', 'Lemon Yellow', 'Pale Yellow', 'Red', 'Tan', 'Army Green', 'Lavender', 'Bottle Green',  'Dark Red', 'Silver', 'Black', 'Blue', 'Taupe', 'Mustard', 'Eggplant', 'Barbie Pink', 'Pale Pink', 'Mauve'],
        top: '3.7%',
        left: '-0.5%',
        transform: 'rotate(12.5deg) translateX(6%)'
    }
}
let Pamponero = {
    bracelet: {
        backgroundImage: 'url("./img/Pamponero/13.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '130% auto',
        braceletName: ['', 'Grey', 'Beige', 'Fucsia', 'Purple', 'Orange', 'Red', 'Dark red', 'Bordeaux','Mud', 'Dark brown', 'Dark chocolate', 'Turquoise', 'Dark blue'],
        colorNum: 13,
        top: 0,
        left: 0,
        transform: 'rotate(0deg)'
    },
    fish: {
        backgroundImage: 'url("./img/Fish/11.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '62% auto',
        fishName: ['', 'Night Blue', 'Cream Yellow', 'Lemon Yellow', 'Pale Yellow', 'Red', 'Tan', 'Army Green', 'Lavender', 'Bottle Green',  'Dark Red', 'Silver', 'Black', 'Blue', 'Taupe', 'Mustard', 'Eggplant', 'Barbie Pink', 'Pale Pink', 'Mauve'],
        top: '1.9%',
        left: '-1.5%',
        transform: 'rotate(179deg)'
    }
}
let Verasper = {
    bracelet: {
        backgroundImage: 'url("./img/Verasper/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        braceletName: ['', 'Black', 'Camel', 'Red', 'Light blue', 'Blue', 'Avio', 'Orange', 'Brown', 'Dark brown', 'Light green', 'Dark green', 'Coral', 'Pastel pink', 'Lilac', 'Dark grey', 'Celestial'],
        colorNum: 16,
        top: 0,
        left: 0,
        transform: 'rotate(0deg)'
    },
    fish: {
        backgroundImage: 'url("./img/Fish/11.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '47.5% auto',
        fishName: ['', 'Night Blue', 'Cream Yellow', 'Lemon Yellow', 'Pale Yellow', 'Red', 'Tan', 'Army Green', 'Lavender', 'Bottle Green',  'Dark Red', 'Silver', 'Black', 'Blue', 'Taupe', 'Mustard', 'Eggplant', 'Barbie Pink', 'Pale Pink', 'Mauve'],
        top: '3.5%',
        left: '5.4%',
        transform: 'rotate(185deg)'
    }
}

document.querySelector('body').style.filter = 'blur(1.5rem)';
document.querySelector('body').style.transition = '.5s';
window.onload = function () {
    setTimeout(() => {
        document.querySelector('body').style.filter = 'blur(0rem)';
    }, 1000);
}

let activeBracelet = {
    activeStyle: Rombolino,
    activListLink: 'photo2',
    activeImg: 'Rombolino',
    colorBracelet: 1,
    colorFish: 1,
    sizeBracelet: 1,
    price: 0
}

reloadStyle();
function reloadStyle() {
    const fish = document.getElementsByClassName('fish')[0],
      bracelet = document.getElementsByClassName('bracelet')[0];

varStyle(fish, activeBracelet.activeStyle.fish)
varStyle(bracelet, activeBracelet.activeStyle.bracelet)

function varStyle (element, obj) {
    element.style.backgroundImage = obj.backgroundImage;
    element.style.backgroundPosition = obj.backgroundPosition;
    element.style.backgroundRepeat = obj.backgroundRepeat;
    element.style.backgroundSize = obj.backgroundSize;
    element.style.top = obj.top;
    element.style.left = obj.left;
    element.style.transform = obj.transform;
}

listButton('Fish', document.querySelector('#itemsFColor'), 19, activeBracelet.activeStyle.fish.fishName);
listButton(activeBracelet.activeImg, document.querySelector('#itemsBColor'), activeBracelet.activeStyle.bracelet.colorNum, activeBracelet.activeStyle.bracelet.braceletName);

function listButton (files, block, num, name) {
    block.innerHTML = '';
    for (let i = 1; i <= num; i++) {
        var element = document.createElement('button');
        element.classList.add(`color${files}`);
        block.append(element);
        if (files == 'Fish') {
            element.addEventListener('click', function () {
                fish.style.backgroundImage = `url('./img/Fish/${i}.png')`;
                document.querySelector('#colorFish').textContent = this.querySelector('h4').textContent;
                for (let i = 0; i < document.querySelectorAll(`.colorFish`).length; i++) {
                    document.querySelectorAll(`.colorFish`)[i].classList.remove('active')  ;  
                    document.querySelector('.fonMain').classList.remove('active');                    
                }
                this.classList.add('active');
            })
            element.innerHTML = `<img src="./img/${files}/${i}.png"/> <h4>${name[i]}</h4>`;
        } else {
            
                element.addEventListener('click', function () {
                    bracelet.style.backgroundImage = `url('./img/${activeBracelet.activeImg}/${i}.png')`;
                    document.querySelector('#colorBracelet').textContent = this.querySelector('h4').textContent;
                    for (let i = 0; i < document.querySelectorAll(`.color${files}`).length; i++) {
                        document.querySelectorAll(`.color${files}`)[i].classList.remove('active')  ;
                        document.querySelector('.fonMain').classList.remove('active');                      
                    }
                    this.classList.add('active');
                });
                element.innerHTML = `<img src="./img/${activeBracelet.activListLink}/${i}.jpg"/> <h4>${name[i]}</h4>`;
        }
        element.style.padding = '20px';
        
    }
}
}

const size = document.querySelectorAll('.size');
size.forEach(element => {
    element.addEventListener('click', function () {
        size.forEach(item => {
            item.classList.remove('active')
        })
        element.classList.add('active');
        document.querySelector('.fonMain').classList.remove('active');
        document.querySelector('#sizeBracelet').textContent = element.textContent;
    })
});



const styleBracelet = document.querySelectorAll('#style');
styleBracelet.forEach(item => {
    item.addEventListener('click', function () {
        
        document.querySelector('.styleBraceletH2').innerHTML = item.textContent;
        console.log(item.name)

        switch (item.name) {
                case 'Rombolino':
                    activeBracelet.activeStyle = Rombolino;
                    activeBracelet.activeImg = 'Rombolino';
                    activeBracelet.activListLink = 'photo2';

                    document.querySelector('#colorBracelet').textContent = activeBracelet.activeStyle.bracelet.braceletName[1];
                break;

                case 'Flatsea':
                    activeBracelet.activeStyle = Flatsea;
                    activeBracelet.activeImg = 'Flatsea';
                    activeBracelet.activListLink = 'photo1';

                    document.querySelector('#colorBracelet').textContent = activeBracelet.activeStyle.bracelet.braceletName[3];
                break;

                case 'Pamponero':
                    activeBracelet.activeStyle = Pamponero;
                    activeBracelet.activeImg = 'Pamponero';
                    activeBracelet.activListLink = 'photo1';

                    document.querySelector('#colorBracelet').textContent = activeBracelet.activeStyle.bracelet.braceletName[13];
                break;

                case 'Verasper':
                    activeBracelet.activeStyle = Verasper;
                    activeBracelet.activeImg = 'Verasper';
                    activeBracelet.activListLink = 'photo2';

                    document.querySelector('#colorBracelet').textContent = activeBracelet.activeStyle.bracelet.braceletName[1];
                break;

                
        
            default:
                activeBracelet.activeStyle = Rombolino;
                break;
        }
        document.querySelector('#colorFish').textContent     = activeBracelet.activeStyle.fish.fishName[11];
        reloadStyle();
    })
})

document.querySelector('#mainPrice').addEventListener('click', function () {
    console.log(document.querySelector('.price'))
    document.querySelector('.price').classList.toggle('active');

});

document.querySelector('.fon').addEventListener('click', function () {
    console.log(document.querySelector('.price'))
    document.querySelector('.price').classList.toggle('active');

});


document.querySelector('#numBracelet').addEventListener('input', function () {
    document.querySelector('#mainPrice').innerHTML = `€ ${69*document.querySelector('#numBracelet').value}`;
})