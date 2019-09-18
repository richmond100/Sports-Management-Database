<?php
    require_once('dbconnect.php');
         
    $table = mysqli_query($connection, "Select * FROM leagueTable ORDER BY league_name");
    if($table->num_rows == 0)
    {
        echo "Table Empty";
    }
    else
    {
        echo"<style>
        table {margin-left: auto; margin-right: auto; width: 50%}, th, td {border: 1px solid black;} 
        button {margin: 0 auto;}
        </style>";
        echo 
            "<table>
            <tr>
            <th>League Name</th>
            <th>End Date</th>
            <th>Sponsor</th>
            <input type=\"button\" value=\"Click to hide output\" onclick=\"hideLeagueField()\">
            </tr>
        ";
        while($row = mysqli_fetch_array($table))
        {
            echo "<tr>";
            echo "<td>" . $row['league_name'] . "</td>";
            echo "<td>" . $row['end_date'] . "</td>";
            echo "<td>" . $row['sponsor_name'] . "</td>";    
            echo"</tr>";
        }
    }
    mysqli_close($connection);
?>
