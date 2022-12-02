import Head from "next/head";
import { ScanOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Button } from "antd";
import Image from "next/image";
import {
  LinkOutlined,
  PlusCircleOutlined,
  HomeOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  MessageOutlined,
} from "@ant-design/icons";

export default function Header() {
  return (
    <div>
      <Head>
        <title>ShipXanh Phần mềm bán hàng đa kênh</title>
        {/* for SEO */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Tải ShipXanh Phần mềm bán hàng đa kênh"
        />
        <meta name="keywords" content="ShipXanh, Phần mềm bán hàng đa kênh" />
        <meta name="author" content="ShipXanh" />
        <meta
          property="og:image"
          content="https://download-shipxanh.web.app/images/poster.png"
          data-rh="true"
        />
        <meta
          property="og:title"
          content="Ship Xanh - Phần mềm bán hàng đa kênh"
        />
        <meta
          property="og:description"
          content="Copy sản phẩm chéo sàn, quản lý đơn hàng Shopee, Lazada, Tiktok, Sendo, Woocommerce, bán tại cửa hàng và ship ngoài"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/images/logo.png" />
      </Head>
      <header>
        <Row gutter={10} justify="center" align="middle">
          <Col>
            <Image
              height={30}
              width={30}
              src="/images/logo.png"
              alt="ShipXanh"
            />
          </Col>
          <Col>
            <h1>ShipXanh</h1>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16} justify="center" align="middle">
          <Col>
            <a
              href="https://shop.shipxanh.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary" icon={<HomeOutlined />}>
                Trang quản trị
              </Button>
            </a>
          </Col>
          <Col>
            <a
              href="https://docs.shipxanh.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon={<LinkOutlined />}>Trang hướng dẫn</Button>
            </a>
          </Col>
          <Col>
            <a
              href="https://fb.com/phanmemshipxanh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon={<FacebookOutlined />}>Fanpage Facebook</Button>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.youtube.com/@ShipXanh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon={<YoutubeOutlined />}>Kênh Youtube</Button>
            </a>
          </Col>
          <Col>
            <a
              href="https://zalo.me/g/tvamir364"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon={<MessageOutlined />}>Nhóm Zalo</Button>
            </a>
          </Col>
        </Row>
        <Divider />
      </header>
    </div>
  );
}
