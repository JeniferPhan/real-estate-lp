"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const amenities = [
  {
    title: "Hồ bơi tràn bờ",
    description: "Tận hưởng không gian thư giãn tuyệt đối với tầm nhìn panorama thành phố.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Phòng Gym hiện đại",
    description: "Trang thiết bị chuẩn quốc tế giúp bạn duy trì vóc dáng và sức khỏe.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Công viên nội khu",
    description: "Mảng xanh bao phủ mang lại bầu không khí trong lành giữa lòng đô thị.",
    image: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Sảnh đón thượng lưu",
    description: "Không gian sang trọng, tinh tế đón chào bạn trở về nhà mỗi ngày.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Khu vui chơi trẻ em",
    description: "Nơi con trẻ thỏa sức sáng tạo và phát triển trong môi trường an toàn.",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name, 
            phone: formData.phone, 
            email: formData.email,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', phone: '', email: '' });
      alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.');
    } catch (error) {
      console.error('Error submitting lead:', error);
      setStatus('error');
      alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Header */}
      <header className={styles.header}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div className={styles.logo}>
            {/* SENTURIA */}
             <Image 
                src="../images/logo.svg" 
                alt="Senturia Logo" 
                width={250}
                height={250}
              />
           </div>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#overview">Tổng quan</a></li>
              <li><a href="#floorplan">Mặt Bằng</a></li>
              <li><a href="#amenities">Tiện ích</a></li>
              <li><a href="#location">Vị trí</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </nav>
          <a href="#contact" className="btn">NHẬN BÁO GIÁ</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroSlider}>
          {/* <div className={styles.slide} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600')" }}></div> */}
          <div className={styles.slide} style={{ backgroundImage: "url('../images/1.png')" }}></div>
          <div className={styles.slide} style={{ backgroundImage: "url('../images/2.png')" }}></div>
          <div className={styles.slide} style={{ backgroundImage: "url('../images/3.jpg')" }}></div>
          {/* <div className={styles.slide} style={{ backgroundImage: "url('../images/hero-slide-3.jpg')" }}></div> */}
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>KIẾN TẠO CUỘC SỐNG THƯỢNG LƯU</h1>
          <p>Trải nghiệm không gian sống đẳng cấp 5 sao tại trung tâm thành phố. <br />  Mang đến bạn trải nghiệm sống cân bằng thân - tâm - trí để mỗi ngày trôi qua đều là một kỳ nghỉ đầy thư thái.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="#contact" className="btn">XEM BẢNG GIÁ</a>
            <a href="#overview" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>TÌM HIỂU THÊM</a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className={styles.overview}>
        <div className="container">
          <div className={styles.overviewContent}>
            <div>
              <h2 style={{ marginBottom: '30px', fontSize: '2.5rem' }}>TỔNG QUAN DỰ ÁN</h2>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#666' }}>
                Senturia là biểu tượng của sự sang trọng và thịnh vượng. Là khu nhà phố – biệt thự compound cao cấp.
              </p>
              <ul style={{ marginBottom: '30px' }}>
                <li style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <strong style={{ color: 'var(--primary-color)' }}>Chủ đầu tư:</strong> Tiến Phước Group
                </li>
                <li style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <strong style={{ color: 'var(--primary-color)' }}>Vị trí:</strong>  Mặt tiền Đường Song Hành Khu Nam Rạch Chiếc, Phường Bình Trưng - TP. HCM
                </li>
                <li style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <strong style={{ color: 'var(--primary-color)' }}>Quy mô:</strong>  ~8,6 ha Số lượng sản phẩm: 355 căn (giới hạn, tính độc bản cao) ưu tiên không gian xanh & tiện ích Pháp lý
                </li>
                <li style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <strong style={{ color: 'var(--primary-color)' }}>Loại hình phát triển:</strong> Biệt thự – Nhà phố compound cao cấp
                </li>
                <li style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <strong style={{ color: 'var(--primary-color)' }}>Bàn giao:</strong> Quý IV/2027
                </li>
              </ul>
            </div>
            <div className={styles.overviewImage}>
              <Image 
                src="../images/nha-pho-thuong-mai-0-20260326023415-ksejc.jpg" 
                alt="Senturia Residence Overview" 
                width={800}
                height={500}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section id="floorplan" className={styles.floorplan}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>MẶT BẰNG DỰ ÁN</h2>
            <p>Khám phá bố cục tổng thể của dự án Senturia</p>
          </div>
          <div className={styles.floorplanImage}>
            <Image 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200" 
              alt="Mặt Bằng Dự Án Senturia" 
              width={1200}
              height={800}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Category Slider Section (Amenities) */}
      <section id="amenities" className={styles.amenities}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>TIỆN ÍCH ĐẲNG CẤP</h2>
            <p>Khám phá hệ thống tiện ích chuẩn resort dành riêng cho cư dân</p>
          </div>
          
          <div className={styles.sliderWrapper}>
            <div className="slider-container">
              {amenities.map((item, index) => (
                <div key={index} className="slide-item">
                  <div className={styles.slideImage}>
                    <Image src={item.image} alt={item.title} width={300} height={220} />
                  </div>
                  <div className={styles.slideContent}>
                    <h3>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#777' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
{/*           
          <p style={{ textAlign: 'center', marginTop: '30px', color: '#999', fontSize: '0.9rem' }}>
            {"< Vuốt sang ngang để xem thêm >"}
          </p> */}
        </div>
      </section>

      {/* Location Section with Map */}
      <section id="location" className={styles.locationSection}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>VỊ TRÍ ĐẮC ĐỊA</h2>
            <p>CHẠM METRO – NỐI CAO TỐC ĐÓN SÓNG HẠ TẦNG QUỐC GIA</p>
          </div>
          
          <div className={styles.overviewContent}>
            <div>
              <h3>TÂM ĐIỂM KẾT NỐI</h3>
              <p style={{ margin: '20px 0', color: '#666' }}>
                Tọa lạc tại vị trí vàng hiếm hoi còn sót lại tại trung tâm, Senturia mang đến khả năng kết nối không giới hạn.
              </p>
              <ul style={{ color: '#555' }}>
                <li style={{ margin: '10px 0' }}>• 15 phút đến Chợ Bến Thành</li>
                <li style={{ margin: '10px 0' }}>• Kết nối nhanh về trung tâm qua trục Mai Chí Thọ – Thủ Thiêm – Quận 1  </li>
                <li style={{ margin: '10px 0' }}>• Hưởng lợi từ quy hoạch Metro số 2 Bến Thành – Tham Lương trong tương lai</li>
                <li style={{ margin: '10px 0' }}>• Nằm trên trục kết nối tuyến đường sắt Ngọc Hồi - Thủ Thiêm xuyên suốt Bắc - Nam</li>
                <li style={{ margin: '10px 0' }}>• Trực diện cao tốc TP.HCM – Long Thành – Dầu Giây, liên thông toàn vùng</li>
                <li style={{ margin: '10px 0' }}>•  Đối diện khu liên hợp thể thao Rạch chiếc</li>
              </ul>
            </div> 
            <div className={styles.mapBox}>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.788998311436!2d106.75360207933213!3d10.796199575523149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174778b678c92f5%3A0x8526ad6841dd971a!2sSenturia%20An%20Ph%C3%BA!5e0!3m2!1svi!2sus!4v1776416252924!5m2!1svi!2sus" 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{marginTop: '40x'}} className={styles.contactSection}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>ĐĂNG KÝ NHẬN TƯ VẤN</h2>
            <p style={{ color: '#ccc' }}>Để lại thông tin để nhận bảng giá và chính sách ưu đãi mới nhất</p>
          </div>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Họ và Tên</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Nguyễn Văn A" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Số Điện Thoại</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="0901 234 567" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button 
                type="submit" 
                className="btn" 
                style={{ width: '100%', padding: '20px' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'ĐANG GỬI...' : 'ĐĂNG KÝ NGAY'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          {/* <h2 style={{ color: 'white', marginBottom: '20px' }}>SENTURIA</h2> */}
           <Image 
                src="../images/logo-tienphuoc.png" 
                alt="Senturia Logo" 
                width={200}
                height={150}
              />
          <p>Hotline: 0899997352 | Email: ms.thuyphan@gmail.com</p>
          <p>Địa chỉ: Lầu 18 Tòa nhà Fideco 81 85 Hàm Nghi, Nguyễn Thái Bình, Quận 1, TP. Hồ Chí Minh</p>
          <p style={{ fontSize: '0.8rem', marginTop: '30px', opacity: 0.6 }}>
            © 2026 SENTURIA Residence. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Fixed Contact Buttons */}
      <div className={styles.fixedContact}>
        <a 
          href="https://zalo.me/84906389869" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.fixedBtn} ${styles.zaloBtn}`}
          title="Chat Zalo"
        >
          <span className={styles.btnIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.012 11.236c-.198-3.033-1.463-5.228-3.766-6.535-2.304-1.306-5.06-1.554-8.272-1.554H8.272C5.06 3.147 2.304 3.395 0 4.701c0 0 4.225 3.395 5.06 6.535.835 3.14 1.669 6.28 5.06 6.535 3.391.255 6.782.255 10.173 0 3.391-.255 4.226-3.395 1.719-6.535z" style={{ display: 'none' }}/>
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zM12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z"/>
              <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
              <text x="7" y="15" fill="currentColor" style={{ fontSize: '8px', fontWeight: 'bold' }}>Zalo</text>
            </svg>
          </span>
          Chat Zalo
        </a>
        <a 
          href="#contact" 
          className={`${styles.fixedBtn} ${styles.downloadBtn}`}
          title="Tải Báo Giá"
        >
          <span className={styles.btnIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </span>
          Tải Báo Giá
        </a>
      </div>
      </main>
      );
      }

