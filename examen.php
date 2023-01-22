<?php
$type = $_GET['type'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="test.css">
</head>
<body>

<img id="couvImage" src=<?= './img/' .$type .'/' .$type .'-couv.jpg'?> width="60%" height="60%" class=<?=$type?>>
<img id="monImage" src=<?= './img/' .$type .'/' .$type .'-1.jpg'?> width="60%" height="60%" class=<?=$type?>>
<input type="submit" value="start" id="commencer" class="btn">
<div id = "div1">
    <input type="checkbox" id="input"  value="A">A<br>
    <input type="checkbox" id="input"  value="B">B<br>
    <input type="checkbox" id="input"  value="C">C<br>
    <input  type="checkbox" id="input"  value="D">D<br>
    <input type="submit" value="precedent" id="precedent" class="btn" >
    <input type="submit" value="suivant" id="suivant" class="btn">
    <input type="submit" value="soummetre" id="soummetre" class="btn">
</div>

<script src="./examen.js"></script>
</body>
</html>
