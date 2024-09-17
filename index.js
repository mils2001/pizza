const y =400;
 const pizza=y<500? 'markdonalds':'mr.frys';

    switch(pizza){
        case "markdonalds":
            console.log('pizza available 650');
            break;
        case "mr.frys":
            console.log('pizza available 240');
            break;
        default:
            console,log('no more pizza available');
            break;
    }