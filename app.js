<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2023 by anonymous (http://jsbin.com/bulotugolu/2/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Voting Page</title>
<style id="jsbin-css">
/* Reset some default styles */
html,body{
  margin:0;
  padding:0;
  width:100%;
  height:100%
  text-align: center;  
}
body, h1, h2, table, th, td {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px; /* Add border radius */
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

h2 {
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #555;
}

table {
  width: 100%;
  
  border-collapse: collapse;
  margin-bottom: 20px;
}

table *{
  border: 2px solid black;
}

th, td {
  padding: 10px;
  text-align: center;
}

th {
  background-color: #333;
  color: #fff;
}

td {
  background-color: #f9f9f9;
  border-radius: 10px; /* Add border radius */
}

button {
  padding: 10px 20px ;
  font-size: 16px;
  background-color: #007BFF;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.}
#w {
  margin:10px
}
}

</style>
</head>
<body>
  <h1>Which do your prefer, Coke or Pepsi?</h1>
  <div>
    <h2>Here is what people are saying :</h2>
    <table>
      <tr>
        <th></th>
        <td>Coke</td>
        <td>Pepsi</td>
      </tr>
      <tr>
        <th>Number of votes</th>
        <td id='cv'>0</td>
        <td id='pv'>0</td>
      </tr>
    </table>
    <p id='tv'>Total number of votes: 0</p>
  </div >
  <div id='selection'>
  <button onclick='castvote(0)'>Coke</button>
  <button onclick='castvote(1)'>Pepsi</button>
  </div>
  <div id='w'>
      <button >Announce winner</button>
    <p id='wp'>WInner is: Neither</p>
  </div>
<script id="jsbin-javascript">
var cokevoteT = document.getElementById('cv');
var pepsivoteT = document.getElementById('pv');
var totalvoteP = document.getElementById('tv');
var winner = document.getElementById('wp');
var selection = document.getElementById('selection');

var totalvote = 0;
var cokevote = 0;
var pepsivote = 0;
var voted=false;
function castvote(candidateIndex) {
  if(voted){
    alert('YOU HAVE ALREADY VOTED')
    return;
  }
  voted=true;
  if (candidateIndex === 0) { // Corrected the variable name from candidatesIndex to candidateIndex
    cokevote += 1;
    cokevoteT.innerHTML = cokevote.toString();
  } else {
    pepsivote += 1;
    pepsivoteT.innerHTML = pepsivote.toString(); // Corrected the variable name from pespsivoteT to pepsivoteT
  }
  
  totalvote += 1;
  totalvoteP.innerHTML = 'Total number of votes: ' + totalvote.toString();
}

    function announceWinner() {
      if (cokeVote > pepsiVote) {
        winnerP.innerHTML = 'Winner is: Coke';
      } else if (pepsiVote > cokeVote) {
        winnerP.innerHTML = 'Winner is: Pepsi';
      } else {
        winnerP.innerHTML = 'Winner is: Neither';
      }
    }
</script>
</body>
</html>