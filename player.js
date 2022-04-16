export class player{
    constructor() {
        this.myDeck = [];
        this.sum = 0;
        this.bj =false;
        this.AInMyDeckFlag =false;
        this.tenInMyDeckFlag = false;
        this.burstFlag=false;
    }

    //引数に受け取ったカードを加える
    addCard(card){this.myDeck.push(card);}

    //myDeck内のカードの合計を計算
    sumCard(){
        this.sum=0;
        for (let i = 0; i < this.myDeck.length; i++) {
            this.sum+=this.myDeck[i].value;
        }
        return this.sum;
    }

    //myDeckの中にAが入っているか確認する
    checkAInMyDeck(){
        for (let i = 0; i < this.myDeck.length; i++) {
            if (this.myDeck[i].value==1) {this.AInMyDeckFlag=true;}
        }
    }

    //myDeckの中に10札が入っているか確認する
    checkTenInMyDeck(){
        for (let i = 0; i < this.myDeck.length; i++) {
            if (this.myDeck[i].value==10) {this.tenInMyDeckFlag=true;}
        }
    }

    //BJを達成しているか確認調べる
    checkBJ(){
        this.checkAInMyDeck();
        this.checkTenInMyDeck();
        if (this.myDeck.length==2 && this.AInMyDeckFlag == true && this.tenInMyDeckFlag==true) {return true;}
        return false;
    }

    //自分がバーストしているか調べる
    checkBurst(){
        if (this.sum > 21) {return true;}
        return false;
    }
}