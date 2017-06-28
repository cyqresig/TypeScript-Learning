import Hello from './components/Hello'
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Hello name="TypeScript" enthusiasmLevel={10} />,
    document.getElementById('root') as HTMLElement
);