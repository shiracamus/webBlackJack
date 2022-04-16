import {Card} from './Card.js';
export class Deck{
    constructor() {
        this.s01 = new Card(1,"./0ic_middle/s01.png");
        this.s02 = new Card(2,"./0ic_middle/s02.png");
        this.s03 = new Card(3,"./0ic_middle/s03.png");
        this.s04 = new Card(4,"./0ic_middle/s04.png");
        this.s05 = new Card(5,"./0ic_middle/s05.png");
        this.s06 = new Card(6,"./0ic_middle/s06.png");
        this.s07 = new Card(7,"./0ic_middle/s07.png");
        this.s08 = new Card(8,"./0ic_middle/s08.png");
        this.s09 = new Card(9,"./0ic_middle/s09.png");
        this.s10 = new Card(10,"./0ic_middle/s10.png");
        this.s11 = new Card(11,"./0ic_middle/s11.png");
        this.s12 = new Card(12,"./0ic_middle/s12.png");
        this.s13 = new Card(13,"./0ic_middle/s13.png");
        this.c01 = new Card(1,"./0ic_middle/c01.png");
        this.c02 = new Card(2,"./0ic_middle/c02.png");
        this.c03 = new Card(3,"./0ic_middle/c03.png");
        this.c04 = new Card(4,"./0ic_middle/c04.png");
        this.c05 = new Card(5,"./0ic_middle/c05.png");
        this.c06 = new Card(6,"./0ic_middle/c06.png");
        this.c07 = new Card(7,"./0ic_middle/c07.png");
        this.c08 = new Card(8,"./0ic_middle/c08.png");
        this.c09 = new Card(9,"./0ic_middle/c09.png");
        this.c10 = new Card(10,"./0ic_middle/c10.png");
        this.c11 = new Card(11,"./0ic_middle/c11.png");
        this.c12 = new Card(12,"./0ic_middle/c12.png");
        this.c13 = new Card(13,"./0ic_middle/c13.png");
        this.d01 = new Card(1,"./0ic_middle/d01.png");
        this.d02 = new Card(2,"./0ic_middle/d02.png");
        this.d03 = new Card(3,"./0ic_middle/d03.png");
        this.d04 = new Card(4,"./0ic_middle/d04.png");
        this.d05 = new Card(5,"./0ic_middle/d05.png");
        this.d06 = new Card(6,"./0ic_middle/d06.png");
        this.d07 = new Card(7,"./0ic_middle/d07.png");
        this.d08 = new Card(8,"./0ic_middle/d08.png");
        this.d09 = new Card(9,"./0ic_middle/d09.png");
        this.d10 = new Card(10,"./0ic_middle/d10.png");
        this.d11 = new Card(11,"./0ic_middle/d11.png");
        this.d12 = new Card(12,"./0ic_middle/d12.png");
        this.d13 = new Card(13,"./0ic_middle/d13.png");
        this.h01 = new Card(1,"./0ic_middle/h01.png");
        this.h02 = new Card(2,"./0ic_middle/h02.png");
        this.h03 = new Card(3,"./0ic_middle/h03.png");
        this.h04 = new Card(4,"./0ic_middle/h04.png");
        this.h05 = new Card(5,"./0ic_middle/h05.png");
        this.h06 = new Card(6,"./0ic_middle/h06.png");
        this.h07 = new Card(7,"./0ic_middle/h07.png");
        this.h08 = new Card(8,"./0ic_middle/h08.png");
        this.h09 = new Card(9,"./0ic_middle/h09.png");
        this.h10 = new Card(10,"./0ic_middle/h10.png");
        this.h11 = new Card(11,"./0ic_middle/h11.png");
        this.h12 = new Card(12,"./0ic_middle/h12.png");
        this.h13 = new Card(13,"./0ic_middle/h13.png");

        this.list = [
            this.s01,
            this.s02,
            this.s03,
            this.s04,
            this.s05,
            this.s06,
            this.s07,
            this.s08,
            this.s09,
            this.s10,
            this.s11,
            this.s12,
            this.s13,
            this.c01,
            this.c02,
            this.c03,
            this.c04,
            this.c05,
            this.c06,
            this.c07,
            this.c08,
            this.c09,
            this.c10,
            this.c11,
            this.c12,
            this.c13,
            this.d01,
            this.d02,
            this.d03,
            this.d04,
            this.d05,
            this.d06,
            this.d07,
            this.d08,
            this.d09,
            this.d10,
            this.d11,
            this.d12,
            this.d13,
            this.h01,
            this.h02,
            this.h03,
            this.h04,
            this.h05,
            this.h06,
            this.h07,
            this.h08,
            this.h09,
            this.h10,
            this.h11,
            this.h12,
            this.h13
            ];

            this.counter = 0;
    }

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
          this.list= array;
        return;
    }

    pickupCard(){
        if (this.counter !== undefined && this.list !== undefined) {
            return this.list[this.counter];
        }
    }
    plusCounter(){
        if (this.counter !== undefined) {
            this.counter+=1;
        }
    }
}

