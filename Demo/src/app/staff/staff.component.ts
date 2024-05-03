import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { StaffService } from './staff.service';
import { HttpClient } from '@angular/common/http';
import { Staff } from './staff.types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddStaff } from './popupAddStaff.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [MatTableModule, FormsModule, CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})

export class StaffComponent {
  displayedColumns: string[] = ['id', 'fullName', 'shortName'];
  listData: Staff[] = [];
  search: string = "";

  constructor(private staffService: StaffService, public dialog: MatDialog) {
    this.getData();
  }

  onKeyUpSearch(event:any){
    console.log("ok")
  }

  enterActionSearch(){
    this.getData();
  }

  openDialogAdd(): void {
    let dialogRef = this.dialog.open(PopupAddStaff, {
      width: '550px',
      data: {
        type: "Add",
        fullName: "",
        shortName: "",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  openDialogEdit(staff:Staff): void {

    let dialogRef = this.dialog.open(PopupAddStaff, {
      width: '550px',
      data: {
        type: "Edit",
        id: staff.id,
        fullName: staff.fullName,
        shortName: staff.shortName,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  getData() {
    this.staffService.getData(this.search).subscribe((res: any) => {
      this.listData = res
    })
  }

  onClickDelete(id: number) {
    Swal.fire({
      // title: 'Are you sure?',
      text: 'Are you sure you would like to remove this staff?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.staffService.delete(id).subscribe();
        this.listData = this.listData.filter(f => f.id !== id);
        Swal.fire(
          'Removed!',
          'Item removed successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }
}
