<?php
    require_once('dbconnect.php');

    $sponsor_name = $_POST['sponsor_name'];

    if ($updatePlayer = mysqli_prepare($connection, "UPDATE playerTable SET sponsor_name = 'None' WHERE sponsor_name = ?"))
    {
        mysqli_stmt_bind_param($updatePlayer, "s", $sponsor_name);
        mysqli_stmt_execute($updatePlayer);
        mysqli_stmt_close($updatePlayer);
    }

    if ($updateTeam = mysqli_prepare($connection, "UPDATE teamTable SET sponsor_name = 'None' WHERE sponsor_name = ?"))
    {
        mysqli_stmt_bind_param($updateTeam, "s", $sponsor_name);
        mysqli_stmt_execute($updateTeam);
        mysqli_stmt_close($updateTeam);
    }

    if ($updateLeague = mysqli_prepare($connection, "UPDATE leagueTable SET sponsor_name = 'None' WHERE sponsor_name = ?"))
    {
        mysqli_stmt_bind_param($updateLeague, "s", $sponsor_name);
        mysqli_stmt_execute($updateLeague);
        mysqli_stmt_close($updateLeague);
    }

    if ($table = mysqli_prepare($connection, "Delete FROM sponsorTable WHERE sponsor_name = ?"))
    {
        mysqli_stmt_bind_param($table, "s", $sponsor_name);
        mysqli_stmt_execute($table);
        echo "Sponsor Deleted";
        mysqli_stmt_close($table);
    }

    mysqli_close($connection);
?>
