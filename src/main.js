import App from './App.svelte';


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
// src/main.js

// import '../public/global.css'; // Импорт глобальных стилей

// import App from './App.svelte';

// const app = new App({
//   target: document.getElementById('app'),
// });

// export default app;
