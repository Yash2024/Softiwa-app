import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

export interface Branch {
  id: number;        
  name: string;      
  address: string;
  email: string;  
  mob: number;
}

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor() { }
}
