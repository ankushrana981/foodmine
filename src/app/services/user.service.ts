import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../components/shared/models/user';
import { IUserLogin } from '../components/shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../components/shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { UserRegister } from '../components/shared/interfaces/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable!: Observable<User>
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(tap({
      next: (user: any) => {
        this.setUserToLocalStorage(user.data)
        console.log(user.data, "user deatils")
        this.userSubject.next(user.data);
        this.toastrService.success(
          `Welcome to FoodMine ${user.data.name}`,
          'Login Successful'
        )
      },
      error: (errorResponse) => {
        this.toastrService.error(
          errorResponse.error.message, 'Login Failed'
        )
      }
    }))
  }
  register(userRegister: UserRegister):Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(tap({
    next:(user:any)=>{
      this.setUserToLocalStorage(user.data);
      this.toastrService.success(
        `Welcome to FoodMine ${user.data.name}`,
        'Login Successful'
      )
    },
    error: (errorResponse) => {
      this.toastrService.error(
        errorResponse.error.message, 'Login Failed'
      )
    }
    }
    ))
  }
  logout(){
    this.userSubject.next(new User());
    if(typeof window !== "undefined"){
    localStorage.removeItem('User');
    }
    window.location.reload();
  }

  setUserToLocalStorage(user:User){
    const userJSON = JSON.stringify(user) 
    if(typeof window !== "undefined"){
      localStorage.setItem('User', userJSON);
    }
  }
  getUserFromLocalStorage(){
    if(typeof window !== "undefined"){
    const userJson = localStorage.getItem('User');
    return userJson? JSON.parse(userJson): new User();
  }
}
}
