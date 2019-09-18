<?php
    require_once('dbconnect.php');

    $table = mysqli_query($connection, "SELECT league_name FROM leagueTable ORDER BY league_name");

    echo '<option value="">Select League</option>';
    echo '<option value="None">None</option>';
    while($row = $table->fetch_assoc())
    {
       echo '<option value="'.$row['league_name'].'">'.$row['league_name'].'</option>';       
    }


    mysqli_close($connection);
?>
