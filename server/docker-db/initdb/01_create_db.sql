CREATE DATABASE managementdb CHARACTER SET utf8mb4;
CREATE DATABASE managementdbtestdb CHARACTER SET utf8mb4;
CREATE USER 'managementuser'@localhost IDENTIFIED BY 'managementpass';
GRANT ALL ON goeswelldb.* TO 'managementuser'@'localhost';
GRANT ALL ON goeswelltestdb.* TO 'managementuser'@'localhost';