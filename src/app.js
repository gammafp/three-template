import { PerspectiveCamera, Vector3, WebGLRenderer, GammaEncoding, Clock } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Scene1 from './scenes/scene1';

export class App {
	constructor(container) {
		this.container = container;

		this.scene = new Scene1();
		this.clock = new Clock();

		// ## Camera's config
		this.camera = new PerspectiveCamera(35, this.container.clientWidth / this.container.clientHeight, 0.1, 10000);
		this.camera.position.set(10, 10, 10);
		this.camera.lookAt(new Vector3(0, 0, 0));

		// ## Renderer's config
		this.renderer = new WebGLRenderer({
			antialias: true,
		})
		this.renderer.setPixelRatio(window.devicePixelRatio);

		// ## Color correction
		// -> Gamma Color
		// this.renderer.gammaFactor = 2.2;
		// this.renderer.outputEncoding = GammaEncoding;

		// sRGBEncoding
        // this.renderer.outputEncoding = THREE.sRGBEncoding;

		// ## Shadows
        // this.renderer.shadowMap.enabled = true;
        // this.renderer.shadowMap.type = THREE.PCFShadowMap;

		// ## Light's config
		this.renderer.physicallyCorrectLights = true;

		// Orbit controls
		this.control = new OrbitControls(this.camera, this.renderer.domElement);

		this.container.appendChild(this.renderer.domElement);
		this.onResize();
		this.render();
	}

	onResize() {
		this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
		this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
		this.camera.updateProjectionMatrix();
	}

	render() {
		this.renderer.render(this.scene, this.camera);
		// ## Time and Delta Time.
		const delta = this.clock.getDelta();
		const time = this.clock.getElapsedTime();


		// Updates here
		this.scene.update(time, delta);

		this.renderer.setAnimationLoop(() => this.render());
	}
}
