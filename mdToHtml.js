const mdTransformer = require(`markdown-html-transformer`);
const fs = require(`fs`);

// will read the information from the MD file
fs.readFile('input.md', (err,data)=>{ 
    const HTMLDATA = data;
    let string = data.toString(); // changing the information in the MD file and converting it to a string
    fs.writeFile('output.html', mdTransformer.convertMarkdownToHTML(string), err =>{
        if (err) console.log(err) // If there is an error, then it will be displayed in the console log
    })
})
