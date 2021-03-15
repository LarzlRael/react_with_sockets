import { Layout, Menu } from 'antd';
import {

    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CreateTicket } from './CreateTicket';
import { Escritorio } from './Escritorio';

//? extract the context
import { useContext } from 'react';
import { UIContext } from '../context/UIContest';

const { Header, Sider, Content } = Layout;

export const RouterPages = () => {

    const { ocultarMenu } = useContext(UIContext);


    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider hidden={ocultarMenu}
                    collapsedWidth="0"
                    breakpoint="md"
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/ingresar">Ingresar</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/cola" >Cola de tickets</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to="/crear" >Crear Ticket</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >

                        <Switch>
                            <Route path="/ingresar" component={Ingresar} />
                            <Route path="/cola" component={Cola} />
                            <Route path="/crear" component={CreateTicket} />

                            <Route path="/escritorio" component={Escritorio} />

                            <Redirect to="/ingresar" />
                        </Switch>


                    </Content>
                </Layout>
            </Layout>

        </Router>
    )
}
