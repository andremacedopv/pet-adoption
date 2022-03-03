import React, { useState } from 'react';
import { ScrollArea, Container, SelectSection, SelectTitle, SelectButtonGroup, SelectBtn, GroupText, FieldText, InputArea, FieldArea, MixedArea, FinishButton, ChecklistSubGroup } from './styles';
import RadioButtonGroup from '../../components/RadioButtonGroup'
import ChecklistGroup from '../../components/ChecklistGroup'
import Checklist from '../../components/Checklist'
import InputImage from '../../components/InputImage';
import Input from '../../components/Input';
import SelectButton from '../../components/SelectButton';
import Button from '../../components/Button';
import { collection, addDoc } from "firebase/firestore";
import { Alert } from 'react-native';
import { database } from "../../services/firebase"

const AnimalRegisterPage = ({navigation}) => {
    
    const [name, setName] = useState("")
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
    const [oneMonth, setOneMonth] = React.useState(false);
    const [threeMonths, setThreeMonths] = React.useState(false);
    const [sixMonths, setSixMonths] = React.useState(false);

    const [careTerms, setCareTerms] = React.useState(false);
    const [financeHelp, setFinanceHelp] = React.useState(false);
    const [foodHelp, setFoodHelp] = React.useState(false);
    const [healthHelp, setHealthHelp] = React.useState(false);
    const [objectHelp, setObjectHelp] = React.useState(false);
    const [animalVisits, setAnimalVisits] = React.useState(false);

    const [food, setFood] = React.useState(false);
    const [finance, setFinance] = React.useState(false);
    const [medicine, setMedicine] = React.useState(false);
    const [objects, setObjects] = React.useState(false);

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
    const[illnesses, setIllnesses] = React.useState("")

    const [helpBtn, setHelpBtn] = React.useState(false);
    const [careBtn, setCareBtn] = React.useState(false);
    const [adoptioBtn, setAdoptionBtn] = React.useState(false);

    async function handleAnimalRegister() {
        await addDoc(collection(database, "pets"), {
            name: name,
            age: age,
            sex: sex,
            size: size,
            specie: species,
            temper: {
                calm: calm, 
                guard: guard, 
                lazy: lazy, 
                loving: loving, 
                playful: playful, 
                timid: timid
            },   
            health: {
                vaccinated: vaccinated,
                verms: verms,
                noBalls: noBalls,
                sick: sick,
                illnesses: illnesses
            },
            // adoption: adoptioBtn,
            // adoptionOptions: {
            //     adoptionTerms: adoptionTerms,
            //     housePhotos: housePhotos,
            //     visit: visit,
            //     postAdoption: postAdoption,
            //     postAdoptionOptions: {
            //         oneMonth: oneMonth,
            //         threeMonths: threeMonths,
            //         sixMonths: sixMonths
            //     }    
            // },
        })
        Alert.alert("Animal cadastrado com sucesso!")
        navigation.navigate('Página Inicial')
    }

    return( 
        <ScrollArea>
        <Container>
            <SelectSection>
                <SelectTitle>Tenho interesse em cadastrar o animal para:</SelectTitle>
                <SelectButtonGroup>
                    <SelectBtn>
                        <SelectButton disabled={careBtn} state={adoptioBtn} setter={setAdoptionBtn}>ADOÇÃO</SelectButton>
                    </SelectBtn>
                    <SelectBtn>
                        <SelectButton disabled={adoptioBtn} state={careBtn} setter={setCareBtn}>APADRINHAR</SelectButton>
                    </SelectBtn>
                    <SelectBtn>
                        <SelectButton state={helpBtn} setter={setHelpBtn}>AJUDA</SelectButton>
                    </SelectBtn>
                </SelectButtonGroup>
            </SelectSection>

            { (adoptioBtn || careBtn || helpBtn)?
            <>
            <GroupText>
                {adoptioBtn ? 'Adoção' : careBtn? 'Apadrinhar' : 'Ajudar' }
            </GroupText>

            <FieldText>NOME DO ANIMAL</FieldText>
            <InputArea>
                <Input placeholder="Nome do Animal" value={name} onChangeText={(e) => {setName(e)}}></Input>
            </InputArea>

            <FieldText>FOTOS DO ANIMAL</FieldText>
            <InputArea>
                <InputImage size="large"/>
            </InputArea>
            
            <FieldArea>
                <RadioButtonGroup groupName="Espécie" values={speciesGroup} state={species} setState={setSpecies} />
            </FieldArea>

            <FieldArea>
                <RadioButtonGroup groupName="Sexo" values={sexGroup} state={sex} setState={setSex} />
            </FieldArea>
                
            <FieldArea>
                <RadioButtonGroup groupName="Porte" values={sizeGroup} state={size} setState={setSize} />
            </FieldArea>

            <FieldArea>
                <RadioButtonGroup groupName="Idade" values={ageGroup} state={age} setState={setAge} />
            </FieldArea>

            <FieldArea>
                <ChecklistGroup groupName="Temperamento" values={temperGroup} />
            </FieldArea>

            <MixedArea>
                <ChecklistGroup groupName="Saúde" values={healthGroup} />
                {sick? 
                <InputArea>
                    <Input placeholder="Doenças do animal" value={illnesses} onChangeText={(e) => {setIllnesses(e)}}></Input>
                </InputArea>
                :
                <></>
                }
            </MixedArea>

            {adoptioBtn?
            <>
            <FieldText>EXIGÊNCIAS PARA A ADOÇÃO</FieldText>
            <Checklist label="Termos de adoção" state={adoptionTerms} setter={setAdoptionTerms} />
            <Checklist label="Fotos da casa" state={housePhotos} setter={setHousePhotos} />
            <Checklist label="Visita prévia ao animal" state={visit} setter={setVisit} />
            <Checklist label="Acompanhamento pós adoção" state={postAdoption} setter={setPostAdoption} />
            {postAdoption?
            <ChecklistSubGroup>
                <Checklist label="1 mês" state={oneMonth} setter={setOneMonth} />
                <Checklist label="3 meses" state={threeMonths} setter={setThreeMonths} />
                <Checklist label="6 meses" state={sixMonths} setter={setSixMonths} />
            </ChecklistSubGroup>
            :
            <></>
            }
            </>
            :
            <></>
            }

            {careBtn?
            <>  
            <FieldText>EXIGÊNCIAS PARA APADRINHAMENTO</FieldText>
            <Checklist label="Termo de apadrinhamento" state={careTerms} setter={setCareTerms} />
            <Checklist label="Auxílio financeiro" state={financeHelp} setter={setFinanceHelp} />
            {financeHelp? 
            <ChecklistSubGroup>
                <Checklist label="Alimentação" state={foodHelp} setter={setFoodHelp} />
                <Checklist label="Saúde" state={healthHelp} setter={setHealthHelp} />
                <Checklist label="Objetos" state={objectHelp} setter={setObjectHelp} />
            </ChecklistSubGroup>
            :
            <></>
            }
            <Checklist label="Visitas ao animal" state={animalVisits} setter={setAnimalVisits} />
            </>
            :
            <></>
            }

            {helpBtn?
            <>  
            {(careBtn||adoptioBtn)?
            <GroupText>Ajudar</GroupText>
            :
            <></>}
            <FieldText>NECESSIDADES DO ANIMAL</FieldText>
            <Checklist label="Alimento" state={food} setter={setFood} />
            <Checklist label="Auxílio financeiro" state={finance} setter={setFinance} />
            <Checklist label="Medicamento" state={medicine} setter={setMedicine} />
            {medicine?
            <InputArea>
                <Input placeholder="Nome do medicamento"></Input>
            </InputArea>
            :
            <></>
            }
            <Checklist label="Objetos" state={objects} setter={setObjects} />
            {objects?
            <InputArea>
                <Input placeholder="Especifique o(s) objeto(s)"></Input>
            </InputArea>
            :
            <></>
            }

            </>
            :
            <></>
            }

            <FieldText>SOBRE O ANIMAL</FieldText>
            <InputArea>
                <Input placeholder="Compartilhe a história do animal"></Input>
            </InputArea>
            <FinishButton>
                <Button onPress={handleAnimalRegister}>{adoptioBtn? 'COLOCAR PARA ADOÇÃO' : careBtn? 'PROCURAR PADRINHO' : 'PROCURAR AJUDA'}</Button>
            </FinishButton>

            </>
            :
            <></>
            }
        </Container>
        </ScrollArea>
    )};

export default AnimalRegisterPage;
