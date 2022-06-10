import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  private user?: User;

  signIn(username: string, password: string) {
   
    // קריאת שרת
    // הסרוויס httpClient מבצע קריאות שרת
    // הוא מכיל את כל הפונקציות הבסיסיות
    // מהפונקציות חוזר ערך שנקרא observable
    // שזו הצורה הקלאסית באנגולר לניהול פעולות אסינכרוניות
    // בשביל לקבל את הערך שחוזר, יש להרשם ל observable 
    // ע"י הפונקציה subscribe
    // יש לשים לב, שללא רישום זה, גם הקריאה עצמה לא תתבצע
    // הפונקציה subscribe מקבלת אובייקט שנקרא observer
    // לאוביקט זה יש כמה מאפיינים:
    // next - פונקציה שתיקרא בכל פעם שמגיע מידע חדש
    // error - פונקציה שתיקרא בכישלון
    // complete - פונקציה שתיקרא כאשר הנתונים סיימו להישלח ולא ישלחו יותר נתונים
    this.httpClient.post(`${this.config.baseUrl}/user/signin`, { username, password }).pipe(
      retry(5)
    )
    .subscribe({
      next: (data) => {
      console.log('success', data);
      this.user = data as User;
      this.router.navigateByUrl('/');
    },
      error: (error) => {
      console.error('error', error);
    },
     complete: () => {
      console.log('completed!')
    },    
  });

    
  }

  getUser() {
    return this.user;
  }

  constructor(private router: Router, private httpClient: HttpClient, private config: ConfigService) { 
   
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('in can activate', route, state);
    if (this.user) {
      return true;
    }
    return this.router.parseUrl('/sign-in');
  }
}
