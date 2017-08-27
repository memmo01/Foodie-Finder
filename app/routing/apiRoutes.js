// A GET route with the url /api/friends. This will be used to display a 
// JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results.
//  This route will also be used to handle the compatibility logic.

//this will need to use body parser!!

var foodies = require("../data/friends.js");

var data = [ { name: 'Joey Bag O\'Donuts',
    picURL: 'http://www.motherjones.com/files/istock_000010544064_large.jpg',
    q1: '3',
    q2: '1',
    q3: '2',
    q4: '2',
    q5: '4',
    q6: '4',
    q7: '2',
    q8: '3',
    q9: '2',
    q10: '2' },
  { name: 'Jonny S',
    picURL: 'http://s.eatthis-cdn.com/media/images/ext/789553511/man-eating-spaghetti-foods-make-you-hungrier.jpg',
    q1: '3',
    q2: '2',
    q3: '3',
    q4: '2',
    q5: '4',
    q6: '2',
    q7: '3',
    q8: '4',
    q9: '2',
    q10: '4' },
  { name: 'April O\'neil',
    picURL: 'http://i.dailymail.co.uk/i/pix/2008/10/20/article-0-026F5DDC00000578-526_468x318.jpg',
    q1: '5',
    q2: '5',
    q3: '5',
    q4: '5',
    q5: '5',
    q6: '5',
    q7: '5',
    q8: '5',
    q9: '5',
    q10: '5' },
  { name: 'Mary M',
    picURL: 'http://www.youngandraw.com/wp-content/uploads/Eating-Raw-Can-Make-You-Healthier.jpg',
    q1: '4',
    q2: '2',
    q3: '5',
    q4: '2',
    q5: '3',
    q6: '4',
    q7: '2',
    q8: '5',
    q9: '4',
    q10: '2' },
  { name: 'Joel L',
    picURL: 'https://www.bodybuilding.com/fun/images/2014/50-fat-torching-tricks-3.jpg',
    q1: '4',
    q2: '4',
    q3: '4',
    q4: '4',
    q5: '4',
    q6: '4',
    q7: '4',
    q8: '4',
    q9: '4',
    q10: '4' },
  { name: 'Lorie G',
    picURL: 'https://i.pinimg.com/236x/7a/e9/c6/7ae9c6b27b2e6729f6558a786edfedca.jpg',
    q1: '4',
    q2: '2',
    q3: '2',
    q4: '2',
    q5: '5',
    q6: '2',
    q7: '2',
    q8: '3',
    q9: '5',
    q10: '5' },
  { name: 'jo mama',
    picURL: 'https://huenemefamily.com/wp-content/uploads/2016/06/food.jpg',
    q1: '3',
    q2: '3',
    q3: '3',
    q4: '3',
    q5: '3',
    q6: '3',
    q7: '3',
    q8: '3',
    q9: '3',
    q10: '3' } ];


module.exports = function(app){
app.get("/api/users",function(req,res){
    var users=[];
    for(var i = 0; i < data.length; i++){
        users.push(data[i]);
    }
        
    return res.json(users);
});

app.post("/api/users", function(req,res){
    data.push(req.body);
    console.log(data);

    res.json({
        complete: true
    });
});
};
        