export interface IModalState {
  state: boolean;
  path: String;
}

export class ModalState implements IModalState {
  state = false;
  path =""
}