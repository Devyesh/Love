	function disp() {
		var male=document.f1.m1.value;
		var female=document.f1.fm1.value;
		if(male=="")
		{
			alert("Enter a valid boy name");
			document.f1.m1.focus();
			exit();
		}
		if(female=="")
		{
			alert("Enter a valid girl name");
			document.f1.mf1.focus();
			exit();
		}
		if(male==female)
		{
			alert("Love is 100% ");
			exit();
		}
		else
		{
		var r=Math.random();
		r=r*100;
		r=Math.ceil(r);
		alert("Love is "+r+"%");
		}
		}
