import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Staff } from './staff.types';
import Swal from 'sweetalert2';
import { StaffService } from './staff.service';


@Component({
    selector: 'popupAdd',
    standalone: true,
    imports: [MatTableModule, FormsModule, CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
    templateUrl: 'popupAddStaff.component.html',
    styleUrls: ['popupAddStaff.component.scss'],
})
export class PopupAddStaff {
    type: string = "";
    staff: Staff = {
        id: 0,
        fullName: "",
        shortName: "",
    };
    constructor(
        public dialogRef: MatDialogRef<PopupAddStaff>,
        @Inject(MAT_DIALOG_DATA) public data: any, private staffService: StaffService) {

        this.type = data.type;
        if (this.type === "Edit") {
            this.staff.id = data.id;
            this.staff.fullName = data.fullName;
            this.staff.shortName = data.shortName;
        }
    }

    onCloseDialog() {
        this.dialogRef.close(false)
    }

    onSaveData() {
        if (!this.staff.fullName || !this.staff.shortName) {
            Swal.fire('Please enter complete information', '', 'warning');
            return
        }

        if (this.type === "Add") {
            this.staffService.create(this.staff).subscribe(r => {
                Swal.fire('Save item successfully', '', 'success');
                this.onCloseDialog();
            },
                error => {
                    Swal.fire('Save item error', '', 'error');
                }
            )
        }

        if (this.type === "Edit") {
            this.staffService.update(this.staff.id, this.staff).subscribe(r => {
                Swal.fire('Save item successfully', '', 'success');
                this.onCloseDialog();
            },
                error => {
                    Swal.fire('Save item error', '', 'error');
                }
            )
        }
    }
}
