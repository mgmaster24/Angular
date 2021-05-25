import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {
  public displayDetails = false;
  public displayDetailsActions: string[] = [];
  public buttonText = 'Display Details';
  constructor() {}

  ngOnInit() {}

  onDisplayDetails(): void {
    this.displayDetails = !this.displayDetails;
    this.buttonText = `${this.displayDetails ? 'Hide' : 'Display'} Details`;
    this.displayDetailsActions.push(`The details were ${this.displayDetails ? 'shown' : 'hidden'} at ${Date.now()}`);
  }

  getDisplayColor(index: number): string {
    if (index >= 4) {
      return 'blue';
    }

    return 'white';
  }
}
