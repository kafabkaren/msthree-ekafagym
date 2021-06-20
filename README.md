# Guess The Number

Welcome to [eKafagym Webb App](https://ekafagym.herokuapp.com/get_workouts)

![MS3 Responsiveness.JPG](https://github.com/kafamem/mstwo-guess-the-number/blob/master/docs/images/MS2%20Responsiveness.JPG)

## Project rationale

This website is designed to help users play by guessing the hidden number. The game consists of guessing the hidden number by type in the guess one ranging between 1 and 20. Then, check if the input is correct.<br>


# User Experience (UX)

It has been designed in such way that its visitors will be able to navigate the 
web features easily and with help of simple but clean colour combination and game typography. 

## User stories<br>
<ul>
    <li>As a user, I want to be able to navigate the page easily.</li>
    <li>As a user, I want to type in my guessing number.</li>
    <li>As a user, I want to be able to check the correctness of the number I entered.</li>
    <li>As a user, I want a feedback after checking my number.</li>
    <li>As a user, I want to know how many attempts I still have remaining to score for each guess and see my top score.</li>
    <li>As a user, I want to be able to start the game without losing my current top score.</li>
    <li>As a user, I want to be able to restart the game from scratch.</li>
</ul> 

### Design<br>
The web design main target is to provide the user with the ability to interact with the game. The layout consists of features and elements that allows the user to navigate and use the interact with the game. 
<ul>
    <li>Colour Scheme</li><br>
    - The dominating color throughout the entire layout is dark grey which is combined with light grey color used for header and the instruction card area. In order to make the text content stand out, I used the orange color for typography which created a harmonious combination for both text and buttons background color.<br><br>
    <li>Typography</li><br>
    - The 'Press Start 2P' is the main font that was used while 'Sans Serif' was kept as backup font in case 'Press Start 2P' fails to respond effectively. The two typographies were fetched from google fonts. I found 'Press Start 2P' friendly for games design.<br><br>
    <li>Emoji Icons</li><br>
    - Five emoji icons were used in JavaScript code in order to accompany the user anticipated feelings upon guessing right or wrong in relation to the secret number and from the html 'Attempt' and 'Score' elements.<br>   

</ul>

### Wireframes

The wireframes for the site were created with help of Balsamiq. They feature the site look from different angles i.e computer, mobile phone and tablet views.

* Guess The Number Computer View Wireframe - [wireframe](https://github.com/kafamem/mstwo-guess-the-number/blob/master/docs/wireframes/MS2%20Computer%20View.jpg)
* Guess The Number Mobile Phone View Wireframe - [wireframe](https://github.com/kafamem/mstwo-guess-the-number/blob/master/docs/wireframes/MS2%20Mobile%20Phone%20View.jpg)
* Guess The Number Tablet View Wireframe - [wireframe](https://github.com/kafamem/mstwo-guess-the-number/blob/master/docs/wireframes/MS2%20Tablet%20View.jpg)


## Features

### Existing Features
<ul>
The site layout consists of three main areas:<br><br>
    <li>The header that shows the name and the purpose of the site.</li><br>
    <li>The game area which consits of secret number area where the hidden number is represented by the question mark. It is in this area where the guessed number shows up after a correct match. This styling in this regards also changes from 15rem for the initial and deafult settings to 30rem width after guessing right.<br>
    <li>The input area serves for typing the number. The user can type in or scroll up and down to choose the number. Under this area, is the check button to submit the input for comparison and get the feedback. 
    </li><br>
    <li>The site also includes the 'Attempt' and 'Topscore' features. The Attempt feature which is a counting down from twenty down to zero, shows the user how many times they have tried to reach the perfect match. In case of failure i.e the last attempt equals to zero; then the 'You lost the game' message pops up. On the other hand, the Topscore feature keeps the highest score so far reached.</li><br>
    <li>The 'Again' which is under the attempt and topscore features servers for starting the game session without losing track of the topscore. The game is to reset to the initial settings but keeping the topscore. However, upon refreshing the page the game will start from scratch.</li>
    <li>The last area is the instruction which guide the user on how to play the game.</li>
</ul>

### Features Left to implement
<ul>
    <li>To better improve the game I plan to add on levels of difficulty where the user will be challenged to choose between easy and hard levels. To this level, the user may be provided with only a limited number of attempts to guess right with high score.</li><br>

</ul>

## Technologies used

### Languages Used

* HTML5
* CSS3
* JavaScript


### Framework, Libraries, Websites & Tools Used

1. [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/):
    - Bootstrap was used to ensure the responsiveness and styling of the website.

1. [Google Fonts](https://fonts.google.com/)
    - Google fonts were used to import the 'Roboto and Sans-Serif' fonts used for typography.

1. [Git](https://git-scm.com/)
    - For version control, Git was used mainly to commit with help of Gitpod terminal and Push to GitHub.
1. [GitHub](https://github.com/)
    - GitHub is used for storing the code pushed from Git.

1. [Balsamiq](https://balsamiq.com/)
    - Balsamiq was used to create the website home page [wireframe](https://github.com/kafamem/msone-kafagym/blob/master/assets/images/Landing%20page.png) during the design process.
1. [Befunky](https://www.befunky.com/create/resize-image/)
    - Befunky was such a handy website for picture editor used to resize images used in this project.
1. [ColorZilla](https://www.colorzilla.com/)
    - ColorZilla was such a handy extension used to pick the appropriate hexadecimal during the design process.

## Validation

In order to check the validity of the website code, the W3C Markup Validator and W3C CSS Validator were used on each page of the website to check the syntax errors.
* [HTML Validator](https://validator.w3.org/) returned zero errors in the markup.
* [CSS Validator](https://jigsaw.w3.org/css-validator/) returned zero errors in the styling.
* [JavaScript Validator](https://jshint.com/) returned five warnings but no errors were identified. 

## Compatibility Testing

The site is compatible with different devices including mobile and tablet as well as computer. The responsiveness aspect was regularly checked using Google Chrome inspect features without forgetting Safari and Mozilla Firefox.

### Testing User Stories from User Experience (UX)

As a user and the plater at same time of the game on the website, I want to:
<ul>
    <li>Navigate the page easily.</li><br>
    The page layout makes it easier to navigate around. The features on the web page are straightforward to find and get along with with ease.<br><br>
    <li>Type in my guessing number.</li><br>
    The user is provided with the field to enter their prefered number as guess. The user can either type or scroll up or down to select the prefered number.<br><br>
    <li>To be able to check the correctness of the number I entered.</li><br>
    The user check whether their prefered guess number matched or did not match with the hidden secret number. This is done upon clicking the 'Check' button which prompts a feedback. The correct match appears both in the secret number box and the typing box.<br><br>
    <li>Get feedback after checking my number.</li><br>
    Upon clicking the Check button, the user gets a feedback with the phrase 'Wow! Exact number' in case the match was correct, the phrase 'The number is low' in case the number entered  is lower than the secret number and the phrase 'The number is high' in case the number entered is higher than the secret number. The user can also get a failure notification 'You lost the game' after exhausting the counting down attempts with no correct guess.<br><br>
    <li>Know how many attempts still available to score for each guess and see my top score.</li><br>
    The user is provided with the information about how many attempts were tried in a form of counting down as well as the top score reahced so far. Here the topscore is actually equal to the highest value number from the attempts. With this information, the user can strategically plan for the next score.<br><br>
    <li>To start the game without losing my current top score.</li><br>
    For the purpose of competition, the user may need to show off the topscore they reached but without losing the ability to keep playing. In this case, the 'Again' button was set to start the game again without losing track of the topscore.<br><br>
    <li>Restart over the game.</li><br>
    The user can choose to start over the entire game session by refreshing the page. This will reset all game features back to the starting point; topscore included. 
</ul>

### Further Testing
* The website was tested through different browsers; Google Chrome, Mozilla Firefox, Microsoft Edge and Safari browsers.
* The website was viewed through various devices including iPhone7 and iPad, large screen and laptop to check it responsiveness.

## Deployment

### GitHub pages
The following steps were followed to deploy the project to GitHub Pages:

1. After logging in to GitHub, locate the GitHub Repository
1. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
1. Scroll down the Settings page until you reach the "GitHub Pages" Section.
1. Under "Source", click the dropdown called "None" and select "Master Branch".
1. The page will automatically refresh.
1. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Workspace
In order to write wode, I use Gitpod IDE. 
1. After logging in to Gitpod, I choose the 'kafamem/mstwo-guess-the-number' workspace.
1. Then, I select open from adjacent three dots. Then the workspace name opens the project design interface. This has terminals, coding area as well as the preview mode.

## Credits

### code
* [Bootstrap4](https://getbootstrap.com/docs/4.1/getting-started/introduction/): Bootstrap Library was used to ensure the responsiveness of the website.

### content
* All the text content was written by the developer.

### Acknowledgements
* My mentor for his technical guidance.  
* Tutor support at Code Institute their technical support.
