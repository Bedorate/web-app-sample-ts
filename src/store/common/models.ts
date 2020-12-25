export interface IcommonState {
  selectedTab: number;
}

export class CommonState implements IcommonState {
  //このしたのやつをstateといいます。jsのdataと同じです。
  //IcommonStateを元に、CommonStateを作りますって意味
  selectedTab = 1;
}
