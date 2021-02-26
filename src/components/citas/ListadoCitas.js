import React from 'react';
import { List } from 'antd';

const ListadoCitas = props => {

    const { citas } = props;


    return (
        <>
            <List
                style={{backgroundColor:'var(--color-fondo-listado)'}}
                header={<div>Por Atender</div>}
                footer={<div>Saludos</div>}
                bordered
                dataSource={citas}
                renderItem={cita => (
                    <List.Item>
                        <b>{cita.nombre}</b> desea una cita con el <b>Dr. {cita.doctor}</b> para el día <b>{cita.fecha}</b> a las <b>{cita.hora}</b>.<br />
                        <b>Motivo:</b> {cita.motivo}
                    </List.Item>
                )}
            />
        </>
    )
}

export default ListadoCitas;
