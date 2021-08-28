const modal = document.querySelectorAll('.modal');


const closeM = document.querySelectorAll('.close');
    
closeM.forEach(function (item, id) {
    item.addEventListener('click', function () {
        console.log(id)
        modal[id].classList.remove('active');
        document.querySelector('.fonMain').classList.remove('active');
    });
});

modal.forEach(element => {
    element.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelector('.result').style.filter = 'blur(1.5rem)';
            setTimeout(() => {
                document.querySelector('.result').style.filter = 'blur(0rem)';
            }, 500);
        })
    })
});


