function getName(num){
    var results = document.getElementById("result");
        results.value += num;
    
}

function getResult(){
    var result = document.getElementById("result");
 result.value = eval(result.value)
}

function clearResult() {
    result.value = '';
  }
  function undoInput(){
    result.value = result.value.slice(0,-1);
  }