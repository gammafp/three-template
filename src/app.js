import { PerspectiveCamera, Vector3, WebGLRenderer, GammaEncoding } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Scene1 from './scenes/scene1';

export class App {
	constructor(config) {
		this.scene = new Scene1();
		this.camera = new PerspectiveCamera(35, 1240 / 720, 0.1, 10000);
		this.renderer = new WebGLRenderer({
			antialias: true,
			canvas: document.getElementById('main-canvas')
		})
		this.camera.position.set(10, 10, 10);
		this.camera.lookAt(new Vector3(0, 0, 0));

		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(config.width, config.height);

		this.renderer.physicallyCorrectLights = true;

		// Gamma factor
		this.renderer.gammaFactor = 2.2;
		// this.renderer.gammaOutput = true;
		this.renderer.outputEncoding = GammaEncoding;

		this.control = new OrbitControls(this.camera, this.renderer.domElement);
		this.render();
	}

	adjustCanvasSize() {
		this.renderer.setSize(innerWidth, innerHeight);
		this.camera.aspect = innerWidth / innerHeight;
		this.camera.updateProjectionMatrix();
	}

	render() {
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(() => this.render());
		this.control.update();
		this.adjustCanvasSize();
	}
}
