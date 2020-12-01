// Class Routine Tabs Starts
let btn = document.querySelectorAll('.class-day button');
let content = document.querySelectorAll('.class-routine-time');

function showSun(index){

    btn.forEach((node)=>{
        node.classList.remove('class-day-active');
    })
    btn[index].classList.add('class-day-active');
    btn[index].style.outline = 'none';

    content.forEach((node)=>{
        node.style.display='none';
    })
    content[index].style.display = 'block';
    
    
}




// Class Routine Tabs Ends