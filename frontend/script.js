const baseUrls = {
    '/server1': 'https://server1-fezp.onrender.com/greet',
    '/server2': 'https://server2-nk0y.onrender.com/greet',
    '/server3': 'https://server3-a4s6.onrender.com/greet',
    '/aggregated': 'https://aggregator-d1fx.onrender.com/greet'
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
  function openResultPage(type) {
    window.location.href = `result.html?server=${encodeURIComponent(type)}`;
  }
  
   
  