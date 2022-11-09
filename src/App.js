import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
    return(
        <div style={global}>
            <Header />
            {/* <Body /> */}
            <Footer />
        </div>
    )
}


const global = {
    margin: '-10px -10px',
    padding: '0px 0px'

}


export default App;
