var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("Enter_name").value;
	Name_of_The_Guest_Array.push(Guest_name);
	document.getElementById("display_name").innerHTML=Name_of_The_Guest_Array.toString();
	console.log(Name_of_The_Guest_Array);
    var lenght_of_the_array = Names_of_The_Guest_Array.length;
    console.log(lenght_of_the_array);
	
   }



function show_list()
{
	var i= Names_of_The_Guest_Array.join("<br>");
	console.log(Names_of_The_Guest_Array);
	document.getElementById("Show_names").innerHTML=i.toString();
	
	}


function sorting()
	{
		Name_of_The_Guest_Array.sort();
		var i= Name_of_The_Guest_Array.join("<br>");
		console.log(Name_of_The_Guest_Array);		
		document.getElementById("sorted_names").innerHTML=i.toString();
		}


function Search()
{
	var s= document.getElementById("Search_names").value;
	var found=0;
	var j;
	for(j=0; j<Name_of_The_Guest_Array.length; j++)
		{
			if(s==Name_of_The_Guest_Array[j]){
				found=found+1;
			}	
		}
	document.getElementById("Search_names").innerHTML="Name Found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
document.getElementById("display_name_with_commas").innerHTML=display_names;


remove=display_names.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;

document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block";

}



