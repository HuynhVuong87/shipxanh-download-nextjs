import { Col, Divider, Row, Button, Timeline, Image } from "antd";
import {
  LinkOutlined,
  PlusCircleOutlined,
  WindowsOutlined,
  MacCommandOutlined,
  AppleOutlined,
  HomeOutlined,
  ExportOutlined,
} from "@ant-design/icons";

export default function Main() {
  const listFeturesExt = [
    "Copy sản phẩm chéo 6 sàn: Shopee, Lazada, Tiktok,Tiki, Sendo, Facebook, WooCommerce",
    "Xem % phí đơn hàng Shopee, Lazada, Tiktok",
    "Tải về máy tính video sản phẩm, ảnh sản phẩm Shopee, Lazada",
    "Hiển thị thống kê chi tiết sản phẩm Shopee",
    "Tự động đẩy sản phẩm Shopee không cần treo máy",
    "Đóng dấu khi in đơn hàng Shopee",
    "Tạo Flash sale hàng loạt Shopee",
    "...",
  ];

  const listFeturesApp = [
    "Nhân bản, copy sản phẩm chéo sàn, cùng sàn, đa shop",
    "Tự động đồng bộ hóa đơn hàng từ Shopee, Tiktok, Lazada, POS",
    "Tính năng đóng gói đơn hàng hàng loạt để tăng tốc độ xử lý",
    "Tự động phát hiện các đơn hàng hoàn trả chưa được nhận bởi cửa hàng",
    "Tự động phát hiện các đơn hàng bị hủy mặc dù đã được giao cho đơn vị vận chuyển",
    "Tự động thông báo đơn hàng gấp, thông báo khi đơn hàng gấp được giao hoặc bị hủy",
    "Đồng bộ tồn kho đa kênh (Cửa hàng, Shopee, Lazada, Tiktokshop)",
    "Quản lý chat đa kênh tập trung",
  ];

  return (
    <main
      style={{
        padding: "0 0.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
        backgroundColor: "#f0f2f5",
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
          <Image
            loading="lazy"
            src="/images/demo-ext.png"
            width="100%"
            alt=""
          />
          <Divider />
          <Timeline>
            {listFeturesExt.map((item, index) => (
              <Timeline.Item key={index}>{item}</Timeline.Item>
            ))}
          </Timeline>
        </Col>
        <Col xs={24} md={12}>
          <h2 className="text-center cap">Website quản lý bán hàng</h2>
          <Divider />
          <h3 className="text-center">
            <a
              href={"https://app.shipxanh.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary" icon={<ExportOutlined />}>
                Dùng ngay (Không cần đăng kí)
              </Button>
            </a>
          </h3>
          <Image
            loading="lazy"
            src="/images/demo-app.png"
            width="100%"
            alt=""
          />
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
