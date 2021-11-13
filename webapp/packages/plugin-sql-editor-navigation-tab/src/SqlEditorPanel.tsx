/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import type { TabHandlerPanelComponent } from '@cloudbeaver/core-app';
import { useTab } from '@cloudbeaver/core-blocks';
import { ISqlEditorTabState, SqlEditor } from '@cloudbeaver/plugin-sql-editor';

export const SqlEditorPanel: TabHandlerPanelComponent<ISqlEditorTabState> = function SqlEditorPanel({ tab }) {
  const baseTab = useTab(tab.id);
  // const navigatorService = useService(SqlEditorNavigatorService);

  // const handleOpen = ({ tabId }: ITabData<any>) => navigatorService.openEditorResult(editorId, tabId);
  // const handleClose = ({ tabId }: ITabData<any>) => navigatorService.closeEditorResult(editorId, tabId);

  if (!baseTab.selected) {
    return null;
  }

  return <SqlEditor editorId={tab.id} state={tab.handlerState} />;
};