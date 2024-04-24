'use client'

import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const App = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Title } = Typography;
  return (
    <Layout>
      <Layout>
        <Row
          style={{
            margin: '24px 16px 0',
          }}
        >
          <Col className='p-4 rounded bg-white' span={24}>
            <Header
              className='bg-slate-100'
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              
              <div className="demo-logo" />
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                style={{
                  flex: 1,
                  minWidth: 0,
                  color: 'black'
                }}
                className='bg-slate-100'
              />
            </Header>

          </Col>
        </Row>

        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>


        <footer id="footer" className="dark p-4 bg-slate-100">
          <div className="footer-wrap bg-white rounded">
            <Row justify="space-around" align="middle">
           
              <Col md={6} sm={24} xs={24}>
                <div className="footer-center text-center align-center">
                  <Title level={2}>Data table</Title>
                  <div>
                    <a target="_blank " href="http://ant.design">
                      Chracterictics Table
                    </a>
                  </div>
                  <div>
                    <a target="_blank " href="https://pro.ant.design/">
                      Chracterictics Table
                    </a>
                  </div>
                  <div>
                    <a href="http://mobile.ant.design">
                      Chracterictics Table
                    </a>
                  </div>
                </div>
              </Col>

              <Col md={6} sm={24} xs={24}>
                <div className="footer-center text-center align-center">
                  <Title level={2}>Data table</Title>
                  <div>
                    <a target="_blank " href="http://ant.design">
                      Chracterictics Table
                    </a>
                  </div>
                  <div>
                    <a target="_blank " href="https://pro.ant.design/">
                      Chracterictics Table
                    </a>
                  </div>
                  <div>
                    <a href="http://mobile.ant.design">
                      Chracterictics Table
                    </a>
                  </div>
                </div>
              </Col>


              <Col md={6} sm={24} xs={24}>
                <div className="footer-center text-center align-center">
                  <Title level={2}>Data table</Title>
                  <div>
                    <a target="_blank " href="http://ant.design">
                      Chracterictics Table
                    </a>
                  </div>
                  <div>
                    <a target="_blank " href="https://pro.ant.design/">
                      Chracterictics Table
                    </a>
                  </div>
                  <div>
                    <a href="http://mobile.ant.design">
                      Chracterictics Table
                    </a>
                  </div>
                </div>
              </Col>
         
            </Row>
          </div>
        </footer>
      </Layout>
    </Layout>
  );
};
export default App;