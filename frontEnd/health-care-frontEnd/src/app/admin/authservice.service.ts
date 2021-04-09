import { Injectable } from '@angular/core';

export interface User {
  username: string;
  password: string;
  admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  user1: User = {username: 'test1', password: 'test1', admin: false};
  user2: User = {username: 'test2', password: 'test', admin: true};


}
