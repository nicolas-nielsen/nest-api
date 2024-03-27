import { v4 as uuid } from 'uuid';

export class User {
  constructor(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
  ) {
    this.id = uuid();
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.roles = ['ROLE_USER'];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  id: string;
  roles: string[];
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
