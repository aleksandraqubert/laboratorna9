
var animals=[{"id":1,"title":"Monty","sex":"MALE","age":14,"description":"Monty enjoys chicken treats and cuddling while watching Seinfeld.","dogImage":"/images/dog/p1.jpeg"},{"id":2,"title":"Jubilee","sex":"FEMALE","age":6,"description":"Jubilee enjoys thoughtful discussions by the campfire.","dogImage":"/images/dog/p2.jpeg"},{"id":3,"title":"Beezy","sex":"MALE","age":8,"description":"Beezy's favorite past-time is helping you choose your brand color.","dogImage":"/images/dog/p3.jpeg"},{"id":4,"title":"Mochi","sex":"MALE","age":10,"description":"Mochi is the perfect \"rubbery ducky\" debugging pup, always listening.","dogImage":"/images/dog/p4.jpeg"},{"id":5,"title":"Brewery","sex":"FEMALE","age":12,"description":"Brewery loves fetching you your favorite homebrew.","dogImage":"/images/dog/p5.jpeg"},{"id":6,"title":"Lucy","sex":"FEMALE","age":8,"description":"Picture yourself in a boat on a river, Lucy is a pup with kaleidoscope eyes.","dogImage":"/images/dog/p6.jpeg"},{"id":7,"title":"Astro","sex":"MALE","age":10,"description":"Is it a bird? A plane? No, it's Astro blasting off into your heart!","dogImage":"/images/dog/p7.jpeg"},{"id":8,"title":"Boo","sex":"FEMALE","age":9,"description":"Boo is just a teddy bear in disguise. What he lacks in grace, he makes up in charm.","dogImage":"/images/dog/p8.jpeg"},{"id":9,"title":"Pippa","sex":"MALE","age":7,"description":"Pippa likes to look out the window and write pup-poetry.","dogImage":"/images/dog/p9.jpeg"},{"id":10,"title":"Coco","sex":"FEMALE","age":10,"description":"Coco enjoys getting pampered at the local puppy spa.","dogImage":"/images/dog/p10.jpeg"},{"id":11,"title":"Brody","sex":"MALE","age":13,"description":"Brody is a good boy, waiting for your next command.","dogImage":"/images/dog/p11.jpeg"},{"id":12,"title":"Stella","sex":"FEMALE","age":14,"description":"Stella! Calm and always up for a challenge, she's the perfect companion.","dogImage":"/images/dog/p12.jpeg"}]


function write()
{
    
    for (i in animals) {
    
        for (key in animals[i]) {
        console.log(key + ": " + animals[i][key] + ", ");
        }
      }
}

write();
