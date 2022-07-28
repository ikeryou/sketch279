import { Conf } from "../core/conf";
import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Util } from "../libs/util";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _item:Array<Item> = [];

  constructor(opt:any) {
    super(opt)

    const colors = [
      '#FFF',
      // '#7E1CF1',
      // '#203283',
      // '#E5412C',
      // '#2EA5BF',
      // '#FDE918',
    ]

    const num = Conf.instance.ITEM_NUM;
    for(let i = 0; i < num; i++) {
      const itemEl = document.createElement('span');
      itemEl.classList.add('item');
      this.getEl().append(itemEl);

      const item = new Item({
        id:i,
        el:itemEl,
        // txt:Util.instance.randomArr(),
        txt:Util.instance.randomArr(['🥰','💀','✌️','🌴','🐢','🐐','🍄','⚽','🍻','👑','📸','😬','👀','🚨','🏡','🕊️','🏆','😻','🌟','🧿','🍀','🎨','🍜']),
        color:colors[i % colors.length]
      });
      this._item.push(item);
    }

    this._resize();
  }




  protected _update(): void {
    super._update();
  }


  protected _resize(): void {
    super._resize();

    const sw = Func.instance.sw();
    const sh = Func.instance.sh();

    this._item.forEach((val) => {
      // const ix = ~~(i % this._line);
      // const iy = ~~(i / this._line);
      // const interval = Func.instance.val(70, 200);

      // let x = sw * 0.5 + ix * interval;
      // let y = sh * 0.5 + iy * interval;

      // x -= (interval * (this._line - 1)) * 0.5;
      // y -= (interval * 2) * 0.5;

      let x = sw * 0.5;
      let y = sh * 0.5;

      Tween.instance.set(val.getEl(), {
        x:x,
        y:y
      });
    });
  }
}