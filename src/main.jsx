import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/App.css";
import firebaseConfig from "./firebase-config";
import { FirebaseAppProvider } from "reactfire";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<Suspense fallback={console.log('Suspense...')}>
				<App />
			</Suspense>
		</FirebaseAppProvider>
	</React.StrictMode>
);
