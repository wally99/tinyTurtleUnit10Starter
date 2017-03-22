TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(40);
right(90);
forward(40);
right(90);
forward(40);
right(90);
forward(40);
right(90);
forward(40);
}

function triangle(x){
right(30);
forward(x);
right(120);
forward(x);
right(120);
forward(x);
}

function rectangle(x,y){
forward(x);
right(90);
forward(y);
right(90);
forward(x);
right(90);
forward(y);

}
//triangle(70);
//square(70);
rectangle(40,100);

function pentagon(size){
right(30);
forward(size);
right(120);
forward(size);
right(30);
forward(size);
right(90)
forward(size);
right(90);
forward(size);

}
//pentagon(50);





