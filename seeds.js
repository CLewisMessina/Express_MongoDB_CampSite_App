var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [{
        name: "Blue Mountain Summit",
        image: "https://images.unsplash.com/photo-1517824806704-9040b037703b",
        description: "Amazing Peaks, Unparalleled view, Sporadic Coyotes. When you visit Blue Mountain Summit (BMS), you'll feel the thrill of nature as you feed hawks, pet prairie dogs and fight off wild coyotes (blunt coyote fighting instrument not included)."
    },
    {
        name: "Dead Snake Canyon",
        image: "https://images.unsplash.com/photo-1519708495087-ca1b71df408c",
        description: "Quiet remote spot, very few rattlers. It's really not fair to call it 'dead' snake, since there are still and have always been snakes, but that's what the guy called it who THOUGHT all the snakes were dead. He was bitten by a poisonous snake shortly after naming the site, and thus the name was kept in his honor."
    },
    {
        name: "Governor's Island Campgrounds",
        image: "https://images.unsplash.com/photo-1523642595781-e7ce9855e4f6",
        description: "Get away from the big city, while being right next to it! G.I. Campgrounds features all the trappings of camping, including hot tubs, maid service, limo service, dinner service, bed tuck down, folded towels and a performance by Cirque du Solei. You may see stars... in the circus show. (Actual visibility of stars in sky not possible due to proximity to city lights)"
    },
    {
        name: "Glacier Pointe",
        image: "https://images.unsplash.com/photo-1519708495087-ca1b71df408c",
        description: "Freezing to death? Challenge accepted! Glacier Pointe was discovered by French trapper, Jacques du Pomme in hopes of finding a beaver trapping site far from other trappers. Unfortunately, he died of hypothermia, but he was not alone. Hundreds try Glacier Pointe and several die there each year. Think you've got the guts to survive? Then come to Glacier Pointe!"
    }

]

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Campground data has been deleted from database.");

        //add a few campgrounds
        data.forEach((seed) => {
            Campground.create(seed, (err, campground) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create({
                        text: "This place is great... if you don't mind dying.",
                        author: "Homer S."
                    }, function (err, comment) {
                        if (err) {
                            console.log(err)
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("added new comment");
                        }
                    });
                }
            });

        });

    });

    // add a few comments

}

module.exports = seedDB;