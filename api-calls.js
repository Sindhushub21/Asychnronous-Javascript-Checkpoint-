//Summary - fetch a random cat fact from the specified url and display it on the screen when the button is clicked


/*Syntax:
 
    fetch(ur, options).then(res => res.json()).then(res)
    Take url use the fetch api and take the result and log the result...
*/
/*How to run this: 
  Make sure to download the Live Server extension.  To do this.. click on the 4 squares on the left of Visual Studio Console,
  Search for live server..
  To run: 
  Right click index.html. Click Open With Live Server option. In the browser open developer tools by clicking -> More tools->
  Developer Tools -> check the console tab.    
*/

/*Things to do
-Add error handling with try catch and then
-Add promises
-Modify to make sure the fact is displayed only when the button is clicked.. As of now it is just displaying as soon as we get
 a fact
*/
const url = "https://cat-fact.herokuapp.com/facts/random";



async function fetchFactJSON() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      //"Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
  try {
    var testresult = await response.json();
    //Returns the whole object
    //console.log("A simple cat fact1 is ", testresult);

    //returns just the text
    console.log("A simple cat fact is: ", testresult.text);
    document.getElementById('facts').innerText = testresult.text;
  } catch (error) {
    console.log(error);
  }
}

fetchFactJSON();
