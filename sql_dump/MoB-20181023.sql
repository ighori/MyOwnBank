-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 10.0.0.182    Database: myownbank_db
-- ------------------------------------------------------
-- Server version	5.6.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `confirmed` bit(1) NOT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKa8m1smlfsc8kkjn2t6wpdmysk` (`user_id`),
  CONSTRAINT `FKa8m1smlfsc8kkjn2t6wpdmysk` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credit_account`
--

DROP TABLE IF EXISTS `credit_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credit_account` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_balance` decimal(19,2) DEFAULT NULL,
  `account_number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit_account`
--

LOCK TABLES `credit_account` WRITE;
/*!40000 ALTER TABLE `credit_account` DISABLE KEYS */;
INSERT INTO `credit_account` VALUES (1,5000.00,1),(2,5000.00,3),(3,5000.00,4),(4,5000.00,5),(5,5000.00,6);
/*!40000 ALTER TABLE `credit_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credit_transaction`
--

DROP TABLE IF EXISTS `credit_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credit_transaction` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `available_balance` decimal(19,2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `credit_account_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9v00oq55l3x7eihptrlfc03v` (`credit_account_id`),
  CONSTRAINT `FK9v00oq55l3x7eihptrlfc03v` FOREIGN KEY (`credit_account_id`) REFERENCES `credit_account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit_transaction`
--

LOCK TABLES `credit_transaction` WRITE;
/*!40000 ALTER TABLE `credit_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `credit_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan_application`
--

DROP TABLE IF EXISTS `loan_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loan_application` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9mvuefv6gd4ggkfkcooi087vd` (`user_id`),
  CONSTRAINT `FK9mvuefv6gd4ggkfkcooi087vd` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan_application`
--

LOCK TABLES `loan_application` WRITE;
/*!40000 ALTER TABLE `loan_application` DISABLE KEYS */;
/*!40000 ALTER TABLE `loan_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `primary_account`
--

DROP TABLE IF EXISTS `primary_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `primary_account` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_balance` decimal(19,2) DEFAULT NULL,
  `account_number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `primary_account`
--

LOCK TABLES `primary_account` WRITE;
/*!40000 ALTER TABLE `primary_account` DISABLE KEYS */;
INSERT INTO `primary_account` VALUES (1,6206.00,11223146),(3,0.00,11223150),(6,0.00,11223147),(7,0.00,11223149);
/*!40000 ALTER TABLE `primary_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `primary_transaction`
--

DROP TABLE IF EXISTS `primary_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `primary_transaction` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `available_balance` decimal(19,2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `primary_account_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK643wtfdx6y0e093wlc09csehn` (`primary_account_id`),
  CONSTRAINT `FK643wtfdx6y0e093wlc09csehn` FOREIGN KEY (`primary_account_id`) REFERENCES `primary_account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `primary_transaction`
--

LOCK TABLES `primary_transaction` WRITE;
/*!40000 ALTER TABLE `primary_transaction` DISABLE KEYS */;
INSERT INTO `primary_transaction` VALUES (1,5000,5000.00,'2017-01-13 00:57:16','Deposit to Primary Account','Finished','Account',1),(2,1500,3500.00,'2017-01-13 00:57:31','Withdraw from Primary Account','Finished','Account',1),(3,1300,2200.00,'2017-01-13 00:58:03','Between account transfer from Primary to Savings','Finished','Account',1),(4,500,1700.00,'2017-01-13 00:59:08','Transfer to recipient Mr. Tomson','Finished','Transfer',1),(5,1500,3200.00,'2017-01-13 01:11:38','Deposit to Primary Account','Finished','Account',1),(6,400,2800.00,'2017-01-13 01:11:46','Withdraw from Primary Account','Finished','Account',1),(7,2300,2000.00,'2017-01-13 01:13:48','Between account transfer from Primary to Savings','Finished','Account',1),(8,300,1700.00,'2017-01-13 01:14:14','Transfer to recipient TaxSystem','Finished','Transfer',1),(9,400,1300.00,'2018-03-14 09:04:16','Transfer to recipient Mr. Tomson','Finished','Transfer',1),(10,100000,101300.00,'2018-03-14 09:04:28','Deposit to Primary Account','Finished','Account',1),(11,50000,51300.00,'2018-03-14 09:13:33','Between account transfer from Primary to Savings','Finished','Account',1),(12,20000,31300.00,'2018-03-14 09:13:47','Withdraw from Primary Account','Finished','Account',1),(13,2000000,2031300.00,'2018-03-14 09:20:41','Deposit to Primary Account','Finished','Account',1),(14,2000000,31300.00,'2018-03-14 09:21:06','Between account transfer from Primary to Savings','Finished','Account',1),(15,1244,30056.00,'2018-03-15 02:20:07','Between account transfer from Primary to Savings','Finished','Account',1),(16,3000,27056.00,'2018-03-15 02:20:16','Withdraw from Primary Account','Finished','Account',1),(17,100,26956.00,'2018-03-17 02:27:48','Between account transfer from Primary to Savings','Finished','Account',1),(18,2000,28956.00,'2018-03-17 02:29:09','Deposit to Primary Account','Finished','Account',1),(19,1500,27456.00,'2018-03-17 23:08:17','Between account transfer from Primary to Savings','Finished','Account',1),(20,550,27206.00,'2018-03-17 23:32:33','Between account transfer from Primary to Savings','Finished','Account',1),(21,1000,26206.00,'2018-03-19 01:08:14','Between account transfer from Primary to Savings','Finished','Account',1),(22,1170000,10556206.00,'2018-03-22 04:50:55','Between account transfer from Primary to Savings','Finished','Account',1),(23,10550000,6206.00,'2018-03-22 04:52:27','Between account transfer from Primary to Savings','Finished','Account',1);
/*!40000 ALTER TABLE `primary_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipient`
--

DROP TABLE IF EXISTS `recipient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipient` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_number` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3041ks22uyyuuw441k5671ah9` (`user_id`),
  CONSTRAINT `FK3041ks22uyyuuw441k5671ah9` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipient`
--

LOCK TABLES `recipient` WRITE;
/*!40000 ALTER TABLE `recipient` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (0,'ROLE_USER'),(1,'ROLE_ADMIN');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `savings_account`
--

DROP TABLE IF EXISTS `savings_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `savings_account` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_balance` decimal(19,2) DEFAULT NULL,
  `account_number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `savings_account`
--

LOCK TABLES `savings_account` WRITE;
/*!40000 ALTER TABLE `savings_account` DISABLE KEYS */;
INSERT INTO `savings_account` VALUES (1,34195.00,11223147),(3,0.00,11223151),(4,0.00,11223148),(5,0.00,11223150);
/*!40000 ALTER TABLE `savings_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `savings_transaction`
--

DROP TABLE IF EXISTS `savings_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `savings_transaction` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `available_balance` decimal(19,2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `savings_account_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4bt1l2090882974glyn79q2s9` (`savings_account_id`),
  CONSTRAINT `FK4bt1l2090882974glyn79q2s9` FOREIGN KEY (`savings_account_id`) REFERENCES `savings_account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `savings_transaction`
--

LOCK TABLES `savings_transaction` WRITE;
/*!40000 ALTER TABLE `savings_transaction` DISABLE KEYS */;
INSERT INTO `savings_transaction` VALUES (1,1000,1000.00,'2017-01-13 00:57:40','Deposit to savings Account','Finished','Account',1),(2,150,2150.00,'2017-01-13 01:11:15','Withdraw from savings Account','Finished','Account',1),(3,400,1750.00,'2017-01-13 01:11:23','Withdraw from savings Account','Finished','Account',1),(4,2000,3750.00,'2017-01-13 01:11:30','Deposit to savings Account','Finished','Account',1),(5,1500,2250.00,'2017-01-13 01:13:38','Between account transfer from Savings to Primary','Finished','Transfer',1),(6,300,4250.00,'2017-01-13 01:14:02','Transfer to recipient LtdFitness','Finished','Transfer',1),(7,3000,2058494.00,'2018-03-15 02:23:29','Deposit to savings Account','Finished','Account',1),(8,200000,1858494.00,'2018-03-15 09:44:29','Withdraw from savings Account','Finished','Account',1),(9,185849,1672645.00,'2018-03-15 09:44:45','Withdraw from savings Account','Finished','Account',1),(10,1672600,45.00,'2018-03-15 09:45:00','Withdraw from savings Account','Finished','Account',1),(11,300,1345.00,'2018-03-17 23:26:30','Between account transfer from Savings to Primary','Finished','Transfer',1),(12,1000,345.00,'2018-03-17 23:29:46','Transfer to recipient Gym-Fitness','Finished','Transfer',1),(13,70000,-68105.00,'2018-03-20 06:36:38','Transfer to recipient Mr. Mancini','Finished','Transfer',1),(14,1000000,931895.00,'2018-03-20 06:37:59','Deposit to savings Account','Finished','Account',1),(15,700000,231895.00,'2018-03-20 06:38:32','Between account transfer from Savings to Primary','Finished','Transfer',1),(16,1000000,1231895.00,'2018-03-20 06:38:43','Deposit to savings Account','Finished','Account',1),(17,200000,1031895.00,'2018-03-20 06:54:24','Transfer to recipient Gym-Fitness','Finished','Transfer',1),(18,78700,953195.00,'2018-03-20 06:57:31','Transfer to recipient Mr. Mancini','Finished','Transfer',1),(19,35000,918195.00,'2018-03-20 06:57:48','Transfer to recipient Mr. Mancini','Finished','Transfer',1),(20,450000,468195.00,'2018-03-20 06:58:38','Transfer to recipient Gym-Fitness','Finished','Transfer',1),(21,10000000000,10000468195.00,'2018-03-20 07:00:43','Deposit to savings Account','Finished','Account',1),(22,1000000,9999468195.00,'2018-03-20 07:01:02','Between account transfer from Savings to Primary','Finished','Transfer',1),(23,10000000,9989468195.00,'2018-03-20 07:01:18','Between account transfer from Savings to Primary','Finished','Transfer',1),(24,50000,9989418195.00,'2018-03-20 08:01:29','Transfer to recipient Mr. Mancini','Finished','Transfer',1),(25,100000,9989318195.00,'2018-03-20 08:01:46','Transfer to recipient Gym-Fitness','Finished','Transfer',1),(26,30000,9989288195.00,'2018-03-20 08:02:06','Transfer to recipient ATO','Finished','Transfer',1),(27,9989280000,8195.00,'2018-03-22 04:49:36','Withdraw from savings Account','Finished','Account',1),(28,11700000,28195.00,'2018-03-22 04:53:26','Withdraw from savings Account','Finished','Account',1),(29,2000,30195.00,'2018-03-27 11:59:07','Deposit to savings Account','Finished','Account',1),(30,4000,34195.00,'2018-03-28 18:53:13','Deposit to savings Account','Finished','Account',1);
/*!40000 ALTER TABLE `savings_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `enabled` bit(1) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `primary_account_id` bigint(20) DEFAULT NULL,
  `savings_account_id` bigint(20) DEFAULT NULL,
  `credit_account_id` bigint(20) DEFAULT NULL,
  `birthdate` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `postcode` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  KEY `FKbj0uoj9i40dory8w4t5ojyb9n` (`primary_account_id`),
  KEY `FKihums7d3g5cv9ehminfs1539e` (`savings_account_id`),
  KEY `FKr8ekktv7ofh39mbl1qrgwkop4` (`credit_account_id`),
  CONSTRAINT `FKbj0uoj9i40dory8w4t5ojyb9n` FOREIGN KEY (`primary_account_id`) REFERENCES `primary_account` (`id`),
  CONSTRAINT `FKihums7d3g5cv9ehminfs1539e` FOREIGN KEY (`savings_account_id`) REFERENCES `savings_account` (`id`),
  CONSTRAINT `FKr8ekktv7ofh39mbl1qrgwkop4` FOREIGN KEY (`credit_account_id`) REFERENCES `credit_account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'enduser@abc.server','','Alan','Pete','$2a$12$DWCryEwHwbTYCegib92tk.VST.GG1i2WAqfaSwyMdxX0cl0eBeSve','5551112345','alan',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),(3,'asd@gmail.com','','alex','osipov','$2a$12$hZR7pcSf0JU/OTXR3TOyuu8r6C6n.JZE8Ei47E4LZs1t0Aq1AO6oC','1111111111','Admin',3,3,3,NULL,NULL,NULL,NULL,NULL,NULL),(4,'mhimran@gmail.com','','imran','ghori','$2a$12$Fd3JOWAGzM7M5KngIyjAsup8ZWFc5BPofDJaL90ZKrGlLkUautuSS','32423423','imran',6,4,4,NULL,NULL,NULL,NULL,NULL,NULL),(5,'miag6762@gmail.com','','John','Peters','$2a$12$hZR7pcSf0JU/OTXR3TOyuu8r6C6n.JZE8Ei47E4LZs1t0Aq1AO6oC','12312312321','john',7,5,5,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `user_role_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_role_id`),
  KEY `FKa68196081fvovjhkek5m97n3y` (`role_id`),
  KEY `FK859n2jvi8ivhui0rl0esws6o` (`user_id`),
  CONSTRAINT `FK859n2jvi8ivhui0rl0esws6o` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKa68196081fvovjhkek5m97n3y` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,0,1),(2,1,3),(3,0,4),(4,0,5);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-23 19:01:17
