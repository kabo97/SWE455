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
  
    if (data.servers) {
      // Aggregated response case
      const details = data.servers.map(s =>
        `${s.server} @ ${new Date(s.timestamp).toLocaleTimeString()} ${s.emoji}`
      ).join(' | ');
      output.innerText = `${data.message}\n${details}`;
    } else {
      // Single server response
      output.innerText = `${data.message} (From: ${data.server} @ ${new Date(data.timestamp).toLocaleTimeString()}) ${data.emoji}`;
    }
  }
  
  