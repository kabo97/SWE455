async function fetchGreeting(type) {
    const output = document.getElementById('output');
    let url;
    switch(type) {
      case '/server1':
        url = 'http://localhost:3001/greet';
        break;
      case '/server2':
        url = 'http://localhost:3002/greet';
        break;
      case '/server3':
        url = 'http://localhost:3003/greet';
        break;
      case '/aggregated':
        url = 'http://localhost:4000/greet';
        break;
    }
    const res = await fetch(url);
    const data = await res.json();
    output.innerText = data.message;
  }
  