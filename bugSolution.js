```javascript
// pages/index.js
import path from 'path';

const __dirname = path.resolve();

import Home from path.join(__dirname, './components/Home')

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```