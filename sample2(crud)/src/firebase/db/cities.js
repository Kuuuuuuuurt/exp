import app from '../firebase'
import {getFirestore, collection} from 'firebase/firestore'

const db = getFirestore(app);
const citiesColRef = collection(db, 'cities');
// const countryColRef = collection(db, 'country');
export default citiesColRef;