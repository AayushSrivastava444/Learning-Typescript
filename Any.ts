var hero : any;
function myHero(){
    return true;
}
 //This is a bad practice as we are using any
hero=myHero()


var hero : String
function myHero(){
    return true;
}
 //This will give false but this is good practice
hero=myHero()

