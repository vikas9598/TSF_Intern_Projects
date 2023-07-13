function showModal(){
    document.querySelector('.overlay').classList.add('showOverlay')
    document.querySelector('.loginForm').classList.add('showLoginForm')
    document.querySelector('#services').classList.add('noservice')
  }
  function closeModal(){
    document.querySelector('.overlay').classList.remove('showOverlay')
    document.querySelector('.loginForm').classList.remove('showLoginForm')
    document.querySelector('#services').classList.remove('noservice')
  }
  
  var btn = document.querySelector("#btn");
  btn.addEventListener("click",showModal);
  var close = document.querySelector("span");
  close.addEventListener("click",closeModal);