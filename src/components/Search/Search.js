import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [images, setImages] = useState([
   
    
      {
        url: "https://sanxuatnoithatgo.com/kcfinder/upload/images/thi-cong-noi-that-chung-cu.jpg",
        content: "CĂN HỘ CAO CẤP-Q7-PHÚ MỸ HƯNG-HIỆN ĐẠI"
      },
      {
        url: "https://bizweb.dktcdn.net/100/407/310/products/1-d4023b3d-fcc9-45a3-95c1-84f2cc47958b.jpg?v=1611907168207",
        content: "CĂN HỘ 2 PHÒNG NGỦ-THẢO ĐIỀN-Q2-HIỆN ĐẠI"
      },
      {
        url: "https://noithatbaolam.vn/wp-content/uploads/2020/09/222.jpg",
        content: "NHÀ PHỐ-Q1-HIỆN ĐẠI"
      },
      {
        url: "https://homeid.vn/wp-content/uploads/2018/07/4715/Phong%20khach-Vincom%20shophouse-%20m%E1%BA%ABu%201-1.jpg",
        content: "PHÒNG KHÁCH-Q9-HIỆN ĐẠI"
      },
      {
        url: "https://i.pinimg.com/originals/dd/b2/26/ddb226927d93b33403817d2e0a119f37.jpg",
        content: "PHÒNG NGỦ-PHÚ NHUẬN-HIỆN ĐẠI"
      },
      {
        url: "https://bizweb.dktcdn.net/100/153/764/products/thiet-ke-noi-that-nha-pho-3-pn-dep-tai-bd-1.jpg?v=1660547188800",
        content: "NHÀ PHỐ-CÁI BÈ-HIỆN ĐẠI"
      },
  
      {
        url: "https://bizweb.dktcdn.net/100/407/310/products/thiet-ke-noi-that-can-ho-2pn-chung-cu-premier-binh-duong.jpg?v=1620362140030",
        content: "CĂN HỘ CAO CẤP-2PN-DĨ AN BÌNH DƯƠNG-HIỆN ĐẠI"
      },
      {
        url: "https://unl.vn/wp-content/uploads/2021/03/me-man-voi-3-thiet-ke-noi-that-nha-pho-cuc-tien-loi-noi-that-nha-pho.jpg",
        content: "NHÀ PHỐ-PHÚ NHUẬN-HIỆN ĐẠI"
      },
      {
        url: "https://homehome.vn/wp-content/uploads/du-an-thiet-ke-noi-that-can-ho-chung-cu-epic-home-4.jpg",
        content: "CĂN HỘ CAO CẤP-CHUNG CƯ EPIC HOME-Q3-HIỆN ĐẠI"
      },
  
      {
        url: "https://donggia.vn/wp-content/uploads/2018/12/mau-thiet-ke-noi-that-phong-khach-biet-thu-dep-2021.jpg",
        content: "CĂN HỘ CAO CẤP-DUPLEX-HÀ NỘI-HIỆN ĐẠI"
      }
     
    
    // Add other images here
  ]);
  const handleButtonClick = (category, content) => {
    console.log(`Search in category ${category}: ${searchTerm}`);
    console.log(`Content: ${content}`);
    setSelectedResult(content);
    setSearchTerm('');
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Tìm kiếm trong danh sách hình ảnh
    const results = images.filter((image) => image.content.includes(term));
    setSearchResults(results);
  };

  const handleAddImage = () => {
    const newUrl = prompt("Enter image URL:");
    const newContent = prompt("Enter image content:");
    if (newUrl && newContent) {
      const newImage = { url: newUrl, content: newContent };
      setImages([...images, newImage]);
    }
  };

  const handleEditImage = (index) => {
    const updatedImages = [...images];
    const editedImage = { ...updatedImages[index] };
    const newContent = prompt("Enter new content:", editedImage.content);
    if (newContent !== null) {
      editedImage.content = newContent;
      updatedImages[index] = editedImage;
      setImages(updatedImages);
      setSearchResults(updatedImages.filter(image => image.content.includes(searchTerm)));
    }
  };
  
  const handleDeleteImage = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (confirmDelete) {
      const updatedImages = [...images];
      updatedImages.splice(index, 1);
      setImages(updatedImages);
      setSearchResults(updatedImages.filter(image => image.content.includes(searchTerm)));
    }
  };
  

  return (
    <div className="Search">
    <div className="Search-container">
      <div className="Search-input-container">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={handleSearch}
          className="Search-input"
        />
        <button
          className="Search-button"
          onClick={() => handleButtonClick('design', searchTerm)}
        >
          <i className="large material-icons">SEARCH</i>
        </button>
      </div>

      <h1 className="h11">MẪU THIẾT KẾ</h1>

    
        <div className="Search-grid">
          {searchResults.map((image, index) => (
            <div className="Search-item" key={index}>
              <span className="icon-container">
                <img src={image.url} alt={`Icon ${index + 1}`} />
              </span>
              <div className="Search-content">
                <p>
                  <strong>{image.content}</strong>
                </p>
                <button onClick={() => handleEditImage(index)}>Edit</button>
                <button onClick={() => handleDeleteImage(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleAddImage}>Add Image</button>

      {selectedResult && (
        <div className="Selected-result">
          <p>Bạn đã chọn: {selectedResult}</p>
        </div>
      )}
    </div>
  );
};

export default Search;