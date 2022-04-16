import {card} from './card';
export class Deck{
    counter = 0;

    s01 = new card(1,"./0ic_middle/s01.png");
    s02 = new card(2,"./0ic_middle/s02.png");
    s03 = new card(3,"./0ic_middle/s03.png");
    s04 = new card(4,"./0ic_middle/s04.png");
    s05 = new card(5,"./0ic_middle/s05.png");
    s06 = new card(6,"./0ic_middle/s06.png");
    s07 = new card(7,"./0ic_middle/s07.png");
    s08 = new card(8,"./0ic_middle/s08.png");
    s09 = new card(9,"./0ic_middle/s09.png");
    s10 = new card(10,"./0ic_middle/s10.png");
    s11 = new card(11,"./0ic_middle/s11.png");
    s12 = new card(12,"./0ic_middle/s12.png");
    s13 = new card(13,"./0ic_middle/s13.png");

    c01 = new card(1,"./0ic_middle/c01.png");
    c02 = new card(2,"./0ic_middle/c02.png");
    c03 = new card(3,"./0ic_middle/c03.png");
    c04 = new card(4,"./0ic_middle/c04.png");
    c05 = new card(5,"./0ic_middle/c05.png");
    c06 = new card(6,"./0ic_middle/c06.png");
    c07 = new card(7,"./0ic_middle/c07.png");
    c08 = new card(8,"./0ic_middle/c08.png");
    c09 = new card(9,"./0ic_middle/c09.png");
    c10 = new card(10,"./0ic_middle/c10.png");
    c11 = new card(11,"./0ic_middle/c11.png");
    c12 = new card(12,"./0ic_middle/c12.png");
    c13 = new card(13,"./0ic_middle/c13.png");

    d01 = new card(1,"./0ic_middle/d01.png");
    d02 = new card(2,"./0ic_middle/d02.png");
    d03 = new card(3,"./0ic_middle/d03.png");
    d04 = new card(4,"./0ic_middle/d04.png");
    d05 = new card(5,"./0ic_middle/d05.png");
    d06 = new card(6,"./0ic_middle/d06.png");
    d07 = new card(7,"./0ic_middle/d07.png");
    d08 = new card(8,"./0ic_middle/d08.png");
    d09 = new card(9,"./0ic_middle/d09.png");
    d10 = new card(10,"./0ic_middle/d10.png");
    d11 = new card(11,"./0ic_middle/d11.png");
    d12 = new card(12,"./0ic_middle/d12.png");
    d13 = new card(13,"./0ic_middle/d13.png");

    h01 = new card(1,"./0ic_middle/h01.png");
    h02 = new card(2,"./0ic_middle/h02.png");
    h03 = new card(3,"./0ic_middle/h03.png");
    h04 = new card(4,"./0ic_middle/h04.png");
    h05 = new card(5,"./0ic_middle/h05.png");
    h06 = new card(6,"./0ic_middle/h06.png");
    h07 = new card(7,"./0ic_middle/h07.png");
    h08 = new card(8,"./0ic_middle/h08.png");
    h09 = new card(9,"./0ic_middle/h09.png");
    h10 = new card(10,"./0ic_middle/h10.png");
    h11 = new card(11,"./0ic_middle/h11.png");
    h12 = new card(12,"./0ic_middle/h12.png");
    h13 = new card(13,"./0ic_middle/h13.png");

    list = [
        s01,
        s02,
        s03,
        s04,
        s05,
        s06,
        s07,
        s08,
        s09,
        s10,
        s11,
        s12,
        s13,
        c01,
        c02,
        c03,
        c04,
        c05,
        c06,
        c07,
        c08,
        c09,
        c10,
        c11,
        c12,
        c13,
        d01,
        d02,
        d03,
        d04,
        d05,
        d06,
        d07,
        d08,
        d09,
        d10,
        d11,
        d12,
        d13,
        h01,
        h02,
        h03,
        h04,
        h05,
        h06,
        h07,
        h08,
        h09,
        h10,
        h11,
        h12,
        h13
        ];

    // Fisher-Yatesシャッフル
    shuffle(array) {
        for(var i = (array.length - 1); 0 < i; i--){
          // 0〜(i+1)の範囲で値を取得
          var r = Math.floor(Math.random() * (i + 1));
          // 要素の並び替えを実行
          var tmp = array[i];
          array[i] = array[r];
          array[r] = tmp;
        }
        this.list= array
    }

    pickupCard(){
        return list[this.counter];
    }
}

