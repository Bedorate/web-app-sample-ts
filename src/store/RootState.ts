import { IauthState } from "./auth/models";
import { IcommonState } from "./common/models";
import { ICanvasState } from "./canvas/models";
import { IModalState } from "./modal/models";

export interface RootState {
  auth:IauthState;
  common:IcommonState;
  canvas:ICanvasState;
  modal:IModalState
}