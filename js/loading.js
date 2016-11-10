var  loading = window.pleaseWait({
  logo : 'img/logo.png',
  backgroundColor: 'rgb(31, 50, 60)',
  loadingHtml: '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
});
window.loading_screen = loading ;
$(window).on('load', function(){
  loading.finish()
});
