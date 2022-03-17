import React from 'react';
import PetCard from "../../components/PetCard";
import { ActivityIndicator,FlatList, View} from "react-native";
import { database, storage } from "../../services/firebase"
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const petsImageURI = "gs://pet-adoption-1103.appspot.com/";


const IndexAdoptPage = () => {
    const [loading, setLoading] = React.useState(true); // Set loading to true on component mount
    const [pets, setPets] = React.useState([]); // Initial empty array of users

    React.useEffect(() => {
        const subscriber = database
          .collection('pets')
          .onSnapshot(querySnapshot => {
            const pets = [];
      
            querySnapshot.forEach(documentSnapshot => {
              pets.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
      
            setPets(pets);
            console.log(pets[1].image)
            setLoading(false);
          });
      
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

      React.useEffect(() => {
        const storage = getStorage();
          getDownloadURL(ref(storage,'pets/2022-03-09T16:38:38.863Z'))
            .then((url) => {
              console.log(url)
              const src = {
                uri: url,
              }
              console.log(src);
            })
            .catch((e) => {
              console.log(photoUrl);
            })
      })

      const getPhotoUrl = async ({photoUrl}) => {
        if(photoUrl){
          const storage = getStorage();
          getDownloadURL(ref(storage, photoUrl))
            .then((url) => {
              console.log(url)
              const src = {
                uri: url,
              }
              return src;
            })
            .catch((e) => {
              console.log(photoUrl);
            })
        } else {
          const src = {
            uri: '',
          }
          return src;
        }
      }
      

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
                    photo={() => {return getPhotoUrl(item.imagePath)}}></PetCard>  
                </View>
            )}
        />

      );
 
};

export default IndexAdoptPage;
