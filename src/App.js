import { useState } from 'react';
import './App.css';

function App() {
    const [userName, setuserName] = useState("");
    const [email, setemail] = useState('');
    const [textarea, settextarea] = useState('');

return(
<div className='card'>
    <h2>Reviw our page</h2>
<form onSubmit={() => alert(`name: ${userName}
emali: ${email}     
message: ${textarea}`)}>
<div className='enter-info'>
        <label> Enter your Name </label>
        <input type='text' 
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        placeholder='Fall Name'
        required
        />
        </div>
        <div className='enter-info'>
        <label> Enter your Email </label> 
        <input type='text' 
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder='Official Email'
        pattern='example@gmail.com'
        required
        />
        </div>
        <div className='enter-info'>
        <label>Massege<br/></label>
        <textarea
        value={textarea}
        onChange={(e) => settextarea(e.target.value)}
        placeholder='comments ...'
        rows={5}
        required
        />
        </div>
        <div className='enter-info'>
        <button type='submit'>submit</button>

</div>
</form>    
</div>
);
}

export default App;
