var background = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var _a, _b;
  function defineBackground(arg) {
    if (arg == null || typeof arg === "function") return { main: arg };
    return arg;
  }
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
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
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
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
  const onMessage = messagingInstance.onMessage;
  const sendMessage = messagingInstance.sendMessage;
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
  function insertSorted(a, v2) {
    const i = findIndexFromEnd(a, (other) => v2.priority <= other.priority);
    a.splice(i + 1, 0, v2);
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
  var c = ((s) => (s[s.New = 0] = "New", s[s.Learning = 1] = "Learning", s[s.Review = 2] = "Review", s[s.Relearning = 3] = "Relearning", s))(c || {}), l = ((s) => (s[s.Manual = 0] = "Manual", s[s.Again = 1] = "Again", s[s.Hard = 2] = "Hard", s[s.Good = 3] = "Good", s[s.Easy = 4] = "Easy", s))(l || {});
  class h {
    static card(t) {
      return { ...t, state: h.state(t.state), due: h.time(t.due), last_review: t.last_review ? h.time(t.last_review) : void 0 };
    }
    static rating(t) {
      if (typeof t == "string") {
        const e = t.charAt(0).toUpperCase(), i = t.slice(1).toLowerCase(), r = l[`${e}${i}`];
        if (r === void 0) throw new Error(`Invalid rating:[${t}]`);
        return r;
      } else if (typeof t == "number") return t;
      throw new Error(`Invalid rating:[${t}]`);
    }
    static state(t) {
      if (typeof t == "string") {
        const e = t.charAt(0).toUpperCase(), i = t.slice(1).toLowerCase(), r = c[`${e}${i}`];
        if (r === void 0) throw new Error(`Invalid state:[${t}]`);
        return r;
      } else if (typeof t == "number") return t;
      throw new Error(`Invalid state:[${t}]`);
    }
    static time(t) {
      if (typeof t == "object" && t instanceof Date) return t;
      if (typeof t == "string") {
        const e = Date.parse(t);
        if (isNaN(e)) throw new Error(`Invalid date:[${t}]`);
        return new Date(e);
      } else if (typeof t == "number") return new Date(t);
      throw new Error(`Invalid date:[${t}]`);
    }
    static review_log(t) {
      return { ...t, due: h.time(t.due), rating: h.rating(t.rating), state: h.state(t.state), review: h.time(t.review) };
    }
  }
  Date.prototype.scheduler = function(s, t) {
    return F(this, s, t);
  }, Date.prototype.diff = function(s, t) {
    return L(this, s, t);
  }, Date.prototype.format = function() {
    return O(this);
  }, Date.prototype.dueFormat = function(s, t, e) {
    return j(this, s, t, e);
  };
  function F(s, t, e) {
    return new Date(e ? h.time(s).getTime() + t * 24 * 60 * 60 * 1e3 : h.time(s).getTime() + t * 60 * 1e3);
  }
  function L(s, t, e) {
    if (!s || !t) throw new Error("Invalid date");
    const i = h.time(s).getTime() - h.time(t).getTime();
    let r = 0;
    switch (e) {
      case "days":
        r = Math.floor(i / (24 * 60 * 60 * 1e3));
        break;
      case "minutes":
        r = Math.floor(i / (60 * 1e3));
        break;
    }
    return r;
  }
  function O(s) {
    const t = h.time(s), e = t.getFullYear(), i = t.getMonth() + 1, r = t.getDate(), a = t.getHours(), n = t.getMinutes(), d = t.getSeconds();
    return `${e}-${p(i)}-${p(r)} ${p(a)}:${p(n)}:${p(d)}`;
  }
  function p(s) {
    return s < 10 ? `0${s}` : `${s}`;
  }
  const S = [60, 60, 24, 31, 12], E = ["second", "min", "hour", "day", "month", "year"];
  function j(s, t, e, i = E) {
    s = h.time(s), t = h.time(t), i.length !== E.length && (i = E);
    let r = s.getTime() - t.getTime(), a;
    for (r /= 1e3, a = 0; a < S.length && !(r < S[a]); a++) r /= S[a];
    return `${Math.floor(r)}${e ? i[a] : ""}`;
  }
  Object.freeze([l.Again, l.Hard, l.Good, l.Easy]);
  function v(s, t) {
    const e = { due: s ? h.time(s) : /* @__PURE__ */ new Date(), stability: 0, difficulty: 0, elapsed_days: 0, scheduled_days: 0, reps: 0, lapses: 0, state: c.New, last_review: void 0 };
    return e;
  }
  var x = ((s) => (s.SCHEDULER = "Scheduler", s.SEED = "Seed", s))(x || {});
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
    return sendMessage("dbQuery", { sql, params: params || [] });
  }
  async function createFlashcard(flashcardData, now = /* @__PURE__ */ new Date()) {
    var _a2, _b2;
    const initialCardState = v(now);
    const stateString = c[initialCardState.state];
    const sql = `
        INSERT INTO flashcards (
            type, front, back, cloze_text, source_url, source_highlight, 
            source_language, target_language, context, tags, 
            due, stability, difficulty, elapsed_days, scheduled_days, 
            reps, lapses, state, last_review
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        RETURNING *; 
    `;
    const params = [
      flashcardData.type,
      flashcardData.front ?? null,
      flashcardData.back ?? null,
      flashcardData.cloze_text ?? null,
      flashcardData.source_url ?? null,
      flashcardData.source_highlight ?? null,
      flashcardData.source_language ?? null,
      flashcardData.target_language ?? null,
      flashcardData.context ?? null,
      flashcardData.tags ?? null,
      // FSRS initial state:
      initialCardState.due.toISOString(),
      // Store as ISO string
      initialCardState.stability,
      initialCardState.difficulty,
      initialCardState.elapsed_days,
      initialCardState.scheduled_days,
      initialCardState.reps,
      initialCardState.lapses,
      stateString,
      // Use the string representation of the state
      ((_a2 = initialCardState.last_review) == null ? void 0 : _a2.toISOString()) ?? null
      // Store as ISO string or null
    ];
    const result2 = await queryDb(sql, params);
    if (!((_b2 = result2 == null ? void 0 : result2.rows) == null ? void 0 : _b2[0])) throw new Error("Failed to create flashcard");
    const savedFlashcard = result2.rows[0];
    return savedFlashcard;
  }
  async function createChatMessage(messageData) {
    var _a2;
    const sql = `
        INSERT INTO chat_messages (role, content, bookmark_id, flashcard_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const params = [
      messageData.role,
      messageData.content ?? null,
      messageData.bookmark_id ?? null,
      messageData.flashcard_id ?? null
    ];
    const result2 = await queryDb(sql, params);
    if (!((_a2 = result2 == null ? void 0 : result2.rows) == null ? void 0 : _a2[0])) throw new Error("Failed to create chat message");
    console.log("[db.ts createChatMessage] Raw DB result row:", result2.rows[0]);
    return result2.rows[0];
  }
  background;
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
  async function ollamaChatCompletion(request) {
    const { prompt, history = [], config } = request;
    const ollamaConfig = config;
    const model = ollamaConfig.chatModel;
    const endpoint = ollamaConfig.endpoint.replace(/\/$/, "");
    const apiUrl = `${endpoint}/api/chat`;
    console.log(`[ollamaProvider] Sending NON-STREAMING chat request to ${apiUrl} with model ${model}`);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model,
          messages: [...history, { role: "user", content: prompt }],
          stream: false
          // Explicitly set stream to false
        })
      });
      if (!response.ok) {
        const errorBody = await response.text().catch(() => "Failed to read error body");
        console.error(`[ollamaProvider] Chat Completion API error (${response.status}): ${errorBody}`);
        return null;
      }
      const result2 = await response.json();
      if (!result2.message || typeof result2.message.content !== "string") {
        console.error("[ollamaProvider] Invalid response format from Ollama Chat API (non-streaming). 'message.content' not found or not a string.", result2);
        return null;
      }
      console.log("[ollamaProvider] Received non-streaming response:", result2);
      return {
        message: {
          role: "assistant",
          // Assume role is assistant
          content: result2.message.content
        },
        usage: {
          prompt_tokens: result2.prompt_eval_count,
          completion_tokens: result2.eval_count
          // total_tokens: result.?, // Ollama might not provide total directly in non-stream
        }
        // Include other fields if needed
      };
    } catch (error) {
      console.error("[ollamaProvider] Network or parsing error during chat completion:", error);
      return null;
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
    providerId: "ollama",
    streamChat: streamOllamaChat,
    chatCompletion: ollamaChatCompletion,
    getEmbeddings: getOllamaEmbeddings
  };
  background;
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
    providerId: "openrouter",
    streamChat: streamOpenRouterChat
    // No getEmbeddings for OpenRouter in this example yet
  };
  background;
  let userConfigCache = null;
  async function loadUserConfig() {
    var _a2, _b2;
    if (userConfigCache) return userConfigCache;
    console.log("[llmService] Loading user configuration from DB...");
    try {
      const result2 = await queryDb("SELECT config_json FROM user_configuration WHERE id = 1;");
      if ((_b2 = (_a2 = result2 == null ? void 0 : result2.rows) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.config_json) {
        const config = JSON.parse(result2.rows[0].config_json);
        console.log("[llmService] Loaded config:", config);
        userConfigCache = config;
        return config;
      } else {
        console.warn("[llmService] No configuration found in database.");
        return null;
      }
    } catch (error) {
      console.error("[llmService] Error loading configuration:", error);
      return null;
    }
  }
  async function streamChatResponse(request) {
    const { prompt, history, config } = request;
    console.log(`[llmService] Routing chat stream for provider: ${config.provider}`);
    const provider = getProvider(config);
    if (!provider) {
      throw new Error(`Unsupported provider: ${config.provider}`);
    }
    if (!provider.streamChat) {
      throw new Error(`Provider ${config.provider} does not support streaming chat.`);
    }
    const providerRequest = {
      prompt,
      history,
      config,
      sendChunk: (chunk) => {
        sendMessage("ollamaResponse", chunk).catch((e) => console.error("Failed to send chunk to UI:", e));
      }
    };
    try {
      await provider.streamChat(providerRequest);
    } catch (error) {
      console.error(`[llmService] Error during streamChat for ${config.provider}:`, error);
      sendMessage("ollamaResponse", {
        status: "error",
        // Correctly use the status field
        error: error instanceof Error ? error.message : String(error)
      }).catch((e) => console.error("Failed to send error chunk to UI:", e));
    }
  }
  function createFlashcardPrompt(selectedText, sourceUrl) {
    let prompt = `
Generate two types of flashcards from the text below: a concise "Flashcard" (Front/Back) and a "Cloze" deletion card.

Text Selection:
"""
${selectedText}
"""
${""}

Instructions:

1.  **Flashcard (Front/Back):**
    *   Front: A short topic or concept (max 8 words).
    *   Back: A concise fact or definition related to the front (max 8 words).
    *   **IMPORTANT:** Do NOT include trailing punctuation. Back should ONLY contain the fact, no filler.

2.  **Cloze Card:**
    *   Create a single sentence using the main idea.
    *   Replace the single most *meaningful* keyword/phrase with {{c1::answer}}.
    *   **AVOID** deleting trivial words (the, is, a) or the obvious main subject.

3.  **Output Format:**
    *   Return ONLY a valid JSON object. No extra text, explanations, or markdown.
    *   Use this EXACT structure:
    \`\`\`json
    {
      "flashcard": { "front": "topic/concept", "back": "concise fact" },
      "cloze": { "text": "Sentence with {{c1::answer}} deletion." }
    }
    \`\`\`

Examples:

--- Example 1 ---
Input Text: "The Eiffel Tower, located in Paris, France, was completed in 1889."
Output JSON:
\`\`\`json
{
  "flashcard": { "front": "Eiffel Tower Location", "back": "Paris, France" },
  "cloze": { "text": "The Eiffel Tower, located in Paris, France, was completed in {{c1::1889}}" }
}
\`\`\`
(Flashcard: Good - concise topic/fact. Cloze: Good - specific detail deleted.)

--- Example 2 ---
Input Text: "Photosynthesis is the process used by plants to convert light energy into chemical energy."
Output JSON:
\`\`\`json
{
  "flashcard": { "front": "Photosynthesis", "back": "Converts light to chemical energy" },
  "cloze": { "text": "Photosynthesis is the process used by plants to convert {{c1::light energy}} into chemical energy" }
}
\`\`\`
(Flashcard: Good - concept/definition. Cloze: Good - key concept deleted.)

--- Example 3 ---
Input Text: "The Wachowskis wrote and directed the Matrix film series."
Output JSON:
\`\`\`json
{
  "flashcard": { "front": "The Matrix Directors", "back": "The Wachowskis" },
  "cloze": { "text": "The {{c1::Wachowskis}} wrote and directed the Matrix film series" }
}
\`\`\`
(Flashcard: Good - specific role. Cloze: Better - deleted the directors instead of the trivial 'Matrix'.)

--- Example 4 (Bad Examples) ---
Input Text: "React is a JavaScript library for building user interfaces."
Bad Flashcard Back: "React is a JS library for UIs." (Trailing period)
Bad Flashcard Back: "It is a library for building UIs" (Exceeds 8 words, filler)
Bad Cloze: "React is a JavaScript library for building {{c1::user interfaces}}" (Okay, but less ideal than deleting 'JavaScript library')
Bad Cloze: "{{c1::React}} is a JavaScript library for building user interfaces." (Trivial deletion of main subject)

Now, generate the flashcards for the provided text selection. Output ONLY the JSON object:
`;
    return prompt.trim();
  }
  function getProvider(config) {
    switch (config.provider) {
      case "ollama":
        return ollamaProvider;
      case "openrouter":
        return openRouterProvider;
      // Add cases for other providers like 'lmstudio', 'jan' if they have specific provider objects
      default:
        if (config.endpoint) {
          console.warn(`[llmService] Using ollamaProvider for potentially compatible provider: ${config.provider}`);
          return ollamaProvider;
        }
        console.error(`[llmService] Unsupported provider found in config: ${config.provider}`);
        return null;
    }
  }
  async function generateFlashcardContentFromText(text) {
    var _a2, _b2, _c, _d, _e, _f;
    console.log("[llmService] Generating flashcard content for text:", text.substring(0, 50) + "...");
    const config = await loadUserConfig();
    if (!config) throw new Error("LLM configuration not found.");
    const provider = getProvider(config);
    if (!provider) throw new Error(`Unsupported provider: ${config.provider}`);
    if (!provider.streamChat) {
      console.error(`[llmService] Provider ${config.provider} does not support streaming chat. Cannot generate flashcards.`);
      return null;
    }
    const prompt = createFlashcardPrompt(text);
    let accumulatedContent = "";
    let streamError = null;
    console.log("[llmService] Sending flashcard generation prompt via streamChat...");
    try {
      await new Promise((resolve, reject) => {
        const providerRequest = {
          prompt,
          config,
          history: [],
          sendChunk: (chunk) => {
            if (chunk.status === "chunk" && chunk.content) {
              accumulatedContent += chunk.content;
            } else if (chunk.status === "error") {
              console.error("[llmService flashcard stream] Received error chunk:", chunk.error);
              streamError = chunk.error || "Unknown streaming error";
            } else if (chunk.status === "done" || chunk.status === "complete") {
              console.log("[llmService flashcard stream] Stream finished.");
              resolve();
            }
          }
        };
        provider.streamChat(providerRequest).catch(reject);
      });
      if (streamError) {
        console.error("[llmService] Flashcard stream completed with error:", streamError);
      }
      if (!accumulatedContent) {
        console.error("[llmService] Flashcard stream completed but accumulated content is empty.");
        return null;
      }
      console.log("[llmService] Received accumulated stream response for parsing:", accumulatedContent);
      try {
        const jsonMatch = accumulatedContent.match(/```json\s*([\s\S]*?)\s*```|({[\s\S]*})/);
        if (!jsonMatch || !jsonMatch[1] && !jsonMatch[2]) {
          console.error("[llmService] Could not find JSON block in the accumulated stream response.");
          try {
            const parsedJson2 = JSON.parse(accumulatedContent.trim());
            if (((_a2 = parsedJson2.flashcard) == null ? void 0 : _a2.front) && ((_b2 = parsedJson2.flashcard) == null ? void 0 : _b2.back) && ((_c = parsedJson2.cloze) == null ? void 0 : _c.text)) {
              console.log("[llmService] Successfully parsed flashcard JSON from raw stream response (fallback).");
              return parsedJson2;
            } else {
              console.error("[llmService] Parsed fallback stream JSON lacks expected structure:", parsedJson2);
              return null;
            }
          } catch (fallbackError) {
            console.error("[llmService] Failed to parse JSON directly from accumulated stream (fallback failed):", fallbackError);
            return null;
          }
        }
        const jsonString = jsonMatch[1] || jsonMatch[2];
        const parsedJson = JSON.parse(jsonString.trim());
        if (((_d = parsedJson.flashcard) == null ? void 0 : _d.front) && ((_e = parsedJson.flashcard) == null ? void 0 : _e.back) && ((_f = parsedJson.cloze) == null ? void 0 : _f.text)) {
          console.log("[llmService] Successfully parsed flashcard JSON from accumulated stream response.");
          return parsedJson;
        } else {
          console.error("[llmService] Parsed stream JSON lacks expected structure (flashcard/cloze):", parsedJson);
          return null;
        }
      } catch (parseError) {
        console.error("[llmService] Error parsing JSON from accumulated stream response:", parseError);
        console.error("--- Accumulated Raw Content ---");
        console.error(accumulatedContent);
        console.error("--- End Accumulated Raw Content ---");
        return null;
      }
    } catch (error) {
      console.error("[llmService] Error during flashcard generation stream setup or promise handling:", error);
      return null;
    }
  }
  async function translateText(textToTranslate, targetLanguage) {
    var _a2, _b2;
    console.log(`[llmService] Translating text to ${targetLanguage}: "${textToTranslate.substring(0, 50)}..."`);
    const config = await loadUserConfig();
    if (!config) {
      console.error("[llmService translateText] Cannot translate: LLM config not loaded.");
      return null;
    }
    const provider = getProvider(config);
    if (!(provider == null ? void 0 : provider.chatCompletion)) {
      console.error(`[llmService translateText] Provider ${config.provider} does not support 'chatCompletion'.`);
      return null;
    }
    const prompt = `Translate the following text accurately to ${targetLanguage}. Output ONLY the translated text, nothing else:

Text to translate:
"""
${textToTranslate}
"""

Translated text:`;
    console.log(`[llmService translateText] Sending translation prompt to ${config.provider}...`);
    try {
      const response = await provider.chatCompletion({
        prompt,
        config,
        history: []
        // No history needed
      });
      const translatedText = (_b2 = (_a2 = response == null ? void 0 : response.message) == null ? void 0 : _a2.content) == null ? void 0 : _b2.trim();
      if (!translatedText) {
        console.error("[llmService translateText] LLM response was empty or invalid.");
        return null;
      }
      console.log("[llmService translateText] Received translation:", translatedText);
      return translatedText;
    } catch (error) {
      console.error("[llmService translateText] Error during translation LLM call:", error);
      return null;
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
      const { title, url } = message.data;
      const sql = `INSERT INTO clips (title, url) VALUES (?, ?);`;
      const params = [title, url];
      console.log("Background: Sending dbExec message to offscreen for clipping...");
      try {
        const dbResult = await sendMessage("dbExec", { data: { sql, params } });
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
      console.log("[Background] Received getOllamaModels message", message.data);
      const { endpoint } = message.data;
      const responseTarget = "getOllamaModelsResult";
      if (!endpoint) {
        console.error("[Background] Error: Ollama endpoint not provided.");
        sendMessage(responseTarget, { success: false, error: "Ollama endpoint not provided." }).catch((e) => console.error(`[Background] Failed to send ${responseTarget} error:`, e));
        return;
      }
      const fetchUrl = `${endpoint}/api/tags`;
      console.log(`[Background] Attempting to fetch models from: ${fetchUrl}`);
      try {
        const fetchOptions = { method: "GET", headers: { "Accept": "application/json" } };
        console.log("[Background] Fetch options:", fetchOptions);
        const response = await fetch(fetchUrl, fetchOptions);
        console.log(`[Background] Fetch response status: ${response.status}, OK: ${response.ok}`);
        if (!response.ok) {
          let errorBody = "[Could not read error body]";
          try {
            errorBody = await response.text();
          } catch {
          }
          console.error(`[Background] Fetch failed: Status ${response.status}. Body:`, errorBody);
          throw new Error(`Failed to fetch Ollama models: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const models = Array.isArray(data == null ? void 0 : data.models) ? data.models.map((tag) => ({ id: tag.name, name: tag.name })) : [];
        console.log("[Background] Successfully fetched Ollama models:", models);
        sendMessage(responseTarget, { success: true, models }).catch((e) => console.error(`[Background] Failed to send ${responseTarget} success:`, e));
      } catch (error) {
        console.error("[Background] Error during fetch operation:", error);
        let errorMessage = error instanceof Error ? error.message : "Unknown error fetching models.";
        if (errorMessage.includes("Failed to fetch")) {
          errorMessage += ". Ensure Ollama is running and reachable, and check extension host permissions.";
        }
        sendMessage(responseTarget, { success: false, error: errorMessage }).catch((e) => console.error(`[Background] Failed to send ${responseTarget} error:`, e));
      }
    });
    onMessage("ollamaChatRequest", async (message) => {
      console.log("Background: Received ollamaChatRequest", message.data);
      const { prompt, history } = message.data;
      const config = await loadUserConfig();
      if (!config) {
        console.error("Background: Cannot process chat request, user config not found.");
        sendMessage("ollamaResponse", {
          model: "unknown",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          done: true,
          status: "error",
          error: "LLM configuration not found. Please set it up in the settings."
        }).catch((e) => console.error("Failed to send config error message:", e));
        return;
      }
      try {
        await streamChatResponse({ prompt, history: history || [], config });
        console.log("Background: streamChatResponse processing initiated.");
      } catch (streamError) {
        console.error("[Background] Error invoking streamChatResponse:", streamError);
        sendMessage("ollamaResponse", {
          model: config.chatModel || "unknown",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          done: true,
          status: "error",
          error: streamError instanceof Error ? streamError.message : "Error during streaming"
        }).catch((e) => console.error("Failed to send stream error message:", e));
      }
    });
    onMessage("generateFlashcardContent", async (message) => {
      console.log("[Background] Received generateFlashcardContent message", message.data);
      const { text } = message.data;
      const responseTarget = "flashcardGenerationResult";
      if (!text) {
        console.error("[Background] No text provided for flashcard generation.");
        sendMessage(responseTarget, { data: null, error: "No text provided" }).catch((e) => console.error("Failed to send error result:", e));
        return;
      }
      try {
        const result2 = await generateFlashcardContentFromText(text);
        console.log("[Background] Received result from llmService:", result2);
        await new Promise((resolve) => setTimeout(resolve, 50));
        console.log("[Background] Attempting to send flashcard result after delay...");
        sendMessage(responseTarget, { data: result2, error: void 0 }).catch((e) => console.error("Failed to send flashcard result:", e));
      } catch (error) {
        console.error("[Background] Error during flashcard generation:", error);
        sendMessage(responseTarget, { data: null, error: error.message || "Unknown error during generation" }).catch((e) => console.error("Failed to send error result:", e));
      }
    });
    onMessage("getPageInfo", async () => {
      console.log("[Background] Received getPageInfo request.");
      try {
        const tabs = await browser$2.tabs.query({ active: true, currentWindow: true });
        const currentTab = tabs[0];
        if (currentTab && currentTab.url && currentTab.title) {
          console.log("[Background] Sending page info:", { title: currentTab.title, url: currentTab.url });
          return { title: currentTab.title, url: currentTab.url };
        } else {
          console.warn("[Background] Could not get active tab info.");
          return null;
        }
      } catch (error) {
        console.error("[Background] Error getting page info:", error);
        return null;
      }
    });
    onMessage("getSelectedText", async () => {
      var _a2;
      console.log("[Background] Received getSelectedText request.");
      try {
        const tabs = await browser$2.tabs.query({ active: true, currentWindow: true });
        const currentTab = tabs[0];
        const tabId = currentTab == null ? void 0 : currentTab.id;
        if (tabId && ((_a2 = currentTab.url) == null ? void 0 : _a2.startsWith("http"))) {
          console.log(`[Background] Sending _requestSelectionFromContentScript to tab ${tabId}`);
          const response = await sendMessage("_requestSelectionFromContentScript", void 0, { tabId });
          console.log(`[Background] Received response from content script for tab ${tabId}:`, response);
          if (response && typeof response.text === "string") {
            return { text: response.text };
          } else {
            console.warn(`[Background] Invalid or empty response from content script for tab ${tabId}:`, response);
            return null;
          }
        } else {
          console.log(`[Background] Cannot get selection from non-http(s) URL or no active tab ID.`);
          return null;
        }
      } catch (error) {
        console.error("[Background] Error getting selected text:", error);
        if (error instanceof Error && (error.message.includes("Could not establish connection") || error.message.includes("No receiving end"))) {
          console.warn("[Background] Content script likely not injected or not responding on the active page.");
        }
        return null;
      }
    });
    onMessage("translateText", async (message) => {
      console.log("[Background] Received translateText request:", message.data);
      const { text, targetLang } = message.data;
      if (!text || !targetLang) {
        console.error("[Background] Missing text or targetLang for translation.");
        throw new Error("Missing text or target language for translation.");
      }
      try {
        const translationResult = await translateText(text, targetLang);
        console.log("[Background] Translation result from llmService:", translationResult);
        if (translationResult === null) {
          throw new Error("Translation failed or returned null.");
        }
        return translationResult;
      } catch (error) {
        console.error("[Background] Error during translation:", error);
        throw new Error(`Translation failed: ${error.message || String(error)}`);
      }
    });
    onMessage("saveFlashcardAndNotify", async (message) => {
      console.log("[Background] Received saveFlashcardAndNotify request:", message.data);
      const { cardData } = message.data;
      if (!cardData) {
        console.error("[Background] No cardData provided for saveFlashcardAndNotify.");
        throw new Error("No flashcard data provided.");
      }
      try {
        const newFlashcard = await createFlashcard(cardData);
        console.log("[Background] Flashcard created in DB:", newFlashcard);
        await createChatMessage({ role: "flashcard", flashcard_id: newFlashcard.id });
        console.log("[Background] Associated chat message created for flashcard ID:", newFlashcard.id);
        return newFlashcard;
      } catch (error) {
        console.error("[Background] Error processing saveFlashcardAndNotify:", error);
        throw new Error(`Failed to save flashcard: ${error.message || String(error)}`);
      }
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
  return result$1;
}();
background;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3V0aWxzL2RlZmluZS1iYWNrZ3JvdW5kLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3NlcmlhbGl6ZS1lcnJvci9lcnJvci1jb25zdHJ1Y3RvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc2VyaWFsaXplLWVycm9yL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0B3ZWJleHQtY29yZS9tZXNzYWdpbmcvbGliL2NodW5rLUJRTEZTRkZaLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0B3ZWJleHQtY29yZS9tZXNzYWdpbmcvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21lc3NhZ2luZy9saWIvaW5kZXguanMiLCIuLi8uLi91dGlscy9tZXNzYWdpbmcudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtbXV0ZXgvaW5kZXgubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWZzcnMvZGlzdC9pbmRleC5tanMiLCIuLi8uLi91dGlscy9kYi50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm92aWRlcnMvb2xsYW1hLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL3Byb3ZpZGVycy9vcGVucm91dGVyLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL2xsbVNlcnZpY2UudHMiLCIuLi8uLi9lbnRyeXBvaW50cy9iYWNrZ3JvdW5kLnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0B3eHQtZGV2L2Jyb3dzZXIvc3JjL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC9icm93c2VyLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ad2ViZXh0LWNvcmUvbWF0Y2gtcGF0dGVybnMvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWZpbmVCYWNrZ3JvdW5kKGFyZykge1xuICBpZiAoYXJnID09IG51bGwgfHwgdHlwZW9mIGFyZyA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4geyBtYWluOiBhcmcgfTtcbiAgcmV0dXJuIGFyZztcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTIuMCAtIFR1ZSBNYXkgMTQgMjAyNCAxODowMToyOSAqL1xuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG4gIGlmICghKGdsb2JhbFRoaXMuYnJvd3NlciAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZSAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZS5pZCkpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAgIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICAgIG1heEFyZ3M6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBkZXZ0b29sczoge1xuICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycylcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiY29uc3QgbGlzdCA9IFtcblx0Ly8gTmF0aXZlIEVTIGVycm9ycyBodHRwczovLzI2Mi5lY21hLWludGVybmF0aW9uYWwub3JnLzEyLjAvI3NlYy13ZWxsLWtub3duLWludHJpbnNpYy1vYmplY3RzXG5cdEV2YWxFcnJvcixcblx0UmFuZ2VFcnJvcixcblx0UmVmZXJlbmNlRXJyb3IsXG5cdFN5bnRheEVycm9yLFxuXHRUeXBlRXJyb3IsXG5cdFVSSUVycm9yLFxuXG5cdC8vIEJ1aWx0LWluIGVycm9yc1xuXHRnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbixcblxuXHQvLyBOb2RlLXNwZWNpZmljIGVycm9yc1xuXHQvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2Vycm9ycy5odG1sXG5cdGdsb2JhbFRoaXMuQXNzZXJ0aW9uRXJyb3IsXG5cdGdsb2JhbFRoaXMuU3lzdGVtRXJyb3IsXG5dXG5cdC8vIE5vbi1uYXRpdmUgRXJyb3JzIGFyZSB1c2VkIHdpdGggYGdsb2JhbFRoaXNgIGJlY2F1c2UgdGhleSBtaWdodCBiZSBtaXNzaW5nLiBUaGlzIGZpbHRlciBkcm9wcyB0aGVtIHdoZW4gdW5kZWZpbmVkLlxuXHQuZmlsdGVyKEJvb2xlYW4pXG5cdC5tYXAoXG5cdFx0Y29uc3RydWN0b3IgPT4gW2NvbnN0cnVjdG9yLm5hbWUsIGNvbnN0cnVjdG9yXSxcblx0KTtcblxuY29uc3QgZXJyb3JDb25zdHJ1Y3RvcnMgPSBuZXcgTWFwKGxpc3QpO1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckNvbnN0cnVjdG9ycztcbiIsImltcG9ydCBlcnJvckNvbnN0cnVjdG9ycyBmcm9tICcuL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBOb25FcnJvciBleHRlbmRzIEVycm9yIHtcblx0bmFtZSA9ICdOb25FcnJvcic7XG5cblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKE5vbkVycm9yLl9wcmVwYXJlU3VwZXJNZXNzYWdlKG1lc3NhZ2UpKTtcblx0fVxuXG5cdHN0YXRpYyBfcHJlcGFyZVN1cGVyTWVzc2FnZShtZXNzYWdlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBTdHJpbmcobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGNvbW1vblByb3BlcnRpZXMgPSBbXG5cdHtcblx0XHRwcm9wZXJ0eTogJ25hbWUnLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdtZXNzYWdlJyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnc3RhY2snLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdjb2RlJyxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdjYXVzZScsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdH0sXG5dO1xuXG5jb25zdCB0b0pzb25XYXNDYWxsZWQgPSBuZXcgV2Vha1NldCgpO1xuXG5jb25zdCB0b0pTT04gPSBmcm9tID0+IHtcblx0dG9Kc29uV2FzQ2FsbGVkLmFkZChmcm9tKTtcblx0Y29uc3QganNvbiA9IGZyb20udG9KU09OKCk7XG5cdHRvSnNvbldhc0NhbGxlZC5kZWxldGUoZnJvbSk7XG5cdHJldHVybiBqc29uO1xufTtcblxuY29uc3QgZ2V0RXJyb3JDb25zdHJ1Y3RvciA9IG5hbWUgPT4gZXJyb3JDb25zdHJ1Y3RvcnMuZ2V0KG5hbWUpID8/IEVycm9yO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuY29uc3QgZGVzdHJveUNpcmN1bGFyID0gKHtcblx0ZnJvbSxcblx0c2Vlbixcblx0dG8sXG5cdGZvcmNlRW51bWVyYWJsZSxcblx0bWF4RGVwdGgsXG5cdGRlcHRoLFxuXHR1c2VUb0pTT04sXG5cdHNlcmlhbGl6ZSxcbn0pID0+IHtcblx0aWYgKCF0bykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGZyb20pKSB7XG5cdFx0XHR0byA9IFtdO1xuXHRcdH0gZWxzZSBpZiAoIXNlcmlhbGl6ZSAmJiBpc0Vycm9yTGlrZShmcm9tKSkge1xuXHRcdFx0Y29uc3QgRXJyb3IgPSBnZXRFcnJvckNvbnN0cnVjdG9yKGZyb20ubmFtZSk7XG5cdFx0XHR0byA9IG5ldyBFcnJvcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0byA9IHt9O1xuXHRcdH1cblx0fVxuXG5cdHNlZW4ucHVzaChmcm9tKTtcblxuXHRpZiAoZGVwdGggPj0gbWF4RGVwdGgpIHtcblx0XHRyZXR1cm4gdG87XG5cdH1cblxuXHRpZiAodXNlVG9KU09OICYmIHR5cGVvZiBmcm9tLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyAmJiAhdG9Kc29uV2FzQ2FsbGVkLmhhcyhmcm9tKSkge1xuXHRcdHJldHVybiB0b0pTT04oZnJvbSk7XG5cdH1cblxuXHRjb25zdCBjb250aW51ZURlc3Ryb3lDaXJjdWxhciA9IHZhbHVlID0+IGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0ZnJvbTogdmFsdWUsXG5cdFx0c2VlbjogWy4uLnNlZW5dLFxuXHRcdGZvcmNlRW51bWVyYWJsZSxcblx0XHRtYXhEZXB0aCxcblx0XHRkZXB0aCxcblx0XHR1c2VUb0pTT04sXG5cdFx0c2VyaWFsaXplLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmcm9tKSkge1xuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0J1ZmZlcicpIHtcblx0XHRcdHRvW2tleV0gPSAnW29iamVjdCBCdWZmZXJdJztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IFVzZSBgc3RyZWFtLmlzUmVhZGFibGUoKWAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxOC5cblx0XHRpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUucGlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dG9ba2V5XSA9ICdbb2JqZWN0IFN0cmVhbV0nO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHQvLyBHcmFjZWZ1bGx5IGhhbmRsZSBub24tY29uZmlndXJhYmxlIGVycm9ycyBsaWtlIGBET01FeGNlcHRpb25gLlxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dG9ba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSBjYXRjaCB7fVxuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIXNlZW4uaW5jbHVkZXMoZnJvbVtrZXldKSkge1xuXHRcdFx0ZGVwdGgrKztcblx0XHRcdHRvW2tleV0gPSBjb250aW51ZURlc3Ryb3lDaXJjdWxhcihmcm9tW2tleV0pO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0b1trZXldID0gJ1tDaXJjdWxhcl0nO1xuXHR9XG5cblx0Zm9yIChjb25zdCB7cHJvcGVydHksIGVudW1lcmFibGV9IG9mIGNvbW1vblByb3BlcnRpZXMpIHtcblx0XHRpZiAodHlwZW9mIGZyb21bcHJvcGVydHldICE9PSAndW5kZWZpbmVkJyAmJiBmcm9tW3Byb3BlcnR5XSAhPT0gbnVsbCkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBwcm9wZXJ0eSwge1xuXHRcdFx0XHR2YWx1ZTogaXNFcnJvckxpa2UoZnJvbVtwcm9wZXJ0eV0pID8gY29udGludWVEZXN0cm95Q2lyY3VsYXIoZnJvbVtwcm9wZXJ0eV0pIDogZnJvbVtwcm9wZXJ0eV0sXG5cdFx0XHRcdGVudW1lcmFibGU6IGZvcmNlRW51bWVyYWJsZSA/IHRydWUgOiBlbnVtZXJhYmxlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUVycm9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdG1heERlcHRoID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuXHRcdHVzZVRvSlNPTiA9IHRydWUsXG5cdH0gPSBvcHRpb25zO1xuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0XHRmcm9tOiB2YWx1ZSxcblx0XHRcdHNlZW46IFtdLFxuXHRcdFx0Zm9yY2VFbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0bWF4RGVwdGgsXG5cdFx0XHRkZXB0aDogMCxcblx0XHRcdHVzZVRvSlNPTixcblx0XHRcdHNlcmlhbGl6ZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXG5cdC8vIFBlb3BsZSBzb21ldGltZXMgdGhyb3cgdGhpbmdzIGJlc2lkZXMgRXJyb3Igb2JqZWN0c+KAplxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gYEpTT04uc3RyaW5naWZ5KClgIGRpc2NhcmRzIGZ1bmN0aW9ucy4gV2UgZG8gdG9vLCB1bmxlc3MgYSBmdW5jdGlvbiBpcyB0aHJvd24gZGlyZWN0bHkuXG5cdFx0Ly8gV2UgaW50ZW50aW9uYWxseSB1c2UgYHx8YCBiZWNhdXNlIGAubmFtZWAgaXMgYW4gZW1wdHkgc3RyaW5nIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zLlxuXHRcdHJldHVybiBgW0Z1bmN0aW9uOiAke3ZhbHVlLm5hbWUgfHwgJ2Fub255bW91cyd9XWA7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge21heERlcHRoID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZfSA9IG9wdGlvbnM7XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAoaXNNaW5pbXVtVmlhYmxlU2VyaWFsaXplZEVycm9yKHZhbHVlKSkge1xuXHRcdGNvbnN0IEVycm9yID0gZ2V0RXJyb3JDb25zdHJ1Y3Rvcih2YWx1ZS5uYW1lKTtcblx0XHRyZXR1cm4gZGVzdHJveUNpcmN1bGFyKHtcblx0XHRcdGZyb206IHZhbHVlLFxuXHRcdFx0c2VlbjogW10sXG5cdFx0XHR0bzogbmV3IEVycm9yKCksXG5cdFx0XHRtYXhEZXB0aCxcblx0XHRcdGRlcHRoOiAwLFxuXHRcdFx0c2VyaWFsaXplOiBmYWxzZSxcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBuZXcgTm9uRXJyb3IodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvckxpa2UodmFsdWUpIHtcblx0cmV0dXJuIEJvb2xlYW4odmFsdWUpXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0JiYgJ25hbWUnIGluIHZhbHVlXG5cdCYmICdtZXNzYWdlJyBpbiB2YWx1ZVxuXHQmJiAnc3RhY2snIGluIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc01pbmltdW1WaWFibGVTZXJpYWxpemVkRXJyb3IodmFsdWUpIHtcblx0cmV0dXJuIEJvb2xlYW4odmFsdWUpXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0JiYgJ21lc3NhZ2UnIGluIHZhbHVlXG5cdCYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGVycm9yQ29uc3RydWN0b3JzfSBmcm9tICcuL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyc7XG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZGVmUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBfX2dldE93blByb3BEZXNjcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG52YXIgX19zcHJlYWRQcm9wcyA9IChhLCBiKSA9PiBfX2RlZlByb3BzKGEsIF9fZ2V0T3duUHJvcERlc2NzKGIpKTtcbnZhciBfX29ialJlc3QgPSAoc291cmNlLCBleGNsdWRlKSA9PiB7XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKHNvdXJjZSwgcHJvcCkgJiYgZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMClcbiAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgaWYgKHNvdXJjZSAhPSBudWxsICYmIF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKHNvdXJjZSkpIHtcbiAgICAgIGlmIChleGNsdWRlLmluZGV4T2YocHJvcCkgPCAwICYmIF9fcHJvcElzRW51bS5jYWxsKHNvdXJjZSwgcHJvcCkpXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fYXN5bmMgPSAoX190aGlzLCBfX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdmFyIGZ1bGZpbGxlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVqZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBzdGVwID0gKHgpID0+IHguZG9uZSA/IHJlc29sdmUoeC52YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUoeC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbiAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkoX190aGlzLCBfX2FyZ3VtZW50cykpLm5leHQoKSk7XG4gIH0pO1xufTtcblxuLy8gc3JjL2dlbmVyaWMudHNcbmltcG9ydCB7IHNlcmlhbGl6ZUVycm9yLCBkZXNlcmlhbGl6ZUVycm9yIH0gZnJvbSBcInNlcmlhbGl6ZS1lcnJvclwiO1xuZnVuY3Rpb24gZGVmaW5lR2VuZXJpY01lc3NhbmdpbmcoY29uZmlnKSB7XG4gIGxldCByZW1vdmVSb290TGlzdGVuZXI7XG4gIGxldCBwZXJUeXBlTGlzdGVuZXJzID0ge307XG4gIGZ1bmN0aW9uIGNsZWFudXBSb290TGlzdGVuZXIoKSB7XG4gICAgaWYgKE9iamVjdC5lbnRyaWVzKHBlclR5cGVMaXN0ZW5lcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVtb3ZlUm9vdExpc3RlbmVyID09IG51bGwgPyB2b2lkIDAgOiByZW1vdmVSb290TGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZVJvb3RMaXN0ZW5lciA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgbGV0IGlkU2VxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU0KTtcbiAgZnVuY3Rpb24gZ2V0TmV4dElkKCkge1xuICAgIHJldHVybiBpZFNlcSsrO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2VuZE1lc3NhZ2UodHlwZSwgZGF0YSwgLi4uYXJncykge1xuICAgICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hMiwgX2IsIF9jLCBfZDtcbiAgICAgICAgY29uc3QgX21lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IGdldE5leHRJZCgpLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IChfYiA9IHlpZWxkIChfYTIgPSBjb25maWcudmVyaWZ5TWVzc2FnZURhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuY2FsbChjb25maWcsIF9tZXNzYWdlKSkgIT0gbnVsbCA/IF9iIDogX21lc3NhZ2U7XG4gICAgICAgIChfYyA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYy5kZWJ1ZyhgW21lc3NhZ2luZ10gc2VuZE1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgbWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY29uZmlnLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCB7IHJlcywgZXJyIH0gPSByZXNwb25zZSAhPSBudWxsID8gcmVzcG9uc2UgOiB7IGVycjogbmV3IEVycm9yKFwiTm8gcmVzcG9uc2VcIikgfTtcbiAgICAgICAgKF9kID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9kLmRlYnVnKGBbbWVzc2FnaW5nXSBzZW5kTWVzc2FnZSB7aWQ9JHttZXNzYWdlLmlkfX0gXFx1MTQwQVxcdTI1MDBgLCB7IHJlcywgZXJyIH0pO1xuICAgICAgICBpZiAoZXJyICE9IG51bGwpXG4gICAgICAgICAgdGhyb3cgZGVzZXJpYWxpemVFcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbk1lc3NhZ2UodHlwZSwgb25SZWNlaXZlZCkge1xuICAgICAgdmFyIF9hMiwgX2IsIF9jO1xuICAgICAgaWYgKHJlbW92ZVJvb3RMaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgIChfYTIgPSBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmRlYnVnKFxuICAgICAgICAgIGBbbWVzc2FnaW5nXSBcIiR7dHlwZX1cIiBpbml0aWFsaXplZCB0aGUgbWVzc2FnZSBsaXN0ZW5lciBmb3IgdGhpcyBjb250ZXh0YFxuICAgICAgICApO1xuICAgICAgICByZW1vdmVSb290TGlzdGVuZXIgPSBjb25maWcuYWRkUm9vdExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgdmFyIF9hMywgX2IyO1xuICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS50eXBlICE9IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UudGltZXN0YW1wICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmJyZWFrRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIGBbbWVzc2FnaW5nXSBVbmtub3duIG1lc3NhZ2UgZm9ybWF0LCBtdXN0IGluY2x1ZGUgdGhlICd0eXBlJyAmICd0aW1lc3RhbXAnIGZpZWxkcywgcmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoX2EzID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoX2IyID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLmRlYnVnKFwiW21lc3NhZ2luZ10gUmVjZWl2ZWQgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHBlclR5cGVMaXN0ZW5lcnNbbWVzc2FnZS50eXBlXTtcbiAgICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjb25zdCByZXMgPSBsaXN0ZW5lcihtZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigocmVzMikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNCwgX2IzO1xuICAgICAgICAgICAgcmV0dXJuIChfYjMgPSAoX2E0ID0gY29uZmlnLnZlcmlmeU1lc3NhZ2VEYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmNhbGwoY29uZmlnLCByZXMyKSkgIT0gbnVsbCA/IF9iMyA6IHJlczI7XG4gICAgICAgICAgfSkudGhlbigocmVzMikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNDtcbiAgICAgICAgICAgIChfYTQgPSBjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYTQuZGVidWcoYFttZXNzYWdpbmddIG9uTWVzc2FnZSB7aWQ9JHttZXNzYWdlLmlkfX0gXFx1MjUwMFxcdTE0MDVgLCB7IHJlczogcmVzMiB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IHJlczogcmVzMiB9O1xuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTQ7XG4gICAgICAgICAgICAoX2E0ID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmRlYnVnKGBbbWVzc2FnaW5nXSBvbk1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgeyBlcnIgfSk7XG4gICAgICAgICAgICByZXR1cm4geyBlcnI6IHNlcmlhbGl6ZUVycm9yKGVycikgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGVyVHlwZUxpc3RlbmVyc1t0eXBlXSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IEVycm9yKFxuICAgICAgICAgIGBbbWVzc2FnaW5nXSBJbiB0aGlzIEpTIGNvbnRleHQsIG9ubHkgb25lIGxpc3RlbmVyIGNhbiBiZSBzZXR1cCBmb3IgJHt0eXBlfWBcbiAgICAgICAgKTtcbiAgICAgICAgKF9iID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmVycm9yKGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHBlclR5cGVMaXN0ZW5lcnNbdHlwZV0gPSBvblJlY2VpdmVkO1xuICAgICAgKF9jID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLmxvZyhgW21lc3NhZ2luZ10gQWRkZWQgbGlzdGVuZXIgZm9yICR7dHlwZX1gKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBwZXJUeXBlTGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICBjbGVhbnVwUm9vdExpc3RlbmVyKCk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgT2JqZWN0LmtleXMocGVyVHlwZUxpc3RlbmVycykuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBkZWxldGUgcGVyVHlwZUxpc3RlbmVyc1t0eXBlXTtcbiAgICAgIH0pO1xuICAgICAgY2xlYW51cFJvb3RMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgX19zcHJlYWRWYWx1ZXMsXG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fb2JqUmVzdCxcbiAgX19hc3luYyxcbiAgZGVmaW5lR2VuZXJpY01lc3Nhbmdpbmdcbn07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge31cbiAgICAgICAgICAvKiB3cmFwcGVycyAqL1xuICAgICAgICAgICwge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuXG5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cblxuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfSAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG5cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9OyAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsImltcG9ydCB7XG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fc3ByZWFkVmFsdWVzLFxuICBkZWZpbmVHZW5lcmljTWVzc2FuZ2luZ1xufSBmcm9tIFwiLi9jaHVuay1CUUxGU0ZGWi5qc1wiO1xuXG4vLyBzcmMvZXh0ZW5zaW9uLnRzXG5pbXBvcnQgQnJvd3NlciBmcm9tIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI7XG5mdW5jdGlvbiBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmcoY29uZmlnKSB7XG4gIHJldHVybiBkZWZpbmVHZW5lcmljTWVzc2FuZ2luZyhfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBjb25maWcpLCB7XG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgYXJnKSB7XG4gICAgICBpZiAoYXJnID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgYXJnID09PSBcIm51bWJlclwiID8geyB0YWJJZDogYXJnIH0gOiBhcmc7XG4gICAgICByZXR1cm4gQnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAgICBvcHRpb25zLnRhYklkLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICAvLyBQYXNzIGZyYW1lSWQgaWYgc3BlY2lmaWVkXG4gICAgICAgIG9wdGlvbnMuZnJhbWVJZCAhPSBudWxsID8geyBmcmFtZUlkOiBvcHRpb25zLmZyYW1lSWQgfSA6IHZvaWQgMFxuICAgICAgKTtcbiAgICB9LFxuICAgIGFkZFJvb3RMaXN0ZW5lcihwcm9jZXNzTWVzc2FnZSkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSAobWVzc2FnZSwgc2VuZGVyKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc01lc3NhZ2UoX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgbWVzc2FnZSksIHsgc2VuZGVyIH0pKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH07XG4gICAgICBCcm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHJldHVybiAoKSA9PiBCcm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9XG4gIH0pKTtcbn1cbmV4cG9ydCB7XG4gIGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZ1xufTtcbiIsImltcG9ydCB7IGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZyB9IGZyb20gJ0B3ZWJleHQtY29yZS9tZXNzYWdpbmcnO1xuLy8gUmVtb3ZlIHBvdGVudGlhbGx5IGluY29ycmVjdC91bm5lZWRlZCBpbXBvcnRcbi8vIGltcG9ydCB0eXBlIHsgTExNVXNlckNvbmZpZyB9IGZyb20gJy4uL3NlcnZpY2VzL2xsbVNlcnZpY2UnOyBcbi8vIFJlbW92ZSBjb25mbGljdGluZyBzZWxmLWltcG9ydFxuLy8gaW1wb3J0IHR5cGUgeyBPbGxhbWFTdHJlYW1DaHVuayB9IGZyb20gJy4vbWVzc2FnaW5nJzsgXG5pbXBvcnQgdHlwZSB7IEZsYXNoY2FyZCB9IGZyb20gJy4uL3NyYy90eXBlcy9kYic7IC8vIEFkZGVkIEZsYXNoY2FyZCBpbXBvcnRcbi8vIGltcG9ydCB0eXBlIHsgRGF0YWJhc2VTdGF0cyB9IGZyb20gJy4uL3V0aWxzL2RiJzsgLy8gUkVNT1ZFRCBEYXRhYmFzZVN0YXRzIGltcG9ydFxuXG4vLyBEZWZpbmUvSW1wb3J0IHJlcXVpcmVkIHR5cGVzXG4vLyBUT0RPOiBFbnN1cmUgdGhlc2UgdHlwZXMgYXJlIGNvcnJlY3RseSBkZWZpbmVkIG9yIGltcG9ydGVkIGlmIHRoZXkgZXhpc3QgZWxzZXdoZXJlXG4vLyBleHBvcnQgdHlwZSBPbGxhbWFTdHJlYW1DaHVua1N0YXR1cyA9ICdjaHVuaycgfCAnZG9uZScgfCAnZXJyb3InIHwgJ292ZXJyaWRlX2dyYW50ZWQnOyAvLyBSZW1vdmVkIG9sZCBzdGF0dXMgdHlwZVxuXG5leHBvcnQgdHlwZSBPbGxhbWFTdHJlYW1DaHVuayA9IHtcbiAgbW9kZWw/OiBzdHJpbmc7IC8vIE1ha2Ugb3B0aW9uYWwgYXMgbm90IGFsbCBjaHVua3MgaGF2ZSBpdFxuICBjcmVhdGVkX2F0Pzogc3RyaW5nOyAvLyBNYWtlIG9wdGlvbmFsXG4gIGNvbnRlbnQ/OiBzdHJpbmc7IC8vIENvbnRlbnQgY2h1bmsgZnJvbSBPbGxhbWEgcHJvdmlkZXJcbiAgbWVzc2FnZT86IHsgLy8gT3B0aW9uYWw6IGZpbmFsIG1lc3NhZ2Ugc3RydWN0dXJlIChjaGVjayBhY3R1YWwgT2xsYW1hIEFQSSlcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICB9O1xuICAvLyBkb25lOiBib29sZWFuOyAvLyAnc3RhdHVzJyBmaWVsZCByZXBsYWNlcyB0aGlzXG4gIHRvdGFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICBsb2FkX2R1cmF0aW9uPzogbnVtYmVyO1xuICBwcm9tcHRfZXZhbF9jb3VudD86IG51bWJlcjtcbiAgcHJvbXB0X2V2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gIGV2YWxfY291bnQ/OiBudW1iZXI7XG4gIGV2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gIHN0YXRzPzogeyAvLyBJbmNsdWRlIHN0YXRzIGZyb20gT2xsYW1hIHByb3ZpZGVyJ3MgZG9uZSBjaHVua1xuICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIHRvdGFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICAgIGxvYWRfZHVyYXRpb24/OiBudW1iZXI7XG4gICAgcHJvbXB0X2V2YWxfY291bnQ/OiBudW1iZXI7XG4gICAgcHJvbXB0X2V2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gICAgZXZhbF9jb3VudD86IG51bWJlcjtcbiAgICBldmFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICB9O1xuICAvLyBVcGRhdGVkIHN0YXR1cyBmaWVsZCB0byByZWZsZWN0IGFjdHVhbCB1c2FnZVxuICBzdGF0dXM6ICdjaHVuaycgfCAnY29tcGxldGUnIHwgJ2Vycm9yJyB8ICdkb25lJzsgXG4gIGVycm9yPzogc3RyaW5nOyBcbn07XG5leHBvcnQgaW50ZXJmYWNlIE9sbGFtYUNoYXRSZXF1ZXN0IHtcbiAgICBwcm9tcHQ6IHN0cmluZztcbiAgICBoaXN0b3J5PzogeyByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JzsgY29udGVudDogc3RyaW5nIH1bXTsgXG59XG5leHBvcnQgaW50ZXJmYWNlIENoYXRNZXNzYWdlIHtcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCcgfCAnc3lzdGVtJyB8ICdib29rbWFyaycgfCAnZmxhc2hjYXJkJzsgLy8gQWRkZWQgc3lzdGVtL2Jvb2ttYXJrL2ZsYXNoY2FyZFxuICBjb250ZW50Pzogc3RyaW5nO1xuICBzdGF0dXM/OiAncGVuZGluZycgfCAnc3RyZWFtaW5nJyB8ICdjb21wbGV0ZScgfCAnZXJyb3InO1xuICBpZD86IG51bWJlcjsgLy8gT3B0aW9uYWwgSUQgZnJvbSBEQlxuICBjcmVhdGVkX2F0Pzogc3RyaW5nIHwgbnVtYmVyOyAvLyBPcHRpb25hbCB0aW1lc3RhbXBcbiAgYm9va21hcmtfaWQ/OiBudW1iZXI7IC8vIE9wdGlvbmFsIElEIGlmIHJvbGUgaXMgYm9va21hcmtcbiAgZmxhc2hjYXJkX2lkPzogbnVtYmVyOyAvLyBPcHRpb25hbCBJRCBpZiByb2xlIGlzIGZsYXNoY2FyZFxufVxuXG4vLyBEZWZpbmUgQ2xpcERhdGEgdHlwZSBhbmQgZXhwb3J0IGl0XG5leHBvcnQgaW50ZXJmYWNlIENsaXBEYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgdGFnc1xufVxuXG4vLyBEZWZpbmUgREIgb3BlcmF0aW9uIHR5cGVzXG4vLyBFWFBPUlQgdGhlc2UgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBEYkV4ZWNSZXF1ZXN0IHtcbiAgc3FsOiBzdHJpbmc7XG4gIHBhcmFtcz86IGFueVtdOyAvLyBPcHRpb25hbCBwYXJhbXMgZm9yIGV4ZWNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYlF1ZXJ5UmVxdWVzdCB7XG4gIHNxbDogc3RyaW5nO1xuICBwYXJhbXM/OiBhbnlbXTsgLy8gT3B0aW9uYWwgcGFyYW1zIGZvciBxdWVyeVxufVxuXG4vLyBEZWZpbmUgaW5wdXQvb3V0cHV0IGZvciBnZXRPbGxhbWFNb2RlbHNcbmludGVyZmFjZSBHZXRPbGxhbWFNb2RlbHNSZXF1ZXN0IHtcbiAgZW5kcG9pbnQ6IHN0cmluZztcbn1cblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgYSBtb2RlbCByZXR1cm5lZCBieSB0aGUgYmFja2dyb3VuZFxuaW50ZXJmYWNlIE9sbGFtYU1vZGVsIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vLyAqKiogRVhQT1JUIHRoaXMgaW50ZXJmYWNlICoqKlxuZXhwb3J0IGludGVyZmFjZSBHZXRPbGxhbWFNb2RlbHNSZXNwb25zZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1vZGVscz86IE9sbGFtYU1vZGVsW107XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG4vLyBBZGQgUGFnZUluZm8gdHlwZSBpZiBub3QgZGVmaW5lZCBlbHNld2hlcmVcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUluZm8geyAvLyBBc3N1bWluZyB0aGlzIHN0cnVjdHVyZSBiYXNlZCBvbiBBcHAudHN4IHVzYWdlXG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufVxuXG4vLyBEZWZpbmUgdGhlIG92ZXJhbGwgcHJvdG9jb2wgbWFwIGZvciB0eXBlIHNhZmV0eVxuZXhwb3J0IGludGVyZmFjZSBQcm90b2NvbE1hcCB7XG4gIC8vIE1lc3NhZ2UgZnJvbSBQb3B1cCAtPiBCYWNrZ3JvdW5kIHRvIHRyaWdnZXIgY2xpcHBpbmdcbiAgY2xpcFBhZ2U6IChkYXRhOiBDbGlwRGF0YSkgPT4gdm9pZDsgLy8gU2hvdWxkIHJldHVybiB2b2lkIGlmIGJhY2tncm91bmQgaGFuZGxlcyBub3RpZmljYXRpb25zXG5cbiAgLy8gTWVzc2FnZSBmcm9tIFVJIC0+IEJhY2tncm91bmQgdG8gZ2V0IGF2YWlsYWJsZSBPbGxhbWEgbW9kZWxzXG4gIGdldE9sbGFtYU1vZGVsczogKGRhdGE6IHsgZW5kcG9pbnQ6IHN0cmluZyB9KSA9PiB2b2lkOyAvLyBSZXF1ZXN0IHRyaWdnZXJcbiAgZ2V0T2xsYW1hTW9kZWxzUmVzdWx0OiBHZXRPbGxhbWFNb2RlbHNSZXNwb25zZTsgLy8gUmVzcG9uc2Ugd2l0aCBtb2RlbHMgb3IgZXJyb3JcblxuICAvLyA9PSBEQiBPcGVyYXRpb25zIChVSS9CYWNrZ3JvdW5kIC0+IE9mZnNjcmVlbikgPT1cbiAgZGJFeGVjOiB7IGRhdGE6IERiRXhlY1JlcXVlc3QgfTsgLy8gRXhwZWN0IG9iamVjdCBjb250YWluaW5nIHJlcXVlc3QgZGF0YVxuICBkYlF1ZXJ5OiB7IGRhdGE6IERiUXVlcnlSZXF1ZXN0IH07IC8vIEV4cGVjdCBvYmplY3QgY29udGFpbmluZyByZXF1ZXN0IGRhdGFcblxuICAvLyA9PSBDaGF0IE1lc3NhZ2VzID09XG4gIG9sbGFtYUNoYXRSZXF1ZXN0OiAoZGF0YTogT2xsYW1hQ2hhdFJlcXVlc3QpID0+IHZvaWQ7IC8vIFJlcXVlc3QgdHJpZ2dlciAoc3RyZWFtIGhhbmRsZWQgc2VwYXJhdGVseSlcbiAgb2xsYW1hUmVzcG9uc2U6IE9sbGFtYVN0cmVhbUNodW5rOyAvLyBVc2UgdGhlIHVwZGF0ZWQgdHlwZVxuICBnZXRDaGF0SGlzdG9yeTogKGRhdGE6IHsgc2Vzc2lvbklkPzogbnVtYmVyIHwgJ2N1cnJlbnQnIH0pID0+IFByb21pc2U8Q2hhdE1lc3NhZ2VbXT47IC8vIERpcmVjdCByZXF1ZXN0L3Jlc3BvbnNlXG4gIGFkZFN5c3RlbU1lc3NhZ2U6IHsgY29udGVudDogc3RyaW5nIH07IC8vIFNpbXBsZSBtZXNzYWdlXG5cbiAgLy8gPT0gRmxhc2hjYXJkIEdlbmVyYXRpb24gPT1cbiAgZ2VuZXJhdGVGbGFzaGNhcmRDb250ZW50OiAoXG4gICAgcGFyYW1zOiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBzb3VyY2VVcmw6IHN0cmluZyB8IG51bGw7XG4gICAgICBzb3VyY2VMYW5ndWFnZTogc3RyaW5nIHwgbnVsbDtcbiAgICAgIHRhcmdldExhbmd1YWdlOiBzdHJpbmcgfCBudWxsO1xuICAgIH1cbiAgKSA9PiB2b2lkOyAvLyBGaXJlIGFuZCBmb3JnZXQsIHJlc3VsdCBzZW50IHZpYSBmbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0XG4gIGZsYXNoY2FyZEdlbmVyYXRpb25SZXN1bHQ6IChcbiAgICByZXN1bHQ6IHsgZGF0YTogRmxhc2hjYXJkR2VuZXJhdGlvblJlc3VsdDsgZXJyb3I/OiBzdHJpbmcgfVxuICApID0+IHZvaWQ7XG5cbiAgLy8gPT0gVHJhbnNsYXRpb24gPT1cbiAgdHJhbnNsYXRlVGV4dDogKHBhcmFtczogeyB0ZXh0OiBzdHJpbmc7IHRhcmdldExhbmc6IHN0cmluZyB9KSA9PiBQcm9taXNlPHN0cmluZz47XG5cbiAgLy8gPT0gUG9wdXAgRGF0YSBSZXF1ZXN0cyA9PVxuICBnZXRTZWxlY3RlZFRleHQ6ICgpID0+IFByb21pc2U8eyB0ZXh0OiBzdHJpbmcgfSB8IG51bGw+OyAvLyBEZWZpbmUgZXhwZWN0ZWQgcmV0dXJuIHR5cGVcbiAgZ2V0UGFnZUluZm86ICgpID0+IFByb21pc2U8UGFnZUluZm8gfCBudWxsPjsgLy8gRGVmaW5lIGV4cGVjdGVkIHJldHVybiB0eXBlXG5cbiAgLy8gPT0gSW50ZXJuYWwgQmFja2dyb3VuZCA8LT4gQ29udGVudCBTY3JpcHQgQ29tbXVuaWNhdGlvbiA9PVxuICBfcmVxdWVzdFNlbGVjdGlvbkZyb21Db250ZW50U2NyaXB0OiAoKSA9PiBQcm9taXNlPHsgdGV4dDogc3RyaW5nIH0gfCBudWxsPjsgLy8gTWVzc2FnZSBCRyBzZW5kcyB0byBDU1xuXG4gIC8vID09IE90aGVyIGV4aXN0aW5nIHR5cGVzID09XG4gIHN0cmVhbU9sbGFtYVJlcXVlc3Q6IHsgcHJvbXB0OiBzdHJpbmc7IGhpc3Rvcnk6IENoYXRNZXNzYWdlW107IGNvbmZpZzogYW55IH07XG4gIHNhdmVDb25maWd1cmF0aW9uOiB7IGNvbmZpZ0pzb246IHN0cmluZyB9O1xuICBsb2FkQ29uZmlndXJhdGlvbjogbnVsbDtcbiAgcXVlcnlEYjogeyBxdWVyeTogc3RyaW5nOyBwYXJhbXM/OiBhbnlbXSB9O1xuXG4gIC8vIE5ldyBtZXNzYWdlc1xuICAvLyBnZXREYXRhYmFzZVN0YXRzOiAoKSA9PiBQcm9taXNlPERhdGFiYXNlU3RhdHM+OyAvLyBSRU1PVkVEIHRoaXMgbGluZVxuXG4gIC8vIE1lc3NhZ2UgdG8gc2F2ZSBmbGFzaGNhcmQgQU5EIG5vdGlmeSBVSVxuICBzYXZlRmxhc2hjYXJkQW5kTm90aWZ5OiAoXG4gICAgcGFyYW1zOiB7IGNhcmREYXRhOiBQYXJ0aWFsPEZsYXNoY2FyZD4gfSAvLyBVc2UgUGFydGlhbCBmb3Igbm93LCByZWZpbmUgbGF0ZXIgaWYgbmVlZGVkXG4gICkgPT4gUHJvbWlzZTxGbGFzaGNhcmQgfCBudWxsPjsgLy8gUmV0dXJucyB0aGUgc2F2ZWQgY2FyZCBvciBudWxsIG9uIGVycm9yXG5cbiAgLy8gSW50ZXJuYWwgbm90aWZpY2F0aW9uIG1lc3NhZ2UgZm9yIFVJIHVwZGF0ZXNcbiAgX2NoYXRIaXN0b3J5VXBkYXRlZDogKCkgPT4gdm9pZDtcbn1cblxuLy8gVHlwZSBmb3IgdGhlIG1lc3NhZ2Ugc3RydWN0dXJlXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2U8VCBleHRlbmRzIGtleW9mIFByb3RvY29sTWFwPiB7XG4gIHR5cGU6IFQ7XG4gIGRhdGE6IFByb3RvY29sTWFwW1RdO1xufVxuXG4vLyBDcmVhdGUgdGhlIHR5cGVkIG1lc3NhZ2luZyBpbnN0YW5jZVxuY29uc3QgbWVzc2FnaW5nSW5zdGFuY2UgPSBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmc8UHJvdG9jb2xNYXA+KCk7XG5cbi8vIEV4cG9ydCB0aGUgc3BlY2lmaWMgbWV0aG9kcyBmcm9tIHRoZSBpbnN0YW5jZVxuZXhwb3J0IGNvbnN0IG9uTWVzc2FnZSA9IG1lc3NhZ2luZ0luc3RhbmNlLm9uTWVzc2FnZTtcbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZSA9IG1lc3NhZ2luZ0luc3RhbmNlLnNlbmRNZXNzYWdlO1xuXG4vLyBSRU1PVkUgY29uZmxpY3RpbmcgcmUtZXhwb3J0XG4vLyBleHBvcnQgdHlwZSB7IFByb3RvY29sTWFwIH07IFxuXG4vLyAqKiogRVhQT1JUIFRISVMgVFlQRSAqKipcbmV4cG9ydCB0eXBlIEZsYXNoY2FyZEdlbmVyYXRpb25SZXN1bHQgPSB7XG4gIGZsYXNoY2FyZDogeyBmcm9udDogc3RyaW5nOyBiYWNrOiBzdHJpbmcgfTtcbiAgY2xvemU6IHsgdGV4dDogc3RyaW5nIH07XG59IHwgbnVsbDsgIiwiY29uc3QgRV9USU1FT1VUID0gbmV3IEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIG11dGV4IHRvIGJlY29tZSBhdmFpbGFibGUnKTtcbmNvbnN0IEVfQUxSRUFEWV9MT0NLRUQgPSBuZXcgRXJyb3IoJ211dGV4IGFscmVhZHkgbG9ja2VkJyk7XG5jb25zdCBFX0NBTkNFTEVEID0gbmV3IEVycm9yKCdyZXF1ZXN0IGZvciBsb2NrIGNhbmNlbGVkJyk7XG5cbnZhciBfX2F3YWl0ZXIkMiA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgU2VtYXBob3JlIHtcbiAgICBjb25zdHJ1Y3RvcihfdmFsdWUsIF9jYW5jZWxFcnJvciA9IEVfQ0FOQ0VMRUQpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgIHRoaXMuX2NhbmNlbEVycm9yID0gX2NhbmNlbEVycm9yO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnMgPSBbXTtcbiAgICB9XG4gICAgYWNxdWlyZSh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB7IHJlc29sdmUsIHJlamVjdCwgd2VpZ2h0LCBwcmlvcml0eSB9O1xuICAgICAgICAgICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQodGhpcy5fcXVldWUsIChvdGhlcikgPT4gcHJpb3JpdHkgPD0gb3RoZXIucHJpb3JpdHkpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xICYmIHdlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWRzIGltbWVkaWF0ZSBkaXNwYXRjaCwgc2tpcCB0aGUgcXVldWVcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrXzEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlciQyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKGNhbGxiYWNrLCB3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgcmVsZWFzZV0gPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB3YWl0Rm9yVW5sb2NrKHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICBpZiAodGhpcy5fY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgICAgICBpbnNlcnRTb3J0ZWQodGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdLCB7IHJlc29sdmUsIHByaW9yaXR5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSA8PSAwO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIHJlbGVhc2Uod2VpZ2h0ID0gMSkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICB0aGlzLl92YWx1ZSArPSB3ZWlnaHQ7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoUXVldWUoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKChlbnRyeSkgPT4gZW50cnkucmVqZWN0KHRoaXMuX2NhbmNlbEVycm9yKSk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuICAgIF9kaXNwYXRjaFF1ZXVlKCkge1xuICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDAgJiYgdGhpcy5fcXVldWVbMF0ud2VpZ2h0IDw9IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEl0ZW0odGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9kcmFpblVubG9ja1dhaXRlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZGlzcGF0Y2hJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICB0aGlzLl92YWx1ZSAtPSBpdGVtLndlaWdodDtcbiAgICAgICAgaXRlbS5yZXNvbHZlKFtwcmV2aW91c1ZhbHVlLCB0aGlzLl9uZXdSZWxlYXNlcihpdGVtLndlaWdodCldKTtcbiAgICB9XG4gICAgX25ld1JlbGVhc2VyKHdlaWdodCkge1xuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2Uod2VpZ2h0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2RyYWluVW5sb2NrV2FpdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHdhaXRlcnMuZm9yRWFjaCgod2FpdGVyKSA9PiB3YWl0ZXIucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlZFByaW9yaXR5ID0gdGhpcy5fcXVldWVbMF0ucHJpb3JpdHk7XG4gICAgICAgICAgICBmb3IgKGxldCB3ZWlnaHQgPSB0aGlzLl92YWx1ZTsgd2VpZ2h0ID4gMDsgd2VpZ2h0LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0ZXJzID0gdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICghd2FpdGVycylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHdhaXRlcnMuZmluZEluZGV4KCh3YWl0ZXIpID0+IHdhaXRlci5wcmlvcml0eSA8PSBxdWV1ZWRQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgKGkgPT09IC0xID8gd2FpdGVycyA6IHdhaXRlcnMuc3BsaWNlKDAsIGkpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgod2FpdGVyID0+IHdhaXRlci5yZXNvbHZlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY291bGRMb2NrSW1tZWRpYXRlbHkod2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9xdWV1ZVswXS5wcmlvcml0eSA8IHByaW9yaXR5KSAmJlxuICAgICAgICAgICAgd2VpZ2h0IDw9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydFNvcnRlZChhLCB2KSB7XG4gICAgY29uc3QgaSA9IGZpbmRJbmRleEZyb21FbmQoYSwgKG90aGVyKSA9PiB2LnByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICBhLnNwbGljZShpICsgMSwgMCwgdik7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXhGcm9tRW5kKGEsIHByZWRpY2F0ZSkge1xuICAgIGZvciAobGV0IGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYVtpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxudmFyIF9fYXdhaXRlciQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBNdXRleCB7XG4gICAgY29uc3RydWN0b3IoY2FuY2VsRXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2VtYXBob3JlID0gbmV3IFNlbWFwaG9yZSgxLCBjYW5jZWxFcnJvcik7XG4gICAgfVxuICAgIGFjcXVpcmUoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMSh0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChwcmlvcml0eSA9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFssIHJlbGVhc2VyXSA9IHlpZWxkIHRoaXMuX3NlbWFwaG9yZS5hY3F1aXJlKDEsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUucnVuRXhjbHVzaXZlKCgpID0+IGNhbGxiYWNrKCksIDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgaXNMb2NrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayhwcmlvcml0eSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS53YWl0Rm9yVW5sb2NrKDEsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpKVxuICAgICAgICAgICAgdGhpcy5fc2VtYXBob3JlLnJlbGVhc2UoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmNhbmNlbCgpO1xuICAgIH1cbn1cblxudmFyIF9fYXdhaXRlciA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gd2l0aFRpbWVvdXQoc3luYywgdGltZW91dCwgdGltZW91dEVycm9yID0gRV9USU1FT1VUKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNxdWlyZTogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXNUaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGltZW91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IHlpZWxkIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzeW5jLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3luYy5hY3F1aXJlKHByaW9yaXR5KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGVhc2UgPSBBcnJheS5pc0FycmF5KHRpY2tldCkgPyB0aWNrZXRbMV0gOiB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGlja2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFjaywgd2VpZ2h0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVsZWFzZSA9ICgpID0+IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCB0aGlzLmFjcXVpcmUod2VpZ2h0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRpY2tldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodGlja2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UgPSB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZWxlYXNlKHdlaWdodCkge1xuICAgICAgICAgICAgc3luYy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW5jLmNhbmNlbCgpO1xuICAgICAgICB9LFxuICAgICAgICB3YWl0Rm9yVW5sb2NrOiAod2VpZ2h0T3JQcmlvcml0eSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGxldCB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNTZW1hcGhvcmUoc3luYykpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWlnaHQgIT09IHVuZGVmaW5lZCAmJiB3ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KHRpbWVvdXRFcnJvciksIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIChpc1NlbWFwaG9yZShzeW5jKVxuICAgICAgICAgICAgICAgICAgICA/IHN5bmMud2FpdEZvclVubG9jayh3ZWlnaHQsIHByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICA6IHN5bmMud2FpdEZvclVubG9jayhwcmlvcml0eSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTG9ja2VkOiAoKSA9PiBzeW5jLmlzTG9ja2VkKCksXG4gICAgICAgIGdldFZhbHVlOiAoKSA9PiBzeW5jLmdldFZhbHVlKCksXG4gICAgICAgIHNldFZhbHVlOiAodmFsdWUpID0+IHN5bmMuc2V0VmFsdWUodmFsdWUpLFxuICAgIH07XG59XG5mdW5jdGlvbiBpc1NlbWFwaG9yZShzeW5jKSB7XG4gICAgcmV0dXJuIHN5bmMuZ2V0VmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saXNuZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5mdW5jdGlvbiB0cnlBY3F1aXJlKHN5bmMsIGFscmVhZHlBY3F1aXJlZEVycm9yID0gRV9BTFJFQURZX0xPQ0tFRCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIHdpdGhUaW1lb3V0KHN5bmMsIDAsIGFscmVhZHlBY3F1aXJlZEVycm9yKTtcbn1cblxuZXhwb3J0IHsgRV9BTFJFQURZX0xPQ0tFRCwgRV9DQU5DRUxFRCwgRV9USU1FT1VULCBNdXRleCwgU2VtYXBob3JlLCB0cnlBY3F1aXJlLCB3aXRoVGltZW91dCB9O1xuIiwidmFyIGM9KHM9PihzW3MuTmV3PTBdPVwiTmV3XCIsc1tzLkxlYXJuaW5nPTFdPVwiTGVhcm5pbmdcIixzW3MuUmV2aWV3PTJdPVwiUmV2aWV3XCIsc1tzLlJlbGVhcm5pbmc9M109XCJSZWxlYXJuaW5nXCIscykpKGN8fHt9KSxsPShzPT4oc1tzLk1hbnVhbD0wXT1cIk1hbnVhbFwiLHNbcy5BZ2Fpbj0xXT1cIkFnYWluXCIsc1tzLkhhcmQ9Ml09XCJIYXJkXCIsc1tzLkdvb2Q9M109XCJHb29kXCIsc1tzLkVhc3k9NF09XCJFYXN5XCIscykpKGx8fHt9KTtjbGFzcyBoe3N0YXRpYyBjYXJkKHQpe3JldHVybnsuLi50LHN0YXRlOmguc3RhdGUodC5zdGF0ZSksZHVlOmgudGltZSh0LmR1ZSksbGFzdF9yZXZpZXc6dC5sYXN0X3Jldmlldz9oLnRpbWUodC5sYXN0X3Jldmlldyk6dm9pZCAwfX1zdGF0aWMgcmF0aW5nKHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXtjb25zdCBlPXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCksaT10LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCkscj1sW2Ake2V9JHtpfWBdO2lmKHI9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJhdGluZzpbJHt0fV1gKTtyZXR1cm4gcn1lbHNlIGlmKHR5cGVvZiB0PT1cIm51bWJlclwiKXJldHVybiB0O3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCByYXRpbmc6WyR7dH1dYCl9c3RhdGljIHN0YXRlKHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXtjb25zdCBlPXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCksaT10LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCkscj1jW2Ake2V9JHtpfWBdO2lmKHI9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN0YXRlOlske3R9XWApO3JldHVybiByfWVsc2UgaWYodHlwZW9mIHQ9PVwibnVtYmVyXCIpcmV0dXJuIHQ7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN0YXRlOlske3R9XWApfXN0YXRpYyB0aW1lKHQpe2lmKHR5cGVvZiB0PT1cIm9iamVjdFwiJiZ0IGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gdDtpZih0eXBlb2YgdD09XCJzdHJpbmdcIil7Y29uc3QgZT1EYXRlLnBhcnNlKHQpO2lmKGlzTmFOKGUpKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkYXRlOlske3R9XWApO3JldHVybiBuZXcgRGF0ZShlKX1lbHNlIGlmKHR5cGVvZiB0PT1cIm51bWJlclwiKXJldHVybiBuZXcgRGF0ZSh0KTt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGF0ZTpbJHt0fV1gKX1zdGF0aWMgcmV2aWV3X2xvZyh0KXtyZXR1cm57Li4udCxkdWU6aC50aW1lKHQuZHVlKSxyYXRpbmc6aC5yYXRpbmcodC5yYXRpbmcpLHN0YXRlOmguc3RhdGUodC5zdGF0ZSkscmV2aWV3OmgudGltZSh0LnJldmlldyl9fX1jb25zdCBYPVwiNC43LjFcIjtEYXRlLnByb3RvdHlwZS5zY2hlZHVsZXI9ZnVuY3Rpb24ocyx0KXtyZXR1cm4gRih0aGlzLHMsdCl9LERhdGUucHJvdG90eXBlLmRpZmY9ZnVuY3Rpb24ocyx0KXtyZXR1cm4gTCh0aGlzLHMsdCl9LERhdGUucHJvdG90eXBlLmZvcm1hdD1mdW5jdGlvbigpe3JldHVybiBPKHRoaXMpfSxEYXRlLnByb3RvdHlwZS5kdWVGb3JtYXQ9ZnVuY3Rpb24ocyx0LGUpe3JldHVybiBqKHRoaXMscyx0LGUpfTtmdW5jdGlvbiBGKHMsdCxlKXtyZXR1cm4gbmV3IERhdGUoZT9oLnRpbWUocykuZ2V0VGltZSgpK3QqMjQqNjAqNjAqMWUzOmgudGltZShzKS5nZXRUaW1lKCkrdCo2MCoxZTMpfWZ1bmN0aW9uIEwocyx0LGUpe2lmKCFzfHwhdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGVcIik7Y29uc3QgaT1oLnRpbWUocykuZ2V0VGltZSgpLWgudGltZSh0KS5nZXRUaW1lKCk7bGV0IHI9MDtzd2l0Y2goZSl7Y2FzZVwiZGF5c1wiOnI9TWF0aC5mbG9vcihpLygyNCo2MCo2MCoxZTMpKTticmVhaztjYXNlXCJtaW51dGVzXCI6cj1NYXRoLmZsb29yKGkvKDYwKjFlMykpO2JyZWFrfXJldHVybiByfWZ1bmN0aW9uIE8ocyl7Y29uc3QgdD1oLnRpbWUocyksZT10LmdldEZ1bGxZZWFyKCksaT10LmdldE1vbnRoKCkrMSxyPXQuZ2V0RGF0ZSgpLGE9dC5nZXRIb3VycygpLG49dC5nZXRNaW51dGVzKCksZD10LmdldFNlY29uZHMoKTtyZXR1cm5gJHtlfS0ke3AoaSl9LSR7cChyKX0gJHtwKGEpfToke3Aobil9OiR7cChkKX1gfWZ1bmN0aW9uIHAocyl7cmV0dXJuIHM8MTA/YDAke3N9YDpgJHtzfWB9Y29uc3QgUz1bNjAsNjAsMjQsMzEsMTJdLEU9W1wic2Vjb25kXCIsXCJtaW5cIixcImhvdXJcIixcImRheVwiLFwibW9udGhcIixcInllYXJcIl07ZnVuY3Rpb24gaihzLHQsZSxpPUUpe3M9aC50aW1lKHMpLHQ9aC50aW1lKHQpLGkubGVuZ3RoIT09RS5sZW5ndGgmJihpPUUpO2xldCByPXMuZ2V0VGltZSgpLXQuZ2V0VGltZSgpLGE7Zm9yKHIvPTFlMyxhPTA7YTxTLmxlbmd0aCYmIShyPFNbYV0pO2ErKylyLz1TW2FdO3JldHVybmAke01hdGguZmxvb3Iocil9JHtlP2lbYV06XCJcIn1gfWZ1bmN0aW9uIEoocyl7cmV0dXJuIGgudGltZShzKX1mdW5jdGlvbiBLKHMpe3JldHVybiBoLnN0YXRlKHMpfWZ1bmN0aW9uIFEocyl7cmV0dXJuIGgucmF0aW5nKHMpfWNvbnN0IEk9T2JqZWN0LmZyZWV6ZShbbC5BZ2FpbixsLkhhcmQsbC5Hb29kLGwuRWFzeV0pLFo9W3tzdGFydDoyLjUsZW5kOjcsZmFjdG9yOi4xNX0se3N0YXJ0OjcsZW5kOjIwLGZhY3RvcjouMX0se3N0YXJ0OjIwLGVuZDoxLzAsZmFjdG9yOi4wNX1dO2Z1bmN0aW9uIEcocyx0LGUpe2xldCBpPTE7Zm9yKGNvbnN0IG4gb2YgWilpKz1uLmZhY3RvcipNYXRoLm1heChNYXRoLm1pbihzLG4uZW5kKS1uLnN0YXJ0LDApO3M9TWF0aC5taW4ocyxlKTtsZXQgcj1NYXRoLm1heCgyLE1hdGgucm91bmQocy1pKSk7Y29uc3QgYT1NYXRoLm1pbihNYXRoLnJvdW5kKHMraSksZSk7cmV0dXJuIHM+dCYmKHI9TWF0aC5tYXgocix0KzEpKSxyPU1hdGgubWluKHIsYSkse21pbl9pdmw6cixtYXhfaXZsOmF9fWZ1bmN0aW9uIG0ocyx0LGUpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChzLHQpLGUpfWZ1bmN0aW9uIE4ocyx0KXtjb25zdCBlPURhdGUuVVRDKHMuZ2V0VVRDRnVsbFllYXIoKSxzLmdldFVUQ01vbnRoKCkscy5nZXRVVENEYXRlKCkpLGk9RGF0ZS5VVEModC5nZXRVVENGdWxsWWVhcigpLHQuZ2V0VVRDTW9udGgoKSx0LmdldFVUQ0RhdGUoKSk7cmV0dXJuIE1hdGguZmxvb3IoKGktZSkvODY0ZTUpfWNvbnN0IGs9LjksQz0zNjUwMCxUPU9iamVjdC5mcmVlemUoWy40MDI1NSwxLjE4Mzg1LDMuMTczLDE1LjY5MTA1LDcuMTk0OSwuNTM0NSwxLjQ2MDQsLjAwNDYsMS41NDU3NSwuMTE5MiwxLjAxOTI1LDEuOTM5NSwuMTEsLjI5NjA1LDIuMjY5OCwuMjMxNSwyLjk4OTgsLjUxNjU1LC42NjIxXSksVT0hMSxxPSEwLHR0PWB2JHtYfSB1c2luZyBGU1JTLTUuMGAsXz0uMDEsYj0xMDAsUj1PYmplY3QuZnJlZXplKFtPYmplY3QuZnJlZXplKFtfLGJdKSxPYmplY3QuZnJlZXplKFtfLGJdKSxPYmplY3QuZnJlZXplKFtfLGJdKSxPYmplY3QuZnJlZXplKFtfLGJdKSxPYmplY3QuZnJlZXplKFsxLDEwXSksT2JqZWN0LmZyZWV6ZShbLjAwMSw0XSksT2JqZWN0LmZyZWV6ZShbLjAwMSw0XSksT2JqZWN0LmZyZWV6ZShbLjAwMSwuNzVdKSxPYmplY3QuZnJlZXplKFswLDQuNV0pLE9iamVjdC5mcmVlemUoWzAsLjhdKSxPYmplY3QuZnJlZXplKFsuMDAxLDMuNV0pLE9iamVjdC5mcmVlemUoWy4wMDEsNV0pLE9iamVjdC5mcmVlemUoWy4wMDEsLjI1XSksT2JqZWN0LmZyZWV6ZShbLjAwMSwuOV0pLE9iamVjdC5mcmVlemUoWzAsNF0pLE9iamVjdC5mcmVlemUoWzAsMV0pLE9iamVjdC5mcmVlemUoWzEsNl0pLE9iamVjdC5mcmVlemUoWzAsMl0pLE9iamVjdC5mcmVlemUoWzAsMl0pXSksej1zPT57bGV0IHQ9Wy4uLlRdO3JldHVybiBzPy53JiYocy53Lmxlbmd0aD09PTE5P3Q9Wy4uLnMud106cy53Lmxlbmd0aD09PTE3JiYodD1zPy53LmNvbmNhdChbMCwwXSksdFs0XT0rKHRbNV0qMit0WzRdKS50b0ZpeGVkKDgpLHRbNV09KyhNYXRoLmxvZyh0WzVdKjMrMSkvMykudG9GaXhlZCg4KSx0WzZdPSsodFs2XSsuNSkudG9GaXhlZCg4KSxjb25zb2xlLmRlYnVnKFwiW0ZTUlMgVjVdYXV0byBmaWxsIHcgdG8gMTkgbGVuZ3RoXCIpKSksdD10Lm1hcCgoZSxpKT0+bShlLFJbaV1bMF0sUltpXVsxXSkpLHtyZXF1ZXN0X3JldGVudGlvbjpzPy5yZXF1ZXN0X3JldGVudGlvbnx8ayxtYXhpbXVtX2ludGVydmFsOnM/Lm1heGltdW1faW50ZXJ2YWx8fEMsdzp0LGVuYWJsZV9mdXp6OnM/LmVuYWJsZV9mdXp6Pz9VLGVuYWJsZV9zaG9ydF90ZXJtOnM/LmVuYWJsZV9zaG9ydF90ZXJtPz9xfX07ZnVuY3Rpb24gdihzLHQpe2NvbnN0IGU9e2R1ZTpzP2gudGltZShzKTpuZXcgRGF0ZSxzdGFiaWxpdHk6MCxkaWZmaWN1bHR5OjAsZWxhcHNlZF9kYXlzOjAsc2NoZWR1bGVkX2RheXM6MCxyZXBzOjAsbGFwc2VzOjAsc3RhdGU6Yy5OZXcsbGFzdF9yZXZpZXc6dm9pZCAwfTtyZXR1cm4gdCYmdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90KGUpOmV9Y2xhc3MgZXR7YztzMDtzMTtzMjtjb25zdHJ1Y3Rvcih0KXtjb25zdCBlPWl0KCk7dGhpcy5jPTEsdGhpcy5zMD1lKFwiIFwiKSx0aGlzLnMxPWUoXCIgXCIpLHRoaXMuczI9ZShcIiBcIiksdD09bnVsbCYmKHQ9K25ldyBEYXRlKSx0aGlzLnMwLT1lKHQpLHRoaXMuczA8MCYmKHRoaXMuczArPTEpLHRoaXMuczEtPWUodCksdGhpcy5zMTwwJiYodGhpcy5zMSs9MSksdGhpcy5zMi09ZSh0KSx0aGlzLnMyPDAmJih0aGlzLnMyKz0xKX1uZXh0KCl7Y29uc3QgdD0yMDkxNjM5KnRoaXMuczArdGhpcy5jKjIzMjgzMDY0MzY1Mzg2OTYzZS0yNjtyZXR1cm4gdGhpcy5zMD10aGlzLnMxLHRoaXMuczE9dGhpcy5zMix0aGlzLnMyPXQtKHRoaXMuYz10fDApLHRoaXMuczJ9c2V0IHN0YXRlKHQpe3RoaXMuYz10LmMsdGhpcy5zMD10LnMwLHRoaXMuczE9dC5zMSx0aGlzLnMyPXQuczJ9Z2V0IHN0YXRlKCl7cmV0dXJue2M6dGhpcy5jLHMwOnRoaXMuczAsczE6dGhpcy5zMSxzMjp0aGlzLnMyfX19ZnVuY3Rpb24gaXQoKXtsZXQgcz00MDIyODcxMTk3O3JldHVybiBmdW5jdGlvbih0KXt0PVN0cmluZyh0KTtmb3IobGV0IGU9MDtlPHQubGVuZ3RoO2UrKyl7cys9dC5jaGFyQ29kZUF0KGUpO2xldCBpPS4wMjUxOTYwMzI4MjQxNjkzOCpzO3M9aT4+PjAsaS09cyxpKj1zLHM9aT4+PjAsaS09cyxzKz1pKjQyOTQ5NjcyOTZ9cmV0dXJuKHM+Pj4wKSoyMzI4MzA2NDM2NTM4Njk2M2UtMjZ9fWZ1bmN0aW9uIHJ0KHMpe2NvbnN0IHQ9bmV3IGV0KHMpLGU9KCk9PnQubmV4dCgpO3JldHVybiBlLmludDMyPSgpPT50Lm5leHQoKSo0Mjk0OTY3Mjk2fDAsZS5kb3VibGU9KCk9PmUoKSsoZSgpKjIwOTcxNTJ8MCkqMTExMDIyMzAyNDYyNTE1NjVlLTMyLGUuc3RhdGU9KCk9PnQuc3RhdGUsZS5pbXBvcnRTdGF0ZT1pPT4odC5zdGF0ZT1pLGUpLGV9Y29uc3QgJD0tLjUsRD0xOS84MTtmdW5jdGlvbiBQKHMsdCl7cmV0dXJuK01hdGgucG93KDErRCpzL3QsJCkudG9GaXhlZCg4KX1jbGFzcyBZe3BhcmFtO2ludGVydmFsTW9kaWZpZXI7X3NlZWQ7Y29uc3RydWN0b3IodCl7dGhpcy5wYXJhbT1uZXcgUHJveHkoeih0KSx0aGlzLnBhcmFtc19oYW5kbGVyX3Byb3h5KCkpLHRoaXMuaW50ZXJ2YWxNb2RpZmllcj10aGlzLmNhbGN1bGF0ZV9pbnRlcnZhbF9tb2RpZmllcih0aGlzLnBhcmFtLnJlcXVlc3RfcmV0ZW50aW9uKX1nZXQgaW50ZXJ2YWxfbW9kaWZpZXIoKXtyZXR1cm4gdGhpcy5pbnRlcnZhbE1vZGlmaWVyfXNldCBzZWVkKHQpe3RoaXMuX3NlZWQ9dH1jYWxjdWxhdGVfaW50ZXJ2YWxfbW9kaWZpZXIodCl7aWYodDw9MHx8dD4xKXRocm93IG5ldyBFcnJvcihcIlJlcXVlc3RlZCByZXRlbnRpb24gcmF0ZSBzaG91bGQgYmUgaW4gdGhlIHJhbmdlICgwLDFdXCIpO3JldHVybisoKE1hdGgucG93KHQsMS8kKS0xKS9EKS50b0ZpeGVkKDgpfWdldCBwYXJhbWV0ZXJzKCl7cmV0dXJuIHRoaXMucGFyYW19c2V0IHBhcmFtZXRlcnModCl7dGhpcy51cGRhdGVfcGFyYW1ldGVycyh0KX1wYXJhbXNfaGFuZGxlcl9wcm94eSgpe2NvbnN0IHQ9dGhpcztyZXR1cm57c2V0OmZ1bmN0aW9uKGUsaSxyKXtyZXR1cm4gaT09PVwicmVxdWVzdF9yZXRlbnRpb25cIiYmTnVtYmVyLmlzRmluaXRlKHIpJiYodC5pbnRlcnZhbE1vZGlmaWVyPXQuY2FsY3VsYXRlX2ludGVydmFsX21vZGlmaWVyKE51bWJlcihyKSkpLFJlZmxlY3Quc2V0KGUsaSxyKSwhMH19fXVwZGF0ZV9wYXJhbWV0ZXJzKHQpe2NvbnN0IGU9eih0KTtmb3IoY29uc3QgaSBpbiBlKWlmKGkgaW4gdGhpcy5wYXJhbSl7Y29uc3Qgcj1pO3RoaXMucGFyYW1bcl09ZVtyXX19aW5pdF9zdGFiaWxpdHkodCl7cmV0dXJuIE1hdGgubWF4KHRoaXMucGFyYW0ud1t0LTFdLC4xKX1pbml0X2RpZmZpY3VsdHkodCl7cmV0dXJuIHRoaXMuY29uc3RyYWluX2RpZmZpY3VsdHkodGhpcy5wYXJhbS53WzRdLU1hdGguZXhwKCh0LTEpKnRoaXMucGFyYW0ud1s1XSkrMSl9YXBwbHlfZnV6eih0LGUpe2lmKCF0aGlzLnBhcmFtLmVuYWJsZV9mdXp6fHx0PDIuNSlyZXR1cm4gTWF0aC5yb3VuZCh0KTtjb25zdCBpPXJ0KHRoaXMuX3NlZWQpKCkse21pbl9pdmw6cixtYXhfaXZsOmF9PUcodCxlLHRoaXMucGFyYW0ubWF4aW11bV9pbnRlcnZhbCk7cmV0dXJuIE1hdGguZmxvb3IoaSooYS1yKzEpK3IpfW5leHRfaW50ZXJ2YWwodCxlKXtjb25zdCBpPU1hdGgubWluKE1hdGgubWF4KDEsTWF0aC5yb3VuZCh0KnRoaXMuaW50ZXJ2YWxNb2RpZmllcikpLHRoaXMucGFyYW0ubWF4aW11bV9pbnRlcnZhbCk7cmV0dXJuIHRoaXMuYXBwbHlfZnV6eihpLGUpfWxpbmVhcl9kYW1waW5nKHQsZSl7cmV0dXJuKyh0KigxMC1lKS85KS50b0ZpeGVkKDgpfW5leHRfZGlmZmljdWx0eSh0LGUpe2NvbnN0IGk9LXRoaXMucGFyYW0ud1s2XSooZS0zKSxyPXQrdGhpcy5saW5lYXJfZGFtcGluZyhpLHQpO3JldHVybiB0aGlzLmNvbnN0cmFpbl9kaWZmaWN1bHR5KHRoaXMubWVhbl9yZXZlcnNpb24odGhpcy5pbml0X2RpZmZpY3VsdHkobC5FYXN5KSxyKSl9Y29uc3RyYWluX2RpZmZpY3VsdHkodCl7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KCt0LnRvRml4ZWQoOCksMSksMTApfW1lYW5fcmV2ZXJzaW9uKHQsZSl7cmV0dXJuKyh0aGlzLnBhcmFtLndbN10qdCsoMS10aGlzLnBhcmFtLndbN10pKmUpLnRvRml4ZWQoOCl9bmV4dF9yZWNhbGxfc3RhYmlsaXR5KHQsZSxpLHIpe2NvbnN0IGE9bC5IYXJkPT09cj90aGlzLnBhcmFtLndbMTVdOjEsbj1sLkVhc3k9PT1yP3RoaXMucGFyYW0ud1sxNl06MTtyZXR1cm4rbShlKigxK01hdGguZXhwKHRoaXMucGFyYW0ud1s4XSkqKDExLXQpKk1hdGgucG93KGUsLXRoaXMucGFyYW0ud1s5XSkqKE1hdGguZXhwKCgxLWkpKnRoaXMucGFyYW0ud1sxMF0pLTEpKmEqbiksXywzNjUwMCkudG9GaXhlZCg4KX1uZXh0X2ZvcmdldF9zdGFiaWxpdHkodCxlLGkpe3JldHVybittKHRoaXMucGFyYW0ud1sxMV0qTWF0aC5wb3codCwtdGhpcy5wYXJhbS53WzEyXSkqKE1hdGgucG93KGUrMSx0aGlzLnBhcmFtLndbMTNdKS0xKSpNYXRoLmV4cCgoMS1pKSp0aGlzLnBhcmFtLndbMTRdKSxfLDM2NTAwKS50b0ZpeGVkKDgpfW5leHRfc2hvcnRfdGVybV9zdGFiaWxpdHkodCxlKXtyZXR1cm4rbSh0Kk1hdGguZXhwKHRoaXMucGFyYW0ud1sxN10qKGUtMyt0aGlzLnBhcmFtLndbMThdKSksXywzNjUwMCkudG9GaXhlZCg4KX1mb3JnZXR0aW5nX2N1cnZlPVA7bmV4dF9zdGF0ZSh0LGUsaSl7Y29uc3R7ZGlmZmljdWx0eTpyLHN0YWJpbGl0eTphfT10Pz97ZGlmZmljdWx0eTowLHN0YWJpbGl0eTowfTtpZihlPDApdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRlbHRhX3QgXCIke2V9XCJgKTtpZihpPDB8fGk+NCl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZ3JhZGUgXCIke2l9XCJgKTtpZihyPT09MCYmYT09PTApcmV0dXJue2RpZmZpY3VsdHk6dGhpcy5pbml0X2RpZmZpY3VsdHkoaSksc3RhYmlsaXR5OnRoaXMuaW5pdF9zdGFiaWxpdHkoaSl9O2lmKGk9PT0wKXJldHVybntkaWZmaWN1bHR5OnIsc3RhYmlsaXR5OmF9O2lmKHI8MXx8YTxfKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtZW1vcnkgc3RhdGUgeyBkaWZmaWN1bHR5OiAke3J9LCBzdGFiaWxpdHk6ICR7YX0gfWApO2NvbnN0IG49dGhpcy5mb3JnZXR0aW5nX2N1cnZlKGUsYSksZD10aGlzLm5leHRfcmVjYWxsX3N0YWJpbGl0eShyLGEsbixpKSx1PXRoaXMubmV4dF9mb3JnZXRfc3RhYmlsaXR5KHIsYSxuKSxvPXRoaXMubmV4dF9zaG9ydF90ZXJtX3N0YWJpbGl0eShhLGkpO2xldCBmPWQ7aWYoaT09PTEpe2xldFt5LHddPVswLDBdO3RoaXMucGFyYW0uZW5hYmxlX3Nob3J0X3Rlcm0mJih5PXRoaXMucGFyYW0ud1sxN10sdz10aGlzLnBhcmFtLndbMThdKTtjb25zdCBnPWEvTWF0aC5leHAoeSp3KTtmPW0oK2cudG9GaXhlZCg4KSxfLHUpfXJldHVybiBlPT09MCYmdGhpcy5wYXJhbS5lbmFibGVfc2hvcnRfdGVybSYmKGY9bykse2RpZmZpY3VsdHk6dGhpcy5uZXh0X2RpZmZpY3VsdHkocixpKSxzdGFiaWxpdHk6Zn19fWZ1bmN0aW9uIEgoKXtjb25zdCBzPXRoaXMucmV2aWV3X3RpbWUuZ2V0VGltZSgpLHQ9dGhpcy5jdXJyZW50LnJlcHMsZT10aGlzLmN1cnJlbnQuZGlmZmljdWx0eSp0aGlzLmN1cnJlbnQuc3RhYmlsaXR5O3JldHVybmAke3N9XyR7dH1fJHtlfWB9ZnVuY3Rpb24gYXQocyl7cmV0dXJuIGZ1bmN0aW9uKCl7Y29uc3QgdD1SZWZsZWN0LmdldCh0aGlzLmN1cnJlbnQscyk/PzAsZT10aGlzLmN1cnJlbnQucmVwcztyZXR1cm4gU3RyaW5nKHQrZXx8MCl9fXZhciB4PShzPT4ocy5TQ0hFRFVMRVI9XCJTY2hlZHVsZXJcIixzLlNFRUQ9XCJTZWVkXCIscykpKHh8fHt9KTtjbGFzcyBBe2xhc3Q7Y3VycmVudDtyZXZpZXdfdGltZTtuZXh0PW5ldyBNYXA7YWxnb3JpdGhtO2luaXRTZWVkU3RyYXRlZ3k7Y29uc3RydWN0b3IodCxlLGkscj17c2VlZDpIfSl7dGhpcy5hbGdvcml0aG09aSx0aGlzLmluaXRTZWVkU3RyYXRlZ3k9ci5zZWVkLmJpbmQodGhpcyksdGhpcy5sYXN0PWguY2FyZCh0KSx0aGlzLmN1cnJlbnQ9aC5jYXJkKHQpLHRoaXMucmV2aWV3X3RpbWU9aC50aW1lKGUpLHRoaXMuaW5pdCgpfWluaXQoKXtjb25zdHtzdGF0ZTp0LGxhc3RfcmV2aWV3OmV9PXRoaXMuY3VycmVudDtsZXQgaT0wO3QhPT1jLk5ldyYmZSYmKGk9TihlLHRoaXMucmV2aWV3X3RpbWUpKSx0aGlzLmN1cnJlbnQubGFzdF9yZXZpZXc9dGhpcy5yZXZpZXdfdGltZSx0aGlzLmN1cnJlbnQuZWxhcHNlZF9kYXlzPWksdGhpcy5jdXJyZW50LnJlcHMrPTEsdGhpcy5hbGdvcml0aG0uc2VlZD10aGlzLmluaXRTZWVkU3RyYXRlZ3koKX1wcmV2aWV3KCl7cmV0dXJue1tsLkFnYWluXTp0aGlzLnJldmlldyhsLkFnYWluKSxbbC5IYXJkXTp0aGlzLnJldmlldyhsLkhhcmQpLFtsLkdvb2RdOnRoaXMucmV2aWV3KGwuR29vZCksW2wuRWFzeV06dGhpcy5yZXZpZXcobC5FYXN5KSxbU3ltYm9sLml0ZXJhdG9yXTp0aGlzLnByZXZpZXdJdGVyYXRvci5iaW5kKHRoaXMpfX0qcHJldmlld0l0ZXJhdG9yKCl7Zm9yKGNvbnN0IHQgb2YgSSl5aWVsZCB0aGlzLnJldmlldyh0KX1yZXZpZXcodCl7Y29uc3R7c3RhdGU6ZX09dGhpcy5sYXN0O2xldCBpO3N3aXRjaChlKXtjYXNlIGMuTmV3Omk9dGhpcy5uZXdTdGF0ZSh0KTticmVhaztjYXNlIGMuTGVhcm5pbmc6Y2FzZSBjLlJlbGVhcm5pbmc6aT10aGlzLmxlYXJuaW5nU3RhdGUodCk7YnJlYWs7Y2FzZSBjLlJldmlldzppPXRoaXMucmV2aWV3U3RhdGUodCk7YnJlYWt9aWYoaSlyZXR1cm4gaTt0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyYWRlXCIpfWJ1aWxkTG9nKHQpe2NvbnN0e2xhc3RfcmV2aWV3OmUsZHVlOmksZWxhcHNlZF9kYXlzOnJ9PXRoaXMubGFzdDtyZXR1cm57cmF0aW5nOnQsc3RhdGU6dGhpcy5jdXJyZW50LnN0YXRlLGR1ZTplfHxpLHN0YWJpbGl0eTp0aGlzLmN1cnJlbnQuc3RhYmlsaXR5LGRpZmZpY3VsdHk6dGhpcy5jdXJyZW50LmRpZmZpY3VsdHksZWxhcHNlZF9kYXlzOnRoaXMuY3VycmVudC5lbGFwc2VkX2RheXMsbGFzdF9lbGFwc2VkX2RheXM6cixzY2hlZHVsZWRfZGF5czp0aGlzLmN1cnJlbnQuc2NoZWR1bGVkX2RheXMscmV2aWV3OnRoaXMucmV2aWV3X3RpbWV9fX1jbGFzcyBWIGV4dGVuZHMgQXtuZXdTdGF0ZSh0KXtjb25zdCBlPXRoaXMubmV4dC5nZXQodCk7aWYoZSlyZXR1cm4gZTtjb25zdCBpPWguY2FyZCh0aGlzLmN1cnJlbnQpO3N3aXRjaChpLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9kaWZmaWN1bHR5KHQpLGkuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLmluaXRfc3RhYmlsaXR5KHQpLHQpe2Nhc2UgbC5BZ2FpbjppLnNjaGVkdWxlZF9kYXlzPTAsaS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoMSksaS5zdGF0ZT1jLkxlYXJuaW5nO2JyZWFrO2Nhc2UgbC5IYXJkOmkuc2NoZWR1bGVkX2RheXM9MCxpLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcig1KSxpLnN0YXRlPWMuTGVhcm5pbmc7YnJlYWs7Y2FzZSBsLkdvb2Q6aS5zY2hlZHVsZWRfZGF5cz0wLGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKDEwKSxpLnN0YXRlPWMuTGVhcm5pbmc7YnJlYWs7Y2FzZSBsLkVhc3k6e2NvbnN0IGE9dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChpLnN0YWJpbGl0eSx0aGlzLmN1cnJlbnQuZWxhcHNlZF9kYXlzKTtpLnNjaGVkdWxlZF9kYXlzPWEsaS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoYSwhMCksaS5zdGF0ZT1jLlJldmlldzticmVha31kZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZ3JhZGVcIil9Y29uc3Qgcj17Y2FyZDppLGxvZzp0aGlzLmJ1aWxkTG9nKHQpfTtyZXR1cm4gdGhpcy5uZXh0LnNldCh0LHIpLHJ9bGVhcm5pbmdTdGF0ZSh0KXtjb25zdCBlPXRoaXMubmV4dC5nZXQodCk7aWYoZSlyZXR1cm4gZTtjb25zdHtzdGF0ZTppLGRpZmZpY3VsdHk6cixzdGFiaWxpdHk6YX09dGhpcy5sYXN0LG49aC5jYXJkKHRoaXMuY3VycmVudCksZD10aGlzLmN1cnJlbnQuZWxhcHNlZF9kYXlzO3N3aXRjaChuLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KHIsdCksbi5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9zaG9ydF90ZXJtX3N0YWJpbGl0eShhLHQpLHQpe2Nhc2UgbC5BZ2Fpbjp7bi5zY2hlZHVsZWRfZGF5cz0wLG4uZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKDUsITEpLG4uc3RhdGU9aTticmVha31jYXNlIGwuSGFyZDp7bi5zY2hlZHVsZWRfZGF5cz0wLG4uZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKDEwKSxuLnN0YXRlPWk7YnJlYWt9Y2FzZSBsLkdvb2Q6e2NvbnN0IG89dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChuLnN0YWJpbGl0eSxkKTtuLnNjaGVkdWxlZF9kYXlzPW8sbi5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIobywhMCksbi5zdGF0ZT1jLlJldmlldzticmVha31jYXNlIGwuRWFzeTp7Y29uc3Qgbz10aGlzLmFsZ29yaXRobS5uZXh0X3Nob3J0X3Rlcm1fc3RhYmlsaXR5KGEsbC5Hb29kKSxmPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwobyxkKSx5PU1hdGgubWF4KHRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwobi5zdGFiaWxpdHksZCksZisxKTtuLnNjaGVkdWxlZF9kYXlzPXksbi5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoeSwhMCksbi5zdGF0ZT1jLlJldmlldzticmVha31kZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZ3JhZGVcIil9Y29uc3QgdT17Y2FyZDpuLGxvZzp0aGlzLmJ1aWxkTG9nKHQpfTtyZXR1cm4gdGhpcy5uZXh0LnNldCh0LHUpLHV9cmV2aWV3U3RhdGUodCl7Y29uc3QgZT10aGlzLm5leHQuZ2V0KHQpO2lmKGUpcmV0dXJuIGU7Y29uc3QgaT10aGlzLmN1cnJlbnQuZWxhcHNlZF9kYXlzLHtkaWZmaWN1bHR5OnIsc3RhYmlsaXR5OmF9PXRoaXMubGFzdCxuPXRoaXMuYWxnb3JpdGhtLmZvcmdldHRpbmdfY3VydmUoaSxhKSxkPWguY2FyZCh0aGlzLmN1cnJlbnQpLHU9aC5jYXJkKHRoaXMuY3VycmVudCksbz1oLmNhcmQodGhpcy5jdXJyZW50KSxmPWguY2FyZCh0aGlzLmN1cnJlbnQpO3RoaXMubmV4dF9kcyhkLHUsbyxmLHIsYSxuKSx0aGlzLm5leHRfaW50ZXJ2YWwoZCx1LG8sZixpKSx0aGlzLm5leHRfc3RhdGUoZCx1LG8sZiksZC5sYXBzZXMrPTE7Y29uc3QgeT17Y2FyZDpkLGxvZzp0aGlzLmJ1aWxkTG9nKGwuQWdhaW4pfSx3PXtjYXJkOnUsbG9nOnN1cGVyLmJ1aWxkTG9nKGwuSGFyZCl9LGc9e2NhcmQ6byxsb2c6c3VwZXIuYnVpbGRMb2cobC5Hb29kKX0sTT17Y2FyZDpmLGxvZzpzdXBlci5idWlsZExvZyhsLkVhc3kpfTtyZXR1cm4gdGhpcy5uZXh0LnNldChsLkFnYWluLHkpLHRoaXMubmV4dC5zZXQobC5IYXJkLHcpLHRoaXMubmV4dC5zZXQobC5Hb29kLGcpLHRoaXMubmV4dC5zZXQobC5FYXN5LE0pLHRoaXMubmV4dC5nZXQodCl9bmV4dF9kcyh0LGUsaSxyLGEsbixkKXt0LmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5BZ2Fpbik7Y29uc3QgdT1uL01hdGguZXhwKHRoaXMuYWxnb3JpdGhtLnBhcmFtZXRlcnMud1sxN10qdGhpcy5hbGdvcml0aG0ucGFyYW1ldGVycy53WzE4XSksbz10aGlzLmFsZ29yaXRobS5uZXh0X2ZvcmdldF9zdGFiaWxpdHkoYSxuLGQpO3Quc3RhYmlsaXR5PW0oK3UudG9GaXhlZCg4KSxfLG8pLGUuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkhhcmQpLGUuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkhhcmQpLGkuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkdvb2QpLGkuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkdvb2QpLHIuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkVhc3kpLHIuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkVhc3kpfW5leHRfaW50ZXJ2YWwodCxlLGkscixhKXtsZXQgbixkO249dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChlLnN0YWJpbGl0eSxhKSxkPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoaS5zdGFiaWxpdHksYSksbj1NYXRoLm1pbihuLGQpLGQ9TWF0aC5tYXgoZCxuKzEpO2NvbnN0IHU9TWF0aC5tYXgodGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChyLnN0YWJpbGl0eSxhKSxkKzEpO3Quc2NoZWR1bGVkX2RheXM9MCx0LmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcig1KSxlLnNjaGVkdWxlZF9kYXlzPW4sZS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIobiwhMCksaS5zY2hlZHVsZWRfZGF5cz1kLGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKGQsITApLHIuc2NoZWR1bGVkX2RheXM9dSxyLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcih1LCEwKX1uZXh0X3N0YXRlKHQsZSxpLHIpe3Quc3RhdGU9Yy5SZWxlYXJuaW5nLGUuc3RhdGU9Yy5SZXZpZXcsaS5zdGF0ZT1jLlJldmlldyxyLnN0YXRlPWMuUmV2aWV3fX1jbGFzcyBCIGV4dGVuZHMgQXtuZXdTdGF0ZSh0KXtjb25zdCBlPXRoaXMubmV4dC5nZXQodCk7aWYoZSlyZXR1cm4gZTt0aGlzLmN1cnJlbnQuc2NoZWR1bGVkX2RheXM9MCx0aGlzLmN1cnJlbnQuZWxhcHNlZF9kYXlzPTA7Y29uc3QgaT1oLmNhcmQodGhpcy5jdXJyZW50KSxyPWguY2FyZCh0aGlzLmN1cnJlbnQpLGE9aC5jYXJkKHRoaXMuY3VycmVudCksbj1oLmNhcmQodGhpcy5jdXJyZW50KTtyZXR1cm4gdGhpcy5pbml0X2RzKGkscixhLG4pLHRoaXMubmV4dF9pbnRlcnZhbChpLHIsYSxuLDApLHRoaXMubmV4dF9zdGF0ZShpLHIsYSxuKSx0aGlzLnVwZGF0ZV9uZXh0KGkscixhLG4pLHRoaXMubmV4dC5nZXQodCl9aW5pdF9kcyh0LGUsaSxyKXt0LmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9kaWZmaWN1bHR5KGwuQWdhaW4pLHQuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLmluaXRfc3RhYmlsaXR5KGwuQWdhaW4pLGUuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5pbml0X2RpZmZpY3VsdHkobC5IYXJkKSxlLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5pbml0X3N0YWJpbGl0eShsLkhhcmQpLGkuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5pbml0X2RpZmZpY3VsdHkobC5Hb29kKSxpLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5pbml0X3N0YWJpbGl0eShsLkdvb2QpLHIuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5pbml0X2RpZmZpY3VsdHkobC5FYXN5KSxyLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5pbml0X3N0YWJpbGl0eShsLkVhc3kpfWxlYXJuaW5nU3RhdGUodCl7cmV0dXJuIHRoaXMucmV2aWV3U3RhdGUodCl9cmV2aWV3U3RhdGUodCl7Y29uc3QgZT10aGlzLm5leHQuZ2V0KHQpO2lmKGUpcmV0dXJuIGU7Y29uc3QgaT10aGlzLmN1cnJlbnQuZWxhcHNlZF9kYXlzLHtkaWZmaWN1bHR5OnIsc3RhYmlsaXR5OmF9PXRoaXMubGFzdCxuPXRoaXMuYWxnb3JpdGhtLmZvcmdldHRpbmdfY3VydmUoaSxhKSxkPWguY2FyZCh0aGlzLmN1cnJlbnQpLHU9aC5jYXJkKHRoaXMuY3VycmVudCksbz1oLmNhcmQodGhpcy5jdXJyZW50KSxmPWguY2FyZCh0aGlzLmN1cnJlbnQpO3JldHVybiB0aGlzLm5leHRfZHMoZCx1LG8sZixyLGEsbiksdGhpcy5uZXh0X2ludGVydmFsKGQsdSxvLGYsaSksdGhpcy5uZXh0X3N0YXRlKGQsdSxvLGYpLGQubGFwc2VzKz0xLHRoaXMudXBkYXRlX25leHQoZCx1LG8sZiksdGhpcy5uZXh0LmdldCh0KX1uZXh0X2RzKHQsZSxpLHIsYSxuLGQpe3QuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkFnYWluKTtjb25zdCB1PXRoaXMuYWxnb3JpdGhtLm5leHRfZm9yZ2V0X3N0YWJpbGl0eShhLG4sZCk7dC5zdGFiaWxpdHk9bShuLF8sdSksZS5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuSGFyZCksZS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9yZWNhbGxfc3RhYmlsaXR5KGEsbixkLGwuSGFyZCksaS5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuR29vZCksaS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9yZWNhbGxfc3RhYmlsaXR5KGEsbixkLGwuR29vZCksci5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuRWFzeSksci5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9yZWNhbGxfc3RhYmlsaXR5KGEsbixkLGwuRWFzeSl9bmV4dF9pbnRlcnZhbCh0LGUsaSxyLGEpe2xldCBuLGQsdSxvO249dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbCh0LnN0YWJpbGl0eSxhKSxkPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoZS5zdGFiaWxpdHksYSksdT10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKGkuc3RhYmlsaXR5LGEpLG89dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChyLnN0YWJpbGl0eSxhKSxuPU1hdGgubWluKG4sZCksZD1NYXRoLm1heChkLG4rMSksdT1NYXRoLm1heCh1LGQrMSksbz1NYXRoLm1heChvLHUrMSksdC5zY2hlZHVsZWRfZGF5cz1uLHQuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKG4sITApLGUuc2NoZWR1bGVkX2RheXM9ZCxlLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihkLCEwKSxpLnNjaGVkdWxlZF9kYXlzPXUsaS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIodSwhMCksci5zY2hlZHVsZWRfZGF5cz1vLHIuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKG8sITApfW5leHRfc3RhdGUodCxlLGkscil7dC5zdGF0ZT1jLlJldmlldyxlLnN0YXRlPWMuUmV2aWV3LGkuc3RhdGU9Yy5SZXZpZXcsci5zdGF0ZT1jLlJldmlld311cGRhdGVfbmV4dCh0LGUsaSxyKXtjb25zdCBhPXtjYXJkOnQsbG9nOnRoaXMuYnVpbGRMb2cobC5BZ2Fpbil9LG49e2NhcmQ6ZSxsb2c6c3VwZXIuYnVpbGRMb2cobC5IYXJkKX0sZD17Y2FyZDppLGxvZzpzdXBlci5idWlsZExvZyhsLkdvb2QpfSx1PXtjYXJkOnIsbG9nOnN1cGVyLmJ1aWxkTG9nKGwuRWFzeSl9O3RoaXMubmV4dC5zZXQobC5BZ2FpbixhKSx0aGlzLm5leHQuc2V0KGwuSGFyZCxuKSx0aGlzLm5leHQuc2V0KGwuR29vZCxkKSx0aGlzLm5leHQuc2V0KGwuRWFzeSx1KX19Y2xhc3Mgc3R7ZnNycztjb25zdHJ1Y3Rvcih0KXt0aGlzLmZzcnM9dH1yZXBsYXkodCxlLGkpe3JldHVybiB0aGlzLmZzcnMubmV4dCh0LGUsaSl9aGFuZGxlTWFudWFsUmF0aW5nKHQsZSxpLHIsYSxuLGQpe2lmKHR5cGVvZiBlPlwidVwiKXRocm93IG5ldyBFcnJvcihcInJlc2NoZWR1bGU6IHN0YXRlIGlzIHJlcXVpcmVkIGZvciBtYW51YWwgcmF0aW5nXCIpO2xldCB1LG87aWYoZT09PWMuTmV3KXU9e3JhdGluZzpsLk1hbnVhbCxzdGF0ZTplLGR1ZTpkPz9pLHN0YWJpbGl0eTp0LnN0YWJpbGl0eSxkaWZmaWN1bHR5OnQuZGlmZmljdWx0eSxlbGFwc2VkX2RheXM6cixsYXN0X2VsYXBzZWRfZGF5czp0LmVsYXBzZWRfZGF5cyxzY2hlZHVsZWRfZGF5czp0LnNjaGVkdWxlZF9kYXlzLHJldmlldzppfSxvPXYoaSksby5sYXN0X3Jldmlldz1pO2Vsc2V7aWYodHlwZW9mIGQ+XCJ1XCIpdGhyb3cgbmV3IEVycm9yKFwicmVzY2hlZHVsZTogZHVlIGlzIHJlcXVpcmVkIGZvciBtYW51YWwgcmF0aW5nXCIpO2NvbnN0IGY9ZC5kaWZmKGksXCJkYXlzXCIpO3U9e3JhdGluZzpsLk1hbnVhbCxzdGF0ZTp0LnN0YXRlLGR1ZTp0Lmxhc3RfcmV2aWV3fHx0LmR1ZSxzdGFiaWxpdHk6dC5zdGFiaWxpdHksZGlmZmljdWx0eTp0LmRpZmZpY3VsdHksZWxhcHNlZF9kYXlzOnIsbGFzdF9lbGFwc2VkX2RheXM6dC5lbGFwc2VkX2RheXMsc2NoZWR1bGVkX2RheXM6dC5zY2hlZHVsZWRfZGF5cyxyZXZpZXc6aX0sbz17Li4udCxzdGF0ZTplLGR1ZTpkLGxhc3RfcmV2aWV3Omksc3RhYmlsaXR5OmF8fHQuc3RhYmlsaXR5LGRpZmZpY3VsdHk6bnx8dC5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czpyLHNjaGVkdWxlZF9kYXlzOmYscmVwczp0LnJlcHMrMX19cmV0dXJue2NhcmQ6byxsb2c6dX19cmVzY2hlZHVsZSh0LGUpe2NvbnN0IGk9W107bGV0IHI9dih0LmR1ZSk7Zm9yKGNvbnN0IGEgb2YgZSl7bGV0IG47aWYoYS5yZXZpZXc9aC50aW1lKGEucmV2aWV3KSxhLnJhdGluZz09PWwuTWFudWFsKXtsZXQgZD0wO3Iuc3RhdGUhPT1jLk5ldyYmci5sYXN0X3JldmlldyYmKGQ9YS5yZXZpZXcuZGlmZihyLmxhc3RfcmV2aWV3LFwiZGF5c1wiKSksbj10aGlzLmhhbmRsZU1hbnVhbFJhdGluZyhyLGEuc3RhdGUsYS5yZXZpZXcsZCxhLnN0YWJpbGl0eSxhLmRpZmZpY3VsdHksYS5kdWU/aC50aW1lKGEuZHVlKTp2b2lkIDApfWVsc2Ugbj10aGlzLnJlcGxheShyLGEucmV2aWV3LGEucmF0aW5nKTtpLnB1c2gobikscj1uLmNhcmR9cmV0dXJuIGl9Y2FsY3VsYXRlTWFudWFsUmVjb3JkKHQsZSxpLHIpe2lmKCFpKXJldHVybiBudWxsO2NvbnN0e2NhcmQ6YSxsb2c6bn09aSxkPWguY2FyZCh0KTtyZXR1cm4gZC5kdWUuZ2V0VGltZSgpPT09YS5kdWUuZ2V0VGltZSgpP251bGw6KGQuc2NoZWR1bGVkX2RheXM9YS5kdWUuZGlmZihkLmR1ZSxcImRheXNcIiksdGhpcy5oYW5kbGVNYW51YWxSYXRpbmcoZCxhLnN0YXRlLGgudGltZShlKSxuLmVsYXBzZWRfZGF5cyxyP2Euc3RhYmlsaXR5OnZvaWQgMCxyP2EuZGlmZmljdWx0eTp2b2lkIDAsYS5kdWUpKX19Y2xhc3MgVyBleHRlbmRzIFl7c3RyYXRlZ3lIYW5kbGVyPW5ldyBNYXA7U2NoZWR1bGVyO2NvbnN0cnVjdG9yKHQpe3N1cGVyKHQpO2NvbnN0e2VuYWJsZV9zaG9ydF90ZXJtOmV9PXRoaXMucGFyYW1ldGVyczt0aGlzLlNjaGVkdWxlcj1lP1Y6Qn1wYXJhbXNfaGFuZGxlcl9wcm94eSgpe2NvbnN0IHQ9dGhpcztyZXR1cm57c2V0OmZ1bmN0aW9uKGUsaSxyKXtyZXR1cm4gaT09PVwicmVxdWVzdF9yZXRlbnRpb25cIiYmTnVtYmVyLmlzRmluaXRlKHIpP3QuaW50ZXJ2YWxNb2RpZmllcj10LmNhbGN1bGF0ZV9pbnRlcnZhbF9tb2RpZmllcihOdW1iZXIocikpOmk9PT1cImVuYWJsZV9zaG9ydF90ZXJtXCImJih0LlNjaGVkdWxlcj1yPT09ITA/VjpCKSxSZWZsZWN0LnNldChlLGksciksITB9fX11c2VTdHJhdGVneSh0LGUpe3JldHVybiB0aGlzLnN0cmF0ZWd5SGFuZGxlci5zZXQodCxlKSx0aGlzfWNsZWFyU3RyYXRlZ3kodCl7cmV0dXJuIHQ/dGhpcy5zdHJhdGVneUhhbmRsZXIuZGVsZXRlKHQpOnRoaXMuc3RyYXRlZ3lIYW5kbGVyLmNsZWFyKCksdGhpc31nZXRTY2hlZHVsZXIodCxlKXtjb25zdCBpPXRoaXMuc3RyYXRlZ3lIYW5kbGVyLmdldCh4LlNFRUQpLHI9dGhpcy5zdHJhdGVneUhhbmRsZXIuZ2V0KHguU0NIRURVTEVSKXx8dGhpcy5TY2hlZHVsZXIsYT1pfHxIO3JldHVybiBuZXcgcih0LGUsdGhpcyx7c2VlZDphfSl9cmVwZWF0KHQsZSxpKXtjb25zdCByPXRoaXMuZ2V0U2NoZWR1bGVyKHQsZSkucHJldmlldygpO3JldHVybiBpJiZ0eXBlb2YgaT09XCJmdW5jdGlvblwiP2kocik6cn1uZXh0KHQsZSxpLHIpe2NvbnN0IGE9dGhpcy5nZXRTY2hlZHVsZXIodCxlKSxuPWgucmF0aW5nKGkpO2lmKG49PT1sLk1hbnVhbCl0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV2aWV3IGEgbWFudWFsIHJhdGluZ1wiKTtjb25zdCBkPWEucmV2aWV3KG4pO3JldHVybiByJiZ0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3IoZCk6ZH1nZXRfcmV0cmlldmFiaWxpdHkodCxlLGk9ITApe2NvbnN0IHI9aC5jYXJkKHQpO2U9ZT9oLnRpbWUoZSk6bmV3IERhdGU7Y29uc3QgYT1yLnN0YXRlIT09Yy5OZXc/TWF0aC5tYXgoZS5kaWZmKHIubGFzdF9yZXZpZXcsXCJkYXlzXCIpLDApOjAsbj1yLnN0YXRlIT09Yy5OZXc/dGhpcy5mb3JnZXR0aW5nX2N1cnZlKGEsK3Iuc3RhYmlsaXR5LnRvRml4ZWQoOCkpOjA7cmV0dXJuIGk/YCR7KG4qMTAwKS50b0ZpeGVkKDIpfSVgOm59cm9sbGJhY2sodCxlLGkpe2NvbnN0IHI9aC5jYXJkKHQpLGE9aC5yZXZpZXdfbG9nKGUpO2lmKGEucmF0aW5nPT09bC5NYW51YWwpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJvbGxiYWNrIGEgbWFudWFsIHJhdGluZ1wiKTtsZXQgbixkLHU7c3dpdGNoKGEuc3RhdGUpe2Nhc2UgYy5OZXc6bj1hLmR1ZSxkPXZvaWQgMCx1PTA7YnJlYWs7Y2FzZSBjLkxlYXJuaW5nOmNhc2UgYy5SZWxlYXJuaW5nOmNhc2UgYy5SZXZpZXc6bj1hLnJldmlldyxkPWEuZHVlLHU9ci5sYXBzZXMtKGEucmF0aW5nPT09bC5BZ2FpbiYmYS5zdGF0ZT09PWMuUmV2aWV3PzE6MCk7YnJlYWt9Y29uc3Qgbz17Li4ucixkdWU6bixzdGFiaWxpdHk6YS5zdGFiaWxpdHksZGlmZmljdWx0eTphLmRpZmZpY3VsdHksZWxhcHNlZF9kYXlzOmEubGFzdF9lbGFwc2VkX2RheXMsc2NoZWR1bGVkX2RheXM6YS5zY2hlZHVsZWRfZGF5cyxyZXBzOk1hdGgubWF4KDAsci5yZXBzLTEpLGxhcHNlczpNYXRoLm1heCgwLHUpLHN0YXRlOmEuc3RhdGUsbGFzdF9yZXZpZXc6ZH07cmV0dXJuIGkmJnR5cGVvZiBpPT1cImZ1bmN0aW9uXCI/aShvKTpvfWZvcmdldCh0LGUsaT0hMSxyKXtjb25zdCBhPWguY2FyZCh0KTtlPWgudGltZShlKTtjb25zdCBuPWEuc3RhdGU9PT1jLk5ldz8wOmUuZGlmZihhLmxhc3RfcmV2aWV3LFwiZGF5c1wiKSxkPXtyYXRpbmc6bC5NYW51YWwsc3RhdGU6YS5zdGF0ZSxkdWU6YS5kdWUsc3RhYmlsaXR5OmEuc3RhYmlsaXR5LGRpZmZpY3VsdHk6YS5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czowLGxhc3RfZWxhcHNlZF9kYXlzOmEuZWxhcHNlZF9kYXlzLHNjaGVkdWxlZF9kYXlzOm4scmV2aWV3OmV9LHU9e2NhcmQ6ey4uLmEsZHVlOmUsc3RhYmlsaXR5OjAsZGlmZmljdWx0eTowLGVsYXBzZWRfZGF5czowLHNjaGVkdWxlZF9kYXlzOjAscmVwczppPzA6YS5yZXBzLGxhcHNlczppPzA6YS5sYXBzZXMsc3RhdGU6Yy5OZXcsbGFzdF9yZXZpZXc6YS5sYXN0X3Jldmlld30sbG9nOmR9O3JldHVybiByJiZ0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3IodSk6dX1yZXNjaGVkdWxlKHQsZT1bXSxpPXt9KXtjb25zdHtyZWNvcmRMb2dIYW5kbGVyOnIscmV2aWV3c09yZGVyQnk6YSxza2lwTWFudWFsOm49ITAsbm93OmQ9bmV3IERhdGUsdXBkYXRlX21lbW9yeV9zdGF0ZTp1PSExfT1pO2EmJnR5cGVvZiBhPT1cImZ1bmN0aW9uXCImJmUuc29ydChhKSxuJiYoZT1lLmZpbHRlcihNPT5NLnJhdGluZyE9PWwuTWFudWFsKSk7Y29uc3Qgbz1uZXcgc3QodGhpcyksZj1vLnJlc2NoZWR1bGUoaS5maXJzdF9jYXJkfHx2KCksZSkseT1mLmxlbmd0aCx3PWguY2FyZCh0KSxnPW8uY2FsY3VsYXRlTWFudWFsUmVjb3JkKHcsZCx5P2ZbeS0xXTp2b2lkIDAsdSk7cmV0dXJuIHImJnR5cGVvZiByPT1cImZ1bmN0aW9uXCI/e2NvbGxlY3Rpb25zOmYubWFwKHIpLHJlc2NoZWR1bGVfaXRlbTpnP3IoZyk6bnVsbH06e2NvbGxlY3Rpb25zOmYscmVzY2hlZHVsZV9pdGVtOmd9fX1jb25zdCBudD1zPT5uZXcgVyhzfHx7fSk7ZXhwb3J0e0EgYXMgQWJzdHJhY3RTY2hlZHVsZXIsUiBhcyBDTEFNUF9QQVJBTUVURVJTLCQgYXMgREVDQVksSCBhcyBEZWZhdWx0SW5pdFNlZWRTdHJhdGVneSxEIGFzIEZBQ1RPUixXIGFzIEZTUlMsWSBhcyBGU1JTQWxnb3JpdGhtLHR0IGFzIEZTUlNWZXJzaW9uLGF0IGFzIEdlblNlZWRTdHJhdGVneVdpdGhDYXJkSWQsSSBhcyBHcmFkZXMsYiBhcyBJTklUX1NfTUFYLGwgYXMgUmF0aW5nLF8gYXMgU19NSU4sYyBhcyBTdGF0ZSx4IGFzIFN0cmF0ZWd5TW9kZSxoIGFzIFR5cGVDb252ZXJ0LG0gYXMgY2xhbXAsdiBhcyBjcmVhdGVFbXB0eUNhcmQsTiBhcyBkYXRlRGlmZkluRGF5cyxMIGFzIGRhdGVfZGlmZixGIGFzIGRhdGVfc2NoZWR1bGVyLFUgYXMgZGVmYXVsdF9lbmFibGVfZnV6eixxIGFzIGRlZmF1bHRfZW5hYmxlX3Nob3J0X3Rlcm0sQyBhcyBkZWZhdWx0X21heGltdW1faW50ZXJ2YWwsayBhcyBkZWZhdWx0X3JlcXVlc3RfcmV0ZW50aW9uLFQgYXMgZGVmYXVsdF93LEogYXMgZml4RGF0ZSxRIGFzIGZpeFJhdGluZyxLIGFzIGZpeFN0YXRlLFAgYXMgZm9yZ2V0dGluZ19jdXJ2ZSxPIGFzIGZvcm1hdERhdGUsbnQgYXMgZnNycyx6IGFzIGdlbmVyYXRvclBhcmFtZXRlcnMsRyBhcyBnZXRfZnV6el9yYW5nZSxqIGFzIHNob3dfZGlmZl9tZXNzYWdlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiIsIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY2hyb21lXCIgLz4gXG5cbmltcG9ydCB7IE11dGV4IH0gZnJvbSAnYXN5bmMtbXV0ZXgnO1xuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IHNlbmRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdpbmcnOyBcbmltcG9ydCB7IFN0YXRlLCBjcmVhdGVFbXB0eUNhcmQsIENhcmQgYXMgRlNSU0NhcmQgfSBmcm9tICd0cy1mc3JzJztcbmltcG9ydCB7IEJvb2ttYXJrLCBGbGFzaGNhcmQsIENoYXRNZXNzYWdlRGIsIENoYXRIaXN0b3J5SXRlbSB9IGZyb20gJy4uL3NyYy90eXBlcy9kYic7IC8vIEltcG9ydCBEQiB0eXBlc1xuXG5jb25zdCBPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCA9ICdvZmZzY3JlZW4uaHRtbCc7XG5sZXQgY3JlYXRpbmdQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG5jb25zdCBjcmVhdGlvbk11dGV4ID0gbmV3IE11dGV4KCk7XG5cbi8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBvZmZzY3JlZW4gZG9jdW1lbnQgZXhpc3RzIGFuZCBjcmVhdGUgaXQgaWYgbm90XG5hc3luYyBmdW5jdGlvbiBlbnN1cmVPZmZzY3JlZW5Eb2N1bWVudCgpIHtcbiAgLy8gVXNlIGEgbXV0ZXggdG8gcHJldmVudCBtdWx0aXBsZSBjb25jdXJyZW50IGNyZWF0aW9uIGF0dGVtcHRzXG4gIGNvbnN0IHJlbGVhc2UgPSBhd2FpdCBjcmVhdGlvbk11dGV4LmFjcXVpcmUoKTtcbiAgdHJ5IHtcbiAgICAvLyBDaGVjayBpZiB0aGUgZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuXG4gICAgIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgICAgICAvLyBAdHMtaWdub3JlIC0gQ29udGV4dFR5cGUgbWlnaHQgYmUgbWlzc2luZyBPRkZTQ1JFRU5fRE9DVU1FTlQgaW4gb2xkZXIgdHlwZXNcbiAgICAgICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCcgYXMgYnJvd3Nlci5SdW50aW1lLkNvbnRleHRUeXBlXSxcbiAgICAgICAgZG9jdW1lbnRVcmxzOiBbYnJvd3Nlci5ydW50aW1lLmdldFVSTChPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCldLFxuICAgICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdDb250ZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnW0RCIFV0aWxdIE9mZnNjcmVlbiBkb2N1bWVudCBhbHJlYWR5IGV4aXN0cy4nKTsgLy8gTGVzcyB2ZXJib3NlXG4gICAgICByZXR1cm47IC8vIEFscmVhZHkgZXhpc3RzLCB3ZSdyZSBnb29kLlxuICAgIH1cblxuICAgIC8vIElmIGNyZWF0aW9uIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MsIHdhaXQgZm9yIGl0IHRvIGNvbXBsZXRlLlxuICAgIGlmIChjcmVhdGluZ1Byb21pc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gV2FpdGluZyBmb3IgZXhpc3Rpbmcgb2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0aW9uLi4uJyk7XG4gICAgICBhd2FpdCBjcmVhdGluZ1Byb21pc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1tEQiBVdGlsXSBDcmVhdGluZyBvZmZzY3JlZW4gZG9jdW1lbnQuLi4nKTtcbiAgICBjcmVhdGluZ1Byb21pc2UgPSBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHsgLy8gVXNlIG5hdGl2ZSBjaHJvbWUgQVBJXG4gICAgICB1cmw6IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRILFxuICAgICAgcmVhc29uczogWydET01fUEFSU0VSJyBhcyBjaHJvbWUub2Zmc2NyZWVuLlJlYXNvbl0sIFxuICAgICAganVzdGlmaWNhdGlvbjogJ1Byb3ZpZGVzIFBHbGl0ZSBkYXRhYmFzZSBvcGVyYXRpb25zLicsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgY3JlYXRpbmdQcm9taXNlO1xuICAgICAgY29uc29sZS5sb2coJ1tEQiBVdGlsXSBPZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkuJyk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0RCIFV0aWxdIEVycm9yIGNyZWF0aW5nIG9mZnNjcmVlbiBkb2N1bWVudDonLCBlcnJvcik7XG4gICAgICAvLyBEb3VibGUtY2hlY2sgaWYgaXQgZXhpc3RzIG5vdywgbWF5YmUgY3JlYXRpb24gc3VjY2VlZGVkIGRlc3BpdGUgZXJyb3I/XG4gICAgICBjb25zdCBjb250ZXh0c0FmdGVyRXJyb3IgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCcgYXMgYnJvd3Nlci5SdW50aW1lLkNvbnRleHRUeXBlXSxcbiAgICAgICAgIGRvY3VtZW50VXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpXSxcbiAgICAgICB9KTtcbiAgICAgICBpZiAoY29udGV4dHNBZnRlckVycm9yLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgLy8gT25seSB0aHJvdyBpZiBpdCB0cnVseSBmYWlsZWQgYW5kIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0aW9uIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKCdbREIgVXRpbF0gT2Zmc2NyZWVuIGRvY3VtZW50IGV4aXN0ZWQgZGVzcGl0ZSBjcmVhdGlvbiBlcnJvci9yYWNlIGNvbmRpdGlvbi4nKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gUmVzZXQgdGhlIHByb21pc2Ugd2hldGhlciBpdCBzdWNjZWVkZWQgb3IgZmFpbGVkXG4gICAgICBjcmVhdGluZ1Byb21pc2UgPSBudWxsOyBcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgLy8gUmVsZWFzZSB0aGUgbXV0ZXhcbiAgICByZWxlYXNlKCk7XG4gIH1cbn1cblxuLy8gRXhwb3J0IGZ1bmN0aW9ucyB0aGF0IG1pcnJvciBQR2xpdGUgbWV0aG9kcyB2aWEgQHdlYmV4dC1jb3JlL21lc3NhZ2luZ1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWNEYihzcWw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGF3YWl0IGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCk7XG4gIC8vIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gU2VuZGluZyBkYkV4ZWMgbWVzc2FnZTonLCB7IHNxbCB9KTsgLy8gTGVzcyB2ZXJib3NlXG4gIC8vIFBHbGl0ZSBleGVjIGRvZXNuJ3Qgc3VwcG9ydCBwYXJhbXMsIHNvIHdlIG9ubHkgc2VuZCBzcWxcbiAgcmV0dXJuIHNlbmRNZXNzYWdlKCdkYkV4ZWMnLCB7IHNxbCB9KTsgXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeURiKHNxbDogc3RyaW5nLCBwYXJhbXM/OiBhbnlbXSk6IFByb21pc2U8YW55PiB7XG4gIGF3YWl0IGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCk7XG4gIC8vIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gU2VuZGluZyBkYlF1ZXJ5IG1lc3NhZ2U6JywgeyBzcWwsIHBhcmFtcyB9KTsgLy8gTGVzcyB2ZXJib3NlXG4gIHJldHVybiBzZW5kTWVzc2FnZSgnZGJRdWVyeScsIHsgc3FsLCBwYXJhbXM6IHBhcmFtcyB8fCBbXSB9KTsgXG59XG5cbi8vIC0tLSBEYXRhYmFzZSBJbnRlcmFjdGlvbiBGdW5jdGlvbnMgLS0tXG5cbi8qKlxuICogU2F2ZXMgYSBib29rbWFyayB0byB0aGUgZGF0YWJhc2UuXG4gKiBcbiAqIEBwYXJhbSBib29rbWFya0RhdGEgUGFydGlhbCBib29rbWFyayBkYXRhICh1cmwgaXMgcmVxdWlyZWQpXG4gKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBCb29rbWFyayBvYmplY3Qgd2l0aCBpdHMgSURcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJvb2ttYXJrKGJvb2ttYXJrRGF0YTogUGljazxCb29rbWFyaywgJ3VybCc+ICYgUGFydGlhbDxPbWl0PEJvb2ttYXJrLCAnaWQnIHwgJ3NhdmVkX2F0Jz4gPik6IFByb21pc2U8Qm9va21hcms+IHtcbiAgICBjb25zdCBzcWwgPSBgXG4gICAgICAgIElOU0VSVCBJTlRPIGJvb2ttYXJrcyAodXJsLCB0aXRsZSwgdGFncywgZW1iZWRkaW5nKVxuICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0KVxuICAgICAgICBSRVRVUk5JTkcgaWQsIHVybCwgdGl0bGUsIHNhdmVkX2F0LCB0YWdzLCBlbWJlZGRpbmc7XG4gICAgYDtcbiAgICAvLyBFbWJlZGRpbmcgc2hvdWxkIG5vdyBiZSBzdHJpbmcgfCBudWxsXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICBib29rbWFya0RhdGEudXJsLFxuICAgICAgICBib29rbWFya0RhdGEudGl0bGUgPz8gbnVsbCxcbiAgICAgICAgYm9va21hcmtEYXRhLnRhZ3MgPz8gbnVsbCxcbiAgICAgICAgYm9va21hcmtEYXRhLmVtYmVkZGluZyA/PyBudWxsIFxuICAgIF07XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlEYihzcWwsIHBhcmFtcyk7XG4gICAgaWYgKCFyZXN1bHQ/LnJvd3M/LlswXSkgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBib29rbWFya1wiKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF0gYXMgQm9va21hcms7XG59XG5cbi8qKlxuICogU2F2ZXMgYSBmbGFzaGNhcmQgdG8gdGhlIGRhdGFiYXNlLCBpbml0aWFsaXppbmcgRlNSUyBzdGF0ZS5cbiAqIFxuICogQHBhcmFtIGZsYXNoY2FyZERhdGEgRGF0YSBmb3IgdGhlIG5ldyBmbGFzaGNhcmQgKGV4Y2x1ZGluZyBGU1JTIHN0YXRlIGFuZCBpZC9jcmVhdGVkX2F0KVxuICogQHBhcmFtIG5vdyBUaGUgY3VycmVudCBkYXRlL3RpbWUgZm9yIGluaXRpYWxpemluZyBGU1JTIHN0YXRlXG4gKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBGbGFzaGNhcmQgb2JqZWN0IHdpdGggaXRzIElEIGFuZCBpbml0aWFsIEZTUlMgc3RhdGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZsYXNoY2FyZChmbGFzaGNhcmREYXRhOiBPbWl0PEZsYXNoY2FyZCwgJ2lkJyB8ICdjcmVhdGVkX2F0JyB8IGtleW9mIEZTUlNDYXJkIHwgJ2R1ZScgfCAnc3RhdGUnIHwgJ2xhc3RfcmV2aWV3Jz4sIG5vdzogRGF0ZSA9IG5ldyBEYXRlKCkpOiBQcm9taXNlPEZsYXNoY2FyZD4ge1xuICAgIC8vIEdldCBpbml0aWFsIEZTUlMgc3RhdGUgdXNpbmcgdHMtZnNyc1xuICAgIGNvbnN0IGluaXRpYWxDYXJkU3RhdGUgPSBjcmVhdGVFbXB0eUNhcmQobm93KTtcbiAgICAvLyBHZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3RhdGUgZW51bVxuICAgIGNvbnN0IHN0YXRlU3RyaW5nID0gU3RhdGVbaW5pdGlhbENhcmRTdGF0ZS5zdGF0ZV07IFxuXG4gICAgY29uc3Qgc3FsID0gYFxuICAgICAgICBJTlNFUlQgSU5UTyBmbGFzaGNhcmRzIChcbiAgICAgICAgICAgIHR5cGUsIGZyb250LCBiYWNrLCBjbG96ZV90ZXh0LCBzb3VyY2VfdXJsLCBzb3VyY2VfaGlnaGxpZ2h0LCBcbiAgICAgICAgICAgIHNvdXJjZV9sYW5ndWFnZSwgdGFyZ2V0X2xhbmd1YWdlLCBjb250ZXh0LCB0YWdzLCBcbiAgICAgICAgICAgIGR1ZSwgc3RhYmlsaXR5LCBkaWZmaWN1bHR5LCBlbGFwc2VkX2RheXMsIHNjaGVkdWxlZF9kYXlzLCBcbiAgICAgICAgICAgIHJlcHMsIGxhcHNlcywgc3RhdGUsIGxhc3RfcmV2aWV3XG4gICAgICAgIClcbiAgICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5LCAkMTAsICQxMSwgJDEyLCAkMTMsICQxNCwgJDE1LCAkMTYsICQxNywgJDE4LCAkMTkpXG4gICAgICAgIFJFVFVSTklORyAqOyBcbiAgICBgO1xuICAgIFxuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgZmxhc2hjYXJkRGF0YS50eXBlLFxuICAgICAgICBmbGFzaGNhcmREYXRhLmZyb250ID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEuYmFjayA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLmNsb3plX3RleHQgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5zb3VyY2VfdXJsID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEuc291cmNlX2hpZ2hsaWdodCA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLnNvdXJjZV9sYW5ndWFnZSA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLnRhcmdldF9sYW5ndWFnZSA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLmNvbnRleHQgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS50YWdzID8/IG51bGwsXG4gICAgICAgIC8vIEZTUlMgaW5pdGlhbCBzdGF0ZTpcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5kdWUudG9JU09TdHJpbmcoKSwgLy8gU3RvcmUgYXMgSVNPIHN0cmluZ1xuICAgICAgICBpbml0aWFsQ2FyZFN0YXRlLnN0YWJpbGl0eSxcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5kaWZmaWN1bHR5LFxuICAgICAgICBpbml0aWFsQ2FyZFN0YXRlLmVsYXBzZWRfZGF5cyxcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5zY2hlZHVsZWRfZGF5cyxcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5yZXBzLFxuICAgICAgICBpbml0aWFsQ2FyZFN0YXRlLmxhcHNlcyxcbiAgICAgICAgc3RhdGVTdHJpbmcsIC8vIFVzZSB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdGF0ZVxuICAgICAgICBpbml0aWFsQ2FyZFN0YXRlLmxhc3RfcmV2aWV3Py50b0lTT1N0cmluZygpID8/IG51bGwgLy8gU3RvcmUgYXMgSVNPIHN0cmluZyBvciBudWxsXG4gICAgXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5RGIoc3FsLCBwYXJhbXMpO1xuICAgIGlmICghcmVzdWx0Py5yb3dzPy5bMF0pIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgZmxhc2hjYXJkXCIpO1xuICAgIC8vIEVuc3VyZSB0aGUgcmV0dXJuZWQgc3RhdGUgaXMgY29ycmVjdGx5IHR5cGVkIGlmIG5lZWRlZCBlbHNld2hlcmUgaW1tZWRpYXRlbHksXG4gICAgLy8gYWx0aG91Z2ggcmVhZGluZyBmcm9tIERCIGxhdGVyIHNob3VsZCB5aWVsZCB0aGUgc3RyaW5nLlxuICAgIGNvbnN0IHNhdmVkRmxhc2hjYXJkID0gcmVzdWx0LnJvd3NbMF0gYXMgRmxhc2hjYXJkO1xuICAgIC8vIFBHbGl0ZSBtaWdodCByZXR1cm4gdGhlIG51bWVyaWMgZW51bSB2YWx1ZSBpZiB0aGUgY29sdW1uIHR5cGUgYWZmaW5pdHkgaXMgaW50ZWdlcixcbiAgICAvLyBidXQgc2luY2UgaXQncyBURVhULCBpdCBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgd2UgaW5zZXJ0ZWQuXG4gICAgLy8gSWYgaXNzdWVzIGFyaXNlLCBtYW51YWxseSBjYXN0IGhlcmU6IHNhdmVkRmxhc2hjYXJkLnN0YXRlID0gU3RhdGVbc2F2ZWRGbGFzaGNhcmQuc3RhdGUgYXMgbnVtYmVyXSBhcyB1bmtub3duIGFzIFN0YXRlO1xuICAgIHJldHVybiBzYXZlZEZsYXNoY2FyZDtcbn1cblxuLyoqXG4gKiBTYXZlcyBhIGNoYXQgbWVzc2FnZSB0byB0aGUgZGF0YWJhc2UuXG4gKiBcbiAqIEBwYXJhbSBtZXNzYWdlRGF0YSBUaGUgY2hhdCBtZXNzYWdlIGRhdGFcbiAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIENoYXRNZXNzYWdlRGIgb2JqZWN0IHdpdGggaXRzIElEIGFuZCB0aW1lc3RhbXBcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoYXRNZXNzYWdlKG1lc3NhZ2VEYXRhOiBPbWl0PENoYXRNZXNzYWdlRGIsICdpZCcgfCAndGltZXN0YW1wJz4pOiBQcm9taXNlPENoYXRNZXNzYWdlRGI+IHtcbiAgICBjb25zdCBzcWwgPSBgXG4gICAgICAgIElOU0VSVCBJTlRPIGNoYXRfbWVzc2FnZXMgKHJvbGUsIGNvbnRlbnQsIGJvb2ttYXJrX2lkLCBmbGFzaGNhcmRfaWQpXG4gICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQpXG4gICAgICAgIFJFVFVSTklORyAqO1xuICAgIGA7XG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICBtZXNzYWdlRGF0YS5yb2xlLFxuICAgICAgICBtZXNzYWdlRGF0YS5jb250ZW50ID8/IG51bGwsXG4gICAgICAgIG1lc3NhZ2VEYXRhLmJvb2ttYXJrX2lkID8/IG51bGwsXG4gICAgICAgIG1lc3NhZ2VEYXRhLmZsYXNoY2FyZF9pZCA/PyBudWxsXG4gICAgXTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeURiKHNxbCwgcGFyYW1zKTtcbiAgICBpZiAoIXJlc3VsdD8ucm93cz8uWzBdKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGNoYXQgbWVzc2FnZVwiKTtcbiAgICBjb25zb2xlLmxvZygnW2RiLnRzIGNyZWF0ZUNoYXRNZXNzYWdlXSBSYXcgREIgcmVzdWx0IHJvdzonLCByZXN1bHQucm93c1swXSk7IFxuICAgIHJldHVybiByZXN1bHQucm93c1swXSBhcyBDaGF0TWVzc2FnZURiO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY2hhdCBoaXN0b3J5LCBqb2luaW5nIGJvb2ttYXJrcyBhbmQgZmxhc2hjYXJkcy5cbiAqIFxuICogQHBhcmFtIGxpbWl0IE1heGltdW0gbnVtYmVyIG9mIG1lc3NhZ2VzIHRvIHJldHJpZXZlIChvcHRpb25hbClcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIENoYXRIaXN0b3J5SXRlbSBvYmplY3RzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaGF0SGlzdG9yeShsaW1pdD86IG51bWJlcik6IFByb21pc2U8Q2hhdEhpc3RvcnlJdGVtW10+IHtcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIHF1ZXJ5IHRvIGZldGNoIG1lc3NhZ2VzIGFuZCBqb2luIHJlbGF0ZWQgZGF0YVxuICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgU0VMRUNUIFxuICAgICAgICAgICAgbS5pZCBhcyBtZXNzYWdlX2lkLCAtLSBBbGlhcyB0aGUgbWVzc2FnZSBJRFxuICAgICAgICAgICAgbS5yb2xlLCBtLmNvbnRlbnQsIG0uYm9va21hcmtfaWQsIG0uZmxhc2hjYXJkX2lkLCBtLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIGIuaWQgYXMgYm9va21hcmtfaWRfam9pbmVkLCBiLnVybCBhcyBib29rbWFya191cmwsIGIudGl0bGUgYXMgYm9va21hcmtfdGl0bGUsIGIuc2F2ZWRfYXQgYXMgYm9va21hcmtfc2F2ZWRfYXQsIGIudGFncyBhcyBib29rbWFya190YWdzLCBiLmVtYmVkZGluZyBhcyBib29rbWFya19lbWJlZGRpbmcsIFxuICAgICAgICAgICAgZi5pZCBhcyBmbGFzaGNhcmRfaWRfam9pbmVkLCBmLiogLS0gU2VsZWN0IGFsbCBmbGFzaGNhcmQgZmllbGRzXG4gICAgICAgIEZST00gY2hhdF9tZXNzYWdlcyBtXG4gICAgICAgIExFRlQgSk9JTiBib29rbWFya3MgYiBPTiBtLmJvb2ttYXJrX2lkID0gYi5pZFxuICAgICAgICBMRUZUIEpPSU4gZmxhc2hjYXJkcyBmIE9OIG0uZmxhc2hjYXJkX2lkID0gZi5pZFxuICAgICAgICBPUkRFUiBCWSBtLnRpbWVzdGFtcCBERVNDXG4gICAgICAgICR7bGltaXQgPyAnTElNSVQgPycgOiAnJ31cbiAgICBgO1xuICAgIGNvbnN0IHBhcmFtcyA9IGxpbWl0ID8gW2xpbWl0XSA6IFtdO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5RGIoc3FsLCBwYXJhbXMpO1xuXG4gICAgaWYgKCFyZXN1bHQ/LnJvd3MpIHJldHVybiBbXTtcblxuICAgIGNvbnNvbGUubG9nKCdbZGIudHMgZ2V0Q2hhdEhpc3RvcnldIFJhdyBEQiByZXN1bHQgcm93czonLCByZXN1bHQucm93cyk7XG5cbiAgICAvLyBNYXAgdGhlIHJhdyByb3dzIHRvIHRoZSBDaGF0SGlzdG9yeUl0ZW0gdW5pb24gdHlwZVxuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoKHJvdzogYW55KTogQ2hhdEhpc3RvcnlJdGVtID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogQ2hhdE1lc3NhZ2VEYiA9IHtcbiAgICAgICAgICAgIGlkOiByb3cubWVzc2FnZV9pZCwgLy8gVXNlIHRoZSBleHBsaWNpdCBhbGlhcyBoZXJlXG4gICAgICAgICAgICByb2xlOiByb3cucm9sZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJvdy5jb250ZW50LFxuICAgICAgICAgICAgYm9va21hcmtfaWQ6IHJvdy5ib29rbWFya19pZCwgLy8gVGhpcyBjb21lcyBmcm9tIG0uKiwgc2hvdWxkIGJlIGNvcnJlY3RcbiAgICAgICAgICAgIGZsYXNoY2FyZF9pZDogcm93LmZsYXNoY2FyZF9pZCwgLy8gVGhpcyBjb21lcyBmcm9tIG0uKiwgc2hvdWxkIGJlIGNvcnJlY3RcbiAgICAgICAgICAgIHRpbWVzdGFtcDogcm93LnRpbWVzdGFtcCxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocm93LnJvbGUgPT09ICdib29rbWFyaycgJiYgcm93LmJvb2ttYXJrX2lkX2pvaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgYm9va21hcms6IEJvb2ttYXJrID0ge1xuICAgICAgICAgICAgICAgIGlkOiByb3cuYm9va21hcmtfaWRfam9pbmVkLCAvLyBVc2UgdGhlIHNwZWNpZmljIGpvaW4gYWxpYXNcbiAgICAgICAgICAgICAgICB1cmw6IHJvdy5ib29rbWFya191cmwsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJvdy5ib29rbWFya190aXRsZSxcbiAgICAgICAgICAgICAgICBzYXZlZF9hdDogcm93LmJvb2ttYXJrX3NhdmVkX2F0LFxuICAgICAgICAgICAgICAgIHRhZ3M6IHJvdy5ib29rbWFya190YWdzLFxuICAgICAgICAgICAgICAgIGVtYmVkZGluZzogcm93LmJvb2ttYXJrX2VtYmVkZGluZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnYm9va21hcmsnLCBtZXNzYWdlLCBib29rbWFyayB9O1xuICAgICAgICB9IGVsc2UgaWYgKHJvdy5yb2xlID09PSAnZmxhc2hjYXJkJyAmJiByb3cuZmxhc2hjYXJkX2lkX2pvaW5lZCkge1xuICAgICAgICAgICAgIC8vIE1hcCBhbGwgZmxhc2hjYXJkIGZpZWxkcyBmcm9tIHRoZSByb3cgXG4gICAgICAgICAgICAgY29uc3QgZmxhc2hjYXJkOiBGbGFzaGNhcmQgPSB7XG4gICAgICAgICAgICAgICAgIGlkOiByb3cuZmxhc2hjYXJkX2lkX2pvaW5lZCwgLy8gVXNlIHRoZSBzcGVjaWZpYyBqb2luIGFsaWFzXG4gICAgICAgICAgICAgICAgIHR5cGU6IHJvdy50eXBlLFxuICAgICAgICAgICAgICAgICBmcm9udDogcm93LmZyb250LFxuICAgICAgICAgICAgICAgICBiYWNrOiByb3cuYmFjayxcbiAgICAgICAgICAgICAgICAgY2xvemVfdGV4dDogcm93LmNsb3plX3RleHQsXG4gICAgICAgICAgICAgICAgIHNvdXJjZV91cmw6IHJvdy5zb3VyY2VfdXJsLFxuICAgICAgICAgICAgICAgICBzb3VyY2VfaGlnaGxpZ2h0OiByb3cuc291cmNlX2hpZ2hsaWdodCxcbiAgICAgICAgICAgICAgICAgc291cmNlX2xhbmd1YWdlOiByb3cuc291cmNlX2xhbmd1YWdlLFxuICAgICAgICAgICAgICAgICB0YXJnZXRfbGFuZ3VhZ2U6IHJvdy50YXJnZXRfbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgIGNvbnRleHQ6IHJvdy5jb250ZXh0LFxuICAgICAgICAgICAgICAgICB0YWdzOiByb3cudGFnc18xLCAvLyBLZWVwIGV4aXN0aW5nIGFsaWFzIGZvciB0YWdzIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiByb3cuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgICAgICAgZHVlOiByb3cuZHVlLFxuICAgICAgICAgICAgICAgICBzdGFiaWxpdHk6IHJvdy5zdGFiaWxpdHksXG4gICAgICAgICAgICAgICAgIGRpZmZpY3VsdHk6IHJvdy5kaWZmaWN1bHR5LFxuICAgICAgICAgICAgICAgICBlbGFwc2VkX2RheXM6IHJvdy5lbGFwc2VkX2RheXMsXG4gICAgICAgICAgICAgICAgIHNjaGVkdWxlZF9kYXlzOiByb3cuc2NoZWR1bGVkX2RheXMsXG4gICAgICAgICAgICAgICAgIHJlcHM6IHJvdy5yZXBzLFxuICAgICAgICAgICAgICAgICBsYXBzZXM6IHJvdy5sYXBzZXMsXG4gICAgICAgICAgICAgICAgIHN0YXRlOiByb3cuc3RhdGUgYXMgU3RhdGUsXG4gICAgICAgICAgICAgICAgIGxhc3RfcmV2aWV3OiByb3cubGFzdF9yZXZpZXcsXG4gICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdmbGFzaGNhcmQnLCBtZXNzYWdlLCBmbGFzaGNhcmQgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZvciByZWd1bGFyIG1lc3NhZ2VzLCB1c2UgdGhlIGJhc2UgbWVzc2FnZSBvYmplY3RcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdtZXNzYWdlJywgZGF0YTogbWVzc2FnZSB9OyBcbiAgICAgICAgfVxuICAgIH0pLnJldmVyc2UoKTsgLy8gUmV2ZXJzZSBiYWNrIHRvIGNocm9ub2xvZ2ljYWwgb3JkZXJcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgZmxhc2hjYXJkcyBkdWUgZm9yIHJldmlldy5cbiAqIFxuICogQHBhcmFtIG5vdyBUaGUgY3VycmVudCBkYXRlL3RpbWUgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBkdWUgZGF0ZVxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgZHVlIEZsYXNoY2FyZCBvYmplY3RzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREdWVGbGFzaGNhcmRzKG5vdzogRGF0ZSA9IG5ldyBEYXRlKCkpOiBQcm9taXNlPEZsYXNoY2FyZFtdPiB7XG4gICAgY29uc3Qgc3FsID0gYFxuICAgICAgICBTRUxFQ1QgKiBGUk9NIGZsYXNoY2FyZHNcbiAgICAgICAgV0hFUkUgZHVlIDw9ID9cbiAgICAgICAgT1JERVIgQlkgZHVlIEFTQztcbiAgICBgO1xuICAgIGNvbnN0IHBhcmFtcyA9IFtub3cudG9JU09TdHJpbmcoKV07XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlEYihzcWwsIHBhcmFtcyk7XG4gICAgcmV0dXJuIChyZXN1bHQ/LnJvd3MgfHwgW10pIGFzIEZsYXNoY2FyZFtdO1xufVxuXG4vLyBGdXR1cmUgZnVuY3Rpb25zICh1cGRhdGVGbGFzaGNhcmRTdGF0ZSwgZGVsZXRlQm9va21hcmssIGV0Yy4pIGNhbiBiZSBhZGRlZCBoZXJlLlxuXG4vLyBTY2hlbWEgaXMgaW5pdGlhbGl6ZWQgZGlyZWN0bHkgaW4gb2Zmc2NyZWVuLnRzXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVNjaGVtYSgpIHsgLi4uIH0gIiwiaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIHR5cGUgT2xsYW1hU3RyZWFtQ2h1bmsgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tZXNzYWdpbmcnO1xuaW1wb3J0IHR5cGUgeyBPbGxhbWFDb25maWcsIEVtYmVkZGluZ1Jlc3BvbnNlIH0gZnJvbSAnLi4vbGxtU2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IExMTUNoYXRQcm92aWRlciwgUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCwgTExNRW1iZWRkaW5nUHJvdmlkZXIsIFByb3ZpZGVyRW1iZWRkaW5nUmVxdWVzdCwgUHJvdmlkZXJDaGF0Q29tcGxldGlvblJlcXVlc3QsIENoYXRDb21wbGV0aW9uUmVzcG9uc2UgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gLS0tIE9sbGFtYSBDaGF0IEltcGxlbWVudGF0aW9uIC0tLSBcblxuYXN5bmMgZnVuY3Rpb24gc3RyZWFtT2xsYW1hQ2hhdChyZXF1ZXN0OiBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyBwcm9tcHQsIGhpc3RvcnkgPSBbXSwgY29uZmlnLCBzZW5kQ2h1bmsgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3Qgb2xsYW1hQ29uZmlnID0gY29uZmlnIGFzIE9sbGFtYUNvbmZpZzsgLy8gVHlwZSBhc3NlcnRpb25cblxuICAgIGNvbnN0IG1vZGVsID0gb2xsYW1hQ29uZmlnLmNoYXRNb2RlbDtcbiAgICBjb25zdCBlbmRwb2ludCA9IG9sbGFtYUNvbmZpZy5lbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpOyAvLyBFbnN1cmUgbm8gdHJhaWxpbmcgc2xhc2hcbiAgICBjb25zdCBhcGlVcmwgPSBgJHtlbmRwb2ludH0vYXBpL2NoYXRgOyAvLyBVc2UgT2xsYW1hIEFQSSBlbmRwb2ludFxuXG4gICAgY29uc29sZS5sb2coYFtvbGxhbWFQcm92aWRlcl0gU2VuZGluZyBjaGF0IHJlcXVlc3QgdG8gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgbWVzc2FnZXM6IFsuLi5oaXN0b3J5LCB7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgICAgICAgICAgc3RyZWFtOiB0cnVlXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vayB8fCAhcmVzcG9uc2UuYm9keSkge1xuICAgICAgICBjb25zdCBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJGYWlsZWQgdG8gcmVhZCBlcnJvciBib2R5XCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9sbGFtYSBBUEkgZXJyb3IgKCR7cmVzcG9uc2Uuc3RhdHVzfSk6ICR7ZXJyb3JCb2R5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBidWZmZXIgPSAnJztcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmIChkb25lKSBicmVhaztcblxuICAgICAgICBidWZmZXIgKz0gZGVjb2Rlci5kZWNvZGUodmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBsaW5lcyA9IGJ1ZmZlci5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGJ1ZmZlciA9IGxpbmVzLnBvcCgpIHx8ICcnOyAvLyBLZWVwIGluY29tcGxldGUgbGluZVxuXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgICAgaWYgKGxpbmUudHJpbSgpID09PSAnJykgY29udGludWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gSlNPTi5wYXJzZShsaW5lKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VDaHVuazogT2xsYW1hU3RyZWFtQ2h1bmsgfCBudWxsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmIChjaHVuay5tZXNzYWdlPy5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQ2h1bmsgPSB7IHN0YXR1czogJ2NodW5rJywgY29udGVudDogY2h1bmsubWVzc2FnZS5jb250ZW50IH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaHVuay5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCBPbGxhbWEncyBkb25lIHN0cnVjdHVyZVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUNodW5rID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZG9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiBjaHVuay5tb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBjaHVuay5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsX2R1cmF0aW9uOiBjaHVuay50b3RhbF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkX2R1cmF0aW9uOiBjaHVuay5sb2FkX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdF9ldmFsX2NvdW50OiBjaHVuay5wcm9tcHRfZXZhbF9jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRfZXZhbF9kdXJhdGlvbjogY2h1bmsucHJvbXB0X2V2YWxfZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbF9jb3VudDogY2h1bmsuZXZhbF9jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmFsX2R1cmF0aW9uOiBjaHVuay5ldmFsX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltvbGxhbWFQcm92aWRlcl0gU3RyZWFtIGZpbmlzaGVkLlwiLCByZXNwb25zZUNodW5rLnN0YXRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VDaHVuaykge1xuICAgICAgICAgICAgICAgICAgIHNlbmRDaHVuayhyZXNwb25zZUNodW5rKTsgLy8gVXNlIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2xsYW1hUHJvdmlkZXJdIEZhaWxlZCB0byBwYXJzZSBPbGxhbWEgc3RyZWFtIGNodW5rOlwiLCBsaW5lLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAgaWYgKGJ1ZmZlci50cmltKCkpIHtcbiAgICAgICAgIGNvbnNvbGUud2FybihcIltvbGxhbWFQcm92aWRlcl0gU3RyZWFtIGVuZGVkIHdpdGggdW5wcm9jZXNzZWQgYnVmZmVyOlwiLCBidWZmZXIpO1xuICAgICB9XG59XG5cbi8vIC0tLSBPbGxhbWEgQ2hhdCBDb21wbGV0aW9uIChOb24tU3RyZWFtaW5nKSAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIG9sbGFtYUNoYXRDb21wbGV0aW9uKHJlcXVlc3Q6IFByb3ZpZGVyQ2hhdENvbXBsZXRpb25SZXF1ZXN0KTogUHJvbWlzZTxDaGF0Q29tcGxldGlvblJlc3BvbnNlIHwgbnVsbD4ge1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5ID0gW10sIGNvbmZpZyB9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBvbGxhbWFDb25maWcgPSBjb25maWcgYXMgT2xsYW1hQ29uZmlnO1xuXG4gICAgY29uc3QgbW9kZWwgPSBvbGxhbWFDb25maWcuY2hhdE1vZGVsO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gb2xsYW1hQ29uZmlnLmVuZHBvaW50LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgY29uc3QgYXBpVXJsID0gYCR7ZW5kcG9pbnR9L2FwaS9jaGF0YDtcblxuICAgIGNvbnNvbGUubG9nKGBbb2xsYW1hUHJvdmlkZXJdIFNlbmRpbmcgTk9OLVNUUkVBTUlORyBjaGF0IHJlcXVlc3QgdG8gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogWy4uLmhpc3RvcnksIHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBwcm9tcHQgfV0sXG4gICAgICAgICAgICAgICAgc3RyZWFtOiBmYWxzZSAvLyBFeHBsaWNpdGx5IHNldCBzdHJlYW0gdG8gZmFsc2VcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJGYWlsZWQgdG8gcmVhZCBlcnJvciBib2R5XCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW29sbGFtYVByb3ZpZGVyXSBDaGF0IENvbXBsZXRpb24gQVBJIGVycm9yICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yQm9keX1gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBvbiBBUEkgZXJyb3JcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBWYWxpZGF0ZSB0aGUgcmVzcG9uc2Ugc3RydWN0dXJlXG4gICAgICAgIGlmICghcmVzdWx0Lm1lc3NhZ2UgfHwgdHlwZW9mIHJlc3VsdC5tZXNzYWdlLmNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltvbGxhbWFQcm92aWRlcl0gSW52YWxpZCByZXNwb25zZSBmb3JtYXQgZnJvbSBPbGxhbWEgQ2hhdCBBUEkgKG5vbi1zdHJlYW1pbmcpLiAnbWVzc2FnZS5jb250ZW50JyBub3QgZm91bmQgb3Igbm90IGEgc3RyaW5nLlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJbb2xsYW1hUHJvdmlkZXJdIFJlY2VpdmVkIG5vbi1zdHJlYW1pbmcgcmVzcG9uc2U6XCIsIHJlc3VsdCk7XG4gICAgICAgIFxuICAgICAgICAvLyBNYXAgdG8gdGhlIHN0YW5kYXJkIENoYXRDb21wbGV0aW9uUmVzcG9uc2UgZm9ybWF0XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgcm9sZTogJ2Fzc2lzdGFudCcsIC8vIEFzc3VtZSByb2xlIGlzIGFzc2lzdGFudFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3VsdC5tZXNzYWdlLmNvbnRlbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNhZ2U6IHtcbiAgICAgICAgICAgICAgICAgcHJvbXB0X3Rva2VuczogcmVzdWx0LnByb21wdF9ldmFsX2NvdW50LFxuICAgICAgICAgICAgICAgICBjb21wbGV0aW9uX3Rva2VuczogcmVzdWx0LmV2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgIC8vIHRvdGFsX3Rva2VuczogcmVzdWx0Lj8sIC8vIE9sbGFtYSBtaWdodCBub3QgcHJvdmlkZSB0b3RhbCBkaXJlY3RseSBpbiBub24tc3RyZWFtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJbmNsdWRlIG90aGVyIGZpZWxkcyBpZiBuZWVkZWRcbiAgICAgICAgfTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICBjb25zb2xlLmVycm9yKFwiW29sbGFtYVByb3ZpZGVyXSBOZXR3b3JrIG9yIHBhcnNpbmcgZXJyb3IgZHVyaW5nIGNoYXQgY29tcGxldGlvbjpcIiwgZXJyb3IpO1xuICAgICAgICAgcmV0dXJuIG51bGw7IC8vIFJldHVybiBudWxsIG9uIGZldGNoL3BhcnNlIGVycm9yXG4gICAgfVxufVxuXG4vLyAtLS0gT2xsYW1hIEVtYmVkZGluZyBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIGdldE9sbGFtYUVtYmVkZGluZ3MocmVxdWVzdDogUHJvdmlkZXJFbWJlZGRpbmdSZXF1ZXN0KTogUHJvbWlzZTxFbWJlZGRpbmdSZXNwb25zZT4ge1xuICAgIGNvbnN0IHsgY29udGVudCwgY29uZmlnIH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IG9sbGFtYUNvbmZpZyA9IGNvbmZpZyBhcyBPbGxhbWFDb25maWc7XG5cbiAgICBpZiAoIW9sbGFtYUNvbmZpZy5lbWJlZGRpbmdNb2RlbCkgeyAvLyBEb3VibGUgY2hlY2ssIHRob3VnaCBzZXJ2aWNlIGxheWVyIHNob3VsZCBhbHNvIGNoZWNrXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbGxhbWEgY29uZmlndXJhdGlvbiBtaXNzaW5nIHJlcXVpcmVkIGVtYmVkZGluZ01vZGVsLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RlbCA9IG9sbGFtYUNvbmZpZy5lbWJlZGRpbmdNb2RlbDtcbiAgICBjb25zdCBlbmRwb2ludCA9IG9sbGFtYUNvbmZpZy5lbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIGNvbnN0IGFwaVVybCA9IGAke2VuZHBvaW50fS9hcGkvZW1iZWRkaW5nc2A7XG5cbiAgICBjb25zb2xlLmxvZyhgW29sbGFtYVByb3ZpZGVyXSBSZXF1ZXN0aW5nIGVtYmVkZGluZ3MgZnJvbSAke2FwaVVybH0gd2l0aCBtb2RlbCAke21vZGVsfWApO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9sbGFtYSBlbWJlZGRpbmcgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgc2luZ2xlIHN0cmluZyBpbnB1dCBpbiB0aGlzIGltcGxlbWVudGF0aW9uLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIHByb21wdDogY29udGVudCBcbiAgICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIkZhaWxlZCB0byByZWFkIGVycm9yIGJvZHlcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgT2xsYW1hIEVtYmVkZGluZ3MgQVBJIGVycm9yICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yQm9keX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoIXJlc3VsdC5lbWJlZGRpbmcgfHwgIUFycmF5LmlzQXJyYXkocmVzdWx0LmVtYmVkZGluZykpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZm9ybWF0IGZyb20gT2xsYW1hIEVtYmVkZGluZ3MgQVBJLiAnZW1iZWRkaW5nJyBhcnJheSBub3QgZm91bmQuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGVtYmVkZGluZ3M6IFtyZXN1bHQuZW1iZWRkaW5nXSBcbiAgICB9O1xufVxuXG4vLyBFeHBvcnQgdGhlIHByb3ZpZGVyIG9iamVjdCBhZGhlcmluZyB0byB0aGUgaW50ZXJmYWNlc1xuZXhwb3J0IGNvbnN0IG9sbGFtYVByb3ZpZGVyOiBMTE1DaGF0UHJvdmlkZXIgJiBMTE1FbWJlZGRpbmdQcm92aWRlciA9IHtcbiAgICBwcm92aWRlcklkOiAnb2xsYW1hJyxcbiAgICBzdHJlYW1DaGF0OiBzdHJlYW1PbGxhbWFDaGF0LFxuICAgIGNoYXRDb21wbGV0aW9uOiBvbGxhbWFDaGF0Q29tcGxldGlvbixcbiAgICBnZXRFbWJlZGRpbmdzOiBnZXRPbGxhbWFFbWJlZGRpbmdzLFxufTsgIiwiaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIHR5cGUgT2xsYW1hU3RyZWFtQ2h1bmsgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tZXNzYWdpbmcnO1xuaW1wb3J0IHR5cGUgeyBPcGVuUm91dGVyQ29uZmlnIH0gZnJvbSAnLi4vbGxtU2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IExMTUNoYXRQcm92aWRlciwgUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyAtLS0gT3BlblJvdXRlciBDaGF0IEltcGxlbWVudGF0aW9uIC0tLSBcblxuYXN5bmMgZnVuY3Rpb24gc3RyZWFtT3BlblJvdXRlckNoYXQocmVxdWVzdDogUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5ID0gW10sIGNvbmZpZywgc2VuZENodW5rIH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IG9wZW5Sb3V0ZXJDb25maWcgPSBjb25maWcgYXMgT3BlblJvdXRlckNvbmZpZzsgLy8gVHlwZSBhc3NlcnRpb25cblxuICAgIGNvbnN0IG1vZGVsID0gb3BlblJvdXRlckNvbmZpZy5jaGF0TW9kZWw7XG4gICAgY29uc3QgYXBpS2V5ID0gb3BlblJvdXRlckNvbmZpZy5hcGlLZXk7XG4gICAgY29uc3QgYXBpVXJsID0gXCJodHRwczovL29wZW5yb3V0ZXIuYWkvYXBpL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcblxuICAgIGNvbnNvbGUubG9nKGBbb3BlblJvdXRlclByb3ZpZGVyXSBTZW5kaW5nIGNoYXQgcmVxdWVzdCB0byAke2FwaVVybH0gd2l0aCBtb2RlbCAke21vZGVsfWApO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIC8vIFRPRE86IENvbnNpZGVyIGFkZGluZyB0aGVzZSBoZWFkZXJzIGlmIGRlc2lyZWRcbiAgICAgICAgICAgIC8vICdIVFRQLVJlZmVyZXInOiAnJywgLy8gWU9VUl9TSVRFX1VSTFxuICAgICAgICAgICAgLy8gJ1gtVGl0bGUnOiAnJywgLy8gWU9VUl9TSVRFX05BTUVcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgbWVzc2FnZXM6IFsuLi5oaXN0b3J5LCB7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgICAgICAgICAgc3RyZWFtOiB0cnVlXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgIGlmICghcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcGVuUm91dGVyIEFQSSBlcnJvciAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtlcnJvckJvZHl9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgbGV0IGJ1ZmZlciA9ICcnO1xuICAgIGxldCBkb25lID0gZmFsc2U7XG5cbiAgICAvLyBPcGVuUm91dGVyIHVzZXMgU2VydmVyLVNlbnQgRXZlbnRzIChTU0UpIGZvcm1hdFxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBjb25zdCB7IGRvbmU6IHJlYWRlckRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBkb25lID0gcmVhZGVyRG9uZTtcblxuICAgICAgICBidWZmZXIgKz0gZGVjb2Rlci5kZWNvZGUodmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBsaW5lcyA9IGJ1ZmZlci5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGJ1ZmZlciA9IGxpbmVzLnBvcCgpIHx8ICcnO1xuXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnZGF0YTogJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQ29udGVudCA9IGxpbmUuc3Vic3RyaW5nKDYpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUNvbnRlbnQgPT09ICdbRE9ORV0nKSB7XG4gICAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsoeyBzdGF0dXM6ICdkb25lJywgc3RhdHM6IHt9IH0pOyAvLyBTZW5kIHNpbXBsZSBkb25lIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW29wZW5Sb3V0ZXJQcm92aWRlcl0gU3RyZWFtIGZpbmlzaGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlOyAvLyBFbnN1cmUgb3V0ZXIgbG9vcCB0ZXJtaW5hdGVzXG4gICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gRXhpdCBpbm5lciBsb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IEpTT04ucGFyc2UoZGF0YUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY2h1bmsuY2hvaWNlcz8uWzBdPy5kZWx0YT8uY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRDaHVuayh7IHN0YXR1czogJ2NodW5rJywgY29udGVudDogY29udGVudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBFeHRyYWN0IHVzYWdlIHN0YXRzIGlmIG5lZWRlZD9cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW29wZW5Sb3V0ZXJQcm92aWRlcl0gRmFpbGVkIHRvIHBhcnNlIHN0cmVhbSBjaHVuazpcIiwgZGF0YUNvbnRlbnQsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYnVmZmVyLnRyaW0oKSkgeyBcbiAgICAgICAgY29uc29sZS53YXJuKFwiW29wZW5Sb3V0ZXJQcm92aWRlcl0gU3RyZWFtIGVuZGVkIHdpdGggdW5wcm9jZXNzZWQgYnVmZmVyOlwiLCBidWZmZXIpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0IHRoZSBwcm92aWRlciBvYmplY3QgYWRoZXJpbmcgdG8gdGhlIGludGVyZmFjZVxuZXhwb3J0IGNvbnN0IG9wZW5Sb3V0ZXJQcm92aWRlcjogTExNQ2hhdFByb3ZpZGVyID0ge1xuICAgIHByb3ZpZGVySWQ6ICdvcGVucm91dGVyJyxcbiAgICBzdHJlYW1DaGF0OiBzdHJlYW1PcGVuUm91dGVyQ2hhdCxcbiAgICAvLyBObyBnZXRFbWJlZGRpbmdzIGZvciBPcGVuUm91dGVyIGluIHRoaXMgZXhhbXBsZSB5ZXRcbn07ICIsIi8vIHNyYy9zZXJ2aWNlcy9sbG1TZXJ2aWNlLnRzXG5cbmltcG9ydCB7IHF1ZXJ5RGIgfSBmcm9tICcuLi8uLi91dGlscy9kYic7IC8vIFRvIGxvYWQgY29uZmlnXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSwgT2xsYW1hU3RyZWFtQ2h1bmsgfSBmcm9tICcuLi8uLi91dGlscy9tZXNzYWdpbmcnOyAvLyBGb3Igc3RyZWFtaW5nIHJlc3BvbnNlcyBiYWNrXG5pbXBvcnQgdHlwZSB7IExMTVByb3ZpZGVyLCBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QsIExMTUVtYmVkZGluZ1Byb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvdHlwZXMnO1xuXG4vLyBBZGQgcHJvdmlkZXIgaW1wb3J0c1xuaW1wb3J0IHsgb2xsYW1hUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9vbGxhbWEnO1xuaW1wb3J0IHsgb3BlblJvdXRlclByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvb3BlbnJvdXRlcic7XG5cbi8vIC0tLSBDb25maWd1cmF0aW9uIFR5cGVzIC0tLVxuXG4vLyBSZXVzZSBDaGF0TWVzc2FnZSBmcm9tIG1lc3NhZ2luZy50cyBpZiBzdWl0YWJsZSwgb3IgcmVkZWZpbmUgaWYgbmVlZGVkXG5pbXBvcnQgdHlwZSB7IENoYXRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcblxuLy8gQmFzZSBjb25maWd1cmF0aW9uIHN0cnVjdHVyZSAoeW91IG1pZ2h0IHN0b3JlIHRoaXMgYXMgSlNPTiBpbiB0aGUgREIpXG5leHBvcnQgaW50ZXJmYWNlIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogTExNUHJvdmlkZXI7XG4gIGNoYXRNb2RlbDogc3RyaW5nO1xuICBlbWJlZGRpbmdNb2RlbD86IHN0cmluZzsgLy8gT3B0aW9uYWwsIG1pZ2h0IG5vdCBiZSBuZWVkZWQgZm9yIGFsbCBwcm92aWRlcnMgb3Igc2VwYXJhdGUgY29uZmlnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2xsYW1hQ29uZmlnIGV4dGVuZHMgTExNQ29uZmlnQmFzZSB7XG4gIHByb3ZpZGVyOiAnb2xsYW1hJztcbiAgZW5kcG9pbnQ6IHN0cmluZzsgLy8gZS5nLiwgaHR0cDovL2xvY2FsaG9zdDoxMTQzNFxuICAvLyBlbWJlZGRpbmdNb2RlbCBpcyByZXF1aXJlZCBmb3IgbG9jYWwgT2xsYW1hIGVtYmVkZGluZ1xuICBlbWJlZGRpbmdNb2RlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5Sb3V0ZXJDb25maWcgZXh0ZW5kcyBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6ICdvcGVucm91dGVyJztcbiAgYXBpS2V5OiBzdHJpbmc7XG4gIC8vIE9wZW5Sb3V0ZXIgbWlnaHQgdXNlIHNwZWNpZmljIG1vZGVsIGlkZW50aWZpZXJzIGRpZmZlcmVudCBmcm9tIE9sbGFtYVxuICAvLyBFbWJlZGRpbmcgbW9kZWwgbWlnaHQgYmUgaW1wbGljaXQgb3IgYSBzcGVjaWZpYyBvbmUgaWYgdGhleSBvZmZlciBpdFxufVxuXG4vLyBBZGQgVmVuaWNlQ29uZmlnIChldmVuIGlmIGVtcHR5IGZvciBub3cpXG5leHBvcnQgaW50ZXJmYWNlIFZlbmljZUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ3ZlbmljZSc7XG4gIGFwaUtleT86IHVuZGVmaW5lZDsgLy8gTm8gQVBJIGtleSBuZWVkZWRcbiAgZW1iZWRkaW5nTW9kZWw/OiB1bmRlZmluZWQ7XG4gIC8vIEFkZCB3YWxsZXQgYWRkcmVzcyBvciBvdGhlciByZWxldmFudCBmaWVsZHMgbGF0ZXJcbn1cblxuZXhwb3J0IHR5cGUgTExNVXNlckNvbmZpZyA9IE9sbGFtYUNvbmZpZyB8IE9wZW5Sb3V0ZXJDb25maWcgfCBWZW5pY2VDb25maWc7IC8vIFVuaW9uIHR5cGVcblxuLy8gLS0tIFNlcnZpY2UgQXJndW1lbnQgVHlwZXMgLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWFtQ2hhdFJlcXVlc3Qge1xuICBwcm9tcHQ6IHN0cmluZztcbiAgaGlzdG9yeT86IENoYXRNZXNzYWdlW107XG4gIGNvbmZpZzogTExNVXNlckNvbmZpZzsgLy8gUGFzcyB0aGUgbG9hZGVkIGNvbmZpZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkZGluZ1JlcXVlc3Qge1xuICBjb250ZW50OiBzdHJpbmdbXSB8IHN0cmluZzsgLy8gQWxsb3cgc2luZ2xlIHN0cmluZyBvciBhcnJheVxuICBjb25maWc6IExMTVVzZXJDb25maWc7XG59XG5cbi8vIC0tLSBTZXJ2aWNlIFJlc3BvbnNlIFR5cGVzIC0tLVxuXG4vLyBGb3IgY2hhdCwgd2Ugc3RyZWFtIE9sbGFtYVN0cmVhbUNodW5rIHZpYSBzZW5kTWVzc2FnZVxuLy8gRm9yIGVtYmVkZGluZ3MsIHdlIHJldHVybiB0aGUgdmVjdG9ycyBkaXJlY3RseVxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRpbmdSZXNwb25zZSB7XG4gIGVtYmVkZGluZ3M6IG51bWJlcltdW107IC8vIEFycmF5IG9mIGVtYmVkZGluZyB2ZWN0b3JzXG59XG5cblxuLy8gLS0tIFNlcnZpY2UgSW50ZXJmYWNlIChDb25jZXB0dWFsIC0gaW1wbGVtZW50YXRpb24gZm9sbG93cykgLS0tXG5cbi8qKlxuICogTG9hZHMgdGhlIHVzZXIncyBMTE0gY29uZmlndXJhdGlvbiBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqL1xubGV0IHVzZXJDb25maWdDYWNoZTogTExNVXNlckNvbmZpZyB8IG51bGwgPSBudWxsO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyQ29uZmlnKCk6IFByb21pc2U8TExNVXNlckNvbmZpZyB8IG51bGw+IHtcbiAgaWYgKHVzZXJDb25maWdDYWNoZSkgcmV0dXJuIHVzZXJDb25maWdDYWNoZTtcbiAgY29uc29sZS5sb2coJ1tsbG1TZXJ2aWNlXSBMb2FkaW5nIHVzZXIgY29uZmlndXJhdGlvbiBmcm9tIERCLi4uJyk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlEYignU0VMRUNUIGNvbmZpZ19qc29uIEZST00gdXNlcl9jb25maWd1cmF0aW9uIFdIRVJFIGlkID0gMTsnKTtcbiAgICBpZiAocmVzdWx0Py5yb3dzPy5bMF0/LmNvbmZpZ19qc29uKSB7XG4gICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKHJlc3VsdC5yb3dzWzBdLmNvbmZpZ19qc29uKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbbGxtU2VydmljZV0gTG9hZGVkIGNvbmZpZzonLCBjb25maWcpO1xuICAgICAgdXNlckNvbmZpZ0NhY2hlID0gY29uZmlnOyAvLyBDYWNoZSB0aGUgbG9hZGVkIGNvbmZpZ1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdbbGxtU2VydmljZV0gTm8gY29uZmlndXJhdGlvbiBmb3VuZCBpbiBkYXRhYmFzZS4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbbGxtU2VydmljZV0gRXJyb3IgbG9hZGluZyBjb25maWd1cmF0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cbi8qKlxuICogSGFuZGxlcyBzdHJlYW1pbmcgY2hhdCByZXNwb25zZXMgZnJvbSB0aGUgY29uZmlndXJlZCBMTE0gcHJvdmlkZXIuXG4gKiBTZW5kcyBjaHVua3MgYmFjayB2aWEgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywgY2h1bmspLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RyZWFtQ2hhdFJlc3BvbnNlKHJlcXVlc3Q6IHsgcHJvbXB0OiBzdHJpbmc7IGhpc3Rvcnk6IGFueVtdOyBjb25maWc6IExMTVVzZXJDb25maWcgfSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSwgY29uZmlnIH0gPSByZXF1ZXN0O1xuICBjb25zb2xlLmxvZyhgW2xsbVNlcnZpY2VdIFJvdXRpbmcgY2hhdCBzdHJlYW0gZm9yIHByb3ZpZGVyOiAke2NvbmZpZy5wcm92aWRlcn1gKTtcbiAgY29uc3QgcHJvdmlkZXIgPSBnZXRQcm92aWRlcihjb25maWcpO1xuICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG4gIH1cbiAgaWYgKCFwcm92aWRlci5zdHJlYW1DaGF0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlciAke2NvbmZpZy5wcm92aWRlcn0gZG9lcyBub3Qgc3VwcG9ydCBzdHJlYW1pbmcgY2hhdC5gKTtcbiAgfVxuICBjb25zdCBwcm92aWRlclJlcXVlc3Q6IFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QgPSB7XG4gICAgcHJvbXB0LFxuICAgIGhpc3RvcnksXG4gICAgY29uZmlnLFxuICAgIHNlbmRDaHVuazogKGNodW5rKSA9PiB7XG4gICAgICBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCBjaHVuaykuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgY2h1bmsgdG8gVUk6XCIsIGUpKTtcbiAgICB9XG4gIH07XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJvdmlkZXIuc3RyZWFtQ2hhdChwcm92aWRlclJlcXVlc3QpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlXSBFcnJvciBkdXJpbmcgc3RyZWFtQ2hhdCBmb3IgJHtjb25maWcucHJvdmlkZXJ9OmAsIGVycm9yKTtcbiAgICAvLyBFbnN1cmUgdGhlIGVycm9yIG9iamVjdCBjb25mb3JtcyB0byBPbGxhbWFTdHJlYW1DaHVua1xuICAgIHNlbmRNZXNzYWdlKCdvbGxhbWFSZXNwb25zZScsIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJywgLy8gQ29ycmVjdGx5IHVzZSB0aGUgc3RhdHVzIGZpZWxkXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpXG4gICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgZXJyb3IgY2h1bmsgdG8gVUk6XCIsIGUpKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgZW1iZWRkaW5ncyBmb3IgdGhlIGdpdmVuIGNvbnRlbnQgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgcHJvdmlkZXIuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbWJlZGRpbmdzKHJlcXVlc3Q6IEVtYmVkZGluZ1JlcXVlc3QpOiBQcm9taXNlPEVtYmVkZGluZ1Jlc3BvbnNlPiB7XG4gICBjb25zdCB7IGNvbmZpZyB9ID0gcmVxdWVzdDtcblxuICAgaWYgKCFjb25maWcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gZ2V0RW1iZWRkaW5ncyBjYWxsZWQgd2l0aCBudWxsIGNvbmZpZy5cIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xMTSBjb25maWd1cmF0aW9uIGlzIG1pc3NpbmcuJyk7XG4gICB9XG5cbiAgIGNvbnNvbGUubG9nKGBbbGxtU2VydmljZV0gUm91dGluZyBlbWJlZGRpbmdzIHJlcXVlc3QgZm9yIHByb3ZpZGVyOiAke2NvbmZpZy5wcm92aWRlcn1gKTtcblxuICAgdHJ5IHtcbiAgICAgICBsZXQgcHJvdmlkZXJNb2R1bGU6IExMTUVtYmVkZGluZ1Byb3ZpZGVyO1xuXG4gICAgICAgLy8gVXNlIHN3aXRjaCBzdGF0ZW1lbnQgZm9yIHByb3ZpZGVyIHJvdXRpbmdcbiAgICAgICBzd2l0Y2ggKGNvbmZpZy5wcm92aWRlcikge1xuICAgICAgICAgY2FzZSAnb2xsYW1hJzoge1xuICAgICAgICAgICBjb25zdCB7IG9sbGFtYVByb3ZpZGVyIH0gPSBhd2FpdCBpbXBvcnQoJy4vcHJvdmlkZXJzL29sbGFtYScpO1xuICAgICAgICAgICBpZiAoISgnZ2V0RW1iZWRkaW5ncycgaW4gb2xsYW1hUHJvdmlkZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ09sbGFtYSBwcm92aWRlciBkb2VzIG5vdCBzdXBwb3J0IGdldEVtYmVkZGluZ3MnKTtcbiAgICAgICAgICAgcHJvdmlkZXJNb2R1bGUgPSBvbGxhbWFQcm92aWRlciBhcyBMTE1FbWJlZGRpbmdQcm92aWRlcjtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG4gICAgICAgICBjYXNlICdvcGVucm91dGVyJzpcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbmZpZy5wcm92aWRlcn0gZW1iZWRkaW5ncyBub3QgeWV0IGltcGxlbWVudGVkLmApO1xuICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIFVuc3VwcG9ydGVkIHByb3ZpZGVyIGZvciBlbWJlZGRpbmdzXCIpO1xuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBMTE0gcHJvdmlkZXIgZm9yIGVtYmVkZGluZ3NcIik7XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgLy8gQ2FsbCB0aGUgcHJvdmlkZXIncyBtZXRob2QgKHByb3ZpZGVyTW9kdWxlIGlzIGd1YXJhbnRlZWQgdG8gYmUgYXNzaWduZWQgaWYgbm90IHRocm93bilcbiAgICAgICByZXR1cm4gYXdhaXQgcHJvdmlkZXJNb2R1bGUuZ2V0RW1iZWRkaW5ncyhyZXF1ZXN0KTtcblxuICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gRXJyb3IgZHVyaW5nIGVtYmVkZGluZyByb3V0aW5nIG9yIGV4ZWN1dGlvbjpgLCBlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRW1iZWRkaW5nIFNlcnZpY2UgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpfWApO1xuICAgfVxufVxuXG4vLyBSZW1vdmUgb2xkIHByb3ZpZGVyIGltcGxlbWVudGF0aW9ucyBcblxuLy8gLS0tIE5ldyBGbGFzaGNhcmQgR2VuZXJhdGlvbiBGdW5jdGlvbiAtLS1cblxuLy8gRGVmaW5lIHRoZSBleHBlY3RlZCBzdHJ1Y3R1cmUgb2YgdGhlIEpTT04gcmVzcG9uc2UgZnJvbSB0aGUgTExNXG5pbnRlcmZhY2UgRmxhc2hjYXJkR2VuZXJhdGlvblJlc3BvbnNlIHtcbiAgZnJvbnRCYWNrOiB7XG4gICAgZnJvbnQ6IHN0cmluZztcbiAgICBiYWNrOiBzdHJpbmc7XG4gIH07XG4gIGNsb3plOiB7XG4gICAgdGV4dDogc3RyaW5nO1xuICB9O1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBwcm9tcHQgKFVwZGF0ZWQgZm9yIFJlYWRhYmlsaXR5ICYgQ2xhcml0eSlcbmZ1bmN0aW9uIGNyZWF0ZUZsYXNoY2FyZFByb21wdChzZWxlY3RlZFRleHQ6IHN0cmluZywgc291cmNlVXJsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBVc2UgYSBtdWx0aS1saW5lIHRlbXBsYXRlIGxpdGVyYWwgZm9yIGJldHRlciByZWFkYWJpbGl0eVxuICAgIGxldCBwcm9tcHQgPSBgXG5HZW5lcmF0ZSB0d28gdHlwZXMgb2YgZmxhc2hjYXJkcyBmcm9tIHRoZSB0ZXh0IGJlbG93OiBhIGNvbmNpc2UgXCJGbGFzaGNhcmRcIiAoRnJvbnQvQmFjaykgYW5kIGEgXCJDbG96ZVwiIGRlbGV0aW9uIGNhcmQuXG5cblRleHQgU2VsZWN0aW9uOlxuXCJcIlwiXG4ke3NlbGVjdGVkVGV4dH1cblwiXCJcIlxuJHtzb3VyY2VVcmwgPyBgXFxcXG5Tb3VyY2UgVVJMIChmb3IgY29udGV4dCk6ICR7c291cmNlVXJsfWAgOiAnJ31cblxuSW5zdHJ1Y3Rpb25zOlxuXG4xLiAgKipGbGFzaGNhcmQgKEZyb250L0JhY2spOioqXG4gICAgKiAgIEZyb250OiBBIHNob3J0IHRvcGljIG9yIGNvbmNlcHQgKG1heCA4IHdvcmRzKS5cbiAgICAqICAgQmFjazogQSBjb25jaXNlIGZhY3Qgb3IgZGVmaW5pdGlvbiByZWxhdGVkIHRvIHRoZSBmcm9udCAobWF4IDggd29yZHMpLlxuICAgICogICAqKklNUE9SVEFOVDoqKiBEbyBOT1QgaW5jbHVkZSB0cmFpbGluZyBwdW5jdHVhdGlvbi4gQmFjayBzaG91bGQgT05MWSBjb250YWluIHRoZSBmYWN0LCBubyBmaWxsZXIuXG5cbjIuICAqKkNsb3plIENhcmQ6KipcbiAgICAqICAgQ3JlYXRlIGEgc2luZ2xlIHNlbnRlbmNlIHVzaW5nIHRoZSBtYWluIGlkZWEuXG4gICAgKiAgIFJlcGxhY2UgdGhlIHNpbmdsZSBtb3N0ICptZWFuaW5nZnVsKiBrZXl3b3JkL3BocmFzZSB3aXRoIHt7YzE6OmFuc3dlcn19LlxuICAgICogICAqKkFWT0lEKiogZGVsZXRpbmcgdHJpdmlhbCB3b3JkcyAodGhlLCBpcywgYSkgb3IgdGhlIG9idmlvdXMgbWFpbiBzdWJqZWN0LlxuXG4zLiAgKipPdXRwdXQgRm9ybWF0OioqXG4gICAgKiAgIFJldHVybiBPTkxZIGEgdmFsaWQgSlNPTiBvYmplY3QuIE5vIGV4dHJhIHRleHQsIGV4cGxhbmF0aW9ucywgb3IgbWFya2Rvd24uXG4gICAgKiAgIFVzZSB0aGlzIEVYQUNUIHN0cnVjdHVyZTpcbiAgICBcXGBcXGBcXGBqc29uXG4gICAge1xuICAgICAgXCJmbGFzaGNhcmRcIjogeyBcImZyb250XCI6IFwidG9waWMvY29uY2VwdFwiLCBcImJhY2tcIjogXCJjb25jaXNlIGZhY3RcIiB9LFxuICAgICAgXCJjbG96ZVwiOiB7IFwidGV4dFwiOiBcIlNlbnRlbmNlIHdpdGgge3tjMTo6YW5zd2VyfX0gZGVsZXRpb24uXCIgfVxuICAgIH1cbiAgICBcXGBcXGBcXGBcblxuRXhhbXBsZXM6XG5cbi0tLSBFeGFtcGxlIDEgLS0tXG5JbnB1dCBUZXh0OiBcIlRoZSBFaWZmZWwgVG93ZXIsIGxvY2F0ZWQgaW4gUGFyaXMsIEZyYW5jZSwgd2FzIGNvbXBsZXRlZCBpbiAxODg5LlwiXG5PdXRwdXQgSlNPTjpcblxcYFxcYFxcYGpzb25cbntcbiAgXCJmbGFzaGNhcmRcIjogeyBcImZyb250XCI6IFwiRWlmZmVsIFRvd2VyIExvY2F0aW9uXCIsIFwiYmFja1wiOiBcIlBhcmlzLCBGcmFuY2VcIiB9LFxuICBcImNsb3plXCI6IHsgXCJ0ZXh0XCI6IFwiVGhlIEVpZmZlbCBUb3dlciwgbG9jYXRlZCBpbiBQYXJpcywgRnJhbmNlLCB3YXMgY29tcGxldGVkIGluIHt7YzE6OjE4ODl9fVwiIH1cbn1cblxcYFxcYFxcYFxuKEZsYXNoY2FyZDogR29vZCAtIGNvbmNpc2UgdG9waWMvZmFjdC4gQ2xvemU6IEdvb2QgLSBzcGVjaWZpYyBkZXRhaWwgZGVsZXRlZC4pXG5cbi0tLSBFeGFtcGxlIDIgLS0tXG5JbnB1dCBUZXh0OiBcIlBob3Rvc3ludGhlc2lzIGlzIHRoZSBwcm9jZXNzIHVzZWQgYnkgcGxhbnRzIHRvIGNvbnZlcnQgbGlnaHQgZW5lcmd5IGludG8gY2hlbWljYWwgZW5lcmd5LlwiXG5PdXRwdXQgSlNPTjpcblxcYFxcYFxcYGpzb25cbntcbiAgXCJmbGFzaGNhcmRcIjogeyBcImZyb250XCI6IFwiUGhvdG9zeW50aGVzaXNcIiwgXCJiYWNrXCI6IFwiQ29udmVydHMgbGlnaHQgdG8gY2hlbWljYWwgZW5lcmd5XCIgfSxcbiAgXCJjbG96ZVwiOiB7IFwidGV4dFwiOiBcIlBob3Rvc3ludGhlc2lzIGlzIHRoZSBwcm9jZXNzIHVzZWQgYnkgcGxhbnRzIHRvIGNvbnZlcnQge3tjMTo6bGlnaHQgZW5lcmd5fX0gaW50byBjaGVtaWNhbCBlbmVyZ3lcIiB9XG59XG5cXGBcXGBcXGBcbihGbGFzaGNhcmQ6IEdvb2QgLSBjb25jZXB0L2RlZmluaXRpb24uIENsb3plOiBHb29kIC0ga2V5IGNvbmNlcHQgZGVsZXRlZC4pXG5cbi0tLSBFeGFtcGxlIDMgLS0tXG5JbnB1dCBUZXh0OiBcIlRoZSBXYWNob3dza2lzIHdyb3RlIGFuZCBkaXJlY3RlZCB0aGUgTWF0cml4IGZpbG0gc2VyaWVzLlwiXG5PdXRwdXQgSlNPTjpcblxcYFxcYFxcYGpzb25cbntcbiAgXCJmbGFzaGNhcmRcIjogeyBcImZyb250XCI6IFwiVGhlIE1hdHJpeCBEaXJlY3RvcnNcIiwgXCJiYWNrXCI6IFwiVGhlIFdhY2hvd3NraXNcIiB9LFxuICBcImNsb3plXCI6IHsgXCJ0ZXh0XCI6IFwiVGhlIHt7YzE6OldhY2hvd3NraXN9fSB3cm90ZSBhbmQgZGlyZWN0ZWQgdGhlIE1hdHJpeCBmaWxtIHNlcmllc1wiIH1cbn1cblxcYFxcYFxcYFxuKEZsYXNoY2FyZDogR29vZCAtIHNwZWNpZmljIHJvbGUuIENsb3plOiBCZXR0ZXIgLSBkZWxldGVkIHRoZSBkaXJlY3RvcnMgaW5zdGVhZCBvZiB0aGUgdHJpdmlhbCAnTWF0cml4Jy4pXG5cbi0tLSBFeGFtcGxlIDQgKEJhZCBFeGFtcGxlcykgLS0tXG5JbnB1dCBUZXh0OiBcIlJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMuXCJcbkJhZCBGbGFzaGNhcmQgQmFjazogXCJSZWFjdCBpcyBhIEpTIGxpYnJhcnkgZm9yIFVJcy5cIiAoVHJhaWxpbmcgcGVyaW9kKVxuQmFkIEZsYXNoY2FyZCBCYWNrOiBcIkl0IGlzIGEgbGlicmFyeSBmb3IgYnVpbGRpbmcgVUlzXCIgKEV4Y2VlZHMgOCB3b3JkcywgZmlsbGVyKVxuQmFkIENsb3plOiBcIlJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB7e2MxOjp1c2VyIGludGVyZmFjZXN9fVwiIChPa2F5LCBidXQgbGVzcyBpZGVhbCB0aGFuIGRlbGV0aW5nICdKYXZhU2NyaXB0IGxpYnJhcnknKVxuQmFkIENsb3plOiBcInt7YzE6OlJlYWN0fX0gaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy5cIiAoVHJpdmlhbCBkZWxldGlvbiBvZiBtYWluIHN1YmplY3QpXG5cbk5vdywgZ2VuZXJhdGUgdGhlIGZsYXNoY2FyZHMgZm9yIHRoZSBwcm92aWRlZCB0ZXh0IHNlbGVjdGlvbi4gT3V0cHV0IE9OTFkgdGhlIEpTT04gb2JqZWN0OlxuYDtcbiAgICByZXR1cm4gcHJvbXB0LnRyaW0oKTsgLy8gVHJpbSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgZnJvbSB0aGUgdGVtcGxhdGUgbGl0ZXJhbFxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZyb250L2JhY2sgYW5kIGNsb3plIGZsYXNoY2FyZCBwYWlyIGZyb20gc2VsZWN0ZWQgdGV4dCB1c2luZyB0aGUgY29uZmlndXJlZCBMTE0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUZsYXNoY2FyZFBhaXIoc2VsZWN0ZWRUZXh0OiBzdHJpbmcsIHNvdXJjZVVybD86IHN0cmluZyk6IFByb21pc2U8Rmxhc2hjYXJkR2VuZXJhdGlvblJlc3BvbnNlIHwgbnVsbD4ge1xuICAgIGNvbnNvbGUubG9nKGBbbGxtU2VydmljZV0gR2VuZXJhdGluZyBmbGFzaGNhcmQgcGFpciBmb3IgdGV4dDogXFxcIiR7c2VsZWN0ZWRUZXh0LnN1YnN0cmluZygwLCA1MCl9Li4uXFxcImApO1xuXG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZFVzZXJDb25maWcoKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBDYW5ub3QgZ2VuZXJhdGUgZmxhc2hjYXJkczogTExNIGNvbmZpZyBub3QgbG9hZGVkLlwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0ID0gY3JlYXRlRmxhc2hjYXJkUHJvbXB0KHNlbGVjdGVkVGV4dCwgc291cmNlVXJsKTtcbiAgICBsZXQgcHJvdmlkZXJNb2R1bGU6IExMTUNoYXRQcm92aWRlciB8IG51bGwgPSBudWxsO1xuXG4gICAgLy8gRmluZCB0aGUgcHJvdmlkZXIgbW9kdWxlIChzaW1pbGFyIHRvIHN0cmVhbUNoYXRSZXNwb25zZSlcbiAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKGNvbmZpZy5wcm92aWRlcikge1xuICAgICAgICAgICAgY2FzZSAnb2xsYW1hJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgb2xsYW1hUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb2xsYW1hJyk7XG4gICAgICAgICAgICAgICAgcHJvdmlkZXJNb2R1bGUgPSBvbGxhbWFQcm92aWRlcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ29wZW5yb3V0ZXInOiB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgT3BlblJvdXRlciBwcm92aWRlciBleGlzdHMgYW5kIGltcGxlbWVudHMgY2hhdENvbXBsZXRpb25cbiAgICAgICAgICAgICAgICAvLyBjb25zdCB7IG9wZW5Sb3V0ZXJQcm92aWRlciB9ID0gYXdhaXQgaW1wb3J0KCcuL3Byb3ZpZGVycy9vcGVucm91dGVyJyk7XG4gICAgICAgICAgICAgICAgLy8gcHJvdmlkZXJNb2R1bGUgPSBvcGVuUm91dGVyUHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiT3BlblJvdXRlciBmbGFzaGNhcmQgZ2VuZXJhdGlvbiBub3QgeWV0IGltcGxlbWVudGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFkZCBvdGhlciBwcm92aWRlcnMgaWYgdGhleSBzdXBwb3J0IGNoYXRDb21wbGV0aW9uXG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gVW5zdXBwb3J0ZWQgcHJvdmlkZXIgZm9yIG5vbi1zdHJlYW1pbmcgY2hhdDpcIiwgY29uZmlnLnByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJvdmlkZXJNb2R1bGU/LmNoYXRDb21wbGV0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIFByb3ZpZGVyICR7Y29uZmlnLnByb3ZpZGVyfSBkb2VzIG5vdCBzdXBwb3J0IHRoZSByZXF1aXJlZCAnY2hhdENvbXBsZXRpb24nIG1ldGhvZC5gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgbm9uLXN0cmVhbWluZyBjaGF0IHJlcXVlc3RcbiAgICAgICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIFNlbmRpbmcgcmVxdWVzdCB0byBwcm92aWRlciBjaGF0Q29tcGxldGlvbi4uLlwiKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm92aWRlck1vZHVsZS5jaGF0Q29tcGxldGlvbih7XG4gICAgICAgICAgICBwcm9tcHQ6IHByb21wdCxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgaGlzdG9yeTogW10sIC8vIE5vIGhpc3RvcnkgbmVlZGVkIGZvciB0aGlzIHNwZWNpZmljIHRhc2tcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZT8ubWVzc2FnZT8uY29udGVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gTExNIHJlc3BvbnNlIHdhcyBlbXB0eSBvciBpbnZhbGlkLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0ZW1wdCB0byBwYXJzZSB0aGUgSlNPTiBmcm9tIHRoZSByZXNwb25zZSBjb250ZW50XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDbGVhbiBwb3RlbnRpYWwgbWFya2Rvd24gY29kZSBmZW5jZXNcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuZWRDb250ZW50ID0gcmVzcG9uc2UubWVzc2FnZS5jb250ZW50LnJlcGxhY2UoL2BgYGpzb25cXFxcbj98YGBgL2csICcnKS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRKc29uID0gSlNPTi5wYXJzZShjbGVhbmVkQ29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEJhc2ljIHZhbGlkYXRpb24gb2YgdGhlIHBhcnNlZCBzdHJ1Y3R1cmVcbiAgICAgICAgICAgIGlmIChwYXJzZWRKc29uLmZyb250QmFjaz8uZnJvbnQgJiYgcGFyc2VkSnNvbi5mcm9udEJhY2s/LmJhY2sgJiYgcGFyc2VkSnNvbi5jbG96ZT8udGV4dCkge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gU3VjY2Vzc2Z1bGx5IHBhcnNlZCBmbGFzaGNhcmQgSlNPTjpcIiwgcGFyc2VkSnNvbik7XG4gICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRKc29uIGFzIEZsYXNoY2FyZEdlbmVyYXRpb25SZXNwb25zZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIFBhcnNlZCBKU09OIGxhY2tzIGV4cGVjdGVkIHN0cnVjdHVyZTpcIiwgcGFyc2VkSnNvbik7XG4gICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChwYXJzZUVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBGYWlsZWQgdG8gcGFyc2UgSlNPTiBmcm9tIExMTSByZXNwb25zZTpcIiwgcGFyc2VFcnJvciwgXCJSYXcgY29udGVudDpcIiwgcmVzcG9uc2UubWVzc2FnZS5jb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBFcnJvciBkdXJpbmcgZmxhc2hjYXJkIGdlbmVyYXRpb246XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyAtLS0gSGVscGVyIEZ1bmN0aW9uIHRvIGdldCBQcm92aWRlciAtLS0gXG4vLyAoQXNzdW1lcyBVc2VyQ29uZmlnIGhhcyBhIHByb3ZpZGVyIGZpZWxkIGxpa2UgJ29sbGFtYScgb3IgJ29wZW5yb3V0ZXInKVxuZnVuY3Rpb24gZ2V0UHJvdmlkZXIoY29uZmlnOiBMTE1Vc2VyQ29uZmlnKTogTExNQ2hhdFByb3ZpZGVyIHwgbnVsbCB7XG4gICAgc3dpdGNoIChjb25maWcucHJvdmlkZXIpIHtcbiAgICAgICAgY2FzZSAnb2xsYW1hJzpcbiAgICAgICAgICAgIHJldHVybiBvbGxhbWFQcm92aWRlcjtcbiAgICAgICAgY2FzZSAnb3BlbnJvdXRlcic6XG4gICAgICAgICAgICByZXR1cm4gb3BlblJvdXRlclByb3ZpZGVyO1xuICAgICAgICAvLyBBZGQgY2FzZXMgZm9yIG90aGVyIHByb3ZpZGVycyBsaWtlICdsbXN0dWRpbycsICdqYW4nIGlmIHRoZXkgaGF2ZSBzcGVjaWZpYyBwcm92aWRlciBvYmplY3RzXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBIYW5kbGUgbG9jYWwgcHJvdmlkZXJzIHRoYXQgbWlnaHQgc2hhcmUgT2xsYW1hIGxvZ2ljIGJ1dCBoYXZlIGRpZmZlcmVudCBJRHNcbiAgICAgICAgICAgIGlmICgoY29uZmlnIGFzIGFueSkuZW5kcG9pbnQpIHsgXG4gICAgICAgICAgICAgICAgLy8gSWYgZW5kcG9pbnQgZXhpc3RzLCBhc3N1bWUgaXQgbWlnaHQgYmUgYW4gT2xsYW1hLWNvbXBhdGlibGUgQVBJXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVmaW5lIHRoaXMgbG9naWMgaWYgbG9jYWwgcHJvdmlkZXJzIG5lZWQgZGlzdGluY3QgaGFuZGxpbmdcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtsbG1TZXJ2aWNlXSBVc2luZyBvbGxhbWFQcm92aWRlciBmb3IgcG90ZW50aWFsbHkgY29tcGF0aWJsZSBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sbGFtYVByb3ZpZGVyOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlXSBVbnN1cHBvcnRlZCBwcm92aWRlciBmb3VuZCBpbiBjb25maWc6ICR7Y29uZmlnLnByb3ZpZGVyfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyAtLS0gRmxhc2hjYXJkIEdlbmVyYXRpb24gRnVuY3Rpb24gKFVwZGF0ZWQgdG8gdXNlIFN0cmVhbWluZykgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVGbGFzaGNhcmRDb250ZW50RnJvbVRleHQodGV4dDogc3RyaW5nKTogUHJvbWlzZTx7XG4gICAgZmxhc2hjYXJkOiB7IGZyb250OiBzdHJpbmc7IGJhY2s6IHN0cmluZyB9O1xuICAgIGNsb3plOiB7IHRleHQ6IHN0cmluZyB9O1xuICB9IHwgbnVsbD4ge1xuICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2VdIEdlbmVyYXRpbmcgZmxhc2hjYXJkIGNvbnRlbnQgZm9yIHRleHQ6XCIsIHRleHQuc3Vic3RyaW5nKDAsIDUwKSArIFwiLi4uXCIpO1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRVc2VyQ29uZmlnKCk7XG4gICAgaWYgKCFjb25maWcpIHRocm93IG5ldyBFcnJvcihcIkxMTSBjb25maWd1cmF0aW9uIG5vdCBmb3VuZC5cIik7XG5cbiAgICBjb25zdCBwcm92aWRlciA9IGdldFByb3ZpZGVyKGNvbmZpZyk7XG4gICAgaWYgKCFwcm92aWRlcikgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG5cbiAgICAvLyAtLS0gVXNlIHN0cmVhbUNoYXQgaW5zdGVhZCBvZiBjaGF0Q29tcGxldGlvbiAtLS1cbiAgICBpZiAoIXByb3ZpZGVyLnN0cmVhbUNoYXQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW2xsbVNlcnZpY2VdIFByb3ZpZGVyICR7Y29uZmlnLnByb3ZpZGVyfSBkb2VzIG5vdCBzdXBwb3J0IHN0cmVhbWluZyBjaGF0LiBDYW5ub3QgZ2VuZXJhdGUgZmxhc2hjYXJkcy5gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0ID0gY3JlYXRlRmxhc2hjYXJkUHJvbXB0KHRleHQpO1xuICAgIGxldCBhY2N1bXVsYXRlZENvbnRlbnQgPSAnJztcbiAgICBsZXQgc3RyZWFtRXJyb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZV0gU2VuZGluZyBmbGFzaGNhcmQgZ2VuZXJhdGlvbiBwcm9tcHQgdmlhIHN0cmVhbUNoYXQuLi5cIik7XG5cbiAgICB0cnkge1xuICAgICAgICAvLyBDcmVhdGUgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3RyZWFtIGZpbmlzaGVzXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyUmVxdWVzdDogUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBwcm9tcHQsXG4gICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIHNlbmRDaHVuazogKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaHVuay5zdGF0dXMgPT09ICdjaHVuaycgJiYgY2h1bmsuY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW11bGF0ZWRDb250ZW50ICs9IGNodW5rLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmsuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZmxhc2hjYXJkIHN0cmVhbV0gUmVjZWl2ZWQgZXJyb3IgY2h1bms6XCIsIGNodW5rLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbUVycm9yID0gY2h1bmsuZXJyb3IgfHwgJ1Vua25vd24gc3RyZWFtaW5nIGVycm9yJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHJlamVjdCBpbW1lZGlhdGVseSwgbGV0IGl0IGZpbmlzaCB0byBwb3RlbnRpYWxseSBjYXB0dXJlIHBhcnRpYWwgY29udGVudD9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9yIHJlamVjdCBoZXJlIGlmIGVycm9ycyBzaG91bGQgaGFsdCBwcm9jZXNzaW5nOiByZWplY3QobmV3IEVycm9yKHN0cmVhbUVycm9yKSk7IFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNodW5rLnN0YXR1cyA9PT0gJ2RvbmUnIHx8IGNodW5rLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2UgZmxhc2hjYXJkIHN0cmVhbV0gU3RyZWFtIGZpbmlzaGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7IC8vIFJlc29sdmUgdGhlIHByb21pc2Ugd2hlbiBkb25lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gSW5pdGlhdGUgdGhlIHN0cmVhbVxuICAgICAgICAgICAgcHJvdmlkZXIuc3RyZWFtQ2hhdChwcm92aWRlclJlcXVlc3QpLmNhdGNoKHJlamVjdCk7IC8vIFJlamVjdCBwcm9taXNlIG9uIGluaXRpYWwgc3RyZWFtQ2hhdCBlcnJvclxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3RyZWFtRXJyb3IpIHtcbiAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIEZsYXNoY2FyZCBzdHJlYW0gY29tcGxldGVkIHdpdGggZXJyb3I6XCIsIHN0cmVhbUVycm9yKTtcbiAgICAgICAgICAgICAvLyBQb3RlbnRpYWxseSB0cnkgcGFyc2luZyBhY2N1bXVsYXRlZENvbnRlbnQgYW55d2F5P1xuICAgICAgICAgICAgIC8vIHJldHVybiBudWxsOyAvLyBGb3Igbm93LCByZXR1cm4gbnVsbCBpZiBzdHJlYW0gaGFkIGVycm9yc1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhY2N1bXVsYXRlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIEZsYXNoY2FyZCBzdHJlYW0gY29tcGxldGVkIGJ1dCBhY2N1bXVsYXRlZCBjb250ZW50IGlzIGVtcHR5LlwiKTtcbiAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLSBQYXJzZSB0aGUgYWNjdW11bGF0ZWQgcmVzcG9uc2UgYXMgSlNPTiAtLS1cbiAgICAgICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZV0gUmVjZWl2ZWQgYWNjdW11bGF0ZWQgc3RyZWFtIHJlc3BvbnNlIGZvciBwYXJzaW5nOlwiLCBhY2N1bXVsYXRlZENvbnRlbnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbk1hdGNoID0gYWNjdW11bGF0ZWRDb250ZW50Lm1hdGNoKC9gYGBqc29uXFxzKihbXFxzXFxTXSo/KVxccypgYGB8KHtbXFxzXFxTXSp9KS8pO1xuICAgICAgICAgICAgaWYgKCFqc29uTWF0Y2ggfHwgKCFqc29uTWF0Y2hbMV0gJiYgIWpzb25NYXRjaFsyXSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIENvdWxkIG5vdCBmaW5kIEpTT04gYmxvY2sgaW4gdGhlIGFjY3VtdWxhdGVkIHN0cmVhbSByZXNwb25zZS5cIik7XG4gICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEpzb24gPSBKU09OLnBhcnNlKGFjY3VtdWxhdGVkQ29udGVudC50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZEpzb24uZmxhc2hjYXJkPy5mcm9udCAmJiBwYXJzZWRKc29uLmZsYXNoY2FyZD8uYmFjayAmJiBwYXJzZWRKc29uLmNsb3plPy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZV0gU3VjY2Vzc2Z1bGx5IHBhcnNlZCBmbGFzaGNhcmQgSlNPTiBmcm9tIHJhdyBzdHJlYW0gcmVzcG9uc2UgKGZhbGxiYWNrKS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEpzb24gYXMgeyBmbGFzaGNhcmQ6IHsgZnJvbnQ6IHN0cmluZzsgYmFjazogc3RyaW5nIH07IGNsb3plOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gUGFyc2VkIGZhbGxiYWNrIHN0cmVhbSBKU09OIGxhY2tzIGV4cGVjdGVkIHN0cnVjdHVyZTpcIiwgcGFyc2VkSnNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGZhbGxiYWNrRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gRmFpbGVkIHRvIHBhcnNlIEpTT04gZGlyZWN0bHkgZnJvbSBhY2N1bXVsYXRlZCBzdHJlYW0gKGZhbGxiYWNrIGZhaWxlZCk6XCIsIGZhbGxiYWNrRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGpzb25NYXRjaFsxXSB8fCBqc29uTWF0Y2hbMl07XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRKc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nLnRyaW0oKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZWRKc29uLmZsYXNoY2FyZD8uZnJvbnQgJiYgcGFyc2VkSnNvbi5mbGFzaGNhcmQ/LmJhY2sgJiYgcGFyc2VkSnNvbi5jbG96ZT8udGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2VdIFN1Y2Nlc3NmdWxseSBwYXJzZWQgZmxhc2hjYXJkIEpTT04gZnJvbSBhY2N1bXVsYXRlZCBzdHJlYW0gcmVzcG9uc2UuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRKc29uIGFzIHsgZmxhc2hjYXJkOiB7IGZyb250OiBzdHJpbmc7IGJhY2s6IHN0cmluZyB9OyBjbG96ZTogeyB0ZXh0OiBzdHJpbmcgfSB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIFBhcnNlZCBzdHJlYW0gSlNPTiBsYWNrcyBleHBlY3RlZCBzdHJ1Y3R1cmUgKGZsYXNoY2FyZC9jbG96ZSk6XCIsIHBhcnNlZEpzb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChwYXJzZUVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIEVycm9yIHBhcnNpbmcgSlNPTiBmcm9tIGFjY3VtdWxhdGVkIHN0cmVhbSByZXNwb25zZTpcIiwgcGFyc2VFcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiLS0tIEFjY3VtdWxhdGVkIFJhdyBDb250ZW50IC0tLVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYWNjdW11bGF0ZWRDb250ZW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCItLS0gRW5kIEFjY3VtdWxhdGVkIFJhdyBDb250ZW50IC0tLVwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIEVycm9yIGR1cmluZyBmbGFzaGNhcmQgZ2VuZXJhdGlvbiBzdHJlYW0gc2V0dXAgb3IgcHJvbWlzZSBoYW5kbGluZzpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIC0tLSBUcmFuc2xhdGlvbiBGdW5jdGlvbiAtLS1cblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBnaXZlbiB0ZXh0IHRvIHRoZSB0YXJnZXQgbGFuZ3VhZ2UgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgTExNLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlVGV4dCh0ZXh0VG9UcmFuc2xhdGU6IHN0cmluZywgdGFyZ2V0TGFuZ3VhZ2U6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIGNvbnNvbGUubG9nKGBbbGxtU2VydmljZV0gVHJhbnNsYXRpbmcgdGV4dCB0byAke3RhcmdldExhbmd1YWdlfTogXCIke3RleHRUb1RyYW5zbGF0ZS5zdWJzdHJpbmcoMCwgNTApfS4uLlwiYCk7XG5cbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkVXNlckNvbmZpZygpO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSB0cmFuc2xhdGVUZXh0XSBDYW5ub3QgdHJhbnNsYXRlOiBMTE0gY29uZmlnIG5vdCBsb2FkZWQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm92aWRlciA9IGdldFByb3ZpZGVyKGNvbmZpZyk7XG4gICAgaWYgKCFwcm92aWRlcj8uY2hhdENvbXBsZXRpb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW2xsbVNlcnZpY2UgdHJhbnNsYXRlVGV4dF0gUHJvdmlkZXIgJHtjb25maWcucHJvdmlkZXJ9IGRvZXMgbm90IHN1cHBvcnQgJ2NoYXRDb21wbGV0aW9uJy5gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2ltcGxlIHRyYW5zbGF0aW9uIHByb21wdFxuICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyB0ZXh0IGFjY3VyYXRlbHkgdG8gJHt0YXJnZXRMYW5ndWFnZX0uIE91dHB1dCBPTkxZIHRoZSB0cmFuc2xhdGVkIHRleHQsIG5vdGhpbmcgZWxzZTpcblxuVGV4dCB0byB0cmFuc2xhdGU6XG5cIlwiXCJcbiR7dGV4dFRvVHJhbnNsYXRlfVxuXCJcIlwiXG5cblRyYW5zbGF0ZWQgdGV4dDpgO1xuXG4gICAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlIHRyYW5zbGF0ZVRleHRdIFNlbmRpbmcgdHJhbnNsYXRpb24gcHJvbXB0IHRvICR7Y29uZmlnLnByb3ZpZGVyfS4uLmApO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm92aWRlci5jaGF0Q29tcGxldGlvbih7XG4gICAgICAgICAgICBwcm9tcHQ6IHByb21wdCxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgaGlzdG9yeTogW10sIC8vIE5vIGhpc3RvcnkgbmVlZGVkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gcmVzcG9uc2U/Lm1lc3NhZ2U/LmNvbnRlbnQ/LnRyaW0oKTtcblxuICAgICAgICBpZiAoIXRyYW5zbGF0ZWRUZXh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgdHJhbnNsYXRlVGV4dF0gTExNIHJlc3BvbnNlIHdhcyBlbXB0eSBvciBpbnZhbGlkLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZSB0cmFuc2xhdGVUZXh0XSBSZWNlaXZlZCB0cmFuc2xhdGlvbjpcIiwgdHJhbnNsYXRlZFRleHQpO1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlZFRleHQ7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgdHJhbnNsYXRlVGV4dF0gRXJyb3IgZHVyaW5nIHRyYW5zbGF0aW9uIExMTSBjYWxsOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0gIiwiaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IG9uTWVzc2FnZSwgc2VuZE1lc3NhZ2UsIHR5cGUgUHJvdG9jb2xNYXAsIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnfi91dGlscy9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgbG9hZFVzZXJDb25maWcsIHN0cmVhbUNoYXRSZXNwb25zZSwgZ2VuZXJhdGVGbGFzaGNhcmRDb250ZW50RnJvbVRleHQsIHRyYW5zbGF0ZVRleHQgfSBmcm9tICcuLi9zcmMvc2VydmljZXMvbGxtU2VydmljZSc7IC8vIFVzZSByZWxhdGl2ZSBwYXRoIGZvciBMTE0gc2VydmljZSBpbXBvcnRcbmltcG9ydCB7IGNyZWF0ZUZsYXNoY2FyZCwgY3JlYXRlQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9kYic7IC8vIEltcG9ydCBEQiBmdW5jdGlvbnNcbmltcG9ydCB0eXBlIHsgRmxhc2hjYXJkIH0gZnJvbSAnLi4vc3JjL3R5cGVzL2RiJzsgLy8gSW1wb3J0IEZsYXNoY2FyZCB0eXBlXG5cbmNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kIHNjcmlwdCBsb2FkZWQuJyk7XG5cbi8vIC0tLSBPZmZzY3JlZW4gRG9jdW1lbnQgTWFuYWdlbWVudCAtLS1cbmNvbnN0IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIID0gJ29mZnNjcmVlbi5odG1sJzsgLy8gUGF0aCB0byB5b3VyIG9mZnNjcmVlbiBkb2N1bWVudCBIVE1MXG5cbmFzeW5jIGZ1bmN0aW9uIGhhc09mZnNjcmVlbkRvY3VtZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAvLyBDaGVjayBpZiB0aGUgZG9jdW1lbnQgaXMgYWxyZWFkeSBvcGVuLlxuICAvLyBAdHMtaWdub3JlIC0gY2xpZW50cyBpcyBhdmFpbGFibGUgYnV0IG1heSBzaG93IFRTIGVycm9yXG4gIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgIC8vIEB0cy1pZ25vcmUgLSBDb250ZXh0VHlwZSBtaWdodCBiZSBtaXNzaW5nIE9GRlNDUkVFTl9ET0NVTUVOVCBpbiBvbGRlciB0eXBlc1xuICAgIGNvbnRleHRUeXBlczogWydPRkZTQ1JFRU5fRE9DVU1FTlQnXSxcbiAgICBkb2N1bWVudFVybHM6IFticm93c2VyLnJ1bnRpbWUuZ2V0VVJMKE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKV0gXG4gIH0pO1xuICByZXR1cm4gZXhpc3RpbmdDb250ZXh0cy5sZW5ndGggPiAwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCkge1xuICBpZiAoIShhd2FpdCBoYXNPZmZzY3JlZW5Eb2N1bWVudCgpKSkge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gQ3JlYXRpbmcgb2Zmc2NyZWVuIGRvY3VtZW50Li4uJyk7XG4gICAgLy8gQHRzLWlnbm9yZSAtIGJyb3dzZXIub2Zmc2NyZWVuIG1heSBub3QgYmUgaW4gb2xkZXIgdHlwZXNcbiAgICBhd2FpdCBicm93c2VyLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XG4gICAgICB1cmw6IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRILCBcbiAgICAgIC8vIFVzZSBhIHZhbGlkIHJlYXNvbiAtIExPQ0FMX1NUT1JBR0UgaXMgY29tbW9uIGlmIG5vdCB1c2luZyBvdGhlcnMgbGlrZSBBVURJT19QTEFZQkFDS1xuICAgICAgLy8gQHRzLWlnbm9yZSAtIGJyb3dzZXIub2Zmc2NyZWVuIG1heSBub3QgYmUgaW4gb2xkZXIgdHlwZXNcbiAgICAgIHJlYXNvbnM6IFticm93c2VyLm9mZnNjcmVlbi5SZWFzb24uTE9DQUxfU1RPUkFHRV0sIFxuICAgICAganVzdGlmaWNhdGlvbjogJ0RhdGFiYXNlIG9wZXJhdGlvbnMgdXNpbmcgUEdsaXRlJyxcbiAgICB9KTtcbiAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRlZC4nKTtcbiAgfSBlbHNlIHtcbiAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuJyk7XG4gIH1cbn1cblxuLy8gU2V0dXAgb2Zmc2NyZWVuIGRvY3VtZW50IG9uIGJhY2tncm91bmQgc2NyaXB0IHN0YXJ0dXBcbi8vIE1PVkVEIHRoZSBkaXJlY3QgY2FsbCBmcm9tIGhlcmUgdG8gYnJvd3Nlci5ydW50aW1lLm9uU3RhcnR1cCBsaXN0ZW5lciBiZWxvd1xuLy8gY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBUZW1wb3JhcmlseSBza2lwcGVkIGluaXRpYWwgb2Zmc2NyZWVuIHNldHVwIGNhbGwgZm9yIHRlc3RpbmcuJyk7XG5cbi8vIERlZmluZSB0aGUgc3RydWN0dXJlIG9mIHRoZSBkYXRhIGV4cGVjdGVkIGZyb20gdGhlIGNsaXBwZXIgcG9wdXBcbi8qXG5pbnRlcmZhY2UgQ2xpcERhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdGFncz86IHN0cmluZ1tdOyAvLyBBZGQgb3B0aW9uYWwgdGFncyBhcnJheVxufVxuKi9cblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgZm9yIE9sbGFtYSBBUEkgcmVzcG9uc2Vcbi8qXG5pbnRlcmZhY2UgT2xsYW1hVGFnIHtcbiAgbmFtZTogc3RyaW5nO1xuICAvLyBvdGhlciBwcm9wZXJ0aWVzIGxpa2UgbW9kaWZpZWRfYXQsIHNpemUsIGRpZ2VzdCBldGMuIGFyZSBpZ25vcmVkIGZvciBub3dcbn1cblxuaW50ZXJmYWNlIE9sbGFtYVRhZ3NSZXNwb25zZSB7XG4gIG1vZGVsczogT2xsYW1hVGFnW107XG59XG4qL1xuXG4vLyBkZWZpbmVCYWNrZ3JvdW5kIGlzIGdsb2JhbGx5IGF2YWlsYWJsZSBoZXJlIHRoYW5rcyB0byBXWFRcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUJhY2tncm91bmQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnV1hUIEJhY2tncm91bmQgZGVmaW5lZCcpO1xuXG4gIC8vIC0tLSBTZXR1cCB0aGUgY2VudHJhbCBtZXNzYWdlIGxpc3RlbmVyIC0tLSBcbiAgLy8gVGhpcyBhbGxvd3MgYG9uTWVzc2FnZWAgY2FsbHMgYmVsb3cgdG8gd29yay5cbiAgLy8gc2V0dXBDZW50cmFsTGlzdGVuZXIoKTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGNsaXBwaW5nIHJlcXVlc3RzIGZyb20gcG9wdXAgLS0tXG4gIG9uTWVzc2FnZSgnY2xpcFBhZ2UnLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBSZWNlaXZlZCBjbGlwUGFnZSBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IHRpdGxlLCB1cmwgfSA9IG1lc3NhZ2UuZGF0YTsgLy8gRGVzdHJ1Y3R1cmUgaW1wb3J0ZWQgQ2xpcERhdGFcblxuICAgIGNvbnN0IHNxbCA9IGBJTlNFUlQgSU5UTyBjbGlwcyAodGl0bGUsIHVybCkgVkFMVUVTICg/LCA/KTtgO1xuICAgIGNvbnN0IHBhcmFtcyA9IFt0aXRsZSwgdXJsXTtcblxuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBTZW5kaW5nIGRiRXhlYyBtZXNzYWdlIHRvIG9mZnNjcmVlbiBmb3IgY2xpcHBpbmcuLi4nKTtcbiAgICB0cnkge1xuICAgICAgLy8gTWF0Y2ggdGhlIFByb3RvY29sTWFwIGRlZmluaXRpb246IHsgZGF0YTogRGJFeGVjUmVxdWVzdCB9XG4gICAgICBjb25zdCBkYlJlc3VsdCA9IGF3YWl0IHNlbmRNZXNzYWdlKCdkYkV4ZWMnLCB7IGRhdGE6IHsgc3FsOiBzcWwsIHBhcmFtczogcGFyYW1zIH0gfSk7XG4gICAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogT2Zmc2NyZWVuIGRiRXhlYyByZXNwb25zZTonLCBkYlJlc3VsdCk7XG5cbiAgICAgIC8vIE5vdGlmeSBzdWNjZXNzXG4gICAgICBjb25zb2xlLmxvZyhgQmFja2dyb3VuZDogU3VjY2Vzc2Z1bGx5IGNsaXBwZWQgJHt1cmx9YCk7XG4gICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKGBjbGlwLXN1Y2Nlc3MtJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLCBcbiAgICAgICAgdGl0bGU6ICdCb29rbWFyayBTYXZlZCcsXG4gICAgICAgIG1lc3NhZ2U6IGBTYXZlZDogJHt0aXRsZX1gLFxuICAgICAgICBwcmlvcml0eTogMFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhY2tncm91bmQ6IEVycm9yIGV4ZWN1dGluZyBjbGlwIHZpYSBvZmZzY3JlZW46JywgZXJyb3IpO1xuICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZShgY2xpcC1lcnJvci0ke0RhdGUubm93KCl9YCwge1xuICAgICAgICAgIHR5cGU6ICdiYXNpYycsXG4gICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLFxuICAgICAgICAgIHRpdGxlOiAnQm9va21hcmsgU2F2aW5nIEZhaWxlZCcsIFxuICAgICAgICAgIG1lc3NhZ2U6IGBDb3VsZCBub3Qgc2F2ZSAke3RpdGxlfS4gRXJyb3I6ICR7ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpfWAsXG4gICAgICAgICAgcHJpb3JpdHk6IDFcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEhhbmRsZXIgcmV0dXJucyB2b2lkIGltcGxpY2l0bHlcbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIHRvIGZldGNoIE9sbGFtYSBtb2RlbHMgLS0tXG4gIG9uTWVzc2FnZSgnZ2V0T2xsYW1hTW9kZWxzJywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFJlY2VpdmVkIGdldE9sbGFtYU1vZGVscyBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IGVuZHBvaW50IH0gPSBtZXNzYWdlLmRhdGE7XG4gICAgY29uc3QgcmVzcG9uc2VUYXJnZXQgPSAnZ2V0T2xsYW1hTW9kZWxzUmVzdWx0JzsgLy8gVGFyZ2V0IGZvciB0aGUgcmVzcG9uc2UgbWVzc2FnZVxuXG4gICAgaWYgKCFlbmRwb2ludCkge1xuICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEVycm9yOiBPbGxhbWEgZW5kcG9pbnQgbm90IHByb3ZpZGVkLicpO1xuICAgICAgc2VuZE1lc3NhZ2UocmVzcG9uc2VUYXJnZXQsIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnT2xsYW1hIGVuZHBvaW50IG5vdCBwcm92aWRlZC4nIH0pXG4gICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihgW0JhY2tncm91bmRdIEZhaWxlZCB0byBzZW5kICR7cmVzcG9uc2VUYXJnZXR9IGVycm9yOmAsIGUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaFVybCA9IGAke2VuZHBvaW50fS9hcGkvdGFnc2A7XG4gICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBBdHRlbXB0aW5nIHRvIGZldGNoIG1vZGVscyBmcm9tOiAke2ZldGNoVXJsfWApO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIEZldGNoIG9wdGlvbnM6JywgZmV0Y2hPcHRpb25zKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2hVcmwsIGZldGNoT3B0aW9ucyk7XG4gICAgICBjb25zb2xlLmxvZyhgW0JhY2tncm91bmRdIEZldGNoIHJlc3BvbnNlIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9LCBPSzogJHtyZXNwb25zZS5va31gKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBsZXQgZXJyb3JCb2R5ID0gJ1tDb3VsZCBub3QgcmVhZCBlcnJvciBib2R5XSc7XG4gICAgICAgIHRyeSB7IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgfSBjYXRjaCB7fVxuICAgICAgICBjb25zb2xlLmVycm9yKGBbQmFja2dyb3VuZF0gRmV0Y2ggZmFpbGVkOiBTdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9LiBCb2R5OmAsIGVycm9yQm9keSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIE9sbGFtYSBtb2RlbHM6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IFxuICAgICAgLy8gRW5zdXJlIGRhdGEubW9kZWxzIGV4aXN0cyBhbmQgaXMgYW4gYXJyYXkgYmVmb3JlIG1hcHBpbmdcbiAgICAgIGNvbnN0IG1vZGVscyA9IEFycmF5LmlzQXJyYXkoZGF0YT8ubW9kZWxzKSA/IGRhdGEubW9kZWxzLm1hcCgodGFnOiB7IG5hbWU6IHN0cmluZyB9KSA9PiAoeyBpZDogdGFnLm5hbWUsIG5hbWU6IHRhZy5uYW1lIH0pKSA6IFtdO1xuICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBTdWNjZXNzZnVsbHkgZmV0Y2hlZCBPbGxhbWEgbW9kZWxzOicsIG1vZGVscyk7XG4gICAgICBzZW5kTWVzc2FnZShyZXNwb25zZVRhcmdldCwgeyBzdWNjZXNzOiB0cnVlLCBtb2RlbHM6IG1vZGVscyB9KVxuICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGBbQmFja2dyb3VuZF0gRmFpbGVkIHRvIHNlbmQgJHtyZXNwb25zZVRhcmdldH0gc3VjY2VzczpgLCBlKSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IFxuICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEVycm9yIGR1cmluZyBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvciBmZXRjaGluZyBtb2RlbHMuJztcbiAgICAgIC8vIEFkZCBzcGVjaWZpYyBjaGVjayBmb3IgcGVybWlzc2lvbi1saWtlIGVycm9ycyBpZiBwb3NzaWJsZSAoZGlmZmljdWx0IHdpdGhvdXQgc2VlaW5nIHRoZSBleGFjdCBlcnJvcilcbiAgICAgIGlmIChlcnJvck1lc3NhZ2UuaW5jbHVkZXMoJ0ZhaWxlZCB0byBmZXRjaCcpKSB7IC8vIEdlbmVyaWMgZmV0Y2ggZmFpbHVyZSBvZnRlbiBpbmRpY2F0ZXMgbmV0d29yay9wZXJtaXNzaW9uIGlzc3Vlc1xuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIi4gRW5zdXJlIE9sbGFtYSBpcyBydW5uaW5nIGFuZCByZWFjaGFibGUsIGFuZCBjaGVjayBleHRlbnNpb24gaG9zdCBwZXJtaXNzaW9ucy5cIjtcbiAgICAgIH1cbiAgICAgIHNlbmRNZXNzYWdlKHJlc3BvbnNlVGFyZ2V0LCB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH0pXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoYFtCYWNrZ3JvdW5kXSBGYWlsZWQgdG8gc2VuZCAke3Jlc3BvbnNlVGFyZ2V0fSBlcnJvcjpgLCBlKSk7XG4gICAgfVxuICAgIC8vIEhhbmRsZXIgcmV0dXJucyB2b2lkIGltcGxpY2l0bHlcbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBDaGF0IFJlcXVlc3RzIC0tLVxuICBvbk1lc3NhZ2UoJ29sbGFtYUNoYXRSZXF1ZXN0JywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogUmVjZWl2ZWQgb2xsYW1hQ2hhdFJlcXVlc3QnLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5IH0gPSBtZXNzYWdlLmRhdGE7XG5cbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkVXNlckNvbmZpZygpO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQmFja2dyb3VuZDogQ2Fubm90IHByb2Nlc3MgY2hhdCByZXF1ZXN0LCB1c2VyIGNvbmZpZyBub3QgZm91bmQuXCIpO1xuICAgICAgIHNlbmRNZXNzYWdlKCdvbGxhbWFSZXNwb25zZScsIHtcbiAgICAgICAgIG1vZGVsOiAndW5rbm93bicsXG4gICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgZXJyb3I6IFwiTExNIGNvbmZpZ3VyYXRpb24gbm90IGZvdW5kLiBQbGVhc2Ugc2V0IGl0IHVwIGluIHRoZSBzZXR0aW5ncy5cIlxuICAgICAgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIGNvbmZpZyBlcnJvciBtZXNzYWdlOlwiLCBlKSk7XG4gICAgICByZXR1cm47IC8vIEhhbmRsZXIgcmV0dXJucyB2b2lkXG4gICAgfVxuIFxuICAgIHRyeSB7XG4gICAgICAvLyBBc3N1bWluZyBzdHJlYW1DaGF0UmVzcG9uc2UgaGFuZGxlcyBzZW5kaW5nIGNodW5rcyB2aWEgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywgLi4uKVxuICAgICAgYXdhaXQgc3RyZWFtQ2hhdFJlc3BvbnNlKHsgcHJvbXB0LCBoaXN0b3J5OiBoaXN0b3J5IHx8IFtdLCBjb25maWcgfSk7IFxuICAgICAgY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kOiBzdHJlYW1DaGF0UmVzcG9uc2UgcHJvY2Vzc2luZyBpbml0aWF0ZWQuXCIpO1xuICAgIH0gY2F0Y2ggKHN0cmVhbUVycm9yKSB7XG4gICAgICAgIC8vIHN0cmVhbUNoYXRSZXNwb25zZSBzaG91bGQgaWRlYWxseSBoYW5kbGUgaXRzIG93biBlcnJvcnMgYW5kIHNlbmQgZXJyb3IgY2h1bmtzLFxuICAgICAgICAvLyBidXQgd2UgY2FuIGxvZyBhIGZhbGxiYWNrIGhlcmUuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gRXJyb3IgaW52b2tpbmcgc3RyZWFtQ2hhdFJlc3BvbnNlOlwiLCBzdHJlYW1FcnJvcik7XG4gICAgICAgIC8vIE9wdGlvbmFsbHkgc2VuZCBhIGZpbmFsIGVycm9yIGNodW5rIGlmIHN0cmVhbUNoYXRSZXNwb25zZSBkaWRuJ3RcbiAgICAgICAgIHNlbmRNZXNzYWdlKCdvbGxhbWFSZXNwb25zZScsIHtcbiAgICAgICAgICAgbW9kZWw6IGNvbmZpZy5jaGF0TW9kZWwgfHwgJ3Vua25vd24nLFxuICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgZXJyb3I6IHN0cmVhbUVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBzdHJlYW1FcnJvci5tZXNzYWdlIDogXCJFcnJvciBkdXJpbmcgc3RyZWFtaW5nXCJcbiAgICAgICAgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIHN0cmVhbSBlcnJvciBtZXNzYWdlOlwiLCBlKSk7XG4gICAgfVxuICAgIC8vIEhhbmRsZXIgcmV0dXJucyB2b2lkIGltcGxpY2l0bHlcbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBGbGFzaGNhcmQgQ29udGVudCBHZW5lcmF0aW9uIC0tLVxuICBvbk1lc3NhZ2UoJ2dlbmVyYXRlRmxhc2hjYXJkQ29udGVudCcsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBSZWNlaXZlZCBnZW5lcmF0ZUZsYXNoY2FyZENvbnRlbnQgbWVzc2FnZScsIG1lc3NhZ2UuZGF0YSk7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBtZXNzYWdlLmRhdGE7XG4gICAgY29uc3QgcmVzcG9uc2VUYXJnZXQgPSAnZmxhc2hjYXJkR2VuZXJhdGlvblJlc3VsdCc7XG4gICAgXG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gTm8gdGV4dCBwcm92aWRlZCBmb3IgZmxhc2hjYXJkIGdlbmVyYXRpb24uJyk7XG4gICAgICAvLyBTZW5kIGJhY2sgYW4gZXJyb3Igb2JqZWN0XG4gICAgICBzZW5kTWVzc2FnZShyZXNwb25zZVRhcmdldCwgeyBkYXRhOiBudWxsLCBlcnJvcjogJ05vIHRleHQgcHJvdmlkZWQnIH0pXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBlcnJvciByZXN1bHQ6XCIsIGUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZUZsYXNoY2FyZENvbnRlbnRGcm9tVGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBSZWNlaXZlZCByZXN1bHQgZnJvbSBsbG1TZXJ2aWNlOicsIHJlc3VsdCk7XG5cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gQXR0ZW1wdGluZyB0byBzZW5kIGZsYXNoY2FyZCByZXN1bHQgYWZ0ZXIgZGVsYXkuLi4nKTtcblxuICAgICAgICAvLyBTZW5kIGJhY2sgdGhlIHJlc3VsdCBvYmplY3QgKHJlc3VsdCBjYW4gYmUgdGhlIGRhdGEgb3IgbnVsbClcbiAgICAgICAgc2VuZE1lc3NhZ2UocmVzcG9uc2VUYXJnZXQsIHsgZGF0YTogcmVzdWx0LCBlcnJvcjogdW5kZWZpbmVkIH0pXG4gICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIGZsYXNoY2FyZCByZXN1bHQ6XCIsIGUpKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBFcnJvciBkdXJpbmcgZmxhc2hjYXJkIGdlbmVyYXRpb246JywgZXJyb3IpO1xuICAgICAgICAvLyBTZW5kIGJhY2sgYW4gZXJyb3Igb2JqZWN0XG4gICAgICAgIHNlbmRNZXNzYWdlKHJlc3BvbnNlVGFyZ2V0LCB7IGRhdGE6IG51bGwsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yIGR1cmluZyBnZW5lcmF0aW9uJyB9KVxuICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBlcnJvciByZXN1bHQ6XCIsIGUpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgQ2hhdCBIaXN0b3J5IFJlcXVlc3RzIC0tLVxuICAvLyAuLi4gKHBsYWNlaG9sZGVyKVxuXG4gIC8vICsrKyBORVcgTElTVEVORVIgZm9yIGdldFBhZ2VJbmZvICsrK1xuICBvbk1lc3NhZ2UoJ2dldFBhZ2VJbmZvJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiW0JhY2tncm91bmRdIFJlY2VpdmVkIGdldFBhZ2VJbmZvIHJlcXVlc3QuXCIpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0YWJzID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICAgICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNbMF07XG4gICAgICBpZiAoY3VycmVudFRhYiAmJiBjdXJyZW50VGFiLnVybCAmJiBjdXJyZW50VGFiLnRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0JhY2tncm91bmRdIFNlbmRpbmcgcGFnZSBpbmZvOlwiLCB7IHRpdGxlOiBjdXJyZW50VGFiLnRpdGxlLCB1cmw6IGN1cnJlbnRUYWIudXJsIH0pO1xuICAgICAgICAvLyBFbnN1cmUgUHJvdG9jb2xNYXAgZXhwZWN0cyBQcm9taXNlPFBhZ2VJbmZvIHwgbnVsbD5cbiAgICAgICAgcmV0dXJuIHsgdGl0bGU6IGN1cnJlbnRUYWIudGl0bGUsIHVybDogY3VycmVudFRhYi51cmwgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltCYWNrZ3JvdW5kXSBDb3VsZCBub3QgZ2V0IGFjdGl2ZSB0YWIgaW5mby5cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0JhY2tncm91bmRdIEVycm9yIGdldHRpbmcgcGFnZSBpbmZvOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vICsrKyBORVcgTElTVEVORVIgZm9yIGdldFNlbGVjdGVkVGV4dCArKytcbiAgb25NZXNzYWdlKCdnZXRTZWxlY3RlZFRleHQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJbQmFja2dyb3VuZF0gUmVjZWl2ZWQgZ2V0U2VsZWN0ZWRUZXh0IHJlcXVlc3QuXCIpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0YWJzID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICAgICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNbMF07XG4gICAgICBjb25zdCB0YWJJZCA9IGN1cnJlbnRUYWI/LmlkO1xuXG4gICAgICBpZiAodGFiSWQgJiYgY3VycmVudFRhYi51cmw/LnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0JhY2tncm91bmRdIFNlbmRpbmcgX3JlcXVlc3RTZWxlY3Rpb25Gcm9tQ29udGVudFNjcmlwdCB0byB0YWIgJHt0YWJJZH1gKTtcbiAgICAgICAgLy8gRW5zdXJlIFByb3RvY29sTWFwIGRlZmluZXMgX3JlcXVlc3RTZWxlY3Rpb25Gcm9tQ29udGVudFNjcmlwdFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlbmRNZXNzYWdlKCdfcmVxdWVzdFNlbGVjdGlvbkZyb21Db250ZW50U2NyaXB0JywgdW5kZWZpbmVkLCB7IHRhYklkOiB0YWJJZCB9KTsgXG4gICAgICAgIGNvbnNvbGUubG9nKGBbQmFja2dyb3VuZF0gUmVjZWl2ZWQgcmVzcG9uc2UgZnJvbSBjb250ZW50IHNjcmlwdCBmb3IgdGFiICR7dGFiSWR9OmAsIHJlc3BvbnNlKTtcbiAgICAgICAgLy8gRW5zdXJlIFByb3RvY29sTWFwIGV4cGVjdHMgUHJvbWlzZTx7IHRleHQ6IHN0cmluZyB9IHwgbnVsbD5cbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHR5cGVvZiByZXNwb25zZS50ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB7IHRleHQ6IHJlc3BvbnNlLnRleHQgfTsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbQmFja2dyb3VuZF0gSW52YWxpZCBvciBlbXB0eSByZXNwb25zZSBmcm9tIGNvbnRlbnQgc2NyaXB0IGZvciB0YWIgJHt0YWJJZH06YCwgcmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0JhY2tncm91bmRdIENhbm5vdCBnZXQgc2VsZWN0aW9uIGZyb20gbm9uLWh0dHAocykgVVJMIG9yIG5vIGFjdGl2ZSB0YWIgSUQuYCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0JhY2tncm91bmRdIEVycm9yIGdldHRpbmcgc2VsZWN0ZWQgdGV4dDpcIiwgZXJyb3IpO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0NvdWxkIG5vdCBlc3RhYmxpc2ggY29ubmVjdGlvbicpIHx8IGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ05vIHJlY2VpdmluZyBlbmQnKSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbQmFja2dyb3VuZF0gQ29udGVudCBzY3JpcHQgbGlrZWx5IG5vdCBpbmplY3RlZCBvciBub3QgcmVzcG9uZGluZyBvbiB0aGUgYWN0aXZlIHBhZ2UuXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICAvLyArKysgTkVXIExJU1RFTkVSIGZvciB0cmFuc2xhdGVUZXh0ICsrK1xuICBvbk1lc3NhZ2UoJ3RyYW5zbGF0ZVRleHQnLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiW0JhY2tncm91bmRdIFJlY2VpdmVkIHRyYW5zbGF0ZVRleHQgcmVxdWVzdDpcIiwgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IHRleHQsIHRhcmdldExhbmcgfSA9IG1lc3NhZ2UuZGF0YTsgLy8gVXNlIHRhcmdldExhbmdcbiAgICBpZiAoIXRleHQgfHwgIXRhcmdldExhbmcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gTWlzc2luZyB0ZXh0IG9yIHRhcmdldExhbmcgZm9yIHRyYW5zbGF0aW9uLlwiKTtcbiAgICAgIC8vIFRocm93IGVycm9yIHRvIHJlamVjdCB0aGUgcHJvbWlzZSBhcyBleHBlY3RlZCBieSBQcm90b2NvbE1hcFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyB0ZXh0IG9yIHRhcmdldCBsYW5ndWFnZSBmb3IgdHJhbnNsYXRpb24uXCIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gQXNzdW1pbmcgbGxtU2VydmljZS50cmFuc2xhdGVUZXh0IGhhbmRsZXMgbG9hZGluZyBjb25maWcgZXRjLlxuICAgICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHQgPSBhd2FpdCB0cmFuc2xhdGVUZXh0KHRleHQsIHRhcmdldExhbmcpO1xuICAgICAgY29uc29sZS5sb2coXCJbQmFja2dyb3VuZF0gVHJhbnNsYXRpb24gcmVzdWx0IGZyb20gbGxtU2VydmljZTpcIiwgdHJhbnNsYXRpb25SZXN1bHQpO1xuICAgICAgaWYgKHRyYW5zbGF0aW9uUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgIC8vIFRocm93IGVycm9yIGlmIHRyYW5zbGF0aW9uIGZhaWxlZCBhcyBleHBlY3RlZCBieSBQcm90b2NvbE1hcFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsZWQgb3IgcmV0dXJuZWQgbnVsbC5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhbnNsYXRpb25SZXN1bHQ7IC8vIFJldHVybiB0aGUgc3RyaW5nXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW0JhY2tncm91bmRdIEVycm9yIGR1cmluZyB0cmFuc2xhdGlvbjpcIiwgZXJyb3IpO1xuICAgICAgICAvLyBSZS10aHJvdyB0aGUgZXJyb3IgdG8gcmVqZWN0IHRoZSBwcm9taXNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhbnNsYXRpb24gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKX1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vICsrKyBORVcgTElTVEVORVIgZm9yIHNhdmVGbGFzaGNhcmRBbmROb3RpZnkgKysrXG4gIG9uTWVzc2FnZSgnc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeScsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJbQmFja2dyb3VuZF0gUmVjZWl2ZWQgc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeSByZXF1ZXN0OlwiLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgY2FyZERhdGEgfSA9IG1lc3NhZ2UuZGF0YTtcblxuICAgIGlmICghY2FyZERhdGEpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gTm8gY2FyZERhdGEgcHJvdmlkZWQgZm9yIHNhdmVGbGFzaGNhcmRBbmROb3RpZnkuXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZmxhc2hjYXJkIGRhdGEgcHJvdmlkZWQuXCIpOyAvLyBSZWplY3QgdGhlIHByb21pc2VcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gMS4gQ3JlYXRlIHRoZSBmbGFzaGNhcmRcbiAgICAgIC8vIFdlIG5lZWQgdG8gcHJvdmlkZSB0aGUgZnVsbCBGbGFzaGNhcmQgc3RydWN0dXJlIGV4cGVjdGVkIGJ5IGNyZWF0ZUZsYXNoY2FyZFxuICAgICAgLy8gQXBwLnRzeCBhbHJlYWR5IHByZXBhcmVzIG1vc3Qgb2YgaXQsIGJ1dCBlbnN1cmUgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmUgcHJlc2VudFxuICAgICAgLy8gTm90ZTogY3JlYXRlRmxhc2hjYXJkIGhhbmRsZXMgc2V0dGluZyBpbml0aWFsIEZTUlMgc3RhdGVcbiAgICAgIGNvbnN0IG5ld0ZsYXNoY2FyZCA9IGF3YWl0IGNyZWF0ZUZsYXNoY2FyZChjYXJkRGF0YSBhcyBPbWl0PEZsYXNoY2FyZCwgJ2lkJyB8ICdjcmVhdGVkX2F0JyB8ICdkdWUnIHwgJ3N0YWJpbGl0eScgfCAnZGlmZmljdWx0eScgfCAnZWxhcHNlZF9kYXlzJyB8ICdzY2hlZHVsZWRfZGF5cycgfCAncmVwcycgfCAnbGFwc2VzJyB8ICdzdGF0ZScgfCAnbGFzdF9yZXZpZXcnPik7XG4gICAgICBjb25zb2xlLmxvZyhcIltCYWNrZ3JvdW5kXSBGbGFzaGNhcmQgY3JlYXRlZCBpbiBEQjpcIiwgbmV3Rmxhc2hjYXJkKTtcblxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBhc3NvY2lhdGVkIGNoYXQgbWVzc2FnZVxuICAgICAgYXdhaXQgY3JlYXRlQ2hhdE1lc3NhZ2UoeyByb2xlOiAnZmxhc2hjYXJkJywgZmxhc2hjYXJkX2lkOiBuZXdGbGFzaGNhcmQuaWQgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIltCYWNrZ3JvdW5kXSBBc3NvY2lhdGVkIGNoYXQgbWVzc2FnZSBjcmVhdGVkIGZvciBmbGFzaGNhcmQgSUQ6XCIsIG5ld0ZsYXNoY2FyZC5pZCk7XG5cbiAgICAgIC8vIDMuIFNlbmQgbm90aWZpY2F0aW9uIHRvIHVwZGF0ZSBVSSAoaWYgbmVlZGVkLCBlLmcuLCBjaGF0IGhpc3RvcnkpXG4gICAgICAvLyBzZW5kTWVzc2FnZSgnX2NoYXRIaXN0b3J5VXBkYXRlZCcsIHVuZGVmaW5lZCkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgX2NoYXRIaXN0b3J5VXBkYXRlZCBub3RpZmljYXRpb246XCIsIGUpKTtcblxuICAgICAgLy8gNC4gUmV0dXJuIHRoZSBzYXZlZCBmbGFzaGNhcmQgb2JqZWN0IGFzIGV4cGVjdGVkIGJ5IHRoZSBQcm9taXNlXG4gICAgICByZXR1cm4gbmV3Rmxhc2hjYXJkO1xuXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltCYWNrZ3JvdW5kXSBFcnJvciBwcm9jZXNzaW5nIHNhdmVGbGFzaGNhcmRBbmROb3RpZnk6XCIsIGVycm9yKTtcbiAgICAgIC8vIFRocm93IHRoZSBlcnJvciB0byByZWplY3QgdGhlIHByb21pc2VcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHNhdmUgZmxhc2hjYXJkOiAke2Vycm9yLm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKX1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBBZGQgb3RoZXIgYmFja2dyb3VuZCBsaXN0ZW5lcnMgaGVyZSAoZS5nLiwgYWxhcm1zLCBvdGhlciBtZXNzYWdlcykgLS0tXG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBpbnN0YWxsL3VwZGF0ZSBldmVudHMgLS0tXG4gIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoZGV0YWlscykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdFeHRlbnNpb24gaW5zdGFsbGVkOicsIGRldGFpbHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlYXNvbiBmb3IgdGhlIGV2ZW50IGlzIHRoZSBpbml0aWFsIGluc3RhbGxhdGlvblxuICAgIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGVyZm9ybWluZyBmaXJzdC10aW1lIHNldHVwLi4uJyk7XG4gICAgICAvLyBPbmx5IG5lZWQgdG8gZW5zdXJlIG9mZnNjcmVlbiBkb2N1bWVudCBleGlzdHMuIFNjaGVtYSBpcyBpbml0aWFsaXplZCB3aXRoaW4gb2Zmc2NyZWVuLnRzLlxuICAgICAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCgpLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEluaXRpYWwgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCBmYWlsZWQgb24gaW5zdGFsbDonLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ29uc3RydWN0IHRoZSBVUkwgZm9yIHRoZSBvbmJvYXJkaW5nIHBhZ2VcbiAgICAgIGNvbnN0IHVybCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ29uYm9hcmRpbmcuaHRtbCcpO1xuXG4gICAgICAvLyBPcGVuIHRoZSBvbmJvYXJkaW5nIHBhZ2UgaW4gYSBuZXcgdGFiXG4gICAgICBhd2FpdCBicm93c2VyLnRhYnMuY3JlYXRlKHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhgT3BlbmVkIG9uYm9hcmRpbmcgcGFnZTogJHt1cmx9YCk7XG4gICAgfSBlbHNlIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIE9wdGlvbmFsOiBIYW5kbGUgdXBkYXRlcywgZS5nLiwgc2hvdyBub3RpZmljYXRpb25zIG9yIG1pZ3JhdGUgZGF0YVxuICAgICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBVcGRhdGVkIGZyb20gJHtkZXRhaWxzLnByZXZpb3VzVmVyc2lvbn0gdG8gJHticm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufWApO1xuICAgICAgLy8gVW5jb21tZW50IHRvIG9wZW4gc2V0dGluZ3Mgb24gdXBkYXRlOlxuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLm9wZW5PcHRpb25zUGFnZSgpO1xuICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gRXJyb3Igb3BlbmluZyBzZXR0aW5ncyBwYWdlIG9uIHVwZGF0ZTonLCBlcnJvcik7XG4gICAgICAvLyB9XG4gICAgfVxuICB9KTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGJyb3dzZXIgc3RhcnR1cCAtLS1cbiAgLy8gVXNlIG9uU3RhcnR1cCB0byBlbnN1cmUgdGhlIG9mZnNjcmVlbiBkb2N1bWVudCBpcyByZWFkeSB3aGVuIHRoZSBicm93c2VyIHN0YXJ0c1xuICBicm93c2VyLnJ1bnRpbWUub25TdGFydHVwLmFkZExpc3RlbmVyKGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIEJyb3dzZXIgc3RhcnR1cCBkZXRlY3RlZC4gU2V0dGluZyB1cCBvZmZzY3JlZW4gZG9jdW1lbnQuLi4nKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCgpO1xuICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgc2V0dXAgY29tcGxldGUgb24gc3RhcnR1cC4nKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQgZmFpbGVkIG9uIHN0YXJ0dXA6JywgZXJyb3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ0JhY2tncm91bmQgc2NyaXB0IHNldHVwIGNvbXBsZXRlLicpO1xufSk7ICIsIi8vICNyZWdpb24gc25pcHBldFxuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBnbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWU/LmlkXG4gID8gZ2xvYmFsVGhpcy5icm93c2VyXG4gIDogZ2xvYmFsVGhpcy5jaHJvbWU7XG4vLyAjZW5kcmVnaW9uIHNuaXBwZXRcbiIsImltcG9ydCB7IGJyb3dzZXIgYXMgX2Jyb3dzZXIgfSBmcm9tIFwiQHd4dC1kZXYvYnJvd3NlclwiO1xuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBfYnJvd3NlcjtcbmV4cG9ydCB7fTtcbiIsIi8vIHNyYy9pbmRleC50c1xudmFyIF9NYXRjaFBhdHRlcm4gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoUGF0dGVybikge1xuICAgIGlmIChtYXRjaFBhdHRlcm4gPT09IFwiPGFsbF91cmxzPlwiKSB7XG4gICAgICB0aGlzLmlzQWxsVXJscyA9IHRydWU7XG4gICAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IFsuLi5fTWF0Y2hQYXR0ZXJuLlBST1RPQ09MU107XG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBcIipcIjtcbiAgICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IFwiKlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBncm91cHMgPSAvKC4qKTpcXC9cXC8oLio/KShcXC8uKikvLmV4ZWMobWF0Y2hQYXR0ZXJuKTtcbiAgICAgIGlmIChncm91cHMgPT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4obWF0Y2hQYXR0ZXJuLCBcIkluY29ycmVjdCBmb3JtYXRcIik7XG4gICAgICBjb25zdCBbXywgcHJvdG9jb2wsIGhvc3RuYW1lLCBwYXRobmFtZV0gPSBncm91cHM7XG4gICAgICB2YWxpZGF0ZVByb3RvY29sKG1hdGNoUGF0dGVybiwgcHJvdG9jb2wpO1xuICAgICAgdmFsaWRhdGVIb3N0bmFtZShtYXRjaFBhdHRlcm4sIGhvc3RuYW1lKTtcbiAgICAgIHZhbGlkYXRlUGF0aG5hbWUobWF0Y2hQYXR0ZXJuLCBwYXRobmFtZSk7XG4gICAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IHByb3RvY29sID09PSBcIipcIiA/IFtcImh0dHBcIiwgXCJodHRwc1wiXSA6IFtwcm90b2NvbF07XG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBob3N0bmFtZTtcbiAgICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IHBhdGhuYW1lO1xuICAgIH1cbiAgfVxuICBpbmNsdWRlcyh1cmwpIHtcbiAgICBpZiAodGhpcy5pc0FsbFVybHMpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCB1ID0gdHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIiA/IG5ldyBVUkwodXJsKSA6IHVybCBpbnN0YW5jZW9mIExvY2F0aW9uID8gbmV3IFVSTCh1cmwuaHJlZikgOiB1cmw7XG4gICAgcmV0dXJuICEhdGhpcy5wcm90b2NvbE1hdGNoZXMuZmluZCgocHJvdG9jb2wpID0+IHtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzSHR0cE1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBzXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzSHR0cHNNYXRjaCh1KTtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJmaWxlXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzRmlsZU1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImZ0cFwiKVxuICAgICAgICByZXR1cm4gdGhpcy5pc0Z0cE1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcInVyblwiKVxuICAgICAgICByZXR1cm4gdGhpcy5pc1Vybk1hdGNoKHUpO1xuICAgIH0pO1xuICB9XG4gIGlzSHR0cE1hdGNoKHVybCkge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cDpcIiAmJiB0aGlzLmlzSG9zdFBhdGhNYXRjaCh1cmwpO1xuICB9XG4gIGlzSHR0cHNNYXRjaCh1cmwpIHtcbiAgICByZXR1cm4gdXJsLnByb3RvY29sID09PSBcImh0dHBzOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybCk7XG4gIH1cbiAgaXNIb3N0UGF0aE1hdGNoKHVybCkge1xuICAgIGlmICghdGhpcy5ob3N0bmFtZU1hdGNoIHx8ICF0aGlzLnBhdGhuYW1lTWF0Y2gpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaG9zdG5hbWVNYXRjaFJlZ2V4cyA9IFtcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaCksXG4gICAgICB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLmhvc3RuYW1lTWF0Y2gucmVwbGFjZSgvXlxcKlxcLi8sIFwiXCIpKVxuICAgIF07XG4gICAgY29uc3QgcGF0aG5hbWVNYXRjaFJlZ2V4ID0gdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5wYXRobmFtZU1hdGNoKTtcbiAgICByZXR1cm4gISFob3N0bmFtZU1hdGNoUmVnZXhzLmZpbmQoKHJlZ2V4KSA9PiByZWdleC50ZXN0KHVybC5ob3N0bmFtZSkpICYmIHBhdGhuYW1lTWF0Y2hSZWdleC50ZXN0KHVybC5wYXRobmFtZSk7XG4gIH1cbiAgaXNGaWxlTWF0Y2godXJsKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IGZpbGU6Ly8gcGF0dGVybiBtYXRjaGluZy4gT3BlbiBhIFBSIHRvIGFkZCBzdXBwb3J0XCIpO1xuICB9XG4gIGlzRnRwTWF0Y2godXJsKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IGZ0cDovLyBwYXR0ZXJuIG1hdGNoaW5nLiBPcGVuIGEgUFIgdG8gYWRkIHN1cHBvcnRcIik7XG4gIH1cbiAgaXNVcm5NYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogdXJuOi8vIHBhdHRlcm4gbWF0Y2hpbmcuIE9wZW4gYSBQUiB0byBhZGQgc3VwcG9ydFwiKTtcbiAgfVxuICBjb252ZXJ0UGF0dGVyblRvUmVnZXgocGF0dGVybikge1xuICAgIGNvbnN0IGVzY2FwZWQgPSB0aGlzLmVzY2FwZUZvclJlZ2V4KHBhdHRlcm4pO1xuICAgIGNvbnN0IHN0YXJzUmVwbGFjZWQgPSBlc2NhcGVkLnJlcGxhY2UoL1xcXFxcXCovZywgXCIuKlwiKTtcbiAgICByZXR1cm4gUmVnRXhwKGBeJHtzdGFyc1JlcGxhY2VkfSRgKTtcbiAgfVxuICBlc2NhcGVGb3JSZWdleChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbiAgfVxufTtcbnZhciBNYXRjaFBhdHRlcm4gPSBfTWF0Y2hQYXR0ZXJuO1xuTWF0Y2hQYXR0ZXJuLlBST1RPQ09MUyA9IFtcImh0dHBcIiwgXCJodHRwc1wiLCBcImZpbGVcIiwgXCJmdHBcIiwgXCJ1cm5cIl07XG52YXIgSW52YWxpZE1hdGNoUGF0dGVybiA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtYXRjaFBhdHRlcm4sIHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIG1hdGNoIHBhdHRlcm4gXCIke21hdGNoUGF0dGVybn1cIjogJHtyZWFzb259YCk7XG4gIH1cbn07XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3RvY29sKG1hdGNoUGF0dGVybiwgcHJvdG9jb2wpIHtcbiAgaWYgKCFNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmluY2x1ZGVzKHByb3RvY29sKSAmJiBwcm90b2NvbCAhPT0gXCIqXCIpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICBtYXRjaFBhdHRlcm4sXG4gICAgICBgJHtwcm90b2NvbH0gbm90IGEgdmFsaWQgcHJvdG9jb2wgKCR7TWF0Y2hQYXR0ZXJuLlBST1RPQ09MUy5qb2luKFwiLCBcIil9KWBcbiAgICApO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVIb3N0bmFtZShtYXRjaFBhdHRlcm4sIGhvc3RuYW1lKSB7XG4gIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIjpcIikpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4obWF0Y2hQYXR0ZXJuLCBgSG9zdG5hbWUgY2Fubm90IGluY2x1ZGUgYSBwb3J0YCk7XG4gIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIipcIikgJiYgaG9zdG5hbWUubGVuZ3RoID4gMSAmJiAhaG9zdG5hbWUuc3RhcnRzV2l0aChcIiouXCIpKVxuICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKFxuICAgICAgbWF0Y2hQYXR0ZXJuLFxuICAgICAgYElmIHVzaW5nIGEgd2lsZGNhcmQgKCopLCBpdCBtdXN0IGdvIGF0IHRoZSBzdGFydCBvZiB0aGUgaG9zdG5hbWVgXG4gICAgKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlUGF0aG5hbWUobWF0Y2hQYXR0ZXJuLCBwYXRobmFtZSkge1xuICByZXR1cm47XG59XG5leHBvcnQge1xuICBJbnZhbGlkTWF0Y2hQYXR0ZXJuLFxuICBNYXRjaFBhdHRlcm5cbn07XG4iXSwibmFtZXMiOlsidGhpcyIsIm1vZHVsZSIsInByb3h5VGFyZ2V0IiwidmFsdWUiLCJvbk1lc3NhZ2UiLCJyZXN1bHQiLCJtZXNzYWdlIiwiRXJyb3IiLCJfX2RlZlByb3AiLCJfX2RlZk5vcm1hbFByb3AiLCJ4IiwiX2IiLCJfYjIiLCJfYSIsInYiLCJPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCIsImJyb3dzZXIiLCJjcmVhdGVFbXB0eUNhcmQiLCJTdGF0ZSIsInBhcnNlZEpzb24iLCJfYnJvd3NlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sV0FBUyxpQkFBaUIsS0FBSztBQUNwQyxRQUFJLE9BQU8sUUFBUSxPQUFPLFFBQVEsV0FBWSxRQUFPLEVBQUUsTUFBTSxJQUFLO0FBQ2xFLFdBQU87QUFBQSxFQUNUOzs7Ozs7Ozs7OztBQ0hBLE9BQUMsU0FBVSxRQUFRLFNBQVM7QUFHaUI7QUFDekMsa0JBQVEsTUFBTTtBQUFBLFFBQ2xCO0FBQUEsTUFPQSxHQUFHLE9BQU8sZUFBZSxjQUFjLGFBQWEsT0FBTyxTQUFTLGNBQWMsT0FBT0EsbUJBQU0sU0FBVUMsU0FBUTtBQVMvRyxZQUFJLEVBQUUsV0FBVyxVQUFVLFdBQVcsT0FBTyxXQUFXLFdBQVcsT0FBTyxRQUFRLEtBQUs7QUFDckYsZ0JBQU0sSUFBSSxNQUFNLDJEQUEyRDtBQUFBLFFBQy9FO0FBQ0UsWUFBSSxFQUFFLFdBQVcsV0FBVyxXQUFXLFFBQVEsV0FBVyxXQUFXLFFBQVEsUUFBUSxLQUFLO0FBQ3hGLGdCQUFNLG1EQUFtRDtBQU96RCxnQkFBTSxXQUFXLG1CQUFpQjtBQUloQyxrQkFBTSxjQUFjO0FBQUEsY0FDbEIsVUFBVTtBQUFBLGdCQUNSLFNBQVM7QUFBQSxrQkFDUCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUNaO0FBQUEsZ0JBQ0QsWUFBWTtBQUFBLGtCQUNWLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ1o7QUFBQSxnQkFDRCxPQUFPO0FBQUEsa0JBQ0wsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDWjtBQUFBLGdCQUNELFVBQVU7QUFBQSxrQkFDUixXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUN2QjtBQUFBLGNB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RSxFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVUsSUFBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBTyxJQUFHLElBQUUsS0FBRyxHQUFHO0FBQUEsRUFBQztBQUFDLFdBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxPQUFNLElBQUksTUFBTSxjQUFjO0FBQUUsVUFBTSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBUyxJQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBTztBQUFHLFFBQUksSUFBRTtBQUFFLFlBQU8sR0FBQztBQUFBLE1BQUUsS0FBSTtBQUFPLFlBQUUsS0FBSyxNQUFNLEtBQUcsS0FBRyxLQUFHLEtBQUcsSUFBSTtBQUFFO0FBQUEsTUFBTSxLQUFJO0FBQVUsWUFBRSxLQUFLLE1BQU0sS0FBRyxLQUFHLElBQUk7QUFBRTtBQUFBLElBQUs7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxFQUFFLFlBQVcsR0FBRyxJQUFFLEVBQUUsU0FBUSxJQUFHLEdBQUUsSUFBRSxFQUFFLFFBQU8sR0FBRyxJQUFFLEVBQUUsU0FBUSxHQUFHLElBQUUsRUFBRSxjQUFhLElBQUUsRUFBRSxXQUFZO0FBQUMsV0FBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFBRTtBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsV0FBTyxJQUFFLEtBQUcsSUFBSSxDQUFDLEtBQUcsR0FBRyxDQUFDO0FBQUEsRUFBRTtBQUFDLFFBQU0sSUFBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLElBQUUsQ0FBQyxVQUFTLE9BQU0sUUFBTyxPQUFNLFNBQVEsTUFB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
