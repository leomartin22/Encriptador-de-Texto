
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//capturo datos de HTML
var input = document.querySelector("#textareaencriptar");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var inputEncriptado = document.querySelector("#textareaencriptado");
var btncopiar = document.querySelector("#btncopiar");


//con esta foncion solo dejo ingresar en el input letras en minusculas
//llamo la funcion desde el input html onkeyup
function remplazar(input){
    var texto = input.value
    texto = texto.split(/[^a-z, ]/)
    texto = texto.join("")
    input.value = texto
  }

  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++          
// valido que el input no este vacio al hacer click en boton encriptar y luego encripto
            function  encriptar(event){

                    if ( input.value==""){
                        alert("Debe Ingresar un Texto");
                                         }
                    else{   
                        event.preventDefault();//evita que al presionar boton actualice pagina
                        
                        const str = input.value;
                        const nuevaStr = str.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");//reemplazo todas las letras del string
                        
                        inputEncriptado.value=nuevaStr;//muestro en el otro input texto encriptado
                        input.value="";
                       
                        }
                                }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        // valido que el input no este vacio al hacer click en boton encriptar y luego encripto
        function  desencriptar(event){
            if ( input.value==""){
                alert("Debe Ingresar un Texto");
                                 }
            else{   
                event.preventDefault();//evita que al presionar boton actualice pagina
                const str = input.value;
                const nuevaStr = str.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");//reemplazo todas las letras del string
                
                inputEncriptado.value=nuevaStr;//muestro en el otro input texto desencriptado
                        input.value="";
               
                }
                        }




                        //copiar texto al portapapeles +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                       btncopiar.addEventListener("click", function(event) {   
                            // el método select es utilizado para seleccionar el contenido del campo de texto
                              inputEncriptado.select();
                           try {
                                // el método document.execCommand("copy") copia el texto seleccionado al portapapeles
                                let exito = document.execCommand("copy");// devuelve true o false
                                let msg = exito ? "\351xito" : "error";
                                alert("Texto Copiado con Exito");
                          } catch (error) {
                                let err = error;
                                console.log("No fue posible copiar el texto seleccionado!");
                              }
                            }); 
                            
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++                       

 //Ejecuto la funcion Validar al hacer click en boton encriptar
       
 btnEncriptar.onclick= encriptar;
 btnDesencriptar.onclick= desencriptar;
 




    

    

    