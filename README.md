# README

# アプリケーション名
 **PhotoExists**

# アプリケーション概要
・画像の投稿と撮影地点が地図上で表示できるアプリケーションです。  投稿した画像にExif情報が存在すれば、その情報からGPS情報を取得して撮影した位置情報を地図上で表示することができます。

## 本番環境
 [PhotoExists](http://www.photoexists.net/)

 .test account1
  メールアドレス:test@test.com
  パスワード   :111iti

  .test account2
  メールアドレス:test2@test.com
  パスワード   :2222ni

## 使用方法
  1. 画面右上からユーザーログイン または 新規登録を行う
  2. 画面左下の「投稿」ボタンをクリック
  3. 「ファイルを選択」して画像を選択
  ※テスト画像を「testimage」に保管

# テーブル設計

## usersテーブル

| Column                  | Type        | Options                             |
| ----------------------- | ----------- | ----------------------------------- |
| nickname                | string      | null: false                         |
| email                   | string      | null: false                         |
| encrypted_password      | string      | null: false                         |

### Association
- has_many :photos


# photosテーブル

| Column                  | Type        | Options                             |
| ----------------------- | ----------- | ----------------------------------- |
| title                   | string      | null: false                         |
| explanation             | text        |                                     |
| latitude                | decimal     |                                     |
| longitude               | decimal     |                                     |
| user                    | references  | null: false, foreign_key: true      |

### Association
- belongs_to :user