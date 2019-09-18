<?php
    require_once('dbconnect.php');

    $league_name = $_POST['league_name'];

    if ($updateTeam = mysqli_prepare($connection, "UPDATE teamTable SET league_name = 'None' WHERE league_name = ?"))
    {
        mysqli_stmt_bind_param($updateTeam, "s", $league_name);
        mysqli_stmt_execute($updateTeam);
        mysqli_stmt_close($updateTeam);
    }

    if ($table = mysqli_prepare($connection, "Delete FROM leagueTable WHERE league_name = ?"))
    {
        mysqli_stmt_bind_param($table, "s", $league_name);
        mysqli_stmt_execute($table);
        echo "League Deleted";
        mysqli_stmt_close($table);
    }

    mysqli_close($connection);
?>
