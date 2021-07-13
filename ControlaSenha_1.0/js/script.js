<script>
    var contador = []

    $(document).ready(function(){
        $('#senhaComum').on('click', function(){
            arrayComum.push(novaSenha)
        });
        $('#senhaRapido').on('click', function(){
            arrayRapido.push(novaSenha)
        });
        $('#senhaPrior').on('click', function(){
            arrayPrior.push(novaSenha)
        });
        $('#cX1').on('click', function(){
            senha=arrayComum.shift();
        });
        $('#cX2').on('click', function(){
            senha=arrayRapido.shift();
        });
        $('#cX3').on('click', function(){
            senha=arrayPrior.shift();
        });
        $('#cX4').on('click', function(){
            senha=arrayPrior.shift();
        });
    });

</script>