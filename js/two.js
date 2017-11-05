 var crr = [1,2,3,2,5,6,4,4,8,8,8,9,9,9];
        function repeat(crr){
          var drr = [];
          for(var i = crr.length-1;i>=0;i--){
            if(drr.indexOf(crr[i]) === -1){
                drr.push(crr[i])
            }
          }
          return drr;
        }
        console.log(repeat(crr))