import { App } from './App';

const app = new App(document.querySelector('#game-container'));

window.addEventListener('resize', () => {
	app.onResize();
});
