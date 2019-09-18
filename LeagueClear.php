<?php
    require_once('dbconnect.php');
    
    $current_date = date('Y-m-d');

    if ($updateTeam = mysqli_prepare($connection, "UPDATE teamTable SET league_name = 'None' WHERE league_name = ANY (Select league_name FROM leagueTable WHERE end_date < ?)"))
    {
        mysqli_stmt_bind_param($updateTeam, "s", $current_date);
        mysqli_stmt_execute($updateTeam);
        mysqli_stmt_close($updateTeam);
    }
    else
    {
        echo "Error: ". $updateTeam . "<br>" . $connection->error;
    }
    if ($table = mysqli_prepare($connection, "Delete FROM leagueTable WHERE end_date < ?"))
    {
        mysqli_stmt_bind_param($table, "s", $current_date);
        mysqli_stmt_execute($table);
        mysqli_stmt_close($table);
    }
    else
    {
        echo "Error: ". $table . "<br>" . $connection->error;
    }

    mysqli_close($connection);
?>
