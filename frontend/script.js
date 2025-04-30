const baseUrls = {
    '/server1': 'http://localhost:3001/greet',
    '/server2': 'http://localhost:3002/greet',
    '/server3': 'http://localhost:3003/greet',
    '/aggregated': 'http://localhost:4000/greet'
  };
  
  async function fetchGreeting(type) {
    const output = document.getElementById('output');
    const url = baseUrls[type];
    const res = await fetch(url);
    const data = await res.json();
    output.innerText = data.message;
  }
  