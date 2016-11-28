
  $("#agregar").on("click", function(){
    if ($("#opciones").val() !== "") {
      $("#lista").append(`<li class="ui-state-default" id="${$("#opciones").val().toLowerCase()}"><div class="alert alert-info text-center" role="alert">${$("#opciones").val().toUpperCase()}</div></li>`)
      $("#opciones").val("")
    }
  })

$("#generar").on("click", function(e) {
  e.preventDefault()
  var lista = $("#lista2 li")
  var codigo = `
<form class="" action="index.html" method="post">`

  if (lista.length > 0) {
    $.map(lista, function(value, index) {
      switch (value['id']) {
        case 'input':
          codigo += `
    <div class="form-group">
      <label for="">Label?</label>
      <input type="text" name="" class="form-control" value="" placeholder="">
    </div>`
          break;
        case 'textarea':
          codigo += `
    <div class="form-group">
      <label for="">Label?</label>
      <textarea name="" rows="4" cols="" class="form-control" placeholder=""></textarea>
    </div>`
        break;
        case 'select':
          codigo += `
    <div class="form-group">
      <label for="">Label?</label>
      <select class="form-control" name="">
        <option value="">Opciones...</option>
      </select>
    </div>`
          break;
        case 'checkbox':
          codigo += `
    <div class="checkbox">
     <label>
       <input type="checkbox"> Opcion
     </label>
   </div>`
          break;
        case 'radio':
          codigo += `
    <div class="radio">
      <label>
        <input type="radio" name="optionsRadios" id="" value="">
        Opcion
      </label>
    </div>`
          break;
        default:

      }
    })
    codigo += `
</form>`
    $("#result").html(escapeHtml(codigo))
    $("#codigo").modal('show')
  }
})
$("#copiar").on('click', function(){
    $("#result").select()
//   document.execCommand("copy");
})
function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}
