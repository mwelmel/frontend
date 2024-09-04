window.onload = function(){
    alert('Welcome to Melisa world');
};

const socialIcons = document.querySelectorAll('.fab');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover',function(){
        icon.style.color = 'red';
    });
    icon.addEventListener('mouseout',function(){
        icon.style.color = '';
    });
});

document.querySelector('img').addEventListener('click',function(){
    alert('My Profile !');
});