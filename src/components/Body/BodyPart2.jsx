import { Container } from '@mui/material';

const BodyPart2 = () => {
  return (
    <div class="video-container">
      <video autoPlay muted loop playsInline id="video-background">
        <source
          src="https://www.lanha.vn/wp-content/uploads/2023/10/home-video-optimized.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default BodyPart2;
