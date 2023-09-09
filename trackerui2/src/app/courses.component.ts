import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
   selector: 'courses', // makes <courses> available for use
   template: `
	<h2>{{ title }}</h2>
	<ul>
	    <li *ngFor="let course of courses">
		{{ course }}
	    </li>
        </ul>
   `
})
export class CoursesComponent {
   title = "List of courses";
   courses;
   constructor(service: CoursesService){
	this.courses = service.getCourses();
   }

}
/* ngFor is a Directive. In Angular, a directive is a way to modify the DOM.
   The * before the ngFor is to signify that you are modifying the DOM structure by adding or removing an element.

   The constructor takes in a service of type CoursesService. This is injected by the Dependency Injection framework of Angular,
   which is set in providers in NgModule of app.module.ts
   
*/

