# steps of commiting files  <br>
git commit <br>
git push <br>
to fetch from git git pull <br>
<br>
deployment command <br>
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon <br>

## Midterm Notes
- In the following code, what does the link element do?
/can link to sytlesheets, icons, webfonts

- In the following code,  what does a div tag do? 
/structuring content, breaks up the page

- In the following code, what is the difference between the #title and .grid selector?
/ you use #title for id=title css and .grid for class=grid, classes are applied to multiples thing were ids are applied to one thing

- In the following code, what is the difference between padding and margin?
/ padding is between content and inner boarder, it determines internal spacing
\margin is the space between elements boarder and ajacent elements

- Given this HTML and this CSS how will the images be displayed using flex?
/

- What does the following padding CSS do?
/ padding is spacing between content and internal border

- What does the following code using arrow syntax function declaration do?
/

- What does the following code using map with an array output?
/

- What does the following code output using getElementByID and addEventListener?
/

- What does the following line of Javascript do using a # selector?
/ # is used to select elements by their id

- Which of the following are true? (mark all that are true about the DOM)
/tree structure, nodes(div, a, p), 

- By default, the HTML span element has a default CSS display property value of:
/ inline

- How would you use CSS to change all the div elements to have a background color of red?
/ div {
  background-color: red;
}

- How would you display an image with a hyperlink in HTML?
/ <.a href="htt.ps://example.com">
  <.img src="image.jpg" alt="Description of the Image">
<./a>

- In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
/ content, padding, border, margin

- Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
/

- What will the following code output when executed using a for loop and console.log?
/

- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
/var element = document.getElementById("byu");

// Change the text color to green//
element.style.color = "green";

- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
/ Paragraph: <.p>
Ordered List: <.ol>
Unordered List: <.ul>
Second Level Heading (H2): <.h2>
First Level Heading (H1): <.h1>
Third Level Heading (H3): <.h3>

- How do you declare the document type to be html?
/<.!DOCTYPE html>


- What is valid javascript syntax for if, else, for, while, switch statements?
/
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}//
<br>
for (initialization; condition; update) {
    // Code to execute in each iteration
}///
<br>
while (condition) {
    // Code to execute while the condition is true
}///
<br>
switch (expression) {
    case value1:
        // Code to execute if expression matches value1
        break;
    case value2:
        // Code to execute if expression matches value2
        break;
    // ... more cases
    default:
        // Code to execute if none of the cases match
}
<br>

- What is the correct syntax for creating a javascript object?
/var myObject = { <br>
    key1: value1, <br>
    key2: value2, <br>
    key3: value3,<br>
    // ... more key-value pairs <br>
}; <br>

-Is is possible to add new properties to javascript objects?
/yep, obj.new = 10 or obj (new) <= in brackets = 10

- If you want to include JavaScript on an HTML page, which tag do you use?
/ <.script>

- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
/

- Which of the following correctly describes JSON?
/ way to store data in {key:value} paris

- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
/<br>
chmod: Changes file permissions on Unix-like operating systems, allowing you to control who can read, write, and execute a file or directory. <br>

pwd: "Print Working Directory" displays the current working directory (the directory you are currently in) in the terminal. <br>

cd: "Change Directory" is used to navigate between directories in the file system. For example, cd myfolder would move you into a directory named "myfolder." <br>

ls: Lists the files and directories in the current directory. You can use various options like -l for a detailed list or -a to show hidden files. <br>

vim: A text editor in the command line for creating and editing text files. <br>

nano: Another text editor in the command line, with a simpler and more user-friendly interface compared to Vim. <br>

mkdir: "Make Directory" is used to create new directories or folders. <br>

mv: "Move" is used to move files or directories from one location to another. It can also be used to rename files or directories. <br>

rm: "Remove" is used to delete files or directories. Be cautious with this command, as deleted files are not typically recoverable. <br>

man: Displays the manual pages for Unix commands. For example, man ls will show the manual page for the ls command. <br>

ssh: "Secure Shell" is used for secure remote access to servers or systems. It allows you to log in to a remote machine over a network. <br>

ps: "Process Status" displays information about currently running processes on the system. <br>

wget: A command-line tool for downloading files from the internet. You specify a URL, and it downloads the file to your local system. <br>

sudo: "Superuser Do" is used to execute a command with superuser or administrative privileges. It is often used to perform system tasks that require elevated permissions. <br>


- Which of the following console command creates a remote shell session?
/ ssh

- Which of the following is true when the -la parameter is specified for the ls console command?
/l- listing format, a-all files

- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
/TLD- click, root domain- bozo.click, banana.fruit - subdomain

- Is a web certificate is necessary to use HTTPS.
/yeah

- Can a DNS A record can point to an IP address or another A record.
/ A records map domain names to Ip adresses you need a cname to point to another record

- Port 443, 80, 22 is reserved for which protocol?
/443- HTTPS 80-HTTP 22-SSH

- What will the following code using Promises output when executed?
/

### in class notes
Ip address is basically post office address
DNS- domain name server- finds ip address when given url
Network address translation- Router acts as only actual connection to internet because there are only 4 billion possible ip addresses (not enough)
Html does structure 
css does style
java script does functionality
do everything so it works on chrome-> use chrome for this class

9/7
Client server only gives information
Web sockets let you do peer to peer meaning it gives you information you didn’t ask for
Build correct mental models of whats going on
Develop locally then push it out into production environment
Need to clone git repository
What is your idea? Has to have all 8 things
Elevator pitch
Sketches
Technologies

9/12
Startup proposal design is due to the 23
Commit to git regularly

9/14
127.0.0.1 is your own ip address-> sends it back to you
HTTPS:443 is a port- is essentially a window into your castle
Door 443 is the door used for HTTPS 
Port 22 is used for ssh
Door number 80 is used for HTTP (without the S-> not secure)
You can have webserver do multiple things through a gateway
Gateway is port 443
AWS EC2
AMI is like generally what software you want on the machine
When you get domain only change/ create A record
Create two A records
One with the URL and one with */domain name
Copy and paste name of server in to get ride of 80
At end write sudo service caddy restart

9/19/2023
Lets encrypt is free web certification request
Servers essentially dap eachother up then use an encryption key so everything both sides do is encrypted

Html is always built with a head and body
Think about web documents in a tree model
Html is tree
Elements
Always start with <!DOCTYPE html>
<htlm lang=”en”>
</html>

Use WDN WebDocs or W3Schools.om to learn more about html when need to know something
Span only takes up as much space as it needs to contain its elements

9/26 CSS
You can embed css directly into the html but don’t do it unless only in small cases
There are a lot of different selectors- for instance selectors like paragraph
Whole thing is called a rule
Rule -> selector { 
property: value;
}
CSS operates by rules that apply to either the whole tree or just specific parts of the tree
Link to an additional file-> stylesheet
Most local rule has precedence
Children inherit rules from their parents

Selectors
Element div
ID  #root  ID = “root”-> only use for one specific thing 
Class- .highlight class= “highlight”
Element class- p.highlight 

Selectors
List body, section

Pseudo p:hover

Go to your favorite webpage and mess around
9/28/2023
Reactive design- changes based upon how the app is being used
See desktop mode no longer exists
Display things- block will be as big as it can be
Inline- only takes up as much space as it needs to 
Flex- applies to parent element and sets up nicely
Grid- makes a grid
Phone browsers were built to fix websites
<META
	NAME=”VIEWPORT”
	CONTENT=
	  “WIDTH=DEVICE-WIDTH, INITIAL-SCALE=1”
/>
Media queries
Eg.
@media (orientation: portrait)

Bootstrap CSS

10/3
JavaScript 
In first line of JavaScript 
‘use strict’;

When in doubt CSS uses strings
Whenever you want to do equality in CSS use ===
Don’t use var
A closure is a function that returns a function

10/10
EventListener 
Debouncing is a technique that dosen’t use expensive events fequencty

10/24/2023
Fetch will get whatever is at the url
Curl is the way to get the website on your device
http will go through port 80
apis give you back json objects
Url- uniform resource locator
Scheme, domain, port, prath, parameters, anchor
22 is ssh port

HTTP- HyperText Transfer Protocol

Use fetch for getting also for posting

http status code- 
200s are successes
200s are redirects
400 front end client bad news
500 back end 

Cookies- handled with fetch requests
Cookies stores server information on the client
Cache- keeps stuff around locally to respond to requests
