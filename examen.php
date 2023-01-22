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

<div hidden id="tableau_de_resultat">
    <table id="tableau">
        <thead>
            <tr>
                <th>Question</th>
                <th>Resultat</th>
            </tr>
        </thead>
        <tbody>
            <tr id="q1">
                <td id="reponse1"></td>
                <td id="resultat1"></td>
            </tr>
            <tr id="q2">
                <td id="reponse2"></td>
                <td id="resultat2"></td>
            </tr>
            <tr id="q3">
                <td id="reponse3"></td>
                <td id="resultat3"></td>
            </tr>
            <tr id="q4">
                <td id="reponse4"></td>
                <td id="resultat4"></td>
            </tr>
            <tr id="q5">
                <td id="reponse5"></td>
                <td id="resultat5"></td>
            </tr>
            <tr id="q6">
                <td id="reponse6"></td>
                <td id="resultat6"></td>
            </tr>
            <tr id="q7">
                <td id="reponse7"></td>
                <td id="resultat7"></td>
            </tr>
            <tr id="q8">
                <td id="reponse8"></td>
                <td id="resultat8"></td>
            </tr>
            <tr id="q9">
                <td id="reponse9"></td>
                <td id="resultat9"></td>
            </tr>
            <tr id="q10">
                <td id="reponse10"></td>
                <td id="resultat10"></td>
            </tr>
            <tr id="q11">
                <td id="reponse11"></td>
                <td id="resultat11"></td>
            </tr>
            <tr id="q12">
                <td id="reponse12"></td>
                <td id="resultat12"></td>
            </tr>
            <tr id="q13">
                <td id="reponse13"></td>
                <td id="resultat13"></td>
            </tr>
            <tr id="q14">
                <td id="reponse14"></td>
                <td id="resultat14"></td>
            </tr>
            <tr id="q15">
                <td id="reponse15"></td>
                <td id="resultat15"></td>
            </tr>
            <tr id="q16">
                <td id="reponse16"></td>
                <td id="resultat16"></td>
            </tr>
            <tr id="q17">
                <td id="reponse17"></td>
                <td id="resultat17"></td>
            </tr>
            <tr id="q18">
                <td id="reponse18"></td>
                <td id="resultat18"></td>
            </tr>
            <tr id="q19">
                <td id="reponse19"></td>
                <td id="resultat19"></td>
            </tr>
            <tr id="q20">
                <td id="reponse20"></td>
                <td id="resultat20"></td>
            </tr>
            <tr id="q21">
                <td id="reponse21"></td>
                <td id="resultat21"></td>
            </tr>
            <tr id="q22">
                <td id="reponse22"></td>
                <td id="resultat22"></td>
            </tr>
            <tr id="q23">
                <td id="reponse23"></td>
                <td id="resultat23"></td>
            </tr>
            <tr id="q24">
                <td id="reponse24"></td>
                <td id="resultat24"></td>
            </tr>
            <tr id="q25">
                <td id="reponse25"></td>
                <td id="resultat25"></td>
            </tr>
        </tbody>
    </table>
</div>
<script src="./examen.js"></script>
</body>
</html>
