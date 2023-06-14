import React from "react";
import { render } from "react-dom";
import firebaseConfig from "./config/firebase-config";
import { FirebaseAppProvider } from "reactfire";
import App from "./App";
import "./styles/index.css";
import "./styles/App.css";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<App />
		</FirebaseAppProvider>
	</React.StrictMode>
);
