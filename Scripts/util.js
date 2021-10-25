//obtiene la informacion de un atributo que esta varias veces, recibe la cadena el atributo y el array donde se almacenara
function obtenerAtributos(cadenaJson,atributoJson,arrayJson){    
    for(var i=0;i<5;i++){        
        arrayJson[i] = obtenerAtributo(cadenaJson,atributoJson);    

        //quitar el atributo para no repetir el dato
        var indexJson = new Number(cadenaJson.indexOf(atributoJson));
        cadenaJson = cadenaJson.substring(indexJson + atributoJson.length);
    }
}
    
//obtiene todos los valores de un atributo, se diferencia de la otra funcion que no necesita conocer cuantas veces esta el valor
function obtenerAtributos2(cadenaJson,atributoJson,array){
    var termino = false;
    var i = 0;

    while(!termino){
        if(obtenerAtributo(cadenaJson,atributoJson) != ''){
            array[i] = obtenerAtributo(cadenaJson,atributoJson);
            i++;
            var indexJson = new Number(cadenaJson.indexOf(atributoJson));
            cadenaJson = cadenaJson.substring(indexJson + atributoJson.length);
        }
        else{
            termino = true;
        }               

    }            
}
    
//obtiene el atributo de un estructura json, recibe la cadena y el atributo que se va a consultar
function obtenerAtributo(cadena, atributo) {
    var index = new Number(cadena.indexOf(atributo));

    if(index == -1){            
        return '';
    }
    var sub = cadena.substring((index + 4 + atributo.length));

    var index2 = new Number(sub.indexOf(','));
    var resultado = sub.substring(0, (index2 - 1)); //el dato a consultar lo obtenemos con la segunda cadena, la cual en su posicion 0 tiene el inicio del dato
    return resultado;
}

function limpiarVector(vector){
    for(var i=0;i<vector.length;i++){
        vector[i] = -1; 
    }
}

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

