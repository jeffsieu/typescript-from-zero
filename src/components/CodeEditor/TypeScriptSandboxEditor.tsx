import { useMonaco } from "@monaco-editor/react";
import { useEffect, useId, useState } from "react";
import { createTypeScriptSandbox } from "@typescript/sandbox";
import ts from "typescript";
import { createTwoslashInlayProvider } from "./twoslashinlays";

// TODO: Workaround to hack only one instance of this at one time.
let activeId: string | null = null;

function useTypeScriptSandbox(id: string, enabled = false) {
  const monaco = useMonaco();
  const [sandbox, setSandbox] = useState<ReturnType<
    typeof createTypeScriptSandbox
  > | null>(null);

  useEffect(() => {
    if (!monaco || !enabled) {
      return;
    }

    const newSandbox = createTypeScriptSandbox(
      {
        domID: id,
        filetype: "ts",
        monacoSettings: {
          fontSize: 16,
        },
        compilerOptions: {
          target: monaco.languages.typescript.ScriptTarget.ESNext,
          allowNonTsExtensions: false,
          strict: true,
        },
        supportTwoslashCompilerOptions: true,
      },
      monaco,
      ts
    );

    setSandbox(newSandbox);

    return () => {
      newSandbox.editor.getModel()?.dispose();
    };
  }, [id, monaco, enabled]);

  useEffect(() => {
    if (!sandbox || !monaco || !enabled) {
      return;
    }

    const [tsMajor, tsMinor] = sandbox.ts.version.split(".");
    if (
      (parseInt(tsMajor) > 4 ||
        (parseInt(tsMajor) == 4 && parseInt(tsMinor) >= 6)) &&
      monaco.languages.registerInlayHintsProvider
    ) {
      monaco.languages.registerInlayHintsProvider(
        sandbox.language,
        createTwoslashInlayProvider(sandbox)
      );
    }
  }, [sandbox, enabled]);

  return sandbox;
}

// An instance of a monaco editor whose only purpose is to be rendered
// so that Sandbox can initialize.
export default function TypeScriptSandboxEditor() {
  const id = useId();

  useEffect(() => {
    if (activeId === null) {
      activeId = id;
    }

    return () => {
      if (activeId === id) {
        activeId = null;
      }
    };
  }, [id]);

  const shouldInitialize = activeId === id;

  useTypeScriptSandbox(id, shouldInitialize);

  return (
    <div
      id={shouldInitialize ? id : undefined}
      style={{ height: "1px", display: "none" }}
    ></div>
  );
}
