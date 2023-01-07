import React from 'react'

const index = () => {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Online, Live Code Editor</title>
    <meta name="description" content="This is an online code editor for html css and javascript. " />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="David Mungai" />
    <meta name="keywords" content="Live code editor, online code editor, live html editor, live css editor, live javascript editor" />
    <link rel="stylesheet" href="main.css" />
    <div className="header-wrap">
      <h1>Live, Online Code Editor</h1>
      <h4>Compile HTML, CSS and JavaScript on the web</h4>
    </div>
    <div id="ide-parent">
      <div id="button-wrapper">
        <button onclick="switchPanel(0)">HTML</button>
        <button onclick="switchPanel(1)">CSS</button>
        <button onclick="switchPanel(2)">js</button>
        <button onclick="runEdit(3)">Result</button>
      </div>
      <div id="ide-container">
        <div className="panel-wrapper">
          <div id="html">
            &lt;!--predefined html, but editable--&gt;
            &lt;div class="circle"&gt;
            click me!
            &lt;/div&gt;
          </div>
        </div>
        <div className="panel-wrapper">
          <div id="css">
            /*predefined CSS, but editable*/
            .circle {'{'}
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: crimson;
            margin: auto;
            margin-top: 50px;
            transition-duration: 300ms;
            {'}'}
          </div>
        </div>
        <div className="panel-wrapper">
          <div id="js">
            //predefined JavaScript, but editable
            var circle = document.querySelector(".circle");
            var bool = false;
            circle.addEventListener('click', function() {'{'}
            if (!bool) {'{'}
            circle.style.background = "coral";
            bool = true;
            {'}'} else {'{'}
            circle.style.background = "crimson";
            bool = false;
            {'}'}
            {'}'});
          </div>
        </div>
        <div className="panel-wrapper">
          <iframe id="result" />
        </div>
      </div>
    </div>
    <div className="description">
      <p>This code editor uses Ace for syntax highlighting and other text
        editing features. Addition or changes to
        the code is compiled on the fly when the result tab is clicked.</p>
    </div>
    <div className="footer">
      <div className="inner-wrap">
        <p>© <span /> abc</p>
        <div className="icons-wrap">
        </div>
      </div>
    </div>
  </div>
  )
}

export default index