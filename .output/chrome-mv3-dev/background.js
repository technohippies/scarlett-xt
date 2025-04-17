var background = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var _a, _b;
  function defineBackground(arg) {
    if (arg == null || typeof arg === "function") return { main: arg };
    return arg;
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var browserPolyfill$3 = { exports: {} };
  var browserPolyfill$2 = browserPolyfill$3.exports;
  var hasRequiredBrowserPolyfill$1;
  function requireBrowserPolyfill$1() {
    if (hasRequiredBrowserPolyfill$1) return browserPolyfill$3.exports;
    hasRequiredBrowserPolyfill$1 = 1;
    (function(module, exports) {
      (function(global, factory) {
        {
          factory(module);
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : browserPolyfill$2, function(module2) {
        if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage2(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result2;
                try {
                  result2 = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result2 = Promise.reject(err);
                }
                const isResultThenable = result2 !== true && isThenable(result2);
                if (result2 !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result2);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    })(browserPolyfill$3);
    return browserPolyfill$3.exports;
  }
  var browserPolyfillExports$1 = requireBrowserPolyfill$1();
  const browser$2 = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports$1);
  const list = [
    // Native ES errors https://262.ecma-international.org/12.0/#sec-well-known-intrinsic-objects
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    // Built-in errors
    globalThis.DOMException,
    // Node-specific errors
    // https://nodejs.org/api/errors.html
    globalThis.AssertionError,
    globalThis.SystemError
  ].filter(Boolean).map(
    (constructor) => [constructor.name, constructor]
  );
  const errorConstructors = new Map(list);
  class NonError extends Error {
    constructor(message) {
      super(NonError._prepareSuperMessage(message));
      __publicField(this, "name", "NonError");
    }
    static _prepareSuperMessage(message) {
      try {
        return JSON.stringify(message);
      } catch {
        return String(message);
      }
    }
  }
  const commonProperties = [
    {
      property: "name",
      enumerable: false
    },
    {
      property: "message",
      enumerable: false
    },
    {
      property: "stack",
      enumerable: false
    },
    {
      property: "code",
      enumerable: true
    },
    {
      property: "cause",
      enumerable: false
    }
  ];
  const toJsonWasCalled = /* @__PURE__ */ new WeakSet();
  const toJSON = (from) => {
    toJsonWasCalled.add(from);
    const json = from.toJSON();
    toJsonWasCalled.delete(from);
    return json;
  };
  const getErrorConstructor = (name) => errorConstructors.get(name) ?? Error;
  const destroyCircular = ({
    from,
    seen,
    to,
    forceEnumerable,
    maxDepth,
    depth,
    useToJSON,
    serialize
  }) => {
    if (!to) {
      if (Array.isArray(from)) {
        to = [];
      } else if (!serialize && isErrorLike(from)) {
        const Error2 = getErrorConstructor(from.name);
        to = new Error2();
      } else {
        to = {};
      }
    }
    seen.push(from);
    if (depth >= maxDepth) {
      return to;
    }
    if (useToJSON && typeof from.toJSON === "function" && !toJsonWasCalled.has(from)) {
      return toJSON(from);
    }
    const continueDestroyCircular = (value) => destroyCircular({
      from: value,
      seen: [...seen],
      forceEnumerable,
      maxDepth,
      depth,
      useToJSON,
      serialize
    });
    for (const [key, value] of Object.entries(from)) {
      if (value && value instanceof Uint8Array && value.constructor.name === "Buffer") {
        to[key] = "[object Buffer]";
        continue;
      }
      if (value !== null && typeof value === "object" && typeof value.pipe === "function") {
        to[key] = "[object Stream]";
        continue;
      }
      if (typeof value === "function") {
        continue;
      }
      if (!value || typeof value !== "object") {
        try {
          to[key] = value;
        } catch {
        }
        continue;
      }
      if (!seen.includes(from[key])) {
        depth++;
        to[key] = continueDestroyCircular(from[key]);
        continue;
      }
      to[key] = "[Circular]";
    }
    for (const { property, enumerable } of commonProperties) {
      if (typeof from[property] !== "undefined" && from[property] !== null) {
        Object.defineProperty(to, property, {
          value: isErrorLike(from[property]) ? continueDestroyCircular(from[property]) : from[property],
          enumerable: forceEnumerable ? true : enumerable,
          configurable: true,
          writable: true
        });
      }
    }
    return to;
  };
  function serializeError(value, options = {}) {
    const {
      maxDepth = Number.POSITIVE_INFINITY,
      useToJSON = true
    } = options;
    if (typeof value === "object" && value !== null) {
      return destroyCircular({
        from: value,
        seen: [],
        forceEnumerable: true,
        maxDepth,
        depth: 0,
        useToJSON,
        serialize: true
      });
    }
    if (typeof value === "function") {
      return `[Function: ${value.name || "anonymous"}]`;
    }
    return value;
  }
  function deserializeError(value, options = {}) {
    const { maxDepth = Number.POSITIVE_INFINITY } = options;
    if (value instanceof Error) {
      return value;
    }
    if (isMinimumViableSerializedError(value)) {
      const Error2 = getErrorConstructor(value.name);
      return destroyCircular({
        from: value,
        seen: [],
        to: new Error2(),
        maxDepth,
        depth: 0,
        serialize: false
      });
    }
    return new NonError(value);
  }
  function isErrorLike(value) {
    return Boolean(value) && typeof value === "object" && "name" in value && "message" in value && "stack" in value;
  }
  function isMinimumViableSerializedError(value) {
    return Boolean(value) && typeof value === "object" && "message" in value && !Array.isArray(value);
  }
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  function defineGenericMessanging(config) {
    let removeRootListener;
    let perTypeListeners = {};
    function cleanupRootListener() {
      if (Object.entries(perTypeListeners).length === 0) {
        removeRootListener == null ? void 0 : removeRootListener();
        removeRootListener = void 0;
      }
    }
    let idSeq = Math.floor(Math.random() * 1e4);
    function getNextId() {
      return idSeq++;
    }
    return {
      sendMessage(type, data, ...args) {
        return __async(this, null, function* () {
          var _a2, _b2, _c, _d;
          const _message = {
            id: getNextId(),
            type,
            data,
            timestamp: Date.now()
          };
          const message = (_b2 = yield (_a2 = config.verifyMessageData) == null ? void 0 : _a2.call(config, _message)) != null ? _b2 : _message;
          (_c = config.logger) == null ? void 0 : _c.debug(`[messaging] sendMessage {id=${message.id}} ─ᐅ`, message, ...args);
          const response = yield config.sendMessage(message, ...args);
          const { res, err } = response != null ? response : { err: new Error("No response") };
          (_d = config.logger) == null ? void 0 : _d.debug(`[messaging] sendMessage {id=${message.id}} ᐊ─`, { res, err });
          if (err != null)
            throw deserializeError(err);
          return res;
        });
      },
      onMessage(type, onReceived) {
        var _a2, _b2, _c;
        if (removeRootListener == null) {
          (_a2 = config.logger) == null ? void 0 : _a2.debug(
            `[messaging] "${type}" initialized the message listener for this context`
          );
          removeRootListener = config.addRootListener((message) => {
            var _a3, _b22;
            if (typeof message.type != "string" || typeof message.timestamp !== "number") {
              if (config.breakError) {
                return;
              }
              const err = Error(
                `[messaging] Unknown message format, must include the 'type' & 'timestamp' fields, received: ${JSON.stringify(
                  message
                )}`
              );
              (_a3 = config.logger) == null ? void 0 : _a3.error(err);
              throw err;
            }
            (_b22 = config == null ? void 0 : config.logger) == null ? void 0 : _b22.debug("[messaging] Received message", message);
            const listener = perTypeListeners[message.type];
            if (listener == null)
              return;
            const res = listener(message);
            return Promise.resolve(res).then((res2) => {
              var _a4, _b3;
              return (_b3 = (_a4 = config.verifyMessageData) == null ? void 0 : _a4.call(config, res2)) != null ? _b3 : res2;
            }).then((res2) => {
              var _a4;
              (_a4 = config == null ? void 0 : config.logger) == null ? void 0 : _a4.debug(`[messaging] onMessage {id=${message.id}} ─ᐅ`, { res: res2 });
              return { res: res2 };
            }).catch((err) => {
              var _a4;
              (_a4 = config == null ? void 0 : config.logger) == null ? void 0 : _a4.debug(`[messaging] onMessage {id=${message.id}} ─ᐅ`, { err });
              return { err: serializeError(err) };
            });
          });
        }
        if (perTypeListeners[type] != null) {
          const err = Error(
            `[messaging] In this JS context, only one listener can be setup for ${type}`
          );
          (_b2 = config.logger) == null ? void 0 : _b2.error(err);
          throw err;
        }
        perTypeListeners[type] = onReceived;
        (_c = config.logger) == null ? void 0 : _c.log(`[messaging] Added listener for ${type}`);
        return () => {
          delete perTypeListeners[type];
          cleanupRootListener();
        };
      },
      removeAllListeners() {
        Object.keys(perTypeListeners).forEach((type) => {
          delete perTypeListeners[type];
        });
        cleanupRootListener();
      }
    };
  }
  var browserPolyfill$1 = { exports: {} };
  var browserPolyfill = browserPolyfill$1.exports;
  var hasRequiredBrowserPolyfill;
  function requireBrowserPolyfill() {
    if (hasRequiredBrowserPolyfill) return browserPolyfill$1.exports;
    hasRequiredBrowserPolyfill = 1;
    (function(module, exports) {
      (function(global, factory) {
        {
          factory(module);
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : browserPolyfill, function(module2) {
        var _a2, _b2;
        if (!((_b2 = (_a2 = globalThis.chrome) == null ? void 0 : _a2.runtime) == null ? void 0 : _b2.id)) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(
                  req,
                  {},
                  {
                    getContent: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  }
                );
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage2(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result2;
                try {
                  result2 = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result2 = Promise.reject(err);
                }
                const isResultThenable = result2 !== true && isThenable(result2);
                if (result2 !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result2);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    })(browserPolyfill$1);
    return browserPolyfill$1.exports;
  }
  var browserPolyfillExports = requireBrowserPolyfill();
  const Browser = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports);
  function defineExtensionMessaging(config) {
    return defineGenericMessanging(__spreadProps(__spreadValues({}, config), {
      sendMessage(message, arg) {
        if (arg == null) {
          return Browser.runtime.sendMessage(message);
        }
        const options = typeof arg === "number" ? { tabId: arg } : arg;
        return Browser.tabs.sendMessage(
          options.tabId,
          message,
          // Pass frameId if specified
          options.frameId != null ? { frameId: options.frameId } : void 0
        );
      },
      addRootListener(processMessage) {
        const listener = (message, sender) => {
          if (typeof message === "object")
            return processMessage(__spreadProps(__spreadValues({}, message), { sender }));
          else
            return processMessage(message);
        };
        Browser.runtime.onMessage.addListener(listener);
        return () => Browser.runtime.onMessage.removeListener(listener);
      }
    }));
  }
  const messagingInstance = defineExtensionMessaging();
  const sendMessage = messagingInstance.sendMessage;
  const onMessage = messagingInstance.onMessage;
  background;
  const E_CANCELED = new Error("request for lock canceled");
  var __awaiter$2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result2) {
        result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  class Semaphore {
    constructor(_value, _cancelError = E_CANCELED) {
      this._value = _value;
      this._cancelError = _cancelError;
      this._queue = [];
      this._weightedWaiters = [];
    }
    acquire(weight = 1, priority = 0) {
      if (weight <= 0)
        throw new Error(`invalid weight ${weight}: must be positive`);
      return new Promise((resolve, reject) => {
        const task = { resolve, reject, weight, priority };
        const i = findIndexFromEnd(this._queue, (other) => priority <= other.priority);
        if (i === -1 && weight <= this._value) {
          this._dispatchItem(task);
        } else {
          this._queue.splice(i + 1, 0, task);
        }
      });
    }
    runExclusive(callback_1) {
      return __awaiter$2(this, arguments, void 0, function* (callback, weight = 1, priority = 0) {
        const [value, release] = yield this.acquire(weight, priority);
        try {
          return yield callback(value);
        } finally {
          release();
        }
      });
    }
    waitForUnlock(weight = 1, priority = 0) {
      if (weight <= 0)
        throw new Error(`invalid weight ${weight}: must be positive`);
      if (this._couldLockImmediately(weight, priority)) {
        return Promise.resolve();
      } else {
        return new Promise((resolve) => {
          if (!this._weightedWaiters[weight - 1])
            this._weightedWaiters[weight - 1] = [];
          insertSorted(this._weightedWaiters[weight - 1], { resolve, priority });
        });
      }
    }
    isLocked() {
      return this._value <= 0;
    }
    getValue() {
      return this._value;
    }
    setValue(value) {
      this._value = value;
      this._dispatchQueue();
    }
    release(weight = 1) {
      if (weight <= 0)
        throw new Error(`invalid weight ${weight}: must be positive`);
      this._value += weight;
      this._dispatchQueue();
    }
    cancel() {
      this._queue.forEach((entry) => entry.reject(this._cancelError));
      this._queue = [];
    }
    _dispatchQueue() {
      this._drainUnlockWaiters();
      while (this._queue.length > 0 && this._queue[0].weight <= this._value) {
        this._dispatchItem(this._queue.shift());
        this._drainUnlockWaiters();
      }
    }
    _dispatchItem(item) {
      const previousValue = this._value;
      this._value -= item.weight;
      item.resolve([previousValue, this._newReleaser(item.weight)]);
    }
    _newReleaser(weight) {
      let called = false;
      return () => {
        if (called)
          return;
        called = true;
        this.release(weight);
      };
    }
    _drainUnlockWaiters() {
      if (this._queue.length === 0) {
        for (let weight = this._value; weight > 0; weight--) {
          const waiters = this._weightedWaiters[weight - 1];
          if (!waiters)
            continue;
          waiters.forEach((waiter) => waiter.resolve());
          this._weightedWaiters[weight - 1] = [];
        }
      } else {
        const queuedPriority = this._queue[0].priority;
        for (let weight = this._value; weight > 0; weight--) {
          const waiters = this._weightedWaiters[weight - 1];
          if (!waiters)
            continue;
          const i = waiters.findIndex((waiter) => waiter.priority <= queuedPriority);
          (i === -1 ? waiters : waiters.splice(0, i)).forEach((waiter) => waiter.resolve());
        }
      }
    }
    _couldLockImmediately(weight, priority) {
      return (this._queue.length === 0 || this._queue[0].priority < priority) && weight <= this._value;
    }
  }
  function insertSorted(a, v) {
    const i = findIndexFromEnd(a, (other) => v.priority <= other.priority);
    a.splice(i + 1, 0, v);
  }
  function findIndexFromEnd(a, predicate) {
    for (let i = a.length - 1; i >= 0; i--) {
      if (predicate(a[i])) {
        return i;
      }
    }
    return -1;
  }
  var __awaiter$1 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result2) {
        result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  class Mutex {
    constructor(cancelError) {
      this._semaphore = new Semaphore(1, cancelError);
    }
    acquire() {
      return __awaiter$1(this, arguments, void 0, function* (priority = 0) {
        const [, releaser] = yield this._semaphore.acquire(1, priority);
        return releaser;
      });
    }
    runExclusive(callback, priority = 0) {
      return this._semaphore.runExclusive(() => callback(), 1, priority);
    }
    isLocked() {
      return this._semaphore.isLocked();
    }
    waitForUnlock(priority = 0) {
      return this._semaphore.waitForUnlock(1, priority);
    }
    release() {
      if (this._semaphore.isLocked())
        this._semaphore.release();
    }
    cancel() {
      return this._semaphore.cancel();
    }
  }
  const OFFSCREEN_DOCUMENT_PATH$1 = "offscreen.html";
  let creatingPromise = null;
  const creationMutex = new Mutex();
  async function ensureOffscreenDocument() {
    const release = await creationMutex.acquire();
    try {
      const existingContexts = await browser$2.runtime.getContexts({
        // @ts-ignore - ContextType might be missing OFFSCREEN_DOCUMENT in older types
        contextTypes: ["OFFSCREEN_DOCUMENT"],
        documentUrls: [browser$2.runtime.getURL(OFFSCREEN_DOCUMENT_PATH$1)]
      });
      if (existingContexts.length > 0) {
        return;
      }
      if (creatingPromise) {
        console.log("[DB Util] Waiting for existing offscreen document creation...");
        await creatingPromise;
        return;
      }
      console.log("[DB Util] Creating offscreen document...");
      creatingPromise = chrome.offscreen.createDocument({
        // Use native chrome API
        url: OFFSCREEN_DOCUMENT_PATH$1,
        reasons: ["DOM_PARSER"],
        justification: "Provides PGlite database operations."
      });
      try {
        await creatingPromise;
        console.log("[DB Util] Offscreen document created successfully.");
      } catch (error) {
        console.error("[DB Util] Error creating offscreen document:", error);
        const contextsAfterError = await browser$2.runtime.getContexts({
          // @ts-ignore
          contextTypes: ["OFFSCREEN_DOCUMENT"],
          documentUrls: [browser$2.runtime.getURL(OFFSCREEN_DOCUMENT_PATH$1)]
        });
        if (contextsAfterError.length === 0) {
          throw new Error(`Offscreen document creation failed: ${error.message}`);
        }
        console.warn("[DB Util] Offscreen document existed despite creation error/race condition.");
      } finally {
        creatingPromise = null;
      }
    } finally {
      release();
    }
  }
  async function queryDb(sql, params) {
    await ensureOffscreenDocument();
    return sendMessage("dbQuery", { sql, params: [] });
  }
  background;
  async function loadUserConfig() {
    var _a2, _b2;
    console.log("[llmService] Loading user configuration...");
    try {
      const sql = "SELECT config_json FROM user_configuration WHERE id = 1;";
      const result2 = await queryDb(sql);
      if ((_b2 = (_a2 = result2 == null ? void 0 : result2.rows) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.config_json) {
        const config = JSON.parse(result2.rows[0].config_json);
        console.log("[llmService] Loaded config:", config);
        if (!config.provider || !config.chatModel) throw new Error("Config missing provider/chatModel");
        if (config.provider === "ollama" && (!config.endpoint || !config.embeddingModel)) throw new Error("Ollama config missing endpoint/embeddingModel");
        if (config.provider === "openrouter" && !config.apiKey) throw new Error("OpenRouter config missing apiKey");
        if (config.provider === "groq" && !config.apiKey) throw new Error("Groq config missing apiKey");
        return config;
      }
      console.log("[llmService] No configuration found.");
      return null;
    } catch (error) {
      console.error("[llmService] Error loading or validating configuration:", error);
      return null;
    }
  }
  async function streamChatResponse(request) {
    const { config } = request;
    const sendChunkCallback = (chunk) => {
      sendMessage("ollamaResponse", chunk).catch((e) => console.error(`[llmService] Failed to relay chunk:`, e));
    };
    if (!config) {
      console.error("[llmService] streamChatResponse called with null config.");
      sendChunkCallback({ status: "error", error: "LLM configuration is missing." });
      return;
    }
    console.log(`[llmService] Routing chat stream for provider: ${config.provider}`);
    try {
      let providerModule;
      switch (config.provider) {
        case "ollama": {
          const { ollamaProvider: ollamaProvider2 } = await Promise.resolve().then(() => ollama);
          providerModule = ollamaProvider2;
          break;
        }
        case "openrouter": {
          const { openRouterProvider: openRouterProvider2 } = await Promise.resolve().then(() => openrouter);
          providerModule = openRouterProvider2;
          break;
        }
        case "groq": {
          const { groqProvider: groqProvider2 } = await Promise.resolve().then(() => groq);
          providerModule = groqProvider2;
          break;
        }
        default: {
          console.error("[llmService] Unsupported provider found in config");
          sendChunkCallback({ status: "error", error: "Unsupported LLM provider" });
          return;
        }
      }
      await providerModule.streamChat({ ...request, sendChunk: sendChunkCallback });
    } catch (error) {
      console.error(`[llmService] Error during chat stream routing or execution:`, error);
      sendChunkCallback({ status: "error", error: `LLM Service Error: ${error.message || String(error)}` });
    }
  }
  background;
  console.log("Background script loaded.");
  const OFFSCREEN_DOCUMENT_PATH = "offscreen.html";
  async function hasOffscreenDocument() {
    const existingContexts = await browser$2.runtime.getContexts({
      // @ts-ignore - ContextType might be missing OFFSCREEN_DOCUMENT in older types
      contextTypes: ["OFFSCREEN_DOCUMENT"],
      documentUrls: [browser$2.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)]
    });
    return existingContexts.length > 0;
  }
  async function setupOffscreenDocument() {
    if (!await hasOffscreenDocument()) {
      console.log("[Background] Creating offscreen document...");
      await browser$2.offscreen.createDocument({
        url: OFFSCREEN_DOCUMENT_PATH,
        // Use a valid reason - LOCAL_STORAGE is common if not using others like AUDIO_PLAYBACK
        // @ts-ignore - browser.offscreen may not be in older types
        reasons: [browser$2.offscreen.Reason.LOCAL_STORAGE],
        justification: "Database operations using PGlite"
      });
      console.log("[Background] Offscreen document created.");
    } else {
      console.log("[Background] Offscreen document already exists.");
    }
  }
  const definition = defineBackground(() => {
    console.log("WXT Background defined");
    onMessage("clipPage", async (message) => {
      console.log("Background: Received clipPage message", message.data);
      const {
        title,
        url
        /*, tags */
      } = message.data;
      const sql = `INSERT INTO clips (title, url) VALUES (?, ?);`;
      const params = [title, url];
      console.log("Background: Sending dbExec message to offscreen for clipping...");
      try {
        const dbResult = await sendMessage("dbExec", { sql, params });
        console.log("Background: Offscreen dbExec response:", dbResult);
        console.log(`Background: Successfully clipped ${url}`);
        browser$2.notifications.create(`clip-success-${Date.now()}`, {
          type: "basic",
          iconUrl: browser$2.runtime.getURL("/icon/128.png"),
          title: "Bookmark Saved",
          message: `Saved: ${title}`,
          priority: 0
        });
      } catch (error) {
        console.error("Background: Error executing clip via offscreen:", error);
        browser$2.notifications.create(`clip-error-${Date.now()}`, {
          type: "basic",
          iconUrl: browser$2.runtime.getURL("/icon/128.png"),
          title: "Bookmark Saving Failed",
          message: `Could not save ${title}. Error: ${error instanceof Error ? error.message : String(error)}`,
          priority: 1
        });
      }
    });
    onMessage("getOllamaModels", async (message) => {
      console.log("Background: Received getOllamaModels message", message.data);
      const { endpoint } = message.data;
      if (!endpoint) {
        return { success: false, error: "Ollama endpoint not provided." };
      }
      try {
        const response = await fetch(`${endpoint}/api/tags`);
        if (!response.ok) {
          throw new Error(`Failed to fetch Ollama models: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const models = data.models.map((tag) => ({ id: tag.name, name: tag.name }));
        console.log("Background: Successfully fetched Ollama models:", models);
        return { success: true, models };
      } catch (error) {
        console.error("Background: Error fetching Ollama models:", error);
        return { success: false, error: error.message || "Unknown error fetching models." };
      }
    });
    onMessage("ollamaChatRequest", async (message) => {
      console.log("Background: Received ollamaChatRequest", message.data);
      const { prompt, history } = message.data;
      const config = await loadUserConfig();
      if (!config) {
        console.error("Background: Cannot process chat request, user config not found.");
        sendMessage("ollamaResponse", {
          status: "error",
          error: "LLM configuration not found. Please set it up in the settings."
        }).catch((e) => console.error("Failed to send config error message:", e));
        throw new Error("LLM configuration not found.");
      }
      streamChatResponse({ prompt, history: history || [], config });
      console.log("Background: streamChatResponse initiated (streaming runs in background).");
      return { received: true };
    });
    browser$2.runtime.onInstalled.addListener(async (details) => {
      console.log("Extension installed:", details);
      if (details.reason === "install") {
        console.log("Performing first-time setup...");
        await setupOffscreenDocument().catch((error) => {
          console.error("[Background] Initial setupOffscreenDocument failed on install:", error);
        });
        const url = browser$2.runtime.getURL("onboarding.html");
        await browser$2.tabs.create({
          url,
          active: true
        });
        console.log(`Opened onboarding page: ${url}`);
      } else if (details.reason === "update") {
        console.log(`[Background] Updated from ${details.previousVersion} to ${browser$2.runtime.getManifest().version}`);
      }
    });
    browser$2.runtime.onStartup.addListener(async () => {
      console.log("[Background] Browser startup detected. Setting up offscreen document...");
      try {
        await setupOffscreenDocument();
        console.log("[Background] Offscreen document setup complete on startup.");
      } catch (error) {
        console.error("[Background] setupOffscreenDocument failed on startup:", error);
      }
    });
    console.log("Background script setup complete.");
  });
  background;
  function initPlugins() {
  }
  const browser$1 = ((_b = (_a = globalThis.browser) == null ? void 0 : _a.runtime) == null ? void 0 : _b.id) ? globalThis.browser : globalThis.chrome;
  const browser = browser$1;
  var _MatchPattern = class {
    constructor(matchPattern) {
      if (matchPattern === "<all_urls>") {
        this.isAllUrls = true;
        this.protocolMatches = [..._MatchPattern.PROTOCOLS];
        this.hostnameMatch = "*";
        this.pathnameMatch = "*";
      } else {
        const groups = /(.*):\/\/(.*?)(\/.*)/.exec(matchPattern);
        if (groups == null)
          throw new InvalidMatchPattern(matchPattern, "Incorrect format");
        const [_, protocol, hostname, pathname] = groups;
        validateProtocol(matchPattern, protocol);
        validateHostname(matchPattern, hostname);
        this.protocolMatches = protocol === "*" ? ["http", "https"] : [protocol];
        this.hostnameMatch = hostname;
        this.pathnameMatch = pathname;
      }
    }
    includes(url) {
      if (this.isAllUrls)
        return true;
      const u = typeof url === "string" ? new URL(url) : url instanceof Location ? new URL(url.href) : url;
      return !!this.protocolMatches.find((protocol) => {
        if (protocol === "http")
          return this.isHttpMatch(u);
        if (protocol === "https")
          return this.isHttpsMatch(u);
        if (protocol === "file")
          return this.isFileMatch(u);
        if (protocol === "ftp")
          return this.isFtpMatch(u);
        if (protocol === "urn")
          return this.isUrnMatch(u);
      });
    }
    isHttpMatch(url) {
      return url.protocol === "http:" && this.isHostPathMatch(url);
    }
    isHttpsMatch(url) {
      return url.protocol === "https:" && this.isHostPathMatch(url);
    }
    isHostPathMatch(url) {
      if (!this.hostnameMatch || !this.pathnameMatch)
        return false;
      const hostnameMatchRegexs = [
        this.convertPatternToRegex(this.hostnameMatch),
        this.convertPatternToRegex(this.hostnameMatch.replace(/^\*\./, ""))
      ];
      const pathnameMatchRegex = this.convertPatternToRegex(this.pathnameMatch);
      return !!hostnameMatchRegexs.find((regex) => regex.test(url.hostname)) && pathnameMatchRegex.test(url.pathname);
    }
    isFileMatch(url) {
      throw Error("Not implemented: file:// pattern matching. Open a PR to add support");
    }
    isFtpMatch(url) {
      throw Error("Not implemented: ftp:// pattern matching. Open a PR to add support");
    }
    isUrnMatch(url) {
      throw Error("Not implemented: urn:// pattern matching. Open a PR to add support");
    }
    convertPatternToRegex(pattern) {
      const escaped = this.escapeForRegex(pattern);
      const starsReplaced = escaped.replace(/\\\*/g, ".*");
      return RegExp(`^${starsReplaced}$`);
    }
    escapeForRegex(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  };
  var MatchPattern = _MatchPattern;
  MatchPattern.PROTOCOLS = ["http", "https", "file", "ftp", "urn"];
  var InvalidMatchPattern = class extends Error {
    constructor(matchPattern, reason) {
      super(`Invalid match pattern "${matchPattern}": ${reason}`);
    }
  };
  function validateProtocol(matchPattern, protocol) {
    if (!MatchPattern.PROTOCOLS.includes(protocol) && protocol !== "*")
      throw new InvalidMatchPattern(
        matchPattern,
        `${protocol} not a valid protocol (${MatchPattern.PROTOCOLS.join(", ")})`
      );
  }
  function validateHostname(matchPattern, hostname) {
    if (hostname.includes(":"))
      throw new InvalidMatchPattern(matchPattern, `Hostname cannot include a port`);
    if (hostname.includes("*") && hostname.length > 1 && !hostname.startsWith("*."))
      throw new InvalidMatchPattern(
        matchPattern,
        `If using a wildcard (*), it must go at the start of the hostname`
      );
  }
  function print(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  let ws;
  function getDevServerWebSocket() {
    if (ws == null) {
      const serverUrl = "http://localhost:3000";
      logger.debug("Connecting to dev server @", serverUrl);
      ws = new WebSocket(serverUrl, "vite-hmr");
      ws.addWxtEventListener = ws.addEventListener.bind(ws);
      ws.sendCustom = (event, payload) => ws == null ? void 0 : ws.send(JSON.stringify({ type: "custom", event, payload }));
      ws.addEventListener("open", () => {
        logger.debug("Connected to dev server");
      });
      ws.addEventListener("close", () => {
        logger.debug("Disconnected from dev server");
      });
      ws.addEventListener("error", (event) => {
        logger.error("Failed to connect to dev server", event);
      });
      ws.addEventListener("message", (e) => {
        try {
          const message = JSON.parse(e.data);
          if (message.type === "custom") {
            ws == null ? void 0 : ws.dispatchEvent(
              new CustomEvent(message.event, { detail: message.data })
            );
          }
        } catch (err) {
          logger.error("Failed to handle message", err);
        }
      });
    }
    return ws;
  }
  function keepServiceWorkerAlive() {
    setInterval(async () => {
      await browser.runtime.getPlatformInfo();
    }, 5e3);
  }
  function reloadContentScript(payload) {
    const manifest = browser.runtime.getManifest();
    if (manifest.manifest_version == 2) {
      void reloadContentScriptMv2();
    } else {
      void reloadContentScriptMv3(payload);
    }
  }
  async function reloadContentScriptMv3({
    registration,
    contentScript
  }) {
    if (registration === "runtime") {
      await reloadRuntimeContentScriptMv3(contentScript);
    } else {
      await reloadManifestContentScriptMv3(contentScript);
    }
  }
  async function reloadManifestContentScriptMv3(contentScript) {
    const id = `wxt:${contentScript.js[0]}`;
    logger.log("Reloading content script:", contentScript);
    const registered = await browser.scripting.getRegisteredContentScripts();
    logger.debug("Existing scripts:", registered);
    const existing = registered.find((cs) => cs.id === id);
    if (existing) {
      logger.debug("Updating content script", existing);
      await browser.scripting.updateContentScripts([{ ...contentScript, id }]);
    } else {
      logger.debug("Registering new content script...");
      await browser.scripting.registerContentScripts([{ ...contentScript, id }]);
    }
    await reloadTabsForContentScript(contentScript);
  }
  async function reloadRuntimeContentScriptMv3(contentScript) {
    logger.log("Reloading content script:", contentScript);
    const registered = await browser.scripting.getRegisteredContentScripts();
    logger.debug("Existing scripts:", registered);
    const matches = registered.filter((cs) => {
      var _a2, _b2;
      const hasJs = (_a2 = contentScript.js) == null ? void 0 : _a2.find((js) => {
        var _a3;
        return (_a3 = cs.js) == null ? void 0 : _a3.includes(js);
      });
      const hasCss = (_b2 = contentScript.css) == null ? void 0 : _b2.find((css) => {
        var _a3;
        return (_a3 = cs.css) == null ? void 0 : _a3.includes(css);
      });
      return hasJs || hasCss;
    });
    if (matches.length === 0) {
      logger.log(
        "Content script is not registered yet, nothing to reload",
        contentScript
      );
      return;
    }
    await browser.scripting.updateContentScripts(matches);
    await reloadTabsForContentScript(contentScript);
  }
  async function reloadTabsForContentScript(contentScript) {
    const allTabs = await browser.tabs.query({});
    const matchPatterns = contentScript.matches.map(
      (match) => new MatchPattern(match)
    );
    const matchingTabs = allTabs.filter((tab) => {
      const url = tab.url;
      if (!url) return false;
      return !!matchPatterns.find((pattern) => pattern.includes(url));
    });
    await Promise.all(
      matchingTabs.map(async (tab) => {
        try {
          await browser.tabs.reload(tab.id);
        } catch (err) {
          logger.warn("Failed to reload tab:", err);
        }
      })
    );
  }
  async function reloadContentScriptMv2(_payload) {
    throw Error("TODO: reloadContentScriptMv2");
  }
  {
    try {
      const ws2 = getDevServerWebSocket();
      ws2.addWxtEventListener("wxt:reload-extension", () => {
        browser.runtime.reload();
      });
      ws2.addWxtEventListener("wxt:reload-content-script", (event) => {
        reloadContentScript(event.detail);
      });
      if (true) {
        ws2.addEventListener(
          "open",
          () => ws2.sendCustom("wxt:background-initialized")
        );
        keepServiceWorkerAlive();
      }
    } catch (err) {
      logger.error("Failed to setup web socket connection with dev server", err);
    }
    browser.commands.onCommand.addListener((command) => {
      if (command === "wxt:reload-extension") {
        browser.runtime.reload();
      }
    });
  }
  let result;
  try {
    initPlugins();
    result = definition.main();
    if (result instanceof Promise) {
      console.warn(
        "The background's main() function return a promise, but it must be synchronous"
      );
    }
  } catch (err) {
    logger.error("The background crashed on startup!");
    throw err;
  }
  const result$1 = result;
  async function streamOllamaChat(request) {
    var _a2;
    const { prompt, history = [], config, sendChunk } = request;
    const ollamaConfig = config;
    const model = ollamaConfig.chatModel;
    const endpoint = ollamaConfig.endpoint.replace(/\/$/, "");
    const apiUrl = `${endpoint}/api/chat`;
    console.log(`[ollamaProvider] Sending chat request to ${apiUrl} with model ${model}`);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        messages: [...history, { role: "user", content: prompt }],
        stream: true
      })
    });
    if (!response.ok || !response.body) {
      const errorBody = await response.text().catch(() => "Failed to read error body");
      throw new Error(`Ollama API error (${response.status}): ${errorBody}`);
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const line of lines) {
        if (line.trim() === "") continue;
        try {
          const chunk = JSON.parse(line);
          let responseChunk = null;
          if ((_a2 = chunk.message) == null ? void 0 : _a2.content) {
            responseChunk = { status: "chunk", content: chunk.message.content };
          } else if (chunk.done) {
            responseChunk = {
              status: "done",
              stats: {
                model: chunk.model,
                created_at: chunk.created_at,
                total_duration: chunk.total_duration,
                load_duration: chunk.load_duration,
                prompt_eval_count: chunk.prompt_eval_count,
                prompt_eval_duration: chunk.prompt_eval_duration,
                eval_count: chunk.eval_count,
                eval_duration: chunk.eval_duration
              }
            };
            console.log("[ollamaProvider] Stream finished.", responseChunk.stats);
          }
          if (responseChunk) {
            sendChunk(responseChunk);
          }
        } catch (e) {
          console.error("[ollamaProvider] Failed to parse Ollama stream chunk:", line, e);
        }
      }
    }
    if (buffer.trim()) {
      console.warn("[ollamaProvider] Stream ended with unprocessed buffer:", buffer);
    }
  }
  async function getOllamaEmbeddings(request) {
    const { content, config } = request;
    const ollamaConfig = config;
    if (!ollamaConfig.embeddingModel) {
      throw new Error("Ollama configuration missing required embeddingModel.");
    }
    const model = ollamaConfig.embeddingModel;
    const endpoint = ollamaConfig.endpoint.replace(/\/$/, "");
    const apiUrl = `${endpoint}/api/embeddings`;
    console.log(`[ollamaProvider] Requesting embeddings from ${apiUrl} with model ${model}`);
    if (Array.isArray(content)) {
      throw new Error("Ollama embedding currently only supports single string input in this implementation.");
    }
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt: content
      })
    });
    if (!response.ok) {
      const errorBody = await response.text().catch(() => "Failed to read error body");
      throw new Error(`Ollama Embeddings API error (${response.status}): ${errorBody}`);
    }
    const result2 = await response.json();
    if (!result2.embedding || !Array.isArray(result2.embedding)) {
      throw new Error("Invalid response format from Ollama Embeddings API. 'embedding' array not found.");
    }
    return {
      embeddings: [result2.embedding]
    };
  }
  const ollamaProvider = {
    streamChat: streamOllamaChat,
    getEmbeddings: getOllamaEmbeddings
  };
  background;
  const ollama = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    ollamaProvider
  }, Symbol.toStringTag, { value: "Module" }));
  async function streamOpenRouterChat(request) {
    var _a2, _b2, _c;
    const { prompt, history = [], config, sendChunk } = request;
    const openRouterConfig = config;
    const model = openRouterConfig.chatModel;
    const apiKey = openRouterConfig.apiKey;
    const apiUrl = "https://openrouter.ai/api/v1/chat/completions";
    console.log(`[openRouterProvider] Sending chat request to ${apiUrl} with model ${model}`);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
        // TODO: Consider adding these headers if desired
        // 'HTTP-Referer': '', // YOUR_SITE_URL
        // 'X-Title': '', // YOUR_SITE_NAME
      },
      body: JSON.stringify({
        model,
        messages: [...history, { role: "user", content: prompt }],
        stream: true
      })
    });
    if (!response.ok || !response.body) {
      const errorBody = await response.text().catch(() => "Failed to read error body");
      throw new Error(`OpenRouter API error (${response.status}): ${errorBody}`);
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let done = false;
    while (!done) {
      const { done: readerDone, value } = await reader.read();
      done = readerDone;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const dataContent = line.substring(6).trim();
          if (dataContent === "[DONE]") {
            sendChunk({ status: "done", stats: {} });
            console.log("[openRouterProvider] Stream finished.");
            done = true;
            break;
          }
          try {
            const chunk = JSON.parse(dataContent);
            const content = (_c = (_b2 = (_a2 = chunk.choices) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.delta) == null ? void 0 : _c.content;
            if (content) {
              sendChunk({ status: "chunk", content });
            }
          } catch (e) {
            console.error("[openRouterProvider] Failed to parse stream chunk:", dataContent, e);
          }
        }
      }
    }
    if (buffer.trim()) {
      console.warn("[openRouterProvider] Stream ended with unprocessed buffer:", buffer);
    }
  }
  const openRouterProvider = {
    streamChat: streamOpenRouterChat
    // No getEmbeddings for OpenRouter in this example yet
  };
  background;
  const openrouter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    openRouterProvider
  }, Symbol.toStringTag, { value: "Module" }));
  async function streamGroqChat(request) {
    var _a2, _b2, _c;
    const { prompt, history = [], config, sendChunk } = request;
    const groqConfig = config;
    const model = groqConfig.chatModel;
    const apiKey = groqConfig.apiKey;
    const apiUrl = "https://api.groq.com/openai/v1/chat/completions";
    console.log(`[groqProvider] Sending chat request to ${apiUrl} with model ${model}`);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        messages: [...history, { role: "user", content: prompt }],
        stream: true
        // Optional: Add temperature, max_tokens, etc. if needed later
      })
    });
    if (!response.ok || !response.body) {
      const errorBody = await response.text().catch(() => "Failed to read error body");
      throw new Error(`Groq API error (${response.status}): ${errorBody}`);
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let done = false;
    while (!done) {
      const { done: readerDone, value } = await reader.read();
      done = readerDone;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const dataContent = line.substring(6).trim();
          if (dataContent === "[DONE]") {
            sendChunk({ status: "done", stats: {} });
            console.log("[groqProvider] Stream finished.");
            done = true;
            break;
          }
          try {
            const chunk = JSON.parse(dataContent);
            const content = (_c = (_b2 = (_a2 = chunk.choices) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.delta) == null ? void 0 : _c.content;
            if (content) {
              sendChunk({ status: "chunk", content });
            }
          } catch (e) {
            console.error("[groqProvider] Failed to parse stream chunk:", dataContent, e);
          }
        }
      }
    }
    if (buffer.trim()) {
      console.warn("[groqProvider] Stream ended with unprocessed buffer:", buffer);
    }
  }
  const groqProvider = {
    streamChat: streamGroqChat
    // Groq does not currently have embedding models
  };
  background;
  const groq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    groqProvider
  }, Symbol.toStringTag, { value: "Module" }));
  return result$1;
}();
background;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjIwLjFfQHR5cGVzK25vZGVAMjIuMTQuMV9qaXRpQDIuNC4yX2xpZ2h0bmluZ2Nzc0AxLjI5LjJfcm9sbHVwQDQuNDAuMC9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWJhY2tncm91bmQubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjEyLjAvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VyaWFsaXplLWVycm9yQDExLjAuMy9ub2RlX21vZHVsZXMvc2VyaWFsaXplLWVycm9yL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZXJpYWxpemUtZXJyb3JAMTEuMC4zL25vZGVfbW9kdWxlcy9zZXJpYWxpemUtZXJyb3IvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHdlYmV4dC1jb3JlK21lc3NhZ2luZ0AyLjIuMC9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21lc3NhZ2luZy9saWIvY2h1bmstQlFMRlNGRlouanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd2ViZXh0ZW5zaW9uLXBvbHlmaWxsQDAuMTAuMC9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2ViZXh0LWNvcmUrbWVzc2FnaW5nQDIuMi4wL25vZGVfbW9kdWxlcy9Ad2ViZXh0LWNvcmUvbWVzc2FnaW5nL2xpYi9pbmRleC5qcyIsIi4uLy4uL3V0aWxzL21lc3NhZ2luZy50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9hc3luYy1tdXRleEAwLjUuMC9ub2RlX21vZHVsZXMvYXN5bmMtbXV0ZXgvaW5kZXgubWpzIiwiLi4vLi4vdXRpbHMvZGIudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvbGxtU2VydmljZS50cyIsIi4uLy4uL2VudHJ5cG9pbnRzL2JhY2tncm91bmQudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHd4dC1kZXYrYnJvd3NlckAwLjAuMzE1L25vZGVfbW9kdWxlcy9Ad3h0LWRldi9icm93c2VyL3NyYy9pbmRleC5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3h0QDAuMjAuMV9AdHlwZXMrbm9kZUAyMi4xNC4xX2ppdGlAMi40LjJfbGlnaHRuaW5nY3NzQDEuMjkuMl9yb2xsdXBANC40MC4wL25vZGVfbW9kdWxlcy93eHQvZGlzdC9icm93c2VyLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2ViZXh0LWNvcmUrbWF0Y2gtcGF0dGVybnNAMS4wLjMvbm9kZV9tb2R1bGVzL0B3ZWJleHQtY29yZS9tYXRjaC1wYXR0ZXJucy9saWIvaW5kZXguanMiLCIuLi8uLi9zcmMvc2VydmljZXMvcHJvdmlkZXJzL29sbGFtYS50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm92aWRlcnMvb3BlbnJvdXRlci50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm92aWRlcnMvZ3JvcS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVmaW5lQmFja2dyb3VuZChhcmcpIHtcbiAgaWYgKGFyZyA9PSBudWxsIHx8IHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHsgbWFpbjogYXJnIH07XG4gIHJldHVybiBhcmc7XG59XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEyLjAgLSBUdWUgTWF5IDE0IDIwMjQgMTg6MDE6MjkgKi9cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuICAvKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCEoZ2xvYmFsVGhpcy5jaHJvbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lLmlkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbiAgfVxuICBpZiAoIShnbG9iYWxUaGlzLmJyb3dzZXIgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUuaWQpKSB7XG4gICAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG5cbiAgICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgICAgLy8gSlNPTiBmaWxlLlxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHwgY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IHByb21pc2UgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe1xuICAgICAgICByZWplY3QsXG4gICAgICAgIHJlc29sdmVcbiAgICAgIH0sIHJlcGx5KSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7XG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsImNvbnN0IGxpc3QgPSBbXG5cdC8vIE5hdGl2ZSBFUyBlcnJvcnMgaHR0cHM6Ly8yNjIuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy8xMi4wLyNzZWMtd2VsbC1rbm93bi1pbnRyaW5zaWMtb2JqZWN0c1xuXHRFdmFsRXJyb3IsXG5cdFJhbmdlRXJyb3IsXG5cdFJlZmVyZW5jZUVycm9yLFxuXHRTeW50YXhFcnJvcixcblx0VHlwZUVycm9yLFxuXHRVUklFcnJvcixcblxuXHQvLyBCdWlsdC1pbiBlcnJvcnNcblx0Z2xvYmFsVGhpcy5ET01FeGNlcHRpb24sXG5cblx0Ly8gTm9kZS1zcGVjaWZpYyBlcnJvcnNcblx0Ly8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9lcnJvcnMuaHRtbFxuXHRnbG9iYWxUaGlzLkFzc2VydGlvbkVycm9yLFxuXHRnbG9iYWxUaGlzLlN5c3RlbUVycm9yLFxuXVxuXHQvLyBOb24tbmF0aXZlIEVycm9ycyBhcmUgdXNlZCB3aXRoIGBnbG9iYWxUaGlzYCBiZWNhdXNlIHRoZXkgbWlnaHQgYmUgbWlzc2luZy4gVGhpcyBmaWx0ZXIgZHJvcHMgdGhlbSB3aGVuIHVuZGVmaW5lZC5cblx0LmZpbHRlcihCb29sZWFuKVxuXHQubWFwKFxuXHRcdGNvbnN0cnVjdG9yID0+IFtjb25zdHJ1Y3Rvci5uYW1lLCBjb25zdHJ1Y3Rvcl0sXG5cdCk7XG5cbmNvbnN0IGVycm9yQ29uc3RydWN0b3JzID0gbmV3IE1hcChsaXN0KTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JDb25zdHJ1Y3RvcnM7XG4iLCJpbXBvcnQgZXJyb3JDb25zdHJ1Y3RvcnMgZnJvbSAnLi9lcnJvci1jb25zdHJ1Y3RvcnMuanMnO1xuXG5leHBvcnQgY2xhc3MgTm9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdG5hbWUgPSAnTm9uRXJyb3InO1xuXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcblx0XHRzdXBlcihOb25FcnJvci5fcHJlcGFyZVN1cGVyTWVzc2FnZShtZXNzYWdlKSk7XG5cdH1cblxuXHRzdGF0aWMgX3ByZXBhcmVTdXBlck1lc3NhZ2UobWVzc2FnZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBjb21tb25Qcm9wZXJ0aWVzID0gW1xuXHR7XG5cdFx0cHJvcGVydHk6ICduYW1lJyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnbWVzc2FnZScsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdH0sXG5cdHtcblx0XHRwcm9wZXJ0eTogJ3N0YWNrJyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnY29kZScsXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnY2F1c2UnLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXTtcblxuY29uc3QgdG9Kc29uV2FzQ2FsbGVkID0gbmV3IFdlYWtTZXQoKTtcblxuY29uc3QgdG9KU09OID0gZnJvbSA9PiB7XG5cdHRvSnNvbldhc0NhbGxlZC5hZGQoZnJvbSk7XG5cdGNvbnN0IGpzb24gPSBmcm9tLnRvSlNPTigpO1xuXHR0b0pzb25XYXNDYWxsZWQuZGVsZXRlKGZyb20pO1xuXHRyZXR1cm4ganNvbjtcbn07XG5cbmNvbnN0IGdldEVycm9yQ29uc3RydWN0b3IgPSBuYW1lID0+IGVycm9yQ29uc3RydWN0b3JzLmdldChuYW1lKSA/PyBFcnJvcjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmNvbnN0IGRlc3Ryb3lDaXJjdWxhciA9ICh7XG5cdGZyb20sXG5cdHNlZW4sXG5cdHRvLFxuXHRmb3JjZUVudW1lcmFibGUsXG5cdG1heERlcHRoLFxuXHRkZXB0aCxcblx0dXNlVG9KU09OLFxuXHRzZXJpYWxpemUsXG59KSA9PiB7XG5cdGlmICghdG8pIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShmcm9tKSkge1xuXHRcdFx0dG8gPSBbXTtcblx0XHR9IGVsc2UgaWYgKCFzZXJpYWxpemUgJiYgaXNFcnJvckxpa2UoZnJvbSkpIHtcblx0XHRcdGNvbnN0IEVycm9yID0gZ2V0RXJyb3JDb25zdHJ1Y3Rvcihmcm9tLm5hbWUpO1xuXHRcdFx0dG8gPSBuZXcgRXJyb3IoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG8gPSB7fTtcblx0XHR9XG5cdH1cblxuXHRzZWVuLnB1c2goZnJvbSk7XG5cblx0aWYgKGRlcHRoID49IG1heERlcHRoKSB7XG5cdFx0cmV0dXJuIHRvO1xuXHR9XG5cblx0aWYgKHVzZVRvSlNPTiAmJiB0eXBlb2YgZnJvbS50b0pTT04gPT09ICdmdW5jdGlvbicgJiYgIXRvSnNvbldhc0NhbGxlZC5oYXMoZnJvbSkpIHtcblx0XHRyZXR1cm4gdG9KU09OKGZyb20pO1xuXHR9XG5cblx0Y29uc3QgY29udGludWVEZXN0cm95Q2lyY3VsYXIgPSB2YWx1ZSA9PiBkZXN0cm95Q2lyY3VsYXIoe1xuXHRcdGZyb206IHZhbHVlLFxuXHRcdHNlZW46IFsuLi5zZWVuXSxcblx0XHRmb3JjZUVudW1lcmFibGUsXG5cdFx0bWF4RGVwdGgsXG5cdFx0ZGVwdGgsXG5cdFx0dXNlVG9KU09OLFxuXHRcdHNlcmlhbGl6ZSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZnJvbSkpIHtcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5ICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdCdWZmZXInKSB7XG5cdFx0XHR0b1trZXldID0gJ1tvYmplY3QgQnVmZmVyXSc7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBUT0RPOiBVc2UgYHN0cmVhbS5pc1JlYWRhYmxlKClgIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMTguXG5cdFx0aWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnBpcGUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRvW2tleV0gPSAnW29iamVjdCBTdHJlYW1dJztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0Ly8gR3JhY2VmdWxseSBoYW5kbGUgbm9uLWNvbmZpZ3VyYWJsZSBlcnJvcnMgbGlrZSBgRE9NRXhjZXB0aW9uYC5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRvW2tleV0gPSB2YWx1ZTtcblx0XHRcdH0gY2F0Y2gge31cblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCFzZWVuLmluY2x1ZGVzKGZyb21ba2V5XSkpIHtcblx0XHRcdGRlcHRoKys7XG5cdFx0XHR0b1trZXldID0gY29udGludWVEZXN0cm95Q2lyY3VsYXIoZnJvbVtrZXldKTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dG9ba2V5XSA9ICdbQ2lyY3VsYXJdJztcblx0fVxuXG5cdGZvciAoY29uc3Qge3Byb3BlcnR5LCBlbnVtZXJhYmxlfSBvZiBjb21tb25Qcm9wZXJ0aWVzKSB7XG5cdFx0aWYgKHR5cGVvZiBmcm9tW3Byb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcgJiYgZnJvbVtwcm9wZXJ0eV0gIT09IG51bGwpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywgcHJvcGVydHksIHtcblx0XHRcdFx0dmFsdWU6IGlzRXJyb3JMaWtlKGZyb21bcHJvcGVydHldKSA/IGNvbnRpbnVlRGVzdHJveUNpcmN1bGFyKGZyb21bcHJvcGVydHldKSA6IGZyb21bcHJvcGVydHldLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiBmb3JjZUVudW1lcmFibGUgPyB0cnVlIDogZW51bWVyYWJsZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVFcnJvcih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IHtcblx0XHRtYXhEZXB0aCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcblx0XHR1c2VUb0pTT04gPSB0cnVlLFxuXHR9ID0gb3B0aW9ucztcblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBkZXN0cm95Q2lyY3VsYXIoe1xuXHRcdFx0ZnJvbTogdmFsdWUsXG5cdFx0XHRzZWVuOiBbXSxcblx0XHRcdGZvcmNlRW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdG1heERlcHRoLFxuXHRcdFx0ZGVwdGg6IDAsXG5cdFx0XHR1c2VUb0pTT04sXG5cdFx0XHRzZXJpYWxpemU6IHRydWUsXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBQZW9wbGUgc29tZXRpbWVzIHRocm93IHRoaW5ncyBiZXNpZGVzIEVycm9yIG9iamVjdHPigKZcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIGBKU09OLnN0cmluZ2lmeSgpYCBkaXNjYXJkcyBmdW5jdGlvbnMuIFdlIGRvIHRvbywgdW5sZXNzIGEgZnVuY3Rpb24gaXMgdGhyb3duIGRpcmVjdGx5LlxuXHRcdC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGB8fGAgYmVjYXVzZSBgLm5hbWVgIGlzIGFuIGVtcHR5IHN0cmluZyBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucy5cblx0XHRyZXR1cm4gYFtGdW5jdGlvbjogJHt2YWx1ZS5uYW1lIHx8ICdhbm9ueW1vdXMnfV1gO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVFcnJvcih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IHttYXhEZXB0aCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWX0gPSBvcHRpb25zO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKGlzTWluaW11bVZpYWJsZVNlcmlhbGl6ZWRFcnJvcih2YWx1ZSkpIHtcblx0XHRjb25zdCBFcnJvciA9IGdldEVycm9yQ29uc3RydWN0b3IodmFsdWUubmFtZSk7XG5cdFx0cmV0dXJuIGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0XHRmcm9tOiB2YWx1ZSxcblx0XHRcdHNlZW46IFtdLFxuXHRcdFx0dG86IG5ldyBFcnJvcigpLFxuXHRcdFx0bWF4RGVwdGgsXG5cdFx0XHRkZXB0aDogMCxcblx0XHRcdHNlcmlhbGl6ZTogZmFsc2UsXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IE5vbkVycm9yKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3JMaWtlKHZhbHVlKSB7XG5cdHJldHVybiBCb29sZWFuKHZhbHVlKVxuXHQmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCYmICduYW1lJyBpbiB2YWx1ZVxuXHQmJiAnbWVzc2FnZScgaW4gdmFsdWVcblx0JiYgJ3N0YWNrJyBpbiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNNaW5pbXVtVmlhYmxlU2VyaWFsaXplZEVycm9yKHZhbHVlKSB7XG5cdHJldHVybiBCb29sZWFuKHZhbHVlKVxuXHQmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCYmICdtZXNzYWdlJyBpbiB2YWx1ZVxuXHQmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBlcnJvckNvbnN0cnVjdG9yc30gZnJvbSAnLi9lcnJvci1jb25zdHJ1Y3RvcnMuanMnO1xuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZlByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xudmFyIF9fc3ByZWFkUHJvcHMgPSAoYSwgYikgPT4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7XG52YXIgX19vYmpSZXN0ID0gKHNvdXJjZSwgZXhjbHVkZSkgPT4ge1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChzb3VyY2UsIHByb3ApICYmIGV4Y2x1ZGUuaW5kZXhPZihwcm9wKSA8IDApXG4gICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gIGlmIChzb3VyY2UgIT0gbnVsbCAmJiBfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhzb3VyY2UpKSB7XG4gICAgICBpZiAoZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMCAmJiBfX3Byb3BJc0VudW0uY2FsbChzb3VyY2UsIHByb3ApKVxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX2FzeW5jID0gKF9fdGhpcywgX19hcmd1bWVudHMsIGdlbmVyYXRvcikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHZhciBmdWxmaWxsZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlamVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgc3RlcCA9ICh4KSA9PiB4LmRvbmUgPyByZXNvbHZlKHgudmFsdWUpIDogUHJvbWlzZS5yZXNvbHZlKHgudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7XG4gICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KF9fdGhpcywgX19hcmd1bWVudHMpKS5uZXh0KCkpO1xuICB9KTtcbn07XG5cbi8vIHNyYy9nZW5lcmljLnRzXG5pbXBvcnQgeyBzZXJpYWxpemVFcnJvciwgZGVzZXJpYWxpemVFcnJvciB9IGZyb20gXCJzZXJpYWxpemUtZXJyb3JcIjtcbmZ1bmN0aW9uIGRlZmluZUdlbmVyaWNNZXNzYW5naW5nKGNvbmZpZykge1xuICBsZXQgcmVtb3ZlUm9vdExpc3RlbmVyO1xuICBsZXQgcGVyVHlwZUxpc3RlbmVycyA9IHt9O1xuICBmdW5jdGlvbiBjbGVhbnVwUm9vdExpc3RlbmVyKCkge1xuICAgIGlmIChPYmplY3QuZW50cmllcyhwZXJUeXBlTGlzdGVuZXJzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlbW92ZVJvb3RMaXN0ZW5lciA9PSBudWxsID8gdm9pZCAwIDogcmVtb3ZlUm9vdExpc3RlbmVyKCk7XG4gICAgICByZW1vdmVSb290TGlzdGVuZXIgPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGxldCBpZFNlcSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNCk7XG4gIGZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgICByZXR1cm4gaWRTZXErKztcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlbmRNZXNzYWdlKHR5cGUsIGRhdGEsIC4uLmFyZ3MpIHtcbiAgICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYTIsIF9iLCBfYywgX2Q7XG4gICAgICAgIGNvbnN0IF9tZXNzYWdlID0ge1xuICAgICAgICAgIGlkOiBnZXROZXh0SWQoKSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAoX2IgPSB5aWVsZCAoX2EyID0gY29uZmlnLnZlcmlmeU1lc3NhZ2VEYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmNhbGwoY29uZmlnLCBfbWVzc2FnZSkpICE9IG51bGwgPyBfYiA6IF9tZXNzYWdlO1xuICAgICAgICAoX2MgPSBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2MuZGVidWcoYFttZXNzYWdpbmddIHNlbmRNZXNzYWdlIHtpZD0ke21lc3NhZ2UuaWR9fSBcXHUyNTAwXFx1MTQwNWAsIG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNvbmZpZy5zZW5kTWVzc2FnZShtZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgeyByZXMsIGVyciB9ID0gcmVzcG9uc2UgIT0gbnVsbCA/IHJlc3BvbnNlIDogeyBlcnI6IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlXCIpIH07XG4gICAgICAgIChfZCA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfZC5kZWJ1ZyhgW21lc3NhZ2luZ10gc2VuZE1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTE0MEFcXHUyNTAwYCwgeyByZXMsIGVyciB9KTtcbiAgICAgICAgaWYgKGVyciAhPSBudWxsKVxuICAgICAgICAgIHRocm93IGRlc2VyaWFsaXplRXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25NZXNzYWdlKHR5cGUsIG9uUmVjZWl2ZWQpIHtcbiAgICAgIHZhciBfYTIsIF9iLCBfYztcbiAgICAgIGlmIChyZW1vdmVSb290TGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAoX2EyID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5kZWJ1ZyhcbiAgICAgICAgICBgW21lc3NhZ2luZ10gXCIke3R5cGV9XCIgaW5pdGlhbGl6ZWQgdGhlIG1lc3NhZ2UgbGlzdGVuZXIgZm9yIHRoaXMgY29udGV4dGBcbiAgICAgICAgKTtcbiAgICAgICAgcmVtb3ZlUm9vdExpc3RlbmVyID0gY29uZmlnLmFkZFJvb3RMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIHZhciBfYTMsIF9iMjtcbiAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UudHlwZSAhPSBcInN0cmluZ1wiIHx8IHR5cGVvZiBtZXNzYWdlLnRpbWVzdGFtcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5icmVha0Vycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICBgW21lc3NhZ2luZ10gVW5rbm93biBtZXNzYWdlIGZvcm1hdCwgbXVzdCBpbmNsdWRlIHRoZSAndHlwZScgJiAndGltZXN0YW1wJyBmaWVsZHMsIHJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgKF9hMyA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYTMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgKF9iMiA9IGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9iMi5kZWJ1ZyhcIlttZXNzYWdpbmddIFJlY2VpdmVkIG1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBwZXJUeXBlTGlzdGVuZXJzW21lc3NhZ2UudHlwZV07XG4gICAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgY29uc3QgcmVzID0gbGlzdGVuZXIobWVzc2FnZSk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKHJlczIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTQsIF9iMztcbiAgICAgICAgICAgIHJldHVybiAoX2IzID0gKF9hNCA9IGNvbmZpZy52ZXJpZnlNZXNzYWdlRGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNC5jYWxsKGNvbmZpZywgcmVzMikpICE9IG51bGwgPyBfYjMgOiByZXMyO1xuICAgICAgICAgIH0pLnRoZW4oKHJlczIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTQ7XG4gICAgICAgICAgICAoX2E0ID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmRlYnVnKGBbbWVzc2FnaW5nXSBvbk1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgeyByZXM6IHJlczIgfSk7XG4gICAgICAgICAgICByZXR1cm4geyByZXM6IHJlczIgfTtcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E0O1xuICAgICAgICAgICAgKF9hNCA9IGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNC5kZWJ1ZyhgW21lc3NhZ2luZ10gb25NZXNzYWdlIHtpZD0ke21lc3NhZ2UuaWR9fSBcXHUyNTAwXFx1MTQwNWAsIHsgZXJyIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyOiBzZXJpYWxpemVFcnJvcihlcnIpIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBlclR5cGVMaXN0ZW5lcnNbdHlwZV0gIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlcnIgPSBFcnJvcihcbiAgICAgICAgICBgW21lc3NhZ2luZ10gSW4gdGhpcyBKUyBjb250ZXh0LCBvbmx5IG9uZSBsaXN0ZW5lciBjYW4gYmUgc2V0dXAgZm9yICR7dHlwZX1gXG4gICAgICAgICk7XG4gICAgICAgIChfYiA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYi5lcnJvcihlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICBwZXJUeXBlTGlzdGVuZXJzW3R5cGVdID0gb25SZWNlaXZlZDtcbiAgICAgIChfYyA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYy5sb2coYFttZXNzYWdpbmddIEFkZGVkIGxpc3RlbmVyIGZvciAke3R5cGV9YCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkZWxldGUgcGVyVHlwZUxpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgY2xlYW51cFJvb3RMaXN0ZW5lcigpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgIE9iamVjdC5rZXlzKHBlclR5cGVMaXN0ZW5lcnMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgZGVsZXRlIHBlclR5cGVMaXN0ZW5lcnNbdHlwZV07XG4gICAgICB9KTtcbiAgICAgIGNsZWFudXBSb290TGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7XG4gIF9fc3ByZWFkVmFsdWVzLFxuICBfX3NwcmVhZFByb3BzLFxuICBfX29ialJlc3QsXG4gIF9fYXN5bmMsXG4gIGRlZmluZUdlbmVyaWNNZXNzYW5naW5nXG59O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMC4wIC0gRnJpIEF1ZyAxMiAyMDIyIDE5OjQyOjQ0ICovXG5cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG5cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICghZ2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbFRoaXMuYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjsgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG5cbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgICAgLy8gSlNPTiBmaWxlLlxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG5cblxuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTsgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG5cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9OyAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9XG4gICAgICAgICAgLyogd3JhcHBlcnMgKi9cbiAgICAgICAgICAsIHtcbiAgICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgICAgbWF4QXJnczogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTsgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cblxuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07IC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG5cblxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH0gLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTsgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCJpbXBvcnQge1xuICBfX3NwcmVhZFByb3BzLFxuICBfX3NwcmVhZFZhbHVlcyxcbiAgZGVmaW5lR2VuZXJpY01lc3Nhbmdpbmdcbn0gZnJvbSBcIi4vY2h1bmstQlFMRlNGRlouanNcIjtcblxuLy8gc3JjL2V4dGVuc2lvbi50c1xuaW1wb3J0IEJyb3dzZXIgZnJvbSBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiO1xuZnVuY3Rpb24gZGVmaW5lRXh0ZW5zaW9uTWVzc2FnaW5nKGNvbmZpZykge1xuICByZXR1cm4gZGVmaW5lR2VuZXJpY01lc3NhbmdpbmcoX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgY29uZmlnKSwge1xuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UsIGFyZykge1xuICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGFyZyA9PT0gXCJudW1iZXJcIiA/IHsgdGFiSWQ6IGFyZyB9IDogYXJnO1xuICAgICAgcmV0dXJuIEJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShcbiAgICAgICAgb3B0aW9ucy50YWJJZCxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgLy8gUGFzcyBmcmFtZUlkIGlmIHNwZWNpZmllZFxuICAgICAgICBvcHRpb25zLmZyYW1lSWQgIT0gbnVsbCA/IHsgZnJhbWVJZDogb3B0aW9ucy5mcmFtZUlkIH0gOiB2b2lkIDBcbiAgICAgICk7XG4gICAgfSxcbiAgICBhZGRSb290TGlzdGVuZXIocHJvY2Vzc01lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gKG1lc3NhZ2UsIHNlbmRlcikgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgcmV0dXJuIHByb2Nlc3NNZXNzYWdlKF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIG1lc3NhZ2UpLCB7IHNlbmRlciB9KSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc01lc3NhZ2UobWVzc2FnZSk7XG4gICAgICB9O1xuICAgICAgQnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gKCkgPT4gQnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuICB9KSk7XG59XG5leHBvcnQge1xuICBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmdcbn07XG4iLCJpbXBvcnQgeyBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmcgfSBmcm9tICdAd2ViZXh0LWNvcmUvbWVzc2FnaW5nJztcblxuLy8gRGVmaW5lL0ltcG9ydCByZXF1aXJlZCB0eXBlc1xuLy8gVE9ETzogRW5zdXJlIHRoZXNlIHR5cGVzIGFyZSBjb3JyZWN0bHkgZGVmaW5lZCBvciBpbXBvcnRlZCBpZiB0aGV5IGV4aXN0IGVsc2V3aGVyZVxuZXhwb3J0IHR5cGUgT2xsYW1hU3RyZWFtQ2h1bmtTdGF0dXMgPSAnY2h1bmsnIHwgJ2RvbmUnIHwgJ2Vycm9yJyB8ICdvdmVycmlkZV9ncmFudGVkJztcbmV4cG9ydCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rID0gXG4gICAgfCB7IHN0YXR1czogJ2NodW5rJzsgY29udGVudDogc3RyaW5nIH0gXG4gICAgfCB7IHN0YXR1czogJ2RvbmUnOyBzdGF0czogYW55IH0gXG4gICAgfCB7IHN0YXR1czogJ2Vycm9yJzsgZXJyb3I6IHN0cmluZyB9IFxuICAgIHwgeyBzdGF0dXM6ICdvdmVycmlkZV9ncmFudGVkJzsgY29udGVudDogc3RyaW5nOyBkb21haW46IHN0cmluZzsgZXhwaXJlc0F0OiBzdHJpbmcgfTtcbmV4cG9ydCBpbnRlcmZhY2UgT2xsYW1hQ2hhdFJlcXVlc3Qge1xuICAgIHByb21wdDogc3RyaW5nO1xuICAgIGhpc3Rvcnk/OiB7IHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnOyBjb250ZW50OiBzdHJpbmcgfVtdOyBcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdE1lc3NhZ2Uge1xuICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgY29udGVudDogc3RyaW5nO1xuICBpZD86IHN0cmluZzsgLy8gQWRkIG9wdGlvbmFsIElEIHVzZWQgaW4gQ2hhdFBhZ2VcbiAgaXNFcnJvcj86IGJvb2xlYW47IC8vIEFkZCBvcHRpb25hbCBmbGFnIGZvciBlcnJvciBtZXNzYWdlc1xufVxuXG4vLyBEZWZpbmUgQ2xpcERhdGEgdHlwZSBhbmQgZXhwb3J0IGl0XG5leHBvcnQgaW50ZXJmYWNlIENsaXBEYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgdGFnc1xufVxuXG4vLyBEZWZpbmUgREIgb3BlcmF0aW9uIHR5cGVzXG4vLyBFWFBPUlQgdGhlc2UgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBEYkV4ZWNSZXF1ZXN0IHtcbiAgc3FsOiBzdHJpbmc7XG4gIHBhcmFtcz86IGFueVtdOyAvLyBPcHRpb25hbCBwYXJhbXMgZm9yIGV4ZWNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYlF1ZXJ5UmVxdWVzdCB7XG4gIHNxbDogc3RyaW5nO1xuICBwYXJhbXM/OiBhbnlbXTsgLy8gT3B0aW9uYWwgcGFyYW1zIGZvciBxdWVyeVxufVxuXG4vLyBEZWZpbmUgaW5wdXQvb3V0cHV0IGZvciBnZXRPbGxhbWFNb2RlbHNcbmludGVyZmFjZSBHZXRPbGxhbWFNb2RlbHNSZXF1ZXN0IHtcbiAgZW5kcG9pbnQ6IHN0cmluZztcbn1cblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgYSBtb2RlbCByZXR1cm5lZCBieSB0aGUgYmFja2dyb3VuZFxuaW50ZXJmYWNlIE9sbGFtYU1vZGVsIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvLyBBZGQgb3RoZXIgZmllbGRzIGlmIHRoZSBiYWNrZ3JvdW5kIHNlbmRzIG1vcmVcbn1cblxuaW50ZXJmYWNlIEdldE9sbGFtYU1vZGVsc1Jlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbW9kZWxzPzogT2xsYW1hTW9kZWxbXTtcbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbi8vIERlZmluZSB0aGUgb3ZlcmFsbCBwcm90b2NvbCBtYXAgZm9yIHR5cGUgc2FmZXR5XG5leHBvcnQgaW50ZXJmYWNlIFByb3RvY29sTWFwIHtcbiAgLy8gTWVzc2FnZSBmcm9tIFBvcHVwIC0+IEJhY2tncm91bmQgdG8gdHJpZ2dlciBjbGlwcGluZ1xuICBjbGlwUGFnZTogKGRhdGE6IENsaXBEYXRhKSA9PiBQcm9taXNlPHZvaWQ+OyAvLyBBc3N1bWluZyBiYWNrZ3JvdW5kIGRvZXNuJ3QgZGlyZWN0bHkgcmV0dXJuIGRhdGEgaGVyZVxuXG4gIC8vIE1lc3NhZ2UgZnJvbSBVSSAtPiBCYWNrZ3JvdW5kIHRvIGdldCBhdmFpbGFibGUgT2xsYW1hIG1vZGVsc1xuICBnZXRPbGxhbWFNb2RlbHM6IChkYXRhOiBHZXRPbGxhbWFNb2RlbHNSZXF1ZXN0KSA9PiBQcm9taXNlPEdldE9sbGFtYU1vZGVsc1Jlc3BvbnNlPjtcblxuICAvLyA9PSBEQiBPcGVyYXRpb25zIChVSS9CYWNrZ3JvdW5kIC0+IE9mZnNjcmVlbikgPT1cbiAgLy8gRXhlY3V0ZSBTUUwgKG5vIHJldHVybiB2YWx1ZSBleHBlY3RlZCBiZXlvbmQgc3VjY2Vzcy9lcnJvcilcbiAgZGJFeGVjOiAoZGF0YTogRGJFeGVjUmVxdWVzdCkgPT4gUHJvbWlzZTx7IHJvd3NNb2RpZmllZD86IG51bWJlciB9IHwgdm9pZD47IC8vIFBHbGl0ZSBleGVjIG1pZ2h0IHJldHVybiByb3dzTW9kaWZpZWRcblxuICAvLyBRdWVyeSBTUUwgKHJldHVybnMgcm93cylcbiAgZGJRdWVyeTogKGRhdGE6IERiUXVlcnlSZXF1ZXN0KSA9PiBQcm9taXNlPGFueT47IC8vIEtlZXAgcmVzdWx0IHR5cGUgZmxleGlibGUgZm9yIG5vd1xuXG4gIG9sbGFtYUNoYXRSZXF1ZXN0OiAoZGF0YTogT2xsYW1hQ2hhdFJlcXVlc3QpID0+IFByb21pc2U8eyByZWNlaXZlZDogYm9vbGVhbiB9PjtcbiAgb2xsYW1hUmVzcG9uc2U6IE9sbGFtYVN0cmVhbUNodW5rO1xuICBnZXRDaGF0SGlzdG9yeTogKGRhdGE6IHsgc2Vzc2lvbklkPzogbnVtYmVyIHwgJ2N1cnJlbnQnIH0pID0+IFByb21pc2U8Q2hhdE1lc3NhZ2VbXT47XG4gIGFkZFN5c3RlbU1lc3NhZ2U6IHsgY29udGVudDogc3RyaW5nIH07XG59XG5cbi8vIENyZWF0ZSB0aGUgdHlwZWQgbWVzc2FnaW5nIGluc3RhbmNlXG5jb25zdCBtZXNzYWdpbmdJbnN0YW5jZSA9IGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZzxQcm90b2NvbE1hcD4oKTtcblxuLy8gRXhwb3J0IHRoZSBzcGVjaWZpYyBtZXRob2RzIGZyb20gdGhlIGluc3RhbmNlXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSBtZXNzYWdpbmdJbnN0YW5jZS5zZW5kTWVzc2FnZTtcbmV4cG9ydCBjb25zdCBvbk1lc3NhZ2UgPSBtZXNzYWdpbmdJbnN0YW5jZS5vbk1lc3NhZ2U7XG5cbi8vIFJFTU9WRSBjb25mbGljdGluZyByZS1leHBvcnRcbi8vIGV4cG9ydCB0eXBlIHsgUHJvdG9jb2xNYXAgfTsgIiwiY29uc3QgRV9USU1FT1VUID0gbmV3IEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIG11dGV4IHRvIGJlY29tZSBhdmFpbGFibGUnKTtcbmNvbnN0IEVfQUxSRUFEWV9MT0NLRUQgPSBuZXcgRXJyb3IoJ211dGV4IGFscmVhZHkgbG9ja2VkJyk7XG5jb25zdCBFX0NBTkNFTEVEID0gbmV3IEVycm9yKCdyZXF1ZXN0IGZvciBsb2NrIGNhbmNlbGVkJyk7XG5cbnZhciBfX2F3YWl0ZXIkMiA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgU2VtYXBob3JlIHtcbiAgICBjb25zdHJ1Y3RvcihfdmFsdWUsIF9jYW5jZWxFcnJvciA9IEVfQ0FOQ0VMRUQpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgIHRoaXMuX2NhbmNlbEVycm9yID0gX2NhbmNlbEVycm9yO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnMgPSBbXTtcbiAgICB9XG4gICAgYWNxdWlyZSh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB7IHJlc29sdmUsIHJlamVjdCwgd2VpZ2h0LCBwcmlvcml0eSB9O1xuICAgICAgICAgICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQodGhpcy5fcXVldWUsIChvdGhlcikgPT4gcHJpb3JpdHkgPD0gb3RoZXIucHJpb3JpdHkpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xICYmIHdlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWRzIGltbWVkaWF0ZSBkaXNwYXRjaCwgc2tpcCB0aGUgcXVldWVcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrXzEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlciQyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKGNhbGxiYWNrLCB3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgcmVsZWFzZV0gPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB3YWl0Rm9yVW5sb2NrKHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICBpZiAodGhpcy5fY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgICAgICBpbnNlcnRTb3J0ZWQodGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdLCB7IHJlc29sdmUsIHByaW9yaXR5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSA8PSAwO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIHJlbGVhc2Uod2VpZ2h0ID0gMSkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICB0aGlzLl92YWx1ZSArPSB3ZWlnaHQ7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoUXVldWUoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKChlbnRyeSkgPT4gZW50cnkucmVqZWN0KHRoaXMuX2NhbmNlbEVycm9yKSk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuICAgIF9kaXNwYXRjaFF1ZXVlKCkge1xuICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDAgJiYgdGhpcy5fcXVldWVbMF0ud2VpZ2h0IDw9IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZGlzcGF0Y2hJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLl92YWx1ZSAtPSBpdGVtLndlaWdodDtcbiAgICAgICAgaXRlbS5yZXNvbHZlKFtwcmV2aW91c1ZhbHVlLCB0aGlzLl9uZXdSZWxlYXNlcihpdGVtLndlaWdodCldKTtcbiAgICB9XG4gICAgX25ld1JlbGVhc2VyKHdlaWdodCkge1xuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2Uod2VpZ2h0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2RyYWluVW5sb2NrV2FpdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHdhaXRlcnMuZm9yRWFjaCgod2FpdGVyKSA9PiB3YWl0ZXIucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlZFByaW9yaXR5ID0gdGhpcy5fcXVldWVbMF0ucHJpb3JpdHk7XG4gICAgICAgICAgICBmb3IgKGxldCB3ZWlnaHQgPSB0aGlzLl92YWx1ZTsgd2VpZ2h0ID4gMDsgd2VpZ2h0LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0ZXJzID0gdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICghd2FpdGVycylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHdhaXRlcnMuZmluZEluZGV4KCh3YWl0ZXIpID0+IHdhaXRlci5wcmlvcml0eSA8PSBxdWV1ZWRQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgKGkgPT09IC0xID8gd2FpdGVycyA6IHdhaXRlcnMuc3BsaWNlKDAsIGkpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgod2FpdGVyID0+IHdhaXRlci5yZXNvbHZlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9xdWV1ZVswXS5wcmlvcml0eSA8IHByaW9yaXR5KSAmJlxuICAgICAgICAgICAgd2VpZ2h0IDw9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydFNvcnRlZChhLCB2KSB7XG4gICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQoYSwgKG90aGVyKSA9PiB2LnByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICBhLnNwbGljZShpICsgMSwgMCwgdik7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXhGcm9tRW5kKGEsIHByZWRpY2F0ZSkge1xuICAgIGZvciAobGV0IGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYVtpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxudmFyIF9fYXdhaXRlciQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBNdXRleCB7XG4gICAgY29uc3RydWN0b3IoY2FuY2VsRXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2VtYXBob3JlID0gbmV3IFNlbWFwaG9yZSgxLCBjYW5jZWxFcnJvcik7XG4gICAgfVxuICAgIGFjcXVpcmUoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMSh0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFssIHJlbGVhc2VyXSA9IHlpZWxkIHRoaXMuX3NlbWFwaG9yZS5hY3F1aXJlKDEsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUucnVuRXhjbHVzaXZlKCgpID0+IGNhbGxiYWNrKCksIDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayhwcmlvcml0eSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS53YWl0Rm9yVW5sb2NrKDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpKVxuICAgICAgICAgICAgdGhpcy5fc2VtYXBob3JlLnJlbGVhc2UoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmNhbmNlbCgpO1xuICAgIH1cbn1cblxudmFyIF9fYXdhaXRlciA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gd2l0aFRpbWVvdXQoc3luYywgdGltZW91dCwgdGltZW91dEVycm9yID0gRV9USU1FT1VUKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNxdWlyZTogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXNUaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGltZW91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IHlpZWxkIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzeW5jLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3luYy5hY3F1aXJlKHByaW9yaXR5KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGVhc2UgPSBBcnJheS5pc0FycmF5KHRpY2tldCkgPyB0aWNrZXRbMV0gOiB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGlja2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgd2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVsZWFzZSA9ICgpID0+IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRpY2tldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodGlja2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZWxlYXNlKHdlaWdodCkge1xuICAgICAgICAgICAgc3luYy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW5jLmNhbmNlbCgpO1xuICAgICAgICB9LFxuICAgICAgICB3YWl0Rm9yVW5sb2NrOiAod2VpZ2h0T3JQcmlvcml0eSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGxldCB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNTZW1hcGhvcmUoc3luYykpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWlnaHQgIT09IHVuZGVmaW5lZCAmJiB3ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KHRpbWVvdXRFcnJvciksIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICA/IHN5bmMud2FpdEZvclVubG9jayh3ZWlnaHQsIHByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICA6IHN5bmMud2FpdEZvclVubG9jayhwcmlvcml0eSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTG9ja2VkOiAoKSA9PiBzeW5jLmlzTG9ja2VkKCksXG4gICAgICAgIGdldFZhbHVlOiAoKSA9PiBzeW5jLmdldFZhbHVlKCksXG4gICAgICAgIHNldFZhbHVlOiAodmFsdWUpID0+IHN5bmMuc2V0VmFsdWUodmFsdWUpLFxuICAgIH07XG59XG5mdW5jdGlvbiBpc1NlbWFwaG9yZShzeW5jKSB7XG4gICAgcmV0dXJuIHN5bmMuZ2V0VmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saXNuZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5mdW5jdGlvbiB0cnlBY3F1aXJlKHN5bmMsIGFscmVhZHlBY3F1aXJlZEVycm9yID0gRV9BTFJFQURZX0xPQ0tFRCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIHdpdGhUaW1lb3V0KHN5bmMsIDAsIGFscmVhZHlBY3F1aXJlZEVycm9yKTtcbn1cblxuZXhwb3J0IHsgRV9BTFJFQURZX0xPQ0tFRCwgRV9DQU5DRUxFRCwgRV9USU1FT1VULCBNdXRleCwgU2VtYXBob3JlLCB0cnlBY3F1aXJlLCB3aXRoVGltZW91dCB9O1xuIiwiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiAvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjaHJvbWVcIiAvPiBcblxuaW1wb3J0IHsgTXV0ZXggfSBmcm9tICdhc3luYy1tdXRleCc7XG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2luZyc7IFxuXG5jb25zdCBPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCA9ICdvZmZzY3JlZW4uaHRtbCc7XG5sZXQgY3JlYXRpbmdQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG5jb25zdCBjcmVhdGlvbk11dGV4ID0gbmV3IE11dGV4KCk7XG5cbi8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBvZmZzY3JlZW4gZG9jdW1lbnQgZXhpc3RzIGFuZCBjcmVhdGUgaXQgaWYgbm90XG5hc3luYyBmdW5jdGlvbiBlbnN1cmVPZmZzY3JlZW5Eb2N1bWVudCgpIHtcbiAgLy8gVXNlIGEgbXV0ZXggdG8gcHJldmVudCBtdWx0aXBsZSBjb25jdXJyZW50IGNyZWF0aW9uIGF0dGVtcHRzXG4gIGNvbnN0IHJlbGVhc2UgPSBhd2FpdCBjcmVhdGlvbk11dGV4LmFjcXVpcmUoKTtcbiAgdHJ5IHtcbiAgICAvLyBDaGVjayBpZiB0aGUgZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuXG4gICAgIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgICAgICAvLyBAdHMtaWdub3JlIC0gQ29udGV4dFR5cGUgbWlnaHQgYmUgbWlzc2luZyBPRkZTQ1JFRU5fRE9DVU1FTlQgaW4gb2xkZXIgdHlwZXNcbiAgICAgICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCcgYXMgYnJvd3Nlci5SdW50aW1lLkNvbnRleHRUeXBlXSxcbiAgICAgICAgZG9jdW1lbnRVcmxzOiBbYnJvd3Nlci5ydW50aW1lLmdldFVSTChPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCldLFxuICAgICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdDb250ZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnW0RCIFV0aWxdIE9mZnNjcmVlbiBkb2N1bWVudCBhbHJlYWR5IGV4aXN0cy4nKTsgLy8gTGVzcyB2ZXJib3NlXG4gICAgICByZXR1cm47IC8vIEFscmVhZHkgZXhpc3RzLCB3ZSdyZSBnb29kLlxuICAgIH1cblxuICAgIC8vIElmIGNyZWF0aW9uIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MsIHdhaXQgZm9yIGl0IHRvIGNvbXBsZXRlLlxuICAgIGlmIChjcmVhdGluZ1Byb21pc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gV2FpdGluZyBmb3IgZXhpc3Rpbmcgb2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0aW9uLi4uJyk7XG4gICAgICBhd2FpdCBjcmVhdGluZ1Byb21pc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1tEQiBVdGlsXSBDcmVhdGluZyBvZmZzY3JlZW4gZG9jdW1lbnQuLi4nKTtcbiAgICBjcmVhdGluZ1Byb21pc2UgPSBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHsgLy8gVXNlIG5hdGl2ZSBjaHJvbWUgQVBJXG4gICAgICB1cmw6IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRILFxuICAgICAgcmVhc29uczogWydET01fUEFSU0VSJyBhcyBjaHJvbWUub2Zmc2NyZWVuLlJlYXNvbl0sIFxuICAgICAganVzdGlmaWNhdGlvbjogJ1Byb3ZpZGVzIFBHbGl0ZSBkYXRhYmFzZSBvcGVyYXRpb25zLicsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgY3JlYXRpbmdQcm9taXNlO1xuICAgICAgY29uc29sZS5sb2coJ1tEQiBVdGlsXSBPZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkuJyk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0RCIFV0aWxdIEVycm9yIGNyZWF0aW5nIG9mZnNjcmVlbiBkb2N1bWVudDonLCBlcnJvcik7XG4gICAgICAvLyBEb3VibGUtY2hlY2sgaWYgaXQgZXhpc3RzIG5vdywgbWF5YmUgY3JlYXRpb24gc3VjY2VlZGVkIGRlc3BpdGUgZXJyb3I/XG4gICAgICBjb25zdCBjb250ZXh0c0FmdGVyRXJyb3IgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCcgYXMgYnJvd3Nlci5SdW50aW1lLkNvbnRleHRUeXBlXSxcbiAgICAgICAgIGRvY3VtZW50VXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpXSxcbiAgICAgICB9KTtcbiAgICAgICBpZiAoY29udGV4dHNBZnRlckVycm9yLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgLy8gT25seSB0aHJvdyBpZiBpdCB0cnVseSBmYWlsZWQgYW5kIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0aW9uIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKCdbREIgVXRpbF0gT2Zmc2NyZWVuIGRvY3VtZW50IGV4aXN0ZWQgZGVzcGl0ZSBjcmVhdGlvbiBlcnJvci9yYWNlIGNvbmRpdGlvbi4nKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gUmVzZXQgdGhlIHByb21pc2Ugd2hldGhlciBpdCBzdWNjZWVkZWQgb3IgZmFpbGVkXG4gICAgICBjcmVhdGluZ1Byb21pc2UgPSBudWxsOyBcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgLy8gUmVsZWFzZSB0aGUgbXV0ZXhcbiAgICByZWxlYXNlKCk7XG4gIH1cbn1cblxuLy8gRXhwb3J0IGZ1bmN0aW9ucyB0aGF0IG1pcnJvciBQR2xpdGUgbWV0aG9kcyB2aWEgQHdlYmV4dC1jb3JlL21lc3NhZ2luZ1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWNEYihzcWw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGF3YWl0IGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCk7XG4gIC8vIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gU2VuZGluZyBkYkV4ZWMgbWVzc2FnZTonLCB7IHNxbCB9KTsgLy8gTGVzcyB2ZXJib3NlXG4gIC8vIFBHbGl0ZSBleGVjIGRvZXNuJ3Qgc3VwcG9ydCBwYXJhbXMsIHNvIHdlIG9ubHkgc2VuZCBzcWxcbiAgcmV0dXJuIHNlbmRNZXNzYWdlKCdkYkV4ZWMnLCB7IHNxbCB9KTsgXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeURiKHNxbDogc3RyaW5nLCBwYXJhbXM/OiBhbnlbXSk6IFByb21pc2U8YW55PiB7XG4gIGF3YWl0IGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCk7XG4gIC8vIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gU2VuZGluZyBkYlF1ZXJ5IG1lc3NhZ2U6JywgeyBzcWwsIHBhcmFtcyB9KTsgLy8gTGVzcyB2ZXJib3NlXG4gIHJldHVybiBzZW5kTWVzc2FnZSgnZGJRdWVyeScsIHsgc3FsLCBwYXJhbXM6IHBhcmFtcyB8fCBbXSB9KTsgXG59XG5cbi8vIFNjaGVtYSBpcyBpbml0aWFsaXplZCBkaXJlY3RseSBpbiBvZmZzY3JlZW4udHNcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplU2NoZW1hKCkgeyAuLi4gfSAiLCIvLyBzcmMvc2VydmljZXMvbGxtU2VydmljZS50c1xuXG5pbXBvcnQgeyBxdWVyeURiIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGInOyAvLyBUbyBsb2FkIGNvbmZpZ1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnaW5nJzsgLy8gRm9yIHN0cmVhbWluZyByZXNwb25zZXMgYmFja1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QsIExMTUVtYmVkZGluZ1Byb3ZpZGVyLCBQcm92aWRlckVtYmVkZGluZ1JlcXVlc3QgfSBmcm9tICcuL3Byb3ZpZGVycy90eXBlcyc7XG5cbi8vIC0tLSBDb25maWd1cmF0aW9uIFR5cGVzIC0tLVxuXG4vLyBSZXVzZSBDaGF0TWVzc2FnZSBmcm9tIG1lc3NhZ2luZy50cyBpZiBzdWl0YWJsZSwgb3IgcmVkZWZpbmUgaWYgbmVlZGVkXG5pbXBvcnQgdHlwZSB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcblxuZXhwb3J0IHR5cGUgTExNUHJvdmlkZXIgPSAnb2xsYW1hJyB8ICdvcGVucm91dGVyJyB8ICdncm9xJyB8ICd2ZW5pY2UnOyAvLyBBZGQgdmVuaWNlXG5cbi8vIEJhc2UgY29uZmlndXJhdGlvbiBzdHJ1Y3R1cmUgKHlvdSBtaWdodCBzdG9yZSB0aGlzIGFzIEpTT04gaW4gdGhlIERCKVxuZXhwb3J0IGludGVyZmFjZSBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6IExMTVByb3ZpZGVyO1xuICBjaGF0TW9kZWw6IHN0cmluZztcbiAgZW1iZWRkaW5nTW9kZWw/OiBzdHJpbmc7IC8vIE9wdGlvbmFsLCBtaWdodCBub3QgYmUgbmVlZGVkIGZvciBhbGwgcHJvdmlkZXJzIG9yIHNlcGFyYXRlIGNvbmZpZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9sbGFtYUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ29sbGFtYSc7XG4gIGVuZHBvaW50OiBzdHJpbmc7IC8vIGUuZy4sIGh0dHA6Ly9sb2NhbGhvc3Q6MTE0MzRcbiAgLy8gZW1iZWRkaW5nTW9kZWwgaXMgcmVxdWlyZWQgZm9yIGxvY2FsIE9sbGFtYSBlbWJlZGRpbmdcbiAgZW1iZWRkaW5nTW9kZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuUm91dGVyQ29uZmlnIGV4dGVuZHMgTExNQ29uZmlnQmFzZSB7XG4gIHByb3ZpZGVyOiAnb3BlbnJvdXRlcic7XG4gIGFwaUtleTogc3RyaW5nO1xuICAvLyBPcGVuUm91dGVyIG1pZ2h0IHVzZSBzcGVjaWZpYyBtb2RlbCBpZGVudGlmaWVycyBkaWZmZXJlbnQgZnJvbSBPbGxhbWFcbiAgLy8gRW1iZWRkaW5nIG1vZGVsIG1pZ2h0IGJlIGltcGxpY2l0IG9yIGEgc3BlY2lmaWMgb25lIGlmIHRoZXkgb2ZmZXIgaXRcbn1cblxuLy8gQWRkIEdyb3FDb25maWdcbmV4cG9ydCBpbnRlcmZhY2UgR3JvcUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ2dyb3EnO1xuICBhcGlLZXk6IHN0cmluZztcbiAgLy8gR3JvcSBkb2Vzbid0IGN1cnJlbnRseSBvZmZlciBlbWJlZGRpbmcgbW9kZWxzXG4gIGVtYmVkZGluZ01vZGVsPzogdW5kZWZpbmVkOyBcbn1cblxuLy8gQWRkIFZlbmljZUNvbmZpZyAoZXZlbiBpZiBlbXB0eSBmb3Igbm93KVxuZXhwb3J0IGludGVyZmFjZSBWZW5pY2VDb25maWcgZXh0ZW5kcyBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6ICd2ZW5pY2UnO1xuICBhcGlLZXk/OiB1bmRlZmluZWQ7IC8vIE5vIEFQSSBrZXkgbmVlZGVkXG4gIGVtYmVkZGluZ01vZGVsPzogdW5kZWZpbmVkO1xuICAvLyBBZGQgd2FsbGV0IGFkZHJlc3Mgb3Igb3RoZXIgcmVsZXZhbnQgZmllbGRzIGxhdGVyXG59XG5cbmV4cG9ydCB0eXBlIExMTVVzZXJDb25maWcgPSBPbGxhbWFDb25maWcgfCBPcGVuUm91dGVyQ29uZmlnIHwgR3JvcUNvbmZpZyB8IFZlbmljZUNvbmZpZzsgLy8gVW5pb24gdHlwZVxuXG4vLyAtLS0gU2VydmljZSBBcmd1bWVudCBUeXBlcyAtLS1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1DaGF0UmVxdWVzdCB7XG4gIHByb21wdDogc3RyaW5nO1xuICBoaXN0b3J5PzogQ2hhdE1lc3NhZ2VbXTtcbiAgY29uZmlnOiBMTE1Vc2VyQ29uZmlnOyAvLyBQYXNzIHRoZSBsb2FkZWQgY29uZmlnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkaW5nUmVxdWVzdCB7XG4gIGNvbnRlbnQ6IHN0cmluZ1tdIHwgc3RyaW5nOyAvLyBBbGxvdyBzaW5nbGUgc3RyaW5nIG9yIGFycmF5XG4gIGNvbmZpZzogTExNVXNlckNvbmZpZztcbn1cblxuLy8gLS0tIFNlcnZpY2UgUmVzcG9uc2UgVHlwZXMgLS0tXG5cbi8vIEZvciBjaGF0LCB3ZSBzdHJlYW0gT2xsYW1hU3RyZWFtQ2h1bmsgdmlhIHNlbmRNZXNzYWdlXG4vLyBGb3IgZW1iZWRkaW5ncywgd2UgcmV0dXJuIHRoZSB2ZWN0b3JzIGRpcmVjdGx5XG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkZGluZ1Jlc3BvbnNlIHtcbiAgZW1iZWRkaW5nczogbnVtYmVyW11bXTsgLy8gQXJyYXkgb2YgZW1iZWRkaW5nIHZlY3RvcnNcbn1cblxuXG4vLyAtLS0gU2VydmljZSBJbnRlcmZhY2UgKENvbmNlcHR1YWwgLSBpbXBsZW1lbnRhdGlvbiBmb2xsb3dzKSAtLS1cblxuLyoqXG4gKiBMb2FkcyB0aGUgdXNlcidzIExMTSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJDb25maWcoKTogUHJvbWlzZTxMTE1Vc2VyQ29uZmlnIHwgbnVsbD4ge1xuICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIExvYWRpbmcgdXNlciBjb25maWd1cmF0aW9uLi4uJyk7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3FsID0gJ1NFTEVDVCBjb25maWdfanNvbiBGUk9NIHVzZXJfY29uZmlndXJhdGlvbiBXSEVSRSBpZCA9IDE7JztcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeURiKHNxbCk7XG4gICAgaWYgKHJlc3VsdD8ucm93cz8uWzBdPy5jb25maWdfanNvbikge1xuICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShyZXN1bHQucm93c1swXS5jb25maWdfanNvbik7XG4gICAgICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIExvYWRlZCBjb25maWc6JywgY29uZmlnKTtcbiAgICAgIC8vIEJhc2ljIHZhbGlkYXRpb25cbiAgICAgIGlmICghY29uZmlnLnByb3ZpZGVyIHx8ICFjb25maWcuY2hhdE1vZGVsKSB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWcgbWlzc2luZyBwcm92aWRlci9jaGF0TW9kZWxcIik7XG4gICAgICBpZiAoY29uZmlnLnByb3ZpZGVyID09PSAnb2xsYW1hJyAmJiAoIWNvbmZpZy5lbmRwb2ludCB8fCAhY29uZmlnLmVtYmVkZGluZ01vZGVsKSkgdGhyb3cgbmV3IEVycm9yKFwiT2xsYW1hIGNvbmZpZyBtaXNzaW5nIGVuZHBvaW50L2VtYmVkZGluZ01vZGVsXCIpO1xuICAgICAgaWYgKGNvbmZpZy5wcm92aWRlciA9PT0gJ29wZW5yb3V0ZXInICYmICFjb25maWcuYXBpS2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJPcGVuUm91dGVyIGNvbmZpZyBtaXNzaW5nIGFwaUtleVwiKTtcbiAgICAgIGlmIChjb25maWcucHJvdmlkZXIgPT09ICdncm9xJyAmJiAhY29uZmlnLmFwaUtleSkgdGhyb3cgbmV3IEVycm9yKFwiR3JvcSBjb25maWcgbWlzc2luZyBhcGlLZXlcIik7XG4gICAgICByZXR1cm4gY29uZmlnIGFzIExMTVVzZXJDb25maWc7XG4gICAgfSBcbiAgICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIE5vIGNvbmZpZ3VyYXRpb24gZm91bmQuJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW2xsbVNlcnZpY2VdIEVycm9yIGxvYWRpbmcgb3IgdmFsaWRhdGluZyBjb25maWd1cmF0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cbi8qKlxuICogSGFuZGxlcyBzdHJlYW1pbmcgY2hhdCByZXNwb25zZXMgZnJvbSB0aGUgY29uZmlndXJlZCBMTE0gcHJvdmlkZXIuXG4gKiBTZW5kcyBjaHVua3MgYmFjayB2aWEgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywgY2h1bmspLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RyZWFtQ2hhdFJlc3BvbnNlKHJlcXVlc3Q6IFN0cmVhbUNoYXRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgY29uZmlnIH0gPSByZXF1ZXN0O1xuXG4gIGNvbnN0IHNlbmRDaHVua0NhbGxiYWNrID0gKGNodW5rOiBPbGxhbWFTdHJlYW1DaHVuayk6IHZvaWQgPT4ge1xuICAgICBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCBjaHVuaylcbiAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gRmFpbGVkIHRvIHJlbGF5IGNodW5rOmAsIGUpKTtcbiAgfTtcblxuICBpZiAoIWNvbmZpZykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gc3RyZWFtQ2hhdFJlc3BvbnNlIGNhbGxlZCB3aXRoIG51bGwgY29uZmlnLlwiKTtcbiAgICBzZW5kQ2h1bmtDYWxsYmFjayh7IHN0YXR1czogJ2Vycm9yJywgZXJyb3I6ICdMTE0gY29uZmlndXJhdGlvbiBpcyBtaXNzaW5nLicgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBSb3V0aW5nIGNoYXQgc3RyZWFtIGZvciBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG5cbiAgdHJ5IHtcbiAgICBsZXQgcHJvdmlkZXJNb2R1bGU6IExMTUNoYXRQcm92aWRlcjtcblxuICAgIC8vIFVzZSBzd2l0Y2ggc3RhdGVtZW50IGZvciBwcm92aWRlciByb3V0aW5nXG4gICAgc3dpdGNoIChjb25maWcucHJvdmlkZXIpIHtcbiAgICAgIGNhc2UgJ29sbGFtYSc6IHsgLy8gVXNlIGJsb2NrIHNjb3BlIGZvciBpbXBvcnRzXG4gICAgICAgIGNvbnN0IHsgb2xsYW1hUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb2xsYW1hJyk7XG4gICAgICAgIHByb3ZpZGVyTW9kdWxlID0gb2xsYW1hUHJvdmlkZXI7XG4gICAgICAgIGJyZWFrOyAvLyBFeGl0IHN3aXRjaFxuICAgICAgfVxuICAgICAgY2FzZSAnb3BlbnJvdXRlcic6IHtcbiAgICAgICAgY29uc3QgeyBvcGVuUm91dGVyUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb3BlbnJvdXRlcicpO1xuICAgICAgICBwcm92aWRlck1vZHVsZSA9IG9wZW5Sb3V0ZXJQcm92aWRlcjtcbiAgICAgICAgYnJlYWs7IC8vIEV4aXQgc3dpdGNoXG4gICAgICB9XG4gICAgICBjYXNlICdncm9xJzoge1xuICAgICAgICBjb25zdCB7IGdyb3FQcm92aWRlciB9ID0gYXdhaXQgaW1wb3J0KCcuL3Byb3ZpZGVycy9ncm9xJyk7XG4gICAgICAgIHByb3ZpZGVyTW9kdWxlID0gZ3JvcVByb3ZpZGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBVbnN1cHBvcnRlZCBwcm92aWRlciBmb3VuZCBpbiBjb25maWdcIik7XG4gICAgICAgIHNlbmRDaHVua0NhbGxiYWNrKHsgc3RhdHVzOiAnZXJyb3InLCBlcnJvcjogXCJVbnN1cHBvcnRlZCBMTE0gcHJvdmlkZXJcIiB9KTtcbiAgICAgICAgcmV0dXJuOyAvLyBFeGl0IGZ1bmN0aW9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgcHJvdmlkZXIncyBtZXRob2QgKHByb3ZpZGVyTW9kdWxlIGlzIGd1YXJhbnRlZWQgdG8gYmUgYXNzaWduZWQpXG4gICAgYXdhaXQgcHJvdmlkZXJNb2R1bGUuc3RyZWFtQ2hhdCh7IC4uLnJlcXVlc3QsIHNlbmRDaHVuazogc2VuZENodW5rQ2FsbGJhY2sgfSk7XG5cbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gRXJyb3IgZHVyaW5nIGNoYXQgc3RyZWFtIHJvdXRpbmcgb3IgZXhlY3V0aW9uOmAsIGVycm9yKTtcbiAgICAgc2VuZENodW5rQ2FsbGJhY2soeyBzdGF0dXM6ICdlcnJvcicsIGVycm9yOiBgTExNIFNlcnZpY2UgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpfWAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIGVtYmVkZGluZ3MgZm9yIHRoZSBnaXZlbiBjb250ZW50IHVzaW5nIHRoZSBjb25maWd1cmVkIHByb3ZpZGVyLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1iZWRkaW5ncyhyZXF1ZXN0OiBFbWJlZGRpbmdSZXF1ZXN0KTogUHJvbWlzZTxFbWJlZGRpbmdSZXNwb25zZT4ge1xuICAgY29uc3QgeyBjb25maWcgfSA9IHJlcXVlc3Q7XG5cbiAgIGlmICghY29uZmlnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIGdldEVtYmVkZGluZ3MgY2FsbGVkIHdpdGggbnVsbCBjb25maWcuXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMTE0gY29uZmlndXJhdGlvbiBpcyBtaXNzaW5nLicpO1xuICAgfVxuXG4gICBjb25zb2xlLmxvZyhgW2xsbVNlcnZpY2VdIFJvdXRpbmcgZW1iZWRkaW5ncyByZXF1ZXN0IGZvciBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG5cbiAgIHRyeSB7XG4gICAgICAgbGV0IHByb3ZpZGVyTW9kdWxlOiBMTE1FbWJlZGRpbmdQcm92aWRlcjtcblxuICAgICAgIC8vIFVzZSBzd2l0Y2ggc3RhdGVtZW50IGZvciBwcm92aWRlciByb3V0aW5nXG4gICAgICAgc3dpdGNoIChjb25maWcucHJvdmlkZXIpIHtcbiAgICAgICAgIGNhc2UgJ29sbGFtYSc6IHtcbiAgICAgICAgICAgY29uc3QgeyBvbGxhbWFQcm92aWRlciB9ID0gYXdhaXQgaW1wb3J0KCcuL3Byb3ZpZGVycy9vbGxhbWEnKTtcbiAgICAgICAgICAgaWYgKCEoJ2dldEVtYmVkZGluZ3MnIGluIG9sbGFtYVByb3ZpZGVyKSkgdGhyb3cgbmV3IEVycm9yKCdPbGxhbWEgcHJvdmlkZXIgZG9lcyBub3Qgc3VwcG9ydCBnZXRFbWJlZGRpbmdzJyk7XG4gICAgICAgICAgIHByb3ZpZGVyTW9kdWxlID0gb2xsYW1hUHJvdmlkZXIgYXMgTExNRW1iZWRkaW5nUHJvdmlkZXI7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgfVxuICAgICAgICAgY2FzZSAnb3BlbnJvdXRlcic6XG4gICAgICAgICBjYXNlICdncm9xJzpcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbmZpZy5wcm92aWRlcn0gZW1iZWRkaW5ncyBub3QgeWV0IGltcGxlbWVudGVkLmApO1xuICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIFVuc3VwcG9ydGVkIHByb3ZpZGVyIGZvciBlbWJlZGRpbmdzXCIpO1xuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBMTE0gcHJvdmlkZXIgZm9yIGVtYmVkZGluZ3NcIik7XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgLy8gQ2FsbCB0aGUgcHJvdmlkZXIncyBtZXRob2QgKHByb3ZpZGVyTW9kdWxlIGlzIGd1YXJhbnRlZWQgdG8gYmUgYXNzaWduZWQgaWYgbm90IHRocm93bilcbiAgICAgICByZXR1cm4gYXdhaXQgcHJvdmlkZXJNb2R1bGUuZ2V0RW1iZWRkaW5ncyhyZXF1ZXN0KTtcblxuICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gRXJyb3IgZHVyaW5nIGVtYmVkZGluZyByb3V0aW5nIG9yIGV4ZWN1dGlvbjpgLCBlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRW1iZWRkaW5nIFNlcnZpY2UgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpfWApO1xuICAgfVxufVxuXG4vLyBSZW1vdmUgb2xkIHByb3ZpZGVyIGltcGxlbWVudGF0aW9ucyAiLCJpbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgb25NZXNzYWdlLCBzZW5kTWVzc2FnZSwgdHlwZSBQcm90b2NvbE1hcCwgT2xsYW1hU3RyZWFtQ2h1bmsgfSBmcm9tICd+L3V0aWxzL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBsb2FkVXNlckNvbmZpZywgc3RyZWFtQ2hhdFJlc3BvbnNlIH0gZnJvbSAnLi4vc3JjL3NlcnZpY2VzL2xsbVNlcnZpY2UnOyAvLyBVc2UgcmVsYXRpdmUgcGF0aCBmb3IgTExNIHNlcnZpY2UgaW1wb3J0XG5cbmNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kIHNjcmlwdCBsb2FkZWQuJyk7XG5cbi8vIC0tLSBPZmZzY3JlZW4gRG9jdW1lbnQgTWFuYWdlbWVudCAtLS1cbmNvbnN0IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIID0gJ29mZnNjcmVlbi5odG1sJzsgLy8gUGF0aCB0byB5b3VyIG9mZnNjcmVlbiBkb2N1bWVudCBIVE1MXG5cbmFzeW5jIGZ1bmN0aW9uIGhhc09mZnNjcmVlbkRvY3VtZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAvLyBDaGVjayBpZiB0aGUgZG9jdW1lbnQgaXMgYWxyZWFkeSBvcGVuLlxuICAvLyBAdHMtaWdub3JlIC0gY2xpZW50cyBpcyBhdmFpbGFibGUgYnV0IG1heSBzaG93IFRTIGVycm9yXG4gIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgIC8vIEB0cy1pZ25vcmUgLSBDb250ZXh0VHlwZSBtaWdodCBiZSBtaXNzaW5nIE9GRlNDUkVFTl9ET0NVTUVOVCBpbiBvbGRlciB0eXBlc1xuICAgIGNvbnRleHRUeXBlczogWydPRkZTQ1JFRU5fRE9DVU1FTlQnXSxcbiAgICBkb2N1bWVudFVybHM6IFticm93c2VyLnJ1bnRpbWUuZ2V0VVJMKE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKV0gXG4gIH0pO1xuICByZXR1cm4gZXhpc3RpbmdDb250ZXh0cy5sZW5ndGggPiAwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCkge1xuICBpZiAoIShhd2FpdCBoYXNPZmZzY3JlZW5Eb2N1bWVudCgpKSkge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gQ3JlYXRpbmcgb2Zmc2NyZWVuIGRvY3VtZW50Li4uJyk7XG4gICAgLy8gQHRzLWlnbm9yZSAtIGJyb3dzZXIub2Zmc2NyZWVuIG1heSBub3QgYmUgaW4gb2xkZXIgdHlwZXNcbiAgICBhd2FpdCBicm93c2VyLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XG4gICAgICB1cmw6IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRILCBcbiAgICAgIC8vIFVzZSBhIHZhbGlkIHJlYXNvbiAtIExPQ0FMX1NUT1JBR0UgaXMgY29tbW9uIGlmIG5vdCB1c2luZyBvdGhlcnMgbGlrZSBBVURJT19QTEFZQkFDS1xuICAgICAgLy8gQHRzLWlnbm9yZSAtIGJyb3dzZXIub2Zmc2NyZWVuIG1heSBub3QgYmUgaW4gb2xkZXIgdHlwZXNcbiAgICAgIHJlYXNvbnM6IFticm93c2VyLm9mZnNjcmVlbi5SZWFzb24uTE9DQUxfU1RPUkFHRV0sIFxuICAgICAganVzdGlmaWNhdGlvbjogJ0RhdGFiYXNlIG9wZXJhdGlvbnMgdXNpbmcgUEdsaXRlJyxcbiAgICB9KTtcbiAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRlZC4nKTtcbiAgfSBlbHNlIHtcbiAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuJyk7XG4gIH1cbn1cblxuLy8gU2V0dXAgb2Zmc2NyZWVuIGRvY3VtZW50IG9uIGJhY2tncm91bmQgc2NyaXB0IHN0YXJ0dXBcbi8vIE1PVkVEIHRoZSBkaXJlY3QgY2FsbCBmcm9tIGhlcmUgdG8gYnJvd3Nlci5ydW50aW1lLm9uU3RhcnR1cCBsaXN0ZW5lciBiZWxvd1xuLy8gY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBUZW1wb3JhcmlseSBza2lwcGVkIGluaXRpYWwgb2Zmc2NyZWVuIHNldHVwIGNhbGwgZm9yIHRlc3RpbmcuJyk7XG5cbi8vIERlZmluZSB0aGUgc3RydWN0dXJlIG9mIHRoZSBkYXRhIGV4cGVjdGVkIGZyb20gdGhlIGNsaXBwZXIgcG9wdXBcbi8qXG5pbnRlcmZhY2UgQ2xpcERhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdGFncz86IHN0cmluZ1tdOyAvLyBBZGQgb3B0aW9uYWwgdGFncyBhcnJheVxufVxuKi9cblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgZm9yIE9sbGFtYSBBUEkgcmVzcG9uc2Vcbi8qXG5pbnRlcmZhY2UgT2xsYW1hVGFnIHtcbiAgbmFtZTogc3RyaW5nO1xuICAvLyBvdGhlciBwcm9wZXJ0aWVzIGxpa2UgbW9kaWZpZWRfYXQsIHNpemUsIGRpZ2VzdCBldGMuIGFyZSBpZ25vcmVkIGZvciBub3dcbn1cblxuaW50ZXJmYWNlIE9sbGFtYVRhZ3NSZXNwb25zZSB7XG4gIG1vZGVsczogT2xsYW1hVGFnW107XG59XG4qL1xuXG4vLyBkZWZpbmVCYWNrZ3JvdW5kIGlzIGdsb2JhbGx5IGF2YWlsYWJsZSBoZXJlIHRoYW5rcyB0byBXWFRcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUJhY2tncm91bmQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnV1hUIEJhY2tncm91bmQgZGVmaW5lZCcpO1xuXG4gIC8vIC0tLSBTZXR1cCB0aGUgY2VudHJhbCBtZXNzYWdlIGxpc3RlbmVyIC0tLSBcbiAgLy8gVGhpcyBhbGxvd3MgYG9uTWVzc2FnZWAgY2FsbHMgYmVsb3cgdG8gd29yay5cbiAgLy8gc2V0dXBDZW50cmFsTGlzdGVuZXIoKTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGNsaXBwaW5nIHJlcXVlc3RzIGZyb20gcG9wdXAgLS0tXG4gIG9uTWVzc2FnZSgnY2xpcFBhZ2UnLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBSZWNlaXZlZCBjbGlwUGFnZSBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IHRpdGxlLCB1cmwgLyosIHRhZ3MgKi8gfSA9IG1lc3NhZ2UuZGF0YTsgLy8gRGVzdHJ1Y3R1cmUgaW1wb3J0ZWQgQ2xpcERhdGFcblxuICAgIGNvbnN0IHNxbCA9IGBJTlNFUlQgSU5UTyBjbGlwcyAodGl0bGUsIHVybCkgVkFMVUVTICg/LCA/KTtgO1xuICAgIGNvbnN0IHBhcmFtcyA9IFt0aXRsZSwgdXJsXTsgXG5cbiAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogU2VuZGluZyBkYkV4ZWMgbWVzc2FnZSB0byBvZmZzY3JlZW4gZm9yIGNsaXBwaW5nLi4uJyk7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFVzZSB0aGUgTkVXIGRiRXhlYyBtZXNzYWdlIHR5cGVcbiAgICAgIGNvbnN0IGRiUmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2UoJ2RiRXhlYycsIHsgc3FsOiBzcWwsIHBhcmFtczogcGFyYW1zIH0pO1xuICAgICAgY29uc29sZS5sb2coJ0JhY2tncm91bmQ6IE9mZnNjcmVlbiBkYkV4ZWMgcmVzcG9uc2U6JywgZGJSZXN1bHQpO1xuICAgICAgXG4gICAgICAvLyBOb3RpZnkgc3VjY2VzcyAobm8gbmVlZCB0byBjaGVjayBzdGF0dXMgaW4gcmVzcG9uc2UsIGVycm9yIHdvdWxkIHRocm93KVxuICAgICAgY29uc29sZS5sb2coYEJhY2tncm91bmQ6IFN1Y2Nlc3NmdWxseSBjbGlwcGVkICR7dXJsfWApO1xuICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZShgY2xpcC1zdWNjZXNzLSR7RGF0ZS5ub3coKX1gLCB7XG4gICAgICAgIHR5cGU6ICdiYXNpYycsXG4gICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJy9pY29uLzEyOC5wbmcnKSwgXG4gICAgICAgIHRpdGxlOiAnQm9va21hcmsgU2F2ZWQnLFxuICAgICAgICBtZXNzYWdlOiBgU2F2ZWQ6ICR7dGl0bGV9YCxcbiAgICAgICAgcHJpb3JpdHk6IDBcbiAgICAgIH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIEVycm9ycyBmcm9tIHNlbmRNZXNzYWdlIG9yIHRoZSBvZmZzY3JlZW4gaGFuZGxlciB3aWxsIGJlIGNhdWdodCBoZXJlXG4gICAgICBjb25zb2xlLmVycm9yKCdCYWNrZ3JvdW5kOiBFcnJvciBleGVjdXRpbmcgY2xpcCB2aWEgb2Zmc2NyZWVuOicsIGVycm9yKTtcbiAgICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKGBjbGlwLWVycm9yLSR7RGF0ZS5ub3coKX1gLCB7XG4gICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgICBpY29uVXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCcvaWNvbi8xMjgucG5nJyksXG4gICAgICAgICAgdGl0bGU6ICdCb29rbWFyayBTYXZpbmcgRmFpbGVkJywgXG4gICAgICAgICAgbWVzc2FnZTogYENvdWxkIG5vdCBzYXZlICR7dGl0bGV9LiBFcnJvcjogJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcil9YCxcbiAgICAgICAgICBwcmlvcml0eTogMVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciB0byBmZXRjaCBPbGxhbWEgbW9kZWxzIC0tLVxuICBvbk1lc3NhZ2UoJ2dldE9sbGFtYU1vZGVscycsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0JhY2tncm91bmQ6IFJlY2VpdmVkIGdldE9sbGFtYU1vZGVscyBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IGVuZHBvaW50IH0gPSBtZXNzYWdlLmRhdGE7XG4gICAgaWYgKCFlbmRwb2ludCkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnT2xsYW1hIGVuZHBvaW50IG5vdCBwcm92aWRlZC4nIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7ZW5kcG9pbnR9L2FwaS90YWdzYCk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIE9sbGFtYSBtb2RlbHM6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWluZyBPbGxhbWFUYWdzUmVzcG9uc2UgaXMgZGVmaW5lZCBlbHNld2hlcmUgb3IgaW1wbGljaXRseSB0eXBlZFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgXG4gICAgICBjb25zdCBtb2RlbHMgPSBkYXRhLm1vZGVscy5tYXAoKHRhZzogeyBuYW1lOiBzdHJpbmcgfSkgPT4gKHsgaWQ6IHRhZy5uYW1lLCBuYW1lOiB0YWcubmFtZSB9KSk7XG4gICAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogU3VjY2Vzc2Z1bGx5IGZldGNoZWQgT2xsYW1hIG1vZGVsczonLCBtb2RlbHMpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbW9kZWxzOiBtb2RlbHMgfTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IC8vIENhdGNoIGFueSB0eXBlIG9mIGVycm9yXG4gICAgICBjb25zb2xlLmVycm9yKCdCYWNrZ3JvdW5kOiBFcnJvciBmZXRjaGluZyBPbGxhbWEgbW9kZWxzOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvciBmZXRjaGluZyBtb2RlbHMuJyB9O1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBDaGF0IFJlcXVlc3RzIC0tLVxuICBvbk1lc3NhZ2UoJ29sbGFtYUNoYXRSZXF1ZXN0JywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogUmVjZWl2ZWQgb2xsYW1hQ2hhdFJlcXVlc3QnLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5IH0gPSBtZXNzYWdlLmRhdGE7XG5cbiAgICAvLyBMb2FkIGNvbmZpZyBmaXJzdFxuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRVc2VyQ29uZmlnKCk7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWNrZ3JvdW5kOiBDYW5ub3QgcHJvY2VzcyBjaGF0IHJlcXVlc3QsIHVzZXIgY29uZmlnIG5vdCBmb3VuZC5cIik7XG4gICAgICAgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywge1xuICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgZXJyb3I6IFwiTExNIGNvbmZpZ3VyYXRpb24gbm90IGZvdW5kLiBQbGVhc2Ugc2V0IGl0IHVwIGluIHRoZSBzZXR0aW5ncy5cIlxuICAgICAgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIGNvbmZpZyBlcnJvciBtZXNzYWdlOlwiLCBlKSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMTE0gY29uZmlndXJhdGlvbiBub3QgZm91bmQuXCIpO1xuICAgIH1cbiBcbiAgICAvLyBQYXNzIHRvIHRoZSBsbG1TZXJ2aWNlIHRvIGhhbmRsZSBwcm92aWRlciBsb2dpYyBhbmQgc3RyZWFtaW5nXG4gICAgc3RyZWFtQ2hhdFJlc3BvbnNlKHsgcHJvbXB0LCBoaXN0b3J5OiBoaXN0b3J5IHx8IFtdLCBjb25maWcgfSk7IFxuICAgIGNvbnNvbGUubG9nKFwiQmFja2dyb3VuZDogc3RyZWFtQ2hhdFJlc3BvbnNlIGluaXRpYXRlZCAoc3RyZWFtaW5nIHJ1bnMgaW4gYmFja2dyb3VuZCkuXCIpO1xuICAgIFxuICAgIC8vIFJldHVybiBzdWNjZXNzIGFja25vd2xlZGdlbWVudFxuICAgIHJldHVybiB7IHJlY2VpdmVkOiB0cnVlIH07XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgQ2hhdCBIaXN0b3J5IFJlcXVlc3RzIC0tLVxuXG4gIC8vIC0tLSBBZGQgb3RoZXIgYmFja2dyb3VuZCBsaXN0ZW5lcnMgaGVyZSAoZS5nLiwgYWxhcm1zLCBvdGhlciBtZXNzYWdlcykgLS0tXG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBpbnN0YWxsL3VwZGF0ZSBldmVudHMgLS0tXG4gIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoZGV0YWlscykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdFeHRlbnNpb24gaW5zdGFsbGVkOicsIGRldGFpbHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlYXNvbiBmb3IgdGhlIGV2ZW50IGlzIHRoZSBpbml0aWFsIGluc3RhbGxhdGlvblxuICAgIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGVyZm9ybWluZyBmaXJzdC10aW1lIHNldHVwLi4uJyk7XG4gICAgICAvLyBPbmx5IG5lZWQgdG8gZW5zdXJlIG9mZnNjcmVlbiBkb2N1bWVudCBleGlzdHMuIFNjaGVtYSBpcyBpbml0aWFsaXplZCB3aXRoaW4gb2Zmc2NyZWVuLnRzLlxuICAgICAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCgpLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEluaXRpYWwgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCBmYWlsZWQgb24gaW5zdGFsbDonLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ29uc3RydWN0IHRoZSBVUkwgZm9yIHRoZSBvbmJvYXJkaW5nIHBhZ2VcbiAgICAgIGNvbnN0IHVybCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ29uYm9hcmRpbmcuaHRtbCcpO1xuXG4gICAgICAvLyBPcGVuIHRoZSBvbmJvYXJkaW5nIHBhZ2UgaW4gYSBuZXcgdGFiXG4gICAgICBhd2FpdCBicm93c2VyLnRhYnMuY3JlYXRlKHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhgT3BlbmVkIG9uYm9hcmRpbmcgcGFnZTogJHt1cmx9YCk7XG4gICAgfSBlbHNlIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIE9wdGlvbmFsOiBIYW5kbGUgdXBkYXRlcywgZS5nLiwgc2hvdyBub3RpZmljYXRpb25zIG9yIG1pZ3JhdGUgZGF0YVxuICAgICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBVcGRhdGVkIGZyb20gJHtkZXRhaWxzLnByZXZpb3VzVmVyc2lvbn0gdG8gJHticm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufWApO1xuICAgICAgLy8gVW5jb21tZW50IHRvIG9wZW4gc2V0dGluZ3Mgb24gdXBkYXRlOlxuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLm9wZW5PcHRpb25zUGFnZSgpO1xuICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gRXJyb3Igb3BlbmluZyBzZXR0aW5ncyBwYWdlIG9uIHVwZGF0ZTonLCBlcnJvcik7XG4gICAgICAvLyB9XG4gICAgfVxuICB9KTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGJyb3dzZXIgc3RhcnR1cCAtLS1cbiAgLy8gVXNlIG9uU3RhcnR1cCB0byBlbnN1cmUgdGhlIG9mZnNjcmVlbiBkb2N1bWVudCBpcyByZWFkeSB3aGVuIHRoZSBicm93c2VyIHN0YXJ0c1xuICBicm93c2VyLnJ1bnRpbWUub25TdGFydHVwLmFkZExpc3RlbmVyKGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIEJyb3dzZXIgc3RhcnR1cCBkZXRlY3RlZC4gU2V0dGluZyB1cCBvZmZzY3JlZW4gZG9jdW1lbnQuLi4nKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCgpO1xuICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgc2V0dXAgY29tcGxldGUgb24gc3RhcnR1cC4nKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQgZmFpbGVkIG9uIHN0YXJ0dXA6JywgZXJyb3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ0JhY2tncm91bmQgc2NyaXB0IHNldHVwIGNvbXBsZXRlLicpO1xufSk7ICIsIi8vICNyZWdpb24gc25pcHBldFxuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBnbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWU/LmlkXG4gID8gZ2xvYmFsVGhpcy5icm93c2VyXG4gIDogZ2xvYmFsVGhpcy5jaHJvbWU7XG4vLyAjZW5kcmVnaW9uIHNuaXBwZXRcbiIsImltcG9ydCB7IGJyb3dzZXIgYXMgX2Jyb3dzZXIgfSBmcm9tIFwiQHd4dC1kZXYvYnJvd3NlclwiO1xuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBfYnJvd3NlcjtcbmV4cG9ydCB7fTtcbiIsIi8vIHNyYy9pbmRleC50c1xudmFyIF9NYXRjaFBhdHRlcm4gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoUGF0dGVybikge1xuICAgIGlmIChtYXRjaFBhdHRlcm4gPT09IFwiPGFsbF91cmxzPlwiKSB7XG4gICAgICB0aGlzLmlzQWxsVXJscyA9IHRydWU7XG4gICAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IFsuLi5fTWF0Y2hQYXR0ZXJuLlBST1RPQ09MU107XG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBcIipcIjtcbiAgICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IFwiKlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBncm91cHMgPSAvKC4qKTpcXC9cXC8oLio/KShcXC8uKikvLmV4ZWMobWF0Y2hQYXR0ZXJuKTtcbiAgICAgIGlmIChncm91cHMgPT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4obWF0Y2hQYXR0ZXJuLCBcIkluY29ycmVjdCBmb3JtYXRcIik7XG4gICAgICBjb25zdCBbXywgcHJvdG9jb2wsIGhvc3RuYW1lLCBwYXRobmFtZV0gPSBncm91cHM7XG4gICAgICB2YWxpZGF0ZVByb3RvY29sKG1hdGNoUGF0dGVybiwgcHJvdG9jb2wpO1xuICAgICAgdmFsaWRhdGVIb3N0bmFtZShtYXRjaFBhdHRlcm4sIGhvc3RuYW1lKTtcbiAgICAgIHZhbGlkYXRlUGF0aG5hbWUobWF0Y2hQYXR0ZXJuLCBwYXRobmFtZSk7XG4gICAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IHByb3RvY29sID09PSBcIipcIiA/IFtcImh0dHBcIiwgXCJodHRwc1wiXSA6IFtwcm90b2NvbF07XG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBob3N0bmFtZTtcbiAgICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IHBhdGhuYW1lO1xuICAgIH1cbiAgfVxuICBpbmNsdWRlcyh1cmwpIHtcbiAgICBpZiAodGhpcy5pc0FsbFVybHMpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCB1ID0gdHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIiA/IG5ldyBVUkwodXJsKSA6IHVybCBpbnN0YW5jZW9mIExvY2F0aW9uID8gbmV3IFVSTCh1cmwuaHJlZikgOiB1cmw7XG4gICAgcmV0dXJuICEhdGhpcy5wcm90b2NvbE1hdGNoZXMuZmluZCgocHJvdG9jb2wpID0+IHtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzSHR0cE1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBzXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzSHR0cHNNYXRjaCh1KTtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJmaWxlXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzRmlsZU1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImZ0cFwiKVxuICAgICAgICByZXR1cm4gdGhpcy5pc0Z0cE1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcInVyblwiKVxuICAgICAgICByZXR1cm4gdGhpcy5pc1Vybk1hdGNoKHUpO1xuICAgIH0pO1xuICB9XG4gIGlzSHR0cE1hdGNoKHVybCkge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cDpcIiAmJiB0aGlzLmlzSG9zdFBhdGhNYXRjaCh1cmwpO1xuICB9XG4gIGlzSHR0cHNNYXRjaCh1cmwpIHtcbiAgICByZXR1cm4gdXJsLnByb3RvY29sID09PSBcImh0dHBzOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybCk7XG4gIH1cbiAgaXNIb3N0UGF0aE1hdGNoKHVybCkge1xuICAgIGlmICghdGhpcy5ob3N0bmFtZU1hdGNoIHx8ICF0aGlzLnBhdGhuYW1lTWF0Y2gpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaG9zdG5hbWVNYXRjaFJlZ2V4cyA9IFtcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaCksXG4gICAgICB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLmhvc3RuYW1lTWF0Y2gucmVwbGFjZSgvXlxcKlxcLi8sIFwiXCIpKVxuICAgIF07XG4gICAgY29uc3QgcGF0aG5hbWVNYXRjaFJlZ2V4ID0gdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5wYXRobmFtZU1hdGNoKTtcbiAgICByZXR1cm4gISFob3N0bmFtZU1hdGNoUmVnZXhzLmZpbmQoKHJlZ2V4KSA9PiByZWdleC50ZXN0KHVybC5ob3N0bmFtZSkpICYmIHBhdGhuYW1lTWF0Y2hSZWdleC50ZXN0KHVybC5wYXRobmFtZSk7XG4gIH1cbiAgaXNGaWxlTWF0Y2godXJsKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IGZpbGU6Ly8gcGF0dGVybiBtYXRjaGluZy4gT3BlbiBhIFBSIHRvIGFkZCBzdXBwb3J0XCIpO1xuICB9XG4gIGlzRnRwTWF0Y2godXJsKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IGZ0cDovLyBwYXR0ZXJuIG1hdGNoaW5nLiBPcGVuIGEgUFIgdG8gYWRkIHN1cHBvcnRcIik7XG4gIH1cbiAgaXNVcm5NYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogdXJuOi8vIHBhdHRlcm4gbWF0Y2hpbmcuIE9wZW4gYSBQUiB0byBhZGQgc3VwcG9ydFwiKTtcbiAgfVxuICBjb252ZXJ0UGF0dGVyblRvUmVnZXgocGF0dGVybikge1xuICAgIGNvbnN0IGVzY2FwZWQgPSB0aGlzLmVzY2FwZUZvclJlZ2V4KHBhdHRlcm4pO1xuICAgIGNvbnN0IHN0YXJzUmVwbGFjZWQgPSBlc2NhcGVkLnJlcGxhY2UoL1xcXFxcXCovZywgXCIuKlwiKTtcbiAgICByZXR1cm4gUmVnRXhwKGBeJHtzdGFyc1JlcGxhY2VkfSRgKTtcbiAgfVxuICBlc2NhcGVGb3JSZWdleChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbiAgfVxufTtcbnZhciBNYXRjaFBhdHRlcm4gPSBfTWF0Y2hQYXR0ZXJuO1xuTWF0Y2hQYXR0ZXJuLlBST1RPQ09MUyA9IFtcImh0dHBcIiwgXCJodHRwc1wiLCBcImZpbGVcIiwgXCJmdHBcIiwgXCJ1cm5cIl07XG52YXIgSW52YWxpZE1hdGNoUGF0dGVybiA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtYXRjaFBhdHRlcm4sIHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIG1hdGNoIHBhdHRlcm4gXCIke21hdGNoUGF0dGVybn1cIjogJHtyZWFzb259YCk7XG4gIH1cbn07XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3RvY29sKG1hdGNoUGF0dGVybiwgcHJvdG9jb2wpIHtcbiAgaWYgKCFNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmluY2x1ZGVzKHByb3RvY29sKSAmJiBwcm90b2NvbCAhPT0gXCIqXCIpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICBtYXRjaFBhdHRlcm4sXG4gICAgICBgJHtwcm90b2NvbH0gbm90IGEgdmFsaWQgcHJvdG9jb2wgKCR7TWF0Y2hQYXR0ZXJuLlBST1RPQ09MUy5qb2luKFwiLCBcIil9KWBcbiAgICApO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVIb3N0bmFtZShtYXRjaFBhdHRlcm4sIGhvc3RuYW1lKSB7XG4gIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIjpcIikpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4obWF0Y2hQYXR0ZXJuLCBgSG9zdG5hbWUgY2Fubm90IGluY2x1ZGUgYSBwb3J0YCk7XG4gIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIipcIikgJiYgaG9zdG5hbWUubGVuZ3RoID4gMSAmJiAhaG9zdG5hbWUuc3RhcnRzV2l0aChcIiouXCIpKVxuICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKFxuICAgICAgbWF0Y2hQYXR0ZXJuLFxuICAgICAgYElmIHVzaW5nIGEgd2lsZGNhcmQgKCopLCBpdCBtdXN0IGdvIGF0IHRoZSBzdGFydCBvZiB0aGUgaG9zdG5hbWVgXG4gICAgKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlUGF0aG5hbWUobWF0Y2hQYXR0ZXJuLCBwYXRobmFtZSkge1xuICByZXR1cm47XG59XG5leHBvcnQge1xuICBJbnZhbGlkTWF0Y2hQYXR0ZXJuLFxuICBNYXRjaFBhdHRlcm5cbn07XG4iLCJpbXBvcnQgeyBzZW5kTWVzc2FnZSwgdHlwZSBPbGxhbWFTdHJlYW1DaHVuayB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL21lc3NhZ2luZyc7XG5pbXBvcnQgdHlwZSB7IE9sbGFtYUNvbmZpZywgRW1iZWRkaW5nUmVzcG9uc2UgfSBmcm9tICcuLi9sbG1TZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgTExNQ2hhdFByb3ZpZGVyLCBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0LCBMTE1FbWJlZGRpbmdQcm92aWRlciwgUHJvdmlkZXJFbWJlZGRpbmdSZXF1ZXN0IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIC0tLSBPbGxhbWEgQ2hhdCBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbU9sbGFtYUNoYXQocmVxdWVzdDogUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5ID0gW10sIGNvbmZpZywgc2VuZENodW5rIH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IG9sbGFtYUNvbmZpZyA9IGNvbmZpZyBhcyBPbGxhbWFDb25maWc7IC8vIFR5cGUgYXNzZXJ0aW9uXG5cbiAgICBjb25zdCBtb2RlbCA9IG9sbGFtYUNvbmZpZy5jaGF0TW9kZWw7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBvbGxhbWFDb25maWcuZW5kcG9pbnQucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8gRW5zdXJlIG5vIHRyYWlsaW5nIHNsYXNoXG4gICAgY29uc3QgYXBpVXJsID0gYCR7ZW5kcG9pbnR9L2FwaS9jaGF0YDsgLy8gVXNlIE9sbGFtYSBBUEkgZW5kcG9pbnRcblxuICAgIGNvbnNvbGUubG9nKGBbb2xsYW1hUHJvdmlkZXJdIFNlbmRpbmcgY2hhdCByZXF1ZXN0IHRvICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uaGlzdG9yeSwgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPbGxhbWEgQVBJIGVycm9yICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yQm9keX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICBsZXQgYnVmZmVyID0gJyc7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkgYnJlYWs7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJzsgLy8gS2VlcCBpbmNvbXBsZXRlIGxpbmVcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnRyaW0oKSA9PT0gJycpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IEpTT04ucGFyc2UobGluZSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlQ2h1bms6IE9sbGFtYVN0cmVhbUNodW5rIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2h1bmsubWVzc2FnZT8uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUNodW5rID0geyBzdGF0dXM6ICdjaHVuaycsIGNvbnRlbnQ6IGNodW5rLm1lc3NhZ2UuY29udGVudCB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmsuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgT2xsYW1hJ3MgZG9uZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VDaHVuayA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2RvbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDogY2h1bmsubW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogY2h1bmsuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9kdXJhdGlvbjogY2h1bmsudG90YWxfZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZF9kdXJhdGlvbjogY2h1bmsubG9hZF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRfZXZhbF9jb3VudDogY2h1bmsucHJvbXB0X2V2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0X2V2YWxfZHVyYXRpb246IGNodW5rLnByb21wdF9ldmFsX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWxfY291bnQ6IGNodW5rLmV2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbF9kdXJhdGlvbjogY2h1bmsuZXZhbF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbb2xsYW1hUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIiwgcmVzcG9uc2VDaHVuay5zdGF0cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlQ2h1bmspIHtcbiAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsocmVzcG9uc2VDaHVuayk7IC8vIFVzZSB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW29sbGFtYVByb3ZpZGVyXSBGYWlsZWQgdG8gcGFyc2UgT2xsYW1hIHN0cmVhbSBjaHVuazpcIiwgbGluZSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgIGlmIChidWZmZXIudHJpbSgpKSB7XG4gICAgICAgICBjb25zb2xlLndhcm4oXCJbb2xsYW1hUHJvdmlkZXJdIFN0cmVhbSBlbmRlZCB3aXRoIHVucHJvY2Vzc2VkIGJ1ZmZlcjpcIiwgYnVmZmVyKTtcbiAgICAgfVxufVxuXG4vLyAtLS0gT2xsYW1hIEVtYmVkZGluZyBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIGdldE9sbGFtYUVtYmVkZGluZ3MocmVxdWVzdDogUHJvdmlkZXJFbWJlZGRpbmdSZXF1ZXN0KTogUHJvbWlzZTxFbWJlZGRpbmdSZXNwb25zZT4ge1xuICAgIGNvbnN0IHsgY29udGVudCwgY29uZmlnIH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IG9sbGFtYUNvbmZpZyA9IGNvbmZpZyBhcyBPbGxhbWFDb25maWc7XG5cbiAgICBpZiAoIW9sbGFtYUNvbmZpZy5lbWJlZGRpbmdNb2RlbCkgeyAvLyBEb3VibGUgY2hlY2ssIHRob3VnaCBzZXJ2aWNlIGxheWVyIHNob3VsZCBhbHNvIGNoZWNrXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbGxhbWEgY29uZmlndXJhdGlvbiBtaXNzaW5nIHJlcXVpcmVkIGVtYmVkZGluZ01vZGVsLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RlbCA9IG9sbGFtYUNvbmZpZy5lbWJlZGRpbmdNb2RlbDtcbiAgICBjb25zdCBlbmRwb2ludCA9IG9sbGFtYUNvbmZpZy5lbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIGNvbnN0IGFwaVVybCA9IGAke2VuZHBvaW50fS9hcGkvZW1iZWRkaW5nc2A7XG5cbiAgICBjb25zb2xlLmxvZyhgW29sbGFtYVByb3ZpZGVyXSBSZXF1ZXN0aW5nIGVtYmVkZGluZ3MgZnJvbSAke2FwaVVybH0gd2l0aCBtb2RlbCAke21vZGVsfWApO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9sbGFtYSBlbWJlZGRpbmcgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgc2luZ2xlIHN0cmluZyBpbnB1dCBpbiB0aGlzIGltcGxlbWVudGF0aW9uLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIHByb21wdDogY29udGVudCBcbiAgICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIkZhaWxlZCB0byByZWFkIGVycm9yIGJvZHlcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgT2xsYW1hIEVtYmVkZGluZ3MgQVBJIGVycm9yICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yQm9keX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoIXJlc3VsdC5lbWJlZGRpbmcgfHwgIUFycmF5LmlzQXJyYXkocmVzdWx0LmVtYmVkZGluZykpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZm9ybWF0IGZyb20gT2xsYW1hIEVtYmVkZGluZ3MgQVBJLiAnZW1iZWRkaW5nJyBhcnJheSBub3QgZm91bmQuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGVtYmVkZGluZ3M6IFtyZXN1bHQuZW1iZWRkaW5nXSBcbiAgICB9O1xufVxuXG4vLyBFeHBvcnQgdGhlIHByb3ZpZGVyIG9iamVjdCBhZGhlcmluZyB0byB0aGUgaW50ZXJmYWNlc1xuZXhwb3J0IGNvbnN0IG9sbGFtYVByb3ZpZGVyOiBMTE1DaGF0UHJvdmlkZXIgJiBMTE1FbWJlZGRpbmdQcm92aWRlciA9IHtcbiAgICBzdHJlYW1DaGF0OiBzdHJlYW1PbGxhbWFDaGF0LFxuICAgIGdldEVtYmVkZGluZ3M6IGdldE9sbGFtYUVtYmVkZGluZ3MsXG59OyAiLCJpbXBvcnQgeyBzZW5kTWVzc2FnZSwgdHlwZSBPbGxhbWFTdHJlYW1DaHVuayB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL21lc3NhZ2luZyc7XG5pbXBvcnQgdHlwZSB7IE9wZW5Sb3V0ZXJDb25maWcgfSBmcm9tICcuLi9sbG1TZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgTExNQ2hhdFByb3ZpZGVyLCBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIC0tLSBPcGVuUm91dGVyIENoYXQgSW1wbGVtZW50YXRpb24gLS0tIFxuXG5hc3luYyBmdW5jdGlvbiBzdHJlYW1PcGVuUm91dGVyQ2hhdChyZXF1ZXN0OiBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyBwcm9tcHQsIGhpc3RvcnkgPSBbXSwgY29uZmlnLCBzZW5kQ2h1bmsgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3Qgb3BlblJvdXRlckNvbmZpZyA9IGNvbmZpZyBhcyBPcGVuUm91dGVyQ29uZmlnOyAvLyBUeXBlIGFzc2VydGlvblxuXG4gICAgY29uc3QgbW9kZWwgPSBvcGVuUm91dGVyQ29uZmlnLmNoYXRNb2RlbDtcbiAgICBjb25zdCBhcGlLZXkgPSBvcGVuUm91dGVyQ29uZmlnLmFwaUtleTtcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvdjEvY2hhdC9jb21wbGV0aW9uc1wiO1xuXG4gICAgY29uc29sZS5sb2coYFtvcGVuUm91dGVyUHJvdmlkZXJdIFNlbmRpbmcgY2hhdCByZXF1ZXN0IHRvICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXBpS2V5fWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgLy8gVE9ETzogQ29uc2lkZXIgYWRkaW5nIHRoZXNlIGhlYWRlcnMgaWYgZGVzaXJlZFxuICAgICAgICAgICAgLy8gJ0hUVFAtUmVmZXJlcic6ICcnLCAvLyBZT1VSX1NJVEVfVVJMXG4gICAgICAgICAgICAvLyAnWC1UaXRsZSc6ICcnLCAvLyBZT1VSX1NJVEVfTkFNRVxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBtZXNzYWdlczogWy4uLmhpc3RvcnksIHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBwcm9tcHQgfV0sXG4gICAgICAgICAgICBzdHJlYW06IHRydWVcbiAgICAgICAgfSksXG4gICAgfSk7XG5cbiAgICAgaWYgKCFyZXNwb25zZS5vayB8fCAhcmVzcG9uc2UuYm9keSkge1xuICAgICAgICBjb25zdCBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJGYWlsZWQgdG8gcmVhZCBlcnJvciBib2R5XCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9wZW5Sb3V0ZXIgQVBJIGVycm9yICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yQm9keX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICBsZXQgYnVmZmVyID0gJyc7XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcblxuICAgIC8vIE9wZW5Sb3V0ZXIgdXNlcyBTZXJ2ZXItU2VudCBFdmVudHMgKFNTRSkgZm9ybWF0XG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZTogcmVhZGVyRG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGRvbmUgPSByZWFkZXJEb25lO1xuXG4gICAgICAgIGJ1ZmZlciArPSBkZWNvZGVyLmRlY29kZSh2YWx1ZSwgeyBzdHJlYW06IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gYnVmZmVyLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgYnVmZmVyID0gbGluZXMucG9wKCkgfHwgJyc7XG5cbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCdkYXRhOiAnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFDb250ZW50ID0gbGluZS5zdWJzdHJpbmcoNikudHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhQ29udGVudCA9PT0gJ1tET05FXScpIHtcbiAgICAgICAgICAgICAgICAgICAgIHNlbmRDaHVuayh7IHN0YXR1czogJ2RvbmUnLCBzdGF0czoge30gfSk7IC8vIFNlbmQgc2ltcGxlIGRvbmUgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbb3BlblJvdXRlclByb3ZpZGVyXSBTdHJlYW0gZmluaXNoZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7IC8vIEVuc3VyZSBvdXRlciBsb29wIHRlcm1pbmF0ZXNcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBFeGl0IGlubmVyIGxvb3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gSlNPTi5wYXJzZShkYXRhQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjaHVuay5jaG9pY2VzPy5bMF0/LmRlbHRhPy5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZENodW5rKHsgc3RhdHVzOiAnY2h1bmsnLCBjb250ZW50OiBjb250ZW50IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEV4dHJhY3QgdXNhZ2Ugc3RhdHMgaWYgbmVlZGVkP1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb3BlblJvdXRlclByb3ZpZGVyXSBGYWlsZWQgdG8gcGFyc2Ugc3RyZWFtIGNodW5rOlwiLCBkYXRhQ29udGVudCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChidWZmZXIudHJpbSgpKSB7IFxuICAgICAgICBjb25zb2xlLndhcm4oXCJbb3BlblJvdXRlclByb3ZpZGVyXSBTdHJlYW0gZW5kZWQgd2l0aCB1bnByb2Nlc3NlZCBidWZmZXI6XCIsIGJ1ZmZlcik7XG4gICAgfVxufVxuXG4vLyBFeHBvcnQgdGhlIHByb3ZpZGVyIG9iamVjdCBhZGhlcmluZyB0byB0aGUgaW50ZXJmYWNlXG5leHBvcnQgY29uc3Qgb3BlblJvdXRlclByb3ZpZGVyOiBMTE1DaGF0UHJvdmlkZXIgPSB7XG4gICAgc3RyZWFtQ2hhdDogc3RyZWFtT3BlblJvdXRlckNoYXQsXG4gICAgLy8gTm8gZ2V0RW1iZWRkaW5ncyBmb3IgT3BlblJvdXRlciBpbiB0aGlzIGV4YW1wbGUgeWV0XG59OyAiLCJpbXBvcnQgdHlwZSB7IEdyb3FDb25maWcgfSBmcm9tICcuLi9sbG1TZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgTExNQ2hhdFByb3ZpZGVyLCBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJzsgLy8gVXNlIHRoZSBzaGFyZWQgY2h1bmsgdHlwZVxuXG4vLyAtLS0gR3JvcSBDaGF0IEltcGxlbWVudGF0aW9uIC0tLSBcblxuYXN5bmMgZnVuY3Rpb24gc3RyZWFtR3JvcUNoYXQocmVxdWVzdDogUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5ID0gW10sIGNvbmZpZywgc2VuZENodW5rIH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IGdyb3FDb25maWcgPSBjb25maWcgYXMgR3JvcUNvbmZpZzsgLy8gVHlwZSBhc3NlcnRpb25cblxuICAgIGNvbnN0IG1vZGVsID0gZ3JvcUNvbmZpZy5jaGF0TW9kZWw7XG4gICAgY29uc3QgYXBpS2V5ID0gZ3JvcUNvbmZpZy5hcGlLZXk7XG4gICAgLy8gVXNlIHYxIGNvbXBsZXRpb25zIGVuZHBvaW50XG4gICAgY29uc3QgYXBpVXJsID0gXCJodHRwczovL2FwaS5ncm9xLmNvbS9vcGVuYWkvdjEvY2hhdC9jb21wbGV0aW9uc1wiOyBcblxuICAgIGNvbnNvbGUubG9nKGBbZ3JvcVByb3ZpZGVyXSBTZW5kaW5nIGNoYXQgcmVxdWVzdCB0byAke2FwaVVybH0gd2l0aCBtb2RlbCAke21vZGVsfWApO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgbWVzc2FnZXM6IFsuLi5oaXN0b3J5LCB7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgICAgICAgICAgc3RyZWFtOiB0cnVlXG4gICAgICAgICAgICAvLyBPcHRpb25hbDogQWRkIHRlbXBlcmF0dXJlLCBtYXhfdG9rZW5zLCBldGMuIGlmIG5lZWRlZCBsYXRlclxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8ICFyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIkZhaWxlZCB0byByZWFkIGVycm9yIGJvZHlcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgR3JvcSBBUEkgZXJyb3IgKCR7cmVzcG9uc2Uuc3RhdHVzfSk6ICR7ZXJyb3JCb2R5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBidWZmZXIgPSAnJztcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgLy8gR3JvcSB1c2VzIHRoZSBzYW1lIFNlcnZlci1TZW50IEV2ZW50cyAoU1NFKSBmb3JtYXQgYXMgT3BlbkFJL09wZW5Sb3V0ZXJcbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lOiByZWFkZXJEb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgZG9uZSA9IHJlYWRlckRvbmU7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ2RhdGE6ICcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUNvbnRlbnQgPSBsaW5lLnN1YnN0cmluZyg2KS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFDb250ZW50ID09PSAnW0RPTkVdJykge1xuICAgICAgICAgICAgICAgICAgICAgc2VuZENodW5rKHsgc3RhdHVzOiAnZG9uZScsIHN0YXRzOiB7fSB9KTsgLy8gU2VuZCBzaW1wbGUgZG9uZSBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltncm9xUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IEpTT04ucGFyc2UoZGF0YUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY2h1bmsuY2hvaWNlcz8uWzBdPy5kZWx0YT8uY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRDaHVuayh7IHN0YXR1czogJ2NodW5rJywgY29udGVudDogY29udGVudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBFeHRyYWN0IEdyb3EgdXNhZ2Ugc3RhdHMgaWYgbmVlZGVkIChjaGVjayBBUEkgZG9jcylcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2dyb3FQcm92aWRlcl0gRmFpbGVkIHRvIHBhcnNlIHN0cmVhbSBjaHVuazpcIiwgZGF0YUNvbnRlbnQsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYnVmZmVyLnRyaW0oKSkgeyBcbiAgICAgICAgY29uc29sZS53YXJuKFwiW2dyb3FQcm92aWRlcl0gU3RyZWFtIGVuZGVkIHdpdGggdW5wcm9jZXNzZWQgYnVmZmVyOlwiLCBidWZmZXIpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0IHRoZSBwcm92aWRlciBvYmplY3QgYWRoZXJpbmcgdG8gdGhlIGludGVyZmFjZVxuZXhwb3J0IGNvbnN0IGdyb3FQcm92aWRlcjogTExNQ2hhdFByb3ZpZGVyID0ge1xuICAgIHN0cmVhbUNoYXQ6IHN0cmVhbUdyb3FDaGF0LFxuICAgIC8vIEdyb3EgZG9lcyBub3QgY3VycmVudGx5IGhhdmUgZW1iZWRkaW5nIG1vZGVsc1xufTsgIl0sIm5hbWVzIjpbInRoaXMiLCJtb2R1bGUiLCJwcm94eVRhcmdldCIsInZhbHVlIiwib25NZXNzYWdlIiwicmVzdWx0IiwibWVzc2FnZSIsIkVycm9yIiwiX19kZWZQcm9wIiwiX19kZWZOb3JtYWxQcm9wIiwiX2IiLCJfYjIiLCJfYSIsIk9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIIiwiYnJvd3NlciIsIm9sbGFtYVByb3ZpZGVyIiwib3BlblJvdXRlclByb3ZpZGVyIiwiZ3JvcVByb3ZpZGVyIiwiX2Jyb3dzZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFdBQVMsaUJBQWlCLEtBQUs7QUFDcEMsUUFBSSxPQUFPLFFBQVEsT0FBTyxRQUFRLFdBQVksUUFBTyxFQUFFLE1BQU0sSUFBSztBQUNsRSxXQUFPO0FBQUEsRUFDVDs7Ozs7Ozs7Ozs7QUNIQSxPQUFDLFNBQVUsUUFBUSxTQUFTO0FBR2lCO0FBQ3pDLGtCQUFRLE1BQU07QUFBQSxRQUNsQjtBQUFBLE1BT0EsR0FBRyxPQUFPLGVBQWUsY0FBYyxhQUFhLE9BQU8sU0FBUyxjQUFjLE9BQU9BLG1CQUFNLFNBQVVDLFNBQVE7QUFTL0csWUFBSSxFQUFFLFdBQVcsVUFBVSxXQUFXLE9BQU8sV0FBVyxXQUFXLE9BQU8sUUFBUSxLQUFLO0FBQ3JGLGdCQUFNLElBQUksTUFBTSwyREFBMkQ7QUFBQSxRQUMvRTtBQUNFLFlBQUksRUFBRSxXQUFXLFdBQVcsV0FBVyxRQUFRLFdBQVcsV0FBVyxRQUFRLFFBQVEsS0FBSztBQUN4RixnQkFBTSxtREFBbUQ7QUFPekQsZ0JBQU0sV0FBVyxtQkFBaUI7QUFJaEMsa0JBQU0sY0FBYztBQUFBLGNBQ2xCLFVBQVU7QUFBQSxnQkFDUixTQUFTO0FBQUEsa0JBQ1AsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDWjtBQUFBLGdCQUNELFlBQVk7QUFBQSxrQkFDVixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUNaO0FBQUEsZ0JBQ0QsT0FBTztBQUFBLGtCQUNMLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ1o7QUFBQSxnQkFDRCxVQUFVO0FB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
