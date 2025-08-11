"use client";

import React, { useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";

export default function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css", prepend: true });
    cache.compat = true;

    const prevInsert = cache.insert;
    let insertedNames: string[] = [];
    cache.insert = (...args: [string, { name: string }, boolean?, string?]) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        insertedNames.push(serialized.name);
      }
      return prevInsert(...args);
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


