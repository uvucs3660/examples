Demo Code:

LitElement - client

Node - Koa Server

[node lit chat](https://chat.openai.com/share/5b3f4a03-e529-4492-85a4-f7126511b191)

[Dart - server](https://chat.openai.com/share/5335beaa-fa4b-47f6-9606-a151dbec4cb6)

Flutter - client

Prompt after dart server

now write a flutter program that will call this server

Outline for AI

1 - find good packages  
2 - write requirements  
3 - write function requirements  
4 - have ai write function documentation

To Watch: [google i/o 2024](https://www.youtube.com/watch?v=WsEQjeZoEng&list=PLOU2XLYxmsIJZaqcQHCNrDtoaEgvZORMk&t=147s)

# Requirements \[[ChatGPT](https://chatgpt.com/share/e395b323-aeed-454c-9495-5d4370ac3ab2)\]

## Technical Requirements:

Write the necessary web page as presentation.html, and add_presentation.html, including necessary html, css and javascript to meet the requirements.

Use the litelement javascript framework.

Use css to make it look good

Ask me any questions 1 at a time for any information that you need to succeed.

Add animation where it works for good user experience.

## Functional Requirements:

I want to build a web page that  has an iframe that take up ninty percent of the screen.  It has a json object that is an array of objects called presentations. Attached is a presentation.json as an example of the json

each presentation is 15 minutes

between presentation is 3 minutes to vote for the presentation

the presentation program then goes to the next url in the iframe.

we also need a form so that each team can input the url for their presentation before hand.  This will load the presentation.json, and update their team object, then save it back with the api.

# Examples:

## presentation.json

{  
 "presentation": 2,  
 "date": "2024-05-01","duration":15,  
 "presentations": \[  
   {  
     "team":1,  
     "url":"http://www.demo1.com/index.html"  
   },  
   {  
     "team":2,  
     "url":"http://www.demo1.com/index.html"  
   },  
   {  
     "team":3,  
     "url":"http://www.demo1.com/index.html"  
   },  
   {  
     "team":4,  
     "url":"http://www.demo1.com/index.html"  
   },  
   {  
     "team":5,  
     "url":"http://www.demo1.com/index.html"  
   }  
 \]  
}

## API definition:

using fetch

load json with a GET /data/project2/presentation

save json with a POST /data/project2/presentation
