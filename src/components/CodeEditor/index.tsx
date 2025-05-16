import { Editor, DiffEditor, useMonaco } from "@monaco-editor/react";
import { useColorMode } from "@docusaurus/theme-common";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import TypeScriptSandboxEditor from "./TypeScriptSandboxEditor";
import styles from "./styles.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import CopyToClipboardButton from "./CopyToClipboardButton";

type CodeEditorProps = {
  codeKey: string;
  defaultValue: string;
  solution: string;
};

function BrowserCodeEditor({
  codeKey,
  defaultValue,
  solution,
}: CodeEditorProps) {
  const monaco = useMonaco();
  const [shouldAutosaveCode, setShouldAutosaveCode] = useLocalStorage(
    "shouldAutosaveCode",
    true
  );
  const [code, setCode] = useLocalStorage(codeKey, defaultValue);

  const [shouldShowDiff, setShouldShowDiff] = useState(false);
  const [shouldShowSolution, setShouldShowSolution] = useState(false);
  const [value, setValue] = useState(code);

  const { colorMode } = useColorMode();
  const theme = colorMode === "dark" ? "vs-dark" : "light";

  const handleCodeChange = (newValue: string | undefined) => {
    if (shouldShowSolution) {
      return;
    }
    setValue(newValue || "");
  };

  useEffect(() => {
    if (shouldShowSolution) {
      return;
    }

    if (shouldAutosaveCode) {
      setCode(value);
    }
  }, [value, shouldAutosaveCode, setCode, shouldShowSolution]);

  useEffect(() => {
    if (!monaco) {
      return;
    }

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      allowNonTsExtensions: false,
      strict: true,
    });
  }, [monaco]);

  return (
    <div>
      <TypeScriptSandboxEditor />
      <div className={styles.editorActions}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            className={clsx(
              "button button--outline",
              shouldAutosaveCode && "button--primary",
              !shouldAutosaveCode && "button--secondary"
            )}
            disabled={shouldShowSolution}
            onClick={() => setShouldAutosaveCode(!shouldAutosaveCode)}
          >
            {shouldAutosaveCode ? "✔ Autosave" : "✖ Autosave"}
          </button>
          <button
            className="button button--secondary button--outline"
            disabled={value === defaultValue || shouldShowSolution}
            onClick={() => {
              handleCodeChange(defaultValue);
            }}
          >
            Reset
          </button>
          <CopyToClipboardButton value={value} />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          {shouldShowSolution && (
            <button
              className="button button--secondary button--outline"
              onClick={() => {
                setShouldShowDiff(!shouldShowDiff);
              }}
            >
              {shouldShowDiff ? "Hide Diff" : "View Diff"}
            </button>
          )}
          <button
            className="button button--primary"
            onClick={() => {
              setShouldShowSolution(!shouldShowSolution);
            }}
          >
            {shouldShowSolution ? "Hide Solution" : "View Solution"}
          </button>
        </div>
      </div>
      {shouldShowSolution && (
        <div
          className="alert alert--info"
          style={{
            marginBottom: "1rem",
          }}
          role="alert"
        >
          {!shouldShowDiff && (
            <span>You are currently viewing the solution.</span>
          )}
          {shouldShowDiff && (
            <span>
              You are currently viewing the solution. The solution is on the
              left, and your code is on the right.
            </span>
          )}
        </div>
      )}
      {(!shouldShowSolution || !shouldShowDiff) && (
        <Editor
          height="50vh"
          options={{
            fontSize: 16,
            readOnly: shouldShowSolution,
          }}
          path={shouldShowSolution ? `${codeKey}.solution.ts` : `${codeKey}.ts`}
          defaultLanguage="typescript"
          defaultValue={shouldShowSolution ? solution : value}
          value={shouldShowSolution ? undefined : value}
          theme={theme}
          onChange={handleCodeChange}
          keepCurrentModel
        />
      )}
      {shouldShowSolution && shouldShowDiff && (
        <DiffEditor
          height="50vh"
          options={{
            fontSize: 16,
          }}
          original={solution}
          modified={value}
          theme={theme}
          language="typescript"
          keepCurrentOriginalModel
          keepCurrentModifiedModel
          originalModelPath={`${codeKey}.solution.ts`}
          modifiedModelPath={`${codeKey}.ts`}
        />
      )}
    </div>
  );
}

export default function CodeEditor(props: CodeEditorProps) {
  return <BrowserOnly>{() => <BrowserCodeEditor {...props} />}</BrowserOnly>;
}
