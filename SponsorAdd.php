<?php
    require_once('dbconnect.php');

    $mysqli_duplicate_key = 1062;
    $sponsor_name = $_POST['sponsor_name'];


    if(mysqli_query($connection, "SELECT * FROM sponsorTable") === false)
    {
        $table = "CREATE TABLE sponsorTable(
        sponsor_name VARCHAR(30) NOT NULL, 
        PRIMARY KEY(sponsor_name)
        )";
        if(mysqli_query($connection, $table) === false)
        {
            echo "Error Creating sponsorTable: ". $connection->error;
        }
    }
    if ($table = mysqli_prepare($connection,"INSERT INTO sponsorTable(sponsor_name) VALUES(?)"))
    {
        mysqli_stmt_bind_param($table, "s", $sponsor_name);
        mysqli_stmt_execute($table);
        if(mysqli_errno($connection) == $mysqli_duplicate_key)
        {
             echo "Error: Duplicate Sponsor Name";
        }
        else
        {
          echo "Sponsor added";  
        }

        mysqli_stmt_close($table); 
    }
    else
    {
        echo "Error: ". $table . "<br>" . $connection->error; 
    }

            
    mysqli_close($connection);
?>
