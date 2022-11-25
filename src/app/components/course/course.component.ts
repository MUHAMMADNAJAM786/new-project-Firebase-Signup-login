import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {



constructor(){}

ngOnInit():void{

}
course =[
{ 'id':1, 'name':'Learn Javascript', 'description':'JavaScript is a lightweight interpreted programming language. The web browser receives the JavaScript code in its original text form and runs the script from that  JavaScript is so popular  that is the most used programming language in the worldused as a client-side programming language by 97.0% of all websites ','image':'../../assets/java.webp' },
{ 'id':2, 'name':'Learn TypeScript', 'description':'TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types. TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.,but adds something to it.','image':'../../assets/typescript.jpg' },
{ 'id':3, 'name':'Learn Nodejs', 'description':'Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser.','image':'../../assets/nodejs.jpg' },
{ 'id':4, 'name':'Learn Reactjs', 'description':'The React. js framework is an open-source JavaScript framework and library developed by Facebook. Its used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.','image':'../../assets/reactjs.jpg' }

]
}


