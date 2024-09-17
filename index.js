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

    const music = ['1992 meek mill','Drake laugh now cry later','kendrick goat',];
     music.sort((a, b) => a.localeCompare(b));

     music.forEach((song,index) => {
         console.log(`${index+1}. ${song}`);
     });
     console.log(music);

     const people = ['hamza','thabit','james','mapulomba','wajenjejenje'];
          
        const names= people.sort((a, b) => b.localeCompare(a));
         console.log('names');