/*
 Navicat Premium Data Transfer

 Source Server         : LOCAL_MYSQL
 Source Server Type    : MySQL
 Source Server Version : 100421
 Source Host           : 127.0.0.1:3306
 Source Schema         : mern_db

 Target Server Type    : MySQL
 Target Server Version : 100421
 File Encoding         : 65001

 Date: 26/12/2021 11:09:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` double(10, 2) NULL DEFAULT NULL,
  `createdAt` date NULL DEFAULT NULL,
  `updatedAt` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (4, 'Bismillah Samira Ilmi', 9090.00, '2021-12-26', '2021-12-26');
INSERT INTO `products` VALUES (5, 'Alhamdulillah Berhasil Yee', 90909021.00, '2021-12-26', '2021-12-26');

SET FOREIGN_KEY_CHECKS = 1;
