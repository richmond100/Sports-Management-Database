<?php
    require_once('dbconnect.php');

    $mysqli_duplicate_key = 1062;
    $team_name = $_POST['team_name'];
    $league_name = $_POST['league_name'];
    $sponsor_name = $_POST['sponsor_name'];


    if(mysqli_query($connection, "SELECT * FROM teamTable") === false)
    {
        $table = "CREATE TABLE teamTable(
        team_name VARCHAR(30) NOT NULL, 
        league_name VARCHAR(30) DEFAULT 'None' NOT NULL, 
        sponsor_name VARCHAR(30) DEFAULT 'None' NOT NULL, 
        PRIMARY KEY(team_name),
        FOREIGN KEY(league_name) REFERENCES leagueTable(league_name) ON DELETE SET DEFAULT,
        FOREIGN KEY(sponsor_name) REFERENCES sponsorTable(sponsor_name) ON DELETE SET DEFAULT
        )";
        if(mysqli_query($connection, $table) === false)
        {
            echo "Error Creating teamTable: ". $connection->error;
        }
    }
    if ($table = mysqli_prepare($connection,"INSERT INTO teamTable(team_name, league_name, sponsor_name) VALUES(?, ?, ?)"))
    {
        mysqli_stmt_bind_param($table, "sss", $team_name, $league_name, $sponsor_name);
        mysqli_stmt_execute($table);
        if(mysqli_errno($connection) == $mysqli_duplicate_key)
        {
            echo "Error: Duplicate Team Name";
        }
        else
        {
            echo "Team added";
        }
        mysqli_stmt_close($table); 
    }
    else
    {
        echo "Error: ". $table . "<br>" . $connection->error;      
    }
            
    mysqli_close($connection);
?>
