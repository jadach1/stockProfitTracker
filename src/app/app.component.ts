import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(public dialog: MatDialog){}

openContributionForm() {
  const dialogRef = this.dialog.open(ContributionForm);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog results after open: ${result}`);
  });
}
}


@Component({
  selector: 'contribution-form',
  templateUrl: './Forms/contribution-form.html',
})
export class ContributionForm {


}

