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
            modal.forEach(element => {
                element.classList.remove('active');
            });
        })
    })
});


