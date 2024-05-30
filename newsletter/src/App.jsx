import {useState} from "react";
import Newsletter from "./components/newsletter/Newsletter.jsx";
import Success from "./components/success/Success.jsx";

function App() {
  const [email, setEmail] = useState('');

  return (
    <main>
      {email ?
        (
          <Success email={email} setEmail={setEmail}/>

        ) : (
          <Newsletter setEmail={setEmail}/>
        )}
    </main>
  );
}

export default App;


