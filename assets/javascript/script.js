function logar() {

var email = document.getElementById('txtemail').value;
var senha = document.getElementById('txtsenha').value;

if ( email == 'vit' && senha == 'vit') {
    alert('CORRETO');
    location.href = 'assets/home.html'
} else {
    alert('ERRO')
}

} 