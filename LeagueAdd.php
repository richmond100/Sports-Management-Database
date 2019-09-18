<?php
    require_once('dbconnect.php');

    $mysqli_duplicate_key = 1062;
    $league_name = $_POST['league_name'];
    $end_date = date("Y-m-d", strtotime($_POST['end_date']));
    $sponsor_name = $_POST['sponsor_name'];

    if(isset($_POST['end_date']) && strlen($_POST['end_date']) > 0)
    {
        if(mysqli_query($connection, "SELECT * FROM leagueTable") === false)
        {
            $table = "CREATE TABLE leagueTable(
            league_name VARCHAR(30) NOT NULL, 
            end_date DATE NOT NULL, 
            sponsor_name VARCHAR(30) DEFAULT 'None' NOT NULL, 
            PRIMARY KEY(league_name),
            FOREIGN KEY(sponsor_name) REFERENCES sponsorTable(sponsor_name) ON DELETE SET DEFAULT
            )";
            if(mysqli_query($connection, $table) === false)
            {
                echo "Error Creating leagueTable: ". $connection->error;
            }
        }
        if ($table = mysqli_prepare($connection,"INSERT INTO leagueTable(league_name, end_date, sponsor_name) VALUES(?, ?, ?)"))
        {
            mysqli_stmt_bind_param($table, "sss", $league_name, $end_date, $sponsor_name);
            mysqli_stmt_execute($table);
            if(mysqli_errno($connection) == $mysqli_duplicate_key)
            {
                echo "Error: Duplicate League Name";
            }
            else
            {
              echo "League added";  
            }
            mysqli_stmt_close($table); 
        }
        else
        {

            echo "Error: ". $table . "<br>" . $connection->error; 

        }
    }
    else
    {
        echo "Empty field(s)"; 
    }
    mysqli_close($connection);
?>
