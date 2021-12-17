/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { createContext } from 'react';

export interface IFolderExplorerContext {
  root: string;
  path: string[];
  fullPath: string[];
  folder: string;

  open: (path: string[], folder: string) => void;
}

export const FolderExplorerContext = createContext<IFolderExplorerContext | null>(null);