import { Component, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
type UserType = {
  readonly id: number;
  name: string;
  isActive: boolean;
  additionalInfo: string;
  status?: 'active' | 'inactive';
};
@Component({
  selector: 'app-listuser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.css'
})
export class ListuserComponent {
  users: Signal<UserType[]> = signal([
    { id: 1, name: 'Alice', isActive: true, additionalInfo: 'Others Infos', status: 'active' },
    { id: 2, name: 'Bob', isActive: false, additionalInfo: 'Nothing' },
    { id: 3, name: 'Charlie', isActive: true, additionalInfo: 'Nothing' }
  ]);
}
