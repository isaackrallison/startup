# startup
Repository for CS 260 website
## Elevator Pitch
Have you ever had some friends together and tried to decide on what to do?
<br>
How about when you are with your family trying to decide where to go to eat?
<br>
It can be tough to decide on a choice that makes everyone happy,
<br>
especially when there’s a big group. So why not take a quick vote on it!
<br>
With this startup the decision can be made in just a few minutes.

## Technologies
- HTML- HTML will provide the general structure of the site including the different pages
- CSS- CSS will make this website look sleek and easy to understand
- JavaScript- JavaScript will provide the interactivity of the site, making the buttons actually do something 
- Web services – Will provide the ability to see other people’s suggestions as they are provided
- Authentication- Each user will be prompted to create an account or login when they land on the page
- Database Data- For each user their past suggestions will be saved and presented
- WebSocket Data – will allow you to see the most popular suggestion that the most people are currently voting for
- Web framework- when the time comes react will be implemented
## Renderings
![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)
![Alt text](image-3.png)

## Sartup HTML
General structure of website was completed in html code including the follwing.

- Html pages for each necessary component of the webite.
- Links between pages through input boxes and menu
- textual content
- placeholders for all later course content eg. (Login, Database and Websocket)


## Startup CSS
CSS was added to complement the exsisting html including

- header, footer, and main body content styling
- a slick navigation interface
- mostly responsive features
- styled buttons and textboxes for user input
- text placement and font selection
- an image in the about section of the page

## Startup Java Script
Javascript was added to introduce functionality including

- support for the javascript login
- support for future database data
- support for future websocket
- meaningful interaction logic
- I would have liked to have a more polished final product, but I am findind this project is a bit larger than I anticipated

## Startup Service
Backend web service support and interaction was added including

- http service including node.js and express
- static middleware
- frontend calling third party service endpoints (quote)
- backend providing service endpoints (suggestions)
- frontend calling those service endpoints (suggestions)

## Startup Database
Database support was added including

- The creation of a MongoDB Atlas Database
- backend endpoints for manipulating app data
- The connection of the aplicaiton to the database to store data in MongoDB

## Startup Login
Login support was added including

- Added support for new registration
- Added support for exsisting user authentication
- stores and retrieves credentials in MongoDB
- Restricted application functionality based on authentication

## Startup WebSocket
Websocket support was added on the voting page including

- a backend that listens for Websocket connection
- a frontend that makes a Websocket connection
- Data is sent over a websocket connection
- websocket data is displayed in application interface (number of votes increaces)

## Startup React
Startup was changed to react, including

- Bundled using WebPack and Babel as generated from using create-react-app
- Multiple functional react components
- React router
- React Hooks
