import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
   selector: 'courses', // makes <courses> available for use
   template: `
	<h2>{{ title }}</h2>  <!-- this is called property binding. This is one way though. -->
   <h2 [textContent]="title"></h2> <!-- This is called attribute binding. This achieves the same as {{ title }} above, but through a different way.  -->

   <table>
      <tr>
      <!-- Sometimes attribute bindng won't work, since the binding is actually to DOM and not to the HTML itself. Example: -->
      <!-- <td [colspan]="colSpan"></td> This fails, because colspan is not a known property of td in DOM, although it is known in HTML -->
      <!-- To specify that you want to bind to HTML, use attr, as shown below-->
      <td [attr.colSpan]="colSpan"></td>
      </tr>
   </table>

   <!-- This is an example of class binding. We can dynamically set a class to be included or not using a way similar to attribute binding-->
   <button class="btn btn-primary" [class.active]="isActive">
      ClassBindingExample
   </button>
   <!-- This is an example of style binding. We can dynamically set a class value using ways similar to attribute binding-->
   <button [style.backgroundColor]="isActive ? 'blue' : 'red'">
      StyleBindingExample
   </button>

   <!-- This is an example of how we can do a loop -->
   <ul>
	    <li *ngFor="let course of courses">
		   {{ course }}
	    </li>
       <img src="{{ imageUrl }}" />
   </ul>
   `
})
export class CoursesComponent {
   title = "List of courses";
   courses;
   colSpan = 20;
   imageUrl = "https://loremflickr.com/640/360"
   isActive = false
   constructor(service: CoursesService) {
      this.courses = service.getCourses();
   }
}
/* ngFor is a Directive. In Angular, a directive is a way to modify the DOM.
   The * before the ngFor is to signify that you are modifying the DOM structure by adding or removing an element.

   The constructor takes in a service of type CoursesService. This is injected by the Dependency Injection framework of Angular,
   which is set in providers in NgModule of app.module.ts
   
*/

