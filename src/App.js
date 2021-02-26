import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { DatePicker, Layout, Divider, Row, Col, Form, Input, Button, Select  } from 'antd';
import './styles/bonito.css';
import FormularioCita from './components/citas/FormularioCita';
import ListadoCitas from './components/citas/ListadoCitas';

const { Header } = Layout;

const App = () => { 

    const [citas, setCitas] = useState([]);

    const agregarCita = data => {
        setCitas([
            ...citas,
            data
        ])
    }



    return (
      <Layout>
          <Header>Menú</Header>
          <Divider orientation='center'>Administración de citas</Divider>

          <Row justify="space-around">
              <Col className="ant-col ant-col-xs-22 ant-col-md-10">
                  <FormularioCita 
                      agregarCita={agregarCita}
                  />
              </Col>
              <Col className="ant-col ant-col-xs-22 ant-col-md-10">
                  <Divider orientation="right">Citas</Divider>
                  <ListadoCitas 
                      citas={citas}
                  />
              </Col>
          </Row>

          

      </Layout>
    )
}

export default App;
