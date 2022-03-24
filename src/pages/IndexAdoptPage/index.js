import React from 'react';
import PetCard from "../../components/PetCard";
import { ActivityIndicator,FlatList, View} from "react-native";
import { database, storage } from "../../services/firebase"
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const IndexAdoptPage = ({ route, navigation }) => {
    const [loading, setLoading] = React.useState(true); // Set loading to true on component mount
    const [pets, setPets] = React.useState([]); // Initial empty array of users

    const { getItens } = route.params;

    React.useEffect(() => {
        const subscriber = database
          .collection('pets')
          .onSnapshot(querySnapshot => {
            const pets = [];
      
            querySnapshot.forEach(documentSnapshot => {
              if(getItens === 'adoption'){
                if(documentSnapshot.data().adoption === true){
                  pets.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                  });
                }
              } else if(getItens === 'help') {
                if(documentSnapshot.data().help === true){
                  pets.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                  });
                }
              } else if(getItens === 'sponsorship') {
                if(documentSnapshot.data().sponsorship === true){
                  pets.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                  });
                }
              } else {
                  pets.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                  });
              }
            });
      
            setPets(pets);
            console.log(pets[1].image)
            setLoading(false);
          });
      
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

    if (loading) {
      return <ActivityIndicator />;
    }

    return (
        <FlatList
            data={pets}
            renderItem={({ item }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <PetCard name={item.name} age={item.age} sex={item.sex} 
                    size={item.size} city={item.city} state={item.state} 
                    photo={item.imagePath} id= {item.key} navigation={navigation}></PetCard>  
                </View>
            )}
        />

      );
 
};

export default IndexAdoptPage;
