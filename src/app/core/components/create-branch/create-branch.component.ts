import { Component } from '@angular/core';
import { Branch } from '../../services/branch.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrl: './create-branch.component.css'
})
export class CreateBranchComponent {
  branch: Branch= {id:1,name:"", email:"", mob:1234567899, address:""}

}
