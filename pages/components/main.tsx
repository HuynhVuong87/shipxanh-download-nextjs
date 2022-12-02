import { Col, Divider, Row, Button, Timeline } from "antd";
import {
  LinkOutlined,
  PlusCircleOutlined,
  WindowsOutlined,
  MacCommandOutlined,
  AppleOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export default function Main() {
  const linkWindows =
    "https://firebasestorage.googleapis.com/v0/b/shipxanh-software.appspot.com/o/release%2Fdesktop-app%2Fshipxanh-win-lastest.exe?alt=media";
  const linkMacos =
    "https://firebasestorage.googleapis.com/v0/b/shipxanh-software.appspot.com/o/release%2Fdesktop-app%2Fshipxanh-mac-lastest.dmg?alt=media";

  const listFeturesExt = [
    "Copy sản phẩm chéo 6 sàn: Shopee, Lazada, Tiktok, Sendo, Facebook, WooCommerce",
    "Quản lý đơn hàng Shopee, Lazada, Tiktok bằng trạng thái riêng",
    "Tải về máy tính video sản phẩm, ảnh sản phẩm Shopee, Lazada",
    "Hiển thị thống kê chi tiết sản phẩm Shopee",
    "Tự động đẩy sản phẩm Shopee không cần treo máy",
    "Đóng dấu khi in đơn hàng Shopee",
    "Tạo giá đặc biệt cho hàng loạt sản phẩm Lazada",
    "Xoá hàng loạt sản phẩm Lazada",
    "...",
  ];

  const listFeturesApp = [
    "Đăng nhập nhiều shop nhiều sàn chung một màn hình để quản lý",
    "Cùng lúc có thể trả lời hàng trăm shop các sàn Shopee, Lazada, Tiktok,...",
    "Nhận thông báo khi có tin nhắn đến",
    "...",
  ];

  return (
    <main
      style={{
        padding: "0 0.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <Row gutter={24}>
        <Col xs={24} md={12}>
          <h2 className="text-center cap">
            Tiện ích mở rộng cho Chrome, CocCoc
          </h2>
          <Divider />
          <h3 className="text-center">
            <a
              href="https://chrome.google.com/webstore/detail/shipxanh-retail-managemen/bnfhbhgdplalghadceaceocmildbfhmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary" icon={<PlusCircleOutlined />}>
                Bấm để cài đặt tiện ích
              </Button>
            </a>
          </h3>
          <img loading="lazy" src="/images/demo-ext.png" width="100%" alt="" />
          <Divider />
          <Timeline>
            {listFeturesExt.map((item, index) => (
              <Timeline.Item key={index}>{item}</Timeline.Item>
            ))}
          </Timeline>
        </Col>
        <Col xs={24} md={12}>
          <h2 className="text-center cap">Phần mềm đăng nhập nhiều shop</h2>
          <Divider />
          <h3 className="text-center">
            <a href={linkWindows} target="_blank" rel="noopener noreferrer">
              <Button type="primary" icon={<WindowsOutlined />}>
                Tải về (Windows)
              </Button>
            </a>
            &nbsp;
            <a href={linkMacos} target="_blank" rel="noopener noreferrer">
              <Button type="primary" icon={<AppleOutlined />}>
                Tải về (Macos)
              </Button>
            </a>
          </h3>
          <img loading="lazy" src="/images/demo-app.png" width="100%" alt="" />
          <Divider />
          <Timeline>
            {listFeturesApp.map((item, index) => (
              <Timeline.Item key={index}>{item}</Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </main>
  );
}
