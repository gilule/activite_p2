var over_titre = document.getElementById('titre');
over_titre.addEventListener('mouseenter', function () {
	document.getElementById('message').innerHTML = 'Hello git, hello world !';
}, false);
over_titre.addEventListener('mouseout', function () {
	document.getElementById('message').innerHTML = '';
}, false);
