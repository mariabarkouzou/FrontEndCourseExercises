# WEB 101: JAVASCRIPT FUNDAMENTALS 1

### [Assignment](#assignment)

#### Specifications

Try to finish the following tasks. Make sure to checkout the hints section.

**Download the initial code** from this link: [javascript-numbers.zip](/wp-content/uploads/javascript-numbers.zip).

**IMPORTANT:** Make sure to zip (compress) the HTML file before submitting your assignment. The zip file **must also contain a web page named `javascript-numbers-practice.html`** with the code you created from the `Practice!` section above.

1. Convert any generic HTML elements (e.g. div, span) with semantic [HTML Elements](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/html/html5_semantic_elements.asp.html). For example, if you find something like this:

```html
<div class="main">...MAIN CONTENT...</div>
```

It would be better to replace it with a semantic element:

```html
<main>...MAIN CONTENT...</main>
```

2. Replace the `years of experience` (currently hardcoded as the value 15 in the header section) with a JavaScript variable named `yearsOfExperience`. The `yearsOfExperience` variable must be assigned a value calculated by the subtraction of the year the company was created (2005) and the current year (see Hints below on how to get the current year value through JS). Both the year of establishment and the current year must be assigned to JS variables.

3. Each price displayed in the page must be assigned to some kind of variable, e.g. `mobileAppPrice`. The current prices must be replaced with a special offer version that includes 25% off the current price. Make sure to instruct JavaScript to do these kind of calculations for you. When done, make sure that you can easily change all the prices in the page, simply by changing the sales percentage variable (e.g. change from 25% to 30%, etc.).

4. Make sure to replace the footer values (2005, 2020) with dynamic values (JavaScript variables).

5. Replace the the price of the full package (1250) with a dynamic value. Every time the price of a product changes or the sales percentage is modified, the result presented here must reflect these changes.

6. Ensure that when the value of the variable that contains the sales percentage is updated, all the `Special offer 25%` text are updated too. For example, if the value of the variable changes to 30, the text must display `Special offer 30%`.

#### HINTS

- Display dynamic content: you can display dynamic HTML content (created by  JavaScript) using the JavaScript `document.write` command. For example, if you want to display the result of some kind of calculation inside the web page, you can place the following script tag inside your HTML:

```html
6 times 99 equals <script>document.write( 6 * 99 );</script> 
```

- Get the current year in JavaScript

Here's a small snippet that will return the current year:

```js
new Date().getFullYear();
```

You can also assign the result of the above command to a variable, and access the value using the variable name in multiple places in your code.

```js
const currentYear = new Date().getFullYear();
document.write( currentYear );
```