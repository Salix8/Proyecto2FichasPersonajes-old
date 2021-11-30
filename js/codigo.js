
// $.getScript("progress-bar.js");


//Funcion para sacar los modificadores
const definirModificador = (caracteristica) =>{
    let modificador;
    switch (caracteristica){
        case 1: modificador = -5;
        break;
        case 2: 
        case 3: modificador = -4;
        break;
        case 4:
        case 5: modificador = -3;
        break;
        case 6:
        case 7: modificador = -2;
        break;
        case 8:
        case 9: modificador = -1;
        break;
        case 10:
        case 11: modificador = +0;
        break;
        case 12:
        case 13: modificador = +1;
        break;
        case 14:
        case 15: modificador = +2;
        break;
        case 16:
        case 17: modificador = +3;
        break;
        case 18:
        case 19: modificador = +4;
        break;
        case 20:
        case 21: modificador = +5;
        break;
        default: modificador = null;
    }
    return modificador;
}

//__________________________________Neo personaje__________________________________//

let statsNeo = {
    lv: 3,
    hp: 27,
    ca: 13,
    pb: 2,
    dice: 8,
    
    fuerza: 8,
    destreza: 16,
    constitucion: 16,
    inteligencia: 14,
    sabiduria: 12,
    carisma: 19,

    modFuerza: 0,
    modDestreza: 0,
    modConstitucion: 0,
    modInteligencia: 0,
    modSabiduria: 0,
    modCarisma: 0,
    cd: 0
};

const contenedorStatsNeo = document.querySelector(`.grid__container__neo`);
const caracteristicasNeo = document.querySelector(`.caracteristicas__neo`);
const habilidadesNeo = document.querySelector(`.card__text__neo`);

let htmlStatsNeo = ``;
let htmlCaracteristicasNeo = ``;
let htmlHabilidadesNeo = ``;

statsNeo.modFuerza = definirModificador(statsNeo.fuerza);
statsNeo.modDestreza = definirModificador(statsNeo.destreza);
statsNeo.modConstitucion = definirModificador(statsNeo.constitucion);
statsNeo.modInteligencia = definirModificador(statsNeo.inteligencia);
statsNeo.modSabiduria = definirModificador(statsNeo.sabiduria);
statsNeo.modCarisma = definirModificador(statsNeo.carisma);
statsNeo.cd = 8 + statsNeo.pb + statsNeo.modCarisma;

htmlStatsNeo += `
    <div class="grid__item">HP</div>
    <div class="grid__item"><input type="number" name="HP" value="${statsNeo.hp}" maxlength="3" min="0" max="499" required>/${statsNeo.hp}</div>
    <div class="grid__item">CA</div>
    <div class="grid__item"><input type="number" name="CA" value="${statsNeo.ca}" maxlength="2" min="0" max="40" required>/${statsNeo.ca}</div>
    <div class="grid__item">PB</div>
    <div class="grid__item">+${statsNeo.pb}</div>
    <div class="grid__item">Iniciativa</div>
    <div class="grid__item">+${statsNeo.modDestreza}</div>
    <div class="grid__item">CD</div>
    <div class="grid__item">${statsNeo.cd}</div>
    <div class="grid__item">Hit dice</div>
    <div class="grid__item"><input type="number" name="CA" value="${statsNeo.lv}" maxlength="2" min="0" max="${statsNeo.lv}" required>d${statsNeo.dice}</div>
    `;

htmlCaracteristicasNeo += `
    <button class="accordion">Stats</button>
    <div class="panel">
        <div class="contenedor__stats">
            <div class="tabla__stat">
                <table class="tabla">
                  <tr>
                    <th colspan="3">Fuerza</th>
                  </tr>
                  <tr>
                    <td>${statsNeo.fuerza}</td>
                    <td>${statsNeo.modFuerza}</td>
                    <td>${statsNeo.modFuerza}</td>
                  </tr>
                  <tr>
                    <td>value</td>
                    <td>mod</td>
                    <td>save</td>
                  </tr>
                  <tr>
                    <td colspan="2">Atletismo</td>
                    <td>-1</td>
                  </tr>
                </table>
            </div>
            <div class="tabla__stat">
                <table class="tabla">
                  <tr>
                    <th colspan="3">Destreza</th>
                  </tr>
                  <tr>
                    <td>${statsNeo.destreza}</td>
                    <td>+${statsNeo.modDestreza}</td>
                    <td>+${statsNeo.modDestreza}</td>
                  </tr>
                  <tr>
                    <td>value</td>
                    <td>mod</td>
                    <td>save</td>
                  </tr>
                  <tr>
                    <td colspan="2">Acrobacias</td>
                    <td>+${statsNeo.modDestreza}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Juego de manos</td>
                    <td>+${statsNeo.modDestreza}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Sigilo</td>
                    <td>+${statsNeo.modDestreza}</td>
                  </tr>
                </table>
            </div>
            <div class="tabla__stat">
                <table class="tabla">
                  <tr>
                    <th colspan="3">Constitución</th>
                  </tr>
                  <tr>
                    <td>${statsNeo.constitucion}</td>
                    <td>+${statsNeo.modConstitucion}</td>
                    <td>+${statsNeo.modConstitucion}</td>
                  </tr>
                  <tr>
                    <td>value</td>
                    <td>mod</td>
                    <td>save</td>
                  </tr>
                </table>
            </div>
            <div class="tabla__stat">
                <table class="tabla">
                  <tr>
                    <th colspan="3">Inteligencia</th>
                  </tr>
                  <tr>
                    <td>${statsNeo.inteligencia}</td>
                    <td>+${statsNeo.modInteligencia}</td>
                    <td>+${statsNeo.modInteligencia}</td>
                  </tr>
                  <tr>
                    <td>value</td>
                    <td>mod</td>
                    <td>save</td>
                  </tr>
                  <tr>
                    <td colspan="2">Arcana</td>
                    <td class="competente">+${statsNeo.modInteligencia + statsNeo.pb}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Historia</td>
                    <td class="competente">+${statsNeo.modInteligencia + statsNeo.pb}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Investigacion</td>
                    <td class="competente">+${statsNeo.modInteligencia + statsNeo.pb}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Naturaleza</td>
                    <td>+${statsNeo.modInteligencia}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Religion</td>
                    <td class="competente">+${statsNeo.modInteligencia + statsNeo.pb}</td>
                  </tr>
                </table>
            </div>
            <div class="tabla__stat">
                <table class="tabla">
                  <tr>
                    <th colspan="3">Sabiduría</th>
                  </tr>
                  <tr>
                    <td>${statsNeo.sabiduria}</td>
                    <td>+${statsNeo.modSabiduria}</td>
                    <td>+${statsNeo.modSabiduria}</td>
                  </tr>
                  <tr>
                    <td>value</td>
                    <td>mod</td>
                    <td>save</td>
                  </tr>
                  <tr>
                    <td colspan="2">Control de animales</td>
                    <td>+${statsNeo.modSabiduria}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Averiguar intenciones</td>
                    <td>+${statsNeo.modSabiduria}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Medicina</td>
                    <td>+${statsNeo.modSabiduria}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Percepción</td>
                    <td>+${statsNeo.modSabiduria}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Supervivencia</td>
                    <td>+${statsNeo.modSabiduria}</td>
                  </tr>
                </table>
            </div>
            <div class="tabla__stat">
                <table class="tabla">
                  <tr>
                    <th colspan="3">Carisma</th>
                  </tr>
                  <tr>
                    <td>${statsNeo.carisma}</td>
                    <td>+${statsNeo.modCarisma}</td>
                    <td>+${statsNeo.modCarisma}</td>
                  </tr>
                  <tr>
                    <td>value</td>
                    <td>mod</td>
                    <td>save</td>
                  </tr>
                  <tr>
                    <td colspan="2">Engaño</td>
                    <td class="competente">+${statsNeo.modCarisma + statsNeo.pb}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Intimidacion</td>
                    <td class="competente">+${statsNeo.modCarisma + statsNeo.pb}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Actuación</td>
                    <td>+${statsNeo.modCarisma}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Persuasón</td>
                    <td>+${statsNeo.modCarisma}</td>
                  </tr>
                </table>
            </div>
        </div>
    </div>
`;

//En un futuro añadir las clases de armaduras para que con darle a un btn puedan aparecer con el +1, +2 o +3 correspondiente

htmlHabilidadesNeo += `
    <button class="accordion">Cambiaformas  [Shapechanger]</button>
    <div class="panel">
        <div>Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.</br>
            Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.</div>
    </div>
    <button class="accordion">Forma pavor  [Form of Dread]</button>
    <div class="panel">
        <div>Manifiestas un aspecto del terrible poder de tu patrón. Como acción adicional, te transformas durante 1 minuto. Obtienes los siguientes beneficios mientras te transformas:</br> 
            <ul class="lists__accordion">
                <li>Obtienes puntos de golpe temporales iguales a 1d10 + ${statsNeo.lv} (tu nivel de brujo).</li>
                <li>Una vez durante cada uno de tus turnos, cuando golpeas a una criatura con una tirada de ataque, puedes forzarla a hacer una tirada de salvación de Sabiduría, y si la tirada de salvación falla, el objetivo te tiene miedo hasta el final de tu siguiente turno.</li>
                <li>Eres inmune a la condición de miedo .</li>
            </ul>
            </br>
            Puede transformar un número de veces igual a su bonificación de competencia, y recupera todos los usos gastados cuando termina un descanso prolongado.</br></br>
            La apariencia de tu Forma de pavor refleja algún aspecto de tu patrón. Por ejemplo, su forma podría ser un sudario de sombras que forman la corona y la túnica de su patrón exánime, o su cuerpo podría brillar con glifos de antiguos ritos funerarios y estar rodeado por los vientos del desierto, lo que sugiere su patrón momia.</div>
    </div>

    <button class="accordion">Invocaciones [Eldritch invocations]</button>
    <div class="panel">
        <button class="accordion">Explosión agonizante [Agonizing Blast]</button>
        <div class="panel">
            <div>Requisito previo : truco de explosión sobrenatural
                    Cuando lances Explosión sobrenatural , agrega tu modificador de Carisma al daño que inflige con un golpe.</div>
        </div>
        <button class="accordion">Armadura de sombras [Armor of Shadows]</button>
        <div class="panel">
            <div>Puedes lanzarte una armadura de mago a tu antojo, sin gastar un espacio de hechizo o componentes de material.</div>
        </div>
    </div>

    <button class="accordion">Trucos [contrip]</button>
    <div class="panel">
        <button class="accordion">Explosión sobrenatural [Eldritch Blast]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Truco de evocación</i></br>
                    <b>Tiempo de casteo:</b> 1 acción</br>
                    <b>Alcance:</b> 24 casillas [120 pies]</br>
                    <b>Componentes:</b> V, S</br>
                    <b>Duración:</b> Instantaneo</br>
                </div>
                <div>
                    Un rayo de energía crepitante se dirige hacia una criatura dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. Con un impacto, el objetivo recibe 1d10 de daño de fuerza.</br>
                    El hechizo crea más de un rayo cuando alcanzas niveles más altos: dos rayos en el nivel 5, tres rayos en el nivel 11 y cuatro rayos en el nivel 17. Puede dirigir los rayos hacia el mismo objetivo o hacia diferentes. Haz una tirada de ataque separada para cada rayo.</br>
                </div>
            </div>
        </div>
        <button class="accordion">Prestidigitación [Prestidigitation]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Truco de transmutación</i></br>
                    <b>Tiempo de casteo:</b> 1 acción</br>
                    <b>Alcance:</b> 2 casillas [10 pies]</br>
                    <b>Componentes:</b> V, S</br>
                    <b>Duración:</b> hasta 1 hora</br>
                </div>
                <div>
                    Este hechizo es un truco mágico menor que los lanzadores de hechizos novatos usan para practicar. Creas uno de los siguientes efectos mágicos dentro del alcance:</br>
                    <ul>
                        <li>Crea un efecto sensorial instantáneo e inofensivo, como una lluvia de chispas, una ráfaga de viento, notas musicales débiles o un olor extraño.</li>
                        <li>Instantáneamente enciendes o apagas una vela, una antorcha o una pequeña fogata.</li>
                        <li>Instantáneamente limpia o ensucia un objeto de no más de 1 pie cúbico.</li>
                        <li>Enfría, calienta o aromatiza hasta 1 pie cúbico de material inerte durante 1 hora.</li>
                        <li>Hace que aparezca un color, una pequeña marca o un símbolo en un objeto o una superficie durante 1 hora.</li>
                        <li>Creas una baratija no mágica o una imagen ilusoria que puede caber en tu mano y que dura hasta el final de tu próximo turno.</li>
                    </ul>
                    </br>
                    Si lanzas este hechizo varias veces, puedes tener hasta tres de sus efectos no instantáneos activos a la vez, y puedes descartar tal efecto como una acción.
                </div>
            </div>
        </div>
        <button class="accordion">Infestación [Infestation]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Truco de conjuración</i></br>
                    <b>Tiempo de casteo:</b> 1 acción</br>
                    <b>Alcance:</b> 6 casillas [30 pies]</br>
                    <b>Componentes:</b> V, S, M (una pulga viva)</br>
                    <b>Duración:</b> Instantaneo</br>
                </div>
                <div>
                    Haces que una nube de ácaros, pulgas y otros parásitos aparezcan momentáneamente en una criatura que puedes ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Constitución, o recibe 1d6 de daño por veneno y se mueve 5 pies en una dirección aleatoria si puede moverse y su velocidad es de al menos 5 pies. Tira un d4 para la dirección: 1, norte; 2, sur; 3, este; o 4, oeste. Este movimiento no provoca ataques de oportunidad, y si la dirección de la tirada está bloqueada, el objetivo no se mueve.</br>
                    El daño del hechizo aumenta en 1d6 cuando alcanzas el nivel 5 ( 2d6 ), el nivel 11 ( 3d6 ) y el nivel 17 ( 4d6 ).</br>
                </div>
            </div>
        </div>
        <button class="accordion">Taumaturgia [Thaumaturgy]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Truco de transmutación</i></br>
                    <b>Tiempo de casteo:</b> 1 acción</br>
                    <b>Alcance:</b> 6 casillas [30 pies]</br>
                    <b>Componentes:</b> V</br>
                    <b>Duración:</b> hasta 1 minuto</br>
                </div>
                <div>
                    Manifiestas una pequeña maravilla, un signo de poder sobrenatural, dentro del alcance. Creas uno de los siguientes efectos mágicos dentro del alcance:</br>
                    <ul>
                        <li>Crea un efecto sensorial instantáneo e inofensivo, como una lluvia de chispas, una ráfaga de viento, notas musicales débiles o un olor extraño.</li>
                        <li>Instantáneamente enciendes o apagas una vela, una antorcha o una pequeña fogata.</li>
                        <li>Instantáneamente limpia o ensucia un objeto de no más de 1 pie cúbico.</li>
                        <li>Enfría, calienta o aromatiza hasta 1 pie cúbico de material inerte durante 1 hora.</li>
                        <li>Hace que aparezca un color, una pequeña marca o un símbolo en un objeto o una superficie durante 1 hora.</li>
                        <li>Creas una baratija no mágica o una imagen ilusoria que puede caber en tu mano y que dura hasta el final de tu próximo turno.</li>
                    </ul>
                    </br>
                    Si lanzas este hechizo varias veces, puedes tener hasta tres de sus efectos de 1 minuto activos a la vez, y puedes descartar tal efecto como una acción.</br>
                </div>
            </div>
        </div>
        <button class="accordion">Perdonar a los moribundos [Spare the Dying]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Truco de nigromancia</i></br>
                    <b>Tiempo de casteo:</b> 1 acción</br>
                    <b>Alcance:</b> toque [touch]</br>
                    <b>Componentes:</b> V, S</br>
                    <b>Duración:</b> Instantaneo</br>
                </div>
                <div>
                    Tocas una criatura viviente que tiene 0 puntos de vida. La criatura se estabiliza. Este hechizo no tiene efecto sobre muertos vivientes o construcciones.</br>
                </div>
            </div>
        </div>
    </div>

    <button class="accordion">Conjuros lv 1 [spells lv 1]</button>
    <div class="panel">
        <button class="accordion">Brazos de Hadar [Arms of Hadar]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Conjuración de primer nivel</i></br>
                    <b>Tiempo de casteo:</b> 1 acción</br>
                    <b>Alcance:</b> uno mismo (10 pies radio) [self]</br>
                    <b>Componentes:</b> V, S</br>
                    <b>Duración:</b> Instantaneo</br>
                </div>
                <div>
                    Invocas el poder de Hadar, el Hambre oscura. Zarcillos de energía oscura brotan de ti y golpean a todas las criaturas a 10 pies de ti. Cada criatura en esa área debe realizar una tirada de salvación de Fuerza. En una salvación fallida, un objetivo sufre 2d6 de daño necrótico y no puede sufrir reacciones hasta su siguiente turno. En una salvación exitosa, la criatura recibe la mitad de daño, pero no sufre ningún otro efecto.</br>
                    En niveles superiores. Cuando lanzas este hechizo usando un espacio de hechizo de 2º nivel o superior, el daño aumenta en 1d6 por cada nivel de espacio por encima del 1º.</br>
                </div>
            </div>
        </div>
        <button class="accordion">Reprimenda infernal [Hellish Rebuke]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Evocación de primer nivel</i></br>
                    <b>Tiempo de casteo:</b> 1 reacción, que recibes en respuesta a ser dañado por una criatura a 60 pies de ti que puedes ver.</br>
                    <b>Alcance:</b> 12 casillas [60 pies]</br>
                    <b>Componentes:</b> V, S</br>
                    <b>Duración:</b> Instantaneo</br>
                </div>
                <div>
                    Señalas con el dedo y la criatura que te dañó queda momentáneamente rodeada de llamas infernales. La criatura debe realizar una tirada de salvación de Destreza. Toma 2d10 de daño por fuego en una salvación fallida, o la mitad de daño en una exitosa.</br>
                    En niveles superiores. Cuando lanzas este hechizo usando un espacio de hechizo de 2º nivel o superior, el daño aumenta en 1d10 por cada nivel de espacio por encima del 1º.</br>
                </div>
            </div>
        </div>
    </div>

    <button class="accordion">Conjuros lv 2 [spells lv 2]</button>
    <div class="panel">
        <button class="accordion">Invisibilidad [Invisibility]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Ilusión de segundo nivel</i></br>
                    <b>Tiempo de casteo:</b> 1 acción</br>
                    <b>Alcance:</b> toque [touch]</br>
                    <b>Componentes:</b> V, S, M (una pestaña envuelta en goma arábiga)</br>
                    <b>Duración:</b> Concentración, hasta 1 hora</br>
                </div>
                <div>
                    Señalas con el dedo y la criatura que te dañó queda momentáneamente rodeada de llamas infernales. La criatura debe realizar una tirada de salvación de Destreza. Toma 2d10 de daño por fuego en una salvación fallida, o la mitad de daño en una exitosa.</br>
                    En niveles superiores. Cuando lanzas este hechizo usando un espacio de hechizo de 2º nivel o superior, el daño aumenta en 1d10 por cada nivel de espacio por encima del 1º.</br>
                </div>
            </div>
        </div>
        <button class="accordion">Paralizar persona [Hold Person]</button>
        <div class="panel">
            <div>
                <div class="caracteristicas__conjuro">
                    <i>Encantamiento de segundo nivel</i></br>
                    <b>Tiempo de casteo:</b> 1 acción</br>
                    <b>Alcance:</b> 12 casillas [60 pies]</br>
                    <b>Componentes:</b> V, S, M (una pieza de hierro pequeña y recta)</br>
                    <b>Duración:</b> Concentración, hasta 1 minuto</br>
                </div>
                <div>
                    Elija un humanoide que pueda ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o quedar paralizado mientras dure. Al final de cada uno de sus turnos, el objetivo puede realizar otra tirada de salvación de Sabiduría. Si tiene éxito, el hechizo termina en el objetivo.</br>
                    En niveles superiores. Cuando lanzas este hechizo usando un espacio de hechizo de nivel 3 o superior, puedes seleccionar un humanoide adicional por cada nivel de espacio por encima del 2do. Los humanoides deben estar a menos de 30 pies entre sí cuando los apuntes.</br>
                </div>
            </div>
        </div>
    </div>
`;

contenedorStatsNeo.innerHTML = htmlStatsNeo;

caracteristicasNeo.innerHTML = htmlCaracteristicasNeo;

habilidadesNeo.innerHTML = htmlHabilidadesNeo;

//__________________________________________________________________________//


let statsNoah = {
    lv: 3,
    hp: 20,
    ca: 15,
    pb: 2,
    dice: 8,

    fuerza: 10,
    destreza: 16,
    constitucion: 14,
    inteligencia: 12,
    sabiduria: 13,
    carisma: 18,

    modFuerza: 0,
    modDestreza: 0,
    modConstitucion: 0,
    modInteligencia: 0,
    modSabiduria: 0,
    modCarisma: 0,
    cd: 0
};

const contenedorStatsNoah = document.querySelector(`.grid__container__noah`);
const caracteristicasNoah = document.querySelector(`.caracteristicas__noah`);
const habilidadesNoah = document.querySelector(`.card__text__noah`);

let htmlStatsNoah = ``;
let htmlCaracteristicasNoah = ``;
let htmlHabilidadesNoah = ``;

statsNoah.modFuerza = definirModificador(statsNoah.fuerza);
statsNoah.modDestreza = definirModificador(statsNoah.destreza);
statsNoah.modConstitucion = definirModificador(statsNoah.constitucion);
statsNoah.modInteligencia = definirModificador(statsNoah.inteligencia);
statsNoah.modSabiduria = definirModificador(statsNoah.sabiduria);
statsNoah.modCarisma = definirModificador(statsNoah.carisma);
statsNoah.cd = 8 + statsNoah.pb + statsNoah.modCarisma;
    
htmlStatsNoah += `
    <div class="grid__item">HP</div>
    <div class="grid__item"><input type="number" name="HP" value="${statsNoah.hp}" maxlength="3" min="0" max="499" required>/${statsNoah.hp}</div>
    <div class="grid__item">CA</div>
    <div class="grid__item"><input type="number" name="CA" value="${statsNoah.ca}" maxlength="2" min="0" max="40" required>/${statsNoah.ca}</div>
    <div class="grid__item">PB</div>
    <div class="grid__item">+${statsNoah.pb}</div>
    <div class="grid__item">Iniciativa</div>
    <div class="grid__item">+${statsNoah.modDestreza}</div>
    <div class="grid__item">CD</div>
    <div class="grid__item">${statsNoah.cd}</div>
    <div class="grid__item">Hit dice</div>
    <div class="grid__item"><input type="number" name="CA" value="${statsNoah.lv}" maxlength="2" min="0" max="${statsNoah.lv}" required>d${statsNoah.dice}</div>
    `;

htmlCaracteristicasNoah += `
<button class="accordion">Stats</button>
<div class="panel">
    <div class="contenedor__stats">
        <div class="tabla__stat">
            <table class="tabla">
                <tr>
                <th colspan="3">Fuerza</th>
                </tr>
                <tr>
                <td>${statsNoah.fuerza}</td>
                <td>${statsNoah.modFuerza}</td>
                <td>${statsNoah.modFuerza}</td>
                </tr>
                <tr>
                <td>value</td>
                <td>mod</td>
                <td>save</td>
                </tr>
                <tr>
                <td colspan="2">Atletismo</td>
                <td>-1</td>
                </tr>
            </table>
        </div>
        <div class="tabla__stat">
            <table class="tabla">
                <tr>
                <th colspan="3">Destreza</th>
                </tr>
                <tr>
                <td>${statsNoah.destreza}</td>
                <td>+${statsNoah.modDestreza}</td>
                <td>+${statsNoah.modDestreza}</td>
                </tr>
                <tr>
                <td>value</td>
                <td>mod</td>
                <td>save</td>
                </tr>
                <tr>
                <td colspan="2">Acrobacias</td>
                <td>+${statsNoah.modDestreza}</td>
                </tr>
                <tr>
                <td colspan="2">Juego de manos</td>
                <td>+${statsNoah.modDestreza}</td>
                </tr>
                <tr>
                <td colspan="2">Sigilo</td>
                <td class="competente">+${statsNoah.modDestreza + statsNoah.pb}</td>
                </tr>
            </table>
        </div>
        <div class="tabla__stat">
            <table class="tabla">
                <tr>
                <th colspan="3">Constitución</th>
                </tr>
                <tr>
                <td>${statsNoah.constitucion}</td>
                <td>+${statsNoah.modConstitucion}</td>
                <td>+${statsNoah.modConstitucion}</td>
                </tr>
                <tr>
                <td>value</td>
                <td>mod</td>
                <td>save</td>
                </tr>
            </table>
        </div>
        <div class="tabla__stat">
            <table class="tabla">
                <tr>
                <th colspan="3">Inteligencia</th>
                </tr>
                <tr>
                <td>${statsNoah.inteligencia}</td>
                <td>+${statsNoah.modInteligencia}</td>
                <td>+${statsNoah.modInteligencia}</td>
                </tr>
                <tr>
                <td>value</td>
                <td>mod</td>
                <td>save</td>
                </tr>
                <tr>
                <td colspan="2">Arcana</td>
                <td>+${statsNoah.modInteligencia}</td>
                </tr>
                <tr>
                <td colspan="2">Historia</td>
                <td>+${statsNoah.modInteligencia}</td>
                </tr>
                <tr>
                <td colspan="2">Investigacion</td>
                <td>+${statsNoah.modInteligencia}</td>
                </tr>
                <tr>
                <td colspan="2">Naturaleza</td>
                <td>+${statsNoah.modInteligencia}</td>
                </tr>
                <tr>
                <td colspan="2">Religion</td>
                <td>+${statsNoah.modInteligencia}</td>
                </tr>
            </table>
        </div>
        <div class="tabla__stat">
            <table class="tabla">
                <tr>
                <th colspan="3">Sabiduría</th>
                </tr>
                <tr>
                <td>${statsNoah.sabiduria}</td>
                <td>+${statsNoah.modSabiduria}</td>
                <td>+${statsNoah.modSabiduria}</td>
                </tr>
                <tr>
                <td>value</td>
                <td>mod</td>
                <td>save</td>
                </tr>
                <tr>
                <td colspan="2">Control de animales</td>
                <td>+${statsNoah.modSabiduria}</td>
                </tr>
                <tr>
                <td colspan="2">Averiguar intenciones</td>
                <td class="competente">+${statsNoah.modSabiduria + statsNoah.pb}</td>
                </tr>
                <tr>
                <td colspan="2">Medicina</td>
                <td>+${statsNoah.modSabiduria}</td>
                </tr>
                <tr>
                <td colspan="2">Percepción</td>
                <td class="competente">+${statsNoah.modSabiduria + statsNoah.pb}</td>
                </tr>
                <tr>
                <td colspan="2">Supervivencia</td>
                <td class="competente">+${statsNoah.modSabiduria + statsNoah.pb}</td>
                </tr>
            </table>
        </div>
        <div class="tabla__stat">
            <table class="tabla">
                <tr>
                <th colspan="3">Carisma</th>
                </tr>
                <tr>
                <td>${statsNoah.carisma}</td>
                <td>+${statsNoah.modCarisma}</td>
                <td>+${statsNoah.modCarisma}</td>
                </tr>
                <tr>
                <td>value</td>
                <td>mod</td>
                <td>save</td>
                </tr>
                <tr>
                <td colspan="2">Engaño</td>
                <td class="competente">+${statsNoah.modCarisma + statsNoah.pb + statsNoah.pb}</td>
                </tr>
                <tr>
                <td colspan="2">Intimidacion</td>
                <td>+${statsNoah.modCarisma}</td>
                </tr>
                <tr>
                <td colspan="2">Actuación</td>
                <td class="competente">+${statsNoah.modCarisma}</td>
                </tr>
                <tr>
                <td colspan="2">Persuasón</td>
                <td class="competente">+${statsNoah.modCarisma + statsNoah.pb + statsNoah.pb}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
`;


htmlHabilidadesNoah += ``;


contenedorStatsNoah.innerHTML = htmlStatsNoah;

caracteristicasNoah.innerHTML = htmlCaracteristicasNoah;

habilidadesNoah.innerHTML = htmlHabilidadesNeo;

//__________________________________________________________________________//

statsAzrael = [{
    lv: 3,
    hp: 31,
    ca: 16,
    pb: 2,
    iniciativa: 3,
    cd: 14,
    dice: 10
}];

const contenedorStatsAzrael = document.querySelector(`.grid__container__azrael`);
const habilidadesAzrael = document.querySelector(`.card__text__azrael`);

let htmlStatsAzrael = ``;
let htmlHabilidadesAzrael = ``;

for (statAzrael in statsAzrael){
    let datos = statsAzrael[statAzrael];
    let lv = datos[`lv`];
    let hp = datos[`hp`];
    let ca = datos[`ca`];
    let pb = datos[`pb`];
    let iniciativa = datos[`iniciativa`];
    let cd = datos[`cd`];
    let dice = datos[`dice`];
    
    htmlStatsAzrael += `
        <div class="grid__item">HP</div>
        <div class="grid__item"><input type="number" name="HP" value="${hp}" maxlength="3" min="0" max="999" required></div>
        <div class="grid__item">CA</div>
        <div class="grid__item"><input type="number" name="CA" value="${ca}" maxlength="2" min="0" max="99" required></div>
        <div class="grid__item">PB</div>
        <div class="grid__item">+${pb}</div>
        <div class="grid__item">Iniciativa</div>
        <div class="grid__item">+${iniciativa}</div>
        <div class="grid__item">CD</div>
        <div class="grid__item">${cd}</div>
        <div class="grid__item">Hit dice</div>
        <div class="grid__item"><input type="number" name="CA" value="${lv}" maxlength="2" min="0" max="${lv}" required>d${dice}</div>
        `;


    htmlHabilidadesAzrael += `
        <div class="visible">
            <div class="habilidad">
                <a href="https://5e.tools/races.html#changeling_erlw" target="_blank">Cambiaformas  [Shapechanger]</a>
            </div>
            <div class="hidden">Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.
                Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.
            </div>
        </div>

        <div class="visible">
            <div class="habilidad">
                <a href="https://5e.tools/optionalfeatures.html#blankhash,flstfeature%20type:ei=1" target="_blank">Inspirackon bardica [Bardic Inspiration]</a>
            </div>
            <div class="hidden">Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.
                Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.
            </div>
        </div>
    `;

};

contenedorStatsAzrael.innerHTML = htmlStatsAzrael;

habilidadesAzrael.innerHTML = htmlHabilidadesAzrael;


//__________________________________________________________________________//


statsCanek = [{
    lv: 3,
    hp: 24,
    ca: 16,
    pb: 2,
    iniciativa: 5,
    cd: 9,
    dice: 8
}];

const contenedorStatsCanek = document.querySelector(`.grid__container__canek`);
const habilidadesCanek = document.querySelector(`.card__text__canek`);

let htmlStatsCanek = ``;
let htmlHabilidadesCanek = ``;

for (statCanek in statsCanek){
    let datos = statsCanek[statCanek];
    let lv = datos[`lv`];
    let hp = datos[`hp`];
    let ca = datos[`ca`];
    let pb = datos[`pb`];
    let iniciativa = datos[`iniciativa`];
    let cd = datos[`cd`];
    let dice = datos[`dice`];
    
    htmlStatsCanek += `
        <div class="grid__item">HP</div>
        <div class="grid__item"><input type="number" name="HP" value="${hp}" maxlength="3" min="0" max="999" required></div>
        <div class="grid__item">CA</div>
        <div class="grid__item"><input type="number" name="CA" value="${ca}" maxlength="2" min="0" max="99" required></div>
        <div class="grid__item">PB</div>
        <div class="grid__item">+${pb}</div>
        <div class="grid__item">Iniciativa</div>
        <div class="grid__item">+${iniciativa}</div>
        <div class="grid__item">CD</div>
        <div class="grid__item">${cd}</div>
        <div class="grid__item">Hit dice</div>
        <div class="grid__item"><input type="number" name="CA" value="${lv}" maxlength="2" min="0" max="${lv}" required>d${dice}</div>
        `;


    htmlHabilidadesCanek += `
        <div class="visible">
            <div class="habilidad">
                <a href="https://5e.tools/races.html#changeling_erlw" target="_blank">Cambiaformas  [Shapechanger]</a>
            </div>
            <div class="hidden">Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.
                Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.
            </div>
        </div>

        <div class="visible">
            <div class="habilidad">
                <a href="https://5e.tools/optionalfeatures.html#blankhash,flstfeature%20type:ei=1" target="_blank">Inspirackon bardica [Bardic Inspiration]</a>
            </div>
            <div class="hidden">Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.
                Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.
            </div>
        </div>
    `;

};

contenedorStatsCanek.innerHTML = htmlStatsCanek;

habilidadesCanek.innerHTML = htmlHabilidadesCanek;


//__________________________________________________________________________//

statsTorinn = [{
    lv: 3,
    hp: 17,
    ca: 15,
    pb: 2,
    iniciativa: 2,
    cd: 13,
    dice: 8
}];

const contenedorStatsTorinn = document.querySelector(`.grid__container__torinn`);
const habilidadesTorinn = document.querySelector(`.card__text__torinn`);

let htmlStatsTorinn = ``;
let htmlHabilidadesTorinn = ``;

for (statTorinn in statsTorinn){
    let datos = statsTorinn[statTorinn];
    let lv = datos[`lv`];
    let hp = datos[`hp`];
    let ca = datos[`ca`];
    let pb = datos[`pb`];
    let iniciativa = datos[`iniciativa`];
    let cd = datos[`cd`];
    let dice = datos[`dice`];
    
    htmlStatsTorinn += `
        <div class="grid__item">HP</div>
        <div class="grid__item"><input type="number" name="HP" value="${hp}" maxlength="3" min="0" max="999" required></div>
        <div class="grid__item">CA</div>
        <div class="grid__item"><input type="number" name="CA" value="${ca}" maxlength="2" min="0" max="99" required></div>
        <div class="grid__item">PB</div>
        <div class="grid__item">+${pb}</div>
        <div class="grid__item">Iniciativa</div>
        <div class="grid__item">+${iniciativa}</div>
        <div class="grid__item">CD</div>
        <div class="grid__item">${cd}</div>
        <div class="grid__item">Hit dice</div>
        <div class="grid__item"><input type="number" name="CA" value="${lv}" maxlength="2" min="0" max="${lv}" required>d${dice}</div>
        `;


    htmlHabilidadesTorinn += `
        <div class="visible">
            <div class="habilidad">
                <a href="https://5e.tools/races.html#changeling_erlw" target="_blank">Cambiaformas  [Shapechanger]</a>
            </div>
            <div class="hidden">Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.
                Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.
            </div>
        </div>

        <div class="visible">
            <div class="habilidad">
                <a href="https://5e.tools/optionalfeatures.html#blankhash,flstfeature%20type:ei=1" target="_blank">Inspirackon bardica [Bardic Inspiration]</a>
            </div>
            <div class="hidden">Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.
                Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.
            </div>
        </div>
    `;

};

contenedorStatsTorinn.innerHTML = htmlStatsTorinn;

habilidadesTorinn.innerHTML = htmlHabilidadesTorinn;

//__________________________________________________________________________//


statsAlucard = [{
    lv: 3,
    hp: 27,
    ca: 16,
    pb: 2,
    iniciativa: 4,
    cd: 14,
    dice: 8
}];

const contenedorStatsAlucard = document.querySelector(`.grid__container__alucard`);
const habilidadesAlucard = document.querySelector(`.card__text__alucard`);

let htmlStatsAlucard = ``;
let htmlHabilidadesAlucard = ``;

for (statAlucard in statsAlucard){
    let datos = statsAlucard[statAlucard];
    let lv = datos[`lv`];
    let hp = datos[`hp`];
    let ca = datos[`ca`];
    let pb = datos[`pb`];
    let iniciativa = datos[`iniciativa`];
    let cd = datos[`cd`];
    let dice = datos[`dice`];
    
    htmlStatsAlucard += `
        <div class="grid__item">HP</div>
        <div class="grid__item"><input type="number" name="HP" value="${hp}" maxlength="3" min="0" max="999" required></div>
        <div class="grid__item">CA</div>
        <div class="grid__item"><input type="number" name="CA" value="${ca}" maxlength="2" min="0" max="99" required></div>
        <div class="grid__item">PB</div>
        <div class="grid__item">+${pb}</div>
        <div class="grid__item">Iniciativa</div>
        <div class="grid__item">+${iniciativa}</div>
        <div class="grid__item">CD</div>
        <div class="grid__item">${cd}</div>
        <div class="grid__item">Hit dice</div>
        <div class="grid__item"><input type="number" name="CA" value="${lv}" maxlength="2" min="0" max="${lv}" required>d${dice}</div>
        `;


    htmlHabilidadesAlucard += `
        <div class="visible">
            <div class="habilidad">
                <a href="https://5e.tools/races.html#changeling_erlw" target="_blank">Cambiaformas  [Shapechanger]</a>
            </div>
            <div class="hidden">Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.
                Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.
            </div>
        </div>

        <div class="visible">
            <div class="habilidad">
                <a href="https://5e.tools/optionalfeatures.html#blankhash,flstfeature%20type:ei=1" target="_blank">Inspirackon bardica [Bardic Inspiration]</a>
            </div>
            <div class="hidden">Como acción, puedes cambiar tu apariencia y tu voz. Usted determina los detalles de los cambios, incluida la coloración, la longitud del cabello y el sexo. También puedes ajustar tu altura y peso, pero no tanto como para que cambie tu talla. Puedes hacerte aparecer como miembro de otra raza, aunque ninguna de las estadísticas de tu juego cambia. No puedes duplicar la apariencia de una criatura que nunca has visto, y debes adoptar una forma que tenga la misma disposición básica de extremidades que tú. Su ropa y equipo no cambian por este rasgo.
                Te quedas en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras.
            </div>
        </div>
    `;

};

contenedorStatsAlucard.innerHTML = htmlStatsAlucard;

habilidadesAlucard.innerHTML = htmlHabilidadesAlucard;

//__________________________________________________________________________//