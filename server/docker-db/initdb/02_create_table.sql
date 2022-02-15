SET CHARACTER SET utf8mb4;
USE managementdb;

CREATE TABLE user (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  email VARCHAR(128) NOT NULL COMMENT 'メールアドレス',
  password VARCHAR(100) NOT NULL COMMENT 'パスワード',
  name VARCHAR(50) NOT NULL COMMENT '氏名',
  birthday VARCHAR(8) NOT NULL COMMENT '生年月日（YYYYMMDD）',
  gender VARCHAR(2) NOT NULL COMMENT '性別',
  position VARCHAR(50) NOT NULL COMMENT 'ポジション',
  image_path TEXT NULL DEFAULT NULL COMMENT 'Profile画像パス',
  address1 TEXT NOT NULL COMMENT '都道府県',
  address2 TEXT NOT NULL COMMENT '市区町村・丁目・番地',
  address3 TEXT NULL DEFAULT NULL COMMENT '建物名・部屋番号',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  enabled BIT NOT NULL COMMENT '活性フラグ',
  CONSTRAINT user_PKC PRIMARY KEY(id),
  CONSTRAINT user_IDXC UNIQUE(email)
) COMMENT='ユーザーT';

-- マスターテーブル
CREATE TABLE role (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  name VARCHAR(50) NOT NULL COMMENT '権限名',
  CONSTRAINT role_PKC PRIMARY KEY(id)
) COMMENT='ロールT';

CREATE TABLE user_role (
  user_id INT(10) NOT NULL COMMENT 'ユーザーID',
  role_id INT(10) NOT NULL COMMENT 'ロールID',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  CONSTRAINT user_role_PKC PRIMARY KEY(user_id, role_id),
  CONSTRAINT user_role_user_id_FKC FOREIGN KEY(user_id) REFERENCES user(id),
  CONSTRAINT user_role_role_id_FKC FOREIGN KEY(role_id) REFERENCES role(id)
) COMMENT='ユーザーロールT';

-- マスターテーブル
CREATE TABLE skill (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  name VARCHAR(50) NOT NULL COMMENT 'スキル名',
  CONSTRAINT skill_PKC PRIMARY KEY(id)
) COMMENT='スキルT';

CREATE TABLE user_skill (
  user_id INT(10) NOT NULL COMMENT 'ユーザーID',
  skill_id INT(10) NOT NULL COMMENT 'スキルID',
  rating INT(10) NOT NULL COMMENT 'スキルID',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  CONSTRAINT user_skill_PKC PRIMARY KEY(user_id, skill_id),
  CONSTRAINT user_skill_user_id_FKC FOREIGN KEY(user_id) REFERENCES user(id),
  CONSTRAINT user_skill_skill_id_FKC FOREIGN KEY(skill_id) REFERENCES skill(id)
) COMMENT='ユーザースキルT';

-- マスターテーブル
CREATE TABLE license (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  name VARCHAR(50) NOT NULL COMMENT '資格名',
  CONSTRAINT skill_PKC PRIMARY KEY(id)
) COMMENT='資格T';

CREATE TABLE user_license (
  user_id INT(10) NOT NULL COMMENT 'ユーザーID',
  license_id INT(10) NOT NULL COMMENT '資格ID',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  CONSTRAINT user_license_PKC PRIMARY KEY(user_id, license_id),
  CONSTRAINT user_license_user_id_FKC FOREIGN KEY(user_id) REFERENCES user(id),
  CONSTRAINT user_license_license_id_FKC FOREIGN KEY(license_id) REFERENCES license(id)
) COMMENT='ユーザー資格T';