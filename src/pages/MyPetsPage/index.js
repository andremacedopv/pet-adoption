import React from 'react';
import PetCard from "../../components/PetCard";
import { ActivityIndicator,FlatList, View} from "react-native";
import { database, storage } from "../../services/firebase"
import { useUserContext } from "../../contexts/useUserContext";

const MyPetsPage = ({navigation}) => {
    const [loading, setLoading] = React.useState(true); // Set loading to true on component mount
    const [pets, setPets] = React.useState([]); // Initial empty array of users

    const {user} = useUserContext();

    React.useEffect(() => {
        const subscriber = database
          .collection('pets')
          .onSnapshot(querySnapshot => {
            const pets = [];
      
            querySnapshot.forEach(documentSnapshot => {
              if (documentSnapshot.data().creator_uid == user.uid) {
                pets.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
              }
            });
      
            setPets(pets);
            setLoading(false);
          });
      
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, [user]);

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

export default MyPetsPage;
