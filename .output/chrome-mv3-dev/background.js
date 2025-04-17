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
  return result$1;
}();
background;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjIwLjFfQHR5cGVzK25vZGVAMjIuMTQuMV9qaXRpQDIuNC4yX2xpZ2h0bmluZ2Nzc0AxLjI5LjJfcm9sbHVwQDQuNDAuMC9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWJhY2tncm91bmQubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjEyLjAvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VyaWFsaXplLWVycm9yQDExLjAuMy9ub2RlX21vZHVsZXMvc2VyaWFsaXplLWVycm9yL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZXJpYWxpemUtZXJyb3JAMTEuMC4zL25vZGVfbW9kdWxlcy9zZXJpYWxpemUtZXJyb3IvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHdlYmV4dC1jb3JlK21lc3NhZ2luZ0AyLjIuMC9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21lc3NhZ2luZy9saWIvY2h1bmstQlFMRlNGRlouanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd2ViZXh0ZW5zaW9uLXBvbHlmaWxsQDAuMTAuMC9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2ViZXh0LWNvcmUrbWVzc2FnaW5nQDIuMi4wL25vZGVfbW9kdWxlcy9Ad2ViZXh0LWNvcmUvbWVzc2FnaW5nL2xpYi9pbmRleC5qcyIsIi4uLy4uL3V0aWxzL21lc3NhZ2luZy50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9hc3luYy1tdXRleEAwLjUuMC9ub2RlX21vZHVsZXMvYXN5bmMtbXV0ZXgvaW5kZXgubWpzIiwiLi4vLi4vdXRpbHMvZGIudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvbGxtU2VydmljZS50cyIsIi4uLy4uL2VudHJ5cG9pbnRzL2JhY2tncm91bmQudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHd4dC1kZXYrYnJvd3NlckAwLjAuMzE1L25vZGVfbW9kdWxlcy9Ad3h0LWRldi9icm93c2VyL3NyYy9pbmRleC5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3h0QDAuMjAuMV9AdHlwZXMrbm9kZUAyMi4xNC4xX2ppdGlAMi40LjJfbGlnaHRuaW5nY3NzQDEuMjkuMl9yb2xsdXBANC40MC4wL25vZGVfbW9kdWxlcy93eHQvZGlzdC9icm93c2VyLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2ViZXh0LWNvcmUrbWF0Y2gtcGF0dGVybnNAMS4wLjMvbm9kZV9tb2R1bGVzL0B3ZWJleHQtY29yZS9tYXRjaC1wYXR0ZXJucy9saWIvaW5kZXguanMiLCIuLi8uLi9zcmMvc2VydmljZXMvcHJvdmlkZXJzL29sbGFtYS50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm92aWRlcnMvb3BlbnJvdXRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVmaW5lQmFja2dyb3VuZChhcmcpIHtcbiAgaWYgKGFyZyA9PSBudWxsIHx8IHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHsgbWFpbjogYXJnIH07XG4gIHJldHVybiBhcmc7XG59XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEyLjAgLSBUdWUgTWF5IDE0IDIwMjQgMTg6MDE6MjkgKi9cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuICAvKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCEoZ2xvYmFsVGhpcy5jaHJvbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lLmlkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbiAgfVxuICBpZiAoIShnbG9iYWxUaGlzLmJyb3dzZXIgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUuaWQpKSB7XG4gICAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG5cbiAgICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgICAgLy8gSlNPTiBmaWxlLlxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHwgY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IHByb21pc2UgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe1xuICAgICAgICByZWplY3QsXG4gICAgICAgIHJlc29sdmVcbiAgICAgIH0sIHJlcGx5KSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7XG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsImNvbnN0IGxpc3QgPSBbXG5cdC8vIE5hdGl2ZSBFUyBlcnJvcnMgaHR0cHM6Ly8yNjIuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy8xMi4wLyNzZWMtd2VsbC1rbm93bi1pbnRyaW5zaWMtb2JqZWN0c1xuXHRFdmFsRXJyb3IsXG5cdFJhbmdlRXJyb3IsXG5cdFJlZmVyZW5jZUVycm9yLFxuXHRTeW50YXhFcnJvcixcblx0VHlwZUVycm9yLFxuXHRVUklFcnJvcixcblxuXHQvLyBCdWlsdC1pbiBlcnJvcnNcblx0Z2xvYmFsVGhpcy5ET01FeGNlcHRpb24sXG5cblx0Ly8gTm9kZS1zcGVjaWZpYyBlcnJvcnNcblx0Ly8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9lcnJvcnMuaHRtbFxuXHRnbG9iYWxUaGlzLkFzc2VydGlvbkVycm9yLFxuXHRnbG9iYWxUaGlzLlN5c3RlbUVycm9yLFxuXVxuXHQvLyBOb24tbmF0aXZlIEVycm9ycyBhcmUgdXNlZCB3aXRoIGBnbG9iYWxUaGlzYCBiZWNhdXNlIHRoZXkgbWlnaHQgYmUgbWlzc2luZy4gVGhpcyBmaWx0ZXIgZHJvcHMgdGhlbSB3aGVuIHVuZGVmaW5lZC5cblx0LmZpbHRlcihCb29sZWFuKVxuXHQubWFwKFxuXHRcdGNvbnN0cnVjdG9yID0+IFtjb25zdHJ1Y3Rvci5uYW1lLCBjb25zdHJ1Y3Rvcl0sXG5cdCk7XG5cbmNvbnN0IGVycm9yQ29uc3RydWN0b3JzID0gbmV3IE1hcChsaXN0KTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JDb25zdHJ1Y3RvcnM7XG4iLCJpbXBvcnQgZXJyb3JDb25zdHJ1Y3RvcnMgZnJvbSAnLi9lcnJvci1jb25zdHJ1Y3RvcnMuanMnO1xuXG5leHBvcnQgY2xhc3MgTm9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdG5hbWUgPSAnTm9uRXJyb3InO1xuXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcblx0XHRzdXBlcihOb25FcnJvci5fcHJlcGFyZVN1cGVyTWVzc2FnZShtZXNzYWdlKSk7XG5cdH1cblxuXHRzdGF0aWMgX3ByZXBhcmVTdXBlck1lc3NhZ2UobWVzc2FnZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBjb21tb25Qcm9wZXJ0aWVzID0gW1xuXHR7XG5cdFx0cHJvcGVydHk6ICduYW1lJyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnbWVzc2FnZScsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdH0sXG5cdHtcblx0XHRwcm9wZXJ0eTogJ3N0YWNrJyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnY29kZScsXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnY2F1c2UnLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXTtcblxuY29uc3QgdG9Kc29uV2FzQ2FsbGVkID0gbmV3IFdlYWtTZXQoKTtcblxuY29uc3QgdG9KU09OID0gZnJvbSA9PiB7XG5cdHRvSnNvbldhc0NhbGxlZC5hZGQoZnJvbSk7XG5cdGNvbnN0IGpzb24gPSBmcm9tLnRvSlNPTigpO1xuXHR0b0pzb25XYXNDYWxsZWQuZGVsZXRlKGZyb20pO1xuXHRyZXR1cm4ganNvbjtcbn07XG5cbmNvbnN0IGdldEVycm9yQ29uc3RydWN0b3IgPSBuYW1lID0+IGVycm9yQ29uc3RydWN0b3JzLmdldChuYW1lKSA/PyBFcnJvcjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmNvbnN0IGRlc3Ryb3lDaXJjdWxhciA9ICh7XG5cdGZyb20sXG5cdHNlZW4sXG5cdHRvLFxuXHRmb3JjZUVudW1lcmFibGUsXG5cdG1heERlcHRoLFxuXHRkZXB0aCxcblx0dXNlVG9KU09OLFxuXHRzZXJpYWxpemUsXG59KSA9PiB7XG5cdGlmICghdG8pIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShmcm9tKSkge1xuXHRcdFx0dG8gPSBbXTtcblx0XHR9IGVsc2UgaWYgKCFzZXJpYWxpemUgJiYgaXNFcnJvckxpa2UoZnJvbSkpIHtcblx0XHRcdGNvbnN0IEVycm9yID0gZ2V0RXJyb3JDb25zdHJ1Y3Rvcihmcm9tLm5hbWUpO1xuXHRcdFx0dG8gPSBuZXcgRXJyb3IoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG8gPSB7fTtcblx0XHR9XG5cdH1cblxuXHRzZWVuLnB1c2goZnJvbSk7XG5cblx0aWYgKGRlcHRoID49IG1heERlcHRoKSB7XG5cdFx0cmV0dXJuIHRvO1xuXHR9XG5cblx0aWYgKHVzZVRvSlNPTiAmJiB0eXBlb2YgZnJvbS50b0pTT04gPT09ICdmdW5jdGlvbicgJiYgIXRvSnNvbldhc0NhbGxlZC5oYXMoZnJvbSkpIHtcblx0XHRyZXR1cm4gdG9KU09OKGZyb20pO1xuXHR9XG5cblx0Y29uc3QgY29udGludWVEZXN0cm95Q2lyY3VsYXIgPSB2YWx1ZSA9PiBkZXN0cm95Q2lyY3VsYXIoe1xuXHRcdGZyb206IHZhbHVlLFxuXHRcdHNlZW46IFsuLi5zZWVuXSxcblx0XHRmb3JjZUVudW1lcmFibGUsXG5cdFx0bWF4RGVwdGgsXG5cdFx0ZGVwdGgsXG5cdFx0dXNlVG9KU09OLFxuXHRcdHNlcmlhbGl6ZSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZnJvbSkpIHtcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5ICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdCdWZmZXInKSB7XG5cdFx0XHR0b1trZXldID0gJ1tvYmplY3QgQnVmZmVyXSc7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBUT0RPOiBVc2UgYHN0cmVhbS5pc1JlYWRhYmxlKClgIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMTguXG5cdFx0aWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnBpcGUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRvW2tleV0gPSAnW29iamVjdCBTdHJlYW1dJztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0Ly8gR3JhY2VmdWxseSBoYW5kbGUgbm9uLWNvbmZpZ3VyYWJsZSBlcnJvcnMgbGlrZSBgRE9NRXhjZXB0aW9uYC5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRvW2tleV0gPSB2YWx1ZTtcblx0XHRcdH0gY2F0Y2gge31cblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCFzZWVuLmluY2x1ZGVzKGZyb21ba2V5XSkpIHtcblx0XHRcdGRlcHRoKys7XG5cdFx0XHR0b1trZXldID0gY29udGludWVEZXN0cm95Q2lyY3VsYXIoZnJvbVtrZXldKTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dG9ba2V5XSA9ICdbQ2lyY3VsYXJdJztcblx0fVxuXG5cdGZvciAoY29uc3Qge3Byb3BlcnR5LCBlbnVtZXJhYmxlfSBvZiBjb21tb25Qcm9wZXJ0aWVzKSB7XG5cdFx0aWYgKHR5cGVvZiBmcm9tW3Byb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcgJiYgZnJvbVtwcm9wZXJ0eV0gIT09IG51bGwpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywgcHJvcGVydHksIHtcblx0XHRcdFx0dmFsdWU6IGlzRXJyb3JMaWtlKGZyb21bcHJvcGVydHldKSA/IGNvbnRpbnVlRGVzdHJveUNpcmN1bGFyKGZyb21bcHJvcGVydHldKSA6IGZyb21bcHJvcGVydHldLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiBmb3JjZUVudW1lcmFibGUgPyB0cnVlIDogZW51bWVyYWJsZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVFcnJvcih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IHtcblx0XHRtYXhEZXB0aCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcblx0XHR1c2VUb0pTT04gPSB0cnVlLFxuXHR9ID0gb3B0aW9ucztcblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBkZXN0cm95Q2lyY3VsYXIoe1xuXHRcdFx0ZnJvbTogdmFsdWUsXG5cdFx0XHRzZWVuOiBbXSxcblx0XHRcdGZvcmNlRW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdG1heERlcHRoLFxuXHRcdFx0ZGVwdGg6IDAsXG5cdFx0XHR1c2VUb0pTT04sXG5cdFx0XHRzZXJpYWxpemU6IHRydWUsXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBQZW9wbGUgc29tZXRpbWVzIHRocm93IHRoaW5ncyBiZXNpZGVzIEVycm9yIG9iamVjdHPigKZcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIGBKU09OLnN0cmluZ2lmeSgpYCBkaXNjYXJkcyBmdW5jdGlvbnMuIFdlIGRvIHRvbywgdW5sZXNzIGEgZnVuY3Rpb24gaXMgdGhyb3duIGRpcmVjdGx5LlxuXHRcdC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGB8fGAgYmVjYXVzZSBgLm5hbWVgIGlzIGFuIGVtcHR5IHN0cmluZyBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucy5cblx0XHRyZXR1cm4gYFtGdW5jdGlvbjogJHt2YWx1ZS5uYW1lIHx8ICdhbm9ueW1vdXMnfV1gO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVFcnJvcih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IHttYXhEZXB0aCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWX0gPSBvcHRpb25zO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKGlzTWluaW11bVZpYWJsZVNlcmlhbGl6ZWRFcnJvcih2YWx1ZSkpIHtcblx0XHRjb25zdCBFcnJvciA9IGdldEVycm9yQ29uc3RydWN0b3IodmFsdWUubmFtZSk7XG5cdFx0cmV0dXJuIGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0XHRmcm9tOiB2YWx1ZSxcblx0XHRcdHNlZW46IFtdLFxuXHRcdFx0dG86IG5ldyBFcnJvcigpLFxuXHRcdFx0bWF4RGVwdGgsXG5cdFx0XHRkZXB0aDogMCxcblx0XHRcdHNlcmlhbGl6ZTogZmFsc2UsXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IE5vbkVycm9yKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3JMaWtlKHZhbHVlKSB7XG5cdHJldHVybiBCb29sZWFuKHZhbHVlKVxuXHQmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCYmICduYW1lJyBpbiB2YWx1ZVxuXHQmJiAnbWVzc2FnZScgaW4gdmFsdWVcblx0JiYgJ3N0YWNrJyBpbiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNNaW5pbXVtVmlhYmxlU2VyaWFsaXplZEVycm9yKHZhbHVlKSB7XG5cdHJldHVybiBCb29sZWFuKHZhbHVlKVxuXHQmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCYmICdtZXNzYWdlJyBpbiB2YWx1ZVxuXHQmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBlcnJvckNvbnN0cnVjdG9yc30gZnJvbSAnLi9lcnJvci1jb25zdHJ1Y3RvcnMuanMnO1xuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZlByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xudmFyIF9fc3ByZWFkUHJvcHMgPSAoYSwgYikgPT4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7XG52YXIgX19vYmpSZXN0ID0gKHNvdXJjZSwgZXhjbHVkZSkgPT4ge1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChzb3VyY2UsIHByb3ApICYmIGV4Y2x1ZGUuaW5kZXhPZihwcm9wKSA8IDApXG4gICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gIGlmIChzb3VyY2UgIT0gbnVsbCAmJiBfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhzb3VyY2UpKSB7XG4gICAgICBpZiAoZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMCAmJiBfX3Byb3BJc0VudW0uY2FsbChzb3VyY2UsIHByb3ApKVxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX2FzeW5jID0gKF9fdGhpcywgX19hcmd1bWVudHMsIGdlbmVyYXRvcikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHZhciBmdWxmaWxsZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlamVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgc3RlcCA9ICh4KSA9PiB4LmRvbmUgPyByZXNvbHZlKHgudmFsdWUpIDogUHJvbWlzZS5yZXNvbHZlKHgudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7XG4gICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KF9fdGhpcywgX19hcmd1bWVudHMpKS5uZXh0KCkpO1xuICB9KTtcbn07XG5cbi8vIHNyYy9nZW5lcmljLnRzXG5pbXBvcnQgeyBzZXJpYWxpemVFcnJvciwgZGVzZXJpYWxpemVFcnJvciB9IGZyb20gXCJzZXJpYWxpemUtZXJyb3JcIjtcbmZ1bmN0aW9uIGRlZmluZUdlbmVyaWNNZXNzYW5naW5nKGNvbmZpZykge1xuICBsZXQgcmVtb3ZlUm9vdExpc3RlbmVyO1xuICBsZXQgcGVyVHlwZUxpc3RlbmVycyA9IHt9O1xuICBmdW5jdGlvbiBjbGVhbnVwUm9vdExpc3RlbmVyKCkge1xuICAgIGlmIChPYmplY3QuZW50cmllcyhwZXJUeXBlTGlzdGVuZXJzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlbW92ZVJvb3RMaXN0ZW5lciA9PSBudWxsID8gdm9pZCAwIDogcmVtb3ZlUm9vdExpc3RlbmVyKCk7XG4gICAgICByZW1vdmVSb290TGlzdGVuZXIgPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIGxldCBpZFNlcSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNCk7XG4gIGZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgICByZXR1cm4gaWRTZXErKztcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlbmRNZXNzYWdlKHR5cGUsIGRhdGEsIC4uLmFyZ3MpIHtcbiAgICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYTIsIF9iLCBfYywgX2Q7XG4gICAgICAgIGNvbnN0IF9tZXNzYWdlID0ge1xuICAgICAgICAgIGlkOiBnZXROZXh0SWQoKSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAoX2IgPSB5aWVsZCAoX2EyID0gY29uZmlnLnZlcmlmeU1lc3NhZ2VEYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmNhbGwoY29uZmlnLCBfbWVzc2FnZSkpICE9IG51bGwgPyBfYiA6IF9tZXNzYWdlO1xuICAgICAgICAoX2MgPSBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2MuZGVidWcoYFttZXNzYWdpbmddIHNlbmRNZXNzYWdlIHtpZD0ke21lc3NhZ2UuaWR9fSBcXHUyNTAwXFx1MTQwNWAsIG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNvbmZpZy5zZW5kTWVzc2FnZShtZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgeyByZXMsIGVyciB9ID0gcmVzcG9uc2UgIT0gbnVsbCA/IHJlc3BvbnNlIDogeyBlcnI6IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlXCIpIH07XG4gICAgICAgIChfZCA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfZC5kZWJ1ZyhgW21lc3NhZ2luZ10gc2VuZE1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTE0MEFcXHUyNTAwYCwgeyByZXMsIGVyciB9KTtcbiAgICAgICAgaWYgKGVyciAhPSBudWxsKVxuICAgICAgICAgIHRocm93IGRlc2VyaWFsaXplRXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25NZXNzYWdlKHR5cGUsIG9uUmVjZWl2ZWQpIHtcbiAgICAgIHZhciBfYTIsIF9iLCBfYztcbiAgICAgIGlmIChyZW1vdmVSb290TGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAoX2EyID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5kZWJ1ZyhcbiAgICAgICAgICBgW21lc3NhZ2luZ10gXCIke3R5cGV9XCIgaW5pdGlhbGl6ZWQgdGhlIG1lc3NhZ2UgbGlzdGVuZXIgZm9yIHRoaXMgY29udGV4dGBcbiAgICAgICAgKTtcbiAgICAgICAgcmVtb3ZlUm9vdExpc3RlbmVyID0gY29uZmlnLmFkZFJvb3RMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIHZhciBfYTMsIF9iMjtcbiAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UudHlwZSAhPSBcInN0cmluZ1wiIHx8IHR5cGVvZiBtZXNzYWdlLnRpbWVzdGFtcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5icmVha0Vycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICBgW21lc3NhZ2luZ10gVW5rbm93biBtZXNzYWdlIGZvcm1hdCwgbXVzdCBpbmNsdWRlIHRoZSAndHlwZScgJiAndGltZXN0YW1wJyBmaWVsZHMsIHJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgKF9hMyA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYTMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgKF9iMiA9IGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9iMi5kZWJ1ZyhcIlttZXNzYWdpbmddIFJlY2VpdmVkIG1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBwZXJUeXBlTGlzdGVuZXJzW21lc3NhZ2UudHlwZV07XG4gICAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgY29uc3QgcmVzID0gbGlzdGVuZXIobWVzc2FnZSk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKHJlczIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTQsIF9iMztcbiAgICAgICAgICAgIHJldHVybiAoX2IzID0gKF9hNCA9IGNvbmZpZy52ZXJpZnlNZXNzYWdlRGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNC5jYWxsKGNvbmZpZywgcmVzMikpICE9IG51bGwgPyBfYjMgOiByZXMyO1xuICAgICAgICAgIH0pLnRoZW4oKHJlczIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTQ7XG4gICAgICAgICAgICAoX2E0ID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmRlYnVnKGBbbWVzc2FnaW5nXSBvbk1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgeyByZXM6IHJlczIgfSk7XG4gICAgICAgICAgICByZXR1cm4geyByZXM6IHJlczIgfTtcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E0O1xuICAgICAgICAgICAgKF9hNCA9IGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNC5kZWJ1ZyhgW21lc3NhZ2luZ10gb25NZXNzYWdlIHtpZD0ke21lc3NhZ2UuaWR9fSBcXHUyNTAwXFx1MTQwNWAsIHsgZXJyIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyOiBzZXJpYWxpemVFcnJvcihlcnIpIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBlclR5cGVMaXN0ZW5lcnNbdHlwZV0gIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlcnIgPSBFcnJvcihcbiAgICAgICAgICBgW21lc3NhZ2luZ10gSW4gdGhpcyBKUyBjb250ZXh0LCBvbmx5IG9uZSBsaXN0ZW5lciBjYW4gYmUgc2V0dXAgZm9yICR7dHlwZX1gXG4gICAgICAgICk7XG4gICAgICAgIChfYiA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYi5lcnJvcihlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICBwZXJUeXBlTGlzdGVuZXJzW3R5cGVdID0gb25SZWNlaXZlZDtcbiAgICAgIChfYyA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYy5sb2coYFttZXNzYWdpbmddIEFkZGVkIGxpc3RlbmVyIGZvciAke3R5cGV9YCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkZWxldGUgcGVyVHlwZUxpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgY2xlYW51cFJvb3RMaXN0ZW5lcigpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgIE9iamVjdC5rZXlzKHBlclR5cGVMaXN0ZW5lcnMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgZGVsZXRlIHBlclR5cGVMaXN0ZW5lcnNbdHlwZV07XG4gICAgICB9KTtcbiAgICAgIGNsZWFudXBSb290TGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7XG4gIF9fc3ByZWFkVmFsdWVzLFxuICBfX3NwcmVhZFByb3BzLFxuICBfX29ialJlc3QsXG4gIF9fYXN5bmMsXG4gIGRlZmluZUdlbmVyaWNNZXNzYW5naW5nXG59O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMC4wIC0gRnJpIEF1ZyAxMiAyMDIyIDE5OjQyOjQ0ICovXG5cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG5cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICghZ2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbFRoaXMuYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjsgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG5cbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgICAgLy8gSlNPTiBmaWxlLlxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG5cblxuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTsgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG5cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9OyAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9XG4gICAgICAgICAgLyogd3JhcHBlcnMgKi9cbiAgICAgICAgICAsIHtcbiAgICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgICAgbWF4QXJnczogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTsgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cblxuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07IC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG5cblxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH0gLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTsgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCJpbXBvcnQge1xuICBfX3NwcmVhZFByb3BzLFxuICBfX3NwcmVhZFZhbHVlcyxcbiAgZGVmaW5lR2VuZXJpY01lc3Nhbmdpbmdcbn0gZnJvbSBcIi4vY2h1bmstQlFMRlNGRlouanNcIjtcblxuLy8gc3JjL2V4dGVuc2lvbi50c1xuaW1wb3J0IEJyb3dzZXIgZnJvbSBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiO1xuZnVuY3Rpb24gZGVmaW5lRXh0ZW5zaW9uTWVzc2FnaW5nKGNvbmZpZykge1xuICByZXR1cm4gZGVmaW5lR2VuZXJpY01lc3NhbmdpbmcoX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgY29uZmlnKSwge1xuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UsIGFyZykge1xuICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGFyZyA9PT0gXCJudW1iZXJcIiA/IHsgdGFiSWQ6IGFyZyB9IDogYXJnO1xuICAgICAgcmV0dXJuIEJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShcbiAgICAgICAgb3B0aW9ucy50YWJJZCxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgLy8gUGFzcyBmcmFtZUlkIGlmIHNwZWNpZmllZFxuICAgICAgICBvcHRpb25zLmZyYW1lSWQgIT0gbnVsbCA/IHsgZnJhbWVJZDogb3B0aW9ucy5mcmFtZUlkIH0gOiB2b2lkIDBcbiAgICAgICk7XG4gICAgfSxcbiAgICBhZGRSb290TGlzdGVuZXIocHJvY2Vzc01lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gKG1lc3NhZ2UsIHNlbmRlcikgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgcmV0dXJuIHByb2Nlc3NNZXNzYWdlKF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIG1lc3NhZ2UpLCB7IHNlbmRlciB9KSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc01lc3NhZ2UobWVzc2FnZSk7XG4gICAgICB9O1xuICAgICAgQnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gKCkgPT4gQnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuICB9KSk7XG59XG5leHBvcnQge1xuICBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmdcbn07XG4iLCJpbXBvcnQgeyBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmcgfSBmcm9tICdAd2ViZXh0LWNvcmUvbWVzc2FnaW5nJztcblxuLy8gRGVmaW5lL0ltcG9ydCByZXF1aXJlZCB0eXBlc1xuLy8gVE9ETzogRW5zdXJlIHRoZXNlIHR5cGVzIGFyZSBjb3JyZWN0bHkgZGVmaW5lZCBvciBpbXBvcnRlZCBpZiB0aGV5IGV4aXN0IGVsc2V3aGVyZVxuZXhwb3J0IHR5cGUgT2xsYW1hU3RyZWFtQ2h1bmtTdGF0dXMgPSAnY2h1bmsnIHwgJ2RvbmUnIHwgJ2Vycm9yJyB8ICdvdmVycmlkZV9ncmFudGVkJztcbmV4cG9ydCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rID0gXG4gICAgfCB7IHN0YXR1czogJ2NodW5rJzsgY29udGVudDogc3RyaW5nIH0gXG4gICAgfCB7IHN0YXR1czogJ2RvbmUnOyBzdGF0czogYW55IH0gXG4gICAgfCB7IHN0YXR1czogJ2Vycm9yJzsgZXJyb3I6IHN0cmluZyB9IFxuICAgIHwgeyBzdGF0dXM6ICdvdmVycmlkZV9ncmFudGVkJzsgY29udGVudDogc3RyaW5nOyBkb21haW46IHN0cmluZzsgZXhwaXJlc0F0OiBzdHJpbmcgfTtcbmV4cG9ydCBpbnRlcmZhY2UgT2xsYW1hQ2hhdFJlcXVlc3Qge1xuICAgIHByb21wdDogc3RyaW5nO1xuICAgIGhpc3Rvcnk/OiB7IHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnOyBjb250ZW50OiBzdHJpbmcgfVtdOyBcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdE1lc3NhZ2Uge1xuICByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JztcbiAgY29udGVudDogc3RyaW5nO1xuICBpZD86IHN0cmluZzsgLy8gQWRkIG9wdGlvbmFsIElEIHVzZWQgaW4gQ2hhdFBhZ2VcbiAgaXNFcnJvcj86IGJvb2xlYW47IC8vIEFkZCBvcHRpb25hbCBmbGFnIGZvciBlcnJvciBtZXNzYWdlc1xufVxuXG4vLyBEZWZpbmUgQ2xpcERhdGEgdHlwZSBhbmQgZXhwb3J0IGl0XG5leHBvcnQgaW50ZXJmYWNlIENsaXBEYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgdGFnc1xufVxuXG4vLyBEZWZpbmUgREIgb3BlcmF0aW9uIHR5cGVzXG4vLyBFWFBPUlQgdGhlc2UgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBEYkV4ZWNSZXF1ZXN0IHtcbiAgc3FsOiBzdHJpbmc7XG4gIHBhcmFtcz86IGFueVtdOyAvLyBPcHRpb25hbCBwYXJhbXMgZm9yIGV4ZWNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYlF1ZXJ5UmVxdWVzdCB7XG4gIHNxbDogc3RyaW5nO1xuICBwYXJhbXM/OiBhbnlbXTsgLy8gT3B0aW9uYWwgcGFyYW1zIGZvciBxdWVyeVxufVxuXG4vLyBEZWZpbmUgaW5wdXQvb3V0cHV0IGZvciBnZXRPbGxhbWFNb2RlbHNcbmludGVyZmFjZSBHZXRPbGxhbWFNb2RlbHNSZXF1ZXN0IHtcbiAgZW5kcG9pbnQ6IHN0cmluZztcbn1cblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgYSBtb2RlbCByZXR1cm5lZCBieSB0aGUgYmFja2dyb3VuZFxuaW50ZXJmYWNlIE9sbGFtYU1vZGVsIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvLyBBZGQgb3RoZXIgZmllbGRzIGlmIHRoZSBiYWNrZ3JvdW5kIHNlbmRzIG1vcmVcbn1cblxuaW50ZXJmYWNlIEdldE9sbGFtYU1vZGVsc1Jlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbW9kZWxzPzogT2xsYW1hTW9kZWxbXTtcbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbi8vIERlZmluZSB0aGUgb3ZlcmFsbCBwcm90b2NvbCBtYXAgZm9yIHR5cGUgc2FmZXR5XG5leHBvcnQgaW50ZXJmYWNlIFByb3RvY29sTWFwIHtcbiAgLy8gTWVzc2FnZSBmcm9tIFBvcHVwIC0+IEJhY2tncm91bmQgdG8gdHJpZ2dlciBjbGlwcGluZ1xuICBjbGlwUGFnZTogKGRhdGE6IENsaXBEYXRhKSA9PiBQcm9taXNlPHZvaWQ+OyAvLyBBc3N1bWluZyBiYWNrZ3JvdW5kIGRvZXNuJ3QgZGlyZWN0bHkgcmV0dXJuIGRhdGEgaGVyZVxuXG4gIC8vIE1lc3NhZ2UgZnJvbSBVSSAtPiBCYWNrZ3JvdW5kIHRvIGdldCBhdmFpbGFibGUgT2xsYW1hIG1vZGVsc1xuICBnZXRPbGxhbWFNb2RlbHM6IChkYXRhOiBHZXRPbGxhbWFNb2RlbHNSZXF1ZXN0KSA9PiBQcm9taXNlPEdldE9sbGFtYU1vZGVsc1Jlc3BvbnNlPjtcblxuICAvLyA9PSBEQiBPcGVyYXRpb25zIChVSS9CYWNrZ3JvdW5kIC0+IE9mZnNjcmVlbikgPT1cbiAgLy8gRXhlY3V0ZSBTUUwgKG5vIHJldHVybiB2YWx1ZSBleHBlY3RlZCBiZXlvbmQgc3VjY2Vzcy9lcnJvcilcbiAgZGJFeGVjOiAoZGF0YTogRGJFeGVjUmVxdWVzdCkgPT4gUHJvbWlzZTx7IHJvd3NNb2RpZmllZD86IG51bWJlciB9IHwgdm9pZD47IC8vIFBHbGl0ZSBleGVjIG1pZ2h0IHJldHVybiByb3dzTW9kaWZpZWRcblxuICAvLyBRdWVyeSBTUUwgKHJldHVybnMgcm93cylcbiAgZGJRdWVyeTogKGRhdGE6IERiUXVlcnlSZXF1ZXN0KSA9PiBQcm9taXNlPGFueT47IC8vIEtlZXAgcmVzdWx0IHR5cGUgZmxleGlibGUgZm9yIG5vd1xuXG4gIG9sbGFtYUNoYXRSZXF1ZXN0OiAoZGF0YTogT2xsYW1hQ2hhdFJlcXVlc3QpID0+IFByb21pc2U8eyByZWNlaXZlZDogYm9vbGVhbiB9PjtcbiAgb2xsYW1hUmVzcG9uc2U6IE9sbGFtYVN0cmVhbUNodW5rO1xuICBnZXRDaGF0SGlzdG9yeTogKGRhdGE6IHsgc2Vzc2lvbklkPzogbnVtYmVyIHwgJ2N1cnJlbnQnIH0pID0+IFByb21pc2U8Q2hhdE1lc3NhZ2VbXT47XG4gIGFkZFN5c3RlbU1lc3NhZ2U6IHsgY29udGVudDogc3RyaW5nIH07XG59XG5cbi8vIENyZWF0ZSB0aGUgdHlwZWQgbWVzc2FnaW5nIGluc3RhbmNlXG5jb25zdCBtZXNzYWdpbmdJbnN0YW5jZSA9IGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZzxQcm90b2NvbE1hcD4oKTtcblxuLy8gRXhwb3J0IHRoZSBzcGVjaWZpYyBtZXRob2RzIGZyb20gdGhlIGluc3RhbmNlXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSBtZXNzYWdpbmdJbnN0YW5jZS5zZW5kTWVzc2FnZTtcbmV4cG9ydCBjb25zdCBvbk1lc3NhZ2UgPSBtZXNzYWdpbmdJbnN0YW5jZS5vbk1lc3NhZ2U7XG5cbi8vIFJFTU9WRSBjb25mbGljdGluZyByZS1leHBvcnRcbi8vIGV4cG9ydCB0eXBlIHsgUHJvdG9jb2xNYXAgfTsgIiwiY29uc3QgRV9USU1FT1VUID0gbmV3IEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIG11dGV4IHRvIGJlY29tZSBhdmFpbGFibGUnKTtcbmNvbnN0IEVfQUxSRUFEWV9MT0NLRUQgPSBuZXcgRXJyb3IoJ211dGV4IGFscmVhZHkgbG9ja2VkJyk7XG5jb25zdCBFX0NBTkNFTEVEID0gbmV3IEVycm9yKCdyZXF1ZXN0IGZvciBsb2NrIGNhbmNlbGVkJyk7XG5cbnZhciBfX2F3YWl0ZXIkMiA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgU2VtYXBob3JlIHtcbiAgICBjb25zdHJ1Y3RvcihfdmFsdWUsIF9jYW5jZWxFcnJvciA9IEVfQ0FOQ0VMRUQpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgIHRoaXMuX2NhbmNlbEVycm9yID0gX2NhbmNlbEVycm9yO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnMgPSBbXTtcbiAgICB9XG4gICAgYWNxdWlyZSh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB7IHJlc29sdmUsIHJlamVjdCwgd2VpZ2h0LCBwcmlvcml0eSB9O1xuICAgICAgICAgICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQodGhpcy5fcXVldWUsIChvdGhlcikgPT4gcHJpb3JpdHkgPD0gb3RoZXIucHJpb3JpdHkpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xICYmIHdlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWRzIGltbWVkaWF0ZSBkaXNwYXRjaCwgc2tpcCB0aGUgcXVldWVcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrXzEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlciQyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKGNhbGxiYWNrLCB3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgcmVsZWFzZV0gPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB3YWl0Rm9yVW5sb2NrKHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICBpZiAodGhpcy5fY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgICAgICBpbnNlcnRTb3J0ZWQodGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdLCB7IHJlc29sdmUsIHByaW9yaXR5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSA8PSAwO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIHJlbGVhc2Uod2VpZ2h0ID0gMSkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICB0aGlzLl92YWx1ZSArPSB3ZWlnaHQ7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoUXVldWUoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKChlbnRyeSkgPT4gZW50cnkucmVqZWN0KHRoaXMuX2NhbmNlbEVycm9yKSk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuICAgIF9kaXNwYXRjaFF1ZXVlKCkge1xuICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDAgJiYgdGhpcy5fcXVldWVbMF0ud2VpZ2h0IDw9IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZGlzcGF0Y2hJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLl92YWx1ZSAtPSBpdGVtLndlaWdodDtcbiAgICAgICAgaXRlbS5yZXNvbHZlKFtwcmV2aW91c1ZhbHVlLCB0aGlzLl9uZXdSZWxlYXNlcihpdGVtLndlaWdodCldKTtcbiAgICB9XG4gICAgX25ld1JlbGVhc2VyKHdlaWdodCkge1xuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2Uod2VpZ2h0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2RyYWluVW5sb2NrV2FpdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHdhaXRlcnMuZm9yRWFjaCgod2FpdGVyKSA9PiB3YWl0ZXIucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlZFByaW9yaXR5ID0gdGhpcy5fcXVldWVbMF0ucHJpb3JpdHk7XG4gICAgICAgICAgICBmb3IgKGxldCB3ZWlnaHQgPSB0aGlzLl92YWx1ZTsgd2VpZ2h0ID4gMDsgd2VpZ2h0LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0ZXJzID0gdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICghd2FpdGVycylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHdhaXRlcnMuZmluZEluZGV4KCh3YWl0ZXIpID0+IHdhaXRlci5wcmlvcml0eSA8PSBxdWV1ZWRQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgKGkgPT09IC0xID8gd2FpdGVycyA6IHdhaXRlcnMuc3BsaWNlKDAsIGkpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgod2FpdGVyID0+IHdhaXRlci5yZXNvbHZlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9xdWV1ZVswXS5wcmlvcml0eSA8IHByaW9yaXR5KSAmJlxuICAgICAgICAgICAgd2VpZ2h0IDw9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydFNvcnRlZChhLCB2KSB7XG4gICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQoYSwgKG90aGVyKSA9PiB2LnByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICBhLnNwbGljZShpICsgMSwgMCwgdik7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXhGcm9tRW5kKGEsIHByZWRpY2F0ZSkge1xuICAgIGZvciAobGV0IGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYVtpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxudmFyIF9fYXdhaXRlciQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBNdXRleCB7XG4gICAgY29uc3RydWN0b3IoY2FuY2VsRXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2VtYXBob3JlID0gbmV3IFNlbWFwaG9yZSgxLCBjYW5jZWxFcnJvcik7XG4gICAgfVxuICAgIGFjcXVpcmUoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMSh0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFssIHJlbGVhc2VyXSA9IHlpZWxkIHRoaXMuX3NlbWFwaG9yZS5hY3F1aXJlKDEsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUucnVuRXhjbHVzaXZlKCgpID0+IGNhbGxiYWNrKCksIDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayhwcmlvcml0eSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS53YWl0Rm9yVW5sb2NrKDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpKVxuICAgICAgICAgICAgdGhpcy5fc2VtYXBob3JlLnJlbGVhc2UoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmNhbmNlbCgpO1xuICAgIH1cbn1cblxudmFyIF9fYXdhaXRlciA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gd2l0aFRpbWVvdXQoc3luYywgdGltZW91dCwgdGltZW91dEVycm9yID0gRV9USU1FT1VUKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNxdWlyZTogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXNUaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGltZW91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IHlpZWxkIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzeW5jLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3luYy5hY3F1aXJlKHByaW9yaXR5KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGVhc2UgPSBBcnJheS5pc0FycmF5KHRpY2tldCkgPyB0aWNrZXRbMV0gOiB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGlja2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgd2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVsZWFzZSA9ICgpID0+IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRpY2tldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodGlja2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZWxlYXNlKHdlaWdodCkge1xuICAgICAgICAgICAgc3luYy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW5jLmNhbmNlbCgpO1xuICAgICAgICB9LFxuICAgICAgICB3YWl0Rm9yVW5sb2NrOiAod2VpZ2h0T3JQcmlvcml0eSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGxldCB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNTZW1hcGhvcmUoc3luYykpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWlnaHQgIT09IHVuZGVmaW5lZCAmJiB3ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KHRpbWVvdXRFcnJvciksIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICA/IHN5bmMud2FpdEZvclVubG9jayh3ZWlnaHQsIHByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICA6IHN5bmMud2FpdEZvclVubG9jayhwcmlvcml0eSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTG9ja2VkOiAoKSA9PiBzeW5jLmlzTG9ja2VkKCksXG4gICAgICAgIGdldFZhbHVlOiAoKSA9PiBzeW5jLmdldFZhbHVlKCksXG4gICAgICAgIHNldFZhbHVlOiAodmFsdWUpID0+IHN5bmMuc2V0VmFsdWUodmFsdWUpLFxuICAgIH07XG59XG5mdW5jdGlvbiBpc1NlbWFwaG9yZShzeW5jKSB7XG4gICAgcmV0dXJuIHN5bmMuZ2V0VmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saXNuZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5mdW5jdGlvbiB0cnlBY3F1aXJlKHN5bmMsIGFscmVhZHlBY3F1aXJlZEVycm9yID0gRV9BTFJFQURZX0xPQ0tFRCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIHdpdGhUaW1lb3V0KHN5bmMsIDAsIGFscmVhZHlBY3F1aXJlZEVycm9yKTtcbn1cblxuZXhwb3J0IHsgRV9BTFJFQURZX0xPQ0tFRCwgRV9DQU5DRUxFRCwgRV9USU1FT1VULCBNdXRleCwgU2VtYXBob3JlLCB0cnlBY3F1aXJlLCB3aXRoVGltZW91dCB9O1xuIiwiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiAvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjaHJvbWVcIiAvPiBcblxuaW1wb3J0IHsgTXV0ZXggfSBmcm9tICdhc3luYy1tdXRleCc7XG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2luZyc7IFxuXG5jb25zdCBPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCA9ICdvZmZzY3JlZW4uaHRtbCc7XG5sZXQgY3JlYXRpbmdQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG5jb25zdCBjcmVhdGlvbk11dGV4ID0gbmV3IE11dGV4KCk7XG5cbi8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBvZmZzY3JlZW4gZG9jdW1lbnQgZXhpc3RzIGFuZCBjcmVhdGUgaXQgaWYgbm90XG5hc3luYyBmdW5jdGlvbiBlbnN1cmVPZmZzY3JlZW5Eb2N1bWVudCgpIHtcbiAgLy8gVXNlIGEgbXV0ZXggdG8gcHJldmVudCBtdWx0aXBsZSBjb25jdXJyZW50IGNyZWF0aW9uIGF0dGVtcHRzXG4gIGNvbnN0IHJlbGVhc2UgPSBhd2FpdCBjcmVhdGlvbk11dGV4LmFjcXVpcmUoKTtcbiAgdHJ5IHtcbiAgICAvLyBDaGVjayBpZiB0aGUgZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuXG4gICAgIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgICAgICAvLyBAdHMtaWdub3JlIC0gQ29udGV4dFR5cGUgbWlnaHQgYmUgbWlzc2luZyBPRkZTQ1JFRU5fRE9DVU1FTlQgaW4gb2xkZXIgdHlwZXNcbiAgICAgICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCcgYXMgYnJvd3Nlci5SdW50aW1lLkNvbnRleHRUeXBlXSxcbiAgICAgICAgZG9jdW1lbnRVcmxzOiBbYnJvd3Nlci5ydW50aW1lLmdldFVSTChPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCldLFxuICAgICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdDb250ZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnW0RCIFV0aWxdIE9mZnNjcmVlbiBkb2N1bWVudCBhbHJlYWR5IGV4aXN0cy4nKTsgLy8gTGVzcyB2ZXJib3NlXG4gICAgICByZXR1cm47IC8vIEFscmVhZHkgZXhpc3RzLCB3ZSdyZSBnb29kLlxuICAgIH1cblxuICAgIC8vIElmIGNyZWF0aW9uIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MsIHdhaXQgZm9yIGl0IHRvIGNvbXBsZXRlLlxuICAgIGlmIChjcmVhdGluZ1Byb21pc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gV2FpdGluZyBmb3IgZXhpc3Rpbmcgb2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0aW9uLi4uJyk7XG4gICAgICBhd2FpdCBjcmVhdGluZ1Byb21pc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1tEQiBVdGlsXSBDcmVhdGluZyBvZmZzY3JlZW4gZG9jdW1lbnQuLi4nKTtcbiAgICBjcmVhdGluZ1Byb21pc2UgPSBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHsgLy8gVXNlIG5hdGl2ZSBjaHJvbWUgQVBJXG4gICAgICB1cmw6IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRILFxuICAgICAgcmVhc29uczogWydET01fUEFSU0VSJyBhcyBjaHJvbWUub2Zmc2NyZWVuLlJlYXNvbl0sIFxuICAgICAganVzdGlmaWNhdGlvbjogJ1Byb3ZpZGVzIFBHbGl0ZSBkYXRhYmFzZSBvcGVyYXRpb25zLicsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgY3JlYXRpbmdQcm9taXNlO1xuICAgICAgY29uc29sZS5sb2coJ1tEQiBVdGlsXSBPZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkuJyk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0RCIFV0aWxdIEVycm9yIGNyZWF0aW5nIG9mZnNjcmVlbiBkb2N1bWVudDonLCBlcnJvcik7XG4gICAgICAvLyBEb3VibGUtY2hlY2sgaWYgaXQgZXhpc3RzIG5vdywgbWF5YmUgY3JlYXRpb24gc3VjY2VlZGVkIGRlc3BpdGUgZXJyb3I/XG4gICAgICBjb25zdCBjb250ZXh0c0FmdGVyRXJyb3IgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCcgYXMgYnJvd3Nlci5SdW50aW1lLkNvbnRleHRUeXBlXSxcbiAgICAgICAgIGRvY3VtZW50VXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpXSxcbiAgICAgICB9KTtcbiAgICAgICBpZiAoY29udGV4dHNBZnRlckVycm9yLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgLy8gT25seSB0aHJvdyBpZiBpdCB0cnVseSBmYWlsZWQgYW5kIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0aW9uIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKCdbREIgVXRpbF0gT2Zmc2NyZWVuIGRvY3VtZW50IGV4aXN0ZWQgZGVzcGl0ZSBjcmVhdGlvbiBlcnJvci9yYWNlIGNvbmRpdGlvbi4nKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gUmVzZXQgdGhlIHByb21pc2Ugd2hldGhlciBpdCBzdWNjZWVkZWQgb3IgZmFpbGVkXG4gICAgICBjcmVhdGluZ1Byb21pc2UgPSBudWxsOyBcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgLy8gUmVsZWFzZSB0aGUgbXV0ZXhcbiAgICByZWxlYXNlKCk7XG4gIH1cbn1cblxuLy8gRXhwb3J0IGZ1bmN0aW9ucyB0aGF0IG1pcnJvciBQR2xpdGUgbWV0aG9kcyB2aWEgQHdlYmV4dC1jb3JlL21lc3NhZ2luZ1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWNEYihzcWw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGF3YWl0IGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCk7XG4gIC8vIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gU2VuZGluZyBkYkV4ZWMgbWVzc2FnZTonLCB7IHNxbCB9KTsgLy8gTGVzcyB2ZXJib3NlXG4gIC8vIFBHbGl0ZSBleGVjIGRvZXNuJ3Qgc3VwcG9ydCBwYXJhbXMsIHNvIHdlIG9ubHkgc2VuZCBzcWxcbiAgcmV0dXJuIHNlbmRNZXNzYWdlKCdkYkV4ZWMnLCB7IHNxbCB9KTsgXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeURiKHNxbDogc3RyaW5nLCBwYXJhbXM/OiBhbnlbXSk6IFByb21pc2U8YW55PiB7XG4gIGF3YWl0IGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCk7XG4gIC8vIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gU2VuZGluZyBkYlF1ZXJ5IG1lc3NhZ2U6JywgeyBzcWwsIHBhcmFtcyB9KTsgLy8gTGVzcyB2ZXJib3NlXG4gIHJldHVybiBzZW5kTWVzc2FnZSgnZGJRdWVyeScsIHsgc3FsLCBwYXJhbXM6IHBhcmFtcyB8fCBbXSB9KTsgXG59XG5cbi8vIFNjaGVtYSBpcyBpbml0aWFsaXplZCBkaXJlY3RseSBpbiBvZmZzY3JlZW4udHNcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplU2NoZW1hKCkgeyAuLi4gfSAiLCIvLyBzcmMvc2VydmljZXMvbGxtU2VydmljZS50c1xuXG5pbXBvcnQgeyBxdWVyeURiIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGInOyAvLyBUbyBsb2FkIGNvbmZpZ1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnaW5nJzsgLy8gRm9yIHN0cmVhbWluZyByZXNwb25zZXMgYmFja1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QsIExMTUVtYmVkZGluZ1Byb3ZpZGVyLCBQcm92aWRlckVtYmVkZGluZ1JlcXVlc3QgfSBmcm9tICcuL3Byb3ZpZGVycy90eXBlcyc7XG5cbi8vIC0tLSBDb25maWd1cmF0aW9uIFR5cGVzIC0tLVxuXG4vLyBSZXVzZSBDaGF0TWVzc2FnZSBmcm9tIG1lc3NhZ2luZy50cyBpZiBzdWl0YWJsZSwgb3IgcmVkZWZpbmUgaWYgbmVlZGVkXG5pbXBvcnQgdHlwZSB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcblxuZXhwb3J0IHR5cGUgTExNUHJvdmlkZXIgPSAnb2xsYW1hJyB8ICdvcGVucm91dGVyJyB8ICdncm9xJyB8ICd2ZW5pY2UnOyAvLyBBZGQgdmVuaWNlXG5cbi8vIEJhc2UgY29uZmlndXJhdGlvbiBzdHJ1Y3R1cmUgKHlvdSBtaWdodCBzdG9yZSB0aGlzIGFzIEpTT04gaW4gdGhlIERCKVxuZXhwb3J0IGludGVyZmFjZSBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6IExMTVByb3ZpZGVyO1xuICBjaGF0TW9kZWw6IHN0cmluZztcbiAgZW1iZWRkaW5nTW9kZWw/OiBzdHJpbmc7IC8vIE9wdGlvbmFsLCBtaWdodCBub3QgYmUgbmVlZGVkIGZvciBhbGwgcHJvdmlkZXJzIG9yIHNlcGFyYXRlIGNvbmZpZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9sbGFtYUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ29sbGFtYSc7XG4gIGVuZHBvaW50OiBzdHJpbmc7IC8vIGUuZy4sIGh0dHA6Ly9sb2NhbGhvc3Q6MTE0MzRcbiAgLy8gZW1iZWRkaW5nTW9kZWwgaXMgcmVxdWlyZWQgZm9yIGxvY2FsIE9sbGFtYSBlbWJlZGRpbmdcbiAgZW1iZWRkaW5nTW9kZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuUm91dGVyQ29uZmlnIGV4dGVuZHMgTExNQ29uZmlnQmFzZSB7XG4gIHByb3ZpZGVyOiAnb3BlbnJvdXRlcic7XG4gIGFwaUtleTogc3RyaW5nO1xuICAvLyBPcGVuUm91dGVyIG1pZ2h0IHVzZSBzcGVjaWZpYyBtb2RlbCBpZGVudGlmaWVycyBkaWZmZXJlbnQgZnJvbSBPbGxhbWFcbiAgLy8gRW1iZWRkaW5nIG1vZGVsIG1pZ2h0IGJlIGltcGxpY2l0IG9yIGEgc3BlY2lmaWMgb25lIGlmIHRoZXkgb2ZmZXIgaXRcbn1cblxuLy8gQWRkIEdyb3FDb25maWdcbmV4cG9ydCBpbnRlcmZhY2UgR3JvcUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ2dyb3EnO1xuICBhcGlLZXk6IHN0cmluZztcbiAgLy8gR3JvcSBkb2Vzbid0IGN1cnJlbnRseSBvZmZlciBlbWJlZGRpbmcgbW9kZWxzXG4gIGVtYmVkZGluZ01vZGVsPzogdW5kZWZpbmVkOyBcbn1cblxuLy8gQWRkIFZlbmljZUNvbmZpZyAoZXZlbiBpZiBlbXB0eSBmb3Igbm93KVxuZXhwb3J0IGludGVyZmFjZSBWZW5pY2VDb25maWcgZXh0ZW5kcyBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6ICd2ZW5pY2UnO1xuICBhcGlLZXk/OiB1bmRlZmluZWQ7IC8vIE5vIEFQSSBrZXkgbmVlZGVkXG4gIGVtYmVkZGluZ01vZGVsPzogdW5kZWZpbmVkO1xuICAvLyBBZGQgd2FsbGV0IGFkZHJlc3Mgb3Igb3RoZXIgcmVsZXZhbnQgZmllbGRzIGxhdGVyXG59XG5cbmV4cG9ydCB0eXBlIExMTVVzZXJDb25maWcgPSBPbGxhbWFDb25maWcgfCBPcGVuUm91dGVyQ29uZmlnIHwgR3JvcUNvbmZpZyB8IFZlbmljZUNvbmZpZzsgLy8gVW5pb24gdHlwZVxuXG4vLyAtLS0gU2VydmljZSBBcmd1bWVudCBUeXBlcyAtLS1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1DaGF0UmVxdWVzdCB7XG4gIHByb21wdDogc3RyaW5nO1xuICBoaXN0b3J5PzogQ2hhdE1lc3NhZ2VbXTtcbiAgY29uZmlnOiBMTE1Vc2VyQ29uZmlnOyAvLyBQYXNzIHRoZSBsb2FkZWQgY29uZmlnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkaW5nUmVxdWVzdCB7XG4gIGNvbnRlbnQ6IHN0cmluZ1tdIHwgc3RyaW5nOyAvLyBBbGxvdyBzaW5nbGUgc3RyaW5nIG9yIGFycmF5XG4gIGNvbmZpZzogTExNVXNlckNvbmZpZztcbn1cblxuLy8gLS0tIFNlcnZpY2UgUmVzcG9uc2UgVHlwZXMgLS0tXG5cbi8vIEZvciBjaGF0LCB3ZSBzdHJlYW0gT2xsYW1hU3RyZWFtQ2h1bmsgdmlhIHNlbmRNZXNzYWdlXG4vLyBGb3IgZW1iZWRkaW5ncywgd2UgcmV0dXJuIHRoZSB2ZWN0b3JzIGRpcmVjdGx5XG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkZGluZ1Jlc3BvbnNlIHtcbiAgZW1iZWRkaW5nczogbnVtYmVyW11bXTsgLy8gQXJyYXkgb2YgZW1iZWRkaW5nIHZlY3RvcnNcbn1cblxuXG4vLyAtLS0gU2VydmljZSBJbnRlcmZhY2UgKENvbmNlcHR1YWwgLSBpbXBsZW1lbnRhdGlvbiBmb2xsb3dzKSAtLS1cblxuLyoqXG4gKiBMb2FkcyB0aGUgdXNlcidzIExMTSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJDb25maWcoKTogUHJvbWlzZTxMTE1Vc2VyQ29uZmlnIHwgbnVsbD4ge1xuICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIExvYWRpbmcgdXNlciBjb25maWd1cmF0aW9uLi4uJyk7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3FsID0gJ1NFTEVDVCBjb25maWdfanNvbiBGUk9NIHVzZXJfY29uZmlndXJhdGlvbiBXSEVSRSBpZCA9IDE7JztcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeURiKHNxbCk7XG4gICAgaWYgKHJlc3VsdD8ucm93cz8uWzBdPy5jb25maWdfanNvbikge1xuICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShyZXN1bHQucm93c1swXS5jb25maWdfanNvbik7XG4gICAgICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIExvYWRlZCBjb25maWc6JywgY29uZmlnKTtcbiAgICAgIC8vIEJhc2ljIHZhbGlkYXRpb25cbiAgICAgIGlmICghY29uZmlnLnByb3ZpZGVyIHx8ICFjb25maWcuY2hhdE1vZGVsKSB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWcgbWlzc2luZyBwcm92aWRlci9jaGF0TW9kZWxcIik7XG4gICAgICBpZiAoY29uZmlnLnByb3ZpZGVyID09PSAnb2xsYW1hJyAmJiAoIWNvbmZpZy5lbmRwb2ludCB8fCAhY29uZmlnLmVtYmVkZGluZ01vZGVsKSkgdGhyb3cgbmV3IEVycm9yKFwiT2xsYW1hIGNvbmZpZyBtaXNzaW5nIGVuZHBvaW50L2VtYmVkZGluZ01vZGVsXCIpO1xuICAgICAgaWYgKGNvbmZpZy5wcm92aWRlciA9PT0gJ29wZW5yb3V0ZXInICYmICFjb25maWcuYXBpS2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJPcGVuUm91dGVyIGNvbmZpZyBtaXNzaW5nIGFwaUtleVwiKTtcbiAgICAgIGlmIChjb25maWcucHJvdmlkZXIgPT09ICdncm9xJyAmJiAhY29uZmlnLmFwaUtleSkgdGhyb3cgbmV3IEVycm9yKFwiR3JvcSBjb25maWcgbWlzc2luZyBhcGlLZXlcIik7XG4gICAgICByZXR1cm4gY29uZmlnIGFzIExMTVVzZXJDb25maWc7XG4gICAgfSBcbiAgICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIE5vIGNvbmZpZ3VyYXRpb24gZm91bmQuJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW2xsbVNlcnZpY2VdIEVycm9yIGxvYWRpbmcgb3IgdmFsaWRhdGluZyBjb25maWd1cmF0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cbi8qKlxuICogSGFuZGxlcyBzdHJlYW1pbmcgY2hhdCByZXNwb25zZXMgZnJvbSB0aGUgY29uZmlndXJlZCBMTE0gcHJvdmlkZXIuXG4gKiBTZW5kcyBjaHVua3MgYmFjayB2aWEgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywgY2h1bmspLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RyZWFtQ2hhdFJlc3BvbnNlKHJlcXVlc3Q6IFN0cmVhbUNoYXRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgY29uZmlnIH0gPSByZXF1ZXN0O1xuXG4gIGNvbnN0IHNlbmRDaHVua0NhbGxiYWNrID0gKGNodW5rOiBPbGxhbWFTdHJlYW1DaHVuayk6IHZvaWQgPT4ge1xuICAgICBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCBjaHVuaylcbiAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gRmFpbGVkIHRvIHJlbGF5IGNodW5rOmAsIGUpKTtcbiAgfTtcblxuICBpZiAoIWNvbmZpZykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gc3RyZWFtQ2hhdFJlc3BvbnNlIGNhbGxlZCB3aXRoIG51bGwgY29uZmlnLlwiKTtcbiAgICBzZW5kQ2h1bmtDYWxsYmFjayh7IHN0YXR1czogJ2Vycm9yJywgZXJyb3I6ICdMTE0gY29uZmlndXJhdGlvbiBpcyBtaXNzaW5nLicgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBSb3V0aW5nIGNoYXQgc3RyZWFtIGZvciBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG5cbiAgdHJ5IHtcbiAgICBsZXQgcHJvdmlkZXJNb2R1bGU6IExMTUNoYXRQcm92aWRlcjtcblxuICAgIC8vIFVzZSBzd2l0Y2ggc3RhdGVtZW50IGZvciBwcm92aWRlciByb3V0aW5nXG4gICAgc3dpdGNoIChjb25maWcucHJvdmlkZXIpIHtcbiAgICAgIGNhc2UgJ29sbGFtYSc6IHsgLy8gVXNlIGJsb2NrIHNjb3BlIGZvciBpbXBvcnRzXG4gICAgICAgIGNvbnN0IHsgb2xsYW1hUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb2xsYW1hJyk7XG4gICAgICAgIHByb3ZpZGVyTW9kdWxlID0gb2xsYW1hUHJvdmlkZXI7XG4gICAgICAgIGJyZWFrOyAvLyBFeGl0IHN3aXRjaFxuICAgICAgfVxuICAgICAgY2FzZSAnb3BlbnJvdXRlcic6IHtcbiAgICAgICAgY29uc3QgeyBvcGVuUm91dGVyUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb3BlbnJvdXRlcicpO1xuICAgICAgICBwcm92aWRlck1vZHVsZSA9IG9wZW5Sb3V0ZXJQcm92aWRlcjtcbiAgICAgICAgYnJlYWs7IC8vIEV4aXQgc3dpdGNoXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gVW5zdXBwb3J0ZWQgcHJvdmlkZXIgZm91bmQgaW4gY29uZmlnXCIpO1xuICAgICAgICBzZW5kQ2h1bmtDYWxsYmFjayh7IHN0YXR1czogJ2Vycm9yJywgZXJyb3I6IFwiVW5zdXBwb3J0ZWQgTExNIHByb3ZpZGVyXCIgfSk7XG4gICAgICAgIHJldHVybjsgLy8gRXhpdCBmdW5jdGlvblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIHByb3ZpZGVyJ3MgbWV0aG9kIChwcm92aWRlck1vZHVsZSBpcyBndWFyYW50ZWVkIHRvIGJlIGFzc2lnbmVkKVxuICAgIGF3YWl0IHByb3ZpZGVyTW9kdWxlLnN0cmVhbUNoYXQoeyAuLi5yZXF1ZXN0LCBzZW5kQ2h1bms6IHNlbmRDaHVua0NhbGxiYWNrIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgY29uc29sZS5lcnJvcihgW2xsbVNlcnZpY2VdIEVycm9yIGR1cmluZyBjaGF0IHN0cmVhbSByb3V0aW5nIG9yIGV4ZWN1dGlvbjpgLCBlcnJvcik7XG4gICAgIHNlbmRDaHVua0NhbGxiYWNrKHsgc3RhdHVzOiAnZXJyb3InLCBlcnJvcjogYExMTSBTZXJ2aWNlIEVycm9yOiAke2Vycm9yLm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKX1gIH0pO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyBlbWJlZGRpbmdzIGZvciB0aGUgZ2l2ZW4gY29udGVudCB1c2luZyB0aGUgY29uZmlndXJlZCBwcm92aWRlci5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtYmVkZGluZ3MocmVxdWVzdDogRW1iZWRkaW5nUmVxdWVzdCk6IFByb21pc2U8RW1iZWRkaW5nUmVzcG9uc2U+IHtcbiAgIGNvbnN0IHsgY29uZmlnIH0gPSByZXF1ZXN0O1xuXG4gICBpZiAoIWNvbmZpZykge1xuICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBnZXRFbWJlZGRpbmdzIGNhbGxlZCB3aXRoIG51bGwgY29uZmlnLlwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTExNIGNvbmZpZ3VyYXRpb24gaXMgbWlzc2luZy4nKTtcbiAgIH1cblxuICAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBSb3V0aW5nIGVtYmVkZGluZ3MgcmVxdWVzdCBmb3IgcHJvdmlkZXI6ICR7Y29uZmlnLnByb3ZpZGVyfWApO1xuXG4gICB0cnkge1xuICAgICAgIGxldCBwcm92aWRlck1vZHVsZTogTExNRW1iZWRkaW5nUHJvdmlkZXI7XG5cbiAgICAgICAvLyBVc2Ugc3dpdGNoIHN0YXRlbWVudCBmb3IgcHJvdmlkZXIgcm91dGluZ1xuICAgICAgIHN3aXRjaCAoY29uZmlnLnByb3ZpZGVyKSB7XG4gICAgICAgICBjYXNlICdvbGxhbWEnOiB7XG4gICAgICAgICAgIGNvbnN0IHsgb2xsYW1hUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb2xsYW1hJyk7XG4gICAgICAgICAgIGlmICghKCdnZXRFbWJlZGRpbmdzJyBpbiBvbGxhbWFQcm92aWRlcikpIHRocm93IG5ldyBFcnJvcignT2xsYW1hIHByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgZ2V0RW1iZWRkaW5ncycpO1xuICAgICAgICAgICBwcm92aWRlck1vZHVsZSA9IG9sbGFtYVByb3ZpZGVyIGFzIExMTUVtYmVkZGluZ1Byb3ZpZGVyO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICAgICAgIGNhc2UgJ29wZW5yb3V0ZXInOlxuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29uZmlnLnByb3ZpZGVyfSBlbWJlZGRpbmdzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuYCk7XG4gICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gVW5zdXBwb3J0ZWQgcHJvdmlkZXIgZm9yIGVtYmVkZGluZ3NcIik7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIExMTSBwcm92aWRlciBmb3IgZW1iZWRkaW5nc1wiKTtcbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICAvLyBDYWxsIHRoZSBwcm92aWRlcidzIG1ldGhvZCAocHJvdmlkZXJNb2R1bGUgaXMgZ3VhcmFudGVlZCB0byBiZSBhc3NpZ25lZCBpZiBub3QgdGhyb3duKVxuICAgICAgIHJldHVybiBhd2FpdCBwcm92aWRlck1vZHVsZS5nZXRFbWJlZGRpbmdzKHJlcXVlc3QpO1xuXG4gICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlXSBFcnJvciBkdXJpbmcgZW1iZWRkaW5nIHJvdXRpbmcgb3IgZXhlY3V0aW9uOmAsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbWJlZGRpbmcgU2VydmljZSBFcnJvcjogJHtlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvcil9YCk7XG4gICB9XG59XG5cbi8vIFJlbW92ZSBvbGQgcHJvdmlkZXIgaW1wbGVtZW50YXRpb25zICIsImltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBvbk1lc3NhZ2UsIHNlbmRNZXNzYWdlLCB0eXBlIFByb3RvY29sTWFwLCBPbGxhbWFTdHJlYW1DaHVuayB9IGZyb20gJ34vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB7IGxvYWRVc2VyQ29uZmlnLCBzdHJlYW1DaGF0UmVzcG9uc2UgfSBmcm9tICcuLi9zcmMvc2VydmljZXMvbGxtU2VydmljZSc7IC8vIFVzZSByZWxhdGl2ZSBwYXRoIGZvciBMTE0gc2VydmljZSBpbXBvcnRcblxuY29uc29sZS5sb2coJ0JhY2tncm91bmQgc2NyaXB0IGxvYWRlZC4nKTtcblxuLy8gLS0tIE9mZnNjcmVlbiBEb2N1bWVudCBNYW5hZ2VtZW50IC0tLVxuY29uc3QgT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEggPSAnb2Zmc2NyZWVuLmh0bWwnOyAvLyBQYXRoIHRvIHlvdXIgb2Zmc2NyZWVuIGRvY3VtZW50IEhUTUxcblxuYXN5bmMgZnVuY3Rpb24gaGFzT2Zmc2NyZWVuRG9jdW1lbnQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIC8vIENoZWNrIGlmIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IG9wZW4uXG4gIC8vIEB0cy1pZ25vcmUgLSBjbGllbnRzIGlzIGF2YWlsYWJsZSBidXQgbWF5IHNob3cgVFMgZXJyb3JcbiAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGJyb3dzZXIucnVudGltZS5nZXRDb250ZXh0cyh7XG4gICAgLy8gQHRzLWlnbm9yZSAtIENvbnRleHRUeXBlIG1pZ2h0IGJlIG1pc3NpbmcgT0ZGU0NSRUVOX0RPQ1VNRU5UIGluIG9sZGVyIHR5cGVzXG4gICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCddLFxuICAgIGRvY3VtZW50VXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpXSBcbiAgfSk7XG4gIHJldHVybiBleGlzdGluZ0NvbnRleHRzLmxlbmd0aCA+IDA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQoKSB7XG4gIGlmICghKGF3YWl0IGhhc09mZnNjcmVlbkRvY3VtZW50KCkpKSB7XG4gICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBDcmVhdGluZyBvZmZzY3JlZW4gZG9jdW1lbnQuLi4nKTtcbiAgICAvLyBAdHMtaWdub3JlIC0gYnJvd3Nlci5vZmZzY3JlZW4gbWF5IG5vdCBiZSBpbiBvbGRlciB0eXBlc1xuICAgIGF3YWl0IGJyb3dzZXIub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgIHVybDogT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgsIFxuICAgICAgLy8gVXNlIGEgdmFsaWQgcmVhc29uIC0gTE9DQUxfU1RPUkFHRSBpcyBjb21tb24gaWYgbm90IHVzaW5nIG90aGVycyBsaWtlIEFVRElPX1BMQVlCQUNLXG4gICAgICAvLyBAdHMtaWdub3JlIC0gYnJvd3Nlci5vZmZzY3JlZW4gbWF5IG5vdCBiZSBpbiBvbGRlciB0eXBlc1xuICAgICAgcmVhc29uczogW2Jyb3dzZXIub2Zmc2NyZWVuLlJlYXNvbi5MT0NBTF9TVE9SQUdFXSwgXG4gICAgICBqdXN0aWZpY2F0aW9uOiAnRGF0YWJhc2Ugb3BlcmF0aW9ucyB1c2luZyBQR2xpdGUnLFxuICAgIH0pO1xuICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIE9mZnNjcmVlbiBkb2N1bWVudCBjcmVhdGVkLicpO1xuICB9IGVsc2Uge1xuICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIE9mZnNjcmVlbiBkb2N1bWVudCBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgfVxufVxuXG4vLyBTZXR1cCBvZmZzY3JlZW4gZG9jdW1lbnQgb24gYmFja2dyb3VuZCBzY3JpcHQgc3RhcnR1cFxuLy8gTU9WRUQgdGhlIGRpcmVjdCBjYWxsIGZyb20gaGVyZSB0byBicm93c2VyLnJ1bnRpbWUub25TdGFydHVwIGxpc3RlbmVyIGJlbG93XG4vLyBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFRlbXBvcmFyaWx5IHNraXBwZWQgaW5pdGlhbCBvZmZzY3JlZW4gc2V0dXAgY2FsbCBmb3IgdGVzdGluZy4nKTtcblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGRhdGEgZXhwZWN0ZWQgZnJvbSB0aGUgY2xpcHBlciBwb3B1cFxuLypcbmludGVyZmFjZSBDbGlwRGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nW107IC8vIEFkZCBvcHRpb25hbCB0YWdzIGFycmF5XG59XG4qL1xuXG4vLyBEZWZpbmUgdGhlIHN0cnVjdHVyZSBmb3IgT2xsYW1hIEFQSSByZXNwb25zZVxuLypcbmludGVyZmFjZSBPbGxhbWFUYWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIC8vIG90aGVyIHByb3BlcnRpZXMgbGlrZSBtb2RpZmllZF9hdCwgc2l6ZSwgZGlnZXN0IGV0Yy4gYXJlIGlnbm9yZWQgZm9yIG5vd1xufVxuXG5pbnRlcmZhY2UgT2xsYW1hVGFnc1Jlc3BvbnNlIHtcbiAgbW9kZWxzOiBPbGxhbWFUYWdbXTtcbn1cbiovXG5cbi8vIGRlZmluZUJhY2tncm91bmQgaXMgZ2xvYmFsbHkgYXZhaWxhYmxlIGhlcmUgdGhhbmtzIHRvIFdYVFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQmFja2dyb3VuZCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdXWFQgQmFja2dyb3VuZCBkZWZpbmVkJyk7XG5cbiAgLy8gLS0tIFNldHVwIHRoZSBjZW50cmFsIG1lc3NhZ2UgbGlzdGVuZXIgLS0tIFxuICAvLyBUaGlzIGFsbG93cyBgb25NZXNzYWdlYCBjYWxscyBiZWxvdyB0byB3b3JrLlxuICAvLyBzZXR1cENlbnRyYWxMaXN0ZW5lcigpO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgY2xpcHBpbmcgcmVxdWVzdHMgZnJvbSBwb3B1cCAtLS1cbiAgb25NZXNzYWdlKCdjbGlwUGFnZScsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0JhY2tncm91bmQ6IFJlY2VpdmVkIGNsaXBQYWdlIG1lc3NhZ2UnLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgdGl0bGUsIHVybCAvKiwgdGFncyAqLyB9ID0gbWVzc2FnZS5kYXRhOyAvLyBEZXN0cnVjdHVyZSBpbXBvcnRlZCBDbGlwRGF0YVxuXG4gICAgY29uc3Qgc3FsID0gYElOU0VSVCBJTlRPIGNsaXBzICh0aXRsZSwgdXJsKSBWQUxVRVMgKD8sID8pO2A7XG4gICAgY29uc3QgcGFyYW1zID0gW3RpdGxlLCB1cmxdOyBcblxuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBTZW5kaW5nIGRiRXhlYyBtZXNzYWdlIHRvIG9mZnNjcmVlbiBmb3IgY2xpcHBpbmcuLi4nKTtcbiAgICB0cnkge1xuICAgICAgLy8gVXNlIHRoZSBORVcgZGJFeGVjIG1lc3NhZ2UgdHlwZVxuICAgICAgY29uc3QgZGJSZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZSgnZGJFeGVjJywgeyBzcWw6IHNxbCwgcGFyYW1zOiBwYXJhbXMgfSk7XG4gICAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogT2Zmc2NyZWVuIGRiRXhlYyByZXNwb25zZTonLCBkYlJlc3VsdCk7XG4gICAgICBcbiAgICAgIC8vIE5vdGlmeSBzdWNjZXNzIChubyBuZWVkIHRvIGNoZWNrIHN0YXR1cyBpbiByZXNwb25zZSwgZXJyb3Igd291bGQgdGhyb3cpXG4gICAgICBjb25zb2xlLmxvZyhgQmFja2dyb3VuZDogU3VjY2Vzc2Z1bGx5IGNsaXBwZWQgJHt1cmx9YCk7XG4gICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKGBjbGlwLXN1Y2Nlc3MtJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLCBcbiAgICAgICAgdGl0bGU6ICdCb29rbWFyayBTYXZlZCcsXG4gICAgICAgIG1lc3NhZ2U6IGBTYXZlZDogJHt0aXRsZX1gLFxuICAgICAgICBwcmlvcml0eTogMFxuICAgICAgfSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gRXJyb3JzIGZyb20gc2VuZE1lc3NhZ2Ugb3IgdGhlIG9mZnNjcmVlbiBoYW5kbGVyIHdpbGwgYmUgY2F1Z2h0IGhlcmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhY2tncm91bmQ6IEVycm9yIGV4ZWN1dGluZyBjbGlwIHZpYSBvZmZzY3JlZW46JywgZXJyb3IpO1xuICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoYGNsaXAtZXJyb3ItJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxuICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJy9pY29uLzEyOC5wbmcnKSxcbiAgICAgICAgICB0aXRsZTogJ0Jvb2ttYXJrIFNhdmluZyBGYWlsZWQnLCBcbiAgICAgICAgICBtZXNzYWdlOiBgQ291bGQgbm90IHNhdmUgJHt0aXRsZX0uIEVycm9yOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKX1gLFxuICAgICAgICAgIHByaW9yaXR5OiAxXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIHRvIGZldGNoIE9sbGFtYSBtb2RlbHMgLS0tXG4gIG9uTWVzc2FnZSgnZ2V0T2xsYW1hTW9kZWxzJywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogUmVjZWl2ZWQgZ2V0T2xsYW1hTW9kZWxzIG1lc3NhZ2UnLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgZW5kcG9pbnQgfSA9IG1lc3NhZ2UuZGF0YTtcbiAgICBpZiAoIWVuZHBvaW50KSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdPbGxhbWEgZW5kcG9pbnQgbm90IHByb3ZpZGVkLicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtlbmRwb2ludH0vYXBpL3RhZ3NgKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggT2xsYW1hIG1vZGVsczogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtaW5nIE9sbGFtYVRhZ3NSZXNwb25zZSBpcyBkZWZpbmVkIGVsc2V3aGVyZSBvciBpbXBsaWNpdGx5IHR5cGVkXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyBcbiAgICAgIGNvbnN0IG1vZGVscyA9IGRhdGEubW9kZWxzLm1hcCgodGFnOiB7IG5hbWU6IHN0cmluZyB9KSA9PiAoeyBpZDogdGFnLm5hbWUsIG5hbWU6IHRhZy5uYW1lIH0pKTtcbiAgICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBTdWNjZXNzZnVsbHkgZmV0Y2hlZCBPbGxhbWEgbW9kZWxzOicsIG1vZGVscyk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtb2RlbHM6IG1vZGVscyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHsgLy8gQ2F0Y2ggYW55IHR5cGUgb2YgZXJyb3JcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhY2tncm91bmQ6IEVycm9yIGZldGNoaW5nIE9sbGFtYSBtb2RlbHM6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yIGZldGNoaW5nIG1vZGVscy4nIH07XG4gICAgfVxuICB9KTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIENoYXQgUmVxdWVzdHMgLS0tXG4gIG9uTWVzc2FnZSgnb2xsYW1hQ2hhdFJlcXVlc3QnLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBSZWNlaXZlZCBvbGxhbWFDaGF0UmVxdWVzdCcsIG1lc3NhZ2UuZGF0YSk7XG4gICAgY29uc3QgeyBwcm9tcHQsIGhpc3RvcnkgfSA9IG1lc3NhZ2UuZGF0YTtcblxuICAgIC8vIExvYWQgY29uZmlnIGZpcnN0XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZFVzZXJDb25maWcoKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgY29uc29sZS5lcnJvcihcIkJhY2tncm91bmQ6IENhbm5vdCBwcm9jZXNzIGNoYXQgcmVxdWVzdCwgdXNlciBjb25maWcgbm90IGZvdW5kLlwiKTtcbiAgICAgICBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCB7XG4gICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICBlcnJvcjogXCJMTE0gY29uZmlndXJhdGlvbiBub3QgZm91bmQuIFBsZWFzZSBzZXQgaXQgdXAgaW4gdGhlIHNldHRpbmdzLlwiXG4gICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgY29uZmlnIGVycm9yIG1lc3NhZ2U6XCIsIGUpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkxMTSBjb25maWd1cmF0aW9uIG5vdCBmb3VuZC5cIik7XG4gICAgfVxuIFxuICAgIC8vIFBhc3MgdG8gdGhlIGxsbVNlcnZpY2UgdG8gaGFuZGxlIHByb3ZpZGVyIGxvZ2ljIGFuZCBzdHJlYW1pbmdcbiAgICBzdHJlYW1DaGF0UmVzcG9uc2UoeyBwcm9tcHQsIGhpc3Rvcnk6IGhpc3RvcnkgfHwgW10sIGNvbmZpZyB9KTsgXG4gICAgY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kOiBzdHJlYW1DaGF0UmVzcG9uc2UgaW5pdGlhdGVkIChzdHJlYW1pbmcgcnVucyBpbiBiYWNrZ3JvdW5kKS5cIik7XG4gICAgXG4gICAgLy8gUmV0dXJuIHN1Y2Nlc3MgYWNrbm93bGVkZ2VtZW50XG4gICAgcmV0dXJuIHsgcmVjZWl2ZWQ6IHRydWUgfTtcbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBDaGF0IEhpc3RvcnkgUmVxdWVzdHMgLS0tXG5cbiAgLy8gLS0tIEFkZCBvdGhlciBiYWNrZ3JvdW5kIGxpc3RlbmVycyBoZXJlIChlLmcuLCBhbGFybXMsIG90aGVyIG1lc3NhZ2VzKSAtLS1cblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGluc3RhbGwvdXBkYXRlIGV2ZW50cyAtLS1cbiAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jIChkZXRhaWxzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0V4dGVuc2lvbiBpbnN0YWxsZWQ6JywgZGV0YWlscyk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgcmVhc29uIGZvciB0aGUgZXZlbnQgaXMgdGhlIGluaXRpYWwgaW5zdGFsbGF0aW9uXG4gICAgaWYgKGRldGFpbHMucmVhc29uID09PSAnaW5zdGFsbCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQZXJmb3JtaW5nIGZpcnN0LXRpbWUgc2V0dXAuLi4nKTtcbiAgICAgIC8vIE9ubHkgbmVlZCB0byBlbnN1cmUgb2Zmc2NyZWVuIGRvY3VtZW50IGV4aXN0cy4gU2NoZW1hIGlzIGluaXRpYWxpemVkIHdpdGhpbiBvZmZzY3JlZW4udHMuXG4gICAgICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gSW5pdGlhbCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50IGZhaWxlZCBvbiBpbnN0YWxsOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb25zdHJ1Y3QgdGhlIFVSTCBmb3IgdGhlIG9uYm9hcmRpbmcgcGFnZVxuICAgICAgY29uc3QgdXJsID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnb25ib2FyZGluZy5odG1sJyk7XG5cbiAgICAgIC8vIE9wZW4gdGhlIG9uYm9hcmRpbmcgcGFnZSBpbiBhIG5ldyB0YWJcbiAgICAgIGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBPcGVuZWQgb25ib2FyZGluZyBwYWdlOiAke3VybH1gKTtcbiAgICB9IGVsc2UgaWYgKGRldGFpbHMucmVhc29uID09PSAndXBkYXRlJykge1xuICAgICAgLy8gT3B0aW9uYWw6IEhhbmRsZSB1cGRhdGVzLCBlLmcuLCBzaG93IG5vdGlmaWNhdGlvbnMgb3IgbWlncmF0ZSBkYXRhXG4gICAgICBjb25zb2xlLmxvZyhgW0JhY2tncm91bmRdIFVwZGF0ZWQgZnJvbSAke2RldGFpbHMucHJldmlvdXNWZXJzaW9ufSB0byAke2Jyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb259YCk7XG4gICAgICAvLyBVbmNvbW1lbnQgdG8gb3BlbiBzZXR0aW5ncyBvbiB1cGRhdGU6XG4gICAgICAvLyB0cnkge1xuICAgICAgLy8gICBhd2FpdCBicm93c2VyLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XG4gICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBFcnJvciBvcGVuaW5nIHNldHRpbmdzIHBhZ2Ugb24gdXBkYXRlOicsIGVycm9yKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgYnJvd3NlciBzdGFydHVwIC0tLVxuICAvLyBVc2Ugb25TdGFydHVwIHRvIGVuc3VyZSB0aGUgb2Zmc2NyZWVuIGRvY3VtZW50IGlzIHJlYWR5IHdoZW4gdGhlIGJyb3dzZXIgc3RhcnRzXG4gIGJyb3dzZXIucnVudGltZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gQnJvd3NlciBzdGFydHVwIGRldGVjdGVkLiBTZXR0aW5nIHVwIG9mZnNjcmVlbiBkb2N1bWVudC4uLicpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCk7XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIE9mZnNjcmVlbiBkb2N1bWVudCBzZXR1cCBjb21wbGV0ZSBvbiBzdGFydHVwLicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCBmYWlsZWQgb24gc3RhcnR1cDonLCBlcnJvcik7XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZygnQmFja2dyb3VuZCBzY3JpcHQgc2V0dXAgY29tcGxldGUuJyk7XG59KTsgIiwiLy8gI3JlZ2lvbiBzbmlwcGV0XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZT8uaWRcbiAgPyBnbG9iYWxUaGlzLmJyb3dzZXJcbiAgOiBnbG9iYWxUaGlzLmNocm9tZTtcbi8vICNlbmRyZWdpb24gc25pcHBldFxuIiwiaW1wb3J0IHsgYnJvd3NlciBhcyBfYnJvd3NlciB9IGZyb20gXCJAd3h0LWRldi9icm93c2VyXCI7XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IF9icm93c2VyO1xuZXhwb3J0IHt9O1xuIiwiLy8gc3JjL2luZGV4LnRzXG52YXIgX01hdGNoUGF0dGVybiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IobWF0Y2hQYXR0ZXJuKSB7XG4gICAgaWYgKG1hdGNoUGF0dGVybiA9PT0gXCI8YWxsX3VybHM+XCIpIHtcbiAgICAgIHRoaXMuaXNBbGxVcmxzID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gWy4uLl9NYXRjaFBhdHRlcm4uUFJPVE9DT0xTXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IFwiKlwiO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gXCIqXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IC8oLiopOlxcL1xcLyguKj8pKFxcLy4qKS8uZXhlYyhtYXRjaFBhdHRlcm4pO1xuICAgICAgaWYgKGdyb3VwcyA9PSBudWxsKVxuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIFwiSW5jb3JyZWN0IGZvcm1hdFwiKTtcbiAgICAgIGNvbnN0IFtfLCBwcm90b2NvbCwgaG9zdG5hbWUsIHBhdGhuYW1lXSA9IGdyb3VwcztcbiAgICAgIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCk7XG4gICAgICB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpO1xuICAgICAgdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gcHJvdG9jb2wgPT09IFwiKlwiID8gW1wiaHR0cFwiLCBcImh0dHBzXCJdIDogW3Byb3RvY29sXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IGhvc3RuYW1lO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gcGF0aG5hbWU7XG4gICAgfVxuICB9XG4gIGluY2x1ZGVzKHVybCkge1xuICAgIGlmICh0aGlzLmlzQWxsVXJscylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHUgPSB0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiID8gbmV3IFVSTCh1cmwpIDogdXJsIGluc3RhbmNlb2YgTG9jYXRpb24gPyBuZXcgVVJMKHVybC5ocmVmKSA6IHVybDtcbiAgICByZXR1cm4gISF0aGlzLnByb3RvY29sTWF0Y2hlcy5maW5kKChwcm90b2NvbCkgPT4ge1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHNcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwc01hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImZpbGVcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaWxlTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiZnRwXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzRnRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwidXJuXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzVXJuTWF0Y2godSk7XG4gICAgfSk7XG4gIH1cbiAgaXNIdHRwTWF0Y2godXJsKSB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybCk7XG4gIH1cbiAgaXNIdHRwc01hdGNoKHVybCkge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgJiYgdGhpcy5pc0hvc3RQYXRoTWF0Y2godXJsKTtcbiAgfVxuICBpc0hvc3RQYXRoTWF0Y2godXJsKSB7XG4gICAgaWYgKCF0aGlzLmhvc3RuYW1lTWF0Y2ggfHwgIXRoaXMucGF0aG5hbWVNYXRjaClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBob3N0bmFtZU1hdGNoUmVnZXhzID0gW1xuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoKSxcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaC5yZXBsYWNlKC9eXFwqXFwuLywgXCJcIikpXG4gICAgXTtcbiAgICBjb25zdCBwYXRobmFtZU1hdGNoUmVnZXggPSB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLnBhdGhuYW1lTWF0Y2gpO1xuICAgIHJldHVybiAhIWhvc3RuYW1lTWF0Y2hSZWdleHMuZmluZCgocmVnZXgpID0+IHJlZ2V4LnRlc3QodXJsLmhvc3RuYW1lKSkgJiYgcGF0aG5hbWVNYXRjaFJlZ2V4LnRlc3QodXJsLnBhdGhuYW1lKTtcbiAgfVxuICBpc0ZpbGVNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZmlsZTovLyBwYXR0ZXJuIG1hdGNoaW5nLiBPcGVuIGEgUFIgdG8gYWRkIHN1cHBvcnRcIik7XG4gIH1cbiAgaXNGdHBNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZnRwOi8vIHBhdHRlcm4gbWF0Y2hpbmcuIE9wZW4gYSBQUiB0byBhZGQgc3VwcG9ydFwiKTtcbiAgfVxuICBpc1Vybk1hdGNoKHVybCkge1xuICAgIHRocm93IEVycm9yKFwiTm90IGltcGxlbWVudGVkOiB1cm46Ly8gcGF0dGVybiBtYXRjaGluZy4gT3BlbiBhIFBSIHRvIGFkZCBzdXBwb3J0XCIpO1xuICB9XG4gIGNvbnZlcnRQYXR0ZXJuVG9SZWdleChwYXR0ZXJuKSB7XG4gICAgY29uc3QgZXNjYXBlZCA9IHRoaXMuZXNjYXBlRm9yUmVnZXgocGF0dGVybik7XG4gICAgY29uc3Qgc3RhcnNSZXBsYWNlZCA9IGVzY2FwZWQucmVwbGFjZSgvXFxcXFxcKi9nLCBcIi4qXCIpO1xuICAgIHJldHVybiBSZWdFeHAoYF4ke3N0YXJzUmVwbGFjZWR9JGApO1xuICB9XG4gIGVzY2FwZUZvclJlZ2V4KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xuICB9XG59O1xudmFyIE1hdGNoUGF0dGVybiA9IF9NYXRjaFBhdHRlcm47XG5NYXRjaFBhdHRlcm4uUFJPVE9DT0xTID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiZmlsZVwiLCBcImZ0cFwiLCBcInVyblwiXTtcbnZhciBJbnZhbGlkTWF0Y2hQYXR0ZXJuID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoUGF0dGVybiwgcmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgbWF0Y2ggcGF0dGVybiBcIiR7bWF0Y2hQYXR0ZXJufVwiOiAke3JlYXNvbn1gKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCkge1xuICBpZiAoIU1hdGNoUGF0dGVybi5QUk9UT0NPTFMuaW5jbHVkZXMocHJvdG9jb2wpICYmIHByb3RvY29sICE9PSBcIipcIilcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgIG1hdGNoUGF0dGVybixcbiAgICAgIGAke3Byb3RvY29sfSBub3QgYSB2YWxpZCBwcm90b2NvbCAoJHtNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmpvaW4oXCIsIFwiKX0pYFxuICAgICk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpIHtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiOlwiKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIGBIb3N0bmFtZSBjYW5ub3QgaW5jbHVkZSBhIHBvcnRgKTtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiKlwiKSAmJiBob3N0bmFtZS5sZW5ndGggPiAxICYmICFob3N0bmFtZS5zdGFydHNXaXRoKFwiKi5cIikpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICBtYXRjaFBhdHRlcm4sXG4gICAgICBgSWYgdXNpbmcgYSB3aWxkY2FyZCAoKiksIGl0IG11c3QgZ28gYXQgdGhlIHN0YXJ0IG9mIHRoZSBob3N0bmFtZWBcbiAgICApO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIHJldHVybjtcbn1cbmV4cG9ydCB7XG4gIEludmFsaWRNYXRjaFBhdHRlcm4sXG4gIE1hdGNoUGF0dGVyblxufTtcbiIsImltcG9ydCB7IHNlbmRNZXNzYWdlLCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgT2xsYW1hQ29uZmlnLCBFbWJlZGRpbmdSZXNwb25zZSB9IGZyb20gJy4uL2xsbVNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QsIExMTUVtYmVkZGluZ1Byb3ZpZGVyLCBQcm92aWRlckVtYmVkZGluZ1JlcXVlc3QgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gLS0tIE9sbGFtYSBDaGF0IEltcGxlbWVudGF0aW9uIC0tLSBcblxuYXN5bmMgZnVuY3Rpb24gc3RyZWFtT2xsYW1hQ2hhdChyZXF1ZXN0OiBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyBwcm9tcHQsIGhpc3RvcnkgPSBbXSwgY29uZmlnLCBzZW5kQ2h1bmsgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3Qgb2xsYW1hQ29uZmlnID0gY29uZmlnIGFzIE9sbGFtYUNvbmZpZzsgLy8gVHlwZSBhc3NlcnRpb25cblxuICAgIGNvbnN0IG1vZGVsID0gb2xsYW1hQ29uZmlnLmNoYXRNb2RlbDtcbiAgICBjb25zdCBlbmRwb2ludCA9IG9sbGFtYUNvbmZpZy5lbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpOyAvLyBFbnN1cmUgbm8gdHJhaWxpbmcgc2xhc2hcbiAgICBjb25zdCBhcGlVcmwgPSBgJHtlbmRwb2ludH0vYXBpL2NoYXRgOyAvLyBVc2UgT2xsYW1hIEFQSSBlbmRwb2ludFxuXG4gICAgY29uc29sZS5sb2coYFtvbGxhbWFQcm92aWRlcl0gU2VuZGluZyBjaGF0IHJlcXVlc3QgdG8gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgbWVzc2FnZXM6IFsuLi5oaXN0b3J5LCB7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgICAgICAgICAgc3RyZWFtOiB0cnVlXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vayB8fCAhcmVzcG9uc2UuYm9keSkge1xuICAgICAgICBjb25zdCBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJGYWlsZWQgdG8gcmVhZCBlcnJvciBib2R5XCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9sbGFtYSBBUEkgZXJyb3IgKCR7cmVzcG9uc2Uuc3RhdHVzfSk6ICR7ZXJyb3JCb2R5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBidWZmZXIgPSAnJztcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmIChkb25lKSBicmVhaztcblxuICAgICAgICBidWZmZXIgKz0gZGVjb2Rlci5kZWNvZGUodmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBsaW5lcyA9IGJ1ZmZlci5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGJ1ZmZlciA9IGxpbmVzLnBvcCgpIHx8ICcnOyAvLyBLZWVwIGluY29tcGxldGUgbGluZVxuXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgICAgaWYgKGxpbmUudHJpbSgpID09PSAnJykgY29udGludWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gSlNPTi5wYXJzZShsaW5lKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VDaHVuazogT2xsYW1hU3RyZWFtQ2h1bmsgfCBudWxsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmIChjaHVuay5tZXNzYWdlPy5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQ2h1bmsgPSB7IHN0YXR1czogJ2NodW5rJywgY29udGVudDogY2h1bmsubWVzc2FnZS5jb250ZW50IH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaHVuay5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCBPbGxhbWEncyBkb25lIHN0cnVjdHVyZVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUNodW5rID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZG9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiBjaHVuay5tb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBjaHVuay5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsX2R1cmF0aW9uOiBjaHVuay50b3RhbF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkX2R1cmF0aW9uOiBjaHVuay5sb2FkX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdF9ldmFsX2NvdW50OiBjaHVuay5wcm9tcHRfZXZhbF9jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRfZXZhbF9kdXJhdGlvbjogY2h1bmsucHJvbXB0X2V2YWxfZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbF9jb3VudDogY2h1bmsuZXZhbF9jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsX2R1cmF0aW9uOiBjaHVuay5ldmFsX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltvbGxhbWFQcm92aWRlcl0gU3RyZWFtIGZpbmlzaGVkLlwiLCByZXNwb25zZUNodW5rLnN0YXRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VDaHVuaykge1xuICAgICAgICAgICAgICAgICAgIHNlbmRDaHVuayhyZXNwb25zZUNodW5rKTsgLy8gVXNlIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2xsYW1hUHJvdmlkZXJdIEZhaWxlZCB0byBwYXJzZSBPbGxhbWEgc3RyZWFtIGNodW5rOlwiLCBsaW5lLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAgaWYgKGJ1ZmZlci50cmltKCkpIHtcbiAgICAgICAgIGNvbnNvbGUud2FybihcIltvbGxhbWFQcm92aWRlcl0gU3RyZWFtIGVuZGVkIHdpdGggdW5wcm9jZXNzZWQgYnVmZmVyOlwiLCBidWZmZXIpO1xuICAgICB9XG59XG5cbi8vIC0tLSBPbGxhbWEgRW1iZWRkaW5nIEltcGxlbWVudGF0aW9uIC0tLSBcblxuYXN5bmMgZnVuY3Rpb24gZ2V0T2xsYW1hRW1iZWRkaW5ncyhyZXF1ZXN0OiBQcm92aWRlckVtYmVkZGluZ1JlcXVlc3QpOiBQcm9taXNlPEVtYmVkZGluZ1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgeyBjb250ZW50LCBjb25maWcgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3Qgb2xsYW1hQ29uZmlnID0gY29uZmlnIGFzIE9sbGFtYUNvbmZpZztcblxuICAgIGlmICghb2xsYW1hQ29uZmlnLmVtYmVkZGluZ01vZGVsKSB7IC8vIERvdWJsZSBjaGVjaywgdGhvdWdoIHNlcnZpY2UgbGF5ZXIgc2hvdWxkIGFsc28gY2hlY2tcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9sbGFtYSBjb25maWd1cmF0aW9uIG1pc3NpbmcgcmVxdWlyZWQgZW1iZWRkaW5nTW9kZWwuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGVsID0gb2xsYW1hQ29uZmlnLmVtYmVkZGluZ01vZGVsO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gb2xsYW1hQ29uZmlnLmVuZHBvaW50LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgY29uc3QgYXBpVXJsID0gYCR7ZW5kcG9pbnR9L2FwaS9lbWJlZGRpbmdzYDtcblxuICAgIGNvbnNvbGUubG9nKGBbb2xsYW1hUHJvdmlkZXJdIFJlcXVlc3RpbmcgZW1iZWRkaW5ncyBmcm9tICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2xsYW1hIGVtYmVkZGluZyBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBzaW5nbGUgc3RyaW5nIGlucHV0IGluIHRoaXMgaW1wbGVtZW50YXRpb24uXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgcHJvbXB0OiBjb250ZW50IFxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPbGxhbWEgRW1iZWRkaW5ncyBBUEkgZXJyb3IgKCR7cmVzcG9uc2Uuc3RhdHVzfSk6ICR7ZXJyb3JCb2R5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmICghcmVzdWx0LmVtYmVkZGluZyB8fCAhQXJyYXkuaXNBcnJheShyZXN1bHQuZW1iZWRkaW5nKSkge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByZXNwb25zZSBmb3JtYXQgZnJvbSBPbGxhbWEgRW1iZWRkaW5ncyBBUEkuICdlbWJlZGRpbmcnIGFycmF5IG5vdCBmb3VuZC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1iZWRkaW5nczogW3Jlc3VsdC5lbWJlZGRpbmddIFxuICAgIH07XG59XG5cbi8vIEV4cG9ydCB0aGUgcHJvdmlkZXIgb2JqZWN0IGFkaGVyaW5nIHRvIHRoZSBpbnRlcmZhY2VzXG5leHBvcnQgY29uc3Qgb2xsYW1hUHJvdmlkZXI6IExMTUNoYXRQcm92aWRlciAmIExMTUVtYmVkZGluZ1Byb3ZpZGVyID0ge1xuICAgIHN0cmVhbUNoYXQ6IHN0cmVhbU9sbGFtYUNoYXQsXG4gICAgZ2V0RW1iZWRkaW5nczogZ2V0T2xsYW1hRW1iZWRkaW5ncyxcbn07ICIsImltcG9ydCB7IHNlbmRNZXNzYWdlLCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgT3BlblJvdXRlckNvbmZpZyB9IGZyb20gJy4uL2xsbVNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gLS0tIE9wZW5Sb3V0ZXIgQ2hhdCBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbU9wZW5Sb3V0ZXJDaGF0KHJlcXVlc3Q6IFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSA9IFtdLCBjb25maWcsIHNlbmRDaHVuayB9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBvcGVuUm91dGVyQ29uZmlnID0gY29uZmlnIGFzIE9wZW5Sb3V0ZXJDb25maWc7IC8vIFR5cGUgYXNzZXJ0aW9uXG5cbiAgICBjb25zdCBtb2RlbCA9IG9wZW5Sb3V0ZXJDb25maWcuY2hhdE1vZGVsO1xuICAgIGNvbnN0IGFwaUtleSA9IG9wZW5Sb3V0ZXJDb25maWcuYXBpS2V5O1xuICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9vcGVucm91dGVyLmFpL2FwaS92MS9jaGF0L2NvbXBsZXRpb25zXCI7XG5cbiAgICBjb25zb2xlLmxvZyhgW29wZW5Sb3V0ZXJQcm92aWRlcl0gU2VuZGluZyBjaGF0IHJlcXVlc3QgdG8gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthcGlLZXl9YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAvLyBUT0RPOiBDb25zaWRlciBhZGRpbmcgdGhlc2UgaGVhZGVycyBpZiBkZXNpcmVkXG4gICAgICAgICAgICAvLyAnSFRUUC1SZWZlcmVyJzogJycsIC8vIFlPVVJfU0lURV9VUkxcbiAgICAgICAgICAgIC8vICdYLVRpdGxlJzogJycsIC8vIFlPVVJfU0lURV9OQU1FXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uaGlzdG9yeSwgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8ICFyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIkZhaWxlZCB0byByZWFkIGVycm9yIGJvZHlcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlblJvdXRlciBBUEkgZXJyb3IgKCR7cmVzcG9uc2Uuc3RhdHVzfSk6ICR7ZXJyb3JCb2R5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBidWZmZXIgPSAnJztcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgLy8gT3BlblJvdXRlciB1c2VzIFNlcnZlci1TZW50IEV2ZW50cyAoU1NFKSBmb3JtYXRcbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lOiByZWFkZXJEb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgZG9uZSA9IHJlYWRlckRvbmU7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ2RhdGE6ICcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUNvbnRlbnQgPSBsaW5lLnN1YnN0cmluZyg2KS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFDb250ZW50ID09PSAnW0RPTkVdJykge1xuICAgICAgICAgICAgICAgICAgICAgc2VuZENodW5rKHsgc3RhdHVzOiAnZG9uZScsIHN0YXRzOiB7fSB9KTsgLy8gU2VuZCBzaW1wbGUgZG9uZSBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltvcGVuUm91dGVyUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgLy8gRW5zdXJlIG91dGVyIGxvb3AgdGVybWluYXRlc1xuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIEV4aXQgaW5uZXIgbG9vcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBKU09OLnBhcnNlKGRhdGFDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNodW5rLmNob2ljZXM/LlswXT8uZGVsdGE/LmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsoeyBzdGF0dXM6ICdjaHVuaycsIGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogRXh0cmFjdCB1c2FnZSBzdGF0cyBpZiBuZWVkZWQ/XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltvcGVuUm91dGVyUHJvdmlkZXJdIEZhaWxlZCB0byBwYXJzZSBzdHJlYW0gY2h1bms6XCIsIGRhdGFDb250ZW50LCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJ1ZmZlci50cmltKCkpIHsgXG4gICAgICAgIGNvbnNvbGUud2FybihcIltvcGVuUm91dGVyUHJvdmlkZXJdIFN0cmVhbSBlbmRlZCB3aXRoIHVucHJvY2Vzc2VkIGJ1ZmZlcjpcIiwgYnVmZmVyKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydCB0aGUgcHJvdmlkZXIgb2JqZWN0IGFkaGVyaW5nIHRvIHRoZSBpbnRlcmZhY2VcbmV4cG9ydCBjb25zdCBvcGVuUm91dGVyUHJvdmlkZXI6IExMTUNoYXRQcm92aWRlciA9IHtcbiAgICBzdHJlYW1DaGF0OiBzdHJlYW1PcGVuUm91dGVyQ2hhdCxcbiAgICAvLyBObyBnZXRFbWJlZGRpbmdzIGZvciBPcGVuUm91dGVyIGluIHRoaXMgZXhhbXBsZSB5ZXRcbn07ICJdLCJuYW1lcyI6WyJ0aGlzIiwibW9kdWxlIiwicHJveHlUYXJnZXQiLCJ2YWx1ZSIsIm9uTWVzc2FnZSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJFcnJvciIsIl9fZGVmUHJvcCIsIl9fZGVmTm9ybWFsUHJvcCIsIl9iIiwiX2IyIiwiX2EiLCJPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCIsImJyb3dzZXIiLCJvbGxhbWFQcm92aWRlciIsIm9wZW5Sb3V0ZXJQcm92aWRlciIsIl9icm93c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxXQUFTLGlCQUFpQixLQUFLO0FBQ3BDLFFBQUksT0FBTyxRQUFRLE9BQU8sUUFBUSxXQUFZLFFBQU8sRUFBRSxNQUFNLElBQUs7QUFDbEUsV0FBTztBQUFBLEVBQ1Q7Ozs7Ozs7Ozs7O0FDSEEsT0FBQyxTQUFVLFFBQVEsU0FBUztBQUdpQjtBQUN6QyxrQkFBUSxNQUFNO0FBQUEsUUFDbEI7QUFBQSxNQU9BLEdBQUcsT0FBTyxlQUFlLGNBQWMsYUFBYSxPQUFPLFNBQVMsY0FBYyxPQUFPQSxtQkFBTSxTQUFVQyxTQUFRO0FBUy9HLFlBQUksRUFBRSxXQUFXLFVBQVUsV0FBVyxPQUFPLFdBQVcsV0FBVyxPQUFPLFFBQVEsS0FBSztBQUNyRixnQkFBTSxJQUFJLE1BQU0sMkRBQTJEO0FBQUEsUUFDL0U7QUFDRSxZQUFJLEVBQUUsV0FBVyxXQUFXLFdBQVcsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUs7QUFDeEYsZ0JBQU0sbURBQW1EO0FBT3pELGdCQUFNLFdBQVcsbUJBQWlCO0FBSWhDLGtCQUFNLGNBQWM7QUFBQSxjQUNsQixVQUFVO0FBQUEsZ0JBQ1IsU0FBUztBQUFBLGtCQUNQLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ1o7QUFBQSxnQkFDRCxZQUFZO0FB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VUFBVSxDQUFDLEdBQUcsU0FBUyxFQUFFLE1BQU0sUUFBUSxTQUFTLFFBQVE7QUFBQSxRQUN4RCxRQUFRO0FBQUEsTUFDWCxDQUFBO0FBQUEsSUFBQSxDQUNKO0FBRUEsUUFBSSxDQUFDLFNBQVMsTUFBTSxDQUFDLFNBQVMsTUFBTTtBQUNqQyxZQUFNLFlBQVksTUFBTSxTQUFTLE9BQU8sTUFBTSxNQUFNLDJCQUEyQjtBQUMvRSxZQUFNLElBQUksTUFBTSx5QkFBeUIsU0FBUyxNQUFNLE1BQU0sU0FBUyxFQUFFO0FBQUEsSUFBQTtBQUd2RSxVQUFBLFNBQVMsU0FBUyxLQUFLLFVBQVU7QUFDakMsVUFBQSxVQUFVLElBQUksWUFBWTtBQUNoQyxRQUFJLFNBQVM7QUFDYixRQUFJLE9BQU87QUFHWCxXQUFPLENBQUMsTUFBTTtBQUNWLFlBQU0sRUFBRSxNQUFNLFlBQVksVUFBVSxNQUFNLE9BQU8sS0FBSztBQUMvQyxhQUFBO0FBRVAsZ0JBQVUsUUFBUSxPQUFPLE9BQU8sRUFBRSxRQUFRLE1BQU07QUFDMUMsWUFBQSxRQUFRLE9BQU8sTUFBTSxJQUFJO0FBQ3RCLGVBQUEsTUFBTSxTQUFTO0FBRXhCLGlCQUFXLFFBQVEsT0FBTztBQUNsQixZQUFBLEtBQUssV0FBVyxRQUFRLEdBQUc7QUFDM0IsZ0JBQU0sY0FBYyxLQUFLLFVBQVUsQ0FBQyxFQUFFLEtBQUs7QUFDM0MsY0FBSSxnQkFBZ0IsVUFBVTtBQUN6QixzQkFBVSxFQUFFLFFBQVEsUUFBUSxPQUFPLElBQUk7QUFDdkMsb0JBQVEsSUFBSSx1Q0FBdUM7QUFDNUMsbUJBQUE7QUFDUDtBQUFBLFVBQUE7QUFFQSxjQUFBO0FBQ0ssa0JBQUEsUUFBUSxLQUFLLE1BQU0sV0FBVztBQUNwQyxrQkFBTSxXQUFVLE1BQUFLLE9BQUFFLE1BQUEsTUFBTSxZQUFOLGdCQUFBQSxJQUFnQixPQUFoQixnQkFBQUYsSUFBb0IsVUFBcEIsbUJBQTJCO0FBQzNDLGdCQUFJLFNBQVM7QUFDVCx3QkFBVSxFQUFFLFFBQVEsU0FBUyxRQUFBLENBQWtCO0FBQUEsWUFBQTtBQUFBLG1CQUc5QyxHQUFHO0FBQ0Msb0JBQUEsTUFBTSxzREFBc0QsYUFBYSxDQUFDO0FBQUEsVUFBQTtBQUFBLFFBQ3ZGO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFFQSxRQUFBLE9BQU8sUUFBUTtBQUNQLGNBQUEsS0FBSyw4REFBOEQsTUFBTTtBQUFBLElBQUE7QUFBQSxFQUV6RjtBQUdPLFFBQU0scUJBQXNDO0FBQUEsSUFDL0MsWUFBWTtBQUFBO0FBQUEsRUFFaEI7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDgsMTIsMTMsMTRdfQ==
