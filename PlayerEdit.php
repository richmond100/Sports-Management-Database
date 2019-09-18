<?php
    require_once('dbconnect.php');

    $player_id = $_POST['player_id'];
    $salary = $_POST['salary'];
    $team_name = $_POST['team_name'];
    $sponsor_name = $_POST['sponsor_name'];
    
    if(isset($salary) && strlen($salary) > 0)
    {
        if ($editSalary = mysqli_prepare($connection, "UPDATE playerTable SET salary = ? WHERE player_id = ?"))
        {
            mysqli_stmt_bind_param($editSalary, "ii", $salary, $player_id);
            mysqli_stmt_execute($editSalary);
            echo "Salary Updated";
            echo "<br>";
            mysqli_stmt_close($editSalary);
        }
        else
        {
            echo "Error: ". $editSalary . "<br>" . $connection->error; 
        }       
    }

    if(isset($team_name) && strlen($team_name) > 0)
    {
        if ($editTeam = mysqli_prepare($connection, "UPDATE playerTable SET team_name = ? WHERE player_id = ?"))
        {
            mysqli_stmt_bind_param($editTeam, "si", $team_name, $player_id);
            mysqli_stmt_execute($editTeam);
            echo "Team Updated";
            echo "<br>";
            mysqli_stmt_close($editTeam);
        }
        else
        {
            echo "Error: ". $editTeam . "<br>" . $connection->error; 
        }
         
    }

    if(isset($sponsor_name) && strlen($sponsor_name) > 0)
    {
        if ($editSponsor = mysqli_prepare($connection, "UPDATE playerTable SET sponsor_name = ? WHERE player_id = ?"))
        {
            mysqli_stmt_bind_param($editSponsor, "si", $sponsor_name, $player_id);
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
