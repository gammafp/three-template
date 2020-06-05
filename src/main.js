import { App } from './app';

const app = new App(document.querySelector('#game-container'));

window.addEventListener('resize', () => {
	app.onResize();
});
