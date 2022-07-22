import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private iniciosesion:LoginService) { }
  usuario:string = ""
  password:string = ""
  data:any[] = []

  ngOnInit(): void {
    console.log('Bienvenido a login')
  }

  iniciar(){
    this.data.push(this.usuario,this.password)
    localStorage.setItem('data',JSON.stringify(this.data))
    var post = {
      host:this.iniciosesion.urlLocal,
      path:'/login',
      data:{
        usuario:this.usuario,
        password:this.password

      }
    }
    this.iniciosesion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log
    })
  }


}
