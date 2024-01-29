import { Button, Card, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const dataCard = [
  {
    title: 'Thiết kế nội thất miễn phí',
    script: 'Bạn muốn xây nhà mới cần bảng vẽ nội thất chi tiết từng không gian?',
    button: 'TRAO ĐỔI CÙNG KST',
  },
  {
    title: 'Tìm đơn vị thi công uy tín',
    script: 'Bạn muốn cải tạo nhà cần tìm đội ngũ tay nghề cao cam kết tiến độ và chất lượng?',
    button: 'NHẬN BÁO GIÁ NGAY',
  },
  {
    title: 'Tư vấn 1:1 cùng KTS',
    script: 'Bạn đang lên ý tưởng cần định hình phong cách và nội thất phù hợp',
    button: 'ĐĂNG KÍ TƯ VẤN',
  },
];

const BodyPart3 = () => {
  return (
    <div>
      <Grid container spacing={3} className="bodypart3-box">
        {dataCard.map((item) => (
          <Grid item xs={2} sm={4} md={4} className="bodypart3-item">
            <Typography variant="h4" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {item.script}
            </Typography>
            <Button variant="contained" color="warning">
              {item.button}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BodyPart3;
