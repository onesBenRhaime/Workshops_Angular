import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, interval } from 'rxjs';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent {
list:User[];
  //injecter le service ActivatedRoute 
constructor(private ac:ActivatedRoute, private us:UserService){}

ngOnInit(){ //méthode appelé juste après la création du composant
  console.log("je suis ngOnInit");
  console.log(this.us.getNb());
  //  const users =this.us.getAllUsers();
    console.log("service .... ");  console.log("reture de l'API : ******");
 const users= this.us.getAllUsers().subscribe(res=>this.list=res);
  console.log("reture de l'API : ******");
//exemple1: avec snapshot
  //console.log(this.ac.snapshot.params['category']);
  //this.category=this.ac.snapshot.params['category'];
  //exemple2: avec paramMap
  this.ac.paramMap.subscribe(res=>{console.log(res.get('category')); this.category=res.get('category')});

}

 category : string = "";
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