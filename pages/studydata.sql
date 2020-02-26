-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2020 at 03:54 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studydata`
--

-- --------------------------------------------------------

--
-- Table structure for table `ask`
--

CREATE TABLE `ask` (
  `id` int(11) NOT NULL,
  `username_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `grade` int(255) NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chemistry`
--

CREATE TABLE `chemistry` (
  `id` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `grade` int(255) NOT NULL,
  `lever` int(255) NOT NULL,
  `classy` int(255) NOT NULL,
  `categories` int(255) NOT NULL,
  `method` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `answer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `choose1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `choose2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `choose3` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `choose4` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_exam` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chemistry`
--

INSERT INTO `chemistry` (`id`, `content`, `grade`, `lever`, `classy`, `categories`, `method`, `answer`, `choose1`, `choose2`, `choose3`, `choose4`, `id_exam`) VALUES
(1, 'Dung dịch nào sau đây có phản ứng màu biure?', 12, 1, 0, 0, '', 'D', 'Triolein', ' Gly-Ala', 'Glyxin', 'Anbumin', ''),
(2, 'Glixerol tác dụng với chất nào sau đây có thể cho chất béo?', 12, 1, 0, 1, '', 'C', 'C2H3COOH', 'C15H33COOH', 'C17H35COOH', 'C4H9COOH', ''),
(3, 'Chất nào sau đây là amin?', 12, 1, 0, 1, '', 'A', 'Anilin', 'Alanin', 'Sobitol', 'Caprolactam', ''),
(4, 'Dung dịch nào sau đây có thể làm mềm nước có tính cứng vĩnh cửu?', 12, 1, 0, 0, '', 'D', 'Ca(NO3)2', 'NaCl', 'HCl', 'Na3PO4', ''),
(5, 'Có thể phân biệt 3 dung dịch: KOH, HCl, H2SO4 (loãng) bằng một thuốc thử là A. giấy quỳ tím.', 12, 1, 0, 0, '', 'D', 'giấy quỳ tím', 'Zn', 'Al', 'BaCO3', ''),
(6, '. Cho 2,16 gam Al tan hoàn toàn trong dung dịch chứa HNO3 vừa đủ (không thấy khí thoát ra) thu được dung dịch X có chứa m gam muối. Giá trị của m là?', 12, 1, 1, 0, '', 'B', '17,04', '19,44', '11,19', '13,64', ''),
(7, '. Kim loại nào sau đây có tính khử yếu hơn Cr?', 12, 1, 0, 0, '', 'B', 'Na', 'Fe', 'K', 'Ca', ''),
(8, 'Khí thải của một nhà máy chế biến thức ăn gia súc có mùi trứng thối. Sục khí thải quá dung dịch Pb(NO3)2 thấy xuất hiện kết tủa màu đen. Điều này chứng tỏ là khí thải trong nhà máy có chứa khí:', 12, 1, 0, 0, '', 'A', 'H2S', 'HCl', 'SO2', 'NH3', ''),
(9, 'Chất nào sau đây thuộc loại polisaccarit?', 12, 1, 0, 1, '', 'D', 'Glucozơ', 'Fructozơ', 'Saccarozơ', 'Xenlulozơ', ''),
(10, 'Cho 12 gam hỗn hợp chứa Fe và Cu (tỷ lệ mol 1:1) vào dung dịch chứa lượng dư HCl thu được m gam muối. Giá trị của m là?', 12, 1, 1, 0, '', 'A', '12,7', '19,1', '26,2', '16,4', ''),
(11, 'Polime nào sau đây được điều chế bằng phản ứng trùng ngưng?', 12, 1, 0, 1, '', 'C', 'PE', 'PVC', 'Tơ nilon-7', 'Cao su buna', ''),
(12, 'Phương trình hóa học nào sau đây sai?', 12, 1, 0, 0, '', 'B', 'Cu + 2FeCl3 → CuCl2 + 2FeCl2', 'Cu + 2HCl → CuCl2 + H2', 'Fe + CuCl2 → FeCl2 + Cu', 'Cu + 2AgNO3 → Cu(NO3)2 + 2Ag', ''),
(13, 'Để phân biệt khí sunfurơ và khí cacbonic ta dùng', 12, 1, 0, 0, '', 'C', 'nước vôi trong dư', 'dung dịch AgNO3', 'nước brom', 'dung dịch NaOH', ''),
(14, 'Sắp xếp các chất sau đây theo thứ tự độ ngọt tăng dần?', 12, 1, 0, 1, '', 'A', 'Glucozơ < Saccarozơ < Fructozơ', 'Fructozơ < Glucozơ < Saccarozơ', 'Glucozơ < Fructozơ < Saccarozơ', 'Saccarozơ < Fructozơ < Glucozơ', ''),
(15, 'Cho 6 gam một oxit kim loại hóa trị II tác dụng vừa đủ vói HCl cho 14,25 gam muối clorua của kim loại đó. Cho biết công thức oxit kim loại?', 12, 1, 1, 0, '', 'B', 'CaO', 'MgO', 'CuO', 'Al2O3', ''),
(16, 'Cho 1,68 gam bột Mg tác dụng vừa đủ với 500ml dung dịch HNO3 nồng độ x mol/l thu được dung dịch Y và 0,448 lít khí NO (đktc). Giá trị của X là', 12, 1, 1, 0, '', 'B', '0,373', '0,36', '0,32', '0,16', ''),
(17, 'Phát biểu sau đây đúng là:', 12, 1, 0, 0, '', 'D', 'muối ăn rắn, khan dẫn điện', 'benzen là chất điện li mạnh', 'HCl là chất điện li yếu', 'dung dịch KCl dẫn điện', ''),
(18, 'Thành phần chính của quặng Apatit là?', 12, 1, 0, 0, '', 'C', 'Ca3(PO4)2.CaF2', 'Ca3(PO4)2', '3Ca3(PO4)2.CaF2', '3Ca3(PO4)2.2CaF2', ''),
(19, 'Bao nhiêu chất sau đây là axit nhiều nấc: HCl, H2SO4, HNO3, H2SO3, H3PO4, CH3COOH, HF, HBr?', 12, 1, 0, 0, '', 'D', '5', '4', '2', '3', ''),
(20, 'Cho các chất: Al, Al2O3, Ca(HCO3)2, (NH4)2CO3, CH3COONH4, NaHSO4, axit glutamic, Sn(OH)2, Pb(OH)2. Số chất lưỡng tính là', 12, 1, 0, 0, '', 'D', '8', '5', '6', '7', ''),
(21, 'Cho m gam hỗn hợp hai amin đon chức bậc I có tỷ khối so với hidro là 30, tác dụng hoàn toàn với FeCl2 thu được kết tủa X. Lấy kết tủa nung trong không khí đến khối lượng không đổi thu được 18 gam chất rắn. Giá trị của m là:', 12, 1, 1, 0, '', 'D', '30,0', '15,0', '40,5', '27,0', ''),
(22, 'Tiến hành các thí nghiệm sau:(a) Cho Cu dư vào dung dịch Fe(NO3)3.	(b) Sục khí CO2 dư vào dung dịch NaOH. (c) Cho Na2CO3 dư vào dung dịch Ca(HCO3)2.	(d) Cho bột Fe (dư) vào dung dịch FeCl3 (e)	Sục khí NO2 (dư) vào dung dịch NaOH. (f)	Cho 3 mol Fe(NO3)2 và', 12, 3, 0, 0, '', 'A', '2', '1', '4', '3', ''),
(23, 'Cho 21,55 gam hỗn hợp X gồm H2N-CH2-COOH và H2N-CH2-COOC2H5 phản ứng với dung dịch NaOH loãng dư đun nóng thu được 4,6 gam ancol. % theo khối lượng của H2N-CH2-COOH trong hỗn hợp X là:', 12, 2, 1, 0, '', 'B', '47,8%', '52,2%', '71,69%', '28,3%', ''),
(24, 'Hỗn hợp X gồm hai este no, đơn chức, mạch hở. Đốt cháy hoàn toàn một lượng X cần dùng vừa đủ 3,976 lít O2 (đktc), thu được 6,38 gam CO2. Mặt khác, X tác dụng với dung dịch NaOH thu được một muối và hai ancol là đồng đẳng kế tiếp. Phần trăm số mol của este', 12, 2, 1, 1, '', 'B', '33,53%', '37,5%', '25%', '62,5%', ''),
(25, 'Nhiệt phân hoàn toàn 17,25 gam một loại quặng đôlômit có lẫn tạp chất trơ sinh ra 3,36 lít khí CO2 (ở đktc). Thành phần phần trăm về khối lượng của chất trơ trong loại quặng là:', 12, 2, 1, 0, '', 'B', '50%', '20%', '30%', '40%', ''),
(26, 'Cho 0,35 mol bột Cu và 0,06 mol Fe(NO3)3 vào bình dung dịch chứa 0,24 mol H2SO4 (loãng). Sau khi các phản ứng xảy ra hoàn toàn, thu được V lít khí NO (sản phẩm khử duy nhất, ở đktc), thêm tiếp dung dịch NaOH dư vào bình thu được m gam hỗn hợp rắn. Giá trị', 12, 2, 1, 0, '', 'B', '25,98', '34,94', '30,12', '28,46', ''),
(27, 'Nguyên tắc chung của phép phân tích định tính các hợp chất hữu cơ là', 12, 2, 0, 0, '', 'A', 'Chuyển hoá C, H, N thành các chất vô cơ đơn giản dễ nhận biết', 'Đốt cháy hợp chất hữu cơ để tìm hiđro dưới dạng hơi nước', 'Đốt cháy hợp chất hữu cơ để tìm cacbon dưới dạng muội đen.', 'Đốt cháy hợp chất hữu cơ để tìm nitơ do có mùi khét như tóc cháy.', ''),
(28, 'Dung dịch X gồm Mg2+; NH +; SO 2−; Cl−. Chia X thành 2 phần bằng nhau. Thêm NaOH dư vào phần 1 đun nóng được 0,58 gam kết tủa và 0,672 lít khí (đktc). Phần 2 tác dụng với dung dịch BaCl2 dư được 4,66 gam kết tủa. Khối lượng các chất tan trong X là', 12, 2, 0, 0, '', 'B', '2,7 gam', '6,11 gam', '3,055 gam', '5,4 gam', ''),
(29, 'Hỗn hợp X có tỉ khối so với H2 là 27,25 gồm: Butan, but -1- en và vinylaxetilen. Đốt cháy hoàn toàn 0,15 mol hỗn hợp X thu được tổng khối lượng của CO2 và H2O là m gam. Mặt khác, khi dẫn 0,15 mol hỗn hợp X trên vào bình đựng dung dịch brom dư thấy có a ga', 12, 2, 1, 1, '', 'B', '43,95 gam và 42 gam', '35,175 gam và 42 gam', '35,175 gam và 21 gam', '43,95 gam và 21 gam', ''),
(30, 'Sục 17,92 lít H2S ở (đktc) vào V ml dung dịch hỗn hợp NaOH 1M, KOH 1M và Ba(OH)2 0,5M, đến phản ứng hoàn toàn thu được dung dịch X. Cô cạn X thu được 45,9 gam chất rắn khan. Giá trị của V là:', 12, 2, 1, 0, '', 'C', '300', '250', '200', '400', ''),
(31, 'Hoà tan hoàn toàn một lượng Ba vào dung dịch chứa a mol HCl thu được dung dịch X và a mol H2. Trong các chất sau: Na2SO4, Na2CO3, Al, Al2O3, AlCl3, Mg, NaOH, NaHCO3. Số chất tác dụng được với dung dịch X là', 12, 2, 0, 0, '', 'B', '7', '6', '5', '4', ''),
(32, 'Cho các phát biểu sau:(a).	CH2=CHCOOCH3, FeCl3, Fe(NO3)3 đều là các chất vừa có tính oxi hóa vừa có tính khử. (b).	Anilin, phenol đều tác dụng với dung dịch brom và cho kết tủa trắng. (c).	Anđehit fomic, axetilen, glucozo đều tham gia phản ứng với dung dị', 12, 2, 0, 0, '', 'B', '4', '3', '1', '2', ''),
(33, 'Đốt cháy hoàn toàn 5,8 gam hỗn hợp X chứa ba este đều đơn chức, mạch hở cần a mol O2 vừa đủ, thu được 5,376 lít khí CO2 (đktc). Mặt khác, hidro hóa hoàn toàn 5,8 gam X cần dùng 0,06 mol H2. Giá trị của a?', 12, 2, 1, 0, '', 'C', '0,3', '0,15', '0,25', '0,20', ''),
(34, 'Nung nóng 19,52 gam hỗn hợp gồm Al và Cr2O3 trong điều kiện không có không khí, sau một thời gian, thu được hỗn hợp rắn X. Hòa tan hết X cần dùng 600 ml dung dịch HCl 1,6M thu được 0,18 mol khí H2 và dung dịch Y. Cho dung dịch NaOH dư vào Y, thu được X ga', 12, 2, 1, 0, '', 'B', '72,00 gam', '10,32 gam', '6,88 gam', '8,60 gam', ''),
(39, 'Đốt cháy hoàn toàn m gam một triglixerit X cần dùng 1,61 mol O2, thu được 1,14 mol CO2 và 1,06 mol H2O. Cho 26,58 gam X tác dụng vừa đủ với dung dịch NaOH thì khối lượng muối tạo thành là', 12, 3, 1, 0, '', 'C', '18,28 gam', '27,14 gam', '27,42 gam', '25,02 gam', ''),
(40, 'X là este đơn chức, Y là este hai chức (X, Y đều mạch hở). Đốt cháy 24 gam hỗn hợp E chứa X, Y sản phẩm cháy thu được gồm CO2 và H2O có số mol hơn kém nhau 0,6 mol. Mặt khác, đun nóng 24 gam E cần dùng 280 ml dung dịch KOH 1M thu được một muối duy nhất và', 12, 3, 1, 1, '', 'A', '0,36', '0,40', '0,32', '0,45', ''),
(41, 'Hỗn hợp E chứa hai peptit X, Y (đều hở, tạo bởi Gly và Val) và este Z có công thức CH2=CHCOOCH3. Đun nóng 0,16 mol E trong NaOH (vừa đủ) thu được hỗn hợp muối và ancol. Đốt cháy hoàn toàn hỗn hợp muối trên sản phẩm cháy thu được có 17,49 gam Na2CO3, 48,08', 12, 3, 1, 1, '', 'A', '14%', '20%', '16%', '18%', ''),
(42, 'Hòa tan hết 0,17 mol hỗn hợp X gồm Al, Al2O3 và Al(NO3)3 trong dung dịch chứa x mol HNO3 và b mol H2SO4, kết thúc phản ứng, thu được dung dịch Y chỉ chứa 36,57 gam các muối trung hòa và 1,344 lít (đktc) hỗn hợp khí Z gồm hai đơn chất khí có tổng khối lượn', 12, 3, 1, 0, '', 'B', '0,38', '0,34', '0,35', '0,36', ''),
(45, 'Các hợp chất trong dãy chất nào dưới đây đều có tính lưỡng tính?', 12, 2, 0, 0, '', 'A', 'Cr(OH)3, Zn(OH)2, Pb(OH)2.', 'Cr(OH)3, Zn(OH)2, Mg(OH)2', 'Cr(OH)3, Pb(OH)2, Mg(OH)2', 'Cr(OH)3, Fe(OH)2, Mg(OH)2.', ''),
(46, 'Cho các phản ứng sau: Fe + 2Fe(NO3)3 → 3Fe(NO3)2 ; AgNO3 + Fe(NO3)2 → Fe(NO3)3 + Ag Dãy sắp xếp theo thứ tự tăng dần tính oxi hóa của các ion kim loại là', 12, 2, 0, 0, '', 'A', 'Fe2+, Fe3+, Ag+', 'Ag+, Fe2+, Fe3+', 'Fe2+, Ag+, Fe3+', 'Ag+ , Fe3+, Fe2+', ''),
(47, 'Cacbon vô định hình được điều chế từ than gỗ hay gáo dừa có tên là than hoạt tính. Tính chất nào sau đây của than hoạt tính giúp cho con người chế tạo các thiết bị phòng độc, lọc nước?', 12, 2, 0, 0, '', 'B', 'Đốt cháy than sinh ra khí cacbonic.', ' Hấp phụ các chất khí, chất tan trong nước.', ' Khử các chất khí độc, các chất tan trong nước.', 'Oxi hoá các chất khí độc, các chất tan trong nước', ''),
(48, 'Cho một oxit của kim loại M vào bình chứa dung dịch H2SO4 loãng dư, sau khi kết thúc phản ứng, thêm tiếp dung dịch NaOH dư vào bình, thu được dung dịch có màu vàng. Oxit của kim loại M là', 12, 2, 0, 0, '', 'C', 'Cr2O3', 'CuO', ' CrO3', 'Al2O3', ''),
(49, 'Polime nào sau đây là tơ được điều chế bằng phản ứng trùng hợp?', 12, 2, 0, 1, '', 'C', 'Polietilen', 'Poli(hexametylen-ađipamit)', 'Poliacrilonitrin', 'Polienantamit', ''),
(50, 'Phát biểu nào sau đây sai ?', 12, 2, 0, 1, '', 'D', ' Trong công nghiệp có thể chuyển hoá chất béo lỏng thành chất béo rắn.', ' Nhiệt độ sôi của este thấp hơn hẳn so với ancol có cùng phân tử khối.', '. Số nguyên tử hiđro trong phân tử este đơn và đa chức luôn là một số chẵn', 'Sản phẩm của phản ứng xà phòng hoá chất béo là axit béo và glixerol', ''),
(51, 'Phát biểu nào sau đây không đúng?', 12, 2, 0, 1, '', 'A', 'Tinh bột là hỗn hợp gồm amilozơ và amilopectin đều tan tốt trong nước nóng', 'Dung dịch glucozơ hòa tan Cu(OH)2 tạo dung dịch màu xanh lam.', 'Xenlulozơ trinitrat được dùng làm thuốc súng không khói', 'Fructozơ tác dụng với dung dịch AgNO3/NH3, đun nóng thu được kết tủa bạc trắng', ''),
(52, 'Phát biểu đúng là:', 12, 2, 0, 1, '', 'B', 'Tripeptit mạch hở luôn phản ứng với dung dịch NaOH theo tỉ lệ mol 1:3', 'Protein đơn giản được tạo thành từ các gốc α-amino axit', 'Ở trạng thái kết tinh, các α-amino axit tồn tại chủ yếu dưới dạng phân tử.', 'Các protein không tan trong nước nguội nhưng tan tốt trong nước đun sôi.', ''),
(55, 'Cho phương trình hóa học hai phản ứng sau: (1) 2Al + 6HCl → 2AlCl3 + 3H2 (2) 2Al + 2NaOH + 2H2O → 2NaAlO2 + 3H2; Nhận định đúng là:', 12, 2, 0, 0, '', 'D', 'Al có tính lưỡng tính', ' Ở phản ứng (2), NaOH đóng vai trò là chất oxi hóa.', 'Ở phản ứng (1), anion Cl‒ trong axit HCl đóng vai trò là chất oxi hóa.', ' Ở phản ứng (2), H2O đóng vai trò là chất oxi hóa', ''),
(56, 'Đốt cháy hoàn toàn m gam hỗn hợp Mg và Al vừa đủ 2,8 lít khí O2 (đktc) thu được 9,1 gam hỗn hợp hai oxit. Giá trị của m là', 12, 2, 1, 0, '', 'A', '5,1 ', '7,1', '6,7', '3,9', ''),
(57, 'Phát biểu sai là:', 12, 2, 0, 0, '', 'C', 'Gang là hợp kim của Fe và C.', 'Sắt là kim loại màu trắng hơi xám, dẫn nhiệt tốt.', ' Quặng pirit sắt có thành phần chính là FeCO3', 'Sắt (II) hiđroxit là chất rắn, màu trắng xanh, không tan trong nước.', ''),
(58, 'Hòa tan một oxit sắt vào dung dịch H2SO4 loãng dư được dung dịch X. Chia dung dịch X làm 2 phần bằng nhau: - Phần 1: Cho một ít vụn Cu vào thấy tan ra và cho dung dịch có màu xanh - Phần 2: Cho một vài giọt dung dịch KMnO4 vào thấy bị mất màu. Oxit sắt là', 12, 2, 0, 0, '', 'B', 'FeO', 'Fe3O4 ', 'Fe2O3', 'FeO hoặc Fe2O3', ''),
(59, 'Phương án nào sau đây không đúng?', 12, 2, 0, 0, '', 'D', 'Na2CO3 là hóa chất quan trọng trong công nghiệp thủy tinh, bột giặt ...', 'Cs được dùng làm tế bào quang điện', 'Ca(OH)2 được dùng rộng rãi trong nhiều ngành công nghiệp: sản xuất amoniac, clorua vôi, vật liệu xây dựng...', 'Thạch cao sống được dùng để nặn tượng, đúc khuôn và bột bó khi gãy xương...', ''),
(60, 'Cho 0,3 mol hỗn hợp X gồm H2NC3H5(COOH)2 (axit glutamic) và (H2N)2C5H9COOH (lysin) vào 400 ml dung dịch HCl 1M, thu được dung dịch Y. Biết Y phản ứng với vừa hết 800ml dung dịch NaOH 1M. Số mol lysin trong hỗn hợp X là:', 12, 2, 1, 0, '', 'B', '0,1', '0,2 ', '0,25', '0,15', ''),
(61, 'Cho dung dịch Ba(HCO3)2 lần lượt vào các dung dịch: CuSO4, NaOH, NaHSO4, K2CO3, Ca(OH)2, H2SO4, HNO3, MgCl2, HCl, Ca(NO3)2. Số trường hợp có phản ứng xảy ra là:', 12, 2, 1, 0, '', 'C', '6', '7', '8', '9', ''),
(62, 'Cho hỗn hợp gồm Na, K, Ba vào 200 ml dung dịch CuCl2 0,6M. Sau khi kết thúc các phản ứng, thu được 2,24 lít khí H2 (đktc) và m gam kết tủa. Giá trị m là', 12, 2, 1, 0, '', 'A', '9,80gam', '11,76gam', '19,60gam', '4,90gam', ''),
(63, 'Cho các hợp kim sau: Cu-Fe (1); Zn-Fe (2); Fe-C (3); Sn-Fe (4); Fe-Cr-Ni (5). Để lâu các hợp kim trên trong không khí ẩm, số trường hợp xảy ra ăn mòn điện hóa là:', 12, 2, 0, 0, '', 'B', '2', '4', '3', '5', ''),
(64, 'Cho dãy các chất sau: glucozơ, isoamyl axetat, phenylamoni clorua, anilin, Gly-Val, triolein. Số chất tác dụng được với dung dịch NaOH, đun nóng là:', 12, 2, 0, 1, '', 'C', '5', '3', '4', '6', ''),
(65, 'Đốt cháy hoàn toàn x mol chất béo X, thu được y mol CO2 và z mol H2O. Mặt khác x mol X tác dụng với dung dịch chứa tối đa 5x mol Br2. Biểu thức liên hệ giữa x, y, z là:', 12, 2, 0, 0, '', 'C', 'y = 4x + z', 'Y = 6x + z', 'y = 7x + z', 'Y = 5x + z', ''),
(66, 'Cho hỗn hợp gồm Mg và Zn có tỉ lệ mol tương ứng 2 : 1 vào 500 ml dung dịch Fe(SO4)3 0,2M và CuSO4 0,3M. Sau khi các phản ứng xảy ra hoàn toàn, thu được dung dịch Y và m gam rắn Z. Cho dung dịch NaOH dư vào dung dịch Y, lấy kết tủa nung ngoài không khí đến', 12, 2, 1, 0, '', 'C', '13,32gam', '9,60gam', '17,44gam ', '12,88gam', ''),
(67, 'Cho luồng khí H2 (dư) qua hỗn hợp các oxit Al2O, CuO, Fe2O3, MgO nung ở nhiệt độ cao thu được rắn X. Cho toàn bộ X vào dung dịch HCl loãng dư, thu được dung dịch Y. Cho dung dịch NaOH dư vào dung dịch Y, lấy kết tủa nung ngoài không khí đến khối lượng khô', 12, 2, 0, 0, '', 'D', ' Dung dịch Y hòa tan được bột Fe.', ' Trong X chứa hai hợp chất và hai đơn chất.', ' Trong Z chứa hai loại oxit.', ' Dung dịch Y chỉ chứa ba muối clorua. ', ''),
(68, 'Phản ứng tổng hợp glucozơ trong cây xanh như sau: 6CO2 + 6H2O → C6H12O6 + 6O2 + 2813 kJ. Trung bình một phút, mỗi cm2 bề mặt trái đất cần nhận được khoảng năng lượng mặt trời là bao nhiêu Calo để trong 22 giờ 26 phút 10 lá xanh với diện tích mỗi lá là 10 ', 12, 2, 1, 0, '', 'A', '0,5cal ', '0,48cal', '5cal', '0,05cal', ''),
(69, 'Thực hiện các phản ứng nhiệt nhôm hỗn hợp gồm m gam Al và 4,56 gam Cr2O (trong điều kiện không có O), sau khi phản ứng kết thúc, thu được hỗn hợp X. Cho toàn bộ X vào một lượng dư dung dịch HCl (loãng, nóng), sau khi các phản ứng xảy ra hoàn toàn, thu đượ', 12, 2, 1, 0, '', 'D', '0,16mol', '0,06mol', '0,08mol', '0,10mol ', ''),
(70, 'Có các hiện tượng được mô tả như sau: (1) Cho benzen vào ống nghiệm chứa tristearin, khuấy đều thấy tristearin tan ra. (2) Cho benzen vào ống nghiệm chứa anilin, khuấy đều thấy anilin tan ra. (3) Cho nước Svayde vào ống nghiệm chứa xenlulozơ, khuấy đều th', 12, 2, 0, 0, '', 'D', '5', '2', '3', '4', ''),
(71, 'cho các hỗn hợp (tỉ lệ mol tương ứng) sau: (a) Al và Na (1 : 2) vào nước dư. (b) Fe2(SO4)3 và Cu (1 : 1) vào nước dư. (c) Cu và Fe2O3 (2 : 1) vào dung dịch HCl dư. (d) BaO và Na2SO4 (1 : 1) vào nước dư. (e) Al4C3 và CaC2 (1 : 2) vào nước dư. (f) BaCl2 và ', 12, 2, 0, 0, '', 'B', '4', '3', '2', '5', ''),
(72, 'Cho m gam hỗn hợp gồm Al4C3, CaC và Ca vào nước (dùng rất dư) đến khi phản ứng xảy ra hoàn toàn thu được hỗn hợp khí X và 3,12 gam kết tủa. Cho hỗn hợp khí X đi chậm qua Ni, đun nóng thu được hỗn hợp khí Y chỉ chứa các hiđrocacbon có tỉ khối so với H2 bằn', 12, 2, 1, 0, '', 'B', '23,08gam', '24,00gam ', '21,12gam', '25,48gam', ''),
(73, 'Hòa tan hết m gam hỗn hợp Na, Na2O và ZnO vào 300 ml dung dịch NaOH 0,5M thu được dung dịch X và 1,792 lít khí H2 (đktc). Cho từ từ dung dịch HCl 1M vào X, đến khi bắt đầu xuất hiện kết tủa thì đã dùng 80 ml. Nếu cho 320 ml hoặc 480 ml dung dịch HCl 1M và', 12, 2, 1, 0, '', 'A', '19,43gam', '22,22gam', '24,08gam', '23,60gam', ''),
(74, 'Cho hỗn hợp M chứa các chất hữu cơ mạch hở gồm anken X (CnH2n, n > 2) và hai amin đơn chức Y, Z (đồng đẳng kế tiếp nhau, MY < M). Đốt cháy 2,016 lít hỗn hợp M bằng lượng oxi vừa đủ thu được 10,2816 lít hỗn hợp khí và hơi N. Dẫn toàn bộ N qua bình đựng dun', 12, 2, 1, 0, '', 'B', '76 đvC', '100 đvC', '132 đvC', '160 đvC', ''),
(75, 'Cho hỗn hợp M chứa các chất hữu cơ mạch hở gồm anken X (CnH2n, n > 2) và hai amin đơn chức Y, Z (đồng đẳng kế tiếp nhau, MY < M). Đốt cháy 2,016 lít hỗn hợp M bằng lượng oxi vừa đủ thu được 10,2816 lít hỗn hợp khí và hơi N. Dẫn toàn bộ N qua bình đựng dun', 12, 2, 1, 0, '', 'B', '76 đvC', '100 đvC', '132 đvC', '160 đvC', ''),
(76, 'Cho m gam bột Fe vào bình kín chứa đồng thời 0,06 mol O2 và 0,03 mol Cl2, rồi đốt nóng. Sau khi các phản ứng xảy ra hết chỉ thu được hỗn hợp chất rắn chứa các oxit sắt và muối sắt (không còn khí dư). Hòa tan hết hốn hợp này trong một lượng dung dịch HCl (', 12, 3, 1, 0, '', 'D', '5,88', '5,60', '6,44', '6,72 ', ''),
(77, 'X, Y là 2 axit cacboxylic đều mạch hở, Z là ancol no, T là este hai chức, mạch hở được tạo bởi X, Y, Z. Đun nóng 38,86 gam hỗn hợp E chứa X, Y, Z, T với 400 ml dung dịch NaOH 1M (vừa đủ), thu được ancol Z và hỗn hợp F gồm hai muối có tỉ lệ mol 1 : 1. Dẫn ', 12, 3, 1, 0, '', 'B', '26,44%', '50,88%', '48,88%', '33,99%', ''),
(78, 'Cho 19,68 gam hỗn hợp gồm Mg, FeCO vào dung dịch chứa 1,22 mol NaHSO4 và 0,08 mol Fe(NO3)3, khuấy đều cho các phản ứng xảy ra hoàn toàn, thấy thoát ra hỗn hợp khí X gồm NO, N2O và 0,06 mol CO2; đồng thời thu được dung dịch Y và 3,36 gam một kim loại không', 12, 3, 1, 0, '', 'B', '10,2', '10,0 ', '10,4', '10,6', ''),
(79, 'X, Y (MX < M) là hai peptit mạch hở, hơn kém nhau một liên kết peptit. Đun nóng 36,58 gam hỗn hợp E chứa X, Y và este Z (C5H11ON) với dung dịch NaOH vừa đủ, chưng cất dung dịch sau phản ứng, thu được 0,05 mol ancol etylic và hỗn hợp chứa 2 muối của 2 α-am', 12, 3, 1, 0, '', 'D', '45,2%', '29%', '34,1%', '27,1%', '');

-- --------------------------------------------------------

--
-- Table structure for table `clan`
--

CREATE TABLE `clan` (
  `nameclan` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `point` int(11) NOT NULL,
  `rankclan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `ask_id` int(11) NOT NULL,
  `username_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `point` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`id`, `user_id`, `point`, `status`) VALUES
(3, 'danghung', 0, 'create');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `exam_id` int(11) NOT NULL,
  `ques` int(11) NOT NULL,
  `yourans` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `exam_id`, `ques`, `yourans`) VALUES
(1, 3, 18, 0),
(2, 3, 62, 0),
(3, 3, 46, 0),
(4, 3, 13, 0),
(5, 3, 3, 0),
(6, 3, 26, 0),
(7, 3, 11, 0),
(8, 3, 23, 0),
(9, 3, 46, 0),
(10, 3, 69, 0),
(11, 3, 52, 0),
(12, 3, 12, 0),
(13, 3, 5, 0),
(14, 3, 73, 0),
(15, 3, 78, 0),
(16, 3, 2, 0),
(17, 3, 77, 0),
(18, 3, 32, 0),
(19, 3, 63, 0),
(20, 3, 25, 0),
(21, 3, 33, 0),
(22, 3, 27, 0),
(23, 3, 28, 0),
(24, 3, 32, 0),
(25, 3, 19, 0),
(26, 3, 60, 0),
(27, 3, 72, 0),
(28, 3, 25, 0),
(29, 3, 69, 0),
(30, 3, 59, 0),
(31, 3, 28, 0),
(32, 3, 75, 0),
(33, 3, 78, 0),
(34, 3, 2, 0),
(35, 3, 25, 0),
(36, 3, 49, 0),
(37, 3, 78, 0),
(38, 3, 73, 0),
(39, 3, 79, 0),
(40, 3, 24, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Error reading structure for table studydata.users: #1932 - Table 'studydata.users' doesn't exist in engine
-- Error reading data for table studydata.users: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `studydata`.`users`' at line 1

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ask`
--
ALTER TABLE `ask`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chemistry`
--
ALTER TABLE `chemistry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clan`
--
ALTER TABLE `clan`
  ADD PRIMARY KEY (`nameclan`),
  ADD UNIQUE KEY `nameclan` (`nameclan`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ask`
--
ALTER TABLE `ask`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
