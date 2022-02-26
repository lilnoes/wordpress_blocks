import { InspectorControls } from "@wordpress/block-editor";
import { TextareaControl, TextControl } from "@wordpress/components";
import { useState, useRef } from "@wordpress/element";
import { useEffect } from "@wordpress/element";
import Prism from "prismjs";
// Prism.manual = true;
import "prismjs/themes/prism-okaidia.css";

Prism.plugins.autoloader.languages_path =
  "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/";

export default function Edit({ attributes, setAttributes }) {
  const { rawText, html, language } = attributes;
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <InspectorControls>
        <TextControl
          value={language}
          onChange={(val) => setAttributes({ language: val })}
          label="Language"
        />
      </InspectorControls>
      <div>
        {focus && (
          <TextareaControl
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            label="Write your code here"
            value={rawText}
            onChange={(val) => setAttributes({ rawText: val })}
          />
        )}
        {focus && (
          <button
            onClick={() => {
              setTimeout(() => {
                Prism.highlightAllUnder(ref.current, false, function (elt1) {
                  setAttributes({ html: ref.current.innerHTML });
                  // window.c = ref.current;
                  console.log("finished", html);
                });
              }, 0);
            }}
          >
            Highlight
          </button>
        )}
        {!focus && <button onClick={() => setFocus(true)}>Edit</button>}
        {focus && <p>Click Outside here to see how it looks outside</p>}
        <div ref={ref} className="hidden">
          <pre className={`line-numbers language-${language}`}>
            <code className={`language-${language}`}>{rawText}</code>
          </pre>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </>
  );
}

// const withFocus = withFocusReturn();
