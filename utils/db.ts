/// <reference types="webextension-polyfill" />

import { Mutex } from 'async-mutex';
import browser from 'webextension-polyfill';
import dbSchemaSql from './dbSchema.sql?raw';

const OFFSCREEN_DOCUMENT_PATH = '/offscreen.html';

async function ensureOffscreenDocument() {
  const existingContexts = await browser.runtime.getContexts({
    contextTypes: ['OFFSCREEN_DOCUMENT' as browser.Runtime.ContextType],
    documentUrls: [browser.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)],
  });
} 