# README


# アプリケーション名
 ## **PhotoExists**
 ![世界地図完成](https://user-images.githubusercontent.com/72908323/108178719-1b079d80-7148-11eb-9765-728befb67390.jpg)
<br>

# アプリケーション概要
#### 画像の投稿と撮影地点が地図上で表示できるアプリケーション<br>
スマートフォンやデジタルカメラで撮影した写真にはExif情報(撮影情報や位置情報など)が付与されていることが多い。<br>
このアプリケーションでは、投稿した画像にExif情報が存在すれば<br>
その情報からGPS情報を取得して撮影した位置情報を地図上で表示することができる。<br>
<br>

## 制作背景
このアプリケーションは旅や旅行が好きな人が撮影した写真を共有する目的で作成した。<br>
私も旅が好きでよく写真を撮影するのだが、<br>
撮影した風景や料理の写真がどこで撮影したものかわからないまたは忘れている場合が多かった。<br>
そこで「投稿画像の管理と共有」・「撮影地点の表示」ができるものを作ろうと考えた。<br>
他人の投稿画像から新たな発見や次に旅行したい場所などを見つけられたらと思う。<br>
<br>

## 実装機能と工夫点
1. ログイン機能：ユーザーの新規登録・ログイン・ログアウトを行う機能。<br>gem「devise」を使用<br><br>
2. 画像投稿機能：画像の投稿を行う機能。<br>画像投稿ページにて「ActiveStorage」を使用して画像を読み込む<br><br>
3. 画像レビュー機能：投稿画像の読込後に、画像を縮小サイズで画像投稿ページで表示する機能。<br>javascriptで記述し、動的に処理を行う。<br>画像の再読込や編集の場合などでも先に読込まれた画像を削除してから再表示する<br>※下記の「デモ動画」を参照<br><br><span style="color: red; ">赤文字</span>
4. GPS取得機能：「jquery.exif.js」ファイルを使用して投稿画像のExif情報を取得する機能。<br>「gps.js」にてExif情報からGPSの情報だけを取得して緯度経度の計算を行い、投稿画像ページで緯度経度を表示する<br><br>
5. 撮影地点表示機能：画像投稿ページで撮影地点を地図表示する機能<br>地図には「Leaflet」のAPIを使用。<br>「gps.js」に動的に表示する処理を記載しており、GPS情報を所得後に表示される<br><br>
6. ページネーション機能：Topページの投稿画像一覧を複数ページに分割する機能<br>gem「kaminari」を使用して実装。<br>現在では投稿日の降順で表示されており、最大表示数は「5」。これを超えるとページ数が増加する<br><br>
<img width="600" alt="ページネーション画像" src="https://user-images.githubusercontent.com/72908323/111116701-c110c100-85a9-11eb-98a1-3cad35b2339e.png">

7. 地図表示機能：投稿画像の地図を表示する機能<br>「show_map.js」にて動的に表示・非表示するように処理。<br>記載投稿された画像をクリック後、「地図表示」ボタンをクリックすることで表示、左上の「×」で非表示。<br>GPS情報をデータベース上に保存しておき、表示する際に取得および「Leaflet」APIによる地図表示を行っている。<br>地図はモーダルウィンドウとして表示している<br><br>



## 今後実装したい機能
1. 個人ページ　：特定のユーザが投稿した画像を一覧で表示できるようにする
2. コメント機能：特定の画像に対してコメントができるようにする
3. 通知機能　　：コメントされたユーザに通知をする
4. タグ機能　　：投稿画像に指定されたタグをつけることができる
5. 検索機能　　：画像のタイトル・タグで検索できるようにする
6. オンオフ機能：ユーザの意思で地図表示の不可を設定できる<br>
<br>

## 本番環境
 [PhotoExists](http://www.photoexists.net/)<br>
  (http://www.photoexists.net/)

 - test account1<br>
  メールアドレス:test@test.com<br>
  パスワード   :111iti

 - test account2<br>
  メールアドレス:test2@test.com<br>
  パスワード   :2222ni


## 開発環境
 - Ruby  2.6.5
 - Rails 6.0.3.4
 - JavaScript
   - jQuery
 - GitHub
 - AWS
   - EC2
   - S3
   - Route 53
 - VSCode


# 使用方法

### 画像投稿
  1. 画面右上からユーザーログイン または 新規登録を行う
  2. 画面左下の「投稿」ボタンをクリック
  3. 「ファイルを選択」して画像を選択(テスト画像を「testimage」に保管)<br>
   ※GPSの情報がない場合、地図の表示はされない
  4. 画像タイトルの入力(必須)
  5. 「投稿する」ボタンをクリック

## デモ動画
![Demo1](https://user-images.githubusercontent.com/72908323/108185905-23fc6d00-7150-11eb-8593-fc08f1bbd0aa.gif)

### 投稿画像閲覧
  1. Top画面の投稿画像をクリック<br>
  　※投稿画像のユーザと閲覧ユーザが同じ場合「編集」と「削除」が可能
  2. 「地図表示」ボタンをクリックで地図表示
  3. 地図上の左上の「×」をクリックすると戻る
  4. 「もどる」ボタンでTop画面に遷移

## デモ動画
  ![Demo2](https://user-images.githubusercontent.com/72908323/108186532-d16f8080-7150-11eb-8097-574a682d3795.gif)


# DB設計

## usersテーブル

| Column                  | Type        | Options                             |
| ----------------------- | ----------- | ----------------------------------- |
| nickname                | string      | null: false                         |
| email                   | string      | null: false                         |
| encrypted_password      | string      | null: false                         |

### Association
- has_many :photos


## photosテーブル

| Column                  | Type        | Options                             |
| ----------------------- | ----------- | ----------------------------------- |
| title                   | string      | null: false                         |
| explanation             | text        |                                     |
| latitude                | decimal     |                                     |
| longitude               | decimal     |                                     |
| user                    | references  | null: false, foreign_key: true      |

### Association
- belongs_to :user
