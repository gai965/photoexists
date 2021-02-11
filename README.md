# README

# アプリケーション名
 PhotoExists

# アプリケーション概要
  画像の投稿をし、共有が可能なアプリケーションです。
  投稿した画像にExif情報が存在すれば、
  その情報からGPSを取得して撮影した位置情報を
  地図上で表示することができます。
 
## 使用方法
   ユーザーログインをする


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