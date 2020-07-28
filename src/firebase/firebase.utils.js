import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyANZR9vBAu9pWxyc61unnA0dc0i0bEMWEg",
	authDomain: "maftuh-kings-clothing.firebaseapp.com",
	databaseURL: "https://maftuh-kings-clothing.firebaseio.com",
	projectId: "maftuh-kings-clothing",
	storageBucket: "maftuh-kings-clothing.appspot.com",
	messagingSenderId: "1010368759723",
	appId: "1:1010368759723:web:64e2f3f4b71a44d9f5f4ee"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`/users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();


		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (err) {
			console.log(err);
		}
	}

	return userRef;
}

export const addCollectionsAndDocuments = async (CollectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(CollectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(object => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, object);
	});

	return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
	const convertedCollections = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return ({
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items
		})
	})

	return (
		convertedCollections.reduce((newCollections, collection) => {
			newCollections[collection.title.toLowerCase()] = collection;
			return newCollections;
		}, {})
	)
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;