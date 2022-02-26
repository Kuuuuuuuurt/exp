import app from '../firebase'
import {getFirestore, collection} from 'firebase/firestore'

const db = getFirestore(app);
const countryColRef = collection(db, 'country');
// const countryColRef = collection(db, 'country');
export default countryColRef;