
let sentence = document.getElementById('input');
function k (sentence) {
    if (sentence.length !== 0) {

      let sentenceToArray = sentence.split(' ')
      
      const cleanArray = sentence.replaceAll(/a|e|i|o|u/gi, '11111111').replaceAll(/([a-zA-Z])/gi,'0').split(' ');
      
      var lgth = 0;
      var longest;
          
          for (let i = 0; i < cleanArray.length; i++) {
            if (cleanArray[i].length > lgth) {
               lgth = cleanArray[i].length;
             longest = i;
            }
          }
      
      document.getElementById('result').innerHTML=(sentenceToArray[longest]);
    } else{document.getElementById('result').innerHTML= '';} 
};
