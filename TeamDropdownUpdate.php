<?php
    require_once('dbconnect.php');

    $table = mysqli_query($connection, "SELECT team_name FROM teamTable ORDER BY team_name");

    echo '<option value="">Select Team</option>';
    echo '<option value="None">None</option>';
    while($row = $table->fetch_assoc())
    {
       echo '<option value="'.$row['team_name'].'">'.$row['team_name'].'</option>';       
    }


    mysqli_close($connection);
?>
