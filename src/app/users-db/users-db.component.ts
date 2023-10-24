import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-db',
  templateUrl: './users-db.component.html',
  styleUrls: ['./users-db.component.css']
})
export class UsersDbComponent {
  
  list:User[];
  //injecter le service ActivatedRoute 
  constructor(private ac:ActivatedRoute, private us:UserService){}

  ngOnInit(){ 
     //méthode appelé juste après la création du composant
    const users= this.us.getAllUsers().subscribe(res=>this.list=res);
  }

users : [];
delete(i:number): void{
  this.list.splice(i,1);
}
add(){

  let u =new User();
  u.firstName="f1"
  this.us.addUser(u).subscribe();
  console.log("working" );

}

}
