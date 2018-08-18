export class User {
  _id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  token?: string;
  isAdmin: boolean;
}

export class Authentication {
  username: string;
  password: string;
}
