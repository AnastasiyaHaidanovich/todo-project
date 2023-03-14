import React from 'react';
import { Layout, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout" >
            <Header>
                <div className="logo" />

            </Header>
            <Content style={{ padding: '0 50px' }}>

                <div className="site-layout-content" style={{ background: colorBgContainer }}>
                    Content
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Разработчик: Гайданович Анастасия</Footer>
        </Layout>
    );
};

export default App;
