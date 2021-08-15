let Rombolino = {
    bracelet: {
        backgroundImage: 'url("./img/Rombolino/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        colorNum: 16,
        top: 0,
        left: 0,
        transform: 'rotate(0deg)'
    },
    fish: {
        backgroundImage: 'url("./img/Fish/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '113% auto',
        top: '3.2%',
        left: '2%',
        transform: 'rotate(0deg)'
    }
}
let Flatsea = {
    bracelet: {
        backgroundImage: 'url("./img/Flatsea/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        colorNum: 12,
        top: 0,
        left: 0,
        transform: 'rotate(0deg)'
    },
    fish: {
        backgroundImage: 'url("./img/Fish/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '121.5% auto',
        top: '4%',
        left: '-2.4%',
        transform: 'rotate(-170deg)'
    }
}
let Pamponero = {
    bracelet: {
        backgroundImage: 'url("./img/Pamponero/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '130% auto',
        colorNum: 13,
        top: 0,
        left: 0,
        transform: 'rotate(0deg)'
    },
    fish: {
        backgroundImage: 'url("./img/Fish/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '110% auto',
        top: '2%',
        left: '-0.5%',
        transform: 'rotate(0deg)'
    }
}
let Verasper = {
    bracelet: {
        backgroundImage: 'url("./img/Verasper/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        colorNum: 17,
        top: 0,
        left: 0,
        transform: 'rotate(0deg)'
    },
    fish: {
        backgroundImage: 'url("./img/Fish/1.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '95% auto',
        top: '4%',
        left: '6%',
        transition: 'scale(0deg)'
    }
}

let activeBracelet = {
    activeStyle: Rombolino,
    activStyleStr: 'Rombolino',
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

listButton('Fish', document.querySelector('#itemsFColor'), 26);
listButton(activeBracelet.activStyleStr, document.querySelector('#itemsBColor'), activeBracelet.activeStyle.bracelet.colorNum);

function listButton (files, block, num) {
    block.innerHTML = '';
    for (let i = 1; i <= num; i++) {
        var element = document.createElement('button');
        element.classList.add(`color${files}`);
        block.append(element);
        if (files == 'Fish') {
            element.addEventListener('click', function () {
                fish.style.backgroundImage = `url('./img/Fish/${i}.png')`;
                for (let i = 0; i < document.querySelectorAll(`.colorFish`).length; i++) {
                    document.querySelectorAll(`.colorFish`)[i].classList.remove('active')  ;                      
                }
                this.classList.add('active');
            })
        } else {
            
                element.addEventListener('click', function () {
                    bracelet.style.backgroundImage = `url('./img/${files}/${i}.png')`;
                    for (let i = 0; i < document.querySelectorAll(`.color${files}`).length; i++) {
                        document.querySelectorAll(`.color${files}`)[i].classList.remove('active')  ;                      
                    }
                    this.classList.add('active');
                });
            
        }
        element.style.height = 'auto';
        element.innerHTML = `<img src="./img/${files}/${i}.png"/>`;
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
        document.querySelector('#sizeBracelet').textContent = element.textContent;
    })
});



const styleBracelet = document.querySelectorAll('#style');
styleBracelet.forEach(item => {
    item.addEventListener('click', function () {
        
        document.querySelector('.styleBraceletH2').innerHTML = item.textContent;
        activeBracelet.activStyleStr = item.name;
        console.log(item.name)
        
        switch (item.name) {
                case 'Rombolino':
                    activeBracelet.activeStyle = Rombolino;
                break;

                case 'Flatsea':
                    activeBracelet.activeStyle = Flatsea;
                break;

                case 'Pamponero':
                    activeBracelet.activeStyle = Pamponero;
                break;

                case 'Verasper':
                    activeBracelet.activeStyle = Verasper;
                break;

                
        
            default:
                activeBracelet.activeStyle = Rombolino;
                break;
        }
        reloadStyle();
    })
})