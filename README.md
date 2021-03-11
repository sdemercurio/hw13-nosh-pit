# hw13-nosh-pit

![nosh pit](public/assets/img/nosh-pit.PNG)


## Description:
For this assigment, I was instructed to create a "burger logger" using MySQL, Node, Express, and Handlebars. The purpose of this assigment was to follow the MVC design pattern.

When a user submits a burger's name, the app didsplays the burger on the left side of the page, waiting to be "noshed". There is a button to "nosh" and when the user hits said button, the burger is transfered to the right side of the page in the "noshed" area.


## Technologies :
* Javascript
* Node.js
* Express.js
* MySql
* Handlebars
``` javascript
<div class="row" id="left">
      <ol>
        {{#each burgers}}
        {{#unless noshed}}
        {{> burgers/burger-block noshed=true}}
        {{/unless}}
        {{/each}}
      </ol>
    </div>
```
![nosh pit](public/assets/img/screen-shot.PNG)

####Deployed on: 
[Heroku](https://afternoon-everglades-89065.herokuapp.com/)
* please note this was not successfully deployed due to issues that could not be resolved by fellow students or my instructor. 
There is a hidden issue with my syntax somewhere in the following snippet of code.

``` javascript
const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
```

Link to [GitHub Repo](https://github.com/sdemercurio/hw13-nosh-pit.git)