<?php
    require_once('dbconnect.php');

    $league_name = $_POST['league_name'];
    $end_date = date("Y-m-d", strtotime($_POST['end_date']));
    $sponsor_name = $_POST['sponsor_name'];
    
    if(isset($_POST['end_date']) && strlen($_POST['end_date']) > 0)
    {
        if ($editDate = mysqli_prepare($connection, "UPDATE leagueTable SET end_date = ? WHERE league_name = ?"))
        {
            mysqli_stmt_bind_param($editDate, "ss", $end_date, $league_name);
            mysqli_stmt_execute($editDate);
            echo "End Date Updated";
            echo "<br>";
            mysqli_stmt_close($editDate);
        }
        else
        {
            echo "Error: ". $editDate . "<br>" . $connection->error; 
        }       
    }

    if(isset($sponsor_name) && strlen($sponsor_name) > 0)
    {
        if ($editSponsor = mysqli_prepare($connection, "UPDATE leagueTable SET sponsor_name = ? WHERE league_name = ?"))
        {
            mysqli_stmt_bind_param($editSponsor, "ss", $sponsor_name, $league_name);
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
