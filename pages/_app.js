import App from 'next/app'
import firebase, {FirebaseContext} from '../firebase'

import '../public/static/css/style.css'
import "normalize.css"

export default function MyApp({ Component, pageProps }) {
    return (
                <FirebaseContext.Provider
                    values={{
                        firebase
                    }}
                >
                    <Component {...pageProps} />
                </FirebaseContext.Provider>
            )
}