<?php
    require_once('dbconnect.php');
    
    $team_name = $_POST['team_name'];

    $table = mysqli_query($connection, "SELECT * FROM teamTable WHERE team_name = '$team_name'");
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
            <th>Team Name</th>
            <th>Current League</th>
            <th>Sponsor</th>
            <input type=\"button\" value=\"Click to hide output\" onclick=\"hideTeamField()\">
            </tr>
        ";
        $row = mysqli_fetch_array($table);
        echo "<tr>";
        echo "<td>" . $row['team_name'] . "</td>";
        echo "<td>" . $row['league_name'] . "</td>";
        echo "<td>" . $row['sponsor_name'] . "</td>";    
        echo"</tr>";
    }
    mysqli_close($connection);
?>
