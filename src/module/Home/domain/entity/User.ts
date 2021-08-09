export class User {
  public id: number;
  public name: string;
  public lastname: string;
  public email: string;
  public avatar: string;

  constructor(user: User) {
    this.id         = user.id;
    this.name       = user.name;
    this.lastname   = user.lastname;
    this.email      = user.email;
    this.avatar     = user.avatar;
  }
}
