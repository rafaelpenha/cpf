
import { useRef, useState } from 'react';
import './App.css';


function App() {

  const [msn, setMsn] = useState();
  const num = useRef();

  function TestaCpf () {
    const cpf = num.current.value
    console.log(cpf);
    let i = 0;
    var Soma;
    var Resto;
    Soma = 0;   
    //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    if (cpf == "00000000000")
	return false;

    for (i=1; i<=9; i++)
	Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i); 
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) )
	return false;
	Soma = 0;
    for (i = 1; i <= 10; i++)
       Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) )
        return false;
    return true;
  
}

function Mensagem(){
    if (TestaCpf() == true){
      setMsn('cpf valido')

    } if (TestaCpf() == false){
      setMsn('cpf invalido')
    }

return;

}
  return (
    <div className="App">
      <header className="App-header">
        <div><h1>Digite seu CPF</h1></div>
        <div>
          <input ref={num} type="text" placeholder="000.000.000-00" />
          <input type="submit" onClick={TestaCpf} />
        </div>

        <div>
        
          <p>{msn}</p>
        </div>

      </header>
    </div>
  );
  

}


export default App;
