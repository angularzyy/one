var arr = [1,2,3,2,5,6,4,4,,8,8];
function repeat(arr){
  var brr = [];
  for(var i =0;i<arr.length;i++){
    if(brr.indexOf(arr[i]) === -1){
        brr.push(arr[i])
    }
  }
  return -1;
}
repeat(arr)