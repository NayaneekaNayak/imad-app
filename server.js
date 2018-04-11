var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title: 'Article One | Nayaneeka Nayak',
    heading: 'article One',
    date:'11th, april,2018',
    content:
    
    `<p> This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.
          
           
          'This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise
          
          This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise
          
          </p>
          
          <p> This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.
          
           
          This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise
          
          This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise.This is the first article of the exercise
          </p>`
          
};

function createtemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

 var htmltemplate=
`<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewpoint" content="width=device-width, initial-scale=1">
          <link href="/ui/style.css" rel="stylesheet"/>
    
        <style>
            
        </style>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
      <hr/>
      <h3>
             ${heading}
      </h3>      
      <div>
          ${date}
      </div>
      <div>
          ${content}
      </div>
    </body>
</html>
`;
  return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res)
{res.send(createtemplate(articleOne));
});


app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});


app.get('/article-three', function(req,res)
{res.send('article three will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
