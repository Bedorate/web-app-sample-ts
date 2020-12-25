export interface IauthState {
  user: Object
  state: Boolean
}

export class AuthState implements IauthState {
  user = {}
  state = false;
}