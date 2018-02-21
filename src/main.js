// main.js
import App from './App.html';

const app = new App({
  target: document.querySelector( 'main' ),
  data: { name: 'world' }
});

// change the data associated with the template
app.set({ name: 'Toba' });

// detach the component and clean everything up
app.destroy();