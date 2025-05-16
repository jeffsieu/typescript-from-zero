import { Editor, DiffEditor, useMonaco } from "@monaco-editor/react";
import { useColorMode } from "@docusaurus/theme-common";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import TypeScriptSandboxEditor from "./TypeScriptSandboxEditor";
import styles from "./styles.module.css";

function useSavedCode(key: string, defaultValue: string) {
  const [code, setCode] = useLocalStorage(key, defaultValue);

  return {
    code,
    setCode,
  };
}

function useShouldSaveCode() {
  const [shouldAutosaveCode, setShouldAutosaveCode] = useLocalStorage(
    "shouldAutosaveCode",
    true
  );

  return [shouldAutosaveCode, setShouldAutosaveCode] as const;
}

type CodeEditorProps = {
  codeKey: string;
  defaultValue: string;
  solution: string;
};

export default function CodeEditor({
  codeKey,
  defaultValue,
  solution,
}: CodeEditorProps) {
  const monaco = useMonaco();
  const [shouldShowDiff, setShouldShowDiff] = useState(false);
  const { code, setCode } = useSavedCode(codeKey, defaultValue);
  const [shouldShowSolution, setShouldShowSolution] = useState(false);
  const [value, setValue] = useState(code);
  const [shouldAutosaveCode, setShouldAutosaveCode] = useShouldSaveCode();
  const { colorMode } = useColorMode();
  const [clipboardTick, setClipboardTick] = useState(false);
  const clipboardTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const theme = colorMode === "dark" ? "vs-dark" : "light";

  const handleCodeChange = (newValue: string | undefined) => {
    if (shouldShowSolution) {
      return;
    }
    setValue(newValue || "");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setClipboardTick(true);

    if (clipboardTimeoutRef.current) {
      clearTimeout(clipboardTimeoutRef.current);
    }

    clipboardTimeoutRef.current = setTimeout(() => {
      setClipboardTick(false);
    }, 1000);
  };

  useEffect(() => {
    if (shouldShowSolution) {
      return;
    }

    if (shouldAutosaveCode) {
      console.log("Autosaving code...", value);
      setCode(value);
    }
  }, [value, shouldAutosaveCode, setCode, shouldShowSolution]);

  useEffect(() => {
    if (!monaco) {
      return;
    }

    // Show inlay hints
    // monaco.languages.registerInlayHintsProvider("typescript", )

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
          <button
            className="button button--secondary button--outline"
            onClick={handleCopyToClipboard}
          >
            {clipboardTick ? "✔ Copied" : "Copy"}
          </button>
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
