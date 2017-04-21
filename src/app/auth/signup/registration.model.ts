/**
 * Created by mpelipas on 4/2/2017.
 */

export class Registration {
  public id:string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;


  constructor(id: string, firstname: string, lastname: string, email: string, password:string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}
