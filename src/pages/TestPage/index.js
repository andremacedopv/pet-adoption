import React, { useState } from 'react';
import { Container, SelectSection, SelectTitle, SelectButtonGroup, SelectBtn } from './styles';
import RadioButtonGroup from '../../components/RadioButtonGroup'
import ChecklistGroup from '../../components/ChecklistGroup'
import Checklist from '../../components/Checklist'
import InputImage from '../../components/InputImage';
import SelectButton from '../../components/SelectButton';
import { Text } from "react-native";

const TestPage = () => {
    const [species, setSpecies] = React.useState('');
    const [sex, setSex] = React.useState('');
    const [size, setSize] = React.useState('');
    const [age, setAge] = React.useState('');

    const [playful, setPlayful] = React.useState(false);
    const [timid, setTimid] = React.useState(false);
    const [calm, setCalm] = React.useState(false);
    const [guard, setGuard] = React.useState(false);
    const [loving, setLoving] = React.useState(false);
    const [lazy, setLazy] = React.useState(false);

    const [vaccinated, setVaccinated] = React.useState(false);
    const [verms, setVerms] = React.useState(false);
    const [noBalls, setNoBalls] = React.useState(false);
    const [sick, setSick] = React.useState(false);

    const [adoptionTerms, setAdoptionTerms] = React.useState(false);
    const [housePhotos, setHousePhotos] = React.useState(false);
    const [visit, setVisit] = React.useState(false);
    const [postAdoption, setPostAdoption] = React.useState(false);

    const speciesGroup = [
        {label: 'Cachorro', value:"dog"},
        {label: 'Gato', value:"cat"}
    ]

    const sexGroup = [
        {label: 'Macho', value:"boy"},
        {label: 'Fêmea', value:"girl"}
    ]

    const sizeGroup = [
        {label: 'Pequeno', value:"small"},
        {label: 'Médio', value:"medium"},
        {label: 'Grande', value:"big"}
    ]

    const ageGroup = [
        {label: 'Filhote', value:"young"},
        {label: 'Adulto', value:"adult"},
        {label: 'Idoso', value:"old"}
    ]

    const temperGroup = [
        {label: 'Brincalhão', state: playful, setter: setPlayful},
        {label: 'Tímido', state: timid, setter: setTimid},
        {label: 'Calmo', state: calm, setter: setCalm},
        {label: 'Guarda', state: guard, setter: setGuard},
        {label: 'Amoroso', state: loving, setter: setLoving},
        {label: 'Preguiçoso', state: lazy, setter: setLazy}
    ]

    const healthGroup = [
        {label: 'Vacinado', state: vaccinated, setter: setVaccinated},
        {label: 'Vermifugado', state: verms, setter: setVerms},
        {label: 'Castrado', state: noBalls, setter: setNoBalls},
        {label: 'Doente', state: sick, setter: setSick}
    ]

    const [helpBtn, setHelpBtn] = React.useState(false);
    const [careBtn, setCareBtn] = React.useState(false);
    const [adoptioBtn, setAdoptionBtn] = React.useState(false);

    return( 
        <Container>
            <SelectSection>
                <SelectTitle>Tenho interesse em cadastrar o animal para:</SelectTitle>
                <SelectButtonGroup>
                    <SelectBtn>
                        <SelectButton state={adoptioBtn} setter={setAdoptionBtn}>ADOÇÃO</SelectButton>
                    </SelectBtn>
                    <SelectBtn>
                        <SelectButton state={careBtn} setter={setCareBtn}>APADRINHAR</SelectButton>
                    </SelectBtn>
                    <SelectBtn>
                        <SelectButton state={helpBtn} setter={setHelpBtn}>AJUDA</SelectButton>
                    </SelectBtn>
                </SelectButtonGroup>
            </SelectSection>
            <RadioButtonGroup groupName="Espécie" values={speciesGroup} state={species} setState={setSpecies} />
            <RadioButtonGroup groupName="Sexo" values={sexGroup} state={sex} setState={setSex} />
            <RadioButtonGroup groupName="Porte" values={sizeGroup} state={size} setState={setSize} />
            <RadioButtonGroup groupName="Idade" values={ageGroup} state={age} setState={setAge} />
            <ChecklistGroup groupName="Temperamento" values={temperGroup} />
            <ChecklistGroup groupName="Saúde" values={healthGroup} />
            {/* <Checklist label="Termos de adoção" state={adoptionTerms} setter={setAdoptionTerms} />
            <Checklist label="Fotos da casa" state={housePhotos} setter={setHousePhotos} />
            <Checklist label="Visita prévia ao animal" state={visit} setter={setVisit} />
            <Checklist label="Acompanhamento pós adoção" state={postAdoption} setter={setPostAdoption} />
            <InputImage size="large"/> */}
        </Container>
    )};

export default TestPage;
