import { Mesh, MeshStandardMaterial, TextureLoader, sRGBEncoding, BoxBufferGeometry } from 'three';

export class Cube extends Mesh {
	constructor(size) {
		super();
		const loader = new TextureLoader();
		const map = loader.load('./assets/textures/uv_test_bw.png');
		map.encoding = sRGBEncoding;
		map.anisotropy = 16;

		this.geometry = new BoxBufferGeometry(size, size, size);
		this.material = new MeshStandardMaterial({ map });
	}
}
