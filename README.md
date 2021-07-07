# Portfolio

This portfolio is a forward-facing presentation of myself as a software developer. It shows some of my completed projects as well as my current resume using React.js components to present a completed framework.

## Table of Contents

  I. Technologies Used
  II. Learning points
  III. Purpose
  IV. Code Snippets
  V. Author

### Technologies Used

This portfolio utilizes the following languages and technologies:

HTML
CSS
JavaScript
React.js
React Bootstrap
React-pdf

### Learning Points

While building this website I learned how to set up a properly function navigation bar component within react. I also had to do some troubleshooting to figure out how to present my resume in PDF format. Using react-pdf and a worker I was able to present my resume in pdf format.

### Code Snippets

As I discussed in my learning points, one of the most interesting parts of this project for me was getting the pdf viewer to function. Here is a snippet of the code which I used to do that through the react-pdf package:

```
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return(
    <div className="container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
        <Page pageNumber={pageNumber} style={{ width: '150%' }}/>
      </Document>
    </div>

```

Another example was programming the tab of the navbar which references the user's current location to have an active link color:

```

<Link to="/" className={location.pathname === "/" ? "nav-link-active" : "nav-link"}>
            Home
          </Link>

```

### Author

Sam Poppe
https://github.com/PopSizzle



