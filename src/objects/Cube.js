import { BoxGeometry, Color, Mesh, MeshStandardMaterial, TextureLoader, sRGBEncoding } from 'three';

export class Cube extends Mesh {
	constructor(size) {
		super();
		const loader = new TextureLoader();
		const map = loader.load('./textures/uv_test_bw.png');
		map.encoding = sRGBEncoding;
		map.anisotropy = 16;

		this.geometry = new BoxGeometry(size, size, size);
		this.material = new MeshStandardMaterial({ map });
	}
}
