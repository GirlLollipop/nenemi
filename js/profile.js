var usuario = localStorage.getItem('usuario');
usuario= JSON.parse(usuario)
console.log(usuario);


firebase.database().ref("user/" + usuario.uid).set(usuario);

$('#name').html(usuario.displayName);
$('#photo').attr('src', usuario.photoURL);
