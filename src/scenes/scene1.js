import { Scene, Color, DirectionalLight, HemisphereLight } from 'three';
import { Cube } from '../objects/Cube';

class Scene1 extends Scene {
	constructor() {
		super();
		this.background = new Color('skyblue');
		this.create();
	}

	create() {
		this.brick = new Cube(2, new Color('rgb(255,0,0)'));
		this.add(this.brick);

		const ambientLight = new HemisphereLight(0xddeeff, 0x202020, 5);
		const light = new DirectionalLight(0xffffff, 3.0);
		this.add(light, ambientLight);
	}

	update(time, delta) {
		this.brick.rotateX(0.01 * (delta * 60));
		this.brick.rotateY(0.01 * (delta * 60))
	}
}

export default Scene1;
