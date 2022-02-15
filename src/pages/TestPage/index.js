import React, { useState } from 'react';
import { Container } from './styles';
import RadioButtonGroup from '../../components/RadioButtonGroup'
import ChecklistGroup from '../../components/ChecklistGroup'
import Checklist from '../../components/Checklist'

const TestPage = () => {
    const [checked, setChecked] = React.useState('');
    const [status, setstatus] = React.useState('');

    const [status1, setstatus1] = React.useState(false);
    const [status2, setstatus2] = React.useState(false);
    const [status3, setstatus3] = React.useState(false);
    const [status4, setstatus4] = React.useState(false);
    const [status5, setstatus5] = React.useState(false);
    const [status6, setstatus6] = React.useState(false);

    const [status7, setstatus7] = React.useState(false);

    const values = [
        {label: 'Teste', value:"test"},
        {label: 'Bonito', value:"beatiful"}
    ]

    const values2 = [
        {label: 'Teste', value:"test"},
        {label: 'Bonito', value:"beatiful"},
        {label: 'Bonito 2', value:"op"},
        {label: 'Texto Maiorzão', value:"wqw"},
        {label: 'Bonito 5', value:"ewe"},
        {label: 'Bonito 4', value:"54"}
    ]

    const temperamento = [
        {label: 'Teste', state: status1, setter: setstatus1},
        {label: 'Teste 2', state: status2, setter: setstatus2},
        {label: 'Teste 3', state: status3, setter: setstatus3},
        {label: 'Teste 4', state: status4, setter: setstatus4},
        {label: 'Teste 5', state: status5, setter: setstatus5},
        {label: 'Teste 6', state: status6, setter: setstatus6}
    ]

    return( 
        <Container>
            <RadioButtonGroup groupName="Espécie" values={values} state={checked} setState={setChecked} />
            <RadioButtonGroup groupName="Sexo" values={values2} state={checked} setState={setChecked} />
            <ChecklistGroup groupName="Temperamento" values={temperamento} />
            <Checklist label="Lindo" state={status7} setter={setstatus7} />
        </Container>
    )};

export default TestPage;
