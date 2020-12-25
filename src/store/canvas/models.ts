export interface ICanvasState {
  canvas: Array<ICanvasForm>;
  canvasList: Array<Object>;
  currentDocId: string;
}

export interface ICanvasForm{
  id: number;
  value: any;
  keyName: string;
  label: string;
  formType: string;
}

export class CanvasState implements ICanvasState {
  canvas = [
    {
      id: 1,
      label: "テキスト",
      keyName: "text",
      value: "",
      formType: "TextField",
    },
    {
      id: 2,
      label: "フォントサイズ",
      keyName: "fontSize",
      value: NaN,
      formType: "NumberField",
    },
    {
      id: 3,
      label: "色",
      keyName: "color",
      value: "",
      formType: "TextField",
    },
    {
      id: 4,
      label: "背景色",
      keyName: "backgroundColor",
      value: "",
      formType: "TextField",
    },
  ];
  canvasList = [];
  currentDocId = "";
}