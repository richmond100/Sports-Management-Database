function onclickUpdatePlayerDropdown()
{
	updateDropdownPlayerEdit();
	updateDropdownPlayerSpecific();
	updateDropdownPlayerDelete();
	updateDropdownAddPlayerTeam();
	updateDropdownAddPlayerSponsor();
	updateDropdownEditPlayerTeam();
	updateDropdownEditPlayerSponsor();
}

function onclickUpdateTeamDropdown()
{
	updateDropdownTeamEdit();
	updateDropdownTeamSpecific();
	updateDropdownTeamDelete();
	updateDropdownAddTeamSponsor();
	updateDropdownEditTeamSponsor();
	updateDropdownAddTeamLeague();
	updateDropdownEditTeamLeague();
}

function onclickUpdateLeagueDropdown()
{
	updateDropdownLeagueEdit();
	updateDropdownLeagueSpecific();
	updateDropdownLeagueDelete();
	updateDropdownAddLeagueSponsor();
	updateDropdownEditLeagueSponsor();
}

function onclickUpdateSponsorDropdown()
{
	updateDropdownSponsorDelete();
}

////Player functions//////////////////////////////////
function submitAddPlayer()
{
	var x = document.getElementById("AddPlayerOutput");
	document.getElementById("AddPlayerOutput").innerHTML = "";
	x.style.display = "block";
	var fname = document.getElementById('AddPlayerFirstName').value;
	var lname = document.getElementById('AddPlayerLastName').value;
	var salary = document.getElementById('AddPlayerSalary').value;
	var team_name = document.getElementById('AddPlayerTeam').value;
	var sponsor_name = document.getElementById('AddPlayerSponsor').value;
	if(fname != "" && lname != "" && salary != "" && team_name != "" && sponsor_name != "" && fname != null && lname != null && salary != null && team_name != null && sponsor_name != null)
	{
		$.ajax
		({
			type: "POST",
			url: "PlayerAdd.php",
			data: {"fname":fname, "lname":lname, "salary":salary, "team_name":team_name, "sponsor_name":sponsor_name},
			cache: false,
			success: function(html)
			{
				$("#AddPlayerOutput").html(html);
			}		
		});	
		updateDropdownPlayerEdit();
		updateDropdownPlayerDelete();		
		document.getElementById('AddPlayerFirstName').value = "";
		document.getElementById('AddPlayerLastName').value = "";
		document.getElementById('AddPlayerSalary').value = "";
		document.getElementById('AddPlayerTeam').selectedIndex = 0;
		document.getElementById('AddPlayerSponsor').selectedIndex = 0;
	}
	else
	{
		document.getElementById("AddPlayerOutput").innerHTML = "Error: Empty field(s)";
	}
}

function submitEditPlayer()
{
	var x = document.getElementById("EditPlayerOutput");
	document.getElementById("EditPlayerOutput").innerHTML = "";
	x.style.display = "block";
	var player_id = document.getElementById('EditPlayerSelect').value;
	var salary = document.getElementById('EditPlayerSalary').value;
	var team_name = document.getElementById('EditPlayerTeam').value;
	var sponsor_name = document.getElementById('EditPlayerSponsor').value;
	if (player_id != 0 && player_id != null)
	{
		$.ajax
		({
			type: "POST",
			url: "PlayerEdit.php",
			data: {player_id:player_id, salary:salary, team_name:team_name, sponsor_name:sponsor_name},
			cache: false,
			success: function(html)
			{
				$("#EditPlayerOutput").html(html);
			}
		});			
		document.getElementById('EditPlayerSalary').value = "";
		document.getElementById('EditPlayerTeam').selectedIndex = 0;
		document.getElementById('EditPlayerSponsor').selectedIndex = 0;
	}	
	else
	{
		document.getElementById("EditPlayerOutput").innerHTML = "Error: Please select a player";
	}
}

function clearEditPlayer()
{
	document.getElementById("EditPlayerOutput").innerHTML = "";
	document.getElementById('EditPlayerSalary').value = "";
	document.getElementById('EditPlayerTeam').selectedIndex = 0;
	document.getElementById('EditPlayerSelect').selectedIndex = 0;
	document.getElementById('EditPlayerSponsor').selectedIndex = 0;
}

function submitDeletePlayer()
{
	var x = document.getElementById("DeletePlayerOutput");
	document.getElementById("DeletePlayerOutput").innerHTML = "";
	x.style.display = "block";
	var player_id = document.getElementById('DeletePlayerSelect').value;
	if(player_id != "" && player_id != null && player_id != 0)
	{
		$.ajax
		({
			type: "POST",
			url: "PlayerDelete.php",
			data: {player_id:player_id},
			cache: false,
			success: function(html)
			{
				$("#DeletePlayerOutput").html(html);
			}
		});		
		updateDropdownPlayerDelete();
		document.getElementById('DeletePlayerSelect').selectedIndex = 0;
	}
	else
	{
		document.getElementById("DeletePlayerOutput").innerHTML = "Error: Please Select a Player";
	}
}

function submitSpecificPlayer()
{
	document.getElementById("SpecificPlayerOutput").innerHTML = "";
	document.getElementById("SpecificPlayerOutputTable").innerHTML = "";
	document.getElementById("SpecificPlayerOutput").style.display = "block";
	document.getElementById("SpecificPlayerOutputTable").style.display = "block";
	var player_id = document.getElementById('SpecificPlayerSelect').value;
	if(player_id != "" && player_id != null && player_id != 0)
	{
		$.ajax
		({
			type: "POST",
			url: "PlayerSpecific.php",
			data: {player_id:player_id},
			cache: false,
			success: function(html)
			{
				$("#SpecificPlayerOutputTable").html(html);
			}
		});		
		document.getElementById('SpecificPlayerSelect').selectedIndex = 0;
	}
	else
	{
		document.getElementById("SpecificPlayerOutput").innerHTML = "Error: Please Select a Player";
	}
}

function playerDisplay()
{
	var x = document.getElementById("ViewPlayerOutput");
	x.style.display = "table";
	$.ajax
	({
		url: "PlayerDisplay.php",
		cache: false,
		success: function(html)
		{
			$("#ViewPlayerOutput").html(html);
		}
	});
	
	return false;
}

///////////////////////////////////////////////////////
////Team functions//////////////////////////////////
function submitAddTeam()
{
	var x = document.getElementById("AddTeamOutput");
	document.getElementById("AddTeamOutput").innerHTML = "";
	x.style.display = "block";
	var team_name = document.getElementById('AddTeamName').value;
	var league_name = document.getElementById('AddTeamLeague').value;
	var sponsor_name = document.getElementById('AddTeamSponsor').value;
	if(team_name != "" && league_name != "" && sponsor_name != "" && team_name != null && league_name != null && sponsor_name != null)
	{
		$.ajax
		({
			type: "POST",
			url: "TeamAdd.php",
			data: {"team_name":team_name, "league_name":league_name, "sponsor_name":sponsor_name},
			cache: false,
			success: function(html)
			{
				$("#AddTeamOutput").html(html);
			}		
		});			
		document.getElementById('AddTeamName').value = "";
		document.getElementById('AddTeamLeague').selectedIndex = 0;
		document.getElementById('AddTeamSponsor').selectedIndex = 0;
	}
	else
	{
		document.getElementById("AddTeamOutput").innerHTML = "Error: Empty field(s)";
	}	
}

function submitSpecificTeam()
{
	document.getElementById("SpecificTeamOutput").innerHTML = "";
	document.getElementById("SpecificTeamOutputTable").innerHTML = "";
	document.getElementById("SpecificTeamOutput").style.display = "block";
	document.getElementById("SpecificTeamOutputTable").style.display = "block";
	var team_name = document.getElementById('SpecificTeamSelect').value;
	if(team_name != "" && team_name != null && team_name != "None")
	{
		$.ajax
		({
			type: "POST",
			url: "TeamSpecific.php",
			data: {team_name:team_name},
			cache: false,
			success: function(html)
			{
				$("#SpecificTeamOutputTable").html(html);
			}
		});		
		document.getElementById('SpecificTeamSelect').selectedIndex = 0;
	}
	else
	{
		document.getElementById("SpecificTeamOutput").innerHTML = "Error: Please Select a Team";
	}
}

function submitEditTeam()
{
	var x = document.getElementById("EditTeamOutput");
	document.getElementById("EditTeamOutput").innerHTML = "";
	x.style.display = "block";
	var team_name = document.getElementById('EditTeamSelect').value;
	var league_name = document.getElementById('EditTeamLeague').value;
	var sponsor_name = document.getElementById('EditTeamSponsor').value;
	if (team_name != 0 && team_name != null && team_name != "None")
	{
		$.ajax
		({
			type: "POST",
			url: "TeamEdit.php",
			data: {team_name:team_name, league_name:league_name, sponsor_name:sponsor_name},
			cache: false,
			success: function(html)
			{
				$("#EditTeamOutput").html(html);
			}
		});			
		document.getElementById('EditTeamLeague').selectedIndex = 0;
		document.getElementById('EditTeamSponsor').selectedIndex = 0;
	}	
	else
	{
		document.getElementById("EditTeamOutput").innerHTML = "Error: Please select a team";
	}	
}

function clearEditTeam()
{
	document.getElementById("EditTeamOutput").innerHTML = "";
	document.getElementById('EditTeamLeague').selectedIndex = 0;
	document.getElementById('EditTeamSelect').selectedIndex = 0;
	document.getElementById('EditTeamSponsor').selectedIndex = 0;
}

function submitDeleteTeam()
{
	var x = document.getElementById("DeleteTeamOutput");
	document.getElementById("DeleteTeamOutput").innerHTML = "";
	x.style.display = "block";
	var team_name = document.getElementById('DeleteTeamSelect').value;
	if(team_name != "" && team_name != null && team_name != "None")
	{
		$.ajax
		({
			type: "POST",
			url: "TeamDelete.php",
			data: {team_name:team_name},
			cache: false,
			success: function(html)
			{
				$("#DeleteTeamOutput").html(html);
			}
		});		
		updateDropdownTeamDelete();
		document.getElementById('DeleteTeamSelect').selectedIndex = 0;
	}
	else
	{
		document.getElementById("DeleteTeamOutput").innerHTML = "Error: Please Select a Team";
	}	
}

function teamDisplay()
{
	var x = document.getElementById("ViewTeamOutput");
	x.style.display = "table";
	$.ajax
	({
		url: "TeamDisplay.php",
		cache: false,
		success: function(html)
		{
			$("#ViewTeamOutput").html(html);
		}
	});
	
	return false;
}
///////////////////////////////////////////////////////
////League functions//////////////////////////////////
function submitAddLeague()
{
	console.log(document.getElementById('AddLeagueDate').value);
	var x = document.getElementById("AddLeagueOutput");
	document.getElementById("AddLeagueOutput").innerHTML = "";
	x.style.display = "block";
	var league_name = document.getElementById('AddLeagueName').value;
	var end_date = ""; 
	if(document.getElementById('AddLeagueDate').value != "")
	{
		end_date = new Date(document.getElementById('AddLeagueDate').value);
		end_date = end_date.toDateString();		
	}
	var sponsor_name = document.getElementById('AddLeagueSponsor').value;
	if(league_name != "" && sponsor_name != "" && end_date != "" && end_date != null && league_name != null && sponsor_name != null)
	{
		$.ajax
		({
			type: "POST",
			url: "LeagueAdd.php",
			data: {league_name:league_name, end_date: end_date, sponsor_name:sponsor_name},
			cache: false,
			success: function(html)
			{
				$("#AddLeagueOutput").html(html);
			}		
		});		
		document.getElementById('AddLeagueName').value = "";
		document.getElementById('AddLeagueDate').value = "";
		document.getElementById('AddLeagueSponsor').selectedIndex = 0;
	}
	else
	{
		document.getElementById("AddLeagueOutput").innerHTML = "Error: Empty field(s)";
	}		
}

function submitSpecificLeague()
{
	document.getElementById("SpecificLeagueOutput").innerHTML = "";
	document.getElementById("SpecificLeagueOutputTable").innerHTML = "";
	document.getElementById("SpecificLeagueOutput").style.display = "block";
	document.getElementById("SpecificLeagueOutputTable").style.display = "block";
	var league_name = document.getElementById('SpecificLeagueSelect').value;
	if(league_name != "" && league_name != null && league_name != "None")
	{
		$.ajax
		({
			type: "POST",
			url: "LeagueSpecific.php",
			data: {league_name:league_name},
			cache: false,
			success: function(html)
			{
				$("#SpecificLeagueOutputTable").html(html);
			}
		});		
		document.getElementById('SpecificLeagueSelect').selectedIndex = 0;
	}
	else
	{
		document.getElementById("SpecificLeagueOutput").innerHTML = "Error: Please Select a League";
	}
}

function submitEditLeague()
{
	var x = document.getElementById("EditLeagueOutput");
	document.getElementById("EditLeagueOutput").innerHTML = "";
	x.style.display = "block";
	var league_name = document.getElementById('EditLeagueSelect').value;
	var end_date = ""; 
	if(document.getElementById('EditLeagueDate').value != "")
	{
		end_date = new Date(document.getElementById('EditLeagueDate').value);
		end_date = end_date.toDateString();		
	}
	var sponsor_name = document.getElementById('EditLeagueSponsor').value;
	if (league_name != 0 && league_name != null && league_name != "None")
	{
		$.ajax
		({
			type: "POST",
			url: "LeagueEdit.php",
			data: {league_name:league_name, end_date:end_date, sponsor_name:sponsor_name},
			cache: false,
			success: function(html)
			{
				$("#EditLeagueOutput").html(html);
			}
		});			
		document.getElementById('EditLeagueDate').value = "";
		document.getElementById('EditLeagueSponsor').selectedIndex = 0;
	}	
	else
	{
		document.getElementById("EditTeamOutput").innerHTML = "Error: Please select a league";
	}		
}

function clearEditLeague()
{
	document.getElementById("EditLeagueOutput").innerHTML = "";
	document.getElementById('EditTeamLeague').selectedIndex = 0;
	document.getElementById('EditLeagueDate').value = "";
	document.getElementById('EditLeagueSponsor').selectedIndex = 0;
}

function submitDeleteLeague()
{
	var x = document.getElementById("DeleteLeagueOutput");
	document.getElementById("DeleteLeagueOutput").innerHTML = "";
	x.style.display = "block";
	var league_name = document.getElementById('DeleteLeagueSelect').value;
	if(league_name != "" && league_name != null && league_name != "None")
	{
		$.ajax
		({
			type: "POST",
			url: "LeagueDelete.php",
			data: {league_name:league_name},
			cache: false,
			success: function(html)
			{
				$("#DeleteLeagueOutput").html(html);
			}
		});		
		updateDropdownLeagueDelete();
		document.getElementById('DeleteLeagueSelect').selectedIndex = 0;
	}
	else
	{
		document.getElementById("DeleteLeagueOutput").innerHTML = "Error: Please Select a League";
	}	
}

function submitClearLeague()
{
	document.getElementById("ClearLeagueOutput").innerHTML = "";
	document.getElementById("ClearLeagueOutput").style.display = "block";
	$.ajax
	({
		url: "LeagueClear.php",
		cache: false,
		success: function(html)
		{
			$("#ClearLeagueOutput").html(html);
		}
	});	
}

function leagueDisplay()
{
	var x = document.getElementById("ViewLeagueOutput");
	x.style.display = "table";
	$.ajax
	({
		url: "LeagueDisplay.php",
		cache: false,
		success: function(html)
		{
			$("#ViewLeagueOutput").html(html);
		}
	});
	
	return false;
}
///////////////////////////////////////////////////////
////sponsor_name functions//////////////////////////////////

function submitAddSponsor()
{
	var x = document.getElementById("AddSponsorOutput");
	document.getElementById("AddSponsorOutput").innerHTML = "";
	x.style.display = "block";
	var sponsor_name = document.getElementById('AddSponsorName').value;
	if(sponsor_name != "" && sponsor_name != null)
	{
		$.ajax
		({
			type: "POST",
			url: "SponsorAdd.php",
			data: {"sponsor_name":sponsor_name},
			cache: false,
			success: function(html)
			{
				$("#AddSponsorOutput").html(html);
			}		
		});		
		document.getElementById('AddSponsorName').value = "";
	}
	else
	{
		document.getElementById("AddSponsorOutput").innerHTML = "Error: Empty field(s)";
	}	
	
}

function submitDeleteSponsor()
{
	var x = document.getElementById("DeleteSponsorOutput");
	document.getElementById("DeleteSponsorOutput").innerHTML = "";
	x.style.display = "block";
	var sponsor_name = document.getElementById('DeleteSponsorSelect').value;
	if(sponsor_name != "" && sponsor_name != null && sponsor_name != "None")
	{
		$.ajax
		({
			type: "POST",
			url: "SponsorDelete.php",
			data: {sponsor_name:sponsor_name},
			cache: false,
			success: function(html)
			{
				$("#DeleteSponsorOutput").html(html);
			}
		});		
		onclickUpdateSponsorDropdown();
	}
	else
	{
		document.getElementById("DeleteSponsorOutput").innerHTML = "Error: Please Select a Sponsor";
	}	
}

function sponsorDisplay()
{
	var x = document.getElementById("ViewSponsorOutput");
	x.style.display = "table";
	$.ajax
	({
		url: "SponsorDisplay.php",
		cache: false,
		success: function(html)
		{
			$("#ViewSponsorOutput").html(html);
		}
	});
	
	return false;
}
///////////////////////////////////////////////////////
///Dropdown Update////////////////////////////////////
function updateDropdownPlayerEdit()
{
	$.ajax
	({
		url: "PlayerDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#EditPlayerSelect").html(html);
		}
	});		
}

function updateDropdownPlayerSpecific()
{
	$.ajax
	({
		url: "PlayerDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#SpecificPlayerSelect").html(html);
		}
	});		
}

function updateDropdownPlayerDelete()
{
	document.getElementById("DeletePlayerSelect").innerHTML = "";
	$.ajax
	({
		url: "PlayerDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#DeletePlayerSelect").html(html);
		}
	});		
}

function updateDropdownAddPlayerTeam()
{
	$.ajax
	({
		url: "TeamDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#AddPlayerTeam").html(html);
		}
	});		
}

function updateDropdownAddPlayerSponsor()
{
	$.ajax
	({
		url: "SponsorDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#AddPlayerSponsor").html(html);
		}
	});		
}

function updateDropdownEditPlayerTeam()
{
	$.ajax
	({
		url: "TeamDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#EditPlayerTeam").html(html);
		}
	});		
}

function updateDropdownEditPlayerSponsor()
{
	$.ajax
	({
		url: "SponsorDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#EditPlayerSponsor").html(html);
		}
	});		
}
/////////////////////////////////////////////////////////
function updateDropdownTeamEdit()
{
	$.ajax
	({
		url: "TeamDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#EditTeamSelect").html(html);
		}
	});		
}

function updateDropdownTeamSpecific()
{
	$.ajax
	({
		url: "TeamDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#SpecificTeamSelect").html(html);
		}
	});		
}

function updateDropdownTeamDelete()
{
	document.getElementById("DeleteTeamSelect").innerHTML = "";
	$.ajax
	({
		url: "TeamDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#DeleteTeamSelect").html(html);
		}
	});		
}


function updateDropdownAddTeamSponsor()
{
	$.ajax
	({
		url: "SponsorDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#AddTeamSponsor").html(html);
		}
	});		
}

function updateDropdownEditTeamSponsor()
{
	$.ajax
	({
		url: "SponsorDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#EditTeamSponsor").html(html);
		}
	});		
}

function updateDropdownAddTeamLeague()
{
	$.ajax
	({
		url: "LeagueDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#AddTeamLeague").html(html);
		}
	});		
}

function updateDropdownEditTeamLeague()
{
	$.ajax
	({
		url: "LeagueDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#EditTeamLeague").html(html);
		}
	});		
}
/////////////////////////////////////////////////////////
function updateDropdownLeagueEdit()
{
	$.ajax
	({
		url: "LeagueDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#EditLeagueSelect").html(html);
		}
	});		
}

function updateDropdownLeagueSpecific()
{
	$.ajax
	({
		url: "LeagueDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#SpecificLeagueSelect").html(html);
		}
	});		
}

function updateDropdownLeagueDelete()
{
	document.getElementById("DeleteLeagueSelect").innerHTML = "";
	$.ajax
	({
		url: "LeagueDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#DeleteLeagueSelect").html(html);
		}
	});		
}


function updateDropdownAddLeagueSponsor()
{
	$.ajax
	({
		url: "SponsorDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#AddLeagueSponsor").html(html);
		}
	});		
}

function updateDropdownEditLeagueSponsor()
{
	$.ajax
	({
		url: "SponsorDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#EditLeagueSponsor").html(html);
		}
	});		
}
//////////////////////////////////////////////////////////////
function updateDropdownSponsorDelete()
{
	document.getElementById("DeleteSponsorSelect").innerHTML = "";
	$.ajax
	({
		url: "SponsorDropdownUpdate.php",
		cache: false,
		success: function(html)
		{
			$("#DeleteSponsorSelect").html(html);
		}
	});		
}
////////////////////////////////////////////////////////
///////////Hide functions//////////////////////////////
function hidePlayerField()
{
	var x = document.getElementById("ViewPlayerOutput");
	var y = document.getElementById("SpecificPlayerOutputTable");
	var z = document.getElementById("SpecificPlayerOutput");
	x.innerHTML = "";
	x.style.display = "none";
	y.innerHTML = "";
	y.style.display = "none";
	z.innerHTML = "";
	z.style.display = "none";
}

function hideTeamField()
{
	var x = document.getElementById("ViewTeamOutput");
	var y = document.getElementById("SpecificTeamOutputTable");
	var z = document.getElementById("SpecificTeamOutput");
	x.innerHTML = "";
	x.style.display = "none";
	y.innerHTML = "";
	y.style.display = "none";
	z.innerHTML = "";
	z.style.display = "none";
}

function hideLeagueField()
{
	var x = document.getElementById("ViewLeagueOutput");
		var y = document.getElementById("SpecificLeagueOutputTable");
	var z = document.getElementById("SpecificLeagueOutput");
	x.innerHTML = "";
	x.style.display = "none";
	y.innerHTML = "";
	y.style.display = "none";
	z.innerHTML = "";
	z.style.display = "none";
}

function hideSponsorField()
{
	var x = document.getElementById("ViewSponsorOutput");
	x.innerHTML = "";
	x.style.display = "none";
}

