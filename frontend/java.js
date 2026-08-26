

function myfunction1(){
    let x = 5;
    let y = 6;
    let a = 15;
    for(let i = 0; i < 10; i++){
    if(x + y > a){
        document.getElementById("demo1").innerHTML="true";
    }
    else{
        document.getElementById("demo1").innerHTML="false";
    }
}

}
function myfunction(){
    document.getElementById("demo").innerHTML="hello";
}
function myfunction2(){
    let x = 5;
    let y = 6;
    let b = x + y;

    switch(b){
        case 8:document.getElementById("demo2").innerHTML="not true";
        case 9:document.getElementById("demo2").innerHTML="not true";
        case 10:document.getElementById("demo2").innerHTML="not true";
        case 11:document.getElementById("demo2").innerHTML="true";
        
    }
}

function myfunction3(){
  const cars = ["bmw","volvo","benz"];
  document.getElementById("demo3").innerHTML= cars[1];

}

setTimeout(myfunction4, 6000);
function myfunction4(){
  document.getElementById("demo4").innerHTML= "hello wold";
}


const letters = new Set();

const a = "A";
const b = "B";
const c = "c";

letters.add(a);
letters.add(b);
letters.add(c);

function myfunction5(){

class student{
    constructor(name){
        this.student_name = name;
    }
    present(){
        return 'the name of the student is '+ this.student_name;
    }

}

class id extends student{
    constructor(name,id){
        super(name);
        this.student_id=id;
    }
    present1 (){
       return this.present + 'and student id is '+this.student_id;
    }
}

const myinformation = new id("Nagendra Alapati", "1232823");
document.getElementById("demo5").innerHTML= myinformation.present1();
}




/*
if and else
*/
function myfunction8(){
    let x = 5;
    if(x > 0){
        document.getElementById("demo8").innerHTML="a positive";
    }
    else if(x < 0){
        document.getElementById("demo8").innerHTML="a negative";
    }
    else{
    document.getElementById("demo8").innerHTML="a zero";
    }
}

/*
switch case
*/
function myfunction9(){
let day = 3;
switch (day) {
    case 1:
        document.getElementById("demo9").innerHTML="Monday";
        break;
    case 2:
        document.getElementById("demo9").innerHTML="Tuesday";
        break;
    case 3:
        document.getElementById("demo9").innerHTML="Wednesday";
        break;
    case 4:
        document.getElementById("demo9").innerHTML="Thursday";
        break;
    case 5:
        document.getElementById("demo9").innerHTML="Friday";
        break;
    case 6:
        document.getElementById("demo9").innerHTML="Saturday";
        break;
    case 7:
        document.getElementById("demo9").innerHTML="Sunday";
        break;
    default:
        document.getElementById("demo9").innerHTML="not a valid day";
    }
}

/*
while loop
*/
function myfunction10(){
    let count = 1;
    while (count <= 5) {
    document.getElementById("demo10").innerHTML += count + "<br>";
    count++;
}
}
/*
class and objects
*/
function myfunction6(){
    class car{
        constructor(name,model){
            this.car_name=name;
            this.car_model=model;
        }
        present1(){
            return 'the name of the car is '+ this.car_name + ' and model is '+ this.car_model;
        }
    }

    const my_car = new car("bmw","2023")
    document.getElementById("demo6").innerHTML = my_car.present1();
}


/*
inheritance
*/
function myfunction7(){
    class animal {
        constructor(name){
            this.animal_n=name;
        }
        speak(){
            return 'name of the dog is '+ this.animal_n;
        }
    }
    class breed extends animal{
        constructor(name,breed){
            super(name);
            this.dog_breed=breed;
        }
        speak1(){
            return this.speak()+' and the breed of the dog is '+ this.dog_breed;
        }
    }
    class dog extends breed{
        constructor(name,breed,age){
            super(name,breed);
            this.animal_age=age;
        }
        speak2(){
            return this.speak1()+' and its age is '+ this.animal_age;
        }
    }

    const my_dog2 = new dog("suhas","german shepard","2 years");
    document.getElementById("demo7").innerHTML = my_dog2.speak2();
}

function function2(){
    const canvas = document.getElementById("myplot2");
    const ctx = canvas.getContext("2d");
    canvas.height = 400;
    canvas.width = 400;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.transform(1,0,0,-1,0,canvas.height);

    const xArray = [50, 60, 70, 80, 90, 100, 110, 110, 120, 130, 140, 150];
    const yArray= [7,8,8,9,9,9,10,11,14,14,15];

    ctx.fillStyle = 'blue';
    for(let i =0; i< xArray.length-1;i++){
        let x = xArray[i]*400/150;
        let y = yArray[i]*400/15;
        ctx.beginPath();
        ctx.ellipse(x,y,3,3,0,0,2*Math.PI);
        ctx.fill()
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform for labels
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
}

function myfunction12(){
    const xArray = ["a","b","c","d","e"];
    const yArray = ["10","20","30","40","50"];

    const data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        orientation: "v",
        marker: {
            color: "black"
        }
    }];
    const layout ={
        title: " bar chat"
    };
    plotly.newPlot("myplot",data, layout);
}

function function1() {
    const xArray = ["a", "b", "c", "d", "e"];
    const yArray = ["10", "20", "30", "40", "50"];
    const data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        orientation: "v",
        marker: {
            color: "black"
        }
    }];
    const layout = {
        title: "Bar Chart"
    };
    Plotly.newPlot("myPlot", data, layout);
}
function function2(){
    const xArray = ["a", "b", "c", "d", "e"];
    const yArray = ["10", "20", "30", "40", "50"];
    const data = [{
        lables: xArray,
        values: yArray,
        type: "pie",
    }];
    const layout = {
        title: "pie Chart"
    };
    Plotly.newPlot("myPlot2", data, layout);
}

function function3(){
    let exp = "Math.sin(x)";
    const xvalues = [];
    const yvalues = [];
    for(let x = 0; x <= 10; x += 0.1){
        xvalues.push(x);
        yvalues.push(eval(exp));
    }
    const data = [{
        x: xvalues,
        y: yvalues,
        mode: 'lines',  
        line: {
            color: 'blue',
            width: 2
        }
    }];

    const layout = {
        title: "y = " + exp,
        xaxis: {
            title: "x"
        },
        yaxis: {
            title: "y"
        }
    };
    
    Plotly.newPlot("myPlot3", data, layout);  
}

function function4(){
    let exp = "Math.tan(x)";
    const xvalues = [];
    const yvalues = [];
    for(let x = 0; x <= 10; x += 0.1){
        xvalues.push(x);
        yvalues.push(eval(exp));
    }
    const data = [{
        x: xvalues,
        y: yvalues,
        mode: 'lines',  
        line: {
            color: 'blue',
            width: 2
        }
    }];

    const layout = {
        title: "y = " + exp,
        xaxis: {
            title: "x"
        },
        yaxis: {
            title: "y"
        }
    };
    
    Plotly.newPlot("myPlot4", data, layout);  
}

function function5(){
    const xArray = [10,20,30,40,50,60,70,80,90,100,110];
    const yArray = [1,2,2,3,3,3,4,5,6,6,7];
    const data = [{
        x: xArray,
        y: yArray,
        mode: "lines",
    }];

    const layout = {
        xaxis:{range: [1,120], title:"square meters"},
        yaxis:{range: [0,8], title:"price"},
        title: "Chart"
    };

    Plotly.newPlot("myPlot5", data, layout);
}

function function6(){
    const xArray = [10,20,30,40];
    const yArray = [100,200,300,400];
    const trace1 = {
        x: xArray,
        y: yArray,
        mode: 'markers',
        marker: {
        color:['orage','red','blue','green'],
        size:[200,300,400,500]
        }
    };
    const trace2 = {
        x: [10,20,30,40],
        y: [150,300,450,600],
        mode: 'markers',
        marker:{
        color: 'black',
        size:18,
        Symbol : ['circle','square','diamond','cross']
        }
    };

    const data =[trace1,trace2];

    const layout = {
        title: 'scatter plot'
    };

    plotly.newPlot('myPlot6', data, layout);
}