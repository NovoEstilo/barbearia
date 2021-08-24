function fechamenu(){

  var fecha=document.querySelector(".p_serv");

  var fecha2=document.querySelector(".p_hora");

  var fechamenu=document.querySelector(".btn_fecha");

  fecha.style.background='transparent';

  fecha.style.color='transparent';

  fecha.style.left='-35vw';

  fecha.style.transition='.1s';

  fecha2.style.background='transparent';

  fecha2.style.color='transparent';

  fecha2.style.transition='.1s';

  fecha2.style.top='6.5vw';

  fecha2.style.left='-35vw'

  fechamenu.style.top='0';

}

function ativamenu(){

  var ativa=document.querySelector(".p_serv");

  var ativa2=document.querySelector(".p_hora");

  var btnmenu=document.querySelector(".btn_fecha");

  ativa.style.background='white';

  ativa.style.color='black';

  ativa.style.transition='0s';

  ativa.style.top='-1vw';

  

  ativa2.style.background='white';

  ativa2.style.color='black';

  ativa2.style.transition='0s';

  ativa2.style.top='10vw';

  

  btnmenu.style.top='11vw';

  btnmenu.style.transition='0s';

}

function moveserv() {

  var movserv=document.querySelector(".p_serv");

  var movserv2=document.querySelector(".p_hora");

  movserv.position='absolute';

  //movserv.style.left='-7vw';

  movserv.style.transition='.4s';

  movserv2.style.top='';

  movserv2.style.left='-70vw';

  

}

/*

function movehora() {

  var movhora=document.querySelector(".p_hora");

  movhora.style.left='-35vw';

  movhora.style.top='-4vw';

}

*/


function fechamenu(){

  var fecha=document.querySelector(".p_serv");

  var fecha2=document.querySelector(".p_hora");

  var fechamenu=document.querySelector(".btn_fecha");

  fecha.style.background='transparent';

  fecha.style.color='transparent';

  fecha.style.left='-35vw';

  fecha.style.transition='.1s';

  fecha2.style.background='transparent';

  fecha2.style.color='transparent';

  fecha2.style.transition='.1s';

  fecha2.style.top='6.5vw';

  fecha2.style.left='-35vw'

  fechamenu.style.top='0';

  fecha.style.display='none';

  fecha2.style.display='none';

  var fechatemp=document.querySelector(".p_temp");

  fechatemp.style.top='-20vw';

}

function ativamenu(){

  var ativa=document.querySelector(".p_serv");

  var ativa2=document.querySelector(".p_hora");

  var btnmenu=document.querySelector(".btn_fecha");

  ativa.style.background='white';

  ativa.style.color='black';

  ativa.style.transition='0s';

  ativa.style.top='-1vw';

  ativa.style.display='block';

  

  ativa2.style.background='white';

  ativa2.style.color='black';

  ativa2.style.transition='0s';

  ativa2.style.top='10vw';

  ativa2.style.display='block';

  

  btnmenu.style.top='11vw';

  btnmenu.style.transition='0s';

}

function moveserv() {

  var movserv=document.querySelector(".p_serv");

  var movserv2=document.querySelector(".p_hora");

  movserv.position='absolute';

  //movserv.style.left='-7vw';

  movserv.style.transition='.4s';

  movserv2.style.top='';

  movserv2.style.left='-70vw';

  

}

/*

function movehora() {

  var movhora=document.querySelector(".p_hora");

  movhora.style.left='-35vw';

  movhora.style.top='-4vw';

}

*/
