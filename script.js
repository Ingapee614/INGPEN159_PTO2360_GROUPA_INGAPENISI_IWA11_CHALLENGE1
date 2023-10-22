
 
 const order1  ={
       root1: document.querySelector('[data-key="order1"]'),
       biscuit1:document.querySelector('[data-biscuits="10"]'),
       donut1: document.querySelector('[data-donuts="13"]'),
       pancakes1:document.querySelector('[data-pancakes="0"]'),
       status1: document.querySelector('[data-delivered="false"]')
 }

 const order2  ={
    root2: document.querySelector('[data-key="order2"]'),
    biscuit2:document.querySelector('[data-biscuits="5"]'),
    donut2: document.querySelector('[data-donuts="0"]'),
    pancakes2:document.querySelector('[data-pancakes="2"]'),
    status2: document.querySelector('[data-delivered="false"]')
 }
 
 const order3  ={
    root3: document.querySelector('[data-key="order3"]'),
    biscuit3:document.querySelector('[data-biscuits="12"]'),
    donut3: document.querySelector('[data-donuts="11"]'),
    pancakes3:document.querySelector('[data-pancakes="15"]'),
    status3: document.querySelector('[data-delivered="true"]')}


document.getElementsByClassName("count")[0].innerText = order1.biscuit1.dataset.biscuits;
document.getElementsByClassName("count")[1].innerText = order1.donut1.dataset.donuts;
document.getElementsByClassName("count")[2].innerText = order1.pancakes1.dataset.pancakes;
document.getElementsByClassName("delivered")[0].innerText= order1.status1.dataset.delivered;
 

document.getElementsByClassName("count")[3].innerText = order2.biscuit2.dataset.biscuits;
document.getElementsByClassName("count")[4].innerText = order2.donut2.dataset.donuts;
document.getElementsByClassName("count")[5].innerText = order2.pancakes2.dataset.pancakes;
document.getElementsByClassName("delivered")[1].innerText= order2.status2.dataset.delivered;

document.getElementsByClassName("count")[6].innerText = order3.biscuit3.dataset.biscuits;
document.getElementsByClassName("count")[7].innerText = order3.donut3.dataset.donuts;
document.getElementsByClassName("count")[8].innerText = order3.pancakes3.dataset.pancakes;
document.getElementsByClassName("delivered")[2].innerText= order3.status3.dataset.delivered;




