var v1 = $("#v1")
var v2 = $("#v2")
var v3 = $("#v3")
var v4 = $("#v4")
var v5 = $("#v5")
var components = {}

var box = ''

function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}
function insertar() {
  if (isFull()) {
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
    var now = parseInt($("#now").val())
    $("#now").val(now + 1)
    v1.focus()
  }else {
    alert("Al menos debes poner un 'name' y un 'type'")
  }
}

function cantidad(p) {
  return Object.keys(p).length
}

function generar(components) {
  $("#result").html('')
  box = `
<form class="" action="index.html" method="post">`
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
function isFull(){
  if (v2.val().trim() !== "" &&
      v3.val().trim() !== "") {
    return true
  }else {
    return false;
  }
}
function cambios(e){
  var p = parseInt(e) - 1
  if (!components[p]) {
    $("#now").val(cantidad(components))
  }else {
    v1.val(components[p]['$lbl'])
    v2.val(components[p]['$nm'])
    v3.val(components[p]['$tp'])
    v4.val(components[p]['$ph'])
    v5.val(components[p]['$val'])
  }

}
