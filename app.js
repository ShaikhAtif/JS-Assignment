// chapter 01
// Q01
// alert("hello world");

//Q02
// alert("Error! please enter a valid password");

//Q03
// alert("welcome to JS land! \nHappy Coding!");

//Q04
// alert("welcome to JS land");
// alert("Happy coding!");

//Q05
// alert("hello, i can run JS through web browser console!");


// chapter 02
// Q01
// var username = null;

//Q02
// var myname ="syed aashir majeed";

//Q03
// var message ="hello world";
// alert(message);

//Q04
// var name ="syed aashir majeed";
// var age = "19 year old";
// var course = "certified web app dev";
// alert(name);
// alert(age);
// alert(course);

//Q05

// var name = "pizza";
// alert(name+"\n"+name.slice(0,4)+"\n"+name.slice(0,3)+"\n"+name.slice(0,2)+"\n"+name.slice(0,1));

//Q06
// var email = "syedaashir120@gmail.com"
// alert("my email address is "+email);

//Q07
// var book = "A smarter way to learn JavaScript";
// alert("i am trying to learn from the book "+book);

//Q08
// document.write("yeah i can write HTML content through javascript");

//Q09
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");



//chapter 03
//Q01
// var age ="19 years old";
// alert(age);

//Q02
// var N = 14;
// alert("you have visited this site "+N+" times");

//Q03
// var birthyear = 2001;
// document.write("my birth year is "+birthyear);
// document.writeln("data type of my birth variable is number");

//Q04
// var visitorName = "Aashir";
// var product = "T shirt(s)";
// var quantity = 5;
// document.write(visitorName+" ordered "+quantity+" "+product+" on XYZ clothing store");


//chapter 04
//Q01
// var one,_1,$hello;
// var one,ONE,_1,$1,oneTwo,x,X;
// var 1,var,1one,1_,#_;

//chapter05
//Q01
// var x = +prompt("enter num one:");
// var y = +prompt("enter num two:");
// var sum = x+y;
// document.write("sum of"+x+" and "+y+" is "+sum);


//Q02
// var x = +prompt("enter num one:");
// var y = +prompt("enter num two:");
// var sum = x+y;
// var minus = x-y;
// var div = x/y;
// var mul = x*y;
// document.write("sum of"+x+" and "+y+" is "+sum);
// document.write("minus of"+x+" and "+y+" is "+minus);
// document.write("div of"+x+" and "+y+" is "+div);
// document.write("mul of"+x+" and "+y+" is "+mul);

//Q03
// var x;
// document.write("value after declaratio is: "+x);
// x = 5;
// document.write("<br>initial value "+x);
// x++;
// document.write("<br>value after increment is "+x);
// x+=7;
// document.write("<br>value after addition is "+x);
// x--;
// document.write("<br>value after decrement is "+x);
// x= x%3;
// document.write("<br>the remainder is "+x);


//Q04
// var cost = 600;
// cost*=5;
// document.write("total cost to buy 5 tickets to a movie is "+cost);

//Q05
// var table = 4;
// for (var i = 1; i <=10; i++) {
//     document.write(table+" * "+i+" = "+(table*i)+"<br>");
    
// }

//Q06
// var celcius = 25;
// var ferhen = 70;
// var converttofarhen = (celcius*(9/5)+32);
// var convertocelcius = (ferhen-32)*5/9;   
// document.write(celcius+"C is "+converttofarhen+"F<br>");
// document.write(ferhen+"F is "+convertocelcius+"C");


//Q07
// var item1 = 650;
// var item2 = 100;
// var quant1 = 3;
// var quant2 = 7;
// var charges = 100;
// var total = (item1*quant1)+(item2*quant2)+charges;
// document.write("total cost of your order is "+total);


//Q08
// var total = 980;
// var obtained = 804;
// var percentage = (obtained/total)*100;
// document.write("percentage is "+percentage);

//Q09
// var dollar = 104.80;
// var riyal = 28;
// var total = (dollar*10)+(riyal*25);
// document.write("total pakistani currency is "+total);

//Q10
// var num = 1;
// (((num+5)*10)/2);

//Q11
// var current = 2016;
// var birthyear = 1992;
// var age = current-birthyear;
// document.write("your age: "+age);

//Q12
// var radius = 20;
// var pi = 3.142;
// var circumference = (2*pi*radius);
// var area = pi*(radius*radius);
// document.write("radius is "+radius);
// document.write("<br>circumference of circle is "+circumference);
// document.write("<br>area of circle is "+area);

//Q13
// var fav = "choco chip";
// var current = 15;
// var max = 65;
// var amount = 3;
// var total = (max-current)*amount;
// document.write("you will need "+total+" "+fav+" to last you untill the ripe of old age of "+max);



//chapter06
//Q01
// document.write("Result");
// var a = 10;
// document.write("<br>the value of a is "+a);
// document.write("<br>_________________________");
// document.write("<br>the value of ++a is :"+(++a));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br>the value of a++ is: "+(a++));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br>the value of --a is: "+(--a));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br>the value of a-- is: "+(a--));
// document.write("<br>Now the value of a is: "+a);

//Q02
// var a = 2;
// var b= 1;
// var result = --a - --b + ++b + b--;
// --a;
// var num1 = (--a - --b );
// var num2 = (--a - --b + ++b);
// var rsult = (--a - --b + ++b +b--);
// document.write("a is "+num1);
// document.write("<br>b is "+num2);
// document.write("<br>result is "+rsult);


//Q03
// var name = prompt("enter user name ");
// alert("hello "+name);

//Q04
// var table = +prompt("enter table number");
// var num = 0;
// if (table ==0){
//     num = 5;
// }
// else{
//     num = table;

// }
// for (var i = 1; i <=10; i++) {
//     document.write(num+" * "+i+" = "+(num*i)+"<br>");

// }

//Q05
// var subject1 = prompt("enter subject 1");
// var subject2 = prompt("enter subject 2");
// var subject3 = prompt("enter subject 3");
// var total = 100;
// var mark1 = +prompt("enter mark for subject 1");
// var mark2 = +prompt("enter mark for subject 2");
// var mark3 = +prompt("enter mark for subject 3");
// var perc1 = (mark1/total)*100;
// var perc2 = (mark2/total)*100;
// var perc3 = (mark3/total)*100;
// var obt  = mark1+mark2+mark3;
// var perc = (obt/300)*100;
// document.write("Subject  Total Marks  obtained marks  percentage");
// document.write("<br>"+subject1+"\t\t  "+mark1+"\t\t  "+perc1);
// document.write("<br>"+subject2+"\t\t  "+mark2+"\t\t  "+perc2);
// document.write("<br>"+subject3+"\t\t  "+mark3+"\t\t  "+perc3);
// document.write("<br>\t\t"+300+"\t\t"+obt+"\t\t"+perc);

//Q06


//  CHAPTER 12 TO 13


// QUESTION 1
// var  x = prompt("Enter char: ");
// if(x>="A" && x<="Z")
// {document.write(x+" Character is UpperCase ")}
// else if (x>="a" && x<="z"){document.write(x+" Character is LowerCase ")}
// else if (x>="0" ){document.write(x+"  is a number ")}



// // QUESTION 2
// var  x = prompt("Enter first number: ");
// var y = prompt("Enter second number: ");
// if(x>y){document.write(x+" is greater")}
// else if( x==y){document.write("both are equal x = ",x," y = ",y)}
// else{document.write(y+" is greater")}



// QUESTION 3
// var  x = prompt("Enter char: ");
// if(x>"0")
// {document.write(x+" is a positive number")}
// else if (x<"0"){document.write(x+" is a Negative number ")}
// else if (x=="0" ){document.write(x+"  is zero ")}


// QUESTION 4
// var  x = prompt("Enter char: ");
// if(x=="a" || x=="A"  ||  x=="e" || x=="E"  ||  x=="I" || x=="i"  ||  x=="o" || x=="O"  ||  x=="u" || x=="U" ){document.write(x+" is a vowel ")}
// else{document.write(x+" is not a vowel")}



// QUESTION 5
// var pass = "saylani";
// var x = prompt("Enter Password: ");
// if(x===pass){document.write("Correct Password")}
// else if(x==""){document.write("Please enter password: ")}
// else{document.write("Incorrect")}



// QUESTION 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// {
// greeting = "Good evening";
// }


// // QUESTION 7
// var h = prompt('Enter Hour: ');
// if(h.slice(0,2)>12 && h.slice(0,2)<=24)
// {
// document.write((h.slice(0,2)-12)+":"+h.slice(2,4)+"am");
// }
// else if(h.slice(0,2)>=0 && h.slice(0,2)<=12){
//     document.write((h.slice(0,2))+":"+h.slice(2,4)+"pm");
// }


//  CHAPTER 14 TO 16


// Question 1
// var array = []
// array = new Array();


// Question 2
// var array = new Array();


// Question 3
// var uni = ["NED", "KIET", "CBM"];


// Question 4
// var uni = [1,2,3];



// Question 5
// var boolArray = [true,false];




// Question 6
// var mix = ["alex", 1, true];




// Question 7
// var mix = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
// for (var i=0; i<=mix.length-1;i++){
//     document.write(mix[i]+"<br>")
//}


// Question 8

// var students = ["ali","ahsan","harry"];
// var marks = [300,350,400];
// for (var i=0; i<=students.length-1;i++)
// {
//     document.write("Score of "+students[i]+" is "+marks[i]+" Percentage is: "+marks[i]/500*100  +"% <br>");
// }

// QUESTION 9 A
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a colour in beginning: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.unshift(x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 




// Question 9 B
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a colour in last: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.push(x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// // Question 9 C
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a first colour in beginning: ")
// var y = prompt("Enter a second colour in beginning: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.unshift(x);
// colors.unshift(y);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// Question 9 D
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.shift()
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 


// Question 9 E
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.pop()
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// Question 9 F
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// x=prompt("Enter index: ")
// y= prompt("Enter color: ")
// colors.splice(x,0,y);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 


// Question 9 G
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// x=prompt("enter index  ")
// y= prompt("Enter color: ")
// colors.splice(x,x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// }

// Question 10

// var score=[230,435,453,234,231];
// score.sort();
// console.log(score);

// Question 11

// var word =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var word2=word.slice(2,4);
// console.log(word);
// console.log(word2);

// Question 12

// var arr=["This","is","my","cat"];
// var arr1=arr.join(" ");
// console.log(arr1);

// Question 13

// var arr=[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");
// console.log("Out: ")
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// Question 14

// var arr=[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");
// arr.reverse();
// console.log("Out: ")
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// Question 15

// var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write(arr[0],);
// document.write("\n");
// document.write(arr[1]);
// document.write("\n");
// document.write(arr[2]);
// document.write("\n");
// document.write(arr[3]);
// document.write("\n");
// document.write(arr[4]);
// document.write("\n");
// document.write(arr[5]);

// CHAPTER 17 TO 20

// Question 1

// var Arr=[[1,2],[3,4],[5,6]];

// Question 2

// var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// Question 3

// for (let index = 1; index < 11; index++) {
//     console.log(index);
//      }

// Question 4

// var num=prompt("Enter Number");
// var len=prompt("Enter Length");

// for (let index = 1; index <= len; index++) {
//     console.log(num," * ",index," = ",num*index);
// }

// Question 5

// var fruits=["apple","banana","mango","orange","strawberry"]
// for (let index = 0; index < fruits.length; index++) {
//     console.log("Element at Index ",index," is ",fruits[index]);
    
// }

// Question 6

// console.log("Counting : \n");
// var Result="";
// for (let index = 1; index < 16; index++) {
//     Result=Result+index;   
//     Result=Result+", "
// }
// console.log(Result);

// Result="";
// console.log("Reversed Counting : \n");
// for (let index = 10; index > 0; index--) {
//     Result=Result+index;   
//     Result=Result+", "
// }
// console.log(Result);

// Result="";
// console.log("Even Counting : \n");
// for (let index = 0; index <= 20; index++) {
//     if (index%2==0) {
//     Result=Result+index;   
//     Result=Result+", ";   
//     }
// }
// console.log(Result);

// Result="";
// console.log("Odd Counting : \n");
// for (let index = 0; index <= 20; index++) {
//     if (index%2!=0) {
//     Result=Result+index;   
//     Result=Result+", ";   
//     }
// }
// console.log(Result);

// Result="";
// console.log("Series : \n");
// for (let index = 2; index <= 20; index++) {
//     if (index%2==0) {
//     Result=Result+index;   
//     Result=Result+"k, ";   
//     }
// }
// console.log(Result);

// Question 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var B=prompt("What u want in our Bakery"); 
// var flag=0;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]==B) {
//         console.log(B," is available at index ",index);
//         flag=1;
//         break
//     } 
// }
// if (flag==0) {
//     console.log(B," is not available at out store");
// }

// Question 8

// var A = [24, 53, 78, 91, 12];
// var a=0;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]>a) {
//         a=A[index]
//     }
    
// }
// console.log("The Largest Number is ",a);

// Question 9

// var A = [24, 53, 78, 91, 12];
// var a=1000;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]<a) {
//         a=A[index]
//     }
    
// }
// console.log("The Smallest Number is ",a);

// Question 10

// var Result="";
// for (let index = 1; index <= 100; index++) {
//     if (index%5==0) {
//     Result=Result+index;   
//     Result=Result+", "   
//     }
// }
// console.log(Result);
