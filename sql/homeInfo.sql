CREATE TABLE `homeinfo` (
   `id` bigint NOT NULL,
   `subject` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
   `floor` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
   `price` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
   `area` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
   `summary` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
   `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci,
   `linkUrl` varchar(255) DEFAULT NULL,
   `thumbnailImagePath` varchar(255) DEFAULT NULL,
   `creator` varchar(30) DEFAULT NULL,
   `modifier` varchar(30) DEFAULT NULL,
   `createdDate` datetime DEFAULT NULL,
   `modifyDate` datetime DEFAULT NULL,
   PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

 INSERT INTO `my_home`.`homeinfo` (`id`, `subject`, `floor`, `price`, `area`, `summary`, `content`, `linkUrl`, `thumbnailImagePath`, `creator`, `createdDate`) 
VALUES ('1', '마포자이 101동', '11/25층', '19억', '149/107㎡', '마포역 공덕역 도보거리', '', '', '', 'SYKim', '2021-07-30');

DELIMITER //
CREATE PROCEDURE GetHomeInfo(IN searchId BIGINT)
 BEGIN
	 SELECT * 
	 FROM homeinfo
	 WHERE id = searchId;
 END //
DELIMITER ;