import React, { useEffect } from "react";
import { Row, Col, Divider, Tag } from "antd";
import PanelBox from "../shared/components/panelBox";
import Title from "antd/lib/typography/Title";
import {
  PayCircleOutlined,
  MessageOutlined,
  TransactionOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  useEffect(() => {
    console.log("dashboard rendered");
  }, []);

  return (
    <div>
      <Title
        id="updateClient"
        level={4}
        style={{ textAlign: "left", marginBottom: "30px" }}
      >
        Dashboard
      </Title>
      <Row gutter={16} type="flex" justify="space-between">
        <Col xs={24} md={24}>
          <Row gutter={16} type="flex" justify="space-between">
            <Col className="ant-card-item" xs={24} md={6}>
              <PanelBox className="card-item shadow">
                <MessageOutlined style={{ fontSize: "40px" }} spin={true} />
                <ul>
                  <li>
                    <Divider orientation="left">10000</Divider>
                  </li>
                  <Tag color="#87d068">
                    <li>Total SMS Sent</li>
                  </Tag>
                </ul>
              </PanelBox>
            </Col>

            <Col className="ant-card-item" xs={24} md={6}>
              <PanelBox className="card-item shadow">
                <UsergroupAddOutlined
                  style={{ fontSize: "40px" }}
                  spin={false}
                />
                <ul>
                  <li>
                    <Divider orientation="left">15000</Divider>
                  </li>
                  <Tag color="#108ee9">
                    <li>Total Clients</li>
                  </Tag>
                </ul>
              </PanelBox>
            </Col>

            <Col className="ant-card-item" xs={24} md={6}>
              <PanelBox className="card-item shadow">
                <PayCircleOutlined style={{ fontSize: "40px" }} spin={true} />
                <ul>
                  <li>
                    <Divider orientation="left">Rs. 25,000</Divider>
                  </li>
                  <Tag color="#2db7f5">
                    <li>Toady's Transaction</li>
                  </Tag>
                </ul>
              </PanelBox>
            </Col>
            <Col className="ant-card-item" xs={24} md={6}>
              <PanelBox className="card-item shadow">
                <TransactionOutlined style={{ fontSize: "40px" }} spin={true} />
                <ul>
                  <li>
                    <Divider orientation="left">Rs.25,000</Divider>
                  </li>
                  <Tag color="#87dcd8">
                    <li>On Hold Transactions</li>
                  </Tag>
                </ul>
              </PanelBox>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
