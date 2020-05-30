# Learn Node.js
## The most important commands...

Let's get started with Node.js! 😃

### Getting started

First of all, let us check if we have **Node.js** installed on our system: You can do so by simply checking which Node version is installed. The following code should return the version number, if nothing gets returned Node.js is not installed.

```bash
node -v
```

If Node is not installed, you can get it from the [official Node.js website](https://nodejs.org/en/). For production purposes the LTS version is highly recommended though newer JS features aren't supported.

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

Note that this will run the script but won't update it. If we want a solution that updates continously with saved changes, we have to install a dev-dependecy called **nodemon**.