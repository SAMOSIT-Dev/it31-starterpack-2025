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
('Basic Programming'),
('Software Development Tools'),
('IT Fundamental'),
('Ending Ceremony'),
('Introduction');

-- Insert into rooms
INSERT INTO rooms (room_name) VALUES
('LX11/01'),
('LX11/02'),
('LX11/03'),
('LX11/04'),
('LX11/05'),
('LX12/01-02'),
('Auditorium');

-- Insert into schedules
INSERT INTO schedules (course_id, room_id, start_time, end_time, slide_url, house_id) VALUES


-- 17 July: Actovex (LX11/01)
-- Morning: Introduction
-- Evening: IT Fundamental
(5, 7, '2025-07-17 09:30:00', '2025-07-17 12:30:00', '', 5),
(3, 1, '2025-07-17 13:30:00', '2025-07-17 16:30:00', '/documents/Actovex/ITFUNActovexD1', 5),
-- 17 July: Fantasiax (LX11/02)
-- Morning: Introduction
-- Evening: IT Fundamental
(5, 7, '2025-07-17 09:30:00', '2025-07-17 12:30:00', '', 2),
(3, 2, '2025-07-17 13:30:00', '2025-07-17 16:30:00', '/documents/Fantasiax/ITFUNFantasiaxD1', 2),
-- 17 July: Horrorin (LX11/03)
-- Morning: Introduction
-- Evening: IT Fundamental
(5, 7, '2025-07-17 09:30:00', '2025-07-17 12:30:00', '', 3),
(3, 3, '2025-07-17 13:30:00', '2025-07-17 16:30:00', '/documents/Horrorin/ITFUNHorrorinD1', 3),
-- 17 July: Romantica (LX11/04)
-- Morning: Introduction
-- Evening: IT Fundamental
(5, 7, '2025-07-17 09:30:00', '2025-07-17 12:30:00', '', 1),
(3, 4, '2025-07-17 13:30:00', '2025-07-17 16:30:00', '/documents/Romantica/ITFUNRomanticaD1', 1),
-- 17 July: Scifora (LX11/05)
-- Morning: Introduction
-- Evening: IT Fundamental
(5, 7, '2025-07-17 09:30:00', '2025-07-17 12:30:00', '', 4),
(3, 5, '2025-07-17 13:30:00', '2025-07-17 16:30:00', '/documents/Scifora/ITFUNSciforaD1', 4),


-- 18 July: Actovex (LX11/01)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 1, '2025-07-18 09:30:00', '2025-07-18 12:30:00', '/documents/Actovex/BSActovexD1', 5),
(2, 1, '2025-07-18 13:30:00', '2025-07-18 16:30:00', '', 5),
-- 18 July: Fantasiax (LX11/02)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 2, '2025-07-18 09:30:00', '2025-07-18 12:30:00', '/documents/Fantasiax/BSFantasiaxD1', 2),
(2, 2, '2025-07-18 13:30:00', '2025-07-18 16:30:00', '', 2),
-- 18 July: Horrorin (LX11/03)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 3, '2025-07-18 09:30:00', '2025-07-18 12:30:00', '/documents/Horrorin/BSHorrorinD1', 3),
(2, 3, '2025-07-18 13:30:00', '2025-07-18 16:30:00', '', 3),
-- 18 July: Romantica (LX11/04)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 4, '2025-07-18 09:30:00', '2025-07-18 12:30:00', '/documents/Romantica/BSRomanticaD1', 1),
(2, 4, '2025-07-18 13:30:00', '2025-07-18 16:30:00', '', 1),
-- 18 July: Scifora (LX11/05)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(2, 5, '2025-07-18 09:30:00', '2025-07-18 12:30:00', '/documents/Scifora/BSSciforaD1', 4),
(2, 5, '2025-07-18 13:30:00', '2025-07-18 16:30:00', '', 4),


-- 21 July: Actovex (LX11/01)
-- Morning: IT Fundamental
-- Evening: Software Development Tools
(3, 1, '2025-07-21 09:30:00', '2025-07-21 12:30:00', '/documents/Actovex/ITFUNActovexD2', 5),
(2, 1, '2025-07-21 13:30:00', '2025-07-21 16:30:00', '', 5),
-- 21 July: Fantasiax (LX11/02)
-- Morning: IT Fundamental
-- Evening: Software Development Tools
(3, 2, '2025-07-21 09:30:00', '2025-07-21 12:30:00', '/documents/Fantasiax/ITFUNFantasiaxD2', 2),
(2, 2, '2025-07-21 13:30:00', '2025-07-21 16:30:00', '', 2),
-- 21 July: Horrorin (LX11/03)
-- Morning: IT Fundamental
-- Evening: Software Development Tools
(3, 3, '2025-07-21 09:30:00', '2025-07-21 12:30:00', '/documents/Horrorin/ITFUNHorrorinD2', 3),
(2, 3, '2025-07-21 13:30:00', '2025-07-21 16:30:00', '', 3),
-- 21 July: Romantica (LX11/04)
-- Morning: IT Fundamental
-- Evening: Software Development Tools
(3, 4, '2025-07-21 09:30:00', '2025-07-21 12:30:00', '/documents/Romantica/ITFUNRomanticaD2', 1),
(2, 4, '2025-07-21 13:30:00', '2025-07-21 16:30:00', '', 1),
-- 21 July: Scifora (LX11/05)
-- Morning: IT Fundamental
-- Evening: Software Development Tools
(3, 5, '2025-07-21 09:30:00', '2025-07-21 12:30:00', '/documents/Scifora/ITFUNSciforaD2', 4),
(2, 5, '2025-07-21 13:30:00', '2025-07-21 16:30:00', '', 4),

-- 22 July: Actovex (LX11/01)
-- Morning: Software Development Tools
-- Evening: Basic Programming
(2, 1, '2025-07-22 09:30:00', '2025-07-22 12:30:00', '', 5),
(1, 1, '2025-07-22 13:30:00', '2025-07-22 16:30:00', '/documents/Actovex/BSActovexD2', 5),
-- 22 July: Fantansiax (LX11/02)
-- Morning: Software Development Tools
-- Evening: Basic Programming
(2, 2, '2025-07-22 09:30:00', '2025-07-22 12:30:00', '', 2),
(1, 2, '2025-07-22 13:30:00', '2025-07-22 16:30:00', '/documents/Fantasiax/BSFantasiaxD2', 2),
-- 22 July: Horrorin (LX11/03)
-- Morning: Software Development Tools
-- Evening: Basic Programming
(2, 3, '2025-07-22 09:30:00', '2025-07-22 12:30:00', '/documents/Horrorin/BSHorrorinD2', 3),
(1, 3, '2025-07-22 13:30:00', '2025-07-22 16:30:00', '', 3),
-- 22 July: Romantica (LX11/04)
-- Morning: Software Development Tools
-- Evening: Basic Programming
(2, 4, '2025-07-22 09:30:00', '2025-07-22 12:30:00', '/documents/Romantica/BSRomanticaD2', 1),
(1, 4, '2025-07-22 13:30:00', '2025-07-22 16:30:00', '', 1),
-- 22 July: Romantica (LX11/05)
-- Morning: Software Development Tools
-- Evening: Basic Programming
(2, 5, '2025-07-22 09:30:00', '2025-07-23 12:30:00', '', 4),
(1, 5, '2025-07-22 13:30:00', '2025-07-23 16:30:00', '/documents/Scifora/BSSciforaD2', 4),


-- 23 July: Actovex (LX11/01)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 1, '2025-07-23 09:30:00', '2025-07-23 12:30:00', '/documents/Actovex/BSActovexD3', 5),
(2, 1, '2025-07-23 13:30:00', '2025-07-23 16:30:00', '', 5),
-- 23 July: Fantasiax (LX11/02)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 2, '2025-07-23 09:30:00', '2025-07-23 12:30:00', '/documents/Fantasiax/BSFantasiaxD3', 2),
(2, 2, '2025-07-23 13:30:00', '2025-07-23 16:30:00', '', 2),

-- 23 July: Horrorin (LX11/03)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 3, '2025-07-23 09:30:00', '2025-07-23 12:30:00', '/documents/Horrorin/BSHorrorinD3', 3),
(2, 3, '2025-07-23 13:30:00', '2025-07-23 16:30:00', '', 3),

-- 23 July: Romantica (LX11/04)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 4, '2025-07-23 09:30:00', '2025-07-23 12:30:00', '/documents/Romantica/BSRomanticaD3', 1),
(2, 4, '2025-07-23 13:30:00', '2025-07-23 16:30:00', '', 1),

-- 23 July: Scifora (LX11/05)
-- Morning: Basic Programming
-- Evening: Software Development Tools
(1, 5, '2025-07-23 09:30:00', '2025-07-23 12:30:00', '/documents/Scifora/BSSciforaD3', 4),
(2, 5, '2025-07-23 13:30:00', '2025-07-23 16:30:00', '', 4),


-- 24 July: Actovex (LX11/01)
-- Morning: Basic Programming
-- Evening: IT Fundamental
(1, 1, '2025-07-24 09:30:00', '2025-07-24 12:30:00', '/documents/Actovex/BSActovexD4', 5),
(3, 1, '2025-07-24 13:30:00', '2025-07-24 16:30:00', '/documents/Actovex/ITFUNActovexD3', 5),
-- 24 July: Fantasiax (LX11/02)
-- Morning: Basic Programming
-- Evening: IT Fundamental
(1, 2, '2025-07-24 09:30:00', '2025-07-24 12:30:00', '/documents/Fantasiax/BSFantasiaxD4', 2),
(3, 2, '2025-07-24 13:30:00', '2025-07-24 16:30:00', '/documents/Fantasiax/ITFUNFantasiaxD3', 2),
-- 24 July: Horrorin (LX11/03)
-- Morning: Basic Programming
-- Evening: IT Fundamental
(1, 3, '2025-07-24 09:30:00', '2025-07-24 12:30:00', '/documents/Horrorin/BSHorrorinD4', 3),
(3, 3, '2025-07-24 13:30:00', '2025-07-24 16:30:00', '/documents/Horrorin/ITFUNHorrorinD3', 3),
-- 24 July: Romantica (LX11/04)
-- Morning: Basic Programming
-- Evening: IT Fundamental
(1, 4, '2025-07-24 09:30:00', '2025-07-24 12:30:00', '/documents/Romantica/BSRomanticaD4', 1),
(3, 4, '2025-07-24 13:30:00', '2025-07-24 16:30:00', '/documents/Romantica/ITFUNRomanticaD3', 1),
-- 24 July: Scifora (LX11/05)
-- Morning: Basic Programming
-- Evening: IT Fundamental
(1, 5, '2025-07-24 09:30:00', '2025-07-24 12:30:00', '/documents/Scifora/BSSciforaD4', 4),
(3, 5, '2025-07-24 13:30:00', '2025-07-24 16:30:00', '/documents/Scifora/ITFUNSciforaD3', 4),


-- 25 July: Actovex (LX11/01)
-- Morning: Basic Programming
-- Evening: Ending Ceremony
(1, 1, '2025-07-25 09:30:00', '2025-07-25 12:30:00', '/documents/Actovex/BSActovexD5', 5),
(4, 6, '2025-07-25 13:30:00', '2025-07-25 16:30:00', '', 5),
-- 25 July: Fantasiax (LX11/02)
-- Morning: Basic Programming
-- Evening: Ending Ceremony
(1, 2, '2025-07-25 09:30:00', '2025-07-25 12:30:00', '/documents/Fantasiax/BSFantasiaxD5', 2),
(4, 6, '2025-07-25 13:30:00', '2025-07-25 16:30:00', '', 2),
-- 25 July: Horrorin (LX11/03)
-- Morning: Basic Programming
-- Evening: Ending Ceremony
(1, 3, '2025-07-25 09:30:00', '2025-07-25 12:30:00', '/documents/Horrorin/BSHorrorinD5', 3),
(4, 6, '2025-07-25 13:30:00', '2025-07-25 16:30:00', '', 3),
-- 25 July: Romantica (LX11/04)
-- Morning: Basic Programming
-- Evening: Ending Ceremony
(1, 4, '2025-07-25 09:30:00', '2025-07-25 12:30:00', '/documents/Romantica/BSRomanticaD5', 1),
(4, 6, '2025-07-25 13:30:00', '2025-07-25 16:30:00', '', 1),
-- 25 July: Scifora (LX11/05)
-- Morning: Basic Programming
-- Evening: Ending Ceremony
(1, 5, '2025-07-25 09:30:00', '2025-07-25 12:30:00', '/documents/Scifora/BSSciforaD5', 4),
(4, 6, '2025-07-25 13:30:00', '2025-07-25 16:30:00', '', 4);



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
