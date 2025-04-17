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
    providerId: "openrouter",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjIwLjFfQHR5cGVzK25vZGVAMjIuMTQuMV9qaXRpQDIuNC4yX2xpZ2h0bmluZ2Nzc0AxLjI5LjJfcm9sbHVwQDQuNDAuMC9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvdXRpbHMvZGVmaW5lLWJhY2tncm91bmQubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjEyLjAvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2VyaWFsaXplLWVycm9yQDExLjAuMy9ub2RlX21vZHVsZXMvc2VyaWFsaXplLWVycm9yL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zZXJpYWxpemUtZXJyb3JAMTEuMC4zL25vZGVfbW9kdWxlcy9zZXJpYWxpemUtZXJyb3IvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHdlYmV4dC1jb3JlK21lc3NhZ2luZ0AyLjIuMC9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21lc3NhZ2luZy9saWIvY2h1bmstQlFMRlNGRlouanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd2ViZXh0ZW5zaW9uLXBvbHlmaWxsQDAuMTAuMC9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2ViZXh0LWNvcmUrbWVzc2FnaW5nQDIuMi4wL25vZGVfbW9kdWxlcy9Ad2ViZXh0LWNvcmUvbWVzc2FnaW5nL2xpYi9pbmRleC5qcyIsIi4uLy4uL3V0aWxzL21lc3NhZ2luZy50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9hc3luYy1tdXRleEAwLjUuMC9ub2RlX21vZHVsZXMvYXN5bmMtbXV0ZXgvaW5kZXgubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RzLWZzcnNANC43LjEvbm9kZV9tb2R1bGVzL3RzLWZzcnMvZGlzdC9pbmRleC5tanMiLCIuLi8uLi91dGlscy9kYi50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9sbG1TZXJ2aWNlLnRzIiwiLi4vLi4vZW50cnlwb2ludHMvYmFja2dyb3VuZC50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad3h0LWRlditicm93c2VyQDAuMC4zMTUvbm9kZV9tb2R1bGVzL0B3eHQtZGV2L2Jyb3dzZXIvc3JjL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4yMC4xX0B0eXBlcytub2RlQDIyLjE0LjFfaml0aUAyLjQuMl9saWdodG5pbmdjc3NAMS4yOS4yX3JvbGx1cEA0LjQwLjAvbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2Jyb3dzZXIubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3ZWJleHQtY29yZSttYXRjaC1wYXR0ZXJuc0AxLjAuMy9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21hdGNoLXBhdHRlcm5zL2xpYi9pbmRleC5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm92aWRlcnMvb2xsYW1hLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL3Byb3ZpZGVycy9vcGVucm91dGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWZpbmVCYWNrZ3JvdW5kKGFyZykge1xuICBpZiAoYXJnID09IG51bGwgfHwgdHlwZW9mIGFyZyA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4geyBtYWluOiBhcmcgfTtcbiAgcmV0dXJuIGFyZztcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTIuMCAtIFR1ZSBNYXkgMTQgMjAyNCAxODowMToyOSAqL1xuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG4gIGlmICghKGdsb2JhbFRoaXMuYnJvd3NlciAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZSAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZS5pZCkpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAgIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICAgIG1heEFyZ3M6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBkZXZ0b29sczoge1xuICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycylcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiY29uc3QgbGlzdCA9IFtcblx0Ly8gTmF0aXZlIEVTIGVycm9ycyBodHRwczovLzI2Mi5lY21hLWludGVybmF0aW9uYWwub3JnLzEyLjAvI3NlYy13ZWxsLWtub3duLWludHJpbnNpYy1vYmplY3RzXG5cdEV2YWxFcnJvcixcblx0UmFuZ2VFcnJvcixcblx0UmVmZXJlbmNlRXJyb3IsXG5cdFN5bnRheEVycm9yLFxuXHRUeXBlRXJyb3IsXG5cdFVSSUVycm9yLFxuXG5cdC8vIEJ1aWx0LWluIGVycm9yc1xuXHRnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbixcblxuXHQvLyBOb2RlLXNwZWNpZmljIGVycm9yc1xuXHQvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2Vycm9ycy5odG1sXG5cdGdsb2JhbFRoaXMuQXNzZXJ0aW9uRXJyb3IsXG5cdGdsb2JhbFRoaXMuU3lzdGVtRXJyb3IsXG5dXG5cdC8vIE5vbi1uYXRpdmUgRXJyb3JzIGFyZSB1c2VkIHdpdGggYGdsb2JhbFRoaXNgIGJlY2F1c2UgdGhleSBtaWdodCBiZSBtaXNzaW5nLiBUaGlzIGZpbHRlciBkcm9wcyB0aGVtIHdoZW4gdW5kZWZpbmVkLlxuXHQuZmlsdGVyKEJvb2xlYW4pXG5cdC5tYXAoXG5cdFx0Y29uc3RydWN0b3IgPT4gW2NvbnN0cnVjdG9yLm5hbWUsIGNvbnN0cnVjdG9yXSxcblx0KTtcblxuY29uc3QgZXJyb3JDb25zdHJ1Y3RvcnMgPSBuZXcgTWFwKGxpc3QpO1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckNvbnN0cnVjdG9ycztcbiIsImltcG9ydCBlcnJvckNvbnN0cnVjdG9ycyBmcm9tICcuL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBOb25FcnJvciBleHRlbmRzIEVycm9yIHtcblx0bmFtZSA9ICdOb25FcnJvcic7XG5cblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKE5vbkVycm9yLl9wcmVwYXJlU3VwZXJNZXNzYWdlKG1lc3NhZ2UpKTtcblx0fVxuXG5cdHN0YXRpYyBfcHJlcGFyZVN1cGVyTWVzc2FnZShtZXNzYWdlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBTdHJpbmcobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGNvbW1vblByb3BlcnRpZXMgPSBbXG5cdHtcblx0XHRwcm9wZXJ0eTogJ25hbWUnLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdtZXNzYWdlJyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnc3RhY2snLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdjb2RlJyxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdjYXVzZScsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdH0sXG5dO1xuXG5jb25zdCB0b0pzb25XYXNDYWxsZWQgPSBuZXcgV2Vha1NldCgpO1xuXG5jb25zdCB0b0pTT04gPSBmcm9tID0+IHtcblx0dG9Kc29uV2FzQ2FsbGVkLmFkZChmcm9tKTtcblx0Y29uc3QganNvbiA9IGZyb20udG9KU09OKCk7XG5cdHRvSnNvbldhc0NhbGxlZC5kZWxldGUoZnJvbSk7XG5cdHJldHVybiBqc29uO1xufTtcblxuY29uc3QgZ2V0RXJyb3JDb25zdHJ1Y3RvciA9IG5hbWUgPT4gZXJyb3JDb25zdHJ1Y3RvcnMuZ2V0KG5hbWUpID8/IEVycm9yO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuY29uc3QgZGVzdHJveUNpcmN1bGFyID0gKHtcblx0ZnJvbSxcblx0c2Vlbixcblx0dG8sXG5cdGZvcmNlRW51bWVyYWJsZSxcblx0bWF4RGVwdGgsXG5cdGRlcHRoLFxuXHR1c2VUb0pTT04sXG5cdHNlcmlhbGl6ZSxcbn0pID0+IHtcblx0aWYgKCF0bykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGZyb20pKSB7XG5cdFx0XHR0byA9IFtdO1xuXHRcdH0gZWxzZSBpZiAoIXNlcmlhbGl6ZSAmJiBpc0Vycm9yTGlrZShmcm9tKSkge1xuXHRcdFx0Y29uc3QgRXJyb3IgPSBnZXRFcnJvckNvbnN0cnVjdG9yKGZyb20ubmFtZSk7XG5cdFx0XHR0byA9IG5ldyBFcnJvcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0byA9IHt9O1xuXHRcdH1cblx0fVxuXG5cdHNlZW4ucHVzaChmcm9tKTtcblxuXHRpZiAoZGVwdGggPj0gbWF4RGVwdGgpIHtcblx0XHRyZXR1cm4gdG87XG5cdH1cblxuXHRpZiAodXNlVG9KU09OICYmIHR5cGVvZiBmcm9tLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyAmJiAhdG9Kc29uV2FzQ2FsbGVkLmhhcyhmcm9tKSkge1xuXHRcdHJldHVybiB0b0pTT04oZnJvbSk7XG5cdH1cblxuXHRjb25zdCBjb250aW51ZURlc3Ryb3lDaXJjdWxhciA9IHZhbHVlID0+IGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0ZnJvbTogdmFsdWUsXG5cdFx0c2VlbjogWy4uLnNlZW5dLFxuXHRcdGZvcmNlRW51bWVyYWJsZSxcblx0XHRtYXhEZXB0aCxcblx0XHRkZXB0aCxcblx0XHR1c2VUb0pTT04sXG5cdFx0c2VyaWFsaXplLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmcm9tKSkge1xuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0J1ZmZlcicpIHtcblx0XHRcdHRvW2tleV0gPSAnW29iamVjdCBCdWZmZXJdJztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IFVzZSBgc3RyZWFtLmlzUmVhZGFibGUoKWAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxOC5cblx0XHRpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUucGlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dG9ba2V5XSA9ICdbb2JqZWN0IFN0cmVhbV0nO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHQvLyBHcmFjZWZ1bGx5IGhhbmRsZSBub24tY29uZmlndXJhYmxlIGVycm9ycyBsaWtlIGBET01FeGNlcHRpb25gLlxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dG9ba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSBjYXRjaCB7fVxuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIXNlZW4uaW5jbHVkZXMoZnJvbVtrZXldKSkge1xuXHRcdFx0ZGVwdGgrKztcblx0XHRcdHRvW2tleV0gPSBjb250aW51ZURlc3Ryb3lDaXJjdWxhcihmcm9tW2tleV0pO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0b1trZXldID0gJ1tDaXJjdWxhcl0nO1xuXHR9XG5cblx0Zm9yIChjb25zdCB7cHJvcGVydHksIGVudW1lcmFibGV9IG9mIGNvbW1vblByb3BlcnRpZXMpIHtcblx0XHRpZiAodHlwZW9mIGZyb21bcHJvcGVydHldICE9PSAndW5kZWZpbmVkJyAmJiBmcm9tW3Byb3BlcnR5XSAhPT0gbnVsbCkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBwcm9wZXJ0eSwge1xuXHRcdFx0XHR2YWx1ZTogaXNFcnJvckxpa2UoZnJvbVtwcm9wZXJ0eV0pID8gY29udGludWVEZXN0cm95Q2lyY3VsYXIoZnJvbVtwcm9wZXJ0eV0pIDogZnJvbVtwcm9wZXJ0eV0sXG5cdFx0XHRcdGVudW1lcmFibGU6IGZvcmNlRW51bWVyYWJsZSA/IHRydWUgOiBlbnVtZXJhYmxlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUVycm9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdG1heERlcHRoID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuXHRcdHVzZVRvSlNPTiA9IHRydWUsXG5cdH0gPSBvcHRpb25zO1xuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0XHRmcm9tOiB2YWx1ZSxcblx0XHRcdHNlZW46IFtdLFxuXHRcdFx0Zm9yY2VFbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0bWF4RGVwdGgsXG5cdFx0XHRkZXB0aDogMCxcblx0XHRcdHVzZVRvSlNPTixcblx0XHRcdHNlcmlhbGl6ZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXG5cdC8vIFBlb3BsZSBzb21ldGltZXMgdGhyb3cgdGhpbmdzIGJlc2lkZXMgRXJyb3Igb2JqZWN0c+KAplxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gYEpTT04uc3RyaW5naWZ5KClgIGRpc2NhcmRzIGZ1bmN0aW9ucy4gV2UgZG8gdG9vLCB1bmxlc3MgYSBmdW5jdGlvbiBpcyB0aHJvd24gZGlyZWN0bHkuXG5cdFx0Ly8gV2UgaW50ZW50aW9uYWxseSB1c2UgYHx8YCBiZWNhdXNlIGAubmFtZWAgaXMgYW4gZW1wdHkgc3RyaW5nIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zLlxuXHRcdHJldHVybiBgW0Z1bmN0aW9uOiAke3ZhbHVlLm5hbWUgfHwgJ2Fub255bW91cyd9XWA7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge21heERlcHRoID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZfSA9IG9wdGlvbnM7XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAoaXNNaW5pbXVtVmlhYmxlU2VyaWFsaXplZEVycm9yKHZhbHVlKSkge1xuXHRcdGNvbnN0IEVycm9yID0gZ2V0RXJyb3JDb25zdHJ1Y3Rvcih2YWx1ZS5uYW1lKTtcblx0XHRyZXR1cm4gZGVzdHJveUNpcmN1bGFyKHtcblx0XHRcdGZyb206IHZhbHVlLFxuXHRcdFx0c2VlbjogW10sXG5cdFx0XHR0bzogbmV3IEVycm9yKCksXG5cdFx0XHRtYXhEZXB0aCxcblx0XHRcdGRlcHRoOiAwLFxuXHRcdFx0c2VyaWFsaXplOiBmYWxzZSxcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBuZXcgTm9uRXJyb3IodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvckxpa2UodmFsdWUpIHtcblx0cmV0dXJuIEJvb2xlYW4odmFsdWUpXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0JiYgJ25hbWUnIGluIHZhbHVlXG5cdCYmICdtZXNzYWdlJyBpbiB2YWx1ZVxuXHQmJiAnc3RhY2snIGluIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc01pbmltdW1WaWFibGVTZXJpYWxpemVkRXJyb3IodmFsdWUpIHtcblx0cmV0dXJuIEJvb2xlYW4odmFsdWUpXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0JiYgJ21lc3NhZ2UnIGluIHZhbHVlXG5cdCYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGVycm9yQ29uc3RydWN0b3JzfSBmcm9tICcuL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyc7XG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZGVmUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBfX2dldE93blByb3BEZXNjcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG52YXIgX19zcHJlYWRQcm9wcyA9IChhLCBiKSA9PiBfX2RlZlByb3BzKGEsIF9fZ2V0T3duUHJvcERlc2NzKGIpKTtcbnZhciBfX29ialJlc3QgPSAoc291cmNlLCBleGNsdWRlKSA9PiB7XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKHNvdXJjZSwgcHJvcCkgJiYgZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMClcbiAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgaWYgKHNvdXJjZSAhPSBudWxsICYmIF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKHNvdXJjZSkpIHtcbiAgICAgIGlmIChleGNsdWRlLmluZGV4T2YocHJvcCkgPCAwICYmIF9fcHJvcElzRW51bS5jYWxsKHNvdXJjZSwgcHJvcCkpXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fYXN5bmMgPSAoX190aGlzLCBfX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdmFyIGZ1bGZpbGxlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVqZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBzdGVwID0gKHgpID0+IHguZG9uZSA/IHJlc29sdmUoeC52YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUoeC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbiAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkoX190aGlzLCBfX2FyZ3VtZW50cykpLm5leHQoKSk7XG4gIH0pO1xufTtcblxuLy8gc3JjL2dlbmVyaWMudHNcbmltcG9ydCB7IHNlcmlhbGl6ZUVycm9yLCBkZXNlcmlhbGl6ZUVycm9yIH0gZnJvbSBcInNlcmlhbGl6ZS1lcnJvclwiO1xuZnVuY3Rpb24gZGVmaW5lR2VuZXJpY01lc3NhbmdpbmcoY29uZmlnKSB7XG4gIGxldCByZW1vdmVSb290TGlzdGVuZXI7XG4gIGxldCBwZXJUeXBlTGlzdGVuZXJzID0ge307XG4gIGZ1bmN0aW9uIGNsZWFudXBSb290TGlzdGVuZXIoKSB7XG4gICAgaWYgKE9iamVjdC5lbnRyaWVzKHBlclR5cGVMaXN0ZW5lcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVtb3ZlUm9vdExpc3RlbmVyID09IG51bGwgPyB2b2lkIDAgOiByZW1vdmVSb290TGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZVJvb3RMaXN0ZW5lciA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgbGV0IGlkU2VxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU0KTtcbiAgZnVuY3Rpb24gZ2V0TmV4dElkKCkge1xuICAgIHJldHVybiBpZFNlcSsrO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2VuZE1lc3NhZ2UodHlwZSwgZGF0YSwgLi4uYXJncykge1xuICAgICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hMiwgX2IsIF9jLCBfZDtcbiAgICAgICAgY29uc3QgX21lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IGdldE5leHRJZCgpLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IChfYiA9IHlpZWxkIChfYTIgPSBjb25maWcudmVyaWZ5TWVzc2FnZURhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuY2FsbChjb25maWcsIF9tZXNzYWdlKSkgIT0gbnVsbCA/IF9iIDogX21lc3NhZ2U7XG4gICAgICAgIChfYyA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYy5kZWJ1ZyhgW21lc3NhZ2luZ10gc2VuZE1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgbWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY29uZmlnLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCB7IHJlcywgZXJyIH0gPSByZXNwb25zZSAhPSBudWxsID8gcmVzcG9uc2UgOiB7IGVycjogbmV3IEVycm9yKFwiTm8gcmVzcG9uc2VcIikgfTtcbiAgICAgICAgKF9kID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9kLmRlYnVnKGBbbWVzc2FnaW5nXSBzZW5kTWVzc2FnZSB7aWQ9JHttZXNzYWdlLmlkfX0gXFx1MTQwQVxcdTI1MDBgLCB7IHJlcywgZXJyIH0pO1xuICAgICAgICBpZiAoZXJyICE9IG51bGwpXG4gICAgICAgICAgdGhyb3cgZGVzZXJpYWxpemVFcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbk1lc3NhZ2UodHlwZSwgb25SZWNlaXZlZCkge1xuICAgICAgdmFyIF9hMiwgX2IsIF9jO1xuICAgICAgaWYgKHJlbW92ZVJvb3RMaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgIChfYTIgPSBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmRlYnVnKFxuICAgICAgICAgIGBbbWVzc2FnaW5nXSBcIiR7dHlwZX1cIiBpbml0aWFsaXplZCB0aGUgbWVzc2FnZSBsaXN0ZW5lciBmb3IgdGhpcyBjb250ZXh0YFxuICAgICAgICApO1xuICAgICAgICByZW1vdmVSb290TGlzdGVuZXIgPSBjb25maWcuYWRkUm9vdExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgdmFyIF9hMywgX2IyO1xuICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS50eXBlICE9IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UudGltZXN0YW1wICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmJyZWFrRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIGBbbWVzc2FnaW5nXSBVbmtub3duIG1lc3NhZ2UgZm9ybWF0LCBtdXN0IGluY2x1ZGUgdGhlICd0eXBlJyAmICd0aW1lc3RhbXAnIGZpZWxkcywgcmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoX2EzID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoX2IyID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLmRlYnVnKFwiW21lc3NhZ2luZ10gUmVjZWl2ZWQgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHBlclR5cGVMaXN0ZW5lcnNbbWVzc2FnZS50eXBlXTtcbiAgICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjb25zdCByZXMgPSBsaXN0ZW5lcihtZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigocmVzMikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNCwgX2IzO1xuICAgICAgICAgICAgcmV0dXJuIChfYjMgPSAoX2E0ID0gY29uZmlnLnZlcmlmeU1lc3NhZ2VEYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmNhbGwoY29uZmlnLCByZXMyKSkgIT0gbnVsbCA/IF9iMyA6IHJlczI7XG4gICAgICAgICAgfSkudGhlbigocmVzMikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNDtcbiAgICAgICAgICAgIChfYTQgPSBjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYTQuZGVidWcoYFttZXNzYWdpbmddIG9uTWVzc2FnZSB7aWQ9JHttZXNzYWdlLmlkfX0gXFx1MjUwMFxcdTE0MDVgLCB7IHJlczogcmVzMiB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IHJlczogcmVzMiB9O1xuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTQ7XG4gICAgICAgICAgICAoX2E0ID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmRlYnVnKGBbbWVzc2FnaW5nXSBvbk1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgeyBlcnIgfSk7XG4gICAgICAgICAgICByZXR1cm4geyBlcnI6IHNlcmlhbGl6ZUVycm9yKGVycikgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGVyVHlwZUxpc3RlbmVyc1t0eXBlXSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IEVycm9yKFxuICAgICAgICAgIGBbbWVzc2FnaW5nXSBJbiB0aGlzIEpTIGNvbnRleHQsIG9ubHkgb25lIGxpc3RlbmVyIGNhbiBiZSBzZXR1cCBmb3IgJHt0eXBlfWBcbiAgICAgICAgKTtcbiAgICAgICAgKF9iID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmVycm9yKGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHBlclR5cGVMaXN0ZW5lcnNbdHlwZV0gPSBvblJlY2VpdmVkO1xuICAgICAgKF9jID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLmxvZyhgW21lc3NhZ2luZ10gQWRkZWQgbGlzdGVuZXIgZm9yICR7dHlwZX1gKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBwZXJUeXBlTGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICBjbGVhbnVwUm9vdExpc3RlbmVyKCk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgT2JqZWN0LmtleXMocGVyVHlwZUxpc3RlbmVycykuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBkZWxldGUgcGVyVHlwZUxpc3RlbmVyc1t0eXBlXTtcbiAgICAgIH0pO1xuICAgICAgY2xlYW51cFJvb3RMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgX19zcHJlYWRWYWx1ZXMsXG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fb2JqUmVzdCxcbiAgX19hc3luYyxcbiAgZGVmaW5lR2VuZXJpY01lc3Nhbmdpbmdcbn07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge31cbiAgICAgICAgICAvKiB3cmFwcGVycyAqL1xuICAgICAgICAgICwge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuXG5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cblxuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfSAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG5cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9OyAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsImltcG9ydCB7XG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fc3ByZWFkVmFsdWVzLFxuICBkZWZpbmVHZW5lcmljTWVzc2FuZ2luZ1xufSBmcm9tIFwiLi9jaHVuay1CUUxGU0ZGWi5qc1wiO1xuXG4vLyBzcmMvZXh0ZW5zaW9uLnRzXG5pbXBvcnQgQnJvd3NlciBmcm9tIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI7XG5mdW5jdGlvbiBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmcoY29uZmlnKSB7XG4gIHJldHVybiBkZWZpbmVHZW5lcmljTWVzc2FuZ2luZyhfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBjb25maWcpLCB7XG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgYXJnKSB7XG4gICAgICBpZiAoYXJnID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgYXJnID09PSBcIm51bWJlclwiID8geyB0YWJJZDogYXJnIH0gOiBhcmc7XG4gICAgICByZXR1cm4gQnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAgICBvcHRpb25zLnRhYklkLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICAvLyBQYXNzIGZyYW1lSWQgaWYgc3BlY2lmaWVkXG4gICAgICAgIG9wdGlvbnMuZnJhbWVJZCAhPSBudWxsID8geyBmcmFtZUlkOiBvcHRpb25zLmZyYW1lSWQgfSA6IHZvaWQgMFxuICAgICAgKTtcbiAgICB9LFxuICAgIGFkZFJvb3RMaXN0ZW5lcihwcm9jZXNzTWVzc2FnZSkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSAobWVzc2FnZSwgc2VuZGVyKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc01lc3NhZ2UoX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgbWVzc2FnZSksIHsgc2VuZGVyIH0pKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH07XG4gICAgICBCcm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHJldHVybiAoKSA9PiBCcm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9XG4gIH0pKTtcbn1cbmV4cG9ydCB7XG4gIGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZ1xufTtcbiIsImltcG9ydCB7IGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZyB9IGZyb20gJ0B3ZWJleHQtY29yZS9tZXNzYWdpbmcnO1xuXG4vLyBEZWZpbmUvSW1wb3J0IHJlcXVpcmVkIHR5cGVzXG4vLyBUT0RPOiBFbnN1cmUgdGhlc2UgdHlwZXMgYXJlIGNvcnJlY3RseSBkZWZpbmVkIG9yIGltcG9ydGVkIGlmIHRoZXkgZXhpc3QgZWxzZXdoZXJlXG5leHBvcnQgdHlwZSBPbGxhbWFTdHJlYW1DaHVua1N0YXR1cyA9ICdjaHVuaycgfCAnZG9uZScgfCAnZXJyb3InIHwgJ292ZXJyaWRlX2dyYW50ZWQnO1xuZXhwb3J0IHR5cGUgT2xsYW1hU3RyZWFtQ2h1bmsgPSBcbiAgICB8IHsgc3RhdHVzOiAnY2h1bmsnOyBjb250ZW50OiBzdHJpbmcgfSBcbiAgICB8IHsgc3RhdHVzOiAnZG9uZSc7IHN0YXRzOiBhbnkgfSBcbiAgICB8IHsgc3RhdHVzOiAnZXJyb3InOyBlcnJvcjogc3RyaW5nIH0gXG4gICAgfCB7IHN0YXR1czogJ292ZXJyaWRlX2dyYW50ZWQnOyBjb250ZW50OiBzdHJpbmc7IGRvbWFpbjogc3RyaW5nOyBleHBpcmVzQXQ6IHN0cmluZyB9O1xuZXhwb3J0IGludGVyZmFjZSBPbGxhbWFDaGF0UmVxdWVzdCB7XG4gICAgcHJvbXB0OiBzdHJpbmc7XG4gICAgaGlzdG9yeT86IHsgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7IGNvbnRlbnQ6IHN0cmluZyB9W107IFxufVxuZXhwb3J0IGludGVyZmFjZSBDaGF0TWVzc2FnZSB7XG4gIHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nOyAvLyBBZGQgb3B0aW9uYWwgSUQgdXNlZCBpbiBDaGF0UGFnZVxuICBpc0Vycm9yPzogYm9vbGVhbjsgLy8gQWRkIG9wdGlvbmFsIGZsYWcgZm9yIGVycm9yIG1lc3NhZ2VzXG59XG5cbi8vIERlZmluZSBDbGlwRGF0YSB0eXBlIGFuZCBleHBvcnQgaXRcbmV4cG9ydCBpbnRlcmZhY2UgQ2xpcERhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdGFncz86IHN0cmluZ1tdOyAvLyBPcHRpb25hbCB0YWdzXG59XG5cbi8vIERlZmluZSBEQiBvcGVyYXRpb24gdHlwZXNcbi8vIEVYUE9SVCB0aGVzZSBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIERiRXhlY1JlcXVlc3Qge1xuICBzcWw6IHN0cmluZztcbiAgcGFyYW1zPzogYW55W107IC8vIE9wdGlvbmFsIHBhcmFtcyBmb3IgZXhlY1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERiUXVlcnlSZXF1ZXN0IHtcbiAgc3FsOiBzdHJpbmc7XG4gIHBhcmFtcz86IGFueVtdOyAvLyBPcHRpb25hbCBwYXJhbXMgZm9yIHF1ZXJ5XG59XG5cbi8vIERlZmluZSBpbnB1dC9vdXRwdXQgZm9yIGdldE9sbGFtYU1vZGVsc1xuaW50ZXJmYWNlIEdldE9sbGFtYU1vZGVsc1JlcXVlc3Qge1xuICBlbmRwb2ludDogc3RyaW5nO1xufVxuXG4vLyBEZWZpbmUgdGhlIHN0cnVjdHVyZSBvZiBhIG1vZGVsIHJldHVybmVkIGJ5IHRoZSBiYWNrZ3JvdW5kXG5pbnRlcmZhY2UgT2xsYW1hTW9kZWwge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIC8vIEFkZCBvdGhlciBmaWVsZHMgaWYgdGhlIGJhY2tncm91bmQgc2VuZHMgbW9yZVxufVxuXG5pbnRlcmZhY2UgR2V0T2xsYW1hTW9kZWxzUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBtb2RlbHM/OiBPbGxhbWFNb2RlbFtdO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuLy8gRGVmaW5lIHRoZSBvdmVyYWxsIHByb3RvY29sIG1hcCBmb3IgdHlwZSBzYWZldHlcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdG9jb2xNYXAge1xuICAvLyBNZXNzYWdlIGZyb20gUG9wdXAgLT4gQmFja2dyb3VuZCB0byB0cmlnZ2VyIGNsaXBwaW5nXG4gIGNsaXBQYWdlOiAoZGF0YTogQ2xpcERhdGEpID0+IFByb21pc2U8dm9pZD47IC8vIEFzc3VtaW5nIGJhY2tncm91bmQgZG9lc24ndCBkaXJlY3RseSByZXR1cm4gZGF0YSBoZXJlXG5cbiAgLy8gTWVzc2FnZSBmcm9tIFVJIC0+IEJhY2tncm91bmQgdG8gZ2V0IGF2YWlsYWJsZSBPbGxhbWEgbW9kZWxzXG4gIGdldE9sbGFtYU1vZGVsczogKGRhdGE6IEdldE9sbGFtYU1vZGVsc1JlcXVlc3QpID0+IFByb21pc2U8R2V0T2xsYW1hTW9kZWxzUmVzcG9uc2U+O1xuXG4gIC8vID09IERCIE9wZXJhdGlvbnMgKFVJL0JhY2tncm91bmQgLT4gT2Zmc2NyZWVuKSA9PVxuICAvLyBFeGVjdXRlIFNRTCAobm8gcmV0dXJuIHZhbHVlIGV4cGVjdGVkIGJleW9uZCBzdWNjZXNzL2Vycm9yKVxuICBkYkV4ZWM6IChkYXRhOiBEYkV4ZWNSZXF1ZXN0KSA9PiBQcm9taXNlPHsgcm93c01vZGlmaWVkPzogbnVtYmVyIH0gfCB2b2lkPjsgLy8gUEdsaXRlIGV4ZWMgbWlnaHQgcmV0dXJuIHJvd3NNb2RpZmllZFxuXG4gIC8vIFF1ZXJ5IFNRTCAocmV0dXJucyByb3dzKVxuICBkYlF1ZXJ5OiAoZGF0YTogRGJRdWVyeVJlcXVlc3QpID0+IFByb21pc2U8YW55PjsgLy8gS2VlcCByZXN1bHQgdHlwZSBmbGV4aWJsZSBmb3Igbm93XG5cbiAgb2xsYW1hQ2hhdFJlcXVlc3Q6IChkYXRhOiBPbGxhbWFDaGF0UmVxdWVzdCkgPT4gUHJvbWlzZTx7IHJlY2VpdmVkOiBib29sZWFuIH0+O1xuICBvbGxhbWFSZXNwb25zZTogT2xsYW1hU3RyZWFtQ2h1bms7XG4gIGdldENoYXRIaXN0b3J5OiAoZGF0YTogeyBzZXNzaW9uSWQ/OiBudW1iZXIgfCAnY3VycmVudCcgfSkgPT4gUHJvbWlzZTxDaGF0TWVzc2FnZVtdPjtcbiAgYWRkU3lzdGVtTWVzc2FnZTogeyBjb250ZW50OiBzdHJpbmcgfTtcbn1cblxuLy8gQ3JlYXRlIHRoZSB0eXBlZCBtZXNzYWdpbmcgaW5zdGFuY2VcbmNvbnN0IG1lc3NhZ2luZ0luc3RhbmNlID0gZGVmaW5lRXh0ZW5zaW9uTWVzc2FnaW5nPFByb3RvY29sTWFwPigpO1xuXG4vLyBFeHBvcnQgdGhlIHNwZWNpZmljIG1ldGhvZHMgZnJvbSB0aGUgaW5zdGFuY2VcbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZSA9IG1lc3NhZ2luZ0luc3RhbmNlLnNlbmRNZXNzYWdlO1xuZXhwb3J0IGNvbnN0IG9uTWVzc2FnZSA9IG1lc3NhZ2luZ0luc3RhbmNlLm9uTWVzc2FnZTtcblxuLy8gUkVNT1ZFIGNvbmZsaWN0aW5nIHJlLWV4cG9ydFxuLy8gZXhwb3J0IHR5cGUgeyBQcm90b2NvbE1hcCB9OyAiLCJjb25zdCBFX1RJTUVPVVQgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgbXV0ZXggdG8gYmVjb21lIGF2YWlsYWJsZScpO1xuY29uc3QgRV9BTFJFQURZX0xPQ0tFRCA9IG5ldyBFcnJvcignbXV0ZXggYWxyZWFkeSBsb2NrZWQnKTtcbmNvbnN0IEVfQ0FOQ0VMRUQgPSBuZXcgRXJyb3IoJ3JlcXVlc3QgZm9yIGxvY2sgY2FuY2VsZWQnKTtcblxudmFyIF9fYXdhaXRlciQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBTZW1hcGhvcmUge1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZSwgX2NhbmNlbEVycm9yID0gRV9DQU5DRUxFRCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgdGhpcy5fY2FuY2VsRXJyb3IgPSBfY2FuY2VsRXJyb3I7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVycyA9IFtdO1xuICAgIH1cbiAgICBhY3F1aXJlKHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICBpZiAod2VpZ2h0IDw9IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHsgcmVzb2x2ZSwgcmVqZWN0LCB3ZWlnaHQsIHByaW9yaXR5IH07XG4gICAgICAgICAgICBjb25zdCBpID0gZmluZEluZGV4RnJvbUVuZCh0aGlzLl9xdWV1ZSwgKG90aGVyKSA9PiBwcmlvcml0eSA8PSBvdGhlci5wcmlvcml0eSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEgJiYgd2VpZ2h0IDw9IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZHMgaW1tZWRpYXRlIGRpc3BhdGNoLCBza2lwIHRoZSBxdWV1ZVxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoSXRlbSh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXVlLnNwbGljZShpICsgMSwgMCwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2tfMSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyJDIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAoY2FsbGJhY2ssIHdlaWdodCA9IDEsIHByaW9yaXR5ID0gMCkge1xuICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCByZWxlYXNlXSA9IHlpZWxkIHRoaXMuYWNxdWlyZSh3ZWlnaHQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHJlbGVhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHdhaXRGb3JVbmxvY2sod2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgIGlmICh0aGlzLl9jb3VsZExvY2tJbW1lZGlhdGVseSh3ZWlnaHQsIHByaW9yaXR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSA9IFtdO1xuICAgICAgICAgICAgICAgIGluc2VydFNvcnRlZCh0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV0sIHsgcmVzb2x2ZSwgcHJpb3JpdHkgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0xvY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlIDw9IDA7XG4gICAgfVxuICAgIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoUXVldWUoKTtcbiAgICB9XG4gICAgcmVsZWFzZSh3ZWlnaHQgPSAxKSB7XG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlICs9IHdlaWdodDtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hRdWV1ZSgpO1xuICAgIH1cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlLmZvckVhY2goKGVudHJ5KSA9PiBlbnRyeS5yZWplY3QodGhpcy5fY2FuY2VsRXJyb3IpKTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB9XG4gICAgX2Rpc3BhdGNoUXVldWUoKSB7XG4gICAgICAgIHRoaXMuX2RyYWluVW5sb2NrV2FpdGVycygpO1xuICAgICAgICB3aGlsZSAodGhpcy5fcXVldWUubGVuZ3RoID4gMCAmJiB0aGlzLl9xdWV1ZVswXS53ZWlnaHQgPD0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoSXRlbSh0aGlzLl9xdWV1ZS5zaGlmdCgpKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWluVW5sb2NrV2FpdGVycygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9kaXNwYXRjaEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlIC09IGl0ZW0ud2VpZ2h0O1xuICAgICAgICBpdGVtLnJlc29sdmUoW3ByZXZpb3VzVmFsdWUsIHRoaXMuX25ld1JlbGVhc2VyKGl0ZW0ud2VpZ2h0KV0pO1xuICAgIH1cbiAgICBfbmV3UmVsZWFzZXIod2VpZ2h0KSB7XG4gICAgICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSh3ZWlnaHQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBfZHJhaW5VbmxvY2tXYWl0ZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB3ZWlnaHQgPSB0aGlzLl92YWx1ZTsgd2VpZ2h0ID4gMDsgd2VpZ2h0LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0ZXJzID0gdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICghd2FpdGVycylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgd2FpdGVycy5mb3JFYWNoKCh3YWl0ZXIpID0+IHdhaXRlci5yZXNvbHZlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcXVldWVkUHJpb3JpdHkgPSB0aGlzLl9xdWV1ZVswXS5wcmlvcml0eTtcbiAgICAgICAgICAgIGZvciAobGV0IHdlaWdodCA9IHRoaXMuX3ZhbHVlOyB3ZWlnaHQgPiAwOyB3ZWlnaHQtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRlcnMgPSB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKCF3YWl0ZXJzKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gd2FpdGVycy5maW5kSW5kZXgoKHdhaXRlcikgPT4gd2FpdGVyLnByaW9yaXR5IDw9IHF1ZXVlZFByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAoaSA9PT0gLTEgPyB3YWl0ZXJzIDogd2FpdGVycy5zcGxpY2UoMCwgaSkpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh3YWl0ZXIgPT4gd2FpdGVyLnJlc29sdmUoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jb3VsZExvY2tJbW1lZGlhdGVseSh3ZWlnaHQsIHByaW9yaXR5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fcXVldWUubGVuZ3RoID09PSAwIHx8IHRoaXMuX3F1ZXVlWzBdLnByaW9yaXR5IDwgcHJpb3JpdHkpICYmXG4gICAgICAgICAgICB3ZWlnaHQgPD0gdGhpcy5fdmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0U29ydGVkKGEsIHYpIHtcbiAgICBjb25zdCBpID0gZmluZEluZGV4RnJvbUVuZChhLCAob3RoZXIpID0+IHYucHJpb3JpdHkgPD0gb3RoZXIucHJpb3JpdHkpO1xuICAgIGEuc3BsaWNlKGkgKyAxLCAwLCB2KTtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleEZyb21FbmQoYSwgcHJlZGljYXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG52YXIgX19hd2FpdGVyJDEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNsYXNzIE11dGV4IHtcbiAgICBjb25zdHJ1Y3RvcihjYW5jZWxFcnJvcikge1xuICAgICAgICB0aGlzLl9zZW1hcGhvcmUgPSBuZXcgU2VtYXBob3JlKDEsIGNhbmNlbEVycm9yKTtcbiAgICB9XG4gICAgYWNxdWlyZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlciQxKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKHByaW9yaXR5ID0gMCkge1xuICAgICAgICAgICAgY29uc3QgWywgcmVsZWFzZXJdID0geWllbGQgdGhpcy5fc2VtYXBob3JlLmFjcXVpcmUoMSwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbGVhc2VyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5ydW5FeGNsdXNpdmUoKCkgPT4gY2FsbGJhY2soKSwgMSwgcHJpb3JpdHkpO1xuICAgIH1cbiAgICBpc0xvY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5pc0xvY2tlZCgpO1xuICAgIH1cbiAgICB3YWl0Rm9yVW5sb2NrKHByaW9yaXR5ID0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLndhaXRGb3JVbmxvY2soMSwgcHJpb3JpdHkpO1xuICAgIH1cbiAgICByZWxlYXNlKCkge1xuICAgICAgICBpZiAodGhpcy5fc2VtYXBob3JlLmlzTG9ja2VkKCkpXG4gICAgICAgICAgICB0aGlzLl9zZW1hcGhvcmUucmVsZWFzZSgpO1xuICAgIH1cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUuY2FuY2VsKCk7XG4gICAgfVxufVxuXG52YXIgX19hd2FpdGVyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5mdW5jdGlvbiB3aXRoVGltZW91dChzeW5jLCB0aW1lb3V0LCB0aW1lb3V0RXJyb3IgPSBFX1RJTUVPVVQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY3F1aXJlOiAod2VpZ2h0T3JQcmlvcml0eSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGxldCB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNTZW1hcGhvcmUoc3luYykpIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWlnaHQgIT09IHVuZGVmaW5lZCAmJiB3ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGxldCBpc1RpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXNUaW1lb3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRpbWVvdXRFcnJvcik7XG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2V0ID0geWllbGQgKGlzU2VtYXBob3JlKHN5bmMpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN5bmMuYWNxdWlyZSh3ZWlnaHQsIHByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzeW5jLmFjcXVpcmUocHJpb3JpdHkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsZWFzZSA9IEFycmF5LmlzQXJyYXkodGlja2V0KSA/IHRpY2tldFsxXSA6IHRpY2tldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aWNrZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgcnVuRXhjbHVzaXZlKGNhbGxiYWNrLCB3ZWlnaHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGxldCByZWxlYXNlID0gKCkgPT4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tldCA9IHlpZWxkIHRoaXMuYWNxdWlyZSh3ZWlnaHQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGlja2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSA9IHRpY2tldFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjayh0aWNrZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSA9IHRpY2tldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbGVhc2Uod2VpZ2h0KSB7XG4gICAgICAgICAgICBzeW5jLnJlbGVhc2Uod2VpZ2h0KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bmMuY2FuY2VsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhaXRGb3JVbmxvY2s6ICh3ZWlnaHRPclByaW9yaXR5LCBwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgbGV0IHdlaWdodDtcbiAgICAgICAgICAgIGlmIChpc1NlbWFwaG9yZShzeW5jKSkge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlaWdodCAhPT0gdW5kZWZpbmVkICYmIHdlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiByZWplY3QodGltZW91dEVycm9yKSwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgKGlzU2VtYXBob3JlKHN5bmMpXG4gICAgICAgICAgICAgICAgICAgID8gc3luYy53YWl0Rm9yVW5sb2NrKHdlaWdodCwgcHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgICAgIDogc3luYy53YWl0Rm9yVW5sb2NrKHByaW9yaXR5KSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNMb2NrZWQ6ICgpID0+IHN5bmMuaXNMb2NrZWQoKSxcbiAgICAgICAgZ2V0VmFsdWU6ICgpID0+IHN5bmMuZ2V0VmFsdWUoKSxcbiAgICAgICAgc2V0VmFsdWU6ICh2YWx1ZSkgPT4gc3luYy5zZXRWYWx1ZSh2YWx1ZSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzU2VtYXBob3JlKHN5bmMpIHtcbiAgICByZXR1cm4gc3luYy5nZXRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpc25lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmZ1bmN0aW9uIHRyeUFjcXVpcmUoc3luYywgYWxyZWFkeUFjcXVpcmVkRXJyb3IgPSBFX0FMUkVBRFlfTE9DS0VEKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICByZXR1cm4gd2l0aFRpbWVvdXQoc3luYywgMCwgYWxyZWFkeUFjcXVpcmVkRXJyb3IpO1xufVxuXG5leHBvcnQgeyBFX0FMUkVBRFlfTE9DS0VELCBFX0NBTkNFTEVELCBFX1RJTUVPVVQsIE11dGV4LCBTZW1hcGhvcmUsIHRyeUFjcXVpcmUsIHdpdGhUaW1lb3V0IH07XG4iLCJ2YXIgYz0ocz0+KHNbcy5OZXc9MF09XCJOZXdcIixzW3MuTGVhcm5pbmc9MV09XCJMZWFybmluZ1wiLHNbcy5SZXZpZXc9Ml09XCJSZXZpZXdcIixzW3MuUmVsZWFybmluZz0zXT1cIlJlbGVhcm5pbmdcIixzKSkoY3x8e30pLGw9KHM9PihzW3MuTWFudWFsPTBdPVwiTWFudWFsXCIsc1tzLkFnYWluPTFdPVwiQWdhaW5cIixzW3MuSGFyZD0yXT1cIkhhcmRcIixzW3MuR29vZD0zXT1cIkdvb2RcIixzW3MuRWFzeT00XT1cIkVhc3lcIixzKSkobHx8e30pO2NsYXNzIGh7c3RhdGljIGNhcmQodCl7cmV0dXJuey4uLnQsc3RhdGU6aC5zdGF0ZSh0LnN0YXRlKSxkdWU6aC50aW1lKHQuZHVlKSxsYXN0X3Jldmlldzp0Lmxhc3RfcmV2aWV3P2gudGltZSh0Lmxhc3RfcmV2aWV3KTp2b2lkIDB9fXN0YXRpYyByYXRpbmcodCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpe2NvbnN0IGU9dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSxpPXQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSxyPWxbYCR7ZX0ke2l9YF07aWYocj09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmF0aW5nOlske3R9XWApO3JldHVybiByfWVsc2UgaWYodHlwZW9mIHQ9PVwibnVtYmVyXCIpcmV0dXJuIHQ7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJhdGluZzpbJHt0fV1gKX1zdGF0aWMgc3RhdGUodCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpe2NvbnN0IGU9dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSxpPXQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSxyPWNbYCR7ZX0ke2l9YF07aWYocj09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3RhdGU6WyR7dH1dYCk7cmV0dXJuIHJ9ZWxzZSBpZih0eXBlb2YgdD09XCJudW1iZXJcIilyZXR1cm4gdDt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3RhdGU6WyR7dH1dYCl9c3RhdGljIHRpbWUodCl7aWYodHlwZW9mIHQ9PVwib2JqZWN0XCImJnQgaW5zdGFuY2VvZiBEYXRlKXJldHVybiB0O2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXtjb25zdCBlPURhdGUucGFyc2UodCk7aWYoaXNOYU4oZSkpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRhdGU6WyR7dH1dYCk7cmV0dXJuIG5ldyBEYXRlKGUpfWVsc2UgaWYodHlwZW9mIHQ9PVwibnVtYmVyXCIpcmV0dXJuIG5ldyBEYXRlKHQpO3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBkYXRlOlske3R9XWApfXN0YXRpYyByZXZpZXdfbG9nKHQpe3JldHVybnsuLi50LGR1ZTpoLnRpbWUodC5kdWUpLHJhdGluZzpoLnJhdGluZyh0LnJhdGluZyksc3RhdGU6aC5zdGF0ZSh0LnN0YXRlKSxyZXZpZXc6aC50aW1lKHQucmV2aWV3KX19fWNvbnN0IFg9XCI0LjcuMVwiO0RhdGUucHJvdG90eXBlLnNjaGVkdWxlcj1mdW5jdGlvbihzLHQpe3JldHVybiBGKHRoaXMscyx0KX0sRGF0ZS5wcm90b3R5cGUuZGlmZj1mdW5jdGlvbihzLHQpe3JldHVybiBMKHRoaXMscyx0KX0sRGF0ZS5wcm90b3R5cGUuZm9ybWF0PWZ1bmN0aW9uKCl7cmV0dXJuIE8odGhpcyl9LERhdGUucHJvdG90eXBlLmR1ZUZvcm1hdD1mdW5jdGlvbihzLHQsZSl7cmV0dXJuIGoodGhpcyxzLHQsZSl9O2Z1bmN0aW9uIEYocyx0LGUpe3JldHVybiBuZXcgRGF0ZShlP2gudGltZShzKS5nZXRUaW1lKCkrdCoyNCo2MCo2MCoxZTM6aC50aW1lKHMpLmdldFRpbWUoKSt0KjYwKjFlMyl9ZnVuY3Rpb24gTChzLHQsZSl7aWYoIXN8fCF0KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZVwiKTtjb25zdCBpPWgudGltZShzKS5nZXRUaW1lKCktaC50aW1lKHQpLmdldFRpbWUoKTtsZXQgcj0wO3N3aXRjaChlKXtjYXNlXCJkYXlzXCI6cj1NYXRoLmZsb29yKGkvKDI0KjYwKjYwKjFlMykpO2JyZWFrO2Nhc2VcIm1pbnV0ZXNcIjpyPU1hdGguZmxvb3IoaS8oNjAqMWUzKSk7YnJlYWt9cmV0dXJuIHJ9ZnVuY3Rpb24gTyhzKXtjb25zdCB0PWgudGltZShzKSxlPXQuZ2V0RnVsbFllYXIoKSxpPXQuZ2V0TW9udGgoKSsxLHI9dC5nZXREYXRlKCksYT10LmdldEhvdXJzKCksbj10LmdldE1pbnV0ZXMoKSxkPXQuZ2V0U2Vjb25kcygpO3JldHVybmAke2V9LSR7cChpKX0tJHtwKHIpfSAke3AoYSl9OiR7cChuKX06JHtwKGQpfWB9ZnVuY3Rpb24gcChzKXtyZXR1cm4gczwxMD9gMCR7c31gOmAke3N9YH1jb25zdCBTPVs2MCw2MCwyNCwzMSwxMl0sRT1bXCJzZWNvbmRcIixcIm1pblwiLFwiaG91clwiLFwiZGF5XCIsXCJtb250aFwiLFwieWVhclwiXTtmdW5jdGlvbiBqKHMsdCxlLGk9RSl7cz1oLnRpbWUocyksdD1oLnRpbWUodCksaS5sZW5ndGghPT1FLmxlbmd0aCYmKGk9RSk7bGV0IHI9cy5nZXRUaW1lKCktdC5nZXRUaW1lKCksYTtmb3Ioci89MWUzLGE9MDthPFMubGVuZ3RoJiYhKHI8U1thXSk7YSsrKXIvPVNbYV07cmV0dXJuYCR7TWF0aC5mbG9vcihyKX0ke2U/aVthXTpcIlwifWB9ZnVuY3Rpb24gSihzKXtyZXR1cm4gaC50aW1lKHMpfWZ1bmN0aW9uIEsocyl7cmV0dXJuIGguc3RhdGUocyl9ZnVuY3Rpb24gUShzKXtyZXR1cm4gaC5yYXRpbmcocyl9Y29uc3QgST1PYmplY3QuZnJlZXplKFtsLkFnYWluLGwuSGFyZCxsLkdvb2QsbC5FYXN5XSksWj1be3N0YXJ0OjIuNSxlbmQ6NyxmYWN0b3I6LjE1fSx7c3RhcnQ6NyxlbmQ6MjAsZmFjdG9yOi4xfSx7c3RhcnQ6MjAsZW5kOjEvMCxmYWN0b3I6LjA1fV07ZnVuY3Rpb24gRyhzLHQsZSl7bGV0IGk9MTtmb3IoY29uc3QgbiBvZiBaKWkrPW4uZmFjdG9yKk1hdGgubWF4KE1hdGgubWluKHMsbi5lbmQpLW4uc3RhcnQsMCk7cz1NYXRoLm1pbihzLGUpO2xldCByPU1hdGgubWF4KDIsTWF0aC5yb3VuZChzLWkpKTtjb25zdCBhPU1hdGgubWluKE1hdGgucm91bmQocytpKSxlKTtyZXR1cm4gcz50JiYocj1NYXRoLm1heChyLHQrMSkpLHI9TWF0aC5taW4ocixhKSx7bWluX2l2bDpyLG1heF9pdmw6YX19ZnVuY3Rpb24gbShzLHQsZSl7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHMsdCksZSl9ZnVuY3Rpb24gTihzLHQpe2NvbnN0IGU9RGF0ZS5VVEMocy5nZXRVVENGdWxsWWVhcigpLHMuZ2V0VVRDTW9udGgoKSxzLmdldFVUQ0RhdGUoKSksaT1EYXRlLlVUQyh0LmdldFVUQ0Z1bGxZZWFyKCksdC5nZXRVVENNb250aCgpLHQuZ2V0VVRDRGF0ZSgpKTtyZXR1cm4gTWF0aC5mbG9vcigoaS1lKS84NjRlNSl9Y29uc3Qgaz0uOSxDPTM2NTAwLFQ9T2JqZWN0LmZyZWV6ZShbLjQwMjU1LDEuMTgzODUsMy4xNzMsMTUuNjkxMDUsNy4xOTQ5LC41MzQ1LDEuNDYwNCwuMDA0NiwxLjU0NTc1LC4xMTkyLDEuMDE5MjUsMS45Mzk1LC4xMSwuMjk2MDUsMi4yNjk4LC4yMzE1LDIuOTg5OCwuNTE2NTUsLjY2MjFdKSxVPSExLHE9ITAsdHQ9YHYke1h9IHVzaW5nIEZTUlMtNS4wYCxfPS4wMSxiPTEwMCxSPU9iamVjdC5mcmVlemUoW09iamVjdC5mcmVlemUoW18sYl0pLE9iamVjdC5mcmVlemUoW18sYl0pLE9iamVjdC5mcmVlemUoW18sYl0pLE9iamVjdC5mcmVlemUoW18sYl0pLE9iamVjdC5mcmVlemUoWzEsMTBdKSxPYmplY3QuZnJlZXplKFsuMDAxLDRdKSxPYmplY3QuZnJlZXplKFsuMDAxLDRdKSxPYmplY3QuZnJlZXplKFsuMDAxLC43NV0pLE9iamVjdC5mcmVlemUoWzAsNC41XSksT2JqZWN0LmZyZWV6ZShbMCwuOF0pLE9iamVjdC5mcmVlemUoWy4wMDEsMy41XSksT2JqZWN0LmZyZWV6ZShbLjAwMSw1XSksT2JqZWN0LmZyZWV6ZShbLjAwMSwuMjVdKSxPYmplY3QuZnJlZXplKFsuMDAxLC45XSksT2JqZWN0LmZyZWV6ZShbMCw0XSksT2JqZWN0LmZyZWV6ZShbMCwxXSksT2JqZWN0LmZyZWV6ZShbMSw2XSksT2JqZWN0LmZyZWV6ZShbMCwyXSksT2JqZWN0LmZyZWV6ZShbMCwyXSldKSx6PXM9PntsZXQgdD1bLi4uVF07cmV0dXJuIHM/LncmJihzLncubGVuZ3RoPT09MTk/dD1bLi4ucy53XTpzLncubGVuZ3RoPT09MTcmJih0PXM/LncuY29uY2F0KFswLDBdKSx0WzRdPSsodFs1XSoyK3RbNF0pLnRvRml4ZWQoOCksdFs1XT0rKE1hdGgubG9nKHRbNV0qMysxKS8zKS50b0ZpeGVkKDgpLHRbNl09Kyh0WzZdKy41KS50b0ZpeGVkKDgpLGNvbnNvbGUuZGVidWcoXCJbRlNSUyBWNV1hdXRvIGZpbGwgdyB0byAxOSBsZW5ndGhcIikpKSx0PXQubWFwKChlLGkpPT5tKGUsUltpXVswXSxSW2ldWzFdKSkse3JlcXVlc3RfcmV0ZW50aW9uOnM/LnJlcXVlc3RfcmV0ZW50aW9ufHxrLG1heGltdW1faW50ZXJ2YWw6cz8ubWF4aW11bV9pbnRlcnZhbHx8Qyx3OnQsZW5hYmxlX2Z1eno6cz8uZW5hYmxlX2Z1eno/P1UsZW5hYmxlX3Nob3J0X3Rlcm06cz8uZW5hYmxlX3Nob3J0X3Rlcm0/P3F9fTtmdW5jdGlvbiB2KHMsdCl7Y29uc3QgZT17ZHVlOnM/aC50aW1lKHMpOm5ldyBEYXRlLHN0YWJpbGl0eTowLGRpZmZpY3VsdHk6MCxlbGFwc2VkX2RheXM6MCxzY2hlZHVsZWRfZGF5czowLHJlcHM6MCxsYXBzZXM6MCxzdGF0ZTpjLk5ldyxsYXN0X3Jldmlldzp2b2lkIDB9O3JldHVybiB0JiZ0eXBlb2YgdD09XCJmdW5jdGlvblwiP3QoZSk6ZX1jbGFzcyBldHtjO3MwO3MxO3MyO2NvbnN0cnVjdG9yKHQpe2NvbnN0IGU9aXQoKTt0aGlzLmM9MSx0aGlzLnMwPWUoXCIgXCIpLHRoaXMuczE9ZShcIiBcIiksdGhpcy5zMj1lKFwiIFwiKSx0PT1udWxsJiYodD0rbmV3IERhdGUpLHRoaXMuczAtPWUodCksdGhpcy5zMDwwJiYodGhpcy5zMCs9MSksdGhpcy5zMS09ZSh0KSx0aGlzLnMxPDAmJih0aGlzLnMxKz0xKSx0aGlzLnMyLT1lKHQpLHRoaXMuczI8MCYmKHRoaXMuczIrPTEpfW5leHQoKXtjb25zdCB0PTIwOTE2MzkqdGhpcy5zMCt0aGlzLmMqMjMyODMwNjQzNjUzODY5NjNlLTI2O3JldHVybiB0aGlzLnMwPXRoaXMuczEsdGhpcy5zMT10aGlzLnMyLHRoaXMuczI9dC0odGhpcy5jPXR8MCksdGhpcy5zMn1zZXQgc3RhdGUodCl7dGhpcy5jPXQuYyx0aGlzLnMwPXQuczAsdGhpcy5zMT10LnMxLHRoaXMuczI9dC5zMn1nZXQgc3RhdGUoKXtyZXR1cm57Yzp0aGlzLmMsczA6dGhpcy5zMCxzMTp0aGlzLnMxLHMyOnRoaXMuczJ9fX1mdW5jdGlvbiBpdCgpe2xldCBzPTQwMjI4NzExOTc7cmV0dXJuIGZ1bmN0aW9uKHQpe3Q9U3RyaW5nKHQpO2ZvcihsZXQgZT0wO2U8dC5sZW5ndGg7ZSsrKXtzKz10LmNoYXJDb2RlQXQoZSk7bGV0IGk9LjAyNTE5NjAzMjgyNDE2OTM4KnM7cz1pPj4+MCxpLT1zLGkqPXMscz1pPj4+MCxpLT1zLHMrPWkqNDI5NDk2NzI5Nn1yZXR1cm4ocz4+PjApKjIzMjgzMDY0MzY1Mzg2OTYzZS0yNn19ZnVuY3Rpb24gcnQocyl7Y29uc3QgdD1uZXcgZXQocyksZT0oKT0+dC5uZXh0KCk7cmV0dXJuIGUuaW50MzI9KCk9PnQubmV4dCgpKjQyOTQ5NjcyOTZ8MCxlLmRvdWJsZT0oKT0+ZSgpKyhlKCkqMjA5NzE1MnwwKSoxMTEwMjIzMDI0NjI1MTU2NWUtMzIsZS5zdGF0ZT0oKT0+dC5zdGF0ZSxlLmltcG9ydFN0YXRlPWk9Pih0LnN0YXRlPWksZSksZX1jb25zdCAkPS0uNSxEPTE5LzgxO2Z1bmN0aW9uIFAocyx0KXtyZXR1cm4rTWF0aC5wb3coMStEKnMvdCwkKS50b0ZpeGVkKDgpfWNsYXNzIFl7cGFyYW07aW50ZXJ2YWxNb2RpZmllcjtfc2VlZDtjb25zdHJ1Y3Rvcih0KXt0aGlzLnBhcmFtPW5ldyBQcm94eSh6KHQpLHRoaXMucGFyYW1zX2hhbmRsZXJfcHJveHkoKSksdGhpcy5pbnRlcnZhbE1vZGlmaWVyPXRoaXMuY2FsY3VsYXRlX2ludGVydmFsX21vZGlmaWVyKHRoaXMucGFyYW0ucmVxdWVzdF9yZXRlbnRpb24pfWdldCBpbnRlcnZhbF9tb2RpZmllcigpe3JldHVybiB0aGlzLmludGVydmFsTW9kaWZpZXJ9c2V0IHNlZWQodCl7dGhpcy5fc2VlZD10fWNhbGN1bGF0ZV9pbnRlcnZhbF9tb2RpZmllcih0KXtpZih0PD0wfHx0PjEpdGhyb3cgbmV3IEVycm9yKFwiUmVxdWVzdGVkIHJldGVudGlvbiByYXRlIHNob3VsZCBiZSBpbiB0aGUgcmFuZ2UgKDAsMV1cIik7cmV0dXJuKygoTWF0aC5wb3codCwxLyQpLTEpL0QpLnRvRml4ZWQoOCl9Z2V0IHBhcmFtZXRlcnMoKXtyZXR1cm4gdGhpcy5wYXJhbX1zZXQgcGFyYW1ldGVycyh0KXt0aGlzLnVwZGF0ZV9wYXJhbWV0ZXJzKHQpfXBhcmFtc19oYW5kbGVyX3Byb3h5KCl7Y29uc3QgdD10aGlzO3JldHVybntzZXQ6ZnVuY3Rpb24oZSxpLHIpe3JldHVybiBpPT09XCJyZXF1ZXN0X3JldGVudGlvblwiJiZOdW1iZXIuaXNGaW5pdGUocikmJih0LmludGVydmFsTW9kaWZpZXI9dC5jYWxjdWxhdGVfaW50ZXJ2YWxfbW9kaWZpZXIoTnVtYmVyKHIpKSksUmVmbGVjdC5zZXQoZSxpLHIpLCEwfX19dXBkYXRlX3BhcmFtZXRlcnModCl7Y29uc3QgZT16KHQpO2Zvcihjb25zdCBpIGluIGUpaWYoaSBpbiB0aGlzLnBhcmFtKXtjb25zdCByPWk7dGhpcy5wYXJhbVtyXT1lW3JdfX1pbml0X3N0YWJpbGl0eSh0KXtyZXR1cm4gTWF0aC5tYXgodGhpcy5wYXJhbS53W3QtMV0sLjEpfWluaXRfZGlmZmljdWx0eSh0KXtyZXR1cm4gdGhpcy5jb25zdHJhaW5fZGlmZmljdWx0eSh0aGlzLnBhcmFtLndbNF0tTWF0aC5leHAoKHQtMSkqdGhpcy5wYXJhbS53WzVdKSsxKX1hcHBseV9mdXp6KHQsZSl7aWYoIXRoaXMucGFyYW0uZW5hYmxlX2Z1enp8fHQ8Mi41KXJldHVybiBNYXRoLnJvdW5kKHQpO2NvbnN0IGk9cnQodGhpcy5fc2VlZCkoKSx7bWluX2l2bDpyLG1heF9pdmw6YX09Ryh0LGUsdGhpcy5wYXJhbS5tYXhpbXVtX2ludGVydmFsKTtyZXR1cm4gTWF0aC5mbG9vcihpKihhLXIrMSkrcil9bmV4dF9pbnRlcnZhbCh0LGUpe2NvbnN0IGk9TWF0aC5taW4oTWF0aC5tYXgoMSxNYXRoLnJvdW5kKHQqdGhpcy5pbnRlcnZhbE1vZGlmaWVyKSksdGhpcy5wYXJhbS5tYXhpbXVtX2ludGVydmFsKTtyZXR1cm4gdGhpcy5hcHBseV9mdXp6KGksZSl9bGluZWFyX2RhbXBpbmcodCxlKXtyZXR1cm4rKHQqKDEwLWUpLzkpLnRvRml4ZWQoOCl9bmV4dF9kaWZmaWN1bHR5KHQsZSl7Y29uc3QgaT0tdGhpcy5wYXJhbS53WzZdKihlLTMpLHI9dCt0aGlzLmxpbmVhcl9kYW1waW5nKGksdCk7cmV0dXJuIHRoaXMuY29uc3RyYWluX2RpZmZpY3VsdHkodGhpcy5tZWFuX3JldmVyc2lvbih0aGlzLmluaXRfZGlmZmljdWx0eShsLkVhc3kpLHIpKX1jb25zdHJhaW5fZGlmZmljdWx0eSh0KXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoK3QudG9GaXhlZCg4KSwxKSwxMCl9bWVhbl9yZXZlcnNpb24odCxlKXtyZXR1cm4rKHRoaXMucGFyYW0ud1s3XSp0KygxLXRoaXMucGFyYW0ud1s3XSkqZSkudG9GaXhlZCg4KX1uZXh0X3JlY2FsbF9zdGFiaWxpdHkodCxlLGkscil7Y29uc3QgYT1sLkhhcmQ9PT1yP3RoaXMucGFyYW0ud1sxNV06MSxuPWwuRWFzeT09PXI/dGhpcy5wYXJhbS53WzE2XToxO3JldHVybittKGUqKDErTWF0aC5leHAodGhpcy5wYXJhbS53WzhdKSooMTEtdCkqTWF0aC5wb3coZSwtdGhpcy5wYXJhbS53WzldKSooTWF0aC5leHAoKDEtaSkqdGhpcy5wYXJhbS53WzEwXSktMSkqYSpuKSxfLDM2NTAwKS50b0ZpeGVkKDgpfW5leHRfZm9yZ2V0X3N0YWJpbGl0eSh0LGUsaSl7cmV0dXJuK20odGhpcy5wYXJhbS53WzExXSpNYXRoLnBvdyh0LC10aGlzLnBhcmFtLndbMTJdKSooTWF0aC5wb3coZSsxLHRoaXMucGFyYW0ud1sxM10pLTEpKk1hdGguZXhwKCgxLWkpKnRoaXMucGFyYW0ud1sxNF0pLF8sMzY1MDApLnRvRml4ZWQoOCl9bmV4dF9zaG9ydF90ZXJtX3N0YWJpbGl0eSh0LGUpe3JldHVybittKHQqTWF0aC5leHAodGhpcy5wYXJhbS53WzE3XSooZS0zK3RoaXMucGFyYW0ud1sxOF0pKSxfLDM2NTAwKS50b0ZpeGVkKDgpfWZvcmdldHRpbmdfY3VydmU9UDtuZXh0X3N0YXRlKHQsZSxpKXtjb25zdHtkaWZmaWN1bHR5OnIsc3RhYmlsaXR5OmF9PXQ/P3tkaWZmaWN1bHR5OjAsc3RhYmlsaXR5OjB9O2lmKGU8MCl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGVsdGFfdCBcIiR7ZX1cImApO2lmKGk8MHx8aT40KXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBncmFkZSBcIiR7aX1cImApO2lmKHI9PT0wJiZhPT09MClyZXR1cm57ZGlmZmljdWx0eTp0aGlzLmluaXRfZGlmZmljdWx0eShpKSxzdGFiaWxpdHk6dGhpcy5pbml0X3N0YWJpbGl0eShpKX07aWYoaT09PTApcmV0dXJue2RpZmZpY3VsdHk6cixzdGFiaWxpdHk6YX07aWYocjwxfHxhPF8pdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1lbW9yeSBzdGF0ZSB7IGRpZmZpY3VsdHk6ICR7cn0sIHN0YWJpbGl0eTogJHthfSB9YCk7Y29uc3Qgbj10aGlzLmZvcmdldHRpbmdfY3VydmUoZSxhKSxkPXRoaXMubmV4dF9yZWNhbGxfc3RhYmlsaXR5KHIsYSxuLGkpLHU9dGhpcy5uZXh0X2ZvcmdldF9zdGFiaWxpdHkocixhLG4pLG89dGhpcy5uZXh0X3Nob3J0X3Rlcm1fc3RhYmlsaXR5KGEsaSk7bGV0IGY9ZDtpZihpPT09MSl7bGV0W3ksd109WzAsMF07dGhpcy5wYXJhbS5lbmFibGVfc2hvcnRfdGVybSYmKHk9dGhpcy5wYXJhbS53WzE3XSx3PXRoaXMucGFyYW0ud1sxOF0pO2NvbnN0IGc9YS9NYXRoLmV4cCh5KncpO2Y9bSgrZy50b0ZpeGVkKDgpLF8sdSl9cmV0dXJuIGU9PT0wJiZ0aGlzLnBhcmFtLmVuYWJsZV9zaG9ydF90ZXJtJiYoZj1vKSx7ZGlmZmljdWx0eTp0aGlzLm5leHRfZGlmZmljdWx0eShyLGkpLHN0YWJpbGl0eTpmfX19ZnVuY3Rpb24gSCgpe2NvbnN0IHM9dGhpcy5yZXZpZXdfdGltZS5nZXRUaW1lKCksdD10aGlzLmN1cnJlbnQucmVwcyxlPXRoaXMuY3VycmVudC5kaWZmaWN1bHR5KnRoaXMuY3VycmVudC5zdGFiaWxpdHk7cmV0dXJuYCR7c31fJHt0fV8ke2V9YH1mdW5jdGlvbiBhdChzKXtyZXR1cm4gZnVuY3Rpb24oKXtjb25zdCB0PVJlZmxlY3QuZ2V0KHRoaXMuY3VycmVudCxzKT8/MCxlPXRoaXMuY3VycmVudC5yZXBzO3JldHVybiBTdHJpbmcodCtlfHwwKX19dmFyIHg9KHM9PihzLlNDSEVEVUxFUj1cIlNjaGVkdWxlclwiLHMuU0VFRD1cIlNlZWRcIixzKSkoeHx8e30pO2NsYXNzIEF7bGFzdDtjdXJyZW50O3Jldmlld190aW1lO25leHQ9bmV3IE1hcDthbGdvcml0aG07aW5pdFNlZWRTdHJhdGVneTtjb25zdHJ1Y3Rvcih0LGUsaSxyPXtzZWVkOkh9KXt0aGlzLmFsZ29yaXRobT1pLHRoaXMuaW5pdFNlZWRTdHJhdGVneT1yLnNlZWQuYmluZCh0aGlzKSx0aGlzLmxhc3Q9aC5jYXJkKHQpLHRoaXMuY3VycmVudD1oLmNhcmQodCksdGhpcy5yZXZpZXdfdGltZT1oLnRpbWUoZSksdGhpcy5pbml0KCl9aW5pdCgpe2NvbnN0e3N0YXRlOnQsbGFzdF9yZXZpZXc6ZX09dGhpcy5jdXJyZW50O2xldCBpPTA7dCE9PWMuTmV3JiZlJiYoaT1OKGUsdGhpcy5yZXZpZXdfdGltZSkpLHRoaXMuY3VycmVudC5sYXN0X3Jldmlldz10aGlzLnJldmlld190aW1lLHRoaXMuY3VycmVudC5lbGFwc2VkX2RheXM9aSx0aGlzLmN1cnJlbnQucmVwcys9MSx0aGlzLmFsZ29yaXRobS5zZWVkPXRoaXMuaW5pdFNlZWRTdHJhdGVneSgpfXByZXZpZXcoKXtyZXR1cm57W2wuQWdhaW5dOnRoaXMucmV2aWV3KGwuQWdhaW4pLFtsLkhhcmRdOnRoaXMucmV2aWV3KGwuSGFyZCksW2wuR29vZF06dGhpcy5yZXZpZXcobC5Hb29kKSxbbC5FYXN5XTp0aGlzLnJldmlldyhsLkVhc3kpLFtTeW1ib2wuaXRlcmF0b3JdOnRoaXMucHJldmlld0l0ZXJhdG9yLmJpbmQodGhpcyl9fSpwcmV2aWV3SXRlcmF0b3IoKXtmb3IoY29uc3QgdCBvZiBJKXlpZWxkIHRoaXMucmV2aWV3KHQpfXJldmlldyh0KXtjb25zdHtzdGF0ZTplfT10aGlzLmxhc3Q7bGV0IGk7c3dpdGNoKGUpe2Nhc2UgYy5OZXc6aT10aGlzLm5ld1N0YXRlKHQpO2JyZWFrO2Nhc2UgYy5MZWFybmluZzpjYXNlIGMuUmVsZWFybmluZzppPXRoaXMubGVhcm5pbmdTdGF0ZSh0KTticmVhaztjYXNlIGMuUmV2aWV3Omk9dGhpcy5yZXZpZXdTdGF0ZSh0KTticmVha31pZihpKXJldHVybiBpO3Rocm93IG5ldyBFcnJvcihcIkludmFsaWQgZ3JhZGVcIil9YnVpbGRMb2codCl7Y29uc3R7bGFzdF9yZXZpZXc6ZSxkdWU6aSxlbGFwc2VkX2RheXM6cn09dGhpcy5sYXN0O3JldHVybntyYXRpbmc6dCxzdGF0ZTp0aGlzLmN1cnJlbnQuc3RhdGUsZHVlOmV8fGksc3RhYmlsaXR5OnRoaXMuY3VycmVudC5zdGFiaWxpdHksZGlmZmljdWx0eTp0aGlzLmN1cnJlbnQuZGlmZmljdWx0eSxlbGFwc2VkX2RheXM6dGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cyxsYXN0X2VsYXBzZWRfZGF5czpyLHNjaGVkdWxlZF9kYXlzOnRoaXMuY3VycmVudC5zY2hlZHVsZWRfZGF5cyxyZXZpZXc6dGhpcy5yZXZpZXdfdGltZX19fWNsYXNzIFYgZXh0ZW5kcyBBe25ld1N0YXRlKHQpe2NvbnN0IGU9dGhpcy5uZXh0LmdldCh0KTtpZihlKXJldHVybiBlO2NvbnN0IGk9aC5jYXJkKHRoaXMuY3VycmVudCk7c3dpdGNoKGkuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5pbml0X2RpZmZpY3VsdHkodCksaS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9zdGFiaWxpdHkodCksdCl7Y2FzZSBsLkFnYWluOmkuc2NoZWR1bGVkX2RheXM9MCxpLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcigxKSxpLnN0YXRlPWMuTGVhcm5pbmc7YnJlYWs7Y2FzZSBsLkhhcmQ6aS5zY2hlZHVsZWRfZGF5cz0wLGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKDUpLGkuc3RhdGU9Yy5MZWFybmluZzticmVhaztjYXNlIGwuR29vZDppLnNjaGVkdWxlZF9kYXlzPTAsaS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoMTApLGkuc3RhdGU9Yy5MZWFybmluZzticmVhaztjYXNlIGwuRWFzeTp7Y29uc3QgYT10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKGkuc3RhYmlsaXR5LHRoaXMuY3VycmVudC5lbGFwc2VkX2RheXMpO2kuc2NoZWR1bGVkX2RheXM9YSxpLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihhLCEwKSxpLnN0YXRlPWMuUmV2aWV3O2JyZWFrfWRlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBncmFkZVwiKX1jb25zdCByPXtjYXJkOmksbG9nOnRoaXMuYnVpbGRMb2codCl9O3JldHVybiB0aGlzLm5leHQuc2V0KHQscikscn1sZWFybmluZ1N0YXRlKHQpe2NvbnN0IGU9dGhpcy5uZXh0LmdldCh0KTtpZihlKXJldHVybiBlO2NvbnN0e3N0YXRlOmksZGlmZmljdWx0eTpyLHN0YWJpbGl0eTphfT10aGlzLmxhc3Qsbj1oLmNhcmQodGhpcy5jdXJyZW50KSxkPXRoaXMuY3VycmVudC5lbGFwc2VkX2RheXM7c3dpdGNoKG4uZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkocix0KSxuLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3Nob3J0X3Rlcm1fc3RhYmlsaXR5KGEsdCksdCl7Y2FzZSBsLkFnYWluOntuLnNjaGVkdWxlZF9kYXlzPTAsbi5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoNSwhMSksbi5zdGF0ZT1pO2JyZWFrfWNhc2UgbC5IYXJkOntuLnNjaGVkdWxlZF9kYXlzPTAsbi5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoMTApLG4uc3RhdGU9aTticmVha31jYXNlIGwuR29vZDp7Y29uc3Qgbz10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKG4uc3RhYmlsaXR5LGQpO24uc2NoZWR1bGVkX2RheXM9byxuLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihvLCEwKSxuLnN0YXRlPWMuUmV2aWV3O2JyZWFrfWNhc2UgbC5FYXN5Ontjb25zdCBvPXRoaXMuYWxnb3JpdGhtLm5leHRfc2hvcnRfdGVybV9zdGFiaWxpdHkoYSxsLkdvb2QpLGY9dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChvLGQpLHk9TWF0aC5tYXgodGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChuLnN0YWJpbGl0eSxkKSxmKzEpO24uc2NoZWR1bGVkX2RheXM9eSxuLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcih5LCEwKSxuLnN0YXRlPWMuUmV2aWV3O2JyZWFrfWRlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBncmFkZVwiKX1jb25zdCB1PXtjYXJkOm4sbG9nOnRoaXMuYnVpbGRMb2codCl9O3JldHVybiB0aGlzLm5leHQuc2V0KHQsdSksdX1yZXZpZXdTdGF0ZSh0KXtjb25zdCBlPXRoaXMubmV4dC5nZXQodCk7aWYoZSlyZXR1cm4gZTtjb25zdCBpPXRoaXMuY3VycmVudC5lbGFwc2VkX2RheXMse2RpZmZpY3VsdHk6cixzdGFiaWxpdHk6YX09dGhpcy5sYXN0LG49dGhpcy5hbGdvcml0aG0uZm9yZ2V0dGluZ19jdXJ2ZShpLGEpLGQ9aC5jYXJkKHRoaXMuY3VycmVudCksdT1oLmNhcmQodGhpcy5jdXJyZW50KSxvPWguY2FyZCh0aGlzLmN1cnJlbnQpLGY9aC5jYXJkKHRoaXMuY3VycmVudCk7dGhpcy5uZXh0X2RzKGQsdSxvLGYscixhLG4pLHRoaXMubmV4dF9pbnRlcnZhbChkLHUsbyxmLGkpLHRoaXMubmV4dF9zdGF0ZShkLHUsbyxmKSxkLmxhcHNlcys9MTtjb25zdCB5PXtjYXJkOmQsbG9nOnRoaXMuYnVpbGRMb2cobC5BZ2Fpbil9LHc9e2NhcmQ6dSxsb2c6c3VwZXIuYnVpbGRMb2cobC5IYXJkKX0sZz17Y2FyZDpvLGxvZzpzdXBlci5idWlsZExvZyhsLkdvb2QpfSxNPXtjYXJkOmYsbG9nOnN1cGVyLmJ1aWxkTG9nKGwuRWFzeSl9O3JldHVybiB0aGlzLm5leHQuc2V0KGwuQWdhaW4seSksdGhpcy5uZXh0LnNldChsLkhhcmQsdyksdGhpcy5uZXh0LnNldChsLkdvb2QsZyksdGhpcy5uZXh0LnNldChsLkVhc3ksTSksdGhpcy5uZXh0LmdldCh0KX1uZXh0X2RzKHQsZSxpLHIsYSxuLGQpe3QuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkFnYWluKTtjb25zdCB1PW4vTWF0aC5leHAodGhpcy5hbGdvcml0aG0ucGFyYW1ldGVycy53WzE3XSp0aGlzLmFsZ29yaXRobS5wYXJhbWV0ZXJzLndbMThdKSxvPXRoaXMuYWxnb3JpdGhtLm5leHRfZm9yZ2V0X3N0YWJpbGl0eShhLG4sZCk7dC5zdGFiaWxpdHk9bSgrdS50b0ZpeGVkKDgpLF8sbyksZS5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuSGFyZCksZS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9yZWNhbGxfc3RhYmlsaXR5KGEsbixkLGwuSGFyZCksaS5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuR29vZCksaS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9yZWNhbGxfc3RhYmlsaXR5KGEsbixkLGwuR29vZCksci5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuRWFzeSksci5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9yZWNhbGxfc3RhYmlsaXR5KGEsbixkLGwuRWFzeSl9bmV4dF9pbnRlcnZhbCh0LGUsaSxyLGEpe2xldCBuLGQ7bj10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKGUuc3RhYmlsaXR5LGEpLGQ9dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChpLnN0YWJpbGl0eSxhKSxuPU1hdGgubWluKG4sZCksZD1NYXRoLm1heChkLG4rMSk7Y29uc3QgdT1NYXRoLm1heCh0aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKHIuc3RhYmlsaXR5LGEpLGQrMSk7dC5zY2hlZHVsZWRfZGF5cz0wLHQuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKDUpLGUuc2NoZWR1bGVkX2RheXM9bixlLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihuLCEwKSxpLnNjaGVkdWxlZF9kYXlzPWQsaS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoZCwhMCksci5zY2hlZHVsZWRfZGF5cz11LHIuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKHUsITApfW5leHRfc3RhdGUodCxlLGkscil7dC5zdGF0ZT1jLlJlbGVhcm5pbmcsZS5zdGF0ZT1jLlJldmlldyxpLnN0YXRlPWMuUmV2aWV3LHIuc3RhdGU9Yy5SZXZpZXd9fWNsYXNzIEIgZXh0ZW5kcyBBe25ld1N0YXRlKHQpe2NvbnN0IGU9dGhpcy5uZXh0LmdldCh0KTtpZihlKXJldHVybiBlO3RoaXMuY3VycmVudC5zY2hlZHVsZWRfZGF5cz0wLHRoaXMuY3VycmVudC5lbGFwc2VkX2RheXM9MDtjb25zdCBpPWguY2FyZCh0aGlzLmN1cnJlbnQpLHI9aC5jYXJkKHRoaXMuY3VycmVudCksYT1oLmNhcmQodGhpcy5jdXJyZW50KSxuPWguY2FyZCh0aGlzLmN1cnJlbnQpO3JldHVybiB0aGlzLmluaXRfZHMoaSxyLGEsbiksdGhpcy5uZXh0X2ludGVydmFsKGkscixhLG4sMCksdGhpcy5uZXh0X3N0YXRlKGkscixhLG4pLHRoaXMudXBkYXRlX25leHQoaSxyLGEsbiksdGhpcy5uZXh0LmdldCh0KX1pbml0X2RzKHQsZSxpLHIpe3QuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5pbml0X2RpZmZpY3VsdHkobC5BZ2FpbiksdC5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9zdGFiaWxpdHkobC5BZ2FpbiksZS5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLmluaXRfZGlmZmljdWx0eShsLkhhcmQpLGUuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLmluaXRfc3RhYmlsaXR5KGwuSGFyZCksaS5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLmluaXRfZGlmZmljdWx0eShsLkdvb2QpLGkuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLmluaXRfc3RhYmlsaXR5KGwuR29vZCksci5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLmluaXRfZGlmZmljdWx0eShsLkVhc3kpLHIuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLmluaXRfc3RhYmlsaXR5KGwuRWFzeSl9bGVhcm5pbmdTdGF0ZSh0KXtyZXR1cm4gdGhpcy5yZXZpZXdTdGF0ZSh0KX1yZXZpZXdTdGF0ZSh0KXtjb25zdCBlPXRoaXMubmV4dC5nZXQodCk7aWYoZSlyZXR1cm4gZTtjb25zdCBpPXRoaXMuY3VycmVudC5lbGFwc2VkX2RheXMse2RpZmZpY3VsdHk6cixzdGFiaWxpdHk6YX09dGhpcy5sYXN0LG49dGhpcy5hbGdvcml0aG0uZm9yZ2V0dGluZ19jdXJ2ZShpLGEpLGQ9aC5jYXJkKHRoaXMuY3VycmVudCksdT1oLmNhcmQodGhpcy5jdXJyZW50KSxvPWguY2FyZCh0aGlzLmN1cnJlbnQpLGY9aC5jYXJkKHRoaXMuY3VycmVudCk7cmV0dXJuIHRoaXMubmV4dF9kcyhkLHUsbyxmLHIsYSxuKSx0aGlzLm5leHRfaW50ZXJ2YWwoZCx1LG8sZixpKSx0aGlzLm5leHRfc3RhdGUoZCx1LG8sZiksZC5sYXBzZXMrPTEsdGhpcy51cGRhdGVfbmV4dChkLHUsbyxmKSx0aGlzLm5leHQuZ2V0KHQpfW5leHRfZHModCxlLGkscixhLG4sZCl7dC5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuQWdhaW4pO2NvbnN0IHU9dGhpcy5hbGdvcml0aG0ubmV4dF9mb3JnZXRfc3RhYmlsaXR5KGEsbixkKTt0LnN0YWJpbGl0eT1tKG4sXyx1KSxlLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5IYXJkKSxlLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5IYXJkKSxpLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5Hb29kKSxpLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5Hb29kKSxyLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5FYXN5KSxyLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5FYXN5KX1uZXh0X2ludGVydmFsKHQsZSxpLHIsYSl7bGV0IG4sZCx1LG87bj10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKHQuc3RhYmlsaXR5LGEpLGQ9dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChlLnN0YWJpbGl0eSxhKSx1PXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoaS5zdGFiaWxpdHksYSksbz10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKHIuc3RhYmlsaXR5LGEpLG49TWF0aC5taW4obixkKSxkPU1hdGgubWF4KGQsbisxKSx1PU1hdGgubWF4KHUsZCsxKSxvPU1hdGgubWF4KG8sdSsxKSx0LnNjaGVkdWxlZF9kYXlzPW4sdC5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIobiwhMCksZS5zY2hlZHVsZWRfZGF5cz1kLGUuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKGQsITApLGkuc2NoZWR1bGVkX2RheXM9dSxpLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcih1LCEwKSxyLnNjaGVkdWxlZF9kYXlzPW8sci5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIobywhMCl9bmV4dF9zdGF0ZSh0LGUsaSxyKXt0LnN0YXRlPWMuUmV2aWV3LGUuc3RhdGU9Yy5SZXZpZXcsaS5zdGF0ZT1jLlJldmlldyxyLnN0YXRlPWMuUmV2aWV3fXVwZGF0ZV9uZXh0KHQsZSxpLHIpe2NvbnN0IGE9e2NhcmQ6dCxsb2c6dGhpcy5idWlsZExvZyhsLkFnYWluKX0sbj17Y2FyZDplLGxvZzpzdXBlci5idWlsZExvZyhsLkhhcmQpfSxkPXtjYXJkOmksbG9nOnN1cGVyLmJ1aWxkTG9nKGwuR29vZCl9LHU9e2NhcmQ6cixsb2c6c3VwZXIuYnVpbGRMb2cobC5FYXN5KX07dGhpcy5uZXh0LnNldChsLkFnYWluLGEpLHRoaXMubmV4dC5zZXQobC5IYXJkLG4pLHRoaXMubmV4dC5zZXQobC5Hb29kLGQpLHRoaXMubmV4dC5zZXQobC5FYXN5LHUpfX1jbGFzcyBzdHtmc3JzO2NvbnN0cnVjdG9yKHQpe3RoaXMuZnNycz10fXJlcGxheSh0LGUsaSl7cmV0dXJuIHRoaXMuZnNycy5uZXh0KHQsZSxpKX1oYW5kbGVNYW51YWxSYXRpbmcodCxlLGkscixhLG4sZCl7aWYodHlwZW9mIGU+XCJ1XCIpdGhyb3cgbmV3IEVycm9yKFwicmVzY2hlZHVsZTogc3RhdGUgaXMgcmVxdWlyZWQgZm9yIG1hbnVhbCByYXRpbmdcIik7bGV0IHUsbztpZihlPT09Yy5OZXcpdT17cmF0aW5nOmwuTWFudWFsLHN0YXRlOmUsZHVlOmQ/P2ksc3RhYmlsaXR5OnQuc3RhYmlsaXR5LGRpZmZpY3VsdHk6dC5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czpyLGxhc3RfZWxhcHNlZF9kYXlzOnQuZWxhcHNlZF9kYXlzLHNjaGVkdWxlZF9kYXlzOnQuc2NoZWR1bGVkX2RheXMscmV2aWV3Oml9LG89dihpKSxvLmxhc3RfcmV2aWV3PWk7ZWxzZXtpZih0eXBlb2YgZD5cInVcIil0aHJvdyBuZXcgRXJyb3IoXCJyZXNjaGVkdWxlOiBkdWUgaXMgcmVxdWlyZWQgZm9yIG1hbnVhbCByYXRpbmdcIik7Y29uc3QgZj1kLmRpZmYoaSxcImRheXNcIik7dT17cmF0aW5nOmwuTWFudWFsLHN0YXRlOnQuc3RhdGUsZHVlOnQubGFzdF9yZXZpZXd8fHQuZHVlLHN0YWJpbGl0eTp0LnN0YWJpbGl0eSxkaWZmaWN1bHR5OnQuZGlmZmljdWx0eSxlbGFwc2VkX2RheXM6cixsYXN0X2VsYXBzZWRfZGF5czp0LmVsYXBzZWRfZGF5cyxzY2hlZHVsZWRfZGF5czp0LnNjaGVkdWxlZF9kYXlzLHJldmlldzppfSxvPXsuLi50LHN0YXRlOmUsZHVlOmQsbGFzdF9yZXZpZXc6aSxzdGFiaWxpdHk6YXx8dC5zdGFiaWxpdHksZGlmZmljdWx0eTpufHx0LmRpZmZpY3VsdHksZWxhcHNlZF9kYXlzOnIsc2NoZWR1bGVkX2RheXM6ZixyZXBzOnQucmVwcysxfX1yZXR1cm57Y2FyZDpvLGxvZzp1fX1yZXNjaGVkdWxlKHQsZSl7Y29uc3QgaT1bXTtsZXQgcj12KHQuZHVlKTtmb3IoY29uc3QgYSBvZiBlKXtsZXQgbjtpZihhLnJldmlldz1oLnRpbWUoYS5yZXZpZXcpLGEucmF0aW5nPT09bC5NYW51YWwpe2xldCBkPTA7ci5zdGF0ZSE9PWMuTmV3JiZyLmxhc3RfcmV2aWV3JiYoZD1hLnJldmlldy5kaWZmKHIubGFzdF9yZXZpZXcsXCJkYXlzXCIpKSxuPXRoaXMuaGFuZGxlTWFudWFsUmF0aW5nKHIsYS5zdGF0ZSxhLnJldmlldyxkLGEuc3RhYmlsaXR5LGEuZGlmZmljdWx0eSxhLmR1ZT9oLnRpbWUoYS5kdWUpOnZvaWQgMCl9ZWxzZSBuPXRoaXMucmVwbGF5KHIsYS5yZXZpZXcsYS5yYXRpbmcpO2kucHVzaChuKSxyPW4uY2FyZH1yZXR1cm4gaX1jYWxjdWxhdGVNYW51YWxSZWNvcmQodCxlLGkscil7aWYoIWkpcmV0dXJuIG51bGw7Y29uc3R7Y2FyZDphLGxvZzpufT1pLGQ9aC5jYXJkKHQpO3JldHVybiBkLmR1ZS5nZXRUaW1lKCk9PT1hLmR1ZS5nZXRUaW1lKCk/bnVsbDooZC5zY2hlZHVsZWRfZGF5cz1hLmR1ZS5kaWZmKGQuZHVlLFwiZGF5c1wiKSx0aGlzLmhhbmRsZU1hbnVhbFJhdGluZyhkLGEuc3RhdGUsaC50aW1lKGUpLG4uZWxhcHNlZF9kYXlzLHI/YS5zdGFiaWxpdHk6dm9pZCAwLHI/YS5kaWZmaWN1bHR5OnZvaWQgMCxhLmR1ZSkpfX1jbGFzcyBXIGV4dGVuZHMgWXtzdHJhdGVneUhhbmRsZXI9bmV3IE1hcDtTY2hlZHVsZXI7Y29uc3RydWN0b3IodCl7c3VwZXIodCk7Y29uc3R7ZW5hYmxlX3Nob3J0X3Rlcm06ZX09dGhpcy5wYXJhbWV0ZXJzO3RoaXMuU2NoZWR1bGVyPWU/VjpCfXBhcmFtc19oYW5kbGVyX3Byb3h5KCl7Y29uc3QgdD10aGlzO3JldHVybntzZXQ6ZnVuY3Rpb24oZSxpLHIpe3JldHVybiBpPT09XCJyZXF1ZXN0X3JldGVudGlvblwiJiZOdW1iZXIuaXNGaW5pdGUocik/dC5pbnRlcnZhbE1vZGlmaWVyPXQuY2FsY3VsYXRlX2ludGVydmFsX21vZGlmaWVyKE51bWJlcihyKSk6aT09PVwiZW5hYmxlX3Nob3J0X3Rlcm1cIiYmKHQuU2NoZWR1bGVyPXI9PT0hMD9WOkIpLFJlZmxlY3Quc2V0KGUsaSxyKSwhMH19fXVzZVN0cmF0ZWd5KHQsZSl7cmV0dXJuIHRoaXMuc3RyYXRlZ3lIYW5kbGVyLnNldCh0LGUpLHRoaXN9Y2xlYXJTdHJhdGVneSh0KXtyZXR1cm4gdD90aGlzLnN0cmF0ZWd5SGFuZGxlci5kZWxldGUodCk6dGhpcy5zdHJhdGVneUhhbmRsZXIuY2xlYXIoKSx0aGlzfWdldFNjaGVkdWxlcih0LGUpe2NvbnN0IGk9dGhpcy5zdHJhdGVneUhhbmRsZXIuZ2V0KHguU0VFRCkscj10aGlzLnN0cmF0ZWd5SGFuZGxlci5nZXQoeC5TQ0hFRFVMRVIpfHx0aGlzLlNjaGVkdWxlcixhPWl8fEg7cmV0dXJuIG5ldyByKHQsZSx0aGlzLHtzZWVkOmF9KX1yZXBlYXQodCxlLGkpe2NvbnN0IHI9dGhpcy5nZXRTY2hlZHVsZXIodCxlKS5wcmV2aWV3KCk7cmV0dXJuIGkmJnR5cGVvZiBpPT1cImZ1bmN0aW9uXCI/aShyKTpyfW5leHQodCxlLGkscil7Y29uc3QgYT10aGlzLmdldFNjaGVkdWxlcih0LGUpLG49aC5yYXRpbmcoaSk7aWYobj09PWwuTWFudWFsKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXZpZXcgYSBtYW51YWwgcmF0aW5nXCIpO2NvbnN0IGQ9YS5yZXZpZXcobik7cmV0dXJuIHImJnR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cihkKTpkfWdldF9yZXRyaWV2YWJpbGl0eSh0LGUsaT0hMCl7Y29uc3Qgcj1oLmNhcmQodCk7ZT1lP2gudGltZShlKTpuZXcgRGF0ZTtjb25zdCBhPXIuc3RhdGUhPT1jLk5ldz9NYXRoLm1heChlLmRpZmYoci5sYXN0X3JldmlldyxcImRheXNcIiksMCk6MCxuPXIuc3RhdGUhPT1jLk5ldz90aGlzLmZvcmdldHRpbmdfY3VydmUoYSwrci5zdGFiaWxpdHkudG9GaXhlZCg4KSk6MDtyZXR1cm4gaT9gJHsobioxMDApLnRvRml4ZWQoMil9JWA6bn1yb2xsYmFjayh0LGUsaSl7Y29uc3Qgcj1oLmNhcmQodCksYT1oLnJldmlld19sb2coZSk7aWYoYS5yYXRpbmc9PT1sLk1hbnVhbCl0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgcm9sbGJhY2sgYSBtYW51YWwgcmF0aW5nXCIpO2xldCBuLGQsdTtzd2l0Y2goYS5zdGF0ZSl7Y2FzZSBjLk5ldzpuPWEuZHVlLGQ9dm9pZCAwLHU9MDticmVhaztjYXNlIGMuTGVhcm5pbmc6Y2FzZSBjLlJlbGVhcm5pbmc6Y2FzZSBjLlJldmlldzpuPWEucmV2aWV3LGQ9YS5kdWUsdT1yLmxhcHNlcy0oYS5yYXRpbmc9PT1sLkFnYWluJiZhLnN0YXRlPT09Yy5SZXZpZXc/MTowKTticmVha31jb25zdCBvPXsuLi5yLGR1ZTpuLHN0YWJpbGl0eTphLnN0YWJpbGl0eSxkaWZmaWN1bHR5OmEuZGlmZmljdWx0eSxlbGFwc2VkX2RheXM6YS5sYXN0X2VsYXBzZWRfZGF5cyxzY2hlZHVsZWRfZGF5czphLnNjaGVkdWxlZF9kYXlzLHJlcHM6TWF0aC5tYXgoMCxyLnJlcHMtMSksbGFwc2VzOk1hdGgubWF4KDAsdSksc3RhdGU6YS5zdGF0ZSxsYXN0X3JldmlldzpkfTtyZXR1cm4gaSYmdHlwZW9mIGk9PVwiZnVuY3Rpb25cIj9pKG8pOm99Zm9yZ2V0KHQsZSxpPSExLHIpe2NvbnN0IGE9aC5jYXJkKHQpO2U9aC50aW1lKGUpO2NvbnN0IG49YS5zdGF0ZT09PWMuTmV3PzA6ZS5kaWZmKGEubGFzdF9yZXZpZXcsXCJkYXlzXCIpLGQ9e3JhdGluZzpsLk1hbnVhbCxzdGF0ZTphLnN0YXRlLGR1ZTphLmR1ZSxzdGFiaWxpdHk6YS5zdGFiaWxpdHksZGlmZmljdWx0eTphLmRpZmZpY3VsdHksZWxhcHNlZF9kYXlzOjAsbGFzdF9lbGFwc2VkX2RheXM6YS5lbGFwc2VkX2RheXMsc2NoZWR1bGVkX2RheXM6bixyZXZpZXc6ZX0sdT17Y2FyZDp7Li4uYSxkdWU6ZSxzdGFiaWxpdHk6MCxkaWZmaWN1bHR5OjAsZWxhcHNlZF9kYXlzOjAsc2NoZWR1bGVkX2RheXM6MCxyZXBzOmk/MDphLnJlcHMsbGFwc2VzOmk/MDphLmxhcHNlcyxzdGF0ZTpjLk5ldyxsYXN0X3JldmlldzphLmxhc3RfcmV2aWV3fSxsb2c6ZH07cmV0dXJuIHImJnR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cih1KTp1fXJlc2NoZWR1bGUodCxlPVtdLGk9e30pe2NvbnN0e3JlY29yZExvZ0hhbmRsZXI6cixyZXZpZXdzT3JkZXJCeTphLHNraXBNYW51YWw6bj0hMCxub3c6ZD1uZXcgRGF0ZSx1cGRhdGVfbWVtb3J5X3N0YXRlOnU9ITF9PWk7YSYmdHlwZW9mIGE9PVwiZnVuY3Rpb25cIiYmZS5zb3J0KGEpLG4mJihlPWUuZmlsdGVyKE09Pk0ucmF0aW5nIT09bC5NYW51YWwpKTtjb25zdCBvPW5ldyBzdCh0aGlzKSxmPW8ucmVzY2hlZHVsZShpLmZpcnN0X2NhcmR8fHYoKSxlKSx5PWYubGVuZ3RoLHc9aC5jYXJkKHQpLGc9by5jYWxjdWxhdGVNYW51YWxSZWNvcmQodyxkLHk/Zlt5LTFdOnZvaWQgMCx1KTtyZXR1cm4gciYmdHlwZW9mIHI9PVwiZnVuY3Rpb25cIj97Y29sbGVjdGlvbnM6Zi5tYXAocikscmVzY2hlZHVsZV9pdGVtOmc/cihnKTpudWxsfTp7Y29sbGVjdGlvbnM6ZixyZXNjaGVkdWxlX2l0ZW06Z319fWNvbnN0IG50PXM9Pm5ldyBXKHN8fHt9KTtleHBvcnR7QSBhcyBBYnN0cmFjdFNjaGVkdWxlcixSIGFzIENMQU1QX1BBUkFNRVRFUlMsJCBhcyBERUNBWSxIIGFzIERlZmF1bHRJbml0U2VlZFN0cmF0ZWd5LEQgYXMgRkFDVE9SLFcgYXMgRlNSUyxZIGFzIEZTUlNBbGdvcml0aG0sdHQgYXMgRlNSU1ZlcnNpb24sYXQgYXMgR2VuU2VlZFN0cmF0ZWd5V2l0aENhcmRJZCxJIGFzIEdyYWRlcyxiIGFzIElOSVRfU19NQVgsbCBhcyBSYXRpbmcsXyBhcyBTX01JTixjIGFzIFN0YXRlLHggYXMgU3RyYXRlZ3lNb2RlLGggYXMgVHlwZUNvbnZlcnQsbSBhcyBjbGFtcCx2IGFzIGNyZWF0ZUVtcHR5Q2FyZCxOIGFzIGRhdGVEaWZmSW5EYXlzLEwgYXMgZGF0ZV9kaWZmLEYgYXMgZGF0ZV9zY2hlZHVsZXIsVSBhcyBkZWZhdWx0X2VuYWJsZV9mdXp6LHEgYXMgZGVmYXVsdF9lbmFibGVfc2hvcnRfdGVybSxDIGFzIGRlZmF1bHRfbWF4aW11bV9pbnRlcnZhbCxrIGFzIGRlZmF1bHRfcmVxdWVzdF9yZXRlbnRpb24sVCBhcyBkZWZhdWx0X3csSiBhcyBmaXhEYXRlLFEgYXMgZml4UmF0aW5nLEsgYXMgZml4U3RhdGUsUCBhcyBmb3JnZXR0aW5nX2N1cnZlLE8gYXMgZm9ybWF0RGF0ZSxudCBhcyBmc3JzLHogYXMgZ2VuZXJhdG9yUGFyYW1ldGVycyxHIGFzIGdldF9mdXp6X3JhbmdlLGogYXMgc2hvd19kaWZmX21lc3NhZ2V9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiAvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjaHJvbWVcIiAvPiBcblxuaW1wb3J0IHsgTXV0ZXggfSBmcm9tICdhc3luYy1tdXRleCc7XG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2luZyc7IFxuaW1wb3J0IHsgU3RhdGUsIGNyZWF0ZUVtcHR5Q2FyZCwgQ2FyZCBhcyBGU1JTQ2FyZCB9IGZyb20gJ3RzLWZzcnMnO1xuaW1wb3J0IHsgQm9va21hcmssIEZsYXNoY2FyZCwgQ2hhdE1lc3NhZ2VEYiwgQ2hhdEhpc3RvcnlJdGVtIH0gZnJvbSAnLi4vc3JjL3R5cGVzL2RiJzsgLy8gSW1wb3J0IERCIHR5cGVzXG5cbmNvbnN0IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIID0gJ29mZnNjcmVlbi5odG1sJztcbmxldCBjcmVhdGluZ1Byb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbDtcbmNvbnN0IGNyZWF0aW9uTXV0ZXggPSBuZXcgTXV0ZXgoKTtcblxuLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG9mZnNjcmVlbiBkb2N1bWVudCBleGlzdHMgYW5kIGNyZWF0ZSBpdCBpZiBub3RcbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCkge1xuICAvLyBVc2UgYSBtdXRleCB0byBwcmV2ZW50IG11bHRpcGxlIGNvbmN1cnJlbnQgY3JlYXRpb24gYXR0ZW1wdHNcbiAgY29uc3QgcmVsZWFzZSA9IGF3YWl0IGNyZWF0aW9uTXV0ZXguYWNxdWlyZSgpO1xuICB0cnkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N1bWVudCBhbHJlYWR5IGV4aXN0cy5cbiAgICAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGJyb3dzZXIucnVudGltZS5nZXRDb250ZXh0cyh7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBDb250ZXh0VHlwZSBtaWdodCBiZSBtaXNzaW5nIE9GRlNDUkVFTl9ET0NVTUVOVCBpbiBvbGRlciB0eXBlc1xuICAgICAgICBjb250ZXh0VHlwZXM6IFsnT0ZGU0NSRUVOX0RPQ1VNRU5UJyBhcyBicm93c2VyLlJ1bnRpbWUuQ29udGV4dFR5cGVdLFxuICAgICAgICBkb2N1bWVudFVybHM6IFticm93c2VyLnJ1bnRpbWUuZ2V0VVJMKE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKV0sXG4gICAgICB9KTtcblxuICAgIGlmIChleGlzdGluZ0NvbnRleHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gT2Zmc2NyZWVuIGRvY3VtZW50IGFscmVhZHkgZXhpc3RzLicpOyAvLyBMZXNzIHZlcmJvc2VcbiAgICAgIHJldHVybjsgLy8gQWxyZWFkeSBleGlzdHMsIHdlJ3JlIGdvb2QuXG4gICAgfVxuXG4gICAgLy8gSWYgY3JlYXRpb24gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcywgd2FpdCBmb3IgaXQgdG8gY29tcGxldGUuXG4gICAgaWYgKGNyZWF0aW5nUHJvbWlzZSkge1xuICAgICAgY29uc29sZS5sb2coJ1tEQiBVdGlsXSBXYWl0aW5nIGZvciBleGlzdGluZyBvZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRpb24uLi4nKTtcbiAgICAgIGF3YWl0IGNyZWF0aW5nUHJvbWlzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnW0RCIFV0aWxdIENyZWF0aW5nIG9mZnNjcmVlbiBkb2N1bWVudC4uLicpO1xuICAgIGNyZWF0aW5nUHJvbWlzZSA9IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoeyAvLyBVc2UgbmF0aXZlIGNocm9tZSBBUElcbiAgICAgIHVybDogT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgsXG4gICAgICByZWFzb25zOiBbJ0RPTV9QQVJTRVInIGFzIGNocm9tZS5vZmZzY3JlZW4uUmVhc29uXSwgXG4gICAgICBqdXN0aWZpY2F0aW9uOiAnUHJvdmlkZXMgUEdsaXRlIGRhdGFiYXNlIG9wZXJhdGlvbnMuJyxcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjcmVhdGluZ1Byb21pc2U7XG4gICAgICBjb25zb2xlLmxvZygnW0RCIFV0aWxdIE9mZnNjcmVlbiBkb2N1bWVudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbREIgVXRpbF0gRXJyb3IgY3JlYXRpbmcgb2Zmc2NyZWVuIGRvY3VtZW50OicsIGVycm9yKTtcbiAgICAgIC8vIERvdWJsZS1jaGVjayBpZiBpdCBleGlzdHMgbm93LCBtYXliZSBjcmVhdGlvbiBzdWNjZWVkZWQgZGVzcGl0ZSBlcnJvcj9cbiAgICAgIGNvbnN0IGNvbnRleHRzQWZ0ZXJFcnJvciA9IGF3YWl0IGJyb3dzZXIucnVudGltZS5nZXRDb250ZXh0cyh7XG4gICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICBjb250ZXh0VHlwZXM6IFsnT0ZGU0NSRUVOX0RPQ1VNRU5UJyBhcyBicm93c2VyLlJ1bnRpbWUuQ29udGV4dFR5cGVdLFxuICAgICAgICAgZG9jdW1lbnRVcmxzOiBbYnJvd3Nlci5ydW50aW1lLmdldFVSTChPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCldLFxuICAgICAgIH0pO1xuICAgICAgIGlmIChjb250ZXh0c0FmdGVyRXJyb3IubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAvLyBPbmx5IHRocm93IGlmIGl0IHRydWx5IGZhaWxlZCBhbmQgZG9lc24ndCBleGlzdFxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRpb24gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oJ1tEQiBVdGlsXSBPZmZzY3JlZW4gZG9jdW1lbnQgZXhpc3RlZCBkZXNwaXRlIGNyZWF0aW9uIGVycm9yL3JhY2UgY29uZGl0aW9uLicpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBSZXNldCB0aGUgcHJvbWlzZSB3aGV0aGVyIGl0IHN1Y2NlZWRlZCBvciBmYWlsZWRcbiAgICAgIGNyZWF0aW5nUHJvbWlzZSA9IG51bGw7IFxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBSZWxlYXNlIHRoZSBtdXRleFxuICAgIHJlbGVhc2UoKTtcbiAgfVxufVxuXG4vLyBFeHBvcnQgZnVuY3Rpb25zIHRoYXQgbWlycm9yIFBHbGl0ZSBtZXRob2RzIHZpYSBAd2ViZXh0LWNvcmUvbWVzc2FnaW5nXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY0RiKHNxbDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgYXdhaXQgZW5zdXJlT2Zmc2NyZWVuRG9jdW1lbnQoKTtcbiAgLy8gY29uc29sZS5sb2coJ1tEQiBVdGlsXSBTZW5kaW5nIGRiRXhlYyBtZXNzYWdlOicsIHsgc3FsIH0pOyAvLyBMZXNzIHZlcmJvc2VcbiAgLy8gUEdsaXRlIGV4ZWMgZG9lc24ndCBzdXBwb3J0IHBhcmFtcywgc28gd2Ugb25seSBzZW5kIHNxbFxuICByZXR1cm4gc2VuZE1lc3NhZ2UoJ2RiRXhlYycsIHsgc3FsIH0pOyBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5RGIoc3FsOiBzdHJpbmcsIHBhcmFtcz86IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgYXdhaXQgZW5zdXJlT2Zmc2NyZWVuRG9jdW1lbnQoKTtcbiAgLy8gY29uc29sZS5sb2coJ1tEQiBVdGlsXSBTZW5kaW5nIGRiUXVlcnkgbWVzc2FnZTonLCB7IHNxbCwgcGFyYW1zIH0pOyAvLyBMZXNzIHZlcmJvc2VcbiAgcmV0dXJuIHNlbmRNZXNzYWdlKCdkYlF1ZXJ5JywgeyBzcWwsIHBhcmFtczogcGFyYW1zIHx8IFtdIH0pOyBcbn1cblxuLy8gLS0tIERhdGFiYXNlIEludGVyYWN0aW9uIEZ1bmN0aW9ucyAtLS1cblxuLyoqXG4gKiBTYXZlcyBhIGJvb2ttYXJrIHRvIHRoZSBkYXRhYmFzZS5cbiAqIFxuICogQHBhcmFtIGJvb2ttYXJrRGF0YSBQYXJ0aWFsIGJvb2ttYXJrIGRhdGEgKHVybCBpcyByZXF1aXJlZClcbiAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIEJvb2ttYXJrIG9iamVjdCB3aXRoIGl0cyBJRFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va21hcmsoYm9va21hcmtEYXRhOiBQaWNrPEJvb2ttYXJrLCAndXJsJz4gJiBQYXJ0aWFsPE9taXQ8Qm9va21hcmssICdpZCcgfCAnc2F2ZWRfYXQnPiA+KTogUHJvbWlzZTxCb29rbWFyaz4ge1xuICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgSU5TRVJUIElOVE8gYm9va21hcmtzICh1cmwsIHRpdGxlLCB0YWdzLCBlbWJlZGRpbmcpXG4gICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQpXG4gICAgICAgIFJFVFVSTklORyBpZCwgdXJsLCB0aXRsZSwgc2F2ZWRfYXQsIHRhZ3MsIGVtYmVkZGluZztcbiAgICBgO1xuICAgIC8vIEVtYmVkZGluZyBzaG91bGQgbm93IGJlIHN0cmluZyB8IG51bGxcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgIGJvb2ttYXJrRGF0YS51cmwsXG4gICAgICAgIGJvb2ttYXJrRGF0YS50aXRsZSA/PyBudWxsLFxuICAgICAgICBib29rbWFya0RhdGEudGFncyA/PyBudWxsLFxuICAgICAgICBib29rbWFya0RhdGEuZW1iZWRkaW5nID8/IG51bGwgXG4gICAgXTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeURiKHNxbCwgcGFyYW1zKTtcbiAgICBpZiAoIXJlc3VsdD8ucm93cz8uWzBdKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGJvb2ttYXJrXCIpO1xuICAgIHJldHVybiByZXN1bHQucm93c1swXSBhcyBCb29rbWFyaztcbn1cblxuLyoqXG4gKiBTYXZlcyBhIGZsYXNoY2FyZCB0byB0aGUgZGF0YWJhc2UsIGluaXRpYWxpemluZyBGU1JTIHN0YXRlLlxuICogXG4gKiBAcGFyYW0gZmxhc2hjYXJkRGF0YSBEYXRhIGZvciB0aGUgbmV3IGZsYXNoY2FyZCAoZXhjbHVkaW5nIEZTUlMgc3RhdGUgYW5kIGlkL2NyZWF0ZWRfYXQpXG4gKiBAcGFyYW0gbm93IFRoZSBjdXJyZW50IGRhdGUvdGltZSBmb3IgaW5pdGlhbGl6aW5nIEZTUlMgc3RhdGVcbiAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIEZsYXNoY2FyZCBvYmplY3Qgd2l0aCBpdHMgSUQgYW5kIGluaXRpYWwgRlNSUyBzdGF0ZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRmxhc2hjYXJkKGZsYXNoY2FyZERhdGE6IE9taXQ8Rmxhc2hjYXJkLCAnaWQnIHwgJ2NyZWF0ZWRfYXQnIHwga2V5b2YgRlNSU0NhcmQgfCAnZHVlJyB8ICdzdGF0ZScgfCAnbGFzdF9yZXZpZXcnPiwgbm93OiBEYXRlID0gbmV3IERhdGUoKSk6IFByb21pc2U8Rmxhc2hjYXJkPiB7XG4gICAgLy8gR2V0IGluaXRpYWwgRlNSUyBzdGF0ZSB1c2luZyB0cy1mc3JzXG4gICAgY29uc3QgaW5pdGlhbENhcmRTdGF0ZSA9IGNyZWF0ZUVtcHR5Q2FyZChub3cpO1xuICAgIC8vIEdldCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdGF0ZSBlbnVtXG4gICAgY29uc3Qgc3RhdGVTdHJpbmcgPSBTdGF0ZVtpbml0aWFsQ2FyZFN0YXRlLnN0YXRlXTsgXG5cbiAgICBjb25zdCBzcWwgPSBgXG4gICAgICAgIElOU0VSVCBJTlRPIGZsYXNoY2FyZHMgKFxuICAgICAgICAgICAgdHlwZSwgZnJvbnQsIGJhY2ssIGNsb3plX3RleHQsIHNvdXJjZV91cmwsIHNvdXJjZV9oaWdobGlnaHQsIFxuICAgICAgICAgICAgc291cmNlX2xhbmd1YWdlLCB0YXJnZXRfbGFuZ3VhZ2UsIGNvbnRleHQsIHRhZ3MsIFxuICAgICAgICAgICAgZHVlLCBzdGFiaWxpdHksIGRpZmZpY3VsdHksIGVsYXBzZWRfZGF5cywgc2NoZWR1bGVkX2RheXMsIFxuICAgICAgICAgICAgcmVwcywgbGFwc2VzLCBzdGF0ZSwgbGFzdF9yZXZpZXdcbiAgICAgICAgKVxuICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCwgJDksICQxMCwgJDExLCAkMTIsICQxMywgJDE0LCAkMTUsICQxNiwgJDE3LCAkMTgsICQxOSlcbiAgICAgICAgUkVUVVJOSU5HICo7IFxuICAgIGA7XG4gICAgXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICBmbGFzaGNhcmREYXRhLnR5cGUsXG4gICAgICAgIGZsYXNoY2FyZERhdGEuZnJvbnQgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5iYWNrID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEuY2xvemVfdGV4dCA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLnNvdXJjZV91cmwgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5zb3VyY2VfaGlnaGxpZ2h0ID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEuc291cmNlX2xhbmd1YWdlID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEudGFyZ2V0X2xhbmd1YWdlID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEuY29udGV4dCA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLnRhZ3MgPz8gbnVsbCxcbiAgICAgICAgLy8gRlNSUyBpbml0aWFsIHN0YXRlOlxuICAgICAgICBpbml0aWFsQ2FyZFN0YXRlLmR1ZS50b0lTT1N0cmluZygpLCAvLyBTdG9yZSBhcyBJU08gc3RyaW5nXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUuc3RhYmlsaXR5LFxuICAgICAgICBpbml0aWFsQ2FyZFN0YXRlLmRpZmZpY3VsdHksXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUuZWxhcHNlZF9kYXlzLFxuICAgICAgICBpbml0aWFsQ2FyZFN0YXRlLnNjaGVkdWxlZF9kYXlzLFxuICAgICAgICBpbml0aWFsQ2FyZFN0YXRlLnJlcHMsXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUubGFwc2VzLFxuICAgICAgICBzdGF0ZVN0cmluZywgLy8gVXNlIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRlXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUubGFzdF9yZXZpZXc/LnRvSVNPU3RyaW5nKCkgPz8gbnVsbCAvLyBTdG9yZSBhcyBJU08gc3RyaW5nIG9yIG51bGxcbiAgICBdO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlEYihzcWwsIHBhcmFtcyk7XG4gICAgaWYgKCFyZXN1bHQ/LnJvd3M/LlswXSkgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBmbGFzaGNhcmRcIik7XG4gICAgLy8gRW5zdXJlIHRoZSByZXR1cm5lZCBzdGF0ZSBpcyBjb3JyZWN0bHkgdHlwZWQgaWYgbmVlZGVkIGVsc2V3aGVyZSBpbW1lZGlhdGVseSxcbiAgICAvLyBhbHRob3VnaCByZWFkaW5nIGZyb20gREIgbGF0ZXIgc2hvdWxkIHlpZWxkIHRoZSBzdHJpbmcuXG4gICAgY29uc3Qgc2F2ZWRGbGFzaGNhcmQgPSByZXN1bHQucm93c1swXSBhcyBGbGFzaGNhcmQ7XG4gICAgLy8gUEdsaXRlIG1pZ2h0IHJldHVybiB0aGUgbnVtZXJpYyBlbnVtIHZhbHVlIGlmIHRoZSBjb2x1bW4gdHlwZSBhZmZpbml0eSBpcyBpbnRlZ2VyLFxuICAgIC8vIGJ1dCBzaW5jZSBpdCdzIFRFWFQsIGl0IHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyB3ZSBpbnNlcnRlZC5cbiAgICAvLyBJZiBpc3N1ZXMgYXJpc2UsIG1hbnVhbGx5IGNhc3QgaGVyZTogc2F2ZWRGbGFzaGNhcmQuc3RhdGUgPSBTdGF0ZVtzYXZlZEZsYXNoY2FyZC5zdGF0ZSBhcyBudW1iZXJdIGFzIHVua25vd24gYXMgU3RhdGU7XG4gICAgcmV0dXJuIHNhdmVkRmxhc2hjYXJkO1xufVxuXG4vKipcbiAqIFNhdmVzIGEgY2hhdCBtZXNzYWdlIHRvIHRoZSBkYXRhYmFzZS5cbiAqIFxuICogQHBhcmFtIG1lc3NhZ2VEYXRhIFRoZSBjaGF0IG1lc3NhZ2UgZGF0YVxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgQ2hhdE1lc3NhZ2VEYiBvYmplY3Qgd2l0aCBpdHMgSUQgYW5kIHRpbWVzdGFtcFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hhdE1lc3NhZ2UobWVzc2FnZURhdGE6IE9taXQ8Q2hhdE1lc3NhZ2VEYiwgJ2lkJyB8ICd0aW1lc3RhbXAnPik6IFByb21pc2U8Q2hhdE1lc3NhZ2VEYj4ge1xuICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgSU5TRVJUIElOVE8gY2hhdF9tZXNzYWdlcyAocm9sZSwgY29udGVudCwgYm9va21hcmtfaWQsIGZsYXNoY2FyZF9pZClcbiAgICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNClcbiAgICAgICAgUkVUVVJOSU5HICo7XG4gICAgYDtcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgIG1lc3NhZ2VEYXRhLnJvbGUsXG4gICAgICAgIG1lc3NhZ2VEYXRhLmNvbnRlbnQgPz8gbnVsbCxcbiAgICAgICAgbWVzc2FnZURhdGEuYm9va21hcmtfaWQgPz8gbnVsbCxcbiAgICAgICAgbWVzc2FnZURhdGEuZmxhc2hjYXJkX2lkID8/IG51bGxcbiAgICBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5RGIoc3FsLCBwYXJhbXMpO1xuICAgIGlmICghcmVzdWx0Py5yb3dzPy5bMF0pIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgY2hhdCBtZXNzYWdlXCIpO1xuICAgIGNvbnNvbGUubG9nKCdbZGIudHMgY3JlYXRlQ2hhdE1lc3NhZ2VdIFJhdyBEQiByZXN1bHQgcm93OicsIHJlc3VsdC5yb3dzWzBdKTsgXG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzWzBdIGFzIENoYXRNZXNzYWdlRGI7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjaGF0IGhpc3RvcnksIGpvaW5pbmcgYm9va21hcmtzIGFuZCBmbGFzaGNhcmRzLlxuICogXG4gKiBAcGFyYW0gbGltaXQgTWF4aW11bSBudW1iZXIgb2YgbWVzc2FnZXMgdG8gcmV0cmlldmUgKG9wdGlvbmFsKVxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgQ2hhdEhpc3RvcnlJdGVtIG9iamVjdHNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENoYXRIaXN0b3J5KGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxDaGF0SGlzdG9yeUl0ZW1bXT4ge1xuICAgIC8vIENvbnN0cnVjdCB0aGUgcXVlcnkgdG8gZmV0Y2ggbWVzc2FnZXMgYW5kIGpvaW4gcmVsYXRlZCBkYXRhXG4gICAgY29uc3Qgc3FsID0gYFxuICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICBtLmlkIGFzIG1lc3NhZ2VfaWQsIC0tIEFsaWFzIHRoZSBtZXNzYWdlIElEXG4gICAgICAgICAgICBtLnJvbGUsIG0uY29udGVudCwgbS5ib29rbWFya19pZCwgbS5mbGFzaGNhcmRfaWQsIG0udGltZXN0YW1wLFxuICAgICAgICAgICAgYi5pZCBhcyBib29rbWFya19pZF9qb2luZWQsIGIudXJsIGFzIGJvb2ttYXJrX3VybCwgYi50aXRsZSBhcyBib29rbWFya190aXRsZSwgYi5zYXZlZF9hdCBhcyBib29rbWFya19zYXZlZF9hdCwgYi50YWdzIGFzIGJvb2ttYXJrX3RhZ3MsIGIuZW1iZWRkaW5nIGFzIGJvb2ttYXJrX2VtYmVkZGluZywgXG4gICAgICAgICAgICBmLmlkIGFzIGZsYXNoY2FyZF9pZF9qb2luZWQsIGYuKiAtLSBTZWxlY3QgYWxsIGZsYXNoY2FyZCBmaWVsZHNcbiAgICAgICAgRlJPTSBjaGF0X21lc3NhZ2VzIG1cbiAgICAgICAgTEVGVCBKT0lOIGJvb2ttYXJrcyBiIE9OIG0uYm9va21hcmtfaWQgPSBiLmlkXG4gICAgICAgIExFRlQgSk9JTiBmbGFzaGNhcmRzIGYgT04gbS5mbGFzaGNhcmRfaWQgPSBmLmlkXG4gICAgICAgIE9SREVSIEJZIG0udGltZXN0YW1wIERFU0NcbiAgICAgICAgJHtsaW1pdCA/ICdMSU1JVCA/JyA6ICcnfVxuICAgIGA7XG4gICAgY29uc3QgcGFyYW1zID0gbGltaXQgPyBbbGltaXRdIDogW107XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlEYihzcWwsIHBhcmFtcyk7XG5cbiAgICBpZiAoIXJlc3VsdD8ucm93cykgcmV0dXJuIFtdO1xuXG4gICAgY29uc29sZS5sb2coJ1tkYi50cyBnZXRDaGF0SGlzdG9yeV0gUmF3IERCIHJlc3VsdCByb3dzOicsIHJlc3VsdC5yb3dzKTtcblxuICAgIC8vIE1hcCB0aGUgcmF3IHJvd3MgdG8gdGhlIENoYXRIaXN0b3J5SXRlbSB1bmlvbiB0eXBlXG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcCgocm93OiBhbnkpOiBDaGF0SGlzdG9yeUl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBDaGF0TWVzc2FnZURiID0ge1xuICAgICAgICAgICAgaWQ6IHJvdy5tZXNzYWdlX2lkLCAvLyBVc2UgdGhlIGV4cGxpY2l0IGFsaWFzIGhlcmVcbiAgICAgICAgICAgIHJvbGU6IHJvdy5yb2xlLFxuICAgICAgICAgICAgY29udGVudDogcm93LmNvbnRlbnQsXG4gICAgICAgICAgICBib29rbWFya19pZDogcm93LmJvb2ttYXJrX2lkLCAvLyBUaGlzIGNvbWVzIGZyb20gbS4qLCBzaG91bGQgYmUgY29ycmVjdFxuICAgICAgICAgICAgZmxhc2hjYXJkX2lkOiByb3cuZmxhc2hjYXJkX2lkLCAvLyBUaGlzIGNvbWVzIGZyb20gbS4qLCBzaG91bGQgYmUgY29ycmVjdFxuICAgICAgICAgICAgdGltZXN0YW1wOiByb3cudGltZXN0YW1wLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyb3cucm9sZSA9PT0gJ2Jvb2ttYXJrJyAmJiByb3cuYm9va21hcmtfaWRfam9pbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBib29rbWFyazogQm9va21hcmsgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHJvdy5ib29rbWFya19pZF9qb2luZWQsIC8vIFVzZSB0aGUgc3BlY2lmaWMgam9pbiBhbGlhc1xuICAgICAgICAgICAgICAgIHVybDogcm93LmJvb2ttYXJrX3VybCxcbiAgICAgICAgICAgICAgICB0aXRsZTogcm93LmJvb2ttYXJrX3RpdGxlLFxuICAgICAgICAgICAgICAgIHNhdmVkX2F0OiByb3cuYm9va21hcmtfc2F2ZWRfYXQsXG4gICAgICAgICAgICAgICAgdGFnczogcm93LmJvb2ttYXJrX3RhZ3MsXG4gICAgICAgICAgICAgICAgZW1iZWRkaW5nOiByb3cuYm9va21hcmtfZW1iZWRkaW5nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdib29rbWFyaycsIG1lc3NhZ2UsIGJvb2ttYXJrIH07XG4gICAgICAgIH0gZWxzZSBpZiAocm93LnJvbGUgPT09ICdmbGFzaGNhcmQnICYmIHJvdy5mbGFzaGNhcmRfaWRfam9pbmVkKSB7XG4gICAgICAgICAgICAgLy8gTWFwIGFsbCBmbGFzaGNhcmQgZmllbGRzIGZyb20gdGhlIHJvdyBcbiAgICAgICAgICAgICBjb25zdCBmbGFzaGNhcmQ6IEZsYXNoY2FyZCA9IHtcbiAgICAgICAgICAgICAgICAgaWQ6IHJvdy5mbGFzaGNhcmRfaWRfam9pbmVkLCAvLyBVc2UgdGhlIHNwZWNpZmljIGpvaW4gYWxpYXNcbiAgICAgICAgICAgICAgICAgdHlwZTogcm93LnR5cGUsXG4gICAgICAgICAgICAgICAgIGZyb250OiByb3cuZnJvbnQsXG4gICAgICAgICAgICAgICAgIGJhY2s6IHJvdy5iYWNrLFxuICAgICAgICAgICAgICAgICBjbG96ZV90ZXh0OiByb3cuY2xvemVfdGV4dCxcbiAgICAgICAgICAgICAgICAgc291cmNlX3VybDogcm93LnNvdXJjZV91cmwsXG4gICAgICAgICAgICAgICAgIHNvdXJjZV9oaWdobGlnaHQ6IHJvdy5zb3VyY2VfaGlnaGxpZ2h0LFxuICAgICAgICAgICAgICAgICBzb3VyY2VfbGFuZ3VhZ2U6IHJvdy5zb3VyY2VfbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgIHRhcmdldF9sYW5ndWFnZTogcm93LnRhcmdldF9sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgY29udGV4dDogcm93LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgIHRhZ3M6IHJvdy50YWdzXzEsIC8vIEtlZXAgZXhpc3RpbmcgYWxpYXMgZm9yIHRhZ3MgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHJvdy5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgICBkdWU6IHJvdy5kdWUsXG4gICAgICAgICAgICAgICAgIHN0YWJpbGl0eTogcm93LnN0YWJpbGl0eSxcbiAgICAgICAgICAgICAgICAgZGlmZmljdWx0eTogcm93LmRpZmZpY3VsdHksXG4gICAgICAgICAgICAgICAgIGVsYXBzZWRfZGF5czogcm93LmVsYXBzZWRfZGF5cyxcbiAgICAgICAgICAgICAgICAgc2NoZWR1bGVkX2RheXM6IHJvdy5zY2hlZHVsZWRfZGF5cyxcbiAgICAgICAgICAgICAgICAgcmVwczogcm93LnJlcHMsXG4gICAgICAgICAgICAgICAgIGxhcHNlczogcm93LmxhcHNlcyxcbiAgICAgICAgICAgICAgICAgc3RhdGU6IHJvdy5zdGF0ZSBhcyBTdGF0ZSxcbiAgICAgICAgICAgICAgICAgbGFzdF9yZXZpZXc6IHJvdy5sYXN0X3JldmlldyxcbiAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2ZsYXNoY2FyZCcsIG1lc3NhZ2UsIGZsYXNoY2FyZCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yIHJlZ3VsYXIgbWVzc2FnZXMsIHVzZSB0aGUgYmFzZSBtZXNzYWdlIG9iamVjdFxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ21lc3NhZ2UnLCBkYXRhOiBtZXNzYWdlIH07IFxuICAgICAgICB9XG4gICAgfSkucmV2ZXJzZSgpOyAvLyBSZXZlcnNlIGJhY2sgdG8gY2hyb25vbG9naWNhbCBvcmRlclxufVxuXG4vKipcbiAqIFJldHJpZXZlcyBmbGFzaGNhcmRzIGR1ZSBmb3IgcmV2aWV3LlxuICogXG4gKiBAcGFyYW0gbm93IFRoZSBjdXJyZW50IGRhdGUvdGltZSB0byBjb21wYXJlIGFnYWluc3QgdGhlIGR1ZSBkYXRlXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBkdWUgRmxhc2hjYXJkIG9iamVjdHNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldER1ZUZsYXNoY2FyZHMobm93OiBEYXRlID0gbmV3IERhdGUoKSk6IFByb21pc2U8Rmxhc2hjYXJkW10+IHtcbiAgICBjb25zdCBzcWwgPSBgXG4gICAgICAgIFNFTEVDVCAqIEZST00gZmxhc2hjYXJkc1xuICAgICAgICBXSEVSRSBkdWUgPD0gP1xuICAgICAgICBPUkRFUiBCWSBkdWUgQVNDO1xuICAgIGA7XG4gICAgY29uc3QgcGFyYW1zID0gW25vdy50b0lTT1N0cmluZygpXTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeURiKHNxbCwgcGFyYW1zKTtcbiAgICByZXR1cm4gKHJlc3VsdD8ucm93cyB8fCBbXSkgYXMgRmxhc2hjYXJkW107XG59XG5cbi8vIEZ1dHVyZSBmdW5jdGlvbnMgKHVwZGF0ZUZsYXNoY2FyZFN0YXRlLCBkZWxldGVCb29rbWFyaywgZXRjLikgY2FuIGJlIGFkZGVkIGhlcmUuXG5cbi8vIFNjaGVtYSBpcyBpbml0aWFsaXplZCBkaXJlY3RseSBpbiBvZmZzY3JlZW4udHNcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplU2NoZW1hKCkgeyAuLi4gfSAiLCIvLyBzcmMvc2VydmljZXMvbGxtU2VydmljZS50c1xuXG5pbXBvcnQgeyBxdWVyeURiIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGInOyAvLyBUbyBsb2FkIGNvbmZpZ1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnaW5nJzsgLy8gRm9yIHN0cmVhbWluZyByZXNwb25zZXMgYmFja1xuaW1wb3J0IHR5cGUgeyBMTE1Qcm92aWRlciwgTExNQ2hhdFByb3ZpZGVyLCBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0LCBMTE1FbWJlZGRpbmdQcm92aWRlciwgUHJvdmlkZXJFbWJlZGRpbmdSZXF1ZXN0IH0gZnJvbSAnLi9wcm92aWRlcnMvdHlwZXMnO1xuXG4vLyAtLS0gQ29uZmlndXJhdGlvbiBUeXBlcyAtLS1cblxuLy8gUmV1c2UgQ2hhdE1lc3NhZ2UgZnJvbSBtZXNzYWdpbmcudHMgaWYgc3VpdGFibGUsIG9yIHJlZGVmaW5lIGlmIG5lZWRlZFxuaW1wb3J0IHR5cGUgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lc3NhZ2luZyc7XG5cbi8vIEJhc2UgY29uZmlndXJhdGlvbiBzdHJ1Y3R1cmUgKHlvdSBtaWdodCBzdG9yZSB0aGlzIGFzIEpTT04gaW4gdGhlIERCKVxuZXhwb3J0IGludGVyZmFjZSBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6IExMTVByb3ZpZGVyO1xuICBjaGF0TW9kZWw6IHN0cmluZztcbiAgZW1iZWRkaW5nTW9kZWw/OiBzdHJpbmc7IC8vIE9wdGlvbmFsLCBtaWdodCBub3QgYmUgbmVlZGVkIGZvciBhbGwgcHJvdmlkZXJzIG9yIHNlcGFyYXRlIGNvbmZpZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9sbGFtYUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ29sbGFtYSc7XG4gIGVuZHBvaW50OiBzdHJpbmc7IC8vIGUuZy4sIGh0dHA6Ly9sb2NhbGhvc3Q6MTE0MzRcbiAgLy8gZW1iZWRkaW5nTW9kZWwgaXMgcmVxdWlyZWQgZm9yIGxvY2FsIE9sbGFtYSBlbWJlZGRpbmdcbiAgZW1iZWRkaW5nTW9kZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuUm91dGVyQ29uZmlnIGV4dGVuZHMgTExNQ29uZmlnQmFzZSB7XG4gIHByb3ZpZGVyOiAnb3BlbnJvdXRlcic7XG4gIGFwaUtleTogc3RyaW5nO1xuICAvLyBPcGVuUm91dGVyIG1pZ2h0IHVzZSBzcGVjaWZpYyBtb2RlbCBpZGVudGlmaWVycyBkaWZmZXJlbnQgZnJvbSBPbGxhbWFcbiAgLy8gRW1iZWRkaW5nIG1vZGVsIG1pZ2h0IGJlIGltcGxpY2l0IG9yIGEgc3BlY2lmaWMgb25lIGlmIHRoZXkgb2ZmZXIgaXRcbn1cblxuLy8gQWRkIEdyb3FDb25maWdcbmV4cG9ydCBpbnRlcmZhY2UgR3JvcUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ2dyb3EnO1xuICBhcGlLZXk6IHN0cmluZztcbiAgLy8gR3JvcSBkb2Vzbid0IGN1cnJlbnRseSBvZmZlciBlbWJlZGRpbmcgbW9kZWxzXG4gIGVtYmVkZGluZ01vZGVsPzogdW5kZWZpbmVkOyBcbn1cblxuLy8gQWRkIFZlbmljZUNvbmZpZyAoZXZlbiBpZiBlbXB0eSBmb3Igbm93KVxuZXhwb3J0IGludGVyZmFjZSBWZW5pY2VDb25maWcgZXh0ZW5kcyBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6ICd2ZW5pY2UnO1xuICBhcGlLZXk/OiB1bmRlZmluZWQ7IC8vIE5vIEFQSSBrZXkgbmVlZGVkXG4gIGVtYmVkZGluZ01vZGVsPzogdW5kZWZpbmVkO1xuICAvLyBBZGQgd2FsbGV0IGFkZHJlc3Mgb3Igb3RoZXIgcmVsZXZhbnQgZmllbGRzIGxhdGVyXG59XG5cbmV4cG9ydCB0eXBlIExMTVVzZXJDb25maWcgPSBPbGxhbWFDb25maWcgfCBPcGVuUm91dGVyQ29uZmlnIHwgR3JvcUNvbmZpZyB8IFZlbmljZUNvbmZpZzsgLy8gVW5pb24gdHlwZVxuXG4vLyAtLS0gU2VydmljZSBBcmd1bWVudCBUeXBlcyAtLS1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1DaGF0UmVxdWVzdCB7XG4gIHByb21wdDogc3RyaW5nO1xuICBoaXN0b3J5PzogQ2hhdE1lc3NhZ2VbXTtcbiAgY29uZmlnOiBMTE1Vc2VyQ29uZmlnOyAvLyBQYXNzIHRoZSBsb2FkZWQgY29uZmlnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkaW5nUmVxdWVzdCB7XG4gIGNvbnRlbnQ6IHN0cmluZ1tdIHwgc3RyaW5nOyAvLyBBbGxvdyBzaW5nbGUgc3RyaW5nIG9yIGFycmF5XG4gIGNvbmZpZzogTExNVXNlckNvbmZpZztcbn1cblxuLy8gLS0tIFNlcnZpY2UgUmVzcG9uc2UgVHlwZXMgLS0tXG5cbi8vIEZvciBjaGF0LCB3ZSBzdHJlYW0gT2xsYW1hU3RyZWFtQ2h1bmsgdmlhIHNlbmRNZXNzYWdlXG4vLyBGb3IgZW1iZWRkaW5ncywgd2UgcmV0dXJuIHRoZSB2ZWN0b3JzIGRpcmVjdGx5XG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkZGluZ1Jlc3BvbnNlIHtcbiAgZW1iZWRkaW5nczogbnVtYmVyW11bXTsgLy8gQXJyYXkgb2YgZW1iZWRkaW5nIHZlY3RvcnNcbn1cblxuXG4vLyAtLS0gU2VydmljZSBJbnRlcmZhY2UgKENvbmNlcHR1YWwgLSBpbXBsZW1lbnRhdGlvbiBmb2xsb3dzKSAtLS1cblxuLyoqXG4gKiBMb2FkcyB0aGUgdXNlcidzIExMTSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJDb25maWcoKTogUHJvbWlzZTxMTE1Vc2VyQ29uZmlnIHwgbnVsbD4ge1xuICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIExvYWRpbmcgdXNlciBjb25maWd1cmF0aW9uLi4uJyk7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3FsID0gJ1NFTEVDVCBjb25maWdfanNvbiBGUk9NIHVzZXJfY29uZmlndXJhdGlvbiBXSEVSRSBpZCA9IDE7JztcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeURiKHNxbCk7XG4gICAgaWYgKHJlc3VsdD8ucm93cz8uWzBdPy5jb25maWdfanNvbikge1xuICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShyZXN1bHQucm93c1swXS5jb25maWdfanNvbik7XG4gICAgICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIExvYWRlZCBjb25maWc6JywgY29uZmlnKTtcbiAgICAgIC8vIEJhc2ljIHZhbGlkYXRpb25cbiAgICAgIGlmICghY29uZmlnLnByb3ZpZGVyIHx8ICFjb25maWcuY2hhdE1vZGVsKSB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWcgbWlzc2luZyBwcm92aWRlci9jaGF0TW9kZWxcIik7XG4gICAgICBpZiAoY29uZmlnLnByb3ZpZGVyID09PSAnb2xsYW1hJyAmJiAoIWNvbmZpZy5lbmRwb2ludCB8fCAhY29uZmlnLmVtYmVkZGluZ01vZGVsKSkgdGhyb3cgbmV3IEVycm9yKFwiT2xsYW1hIGNvbmZpZyBtaXNzaW5nIGVuZHBvaW50L2VtYmVkZGluZ01vZGVsXCIpO1xuICAgICAgaWYgKGNvbmZpZy5wcm92aWRlciA9PT0gJ29wZW5yb3V0ZXInICYmICFjb25maWcuYXBpS2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJPcGVuUm91dGVyIGNvbmZpZyBtaXNzaW5nIGFwaUtleVwiKTtcbiAgICAgIGlmIChjb25maWcucHJvdmlkZXIgPT09ICdncm9xJyAmJiAhY29uZmlnLmFwaUtleSkgdGhyb3cgbmV3IEVycm9yKFwiR3JvcSBjb25maWcgbWlzc2luZyBhcGlLZXlcIik7XG4gICAgICByZXR1cm4gY29uZmlnIGFzIExMTVVzZXJDb25maWc7XG4gICAgfSBcbiAgICBjb25zb2xlLmxvZygnW2xsbVNlcnZpY2VdIE5vIGNvbmZpZ3VyYXRpb24gZm91bmQuJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW2xsbVNlcnZpY2VdIEVycm9yIGxvYWRpbmcgb3IgdmFsaWRhdGluZyBjb25maWd1cmF0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cbi8qKlxuICogSGFuZGxlcyBzdHJlYW1pbmcgY2hhdCByZXNwb25zZXMgZnJvbSB0aGUgY29uZmlndXJlZCBMTE0gcHJvdmlkZXIuXG4gKiBTZW5kcyBjaHVua3MgYmFjayB2aWEgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywgY2h1bmspLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RyZWFtQ2hhdFJlc3BvbnNlKHJlcXVlc3Q6IFN0cmVhbUNoYXRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgY29uZmlnIH0gPSByZXF1ZXN0O1xuXG4gIGNvbnN0IHNlbmRDaHVua0NhbGxiYWNrID0gKGNodW5rOiBPbGxhbWFTdHJlYW1DaHVuayk6IHZvaWQgPT4ge1xuICAgICBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCBjaHVuaylcbiAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gRmFpbGVkIHRvIHJlbGF5IGNodW5rOmAsIGUpKTtcbiAgfTtcblxuICBpZiAoIWNvbmZpZykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gc3RyZWFtQ2hhdFJlc3BvbnNlIGNhbGxlZCB3aXRoIG51bGwgY29uZmlnLlwiKTtcbiAgICBzZW5kQ2h1bmtDYWxsYmFjayh7IHN0YXR1czogJ2Vycm9yJywgZXJyb3I6ICdMTE0gY29uZmlndXJhdGlvbiBpcyBtaXNzaW5nLicgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBSb3V0aW5nIGNoYXQgc3RyZWFtIGZvciBwcm92aWRlcjogJHtjb25maWcucHJvdmlkZXJ9YCk7XG5cbiAgdHJ5IHtcbiAgICBsZXQgcHJvdmlkZXJNb2R1bGU6IExMTUNoYXRQcm92aWRlcjtcblxuICAgIC8vIFVzZSBzd2l0Y2ggc3RhdGVtZW50IGZvciBwcm92aWRlciByb3V0aW5nXG4gICAgc3dpdGNoIChjb25maWcucHJvdmlkZXIpIHtcbiAgICAgIGNhc2UgJ29sbGFtYSc6IHsgLy8gVXNlIGJsb2NrIHNjb3BlIGZvciBpbXBvcnRzXG4gICAgICAgIGNvbnN0IHsgb2xsYW1hUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb2xsYW1hJyk7XG4gICAgICAgIHByb3ZpZGVyTW9kdWxlID0gb2xsYW1hUHJvdmlkZXI7XG4gICAgICAgIGJyZWFrOyAvLyBFeGl0IHN3aXRjaFxuICAgICAgfVxuICAgICAgY2FzZSAnb3BlbnJvdXRlcic6IHtcbiAgICAgICAgY29uc3QgeyBvcGVuUm91dGVyUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb3BlbnJvdXRlcicpO1xuICAgICAgICBwcm92aWRlck1vZHVsZSA9IG9wZW5Sb3V0ZXJQcm92aWRlcjtcbiAgICAgICAgYnJlYWs7IC8vIEV4aXQgc3dpdGNoXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gVW5zdXBwb3J0ZWQgcHJvdmlkZXIgZm91bmQgaW4gY29uZmlnXCIpO1xuICAgICAgICBzZW5kQ2h1bmtDYWxsYmFjayh7IHN0YXR1czogJ2Vycm9yJywgZXJyb3I6IFwiVW5zdXBwb3J0ZWQgTExNIHByb3ZpZGVyXCIgfSk7XG4gICAgICAgIHJldHVybjsgLy8gRXhpdCBmdW5jdGlvblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIHByb3ZpZGVyJ3MgbWV0aG9kIChwcm92aWRlck1vZHVsZSBpcyBndWFyYW50ZWVkIHRvIGJlIGFzc2lnbmVkKVxuICAgIGF3YWl0IHByb3ZpZGVyTW9kdWxlLnN0cmVhbUNoYXQoeyAuLi5yZXF1ZXN0LCBzZW5kQ2h1bms6IHNlbmRDaHVua0NhbGxiYWNrIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgY29uc29sZS5lcnJvcihgW2xsbVNlcnZpY2VdIEVycm9yIGR1cmluZyBjaGF0IHN0cmVhbSByb3V0aW5nIG9yIGV4ZWN1dGlvbjpgLCBlcnJvcik7XG4gICAgIHNlbmRDaHVua0NhbGxiYWNrKHsgc3RhdHVzOiAnZXJyb3InLCBlcnJvcjogYExMTSBTZXJ2aWNlIEVycm9yOiAke2Vycm9yLm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKX1gIH0pO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyBlbWJlZGRpbmdzIGZvciB0aGUgZ2l2ZW4gY29udGVudCB1c2luZyB0aGUgY29uZmlndXJlZCBwcm92aWRlci5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtYmVkZGluZ3MocmVxdWVzdDogRW1iZWRkaW5nUmVxdWVzdCk6IFByb21pc2U8RW1iZWRkaW5nUmVzcG9uc2U+IHtcbiAgIGNvbnN0IHsgY29uZmlnIH0gPSByZXF1ZXN0O1xuXG4gICBpZiAoIWNvbmZpZykge1xuICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBnZXRFbWJlZGRpbmdzIGNhbGxlZCB3aXRoIG51bGwgY29uZmlnLlwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTExNIGNvbmZpZ3VyYXRpb24gaXMgbWlzc2luZy4nKTtcbiAgIH1cblxuICAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBSb3V0aW5nIGVtYmVkZGluZ3MgcmVxdWVzdCBmb3IgcHJvdmlkZXI6ICR7Y29uZmlnLnByb3ZpZGVyfWApO1xuXG4gICB0cnkge1xuICAgICAgIGxldCBwcm92aWRlck1vZHVsZTogTExNRW1iZWRkaW5nUHJvdmlkZXI7XG5cbiAgICAgICAvLyBVc2Ugc3dpdGNoIHN0YXRlbWVudCBmb3IgcHJvdmlkZXIgcm91dGluZ1xuICAgICAgIHN3aXRjaCAoY29uZmlnLnByb3ZpZGVyKSB7XG4gICAgICAgICBjYXNlICdvbGxhbWEnOiB7XG4gICAgICAgICAgIGNvbnN0IHsgb2xsYW1hUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb2xsYW1hJyk7XG4gICAgICAgICAgIGlmICghKCdnZXRFbWJlZGRpbmdzJyBpbiBvbGxhbWFQcm92aWRlcikpIHRocm93IG5ldyBFcnJvcignT2xsYW1hIHByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgZ2V0RW1iZWRkaW5ncycpO1xuICAgICAgICAgICBwcm92aWRlck1vZHVsZSA9IG9sbGFtYVByb3ZpZGVyIGFzIExMTUVtYmVkZGluZ1Byb3ZpZGVyO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICAgICAgIGNhc2UgJ29wZW5yb3V0ZXInOlxuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29uZmlnLnByb3ZpZGVyfSBlbWJlZGRpbmdzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuYCk7XG4gICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gVW5zdXBwb3J0ZWQgcHJvdmlkZXIgZm9yIGVtYmVkZGluZ3NcIik7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIExMTSBwcm92aWRlciBmb3IgZW1iZWRkaW5nc1wiKTtcbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICAvLyBDYWxsIHRoZSBwcm92aWRlcidzIG1ldGhvZCAocHJvdmlkZXJNb2R1bGUgaXMgZ3VhcmFudGVlZCB0byBiZSBhc3NpZ25lZCBpZiBub3QgdGhyb3duKVxuICAgICAgIHJldHVybiBhd2FpdCBwcm92aWRlck1vZHVsZS5nZXRFbWJlZGRpbmdzKHJlcXVlc3QpO1xuXG4gICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlXSBFcnJvciBkdXJpbmcgZW1iZWRkaW5nIHJvdXRpbmcgb3IgZXhlY3V0aW9uOmAsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbWJlZGRpbmcgU2VydmljZSBFcnJvcjogJHtlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvcil9YCk7XG4gICB9XG59XG5cbi8vIFJlbW92ZSBvbGQgcHJvdmlkZXIgaW1wbGVtZW50YXRpb25zIFxuXG4vLyAtLS0gTmV3IEZsYXNoY2FyZCBHZW5lcmF0aW9uIEZ1bmN0aW9uIC0tLVxuXG4vLyBEZWZpbmUgdGhlIGV4cGVjdGVkIHN0cnVjdHVyZSBvZiB0aGUgSlNPTiByZXNwb25zZSBmcm9tIHRoZSBMTE1cbmludGVyZmFjZSBGbGFzaGNhcmRHZW5lcmF0aW9uUmVzcG9uc2Uge1xuICBmcm9udEJhY2s6IHtcbiAgICBmcm9udDogc3RyaW5nO1xuICAgIGJhY2s6IHN0cmluZztcbiAgfTtcbiAgY2xvemU6IHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gIH07XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIHByb21wdFxuZnVuY3Rpb24gY3JlYXRlRmxhc2hjYXJkUHJvbXB0KHNlbGVjdGVkVGV4dDogc3RyaW5nLCBzb3VyY2VVcmw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIEJhc2UgcHJvbXB0IHN0cnVjdHVyZVxuICAgIGxldCBwcm9tcHQgPSBgR2l2ZW4gdGhlIGZvbGxvd2luZyB0ZXh0IHNlbGVjdGlvbiwgZ2VuZXJhdGUgdHdvIHR5cGVzIG9mIGZsYXNoY2FyZHM6IGEgY29uY2lzZSBmcm9udC9iYWNrIHBhaXIgYW5kIGEgY2xvemUgZGVsZXRpb24gY2FyZC4gVGhlIGdvYWwgaXMgZWZmaWNpZW50IGxlYXJuaW5nLlxcblxcblRleHQgU2VsZWN0aW9uOlxcblxcXCIke3NlbGVjdGVkVGV4dH1cXFwiYDtcblxuICAgIGlmIChzb3VyY2VVcmwpIHtcbiAgICAgICAgcHJvbXB0ICs9IGBcXG5Tb3VyY2UgVVJMIChmb3IgY29udGV4dCk6ICR7c291cmNlVXJsfWA7XG4gICAgfVxuXG4gICAgcHJvbXB0ICs9IGBcXG5cXG5JbnN0cnVjdGlvbnM6XFxuMS4gICoqRnJvbnQvQmFjayBDYXJkOioqIENyZWF0ZSBhIHZlcnkgY29uY2lzZSB0ZXJtL2RlZmluaXRpb24gcGFpci4gSWRlbnRpZnkgdGhlIGNvcmUgY29uY2VwdCBvciByZWxhdGlvbnNoaXAuIEF2b2lkIGZ1bGwgcXVlc3Rpb25zLiBQcmVmZXIgc2hvcnQgcGhyYXNlcy5cXG4yLiAgKipDbG96ZSBDYXJkOioqIENyZWF0ZSBhIHNpbmdsZSBzZW50ZW5jZSBpbmNvcnBvcmF0aW5nIHRoZSBtYWluIGlkZWEgb2YgdGhlIHRleHQgc2VsZWN0aW9uLiBSZXBsYWNlIHRoZSBzaW5nbGUgbW9zdCBpbXBvcnRhbnQga2V5d29yZCBvciBwaHJhc2Ugd2l0aCBbLi4uXS4gRG8gbm90IHVzZSBtYXJrZG93biBmb3IgdGhlIGNsb3plIGJyYWNrZXRzLlxcbjMuICAqKk91dHB1dCBGb3JtYXQ6KiogUmV0dXJuIE9OTFkgYSB2YWxpZCBKU09OIG9iamVjdCBtYXRjaGluZyB0aGlzIEVYQUNUIHN0cnVjdHVyZSAobm8gZXh0cmEgdGV4dCwgZXhwbGFuYXRpb25zLCBvciBtYXJrZG93biBmb3JtYXR0aW5nKTpcXG4gICAgXFxgXFxgXFxganNvblxcbiAgICB7XFxuICAgICAgXFxcImZyb250QmFja1xcXCI6IHsgXFxcImZyb250XFxcIjogXFxcImNvbmNpc2UgZnJvbnQgdGV4dFxcXCIsIFxcXCJiYWNrXFxcIjogXFxcImNvbmNpc2UgYmFjayB0ZXh0XFxcIiB9LFxcbiAgICAgIFxcXCJjbG96ZVxcXCI6IHsgXFxcInRleHRcXFwiOiBcXFwiU2VudGVuY2Ugd2l0aCBbLi4uXSBjbG96ZSBkZWxldGlvbi5cXFwiIH1cXG4gICAgfVxcbiAgICBcXGBcXGBcXGBcXG5cXG5FeGFtcGxlczpcXG5cXG5JbnB1dCBUZXh0OiBcXFwiVGhlIEVpZmZlbCBUb3dlciwgbG9jYXRlZCBpbiBQYXJpcywgRnJhbmNlLCB3YXMgY29tcGxldGVkIGluIDE4ODkuXFxcIlxcbk91dHB1dCBKU09OOlxcblxcYFxcYFxcYGpzb25cXG57XFxuICBcXFwiZnJvbnRCYWNrXFxcIjogeyBcXFwiZnJvbnRcXFwiOiBcXFwiRWlmZmVsIFRvd2VyIExvY2F0aW9uXFxcIiwgXFxcImJhY2tcXFwiOiBcXFwiUGFyaXMsIEZyYW5jZVxcXCIgfSxcXG4gIFxcXCJjbG96ZVxcXCI6IHsgXFxcInRleHRcXFwiOiBcXFwiVGhlIEVpZmZlbCBUb3dlciwgbG9jYXRlZCBpbiBQYXJpcywgRnJhbmNlLCB3YXMgY29tcGxldGVkIGluIFsuLi5dLlxcXCIgfVxcbn1cXG5cXGBcXGBcXGBcXG5cXG5JbnB1dCBUZXh0OiBcXFwiUGhvdG9zeW50aGVzaXMgaXMgdGhlIHByb2Nlc3MgdXNlZCBieSBwbGFudHMgdG8gY29udmVydCBsaWdodCBlbmVyZ3kgaW50byBjaGVtaWNhbCBlbmVyZ3kuXFxcIlxcbk91dHB1dCBKU09OOlxcblxcYFxcYFxcYGpzb25cXG57XFxuICBcXFwiZnJvbnRCYWNrXFxcIjogeyBcXFwiZnJvbnRcXFwiOiBcXFwiUGhvdG9zeW50aGVzaXNcXFwiLCBcXFwiYmFja1xcXCI6IFxcXCJQbGFudCBwcm9jZXNzIGNvbnZlcnRpbmcgbGlnaHQgdG8gY2hlbWljYWwgZW5lcmd5XFxcIiB9LFxcbiAgXFxcImNsb3plXFxcIjogeyBcXFwidGV4dFxcXCI6IFxcXCJbLi4uXSBpcyB0aGUgcHJvY2VzcyB1c2VkIGJ5IHBsYW50cyB0byBjb252ZXJ0IGxpZ2h0IGVuZXJneSBpbnRvIGNoZW1pY2FsIGVuZXJneS5cXFwiIH1cXG59XFxuXFxgXFxgXFxgXFxuXFxuSW5wdXQgVGV4dDogXFxcIlJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMuXFxcIlxcbk91dHB1dCBKU09OOlxcblxcYFxcYFxcYGpzb25cXG57XFxuICBcXFwiZnJvbnRCYWNrXFxcIjogeyBcXFwiZnJvbnRcXFwiOiBcXFwiUmVhY3RcXFwiLCBcXFwiYmFja1xcXCI6IFxcXCJKUyBsaWJyYXJ5IGZvciBVSXNcXFwiIH0sXFxuICBcXFwiY2xvemVcXFwiOiB7IFxcXCJ0ZXh0XFxcIjogXFxcIlJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyBbLi4uXS5cXFwiIH1cXG59XFxuXFxgXFxgXFxgXFxuXFxuTm93LCBnZW5lcmF0ZSB0aGUgZmxhc2hjYXJkcyBmb3IgdGhlIHByb3ZpZGVkIHRleHQgc2VsZWN0aW9uLiBPdXRwdXQgSlNPTjpcXG5gO1xuICAgIHJldHVybiBwcm9tcHQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnJvbnQvYmFjayBhbmQgY2xvemUgZmxhc2hjYXJkIHBhaXIgZnJvbSBzZWxlY3RlZCB0ZXh0IHVzaW5nIHRoZSBjb25maWd1cmVkIExMTS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlRmxhc2hjYXJkUGFpcihzZWxlY3RlZFRleHQ6IHN0cmluZywgc291cmNlVXJsPzogc3RyaW5nKTogUHJvbWlzZTxGbGFzaGNhcmRHZW5lcmF0aW9uUmVzcG9uc2UgfCBudWxsPiB7XG4gICAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBHZW5lcmF0aW5nIGZsYXNoY2FyZCBwYWlyIGZvciB0ZXh0OiBcXFwiJHtzZWxlY3RlZFRleHQuc3Vic3RyaW5nKDAsIDUwKX0uLi5cXFwiYCk7XG5cbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkVXNlckNvbmZpZygpO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIENhbm5vdCBnZW5lcmF0ZSBmbGFzaGNhcmRzOiBMTE0gY29uZmlnIG5vdCBsb2FkZWQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHQgPSBjcmVhdGVGbGFzaGNhcmRQcm9tcHQoc2VsZWN0ZWRUZXh0LCBzb3VyY2VVcmwpO1xuICAgIGxldCBwcm92aWRlck1vZHVsZTogTExNQ2hhdFByb3ZpZGVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAvLyBGaW5kIHRoZSBwcm92aWRlciBtb2R1bGUgKHNpbWlsYXIgdG8gc3RyZWFtQ2hhdFJlc3BvbnNlKVxuICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAoY29uZmlnLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICBjYXNlICdvbGxhbWEnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBvbGxhbWFQcm92aWRlciB9ID0gYXdhaXQgaW1wb3J0KCcuL3Byb3ZpZGVycy9vbGxhbWEnKTtcbiAgICAgICAgICAgICAgICBwcm92aWRlck1vZHVsZSA9IG9sbGFtYVByb3ZpZGVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnb3BlbnJvdXRlcic6IHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBPcGVuUm91dGVyIHByb3ZpZGVyIGV4aXN0cyBhbmQgaW1wbGVtZW50cyBjaGF0Q29tcGxldGlvblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHsgb3BlblJvdXRlclByb3ZpZGVyIH0gPSBhd2FpdCBpbXBvcnQoJy4vcHJvdmlkZXJzL29wZW5yb3V0ZXInKTtcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlck1vZHVsZSA9IG9wZW5Sb3V0ZXJQcm92aWRlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJPcGVuUm91dGVyIGZsYXNoY2FyZCBnZW5lcmF0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIG90aGVyIHByb3ZpZGVycyBpZiB0aGV5IHN1cHBvcnQgY2hhdENvbXBsZXRpb25cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBVbnN1cHBvcnRlZCBwcm92aWRlciBmb3Igbm9uLXN0cmVhbWluZyBjaGF0OlwiLCBjb25maWcucHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcm92aWRlck1vZHVsZT8uY2hhdENvbXBsZXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gUHJvdmlkZXIgJHtjb25maWcucHJvdmlkZXJ9IGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVpcmVkICdjaGF0Q29tcGxldGlvbicgbWV0aG9kLmApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIHRoZSBub24tc3RyZWFtaW5nIGNoYXQgcmVxdWVzdFxuICAgICAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gU2VuZGluZyByZXF1ZXN0IHRvIHByb3ZpZGVyIGNoYXRDb21wbGV0aW9uLi4uXCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb3ZpZGVyTW9kdWxlLmNoYXRDb21wbGV0aW9uKHtcbiAgICAgICAgICAgIHByb21wdDogcHJvbXB0LFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSwgLy8gTm8gaGlzdG9yeSBuZWVkZWQgZm9yIHRoaXMgc3BlY2lmaWMgdGFza1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlPy5tZXNzYWdlPy5jb250ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBMTE0gcmVzcG9uc2Ugd2FzIGVtcHR5IG9yIGludmFsaWQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRlbXB0IHRvIHBhcnNlIHRoZSBKU09OIGZyb20gdGhlIHJlc3BvbnNlIGNvbnRlbnRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENsZWFuIHBvdGVudGlhbCBtYXJrZG93biBjb2RlIGZlbmNlc1xuICAgICAgICAgICAgY29uc3QgY2xlYW5lZENvbnRlbnQgPSByZXNwb25zZS5tZXNzYWdlLmNvbnRlbnQucmVwbGFjZSgvYGBganNvblxcXFxuP3xgYGAvZywgJycpLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEpzb24gPSBKU09OLnBhcnNlKGNsZWFuZWRDb250ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQmFzaWMgdmFsaWRhdGlvbiBvZiB0aGUgcGFyc2VkIHN0cnVjdHVyZVxuICAgICAgICAgICAgaWYgKHBhcnNlZEpzb24uZnJvbnRCYWNrPy5mcm9udCAmJiBwYXJzZWRKc29uLmZyb250QmFjaz8uYmFjayAmJiBwYXJzZWRKc29uLmNsb3plPy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBTdWNjZXNzZnVsbHkgcGFyc2VkIGZsYXNoY2FyZCBKU09OOlwiLCBwYXJzZWRKc29uKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEpzb24gYXMgRmxhc2hjYXJkR2VuZXJhdGlvblJlc3BvbnNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gUGFyc2VkIEpTT04gbGFja3MgZXhwZWN0ZWQgc3RydWN0dXJlOlwiLCBwYXJzZWRKc29uKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIEZhaWxlZCB0byBwYXJzZSBKU09OIGZyb20gTExNIHJlc3BvbnNlOlwiLCBwYXJzZUVycm9yLCBcIlJhdyBjb250ZW50OlwiLCByZXNwb25zZS5tZXNzYWdlLmNvbnRlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIEVycm9yIGR1cmluZyBmbGFzaGNhcmQgZ2VuZXJhdGlvbjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59ICIsImltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBvbk1lc3NhZ2UsIHNlbmRNZXNzYWdlLCB0eXBlIFByb3RvY29sTWFwLCBPbGxhbWFTdHJlYW1DaHVuayB9IGZyb20gJ34vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB7IGxvYWRVc2VyQ29uZmlnLCBzdHJlYW1DaGF0UmVzcG9uc2UgfSBmcm9tICcuLi9zcmMvc2VydmljZXMvbGxtU2VydmljZSc7IC8vIFVzZSByZWxhdGl2ZSBwYXRoIGZvciBMTE0gc2VydmljZSBpbXBvcnRcblxuY29uc29sZS5sb2coJ0JhY2tncm91bmQgc2NyaXB0IGxvYWRlZC4nKTtcblxuLy8gLS0tIE9mZnNjcmVlbiBEb2N1bWVudCBNYW5hZ2VtZW50IC0tLVxuY29uc3QgT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEggPSAnb2Zmc2NyZWVuLmh0bWwnOyAvLyBQYXRoIHRvIHlvdXIgb2Zmc2NyZWVuIGRvY3VtZW50IEhUTUxcblxuYXN5bmMgZnVuY3Rpb24gaGFzT2Zmc2NyZWVuRG9jdW1lbnQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIC8vIENoZWNrIGlmIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IG9wZW4uXG4gIC8vIEB0cy1pZ25vcmUgLSBjbGllbnRzIGlzIGF2YWlsYWJsZSBidXQgbWF5IHNob3cgVFMgZXJyb3JcbiAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGJyb3dzZXIucnVudGltZS5nZXRDb250ZXh0cyh7XG4gICAgLy8gQHRzLWlnbm9yZSAtIENvbnRleHRUeXBlIG1pZ2h0IGJlIG1pc3NpbmcgT0ZGU0NSRUVOX0RPQ1VNRU5UIGluIG9sZGVyIHR5cGVzXG4gICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCddLFxuICAgIGRvY3VtZW50VXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpXSBcbiAgfSk7XG4gIHJldHVybiBleGlzdGluZ0NvbnRleHRzLmxlbmd0aCA+IDA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQoKSB7XG4gIGlmICghKGF3YWl0IGhhc09mZnNjcmVlbkRvY3VtZW50KCkpKSB7XG4gICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBDcmVhdGluZyBvZmZzY3JlZW4gZG9jdW1lbnQuLi4nKTtcbiAgICAvLyBAdHMtaWdub3JlIC0gYnJvd3Nlci5vZmZzY3JlZW4gbWF5IG5vdCBiZSBpbiBvbGRlciB0eXBlc1xuICAgIGF3YWl0IGJyb3dzZXIub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgIHVybDogT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgsIFxuICAgICAgLy8gVXNlIGEgdmFsaWQgcmVhc29uIC0gTE9DQUxfU1RPUkFHRSBpcyBjb21tb24gaWYgbm90IHVzaW5nIG90aGVycyBsaWtlIEFVRElPX1BMQVlCQUNLXG4gICAgICAvLyBAdHMtaWdub3JlIC0gYnJvd3Nlci5vZmZzY3JlZW4gbWF5IG5vdCBiZSBpbiBvbGRlciB0eXBlc1xuICAgICAgcmVhc29uczogW2Jyb3dzZXIub2Zmc2NyZWVuLlJlYXNvbi5MT0NBTF9TVE9SQUdFXSwgXG4gICAgICBqdXN0aWZpY2F0aW9uOiAnRGF0YWJhc2Ugb3BlcmF0aW9ucyB1c2luZyBQR2xpdGUnLFxuICAgIH0pO1xuICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIE9mZnNjcmVlbiBkb2N1bWVudCBjcmVhdGVkLicpO1xuICB9IGVsc2Uge1xuICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIE9mZnNjcmVlbiBkb2N1bWVudCBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgfVxufVxuXG4vLyBTZXR1cCBvZmZzY3JlZW4gZG9jdW1lbnQgb24gYmFja2dyb3VuZCBzY3JpcHQgc3RhcnR1cFxuLy8gTU9WRUQgdGhlIGRpcmVjdCBjYWxsIGZyb20gaGVyZSB0byBicm93c2VyLnJ1bnRpbWUub25TdGFydHVwIGxpc3RlbmVyIGJlbG93XG4vLyBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFRlbXBvcmFyaWx5IHNraXBwZWQgaW5pdGlhbCBvZmZzY3JlZW4gc2V0dXAgY2FsbCBmb3IgdGVzdGluZy4nKTtcblxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGRhdGEgZXhwZWN0ZWQgZnJvbSB0aGUgY2xpcHBlciBwb3B1cFxuLypcbmludGVyZmFjZSBDbGlwRGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nW107IC8vIEFkZCBvcHRpb25hbCB0YWdzIGFycmF5XG59XG4qL1xuXG4vLyBEZWZpbmUgdGhlIHN0cnVjdHVyZSBmb3IgT2xsYW1hIEFQSSByZXNwb25zZVxuLypcbmludGVyZmFjZSBPbGxhbWFUYWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIC8vIG90aGVyIHByb3BlcnRpZXMgbGlrZSBtb2RpZmllZF9hdCwgc2l6ZSwgZGlnZXN0IGV0Yy4gYXJlIGlnbm9yZWQgZm9yIG5vd1xufVxuXG5pbnRlcmZhY2UgT2xsYW1hVGFnc1Jlc3BvbnNlIHtcbiAgbW9kZWxzOiBPbGxhbWFUYWdbXTtcbn1cbiovXG5cbi8vIGRlZmluZUJhY2tncm91bmQgaXMgZ2xvYmFsbHkgYXZhaWxhYmxlIGhlcmUgdGhhbmtzIHRvIFdYVFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQmFja2dyb3VuZCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdXWFQgQmFja2dyb3VuZCBkZWZpbmVkJyk7XG5cbiAgLy8gLS0tIFNldHVwIHRoZSBjZW50cmFsIG1lc3NhZ2UgbGlzdGVuZXIgLS0tIFxuICAvLyBUaGlzIGFsbG93cyBgb25NZXNzYWdlYCBjYWxscyBiZWxvdyB0byB3b3JrLlxuICAvLyBzZXR1cENlbnRyYWxMaXN0ZW5lcigpO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgY2xpcHBpbmcgcmVxdWVzdHMgZnJvbSBwb3B1cCAtLS1cbiAgb25NZXNzYWdlKCdjbGlwUGFnZScsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0JhY2tncm91bmQ6IFJlY2VpdmVkIGNsaXBQYWdlIG1lc3NhZ2UnLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgdGl0bGUsIHVybCAvKiwgdGFncyAqLyB9ID0gbWVzc2FnZS5kYXRhOyAvLyBEZXN0cnVjdHVyZSBpbXBvcnRlZCBDbGlwRGF0YVxuXG4gICAgY29uc3Qgc3FsID0gYElOU0VSVCBJTlRPIGNsaXBzICh0aXRsZSwgdXJsKSBWQUxVRVMgKD8sID8pO2A7XG4gICAgY29uc3QgcGFyYW1zID0gW3RpdGxlLCB1cmxdOyBcblxuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBTZW5kaW5nIGRiRXhlYyBtZXNzYWdlIHRvIG9mZnNjcmVlbiBmb3IgY2xpcHBpbmcuLi4nKTtcbiAgICB0cnkge1xuICAgICAgLy8gVXNlIHRoZSBORVcgZGJFeGVjIG1lc3NhZ2UgdHlwZVxuICAgICAgY29uc3QgZGJSZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZSgnZGJFeGVjJywgeyBzcWw6IHNxbCwgcGFyYW1zOiBwYXJhbXMgfSk7XG4gICAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogT2Zmc2NyZWVuIGRiRXhlYyByZXNwb25zZTonLCBkYlJlc3VsdCk7XG4gICAgICBcbiAgICAgIC8vIE5vdGlmeSBzdWNjZXNzIChubyBuZWVkIHRvIGNoZWNrIHN0YXR1cyBpbiByZXNwb25zZSwgZXJyb3Igd291bGQgdGhyb3cpXG4gICAgICBjb25zb2xlLmxvZyhgQmFja2dyb3VuZDogU3VjY2Vzc2Z1bGx5IGNsaXBwZWQgJHt1cmx9YCk7XG4gICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKGBjbGlwLXN1Y2Nlc3MtJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLCBcbiAgICAgICAgdGl0bGU6ICdCb29rbWFyayBTYXZlZCcsXG4gICAgICAgIG1lc3NhZ2U6IGBTYXZlZDogJHt0aXRsZX1gLFxuICAgICAgICBwcmlvcml0eTogMFxuICAgICAgfSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gRXJyb3JzIGZyb20gc2VuZE1lc3NhZ2Ugb3IgdGhlIG9mZnNjcmVlbiBoYW5kbGVyIHdpbGwgYmUgY2F1Z2h0IGhlcmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhY2tncm91bmQ6IEVycm9yIGV4ZWN1dGluZyBjbGlwIHZpYSBvZmZzY3JlZW46JywgZXJyb3IpO1xuICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoYGNsaXAtZXJyb3ItJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxuICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJy9pY29uLzEyOC5wbmcnKSxcbiAgICAgICAgICB0aXRsZTogJ0Jvb2ttYXJrIFNhdmluZyBGYWlsZWQnLCBcbiAgICAgICAgICBtZXNzYWdlOiBgQ291bGQgbm90IHNhdmUgJHt0aXRsZX0uIEVycm9yOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKX1gLFxuICAgICAgICAgIHByaW9yaXR5OiAxXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIHRvIGZldGNoIE9sbGFtYSBtb2RlbHMgLS0tXG4gIG9uTWVzc2FnZSgnZ2V0T2xsYW1hTW9kZWxzJywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogUmVjZWl2ZWQgZ2V0T2xsYW1hTW9kZWxzIG1lc3NhZ2UnLCBtZXNzYWdlLmRhdGEpO1xuICAgIGNvbnN0IHsgZW5kcG9pbnQgfSA9IG1lc3NhZ2UuZGF0YTtcbiAgICBpZiAoIWVuZHBvaW50KSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdPbGxhbWEgZW5kcG9pbnQgbm90IHByb3ZpZGVkLicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtlbmRwb2ludH0vYXBpL3RhZ3NgKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggT2xsYW1hIG1vZGVsczogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtaW5nIE9sbGFtYVRhZ3NSZXNwb25zZSBpcyBkZWZpbmVkIGVsc2V3aGVyZSBvciBpbXBsaWNpdGx5IHR5cGVkXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyBcbiAgICAgIGNvbnN0IG1vZGVscyA9IGRhdGEubW9kZWxzLm1hcCgodGFnOiB7IG5hbWU6IHN0cmluZyB9KSA9PiAoeyBpZDogdGFnLm5hbWUsIG5hbWU6IHRhZy5uYW1lIH0pKTtcbiAgICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBTdWNjZXNzZnVsbHkgZmV0Y2hlZCBPbGxhbWEgbW9kZWxzOicsIG1vZGVscyk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtb2RlbHM6IG1vZGVscyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHsgLy8gQ2F0Y2ggYW55IHR5cGUgb2YgZXJyb3JcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhY2tncm91bmQ6IEVycm9yIGZldGNoaW5nIE9sbGFtYSBtb2RlbHM6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yIGZldGNoaW5nIG1vZGVscy4nIH07XG4gICAgfVxuICB9KTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIENoYXQgUmVxdWVzdHMgLS0tXG4gIG9uTWVzc2FnZSgnb2xsYW1hQ2hhdFJlcXVlc3QnLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBSZWNlaXZlZCBvbGxhbWFDaGF0UmVxdWVzdCcsIG1lc3NhZ2UuZGF0YSk7XG4gICAgY29uc3QgeyBwcm9tcHQsIGhpc3RvcnkgfSA9IG1lc3NhZ2UuZGF0YTtcblxuICAgIC8vIExvYWQgY29uZmlnIGZpcnN0XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZFVzZXJDb25maWcoKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgY29uc29sZS5lcnJvcihcIkJhY2tncm91bmQ6IENhbm5vdCBwcm9jZXNzIGNoYXQgcmVxdWVzdCwgdXNlciBjb25maWcgbm90IGZvdW5kLlwiKTtcbiAgICAgICBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCB7XG4gICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICBlcnJvcjogXCJMTE0gY29uZmlndXJhdGlvbiBub3QgZm91bmQuIFBsZWFzZSBzZXQgaXQgdXAgaW4gdGhlIHNldHRpbmdzLlwiXG4gICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgY29uZmlnIGVycm9yIG1lc3NhZ2U6XCIsIGUpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkxMTSBjb25maWd1cmF0aW9uIG5vdCBmb3VuZC5cIik7XG4gICAgfVxuIFxuICAgIC8vIFBhc3MgdG8gdGhlIGxsbVNlcnZpY2UgdG8gaGFuZGxlIHByb3ZpZGVyIGxvZ2ljIGFuZCBzdHJlYW1pbmdcbiAgICBzdHJlYW1DaGF0UmVzcG9uc2UoeyBwcm9tcHQsIGhpc3Rvcnk6IGhpc3RvcnkgfHwgW10sIGNvbmZpZyB9KTsgXG4gICAgY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kOiBzdHJlYW1DaGF0UmVzcG9uc2UgaW5pdGlhdGVkIChzdHJlYW1pbmcgcnVucyBpbiBiYWNrZ3JvdW5kKS5cIik7XG4gICAgXG4gICAgLy8gUmV0dXJuIHN1Y2Nlc3MgYWNrbm93bGVkZ2VtZW50XG4gICAgcmV0dXJuIHsgcmVjZWl2ZWQ6IHRydWUgfTtcbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBDaGF0IEhpc3RvcnkgUmVxdWVzdHMgLS0tXG5cbiAgLy8gLS0tIEFkZCBvdGhlciBiYWNrZ3JvdW5kIGxpc3RlbmVycyBoZXJlIChlLmcuLCBhbGFybXMsIG90aGVyIG1lc3NhZ2VzKSAtLS1cblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGluc3RhbGwvdXBkYXRlIGV2ZW50cyAtLS1cbiAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jIChkZXRhaWxzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0V4dGVuc2lvbiBpbnN0YWxsZWQ6JywgZGV0YWlscyk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgcmVhc29uIGZvciB0aGUgZXZlbnQgaXMgdGhlIGluaXRpYWwgaW5zdGFsbGF0aW9uXG4gICAgaWYgKGRldGFpbHMucmVhc29uID09PSAnaW5zdGFsbCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQZXJmb3JtaW5nIGZpcnN0LXRpbWUgc2V0dXAuLi4nKTtcbiAgICAgIC8vIE9ubHkgbmVlZCB0byBlbnN1cmUgb2Zmc2NyZWVuIGRvY3VtZW50IGV4aXN0cy4gU2NoZW1hIGlzIGluaXRpYWxpemVkIHdpdGhpbiBvZmZzY3JlZW4udHMuXG4gICAgICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gSW5pdGlhbCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50IGZhaWxlZCBvbiBpbnN0YWxsOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb25zdHJ1Y3QgdGhlIFVSTCBmb3IgdGhlIG9uYm9hcmRpbmcgcGFnZVxuICAgICAgY29uc3QgdXJsID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnb25ib2FyZGluZy5odG1sJyk7XG5cbiAgICAgIC8vIE9wZW4gdGhlIG9uYm9hcmRpbmcgcGFnZSBpbiBhIG5ldyB0YWJcbiAgICAgIGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBPcGVuZWQgb25ib2FyZGluZyBwYWdlOiAke3VybH1gKTtcbiAgICB9IGVsc2UgaWYgKGRldGFpbHMucmVhc29uID09PSAndXBkYXRlJykge1xuICAgICAgLy8gT3B0aW9uYWw6IEhhbmRsZSB1cGRhdGVzLCBlLmcuLCBzaG93IG5vdGlmaWNhdGlvbnMgb3IgbWlncmF0ZSBkYXRhXG4gICAgICBjb25zb2xlLmxvZyhgW0JhY2tncm91bmRdIFVwZGF0ZWQgZnJvbSAke2RldGFpbHMucHJldmlvdXNWZXJzaW9ufSB0byAke2Jyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb259YCk7XG4gICAgICAvLyBVbmNvbW1lbnQgdG8gb3BlbiBzZXR0aW5ncyBvbiB1cGRhdGU6XG4gICAgICAvLyB0cnkge1xuICAgICAgLy8gICBhd2FpdCBicm93c2VyLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XG4gICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBFcnJvciBvcGVuaW5nIHNldHRpbmdzIHBhZ2Ugb24gdXBkYXRlOicsIGVycm9yKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgYnJvd3NlciBzdGFydHVwIC0tLVxuICAvLyBVc2Ugb25TdGFydHVwIHRvIGVuc3VyZSB0aGUgb2Zmc2NyZWVuIGRvY3VtZW50IGlzIHJlYWR5IHdoZW4gdGhlIGJyb3dzZXIgc3RhcnRzXG4gIGJyb3dzZXIucnVudGltZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gQnJvd3NlciBzdGFydHVwIGRldGVjdGVkLiBTZXR0aW5nIHVwIG9mZnNjcmVlbiBkb2N1bWVudC4uLicpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCk7XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIE9mZnNjcmVlbiBkb2N1bWVudCBzZXR1cCBjb21wbGV0ZSBvbiBzdGFydHVwLicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCBmYWlsZWQgb24gc3RhcnR1cDonLCBlcnJvcik7XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZygnQmFja2dyb3VuZCBzY3JpcHQgc2V0dXAgY29tcGxldGUuJyk7XG59KTsgIiwiLy8gI3JlZ2lvbiBzbmlwcGV0XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZT8uaWRcbiAgPyBnbG9iYWxUaGlzLmJyb3dzZXJcbiAgOiBnbG9iYWxUaGlzLmNocm9tZTtcbi8vICNlbmRyZWdpb24gc25pcHBldFxuIiwiaW1wb3J0IHsgYnJvd3NlciBhcyBfYnJvd3NlciB9IGZyb20gXCJAd3h0LWRldi9icm93c2VyXCI7XG5leHBvcnQgY29uc3QgYnJvd3NlciA9IF9icm93c2VyO1xuZXhwb3J0IHt9O1xuIiwiLy8gc3JjL2luZGV4LnRzXG52YXIgX01hdGNoUGF0dGVybiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IobWF0Y2hQYXR0ZXJuKSB7XG4gICAgaWYgKG1hdGNoUGF0dGVybiA9PT0gXCI8YWxsX3VybHM+XCIpIHtcbiAgICAgIHRoaXMuaXNBbGxVcmxzID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gWy4uLl9NYXRjaFBhdHRlcm4uUFJPVE9DT0xTXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IFwiKlwiO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gXCIqXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IC8oLiopOlxcL1xcLyguKj8pKFxcLy4qKS8uZXhlYyhtYXRjaFBhdHRlcm4pO1xuICAgICAgaWYgKGdyb3VwcyA9PSBudWxsKVxuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIFwiSW5jb3JyZWN0IGZvcm1hdFwiKTtcbiAgICAgIGNvbnN0IFtfLCBwcm90b2NvbCwgaG9zdG5hbWUsIHBhdGhuYW1lXSA9IGdyb3VwcztcbiAgICAgIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCk7XG4gICAgICB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpO1xuICAgICAgdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gcHJvdG9jb2wgPT09IFwiKlwiID8gW1wiaHR0cFwiLCBcImh0dHBzXCJdIDogW3Byb3RvY29sXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IGhvc3RuYW1lO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gcGF0aG5hbWU7XG4gICAgfVxuICB9XG4gIGluY2x1ZGVzKHVybCkge1xuICAgIGlmICh0aGlzLmlzQWxsVXJscylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHUgPSB0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiID8gbmV3IFVSTCh1cmwpIDogdXJsIGluc3RhbmNlb2YgTG9jYXRpb24gPyBuZXcgVVJMKHVybC5ocmVmKSA6IHVybDtcbiAgICByZXR1cm4gISF0aGlzLnByb3RvY29sTWF0Y2hlcy5maW5kKChwcm90b2NvbCkgPT4ge1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHNcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwc01hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImZpbGVcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaWxlTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiZnRwXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzRnRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwidXJuXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzVXJuTWF0Y2godSk7XG4gICAgfSk7XG4gIH1cbiAgaXNIdHRwTWF0Y2godXJsKSB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybCk7XG4gIH1cbiAgaXNIdHRwc01hdGNoKHVybCkge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgJiYgdGhpcy5pc0hvc3RQYXRoTWF0Y2godXJsKTtcbiAgfVxuICBpc0hvc3RQYXRoTWF0Y2godXJsKSB7XG4gICAgaWYgKCF0aGlzLmhvc3RuYW1lTWF0Y2ggfHwgIXRoaXMucGF0aG5hbWVNYXRjaClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBob3N0bmFtZU1hdGNoUmVnZXhzID0gW1xuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoKSxcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaC5yZXBsYWNlKC9eXFwqXFwuLywgXCJcIikpXG4gICAgXTtcbiAgICBjb25zdCBwYXRobmFtZU1hdGNoUmVnZXggPSB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLnBhdGhuYW1lTWF0Y2gpO1xuICAgIHJldHVybiAhIWhvc3RuYW1lTWF0Y2hSZWdleHMuZmluZCgocmVnZXgpID0+IHJlZ2V4LnRlc3QodXJsLmhvc3RuYW1lKSkgJiYgcGF0aG5hbWVNYXRjaFJlZ2V4LnRlc3QodXJsLnBhdGhuYW1lKTtcbiAgfVxuICBpc0ZpbGVNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZmlsZTovLyBwYXR0ZXJuIG1hdGNoaW5nLiBPcGVuIGEgUFIgdG8gYWRkIHN1cHBvcnRcIik7XG4gIH1cbiAgaXNGdHBNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZnRwOi8vIHBhdHRlcm4gbWF0Y2hpbmcuIE9wZW4gYSBQUiB0byBhZGQgc3VwcG9ydFwiKTtcbiAgfVxuICBpc1Vybk1hdGNoKHVybCkge1xuICAgIHRocm93IEVycm9yKFwiTm90IGltcGxlbWVudGVkOiB1cm46Ly8gcGF0dGVybiBtYXRjaGluZy4gT3BlbiBhIFBSIHRvIGFkZCBzdXBwb3J0XCIpO1xuICB9XG4gIGNvbnZlcnRQYXR0ZXJuVG9SZWdleChwYXR0ZXJuKSB7XG4gICAgY29uc3QgZXNjYXBlZCA9IHRoaXMuZXNjYXBlRm9yUmVnZXgocGF0dGVybik7XG4gICAgY29uc3Qgc3RhcnNSZXBsYWNlZCA9IGVzY2FwZWQucmVwbGFjZSgvXFxcXFxcKi9nLCBcIi4qXCIpO1xuICAgIHJldHVybiBSZWdFeHAoYF4ke3N0YXJzUmVwbGFjZWR9JGApO1xuICB9XG4gIGVzY2FwZUZvclJlZ2V4KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xuICB9XG59O1xudmFyIE1hdGNoUGF0dGVybiA9IF9NYXRjaFBhdHRlcm47XG5NYXRjaFBhdHRlcm4uUFJPVE9DT0xTID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiZmlsZVwiLCBcImZ0cFwiLCBcInVyblwiXTtcbnZhciBJbnZhbGlkTWF0Y2hQYXR0ZXJuID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoUGF0dGVybiwgcmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgbWF0Y2ggcGF0dGVybiBcIiR7bWF0Y2hQYXR0ZXJufVwiOiAke3JlYXNvbn1gKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCkge1xuICBpZiAoIU1hdGNoUGF0dGVybi5QUk9UT0NPTFMuaW5jbHVkZXMocHJvdG9jb2wpICYmIHByb3RvY29sICE9PSBcIipcIilcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgIG1hdGNoUGF0dGVybixcbiAgICAgIGAke3Byb3RvY29sfSBub3QgYSB2YWxpZCBwcm90b2NvbCAoJHtNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmpvaW4oXCIsIFwiKX0pYFxuICAgICk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpIHtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiOlwiKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIGBIb3N0bmFtZSBjYW5ub3QgaW5jbHVkZSBhIHBvcnRgKTtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiKlwiKSAmJiBob3N0bmFtZS5sZW5ndGggPiAxICYmICFob3N0bmFtZS5zdGFydHNXaXRoKFwiKi5cIikpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICBtYXRjaFBhdHRlcm4sXG4gICAgICBgSWYgdXNpbmcgYSB3aWxkY2FyZCAoKiksIGl0IG11c3QgZ28gYXQgdGhlIHN0YXJ0IG9mIHRoZSBob3N0bmFtZWBcbiAgICApO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIHJldHVybjtcbn1cbmV4cG9ydCB7XG4gIEludmFsaWRNYXRjaFBhdHRlcm4sXG4gIE1hdGNoUGF0dGVyblxufTtcbiIsImltcG9ydCB7IHNlbmRNZXNzYWdlLCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgT2xsYW1hQ29uZmlnLCBFbWJlZGRpbmdSZXNwb25zZSB9IGZyb20gJy4uL2xsbVNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QsIExMTUVtYmVkZGluZ1Byb3ZpZGVyLCBQcm92aWRlckVtYmVkZGluZ1JlcXVlc3QsIFByb3ZpZGVyQ2hhdENvbXBsZXRpb25SZXF1ZXN0LCBDaGF0Q29tcGxldGlvblJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIC0tLSBPbGxhbWEgQ2hhdCBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbU9sbGFtYUNoYXQocmVxdWVzdDogUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5ID0gW10sIGNvbmZpZywgc2VuZENodW5rIH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IG9sbGFtYUNvbmZpZyA9IGNvbmZpZyBhcyBPbGxhbWFDb25maWc7IC8vIFR5cGUgYXNzZXJ0aW9uXG5cbiAgICBjb25zdCBtb2RlbCA9IG9sbGFtYUNvbmZpZy5jaGF0TW9kZWw7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBvbGxhbWFDb25maWcuZW5kcG9pbnQucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8gRW5zdXJlIG5vIHRyYWlsaW5nIHNsYXNoXG4gICAgY29uc3QgYXBpVXJsID0gYCR7ZW5kcG9pbnR9L2FwaS9jaGF0YDsgLy8gVXNlIE9sbGFtYSBBUEkgZW5kcG9pbnRcblxuICAgIGNvbnNvbGUubG9nKGBbb2xsYW1hUHJvdmlkZXJdIFNlbmRpbmcgY2hhdCByZXF1ZXN0IHRvICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uaGlzdG9yeSwgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPbGxhbWEgQVBJIGVycm9yICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yQm9keX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICBsZXQgYnVmZmVyID0gJyc7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkgYnJlYWs7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJzsgLy8gS2VlcCBpbmNvbXBsZXRlIGxpbmVcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnRyaW0oKSA9PT0gJycpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IEpTT04ucGFyc2UobGluZSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlQ2h1bms6IE9sbGFtYVN0cmVhbUNodW5rIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2h1bmsubWVzc2FnZT8uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUNodW5rID0geyBzdGF0dXM6ICdjaHVuaycsIGNvbnRlbnQ6IGNodW5rLm1lc3NhZ2UuY29udGVudCB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmsuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgT2xsYW1hJ3MgZG9uZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VDaHVuayA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2RvbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDogY2h1bmsubW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogY2h1bmsuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9kdXJhdGlvbjogY2h1bmsudG90YWxfZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZF9kdXJhdGlvbjogY2h1bmsubG9hZF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRfZXZhbF9jb3VudDogY2h1bmsucHJvbXB0X2V2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0X2V2YWxfZHVyYXRpb246IGNodW5rLnByb21wdF9ldmFsX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWxfY291bnQ6IGNodW5rLmV2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbF9kdXJhdGlvbjogY2h1bmsuZXZhbF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbb2xsYW1hUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIiwgcmVzcG9uc2VDaHVuay5zdGF0cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlQ2h1bmspIHtcbiAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsocmVzcG9uc2VDaHVuayk7IC8vIFVzZSB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW29sbGFtYVByb3ZpZGVyXSBGYWlsZWQgdG8gcGFyc2UgT2xsYW1hIHN0cmVhbSBjaHVuazpcIiwgbGluZSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgIGlmIChidWZmZXIudHJpbSgpKSB7XG4gICAgICAgICBjb25zb2xlLndhcm4oXCJbb2xsYW1hUHJvdmlkZXJdIFN0cmVhbSBlbmRlZCB3aXRoIHVucHJvY2Vzc2VkIGJ1ZmZlcjpcIiwgYnVmZmVyKTtcbiAgICAgfVxufVxuXG4vLyAtLS0gT2xsYW1hIENoYXQgQ29tcGxldGlvbiAoTm9uLVN0cmVhbWluZykgLS0tIFxuXG5hc3luYyBmdW5jdGlvbiBvbGxhbWFDaGF0Q29tcGxldGlvbihyZXF1ZXN0OiBQcm92aWRlckNoYXRDb21wbGV0aW9uUmVxdWVzdCk6IFByb21pc2U8Q2hhdENvbXBsZXRpb25SZXNwb25zZSB8IG51bGw+IHtcbiAgICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSA9IFtdLCBjb25maWcgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3Qgb2xsYW1hQ29uZmlnID0gY29uZmlnIGFzIE9sbGFtYUNvbmZpZztcblxuICAgIGNvbnN0IG1vZGVsID0gb2xsYW1hQ29uZmlnLmNoYXRNb2RlbDtcbiAgICBjb25zdCBlbmRwb2ludCA9IG9sbGFtYUNvbmZpZy5lbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIGNvbnN0IGFwaVVybCA9IGAke2VuZHBvaW50fS9hcGkvY2hhdGA7XG5cbiAgICBjb25zb2xlLmxvZyhgW29sbGFtYVByb3ZpZGVyXSBTZW5kaW5nIE5PTi1TVFJFQU1JTkcgY2hhdCByZXF1ZXN0IHRvICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFsuLi5oaXN0b3J5LCB7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgICAgICAgICAgICAgIHN0cmVhbTogZmFsc2UgLy8gRXhwbGljaXRseSBzZXQgc3RyZWFtIHRvIGZhbHNlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtvbGxhbWFQcm92aWRlcl0gQ2hhdCBDb21wbGV0aW9uIEFQSSBlcnJvciAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtlcnJvckJvZHl9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgb24gQVBJIGVycm9yXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gVmFsaWRhdGUgdGhlIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgICAgICBpZiAoIXJlc3VsdC5tZXNzYWdlIHx8IHR5cGVvZiByZXN1bHQubWVzc2FnZS5jb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2xsYW1hUHJvdmlkZXJdIEludmFsaWQgcmVzcG9uc2UgZm9ybWF0IGZyb20gT2xsYW1hIENoYXQgQVBJIChub24tc3RyZWFtaW5nKS4gJ21lc3NhZ2UuY29udGVudCcgbm90IGZvdW5kIG9yIG5vdCBhIHN0cmluZy5cIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW29sbGFtYVByb3ZpZGVyXSBSZWNlaXZlZCBub24tc3RyZWFtaW5nIHJlc3BvbnNlOlwiLCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gTWFwIHRvIHRoZSBzdGFuZGFyZCBDaGF0Q29tcGxldGlvblJlc3BvbnNlIGZvcm1hdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLCAvLyBBc3N1bWUgcm9sZSBpcyBhc3Npc3RhbnRcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXN1bHQubWVzc2FnZS5jb250ZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzYWdlOiB7XG4gICAgICAgICAgICAgICAgIHByb21wdF90b2tlbnM6IHJlc3VsdC5wcm9tcHRfZXZhbF9jb3VudCxcbiAgICAgICAgICAgICAgICAgY29tcGxldGlvbl90b2tlbnM6IHJlc3VsdC5ldmFsX2NvdW50LFxuICAgICAgICAgICAgICAgICAvLyB0b3RhbF90b2tlbnM6IHJlc3VsdC4/LCAvLyBPbGxhbWEgbWlnaHQgbm90IHByb3ZpZGUgdG90YWwgZGlyZWN0bHkgaW4gbm9uLXN0cmVhbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW5jbHVkZSBvdGhlciBmaWVsZHMgaWYgbmVlZGVkXG4gICAgICAgIH07XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgY29uc29sZS5lcnJvcihcIltvbGxhbWFQcm92aWRlcl0gTmV0d29yayBvciBwYXJzaW5nIGVycm9yIGR1cmluZyBjaGF0IGNvbXBsZXRpb246XCIsIGVycm9yKTtcbiAgICAgICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBvbiBmZXRjaC9wYXJzZSBlcnJvclxuICAgIH1cbn1cblxuLy8gLS0tIE9sbGFtYSBFbWJlZGRpbmcgSW1wbGVtZW50YXRpb24gLS0tIFxuXG5hc3luYyBmdW5jdGlvbiBnZXRPbGxhbWFFbWJlZGRpbmdzKHJlcXVlc3Q6IFByb3ZpZGVyRW1iZWRkaW5nUmVxdWVzdCk6IFByb21pc2U8RW1iZWRkaW5nUmVzcG9uc2U+IHtcbiAgICBjb25zdCB7IGNvbnRlbnQsIGNvbmZpZyB9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBvbGxhbWFDb25maWcgPSBjb25maWcgYXMgT2xsYW1hQ29uZmlnO1xuXG4gICAgaWYgKCFvbGxhbWFDb25maWcuZW1iZWRkaW5nTW9kZWwpIHsgLy8gRG91YmxlIGNoZWNrLCB0aG91Z2ggc2VydmljZSBsYXllciBzaG91bGQgYWxzbyBjaGVja1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2xsYW1hIGNvbmZpZ3VyYXRpb24gbWlzc2luZyByZXF1aXJlZCBlbWJlZGRpbmdNb2RlbC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kZWwgPSBvbGxhbWFDb25maWcuZW1iZWRkaW5nTW9kZWw7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBvbGxhbWFDb25maWcuZW5kcG9pbnQucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICBjb25zdCBhcGlVcmwgPSBgJHtlbmRwb2ludH0vYXBpL2VtYmVkZGluZ3NgO1xuXG4gICAgY29uc29sZS5sb2coYFtvbGxhbWFQcm92aWRlcl0gUmVxdWVzdGluZyBlbWJlZGRpbmdzIGZyb20gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbGxhbWEgZW1iZWRkaW5nIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHNpbmdsZSBzdHJpbmcgaW5wdXQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbi5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBwcm9tcHQ6IGNvbnRlbnQgXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJGYWlsZWQgdG8gcmVhZCBlcnJvciBib2R5XCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9sbGFtYSBFbWJlZGRpbmdzIEFQSSBlcnJvciAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtlcnJvckJvZHl9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKCFyZXN1bHQuZW1iZWRkaW5nIHx8ICFBcnJheS5pc0FycmF5KHJlc3VsdC5lbWJlZGRpbmcpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCBmcm9tIE9sbGFtYSBFbWJlZGRpbmdzIEFQSS4gJ2VtYmVkZGluZycgYXJyYXkgbm90IGZvdW5kLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbWJlZGRpbmdzOiBbcmVzdWx0LmVtYmVkZGluZ10gXG4gICAgfTtcbn1cblxuLy8gRXhwb3J0IHRoZSBwcm92aWRlciBvYmplY3QgYWRoZXJpbmcgdG8gdGhlIGludGVyZmFjZXNcbmV4cG9ydCBjb25zdCBvbGxhbWFQcm92aWRlcjogTExNQ2hhdFByb3ZpZGVyICYgTExNRW1iZWRkaW5nUHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZXJJZDogJ29sbGFtYScsXG4gICAgc3RyZWFtQ2hhdDogc3RyZWFtT2xsYW1hQ2hhdCxcbiAgICBjaGF0Q29tcGxldGlvbjogb2xsYW1hQ2hhdENvbXBsZXRpb24sXG4gICAgZ2V0RW1iZWRkaW5nczogZ2V0T2xsYW1hRW1iZWRkaW5ncyxcbn07ICIsImltcG9ydCB7IHNlbmRNZXNzYWdlLCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgT3BlblJvdXRlckNvbmZpZyB9IGZyb20gJy4uL2xsbVNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gLS0tIE9wZW5Sb3V0ZXIgQ2hhdCBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbU9wZW5Sb3V0ZXJDaGF0KHJlcXVlc3Q6IFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSA9IFtdLCBjb25maWcsIHNlbmRDaHVuayB9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBvcGVuUm91dGVyQ29uZmlnID0gY29uZmlnIGFzIE9wZW5Sb3V0ZXJDb25maWc7IC8vIFR5cGUgYXNzZXJ0aW9uXG5cbiAgICBjb25zdCBtb2RlbCA9IG9wZW5Sb3V0ZXJDb25maWcuY2hhdE1vZGVsO1xuICAgIGNvbnN0IGFwaUtleSA9IG9wZW5Sb3V0ZXJDb25maWcuYXBpS2V5O1xuICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9vcGVucm91dGVyLmFpL2FwaS92MS9jaGF0L2NvbXBsZXRpb25zXCI7XG5cbiAgICBjb25zb2xlLmxvZyhgW29wZW5Sb3V0ZXJQcm92aWRlcl0gU2VuZGluZyBjaGF0IHJlcXVlc3QgdG8gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthcGlLZXl9YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAvLyBUT0RPOiBDb25zaWRlciBhZGRpbmcgdGhlc2UgaGVhZGVycyBpZiBkZXNpcmVkXG4gICAgICAgICAgICAvLyAnSFRUUC1SZWZlcmVyJzogJycsIC8vIFlPVVJfU0lURV9VUkxcbiAgICAgICAgICAgIC8vICdYLVRpdGxlJzogJycsIC8vIFlPVVJfU0lURV9OQU1FXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uaGlzdG9yeSwgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8ICFyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIkZhaWxlZCB0byByZWFkIGVycm9yIGJvZHlcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlblJvdXRlciBBUEkgZXJyb3IgKCR7cmVzcG9uc2Uuc3RhdHVzfSk6ICR7ZXJyb3JCb2R5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBidWZmZXIgPSAnJztcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgLy8gT3BlblJvdXRlciB1c2VzIFNlcnZlci1TZW50IEV2ZW50cyAoU1NFKSBmb3JtYXRcbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lOiByZWFkZXJEb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgZG9uZSA9IHJlYWRlckRvbmU7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ2RhdGE6ICcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUNvbnRlbnQgPSBsaW5lLnN1YnN0cmluZyg2KS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFDb250ZW50ID09PSAnW0RPTkVdJykge1xuICAgICAgICAgICAgICAgICAgICAgc2VuZENodW5rKHsgc3RhdHVzOiAnZG9uZScsIHN0YXRzOiB7fSB9KTsgLy8gU2VuZCBzaW1wbGUgZG9uZSBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltvcGVuUm91dGVyUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgLy8gRW5zdXJlIG91dGVyIGxvb3AgdGVybWluYXRlc1xuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIEV4aXQgaW5uZXIgbG9vcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBKU09OLnBhcnNlKGRhdGFDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNodW5rLmNob2ljZXM/LlswXT8uZGVsdGE/LmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsoeyBzdGF0dXM6ICdjaHVuaycsIGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogRXh0cmFjdCB1c2FnZSBzdGF0cyBpZiBuZWVkZWQ/XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltvcGVuUm91dGVyUHJvdmlkZXJdIEZhaWxlZCB0byBwYXJzZSBzdHJlYW0gY2h1bms6XCIsIGRhdGFDb250ZW50LCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJ1ZmZlci50cmltKCkpIHsgXG4gICAgICAgIGNvbnNvbGUud2FybihcIltvcGVuUm91dGVyUHJvdmlkZXJdIFN0cmVhbSBlbmRlZCB3aXRoIHVucHJvY2Vzc2VkIGJ1ZmZlcjpcIiwgYnVmZmVyKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydCB0aGUgcHJvdmlkZXIgb2JqZWN0IGFkaGVyaW5nIHRvIHRoZSBpbnRlcmZhY2VcbmV4cG9ydCBjb25zdCBvcGVuUm91dGVyUHJvdmlkZXI6IExMTUNoYXRQcm92aWRlciA9IHtcbiAgICBwcm92aWRlcklkOiAnb3BlbnJvdXRlcicsXG4gICAgc3RyZWFtQ2hhdDogc3RyZWFtT3BlblJvdXRlckNoYXQsXG4gICAgLy8gTm8gZ2V0RW1iZWRkaW5ncyBmb3IgT3BlblJvdXRlciBpbiB0aGlzIGV4YW1wbGUgeWV0XG59OyAiXSwibmFtZXMiOlsidGhpcyIsIm1vZHVsZSIsInByb3h5VGFyZ2V0IiwidmFsdWUiLCJvbk1lc3NhZ2UiLCJyZXN1bHQiLCJtZXNzYWdlIiwiRXJyb3IiLCJfX2RlZlByb3AiLCJfX2RlZk5vcm1hbFByb3AiLCJ4IiwiX2IiLCJfYjIiLCJfYSIsIk9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIIiwiYnJvd3NlciIsIm9sbGFtYVByb3ZpZGVyIiwib3BlblJvdXRlclByb3ZpZGVyIiwiX2Jyb3dzZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFdBQVMsaUJBQWlCLEtBQUs7QUFD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LEVBQUUsT0FBTSxJQUFJLE1BQU0saUJBQWlCLENBQUMsR0FBRztBQUFFLGVBQU8sSUFBSSxLQUFLLENBQUM7QUFBQSxNQUFDLFdBQVMsT0FBTyxLQUFHLFNBQVMsUUFBTyxJQUFJLEtBQUssQ0FBQztBQUFFLFlBQU0sSUFBSSxNQUFNLGlCQUFpQixDQUFDLEdBQUc7QUFBQSxJQUFDO0FBQUEsSUFBQyxPQUFPLFdBQVcsR0FBRTtBQUFDLGFBQU0sRUFBQyxHQUFHLEdBQUUsS0FBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUUsUUFBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUUsT0FBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEdBQUUsUUFBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFpQixPQUFLLFVBQVUsWUFBVSxTQUFTLEdBQUUsR0FBRTtBQUFDLFdBQU8sRUFBRSxNQUFLLEdBQUUsQ0FBQztBQUFBLEVBQUMsR0FBRSxLQUFLLFVBQVUsT0FBSyxTQUFTLEdBQUUsR0FBRTtBQUFDLFdBQU8sRUFBRSxNQUFLLEdBQUUsQ0FBQztBQUFBLEVBQUMsR0FBRSxLQUFLLFVBQVUsU0FBTyxXQUFVO0FBQUMsV0FBTyxFQUFFLElBQUk7QUFBQSxFQUFDLEdBQUUsS0FBSyxVQUFVLFlBQVUsU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQU8sRUFBRSxNQUFLLEdBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFFLFdBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxLQUFLLElBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFPLElBQUcsSUFBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBUyxJQUFDLElBQUUsS0FBRyxHQUFHO0FBQUEsRUFBQztBQUFDLFdBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxPQUFNLElBQUksTUFBTSxjQUFjO0FBQUUsVUFBTSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBUyxJQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7QUFBVSxRQUFJLElBQUU7QUFBRSxZQUFPLEdBQUc7QUFBQSxNQUFBLEtBQUk7QUFBTyxZQUFFLEtBQUssTUFBTSxLQUFHLEtBQUcsS0FBRyxLQUFHLElBQUk7QUFBRTtBQUFBLE1BQU0sS0FBSTtBQUFVLFlBQUUsS0FBSyxNQUFNLEtBQUcsS0FBRyxJQUFJO0FBQUU7QUFBQSxJQUFLO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEVBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLElBQUUsRUFBRSxZQUFhLEdBQUMsSUFBRSxFQUFFLFNBQVEsSUFBRyxHQUFFLElBQUUsRUFBRSxRQUFPLEdBQUcsSUFBRSxFQUFFLFNBQVUsR0FBQyxJQUFFLEVBQUUsV0FBWSxHQUFDLElBQUUsRUFBRSxXQUFVO0FBQUcsV0FBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFBRTtBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsV0FBTyxJQUFFLEtBQUcsSUFBSSxDQUFDLEtBQUcsR0FBRyxDQUFDO0FBQUEsRUFBRTtBQUFDLFFBQU0sSUFBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLElBQUUsQ0FBQyxVQUFTLE9BQU0sUUFBTyxPQUFNLFNBQVEsTUFBTTtBQUFFLFdBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUU7QUFBQyxRQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsV0FBUyxFQUFFLFdBQVMsSUFBRTtBQUFHLFFBQUksSUFBRSxFQUFFLFFBQU8sSUFBRyxFQUFFLFFBQVMsR0FBQztBQUFFLFNBQUksS0FBRyxLQUFJLElBQUUsR0FBRSxJQUFF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
