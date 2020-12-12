import firebase from 'firebase'
import {firebaseConfig} from './firebaseconfig'

export const firebaseApp = firebase.initializeApp(firebaseConfig)