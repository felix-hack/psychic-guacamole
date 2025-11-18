const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === "/") {
      return new Response(
        `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bun.js Beispielseite</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 600px;
            width: 100%;
            animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        h1 {
            color: #667eea;
            margin-bottom: 20px;
            text-align: center;
            font-size: 2.5em;
        }
        
        .bun-logo {
            text-align: center;
            font-size: 4em;
            margin-bottom: 20px;
        }
        
        p {
            color: #555;
            line-height: 1.6;
            margin-bottom: 15px;
            text-align: center;
        }
        
        .features {
            margin-top: 30px;
        }
        
        .feature {
            background: #f8f9fa;
            padding: 15px;
            margin: 10px 0;
            border-radius: 10px;
            border-left: 4px solid #667eea;
        }
        
        .feature h3 {
            color: #764ba2;
            margin-bottom: 8px;
        }
        
        .feature p {
            text-align: left;
            font-size: 0.9em;
            color: #666;
            margin: 0;
        }
        
        .info {
            margin-top: 20px;
            padding: 15px;
            background: #e3f2fd;
            border-radius: 10px;
            text-align: center;
        }
        
        .info code {
            background: #fff;
            padding: 2px 8px;
            border-radius: 4px;
            color: #667eea;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="bun-logo">🥟</div>
        <h1>Willkommen zu Bun.js!</h1>
        <p>Dies ist eine einfache Beispielseite, die mit Bun.js erstellt wurde.</p>
        
        <div class="features">
            <div class="feature">
                <h3>⚡ Schnell</h3>
                <p>Bun.js ist extrem schnell - es startet Anwendungen in Millisekunden!</p>
            </div>
            
            <div class="feature">
                <h3>📦 Alles-in-einem</h3>
                <p>Runtime, Bundler, Paketmanager und Testrunner in einem Tool.</p>
            </div>
            
            <div class="feature">
                <h3>🔧 TypeScript Support</h3>
                <p>Native TypeScript-Unterstützung ohne zusätzliche Konfiguration.</p>
            </div>
        </div>
        
        <div class="info">
            <p>Server läuft auf Port <code>3000</code></p>
            <p>Powered by Bun v${Bun.version}</p>
        </div>
    </div>
</body>
</html>`,
        {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
          },
        }
      );
    }
    
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`🚀 Server läuft auf http://localhost:${server.port}`);