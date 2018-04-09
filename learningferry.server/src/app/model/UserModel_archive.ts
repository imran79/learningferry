import { Model, Schema, Document, model } from 'mongoose';
import { UserModel as IUserModel } from './interface/UserModel'


export class UserModel {
  private _user: IUserModel;
  constructor(model: IUserModel) {
    this._user = model;
  }
  get createdAt(): Date {
    return this._user.createdat;
  }
  get updatedAt(): Date {
    return this._user.updatedat;
  }
  get firstName(): string {
    return this._user.firstname;
  }
  get lastName(): string {
    return this._user.lastname;
  }
  get username(): string {
    return this._user.username;
  }
  get email(): string {
    return this._user.email;
  }
  get password(): string {
    return this._user.password;
  }
  public comparePassword(candidatePassword: string): Promise<boolean> {
    return this._user.comparePassword(candidatePassword);
  }

}

export default UserModel;





