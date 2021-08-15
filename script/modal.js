const modal = document.querySelectorAll('.modal');


const closeM = document.querySelectorAll('.close');
    
closeM.forEach(function (item, id) {
    item.addEventListener('click', function () {
        console.log(id)
        modal[id].classList.remove('active');
    });
});

