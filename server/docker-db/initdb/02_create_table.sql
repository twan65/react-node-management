SET CHARACTER SET utf8mb4;
USE managementdb;

CREATE TABLE contract_plan (
  code CHAR(1) NOT NULL COMMENT '契約プランコード',
  name VARCHAR(64) NOT NULL COMMENT '契約プラン名',
  service_content VARCHAR(100) NOT NULL COMMENT 'サービス内容',
  price INT(6) NOT NULL COMMENT '月額料金',
  relo_group_id INT(6) NOT NULL COMMENT '連携用グループID',
  CONSTRAINT contract_plan_PKC PRIMARY KEY(code)
) COMMENT='契約プランマスタ';

CREATE TABLE ancillary_insurance_type (
  code CHAR(1) NOT NULL COMMENT '付帯保険コード',
  company VARCHAR(30) NOT NULL COMMENT '付帯保険会社',
  compensation_content VARCHAR(100) NOT NULL COMMENT '補償内容',
  compensation_total_amount VARCHAR(100) NOT NULL COMMENT '補償総額',
  insurance_name VARCHAR(30) NOT NULL COMMENT '保険名',
  insurance_period VARCHAR(6) NOT NULL COMMENT '保険期間',
  company_billing_tel TEXT NOT NULL COMMENT '請求電話番号',
  company_billing_url TEXT NOT NULL COMMENT '請求サイト',
  company_business_time_start TIME NOT NULL COMMENT '営業開始時間',
  company_business_time_end TIME NOT NULL COMMENT '営業終了時間',
  CONSTRAINT ancillary_insurance_type_PKC PRIMARY KEY(code)
) COMMENT='付帯保険マスタ';

CREATE TABLE users (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT 'ユーザーID',
  app_id VARCHAR(40) UNIQUE NOT NULL COMMENT 'ユーザーID（アプリ側）',
  email VARCHAR(128) NOT NULL COMMENT 'メールアドレス',
  name TEXT NOT NULL COMMENT '氏名',
  kana_name TEXT NULL DEFAULT NULL COMMENT 'カナ氏名',
  sex CHAR(1) NULL DEFAULT NULL COMMENT '性別',
  occupation VARCHAR(64) NULL DEFAULT NULL COMMENT '職業',
  favorite_agency VARCHAR(255) NULL DEFAULT NULL COMMENT 'お気に入り店舗',
  phone_number TEXT NULL DEFAULT NULL COMMENT '携帯番号',
  year_of_birth VARCHAR(4) NULL DEFAULT NULL COMMENT '生年月日_年',
  month_of_birth VARCHAR(2) NULL DEFAULT NULL COMMENT '生年月日_月',
  day_of_birth VARCHAR(2) NULL DEFAULT NULL COMMENT '生年月日_日',
  postal_code_first VARCHAR(3) NULL DEFAULT NULL COMMENT '郵便番号_親番',
  postal_code_last VARCHAR(4) NULL DEFAULT NULL COMMENT '郵便番号_小番',
  prefecture TEXT NULL DEFAULT NULL COMMENT '住所（都道府県）',
  municipality TEXT NULL DEFAULT NULL COMMENT '住所（市区町村）',
  user_attributes CHAR(1) NOT NULL COMMENT '会員属性',
  user_registration_date DATE NOT NULL COMMENT '会員登録日（アプリ）',
  paid_status CHAR(1) NULL DEFAULT NULL COMMENT '有料ステータス',
  staff_status CHAR(1) NULL DEFAULT NULL COMMENT '職員ステータス',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  deleted_flag CHAR(1) NULL DEFAULT NULL COMMENT '削除フラグ',
  CONSTRAINT users_PKC PRIMARY KEY(id),
  CONSTRAINT users_IDXC UNIQUE(app_id)
) COMMENT='ユーザー';

CREATE TABLE payments (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT '決済ID',
  user_id INT(10) NOT NULL COMMENT 'ユーザーID',
  card_seq INT(10) NOT NULL COMMENT 'カードシーケンス番号',
  card_member_id VARCHAR(60) NOT NULL COMMENT 'GMO会員ID',
  receivable_status CHAR(1) NOT NULL COMMENT '未収フラグ',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  deleted_flag CHAR(1) NULL DEFAULT NULL COMMENT '削除フラグ',
  PRIMARY KEY(id),
  INDEX payments_FKC (user_id ASC),
  CONSTRAINT payments_FKC FOREIGN KEY(user_id) REFERENCES users(id)
) COMMENT='決済';

CREATE TABLE contracts (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT '契約ID',
  user_id INT(10) NOT NULL COMMENT 'ユーザーID',
  contract_plan CHAR(1) NOT NULL COMMENT '契約プランコード',
  contract_start_date DATE NOT NULL COMMENT '契約開始日',
  settlement_status CHAR(1) NOT NULL COMMENT '決済ステータス',
  cancellation_date DATE NULL DEFAULT NULL COMMENT '有料解約日',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  deleted_flag CHAR(1) NULL DEFAULT NULL COMMENT '削除フラグ',
  PRIMARY KEY(id),
  INDEX contracts_users_FKC (user_id ASC),
  INDEX contracts_contract_plan_FKC (contract_plan ASC),
  CONSTRAINT contracts_users_FKC FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT contracts_contract_plan_FKC FOREIGN KEY (contract_plan) REFERENCES contract_plan(code)
) COMMENT='契約';

CREATE TABLE ancillary_insurance (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT '付帯保険ID',
  contracts_id INT(10) NOT NULL COMMENT '契約ID',
  ancillary_insurance_code CHAR(1) NOT NULL COMMENT '付帯保険コード',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  deleted_flag CHAR(1) NULL DEFAULT NULL COMMENT '削除フラグ',
  PRIMARY KEY(id),
  INDEX ancillary_insurance_contract_contracts_FKC (contracts_id ASC),
  INDEX ancillary_insurance_ancillary_insurance_type_FKC (ancillary_insurance_code ASC),
  CONSTRAINT ancillary_insurance_contract_contracts_FKC FOREIGN KEY(contracts_id) REFERENCES contracts(id),
  CONSTRAINT ancillary_insurance_ancillary_insurance_type_FKC FOREIGN KEY (ancillary_insurance_code) REFERENCES ancillary_insurance_type(code)
) COMMENT='付帯保険';

CREATE TABLE transaction_history (
  id INT(10) NOT NULL AUTO_INCREMENT COMMENT '取引履歴ID',
  user_id INT(10) NOT NULL COMMENT 'ユーザーID',
  process_status CHAR(1) NOT NULL COMMENT '処理ステータス',
  process_date DATE NOT NULL COMMENT '処理日',
  contract_plan CHAR(1) NOT NULL COMMENT '契約プラン',
  contract_amount INT(6) NULL DEFAULT NULL COMMENT '月額料金',
  ancillary_insurance_id_first int(10) DEFAULT NULL COMMENT '付帯保険ID1',
  insurance_name_first varchar(30) DEFAULT NULL COMMENT '保険名1',
  ancillary_insurance_id_second int(10) DEFAULT NULL COMMENT '付帯保険ID2',
  insurance_name_second varchar(30) DEFAULT NULL COMMENT '保険名2',
  billing_date DATE NULL DEFAULT NULL COMMENT '請求日',
  payment_date DATE NULL DEFAULT NULL COMMENT '入金日',
  cancellation_date DATE NULL DEFAULT NULL COMMENT '有料解約日',
  payment_status CHAR(1) NULL DEFAULT NULL COMMENT '入金ステータス',
  created_id VARCHAR(64) NOT NULL COMMENT '作成者',
  updated_id VARCHAR(64) NULL DEFAULT NULL COMMENT '更新者',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  updated_at DATETIME NULL DEFAULT NULL COMMENT '更新日時',
  deleted_flag CHAR(1) NULL DEFAULT NULL COMMENT '削除フラグ',
  PRIMARY KEY(id),
  INDEX contracts_users_FKC1 (user_id ASC),
  INDEX transaction_history_contract_plan_FKC (contract_plan ASC),
  CONSTRAINT contracts_users_FKC1 FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT transaction_history_contract_plan_FKC FOREIGN KEY (contract_plan) REFERENCES contract_plan(code)
) COMMENT='取引履歴';

ALTER TABLE users auto_increment=10000001;
ALTER TABLE ancillary_insurance auto_increment=10000001;
