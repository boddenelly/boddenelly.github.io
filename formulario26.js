//(function(){
var formulario = document.getElementById
('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');

function validarNombre (e){
    if (nombre.value == '' || nombre.value == null){
    console.log('porfavor completa el Nombre');    
    error.style.display = 'block';
    error.innerHTML+= '<li>porfavor completa el nombre</li>';
    e.preventDefault();
    } else {
        error.style.display = 'none';
    }
    }

    function validarCorreo (e){
        if (correo.value == '' || correo.value == null){
        console.log('porfavor completa el Correo');    
        error.style.display = 'block';
        error.innerHTML+= '<li>porfavor completa el Correo</li>';
        e.preventDefault();
        } else {
            error.style.display = 'none';
        }
        }

        function validarSexo (e){
            if (sexo.value == '' || sexo.value == null){
            console.log('porfavor completa el sexo');    
            error.style.display = 'block';
            error.innerHTML+= '<li>porfavor completa el sexo</li>';
            e.preventDefault();
            } else {
                error.style.display = 'none';
            }
            }

            function validarTerminos (e){
                if (terminos.checked == false){
                console.log('porfavor completa el termino');    
                error.style.display = 'block';
                error.innerHTML+= '<li>porfavor completa el sexo</li>';
                e.preventDefault();
                } else {
                    error.style.display = 'none';
                }
                }  

                function validarFormulario (e){
                    error.innerHTML = '';
                    validarNombre(e);
                    validarCorreo(e);
                    validarSexo(e);
                    validarTerminos(e);
                }
                formulario.addEventListener('submit', validarFormulario);
                //}())
    
    
    


