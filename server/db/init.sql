-- Drop tables if they exist
DROP TABLE IF EXISTS friends, users, schedules, courses, houses, upcoming_events;

-- Create tables
CREATE TABLE houses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  house_name VARCHAR(30)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  studentId VARCHAR(11) UNIQUE,
  nickname VARCHAR(100),
  age INT,
  profile_description TEXT,
  profile_picture_url TEXT,
  house_id INT,
  facebook_url VARCHAR(50),
  instagram_url VARCHAR(50),
  discord_username VARCHAR(50),
  createdAt DATETIME,
  updatedAt DATETIME,
  FOREIGN KEY (house_id) REFERENCES houses(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(50)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE rooms (
  id INT PRIMARY KEY AUTO_INCREMENT,
  room_name VARCHAR(30)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE schedules (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT,
  room_id INT,
  start_time DATETIME,
  end_time DATETIME,
  slide_url TEXT,
  house_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(id),
  FOREIGN KEY (house_id) REFERENCES houses(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE friends (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  friend_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (friend_id) REFERENCES users(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE upcoming_events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  event_name VARCHAR(100),
  event_datetime DATETIME
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SET NAMES 'utf8mb4';

-- Insert into houses
INSERT INTO houses (house_name) VALUES
('romantica'),
('fantasiax'),
('horrorin'),
('scifora'),
('actovex');

-- Insert into courses
INSERT INTO courses (course_name) VALUES
('Defense Against the Dark Arts'),
('Potions'),
('Transfiguration');

-- Insert into rooms
INSERT INTO rooms (room_name) VALUES
('Room A'),
('Room B'),
('Room C');

-- Insert into schedules
INSERT INTO schedules (course_id, room_id, start_time, end_time, slide_url, house_id) VALUES
(1, 1, '2025-06-25 09:00:00', '2025-06-25 10:30:00', 'http://example.com/dada-slides', 1),
(2, 2, '2025-06-25 11:00:00', '2025-06-25 12:30:00', 'http://example.com/potions-slides', 4),
(3, 3, '2025-06-25 14:00:00', '2025-06-25 15:30:00', 'http://example.com/transfiguration-slides', 3);

-- Insert into upcoming_events
INSERT INTO upcoming_events (event_name, event_datetime) VALUES
('เปิดรับสมัคร', '2025-07-01 23:59:59'),
('ปิดรับสมัคร', '2025-07-07 23:59:59'),
('ยืนยันสิทธิ์', '2025-07-12 23:59:59'),
('เริ่มโครงการ', '2025-07-17 23:59:59'),
('หยุดวันเสาร์ เย่ะ 🌼', '2025-07-19 23:59:59'),
('หยุดวันอาทิตย์ เย่ะ 🌼', '2025-07-20 23:59:59'),
('ปิดโครงการ', '2025-07-25 23:59:59');

INSERT INTO users(studentId, nickname, house_id) VALUES
-- Actovex
('68130500001', 'ใบเตย', 5),
('68130500009', 'ดาวเหนือ', 5),
('68130500128', 'ปาร์ตี้', 5),
('68130500111', 'ซันเดย์', 5),
('68130500081', 'แทน', 5),
('68130500033', 'นะโม', 5),
('68130500025', 'แฮม', 5),
('68130500011', 'หม่อน', 5),
('68130500083', 'ไนซ์', 5),
('68130500068', 'เพชร', 5),
('68130500105', 'ไอซ์', 5),
('68130500013', 'คริต', 5),
('68130500008', 'มอตโต้', 5),
('68130500041', 'แจมแจม', 5),
('68130500080', 'ตั้ม', 5),
('68130500073', 'ซู่สง', 5),
('68130500056', 'พี', 5),
('68130500127', 'บีม', 5),
('68130500089', 'ฟอร์ด', 5),
('68130500039', 'แปม', 5),
('68130500037', 'อันวาส', 5),

-- Fantasiax
('68130500017', 'ลูกตาล', 2),
('68130500118', 'เอิง', 2),
('68130500074', 'แอม', 2),
('68130500104', 'โป๊ยเซียน', 2),
('68130500072', 'Show', 2),
('68130500016', 'แฮปปี้', 2),
('68130500086', 'นอร์ธ', 2),
('68130500010', 'กัน', 2),
('68130500099', 'เจ', 2),
('68130500102', 'ก้อง', 2),
('68130500045', 'ภูมิ', 2),
('68130500054', 'ต้นน้ำ', 2),
('68130500082', 'ต้นปี', 2),
('68130500100', 'แม็กซ์', 2),
('68130500085', 'กานต์', 2),
('68130500121', 'เปรม', 2),
('68130500002', 'ไผ่', 2),
('68130500060', 'ปอนด์', 2),
('68130500129', 'บีม', 2),

-- Horrorin
('68130500046', 'เลม่อน', 3),
('68130500052', 'เนเน่', 3),
('68130500036', 'เฟย์', 3),
('68130500032', 'Mui', 3),
('68130500057', 'ธีร์', 3),
('68130500061', 'พรู', 3),
('68130500059', 'มายด์', 3),
('68130500103', 'มิกซ์', 3),
('68130500034', 'บอล', 3),
('68130500098', 'เปอร์', 3),
('68130500030', 'เบิร์ด', 3),
('68130500094', 'ชาย', 3),
('68130500031', 'เฟส', 3),
('68130500029', 'อะตอม', 3),
('68130500006', 'แม็กซ์', 3),
('68130500028', 'ธัน', 3),
('68130500048', 'ป๋องแป๋ง', 3),
('68130500093', 'ม่อน', 3),
('68130500014', 'สายน้ำ', 3),
('68130500084', 'รีฟ', 3),
('68130500070', 'โชกุน', 3),

-- Romantica
('68130500053', 'แพทตี้', 1),
('68130500065', 'ซินเจีย', 1),
('68130500126', 'กุ๊บกิ๊บ', 1),
('68130500040', 'เก้า', 1),
('68130500050', 'พีท', 1),
('68130500004', 'ไนน์', 1),
('68130500090', 'ก้อน', 1),
('68130500120', 'มีน', 1),
('68130500023', 'ทีฉ่า', 1),
('68130500027', 'แมน', 1),
('68130500071', 'ไตเติ้ล', 1),
('68130500018', 'ปั้น', 1),
('68130500024', 'พี', 1),
('68130500022', 'พอ', 1),
('68130500042', 'ยูอัง', 1),
('68130500077', 'เดียร์', 1),
('68130500101', 'เบียร์', 1),
('68130500043', 'ปัน', 1),
('68130500021', 'เคน', 1),
('68130500112', 'อลานน์', 1),
('68130500019', 'พั้นซ์', 1),

-- Scifora
('68130500095', 'ซากุระ', 4),
('68130500097', 'ใบเฟิร์น', 4),
('68130500114', 'หงส์', 4),
('68130500091', 'ปอนด์', 4),
('68130500078', 'Focus', 4),
('68130500038', 'เปตอง', 4),
('68130500087', 'แสตมป์', 4),
('68130500026', 'เน็ท', 4),
('68130500012', 'ซันเดย์', 4),
('68130500069', 'มิลาน', 4),
('68130500058', 'ก้าว', 4),
('68130500035', 'หวัง', 4),
('68130500005', 'ดา', 4),
('68130500067', 'โบนัส', 4),
('68130500066', 'เคน', 4),
('68130500075', 'ภูมิ', 4),
('68130500049', 'ดรีม', 4),
('68130500020', 'โซดา', 4),
('68130500124', 'บีม', 4),
('68130500044', 'James', 4);
