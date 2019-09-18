<?php
    require_once('dbconnect.php');
    $league_name = $_POST['league_name'];

    $table = mysqli_query($connection, "SELECT * FROM leagueTable WHERE league_name = '$league_name'");
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
            <th>League Name</th>
            <th>End Date</th>
            <th>Sponsor</th>
            <input type=\"button\" value=\"Click to hide output\" onclick=\"hideLeagueField()\">
            </tr>
        ";
        $row = mysqli_fetch_array($table);
        echo "<tr>";
        echo "<td>" . $row['league_name'] . "</td>";
        echo "<td>" . $row['end_date'] . "</td>";
        echo "<td>" . $row['sponsor_name'] . "</td>";    
        echo"</tr>";
    }
    mysqli_close($connection);
?>
