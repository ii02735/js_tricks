window.onload = function() //fonctionne comme ready()
{	

	switch(page){
		case "index":
			document.getElementById("menu").innerHTML = `
			 <ul> 
				<li>Accueil</li>
				<li><a href="articles.html">Articles</a></li>
			 </ul>`;
		break;

		case "articles":
			document.getElementById("menu").innerHTML = `
			 <ul> 
				<li><a href="index.html">Accueil</a></li>
				<li>Articles</li>
			 </ul>`;
		break;

	}



}
