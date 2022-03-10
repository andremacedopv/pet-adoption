import React from 'react';
import PetCard from "../../components/PetCard";
import { Container } from '../LoginPage/styles';
import image from '../../../assets/gato-feio.jpg'

const IndexAdoptPage = () => {
    return (
        <Container>
            <PetCard name="Dogão" age="Velho" sex="Machão" size="Grandão" city="Brasilia" state="DF" photo={image}></PetCard>
        </Container>
    );
};

export default IndexAdoptPage;