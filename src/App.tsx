import React from 'react';
import { Layout, theme } from 'antd';
import { Typography } from 'antd';
import './App.css';
import { AddTaskForm } from './components/AddTaskForm';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout" >
            <Header className="site-layout-header">
                <Title level={2} style={{color: "#feffe6", textAlign: 'center'}}>Список задач</Title>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ background: colorBgContainer }}>
                    <AddTaskForm />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Разработчик: Гайданович Анастасия</Footer>
        </Layout>
    );
};

export default App;
