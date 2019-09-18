<?php
    require_once('dbconnect.php');

    $table = mysqli_query($connection, "SELECT player_id, lname, fname FROM playerTable ORDER BY lname");

    echo '<option value="">Select Player</option>';
    while($row = $table->fetch_assoc())
    {
       echo '<option value="'.$row['player_id'].'">'.$row['player_id']. " ". $row['lname'].","." ".$row['fname'].'</option>';       
    }


    mysqli_close($connection);
?>
