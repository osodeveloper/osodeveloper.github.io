var v1 = $("#v1")
var v2 = $("#v2")
var v3 = $("#v3")
var v4 = $("#v4")
var v5 = $("#v5")
var components = {}

var box = `
<form class="" action="index.html" method="post">`

function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}
function insertar() {
  var cant = cantidad(components)
  components[cant] = {
    $lbl : v1.val().trim(),
    $nm : v2.val().trim(),
    $tp : v3.val().trim(),
    $ph : v4.val().trim(),
    $val : v5.val().trim()
  }
  for (var i = 1; i < 6; i++) {
    $("#v" + i).val('')
  }
  v1.focus()
}

function cantidad(p) {
  return Object.keys(p).length
}

function generar(components) {
  for (var i = 0; i < cantidad(components); i++) {
    box += `
  <div class="form-group">
    <label for="">${components[i]['$lbl']}</label>
    <input type="${components[i]['$tp']}" name="${components[i]['$nm']}" value="${components[i]['$val']}" placeholder="${components[i]['$ph']}" class="form-control">
  </div>`
  }
  box += `
</form>`
  $("#result").html(escapeHtml(box))
}
