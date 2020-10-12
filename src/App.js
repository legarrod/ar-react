import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<p>Esta es la imagen</p>
			<a-scene
				vr-mode-ui="enabled: false"
				embedded
				arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
			>
				<a-camera
					gps-camera
					rotation-reader
					style={{ width: '200px', heigth: '200px' }}
				></a-camera>
				<a-entity
					gltf-model="./assets/magnemite/scene.gltf"
					rotation="0 180 0"
					scale="0.15 0.15 0.15"
					gps-entity-place="longitude: 4.449429; latitude: -75.783491;"
					animation-mixer
				/>
			</a-scene>
		</div>
	);
}

export default App;
