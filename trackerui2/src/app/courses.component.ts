import {Component} from '@angular/core';

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
   courses = ["course1", "course3"];
}
/* ngFor is a Directive. In Angular, a directive is a way to modify the DOM.
   The * before the ngFor is to signify that you are modifying the DOM structure by adding or removing an element.
   
*/
