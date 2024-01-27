import React from 'react';
import Header from '../../components/Header/Header';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './About.css';
const About = () => {
  const dataBodyPart1 = [
    {
      title: 'Nội thất My House',
      description:
        'Cung cấp dịch vụ tư vấn, thiết kế và thi công nội thất, từ phần thô cho đến hoàn thiện, với đội ngũ KTS giàu kinh nghiệm và đội thợ lành nghề. ',
      logo: 'My House',
    },
    {
      title: 'My House decor',
      description:
        'Cung cấp sản phẩm nội thất giá gốc tại xưởng với trải nghiệm mua sắm được tư vấn trực tiếp bởi KTS sao cho phù hợp với không gian sống của bạn.',
      logo: 'My House',
    },
  ];

  const dataBodyPart2 = [
    {
      image: 'https://www.lanha.vn/wp-content/uploads/2023/03/bg-1.jpg.webp',
      description:
        'Quy mô trên 1200m² với kho bãi tách riêng, đảm bảo quy trình khép kín từ lắp đặt, kiểm tra, đến thi công sản xuất. Các thiết bị máy móc công nghệ tiên tiến từ Đức, Nhật Bản.',
      name: 'https://www.lanha.vn/wp-content/uploads/2023/03/logo-xuong.png.webp',
    },
    {
      image: 'https://www.lanha.vn/wp-content/uploads/2023/03/bg-2.jpg.webp',
      description:
        'Đội ngũ KTS trên 5 năm kinh nghiệm và 16 đội thợ lành nghề sản xuất cố định để theo kịp tiến độ sản xuất, liên tục được đào tạo và cập nhật về công nghệ, kỹ thuật để nâng cao tay nghề.',
      name: 'https://www.lanha.vn/wp-content/uploads/2023/03/logo-nhan-su.png.webp',
    },
    {
      image: 'https://www.lanha.vn/wp-content/uploads/2023/03/bg-3.jpg.webp',
      description:
        'Là một trong những showroom mang lại trải nghiệm mua sắm tốt nhất hiện nay. Với diện tích 800m², tách biệt các không gian thành 10 phong cách nội thất khác nhau, cùng với 1 phòng vật liệu và tư vấn.',
      name: 'https://www.lanha.vn/wp-content/uploads/2023/03/logo-showroom.png.webp',
    },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Header />
      <Container className="container-about">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={6}>
              <img
                src="https://marketplace.canva.com/EADzOu5WhZE/2/0/1600w/canva-trang-%C4%91%E1%BA%B7c-s%E1%BA%AFc-c%E1%BB%ADa-h%C3%A0ng-bi%E1%BB%83u-tr%C6%B0ng-cmVWCGiGSRQ.jpg"
                className="image-about"
              />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h5" gutterBottom className="desctiption-about">
                Thiết kế nội thất không chỉ là sáng tạo trên bàn giấy, đằng sau đó là sự tính toán hợp lý cho
                nhu cầu người sử dụng. Bằng việc cung cấp giải pháp nội thất toàn diện từ thiết kế đến thi
                công, Là Nhà có đủ năng lực để{' '}
                <span className="text-highlight">
                  biến đổi không gian sống đáp ứng được sự cân bằng giữa thẩm mỹ và công năng.
                </span>{' '}
                Từ đó mang đến cho gia chủ trải nghiệm sống tốt hơn.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <img
        src="https://www.lanha.vn/wp-content/uploads/2023/03/Rectangle-1370.jpg.webp"
        className="image-about"
      />
      <div className="body-part3">
        <Container>
          <Typography variant="h5" gutterBottom className="title">
            My House chia thành hai mảng dịch vụ chính để mang đến trải nghiệm mua sắm toàn diện cho người
            dùng
            <Box sx={{ flexGrow: 1 }} className="title-box">
              <Grid container spacing={2} columns={16}>
                {dataBodyPart1.map((item) => (
                  <Grid item xs={8}>
                    <Item className="item">
                      <div className="title-container">
                        <span className="title-text">{item.title}</span>
                        <p className="description-text">{item.description}</p>
                      </div>
                      <div className="logo">{item.logo}</div>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Typography>
        </Container>
      </div>
      <div className="body-part2-container">
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {dataBodyPart2.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minHeight: '700px',
                    padding: '20px',
                    borderRadius: '10px',
                    position: 'relative',
                    zIndex: '-1',
                  }}
                  className="image-box"
                >
                  <img src={item.name} className="image-name" />
                  <span className="description-bodypart2">{item.description}</span>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default About;
