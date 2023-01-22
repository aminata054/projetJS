<?php

$get = filter_input_array(INPUT_GET);

if (isset($get)) {
    extract($get);
    header('Location: ./examen.php?type=' . $type);
}