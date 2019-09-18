<?php
    require_once('dbconnect.php');

    $player_id = $_POST['player_id'];

    if ($table = mysqli_prepare($connection, "Delete FROM playerTable WHERE player_id = ?"))
    {
        mysqli_stmt_bind_param($table, "i", $player_id);
        mysqli_stmt_execute($table);
        echo "Player Information Deleted";
        mysqli_stmt_close($table);
    }

    mysqli_close($connection);
?>
