import { Model, Schema, Document, model } from 'mongoose';
import { UserModel as IUserModel } from './interface/UserModel'


class UserModel {
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

}

export default UserModel;





