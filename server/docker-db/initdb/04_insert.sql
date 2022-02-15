SET CHARACTER SET utf8mb4;
USE managementdb;

-- Master
INSERT INTO role (name) VALUES ("ADMIN");
INSERT INTO role (name) VALUES ("USER");

INSERT INTO skill (name) VALUES ("Java");
INSERT INTO skill (name) VALUES ("Spring");
INSERT INTO skill (name) VALUES ("Struct");
INSERT INTO skill (name) VALUES ("Android");
INSERT INTO skill (name) VALUES ("JSP");
INSERT INTO skill (name) VALUES ("Thymeleaf");
INSERT INTO skill (name) VALUES ("Golang");
INSERT INTO skill (name) VALUES ("C#");
INSERT INTO skill (name) VALUES ("C++");
INSERT INTO skill (name) VALUES ("C");
INSERT INTO skill (name) VALUES ("Basic");
INSERT INTO skill (name) VALUES ("React");
INSERT INTO skill (name) VALUES ("Angular");
INSERT INTO skill (name) VALUES ("JQuery");
INSERT INTO skill (name) VALUES ("Javascript");
INSERT INTO skill (name) VALUES ("Typescript");
INSERT INTO skill (name) VALUES ("PHP");
INSERT INTO skill (name) VALUES ("Nodejs");
INSERT INTO skill (name) VALUES ("CSS");
INSERT INTO skill (name) VALUES ("Vue");
INSERT INTO skill (name) VALUES ("MySQL");
INSERT INTO skill (name) VALUES ("Oracle");
INSERT INTO skill (name) VALUES ("Postgress");
INSERT INTO skill (name) VALUES ("MongoDB");
INSERT INTO skill (name) VALUES ("DynamoDB");
INSERT INTO skill (name) VALUES ("AWS");
INSERT INTO skill (name) VALUES ("GCP");
INSERT INTO skill (name) VALUES ("CI/CD");
INSERT INTO skill (name) VALUES ("Git");
INSERT INTO skill (name) VALUES ("Ruby");
INSERT INTO skill (name) VALUES ("Dart");
INSERT INTO skill (name) VALUES ("Flutter");
INSERT INTO skill (name) VALUES ("Doma2");
INSERT INTO skill (name) VALUES ("MyBatis");
INSERT INTO skill (name) VALUES ("JPA");
INSERT INTO skill (name) VALUES ("Laravel");
INSERT INTO skill (name) VALUES ("PL/SQL");
INSERT INTO skill (name) VALUES ("Docker");
INSERT INTO skill (name) VALUES ("Express");
INSERT INTO skill (name) VALUES ("HTML");
INSERT INTO skill (name) VALUES ("Firebase");
INSERT INTO skill (name) VALUES ("Illustration");
INSERT INTO skill (name) VALUES ("Photoshop");
INSERT INTO skill (name) VALUES ("XD");
INSERT INTO skill (name) VALUES ("Unity");
INSERT INTO skill (name) VALUES ("VBA");

INSERT INTO license (name) VALUES ("情報処理産業技師");
INSERT INTO license (name) VALUES ("情報処理技師");
INSERT INTO license (name) VALUES ("JLPT");
INSERT INTO license (name) VALUES ("ネットワーク管理士");
INSERT INTO license (name) VALUES ("行政管理士");
INSERT INTO license (name) VALUES ("情報機器運用技能士");
INSERT INTO license (name) VALUES ("電子計算機技能士");

INSERT INTO user (email, password, image_path, name, birthday, address1, address2, address3, gender, position, enabled, created_id)
VALUES ("twan1@test.co.jp", "123456", "https://placeimg.com/64/64/any", "アンテウン1", "19900605", "東京都", "荒川区", "荒川３−７２−２K2K ２０２", "男性", "バックエンドエンジニア", 1, "twan1@test.co.jp");
INSERT INTO user (email, password, image_path, name, birthday, address1, address2, address3, gender, position, enabled, created_id)
VALUES ("twan2@test.co.jp", "123456", "https://placeimg.com/64/64/any", "アンテウン2", "19900605", "東京都", "荒川区", "荒川３−７２−２K2K ２０２", "男性", "フロントエンドエンジニア", 1, "twan1@test.co.jp");
INSERT INTO user (email, password, image_path, name, birthday, address1, address2, address3, gender, position, enabled, created_id)
VALUES ("twan3@test.co.jp", "123456", "https://placeimg.com/64/64/any", "アンテウン3", "19900605", "東京都", "荒川区", "荒川３−７２−２K2K ２０２", "女性", "デザイナー", 1, "twan1@test.co.jp");


INSERT INTO user_role (user_id, role_id, created_id)
VALUES (1, 1, "twan1@test.co.jp");
INSERT INTO user_role (user_id, role_id, created_id)
VALUES (2, 2, "twan1@test.co.jp");
INSERT INTO user_role (user_id, role_id, created_id)
VALUES (3, 2, "twan1@test.co.jp");

INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (2, 2, 3, "twan2@test.co.jp");
INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (2, 1, 3, "twan2@test.co.jp");
INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (2, 5, 5, "twan2@test.co.jp");
INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (2, 10, 1, "twan2@test.co.jp");


INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (3, 1, 5, "twan3@test.co.jp");
INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (3, 11, 3, "twan3@test.co.jp");
INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (3, 5, 3, "twan3@test.co.jp");
INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (3, 4, 2, "twan3@test.co.jp");
INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (3, 7, 4, "twan3@test.co.jp");
INSERT INTO user_skill (user_id, skill_id, rating, created_id)
VALUES (3, 14, 5, "twan3@test.co.jp");


INSERT INTO user_license (user_id, license_id, created_id)
VALUES (2, 1, "twan2@test.co.jp");
INSERT INTO user_license (user_id, license_id, created_id)
VALUES (2, 2, "twan2@test.co.jp");
INSERT INTO user_license (user_id, license_id, created_id)
VALUES (2, 3, "twan2@test.co.jp");

INSERT INTO user_license (user_id, license_id, created_id)
VALUES (3, 1, "twan3@test.co.jp");

