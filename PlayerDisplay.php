<?php
    require_once('dbconnect.php');
            
    $table = mysqli_query($connection, "Select * FROM playerTable ORDER BY player_id");
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
            <th>Player ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Team Name</th>
            <th>Sponsor</th>
            <input type=\"button\" value=\"Click to hide output\" onclick=\"hidePlayerField()\">
            </tr>
        ";
        while($row = mysqli_fetch_array($table))
        {
            echo "<tr>";
            echo "<td>" . $row['player_id'] . "</td>";
            echo "<td>" . $row['fname'] . "</td>";
            echo "<td>" . $row['lname'] . "</td>";
            echo "<td>" . $row['salary'] . "</td>";
            echo "<td>" . $row['team_name'] . "</td>";
            echo "<td>" . $row['sponsor_name'] . "</td>";    
            echo"</tr>";
        }
    }
    mysqli_close($connection);
?>
