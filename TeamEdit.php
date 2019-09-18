<?php
    require_once('dbconnect.php');

    $team_name = $_POST['team_name'];
    $league_name = $_POST['league_name'];
    $sponsor_name = $_POST['sponsor_name'];
    
    if(isset($league_name) && strlen($league_name) > 0)
    {
        if ($editLeague = mysqli_prepare($connection, "UPDATE teamTable SET league_name = ? WHERE team_name = ?"))
        {
            mysqli_stmt_bind_param($editLeague, "ss", $league_name, $team_name);
            mysqli_stmt_execute($editLeague);
            echo "Current League Updated";
            echo "<br>";
            mysqli_stmt_close($editLeague);
        }
        else
        {
            echo "Error: ". $editLeague . "<br>" . $connection->error; 
        }       
    }

    if(isset($sponsor_name) && strlen($sponsor_name) > 0)
    {
        if ($editSponsor = mysqli_prepare($connection, "UPDATE teamTable SET sponsor_name = ? WHERE team_name = ?"))
        {
            mysqli_stmt_bind_param($editSponsor, "ss", $sponsor_name, $team_name);
            mysqli_stmt_execute($editSponsor);
            echo "Sponsor Updated";
            echo "<br>";
            mysqli_stmt_close($editSponsor);
        }
        else
        {
            echo "Error: ". $editSponsor . "<br>" . $connection->error; 
        }       
    }

    mysqli_close($connection);
?>
