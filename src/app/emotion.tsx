"use client";

import React, { useState } from "react";
import { CacheProvider, SerializedStyles } from "@emotion/react";
import createCache from "@emotion/cache";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StyleSheet = any;
import { useServerInsertedHTML } from "next/navigation";

export default function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css", prepend: true });
    cache.compat = true;

    const prevInsert = cache.insert;
    let insertedNames: string[] = [];
    cache.insert = (selector: string, serialized: SerializedStyles, sheet: StyleSheet, shouldCache: boolean) => {
      if (cache.inserted[serialized.name] === undefined) {
        insertedNames.push(serialized.name);
      }
      return prevInsert(selector, serialized, sheet, shouldCache);
    };
    // @ts-expect-error attach a flush method for server insertion
    cache.flush = () => {
      const prev = insertedNames;
      insertedNames = [];
      return prev;
    };
    return cache;
  });

  useServerInsertedHTML(() => {
    // @ts-expect-error access flush from cache
    const names: string[] = cache.flush();
    if (names.length === 0) return null;

    let styles = "";
    names.forEach((name) => {
      styles += cache.inserted[name];
    });

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}


