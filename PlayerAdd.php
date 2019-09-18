<?php
    require_once('dbconnect.php');

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $salary = $_POST['salary'];
    $team_name = $_POST['team_name'];
    $sponsor_name = $_POST['sponsor_name'];


    if(mysqli_query($connection, "SELECT * FROM playerTable") === false)
    {
        $table = "CREATE TABLE playerTable(
        player_id INT NOT NULL AUTO_INCREMENT,
        fname VARCHAR(15) NOT NULL, 
        lname VARCHAR(15) NOT NULL,  
        salary INT NOT NULL, 
        team_name VARCHAR(30) DEFAULT 'None' NOT NULL, 
        sponsor_name VARCHAR(30) DEFAULT 'None' NOT NULL, 
        PRIMARY KEY(player_id),
        FOREIGN KEY(team_name) REFERENCES teamTable(name) ON DELETE SET DEFAULT, 
        FOREIGN KEY(sponsor_name) REFERENCES sponsorTable(sponsor_name) ON DELETE SET DEFAULT
        )";
        if(mysqli_query($connection, $table) === false)
        {
            echo "Error Creating playerTable: ". $connection->error;
        }
    }

    if ($table = mysqli_prepare($connection,"INSERT INTO playerTable(fname, lname, salary, team_name, sponsor_name) VALUES(?, ?, ?, ?, ?)"))
    {
        mysqli_stmt_bind_param($table, "ssiss", $fname, $lname, $salary, $team_name, $sponsor_name);
        mysqli_stmt_execute($table);
        echo "Player added";
        mysqli_stmt_close($table); 
    }
    else
    {
        echo "Error: ". $table . "<br>" . $connection->error;
    }

    mysqli_close($connection);
?>
