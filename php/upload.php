<?php
$dir_subida = 'archivos/';
$fichero_subido = $dir_subida . basename($_FILES['file']['name']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $fichero_subido)) {

} else {
  
}

 ?>
