// A GET route with the url /api/friends. This will be used to display a 
// JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results.
//  This route will also be used to handle the compatibility logic.

//this will need to use body parser!!


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

var data = [""];

app.get ("/api/friends", function(req,res){
    var friends = [];
    for(i=0;i<res.length;i ++)
    {
        if(res[i].num < 4 )
        {
            friends.push(res[i]);
        }
        return res.json(freinds);
}
})