import { IMobile } from "./interfaces";
import SmartPhone from "./smartphone";
import Tijolao from "./tijolao";

const callBetween = (A: IMobile, B: IMobile): void => {
    console.log(A.call(B));
}

const Jorge = new Tijolao('78459567', 'Nokia', '0.3mp')
const Eric = new Tijolao('41449537', 'Ericsson', '0.4mp')
const Isaac = new SmartPhone('91459597', 'Apple', '12mp', '24mp')

callBetween(Jorge, Isaac);
callBetween(Isaac, Eric);

const cancelMobile = (obj: IMobile) => {
    obj.cancelLine();
}

let arr = [Jorge, Eric, Isaac];

arr.forEach(p => cancelMobile(p));

// Jorge.call(Eric);
// Eric.call(Isaac);
// Isaac.call(Jorge);

// Isaac.playMusic();
// Isaac.takePicture('frontal');
// Isaac.browseTheInternet();
// Isaac.setVolume(100);
