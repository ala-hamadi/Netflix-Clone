import { useEffect, useState, useContext } from 'react';
import  FirebaseContext from '../firebase/FirebaseContext';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const contents = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));

        setContent(contents);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return content ;
}
