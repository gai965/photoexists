# README

# アプリケーション名
 ### **PhotoExists**
 ![世界地図完成](https://user-images.githubusercontent.com/72908323/108178719-1b079d80-7148-11eb-9765-728befb67390.jpg)

# アプリケーション概要
**画像の投稿と撮影地点が地図上で表示できるアプリケーション**<br>
投稿した画像にExif情報が存在すれば、その情報からGPS情報を取得して撮影した位置情報を地図上で表示することができる

## 制作背景


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
