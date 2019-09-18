<?php
    require_once('dbconnect.php');
           
    if($table = mysqli_query($connection, "SELECT * FROM sponsorTable ORDER BY sponsor_name")) 
    {
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
                <th>Sponsor Name</th>
                <input type=\"button\" value=\"Click to hide output\" onclick=\"hideSponsorField()\">
                </tr>
            ";
            while($row = mysqli_fetch_array($table))
            {
                echo "<tr>";
                echo "<td>" . $row['sponsor_name'] . "</td>";    
                echo"</tr>";
            }
        }
    }
    else
    {
      echo "Error: ". $table . "<br>" . $connection->error;  
    }
    mysqli_close($connection);
?>
