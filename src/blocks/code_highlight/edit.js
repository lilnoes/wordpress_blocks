import { TextareaControl } from "@wordpress/components";
import { useState, useRef } from "@wordpress/element";
import Prism from "prismjs";
// Prism.manual = true;
import "prismjs/themes/prism-okaidia.css";

export default function Edit() {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);
  return (
    <div>
      {focus && (
        <TextareaControl
          ref={ref}
          //   onFocus={() => setFocus(true)}
          //   onBlur={() => setFocus(false)}
          label="Write your code here"
          value={text}
          onChange={(val) => setText(val)}
        />
      )}
      {focus && (
        <button
          onClick={() => {
            // let elt = document.getElementById("code");
            // Prism.highlightElement(elt);
            //
            // let d = Prism.highlight(text, Prism.languages.html);
            // console.log("res", d);
            // setCode(d);
            setTimeout(() => {
              let elt = document.getElementById("code");
              Prism.highlightElement(elt, false, function (elt1) {
                setCode(this.innerHTML);
                console.log("finished");
              });
            }, 0);
          }}
        >
          Highlight
        </button>
      )}
      {focus && <p>Click Outside here to see how it looks outside</p>}
      <pre className="line-numbers language-html">
        <code id="code" className="language-html">
          {text}
        </code>
      </pre>
      {!focus && <button onClick={() => setFocus(true)}>Edit</button>}
    </div>
  );
}

// const withFocus = withFocusReturn();
