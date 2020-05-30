# Markdown + React
## A wonderful idea!

Feels like vacations! 😃

### How to start

First we install the **markdown-to-jsx** depdency. Check the [markdown-to-jsx documentation](https://github.com/probablyup/markdown-to-jsx) on Github.

```bash
npm i markdown-to-jsx
```

Now we can import Markdown to our React component.

```javascript
import Markdown from 'markdown-to-jsx';
```

And start using it.

```javascript
<Markdown>
    {this.state.markdown}
</Markdown>
```

The tricky part comes now - accessing the markdown files. The next section is dedicated about it.