import {
  Grid,
  Typography,
  Paper,
  Link,
  IconButton,
  Container,
  BottomNavigation,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";

const Zalo = () => <span>ZaloIcon</span>;

const Footer = () => {
  return (
    <Box component="footer" className="container-footer">
      <Container>
        <Grid container spacing={3}>
          {/* Thông Tin Liên Hệ */}
          <Grid item xs={12} sm={4} xl={3}>
            <Typography variant="h6" component="h3">
              THÔNG TIN LIÊN HỆ
            </Typography>
            <Typography variant="body1">
              Showroom: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
              Đức, Thành phố Hồ Chí Minh
            </Typography>
            <Typography variant="body1">
              Xưởng: Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh
            </Typography>
            <Typography variant="body1">
              Thời gian làm việc: Thứ 2 đến CN: Từ 8h đến 17h
            </Typography>
            <Typography variant="body1">Hotline: 02873005588</Typography>
            <Typography variant="body1">
              Email: daihoc.hcm@fpt.edu.vn
            </Typography>
          </Grid>

          {/* Dịch Vụ Nổi Bật */}
          <Grid item xs={12} sm={4} xl={3}>
            <Typography variant="h6" component="h3">
              DỊCH VỤ NỔI BẬT
            </Typography>
            <Typography variant="body1">Thiết kế nội thất</Typography>
            <Typography variant="body1">Thiết kế nội thất chung cư</Typography>
            <Typography variant="body1">Thiết kế nội thất nhà phố</Typography>
            <Typography variant="body1">Thiết kế nội thất biệt thự</Typography>
            <Typography variant="body1">Thi công nội thất</Typography>
            <Typography variant="h6" component="h3">
              HỖ TRỢ KHÁCH HÀNG
            </Typography>
            <Typography variant="body1">Quy trình và Bảo hành</Typography>
            <Typography variant="body1">Chính sách trả góp</Typography>
          </Grid>

          {/* Bài Viết Nổi Bật */}
          <Grid item xs={12} sm={4} xl={3}>
            <Typography variant="h6" component="h3">
              BÀI VIẾT NỔI BẬT
            </Typography>
            <Typography variant="body1">Mẫu tủ bếp đẹp</Typography>
            <Typography variant="body1">
              Mẫu nhà bếp nhỏ đẹp đơn giản
            </Typography>
            <Typography variant="body1">
              Mẫu phòng ngủ đẹp cho nữ màu xanh
            </Typography>
            <Typography variant="body1">Phòng ngủ màu hồng đẹp</Typography>
            <Typography variant="body1">Thi công nội thất biệt thự</Typography>
            <Typography variant="body1">Thi công nội thất văn phòng</Typography>
            <Typography variant="body1">
              Thi công nội thất chung cư HCM
            </Typography>
            <Typography variant="body1">
              Thiết kế phòng khách chung cư
            </Typography>
            <Typography variant="body1">
              Thiết kế phòng khách nhà ống
            </Typography>
            <Typography variant="body1">
              Thi công nội thất phòng khách
            </Typography>
          </Grid>
        </Grid>

        {/* Các nút mạng xã hội */}
        <Grid item xs={12} sm={4} xl={3}>
          <IconButton
            aria-label="facebook"
            component="a"
            href="https://facebook.com"
          >
            <FacebookIcon className="icon-footer" />
          </IconButton>
          <IconButton
            aria-label="youtube"
            component="a"
            href="https://youtube.com"
          >
            <YouTubeIcon className="icon-footer" />
          </IconButton>
          <IconButton
            aria-label="tiktok"
            component="a"
            href="https://tiktok.com"
          ></IconButton>
          <IconButton
            aria-label="zalo"
            component="a"
            href="https://zalo.me"
            className="icon-footer"
          >
            <Zalo />
          </IconButton>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
