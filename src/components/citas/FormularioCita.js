import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { DatePicker, Divider, Row, Col, Form, Input, Button, Select  } from 'antd';

const { Option } = Select;


const FormularioCita = props => { 

    const [ form ] = Form.useForm();

    const { agregarCita } = props;


    const [formularioCita, setFormularioCita] = useState({
        nombre: '',
        doctor: '',
        fecha: moment().format('DD/MM/YYYY'),
        hora: '',
        motivo: ''
    });

    const [error, setError] = useState(false);

    const [horasDisponibles, setHorasDisponibles] = useState([]) 

    const [fechaMoment, setFechaMoment] = useState(moment(moment().format('DD/MM/YYYY'), 'DD/MM/YYYY'));

    const { nombre, doctor, fecha, hora, motivo } = formularioCita;

    const handleSubmit = e => {
        console.log(formularioCita);

        agregarCita(formularioCita);

        form.resetFields();

        /*
        setFormularioCita({
            nombre: '',
            doctor: '',
            fecha: moment().format('DD/MM/YYYY'),
            hora: '',
            motivo: ''
        })
        */

    }



    const handleChangeValues = e => {
      
      if(!e)
        return;
      
        console.log(e.target)

        //form.setFieldsValue({ note: 'Hi, man!' });
        
      if(e._isAMomentObject) { // si es un DatePicker
        
          setFormularioCita({
              ...formularioCita,
              fecha: moment(e._d).format('DD-MM-YYYY')
          });

      } else if (e.target) { // si es un Input text

          setFormularioCita({
              ...formularioCita,
              [e.target.id]: e.target.value.trim()
          });

      } else if(typeof(e) === 'string') { // si es un Select
          
          setFormularioCita({
              ...formularioCita,
              hora: e
          });

      }
      

    }


    useEffect(() => {
      
      setHorasDisponibles(['8 AM', '9:30 AM', '10 AM', '7 PM']);
      
    }, [])


    

    return (
        <>
            <Divider orientation="left">Información</Divider>
                  
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    initialValues={{fecha:fechaMoment}}
                >
                      <Form.Item 
                          name="nombre"
                          label="Nombre del paciente"
                          labelCol={{span: 24}}
                          rules={[
                              { whitespace: true, message: 'Coloca el nombre del paciente, por favor' },
                              { required: true, message: 'Coloca el nombre del paciente' }
                          ]}
                          onChange={handleChangeValues}
                        >
                          <Input
                              placeholder="Nombre del paciente"
                              allowClear
                          />
                      </Form.Item>

                      
                      <Form.Item 
                          label="Nombre del doctor"
                          labelCol={{span: 24}}
                          name="doctor"
                          rules={[
                              { whitespace: true, message: 'Coloca el nombre del doctor, por favor' },
                              { required: true, message: 'Coloca el nombre del doctor' }
                          ]}
                          onChange={handleChangeValues}
                      >
                          <Input
                              placeholder="Nombre del doctor"
                              allowClear
                          />
                      </Form.Item>

                      <Row>
                          <Col span={12}>
                              <Form.Item 
                                  label="Fecha"
                                  labelCol={{span: 24}}
                                  name="fecha"
                                  rules={[
                                      //{ whitespace: true, message: 'Coloca la fecha, por favor' },
                                      { required: true, message: 'Coloca la fecha' }
                                  ]}
                                  >
                                  
                                  <DatePicker  
                                      format={'DD/MM/YYYY'} 
                                      onChange={handleChangeValues}
                                  />

                              </Form.Item>
                          </Col>
                                              
                          <Col span={12}>
                              <Form.Item 
                                  label="Hora"
                                  labelCol={{span: 24}}
                                  name="hora"
                                  rules={[
                                      { whitespace: true, message: 'Coloca la hora, por favor' },
                                      { required: true, message: 'Coloca la hora' }
                                  ]}
                              >
                                  <Select 
                                      onChange={handleChangeValues} 
                                      placeholder="Seleccione hora" 
                                      value={hora}
                                  >
                                      {horasDisponibles.map( (e, key) => <Option key={key} value={e}>{e}</Option> )}
                                  </Select>

                              </Form.Item>
                          </Col>
                      </Row>

                                                              
                      <Form.Item 
                          label="Motivo"
                          labelCol={{span: 24}}
                          name="motivo"
                          rules={[
                              { whitespace: true, message: 'Coloca el motivo, por favor' },
                              { required: true, message: 'Se te olvidó colocar el motivo' }
                          ]}
                          onChange={handleChangeValues}
                      >
                          <Input
                              placeholder="Escriba el motivo detalladamente"
                              allowClear
                          />
                      </Form.Item>

                      
                      <Divider></Divider>

                      <Form.Item>
                          <Button
                              htmlType="submit"
                              className="ant-btn-lg ant-btn-primary ant-btn-background-ghost ant-btn-block"
                          >
                              Guardar Cita
                          </Button>
                      </Form.Item>

                  </Form>
        </>
    )
}

export default FormularioCita;
