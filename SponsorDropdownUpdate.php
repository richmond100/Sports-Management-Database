<?php
    require_once('dbconnect.php');

    $table = mysqli_query($connection, "SELECT sponsor_name FROM sponsorTable ORDER BY sponsor_name");

    echo '<option value="">Select Sponsor</option>';
    echo '<option value="None">None</option>';
    while($row = $table->fetch_assoc())
    {
       echo '<option value="'.$row['sponsor_name'].'">'.$row['sponsor_name'].'</option>';       
    }


    mysqli_close($connection);
?>
