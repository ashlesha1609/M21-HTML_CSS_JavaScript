import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<div>
               
                   Welcome to {{name}}
                   {{hello()}}
                   <!--Example on ngif--else


                   <!--<h4 *ngIf="false; else elseBlock">Congratulations</h4>
                   <ng-template #elseBlock>
                   <h4>Name is hidden</h4>
                   </ng-template>

                   <!---property Binding--->
        
                   <input [id]="MyId" type="text" value="Ashlesha">
                   <!--<input [disabled]="true"id="{{MyId}}" type="text" value="Ashlu">

                   <!---Event Binding--->
                   <button (click)="onClick()">Submit</button>
                   <!---Two-Way Binding--->
                   <!--<input type="text" [(ngmodel)]="name">-->

                   <!--Example on Switch case-->
                   <!--div [ngSwitch]="color">
                      <div *ngSwitchCase="'green'">its Green</div>
                      <div *ngSwitchCase="'blue">its Blue</div>
                      <div *ngSwitchCase="'red'">its Red</div>
                      <div *ngSwitchDefault>Invalid Input</div>

                   </div>-->

                   <div *ngFor="let color of colors ; index as i">
                   <h4>{{i}} {{color}}</h4>
                   </div>


                
            </div>
            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="TNS India";
  public MyId="testId";
  public colors=["blue","red","white","yellow"]
  constructor() { }

  ngOnInit(): void {
  }
hello()
{
  return "C2CT Program";
}
onClick()
{
  console.log("Congratulations Ashlesha!")
}
}
