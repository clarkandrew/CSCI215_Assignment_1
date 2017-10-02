# Lab_04
JavaScript variables, funtions, and calculations

Name: Andrew Clark

## DUE: 01 Oct 2017 @ 11:59 pm

## Instructions:
Compute the conversion of the American dollar to the British Pound, Estonian Kroon, Canadian Dollar, and Chinese Yuan.

When finished, commit and push to GitHub.

Have fun, and good luck!

## Task 1: Global Variable
Create an array named I and initialize the elements to the following string values
  * index position 0: 'http://munsellb.people.cofc.edu/img/pound.jpeg'
  * index position 1: 'http://munsellb.people.cofc.edu/img/euro.jpeg'
  * index position 2: 'http://munsellb.people.cofc.edu/img/kroon.jpeg'
  * index position 3: 'http://munsellb.people.cofc.edu/img/canadian.jpeg'
  * index position 4: 'http://munsellb.people.cofc.edu/img/yuan.jpeg'
  
## Task 2: convert function
Create a function named `convert` that has no parameters.
Inside the `convert` function create the local variables listed below.
  * Variable named `dollar` that is initialized to `document.getElementsByName("dollars")[0].value`
  * Variable named `selectElement` that is initialized to `document.getElementById('currency')`
  * Variable named `exchangeRate` that is initialzed to `selectElement.value`
  * Variable named `index` that is initialized to `selectElement.selectedIndex`
  * Variable named `currency` that is initialized to `selectElement.options[index].text`
  
After the above variables have been created, call a function named `updateExchange` and pass (in order) these four arguments: `dollar`, `exchangeRate`, `currency`, and `index` (i.e. the variables created above).

## Task 3: calculate function
Create a function named `calculate` that has two parameters: the variable name of the first parameter is `dollar`, and variable of the second parameter is `exchangeRate`.

Inside this function multiply `dollar` times the `exchangeRate` and then return the calculated value.
