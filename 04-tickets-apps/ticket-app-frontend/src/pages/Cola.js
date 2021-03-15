import React from 'react'

import { Col, Row, Typography, List, Card, Tag, Divider } from 'antd'
import { useHideMenu } from '../hooks/userHideMenu';

const { Title, Text } = Typography;

export const Cola = () => {

    const data = [
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
        {
            ticketNo: 33,
            escritorio: 3,
            agente: 'Fernando Herrara xd'
        },
    ]

    useHideMenu(true);

    return (
        <>
            <Title level={1}>Atendiendo al clienet</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={data.slice(0, 3)}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 16 }}
                                    actions={[
                                        <Tag color="volcano">{item.agente}</Tag>,
                                        <Tag color="magenta">Escritorio : {item.escritorio}</Tag>
                                    ]}
                                />
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Divider>Historial</Divider>
                    <List
                        dataSource={data.slice(3)}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket No. ${item.ticketNo}`}
                                    description={
                                        <>
                                            <Text type="secondary">En el escritorio</Text>

                                            <Tag color="magenta">{item.ticketNo}</Tag>

                                            <Text type="secondary">Agente : </Text>

                                            <Tag color="volcano">{item.agente}</Tag>
                                        </>
                                    }
                                >

                                </List.Item.Meta>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    )
}


