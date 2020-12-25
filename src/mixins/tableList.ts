interface IhomeTabel{
  label: String
  key:String
  width: number
  visible: boolean
}

export const HOME_LIST: IhomeTabel[]=[
  {
    label:'テキスト',
    key: 'text',
    width: 25,
    visible:true
  },
  {
    label:'フォントサイズ',
    key: 'fontsize',
    width: 25,
    visible:true
  },
  {
    label:'色',
    key: 'color',
    width: 25 ,
    visible:true
  },
  {
    label:'背景色',
    key: 'backgroundColor',
    width: 25,
    visible:true
  }
]