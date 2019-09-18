<?php
    require_once('dbconnect.php');

    $team_name = $_POST['team_name'];

    if ($updatePlayer = mysqli_prepare($connection, "UPDATE playerTable SET team_name = 'None' WHERE team_name = ?"))
    {
        mysqli_stmt_bind_param($updatePlayer, "s", $team_name);
        mysqli_stmt_execute($updatePlayer);
        mysqli_stmt_close($updatePlayer);
    }

    if ($table = mysqli_prepare($connection, "Delete FROM teamTable WHERE team_name = ?"))
    {
        mysqli_stmt_bind_param($table, "s", $team_name);
        mysqli_stmt_execute($table);
        echo "Team Deleted";
        mysqli_stmt_close($table);
    }

    mysqli_close($connection);
?>
