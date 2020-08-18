import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
console.log(fifaData.filter(game=>game['Year'] === 2014 && game['Stage'] === 'Final').map(obj=>obj['Home Team Name']));
/*
(b) Away Team name for 2014 world cup final*/
console.log(fifaData.filter(game=>game['Year'] === 2014 && game['Stage'] === 'Final').map(obj=>obj['Away Team Name']));
/*
(c) Home Team goals for 2014 world cup final
*/
console.log(fifaData.filter(game=>game['Year'] === 2014 && game['Stage'] === 'Final').map(obj=>obj['Home Team Goals']));
/*
(d) Away Team goals for 2014 world cup final*/
console.log(fifaData.filter(game=>game['Year'] === 2014 && game['Stage'] === 'Final').map(obj=>obj['Away Team Goals']));
/*
(e) Winner of 2014 world cup final */
console.log(fifaData.filter(game=>game['Year'] === 2014 && game['Stage'] === 'Final').map(obj=>obj['Win conditions'].split(' ')[0]));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(obj=>obj['Stage'] === 'Final');

};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
let years = [];
     callback(fifaData).forEach(obj=>years.push(obj['Year']));
return years;
};


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

 let winners = [];
 callback(fifaData).forEach(obj=>{
     if (obj['Away Team Goals'] === obj['Home Team Goals']) {
     winners.push(obj['Win conditions'].split(' ')[0])
     } else if (obj['Away Team Goals'] > obj['Home Team Goals']) {
         winners.push(obj['Away Team Name']);
     } else {
         winners.push(obj['Home Team Name'])
     }
    }
     );
 return winners;
 
};


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
let wins = winners(getFinals);
let year = years(getFinals);
return wins.map((team, index)=> {
    return `In ${year[index]}, ${team} won the world cup!`;
})

};



/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

  let goals = (data.map(obj=>obj['Home Team Goals']).reduce((acc, cv)=> {
      return acc + cv
  }, 0)) + (data.map(obj=>obj['Away Team Goals']).reduce((acc, cv)=> {
      return acc + cv
  }, 0))
return goals / data.length
};


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {

    return data.filter(obj=>obj['Stage'] === 'Final').filter(obj=>obj['Home Team Initials'] === teamInitials || obj['Away Team Initials'] === teamInitials).filter(obj=> {
        if (obj['Home Team Initials'] === teamInitials && obj['Home Team Goals'] > obj['Away Team Goals']) {
            return true;
        } else if (obj['Away Team Initials'] === teamInitials && obj['Away Team Goals'] > obj['Home Team Goals']) {
            return true;
        } else {
            return false;
        }
    }).length;

};

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {

};




/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(data) {

};

badDefense(fifaData);

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
