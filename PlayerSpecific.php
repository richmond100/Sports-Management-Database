<?php
    require_once('dbconnect.php');
    $player_id = $_POST['player_id'];

    $table = mysqli_query($connection, "SELECT * FROM playerTable WHERE player_id = $player_id");
    if($connection->error)
    {
        echo "Error: ". $table . "<br>" . $connection->error;
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
        $row = mysqli_fetch_array($table);
        echo "<tr>";
        echo "<td>" . $row['player_id'] . "</td>";
        echo "<td>" . $row['fname'] . "</td>";
        echo "<td>" . $row['lname'] . "</td>";
        echo "<td>" . $row['salary'] . "</td>";
        echo "<td>" . $row['team_name'] . "</td>";
        echo "<td>" . $row['sponsor_name'] . "</td>";    
        echo"</tr>";
    }
    mysqli_close($connection);
?>
