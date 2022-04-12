import { IMobile } from "./interfaces";
import SmartPhone from "./smartphone";
import Tijolao from "./tijolao";
import Mobile from "./mobile";


// const callBetween = (A: Mobile, B: Mobile)
// 'Mobile' é uma classe implementação
// interface segregation: garante manutençao do codigo(outros modulos nao enxergam a implementaçao)


const callBetween = (A: IMobile, B: IMobile): void => {
    // recebe os numeros prontos(nao instancia objeto)
    // recebe argumentos do tipo mobile
    // recebe interfaces, e nao implementaçẽs (classe)

    console.log(A.call(B));
    // 'call' esta na classe base
}
// ESTABELECE CONEXÃO ENTRE DOIS NÚMEROS E FAZ A LIGAR PARA B

const Jorge = new Tijolao('78459567', 'Nokia', '0.3mp')
// instancia um novo 'Tijolao'(subclasse de 'Mobile')

const Eric = new Tijolao('41449537', 'Ericsson', '0.4mp')

// instancia um novo 'Smartphone'(subclasse de 'Mobile')
const Isaac = new SmartPhone('91459597', 'Apple', '12mp', '24mp')

// chamada da funçao que faz conexão entre dois numeros
callBetween(Jorge, Isaac);
callBetween(Isaac, Eric);


// chama o método para cancelamento de número da classe mãe 'Mobile'
const cancelMobile = (obj: IMobile) => {
    // recebe um objeto do tipo Mobile
    obj.cancelLine();
    // chama o método 'cancelLine' do objeto
    // que existe na classe mãe
}

cancelMobile(Isaac);
// chama a o cancelamento da instancia


// CANCELA LINHA DE CADA OBETO
// cada objeto é de um tipo (o comportamento de 'Isaac' é 'Smartphone' entao teoricamente ele nao pode cancelar numero (metodo sobscrevido em 'Smartphone'))
let arr = [Jorge, Eric, Isaac];
arr.forEach(p => cancelMobile(p));


// ***** CHAMANDO (acessar) OS METODOS DAS CLASSES PARA SEREM APLICADOS NOS OBJETOS INSTANCIADOS

// Jorge.call(Eric);
// Eric.call(Isaac);
// Isaac.call(Jorge);

// Isaac.playMusic();
// Isaac.takePicture('frontal');
// Isaac.browseTheInternet();
// Isaac.setVolume(100);
