import React, { Fragment } from 'react';

const myMarked = require('marked');

class Markdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: `
This is an example markdown, render with default browser settings. You can see markdown for following elements:

# h1 Header
[link]() __bold text__ \`inline code\`
> "I am a quote."

## h2 Subheader
* unordered list item1
* unordered list item2

### h3 Subheader
1. ordered list item1
2. ordered list item2

#### h4 Subheader
code blocks
\`\`\`javascript
let author = "Tomasz Rybacki";
alert(author);
\`\`\`

##### h5 Subheader
image ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Image title")
`
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  render() {
    return (
      <Fragment>
        <h1 className="header">Enter GitHub flavored markdown into the text field and see the result rendered as HTML in the preview box.</h1>

        <div className="container">

          <div className="box flex">
            <div className="box__header box__header--blue">
              <h2 className="box__title">GitHub markdown</h2>
            </div>

            <textarea
              id="editor"
              className="box__area box__area--editor"
              type="text"
              value={this.state.markdown}
              onChange={this.handleInputChange}
            />
          </div>


          <div className="box flex">
            <div className="box__header box__header--green">
              <h2 className="box__title">HTML preview</h2>
            </div>

            <div
              id="preview"
              className="box__area box__area--previev"
              dangerouslySetInnerHTML={{ __html: myMarked(this.state.markdown) }}
            />
          </div>

        </div>

      </Fragment>
    );
  }
}

export default Markdown;
