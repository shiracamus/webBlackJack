# はじめに
オブジェクト指向設計を考慮した実装

# カードクラス
## 必要な属性?
* ランク: 1～13の数値
* 画像パス

# デッキクラス
トランプのカードをまとめたもの
## 必要な属性
* カードリスト
## 必要な操作
* シャッフルしたカードを詰める
* カードを1枚取り出す

# プレイヤー
## 必要な属性
* 自分が持っているカードリスト
## 必要な操作
* カードをもらう
* 最初のカードを1枚だけ返す
* 持っているカードを全て処理する
* 点数を計算する
* ブラックジャック(Aと10点札)になっているかどうか
* バースト(点数が22以上)しているかどうか

# コンピューター (プレイヤーを継承)
## 必要な操作
* カードをもらうかどうか(16点以下なら必ずもらう)

# BlackJackゲームマスター
## 必要な属性
* デッキ
* 人間
* コンピュータ
## 必要な操作
* プレイする
* 人間がプレイする
* コンピュータがプレイする
* 勝者を判定する

```mermaid
classDiagram

class Card {
    +int rank
    +string image
}

class Deck {
    -Card[] cards
    +void refill()
    -void shuffle()
    +Card draw()
}

class Player {
    -Card[] _cards
    +void hold(Card card)
    +Card firstCard()
    +void forEachCard(function callback)
    +int score()
    -boolean hasAce()
    -boolean hasTen()
    +boolean isBlackJack()
    +boolean isBust()
}

class Computer {
    +boolean hit();
}

class BlackJack {
    -Deck deck
    -Player human
    -Computer computer
    -PlayerView humanView
    -PlayerView computerView
    +void play()
    -void playHuman()
    -void playComputer()
    -void judge()
}

class PlayerView {
    -Player player
    +void show()
    +void showCard()
    -void showCards()
    -void showScore()
    -void showInfo()
}

Computer --|> Player : extends
BlackJack o--> Deck
BlackJack o--> Player
BlackJack o--> Computer
BlackJack o--> PlayerView
PlayerView o--> Player
Deck o--> Card
Card <--o Player
```
