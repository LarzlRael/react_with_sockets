import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import { SocketContext } from '../context/SocketContext';
import { getUserStorage } from '../helpers/getUsuarioStorage';
import { useHideMenu } from '../hooks/userHideMenu';

const { Title, Text } = Typography;

export const Escritorio = () => {

    useHideMenu(false);

    const [usuario] = useState(getUserStorage);
    const { socket } = useContext(SocketContext);
    const [ticket, setTicket] = useState(null);
    const history = useHistory();


    const siguienteTicket = () => {

        socket.emit('siguient-ticket-trabajar', usuario, (ticket) => {
            setTicket(ticket);
        });
    }

    if (!usuario.agente || !usuario.escritorio) {
        return <Redirect to="ingresar" />
    }

    const salir = () => {

        // clean the local storage
        localStorage.clear();
        history.replace('/ingresar');

    }
    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{usuario.agente}</Title>
                    <Text>Usted esta trabajdo en el escritorio: </Text>
                    <Text type="success">{usuario.escritorio}</Text>
                </Col>

                <Col span={4} align="right">
                    <Button
                        shape="round"
                        type="danger"
                        onClick={salir}
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>

            <Divider />

            { ticket &&

                <Row>
                    <Col>
                        <Text>Esta atendiendo el ticket numero </Text>
                        <Text
                            style={{ fontSize: 30 }}
                        >
                            {ticket.numero}
                        </Text>
                    </Col>
                </Row>
            }
            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        onClick={siguienteTicket}
                        shape="round"
                        type="primary">
                        <RightOutlined />
                            Siguiente
                    </Button>
                </Col>
            </Row>


        </>
    )
}
