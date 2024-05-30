import './globals.css';
import Newsletter from "./components/Newsletter";
import {useState} from "react";


function App() {
  const [email, setEmail] = useState('');

  return (
    <main>
      {email ? (
        <div className="successMessage">
          <h2>Thanks for subscribing!</h2>
          <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription</p>
        </div>
      ) : (
        <Newsletter setEmail={setEmail}/>
      )}
    </main>
  );
}

export default App;


