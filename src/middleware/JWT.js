const jwt = require('jsonwebtoken');

const authenticateRole = (requiredRole) => {
  return (req, res, next) => {
    // Lấy token từ header
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      // Xác thực token và lấy thông tin payload
      const decoded = jwt.verify(token, 'your-secret-key');

      // Kiểm tra role
      if (!decoded.role || !requiredRole.includes(decoded.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      // Lưu thông tin user vào req để sử dụng ở các middleware hoặc route khác
      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
};

module.exports = authenticateRole;
