DROP TABLE IF EXISTS `demo_student`;
CREATE TABLE `demo_student` (
  `student_id` CHAR(12) NOT NULL COMMENT '学号',
  `name` VARCHAR(32) NOT NULL COMMENT '姓名',
  `class_name` VARCHAR(32) NOT NULL COMMENT '班级名称',
  `sex` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1男0女',
  `identity_num` VARCHAR(18) NOT NULL COMMENT '身份证号码',
  `birthday` DATE NOT NULL COMMENT '出生日期',
  `phone` CHAR(11) NOT NULL COMMENT '手机号码',
  PRIMARY KEY  (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `demo_student` VALUES ('201511621310', 'Seven10', '计科1110', 1, '445281199207286810', '1997-07-07', '13763041910');
INSERT INTO `demo_student` VALUES ('201511621311', 'Seven11', '计科1111', 1, '445281199207286811', '1997-07-07', '13763041911');
INSERT INTO `demo_student` VALUES ('201511621312', 'Seven12', '计科1112', 1, '445281199207286812', '1997-07-07', '13763041912');
INSERT INTO `demo_student` VALUES ('201511621313', 'Seven13', '计科1113', 1, '445281199207286813', '1997-07-07', '13763041913');
INSERT INTO `demo_student` VALUES ('201511621314', 'Seven14', '计科1114', 1, '445281199207286814', '1997-07-07', '13763041914');
INSERT INTO `demo_student` VALUES ('201511621315', 'Seven15', '计科1115', 1, '445281199207286815', '1997-07-07', '13763041915');
INSERT INTO `demo_student` VALUES ('201511621316', 'Seven16', '计科1116', 1, '445281199207286816', '1997-07-07', '13763041916');
INSERT INTO `demo_student` VALUES ('201511621317', 'Seven17', '计科1117', 1, '445281199207286817', '1997-07-07', '13763041917');
INSERT INTO `demo_student` VALUES ('201511621318', 'Seven18', '计科1118', 1, '445281199207286818', '1997-07-07', '13763041918');
INSERT INTO `demo_student` VALUES ('201511621319', 'Seven19', '计科1119', 1, '445281199207286819', '1997-07-07', '13763041919');
INSERT INTO `demo_student` VALUES ('201511621320', 'Seven20', '计科1120', 1, '445281199207286820', '1997-07-07', '13763041920');
INSERT INTO `demo_student` VALUES ('201511621321', 'Seven21', '计科1121', 1, '445281199207286821', '1997-07-07', '13763041921');
INSERT INTO `demo_student` VALUES ('201511621322', 'Seven22', '计科1122', 1, '445281199207286822', '1997-07-07', '13763041922');
INSERT INTO `demo_student` VALUES ('201511621323', 'Seven23', '计科1123', 1, '445281199207286823', '1997-07-07', '13763041923');
INSERT INTO `demo_student` VALUES ('201511621324', 'Seven24', '计科1124', 1, '445281199207286824', '1997-07-07', '13763041924');
INSERT INTO `demo_student` VALUES ('201511621325', 'Seven25', '计科1125', 1, '445281199207286825', '1997-07-07', '13763041925');
INSERT INTO `demo_student` VALUES ('201511621326', 'Seven26', '计科1126', 1, '445281199207286826', '1997-07-07', '13763041926');
INSERT INTO `demo_student` VALUES ('201511621327', 'Seven27', '计科1127', 1, '445281199207286827', '1997-07-07', '13763041927');
INSERT INTO `demo_student` VALUES ('201511621328', 'Seven28', '计科1128', 1, '445281199207286828', '1997-07-07', '13763041928');
INSERT INTO `demo_student` VALUES ('201511621329', 'Seven29', '计科1129', 1, '445281199207286829', '1997-07-07', '13763041929');
INSERT INTO `demo_student` VALUES ('201511621330', 'Seven30', '计科1130', 1, '445281199207286830', '1997-07-07', '13763041930');
INSERT INTO `demo_student` VALUES ('201511621331', 'Seven31', '计科1131', 1, '445281199207286831', '1997-07-07', '13763041931');
INSERT INTO `demo_student` VALUES ('201511621332', 'Seven32', '计科1132', 1, '445281199207286832', '1997-07-07', '13763041932');
INSERT INTO `demo_student` VALUES ('201511621333', 'Seven33', '计科1133', 1, '445281199207286833', '1997-07-07', '13763041933');
INSERT INTO `demo_student` VALUES ('201511621334', 'Seven34', '计科1134', 1, '445281199207286834', '1997-07-07', '13763041934');
INSERT INTO `demo_student` VALUES ('201511621335', 'Seven35', '计科1135', 1, '445281199207286835', '1997-07-07', '13763041935');
INSERT INTO `demo_student` VALUES ('201511621336', 'Seven36', '计科1136', 1, '445281199207286836', '1997-07-07', '13763041936');
INSERT INTO `demo_student` VALUES ('201511621337', 'Seven37', '计科1137', 1, '445281199207286837', '1997-07-07', '13763041937');
INSERT INTO `demo_student` VALUES ('201511621338', 'Seven38', '计科1138', 1, '445281199207286838', '1997-07-07', '13763041938');
INSERT INTO `demo_student` VALUES ('201511621339', 'Seven39', '计科1139', 1, '445281199207286839', '1997-07-07', '13763041939');
INSERT INTO `demo_student` VALUES ('201511621340', 'Seven40', '计科1140', 1, '445281199207286840', '1997-07-07', '13763041940');
INSERT INTO `demo_student` VALUES ('201511621341', 'Seven41', '计科1141', 1, '445281199207286841', '1997-07-07', '13763041941');
INSERT INTO `demo_student` VALUES ('201511621342', 'Seven42', '计科1142', 1, '445281199207286842', '1997-07-07', '13763041942');
INSERT INTO `demo_student` VALUES ('201511621343', 'Seven43', '计科1143', 1, '445281199207286843', '1997-07-07', '13763041943');
INSERT INTO `demo_student` VALUES ('201511621344', 'Seven44', '计科1144', 1, '445281199207286844', '1997-07-07', '13763041944');
INSERT INTO `demo_student` VALUES ('201511621345', 'Seven45', '计科1145', 1, '445281199207286845', '1997-07-07', '13763041945');
INSERT INTO `demo_student` VALUES ('201511621346', 'Seven46', '计科1146', 1, '445281199207286846', '1997-07-07', '13763041946');
INSERT INTO `demo_student` VALUES ('201511621347', 'Seven47', '计科1147', 1, '445281199207286847', '1997-07-07', '13763041947');
INSERT INTO `demo_student` VALUES ('201511621348', 'Seven48', '计科1148', 1, '445281199207286848', '1997-07-07', '13763041948');
INSERT INTO `demo_student` VALUES ('201511621349', 'Seven49', '计科1149', 1, '445281199207286849', '1997-07-07', '13763041949');
INSERT INTO `demo_student` VALUES ('201511621350', 'Seven50', '计科1150', 1, '445281199207286850', '1997-07-07', '13763041950');
INSERT INTO `demo_student` VALUES ('201511621351', 'Seven51', '计科1151', 1, '445281199207286851', '1997-07-07', '13763041951');
INSERT INTO `demo_student` VALUES ('201511621352', 'Seven52', '计科1152', 1, '445281199207286852', '1997-07-07', '13763041952');
INSERT INTO `demo_student` VALUES ('201511621353', 'Seven53', '计科1153', 1, '445281199207286853', '1997-07-07', '13763041953');
INSERT INTO `demo_student` VALUES ('201511621354', 'Seven54', '计科1154', 1, '445281199207286854', '1997-07-07', '13763041954');
INSERT INTO `demo_student` VALUES ('201511621355', 'Seven55', '计科1155', 1, '445281199207286855', '1997-07-07', '13763041955');
INSERT INTO `demo_student` VALUES ('201511621356', 'Seven56', '计科1156', 1, '445281199207286856', '1997-07-07', '13763041956');
INSERT INTO `demo_student` VALUES ('201511621357', 'Seven57', '计科1157', 1, '445281199207286857', '1997-07-07', '13763041957');
INSERT INTO `demo_student` VALUES ('201511621358', 'Seven58', '计科1158', 1, '445281199207286858', '1997-07-07', '13763041958');
INSERT INTO `demo_student` VALUES ('201511621359', 'Seven59', '计科1159', 1, '445281199207286859', '1997-07-07', '13763041959');
INSERT INTO `demo_student` VALUES ('201511621360', 'Seven60', '计科1160', 1, '445281199207286860', '1997-07-07', '13763041960');
INSERT INTO `demo_student` VALUES ('201511621361', 'Seven61', '计科1161', 1, '445281199207286861', '1997-07-07', '13763041961');
INSERT INTO `demo_student` VALUES ('201511621362', 'Seven62', '计科1162', 1, '445281199207286862', '1997-07-07', '13763041962');
INSERT INTO `demo_student` VALUES ('201511621363', 'Seven63', '计科1163', 1, '445281199207286863', '1997-07-07', '13763041963');
INSERT INTO `demo_student` VALUES ('201511621364', 'Seven64', '计科1164', 1, '445281199207286864', '1997-07-07', '13763041964');
INSERT INTO `demo_student` VALUES ('201511621365', 'Seven65', '计科1165', 1, '445281199207286865', '1997-07-07', '13763041965');
INSERT INTO `demo_student` VALUES ('201511621366', 'Seven66', '计科1166', 1, '445281199207286866', '1997-07-07', '13763041966');
INSERT INTO `demo_student` VALUES ('201511621367', 'Seven67', '计科1167', 1, '445281199207286867', '1997-07-07', '13763041967');
INSERT INTO `demo_student` VALUES ('201511621368', 'Seven68', '计科1168', 1, '445281199207286868', '1997-07-07', '13763041968');
INSERT INTO `demo_student` VALUES ('201511621369', 'Seven69', '计科1169', 1, '445281199207286869', '1997-07-07', '13763041969');
INSERT INTO `demo_student` VALUES ('201511621370', 'Seven70', '计科1170', 1, '445281199207286870', '1997-07-07', '13763041970');
INSERT INTO `demo_student` VALUES ('201511621371', 'Seven71', '计科1171', 1, '445281199207286871', '1997-07-07', '13763041971');
INSERT INTO `demo_student` VALUES ('201511621372', 'Seven72', '计科1172', 1, '445281199207286872', '1997-07-07', '13763041972');
INSERT INTO `demo_student` VALUES ('201511621373', 'Seven73', '计科1173', 1, '445281199207286873', '1997-07-07', '13763041973');
INSERT INTO `demo_student` VALUES ('201511621374', 'Seven74', '计科1174', 1, '445281199207286874', '1997-07-07', '13763041974');
INSERT INTO `demo_student` VALUES ('201511621375', 'Seven75', '计科1175', 1, '445281199207286875', '1997-07-07', '13763041975');
INSERT INTO `demo_student` VALUES ('201511621376', 'Seven76', '计科1176', 1, '445281199207286876', '1997-07-07', '13763041976');
INSERT INTO `demo_student` VALUES ('201511621377', 'Seven77', '计科1177', 1, '445281199207286877', '1997-07-07', '13763041977');
INSERT INTO `demo_student` VALUES ('201511621378', 'Seven78', '计科1178', 1, '445281199207286878', '1997-07-07', '13763041978');
INSERT INTO `demo_student` VALUES ('201511621379', 'Seven79', '计科1179', 1, '445281199207286879', '1997-07-07', '13763041979');
INSERT INTO `demo_student` VALUES ('201511621380', 'Seven80', '计科1180', 1, '445281199207286880', '1997-07-07', '13763041980');
INSERT INTO `demo_student` VALUES ('201511621381', 'Seven81', '计科1181', 1, '445281199207286881', '1997-07-07', '13763041981');
INSERT INTO `demo_student` VALUES ('201511621382', 'Seven82', '计科1182', 1, '445281199207286882', '1997-07-07', '13763041982');
INSERT INTO `demo_student` VALUES ('201511621383', 'Seven83', '计科1183', 1, '445281199207286883', '1997-07-07', '13763041983');
INSERT INTO `demo_student` VALUES ('201511621384', 'Seven84', '计科1184', 1, '445281199207286884', '1997-07-07', '13763041984');
INSERT INTO `demo_student` VALUES ('201511621385', 'Seven85', '计科1185', 1, '445281199207286885', '1997-07-07', '13763041985');
INSERT INTO `demo_student` VALUES ('201511621386', 'Seven86', '计科1186', 1, '445281199207286886', '1997-07-07', '13763041986');
INSERT INTO `demo_student` VALUES ('201511621387', 'Seven87', '计科1187', 1, '445281199207286887', '1997-07-07', '13763041987');
INSERT INTO `demo_student` VALUES ('201511621388', 'Seven88', '计科1188', 1, '445281199207286888', '1997-07-07', '13763041988');
INSERT INTO `demo_student` VALUES ('201511621389', 'Seven89', '计科1189', 1, '445281199207286889', '1997-07-07', '13763041989');
INSERT INTO `demo_student` VALUES ('201511621390', 'Seven90', '计科1190', 1, '445281199207286890', '1997-07-07', '13763041990');
INSERT INTO `demo_student` VALUES ('201511621391', 'Seven91', '计科1191', 1, '445281199207286891', '1997-07-07', '13763041991');
INSERT INTO `demo_student` VALUES ('201511621392', 'Seven92', '计科1192', 1, '445281199207286892', '1997-07-07', '13763041992');
INSERT INTO `demo_student` VALUES ('201511621393', 'Seven93', '计科1193', 1, '445281199207286893', '1997-07-07', '13763041993');
INSERT INTO `demo_student` VALUES ('201511621394', 'Seven94', '计科1194', 1, '445281199207286894', '1997-07-07', '13763041994');
INSERT INTO `demo_student` VALUES ('201511621395', 'Seven95', '计科1195', 1, '445281199207286895', '1997-07-07', '13763041995');
INSERT INTO `demo_student` VALUES ('201511621396', 'Seven96', '计科1196', 1, '445281199207286896', '1997-07-07', '13763041996');
INSERT INTO `demo_student` VALUES ('201511621397', 'Seven97', '计科1197', 1, '445281199207286897', '1997-07-07', '13763041997');
INSERT INTO `demo_student` VALUES ('201511621398', 'Seven98', '计科1198', 1, '445281199207286898', '1997-07-07', '13763041998');
INSERT INTO `demo_student` VALUES ('201511621399', 'Seven99', '计科1199', 1, '445281199207286899', '1997-07-07', '13763041999');