//challenge 1

(function firstFunction () {
    const b = 5; const c = 6;
  
    (function secondFunction () {
      const b = 8;
  
      (function thirdFunction () {
        const a = 7; const c = 9;  
        (function fourthFunction () {
          const a = 1; const c = 8;
          console.log(`a: ${a}`);
        })()
      })()
      console.log(` b: ${b}, c: ${c}`);
    })()
  })()


  //challenge2

  let bird = 'Pidgeons';
    ( function () {
        if ( typeof bird === 'undefined' ){
            bird = 'Rubber Duck';
            console.log('Ernie loves his ' + bird );
        } else {
            console.log('Bert loves his ' + bird );
        }
    }() );