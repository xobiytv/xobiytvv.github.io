
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const line = document.getElementById('line')
const line2 = document.getElementById('line2')

btn1.onclick = function() {
    line.style.transform = 'translateX(25px)';
    line2.style.transform = 'translateX(25px)';
}

btn2.onclick = function() {
    line.style.transform = 'translateX(113px)';
    line2.style.transform = 'translateX(113px)';
}

btn3.onclick = function() {
    line.style.transform = 'translateX(195px)';
    line2.style.transform = 'translateX(195px)';
}

btn4.onclick = function() {
    line.style.transform = 'translateX(280px)';
    line2.style.transform = 'translateX(280px)';
}
btn5.onclick = function() {
    line.style.transform = 'translateX(373px)';
    line2.style.transform = 'translateX(373px)';
}




 let Mode = document.getElementById('click');

 Mode.onclick = function () {
     let team = document.getElementById('team');
     if(team.getAttribute('href') == 'oq-team.css'){
         team.href = 'qora-team.css';
     }

     else{
         team.href = 'oq-team.css';
     }
 }


 

window.addEventListener('DOMContentLoanded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0)
    })
    const menuBtn = document.querySelector('menu-Btn')
    const naviagtsion = document.querySelector('naviagtsion')
    const naviagtsionItem = document.querySelectorAll('naviagtsion a')

    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('active')
        naviagtsion.classList.toggle('active')
    })

    naviagtsionItem.forEach(navItem =>{
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active')
            naviagtsion.classList.remove('active')
        })
    })

   
})