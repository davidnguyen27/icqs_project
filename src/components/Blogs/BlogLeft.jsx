import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogLeft = () => {
  const data = [
    {
      id: 1,
      image:
        'https://noithatmanhhe.vn/media/yo3ngddo/cac-phong-cach-thiet-ke-noi-that.jpg?rmode=pad&ranchor=center&width=335&height=185&format=jpg',
      title: '5 Phong cách thiết kế nội thất biệt thự HOT nhất năm 2024',
      text: 'Tìm phong cách thiết kế nội thất biệt thự phù hợp với sở thích và nhu cầu của mình Nổi bật một số phong cách xu hướng hiện nay như hiện đại tân cổ điển cổ điển',
    },
    {
      id: 2,
      image:
        'https://noithatmanhhe.vn/media/i5ajaajg/go-dan-huong.jpg?rmode=pad&ranchor=center&width=335&height=185&format=jpg',
      title: 'Gỗ Đàn Hương - Thông tin về đặc điểm, công dụng, giá thành',
      text: 'Tìm hiểu thông tin chi tiết về gỗ Đàn Hương bao gồm đặc điểm, công dụng và giá thành để có thể lựa chọn sử dụng đúng mục đích. Cùng đọc kĩ qua bài viết này nhé!',
    },
    {
      id: 3,
      image:
        'https://noithatmanhhe.vn/media/liaf1jwg/trang-tri-phong-bep-voi-cay-xanh.jpg?rmode=pad&ranchor=center&width=335&height=185&format=jpg',
      title: 'Nên trang trí phòng bếp với cây xanh loại nào là tốt nhất?',
      text: 'Trang trí phòng bếp với cây xanh để giúp phòng bếp thanh lọc khí, mùi hương và tạo không gian xanh. Một số loại cây dưới đây bạn NÊN và KHÔNG NÊN sử dụng',
    },
    {
      id: 4,
      image:
        'https://noithatmanhhe.vn/media/2muj4rbz/thi-cong-noi-that-la-gi.jpg?rmode=pad&ranchor=center&width=335&height=185&format=jpg',
      title: 'Thi công nội thất là gì? Xem báo giá & Những lưu ý quan trọng',
      text: 'Thi công nội thất là gì? Là câu hỏi được khá nhiều người quan tâm và thắc mắc. Trong bài viết này Mạnh Hệ sẽ chia sẻ chi tiết để bạn hiểu rõ hơn nhé!',
    },
    {
      id: 5,
      image:
        'https://noithatmanhhe.vn/media/jtrfhikt/trang-tri-phong-bep.jpg?rmode=pad&ranchor=center&width=335&height=185&format=jpg',
      title: 'Trang trí bếp với [30+ Mẫu] đẹp - ấn tượng, xu hướng nhất 2024',
      text: 'Trang trí phòng bếp với tủ bếp, bàn ăn, đèn thả, cây xanh,... tạo nên không gian nấu nướng, thoải mái cho cả gia đình. 30 Mẫu mới nhất sẽ được cập nhật ở bài này!',
    },
    {
      id: 6,
      image:
        'https://noithatmanhhe.vn/media/s5dd2bel/phong-ngu-dep-mau-xanh-cho-nu.jpg?rmode=pad&ranchor=center&width=335&height=185&format=jpg',
      title: '[50+ Mẫu] Thiết kế nội thất phòng ngủ đẹp cho nữ màu xanh ấn tượng',
      text: 'Mẫu thiết kế phòng ngủ đẹp cho nữ màu xanh đa phong cách, đa chất liệu. Khi thiết kế, cần lưu ý yếu tố phong thủy, số lượng nội thất,.. để tạo không gian hoàn hảo..',
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      {data.map((item, index) => (
        <Grid container spacing={2} className="container-bodyleft">
          <Grid item xs={4}>
            <img src={item.image} className="image-blogleft" onClick={() => navigate(`/blogs/${item.id}`)} />
          </Grid>
          <Grid item xs={8}>
            <div>
              <Typography
                variant="h6"
                gutterBottom
                className="title-bodyleft"
                onClick={() => navigate(`/blogs/${item.id}`)}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {item.text}
              </Typography>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default BlogLeft;
