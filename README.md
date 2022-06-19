<br />
 <h1 align="center">
  <a href="https://guessthewordpp.herokuapp.com/"> GUESS THE WORD </a>
 </h1>

  <p align="center">
    Web Game where user must Guess The Word in six tries. Each guess must be a valid five-letter word.
  </p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#how-to-play">How to play</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was created as a hobby in my spare time. The application is inspired by the [WORDLE](https://www.nytimes.com/games/wordle/index.html) game, but words are in Polish.
 <br/>

The database of words that are used in the application can be found [here](https://sjp.pl/sl/growe/?d=5) <br/>
The database has more than 6,000 five-letter words.  <br/>
Some of them were removed by me, because they were too difficult.

### Built With

These are the main technologies used to create this application.

#### Backend
* [Python 3.9](https://www.python.org/)
* [Django 4.0.5](https://www.djangoproject.com/)
#### Frontend
* HTML
* CSS
* JS

<!-- GETTING STARTED -->
## Getting Started

This application is deployed on heroku server, but it is not final version and has some bugs. <br/>
If you want to try it - just clik this link => [GUESS THE WORD](https://guessthewordpp.herokuapp.com/)


<!-- HOW TO PLAY -->
## How to play

"Guess The Word" is a simple game. <br/>
Player has six tries to guess random word.<br/>
Each guess must be a valid five-letter word.<br/>

  <h3 align="center">
    Below you can see the main and only application page
  </h3>

### The page includes
* Name of applicatiom
* Six rows, each containing 5 boxes
* Keyboard
* Button to get new word

<!-- Main page-->
[![main-site.png](https://i.postimg.cc/Kc00c518/main-site.png)](https://postimg.cc/QVWQ01g2)

#### User can play by using his own device keyboard or click letters on app keyboard

Just type 5 letters (word must be correct and exist) and click "Enter" key to check if you guessed the word.

### Colors:
* Dark grey - This letter is not in word
* Yellow - This letter is in word, but not on this position
* Green - This letter is on right position

###### In addition, on the keyboard below the game window, the letters also change color so that the player knows which letters have not yet been used 

<!-- Guessing word -->
[![guessing.png](https://i.postimg.cc/6Q11jLC3/guessing.png)](https://postimg.cc/zLKj3htZ)

 If the player guesses the word, a green word will appear above the game window and the remaining rows will block

<!-- You win -->
[![you-win.png](https://i.postimg.cc/tgf2tRHn/you-win.png)](https://postimg.cc/gwVVGWjG)

If the player fails to guess the word in six tries, a red word will appear above the game window

<!-- You lose -->
[![you-lose.png](https://i.postimg.cc/ZKZjLDXH/you-lose.png)](https://postimg.cc/xqxKfgfN)

  <h3 align="center">
    To play again player can click the button bellow keyboard or refresh page
  </h3>

<!-- CONTACT -->
## Contact

Patryk Parkitny - [@LinkedIn](https://linkedin.com/in/patryk-parkitny) - patryk.parkitnyy@gmail.com

Project Link: [https://github.com/pparkitny/Guess_The_Word](https://github.com/pparkitny/Guess_The_Word)

###### "Guess The Word" is an app inspired by the [WORDLE](https://www.nytimes.com/games/wordle/index.html) game 
