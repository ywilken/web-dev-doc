# Prism.js
## Beautiful code

Makes our code more handsome! 😃

### How to start

**Prism.js** is a tool that we can use to style our code snippets. When using it with React we can simply install it. For more details [check out this prism turorial](https://betterstack.dev/blog/code-highlighting-in-react-using-prismjs/).

First, we have to install the Prism dependency:

```bash
npm install --save prismjs
```

A second plugin provides language support and lets us access the CSS file.

```bash
npm install --save-dev babel-plugin-prismjs
```

Now we can import Prism and the prism.css file (see: prism website) in our React component:

```javascript
import Prism from 'prismjs';
import '../../prism.css';
```

Finally, we need to call the in-built ```highlightAll()``` method. According to the tutorial mentioned above, I needed to call it in after mounting and updating, to get persistent styling.

```javascript
componentDidMount() {
    Prism.highlightAll();
}

componentDidUpdate() {
    Prism.highlightAll();
}
```

### Using Prism.js in JSX

Using the prism styling inside a JSX block is possible, should be avoided though.

I went for a different approach and decided to use another dependency **markdown-to-jsx** to deal with all the content. That's why he code blocks will also appear in the markdown file.

Using the Prism styles with **markdown-to-jsx** is uncomplicated and works almost automatically. We simply use Github markdown conventions:

```bash
    ```javascript 
        // YOUR CODE HERE 
    ```    :)
```

<!-- If Node is not installed, you can get it from the [official Node.js website](https://nodejs.org/en/). For production purposes the LTS version is highly recommended though newer JS features aren't supported.

> **Next Node.js LTS Version** <br/>
> You can check for release dates on the [official Node.js Github Page](https://github.com/nodejs/Release)



### Basic Commands

Having Node.js installed, we can run Node in our Terminal.

```bash
node
```
*As long as Node is runnig, Javascript is enabled in our terminal. Just like the console in a browser.*

We can exit Node via:

```bash
process.exit()
```

> **What is the process object?**<br/>
> The process is a global object (thus we have access to it anywhere). It gives us access to a couple of process events like the mentioned ```exit()``` method. 


We can also run specific files in Node using the above command with the file name. In the following example we open a file called ``` script.js```:

```bash
node script.js
```

Note that this will run the script but won't update it. If we want a solution that updates continously with saved changes, we have to install a dev-dependecy called **nodemon**. -->