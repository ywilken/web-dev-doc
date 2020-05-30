const DataContent = [
    {
        title: 'Node.js',
        url: '/nodejs',
        contentArray: [
            {type: 'h2',
            content: 'The most important commands:'},
            {type: 'p',
            content: `First of all, let us check if we have Node.js installed on our system. If so the following command will return the current version number:`},
            {type: 'code',
            lang: '',
            content: 
                `node -v`
            },
            {type: 'p',
            content: `If installed, we can run node via...`},
            {type: 'code',
            lang: '',
            content: 
                `node`
            },
            {type: 'p',
            content: `and exit through...`},
            {type: 'code',
            lang: '',
            content: 
                `process.exit()`
            },
            {type: 'p',
            content: `As long as Node runs we can use Javascript in our terminal.`},
            {type: 'p',
            content: `We can also run specific files in Node using the above command with the file name. Look at the following example:`},
            {type: 'code',
            lang: '',
            content: 
                `node script.js`
            },
            {type: 'p',
            content: `Note that this will run the script but won't update it. If we want a solution that updates continously with saved changes, we have to install a dev-dependecy called nodemon.`}
        ]
    },
    {
        title: 'Nodemon',
        url: '/nodemon',
        contentArray: [
            {type: 'p',
            content: 'A) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio.'},
            {type: 'p',
            content: 'B) Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio.'},
            {type: 'p',
            content: 'C) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio.'},
            {type: 'p',
            content: 'D) Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio.'
            },
            {type: 'p',
            content: 'E) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio.'
            },
            {type: 'code',
            lang: 'css',
            content: 
                `   p { color: red }${'\n'}      p { color: red }${'\n'}   p { color: red }`
            },
            {type: 'code',
            lang: '',
            content: 
                `npm install`
            }
        ]
    }
]

export default DataContent;