var checkerholder = document.querySelector('.checkers');
var checkers = checkerholder.querySelectorAll('input');

var freetab = document.querySelector('.free');
var protabOne = document.querySelector('.pro1');
var protabTwo = document.querySelector('.pro2');
var protabThree = document.querySelector('.pro3');
var protabFour = document.querySelector('.pro4');

checkers.forEach(radio => {
    radio.addEventListener('change', () => {
        freetab.classList.add('disappear');
        freetab.classList.remove('appear');
        
        protabOne.classList.add('disappear');
        protabOne.classList.remove('appear');
        
        protabTwo.classList.add('disappear');
        protabTwo.classList.remove('appear');
        
        protabThree.classList.add('disappear');
        protabThree.classList.remove('appear');
        
        protabFour.classList.add('disappear');
        protabFour.classList.remove('appear');
        if (radio.classList.contains('check-1')) {
            freetab.classList.add('appear');
            freetab.classList.remove('disappear');
        } else if (radio.classList.contains('check-2')) {
            protabOne.classList.add('appear');
            protabOne.classList.remove('disappear');
        } else if (radio.classList.contains('check-3')) {
            protabTwo.classList.add('appear');
            protabTwo.classList.remove('disappear');
        } else if (radio.classList.contains('check-4')) {
            protabThree.classList.add('appear');
            protabThree.classList.remove('disappear');
        } else if (radio.classList.contains('check-5')) {
            protabFour.classList.add('appear');
            protabFour.classList.remove('disappear');
        }
    });
});

var paytab = document.querySelector('#tab3');
var paytabclosebtn = document.querySelector('#paytabclose');
var paytabappearbtn = document.querySelector('#paytabappear')

paytabclosebtn.addEventListener('click', () => {
    paytab.style.zIndex = '-1000';
    paytab.style.display = 'none';
});
paytabappearbtn.addEventListener('click', () => {
    paytab.style.zIndex = '1000';
    paytab.style.display = 'flex';
});

