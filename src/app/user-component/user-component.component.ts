import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  listOfUsers : User[] = [];
  listOfColumn: any= [
    {
      title: 'first Name',
      compare: (a: User, b: User) => a.firstName.localeCompare(b.firstName),
      priority: 3
    },
    {
      title: 'last Name',
      compare: (a: User, b: User) => a.lastName.localeCompare(b.lastName),
      priority: false
    },
    {
      title: 'user Name',
      compare: (a: User, b: User) => a.userName.localeCompare(b.userName),
      priority: 2
    },
    {
      title: 'email',
      compare: (a: User, b: User) => a.email.localeCompare(b.email),
      priority: 1
    },
    {
      title: 'creation Date',
      compare: (a: User, b: User) => a.creationDate.localeCompare(b.creationDate),
      priority: false
    },
    {
      title: 'active',
      compare: (a: User, b: User) => a.active.localeCompare(b.active),
      priority: false
    }    
  ];

  constructor(private userServiceService:UserServiceService){}
  
  ngOnInit(){
    this.userServiceService.getWithPagination().subscribe(
      (response : any)=>{
        if (response && response.data && response.data.content) {
          this.listOfUsers = response.data.content;
        }else{
          console.error('Invalid API response format:', response);
        }
        (error: any) => {
          console.error('Error fetching users:', error);
        }
      }
    )
  }


  getAll(): void{
    this.userServiceService.getAll().subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getTest():void{
    this.userServiceService.getTest().subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getWithPagination():void{
    this.userServiceService.getWithPagination().subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getUserWithId(Id: string): void{
    this.userServiceService.getUserWithId(Id).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  deleteUserWithId(Id: string): void{
    this.userServiceService.deleteUserWithId(Id).subscribe(
      () => {
        this.listOfUsers = this.listOfUsers.filter(
          user => user.id !== Id);
      },
      (error: any) => {
        console.error('Error deleting user:', error);
      }
    )
  }

}
