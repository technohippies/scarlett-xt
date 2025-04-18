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
        sendMessage(responseTarget, { endpoint, success: false, error: "Ollama endpoint not provided." }).catch((e) => console.error(`[Background] Failed to send ${responseTarget} error:`, e));
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
        sendMessage(responseTarget, { endpoint, success: true, models }).catch((e) => console.error(`[Background] Failed to send ${responseTarget} success:`, e));
      } catch (error) {
        console.error("[Background] Error during fetch operation:", error);
        let errorMessage = error instanceof Error ? error.message : "Unknown error fetching models.";
        if (errorMessage.includes("Failed to fetch")) {
          errorMessage += ". Ensure Ollama is running and reachable, and check extension host permissions.";
        }
        sendMessage(responseTarget, { endpoint, success: false, error: errorMessage }).catch((e) => console.error(`[Background] Failed to send ${responseTarget} error:`, e));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3V0aWxzL2RlZmluZS1iYWNrZ3JvdW5kLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3NlcmlhbGl6ZS1lcnJvci9lcnJvci1jb25zdHJ1Y3RvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc2VyaWFsaXplLWVycm9yL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0B3ZWJleHQtY29yZS9tZXNzYWdpbmcvbGliL2NodW5rLUJRTEZTRkZaLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0B3ZWJleHQtY29yZS9tZXNzYWdpbmcvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21lc3NhZ2luZy9saWIvaW5kZXguanMiLCIuLi8uLi91dGlscy9tZXNzYWdpbmcudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtbXV0ZXgvaW5kZXgubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWZzcnMvZGlzdC9pbmRleC5tanMiLCIuLi8uLi91dGlscy9kYi50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm92aWRlcnMvb2xsYW1hLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL3Byb3ZpZGVycy9vcGVucm91dGVyLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL2xsbVNlcnZpY2UudHMiLCIuLi8uLi9lbnRyeXBvaW50cy9iYWNrZ3JvdW5kLnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0B3eHQtZGV2L2Jyb3dzZXIvc3JjL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC9icm93c2VyLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ad2ViZXh0LWNvcmUvbWF0Y2gtcGF0dGVybnMvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWZpbmVCYWNrZ3JvdW5kKGFyZykge1xuICBpZiAoYXJnID09IG51bGwgfHwgdHlwZW9mIGFyZyA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4geyBtYWluOiBhcmcgfTtcbiAgcmV0dXJuIGFyZztcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTIuMCAtIFR1ZSBNYXkgMTQgMjAyNCAxODowMToyOSAqL1xuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG4gIGlmICghKGdsb2JhbFRoaXMuYnJvd3NlciAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZSAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZS5pZCkpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAgIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICAgIG1heEFyZ3M6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBkZXZ0b29sczoge1xuICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycylcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiY29uc3QgbGlzdCA9IFtcblx0Ly8gTmF0aXZlIEVTIGVycm9ycyBodHRwczovLzI2Mi5lY21hLWludGVybmF0aW9uYWwub3JnLzEyLjAvI3NlYy13ZWxsLWtub3duLWludHJpbnNpYy1vYmplY3RzXG5cdEV2YWxFcnJvcixcblx0UmFuZ2VFcnJvcixcblx0UmVmZXJlbmNlRXJyb3IsXG5cdFN5bnRheEVycm9yLFxuXHRUeXBlRXJyb3IsXG5cdFVSSUVycm9yLFxuXG5cdC8vIEJ1aWx0LWluIGVycm9yc1xuXHRnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbixcblxuXHQvLyBOb2RlLXNwZWNpZmljIGVycm9yc1xuXHQvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2Vycm9ycy5odG1sXG5cdGdsb2JhbFRoaXMuQXNzZXJ0aW9uRXJyb3IsXG5cdGdsb2JhbFRoaXMuU3lzdGVtRXJyb3IsXG5dXG5cdC8vIE5vbi1uYXRpdmUgRXJyb3JzIGFyZSB1c2VkIHdpdGggYGdsb2JhbFRoaXNgIGJlY2F1c2UgdGhleSBtaWdodCBiZSBtaXNzaW5nLiBUaGlzIGZpbHRlciBkcm9wcyB0aGVtIHdoZW4gdW5kZWZpbmVkLlxuXHQuZmlsdGVyKEJvb2xlYW4pXG5cdC5tYXAoXG5cdFx0Y29uc3RydWN0b3IgPT4gW2NvbnN0cnVjdG9yLm5hbWUsIGNvbnN0cnVjdG9yXSxcblx0KTtcblxuY29uc3QgZXJyb3JDb25zdHJ1Y3RvcnMgPSBuZXcgTWFwKGxpc3QpO1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckNvbnN0cnVjdG9ycztcbiIsImltcG9ydCBlcnJvckNvbnN0cnVjdG9ycyBmcm9tICcuL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBOb25FcnJvciBleHRlbmRzIEVycm9yIHtcblx0bmFtZSA9ICdOb25FcnJvcic7XG5cblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKE5vbkVycm9yLl9wcmVwYXJlU3VwZXJNZXNzYWdlKG1lc3NhZ2UpKTtcblx0fVxuXG5cdHN0YXRpYyBfcHJlcGFyZVN1cGVyTWVzc2FnZShtZXNzYWdlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBTdHJpbmcobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGNvbW1vblByb3BlcnRpZXMgPSBbXG5cdHtcblx0XHRwcm9wZXJ0eTogJ25hbWUnLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdtZXNzYWdlJyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnc3RhY2snLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdjb2RlJyxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdjYXVzZScsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdH0sXG5dO1xuXG5jb25zdCB0b0pzb25XYXNDYWxsZWQgPSBuZXcgV2Vha1NldCgpO1xuXG5jb25zdCB0b0pTT04gPSBmcm9tID0+IHtcblx0dG9Kc29uV2FzQ2FsbGVkLmFkZChmcm9tKTtcblx0Y29uc3QganNvbiA9IGZyb20udG9KU09OKCk7XG5cdHRvSnNvbldhc0NhbGxlZC5kZWxldGUoZnJvbSk7XG5cdHJldHVybiBqc29uO1xufTtcblxuY29uc3QgZ2V0RXJyb3JDb25zdHJ1Y3RvciA9IG5hbWUgPT4gZXJyb3JDb25zdHJ1Y3RvcnMuZ2V0KG5hbWUpID8/IEVycm9yO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuY29uc3QgZGVzdHJveUNpcmN1bGFyID0gKHtcblx0ZnJvbSxcblx0c2Vlbixcblx0dG8sXG5cdGZvcmNlRW51bWVyYWJsZSxcblx0bWF4RGVwdGgsXG5cdGRlcHRoLFxuXHR1c2VUb0pTT04sXG5cdHNlcmlhbGl6ZSxcbn0pID0+IHtcblx0aWYgKCF0bykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGZyb20pKSB7XG5cdFx0XHR0byA9IFtdO1xuXHRcdH0gZWxzZSBpZiAoIXNlcmlhbGl6ZSAmJiBpc0Vycm9yTGlrZShmcm9tKSkge1xuXHRcdFx0Y29uc3QgRXJyb3IgPSBnZXRFcnJvckNvbnN0cnVjdG9yKGZyb20ubmFtZSk7XG5cdFx0XHR0byA9IG5ldyBFcnJvcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0byA9IHt9O1xuXHRcdH1cblx0fVxuXG5cdHNlZW4ucHVzaChmcm9tKTtcblxuXHRpZiAoZGVwdGggPj0gbWF4RGVwdGgpIHtcblx0XHRyZXR1cm4gdG87XG5cdH1cblxuXHRpZiAodXNlVG9KU09OICYmIHR5cGVvZiBmcm9tLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyAmJiAhdG9Kc29uV2FzQ2FsbGVkLmhhcyhmcm9tKSkge1xuXHRcdHJldHVybiB0b0pTT04oZnJvbSk7XG5cdH1cblxuXHRjb25zdCBjb250aW51ZURlc3Ryb3lDaXJjdWxhciA9IHZhbHVlID0+IGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0ZnJvbTogdmFsdWUsXG5cdFx0c2VlbjogWy4uLnNlZW5dLFxuXHRcdGZvcmNlRW51bWVyYWJsZSxcblx0XHRtYXhEZXB0aCxcblx0XHRkZXB0aCxcblx0XHR1c2VUb0pTT04sXG5cdFx0c2VyaWFsaXplLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmcm9tKSkge1xuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0J1ZmZlcicpIHtcblx0XHRcdHRvW2tleV0gPSAnW29iamVjdCBCdWZmZXJdJztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IFVzZSBgc3RyZWFtLmlzUmVhZGFibGUoKWAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxOC5cblx0XHRpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUucGlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dG9ba2V5XSA9ICdbb2JqZWN0IFN0cmVhbV0nO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHQvLyBHcmFjZWZ1bGx5IGhhbmRsZSBub24tY29uZmlndXJhYmxlIGVycm9ycyBsaWtlIGBET01FeGNlcHRpb25gLlxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dG9ba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSBjYXRjaCB7fVxuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIXNlZW4uaW5jbHVkZXMoZnJvbVtrZXldKSkge1xuXHRcdFx0ZGVwdGgrKztcblx0XHRcdHRvW2tleV0gPSBjb250aW51ZURlc3Ryb3lDaXJjdWxhcihmcm9tW2tleV0pO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0b1trZXldID0gJ1tDaXJjdWxhcl0nO1xuXHR9XG5cblx0Zm9yIChjb25zdCB7cHJvcGVydHksIGVudW1lcmFibGV9IG9mIGNvbW1vblByb3BlcnRpZXMpIHtcblx0XHRpZiAodHlwZW9mIGZyb21bcHJvcGVydHldICE9PSAndW5kZWZpbmVkJyAmJiBmcm9tW3Byb3BlcnR5XSAhPT0gbnVsbCkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBwcm9wZXJ0eSwge1xuXHRcdFx0XHR2YWx1ZTogaXNFcnJvckxpa2UoZnJvbVtwcm9wZXJ0eV0pID8gY29udGludWVEZXN0cm95Q2lyY3VsYXIoZnJvbVtwcm9wZXJ0eV0pIDogZnJvbVtwcm9wZXJ0eV0sXG5cdFx0XHRcdGVudW1lcmFibGU6IGZvcmNlRW51bWVyYWJsZSA/IHRydWUgOiBlbnVtZXJhYmxlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUVycm9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdG1heERlcHRoID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuXHRcdHVzZVRvSlNPTiA9IHRydWUsXG5cdH0gPSBvcHRpb25zO1xuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0XHRmcm9tOiB2YWx1ZSxcblx0XHRcdHNlZW46IFtdLFxuXHRcdFx0Zm9yY2VFbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0bWF4RGVwdGgsXG5cdFx0XHRkZXB0aDogMCxcblx0XHRcdHVzZVRvSlNPTixcblx0XHRcdHNlcmlhbGl6ZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXG5cdC8vIFBlb3BsZSBzb21ldGltZXMgdGhyb3cgdGhpbmdzIGJlc2lkZXMgRXJyb3Igb2JqZWN0c+KAplxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gYEpTT04uc3RyaW5naWZ5KClgIGRpc2NhcmRzIGZ1bmN0aW9ucy4gV2UgZG8gdG9vLCB1bmxlc3MgYSBmdW5jdGlvbiBpcyB0aHJvd24gZGlyZWN0bHkuXG5cdFx0Ly8gV2UgaW50ZW50aW9uYWxseSB1c2UgYHx8YCBiZWNhdXNlIGAubmFtZWAgaXMgYW4gZW1wdHkgc3RyaW5nIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zLlxuXHRcdHJldHVybiBgW0Z1bmN0aW9uOiAke3ZhbHVlLm5hbWUgfHwgJ2Fub255bW91cyd9XWA7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge21heERlcHRoID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZfSA9IG9wdGlvbnM7XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAoaXNNaW5pbXVtVmlhYmxlU2VyaWFsaXplZEVycm9yKHZhbHVlKSkge1xuXHRcdGNvbnN0IEVycm9yID0gZ2V0RXJyb3JDb25zdHJ1Y3Rvcih2YWx1ZS5uYW1lKTtcblx0XHRyZXR1cm4gZGVzdHJveUNpcmN1bGFyKHtcblx0XHRcdGZyb206IHZhbHVlLFxuXHRcdFx0c2VlbjogW10sXG5cdFx0XHR0bzogbmV3IEVycm9yKCksXG5cdFx0XHRtYXhEZXB0aCxcblx0XHRcdGRlcHRoOiAwLFxuXHRcdFx0c2VyaWFsaXplOiBmYWxzZSxcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBuZXcgTm9uRXJyb3IodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvckxpa2UodmFsdWUpIHtcblx0cmV0dXJuIEJvb2xlYW4odmFsdWUpXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0JiYgJ25hbWUnIGluIHZhbHVlXG5cdCYmICdtZXNzYWdlJyBpbiB2YWx1ZVxuXHQmJiAnc3RhY2snIGluIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc01pbmltdW1WaWFibGVTZXJpYWxpemVkRXJyb3IodmFsdWUpIHtcblx0cmV0dXJuIEJvb2xlYW4odmFsdWUpXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0JiYgJ21lc3NhZ2UnIGluIHZhbHVlXG5cdCYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGVycm9yQ29uc3RydWN0b3JzfSBmcm9tICcuL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyc7XG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZGVmUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBfX2dldE93blByb3BEZXNjcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG52YXIgX19zcHJlYWRQcm9wcyA9IChhLCBiKSA9PiBfX2RlZlByb3BzKGEsIF9fZ2V0T3duUHJvcERlc2NzKGIpKTtcbnZhciBfX29ialJlc3QgPSAoc291cmNlLCBleGNsdWRlKSA9PiB7XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKHNvdXJjZSwgcHJvcCkgJiYgZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMClcbiAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgaWYgKHNvdXJjZSAhPSBudWxsICYmIF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKHNvdXJjZSkpIHtcbiAgICAgIGlmIChleGNsdWRlLmluZGV4T2YocHJvcCkgPCAwICYmIF9fcHJvcElzRW51bS5jYWxsKHNvdXJjZSwgcHJvcCkpXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fYXN5bmMgPSAoX190aGlzLCBfX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdmFyIGZ1bGZpbGxlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVqZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBzdGVwID0gKHgpID0+IHguZG9uZSA/IHJlc29sdmUoeC52YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUoeC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbiAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkoX190aGlzLCBfX2FyZ3VtZW50cykpLm5leHQoKSk7XG4gIH0pO1xufTtcblxuLy8gc3JjL2dlbmVyaWMudHNcbmltcG9ydCB7IHNlcmlhbGl6ZUVycm9yLCBkZXNlcmlhbGl6ZUVycm9yIH0gZnJvbSBcInNlcmlhbGl6ZS1lcnJvclwiO1xuZnVuY3Rpb24gZGVmaW5lR2VuZXJpY01lc3NhbmdpbmcoY29uZmlnKSB7XG4gIGxldCByZW1vdmVSb290TGlzdGVuZXI7XG4gIGxldCBwZXJUeXBlTGlzdGVuZXJzID0ge307XG4gIGZ1bmN0aW9uIGNsZWFudXBSb290TGlzdGVuZXIoKSB7XG4gICAgaWYgKE9iamVjdC5lbnRyaWVzKHBlclR5cGVMaXN0ZW5lcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVtb3ZlUm9vdExpc3RlbmVyID09IG51bGwgPyB2b2lkIDAgOiByZW1vdmVSb290TGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZVJvb3RMaXN0ZW5lciA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgbGV0IGlkU2VxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU0KTtcbiAgZnVuY3Rpb24gZ2V0TmV4dElkKCkge1xuICAgIHJldHVybiBpZFNlcSsrO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2VuZE1lc3NhZ2UodHlwZSwgZGF0YSwgLi4uYXJncykge1xuICAgICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hMiwgX2IsIF9jLCBfZDtcbiAgICAgICAgY29uc3QgX21lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IGdldE5leHRJZCgpLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IChfYiA9IHlpZWxkIChfYTIgPSBjb25maWcudmVyaWZ5TWVzc2FnZURhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuY2FsbChjb25maWcsIF9tZXNzYWdlKSkgIT0gbnVsbCA/IF9iIDogX21lc3NhZ2U7XG4gICAgICAgIChfYyA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYy5kZWJ1ZyhgW21lc3NhZ2luZ10gc2VuZE1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgbWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY29uZmlnLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCB7IHJlcywgZXJyIH0gPSByZXNwb25zZSAhPSBudWxsID8gcmVzcG9uc2UgOiB7IGVycjogbmV3IEVycm9yKFwiTm8gcmVzcG9uc2VcIikgfTtcbiAgICAgICAgKF9kID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9kLmRlYnVnKGBbbWVzc2FnaW5nXSBzZW5kTWVzc2FnZSB7aWQ9JHttZXNzYWdlLmlkfX0gXFx1MTQwQVxcdTI1MDBgLCB7IHJlcywgZXJyIH0pO1xuICAgICAgICBpZiAoZXJyICE9IG51bGwpXG4gICAgICAgICAgdGhyb3cgZGVzZXJpYWxpemVFcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbk1lc3NhZ2UodHlwZSwgb25SZWNlaXZlZCkge1xuICAgICAgdmFyIF9hMiwgX2IsIF9jO1xuICAgICAgaWYgKHJlbW92ZVJvb3RMaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgIChfYTIgPSBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmRlYnVnKFxuICAgICAgICAgIGBbbWVzc2FnaW5nXSBcIiR7dHlwZX1cIiBpbml0aWFsaXplZCB0aGUgbWVzc2FnZSBsaXN0ZW5lciBmb3IgdGhpcyBjb250ZXh0YFxuICAgICAgICApO1xuICAgICAgICByZW1vdmVSb290TGlzdGVuZXIgPSBjb25maWcuYWRkUm9vdExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgdmFyIF9hMywgX2IyO1xuICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS50eXBlICE9IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UudGltZXN0YW1wICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmJyZWFrRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIGBbbWVzc2FnaW5nXSBVbmtub3duIG1lc3NhZ2UgZm9ybWF0LCBtdXN0IGluY2x1ZGUgdGhlICd0eXBlJyAmICd0aW1lc3RhbXAnIGZpZWxkcywgcmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoX2EzID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoX2IyID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLmRlYnVnKFwiW21lc3NhZ2luZ10gUmVjZWl2ZWQgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHBlclR5cGVMaXN0ZW5lcnNbbWVzc2FnZS50eXBlXTtcbiAgICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjb25zdCByZXMgPSBsaXN0ZW5lcihtZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigocmVzMikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNCwgX2IzO1xuICAgICAgICAgICAgcmV0dXJuIChfYjMgPSAoX2E0ID0gY29uZmlnLnZlcmlmeU1lc3NhZ2VEYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmNhbGwoY29uZmlnLCByZXMyKSkgIT0gbnVsbCA/IF9iMyA6IHJlczI7XG4gICAgICAgICAgfSkudGhlbigocmVzMikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNDtcbiAgICAgICAgICAgIChfYTQgPSBjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYTQuZGVidWcoYFttZXNzYWdpbmddIG9uTWVzc2FnZSB7aWQ9JHttZXNzYWdlLmlkfX0gXFx1MjUwMFxcdTE0MDVgLCB7IHJlczogcmVzMiB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IHJlczogcmVzMiB9O1xuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTQ7XG4gICAgICAgICAgICAoX2E0ID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmRlYnVnKGBbbWVzc2FnaW5nXSBvbk1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgeyBlcnIgfSk7XG4gICAgICAgICAgICByZXR1cm4geyBlcnI6IHNlcmlhbGl6ZUVycm9yKGVycikgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGVyVHlwZUxpc3RlbmVyc1t0eXBlXSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IEVycm9yKFxuICAgICAgICAgIGBbbWVzc2FnaW5nXSBJbiB0aGlzIEpTIGNvbnRleHQsIG9ubHkgb25lIGxpc3RlbmVyIGNhbiBiZSBzZXR1cCBmb3IgJHt0eXBlfWBcbiAgICAgICAgKTtcbiAgICAgICAgKF9iID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmVycm9yKGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHBlclR5cGVMaXN0ZW5lcnNbdHlwZV0gPSBvblJlY2VpdmVkO1xuICAgICAgKF9jID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLmxvZyhgW21lc3NhZ2luZ10gQWRkZWQgbGlzdGVuZXIgZm9yICR7dHlwZX1gKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBwZXJUeXBlTGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICBjbGVhbnVwUm9vdExpc3RlbmVyKCk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgT2JqZWN0LmtleXMocGVyVHlwZUxpc3RlbmVycykuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBkZWxldGUgcGVyVHlwZUxpc3RlbmVyc1t0eXBlXTtcbiAgICAgIH0pO1xuICAgICAgY2xlYW51cFJvb3RMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgX19zcHJlYWRWYWx1ZXMsXG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fb2JqUmVzdCxcbiAgX19hc3luYyxcbiAgZGVmaW5lR2VuZXJpY01lc3Nhbmdpbmdcbn07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge31cbiAgICAgICAgICAvKiB3cmFwcGVycyAqL1xuICAgICAgICAgICwge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuXG5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cblxuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfSAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG5cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9OyAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsImltcG9ydCB7XG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fc3ByZWFkVmFsdWVzLFxuICBkZWZpbmVHZW5lcmljTWVzc2FuZ2luZ1xufSBmcm9tIFwiLi9jaHVuay1CUUxGU0ZGWi5qc1wiO1xuXG4vLyBzcmMvZXh0ZW5zaW9uLnRzXG5pbXBvcnQgQnJvd3NlciBmcm9tIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI7XG5mdW5jdGlvbiBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmcoY29uZmlnKSB7XG4gIHJldHVybiBkZWZpbmVHZW5lcmljTWVzc2FuZ2luZyhfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBjb25maWcpLCB7XG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgYXJnKSB7XG4gICAgICBpZiAoYXJnID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgYXJnID09PSBcIm51bWJlclwiID8geyB0YWJJZDogYXJnIH0gOiBhcmc7XG4gICAgICByZXR1cm4gQnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAgICBvcHRpb25zLnRhYklkLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICAvLyBQYXNzIGZyYW1lSWQgaWYgc3BlY2lmaWVkXG4gICAgICAgIG9wdGlvbnMuZnJhbWVJZCAhPSBudWxsID8geyBmcmFtZUlkOiBvcHRpb25zLmZyYW1lSWQgfSA6IHZvaWQgMFxuICAgICAgKTtcbiAgICB9LFxuICAgIGFkZFJvb3RMaXN0ZW5lcihwcm9jZXNzTWVzc2FnZSkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSAobWVzc2FnZSwgc2VuZGVyKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc01lc3NhZ2UoX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgbWVzc2FnZSksIHsgc2VuZGVyIH0pKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH07XG4gICAgICBCcm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHJldHVybiAoKSA9PiBCcm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9XG4gIH0pKTtcbn1cbmV4cG9ydCB7XG4gIGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZ1xufTtcbiIsImltcG9ydCB7IGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZyB9IGZyb20gJ0B3ZWJleHQtY29yZS9tZXNzYWdpbmcnO1xuLy8gUmVtb3ZlIHBvdGVudGlhbGx5IGluY29ycmVjdC91bm5lZWRlZCBpbXBvcnRcbi8vIGltcG9ydCB0eXBlIHsgTExNVXNlckNvbmZpZyB9IGZyb20gJy4uL3NlcnZpY2VzL2xsbVNlcnZpY2UnOyBcbi8vIFJlbW92ZSBjb25mbGljdGluZyBzZWxmLWltcG9ydFxuLy8gaW1wb3J0IHR5cGUgeyBPbGxhbWFTdHJlYW1DaHVuayB9IGZyb20gJy4vbWVzc2FnaW5nJzsgXG5pbXBvcnQgdHlwZSB7IEZsYXNoY2FyZCB9IGZyb20gJy4uL3NyYy90eXBlcy9kYic7IC8vIEFkZGVkIEZsYXNoY2FyZCBpbXBvcnRcbi8vIGltcG9ydCB0eXBlIHsgRGF0YWJhc2VTdGF0cyB9IGZyb20gJy4uL3V0aWxzL2RiJzsgLy8gUkVNT1ZFRCBEYXRhYmFzZVN0YXRzIGltcG9ydFxuXG4vLyBEZWZpbmUvSW1wb3J0IHJlcXVpcmVkIHR5cGVzXG4vLyBUT0RPOiBFbnN1cmUgdGhlc2UgdHlwZXMgYXJlIGNvcnJlY3RseSBkZWZpbmVkIG9yIGltcG9ydGVkIGlmIHRoZXkgZXhpc3QgZWxzZXdoZXJlXG4vLyBleHBvcnQgdHlwZSBPbGxhbWFTdHJlYW1DaHVua1N0YXR1cyA9ICdjaHVuaycgfCAnZG9uZScgfCAnZXJyb3InIHwgJ292ZXJyaWRlX2dyYW50ZWQnOyAvLyBSZW1vdmVkIG9sZCBzdGF0dXMgdHlwZVxuXG5leHBvcnQgdHlwZSBPbGxhbWFTdHJlYW1DaHVuayA9IHtcbiAgbW9kZWw/OiBzdHJpbmc7IC8vIE1ha2Ugb3B0aW9uYWwgYXMgbm90IGFsbCBjaHVua3MgaGF2ZSBpdFxuICBjcmVhdGVkX2F0Pzogc3RyaW5nOyAvLyBNYWtlIG9wdGlvbmFsXG4gIGNvbnRlbnQ/OiBzdHJpbmc7IC8vIENvbnRlbnQgY2h1bmsgZnJvbSBPbGxhbWEgcHJvdmlkZXJcbiAgbWVzc2FnZT86IHsgLy8gT3B0aW9uYWw6IGZpbmFsIG1lc3NhZ2Ugc3RydWN0dXJlIChjaGVjayBhY3R1YWwgT2xsYW1hIEFQSSlcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICB9O1xuICAvLyBkb25lOiBib29sZWFuOyAvLyAnc3RhdHVzJyBmaWVsZCByZXBsYWNlcyB0aGlzXG4gIHRvdGFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICBsb2FkX2R1cmF0aW9uPzogbnVtYmVyO1xuICBwcm9tcHRfZXZhbF9jb3VudD86IG51bWJlcjtcbiAgcHJvbXB0X2V2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gIGV2YWxfY291bnQ/OiBudW1iZXI7XG4gIGV2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gIHN0YXRzPzogeyAvLyBJbmNsdWRlIHN0YXRzIGZyb20gT2xsYW1hIHByb3ZpZGVyJ3MgZG9uZSBjaHVua1xuICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIHRvdGFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICAgIGxvYWRfZHVyYXRpb24/OiBudW1iZXI7XG4gICAgcHJvbXB0X2V2YWxfY291bnQ/OiBudW1iZXI7XG4gICAgcHJvbXB0X2V2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gICAgZXZhbF9jb3VudD86IG51bWJlcjtcbiAgICBldmFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICB9O1xuICAvLyBVcGRhdGVkIHN0YXR1cyBmaWVsZCB0byByZWZsZWN0IGFjdHVhbCB1c2FnZVxuICBzdGF0dXM6ICdjaHVuaycgfCAnY29tcGxldGUnIHwgJ2Vycm9yJyB8ICdkb25lJzsgXG4gIGVycm9yPzogc3RyaW5nOyBcbn07XG5leHBvcnQgaW50ZXJmYWNlIE9sbGFtYUNoYXRSZXF1ZXN0IHtcbiAgICBwcm9tcHQ6IHN0cmluZztcbiAgICBoaXN0b3J5PzogeyByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JzsgY29udGVudDogc3RyaW5nIH1bXTsgXG59XG5leHBvcnQgaW50ZXJmYWNlIENoYXRNZXNzYWdlIHtcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCcgfCAnc3lzdGVtJyB8ICdib29rbWFyaycgfCAnZmxhc2hjYXJkJzsgLy8gQWRkZWQgc3lzdGVtL2Jvb2ttYXJrL2ZsYXNoY2FyZFxuICBjb250ZW50Pzogc3RyaW5nO1xuICBzdGF0dXM/OiAncGVuZGluZycgfCAnc3RyZWFtaW5nJyB8ICdjb21wbGV0ZScgfCAnZXJyb3InO1xuICBpZD86IG51bWJlcjsgLy8gT3B0aW9uYWwgSUQgZnJvbSBEQlxuICBjcmVhdGVkX2F0Pzogc3RyaW5nIHwgbnVtYmVyOyAvLyBPcHRpb25hbCB0aW1lc3RhbXBcbiAgYm9va21hcmtfaWQ/OiBudW1iZXI7IC8vIE9wdGlvbmFsIElEIGlmIHJvbGUgaXMgYm9va21hcmtcbiAgZmxhc2hjYXJkX2lkPzogbnVtYmVyOyAvLyBPcHRpb25hbCBJRCBpZiByb2xlIGlzIGZsYXNoY2FyZFxufVxuXG4vLyBEZWZpbmUgQ2xpcERhdGEgdHlwZSBhbmQgZXhwb3J0IGl0XG5leHBvcnQgaW50ZXJmYWNlIENsaXBEYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgdGFnc1xufVxuXG4vLyBEZWZpbmUgREIgb3BlcmF0aW9uIHR5cGVzXG4vLyBFWFBPUlQgdGhlc2UgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBEYkV4ZWNSZXF1ZXN0IHtcbiAgc3FsOiBzdHJpbmc7XG4gIHBhcmFtcz86IGFueVtdOyAvLyBPcHRpb25hbCBwYXJhbXMgZm9yIGV4ZWNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYlF1ZXJ5UmVxdWVzdCB7XG4gIHNxbDogc3RyaW5nO1xuICBwYXJhbXM/OiBhbnlbXTsgLy8gT3B0aW9uYWwgcGFyYW1zIGZvciBxdWVyeVxufVxuXG4vLyBEZWZpbmUgaW5wdXQvb3V0cHV0IGZvciBnZXRPbGxhbWFNb2RlbHNcbmludGVyZmFjZSBHZXRPbGxhbWFNb2RlbHNSZXF1ZXN0IHtcbiAgZW5kcG9pbnQ6IHN0cmluZztcbn1cblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgYSBtb2RlbCByZXR1cm5lZCBieSB0aGUgYmFja2dyb3VuZFxuaW50ZXJmYWNlIE9sbGFtYU1vZGVsIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vLyAqKiogRVhQT1JUIHRoaXMgaW50ZXJmYWNlICoqKlxuZXhwb3J0IGludGVyZmFjZSBHZXRPbGxhbWFNb2RlbHNSZXNwb25zZSB7XG4gIGVuZHBvaW50Pzogc3RyaW5nOyAvLyBBZGRlZCBvcHRpb25hbCBlbmRwb2ludCBmaWVsZFxuICBzdWNjZXNzOiBib29sZWFuO1xuICBtb2RlbHM/OiBPbGxhbWFNb2RlbFtdO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuLy8gQWRkIFBhZ2VJbmZvIHR5cGUgaWYgbm90IGRlZmluZWQgZWxzZXdoZXJlXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VJbmZvIHsgLy8gQXNzdW1pbmcgdGhpcyBzdHJ1Y3R1cmUgYmFzZWQgb24gQXBwLnRzeCB1c2FnZVxuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxuLy8gRGVmaW5lIHRoZSBvdmVyYWxsIHByb3RvY29sIG1hcCBmb3IgdHlwZSBzYWZldHlcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdG9jb2xNYXAge1xuICAvLyBNZXNzYWdlIGZyb20gUG9wdXAgLT4gQmFja2dyb3VuZCB0byB0cmlnZ2VyIGNsaXBwaW5nXG4gIGNsaXBQYWdlOiAoZGF0YTogQ2xpcERhdGEpID0+IHZvaWQ7IC8vIFNob3VsZCByZXR1cm4gdm9pZCBpZiBiYWNrZ3JvdW5kIGhhbmRsZXMgbm90aWZpY2F0aW9uc1xuXG4gIC8vIE1lc3NhZ2UgZnJvbSBVSSAtPiBCYWNrZ3JvdW5kIHRvIGdldCBhdmFpbGFibGUgT2xsYW1hIG1vZGVsc1xuICBnZXRPbGxhbWFNb2RlbHM6IChkYXRhOiB7IGVuZHBvaW50OiBzdHJpbmcgfSkgPT4gdm9pZDsgLy8gUmVxdWVzdCB0cmlnZ2VyXG4gIGdldE9sbGFtYU1vZGVsc1Jlc3VsdDogR2V0T2xsYW1hTW9kZWxzUmVzcG9uc2U7IC8vIFJlc3BvbnNlIHdpdGggbW9kZWxzIG9yIGVycm9yXG5cbiAgLy8gPT0gREIgT3BlcmF0aW9ucyAoVUkvQmFja2dyb3VuZCAtPiBPZmZzY3JlZW4pID09XG4gIGRiRXhlYzogeyBkYXRhOiBEYkV4ZWNSZXF1ZXN0IH07IC8vIEV4cGVjdCBvYmplY3QgY29udGFpbmluZyByZXF1ZXN0IGRhdGFcbiAgZGJRdWVyeTogeyBkYXRhOiBEYlF1ZXJ5UmVxdWVzdCB9OyAvLyBFeHBlY3Qgb2JqZWN0IGNvbnRhaW5pbmcgcmVxdWVzdCBkYXRhXG5cbiAgLy8gPT0gQ2hhdCBNZXNzYWdlcyA9PVxuICBvbGxhbWFDaGF0UmVxdWVzdDogKGRhdGE6IE9sbGFtYUNoYXRSZXF1ZXN0KSA9PiB2b2lkOyAvLyBSZXF1ZXN0IHRyaWdnZXIgKHN0cmVhbSBoYW5kbGVkIHNlcGFyYXRlbHkpXG4gIG9sbGFtYVJlc3BvbnNlOiBPbGxhbWFTdHJlYW1DaHVuazsgLy8gVXNlIHRoZSB1cGRhdGVkIHR5cGVcbiAgZ2V0Q2hhdEhpc3Rvcnk6IChkYXRhOiB7IHNlc3Npb25JZD86IG51bWJlciB8ICdjdXJyZW50JyB9KSA9PiBQcm9taXNlPENoYXRNZXNzYWdlW10+OyAvLyBEaXJlY3QgcmVxdWVzdC9yZXNwb25zZVxuICBhZGRTeXN0ZW1NZXNzYWdlOiB7IGNvbnRlbnQ6IHN0cmluZyB9OyAvLyBTaW1wbGUgbWVzc2FnZVxuXG4gIC8vID09IEZsYXNoY2FyZCBHZW5lcmF0aW9uID09XG4gIGdlbmVyYXRlRmxhc2hjYXJkQ29udGVudDogKFxuICAgIHBhcmFtczoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgc291cmNlVXJsOiBzdHJpbmcgfCBudWxsO1xuICAgICAgc291cmNlTGFuZ3VhZ2U6IHN0cmluZyB8IG51bGw7XG4gICAgICB0YXJnZXRMYW5ndWFnZTogc3RyaW5nIHwgbnVsbDtcbiAgICB9XG4gICkgPT4gdm9pZDsgLy8gRmlyZSBhbmQgZm9yZ2V0LCByZXN1bHQgc2VudCB2aWEgZmxhc2hjYXJkR2VuZXJhdGlvblJlc3VsdFxuICBmbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0OiAoXG4gICAgcmVzdWx0OiB7IGRhdGE6IEZsYXNoY2FyZEdlbmVyYXRpb25SZXN1bHQ7IGVycm9yPzogc3RyaW5nIH1cbiAgKSA9PiB2b2lkO1xuXG4gIC8vID09IFRyYW5zbGF0aW9uID09XG4gIHRyYW5zbGF0ZVRleHQ6IChwYXJhbXM6IHsgdGV4dDogc3RyaW5nOyB0YXJnZXRMYW5nOiBzdHJpbmcgfSkgPT4gUHJvbWlzZTxzdHJpbmc+O1xuXG4gIC8vID09IFBvcHVwIERhdGEgUmVxdWVzdHMgPT1cbiAgZ2V0U2VsZWN0ZWRUZXh0OiAoKSA9PiBQcm9taXNlPHsgdGV4dDogc3RyaW5nIH0gfCBudWxsPjsgLy8gRGVmaW5lIGV4cGVjdGVkIHJldHVybiB0eXBlXG4gIGdldFBhZ2VJbmZvOiAoKSA9PiBQcm9taXNlPFBhZ2VJbmZvIHwgbnVsbD47IC8vIERlZmluZSBleHBlY3RlZCByZXR1cm4gdHlwZVxuXG4gIC8vID09IEludGVybmFsIEJhY2tncm91bmQgPC0+IENvbnRlbnQgU2NyaXB0IENvbW11bmljYXRpb24gPT1cbiAgX3JlcXVlc3RTZWxlY3Rpb25Gcm9tQ29udGVudFNjcmlwdDogKCkgPT4gUHJvbWlzZTx7IHRleHQ6IHN0cmluZyB9IHwgbnVsbD47IC8vIE1lc3NhZ2UgQkcgc2VuZHMgdG8gQ1NcblxuICAvLyA9PSBPdGhlciBleGlzdGluZyB0eXBlcyA9PVxuICBzdHJlYW1PbGxhbWFSZXF1ZXN0OiB7IHByb21wdDogc3RyaW5nOyBoaXN0b3J5OiBDaGF0TWVzc2FnZVtdOyBjb25maWc6IGFueSB9O1xuICBzYXZlQ29uZmlndXJhdGlvbjogeyBjb25maWdKc29uOiBzdHJpbmcgfTtcbiAgbG9hZENvbmZpZ3VyYXRpb246IG51bGw7XG4gIHF1ZXJ5RGI6IHsgcXVlcnk6IHN0cmluZzsgcGFyYW1zPzogYW55W10gfTtcblxuICAvLyBOZXcgbWVzc2FnZXNcbiAgLy8gZ2V0RGF0YWJhc2VTdGF0czogKCkgPT4gUHJvbWlzZTxEYXRhYmFzZVN0YXRzPjsgLy8gUkVNT1ZFRCB0aGlzIGxpbmVcblxuICAvLyBNZXNzYWdlIHRvIHNhdmUgZmxhc2hjYXJkIEFORCBub3RpZnkgVUlcbiAgc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeTogKFxuICAgIHBhcmFtczogeyBjYXJkRGF0YTogUGFydGlhbDxGbGFzaGNhcmQ+IH0gLy8gVXNlIFBhcnRpYWwgZm9yIG5vdywgcmVmaW5lIGxhdGVyIGlmIG5lZWRlZFxuICApID0+IFByb21pc2U8Rmxhc2hjYXJkIHwgbnVsbD47IC8vIFJldHVybnMgdGhlIHNhdmVkIGNhcmQgb3IgbnVsbCBvbiBlcnJvclxuXG4gIC8vIEludGVybmFsIG5vdGlmaWNhdGlvbiBtZXNzYWdlIGZvciBVSSB1cGRhdGVzXG4gIF9jaGF0SGlzdG9yeVVwZGF0ZWQ6ICgpID0+IHZvaWQ7XG59XG5cbi8vIFR5cGUgZm9yIHRoZSBtZXNzYWdlIHN0cnVjdHVyZVxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlPFQgZXh0ZW5kcyBrZXlvZiBQcm90b2NvbE1hcD4ge1xuICB0eXBlOiBUO1xuICBkYXRhOiBQcm90b2NvbE1hcFtUXTtcbn1cblxuLy8gQ3JlYXRlIHRoZSB0eXBlZCBtZXNzYWdpbmcgaW5zdGFuY2VcbmNvbnN0IG1lc3NhZ2luZ0luc3RhbmNlID0gZGVmaW5lRXh0ZW5zaW9uTWVzc2FnaW5nPFByb3RvY29sTWFwPigpO1xuXG4vLyBFeHBvcnQgdGhlIHNwZWNpZmljIG1ldGhvZHMgZnJvbSB0aGUgaW5zdGFuY2VcbmV4cG9ydCBjb25zdCBvbk1lc3NhZ2UgPSBtZXNzYWdpbmdJbnN0YW5jZS5vbk1lc3NhZ2U7XG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSBtZXNzYWdpbmdJbnN0YW5jZS5zZW5kTWVzc2FnZTtcblxuLy8gUkVNT1ZFIGNvbmZsaWN0aW5nIHJlLWV4cG9ydFxuLy8gZXhwb3J0IHR5cGUgeyBQcm90b2NvbE1hcCB9OyBcblxuLy8gKioqIEVYUE9SVCBUSElTIFRZUEUgKioqXG5leHBvcnQgdHlwZSBGbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0ID0ge1xuICBmbGFzaGNhcmQ6IHsgZnJvbnQ6IHN0cmluZzsgYmFjazogc3RyaW5nIH07XG4gIGNsb3plOiB7IHRleHQ6IHN0cmluZyB9O1xufSB8IG51bGw7ICIsImNvbnN0IEVfVElNRU9VVCA9IG5ldyBFcnJvcigndGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBtdXRleCB0byBiZWNvbWUgYXZhaWxhYmxlJyk7XG5jb25zdCBFX0FMUkVBRFlfTE9DS0VEID0gbmV3IEVycm9yKCdtdXRleCBhbHJlYWR5IGxvY2tlZCcpO1xuY29uc3QgRV9DQU5DRUxFRCA9IG5ldyBFcnJvcigncmVxdWVzdCBmb3IgbG9jayBjYW5jZWxlZCcpO1xuXG52YXIgX19hd2FpdGVyJDIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNsYXNzIFNlbWFwaG9yZSB7XG4gICAgY29uc3RydWN0b3IoX3ZhbHVlLCBfY2FuY2VsRXJyb3IgPSBFX0NBTkNFTEVEKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gX3ZhbHVlO1xuICAgICAgICB0aGlzLl9jYW5jZWxFcnJvciA9IF9jYW5jZWxFcnJvcjtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzID0gW107XG4gICAgfVxuICAgIGFjcXVpcmUod2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0geyByZXNvbHZlLCByZWplY3QsIHdlaWdodCwgcHJpb3JpdHkgfTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBmaW5kSW5kZXhGcm9tRW5kKHRoaXMuX3F1ZXVlLCAob3RoZXIpID0+IHByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSAmJiB3ZWlnaHQgPD0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBOZWVkcyBpbW1lZGlhdGUgZGlzcGF0Y2gsIHNraXAgdGhlIHF1ZXVlXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hJdGVtKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcXVldWUuc3BsaWNlKGkgKyAxLCAwLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFja18xKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChjYWxsYmFjaywgd2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBbdmFsdWUsIHJlbGVhc2VdID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvdWxkTG9ja0ltbWVkaWF0ZWx5KHdlaWdodCwgcHJpb3JpdHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdID0gW107XG4gICAgICAgICAgICAgICAgaW5zZXJ0U29ydGVkKHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSwgeyByZXNvbHZlLCBwcmlvcml0eSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzTG9ja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgPD0gMDtcbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hRdWV1ZSgpO1xuICAgIH1cbiAgICByZWxlYXNlKHdlaWdodCA9IDEpIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgKz0gd2VpZ2h0O1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5fcXVldWUuZm9yRWFjaCgoZW50cnkpID0+IGVudHJ5LnJlamVjdCh0aGlzLl9jYW5jZWxFcnJvcikpO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hRdWV1ZSgpIHtcbiAgICAgICAgdGhpcy5fZHJhaW5VbmxvY2tXYWl0ZXJzKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX3F1ZXVlWzBdLndlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hJdGVtKHRoaXMuX3F1ZXVlLnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5VbmxvY2tXYWl0ZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Rpc3BhdGNoSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgLT0gaXRlbS53ZWlnaHQ7XG4gICAgICAgIGl0ZW0ucmVzb2x2ZShbcHJldmlvdXNWYWx1ZSwgdGhpcy5fbmV3UmVsZWFzZXIoaXRlbS53ZWlnaHQpXSk7XG4gICAgfVxuICAgIF9uZXdSZWxlYXNlcih3ZWlnaHQpIHtcbiAgICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIF9kcmFpblVubG9ja1dhaXRlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IHdlaWdodCA9IHRoaXMuX3ZhbHVlOyB3ZWlnaHQgPiAwOyB3ZWlnaHQtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRlcnMgPSB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKCF3YWl0ZXJzKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB3YWl0ZXJzLmZvckVhY2goKHdhaXRlcikgPT4gd2FpdGVyLnJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBxdWV1ZWRQcmlvcml0eSA9IHRoaXMuX3F1ZXVlWzBdLnByaW9yaXR5O1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB3YWl0ZXJzLmZpbmRJbmRleCgod2FpdGVyKSA9PiB3YWl0ZXIucHJpb3JpdHkgPD0gcXVldWVkUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIChpID09PSAtMSA/IHdhaXRlcnMgOiB3YWl0ZXJzLnNwbGljZSgwLCBpKSlcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHdhaXRlciA9PiB3YWl0ZXIucmVzb2x2ZSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvdWxkTG9ja0ltbWVkaWF0ZWx5KHdlaWdodCwgcHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5fcXVldWVbMF0ucHJpb3JpdHkgPCBwcmlvcml0eSkgJiZcbiAgICAgICAgICAgIHdlaWdodCA8PSB0aGlzLl92YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnNlcnRTb3J0ZWQoYSwgdikge1xuICAgIGNvbnN0IGkgPSBmaW5kSW5kZXhGcm9tRW5kKGEsIChvdGhlcikgPT4gdi5wcmlvcml0eSA8PSBvdGhlci5wcmlvcml0eSk7XG4gICAgYS5zcGxpY2UoaSArIDEsIDAsIHYpO1xufVxuZnVuY3Rpb24gZmluZEluZGV4RnJvbUVuZChhLCBwcmVkaWNhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbnZhciBfX2F3YWl0ZXIkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgTXV0ZXgge1xuICAgIGNvbnN0cnVjdG9yKGNhbmNlbEVycm9yKSB7XG4gICAgICAgIHRoaXMuX3NlbWFwaG9yZSA9IG5ldyBTZW1hcGhvcmUoMSwgY2FuY2VsRXJyb3IpO1xuICAgIH1cbiAgICBhY3F1aXJlKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyJDEodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAocHJpb3JpdHkgPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBbLCByZWxlYXNlcl0gPSB5aWVsZCB0aGlzLl9zZW1hcGhvcmUuYWNxdWlyZSgxLCBwcmlvcml0eSk7XG4gICAgICAgICAgICByZXR1cm4gcmVsZWFzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHByaW9yaXR5ID0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLnJ1bkV4Y2x1c2l2ZSgoKSA9PiBjYWxsYmFjaygpLCAxLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIGlzTG9ja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmlzTG9ja2VkKCk7XG4gICAgfVxuICAgIHdhaXRGb3JVbmxvY2socHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUud2FpdEZvclVubG9jaygxLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKSlcbiAgICAgICAgICAgIHRoaXMuX3NlbWFwaG9yZS5yZWxlYXNlKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5jYW5jZWwoKTtcbiAgICB9XG59XG5cbnZhciBfX2F3YWl0ZXIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHdpdGhUaW1lb3V0KHN5bmMsIHRpbWVvdXQsIHRpbWVvdXRFcnJvciA9IEVfVElNRU9VVCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjcXVpcmU6ICh3ZWlnaHRPclByaW9yaXR5LCBwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgbGV0IHdlaWdodDtcbiAgICAgICAgICAgIGlmIChpc1NlbWFwaG9yZShzeW5jKSkge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlaWdodCAhPT0gdW5kZWZpbmVkICYmIHdlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzVGltZW91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpc1RpbWVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGltZW91dEVycm9yKTtcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCAoaXNTZW1hcGhvcmUoc3luYylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3luYy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN5bmMuYWNxdWlyZShwcmlvcml0eSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxlYXNlID0gQXJyYXkuaXNBcnJheSh0aWNrZXQpID8gdGlja2V0WzFdIDogdGlja2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRpY2tldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHdlaWdodCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlbGVhc2UgPSAoKSA9PiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2V0ID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aWNrZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlID0gdGlja2V0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKHRpY2tldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlID0gdGlja2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsZWFzZSh3ZWlnaHQpIHtcbiAgICAgICAgICAgIHN5bmMucmVsZWFzZSh3ZWlnaHQpO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3luYy5jYW5jZWwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2FpdEZvclVubG9jazogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdCh0aW1lb3V0RXJyb3IpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAoaXNTZW1hcGhvcmUoc3luYylcbiAgICAgICAgICAgICAgICAgICAgPyBzeW5jLndhaXRGb3JVbmxvY2sod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgOiBzeW5jLndhaXRGb3JVbmxvY2socHJpb3JpdHkpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBpc0xvY2tlZDogKCkgPT4gc3luYy5pc0xvY2tlZCgpLFxuICAgICAgICBnZXRWYWx1ZTogKCkgPT4gc3luYy5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRWYWx1ZTogKHZhbHVlKSA9PiBzeW5jLnNldFZhbHVlKHZhbHVlKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNTZW1hcGhvcmUoc3luYykge1xuICAgIHJldHVybiBzeW5jLmdldFZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGlzbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZnVuY3Rpb24gdHJ5QWNxdWlyZShzeW5jLCBhbHJlYWR5QWNxdWlyZWRFcnJvciA9IEVfQUxSRUFEWV9MT0NLRUQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiB3aXRoVGltZW91dChzeW5jLCAwLCBhbHJlYWR5QWNxdWlyZWRFcnJvcik7XG59XG5cbmV4cG9ydCB7IEVfQUxSRUFEWV9MT0NLRUQsIEVfQ0FOQ0VMRUQsIEVfVElNRU9VVCwgTXV0ZXgsIFNlbWFwaG9yZSwgdHJ5QWNxdWlyZSwgd2l0aFRpbWVvdXQgfTtcbiIsInZhciBjPShzPT4oc1tzLk5ldz0wXT1cIk5ld1wiLHNbcy5MZWFybmluZz0xXT1cIkxlYXJuaW5nXCIsc1tzLlJldmlldz0yXT1cIlJldmlld1wiLHNbcy5SZWxlYXJuaW5nPTNdPVwiUmVsZWFybmluZ1wiLHMpKShjfHx7fSksbD0ocz0+KHNbcy5NYW51YWw9MF09XCJNYW51YWxcIixzW3MuQWdhaW49MV09XCJBZ2FpblwiLHNbcy5IYXJkPTJdPVwiSGFyZFwiLHNbcy5Hb29kPTNdPVwiR29vZFwiLHNbcy5FYXN5PTRdPVwiRWFzeVwiLHMpKShsfHx7fSk7Y2xhc3MgaHtzdGF0aWMgY2FyZCh0KXtyZXR1cm57Li4udCxzdGF0ZTpoLnN0YXRlKHQuc3RhdGUpLGR1ZTpoLnRpbWUodC5kdWUpLGxhc3RfcmV2aWV3OnQubGFzdF9yZXZpZXc/aC50aW1lKHQubGFzdF9yZXZpZXcpOnZvaWQgMH19c3RhdGljIHJhdGluZyh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIil7Y29uc3QgZT10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpLGk9dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLHI9bFtgJHtlfSR7aX1gXTtpZihyPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCByYXRpbmc6WyR7dH1dYCk7cmV0dXJuIHJ9ZWxzZSBpZih0eXBlb2YgdD09XCJudW1iZXJcIilyZXR1cm4gdDt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmF0aW5nOlske3R9XWApfXN0YXRpYyBzdGF0ZSh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIil7Y29uc3QgZT10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpLGk9dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLHI9Y1tgJHtlfSR7aX1gXTtpZihyPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdGF0ZTpbJHt0fV1gKTtyZXR1cm4gcn1lbHNlIGlmKHR5cGVvZiB0PT1cIm51bWJlclwiKXJldHVybiB0O3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdGF0ZTpbJHt0fV1gKX1zdGF0aWMgdGltZSh0KXtpZih0eXBlb2YgdD09XCJvYmplY3RcIiYmdCBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIHQ7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpe2NvbnN0IGU9RGF0ZS5wYXJzZSh0KTtpZihpc05hTihlKSl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGF0ZTpbJHt0fV1gKTtyZXR1cm4gbmV3IERhdGUoZSl9ZWxzZSBpZih0eXBlb2YgdD09XCJudW1iZXJcIilyZXR1cm4gbmV3IERhdGUodCk7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRhdGU6WyR7dH1dYCl9c3RhdGljIHJldmlld19sb2codCl7cmV0dXJuey4uLnQsZHVlOmgudGltZSh0LmR1ZSkscmF0aW5nOmgucmF0aW5nKHQucmF0aW5nKSxzdGF0ZTpoLnN0YXRlKHQuc3RhdGUpLHJldmlldzpoLnRpbWUodC5yZXZpZXcpfX19Y29uc3QgWD1cIjQuNy4xXCI7RGF0ZS5wcm90b3R5cGUuc2NoZWR1bGVyPWZ1bmN0aW9uKHMsdCl7cmV0dXJuIEYodGhpcyxzLHQpfSxEYXRlLnByb3RvdHlwZS5kaWZmPWZ1bmN0aW9uKHMsdCl7cmV0dXJuIEwodGhpcyxzLHQpfSxEYXRlLnByb3RvdHlwZS5mb3JtYXQ9ZnVuY3Rpb24oKXtyZXR1cm4gTyh0aGlzKX0sRGF0ZS5wcm90b3R5cGUuZHVlRm9ybWF0PWZ1bmN0aW9uKHMsdCxlKXtyZXR1cm4gaih0aGlzLHMsdCxlKX07ZnVuY3Rpb24gRihzLHQsZSl7cmV0dXJuIG5ldyBEYXRlKGU/aC50aW1lKHMpLmdldFRpbWUoKSt0KjI0KjYwKjYwKjFlMzpoLnRpbWUocykuZ2V0VGltZSgpK3QqNjAqMWUzKX1mdW5jdGlvbiBMKHMsdCxlKXtpZighc3x8IXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlXCIpO2NvbnN0IGk9aC50aW1lKHMpLmdldFRpbWUoKS1oLnRpbWUodCkuZ2V0VGltZSgpO2xldCByPTA7c3dpdGNoKGUpe2Nhc2VcImRheXNcIjpyPU1hdGguZmxvb3IoaS8oMjQqNjAqNjAqMWUzKSk7YnJlYWs7Y2FzZVwibWludXRlc1wiOnI9TWF0aC5mbG9vcihpLyg2MCoxZTMpKTticmVha31yZXR1cm4gcn1mdW5jdGlvbiBPKHMpe2NvbnN0IHQ9aC50aW1lKHMpLGU9dC5nZXRGdWxsWWVhcigpLGk9dC5nZXRNb250aCgpKzEscj10LmdldERhdGUoKSxhPXQuZ2V0SG91cnMoKSxuPXQuZ2V0TWludXRlcygpLGQ9dC5nZXRTZWNvbmRzKCk7cmV0dXJuYCR7ZX0tJHtwKGkpfS0ke3Aocil9ICR7cChhKX06JHtwKG4pfToke3AoZCl9YH1mdW5jdGlvbiBwKHMpe3JldHVybiBzPDEwP2AwJHtzfWA6YCR7c31gfWNvbnN0IFM9WzYwLDYwLDI0LDMxLDEyXSxFPVtcInNlY29uZFwiLFwibWluXCIsXCJob3VyXCIsXCJkYXlcIixcIm1vbnRoXCIsXCJ5ZWFyXCJdO2Z1bmN0aW9uIGoocyx0LGUsaT1FKXtzPWgudGltZShzKSx0PWgudGltZSh0KSxpLmxlbmd0aCE9PUUubGVuZ3RoJiYoaT1FKTtsZXQgcj1zLmdldFRpbWUoKS10LmdldFRpbWUoKSxhO2ZvcihyLz0xZTMsYT0wO2E8Uy5sZW5ndGgmJiEocjxTW2FdKTthKyspci89U1thXTtyZXR1cm5gJHtNYXRoLmZsb29yKHIpfSR7ZT9pW2FdOlwiXCJ9YH1mdW5jdGlvbiBKKHMpe3JldHVybiBoLnRpbWUocyl9ZnVuY3Rpb24gSyhzKXtyZXR1cm4gaC5zdGF0ZShzKX1mdW5jdGlvbiBRKHMpe3JldHVybiBoLnJhdGluZyhzKX1jb25zdCBJPU9iamVjdC5mcmVlemUoW2wuQWdhaW4sbC5IYXJkLGwuR29vZCxsLkVhc3ldKSxaPVt7c3RhcnQ6Mi41LGVuZDo3LGZhY3RvcjouMTV9LHtzdGFydDo3LGVuZDoyMCxmYWN0b3I6LjF9LHtzdGFydDoyMCxlbmQ6MS8wLGZhY3RvcjouMDV9XTtmdW5jdGlvbiBHKHMsdCxlKXtsZXQgaT0xO2Zvcihjb25zdCBuIG9mIFopaSs9bi5mYWN0b3IqTWF0aC5tYXgoTWF0aC5taW4ocyxuLmVuZCktbi5zdGFydCwwKTtzPU1hdGgubWluKHMsZSk7bGV0IHI9TWF0aC5tYXgoMixNYXRoLnJvdW5kKHMtaSkpO2NvbnN0IGE9TWF0aC5taW4oTWF0aC5yb3VuZChzK2kpLGUpO3JldHVybiBzPnQmJihyPU1hdGgubWF4KHIsdCsxKSkscj1NYXRoLm1pbihyLGEpLHttaW5faXZsOnIsbWF4X2l2bDphfX1mdW5jdGlvbiBtKHMsdCxlKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgocyx0KSxlKX1mdW5jdGlvbiBOKHMsdCl7Y29uc3QgZT1EYXRlLlVUQyhzLmdldFVUQ0Z1bGxZZWFyKCkscy5nZXRVVENNb250aCgpLHMuZ2V0VVRDRGF0ZSgpKSxpPURhdGUuVVRDKHQuZ2V0VVRDRnVsbFllYXIoKSx0LmdldFVUQ01vbnRoKCksdC5nZXRVVENEYXRlKCkpO3JldHVybiBNYXRoLmZsb29yKChpLWUpLzg2NGU1KX1jb25zdCBrPS45LEM9MzY1MDAsVD1PYmplY3QuZnJlZXplKFsuNDAyNTUsMS4xODM4NSwzLjE3MywxNS42OTEwNSw3LjE5NDksLjUzNDUsMS40NjA0LC4wMDQ2LDEuNTQ1NzUsLjExOTIsMS4wMTkyNSwxLjkzOTUsLjExLC4yOTYwNSwyLjI2OTgsLjIzMTUsMi45ODk4LC41MTY1NSwuNjYyMV0pLFU9ITEscT0hMCx0dD1gdiR7WH0gdXNpbmcgRlNSUy01LjBgLF89LjAxLGI9MTAwLFI9T2JqZWN0LmZyZWV6ZShbT2JqZWN0LmZyZWV6ZShbXyxiXSksT2JqZWN0LmZyZWV6ZShbXyxiXSksT2JqZWN0LmZyZWV6ZShbXyxiXSksT2JqZWN0LmZyZWV6ZShbXyxiXSksT2JqZWN0LmZyZWV6ZShbMSwxMF0pLE9iamVjdC5mcmVlemUoWy4wMDEsNF0pLE9iamVjdC5mcmVlemUoWy4wMDEsNF0pLE9iamVjdC5mcmVlemUoWy4wMDEsLjc1XSksT2JqZWN0LmZyZWV6ZShbMCw0LjVdKSxPYmplY3QuZnJlZXplKFswLC44XSksT2JqZWN0LmZyZWV6ZShbLjAwMSwzLjVdKSxPYmplY3QuZnJlZXplKFsuMDAxLDVdKSxPYmplY3QuZnJlZXplKFsuMDAxLC4yNV0pLE9iamVjdC5mcmVlemUoWy4wMDEsLjldKSxPYmplY3QuZnJlZXplKFswLDRdKSxPYmplY3QuZnJlZXplKFswLDFdKSxPYmplY3QuZnJlZXplKFsxLDZdKSxPYmplY3QuZnJlZXplKFswLDJdKSxPYmplY3QuZnJlZXplKFswLDJdKV0pLHo9cz0+e2xldCB0PVsuLi5UXTtyZXR1cm4gcz8udyYmKHMudy5sZW5ndGg9PT0xOT90PVsuLi5zLnddOnMudy5sZW5ndGg9PT0xNyYmKHQ9cz8udy5jb25jYXQoWzAsMF0pLHRbNF09Kyh0WzVdKjIrdFs0XSkudG9GaXhlZCg4KSx0WzVdPSsoTWF0aC5sb2codFs1XSozKzEpLzMpLnRvRml4ZWQoOCksdFs2XT0rKHRbNl0rLjUpLnRvRml4ZWQoOCksY29uc29sZS5kZWJ1ZyhcIltGU1JTIFY1XWF1dG8gZmlsbCB3IHRvIDE5IGxlbmd0aFwiKSkpLHQ9dC5tYXAoKGUsaSk9Pm0oZSxSW2ldWzBdLFJbaV1bMV0pKSx7cmVxdWVzdF9yZXRlbnRpb246cz8ucmVxdWVzdF9yZXRlbnRpb258fGssbWF4aW11bV9pbnRlcnZhbDpzPy5tYXhpbXVtX2ludGVydmFsfHxDLHc6dCxlbmFibGVfZnV6ejpzPy5lbmFibGVfZnV6ej8/VSxlbmFibGVfc2hvcnRfdGVybTpzPy5lbmFibGVfc2hvcnRfdGVybT8/cX19O2Z1bmN0aW9uIHYocyx0KXtjb25zdCBlPXtkdWU6cz9oLnRpbWUocyk6bmV3IERhdGUsc3RhYmlsaXR5OjAsZGlmZmljdWx0eTowLGVsYXBzZWRfZGF5czowLHNjaGVkdWxlZF9kYXlzOjAscmVwczowLGxhcHNlczowLHN0YXRlOmMuTmV3LGxhc3RfcmV2aWV3OnZvaWQgMH07cmV0dXJuIHQmJnR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dChlKTplfWNsYXNzIGV0e2M7czA7czE7czI7Y29uc3RydWN0b3IodCl7Y29uc3QgZT1pdCgpO3RoaXMuYz0xLHRoaXMuczA9ZShcIiBcIiksdGhpcy5zMT1lKFwiIFwiKSx0aGlzLnMyPWUoXCIgXCIpLHQ9PW51bGwmJih0PStuZXcgRGF0ZSksdGhpcy5zMC09ZSh0KSx0aGlzLnMwPDAmJih0aGlzLnMwKz0xKSx0aGlzLnMxLT1lKHQpLHRoaXMuczE8MCYmKHRoaXMuczErPTEpLHRoaXMuczItPWUodCksdGhpcy5zMjwwJiYodGhpcy5zMis9MSl9bmV4dCgpe2NvbnN0IHQ9MjA5MTYzOSp0aGlzLnMwK3RoaXMuYyoyMzI4MzA2NDM2NTM4Njk2M2UtMjY7cmV0dXJuIHRoaXMuczA9dGhpcy5zMSx0aGlzLnMxPXRoaXMuczIsdGhpcy5zMj10LSh0aGlzLmM9dHwwKSx0aGlzLnMyfXNldCBzdGF0ZSh0KXt0aGlzLmM9dC5jLHRoaXMuczA9dC5zMCx0aGlzLnMxPXQuczEsdGhpcy5zMj10LnMyfWdldCBzdGF0ZSgpe3JldHVybntjOnRoaXMuYyxzMDp0aGlzLnMwLHMxOnRoaXMuczEsczI6dGhpcy5zMn19fWZ1bmN0aW9uIGl0KCl7bGV0IHM9NDAyMjg3MTE5NztyZXR1cm4gZnVuY3Rpb24odCl7dD1TdHJpbmcodCk7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspe3MrPXQuY2hhckNvZGVBdChlKTtsZXQgaT0uMDI1MTk2MDMyODI0MTY5MzgqcztzPWk+Pj4wLGktPXMsaSo9cyxzPWk+Pj4wLGktPXMscys9aSo0Mjk0OTY3Mjk2fXJldHVybihzPj4+MCkqMjMyODMwNjQzNjUzODY5NjNlLTI2fX1mdW5jdGlvbiBydChzKXtjb25zdCB0PW5ldyBldChzKSxlPSgpPT50Lm5leHQoKTtyZXR1cm4gZS5pbnQzMj0oKT0+dC5uZXh0KCkqNDI5NDk2NzI5NnwwLGUuZG91YmxlPSgpPT5lKCkrKGUoKSoyMDk3MTUyfDApKjExMTAyMjMwMjQ2MjUxNTY1ZS0zMixlLnN0YXRlPSgpPT50LnN0YXRlLGUuaW1wb3J0U3RhdGU9aT0+KHQuc3RhdGU9aSxlKSxlfWNvbnN0ICQ9LS41LEQ9MTkvODE7ZnVuY3Rpb24gUChzLHQpe3JldHVybitNYXRoLnBvdygxK0Qqcy90LCQpLnRvRml4ZWQoOCl9Y2xhc3MgWXtwYXJhbTtpbnRlcnZhbE1vZGlmaWVyO19zZWVkO2NvbnN0cnVjdG9yKHQpe3RoaXMucGFyYW09bmV3IFByb3h5KHoodCksdGhpcy5wYXJhbXNfaGFuZGxlcl9wcm94eSgpKSx0aGlzLmludGVydmFsTW9kaWZpZXI9dGhpcy5jYWxjdWxhdGVfaW50ZXJ2YWxfbW9kaWZpZXIodGhpcy5wYXJhbS5yZXF1ZXN0X3JldGVudGlvbil9Z2V0IGludGVydmFsX21vZGlmaWVyKCl7cmV0dXJuIHRoaXMuaW50ZXJ2YWxNb2RpZmllcn1zZXQgc2VlZCh0KXt0aGlzLl9zZWVkPXR9Y2FsY3VsYXRlX2ludGVydmFsX21vZGlmaWVyKHQpe2lmKHQ8PTB8fHQ+MSl0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0ZWQgcmV0ZW50aW9uIHJhdGUgc2hvdWxkIGJlIGluIHRoZSByYW5nZSAoMCwxXVwiKTtyZXR1cm4rKChNYXRoLnBvdyh0LDEvJCktMSkvRCkudG9GaXhlZCg4KX1nZXQgcGFyYW1ldGVycygpe3JldHVybiB0aGlzLnBhcmFtfXNldCBwYXJhbWV0ZXJzKHQpe3RoaXMudXBkYXRlX3BhcmFtZXRlcnModCl9cGFyYW1zX2hhbmRsZXJfcHJveHkoKXtjb25zdCB0PXRoaXM7cmV0dXJue3NldDpmdW5jdGlvbihlLGkscil7cmV0dXJuIGk9PT1cInJlcXVlc3RfcmV0ZW50aW9uXCImJk51bWJlci5pc0Zpbml0ZShyKSYmKHQuaW50ZXJ2YWxNb2RpZmllcj10LmNhbGN1bGF0ZV9pbnRlcnZhbF9tb2RpZmllcihOdW1iZXIocikpKSxSZWZsZWN0LnNldChlLGksciksITB9fX11cGRhdGVfcGFyYW1ldGVycyh0KXtjb25zdCBlPXoodCk7Zm9yKGNvbnN0IGkgaW4gZSlpZihpIGluIHRoaXMucGFyYW0pe2NvbnN0IHI9aTt0aGlzLnBhcmFtW3JdPWVbcl19fWluaXRfc3RhYmlsaXR5KHQpe3JldHVybiBNYXRoLm1heCh0aGlzLnBhcmFtLndbdC0xXSwuMSl9aW5pdF9kaWZmaWN1bHR5KHQpe3JldHVybiB0aGlzLmNvbnN0cmFpbl9kaWZmaWN1bHR5KHRoaXMucGFyYW0ud1s0XS1NYXRoLmV4cCgodC0xKSp0aGlzLnBhcmFtLndbNV0pKzEpfWFwcGx5X2Z1enoodCxlKXtpZighdGhpcy5wYXJhbS5lbmFibGVfZnV6enx8dDwyLjUpcmV0dXJuIE1hdGgucm91bmQodCk7Y29uc3QgaT1ydCh0aGlzLl9zZWVkKSgpLHttaW5faXZsOnIsbWF4X2l2bDphfT1HKHQsZSx0aGlzLnBhcmFtLm1heGltdW1faW50ZXJ2YWwpO3JldHVybiBNYXRoLmZsb29yKGkqKGEtcisxKStyKX1uZXh0X2ludGVydmFsKHQsZSl7Y29uc3QgaT1NYXRoLm1pbihNYXRoLm1heCgxLE1hdGgucm91bmQodCp0aGlzLmludGVydmFsTW9kaWZpZXIpKSx0aGlzLnBhcmFtLm1heGltdW1faW50ZXJ2YWwpO3JldHVybiB0aGlzLmFwcGx5X2Z1enooaSxlKX1saW5lYXJfZGFtcGluZyh0LGUpe3JldHVybisodCooMTAtZSkvOSkudG9GaXhlZCg4KX1uZXh0X2RpZmZpY3VsdHkodCxlKXtjb25zdCBpPS10aGlzLnBhcmFtLndbNl0qKGUtMykscj10K3RoaXMubGluZWFyX2RhbXBpbmcoaSx0KTtyZXR1cm4gdGhpcy5jb25zdHJhaW5fZGlmZmljdWx0eSh0aGlzLm1lYW5fcmV2ZXJzaW9uKHRoaXMuaW5pdF9kaWZmaWN1bHR5KGwuRWFzeSkscikpfWNvbnN0cmFpbl9kaWZmaWN1bHR5KHQpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heCgrdC50b0ZpeGVkKDgpLDEpLDEwKX1tZWFuX3JldmVyc2lvbih0LGUpe3JldHVybisodGhpcy5wYXJhbS53WzddKnQrKDEtdGhpcy5wYXJhbS53WzddKSplKS50b0ZpeGVkKDgpfW5leHRfcmVjYWxsX3N0YWJpbGl0eSh0LGUsaSxyKXtjb25zdCBhPWwuSGFyZD09PXI/dGhpcy5wYXJhbS53WzE1XToxLG49bC5FYXN5PT09cj90aGlzLnBhcmFtLndbMTZdOjE7cmV0dXJuK20oZSooMStNYXRoLmV4cCh0aGlzLnBhcmFtLndbOF0pKigxMS10KSpNYXRoLnBvdyhlLC10aGlzLnBhcmFtLndbOV0pKihNYXRoLmV4cCgoMS1pKSp0aGlzLnBhcmFtLndbMTBdKS0xKSphKm4pLF8sMzY1MDApLnRvRml4ZWQoOCl9bmV4dF9mb3JnZXRfc3RhYmlsaXR5KHQsZSxpKXtyZXR1cm4rbSh0aGlzLnBhcmFtLndbMTFdKk1hdGgucG93KHQsLXRoaXMucGFyYW0ud1sxMl0pKihNYXRoLnBvdyhlKzEsdGhpcy5wYXJhbS53WzEzXSktMSkqTWF0aC5leHAoKDEtaSkqdGhpcy5wYXJhbS53WzE0XSksXywzNjUwMCkudG9GaXhlZCg4KX1uZXh0X3Nob3J0X3Rlcm1fc3RhYmlsaXR5KHQsZSl7cmV0dXJuK20odCpNYXRoLmV4cCh0aGlzLnBhcmFtLndbMTddKihlLTMrdGhpcy5wYXJhbS53WzE4XSkpLF8sMzY1MDApLnRvRml4ZWQoOCl9Zm9yZ2V0dGluZ19jdXJ2ZT1QO25leHRfc3RhdGUodCxlLGkpe2NvbnN0e2RpZmZpY3VsdHk6cixzdGFiaWxpdHk6YX09dD8/e2RpZmZpY3VsdHk6MCxzdGFiaWxpdHk6MH07aWYoZTwwKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkZWx0YV90IFwiJHtlfVwiYCk7aWYoaTwwfHxpPjQpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGdyYWRlIFwiJHtpfVwiYCk7aWYocj09PTAmJmE9PT0wKXJldHVybntkaWZmaWN1bHR5OnRoaXMuaW5pdF9kaWZmaWN1bHR5KGkpLHN0YWJpbGl0eTp0aGlzLmluaXRfc3RhYmlsaXR5KGkpfTtpZihpPT09MClyZXR1cm57ZGlmZmljdWx0eTpyLHN0YWJpbGl0eTphfTtpZihyPDF8fGE8Xyl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbWVtb3J5IHN0YXRlIHsgZGlmZmljdWx0eTogJHtyfSwgc3RhYmlsaXR5OiAke2F9IH1gKTtjb25zdCBuPXRoaXMuZm9yZ2V0dGluZ19jdXJ2ZShlLGEpLGQ9dGhpcy5uZXh0X3JlY2FsbF9zdGFiaWxpdHkocixhLG4saSksdT10aGlzLm5leHRfZm9yZ2V0X3N0YWJpbGl0eShyLGEsbiksbz10aGlzLm5leHRfc2hvcnRfdGVybV9zdGFiaWxpdHkoYSxpKTtsZXQgZj1kO2lmKGk9PT0xKXtsZXRbeSx3XT1bMCwwXTt0aGlzLnBhcmFtLmVuYWJsZV9zaG9ydF90ZXJtJiYoeT10aGlzLnBhcmFtLndbMTddLHc9dGhpcy5wYXJhbS53WzE4XSk7Y29uc3QgZz1hL01hdGguZXhwKHkqdyk7Zj1tKCtnLnRvRml4ZWQoOCksXyx1KX1yZXR1cm4gZT09PTAmJnRoaXMucGFyYW0uZW5hYmxlX3Nob3J0X3Rlcm0mJihmPW8pLHtkaWZmaWN1bHR5OnRoaXMubmV4dF9kaWZmaWN1bHR5KHIsaSksc3RhYmlsaXR5OmZ9fX1mdW5jdGlvbiBIKCl7Y29uc3Qgcz10aGlzLnJldmlld190aW1lLmdldFRpbWUoKSx0PXRoaXMuY3VycmVudC5yZXBzLGU9dGhpcy5jdXJyZW50LmRpZmZpY3VsdHkqdGhpcy5jdXJyZW50LnN0YWJpbGl0eTtyZXR1cm5gJHtzfV8ke3R9XyR7ZX1gfWZ1bmN0aW9uIGF0KHMpe3JldHVybiBmdW5jdGlvbigpe2NvbnN0IHQ9UmVmbGVjdC5nZXQodGhpcy5jdXJyZW50LHMpPz8wLGU9dGhpcy5jdXJyZW50LnJlcHM7cmV0dXJuIFN0cmluZyh0K2V8fDApfX12YXIgeD0ocz0+KHMuU0NIRURVTEVSPVwiU2NoZWR1bGVyXCIscy5TRUVEPVwiU2VlZFwiLHMpKSh4fHx7fSk7Y2xhc3MgQXtsYXN0O2N1cnJlbnQ7cmV2aWV3X3RpbWU7bmV4dD1uZXcgTWFwO2FsZ29yaXRobTtpbml0U2VlZFN0cmF0ZWd5O2NvbnN0cnVjdG9yKHQsZSxpLHI9e3NlZWQ6SH0pe3RoaXMuYWxnb3JpdGhtPWksdGhpcy5pbml0U2VlZFN0cmF0ZWd5PXIuc2VlZC5iaW5kKHRoaXMpLHRoaXMubGFzdD1oLmNhcmQodCksdGhpcy5jdXJyZW50PWguY2FyZCh0KSx0aGlzLnJldmlld190aW1lPWgudGltZShlKSx0aGlzLmluaXQoKX1pbml0KCl7Y29uc3R7c3RhdGU6dCxsYXN0X3JldmlldzplfT10aGlzLmN1cnJlbnQ7bGV0IGk9MDt0IT09Yy5OZXcmJmUmJihpPU4oZSx0aGlzLnJldmlld190aW1lKSksdGhpcy5jdXJyZW50Lmxhc3RfcmV2aWV3PXRoaXMucmV2aWV3X3RpbWUsdGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cz1pLHRoaXMuY3VycmVudC5yZXBzKz0xLHRoaXMuYWxnb3JpdGhtLnNlZWQ9dGhpcy5pbml0U2VlZFN0cmF0ZWd5KCl9cHJldmlldygpe3JldHVybntbbC5BZ2Fpbl06dGhpcy5yZXZpZXcobC5BZ2FpbiksW2wuSGFyZF06dGhpcy5yZXZpZXcobC5IYXJkKSxbbC5Hb29kXTp0aGlzLnJldmlldyhsLkdvb2QpLFtsLkVhc3ldOnRoaXMucmV2aWV3KGwuRWFzeSksW1N5bWJvbC5pdGVyYXRvcl06dGhpcy5wcmV2aWV3SXRlcmF0b3IuYmluZCh0aGlzKX19KnByZXZpZXdJdGVyYXRvcigpe2Zvcihjb25zdCB0IG9mIEkpeWllbGQgdGhpcy5yZXZpZXcodCl9cmV2aWV3KHQpe2NvbnN0e3N0YXRlOmV9PXRoaXMubGFzdDtsZXQgaTtzd2l0Y2goZSl7Y2FzZSBjLk5ldzppPXRoaXMubmV3U3RhdGUodCk7YnJlYWs7Y2FzZSBjLkxlYXJuaW5nOmNhc2UgYy5SZWxlYXJuaW5nOmk9dGhpcy5sZWFybmluZ1N0YXRlKHQpO2JyZWFrO2Nhc2UgYy5SZXZpZXc6aT10aGlzLnJldmlld1N0YXRlKHQpO2JyZWFrfWlmKGkpcmV0dXJuIGk7dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBncmFkZVwiKX1idWlsZExvZyh0KXtjb25zdHtsYXN0X3JldmlldzplLGR1ZTppLGVsYXBzZWRfZGF5czpyfT10aGlzLmxhc3Q7cmV0dXJue3JhdGluZzp0LHN0YXRlOnRoaXMuY3VycmVudC5zdGF0ZSxkdWU6ZXx8aSxzdGFiaWxpdHk6dGhpcy5jdXJyZW50LnN0YWJpbGl0eSxkaWZmaWN1bHR5OnRoaXMuY3VycmVudC5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czp0aGlzLmN1cnJlbnQuZWxhcHNlZF9kYXlzLGxhc3RfZWxhcHNlZF9kYXlzOnIsc2NoZWR1bGVkX2RheXM6dGhpcy5jdXJyZW50LnNjaGVkdWxlZF9kYXlzLHJldmlldzp0aGlzLnJldmlld190aW1lfX19Y2xhc3MgViBleHRlbmRzIEF7bmV3U3RhdGUodCl7Y29uc3QgZT10aGlzLm5leHQuZ2V0KHQpO2lmKGUpcmV0dXJuIGU7Y29uc3QgaT1oLmNhcmQodGhpcy5jdXJyZW50KTtzd2l0Y2goaS5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLmluaXRfZGlmZmljdWx0eSh0KSxpLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5pbml0X3N0YWJpbGl0eSh0KSx0KXtjYXNlIGwuQWdhaW46aS5zY2hlZHVsZWRfZGF5cz0wLGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKDEpLGkuc3RhdGU9Yy5MZWFybmluZzticmVhaztjYXNlIGwuSGFyZDppLnNjaGVkdWxlZF9kYXlzPTAsaS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoNSksaS5zdGF0ZT1jLkxlYXJuaW5nO2JyZWFrO2Nhc2UgbC5Hb29kOmkuc2NoZWR1bGVkX2RheXM9MCxpLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcigxMCksaS5zdGF0ZT1jLkxlYXJuaW5nO2JyZWFrO2Nhc2UgbC5FYXN5Ontjb25zdCBhPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoaS5zdGFiaWxpdHksdGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cyk7aS5zY2hlZHVsZWRfZGF5cz1hLGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKGEsITApLGkuc3RhdGU9Yy5SZXZpZXc7YnJlYWt9ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyYWRlXCIpfWNvbnN0IHI9e2NhcmQ6aSxsb2c6dGhpcy5idWlsZExvZyh0KX07cmV0dXJuIHRoaXMubmV4dC5zZXQodCxyKSxyfWxlYXJuaW5nU3RhdGUodCl7Y29uc3QgZT10aGlzLm5leHQuZ2V0KHQpO2lmKGUpcmV0dXJuIGU7Y29uc3R7c3RhdGU6aSxkaWZmaWN1bHR5OnIsc3RhYmlsaXR5OmF9PXRoaXMubGFzdCxuPWguY2FyZCh0aGlzLmN1cnJlbnQpLGQ9dGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cztzd2l0Y2gobi5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShyLHQpLG4uc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfc2hvcnRfdGVybV9zdGFiaWxpdHkoYSx0KSx0KXtjYXNlIGwuQWdhaW46e24uc2NoZWR1bGVkX2RheXM9MCxuLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcig1LCExKSxuLnN0YXRlPWk7YnJlYWt9Y2FzZSBsLkhhcmQ6e24uc2NoZWR1bGVkX2RheXM9MCxuLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcigxMCksbi5zdGF0ZT1pO2JyZWFrfWNhc2UgbC5Hb29kOntjb25zdCBvPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwobi5zdGFiaWxpdHksZCk7bi5zY2hlZHVsZWRfZGF5cz1vLG4uZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKG8sITApLG4uc3RhdGU9Yy5SZXZpZXc7YnJlYWt9Y2FzZSBsLkVhc3k6e2NvbnN0IG89dGhpcy5hbGdvcml0aG0ubmV4dF9zaG9ydF90ZXJtX3N0YWJpbGl0eShhLGwuR29vZCksZj10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKG8sZCkseT1NYXRoLm1heCh0aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKG4uc3RhYmlsaXR5LGQpLGYrMSk7bi5zY2hlZHVsZWRfZGF5cz15LG4uZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKHksITApLG4uc3RhdGU9Yy5SZXZpZXc7YnJlYWt9ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyYWRlXCIpfWNvbnN0IHU9e2NhcmQ6bixsb2c6dGhpcy5idWlsZExvZyh0KX07cmV0dXJuIHRoaXMubmV4dC5zZXQodCx1KSx1fXJldmlld1N0YXRlKHQpe2NvbnN0IGU9dGhpcy5uZXh0LmdldCh0KTtpZihlKXJldHVybiBlO2NvbnN0IGk9dGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cyx7ZGlmZmljdWx0eTpyLHN0YWJpbGl0eTphfT10aGlzLmxhc3Qsbj10aGlzLmFsZ29yaXRobS5mb3JnZXR0aW5nX2N1cnZlKGksYSksZD1oLmNhcmQodGhpcy5jdXJyZW50KSx1PWguY2FyZCh0aGlzLmN1cnJlbnQpLG89aC5jYXJkKHRoaXMuY3VycmVudCksZj1oLmNhcmQodGhpcy5jdXJyZW50KTt0aGlzLm5leHRfZHMoZCx1LG8sZixyLGEsbiksdGhpcy5uZXh0X2ludGVydmFsKGQsdSxvLGYsaSksdGhpcy5uZXh0X3N0YXRlKGQsdSxvLGYpLGQubGFwc2VzKz0xO2NvbnN0IHk9e2NhcmQ6ZCxsb2c6dGhpcy5idWlsZExvZyhsLkFnYWluKX0sdz17Y2FyZDp1LGxvZzpzdXBlci5idWlsZExvZyhsLkhhcmQpfSxnPXtjYXJkOm8sbG9nOnN1cGVyLmJ1aWxkTG9nKGwuR29vZCl9LE09e2NhcmQ6Zixsb2c6c3VwZXIuYnVpbGRMb2cobC5FYXN5KX07cmV0dXJuIHRoaXMubmV4dC5zZXQobC5BZ2Fpbix5KSx0aGlzLm5leHQuc2V0KGwuSGFyZCx3KSx0aGlzLm5leHQuc2V0KGwuR29vZCxnKSx0aGlzLm5leHQuc2V0KGwuRWFzeSxNKSx0aGlzLm5leHQuZ2V0KHQpfW5leHRfZHModCxlLGkscixhLG4sZCl7dC5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuQWdhaW4pO2NvbnN0IHU9bi9NYXRoLmV4cCh0aGlzLmFsZ29yaXRobS5wYXJhbWV0ZXJzLndbMTddKnRoaXMuYWxnb3JpdGhtLnBhcmFtZXRlcnMud1sxOF0pLG89dGhpcy5hbGdvcml0aG0ubmV4dF9mb3JnZXRfc3RhYmlsaXR5KGEsbixkKTt0LnN0YWJpbGl0eT1tKCt1LnRvRml4ZWQoOCksXyxvKSxlLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5IYXJkKSxlLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5IYXJkKSxpLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5Hb29kKSxpLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5Hb29kKSxyLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5FYXN5KSxyLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5FYXN5KX1uZXh0X2ludGVydmFsKHQsZSxpLHIsYSl7bGV0IG4sZDtuPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoZS5zdGFiaWxpdHksYSksZD10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKGkuc3RhYmlsaXR5LGEpLG49TWF0aC5taW4obixkKSxkPU1hdGgubWF4KGQsbisxKTtjb25zdCB1PU1hdGgubWF4KHRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoci5zdGFiaWxpdHksYSksZCsxKTt0LnNjaGVkdWxlZF9kYXlzPTAsdC5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoNSksZS5zY2hlZHVsZWRfZGF5cz1uLGUuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKG4sITApLGkuc2NoZWR1bGVkX2RheXM9ZCxpLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihkLCEwKSxyLnNjaGVkdWxlZF9kYXlzPXUsci5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIodSwhMCl9bmV4dF9zdGF0ZSh0LGUsaSxyKXt0LnN0YXRlPWMuUmVsZWFybmluZyxlLnN0YXRlPWMuUmV2aWV3LGkuc3RhdGU9Yy5SZXZpZXcsci5zdGF0ZT1jLlJldmlld319Y2xhc3MgQiBleHRlbmRzIEF7bmV3U3RhdGUodCl7Y29uc3QgZT10aGlzLm5leHQuZ2V0KHQpO2lmKGUpcmV0dXJuIGU7dGhpcy5jdXJyZW50LnNjaGVkdWxlZF9kYXlzPTAsdGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cz0wO2NvbnN0IGk9aC5jYXJkKHRoaXMuY3VycmVudCkscj1oLmNhcmQodGhpcy5jdXJyZW50KSxhPWguY2FyZCh0aGlzLmN1cnJlbnQpLG49aC5jYXJkKHRoaXMuY3VycmVudCk7cmV0dXJuIHRoaXMuaW5pdF9kcyhpLHIsYSxuKSx0aGlzLm5leHRfaW50ZXJ2YWwoaSxyLGEsbiwwKSx0aGlzLm5leHRfc3RhdGUoaSxyLGEsbiksdGhpcy51cGRhdGVfbmV4dChpLHIsYSxuKSx0aGlzLm5leHQuZ2V0KHQpfWluaXRfZHModCxlLGkscil7dC5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLmluaXRfZGlmZmljdWx0eShsLkFnYWluKSx0LnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5pbml0X3N0YWJpbGl0eShsLkFnYWluKSxlLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9kaWZmaWN1bHR5KGwuSGFyZCksZS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9zdGFiaWxpdHkobC5IYXJkKSxpLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9kaWZmaWN1bHR5KGwuR29vZCksaS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9zdGFiaWxpdHkobC5Hb29kKSxyLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9kaWZmaWN1bHR5KGwuRWFzeSksci5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9zdGFiaWxpdHkobC5FYXN5KX1sZWFybmluZ1N0YXRlKHQpe3JldHVybiB0aGlzLnJldmlld1N0YXRlKHQpfXJldmlld1N0YXRlKHQpe2NvbnN0IGU9dGhpcy5uZXh0LmdldCh0KTtpZihlKXJldHVybiBlO2NvbnN0IGk9dGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cyx7ZGlmZmljdWx0eTpyLHN0YWJpbGl0eTphfT10aGlzLmxhc3Qsbj10aGlzLmFsZ29yaXRobS5mb3JnZXR0aW5nX2N1cnZlKGksYSksZD1oLmNhcmQodGhpcy5jdXJyZW50KSx1PWguY2FyZCh0aGlzLmN1cnJlbnQpLG89aC5jYXJkKHRoaXMuY3VycmVudCksZj1oLmNhcmQodGhpcy5jdXJyZW50KTtyZXR1cm4gdGhpcy5uZXh0X2RzKGQsdSxvLGYscixhLG4pLHRoaXMubmV4dF9pbnRlcnZhbChkLHUsbyxmLGkpLHRoaXMubmV4dF9zdGF0ZShkLHUsbyxmKSxkLmxhcHNlcys9MSx0aGlzLnVwZGF0ZV9uZXh0KGQsdSxvLGYpLHRoaXMubmV4dC5nZXQodCl9bmV4dF9kcyh0LGUsaSxyLGEsbixkKXt0LmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5BZ2Fpbik7Y29uc3QgdT10aGlzLmFsZ29yaXRobS5uZXh0X2ZvcmdldF9zdGFiaWxpdHkoYSxuLGQpO3Quc3RhYmlsaXR5PW0obixfLHUpLGUuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkhhcmQpLGUuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkhhcmQpLGkuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkdvb2QpLGkuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkdvb2QpLHIuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkVhc3kpLHIuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkVhc3kpfW5leHRfaW50ZXJ2YWwodCxlLGkscixhKXtsZXQgbixkLHUsbztuPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwodC5zdGFiaWxpdHksYSksZD10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKGUuc3RhYmlsaXR5LGEpLHU9dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChpLnN0YWJpbGl0eSxhKSxvPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoci5zdGFiaWxpdHksYSksbj1NYXRoLm1pbihuLGQpLGQ9TWF0aC5tYXgoZCxuKzEpLHU9TWF0aC5tYXgodSxkKzEpLG89TWF0aC5tYXgobyx1KzEpLHQuc2NoZWR1bGVkX2RheXM9bix0LmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihuLCEwKSxlLnNjaGVkdWxlZF9kYXlzPWQsZS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoZCwhMCksaS5zY2hlZHVsZWRfZGF5cz11LGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKHUsITApLHIuc2NoZWR1bGVkX2RheXM9byxyLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihvLCEwKX1uZXh0X3N0YXRlKHQsZSxpLHIpe3Quc3RhdGU9Yy5SZXZpZXcsZS5zdGF0ZT1jLlJldmlldyxpLnN0YXRlPWMuUmV2aWV3LHIuc3RhdGU9Yy5SZXZpZXd9dXBkYXRlX25leHQodCxlLGkscil7Y29uc3QgYT17Y2FyZDp0LGxvZzp0aGlzLmJ1aWxkTG9nKGwuQWdhaW4pfSxuPXtjYXJkOmUsbG9nOnN1cGVyLmJ1aWxkTG9nKGwuSGFyZCl9LGQ9e2NhcmQ6aSxsb2c6c3VwZXIuYnVpbGRMb2cobC5Hb29kKX0sdT17Y2FyZDpyLGxvZzpzdXBlci5idWlsZExvZyhsLkVhc3kpfTt0aGlzLm5leHQuc2V0KGwuQWdhaW4sYSksdGhpcy5uZXh0LnNldChsLkhhcmQsbiksdGhpcy5uZXh0LnNldChsLkdvb2QsZCksdGhpcy5uZXh0LnNldChsLkVhc3ksdSl9fWNsYXNzIHN0e2ZzcnM7Y29uc3RydWN0b3IodCl7dGhpcy5mc3JzPXR9cmVwbGF5KHQsZSxpKXtyZXR1cm4gdGhpcy5mc3JzLm5leHQodCxlLGkpfWhhbmRsZU1hbnVhbFJhdGluZyh0LGUsaSxyLGEsbixkKXtpZih0eXBlb2YgZT5cInVcIil0aHJvdyBuZXcgRXJyb3IoXCJyZXNjaGVkdWxlOiBzdGF0ZSBpcyByZXF1aXJlZCBmb3IgbWFudWFsIHJhdGluZ1wiKTtsZXQgdSxvO2lmKGU9PT1jLk5ldyl1PXtyYXRpbmc6bC5NYW51YWwsc3RhdGU6ZSxkdWU6ZD8/aSxzdGFiaWxpdHk6dC5zdGFiaWxpdHksZGlmZmljdWx0eTp0LmRpZmZpY3VsdHksZWxhcHNlZF9kYXlzOnIsbGFzdF9lbGFwc2VkX2RheXM6dC5lbGFwc2VkX2RheXMsc2NoZWR1bGVkX2RheXM6dC5zY2hlZHVsZWRfZGF5cyxyZXZpZXc6aX0sbz12KGkpLG8ubGFzdF9yZXZpZXc9aTtlbHNle2lmKHR5cGVvZiBkPlwidVwiKXRocm93IG5ldyBFcnJvcihcInJlc2NoZWR1bGU6IGR1ZSBpcyByZXF1aXJlZCBmb3IgbWFudWFsIHJhdGluZ1wiKTtjb25zdCBmPWQuZGlmZihpLFwiZGF5c1wiKTt1PXtyYXRpbmc6bC5NYW51YWwsc3RhdGU6dC5zdGF0ZSxkdWU6dC5sYXN0X3Jldmlld3x8dC5kdWUsc3RhYmlsaXR5OnQuc3RhYmlsaXR5LGRpZmZpY3VsdHk6dC5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czpyLGxhc3RfZWxhcHNlZF9kYXlzOnQuZWxhcHNlZF9kYXlzLHNjaGVkdWxlZF9kYXlzOnQuc2NoZWR1bGVkX2RheXMscmV2aWV3Oml9LG89ey4uLnQsc3RhdGU6ZSxkdWU6ZCxsYXN0X3JldmlldzppLHN0YWJpbGl0eTphfHx0LnN0YWJpbGl0eSxkaWZmaWN1bHR5Om58fHQuZGlmZmljdWx0eSxlbGFwc2VkX2RheXM6cixzY2hlZHVsZWRfZGF5czpmLHJlcHM6dC5yZXBzKzF9fXJldHVybntjYXJkOm8sbG9nOnV9fXJlc2NoZWR1bGUodCxlKXtjb25zdCBpPVtdO2xldCByPXYodC5kdWUpO2Zvcihjb25zdCBhIG9mIGUpe2xldCBuO2lmKGEucmV2aWV3PWgudGltZShhLnJldmlldyksYS5yYXRpbmc9PT1sLk1hbnVhbCl7bGV0IGQ9MDtyLnN0YXRlIT09Yy5OZXcmJnIubGFzdF9yZXZpZXcmJihkPWEucmV2aWV3LmRpZmYoci5sYXN0X3JldmlldyxcImRheXNcIikpLG49dGhpcy5oYW5kbGVNYW51YWxSYXRpbmcocixhLnN0YXRlLGEucmV2aWV3LGQsYS5zdGFiaWxpdHksYS5kaWZmaWN1bHR5LGEuZHVlP2gudGltZShhLmR1ZSk6dm9pZCAwKX1lbHNlIG49dGhpcy5yZXBsYXkocixhLnJldmlldyxhLnJhdGluZyk7aS5wdXNoKG4pLHI9bi5jYXJkfXJldHVybiBpfWNhbGN1bGF0ZU1hbnVhbFJlY29yZCh0LGUsaSxyKXtpZighaSlyZXR1cm4gbnVsbDtjb25zdHtjYXJkOmEsbG9nOm59PWksZD1oLmNhcmQodCk7cmV0dXJuIGQuZHVlLmdldFRpbWUoKT09PWEuZHVlLmdldFRpbWUoKT9udWxsOihkLnNjaGVkdWxlZF9kYXlzPWEuZHVlLmRpZmYoZC5kdWUsXCJkYXlzXCIpLHRoaXMuaGFuZGxlTWFudWFsUmF0aW5nKGQsYS5zdGF0ZSxoLnRpbWUoZSksbi5lbGFwc2VkX2RheXMscj9hLnN0YWJpbGl0eTp2b2lkIDAscj9hLmRpZmZpY3VsdHk6dm9pZCAwLGEuZHVlKSl9fWNsYXNzIFcgZXh0ZW5kcyBZe3N0cmF0ZWd5SGFuZGxlcj1uZXcgTWFwO1NjaGVkdWxlcjtjb25zdHJ1Y3Rvcih0KXtzdXBlcih0KTtjb25zdHtlbmFibGVfc2hvcnRfdGVybTplfT10aGlzLnBhcmFtZXRlcnM7dGhpcy5TY2hlZHVsZXI9ZT9WOkJ9cGFyYW1zX2hhbmRsZXJfcHJveHkoKXtjb25zdCB0PXRoaXM7cmV0dXJue3NldDpmdW5jdGlvbihlLGkscil7cmV0dXJuIGk9PT1cInJlcXVlc3RfcmV0ZW50aW9uXCImJk51bWJlci5pc0Zpbml0ZShyKT90LmludGVydmFsTW9kaWZpZXI9dC5jYWxjdWxhdGVfaW50ZXJ2YWxfbW9kaWZpZXIoTnVtYmVyKHIpKTppPT09XCJlbmFibGVfc2hvcnRfdGVybVwiJiYodC5TY2hlZHVsZXI9cj09PSEwP1Y6QiksUmVmbGVjdC5zZXQoZSxpLHIpLCEwfX19dXNlU3RyYXRlZ3kodCxlKXtyZXR1cm4gdGhpcy5zdHJhdGVneUhhbmRsZXIuc2V0KHQsZSksdGhpc31jbGVhclN0cmF0ZWd5KHQpe3JldHVybiB0P3RoaXMuc3RyYXRlZ3lIYW5kbGVyLmRlbGV0ZSh0KTp0aGlzLnN0cmF0ZWd5SGFuZGxlci5jbGVhcigpLHRoaXN9Z2V0U2NoZWR1bGVyKHQsZSl7Y29uc3QgaT10aGlzLnN0cmF0ZWd5SGFuZGxlci5nZXQoeC5TRUVEKSxyPXRoaXMuc3RyYXRlZ3lIYW5kbGVyLmdldCh4LlNDSEVEVUxFUil8fHRoaXMuU2NoZWR1bGVyLGE9aXx8SDtyZXR1cm4gbmV3IHIodCxlLHRoaXMse3NlZWQ6YX0pfXJlcGVhdCh0LGUsaSl7Y29uc3Qgcj10aGlzLmdldFNjaGVkdWxlcih0LGUpLnByZXZpZXcoKTtyZXR1cm4gaSYmdHlwZW9mIGk9PVwiZnVuY3Rpb25cIj9pKHIpOnJ9bmV4dCh0LGUsaSxyKXtjb25zdCBhPXRoaXMuZ2V0U2NoZWR1bGVyKHQsZSksbj1oLnJhdGluZyhpKTtpZihuPT09bC5NYW51YWwpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJldmlldyBhIG1hbnVhbCByYXRpbmdcIik7Y29uc3QgZD1hLnJldmlldyhuKTtyZXR1cm4gciYmdHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yKGQpOmR9Z2V0X3JldHJpZXZhYmlsaXR5KHQsZSxpPSEwKXtjb25zdCByPWguY2FyZCh0KTtlPWU/aC50aW1lKGUpOm5ldyBEYXRlO2NvbnN0IGE9ci5zdGF0ZSE9PWMuTmV3P01hdGgubWF4KGUuZGlmZihyLmxhc3RfcmV2aWV3LFwiZGF5c1wiKSwwKTowLG49ci5zdGF0ZSE9PWMuTmV3P3RoaXMuZm9yZ2V0dGluZ19jdXJ2ZShhLCtyLnN0YWJpbGl0eS50b0ZpeGVkKDgpKTowO3JldHVybiBpP2AkeyhuKjEwMCkudG9GaXhlZCgyKX0lYDpufXJvbGxiYWNrKHQsZSxpKXtjb25zdCByPWguY2FyZCh0KSxhPWgucmV2aWV3X2xvZyhlKTtpZihhLnJhdGluZz09PWwuTWFudWFsKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByb2xsYmFjayBhIG1hbnVhbCByYXRpbmdcIik7bGV0IG4sZCx1O3N3aXRjaChhLnN0YXRlKXtjYXNlIGMuTmV3Om49YS5kdWUsZD12b2lkIDAsdT0wO2JyZWFrO2Nhc2UgYy5MZWFybmluZzpjYXNlIGMuUmVsZWFybmluZzpjYXNlIGMuUmV2aWV3Om49YS5yZXZpZXcsZD1hLmR1ZSx1PXIubGFwc2VzLShhLnJhdGluZz09PWwuQWdhaW4mJmEuc3RhdGU9PT1jLlJldmlldz8xOjApO2JyZWFrfWNvbnN0IG89ey4uLnIsZHVlOm4sc3RhYmlsaXR5OmEuc3RhYmlsaXR5LGRpZmZpY3VsdHk6YS5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czphLmxhc3RfZWxhcHNlZF9kYXlzLHNjaGVkdWxlZF9kYXlzOmEuc2NoZWR1bGVkX2RheXMscmVwczpNYXRoLm1heCgwLHIucmVwcy0xKSxsYXBzZXM6TWF0aC5tYXgoMCx1KSxzdGF0ZTphLnN0YXRlLGxhc3RfcmV2aWV3OmR9O3JldHVybiBpJiZ0eXBlb2YgaT09XCJmdW5jdGlvblwiP2kobyk6b31mb3JnZXQodCxlLGk9ITEscil7Y29uc3QgYT1oLmNhcmQodCk7ZT1oLnRpbWUoZSk7Y29uc3Qgbj1hLnN0YXRlPT09Yy5OZXc/MDplLmRpZmYoYS5sYXN0X3JldmlldyxcImRheXNcIiksZD17cmF0aW5nOmwuTWFudWFsLHN0YXRlOmEuc3RhdGUsZHVlOmEuZHVlLHN0YWJpbGl0eTphLnN0YWJpbGl0eSxkaWZmaWN1bHR5OmEuZGlmZmljdWx0eSxlbGFwc2VkX2RheXM6MCxsYXN0X2VsYXBzZWRfZGF5czphLmVsYXBzZWRfZGF5cyxzY2hlZHVsZWRfZGF5czpuLHJldmlldzplfSx1PXtjYXJkOnsuLi5hLGR1ZTplLHN0YWJpbGl0eTowLGRpZmZpY3VsdHk6MCxlbGFwc2VkX2RheXM6MCxzY2hlZHVsZWRfZGF5czowLHJlcHM6aT8wOmEucmVwcyxsYXBzZXM6aT8wOmEubGFwc2VzLHN0YXRlOmMuTmV3LGxhc3RfcmV2aWV3OmEubGFzdF9yZXZpZXd9LGxvZzpkfTtyZXR1cm4gciYmdHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yKHUpOnV9cmVzY2hlZHVsZSh0LGU9W10saT17fSl7Y29uc3R7cmVjb3JkTG9nSGFuZGxlcjpyLHJldmlld3NPcmRlckJ5OmEsc2tpcE1hbnVhbDpuPSEwLG5vdzpkPW5ldyBEYXRlLHVwZGF0ZV9tZW1vcnlfc3RhdGU6dT0hMX09aTthJiZ0eXBlb2YgYT09XCJmdW5jdGlvblwiJiZlLnNvcnQoYSksbiYmKGU9ZS5maWx0ZXIoTT0+TS5yYXRpbmchPT1sLk1hbnVhbCkpO2NvbnN0IG89bmV3IHN0KHRoaXMpLGY9by5yZXNjaGVkdWxlKGkuZmlyc3RfY2FyZHx8digpLGUpLHk9Zi5sZW5ndGgsdz1oLmNhcmQodCksZz1vLmNhbGN1bGF0ZU1hbnVhbFJlY29yZCh3LGQseT9mW3ktMV06dm9pZCAwLHUpO3JldHVybiByJiZ0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3tjb2xsZWN0aW9uczpmLm1hcChyKSxyZXNjaGVkdWxlX2l0ZW06Zz9yKGcpOm51bGx9Ontjb2xsZWN0aW9uczpmLHJlc2NoZWR1bGVfaXRlbTpnfX19Y29uc3QgbnQ9cz0+bmV3IFcoc3x8e30pO2V4cG9ydHtBIGFzIEFic3RyYWN0U2NoZWR1bGVyLFIgYXMgQ0xBTVBfUEFSQU1FVEVSUywkIGFzIERFQ0FZLEggYXMgRGVmYXVsdEluaXRTZWVkU3RyYXRlZ3ksRCBhcyBGQUNUT1IsVyBhcyBGU1JTLFkgYXMgRlNSU0FsZ29yaXRobSx0dCBhcyBGU1JTVmVyc2lvbixhdCBhcyBHZW5TZWVkU3RyYXRlZ3lXaXRoQ2FyZElkLEkgYXMgR3JhZGVzLGIgYXMgSU5JVF9TX01BWCxsIGFzIFJhdGluZyxfIGFzIFNfTUlOLGMgYXMgU3RhdGUseCBhcyBTdHJhdGVneU1vZGUsaCBhcyBUeXBlQ29udmVydCxtIGFzIGNsYW1wLHYgYXMgY3JlYXRlRW1wdHlDYXJkLE4gYXMgZGF0ZURpZmZJbkRheXMsTCBhcyBkYXRlX2RpZmYsRiBhcyBkYXRlX3NjaGVkdWxlcixVIGFzIGRlZmF1bHRfZW5hYmxlX2Z1enoscSBhcyBkZWZhdWx0X2VuYWJsZV9zaG9ydF90ZXJtLEMgYXMgZGVmYXVsdF9tYXhpbXVtX2ludGVydmFsLGsgYXMgZGVmYXVsdF9yZXF1ZXN0X3JldGVudGlvbixUIGFzIGRlZmF1bHRfdyxKIGFzIGZpeERhdGUsUSBhcyBmaXhSYXRpbmcsSyBhcyBmaXhTdGF0ZSxQIGFzIGZvcmdldHRpbmdfY3VydmUsTyBhcyBmb3JtYXREYXRlLG50IGFzIGZzcnMseiBhcyBnZW5lcmF0b3JQYXJhbWV0ZXJzLEcgYXMgZ2V0X2Z1enpfcmFuZ2UsaiBhcyBzaG93X2RpZmZfbWVzc2FnZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImNocm9tZVwiIC8+IFxuXG5pbXBvcnQgeyBNdXRleCB9IGZyb20gJ2FzeW5jLW11dGV4JztcbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnaW5nJzsgXG5pbXBvcnQgeyBTdGF0ZSwgY3JlYXRlRW1wdHlDYXJkLCBDYXJkIGFzIEZTUlNDYXJkIH0gZnJvbSAndHMtZnNycyc7XG5pbXBvcnQgeyBCb29rbWFyaywgRmxhc2hjYXJkLCBDaGF0TWVzc2FnZURiLCBDaGF0SGlzdG9yeUl0ZW0gfSBmcm9tICcuLi9zcmMvdHlwZXMvZGInOyAvLyBJbXBvcnQgREIgdHlwZXNcblxuY29uc3QgT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEggPSAnb2Zmc2NyZWVuLmh0bWwnO1xubGV0IGNyZWF0aW5nUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsO1xuY29uc3QgY3JlYXRpb25NdXRleCA9IG5ldyBNdXRleCgpO1xuXG4vLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgb2Zmc2NyZWVuIGRvY3VtZW50IGV4aXN0cyBhbmQgY3JlYXRlIGl0IGlmIG5vdFxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlT2Zmc2NyZWVuRG9jdW1lbnQoKSB7XG4gIC8vIFVzZSBhIG11dGV4IHRvIHByZXZlbnQgbXVsdGlwbGUgY29uY3VycmVudCBjcmVhdGlvbiBhdHRlbXB0c1xuICBjb25zdCByZWxlYXNlID0gYXdhaXQgY3JlYXRpb25NdXRleC5hY3F1aXJlKCk7XG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGRvY3VtZW50IGFscmVhZHkgZXhpc3RzLlxuICAgICBjb25zdCBleGlzdGluZ0NvbnRleHRzID0gYXdhaXQgYnJvd3Nlci5ydW50aW1lLmdldENvbnRleHRzKHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIENvbnRleHRUeXBlIG1pZ2h0IGJlIG1pc3NpbmcgT0ZGU0NSRUVOX0RPQ1VNRU5UIGluIG9sZGVyIHR5cGVzXG4gICAgICAgIGNvbnRleHRUeXBlczogWydPRkZTQ1JFRU5fRE9DVU1FTlQnIGFzIGJyb3dzZXIuUnVudGltZS5Db250ZXh0VHlwZV0sXG4gICAgICAgIGRvY3VtZW50VXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpXSxcbiAgICAgIH0pO1xuXG4gICAgaWYgKGV4aXN0aW5nQ29udGV4dHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ1tEQiBVdGlsXSBPZmZzY3JlZW4gZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuJyk7IC8vIExlc3MgdmVyYm9zZVxuICAgICAgcmV0dXJuOyAvLyBBbHJlYWR5IGV4aXN0cywgd2UncmUgZ29vZC5cbiAgICB9XG5cbiAgICAvLyBJZiBjcmVhdGlvbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzLCB3YWl0IGZvciBpdCB0byBjb21wbGV0ZS5cbiAgICBpZiAoY3JlYXRpbmdQcm9taXNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnW0RCIFV0aWxdIFdhaXRpbmcgZm9yIGV4aXN0aW5nIG9mZnNjcmVlbiBkb2N1bWVudCBjcmVhdGlvbi4uLicpO1xuICAgICAgYXdhaXQgY3JlYXRpbmdQcm9taXNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gQ3JlYXRpbmcgb2Zmc2NyZWVuIGRvY3VtZW50Li4uJyk7XG4gICAgY3JlYXRpbmdQcm9taXNlID0gY2hyb21lLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7IC8vIFVzZSBuYXRpdmUgY2hyb21lIEFQSVxuICAgICAgdXJsOiBPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCxcbiAgICAgIHJlYXNvbnM6IFsnRE9NX1BBUlNFUicgYXMgY2hyb21lLm9mZnNjcmVlbi5SZWFzb25dLCBcbiAgICAgIGp1c3RpZmljYXRpb246ICdQcm92aWRlcyBQR2xpdGUgZGF0YWJhc2Ugb3BlcmF0aW9ucy4nLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNyZWF0aW5nUHJvbWlzZTtcbiAgICAgIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gT2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tEQiBVdGlsXSBFcnJvciBjcmVhdGluZyBvZmZzY3JlZW4gZG9jdW1lbnQ6JywgZXJyb3IpO1xuICAgICAgLy8gRG91YmxlLWNoZWNrIGlmIGl0IGV4aXN0cyBub3csIG1heWJlIGNyZWF0aW9uIHN1Y2NlZWRlZCBkZXNwaXRlIGVycm9yP1xuICAgICAgY29uc3QgY29udGV4dHNBZnRlckVycm9yID0gYXdhaXQgYnJvd3Nlci5ydW50aW1lLmdldENvbnRleHRzKHtcbiAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgIGNvbnRleHRUeXBlczogWydPRkZTQ1JFRU5fRE9DVU1FTlQnIGFzIGJyb3dzZXIuUnVudGltZS5Db250ZXh0VHlwZV0sXG4gICAgICAgICBkb2N1bWVudFVybHM6IFticm93c2VyLnJ1bnRpbWUuZ2V0VVJMKE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKV0sXG4gICAgICAgfSk7XG4gICAgICAgaWYgKGNvbnRleHRzQWZ0ZXJFcnJvci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgIC8vIE9ubHkgdGhyb3cgaWYgaXQgdHJ1bHkgZmFpbGVkIGFuZCBkb2Vzbid0IGV4aXN0XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9mZnNjcmVlbiBkb2N1bWVudCBjcmVhdGlvbiBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICB9XG4gICAgICAgIGNvbnNvbGUud2FybignW0RCIFV0aWxdIE9mZnNjcmVlbiBkb2N1bWVudCBleGlzdGVkIGRlc3BpdGUgY3JlYXRpb24gZXJyb3IvcmFjZSBjb25kaXRpb24uJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIFJlc2V0IHRoZSBwcm9taXNlIHdoZXRoZXIgaXQgc3VjY2VlZGVkIG9yIGZhaWxlZFxuICAgICAgY3JlYXRpbmdQcm9taXNlID0gbnVsbDsgXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIC8vIFJlbGVhc2UgdGhlIG11dGV4XG4gICAgcmVsZWFzZSgpO1xuICB9XG59XG5cbi8vIEV4cG9ydCBmdW5jdGlvbnMgdGhhdCBtaXJyb3IgUEdsaXRlIG1ldGhvZHMgdmlhIEB3ZWJleHQtY29yZS9tZXNzYWdpbmdcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjRGIoc3FsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBhd2FpdCBlbnN1cmVPZmZzY3JlZW5Eb2N1bWVudCgpO1xuICAvLyBjb25zb2xlLmxvZygnW0RCIFV0aWxdIFNlbmRpbmcgZGJFeGVjIG1lc3NhZ2U6JywgeyBzcWwgfSk7IC8vIExlc3MgdmVyYm9zZVxuICAvLyBQR2xpdGUgZXhlYyBkb2Vzbid0IHN1cHBvcnQgcGFyYW1zLCBzbyB3ZSBvbmx5IHNlbmQgc3FsXG4gIHJldHVybiBzZW5kTWVzc2FnZSgnZGJFeGVjJywgeyBzcWwgfSk7IFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlcnlEYihzcWw6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICBhd2FpdCBlbnN1cmVPZmZzY3JlZW5Eb2N1bWVudCgpO1xuICAvLyBjb25zb2xlLmxvZygnW0RCIFV0aWxdIFNlbmRpbmcgZGJRdWVyeSBtZXNzYWdlOicsIHsgc3FsLCBwYXJhbXMgfSk7IC8vIExlc3MgdmVyYm9zZVxuICByZXR1cm4gc2VuZE1lc3NhZ2UoJ2RiUXVlcnknLCB7IHNxbCwgcGFyYW1zOiBwYXJhbXMgfHwgW10gfSk7IFxufVxuXG4vLyAtLS0gRGF0YWJhc2UgSW50ZXJhY3Rpb24gRnVuY3Rpb25zIC0tLVxuXG4vKipcbiAqIFNhdmVzIGEgYm9va21hcmsgdG8gdGhlIGRhdGFiYXNlLlxuICogXG4gKiBAcGFyYW0gYm9va21hcmtEYXRhIFBhcnRpYWwgYm9va21hcmsgZGF0YSAodXJsIGlzIHJlcXVpcmVkKVxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgQm9va21hcmsgb2JqZWN0IHdpdGggaXRzIElEXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29rbWFyayhib29rbWFya0RhdGE6IFBpY2s8Qm9va21hcmssICd1cmwnPiAmIFBhcnRpYWw8T21pdDxCb29rbWFyaywgJ2lkJyB8ICdzYXZlZF9hdCc+ID4pOiBQcm9taXNlPEJvb2ttYXJrPiB7XG4gICAgY29uc3Qgc3FsID0gYFxuICAgICAgICBJTlNFUlQgSU5UTyBib29rbWFya3MgKHVybCwgdGl0bGUsIHRhZ3MsIGVtYmVkZGluZylcbiAgICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNClcbiAgICAgICAgUkVUVVJOSU5HIGlkLCB1cmwsIHRpdGxlLCBzYXZlZF9hdCwgdGFncywgZW1iZWRkaW5nO1xuICAgIGA7XG4gICAgLy8gRW1iZWRkaW5nIHNob3VsZCBub3cgYmUgc3RyaW5nIHwgbnVsbFxuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgYm9va21hcmtEYXRhLnVybCxcbiAgICAgICAgYm9va21hcmtEYXRhLnRpdGxlID8/IG51bGwsXG4gICAgICAgIGJvb2ttYXJrRGF0YS50YWdzID8/IG51bGwsXG4gICAgICAgIGJvb2ttYXJrRGF0YS5lbWJlZGRpbmcgPz8gbnVsbCBcbiAgICBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5RGIoc3FsLCBwYXJhbXMpO1xuICAgIGlmICghcmVzdWx0Py5yb3dzPy5bMF0pIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgYm9va21hcmtcIik7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzWzBdIGFzIEJvb2ttYXJrO1xufVxuXG4vKipcbiAqIFNhdmVzIGEgZmxhc2hjYXJkIHRvIHRoZSBkYXRhYmFzZSwgaW5pdGlhbGl6aW5nIEZTUlMgc3RhdGUuXG4gKiBcbiAqIEBwYXJhbSBmbGFzaGNhcmREYXRhIERhdGEgZm9yIHRoZSBuZXcgZmxhc2hjYXJkIChleGNsdWRpbmcgRlNSUyBzdGF0ZSBhbmQgaWQvY3JlYXRlZF9hdClcbiAqIEBwYXJhbSBub3cgVGhlIGN1cnJlbnQgZGF0ZS90aW1lIGZvciBpbml0aWFsaXppbmcgRlNSUyBzdGF0ZVxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgRmxhc2hjYXJkIG9iamVjdCB3aXRoIGl0cyBJRCBhbmQgaW5pdGlhbCBGU1JTIHN0YXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVGbGFzaGNhcmQoZmxhc2hjYXJkRGF0YTogT21pdDxGbGFzaGNhcmQsICdpZCcgfCAnY3JlYXRlZF9hdCcgfCBrZXlvZiBGU1JTQ2FyZCB8ICdkdWUnIHwgJ3N0YXRlJyB8ICdsYXN0X3Jldmlldyc+LCBub3c6IERhdGUgPSBuZXcgRGF0ZSgpKTogUHJvbWlzZTxGbGFzaGNhcmQ+IHtcbiAgICAvLyBHZXQgaW5pdGlhbCBGU1JTIHN0YXRlIHVzaW5nIHRzLWZzcnNcbiAgICBjb25zdCBpbml0aWFsQ2FyZFN0YXRlID0gY3JlYXRlRW1wdHlDYXJkKG5vdyk7XG4gICAgLy8gR2V0IHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRlIGVudW1cbiAgICBjb25zdCBzdGF0ZVN0cmluZyA9IFN0YXRlW2luaXRpYWxDYXJkU3RhdGUuc3RhdGVdOyBcblxuICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgSU5TRVJUIElOVE8gZmxhc2hjYXJkcyAoXG4gICAgICAgICAgICB0eXBlLCBmcm9udCwgYmFjaywgY2xvemVfdGV4dCwgc291cmNlX3VybCwgc291cmNlX2hpZ2hsaWdodCwgXG4gICAgICAgICAgICBzb3VyY2VfbGFuZ3VhZ2UsIHRhcmdldF9sYW5ndWFnZSwgY29udGV4dCwgdGFncywgXG4gICAgICAgICAgICBkdWUsIHN0YWJpbGl0eSwgZGlmZmljdWx0eSwgZWxhcHNlZF9kYXlzLCBzY2hlZHVsZWRfZGF5cywgXG4gICAgICAgICAgICByZXBzLCBsYXBzZXMsIHN0YXRlLCBsYXN0X3Jldmlld1xuICAgICAgICApXG4gICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzLCAkMTQsICQxNSwgJDE2LCAkMTcsICQxOCwgJDE5KVxuICAgICAgICBSRVRVUk5JTkcgKjsgXG4gICAgYDtcbiAgICBcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgIGZsYXNoY2FyZERhdGEudHlwZSxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5mcm9udCA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLmJhY2sgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5jbG96ZV90ZXh0ID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEuc291cmNlX3VybCA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLnNvdXJjZV9oaWdobGlnaHQgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5zb3VyY2VfbGFuZ3VhZ2UgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS50YXJnZXRfbGFuZ3VhZ2UgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5jb250ZXh0ID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEudGFncyA/PyBudWxsLFxuICAgICAgICAvLyBGU1JTIGluaXRpYWwgc3RhdGU6XG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUuZHVlLnRvSVNPU3RyaW5nKCksIC8vIFN0b3JlIGFzIElTTyBzdHJpbmdcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5zdGFiaWxpdHksXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUuZGlmZmljdWx0eSxcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5lbGFwc2VkX2RheXMsXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUuc2NoZWR1bGVkX2RheXMsXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUucmVwcyxcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5sYXBzZXMsXG4gICAgICAgIHN0YXRlU3RyaW5nLCAvLyBVc2UgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3RhdGVcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5sYXN0X3Jldmlldz8udG9JU09TdHJpbmcoKSA/PyBudWxsIC8vIFN0b3JlIGFzIElTTyBzdHJpbmcgb3IgbnVsbFxuICAgIF07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeURiKHNxbCwgcGFyYW1zKTtcbiAgICBpZiAoIXJlc3VsdD8ucm93cz8uWzBdKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGZsYXNoY2FyZFwiKTtcbiAgICAvLyBFbnN1cmUgdGhlIHJldHVybmVkIHN0YXRlIGlzIGNvcnJlY3RseSB0eXBlZCBpZiBuZWVkZWQgZWxzZXdoZXJlIGltbWVkaWF0ZWx5LFxuICAgIC8vIGFsdGhvdWdoIHJlYWRpbmcgZnJvbSBEQiBsYXRlciBzaG91bGQgeWllbGQgdGhlIHN0cmluZy5cbiAgICBjb25zdCBzYXZlZEZsYXNoY2FyZCA9IHJlc3VsdC5yb3dzWzBdIGFzIEZsYXNoY2FyZDtcbiAgICAvLyBQR2xpdGUgbWlnaHQgcmV0dXJuIHRoZSBudW1lcmljIGVudW0gdmFsdWUgaWYgdGhlIGNvbHVtbiB0eXBlIGFmZmluaXR5IGlzIGludGVnZXIsXG4gICAgLy8gYnV0IHNpbmNlIGl0J3MgVEVYVCwgaXQgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIHdlIGluc2VydGVkLlxuICAgIC8vIElmIGlzc3VlcyBhcmlzZSwgbWFudWFsbHkgY2FzdCBoZXJlOiBzYXZlZEZsYXNoY2FyZC5zdGF0ZSA9IFN0YXRlW3NhdmVkRmxhc2hjYXJkLnN0YXRlIGFzIG51bWJlcl0gYXMgdW5rbm93biBhcyBTdGF0ZTtcbiAgICByZXR1cm4gc2F2ZWRGbGFzaGNhcmQ7XG59XG5cbi8qKlxuICogU2F2ZXMgYSBjaGF0IG1lc3NhZ2UgdG8gdGhlIGRhdGFiYXNlLlxuICogXG4gKiBAcGFyYW0gbWVzc2FnZURhdGEgVGhlIGNoYXQgbWVzc2FnZSBkYXRhXG4gKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBDaGF0TWVzc2FnZURiIG9iamVjdCB3aXRoIGl0cyBJRCBhbmQgdGltZXN0YW1wXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDaGF0TWVzc2FnZShtZXNzYWdlRGF0YTogT21pdDxDaGF0TWVzc2FnZURiLCAnaWQnIHwgJ3RpbWVzdGFtcCc+KTogUHJvbWlzZTxDaGF0TWVzc2FnZURiPiB7XG4gICAgY29uc3Qgc3FsID0gYFxuICAgICAgICBJTlNFUlQgSU5UTyBjaGF0X21lc3NhZ2VzIChyb2xlLCBjb250ZW50LCBib29rbWFya19pZCwgZmxhc2hjYXJkX2lkKVxuICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0KVxuICAgICAgICBSRVRVUk5JTkcgKjtcbiAgICBgO1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgbWVzc2FnZURhdGEucm9sZSxcbiAgICAgICAgbWVzc2FnZURhdGEuY29udGVudCA/PyBudWxsLFxuICAgICAgICBtZXNzYWdlRGF0YS5ib29rbWFya19pZCA/PyBudWxsLFxuICAgICAgICBtZXNzYWdlRGF0YS5mbGFzaGNhcmRfaWQgPz8gbnVsbFxuICAgIF07XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlEYihzcWwsIHBhcmFtcyk7XG4gICAgaWYgKCFyZXN1bHQ/LnJvd3M/LlswXSkgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBjaGF0IG1lc3NhZ2VcIik7XG4gICAgY29uc29sZS5sb2coJ1tkYi50cyBjcmVhdGVDaGF0TWVzc2FnZV0gUmF3IERCIHJlc3VsdCByb3c6JywgcmVzdWx0LnJvd3NbMF0pOyBcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF0gYXMgQ2hhdE1lc3NhZ2VEYjtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGNoYXQgaGlzdG9yeSwgam9pbmluZyBib29rbWFya3MgYW5kIGZsYXNoY2FyZHMuXG4gKiBcbiAqIEBwYXJhbSBsaW1pdCBNYXhpbXVtIG51bWJlciBvZiBtZXNzYWdlcyB0byByZXRyaWV2ZSAob3B0aW9uYWwpXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBDaGF0SGlzdG9yeUl0ZW0gb2JqZWN0c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhdEhpc3RvcnkobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPENoYXRIaXN0b3J5SXRlbVtdPiB7XG4gICAgLy8gQ29uc3RydWN0IHRoZSBxdWVyeSB0byBmZXRjaCBtZXNzYWdlcyBhbmQgam9pbiByZWxhdGVkIGRhdGFcbiAgICBjb25zdCBzcWwgPSBgXG4gICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgIG0uaWQgYXMgbWVzc2FnZV9pZCwgLS0gQWxpYXMgdGhlIG1lc3NhZ2UgSURcbiAgICAgICAgICAgIG0ucm9sZSwgbS5jb250ZW50LCBtLmJvb2ttYXJrX2lkLCBtLmZsYXNoY2FyZF9pZCwgbS50aW1lc3RhbXAsXG4gICAgICAgICAgICBiLmlkIGFzIGJvb2ttYXJrX2lkX2pvaW5lZCwgYi51cmwgYXMgYm9va21hcmtfdXJsLCBiLnRpdGxlIGFzIGJvb2ttYXJrX3RpdGxlLCBiLnNhdmVkX2F0IGFzIGJvb2ttYXJrX3NhdmVkX2F0LCBiLnRhZ3MgYXMgYm9va21hcmtfdGFncywgYi5lbWJlZGRpbmcgYXMgYm9va21hcmtfZW1iZWRkaW5nLCBcbiAgICAgICAgICAgIGYuaWQgYXMgZmxhc2hjYXJkX2lkX2pvaW5lZCwgZi4qIC0tIFNlbGVjdCBhbGwgZmxhc2hjYXJkIGZpZWxkc1xuICAgICAgICBGUk9NIGNoYXRfbWVzc2FnZXMgbVxuICAgICAgICBMRUZUIEpPSU4gYm9va21hcmtzIGIgT04gbS5ib29rbWFya19pZCA9IGIuaWRcbiAgICAgICAgTEVGVCBKT0lOIGZsYXNoY2FyZHMgZiBPTiBtLmZsYXNoY2FyZF9pZCA9IGYuaWRcbiAgICAgICAgT1JERVIgQlkgbS50aW1lc3RhbXAgREVTQ1xuICAgICAgICAke2xpbWl0ID8gJ0xJTUlUID8nIDogJyd9XG4gICAgYDtcbiAgICBjb25zdCBwYXJhbXMgPSBsaW1pdCA/IFtsaW1pdF0gOiBbXTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeURiKHNxbCwgcGFyYW1zKTtcblxuICAgIGlmICghcmVzdWx0Py5yb3dzKSByZXR1cm4gW107XG5cbiAgICBjb25zb2xlLmxvZygnW2RiLnRzIGdldENoYXRIaXN0b3J5XSBSYXcgREIgcmVzdWx0IHJvd3M6JywgcmVzdWx0LnJvd3MpO1xuXG4gICAgLy8gTWFwIHRoZSByYXcgcm93cyB0byB0aGUgQ2hhdEhpc3RvcnlJdGVtIHVuaW9uIHR5cGVcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKChyb3c6IGFueSk6IENoYXRIaXN0b3J5SXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IENoYXRNZXNzYWdlRGIgPSB7XG4gICAgICAgICAgICBpZDogcm93Lm1lc3NhZ2VfaWQsIC8vIFVzZSB0aGUgZXhwbGljaXQgYWxpYXMgaGVyZVxuICAgICAgICAgICAgcm9sZTogcm93LnJvbGUsXG4gICAgICAgICAgICBjb250ZW50OiByb3cuY29udGVudCxcbiAgICAgICAgICAgIGJvb2ttYXJrX2lkOiByb3cuYm9va21hcmtfaWQsIC8vIFRoaXMgY29tZXMgZnJvbSBtLiosIHNob3VsZCBiZSBjb3JyZWN0XG4gICAgICAgICAgICBmbGFzaGNhcmRfaWQ6IHJvdy5mbGFzaGNhcmRfaWQsIC8vIFRoaXMgY29tZXMgZnJvbSBtLiosIHNob3VsZCBiZSBjb3JyZWN0XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHJvdy50aW1lc3RhbXAsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJvdy5yb2xlID09PSAnYm9va21hcmsnICYmIHJvdy5ib29rbWFya19pZF9qb2luZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvb2ttYXJrOiBCb29rbWFyayA9IHtcbiAgICAgICAgICAgICAgICBpZDogcm93LmJvb2ttYXJrX2lkX2pvaW5lZCwgLy8gVXNlIHRoZSBzcGVjaWZpYyBqb2luIGFsaWFzXG4gICAgICAgICAgICAgICAgdXJsOiByb3cuYm9va21hcmtfdXJsLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByb3cuYm9va21hcmtfdGl0bGUsXG4gICAgICAgICAgICAgICAgc2F2ZWRfYXQ6IHJvdy5ib29rbWFya19zYXZlZF9hdCxcbiAgICAgICAgICAgICAgICB0YWdzOiByb3cuYm9va21hcmtfdGFncyxcbiAgICAgICAgICAgICAgICBlbWJlZGRpbmc6IHJvdy5ib29rbWFya19lbWJlZGRpbmcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2Jvb2ttYXJrJywgbWVzc2FnZSwgYm9va21hcmsgfTtcbiAgICAgICAgfSBlbHNlIGlmIChyb3cucm9sZSA9PT0gJ2ZsYXNoY2FyZCcgJiYgcm93LmZsYXNoY2FyZF9pZF9qb2luZWQpIHtcbiAgICAgICAgICAgICAvLyBNYXAgYWxsIGZsYXNoY2FyZCBmaWVsZHMgZnJvbSB0aGUgcm93IFxuICAgICAgICAgICAgIGNvbnN0IGZsYXNoY2FyZDogRmxhc2hjYXJkID0ge1xuICAgICAgICAgICAgICAgICBpZDogcm93LmZsYXNoY2FyZF9pZF9qb2luZWQsIC8vIFVzZSB0aGUgc3BlY2lmaWMgam9pbiBhbGlhc1xuICAgICAgICAgICAgICAgICB0eXBlOiByb3cudHlwZSxcbiAgICAgICAgICAgICAgICAgZnJvbnQ6IHJvdy5mcm9udCxcbiAgICAgICAgICAgICAgICAgYmFjazogcm93LmJhY2ssXG4gICAgICAgICAgICAgICAgIGNsb3plX3RleHQ6IHJvdy5jbG96ZV90ZXh0LFxuICAgICAgICAgICAgICAgICBzb3VyY2VfdXJsOiByb3cuc291cmNlX3VybCxcbiAgICAgICAgICAgICAgICAgc291cmNlX2hpZ2hsaWdodDogcm93LnNvdXJjZV9oaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgIHNvdXJjZV9sYW5ndWFnZTogcm93LnNvdXJjZV9sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgdGFyZ2V0X2xhbmd1YWdlOiByb3cudGFyZ2V0X2xhbmd1YWdlLFxuICAgICAgICAgICAgICAgICBjb250ZXh0OiByb3cuY29udGV4dCxcbiAgICAgICAgICAgICAgICAgdGFnczogcm93LnRhZ3NfMSwgLy8gS2VlcCBleGlzdGluZyBhbGlhcyBmb3IgdGFncyBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogcm93LmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgIGR1ZTogcm93LmR1ZSxcbiAgICAgICAgICAgICAgICAgc3RhYmlsaXR5OiByb3cuc3RhYmlsaXR5LFxuICAgICAgICAgICAgICAgICBkaWZmaWN1bHR5OiByb3cuZGlmZmljdWx0eSxcbiAgICAgICAgICAgICAgICAgZWxhcHNlZF9kYXlzOiByb3cuZWxhcHNlZF9kYXlzLFxuICAgICAgICAgICAgICAgICBzY2hlZHVsZWRfZGF5czogcm93LnNjaGVkdWxlZF9kYXlzLFxuICAgICAgICAgICAgICAgICByZXBzOiByb3cucmVwcyxcbiAgICAgICAgICAgICAgICAgbGFwc2VzOiByb3cubGFwc2VzLFxuICAgICAgICAgICAgICAgICBzdGF0ZTogcm93LnN0YXRlIGFzIFN0YXRlLFxuICAgICAgICAgICAgICAgICBsYXN0X3Jldmlldzogcm93Lmxhc3RfcmV2aWV3LFxuICAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnZmxhc2hjYXJkJywgbWVzc2FnZSwgZmxhc2hjYXJkIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3IgcmVndWxhciBtZXNzYWdlcywgdXNlIHRoZSBiYXNlIG1lc3NhZ2Ugb2JqZWN0XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnbWVzc2FnZScsIGRhdGE6IG1lc3NhZ2UgfTsgXG4gICAgICAgIH1cbiAgICB9KS5yZXZlcnNlKCk7IC8vIFJldmVyc2UgYmFjayB0byBjaHJvbm9sb2dpY2FsIG9yZGVyXG59XG5cbi8qKlxuICogUmV0cmlldmVzIGZsYXNoY2FyZHMgZHVlIGZvciByZXZpZXcuXG4gKiBcbiAqIEBwYXJhbSBub3cgVGhlIGN1cnJlbnQgZGF0ZS90aW1lIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgZHVlIGRhdGVcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGR1ZSBGbGFzaGNhcmQgb2JqZWN0c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RHVlRmxhc2hjYXJkcyhub3c6IERhdGUgPSBuZXcgRGF0ZSgpKTogUHJvbWlzZTxGbGFzaGNhcmRbXT4ge1xuICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgU0VMRUNUICogRlJPTSBmbGFzaGNhcmRzXG4gICAgICAgIFdIRVJFIGR1ZSA8PSA/XG4gICAgICAgIE9SREVSIEJZIGR1ZSBBU0M7XG4gICAgYDtcbiAgICBjb25zdCBwYXJhbXMgPSBbbm93LnRvSVNPU3RyaW5nKCldO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5RGIoc3FsLCBwYXJhbXMpO1xuICAgIHJldHVybiAocmVzdWx0Py5yb3dzIHx8IFtdKSBhcyBGbGFzaGNhcmRbXTtcbn1cblxuLy8gRnV0dXJlIGZ1bmN0aW9ucyAodXBkYXRlRmxhc2hjYXJkU3RhdGUsIGRlbGV0ZUJvb2ttYXJrLCBldGMuKSBjYW4gYmUgYWRkZWQgaGVyZS5cblxuLy8gU2NoZW1hIGlzIGluaXRpYWxpemVkIGRpcmVjdGx5IGluIG9mZnNjcmVlbi50c1xuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTY2hlbWEoKSB7IC4uLiB9ICIsImltcG9ydCB7IHNlbmRNZXNzYWdlLCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgT2xsYW1hQ29uZmlnLCBFbWJlZGRpbmdSZXNwb25zZSB9IGZyb20gJy4uL2xsbVNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QsIExMTUVtYmVkZGluZ1Byb3ZpZGVyLCBQcm92aWRlckVtYmVkZGluZ1JlcXVlc3QsIFByb3ZpZGVyQ2hhdENvbXBsZXRpb25SZXF1ZXN0LCBDaGF0Q29tcGxldGlvblJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIC0tLSBPbGxhbWEgQ2hhdCBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbU9sbGFtYUNoYXQocmVxdWVzdDogUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5ID0gW10sIGNvbmZpZywgc2VuZENodW5rIH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IG9sbGFtYUNvbmZpZyA9IGNvbmZpZyBhcyBPbGxhbWFDb25maWc7IC8vIFR5cGUgYXNzZXJ0aW9uXG5cbiAgICBjb25zdCBtb2RlbCA9IG9sbGFtYUNvbmZpZy5jaGF0TW9kZWw7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBvbGxhbWFDb25maWcuZW5kcG9pbnQucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8gRW5zdXJlIG5vIHRyYWlsaW5nIHNsYXNoXG4gICAgY29uc3QgYXBpVXJsID0gYCR7ZW5kcG9pbnR9L2FwaS9jaGF0YDsgLy8gVXNlIE9sbGFtYSBBUEkgZW5kcG9pbnRcblxuICAgIGNvbnNvbGUubG9nKGBbb2xsYW1hUHJvdmlkZXJdIFNlbmRpbmcgY2hhdCByZXF1ZXN0IHRvICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uaGlzdG9yeSwgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPbGxhbWEgQVBJIGVycm9yICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yQm9keX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICBsZXQgYnVmZmVyID0gJyc7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkgYnJlYWs7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJzsgLy8gS2VlcCBpbmNvbXBsZXRlIGxpbmVcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnRyaW0oKSA9PT0gJycpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IEpTT04ucGFyc2UobGluZSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlQ2h1bms6IE9sbGFtYVN0cmVhbUNodW5rIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2h1bmsubWVzc2FnZT8uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUNodW5rID0geyBzdGF0dXM6ICdjaHVuaycsIGNvbnRlbnQ6IGNodW5rLm1lc3NhZ2UuY29udGVudCB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmsuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgT2xsYW1hJ3MgZG9uZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VDaHVuayA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2RvbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDogY2h1bmsubW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogY2h1bmsuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9kdXJhdGlvbjogY2h1bmsudG90YWxfZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZF9kdXJhdGlvbjogY2h1bmsubG9hZF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRfZXZhbF9jb3VudDogY2h1bmsucHJvbXB0X2V2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0X2V2YWxfZHVyYXRpb246IGNodW5rLnByb21wdF9ldmFsX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWxfY291bnQ6IGNodW5rLmV2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbF9kdXJhdGlvbjogY2h1bmsuZXZhbF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbb2xsYW1hUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIiwgcmVzcG9uc2VDaHVuay5zdGF0cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlQ2h1bmspIHtcbiAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsocmVzcG9uc2VDaHVuayk7IC8vIFVzZSB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW29sbGFtYVByb3ZpZGVyXSBGYWlsZWQgdG8gcGFyc2UgT2xsYW1hIHN0cmVhbSBjaHVuazpcIiwgbGluZSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgIGlmIChidWZmZXIudHJpbSgpKSB7XG4gICAgICAgICBjb25zb2xlLndhcm4oXCJbb2xsYW1hUHJvdmlkZXJdIFN0cmVhbSBlbmRlZCB3aXRoIHVucHJvY2Vzc2VkIGJ1ZmZlcjpcIiwgYnVmZmVyKTtcbiAgICAgfVxufVxuXG4vLyAtLS0gT2xsYW1hIENoYXQgQ29tcGxldGlvbiAoTm9uLVN0cmVhbWluZykgLS0tIFxuXG5hc3luYyBmdW5jdGlvbiBvbGxhbWFDaGF0Q29tcGxldGlvbihyZXF1ZXN0OiBQcm92aWRlckNoYXRDb21wbGV0aW9uUmVxdWVzdCk6IFByb21pc2U8Q2hhdENvbXBsZXRpb25SZXNwb25zZSB8IG51bGw+IHtcbiAgICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSA9IFtdLCBjb25maWcgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3Qgb2xsYW1hQ29uZmlnID0gY29uZmlnIGFzIE9sbGFtYUNvbmZpZztcblxuICAgIGNvbnN0IG1vZGVsID0gb2xsYW1hQ29uZmlnLmNoYXRNb2RlbDtcbiAgICBjb25zdCBlbmRwb2ludCA9IG9sbGFtYUNvbmZpZy5lbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIGNvbnN0IGFwaVVybCA9IGAke2VuZHBvaW50fS9hcGkvY2hhdGA7XG5cbiAgICBjb25zb2xlLmxvZyhgW29sbGFtYVByb3ZpZGVyXSBTZW5kaW5nIE5PTi1TVFJFQU1JTkcgY2hhdCByZXF1ZXN0IHRvICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFsuLi5oaXN0b3J5LCB7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgICAgICAgICAgICAgIHN0cmVhbTogZmFsc2UgLy8gRXhwbGljaXRseSBzZXQgc3RyZWFtIHRvIGZhbHNlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtvbGxhbWFQcm92aWRlcl0gQ2hhdCBDb21wbGV0aW9uIEFQSSBlcnJvciAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtlcnJvckJvZHl9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgb24gQVBJIGVycm9yXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gVmFsaWRhdGUgdGhlIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgICAgICBpZiAoIXJlc3VsdC5tZXNzYWdlIHx8IHR5cGVvZiByZXN1bHQubWVzc2FnZS5jb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2xsYW1hUHJvdmlkZXJdIEludmFsaWQgcmVzcG9uc2UgZm9ybWF0IGZyb20gT2xsYW1hIENoYXQgQVBJIChub24tc3RyZWFtaW5nKS4gJ21lc3NhZ2UuY29udGVudCcgbm90IGZvdW5kIG9yIG5vdCBhIHN0cmluZy5cIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW29sbGFtYVByb3ZpZGVyXSBSZWNlaXZlZCBub24tc3RyZWFtaW5nIHJlc3BvbnNlOlwiLCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gTWFwIHRvIHRoZSBzdGFuZGFyZCBDaGF0Q29tcGxldGlvblJlc3BvbnNlIGZvcm1hdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLCAvLyBBc3N1bWUgcm9sZSBpcyBhc3Npc3RhbnRcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXN1bHQubWVzc2FnZS5jb250ZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzYWdlOiB7XG4gICAgICAgICAgICAgICAgIHByb21wdF90b2tlbnM6IHJlc3VsdC5wcm9tcHRfZXZhbF9jb3VudCxcbiAgICAgICAgICAgICAgICAgY29tcGxldGlvbl90b2tlbnM6IHJlc3VsdC5ldmFsX2NvdW50LFxuICAgICAgICAgICAgICAgICAvLyB0b3RhbF90b2tlbnM6IHJlc3VsdC4/LCAvLyBPbGxhbWEgbWlnaHQgbm90IHByb3ZpZGUgdG90YWwgZGlyZWN0bHkgaW4gbm9uLXN0cmVhbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW5jbHVkZSBvdGhlciBmaWVsZHMgaWYgbmVlZGVkXG4gICAgICAgIH07XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgY29uc29sZS5lcnJvcihcIltvbGxhbWFQcm92aWRlcl0gTmV0d29yayBvciBwYXJzaW5nIGVycm9yIGR1cmluZyBjaGF0IGNvbXBsZXRpb246XCIsIGVycm9yKTtcbiAgICAgICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBvbiBmZXRjaC9wYXJzZSBlcnJvclxuICAgIH1cbn1cblxuLy8gLS0tIE9sbGFtYSBFbWJlZGRpbmcgSW1wbGVtZW50YXRpb24gLS0tIFxuXG5hc3luYyBmdW5jdGlvbiBnZXRPbGxhbWFFbWJlZGRpbmdzKHJlcXVlc3Q6IFByb3ZpZGVyRW1iZWRkaW5nUmVxdWVzdCk6IFByb21pc2U8RW1iZWRkaW5nUmVzcG9uc2U+IHtcbiAgICBjb25zdCB7IGNvbnRlbnQsIGNvbmZpZyB9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBvbGxhbWFDb25maWcgPSBjb25maWcgYXMgT2xsYW1hQ29uZmlnO1xuXG4gICAgaWYgKCFvbGxhbWFDb25maWcuZW1iZWRkaW5nTW9kZWwpIHsgLy8gRG91YmxlIGNoZWNrLCB0aG91Z2ggc2VydmljZSBsYXllciBzaG91bGQgYWxzbyBjaGVja1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2xsYW1hIGNvbmZpZ3VyYXRpb24gbWlzc2luZyByZXF1aXJlZCBlbWJlZGRpbmdNb2RlbC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kZWwgPSBvbGxhbWFDb25maWcuZW1iZWRkaW5nTW9kZWw7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBvbGxhbWFDb25maWcuZW5kcG9pbnQucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICBjb25zdCBhcGlVcmwgPSBgJHtlbmRwb2ludH0vYXBpL2VtYmVkZGluZ3NgO1xuXG4gICAgY29uc29sZS5sb2coYFtvbGxhbWFQcm92aWRlcl0gUmVxdWVzdGluZyBlbWJlZGRpbmdzIGZyb20gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbGxhbWEgZW1iZWRkaW5nIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHNpbmdsZSBzdHJpbmcgaW5wdXQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbi5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBwcm9tcHQ6IGNvbnRlbnQgXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJGYWlsZWQgdG8gcmVhZCBlcnJvciBib2R5XCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9sbGFtYSBFbWJlZGRpbmdzIEFQSSBlcnJvciAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtlcnJvckJvZHl9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKCFyZXN1bHQuZW1iZWRkaW5nIHx8ICFBcnJheS5pc0FycmF5KHJlc3VsdC5lbWJlZGRpbmcpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCBmcm9tIE9sbGFtYSBFbWJlZGRpbmdzIEFQSS4gJ2VtYmVkZGluZycgYXJyYXkgbm90IGZvdW5kLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbWJlZGRpbmdzOiBbcmVzdWx0LmVtYmVkZGluZ10gXG4gICAgfTtcbn1cblxuLy8gRXhwb3J0IHRoZSBwcm92aWRlciBvYmplY3QgYWRoZXJpbmcgdG8gdGhlIGludGVyZmFjZXNcbmV4cG9ydCBjb25zdCBvbGxhbWFQcm92aWRlcjogTExNQ2hhdFByb3ZpZGVyICYgTExNRW1iZWRkaW5nUHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZXJJZDogJ29sbGFtYScsXG4gICAgc3RyZWFtQ2hhdDogc3RyZWFtT2xsYW1hQ2hhdCxcbiAgICBjaGF0Q29tcGxldGlvbjogb2xsYW1hQ2hhdENvbXBsZXRpb24sXG4gICAgZ2V0RW1iZWRkaW5nczogZ2V0T2xsYW1hRW1iZWRkaW5ncyxcbn07ICIsImltcG9ydCB7IHNlbmRNZXNzYWdlLCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgT3BlblJvdXRlckNvbmZpZyB9IGZyb20gJy4uL2xsbVNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gLS0tIE9wZW5Sb3V0ZXIgQ2hhdCBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbU9wZW5Sb3V0ZXJDaGF0KHJlcXVlc3Q6IFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSA9IFtdLCBjb25maWcsIHNlbmRDaHVuayB9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBvcGVuUm91dGVyQ29uZmlnID0gY29uZmlnIGFzIE9wZW5Sb3V0ZXJDb25maWc7IC8vIFR5cGUgYXNzZXJ0aW9uXG5cbiAgICBjb25zdCBtb2RlbCA9IG9wZW5Sb3V0ZXJDb25maWcuY2hhdE1vZGVsO1xuICAgIGNvbnN0IGFwaUtleSA9IG9wZW5Sb3V0ZXJDb25maWcuYXBpS2V5O1xuICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9vcGVucm91dGVyLmFpL2FwaS92MS9jaGF0L2NvbXBsZXRpb25zXCI7XG5cbiAgICBjb25zb2xlLmxvZyhgW29wZW5Sb3V0ZXJQcm92aWRlcl0gU2VuZGluZyBjaGF0IHJlcXVlc3QgdG8gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthcGlLZXl9YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAvLyBUT0RPOiBDb25zaWRlciBhZGRpbmcgdGhlc2UgaGVhZGVycyBpZiBkZXNpcmVkXG4gICAgICAgICAgICAvLyAnSFRUUC1SZWZlcmVyJzogJycsIC8vIFlPVVJfU0lURV9VUkxcbiAgICAgICAgICAgIC8vICdYLVRpdGxlJzogJycsIC8vIFlPVVJfU0lURV9OQU1FXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uaGlzdG9yeSwgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8ICFyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIkZhaWxlZCB0byByZWFkIGVycm9yIGJvZHlcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlblJvdXRlciBBUEkgZXJyb3IgKCR7cmVzcG9uc2Uuc3RhdHVzfSk6ICR7ZXJyb3JCb2R5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBidWZmZXIgPSAnJztcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgLy8gT3BlblJvdXRlciB1c2VzIFNlcnZlci1TZW50IEV2ZW50cyAoU1NFKSBmb3JtYXRcbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lOiByZWFkZXJEb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgZG9uZSA9IHJlYWRlckRvbmU7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ2RhdGE6ICcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUNvbnRlbnQgPSBsaW5lLnN1YnN0cmluZyg2KS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFDb250ZW50ID09PSAnW0RPTkVdJykge1xuICAgICAgICAgICAgICAgICAgICAgc2VuZENodW5rKHsgc3RhdHVzOiAnZG9uZScsIHN0YXRzOiB7fSB9KTsgLy8gU2VuZCBzaW1wbGUgZG9uZSBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltvcGVuUm91dGVyUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgLy8gRW5zdXJlIG91dGVyIGxvb3AgdGVybWluYXRlc1xuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIEV4aXQgaW5uZXIgbG9vcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBKU09OLnBhcnNlKGRhdGFDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNodW5rLmNob2ljZXM/LlswXT8uZGVsdGE/LmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsoeyBzdGF0dXM6ICdjaHVuaycsIGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogRXh0cmFjdCB1c2FnZSBzdGF0cyBpZiBuZWVkZWQ/XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltvcGVuUm91dGVyUHJvdmlkZXJdIEZhaWxlZCB0byBwYXJzZSBzdHJlYW0gY2h1bms6XCIsIGRhdGFDb250ZW50LCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJ1ZmZlci50cmltKCkpIHsgXG4gICAgICAgIGNvbnNvbGUud2FybihcIltvcGVuUm91dGVyUHJvdmlkZXJdIFN0cmVhbSBlbmRlZCB3aXRoIHVucHJvY2Vzc2VkIGJ1ZmZlcjpcIiwgYnVmZmVyKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydCB0aGUgcHJvdmlkZXIgb2JqZWN0IGFkaGVyaW5nIHRvIHRoZSBpbnRlcmZhY2VcbmV4cG9ydCBjb25zdCBvcGVuUm91dGVyUHJvdmlkZXI6IExMTUNoYXRQcm92aWRlciA9IHtcbiAgICBwcm92aWRlcklkOiAnb3BlbnJvdXRlcicsXG4gICAgc3RyZWFtQ2hhdDogc3RyZWFtT3BlblJvdXRlckNoYXQsXG4gICAgLy8gTm8gZ2V0RW1iZWRkaW5ncyBmb3IgT3BlblJvdXRlciBpbiB0aGlzIGV4YW1wbGUgeWV0XG59OyAiLCIvLyBzcmMvc2VydmljZXMvbGxtU2VydmljZS50c1xuXG5pbXBvcnQgeyBxdWVyeURiIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGInOyAvLyBUbyBsb2FkIGNvbmZpZ1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnaW5nJzsgLy8gRm9yIHN0cmVhbWluZyByZXNwb25zZXMgYmFja1xuaW1wb3J0IHR5cGUgeyBMTE1Qcm92aWRlciwgTExNQ2hhdFByb3ZpZGVyLCBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0LCBMTE1FbWJlZGRpbmdQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL3R5cGVzJztcblxuLy8gQWRkIHByb3ZpZGVyIGltcG9ydHNcbmltcG9ydCB7IG9sbGFtYVByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvb2xsYW1hJztcbmltcG9ydCB7IG9wZW5Sb3V0ZXJQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL29wZW5yb3V0ZXInO1xuXG4vLyAtLS0gQ29uZmlndXJhdGlvbiBUeXBlcyAtLS1cblxuLy8gUmV1c2UgQ2hhdE1lc3NhZ2UgZnJvbSBtZXNzYWdpbmcudHMgaWYgc3VpdGFibGUsIG9yIHJlZGVmaW5lIGlmIG5lZWRlZFxuaW1wb3J0IHR5cGUgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lc3NhZ2luZyc7XG5cbi8vIEJhc2UgY29uZmlndXJhdGlvbiBzdHJ1Y3R1cmUgKHlvdSBtaWdodCBzdG9yZSB0aGlzIGFzIEpTT04gaW4gdGhlIERCKVxuZXhwb3J0IGludGVyZmFjZSBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6IExMTVByb3ZpZGVyO1xuICBjaGF0TW9kZWw6IHN0cmluZztcbiAgZW1iZWRkaW5nTW9kZWw/OiBzdHJpbmc7IC8vIE9wdGlvbmFsLCBtaWdodCBub3QgYmUgbmVlZGVkIGZvciBhbGwgcHJvdmlkZXJzIG9yIHNlcGFyYXRlIGNvbmZpZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9sbGFtYUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ29sbGFtYSc7XG4gIGVuZHBvaW50OiBzdHJpbmc7IC8vIGUuZy4sIGh0dHA6Ly9sb2NhbGhvc3Q6MTE0MzRcbiAgLy8gZW1iZWRkaW5nTW9kZWwgaXMgcmVxdWlyZWQgZm9yIGxvY2FsIE9sbGFtYSBlbWJlZGRpbmdcbiAgZW1iZWRkaW5nTW9kZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuUm91dGVyQ29uZmlnIGV4dGVuZHMgTExNQ29uZmlnQmFzZSB7XG4gIHByb3ZpZGVyOiAnb3BlbnJvdXRlcic7XG4gIGFwaUtleTogc3RyaW5nO1xuICAvLyBPcGVuUm91dGVyIG1pZ2h0IHVzZSBzcGVjaWZpYyBtb2RlbCBpZGVudGlmaWVycyBkaWZmZXJlbnQgZnJvbSBPbGxhbWFcbiAgLy8gRW1iZWRkaW5nIG1vZGVsIG1pZ2h0IGJlIGltcGxpY2l0IG9yIGEgc3BlY2lmaWMgb25lIGlmIHRoZXkgb2ZmZXIgaXRcbn1cblxuLy8gQWRkIFZlbmljZUNvbmZpZyAoZXZlbiBpZiBlbXB0eSBmb3Igbm93KVxuZXhwb3J0IGludGVyZmFjZSBWZW5pY2VDb25maWcgZXh0ZW5kcyBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6ICd2ZW5pY2UnO1xuICBhcGlLZXk/OiB1bmRlZmluZWQ7IC8vIE5vIEFQSSBrZXkgbmVlZGVkXG4gIGVtYmVkZGluZ01vZGVsPzogdW5kZWZpbmVkO1xuICAvLyBBZGQgd2FsbGV0IGFkZHJlc3Mgb3Igb3RoZXIgcmVsZXZhbnQgZmllbGRzIGxhdGVyXG59XG5cbmV4cG9ydCB0eXBlIExMTVVzZXJDb25maWcgPSBPbGxhbWFDb25maWcgfCBPcGVuUm91dGVyQ29uZmlnIHwgVmVuaWNlQ29uZmlnOyAvLyBVbmlvbiB0eXBlXG5cbi8vIC0tLSBTZXJ2aWNlIEFyZ3VtZW50IFR5cGVzIC0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbUNoYXRSZXF1ZXN0IHtcbiAgcHJvbXB0OiBzdHJpbmc7XG4gIGhpc3Rvcnk/OiBDaGF0TWVzc2FnZVtdO1xuICBjb25maWc6IExMTVVzZXJDb25maWc7IC8vIFBhc3MgdGhlIGxvYWRlZCBjb25maWdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRpbmdSZXF1ZXN0IHtcbiAgY29udGVudDogc3RyaW5nW10gfCBzdHJpbmc7IC8vIEFsbG93IHNpbmdsZSBzdHJpbmcgb3IgYXJyYXlcbiAgY29uZmlnOiBMTE1Vc2VyQ29uZmlnO1xufVxuXG4vLyAtLS0gU2VydmljZSBSZXNwb25zZSBUeXBlcyAtLS1cblxuLy8gRm9yIGNoYXQsIHdlIHN0cmVhbSBPbGxhbWFTdHJlYW1DaHVuayB2aWEgc2VuZE1lc3NhZ2Vcbi8vIEZvciBlbWJlZGRpbmdzLCB3ZSByZXR1cm4gdGhlIHZlY3RvcnMgZGlyZWN0bHlcbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkaW5nUmVzcG9uc2Uge1xuICBlbWJlZGRpbmdzOiBudW1iZXJbXVtdOyAvLyBBcnJheSBvZiBlbWJlZGRpbmcgdmVjdG9yc1xufVxuXG5cbi8vIC0tLSBTZXJ2aWNlIEludGVyZmFjZSAoQ29uY2VwdHVhbCAtIGltcGxlbWVudGF0aW9uIGZvbGxvd3MpIC0tLVxuXG4vKipcbiAqIExvYWRzIHRoZSB1c2VyJ3MgTExNIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgZGF0YWJhc2UuXG4gKi9cbmxldCB1c2VyQ29uZmlnQ2FjaGU6IExMTVVzZXJDb25maWcgfCBudWxsID0gbnVsbDtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkVXNlckNvbmZpZygpOiBQcm9taXNlPExMTVVzZXJDb25maWcgfCBudWxsPiB7XG4gIGlmICh1c2VyQ29uZmlnQ2FjaGUpIHJldHVybiB1c2VyQ29uZmlnQ2FjaGU7XG4gIGNvbnNvbGUubG9nKCdbbGxtU2VydmljZV0gTG9hZGluZyB1c2VyIGNvbmZpZ3VyYXRpb24gZnJvbSBEQi4uLicpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5RGIoJ1NFTEVDVCBjb25maWdfanNvbiBGUk9NIHVzZXJfY29uZmlndXJhdGlvbiBXSEVSRSBpZCA9IDE7Jyk7XG4gICAgaWYgKHJlc3VsdD8ucm93cz8uWzBdPy5jb25maWdfanNvbikge1xuICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShyZXN1bHQucm93c1swXS5jb25maWdfanNvbik7XG4gICAgICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIExvYWRlZCBjb25maWc6JywgY29uZmlnKTtcbiAgICAgIHVzZXJDb25maWdDYWNoZSA9IGNvbmZpZzsgLy8gQ2FjaGUgdGhlIGxvYWRlZCBjb25maWdcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignW2xsbVNlcnZpY2VdIE5vIGNvbmZpZ3VyYXRpb24gZm91bmQgaW4gZGF0YWJhc2UuJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW2xsbVNlcnZpY2VdIEVycm9yIGxvYWRpbmcgY29uZmlndXJhdGlvbjonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuXG4vKipcbiAqIEhhbmRsZXMgc3RyZWFtaW5nIGNoYXQgcmVzcG9uc2VzIGZyb20gdGhlIGNvbmZpZ3VyZWQgTExNIHByb3ZpZGVyLlxuICogU2VuZHMgY2h1bmtzIGJhY2sgdmlhIHNlbmRNZXNzYWdlKCdvbGxhbWFSZXNwb25zZScsIGNodW5rKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0cmVhbUNoYXRSZXNwb25zZShyZXF1ZXN0OiB7IHByb21wdDogc3RyaW5nOyBoaXN0b3J5OiBhbnlbXTsgY29uZmlnOiBMTE1Vc2VyQ29uZmlnIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBwcm9tcHQsIGhpc3RvcnksIGNvbmZpZyB9ID0gcmVxdWVzdDtcbiAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBSb3V0aW5nIGNoYXQgc3RyZWFtIGZvciBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG4gIGNvbnN0IHByb3ZpZGVyID0gZ2V0UHJvdmlkZXIoY29uZmlnKTtcbiAgaWYgKCFwcm92aWRlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvdmlkZXI6ICR7Y29uZmlnLnByb3ZpZGVyfWApO1xuICB9XG4gIGlmICghcHJvdmlkZXIuc3RyZWFtQ2hhdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUHJvdmlkZXIgJHtjb25maWcucHJvdmlkZXJ9IGRvZXMgbm90IHN1cHBvcnQgc3RyZWFtaW5nIGNoYXQuYCk7XG4gIH1cbiAgY29uc3QgcHJvdmlkZXJSZXF1ZXN0OiBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0ID0ge1xuICAgIHByb21wdCxcbiAgICBoaXN0b3J5LFxuICAgIGNvbmZpZyxcbiAgICBzZW5kQ2h1bms6IChjaHVuaykgPT4ge1xuICAgICAgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywgY2h1bmspLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIGNodW5rIHRvIFVJOlwiLCBlKSk7XG4gICAgfVxuICB9O1xuICB0cnkge1xuICAgIGF3YWl0IHByb3ZpZGVyLnN0cmVhbUNoYXQocHJvdmlkZXJSZXF1ZXN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gRXJyb3IgZHVyaW5nIHN0cmVhbUNoYXQgZm9yICR7Y29uZmlnLnByb3ZpZGVyfTpgLCBlcnJvcik7XG4gICAgLy8gRW5zdXJlIHRoZSBlcnJvciBvYmplY3QgY29uZm9ybXMgdG8gT2xsYW1hU3RyZWFtQ2h1bmtcbiAgICBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsIC8vIENvcnJlY3RseSB1c2UgdGhlIHN0YXR1cyBmaWVsZFxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKVxuICAgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIGVycm9yIGNodW5rIHRvIFVJOlwiLCBlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIGVtYmVkZGluZ3MgZm9yIHRoZSBnaXZlbiBjb250ZW50IHVzaW5nIHRoZSBjb25maWd1cmVkIHByb3ZpZGVyLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1iZWRkaW5ncyhyZXF1ZXN0OiBFbWJlZGRpbmdSZXF1ZXN0KTogUHJvbWlzZTxFbWJlZGRpbmdSZXNwb25zZT4ge1xuICAgY29uc3QgeyBjb25maWcgfSA9IHJlcXVlc3Q7XG5cbiAgIGlmICghY29uZmlnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIGdldEVtYmVkZGluZ3MgY2FsbGVkIHdpdGggbnVsbCBjb25maWcuXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMTE0gY29uZmlndXJhdGlvbiBpcyBtaXNzaW5nLicpO1xuICAgfVxuXG4gICBjb25zb2xlLmxvZyhgW2xsbVNlcnZpY2VdIFJvdXRpbmcgZW1iZWRkaW5ncyByZXF1ZXN0IGZvciBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG5cbiAgIHRyeSB7XG4gICAgICAgbGV0IHByb3ZpZGVyTW9kdWxlOiBMTE1FbWJlZGRpbmdQcm92aWRlcjtcblxuICAgICAgIC8vIFVzZSBzd2l0Y2ggc3RhdGVtZW50IGZvciBwcm92aWRlciByb3V0aW5nXG4gICAgICAgc3dpdGNoIChjb25maWcucHJvdmlkZXIpIHtcbiAgICAgICAgIGNhc2UgJ29sbGFtYSc6IHtcbiAgICAgICAgICAgY29uc3QgeyBvbGxhbWFQcm92aWRlciB9ID0gYXdhaXQgaW1wb3J0KCcuL3Byb3ZpZGVycy9vbGxhbWEnKTtcbiAgICAgICAgICAgaWYgKCEoJ2dldEVtYmVkZGluZ3MnIGluIG9sbGFtYVByb3ZpZGVyKSkgdGhyb3cgbmV3IEVycm9yKCdPbGxhbWEgcHJvdmlkZXIgZG9lcyBub3Qgc3VwcG9ydCBnZXRFbWJlZGRpbmdzJyk7XG4gICAgICAgICAgIHByb3ZpZGVyTW9kdWxlID0gb2xsYW1hUHJvdmlkZXIgYXMgTExNRW1iZWRkaW5nUHJvdmlkZXI7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgfVxuICAgICAgICAgY2FzZSAnb3BlbnJvdXRlcic6XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb25maWcucHJvdmlkZXJ9IGVtYmVkZGluZ3Mgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcbiAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBVbnN1cHBvcnRlZCBwcm92aWRlciBmb3IgZW1iZWRkaW5nc1wiKTtcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgTExNIHByb3ZpZGVyIGZvciBlbWJlZGRpbmdzXCIpO1xuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIC8vIENhbGwgdGhlIHByb3ZpZGVyJ3MgbWV0aG9kIChwcm92aWRlck1vZHVsZSBpcyBndWFyYW50ZWVkIHRvIGJlIGFzc2lnbmVkIGlmIG5vdCB0aHJvd24pXG4gICAgICAgcmV0dXJuIGF3YWl0IHByb3ZpZGVyTW9kdWxlLmdldEVtYmVkZGluZ3MocmVxdWVzdCk7XG5cbiAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW2xsbVNlcnZpY2VdIEVycm9yIGR1cmluZyBlbWJlZGRpbmcgcm91dGluZyBvciBleGVjdXRpb246YCwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVtYmVkZGluZyBTZXJ2aWNlIEVycm9yOiAke2Vycm9yLm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKX1gKTtcbiAgIH1cbn1cblxuLy8gUmVtb3ZlIG9sZCBwcm92aWRlciBpbXBsZW1lbnRhdGlvbnMgXG5cbi8vIC0tLSBOZXcgRmxhc2hjYXJkIEdlbmVyYXRpb24gRnVuY3Rpb24gLS0tXG5cbi8vIERlZmluZSB0aGUgZXhwZWN0ZWQgc3RydWN0dXJlIG9mIHRoZSBKU09OIHJlc3BvbnNlIGZyb20gdGhlIExMTVxuaW50ZXJmYWNlIEZsYXNoY2FyZEdlbmVyYXRpb25SZXNwb25zZSB7XG4gIGZyb250QmFjazoge1xuICAgIGZyb250OiBzdHJpbmc7XG4gICAgYmFjazogc3RyaW5nO1xuICB9O1xuICBjbG96ZToge1xuICAgIHRleHQ6IHN0cmluZztcbiAgfTtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgcHJvbXB0IChVcGRhdGVkIGZvciBSZWFkYWJpbGl0eSAmIENsYXJpdHkpXG5mdW5jdGlvbiBjcmVhdGVGbGFzaGNhcmRQcm9tcHQoc2VsZWN0ZWRUZXh0OiBzdHJpbmcsIHNvdXJjZVVybD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gVXNlIGEgbXVsdGktbGluZSB0ZW1wbGF0ZSBsaXRlcmFsIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHlcbiAgICBsZXQgcHJvbXB0ID0gYFxuR2VuZXJhdGUgdHdvIHR5cGVzIG9mIGZsYXNoY2FyZHMgZnJvbSB0aGUgdGV4dCBiZWxvdzogYSBjb25jaXNlIFwiRmxhc2hjYXJkXCIgKEZyb250L0JhY2spIGFuZCBhIFwiQ2xvemVcIiBkZWxldGlvbiBjYXJkLlxuXG5UZXh0IFNlbGVjdGlvbjpcblwiXCJcIlxuJHtzZWxlY3RlZFRleHR9XG5cIlwiXCJcbiR7c291cmNlVXJsID8gYFxcXFxuU291cmNlIFVSTCAoZm9yIGNvbnRleHQpOiAke3NvdXJjZVVybH1gIDogJyd9XG5cbkluc3RydWN0aW9uczpcblxuMS4gICoqRmxhc2hjYXJkIChGcm9udC9CYWNrKToqKlxuICAgICogICBGcm9udDogQSBzaG9ydCB0b3BpYyBvciBjb25jZXB0IChtYXggOCB3b3JkcykuXG4gICAgKiAgIEJhY2s6IEEgY29uY2lzZSBmYWN0IG9yIGRlZmluaXRpb24gcmVsYXRlZCB0byB0aGUgZnJvbnQgKG1heCA4IHdvcmRzKS5cbiAgICAqICAgKipJTVBPUlRBTlQ6KiogRG8gTk9UIGluY2x1ZGUgdHJhaWxpbmcgcHVuY3R1YXRpb24uIEJhY2sgc2hvdWxkIE9OTFkgY29udGFpbiB0aGUgZmFjdCwgbm8gZmlsbGVyLlxuXG4yLiAgKipDbG96ZSBDYXJkOioqXG4gICAgKiAgIENyZWF0ZSBhIHNpbmdsZSBzZW50ZW5jZSB1c2luZyB0aGUgbWFpbiBpZGVhLlxuICAgICogICBSZXBsYWNlIHRoZSBzaW5nbGUgbW9zdCAqbWVhbmluZ2Z1bCoga2V5d29yZC9waHJhc2Ugd2l0aCB7e2MxOjphbnN3ZXJ9fS5cbiAgICAqICAgKipBVk9JRCoqIGRlbGV0aW5nIHRyaXZpYWwgd29yZHMgKHRoZSwgaXMsIGEpIG9yIHRoZSBvYnZpb3VzIG1haW4gc3ViamVjdC5cblxuMy4gICoqT3V0cHV0IEZvcm1hdDoqKlxuICAgICogICBSZXR1cm4gT05MWSBhIHZhbGlkIEpTT04gb2JqZWN0LiBObyBleHRyYSB0ZXh0LCBleHBsYW5hdGlvbnMsIG9yIG1hcmtkb3duLlxuICAgICogICBVc2UgdGhpcyBFWEFDVCBzdHJ1Y3R1cmU6XG4gICAgXFxgXFxgXFxganNvblxuICAgIHtcbiAgICAgIFwiZmxhc2hjYXJkXCI6IHsgXCJmcm9udFwiOiBcInRvcGljL2NvbmNlcHRcIiwgXCJiYWNrXCI6IFwiY29uY2lzZSBmYWN0XCIgfSxcbiAgICAgIFwiY2xvemVcIjogeyBcInRleHRcIjogXCJTZW50ZW5jZSB3aXRoIHt7YzE6OmFuc3dlcn19IGRlbGV0aW9uLlwiIH1cbiAgICB9XG4gICAgXFxgXFxgXFxgXG5cbkV4YW1wbGVzOlxuXG4tLS0gRXhhbXBsZSAxIC0tLVxuSW5wdXQgVGV4dDogXCJUaGUgRWlmZmVsIFRvd2VyLCBsb2NhdGVkIGluIFBhcmlzLCBGcmFuY2UsIHdhcyBjb21wbGV0ZWQgaW4gMTg4OS5cIlxuT3V0cHV0IEpTT046XG5cXGBcXGBcXGBqc29uXG57XG4gIFwiZmxhc2hjYXJkXCI6IHsgXCJmcm9udFwiOiBcIkVpZmZlbCBUb3dlciBMb2NhdGlvblwiLCBcImJhY2tcIjogXCJQYXJpcywgRnJhbmNlXCIgfSxcbiAgXCJjbG96ZVwiOiB7IFwidGV4dFwiOiBcIlRoZSBFaWZmZWwgVG93ZXIsIGxvY2F0ZWQgaW4gUGFyaXMsIEZyYW5jZSwgd2FzIGNvbXBsZXRlZCBpbiB7e2MxOjoxODg5fX1cIiB9XG59XG5cXGBcXGBcXGBcbihGbGFzaGNhcmQ6IEdvb2QgLSBjb25jaXNlIHRvcGljL2ZhY3QuIENsb3plOiBHb29kIC0gc3BlY2lmaWMgZGV0YWlsIGRlbGV0ZWQuKVxuXG4tLS0gRXhhbXBsZSAyIC0tLVxuSW5wdXQgVGV4dDogXCJQaG90b3N5bnRoZXNpcyBpcyB0aGUgcHJvY2VzcyB1c2VkIGJ5IHBsYW50cyB0byBjb252ZXJ0IGxpZ2h0IGVuZXJneSBpbnRvIGNoZW1pY2FsIGVuZXJneS5cIlxuT3V0cHV0IEpTT046XG5cXGBcXGBcXGBqc29uXG57XG4gIFwiZmxhc2hjYXJkXCI6IHsgXCJmcm9udFwiOiBcIlBob3Rvc3ludGhlc2lzXCIsIFwiYmFja1wiOiBcIkNvbnZlcnRzIGxpZ2h0IHRvIGNoZW1pY2FsIGVuZXJneVwiIH0sXG4gIFwiY2xvemVcIjogeyBcInRleHRcIjogXCJQaG90b3N5bnRoZXNpcyBpcyB0aGUgcHJvY2VzcyB1c2VkIGJ5IHBsYW50cyB0byBjb252ZXJ0IHt7YzE6OmxpZ2h0IGVuZXJneX19IGludG8gY2hlbWljYWwgZW5lcmd5XCIgfVxufVxuXFxgXFxgXFxgXG4oRmxhc2hjYXJkOiBHb29kIC0gY29uY2VwdC9kZWZpbml0aW9uLiBDbG96ZTogR29vZCAtIGtleSBjb25jZXB0IGRlbGV0ZWQuKVxuXG4tLS0gRXhhbXBsZSAzIC0tLVxuSW5wdXQgVGV4dDogXCJUaGUgV2FjaG93c2tpcyB3cm90ZSBhbmQgZGlyZWN0ZWQgdGhlIE1hdHJpeCBmaWxtIHNlcmllcy5cIlxuT3V0cHV0IEpTT046XG5cXGBcXGBcXGBqc29uXG57XG4gIFwiZmxhc2hjYXJkXCI6IHsgXCJmcm9udFwiOiBcIlRoZSBNYXRyaXggRGlyZWN0b3JzXCIsIFwiYmFja1wiOiBcIlRoZSBXYWNob3dza2lzXCIgfSxcbiAgXCJjbG96ZVwiOiB7IFwidGV4dFwiOiBcIlRoZSB7e2MxOjpXYWNob3dza2lzfX0gd3JvdGUgYW5kIGRpcmVjdGVkIHRoZSBNYXRyaXggZmlsbSBzZXJpZXNcIiB9XG59XG5cXGBcXGBcXGBcbihGbGFzaGNhcmQ6IEdvb2QgLSBzcGVjaWZpYyByb2xlLiBDbG96ZTogQmV0dGVyIC0gZGVsZXRlZCB0aGUgZGlyZWN0b3JzIGluc3RlYWQgb2YgdGhlIHRyaXZpYWwgJ01hdHJpeCcuKVxuXG4tLS0gRXhhbXBsZSA0IChCYWQgRXhhbXBsZXMpIC0tLVxuSW5wdXQgVGV4dDogXCJSZWFjdCBpcyBhIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzLlwiXG5CYWQgRmxhc2hjYXJkIEJhY2s6IFwiUmVhY3QgaXMgYSBKUyBsaWJyYXJ5IGZvciBVSXMuXCIgKFRyYWlsaW5nIHBlcmlvZClcbkJhZCBGbGFzaGNhcmQgQmFjazogXCJJdCBpcyBhIGxpYnJhcnkgZm9yIGJ1aWxkaW5nIFVJc1wiIChFeGNlZWRzIDggd29yZHMsIGZpbGxlcilcbkJhZCBDbG96ZTogXCJSZWFjdCBpcyBhIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcge3tjMTo6dXNlciBpbnRlcmZhY2VzfX1cIiAoT2theSwgYnV0IGxlc3MgaWRlYWwgdGhhbiBkZWxldGluZyAnSmF2YVNjcmlwdCBsaWJyYXJ5JylcbkJhZCBDbG96ZTogXCJ7e2MxOjpSZWFjdH19IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMuXCIgKFRyaXZpYWwgZGVsZXRpb24gb2YgbWFpbiBzdWJqZWN0KVxuXG5Ob3csIGdlbmVyYXRlIHRoZSBmbGFzaGNhcmRzIGZvciB0aGUgcHJvdmlkZWQgdGV4dCBzZWxlY3Rpb24uIE91dHB1dCBPTkxZIHRoZSBKU09OIG9iamVjdDpcbmA7XG4gICAgcmV0dXJuIHByb21wdC50cmltKCk7IC8vIFRyaW0gbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIGZyb20gdGhlIHRlbXBsYXRlIGxpdGVyYWxcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmcm9udC9iYWNrIGFuZCBjbG96ZSBmbGFzaGNhcmQgcGFpciBmcm9tIHNlbGVjdGVkIHRleHQgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgTExNLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVGbGFzaGNhcmRQYWlyKHNlbGVjdGVkVGV4dDogc3RyaW5nLCBzb3VyY2VVcmw/OiBzdHJpbmcpOiBQcm9taXNlPEZsYXNoY2FyZEdlbmVyYXRpb25SZXNwb25zZSB8IG51bGw+IHtcbiAgICBjb25zb2xlLmxvZyhgW2xsbVNlcnZpY2VdIEdlbmVyYXRpbmcgZmxhc2hjYXJkIHBhaXIgZm9yIHRleHQ6IFxcXCIke3NlbGVjdGVkVGV4dC5zdWJzdHJpbmcoMCwgNTApfS4uLlxcXCJgKTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRVc2VyQ29uZmlnKCk7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gQ2Fubm90IGdlbmVyYXRlIGZsYXNoY2FyZHM6IExMTSBjb25maWcgbm90IGxvYWRlZC5cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21wdCA9IGNyZWF0ZUZsYXNoY2FyZFByb21wdChzZWxlY3RlZFRleHQsIHNvdXJjZVVybCk7XG4gICAgbGV0IHByb3ZpZGVyTW9kdWxlOiBMTE1DaGF0UHJvdmlkZXIgfCBudWxsID0gbnVsbDtcblxuICAgIC8vIEZpbmQgdGhlIHByb3ZpZGVyIG1vZHVsZSAoc2ltaWxhciB0byBzdHJlYW1DaGF0UmVzcG9uc2UpXG4gICAgdHJ5IHtcbiAgICAgICAgc3dpdGNoIChjb25maWcucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ29sbGFtYSc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG9sbGFtYVByb3ZpZGVyIH0gPSBhd2FpdCBpbXBvcnQoJy4vcHJvdmlkZXJzL29sbGFtYScpO1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyTW9kdWxlID0gb2xsYW1hUHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdvcGVucm91dGVyJzoge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtaW5nIE9wZW5Sb3V0ZXIgcHJvdmlkZXIgZXhpc3RzIGFuZCBpbXBsZW1lbnRzIGNoYXRDb21wbGV0aW9uXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgeyBvcGVuUm91dGVyUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb3BlbnJvdXRlcicpO1xuICAgICAgICAgICAgICAgIC8vIHByb3ZpZGVyTW9kdWxlID0gb3BlblJvdXRlclByb3ZpZGVyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk9wZW5Sb3V0ZXIgZmxhc2hjYXJkIGdlbmVyYXRpb24gbm90IHlldCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgb3RoZXIgcHJvdmlkZXJzIGlmIHRoZXkgc3VwcG9ydCBjaGF0Q29tcGxldGlvblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIFVuc3VwcG9ydGVkIHByb3ZpZGVyIGZvciBub24tc3RyZWFtaW5nIGNoYXQ6XCIsIGNvbmZpZy5wcm92aWRlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByb3ZpZGVyTW9kdWxlPy5jaGF0Q29tcGxldGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBQcm92aWRlciAke2NvbmZpZy5wcm92aWRlcn0gZG9lcyBub3Qgc3VwcG9ydCB0aGUgcmVxdWlyZWQgJ2NoYXRDb21wbGV0aW9uJyBtZXRob2QuYCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2UgdGhlIG5vbi1zdHJlYW1pbmcgY2hhdCByZXF1ZXN0XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBTZW5kaW5nIHJlcXVlc3QgdG8gcHJvdmlkZXIgY2hhdENvbXBsZXRpb24uLi5cIik7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvdmlkZXJNb2R1bGUuY2hhdENvbXBsZXRpb24oe1xuICAgICAgICAgICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIGhpc3Rvcnk6IFtdLCAvLyBObyBoaXN0b3J5IG5lZWRlZCBmb3IgdGhpcyBzcGVjaWZpYyB0YXNrXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2U/Lm1lc3NhZ2U/LmNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIExMTSByZXNwb25zZSB3YXMgZW1wdHkgb3IgaW52YWxpZC5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gcGFyc2UgdGhlIEpTT04gZnJvbSB0aGUgcmVzcG9uc2UgY29udGVudFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ2xlYW4gcG90ZW50aWFsIG1hcmtkb3duIGNvZGUgZmVuY2VzXG4gICAgICAgICAgICBjb25zdCBjbGVhbmVkQ29udGVudCA9IHJlc3BvbnNlLm1lc3NhZ2UuY29udGVudC5yZXBsYWNlKC9gYGBqc29uXFxcXG4/fGBgYC9nLCAnJykudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSnNvbiA9IEpTT04ucGFyc2UoY2xlYW5lZENvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBCYXNpYyB2YWxpZGF0aW9uIG9mIHRoZSBwYXJzZWQgc3RydWN0dXJlXG4gICAgICAgICAgICBpZiAocGFyc2VkSnNvbi5mcm9udEJhY2s/LmZyb250ICYmIHBhcnNlZEpzb24uZnJvbnRCYWNrPy5iYWNrICYmIHBhcnNlZEpzb24uY2xvemU/LnRleHQpIHtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIFN1Y2Nlc3NmdWxseSBwYXJzZWQgZmxhc2hjYXJkIEpTT046XCIsIHBhcnNlZEpzb24pO1xuICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkSnNvbiBhcyBGbGFzaGNhcmRHZW5lcmF0aW9uUmVzcG9uc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBQYXJzZWQgSlNPTiBsYWNrcyBleHBlY3RlZCBzdHJ1Y3R1cmU6XCIsIHBhcnNlZEpzb24pO1xuICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gRmFpbGVkIHRvIHBhcnNlIEpTT04gZnJvbSBMTE0gcmVzcG9uc2U6XCIsIHBhcnNlRXJyb3IsIFwiUmF3IGNvbnRlbnQ6XCIsIHJlc3BvbnNlLm1lc3NhZ2UuY29udGVudCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gRXJyb3IgZHVyaW5nIGZsYXNoY2FyZCBnZW5lcmF0aW9uOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbiB0byBnZXQgUHJvdmlkZXIgLS0tIFxuLy8gKEFzc3VtZXMgVXNlckNvbmZpZyBoYXMgYSBwcm92aWRlciBmaWVsZCBsaWtlICdvbGxhbWEnIG9yICdvcGVucm91dGVyJylcbmZ1bmN0aW9uIGdldFByb3ZpZGVyKGNvbmZpZzogTExNVXNlckNvbmZpZyk6IExMTUNoYXRQcm92aWRlciB8IG51bGwge1xuICAgIHN3aXRjaCAoY29uZmlnLnByb3ZpZGVyKSB7XG4gICAgICAgIGNhc2UgJ29sbGFtYSc6XG4gICAgICAgICAgICByZXR1cm4gb2xsYW1hUHJvdmlkZXI7XG4gICAgICAgIGNhc2UgJ29wZW5yb3V0ZXInOlxuICAgICAgICAgICAgcmV0dXJuIG9wZW5Sb3V0ZXJQcm92aWRlcjtcbiAgICAgICAgLy8gQWRkIGNhc2VzIGZvciBvdGhlciBwcm92aWRlcnMgbGlrZSAnbG1zdHVkaW8nLCAnamFuJyBpZiB0aGV5IGhhdmUgc3BlY2lmaWMgcHJvdmlkZXIgb2JqZWN0c1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gSGFuZGxlIGxvY2FsIHByb3ZpZGVycyB0aGF0IG1pZ2h0IHNoYXJlIE9sbGFtYSBsb2dpYyBidXQgaGF2ZSBkaWZmZXJlbnQgSURzXG4gICAgICAgICAgICBpZiAoKGNvbmZpZyBhcyBhbnkpLmVuZHBvaW50KSB7IFxuICAgICAgICAgICAgICAgIC8vIElmIGVuZHBvaW50IGV4aXN0cywgYXNzdW1lIGl0IG1pZ2h0IGJlIGFuIE9sbGFtYS1jb21wYXRpYmxlIEFQSVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlZmluZSB0aGlzIGxvZ2ljIGlmIGxvY2FsIHByb3ZpZGVycyBuZWVkIGRpc3RpbmN0IGhhbmRsaW5nXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbbGxtU2VydmljZV0gVXNpbmcgb2xsYW1hUHJvdmlkZXIgZm9yIHBvdGVudGlhbGx5IGNvbXBhdGlibGUgcHJvdmlkZXI6ICR7Y29uZmlnLnByb3ZpZGVyfWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGxhbWFQcm92aWRlcjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gVW5zdXBwb3J0ZWQgcHJvdmlkZXIgZm91bmQgaW4gY29uZmlnOiAke2NvbmZpZy5wcm92aWRlcn1gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLy8gLS0tIEZsYXNoY2FyZCBHZW5lcmF0aW9uIEZ1bmN0aW9uIChVcGRhdGVkIHRvIHVzZSBTdHJlYW1pbmcpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlRmxhc2hjYXJkQ29udGVudEZyb21UZXh0KHRleHQ6IHN0cmluZyk6IFByb21pc2U8e1xuICAgIGZsYXNoY2FyZDogeyBmcm9udDogc3RyaW5nOyBiYWNrOiBzdHJpbmcgfTtcbiAgICBjbG96ZTogeyB0ZXh0OiBzdHJpbmcgfTtcbiAgfSB8IG51bGw+IHtcbiAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlXSBHZW5lcmF0aW5nIGZsYXNoY2FyZCBjb250ZW50IGZvciB0ZXh0OlwiLCB0ZXh0LnN1YnN0cmluZygwLCA1MCkgKyBcIi4uLlwiKTtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkVXNlckNvbmZpZygpO1xuICAgIGlmICghY29uZmlnKSB0aHJvdyBuZXcgRXJyb3IoXCJMTE0gY29uZmlndXJhdGlvbiBub3QgZm91bmQuXCIpO1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBnZXRQcm92aWRlcihjb25maWcpO1xuICAgIGlmICghcHJvdmlkZXIpIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvdmlkZXI6ICR7Y29uZmlnLnByb3ZpZGVyfWApO1xuXG4gICAgLy8gLS0tIFVzZSBzdHJlYW1DaGF0IGluc3RlYWQgb2YgY2hhdENvbXBsZXRpb24gLS0tXG4gICAgaWYgKCFwcm92aWRlci5zdHJlYW1DaGF0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlXSBQcm92aWRlciAke2NvbmZpZy5wcm92aWRlcn0gZG9lcyBub3Qgc3VwcG9ydCBzdHJlYW1pbmcgY2hhdC4gQ2Fubm90IGdlbmVyYXRlIGZsYXNoY2FyZHMuYCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21wdCA9IGNyZWF0ZUZsYXNoY2FyZFByb21wdCh0ZXh0KTtcbiAgICBsZXQgYWNjdW11bGF0ZWRDb250ZW50ID0gJyc7XG4gICAgbGV0IHN0cmVhbUVycm9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2VdIFNlbmRpbmcgZmxhc2hjYXJkIGdlbmVyYXRpb24gcHJvbXB0IHZpYSBzdHJlYW1DaGF0Li4uXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0cmVhbSBmaW5pc2hlc1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm92aWRlclJlcXVlc3Q6IFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgcHJvbXB0LFxuICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBzZW5kQ2h1bms6IChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2h1bmsuc3RhdHVzID09PSAnY2h1bmsnICYmIGNodW5rLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29udGVudCArPSBjaHVuay5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNodW5rLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIGZsYXNoY2FyZCBzdHJlYW1dIFJlY2VpdmVkIGVycm9yIGNodW5rOlwiLCBjaHVuay5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1FcnJvciA9IGNodW5rLmVycm9yIHx8ICdVbmtub3duIHN0cmVhbWluZyBlcnJvcic7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCByZWplY3QgaW1tZWRpYXRlbHksIGxldCBpdCBmaW5pc2ggdG8gcG90ZW50aWFsbHkgY2FwdHVyZSBwYXJ0aWFsIGNvbnRlbnQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPciByZWplY3QgaGVyZSBpZiBlcnJvcnMgc2hvdWxkIGhhbHQgcHJvY2Vzc2luZzogcmVqZWN0KG5ldyBFcnJvcihzdHJlYW1FcnJvcikpOyBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaHVuay5zdGF0dXMgPT09ICdkb25lJyB8fCBjaHVuay5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlIGZsYXNoY2FyZCBzdHJlYW1dIFN0cmVhbSBmaW5pc2hlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpOyAvLyBSZXNvbHZlIHRoZSBwcm9taXNlIHdoZW4gZG9uZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIEluaXRpYXRlIHRoZSBzdHJlYW1cbiAgICAgICAgICAgIHByb3ZpZGVyLnN0cmVhbUNoYXQocHJvdmlkZXJSZXF1ZXN0KS5jYXRjaChyZWplY3QpOyAvLyBSZWplY3QgcHJvbWlzZSBvbiBpbml0aWFsIHN0cmVhbUNoYXQgZXJyb3JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN0cmVhbUVycm9yKSB7XG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBGbGFzaGNhcmQgc3RyZWFtIGNvbXBsZXRlZCB3aXRoIGVycm9yOlwiLCBzdHJlYW1FcnJvcik7XG4gICAgICAgICAgICAgLy8gUG90ZW50aWFsbHkgdHJ5IHBhcnNpbmcgYWNjdW11bGF0ZWRDb250ZW50IGFueXdheT9cbiAgICAgICAgICAgICAvLyByZXR1cm4gbnVsbDsgLy8gRm9yIG5vdywgcmV0dXJuIG51bGwgaWYgc3RyZWFtIGhhZCBlcnJvcnNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWNjdW11bGF0ZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBGbGFzaGNhcmQgc3RyZWFtIGNvbXBsZXRlZCBidXQgYWNjdW11bGF0ZWQgY29udGVudCBpcyBlbXB0eS5cIik7XG4gICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0gUGFyc2UgdGhlIGFjY3VtdWxhdGVkIHJlc3BvbnNlIGFzIEpTT04gLS0tXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2VdIFJlY2VpdmVkIGFjY3VtdWxhdGVkIHN0cmVhbSByZXNwb25zZSBmb3IgcGFyc2luZzpcIiwgYWNjdW11bGF0ZWRDb250ZW50KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb25NYXRjaCA9IGFjY3VtdWxhdGVkQ29udGVudC5tYXRjaCgvYGBganNvblxccyooW1xcc1xcU10qPylcXHMqYGBgfCh7W1xcc1xcU10qfSkvKTtcbiAgICAgICAgICAgIGlmICghanNvbk1hdGNoIHx8ICghanNvbk1hdGNoWzFdICYmICFqc29uTWF0Y2hbMl0pKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBDb3VsZCBub3QgZmluZCBKU09OIGJsb2NrIGluIHRoZSBhY2N1bXVsYXRlZCBzdHJlYW0gcmVzcG9uc2UuXCIpO1xuICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayBhdHRlbXB0XG4gICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRKc29uID0gSlNPTi5wYXJzZShhY2N1bXVsYXRlZENvbnRlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRKc29uLmZsYXNoY2FyZD8uZnJvbnQgJiYgcGFyc2VkSnNvbi5mbGFzaGNhcmQ/LmJhY2sgJiYgcGFyc2VkSnNvbi5jbG96ZT8udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2VdIFN1Y2Nlc3NmdWxseSBwYXJzZWQgZmxhc2hjYXJkIEpTT04gZnJvbSByYXcgc3RyZWFtIHJlc3BvbnNlIChmYWxsYmFjaykuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRKc29uIGFzIHsgZmxhc2hjYXJkOiB7IGZyb250OiBzdHJpbmc7IGJhY2s6IHN0cmluZyB9OyBjbG96ZTogeyB0ZXh0OiBzdHJpbmcgfSB9O1xuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIFBhcnNlZCBmYWxsYmFjayBzdHJlYW0gSlNPTiBsYWNrcyBleHBlY3RlZCBzdHJ1Y3R1cmU6XCIsIHBhcnNlZEpzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9IGNhdGNoIChmYWxsYmFja0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2VdIEZhaWxlZCB0byBwYXJzZSBKU09OIGRpcmVjdGx5IGZyb20gYWNjdW11bGF0ZWQgc3RyZWFtIChmYWxsYmFjayBmYWlsZWQpOlwiLCBmYWxsYmFja0Vycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBqc29uTWF0Y2hbMV0gfHwganNvbk1hdGNoWzJdO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSnNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZy50cmltKCkpO1xuXG4gICAgICAgICAgICBpZiAocGFyc2VkSnNvbi5mbGFzaGNhcmQ/LmZyb250ICYmIHBhcnNlZEpzb24uZmxhc2hjYXJkPy5iYWNrICYmIHBhcnNlZEpzb24uY2xvemU/LnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlXSBTdWNjZXNzZnVsbHkgcGFyc2VkIGZsYXNoY2FyZCBKU09OIGZyb20gYWNjdW11bGF0ZWQgc3RyZWFtIHJlc3BvbnNlLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkSnNvbiBhcyB7IGZsYXNoY2FyZDogeyBmcm9udDogc3RyaW5nOyBiYWNrOiBzdHJpbmcgfTsgY2xvemU6IHsgdGV4dDogc3RyaW5nIH0gfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBQYXJzZWQgc3RyZWFtIEpTT04gbGFja3MgZXhwZWN0ZWQgc3RydWN0dXJlIChmbGFzaGNhcmQvY2xvemUpOlwiLCBwYXJzZWRKc29uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBFcnJvciBwYXJzaW5nIEpTT04gZnJvbSBhY2N1bXVsYXRlZCBzdHJlYW0gcmVzcG9uc2U6XCIsIHBhcnNlRXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIi0tLSBBY2N1bXVsYXRlZCBSYXcgQ29udGVudCAtLS1cIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGFjY3VtdWxhdGVkQ29udGVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiLS0tIEVuZCBBY2N1bXVsYXRlZCBSYXcgQ29udGVudCAtLS1cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBFcnJvciBkdXJpbmcgZmxhc2hjYXJkIGdlbmVyYXRpb24gc3RyZWFtIHNldHVwIG9yIHByb21pc2UgaGFuZGxpbmc6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyAtLS0gVHJhbnNsYXRpb24gRnVuY3Rpb24gLS0tXG5cbi8qKlxuICogVHJhbnNsYXRlcyB0aGUgZ2l2ZW4gdGV4dCB0byB0aGUgdGFyZ2V0IGxhbmd1YWdlIHVzaW5nIHRoZSBjb25maWd1cmVkIExMTS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHQodGV4dFRvVHJhbnNsYXRlOiBzdHJpbmcsIHRhcmdldExhbmd1YWdlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zb2xlLmxvZyhgW2xsbVNlcnZpY2VdIFRyYW5zbGF0aW5nIHRleHQgdG8gJHt0YXJnZXRMYW5ndWFnZX06IFwiJHt0ZXh0VG9UcmFuc2xhdGUuc3Vic3RyaW5nKDAsIDUwKX0uLi5cImApO1xuXG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZFVzZXJDb25maWcoKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgdHJhbnNsYXRlVGV4dF0gQ2Fubm90IHRyYW5zbGF0ZTogTExNIGNvbmZpZyBub3QgbG9hZGVkLlwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBnZXRQcm92aWRlcihjb25maWcpO1xuICAgIGlmICghcHJvdmlkZXI/LmNoYXRDb21wbGV0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlIHRyYW5zbGF0ZVRleHRdIFByb3ZpZGVyICR7Y29uZmlnLnByb3ZpZGVyfSBkb2VzIG5vdCBzdXBwb3J0ICdjaGF0Q29tcGxldGlvbicuYCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFNpbXBsZSB0cmFuc2xhdGlvbiBwcm9tcHRcbiAgICBjb25zdCBwcm9tcHQgPSBgVHJhbnNsYXRlIHRoZSBmb2xsb3dpbmcgdGV4dCBhY2N1cmF0ZWx5IHRvICR7dGFyZ2V0TGFuZ3VhZ2V9LiBPdXRwdXQgT05MWSB0aGUgdHJhbnNsYXRlZCB0ZXh0LCBub3RoaW5nIGVsc2U6XG5cblRleHQgdG8gdHJhbnNsYXRlOlxuXCJcIlwiXG4ke3RleHRUb1RyYW5zbGF0ZX1cblwiXCJcIlxuXG5UcmFuc2xhdGVkIHRleHQ6YDtcblxuICAgIGNvbnNvbGUubG9nKGBbbGxtU2VydmljZSB0cmFuc2xhdGVUZXh0XSBTZW5kaW5nIHRyYW5zbGF0aW9uIHByb21wdCB0byAke2NvbmZpZy5wcm92aWRlcn0uLi5gKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvdmlkZXIuY2hhdENvbXBsZXRpb24oe1xuICAgICAgICAgICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIGhpc3Rvcnk6IFtdLCAvLyBObyBoaXN0b3J5IG5lZWRlZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0cmFuc2xhdGVkVGV4dCA9IHJlc3BvbnNlPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG5cbiAgICAgICAgaWYgKCF0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIHRyYW5zbGF0ZVRleHRdIExMTSByZXNwb25zZSB3YXMgZW1wdHkgb3IgaW52YWxpZC5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2UgdHJhbnNsYXRlVGV4dF0gUmVjZWl2ZWQgdHJhbnNsYXRpb246XCIsIHRyYW5zbGF0ZWRUZXh0KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZWRUZXh0O1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIHRyYW5zbGF0ZVRleHRdIEVycm9yIGR1cmluZyB0cmFuc2xhdGlvbiBMTE0gY2FsbDpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59ICIsImltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBvbk1lc3NhZ2UsIHNlbmRNZXNzYWdlIH0gZnJvbSAnfi91dGlscy9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgbG9hZFVzZXJDb25maWcsIHN0cmVhbUNoYXRSZXNwb25zZSwgZ2VuZXJhdGVGbGFzaGNhcmRDb250ZW50RnJvbVRleHQsIHRyYW5zbGF0ZVRleHQgfSBmcm9tICcuLi9zcmMvc2VydmljZXMvbGxtU2VydmljZSc7IC8vIFVzZSByZWxhdGl2ZSBwYXRoIGZvciBMTE0gc2VydmljZSBpbXBvcnRcbmltcG9ydCB7IGNyZWF0ZUZsYXNoY2FyZCwgY3JlYXRlQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9kYic7IC8vIEltcG9ydCBEQiBmdW5jdGlvbnNcbmltcG9ydCB0eXBlIHsgRmxhc2hjYXJkIH0gZnJvbSAnLi4vc3JjL3R5cGVzL2RiJzsgLy8gSW1wb3J0IEZsYXNoY2FyZCB0eXBlXG5cbmNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kIHNjcmlwdCBsb2FkZWQuJyk7XG5cbi8vIC0tLSBPZmZzY3JlZW4gRG9jdW1lbnQgTWFuYWdlbWVudCAtLS1cbmNvbnN0IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIID0gJ29mZnNjcmVlbi5odG1sJzsgLy8gUGF0aCB0byB5b3VyIG9mZnNjcmVlbiBkb2N1bWVudCBIVE1MXG5cbmFzeW5jIGZ1bmN0aW9uIGhhc09mZnNjcmVlbkRvY3VtZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAvLyBDaGVjayBpZiB0aGUgZG9jdW1lbnQgaXMgYWxyZWFkeSBvcGVuLlxuICAvLyBAdHMtaWdub3JlIC0gY2xpZW50cyBpcyBhdmFpbGFibGUgYnV0IG1heSBzaG93IFRTIGVycm9yXG4gIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgIC8vIEB0cy1pZ25vcmUgLSBDb250ZXh0VHlwZSBtaWdodCBiZSBtaXNzaW5nIE9GRlNDUkVFTl9ET0NVTUVOVCBpbiBvbGRlciB0eXBlc1xuICAgIGNvbnRleHRUeXBlczogWydPRkZTQ1JFRU5fRE9DVU1FTlQnXSxcbiAgICBkb2N1bWVudFVybHM6IFticm93c2VyLnJ1bnRpbWUuZ2V0VVJMKE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKV0gXG4gIH0pO1xuICByZXR1cm4gZXhpc3RpbmdDb250ZXh0cy5sZW5ndGggPiAwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCkge1xuICBpZiAoIShhd2FpdCBoYXNPZmZzY3JlZW5Eb2N1bWVudCgpKSkge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gQ3JlYXRpbmcgb2Zmc2NyZWVuIGRvY3VtZW50Li4uJyk7XG4gICAgLy8gQHRzLWlnbm9yZSAtIGJyb3dzZXIub2Zmc2NyZWVuIG1heSBub3QgYmUgaW4gb2xkZXIgdHlwZXNcbiAgICBhd2FpdCBicm93c2VyLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XG4gICAgICB1cmw6IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRILCBcbiAgICAgIC8vIFVzZSBhIHZhbGlkIHJlYXNvbiAtIExPQ0FMX1NUT1JBR0UgaXMgY29tbW9uIGlmIG5vdCB1c2luZyBvdGhlcnMgbGlrZSBBVURJT19QTEFZQkFDS1xuICAgICAgLy8gQHRzLWlnbm9yZSAtIGJyb3dzZXIub2Zmc2NyZWVuIG1heSBub3QgYmUgaW4gb2xkZXIgdHlwZXNcbiAgICAgIHJlYXNvbnM6IFticm93c2VyLm9mZnNjcmVlbi5SZWFzb24uTE9DQUxfU1RPUkFHRV0sIFxuICAgICAganVzdGlmaWNhdGlvbjogJ0RhdGFiYXNlIG9wZXJhdGlvbnMgdXNpbmcgUEdsaXRlJyxcbiAgICB9KTtcbiAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRlZC4nKTtcbiAgfSBlbHNlIHtcbiAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuJyk7XG4gIH1cbn1cblxuLy8gU2V0dXAgb2Zmc2NyZWVuIGRvY3VtZW50IG9uIGJhY2tncm91bmQgc2NyaXB0IHN0YXJ0dXBcbi8vIE1PVkVEIHRoZSBkaXJlY3QgY2FsbCBmcm9tIGhlcmUgdG8gYnJvd3Nlci5ydW50aW1lLm9uU3RhcnR1cCBsaXN0ZW5lciBiZWxvd1xuLy8gY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBUZW1wb3JhcmlseSBza2lwcGVkIGluaXRpYWwgb2Zmc2NyZWVuIHNldHVwIGNhbGwgZm9yIHRlc3RpbmcuJyk7XG5cbi8vIERlZmluZSB0aGUgc3RydWN0dXJlIG9mIHRoZSBkYXRhIGV4cGVjdGVkIGZyb20gdGhlIGNsaXBwZXIgcG9wdXBcbi8qXG5pbnRlcmZhY2UgQ2xpcERhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdGFncz86IHN0cmluZ1tdOyAvLyBBZGQgb3B0aW9uYWwgdGFncyBhcnJheVxufVxuKi9cblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgZm9yIE9sbGFtYSBBUEkgcmVzcG9uc2Vcbi8qXG5pbnRlcmZhY2UgT2xsYW1hVGFnIHtcbiAgbmFtZTogc3RyaW5nO1xuICAvLyBvdGhlciBwcm9wZXJ0aWVzIGxpa2UgbW9kaWZpZWRfYXQsIHNpemUsIGRpZ2VzdCBldGMuIGFyZSBpZ25vcmVkIGZvciBub3dcbn1cblxuaW50ZXJmYWNlIE9sbGFtYVRhZ3NSZXNwb25zZSB7XG4gIG1vZGVsczogT2xsYW1hVGFnW107XG59XG4qL1xuXG4vLyBkZWZpbmVCYWNrZ3JvdW5kIGlzIGdsb2JhbGx5IGF2YWlsYWJsZSBoZXJlIHRoYW5rcyB0byBXWFRcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUJhY2tncm91bmQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnV1hUIEJhY2tncm91bmQgZGVmaW5lZCcpO1xuXG4gIC8vIC0tLSBTZXR1cCB0aGUgY2VudHJhbCBtZXNzYWdlIGxpc3RlbmVyIC0tLSBcbiAgLy8gVGhpcyBhbGxvd3MgYG9uTWVzc2FnZWAgY2FsbHMgYmVsb3cgdG8gd29yay5cbiAgLy8gc2V0dXBDZW50cmFsTGlzdGVuZXIoKTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGNsaXBwaW5nIHJlcXVlc3RzIGZyb20gcG9wdXAgLS0tXG4gIG9uTWVzc2FnZSgnY2xpcFBhZ2UnLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBSZWNlaXZlZCBjbGlwUGFnZSBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IHRpdGxlLCB1cmwgfSA9IG1lc3NhZ2UuZGF0YTsgLy8gRGVzdHJ1Y3R1cmUgaW1wb3J0ZWQgQ2xpcERhdGFcblxuICAgIGNvbnN0IHNxbCA9IGBJTlNFUlQgSU5UTyBjbGlwcyAodGl0bGUsIHVybCkgVkFMVUVTICg/LCA/KTtgO1xuICAgIGNvbnN0IHBhcmFtcyA9IFt0aXRsZSwgdXJsXTtcblxuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBTZW5kaW5nIGRiRXhlYyBtZXNzYWdlIHRvIG9mZnNjcmVlbiBmb3IgY2xpcHBpbmcuLi4nKTtcbiAgICB0cnkge1xuICAgICAgLy8gTWF0Y2ggdGhlIFByb3RvY29sTWFwIGRlZmluaXRpb246IHsgZGF0YTogRGJFeGVjUmVxdWVzdCB9XG4gICAgICBjb25zdCBkYlJlc3VsdCA9IGF3YWl0IHNlbmRNZXNzYWdlKCdkYkV4ZWMnLCB7IGRhdGE6IHsgc3FsOiBzcWwsIHBhcmFtczogcGFyYW1zIH0gfSk7XG4gICAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogT2Zmc2NyZWVuIGRiRXhlYyByZXNwb25zZTonLCBkYlJlc3VsdCk7XG5cbiAgICAgIC8vIE5vdGlmeSBzdWNjZXNzXG4gICAgICBjb25zb2xlLmxvZyhgQmFja2dyb3VuZDogU3VjY2Vzc2Z1bGx5IGNsaXBwZWQgJHt1cmx9YCk7XG4gICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKGBjbGlwLXN1Y2Nlc3MtJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLCBcbiAgICAgICAgdGl0bGU6ICdCb29rbWFyayBTYXZlZCcsXG4gICAgICAgIG1lc3NhZ2U6IGBTYXZlZDogJHt0aXRsZX1gLFxuICAgICAgICBwcmlvcml0eTogMFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhY2tncm91bmQ6IEVycm9yIGV4ZWN1dGluZyBjbGlwIHZpYSBvZmZzY3JlZW46JywgZXJyb3IpO1xuICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZShgY2xpcC1lcnJvci0ke0RhdGUubm93KCl9YCwge1xuICAgICAgICAgIHR5cGU6ICdiYXNpYycsXG4gICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLFxuICAgICAgICAgIHRpdGxlOiAnQm9va21hcmsgU2F2aW5nIEZhaWxlZCcsIFxuICAgICAgICAgIG1lc3NhZ2U6IGBDb3VsZCBub3Qgc2F2ZSAke3RpdGxlfS4gRXJyb3I6ICR7ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpfWAsXG4gICAgICAgICAgcHJpb3JpdHk6IDFcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEhhbmRsZXIgcmV0dXJucyB2b2lkIGltcGxpY2l0bHlcbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIHRvIGZldGNoIE9sbGFtYSBtb2RlbHMgLS0tXG4gIG9uTWVzc2FnZSgnZ2V0T2xsYW1hTW9kZWxzJywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFJlY2VpdmVkIGdldE9sbGFtYU1vZGVscyBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IGVuZHBvaW50IH0gPSBtZXNzYWdlLmRhdGE7XG4gICAgY29uc3QgcmVzcG9uc2VUYXJnZXQgPSAnZ2V0T2xsYW1hTW9kZWxzUmVzdWx0JzsgLy8gVGFyZ2V0IGZvciB0aGUgcmVzcG9uc2UgbWVzc2FnZVxuXG4gICAgaWYgKCFlbmRwb2ludCkge1xuICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEVycm9yOiBPbGxhbWEgZW5kcG9pbnQgbm90IHByb3ZpZGVkLicpO1xuICAgICAgLy8gSW5jbHVkZSBlbmRwb2ludCAod2hpY2ggaXMgbnVsbC91bmRlZmluZWQgaGVyZSkgaW4gdGhlIGVycm9yIHJlc3BvbnNlXG4gICAgICBzZW5kTWVzc2FnZShyZXNwb25zZVRhcmdldCwgeyBlbmRwb2ludCwgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnT2xsYW1hIGVuZHBvaW50IG5vdCBwcm92aWRlZC4nIH0pXG4gICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihgW0JhY2tncm91bmRdIEZhaWxlZCB0byBzZW5kICR7cmVzcG9uc2VUYXJnZXR9IGVycm9yOmAsIGUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaFVybCA9IGAke2VuZHBvaW50fS9hcGkvdGFnc2A7XG4gICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBBdHRlbXB0aW5nIHRvIGZldGNoIG1vZGVscyBmcm9tOiAke2ZldGNoVXJsfWApO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIEZldGNoIG9wdGlvbnM6JywgZmV0Y2hPcHRpb25zKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2hVcmwsIGZldGNoT3B0aW9ucyk7XG4gICAgICBjb25zb2xlLmxvZyhgW0JhY2tncm91bmRdIEZldGNoIHJlc3BvbnNlIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9LCBPSzogJHtyZXNwb25zZS5va31gKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBsZXQgZXJyb3JCb2R5ID0gJ1tDb3VsZCBub3QgcmVhZCBlcnJvciBib2R5XSc7XG4gICAgICAgIHRyeSB7IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgfSBjYXRjaCB7fVxuICAgICAgICBjb25zb2xlLmVycm9yKGBbQmFja2dyb3VuZF0gRmV0Y2ggZmFpbGVkOiBTdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9LiBCb2R5OmAsIGVycm9yQm9keSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIE9sbGFtYSBtb2RlbHM6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IFxuICAgICAgY29uc3QgbW9kZWxzID0gQXJyYXkuaXNBcnJheShkYXRhPy5tb2RlbHMpID8gZGF0YS5tb2RlbHMubWFwKCh0YWc6IHsgbmFtZTogc3RyaW5nIH0pID0+ICh7IGlkOiB0YWcubmFtZSwgbmFtZTogdGFnLm5hbWUgfSkpIDogW107XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFN1Y2Nlc3NmdWxseSBmZXRjaGVkIE9sbGFtYSBtb2RlbHM6JywgbW9kZWxzKTtcbiAgICAgIC8vIEluY2x1ZGUgdGhlIGVuZHBvaW50IGluIHRoZSBzdWNjZXNzIHJlc3BvbnNlXG4gICAgICBzZW5kTWVzc2FnZShyZXNwb25zZVRhcmdldCwgeyBlbmRwb2ludCwgc3VjY2VzczogdHJ1ZSwgbW9kZWxzOiBtb2RlbHMgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihgW0JhY2tncm91bmRdIEZhaWxlZCB0byBzZW5kICR7cmVzcG9uc2VUYXJnZXR9IHN1Y2Nlc3M6YCwgZSkpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyBcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBFcnJvciBkdXJpbmcgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3IgZmV0Y2hpbmcgbW9kZWxzLic7XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlLmluY2x1ZGVzKCdGYWlsZWQgdG8gZmV0Y2gnKSkge1xuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIi4gRW5zdXJlIE9sbGFtYSBpcyBydW5uaW5nIGFuZCByZWFjaGFibGUsIGFuZCBjaGVjayBleHRlbnNpb24gaG9zdCBwZXJtaXNzaW9ucy5cIjtcbiAgICAgIH1cbiAgICAgICAvLyBJbmNsdWRlIHRoZSBlbmRwb2ludCBpbiB0aGUgY2F0Y2ggYmxvY2sncyBlcnJvciByZXNwb25zZVxuICAgICAgc2VuZE1lc3NhZ2UocmVzcG9uc2VUYXJnZXQsIHsgZW5kcG9pbnQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH0pXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoYFtCYWNrZ3JvdW5kXSBGYWlsZWQgdG8gc2VuZCAke3Jlc3BvbnNlVGFyZ2V0fSBlcnJvcjpgLCBlKSk7XG4gICAgfVxuICAgIC8vIEhhbmRsZXIgcmV0dXJucyB2b2lkIGltcGxpY2l0bHlcbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBDaGF0IFJlcXVlc3RzIC0tLVxuICBvbk1lc3NhZ2UoJ29sbGFtYUNoYXRSZXF1ZXN0JywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogUmVjZWl2ZWQgb2xsYW1hQ2hhdFJlcXVlc3QnLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5IH0gPSBtZXNzYWdlLmRhdGE7XG5cbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkVXNlckNvbmZpZygpO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQmFja2dyb3VuZDogQ2Fubm90IHByb2Nlc3MgY2hhdCByZXF1ZXN0LCB1c2VyIGNvbmZpZyBub3QgZm91bmQuXCIpO1xuICAgICAgIHNlbmRNZXNzYWdlKCdvbGxhbWFSZXNwb25zZScsIHtcbiAgICAgICAgIG1vZGVsOiAndW5rbm93bicsXG4gICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICBlcnJvcjogXCJMTE0gY29uZmlndXJhdGlvbiBub3QgZm91bmQuIFBsZWFzZSBzZXQgaXQgdXAgaW4gdGhlIHNldHRpbmdzLlwiXG4gICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgY29uZmlnIGVycm9yIG1lc3NhZ2U6XCIsIGUpKTtcbiAgICAgIHJldHVybjsgLy8gSGFuZGxlciByZXR1cm5zIHZvaWRcbiAgICB9XG4gXG4gICAgdHJ5IHtcbiAgICAgIC8vIEFzc3VtaW5nIHN0cmVhbUNoYXRSZXNwb25zZSBoYW5kbGVzIHNlbmRpbmcgY2h1bmtzIHZpYSBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCAuLi4pXG4gICAgICBhd2FpdCBzdHJlYW1DaGF0UmVzcG9uc2UoeyBwcm9tcHQsIGhpc3Rvcnk6IGhpc3RvcnkgfHwgW10sIGNvbmZpZyB9KTsgXG4gICAgICBjb25zb2xlLmxvZyhcIkJhY2tncm91bmQ6IHN0cmVhbUNoYXRSZXNwb25zZSBwcm9jZXNzaW5nIGluaXRpYXRlZC5cIik7XG4gICAgfSBjYXRjaCAoc3RyZWFtRXJyb3IpIHtcbiAgICAgICAgLy8gc3RyZWFtQ2hhdFJlc3BvbnNlIHNob3VsZCBpZGVhbGx5IGhhbmRsZSBpdHMgb3duIGVycm9ycyBhbmQgc2VuZCBlcnJvciBjaHVua3MsXG4gICAgICAgIC8vIGJ1dCB3ZSBjYW4gbG9nIGEgZmFsbGJhY2sgaGVyZS5cbiAgICAgICAgY29uc29sZS5lcnJvcihcIltCYWNrZ3JvdW5kXSBFcnJvciBpbnZva2luZyBzdHJlYW1DaGF0UmVzcG9uc2U6XCIsIHN0cmVhbUVycm9yKTtcbiAgICAgICAgLy8gT3B0aW9uYWxseSBzZW5kIGEgZmluYWwgZXJyb3IgY2h1bmsgaWYgc3RyZWFtQ2hhdFJlc3BvbnNlIGRpZG4ndFxuICAgICAgICAgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywge1xuICAgICAgICAgICBtb2RlbDogY29uZmlnLmNoYXRNb2RlbCB8fCAndW5rbm93bicsXG4gICAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICBlcnJvcjogc3RyZWFtRXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IHN0cmVhbUVycm9yLm1lc3NhZ2UgOiBcIkVycm9yIGR1cmluZyBzdHJlYW1pbmdcIlxuICAgICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgc3RyZWFtIGVycm9yIG1lc3NhZ2U6XCIsIGUpKTtcbiAgICB9XG4gICAgLy8gSGFuZGxlciByZXR1cm5zIHZvaWQgaW1wbGljaXRseVxuICB9KTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIEZsYXNoY2FyZCBDb250ZW50IEdlbmVyYXRpb24gLS0tXG4gIG9uTWVzc2FnZSgnZ2VuZXJhdGVGbGFzaGNhcmRDb250ZW50JywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFJlY2VpdmVkIGdlbmVyYXRlRmxhc2hjYXJkQ29udGVudCBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IHRleHQgfSA9IG1lc3NhZ2UuZGF0YTtcbiAgICBjb25zdCByZXNwb25zZVRhcmdldCA9ICdmbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0JztcbiAgICBcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBObyB0ZXh0IHByb3ZpZGVkIGZvciBmbGFzaGNhcmQgZ2VuZXJhdGlvbi4nKTtcbiAgICAgIC8vIFNlbmQgYmFjayBhbiBlcnJvciBvYmplY3RcbiAgICAgIHNlbmRNZXNzYWdlKHJlc3BvbnNlVGFyZ2V0LCB7IGRhdGE6IG51bGwsIGVycm9yOiAnTm8gdGV4dCBwcm92aWRlZCcgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIGVycm9yIHJlc3VsdDpcIiwgZSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdlbmVyYXRlRmxhc2hjYXJkQ29udGVudEZyb21UZXh0KHRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFJlY2VpdmVkIHJlc3VsdCBmcm9tIGxsbVNlcnZpY2U6JywgcmVzdWx0KTtcblxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTApKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBBdHRlbXB0aW5nIHRvIHNlbmQgZmxhc2hjYXJkIHJlc3VsdCBhZnRlciBkZWxheS4uLicpO1xuXG4gICAgICAgIC8vIFNlbmQgYmFjayB0aGUgcmVzdWx0IG9iamVjdCAocmVzdWx0IGNhbiBiZSB0aGUgZGF0YSBvciBudWxsKVxuICAgICAgICBzZW5kTWVzc2FnZShyZXNwb25zZVRhcmdldCwgeyBkYXRhOiByZXN1bHQsIGVycm9yOiB1bmRlZmluZWQgfSlcbiAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgZmxhc2hjYXJkIHJlc3VsdDpcIiwgZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEVycm9yIGR1cmluZyBmbGFzaGNhcmQgZ2VuZXJhdGlvbjonLCBlcnJvcik7XG4gICAgICAgIC8vIFNlbmQgYmFjayBhbiBlcnJvciBvYmplY3RcbiAgICAgICAgc2VuZE1lc3NhZ2UocmVzcG9uc2VUYXJnZXQsIHsgZGF0YTogbnVsbCwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3IgZHVyaW5nIGdlbmVyYXRpb24nIH0pXG4gICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIGVycm9yIHJlc3VsdDpcIiwgZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBDaGF0IEhpc3RvcnkgUmVxdWVzdHMgLS0tXG4gIC8vIC4uLiAocGxhY2Vob2xkZXIpXG5cbiAgLy8gKysrIE5FVyBMSVNURU5FUiBmb3IgZ2V0UGFnZUluZm8gKysrXG4gIG9uTWVzc2FnZSgnZ2V0UGFnZUluZm8nLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJbQmFja2dyb3VuZF0gUmVjZWl2ZWQgZ2V0UGFnZUluZm8gcmVxdWVzdC5cIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRhYnMgPSBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFic1swXTtcbiAgICAgIGlmIChjdXJyZW50VGFiICYmIGN1cnJlbnRUYWIudXJsICYmIGN1cnJlbnRUYWIudGl0bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQmFja2dyb3VuZF0gU2VuZGluZyBwYWdlIGluZm86XCIsIHsgdGl0bGU6IGN1cnJlbnRUYWIudGl0bGUsIHVybDogY3VycmVudFRhYi51cmwgfSk7XG4gICAgICAgIC8vIEVuc3VyZSBQcm90b2NvbE1hcCBleHBlY3RzIFByb21pc2U8UGFnZUluZm8gfCBudWxsPlxuICAgICAgICByZXR1cm4geyB0aXRsZTogY3VycmVudFRhYi50aXRsZSwgdXJsOiBjdXJyZW50VGFiLnVybCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0JhY2tncm91bmRdIENvdWxkIG5vdCBnZXQgYWN0aXZlIHRhYiBpbmZvLlwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gRXJyb3IgZ2V0dGluZyBwYWdlIGluZm86XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gKysrIE5FVyBMSVNURU5FUiBmb3IgZ2V0U2VsZWN0ZWRUZXh0ICsrK1xuICBvbk1lc3NhZ2UoJ2dldFNlbGVjdGVkVGV4dCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIltCYWNrZ3JvdW5kXSBSZWNlaXZlZCBnZXRTZWxlY3RlZFRleHQgcmVxdWVzdC5cIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRhYnMgPSBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFic1swXTtcbiAgICAgIGNvbnN0IHRhYklkID0gY3VycmVudFRhYj8uaWQ7XG5cbiAgICAgIGlmICh0YWJJZCAmJiBjdXJyZW50VGFiLnVybD8uc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbQmFja2dyb3VuZF0gU2VuZGluZyBfcmVxdWVzdFNlbGVjdGlvbkZyb21Db250ZW50U2NyaXB0IHRvIHRhYiAke3RhYklkfWApO1xuICAgICAgICAvLyBFbnN1cmUgUHJvdG9jb2xNYXAgZGVmaW5lcyBfcmVxdWVzdFNlbGVjdGlvbkZyb21Db250ZW50U2NyaXB0XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VuZE1lc3NhZ2UoJ19yZXF1ZXN0U2VsZWN0aW9uRnJvbUNvbnRlbnRTY3JpcHQnLCB1bmRlZmluZWQsIHsgdGFiSWQ6IHRhYklkIH0pOyBcbiAgICAgICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBSZWNlaXZlZCByZXNwb25zZSBmcm9tIGNvbnRlbnQgc2NyaXB0IGZvciB0YWIgJHt0YWJJZH06YCwgcmVzcG9uc2UpO1xuICAgICAgICAvLyBFbnN1cmUgUHJvdG9jb2xNYXAgZXhwZWN0cyBQcm9taXNlPHsgdGV4dDogc3RyaW5nIH0gfCBudWxsPlxuICAgICAgICBpZiAocmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlLnRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHsgdGV4dDogcmVzcG9uc2UudGV4dCB9OyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtCYWNrZ3JvdW5kXSBJbnZhbGlkIG9yIGVtcHR5IHJlc3BvbnNlIGZyb20gY29udGVudCBzY3JpcHQgZm9yIHRhYiAke3RhYklkfTpgLCByZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbQmFja2dyb3VuZF0gQ2Fubm90IGdldCBzZWxlY3Rpb24gZnJvbSBub24taHR0cChzKSBVUkwgb3Igbm8gYWN0aXZlIHRhYiBJRC5gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gRXJyb3IgZ2V0dGluZyBzZWxlY3RlZCB0ZXh0OlwiLCBlcnJvcik7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQ291bGQgbm90IGVzdGFibGlzaCBjb25uZWN0aW9uJykgfHwgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnTm8gcmVjZWl2aW5nIGVuZCcpKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltCYWNrZ3JvdW5kXSBDb250ZW50IHNjcmlwdCBsaWtlbHkgbm90IGluamVjdGVkIG9yIG5vdCByZXNwb25kaW5nIG9uIHRoZSBhY3RpdmUgcGFnZS5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vICsrKyBORVcgTElTVEVORVIgZm9yIHRyYW5zbGF0ZVRleHQgKysrXG4gIG9uTWVzc2FnZSgndHJhbnNsYXRlVGV4dCcsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJbQmFja2dyb3VuZF0gUmVjZWl2ZWQgdHJhbnNsYXRlVGV4dCByZXF1ZXN0OlwiLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgdGV4dCwgdGFyZ2V0TGFuZyB9ID0gbWVzc2FnZS5kYXRhOyAvLyBVc2UgdGFyZ2V0TGFuZ1xuICAgIGlmICghdGV4dCB8fCAhdGFyZ2V0TGFuZykge1xuICAgICAgY29uc29sZS5lcnJvcihcIltCYWNrZ3JvdW5kXSBNaXNzaW5nIHRleHQgb3IgdGFyZ2V0TGFuZyBmb3IgdHJhbnNsYXRpb24uXCIpO1xuICAgICAgLy8gVGhyb3cgZXJyb3IgdG8gcmVqZWN0IHRoZSBwcm9taXNlIGFzIGV4cGVjdGVkIGJ5IFByb3RvY29sTWFwXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHRleHQgb3IgdGFyZ2V0IGxhbmd1YWdlIGZvciB0cmFuc2xhdGlvbi5cIik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyBBc3N1bWluZyBsbG1TZXJ2aWNlLnRyYW5zbGF0ZVRleHQgaGFuZGxlcyBsb2FkaW5nIGNvbmZpZyBldGMuXG4gICAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdCA9IGF3YWl0IHRyYW5zbGF0ZVRleHQodGV4dCwgdGFyZ2V0TGFuZyk7XG4gICAgICBjb25zb2xlLmxvZyhcIltCYWNrZ3JvdW5kXSBUcmFuc2xhdGlvbiByZXN1bHQgZnJvbSBsbG1TZXJ2aWNlOlwiLCB0cmFuc2xhdGlvblJlc3VsdCk7XG4gICAgICBpZiAodHJhbnNsYXRpb25SZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgdHJhbnNsYXRpb24gZmFpbGVkIGFzIGV4cGVjdGVkIGJ5IFByb3RvY29sTWFwXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRyYW5zbGF0aW9uIGZhaWxlZCBvciByZXR1cm5lZCBudWxsLlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cmFuc2xhdGlvblJlc3VsdDsgLy8gUmV0dXJuIHRoZSBzdHJpbmdcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gRXJyb3IgZHVyaW5nIHRyYW5zbGF0aW9uOlwiLCBlcnJvcik7XG4gICAgICAgIC8vIFJlLXRocm93IHRoZSBlcnJvciB0byByZWplY3QgdGhlIHByb21pc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFuc2xhdGlvbiBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gKysrIE5FVyBMSVNURU5FUiBmb3Igc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeSArKytcbiAgb25NZXNzYWdlKCdzYXZlRmxhc2hjYXJkQW5kTm90aWZ5JywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIltCYWNrZ3JvdW5kXSBSZWNlaXZlZCBzYXZlRmxhc2hjYXJkQW5kTm90aWZ5IHJlcXVlc3Q6XCIsIG1lc3NhZ2UuZGF0YSk7XG4gICAgY29uc3QgeyBjYXJkRGF0YSB9ID0gbWVzc2FnZS5kYXRhO1xuXG4gICAgaWYgKCFjYXJkRGF0YSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltCYWNrZ3JvdW5kXSBObyBjYXJkRGF0YSBwcm92aWRlZCBmb3Igc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeS5cIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBmbGFzaGNhcmQgZGF0YSBwcm92aWRlZC5cIik7IC8vIFJlamVjdCB0aGUgcHJvbWlzZVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyAxLiBDcmVhdGUgdGhlIGZsYXNoY2FyZFxuICAgICAgLy8gV2UgbmVlZCB0byBwcm92aWRlIHRoZSBmdWxsIEZsYXNoY2FyZCBzdHJ1Y3R1cmUgZXhwZWN0ZWQgYnkgY3JlYXRlRmxhc2hjYXJkXG4gICAgICAvLyBBcHAudHN4IGFscmVhZHkgcHJlcGFyZXMgbW9zdCBvZiBpdCwgYnV0IGVuc3VyZSBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZSBwcmVzZW50XG4gICAgICAvLyBOb3RlOiBjcmVhdGVGbGFzaGNhcmQgaGFuZGxlcyBzZXR0aW5nIGluaXRpYWwgRlNSUyBzdGF0ZVxuICAgICAgY29uc3QgbmV3Rmxhc2hjYXJkID0gYXdhaXQgY3JlYXRlRmxhc2hjYXJkKGNhcmREYXRhIGFzIE9taXQ8Rmxhc2hjYXJkLCAnaWQnIHwgJ2NyZWF0ZWRfYXQnIHwgJ2R1ZScgfCAnc3RhYmlsaXR5JyB8ICdkaWZmaWN1bHR5JyB8ICdlbGFwc2VkX2RheXMnIHwgJ3NjaGVkdWxlZF9kYXlzJyB8ICdyZXBzJyB8ICdsYXBzZXMnIHwgJ3N0YXRlJyB8ICdsYXN0X3Jldmlldyc+KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0JhY2tncm91bmRdIEZsYXNoY2FyZCBjcmVhdGVkIGluIERCOlwiLCBuZXdGbGFzaGNhcmQpO1xuXG4gICAgICAvLyAyLiBDcmVhdGUgdGhlIGFzc29jaWF0ZWQgY2hhdCBtZXNzYWdlXG4gICAgICBhd2FpdCBjcmVhdGVDaGF0TWVzc2FnZSh7IHJvbGU6ICdmbGFzaGNhcmQnLCBmbGFzaGNhcmRfaWQ6IG5ld0ZsYXNoY2FyZC5pZCB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0JhY2tncm91bmRdIEFzc29jaWF0ZWQgY2hhdCBtZXNzYWdlIGNyZWF0ZWQgZm9yIGZsYXNoY2FyZCBJRDpcIiwgbmV3Rmxhc2hjYXJkLmlkKTtcblxuICAgICAgLy8gMy4gU2VuZCBub3RpZmljYXRpb24gdG8gdXBkYXRlIFVJIChpZiBuZWVkZWQsIGUuZy4sIGNoYXQgaGlzdG9yeSlcbiAgICAgIC8vIHNlbmRNZXNzYWdlKCdfY2hhdEhpc3RvcnlVcGRhdGVkJywgdW5kZWZpbmVkKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBfY2hhdEhpc3RvcnlVcGRhdGVkIG5vdGlmaWNhdGlvbjpcIiwgZSkpO1xuXG4gICAgICAvLyA0LiBSZXR1cm4gdGhlIHNhdmVkIGZsYXNoY2FyZCBvYmplY3QgYXMgZXhwZWN0ZWQgYnkgdGhlIFByb21pc2VcbiAgICAgIHJldHVybiBuZXdGbGFzaGNhcmQ7XG5cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0JhY2tncm91bmRdIEVycm9yIHByb2Nlc3Npbmcgc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeTpcIiwgZXJyb3IpO1xuICAgICAgLy8gVGhyb3cgdGhlIGVycm9yIHRvIHJlamVjdCB0aGUgcHJvbWlzZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc2F2ZSBmbGFzaGNhcmQ6ICR7ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gLS0tIEFkZCBvdGhlciBiYWNrZ3JvdW5kIGxpc3RlbmVycyBoZXJlIChlLmcuLCBhbGFybXMsIG90aGVyIG1lc3NhZ2VzKSAtLS1cblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGluc3RhbGwvdXBkYXRlIGV2ZW50cyAtLS1cbiAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jIChkZXRhaWxzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0V4dGVuc2lvbiBpbnN0YWxsZWQ6JywgZGV0YWlscyk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgcmVhc29uIGZvciB0aGUgZXZlbnQgaXMgdGhlIGluaXRpYWwgaW5zdGFsbGF0aW9uXG4gICAgaWYgKGRldGFpbHMucmVhc29uID09PSAnaW5zdGFsbCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQZXJmb3JtaW5nIGZpcnN0LXRpbWUgc2V0dXAuLi4nKTtcbiAgICAgIC8vIE9ubHkgbmVlZCB0byBlbnN1cmUgb2Zmc2NyZWVuIGRvY3VtZW50IGV4aXN0cy4gU2NoZW1hIGlzIGluaXRpYWxpemVkIHdpdGhpbiBvZmZzY3JlZW4udHMuXG4gICAgICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gSW5pdGlhbCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50IGZhaWxlZCBvbiBpbnN0YWxsOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb25zdHJ1Y3QgdGhlIFVSTCBmb3IgdGhlIG9uYm9hcmRpbmcgcGFnZVxuICAgICAgY29uc3QgdXJsID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnb25ib2FyZGluZy5odG1sJyk7XG5cbiAgICAgIC8vIE9wZW4gdGhlIG9uYm9hcmRpbmcgcGFnZSBpbiBhIG5ldyB0YWJcbiAgICAgIGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBPcGVuZWQgb25ib2FyZGluZyBwYWdlOiAke3VybH1gKTtcbiAgICB9IGVsc2UgaWYgKGRldGFpbHMucmVhc29uID09PSAndXBkYXRlJykge1xuICAgICAgLy8gT3B0aW9uYWw6IEhhbmRsZSB1cGRhdGVzLCBlLmcuLCBzaG93IG5vdGlmaWNhdGlvbnMgb3IgbWlncmF0ZSBkYXRhXG4gICAgICBjb25zb2xlLmxvZyhgW0JhY2tncm91bmRdIFVwZGF0ZWQgZnJvbSAke2RldGFpbHMucHJldmlvdXNWZXJzaW9ufSB0byAke2Jyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb259YCk7XG4gICAgICAvLyBVbmNvbW1lbnQgdG8gb3BlbiBzZXR0aW5ncyBvbiB1cGRhdGU6XG4gICAgICAvLyB0cnkge1xuICAgICAgLy8gICBhd2FpdCBicm93c2VyLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XG4gICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBFcnJvciBvcGVuaW5nIHNldHRpbmdzIHBhZ2Ugb24gdXBkYXRlOicsIGVycm9yKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgYnJvd3NlciBzdGFydHVwIC0tLVxuICAvLyBVc2Ugb25TdGFydHVwIHRvIGVuc3VyZSB0aGUgb2Zmc2NyZWVuIGRvY3VtZW50IGlzIHJlYWR5IHdoZW4gdGhlIGJyb3dzZXIgc3RhcnRzXG4gIGJyb3dzZXIucnVudGltZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gQnJvd3NlciBzdGFydHVwIGRldGVjdGVkLiBTZXR0aW5nIHVwIG9mZnNjcmVlbiBkb2N1bWVudC4uLicpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCk7XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIE9mZnNjcmVlbiBkb2N1bWVudCBzZXR1cCBjb21wbGV0ZSBvbiBzdGFydHVwLicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCBmYWlsZWQgb24gc3RhcnR1cDonLCBlcnJvcik7XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZygnQmFja2dyb3VuZCBzY3JpcHQgc2V0dXAgY29tcGxldGUuJyk7XG59KTsgIiwiLy8gI3JlZ2lvbiBzbmlwcGV0XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZT8uaWRcbiAgPyBnbG9iYWxUaGlzLmJyb3dzZXJcbiAgOiBnbG9iYWxUaGlzLmNocm9tZTtcbi8vICNlbmRyZWdpb24gc25pcHBldFxuIiwiaW1wb3J0IHsgYnJvd3NlciBhcyBfYnJvd3NlciB9IGZyb20gXCJAd3h0LWRldi9icm93c2VyXCI7XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IF9icm93c2VyO1xuZXhwb3J0IHt9O1xuIiwiLy8gc3JjL2luZGV4LnRzXG52YXIgX01hdGNoUGF0dGVybiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IobWF0Y2hQYXR0ZXJuKSB7XG4gICAgaWYgKG1hdGNoUGF0dGVybiA9PT0gXCI8YWxsX3VybHM+XCIpIHtcbiAgICAgIHRoaXMuaXNBbGxVcmxzID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gWy4uLl9NYXRjaFBhdHRlcm4uUFJPVE9DT0xTXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IFwiKlwiO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gXCIqXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IC8oLiopOlxcL1xcLyguKj8pKFxcLy4qKS8uZXhlYyhtYXRjaFBhdHRlcm4pO1xuICAgICAgaWYgKGdyb3VwcyA9PSBudWxsKVxuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIFwiSW5jb3JyZWN0IGZvcm1hdFwiKTtcbiAgICAgIGNvbnN0IFtfLCBwcm90b2NvbCwgaG9zdG5hbWUsIHBhdGhuYW1lXSA9IGdyb3VwcztcbiAgICAgIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCk7XG4gICAgICB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpO1xuICAgICAgdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gcHJvdG9jb2wgPT09IFwiKlwiID8gW1wiaHR0cFwiLCBcImh0dHBzXCJdIDogW3Byb3RvY29sXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IGhvc3RuYW1lO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gcGF0aG5hbWU7XG4gICAgfVxuICB9XG4gIGluY2x1ZGVzKHVybCkge1xuICAgIGlmICh0aGlzLmlzQWxsVXJscylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHUgPSB0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiID8gbmV3IFVSTCh1cmwpIDogdXJsIGluc3RhbmNlb2YgTG9jYXRpb24gPyBuZXcgVVJMKHVybC5ocmVmKSA6IHVybDtcbiAgICByZXR1cm4gISF0aGlzLnByb3RvY29sTWF0Y2hlcy5maW5kKChwcm90b2NvbCkgPT4ge1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHNcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwc01hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImZpbGVcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaWxlTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiZnRwXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzRnRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwidXJuXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzVXJuTWF0Y2godSk7XG4gICAgfSk7XG4gIH1cbiAgaXNIdHRwTWF0Y2godXJsKSB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybCk7XG4gIH1cbiAgaXNIdHRwc01hdGNoKHVybCkge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgJiYgdGhpcy5pc0hvc3RQYXRoTWF0Y2godXJsKTtcbiAgfVxuICBpc0hvc3RQYXRoTWF0Y2godXJsKSB7XG4gICAgaWYgKCF0aGlzLmhvc3RuYW1lTWF0Y2ggfHwgIXRoaXMucGF0aG5hbWVNYXRjaClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBob3N0bmFtZU1hdGNoUmVnZXhzID0gW1xuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoKSxcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaC5yZXBsYWNlKC9eXFwqXFwuLywgXCJcIikpXG4gICAgXTtcbiAgICBjb25zdCBwYXRobmFtZU1hdGNoUmVnZXggPSB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLnBhdGhuYW1lTWF0Y2gpO1xuICAgIHJldHVybiAhIWhvc3RuYW1lTWF0Y2hSZWdleHMuZmluZCgocmVnZXgpID0+IHJlZ2V4LnRlc3QodXJsLmhvc3RuYW1lKSkgJiYgcGF0aG5hbWVNYXRjaFJlZ2V4LnRlc3QodXJsLnBhdGhuYW1lKTtcbiAgfVxuICBpc0ZpbGVNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZmlsZTovLyBwYXR0ZXJuIG1hdGNoaW5nLiBPcGVuIGEgUFIgdG8gYWRkIHN1cHBvcnRcIik7XG4gIH1cbiAgaXNGdHBNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZnRwOi8vIHBhdHRlcm4gbWF0Y2hpbmcuIE9wZW4gYSBQUiB0byBhZGQgc3VwcG9ydFwiKTtcbiAgfVxuICBpc1Vybk1hdGNoKHVybCkge1xuICAgIHRocm93IEVycm9yKFwiTm90IGltcGxlbWVudGVkOiB1cm46Ly8gcGF0dGVybiBtYXRjaGluZy4gT3BlbiBhIFBSIHRvIGFkZCBzdXBwb3J0XCIpO1xuICB9XG4gIGNvbnZlcnRQYXR0ZXJuVG9SZWdleChwYXR0ZXJuKSB7XG4gICAgY29uc3QgZXNjYXBlZCA9IHRoaXMuZXNjYXBlRm9yUmVnZXgocGF0dGVybik7XG4gICAgY29uc3Qgc3RhcnNSZXBsYWNlZCA9IGVzY2FwZWQucmVwbGFjZSgvXFxcXFxcKi9nLCBcIi4qXCIpO1xuICAgIHJldHVybiBSZWdFeHAoYF4ke3N0YXJzUmVwbGFjZWR9JGApO1xuICB9XG4gIGVzY2FwZUZvclJlZ2V4KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xuICB9XG59O1xudmFyIE1hdGNoUGF0dGVybiA9IF9NYXRjaFBhdHRlcm47XG5NYXRjaFBhdHRlcm4uUFJPVE9DT0xTID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiZmlsZVwiLCBcImZ0cFwiLCBcInVyblwiXTtcbnZhciBJbnZhbGlkTWF0Y2hQYXR0ZXJuID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoUGF0dGVybiwgcmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgbWF0Y2ggcGF0dGVybiBcIiR7bWF0Y2hQYXR0ZXJufVwiOiAke3JlYXNvbn1gKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCkge1xuICBpZiAoIU1hdGNoUGF0dGVybi5QUk9UT0NPTFMuaW5jbHVkZXMocHJvdG9jb2wpICYmIHByb3RvY29sICE9PSBcIipcIilcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgIG1hdGNoUGF0dGVybixcbiAgICAgIGAke3Byb3RvY29sfSBub3QgYSB2YWxpZCBwcm90b2NvbCAoJHtNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmpvaW4oXCIsIFwiKX0pYFxuICAgICk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpIHtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiOlwiKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIGBIb3N0bmFtZSBjYW5ub3QgaW5jbHVkZSBhIHBvcnRgKTtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiKlwiKSAmJiBob3N0bmFtZS5sZW5ndGggPiAxICYmICFob3N0bmFtZS5zdGFydHNXaXRoKFwiKi5cIikpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICBtYXRjaFBhdHRlcm4sXG4gICAgICBgSWYgdXNpbmcgYSB3aWxkY2FyZCAoKiksIGl0IG11c3QgZ28gYXQgdGhlIHN0YXJ0IG9mIHRoZSBob3N0bmFtZWBcbiAgICApO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIHJldHVybjtcbn1cbmV4cG9ydCB7XG4gIEludmFsaWRNYXRjaFBhdHRlcm4sXG4gIE1hdGNoUGF0dGVyblxufTtcbiJdLCJuYW1lcyI6WyJ0aGlzIiwibW9kdWxlIiwicHJveHlUYXJnZXQiLCJ2YWx1ZSIsIm9uTWVzc2FnZSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJFcnJvciIsIl9fZGVmUHJvcCIsIl9fZGVmTm9ybWFsUHJvcCIsIngiLCJfYiIsIl9iMiIsIl9hIiwidiIsIk9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIIiwiYnJvd3NlciIsImNyZWF0ZUVtcHR5Q2FyZCIsIlN0YXRlIiwicGFyc2VkSnNvbiIsIl9icm93c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxXQUFTLGlCQUFpQixLQUFLO0FBQ3BDLFFBQUksT0FBTyxRQUFRLE9BQU8sUUFBUSxXQUFZLFFBQU8sRUFBRSxNQUFNLElBQUs7QUFDbEUsV0FBTztBQUFBLEVBQ1Q7Ozs7Ozs7Ozs7O0FDSEEsT0FBQyxTQUFVLFFBQVEsU0FBUztBQUdpQjtBQUN6QyxrQkFBUSxNQUFNO0FBQUEsUUFDbEI7QUFBQSxNQU9BLEdBQUcsT0FBTyxlQUFlLGNBQWMsYUFBYSxPQUFPLFNBQVMsY0FBYyxPQUFPQSxtQkFBTSxTQUFVQyxTQUFRO0FBUy9HLFlBQUksRUFBRSxXQUFXLFVBQVUsV0FBVyxPQUFPLFdBQVcsV0FBVyxPQUFPLFFBQVEsS0FBSztBQUNyRixnQkFBTSxJQUFJLE1BQU0sMkRBQTJEO0FBQUEsUUFDL0U7QUFDRSxZQUFJLEVBQUUsV0FBVyxXQUFXLFdBQVcsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUs7QUFDeEYsZ0JBQU0sbURBQW1EO0FBT3pELGdCQUFNLFdBQVcsbUJBQWlCO0FBSWhDLGtCQUFNLGNBQWM7QUFBQSxjQUNsQixVQUFVO0FBQUEsZ0JBQ1IsU0FBUztBQUFBLGtCQUNQLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ1o7QUFBQSxnQkFDRCxZQUFZO0FBQUEsa0JBQ1YsV0FBVztBQUFBLGtCQUNYLFdBQVc7QUFBQSxnQkFDWjtBQUFBLGdCQUNELE9BQU87QUFBQSxrQkFDTCxXQUFXO0FBQUEsa0JBQ1gsV0FBVztBQUFBLGdCQUNaO0FBQUEsZ0JBQ0QsVUFBVTtBQUFBLGtCQUNSLFdBQVc7QUFBQSxrQkFDWCxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUEsY0FDUztBQUFBLGNBQ0QsYUFBYTtBQUFBLGdCQUNYLFVBQVU7QUFBQSxr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RyxLQUFHLE1BQUksRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFPLElBQUcsSUFBRSxLQUFHLEdBQUc7QUFBQSxFQUFDO0FBQUMsV0FBUyxFQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLEtBQUcsQ0FBQyxFQUFFLE9BQU0sSUFBSSxNQUFNLGNBQWM7QUFBRSxVQUFNLElBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFTLElBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFPO0FBQUcsUUFBSSxJQUFFO0FBQUUsWUFBTyxHQUFDO0FBQUEsTUFBRSxLQUFJO0FBQU8sWUFBRSxLQUFLLE1BQU0sS0FBRyxLQUFHLEtBQUcsS0FBRyxJQUFJO0FBQUU7QUFBQSxNQUFNLEtBQUk7QUFBVSxZQUFFLEtBQUssTUFBTSxLQUFHLEtBQUcsSUFBSTtBQUFFO0FBQUEsSUFBSztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxFQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLEVBQUUsWUFBVyxHQUFHLElBQUUsRUFBRSxTQUFRLElBQUcsR0FBRSxJQUFFLEVBQUUsUUFBTyxHQUFHLElBQUUsRUFBRSxTQUFRLEdBQUcsSUFBRSxFQUFFLGNBQWEsSUFBRSxFQUFFLFdBQVk7QUFBQyxXQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFBQSxFQUFFO0FBQUMsV0FBUyxFQUFFLEdBQUU7QUFBQyxXQUFPLElBQUUsS0FBRyxJQUFJLENBQUMsS0FBRyxHQUFHLENBQUM7QUFBQSxFQUFFO0FBQUMsUUFBTSxJQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsSUFBRSxDQUFDLFVBQVMsT0FBTSxRQUFPLE9BQU0sU0FBUSxNQUFNO0FBQUUsV0FBUyxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsR0FB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USx1QkFBdUIsTUFBTTtBQUFBLElBQ3ZEO0FBQUEsRUFDQTtBQUNBLE1BQUksZUFBZTtBQUNuQixlQUFhLFlBQVksQ0FBQyxRQUFRLFNBQVMsUUFBUSxPQUFPLEtBQUs7QUFDL0QsTUFBSSxzQkFBc0IsY0FBYyxNQUFNO0FBQUEsSUFDNUMsWUFBWSxjQUFjLFFBQVE7QUFDaEMsWUFBTSwwQkFBMEIsWUFBWSxNQUFNLE1BQU0sRUFBRTtBQUFBLElBQzlEO0FBQUEsRUFDQTtBQUNBLFdBQVMsaUJBQWlCLGNBQWMsVUFBVTtBQUNoRCxRQUFJLENBQUMsYUFBYSxVQUFVLFNBQVMsUUFBUSxLQUFLLGFBQWE7QUFDN0QsWUFBTSxJQUFJO0FBQUEsUUFDUjtBQUFBLFFBQ0EsR0FBRyxRQUFRLDBCQUEwQixhQUFhLFVBQVUsS0FBSyxJQUFJLENBQUM7QUFBQSxNQUN2RTtBQUFBLEVBQ0w7QUFDQSxXQUFTLGlCQUFpQixjQUFjLFVBQVU7QUFDaEQsUUFBSSxTQUFTLFNBQVMsR0FBRztBQUN2QixZQUFNLElBQUksb0JBQW9CLGNBQWMsZ0NBQWdDO0FBQzlFLFFBQUksU0FBUyxTQUFTLEdBQUcsS0FBSyxTQUFTLFNBQVMsS0FBSyxDQUFDLFNBQVMsV0FBVyxJQUFJO0FBQzVFLFlBQU0sSUFBSTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLEVBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsOCw5LDE1LDE2LDE3XX0=
