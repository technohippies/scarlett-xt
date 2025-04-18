var background = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var _a, _b;
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
    var _a2;
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
    const resultRows = await queryDb(sql, params);
    if (!(resultRows == null ? void 0 : resultRows[0])) throw new Error("Failed to create flashcard");
    const savedFlashcard = resultRows[0];
    return savedFlashcard;
  }
  async function createChatMessage(messageData) {
    const sql = `
        INSERT INTO chat_messages (role, content, embedding, bookmark_id, flashcard_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const params = [
      messageData.role,
      messageData.content ?? null,
      messageData.embedding ?? null,
      messageData.bookmark_id ?? null,
      messageData.flashcard_id ?? null
    ];
    const resultRows = await queryDb(sql, params);
    if (!(resultRows == null ? void 0 : resultRows[0])) throw new Error("Failed to create chat message");
    console.log("[db.ts createChatMessage] Raw DB result row:", resultRows[0]);
    return resultRows[0];
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
    var _a2;
    if (userConfigCache) return userConfigCache;
    console.log("[llmService] Loading user configuration from DB...");
    try {
      const resultRows = await queryDb("SELECT config_json FROM user_configuration WHERE id = 1;");
      if ((_a2 = resultRows == null ? void 0 : resultRows[0]) == null ? void 0 : _a2.config_json) {
        const config = JSON.parse(resultRows[0].config_json);
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
  function defineBackground(arg) {
    if (arg == null || typeof arg === "function") return { main: arg };
    return arg;
  }
  console.log("Background script loaded.");
  const OFFSCREEN_DOCUMENT_PATH = "/offscreen.html";
  async function hasOffscreenDocument() {
    const offscreenUrl = browser$2.runtime.getURL(OFFSCREEN_DOCUMENT_PATH);
    const existingContexts = await browser$2.runtime.getContexts({
      // @ts-ignore - ContextType might be missing OFFSCREEN_DOCUMENT in older types
      contextTypes: ["OFFSCREEN_DOCUMENT"],
      documentUrls: [offscreenUrl]
      // Use the resolved URL for checking
    });
    return existingContexts.length > 0;
  }
  async function setupOffscreenDocument() {
    if (!await hasOffscreenDocument()) {
      console.log("[Background] Creating offscreen document...");
      console.log(`[Background] Using offscreen path for creation: ${OFFSCREEN_DOCUMENT_PATH}`);
      try {
        await browser$2.offscreen.createDocument({
          url: OFFSCREEN_DOCUMENT_PATH,
          // Use the hardcoded path directly
          // Use a valid reason - LOCAL_STORAGE is common if not using others like AUDIO_PLAYBACK
          // @ts-ignore - browser.offscreen may not be in older types
          reasons: [browser$2.offscreen.Reason.LOCAL_STORAGE],
          justification: "Database operations using PGlite"
        });
        console.log("[Background] Offscreen document creation requested.");
        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (error) {
        console.error("[Background] Error creating offscreen document:", error);
        throw error;
      }
    } else {
      console.log("[Background] Offscreen document already exists.");
    }
  }
  console.log("Background script setup starting...");
  const definition = defineBackground(() => {
    console.log("WXT Background defined (using wxt/utils/define-background)");
    onMessage("clipPage", async (message) => {
      console.log("Background: Received clipPage message", message.data);
      if (!message.data) {
        console.error("Background: clipPage message received without data.");
        return;
      }
      const { title, url } = message.data;
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
      console.log("[Background] Received getOllamaModels message", message.data);
      if (!message.data || !message.data.endpoint) {
        console.error("[Background] getOllamaModels message missing endpoint.");
        sendMessage("getOllamaModelsResult", { endpoint: void 0, success: false, error: "No endpoint received" }).catch((e) => console.error("[Background] Failed to send error:", e));
        return;
      }
      const { endpoint } = message.data;
      const responseTarget = "getOllamaModelsResult";
      const fetchUrl = `${endpoint}/api/tags`;
      console.log(`[Background] Attempting to fetch models from: ${fetchUrl}`);
      try {
        const fetchOptions = { method: "GET", headers: { "Accept": "application/json" } };
        const response = await fetch(fetchUrl, fetchOptions);
        if (!response.ok) {
          let errorBody = "[Could not read error body]";
          try {
            errorBody = await response.text();
          } catch {
          }
          console.error(`[Background] Fetch failed: Status ${response.status}. Body:`, errorBody);
          throw new Error(`Failed to fetch Ollama models: ${response.status} ${response.statusText}`);
        }
        const responseData = await response.json();
        const models = Array.isArray(responseData == null ? void 0 : responseData.models) ? responseData.models.map((tag) => ({ id: tag.name, name: tag.name })) : [];
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
      if (!message.data || !message.data.prompt) {
        console.error("Background: ollamaChatRequest message missing prompt.");
        return;
      }
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
      const responseTarget = "flashcardGenerationResult";
      if (!message.data || !message.data.text) {
        console.error("[Background] No text provided for flashcard generation.");
        sendMessage(responseTarget, { data: null, error: "No text provided" }).catch((e) => console.error("Failed to send error result:", e));
        return;
      }
      const { text } = message.data;
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
      var _a2, _b2, _c;
      console.log("[Background] Received getSelectedText request (from UI).");
      try {
        const tabs = await browser$2.tabs.query({ active: true, currentWindow: true });
        const currentTab = tabs[0];
        if (!currentTab || !currentTab.id) {
          console.warn("[Background] Could not get active tab ID for script injection.");
          return null;
        }
        const tabId = currentTab.id;
        let needsInjection = true;
        try {
          const response = await browser$2.tabs.sendMessage(tabId, { type: "ping" });
          if (response && response.pong) {
            needsInjection = false;
          }
        } catch (e) {
          console.log("[Background] Ping failed: Content script likely not injected or inaccessible.");
        }
        if (needsInjection) {
          console.log(`[Background] Injecting content script into tab ${tabId}...`);
          try {
            await browser$2.scripting.executeScript({
              target: { tabId },
              // Use tabId variable
              files: ["content-scripts/content.js"]
            });
            console.log(`[Background] Content script injected.`);
            await new Promise((resolve) => setTimeout(resolve, 100));
          } catch (injectionError) {
            console.error(`[Background] Failed to inject content script into tab ${tabId}:`, injectionError);
            return null;
          }
        }
        console.log(`[Background] Sending _requestSelectionFromContentScript message to tab ${tabId}...`);
        const selection = await sendMessage("_requestSelectionFromContentScript", void 0, { tabId });
        console.log("[Background] Received selection from content script via sendMessage:", selection);
        return selection && typeof selection.text === "string" ? { text: selection.text } : null;
      } catch (error) {
        console.error("[Background] Error in getSelectedText handler:", error);
        if ((_a2 = error.message) == null ? void 0 : _a2.includes("Could not establish connection")) {
          console.warn("[Background] Connection error likely means the content script wasn't ready or page is restricted.");
        } else if ((_b2 = error.message) == null ? void 0 : _b2.includes("No matching message handler")) {
          console.warn("[Background] 'No matching message handler' likely means the content script is not injected or listening correctly for _requestSelectionFromContentScript.");
        } else if ((_c = error.message) == null ? void 0 : _c.includes("[messaging]")) {
          console.warn("[Background] Messaging format error during getSelectedText. Check ProtocolMap and listeners.", error);
        }
        return null;
      }
    });
    onMessage("translateText", async (message) => {
      console.log("[Background] Received translateText request", message.data);
      if (!message.data || !message.data.text || !message.data.targetLang) {
        console.error("Background: Missing text or target language for translation.");
        throw new Error("Missing text or target language for translation.");
      }
      const { text, targetLang } = message.data;
      try {
        const translated = await translateText(text, targetLang);
        if (translated === null) {
          console.error("[Background] Translation service returned null.");
          throw new Error("Translation failed or returned null.");
        }
        console.log("[Background] Translation successful:", translated);
        return translated;
      } catch (error) {
        console.error("[Background] Translation error:", error);
        throw new Error(error.message || "Translation failed");
      }
    });
    onMessage("saveFlashcardAndNotify", async (message) => {
      console.log("[Background] Received saveFlashcardAndNotify request:", message.data);
      if (!message.data || !message.data.cardData) {
        console.error("Background: saveFlashcardAndNotify message received without cardData.");
        browser$2.notifications.create(`flashcard-save-error-${Date.now()}`, {
          type: "basic",
          iconUrl: browser$2.runtime.getURL("/icon/128.png"),
          title: "Flashcard Save Failed",
          message: `Error: Missing flashcard data.`,
          priority: 1
        });
        return null;
      }
      const { cardData } = message.data;
      try {
        const newFlashcard = await createFlashcard(cardData);
        console.log("[Background] Flashcard created in DB:", newFlashcard);
        await createChatMessage({ role: "flashcard", flashcard_id: newFlashcard.id });
        console.log(`[Background] Associated chat message created for flashcard ID: ${newFlashcard.id}`);
        browser$2.notifications.create(`flashcard-save-success-${Date.now()}`, {
          type: "basic",
          iconUrl: browser$2.runtime.getURL("/icon/128.png"),
          title: "Flashcard Saved",
          message: `Saved: ${cardData.front || "Cloze Card"}`,
          priority: 0
        });
        return newFlashcard;
      } catch (error) {
        console.error("[Background] Error saving flashcard or creating chat message:", error);
        browser$2.notifications.create(`flashcard-save-error-${Date.now()}`, {
          type: "basic",
          iconUrl: browser$2.runtime.getURL("/icon/128.png"),
          title: "Flashcard Save Failed",
          message: `Error: ${error.message || "Unknown error"}`,
          priority: 1
        });
        return null;
      }
    });
    onMessage("saveConfiguration", async (message) => {
      console.log("[Background] Received saveConfiguration request...");
      if (!message.data || !message.data.configJson) {
        console.error("[Background] saveConfiguration message received without configJson.");
        throw new Error("No configuration JSON string received.");
      }
      try {
        const configObject = JSON.parse(message.data.configJson);
        console.log("[Background] Parsed configuration object:", configObject);
        await browser$2.storage.local.set({ userConfig: configObject });
        console.log("[Background] User configuration saved successfully.");
      } catch (error) {
        console.error("[Background] Error saving user configuration:", error);
        throw new Error(error.message || "Unknown error saving config");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc2VyaWFsaXplLWVycm9yL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zZXJpYWxpemUtZXJyb3IvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21lc3NhZ2luZy9saWIvY2h1bmstQlFMRlNGRlouanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21lc3NhZ2luZy9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ad2ViZXh0LWNvcmUvbWVzc2FnaW5nL2xpYi9pbmRleC5qcyIsIi4uLy4uL3V0aWxzL21lc3NhZ2luZy50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy1tdXRleC9pbmRleC5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdHMtZnNycy9kaXN0L2luZGV4Lm1qcyIsIi4uLy4uL3V0aWxzL2RiLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL3Byb3ZpZGVycy9vbGxhbWEudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvcHJvdmlkZXJzL29wZW5yb3V0ZXIudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvbGxtU2VydmljZS50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC91dGlscy9kZWZpbmUtYmFja2dyb3VuZC5tanMiLCIuLi8uLi9lbnRyeXBvaW50cy9iYWNrZ3JvdW5kLnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0B3eHQtZGV2L2Jyb3dzZXIvc3JjL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC9icm93c2VyLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ad2ViZXh0LWNvcmUvbWF0Y2gtcGF0dGVybnMvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTIuMCAtIFR1ZSBNYXkgMTQgMjAyNCAxODowMToyOSAqL1xuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG4gIGlmICghKGdsb2JhbFRoaXMuYnJvd3NlciAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZSAmJiBnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZS5pZCkpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAgIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICAgIG1heEFyZ3M6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBkZXZ0b29sczoge1xuICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycylcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiY29uc3QgbGlzdCA9IFtcblx0Ly8gTmF0aXZlIEVTIGVycm9ycyBodHRwczovLzI2Mi5lY21hLWludGVybmF0aW9uYWwub3JnLzEyLjAvI3NlYy13ZWxsLWtub3duLWludHJpbnNpYy1vYmplY3RzXG5cdEV2YWxFcnJvcixcblx0UmFuZ2VFcnJvcixcblx0UmVmZXJlbmNlRXJyb3IsXG5cdFN5bnRheEVycm9yLFxuXHRUeXBlRXJyb3IsXG5cdFVSSUVycm9yLFxuXG5cdC8vIEJ1aWx0LWluIGVycm9yc1xuXHRnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbixcblxuXHQvLyBOb2RlLXNwZWNpZmljIGVycm9yc1xuXHQvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2Vycm9ycy5odG1sXG5cdGdsb2JhbFRoaXMuQXNzZXJ0aW9uRXJyb3IsXG5cdGdsb2JhbFRoaXMuU3lzdGVtRXJyb3IsXG5dXG5cdC8vIE5vbi1uYXRpdmUgRXJyb3JzIGFyZSB1c2VkIHdpdGggYGdsb2JhbFRoaXNgIGJlY2F1c2UgdGhleSBtaWdodCBiZSBtaXNzaW5nLiBUaGlzIGZpbHRlciBkcm9wcyB0aGVtIHdoZW4gdW5kZWZpbmVkLlxuXHQuZmlsdGVyKEJvb2xlYW4pXG5cdC5tYXAoXG5cdFx0Y29uc3RydWN0b3IgPT4gW2NvbnN0cnVjdG9yLm5hbWUsIGNvbnN0cnVjdG9yXSxcblx0KTtcblxuY29uc3QgZXJyb3JDb25zdHJ1Y3RvcnMgPSBuZXcgTWFwKGxpc3QpO1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckNvbnN0cnVjdG9ycztcbiIsImltcG9ydCBlcnJvckNvbnN0cnVjdG9ycyBmcm9tICcuL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBOb25FcnJvciBleHRlbmRzIEVycm9yIHtcblx0bmFtZSA9ICdOb25FcnJvcic7XG5cblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKE5vbkVycm9yLl9wcmVwYXJlU3VwZXJNZXNzYWdlKG1lc3NhZ2UpKTtcblx0fVxuXG5cdHN0YXRpYyBfcHJlcGFyZVN1cGVyTWVzc2FnZShtZXNzYWdlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBTdHJpbmcobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGNvbW1vblByb3BlcnRpZXMgPSBbXG5cdHtcblx0XHRwcm9wZXJ0eTogJ25hbWUnLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdtZXNzYWdlJyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdHByb3BlcnR5OiAnc3RhY2snLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdjb2RlJyxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0cHJvcGVydHk6ICdjYXVzZScsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdH0sXG5dO1xuXG5jb25zdCB0b0pzb25XYXNDYWxsZWQgPSBuZXcgV2Vha1NldCgpO1xuXG5jb25zdCB0b0pTT04gPSBmcm9tID0+IHtcblx0dG9Kc29uV2FzQ2FsbGVkLmFkZChmcm9tKTtcblx0Y29uc3QganNvbiA9IGZyb20udG9KU09OKCk7XG5cdHRvSnNvbldhc0NhbGxlZC5kZWxldGUoZnJvbSk7XG5cdHJldHVybiBqc29uO1xufTtcblxuY29uc3QgZ2V0RXJyb3JDb25zdHJ1Y3RvciA9IG5hbWUgPT4gZXJyb3JDb25zdHJ1Y3RvcnMuZ2V0KG5hbWUpID8/IEVycm9yO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuY29uc3QgZGVzdHJveUNpcmN1bGFyID0gKHtcblx0ZnJvbSxcblx0c2Vlbixcblx0dG8sXG5cdGZvcmNlRW51bWVyYWJsZSxcblx0bWF4RGVwdGgsXG5cdGRlcHRoLFxuXHR1c2VUb0pTT04sXG5cdHNlcmlhbGl6ZSxcbn0pID0+IHtcblx0aWYgKCF0bykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGZyb20pKSB7XG5cdFx0XHR0byA9IFtdO1xuXHRcdH0gZWxzZSBpZiAoIXNlcmlhbGl6ZSAmJiBpc0Vycm9yTGlrZShmcm9tKSkge1xuXHRcdFx0Y29uc3QgRXJyb3IgPSBnZXRFcnJvckNvbnN0cnVjdG9yKGZyb20ubmFtZSk7XG5cdFx0XHR0byA9IG5ldyBFcnJvcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0byA9IHt9O1xuXHRcdH1cblx0fVxuXG5cdHNlZW4ucHVzaChmcm9tKTtcblxuXHRpZiAoZGVwdGggPj0gbWF4RGVwdGgpIHtcblx0XHRyZXR1cm4gdG87XG5cdH1cblxuXHRpZiAodXNlVG9KU09OICYmIHR5cGVvZiBmcm9tLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyAmJiAhdG9Kc29uV2FzQ2FsbGVkLmhhcyhmcm9tKSkge1xuXHRcdHJldHVybiB0b0pTT04oZnJvbSk7XG5cdH1cblxuXHRjb25zdCBjb250aW51ZURlc3Ryb3lDaXJjdWxhciA9IHZhbHVlID0+IGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0ZnJvbTogdmFsdWUsXG5cdFx0c2VlbjogWy4uLnNlZW5dLFxuXHRcdGZvcmNlRW51bWVyYWJsZSxcblx0XHRtYXhEZXB0aCxcblx0XHRkZXB0aCxcblx0XHR1c2VUb0pTT04sXG5cdFx0c2VyaWFsaXplLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmcm9tKSkge1xuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0J1ZmZlcicpIHtcblx0XHRcdHRvW2tleV0gPSAnW29iamVjdCBCdWZmZXJdJztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IFVzZSBgc3RyZWFtLmlzUmVhZGFibGUoKWAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxOC5cblx0XHRpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUucGlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dG9ba2V5XSA9ICdbb2JqZWN0IFN0cmVhbV0nO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHQvLyBHcmFjZWZ1bGx5IGhhbmRsZSBub24tY29uZmlndXJhYmxlIGVycm9ycyBsaWtlIGBET01FeGNlcHRpb25gLlxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dG9ba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSBjYXRjaCB7fVxuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIXNlZW4uaW5jbHVkZXMoZnJvbVtrZXldKSkge1xuXHRcdFx0ZGVwdGgrKztcblx0XHRcdHRvW2tleV0gPSBjb250aW51ZURlc3Ryb3lDaXJjdWxhcihmcm9tW2tleV0pO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0b1trZXldID0gJ1tDaXJjdWxhcl0nO1xuXHR9XG5cblx0Zm9yIChjb25zdCB7cHJvcGVydHksIGVudW1lcmFibGV9IG9mIGNvbW1vblByb3BlcnRpZXMpIHtcblx0XHRpZiAodHlwZW9mIGZyb21bcHJvcGVydHldICE9PSAndW5kZWZpbmVkJyAmJiBmcm9tW3Byb3BlcnR5XSAhPT0gbnVsbCkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBwcm9wZXJ0eSwge1xuXHRcdFx0XHR2YWx1ZTogaXNFcnJvckxpa2UoZnJvbVtwcm9wZXJ0eV0pID8gY29udGludWVEZXN0cm95Q2lyY3VsYXIoZnJvbVtwcm9wZXJ0eV0pIDogZnJvbVtwcm9wZXJ0eV0sXG5cdFx0XHRcdGVudW1lcmFibGU6IGZvcmNlRW51bWVyYWJsZSA/IHRydWUgOiBlbnVtZXJhYmxlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUVycm9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdG1heERlcHRoID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuXHRcdHVzZVRvSlNPTiA9IHRydWUsXG5cdH0gPSBvcHRpb25zO1xuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGRlc3Ryb3lDaXJjdWxhcih7XG5cdFx0XHRmcm9tOiB2YWx1ZSxcblx0XHRcdHNlZW46IFtdLFxuXHRcdFx0Zm9yY2VFbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0bWF4RGVwdGgsXG5cdFx0XHRkZXB0aDogMCxcblx0XHRcdHVzZVRvSlNPTixcblx0XHRcdHNlcmlhbGl6ZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXG5cdC8vIFBlb3BsZSBzb21ldGltZXMgdGhyb3cgdGhpbmdzIGJlc2lkZXMgRXJyb3Igb2JqZWN0c+KAplxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gYEpTT04uc3RyaW5naWZ5KClgIGRpc2NhcmRzIGZ1bmN0aW9ucy4gV2UgZG8gdG9vLCB1bmxlc3MgYSBmdW5jdGlvbiBpcyB0aHJvd24gZGlyZWN0bHkuXG5cdFx0Ly8gV2UgaW50ZW50aW9uYWxseSB1c2UgYHx8YCBiZWNhdXNlIGAubmFtZWAgaXMgYW4gZW1wdHkgc3RyaW5nIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zLlxuXHRcdHJldHVybiBgW0Z1bmN0aW9uOiAke3ZhbHVlLm5hbWUgfHwgJ2Fub255bW91cyd9XWA7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge21heERlcHRoID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZfSA9IG9wdGlvbnM7XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAoaXNNaW5pbXVtVmlhYmxlU2VyaWFsaXplZEVycm9yKHZhbHVlKSkge1xuXHRcdGNvbnN0IEVycm9yID0gZ2V0RXJyb3JDb25zdHJ1Y3Rvcih2YWx1ZS5uYW1lKTtcblx0XHRyZXR1cm4gZGVzdHJveUNpcmN1bGFyKHtcblx0XHRcdGZyb206IHZhbHVlLFxuXHRcdFx0c2VlbjogW10sXG5cdFx0XHR0bzogbmV3IEVycm9yKCksXG5cdFx0XHRtYXhEZXB0aCxcblx0XHRcdGRlcHRoOiAwLFxuXHRcdFx0c2VyaWFsaXplOiBmYWxzZSxcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBuZXcgTm9uRXJyb3IodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvckxpa2UodmFsdWUpIHtcblx0cmV0dXJuIEJvb2xlYW4odmFsdWUpXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0JiYgJ25hbWUnIGluIHZhbHVlXG5cdCYmICdtZXNzYWdlJyBpbiB2YWx1ZVxuXHQmJiAnc3RhY2snIGluIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc01pbmltdW1WaWFibGVTZXJpYWxpemVkRXJyb3IodmFsdWUpIHtcblx0cmV0dXJuIEJvb2xlYW4odmFsdWUpXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0JiYgJ21lc3NhZ2UnIGluIHZhbHVlXG5cdCYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuZXhwb3J0IHtkZWZhdWx0IGFzIGVycm9yQ29uc3RydWN0b3JzfSBmcm9tICcuL2Vycm9yLWNvbnN0cnVjdG9ycy5qcyc7XG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZGVmUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBfX2dldE93blByb3BEZXNjcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG52YXIgX19zcHJlYWRQcm9wcyA9IChhLCBiKSA9PiBfX2RlZlByb3BzKGEsIF9fZ2V0T3duUHJvcERlc2NzKGIpKTtcbnZhciBfX29ialJlc3QgPSAoc291cmNlLCBleGNsdWRlKSA9PiB7XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKHNvdXJjZSwgcHJvcCkgJiYgZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMClcbiAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgaWYgKHNvdXJjZSAhPSBudWxsICYmIF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKHNvdXJjZSkpIHtcbiAgICAgIGlmIChleGNsdWRlLmluZGV4T2YocHJvcCkgPCAwICYmIF9fcHJvcElzRW51bS5jYWxsKHNvdXJjZSwgcHJvcCkpXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fYXN5bmMgPSAoX190aGlzLCBfX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdmFyIGZ1bGZpbGxlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVqZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBzdGVwID0gKHgpID0+IHguZG9uZSA/IHJlc29sdmUoeC52YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUoeC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbiAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkoX190aGlzLCBfX2FyZ3VtZW50cykpLm5leHQoKSk7XG4gIH0pO1xufTtcblxuLy8gc3JjL2dlbmVyaWMudHNcbmltcG9ydCB7IHNlcmlhbGl6ZUVycm9yLCBkZXNlcmlhbGl6ZUVycm9yIH0gZnJvbSBcInNlcmlhbGl6ZS1lcnJvclwiO1xuZnVuY3Rpb24gZGVmaW5lR2VuZXJpY01lc3NhbmdpbmcoY29uZmlnKSB7XG4gIGxldCByZW1vdmVSb290TGlzdGVuZXI7XG4gIGxldCBwZXJUeXBlTGlzdGVuZXJzID0ge307XG4gIGZ1bmN0aW9uIGNsZWFudXBSb290TGlzdGVuZXIoKSB7XG4gICAgaWYgKE9iamVjdC5lbnRyaWVzKHBlclR5cGVMaXN0ZW5lcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVtb3ZlUm9vdExpc3RlbmVyID09IG51bGwgPyB2b2lkIDAgOiByZW1vdmVSb290TGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZVJvb3RMaXN0ZW5lciA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgbGV0IGlkU2VxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU0KTtcbiAgZnVuY3Rpb24gZ2V0TmV4dElkKCkge1xuICAgIHJldHVybiBpZFNlcSsrO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2VuZE1lc3NhZ2UodHlwZSwgZGF0YSwgLi4uYXJncykge1xuICAgICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hMiwgX2IsIF9jLCBfZDtcbiAgICAgICAgY29uc3QgX21lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IGdldE5leHRJZCgpLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IChfYiA9IHlpZWxkIChfYTIgPSBjb25maWcudmVyaWZ5TWVzc2FnZURhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuY2FsbChjb25maWcsIF9tZXNzYWdlKSkgIT0gbnVsbCA/IF9iIDogX21lc3NhZ2U7XG4gICAgICAgIChfYyA9IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYy5kZWJ1ZyhgW21lc3NhZ2luZ10gc2VuZE1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgbWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY29uZmlnLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCB7IHJlcywgZXJyIH0gPSByZXNwb25zZSAhPSBudWxsID8gcmVzcG9uc2UgOiB7IGVycjogbmV3IEVycm9yKFwiTm8gcmVzcG9uc2VcIikgfTtcbiAgICAgICAgKF9kID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9kLmRlYnVnKGBbbWVzc2FnaW5nXSBzZW5kTWVzc2FnZSB7aWQ9JHttZXNzYWdlLmlkfX0gXFx1MTQwQVxcdTI1MDBgLCB7IHJlcywgZXJyIH0pO1xuICAgICAgICBpZiAoZXJyICE9IG51bGwpXG4gICAgICAgICAgdGhyb3cgZGVzZXJpYWxpemVFcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbk1lc3NhZ2UodHlwZSwgb25SZWNlaXZlZCkge1xuICAgICAgdmFyIF9hMiwgX2IsIF9jO1xuICAgICAgaWYgKHJlbW92ZVJvb3RMaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgIChfYTIgPSBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmRlYnVnKFxuICAgICAgICAgIGBbbWVzc2FnaW5nXSBcIiR7dHlwZX1cIiBpbml0aWFsaXplZCB0aGUgbWVzc2FnZSBsaXN0ZW5lciBmb3IgdGhpcyBjb250ZXh0YFxuICAgICAgICApO1xuICAgICAgICByZW1vdmVSb290TGlzdGVuZXIgPSBjb25maWcuYWRkUm9vdExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgdmFyIF9hMywgX2IyO1xuICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS50eXBlICE9IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UudGltZXN0YW1wICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmJyZWFrRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIGBbbWVzc2FnaW5nXSBVbmtub3duIG1lc3NhZ2UgZm9ybWF0LCBtdXN0IGluY2x1ZGUgdGhlICd0eXBlJyAmICd0aW1lc3RhbXAnIGZpZWxkcywgcmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoX2EzID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoX2IyID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLmRlYnVnKFwiW21lc3NhZ2luZ10gUmVjZWl2ZWQgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHBlclR5cGVMaXN0ZW5lcnNbbWVzc2FnZS50eXBlXTtcbiAgICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjb25zdCByZXMgPSBsaXN0ZW5lcihtZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigocmVzMikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNCwgX2IzO1xuICAgICAgICAgICAgcmV0dXJuIChfYjMgPSAoX2E0ID0gY29uZmlnLnZlcmlmeU1lc3NhZ2VEYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmNhbGwoY29uZmlnLCByZXMyKSkgIT0gbnVsbCA/IF9iMyA6IHJlczI7XG4gICAgICAgICAgfSkudGhlbigocmVzMikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNDtcbiAgICAgICAgICAgIChfYTQgPSBjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5sb2dnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYTQuZGVidWcoYFttZXNzYWdpbmddIG9uTWVzc2FnZSB7aWQ9JHttZXNzYWdlLmlkfX0gXFx1MjUwMFxcdTE0MDVgLCB7IHJlczogcmVzMiB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IHJlczogcmVzMiB9O1xuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTQ7XG4gICAgICAgICAgICAoX2E0ID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubG9nZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2E0LmRlYnVnKGBbbWVzc2FnaW5nXSBvbk1lc3NhZ2Uge2lkPSR7bWVzc2FnZS5pZH19IFxcdTI1MDBcXHUxNDA1YCwgeyBlcnIgfSk7XG4gICAgICAgICAgICByZXR1cm4geyBlcnI6IHNlcmlhbGl6ZUVycm9yKGVycikgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGVyVHlwZUxpc3RlbmVyc1t0eXBlXSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IEVycm9yKFxuICAgICAgICAgIGBbbWVzc2FnaW5nXSBJbiB0aGlzIEpTIGNvbnRleHQsIG9ubHkgb25lIGxpc3RlbmVyIGNhbiBiZSBzZXR1cCBmb3IgJHt0eXBlfWBcbiAgICAgICAgKTtcbiAgICAgICAgKF9iID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmVycm9yKGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHBlclR5cGVMaXN0ZW5lcnNbdHlwZV0gPSBvblJlY2VpdmVkO1xuICAgICAgKF9jID0gY29uZmlnLmxvZ2dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLmxvZyhgW21lc3NhZ2luZ10gQWRkZWQgbGlzdGVuZXIgZm9yICR7dHlwZX1gKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBwZXJUeXBlTGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICBjbGVhbnVwUm9vdExpc3RlbmVyKCk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgT2JqZWN0LmtleXMocGVyVHlwZUxpc3RlbmVycykuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBkZWxldGUgcGVyVHlwZUxpc3RlbmVyc1t0eXBlXTtcbiAgICAgIH0pO1xuICAgICAgY2xlYW51cFJvb3RMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgX19zcHJlYWRWYWx1ZXMsXG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fb2JqUmVzdCxcbiAgX19hc3luYyxcbiAgZGVmaW5lR2VuZXJpY01lc3Nhbmdpbmdcbn07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge31cbiAgICAgICAgICAvKiB3cmFwcGVycyAqL1xuICAgICAgICAgICwge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuXG5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cblxuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfSAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG5cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9OyAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsImltcG9ydCB7XG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fc3ByZWFkVmFsdWVzLFxuICBkZWZpbmVHZW5lcmljTWVzc2FuZ2luZ1xufSBmcm9tIFwiLi9jaHVuay1CUUxGU0ZGWi5qc1wiO1xuXG4vLyBzcmMvZXh0ZW5zaW9uLnRzXG5pbXBvcnQgQnJvd3NlciBmcm9tIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI7XG5mdW5jdGlvbiBkZWZpbmVFeHRlbnNpb25NZXNzYWdpbmcoY29uZmlnKSB7XG4gIHJldHVybiBkZWZpbmVHZW5lcmljTWVzc2FuZ2luZyhfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBjb25maWcpLCB7XG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgYXJnKSB7XG4gICAgICBpZiAoYXJnID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgYXJnID09PSBcIm51bWJlclwiID8geyB0YWJJZDogYXJnIH0gOiBhcmc7XG4gICAgICByZXR1cm4gQnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAgICBvcHRpb25zLnRhYklkLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICAvLyBQYXNzIGZyYW1lSWQgaWYgc3BlY2lmaWVkXG4gICAgICAgIG9wdGlvbnMuZnJhbWVJZCAhPSBudWxsID8geyBmcmFtZUlkOiBvcHRpb25zLmZyYW1lSWQgfSA6IHZvaWQgMFxuICAgICAgKTtcbiAgICB9LFxuICAgIGFkZFJvb3RMaXN0ZW5lcihwcm9jZXNzTWVzc2FnZSkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSAobWVzc2FnZSwgc2VuZGVyKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc01lc3NhZ2UoX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgbWVzc2FnZSksIHsgc2VuZGVyIH0pKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH07XG4gICAgICBCcm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHJldHVybiAoKSA9PiBCcm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9XG4gIH0pKTtcbn1cbmV4cG9ydCB7XG4gIGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZ1xufTtcbiIsImltcG9ydCB7IGRlZmluZUV4dGVuc2lvbk1lc3NhZ2luZyB9IGZyb20gJ0B3ZWJleHQtY29yZS9tZXNzYWdpbmcnO1xuLy8gUmVtb3ZlIHBvdGVudGlhbGx5IGluY29ycmVjdC91bm5lZWRlZCBpbXBvcnRcbi8vIGltcG9ydCB0eXBlIHsgTExNVXNlckNvbmZpZyB9IGZyb20gJy4uL3NlcnZpY2VzL2xsbVNlcnZpY2UnOyBcbi8vIFJlbW92ZSBjb25mbGljdGluZyBzZWxmLWltcG9ydFxuLy8gaW1wb3J0IHR5cGUgeyBPbGxhbWFTdHJlYW1DaHVuayB9IGZyb20gJy4vbWVzc2FnaW5nJzsgXG5pbXBvcnQgdHlwZSB7IEZsYXNoY2FyZCB9IGZyb20gJy4uL3NyYy90eXBlcy9kYic7IC8vIEFkZGVkIEZsYXNoY2FyZCBpbXBvcnRcbi8vIGltcG9ydCB0eXBlIHsgRGF0YWJhc2VTdGF0cyB9IGZyb20gJy4uL3V0aWxzL2RiJzsgLy8gUkVNT1ZFRCBEYXRhYmFzZVN0YXRzIGltcG9ydFxuXG4vLyBEZWZpbmUvSW1wb3J0IHJlcXVpcmVkIHR5cGVzXG4vLyBUT0RPOiBFbnN1cmUgdGhlc2UgdHlwZXMgYXJlIGNvcnJlY3RseSBkZWZpbmVkIG9yIGltcG9ydGVkIGlmIHRoZXkgZXhpc3QgZWxzZXdoZXJlXG4vLyBleHBvcnQgdHlwZSBPbGxhbWFTdHJlYW1DaHVua1N0YXR1cyA9ICdjaHVuaycgfCAnZG9uZScgfCAnZXJyb3InIHwgJ292ZXJyaWRlX2dyYW50ZWQnOyAvLyBSZW1vdmVkIG9sZCBzdGF0dXMgdHlwZVxuXG5leHBvcnQgdHlwZSBPbGxhbWFTdHJlYW1DaHVuayA9IHtcbiAgbW9kZWw/OiBzdHJpbmc7IC8vIE1ha2Ugb3B0aW9uYWwgYXMgbm90IGFsbCBjaHVua3MgaGF2ZSBpdFxuICBjcmVhdGVkX2F0Pzogc3RyaW5nOyAvLyBNYWtlIG9wdGlvbmFsXG4gIGNvbnRlbnQ/OiBzdHJpbmc7IC8vIENvbnRlbnQgY2h1bmsgZnJvbSBPbGxhbWEgcHJvdmlkZXJcbiAgbWVzc2FnZT86IHsgLy8gT3B0aW9uYWw6IGZpbmFsIG1lc3NhZ2Ugc3RydWN0dXJlIChjaGVjayBhY3R1YWwgT2xsYW1hIEFQSSlcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICB9O1xuICAvLyBkb25lOiBib29sZWFuOyAvLyAnc3RhdHVzJyBmaWVsZCByZXBsYWNlcyB0aGlzXG4gIHRvdGFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICBsb2FkX2R1cmF0aW9uPzogbnVtYmVyO1xuICBwcm9tcHRfZXZhbF9jb3VudD86IG51bWJlcjtcbiAgcHJvbXB0X2V2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gIGV2YWxfY291bnQ/OiBudW1iZXI7XG4gIGV2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gIHN0YXRzPzogeyAvLyBJbmNsdWRlIHN0YXRzIGZyb20gT2xsYW1hIHByb3ZpZGVyJ3MgZG9uZSBjaHVua1xuICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIHRvdGFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICAgIGxvYWRfZHVyYXRpb24/OiBudW1iZXI7XG4gICAgcHJvbXB0X2V2YWxfY291bnQ/OiBudW1iZXI7XG4gICAgcHJvbXB0X2V2YWxfZHVyYXRpb24/OiBudW1iZXI7XG4gICAgZXZhbF9jb3VudD86IG51bWJlcjtcbiAgICBldmFsX2R1cmF0aW9uPzogbnVtYmVyO1xuICB9O1xuICAvLyBVcGRhdGVkIHN0YXR1cyBmaWVsZCB0byByZWZsZWN0IGFjdHVhbCB1c2FnZVxuICBzdGF0dXM6ICdjaHVuaycgfCAnY29tcGxldGUnIHwgJ2Vycm9yJyB8ICdkb25lJzsgXG4gIGVycm9yPzogc3RyaW5nOyBcbn07XG5leHBvcnQgaW50ZXJmYWNlIE9sbGFtYUNoYXRSZXF1ZXN0IHtcbiAgICBwcm9tcHQ6IHN0cmluZztcbiAgICBoaXN0b3J5PzogeyByb2xlOiAndXNlcicgfCAnYXNzaXN0YW50JzsgY29udGVudDogc3RyaW5nIH1bXTsgXG59XG5leHBvcnQgaW50ZXJmYWNlIENoYXRNZXNzYWdlIHtcbiAgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCcgfCAnc3lzdGVtJyB8ICdib29rbWFyaycgfCAnZmxhc2hjYXJkJzsgLy8gQWRkZWQgc3lzdGVtL2Jvb2ttYXJrL2ZsYXNoY2FyZFxuICBjb250ZW50Pzogc3RyaW5nO1xuICBzdGF0dXM/OiAncGVuZGluZycgfCAnc3RyZWFtaW5nJyB8ICdjb21wbGV0ZScgfCAnZXJyb3InO1xuICBpZD86IG51bWJlcjsgLy8gT3B0aW9uYWwgSUQgZnJvbSBEQlxuICBjcmVhdGVkX2F0Pzogc3RyaW5nIHwgbnVtYmVyOyAvLyBPcHRpb25hbCB0aW1lc3RhbXBcbiAgYm9va21hcmtfaWQ/OiBudW1iZXI7IC8vIE9wdGlvbmFsIElEIGlmIHJvbGUgaXMgYm9va21hcmtcbiAgZmxhc2hjYXJkX2lkPzogbnVtYmVyOyAvLyBPcHRpb25hbCBJRCBpZiByb2xlIGlzIGZsYXNoY2FyZFxufVxuXG4vLyBEZWZpbmUgQ2xpcERhdGEgdHlwZSBhbmQgZXhwb3J0IGl0XG5leHBvcnQgaW50ZXJmYWNlIENsaXBEYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmdbXTsgLy8gT3B0aW9uYWwgdGFnc1xufVxuXG4vLyBEZWZpbmUgREIgb3BlcmF0aW9uIHR5cGVzXG4vLyBFWFBPUlQgdGhlc2UgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBEYkV4ZWNSZXF1ZXN0IHtcbiAgc3FsOiBzdHJpbmc7XG4gIHBhcmFtcz86IGFueVtdOyAvLyBPcHRpb25hbCBwYXJhbXMgZm9yIGV4ZWNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYlF1ZXJ5UmVxdWVzdCB7XG4gIHNxbDogc3RyaW5nO1xuICBwYXJhbXM/OiBhbnlbXTsgLy8gT3B0aW9uYWwgcGFyYW1zIGZvciBxdWVyeVxufVxuXG4vLyBEZWZpbmUgdGhlIHN0cnVjdHVyZSBvZiBhIG1vZGVsIHJldHVybmVkIGJ5IHRoZSBiYWNrZ3JvdW5kXG5pbnRlcmZhY2UgT2xsYW1hTW9kZWwge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8vICoqKiBFWFBPUlQgdGhpcyBpbnRlcmZhY2UgKioqXG5leHBvcnQgaW50ZXJmYWNlIEdldE9sbGFtYU1vZGVsc1Jlc3BvbnNlIHtcbiAgZW5kcG9pbnQ/OiBzdHJpbmc7IC8vIEFkZGVkIG9wdGlvbmFsIGVuZHBvaW50IGZpZWxkXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1vZGVscz86IE9sbGFtYU1vZGVsW107XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG4vLyBBZGQgUGFnZUluZm8gdHlwZSBpZiBub3QgZGVmaW5lZCBlbHNld2hlcmVcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUluZm8geyAvLyBBc3N1bWluZyB0aGlzIHN0cnVjdHVyZSBiYXNlZCBvbiBBcHAudHN4IHVzYWdlXG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufVxuXG4vLyBEZWZpbmUgdGhlIG92ZXJhbGwgcHJvdG9jb2wgbWFwIHVzaW5nIEZVTkNUSU9OIFNJR05BVFVSRVMgY29uc2lzdGVudGx5XG5leHBvcnQgaW50ZXJmYWNlIFByb3RvY29sTWFwIHtcbiAgLy8gPT0gU2ltcGxlIEZpcmUtYW5kLUZvcmdldCBvciBOb3RpZmljYXRpb24gTWVzc2FnZXMgPT1cbiAgY2xpcFBhZ2U6IChkYXRhOiBDbGlwRGF0YSkgPT4gdm9pZDtcbiAgb2xsYW1hUmVzcG9uc2U6IChkYXRhOiBPbGxhbWFTdHJlYW1DaHVuaykgPT4gdm9pZDsgLy8gQXNzdW1pbmcgYmFja2dyb3VuZCBzZW5kcyB0aGVzZSwgVUkgbGlzdGVuc1xuICBnZXRPbGxhbWFNb2RlbHNSZXN1bHQ6IChkYXRhOiBHZXRPbGxhbWFNb2RlbHNSZXNwb25zZSkgPT4gdm9pZDsgLy8gQXNzdW1pbmcgYmFja2dyb3VuZCBzZW5kcyB0aGVzZSwgVUkgbGlzdGVuc1xuICBfY2hhdEhpc3RvcnlVcGRhdGVkOiAoKSA9PiB2b2lkO1xuICBhZGRTeXN0ZW1NZXNzYWdlOiAoZGF0YTogeyBjb250ZW50OiBzdHJpbmcgfSkgPT4gdm9pZDsgLy8gRGVmaW5lIGRhdGEgdHlwZVxuICBmbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0OiAoZGF0YTogeyBkYXRhOiBGbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0IHwgbnVsbDsgZXJyb3I/OiBzdHJpbmcgfSkgPT4gdm9pZDtcblxuICAvLyA9PSBNZXNzYWdlcyBleHBlY3RpbmcgYSByZXNwb25zZSA9PVxuICBnZXRPbGxhbWFNb2RlbHM6IChkYXRhOiB7IGVuZHBvaW50OiBzdHJpbmcgfSkgPT4gdm9pZDsgLy8gUmVxdWVzdCB0cmlnZ2VycyBzZXBhcmF0ZSBSZXN1bHQgbWVzc2FnZSwgc28gcmVzcG9uc2UgaXMgdm9pZFxuICBvbGxhbWFDaGF0UmVxdWVzdDogKGRhdGE6IE9sbGFtYUNoYXRSZXF1ZXN0KSA9PiB2b2lkOyAvLyBSZXF1ZXN0IHRyaWdnZXJzIG9sbGFtYVJlc3BvbnNlIHN0cmVhbSwgc28gcmVzcG9uc2UgaXMgdm9pZFxuICBnZXRDaGF0SGlzdG9yeTogKGRhdGE6IHsgc2Vzc2lvbklkPzogbnVtYmVyIHwgJ2N1cnJlbnQnIH0pID0+IFByb21pc2U8Q2hhdE1lc3NhZ2VbXT47XG4gIHRyYW5zbGF0ZVRleHQ6IChkYXRhOiB7IHRleHQ6IHN0cmluZzsgdGFyZ2V0TGFuZzogc3RyaW5nIH0pID0+IFByb21pc2U8c3RyaW5nPjtcbiAgZ2V0U2VsZWN0ZWRUZXh0OiAoKSA9PiBQcm9taXNlPHsgdGV4dDogc3RyaW5nIH0gfCBudWxsPjtcbiAgZ2V0UGFnZUluZm86ICgpID0+IFByb21pc2U8UGFnZUluZm8gfCBudWxsPjtcbiAgc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeTogKGRhdGE6IHsgY2FyZERhdGE6IFBhcnRpYWw8Rmxhc2hjYXJkPiB9KSA9PiBQcm9taXNlPEZsYXNoY2FyZCB8IG51bGw+O1xuXG4gIC8vID09IERCIE9wZXJhdGlvbnMgPT1cbiAgZGJFeGVjOiAoZGF0YTogRGJFeGVjUmVxdWVzdCkgPT4gUHJvbWlzZTxhbnk+OyBcbiAgZGJRdWVyeTogKGRhdGE6IERiUXVlcnlSZXF1ZXN0KSA9PiBQcm9taXNlPGFueVtdPjsgXG4gIHF1ZXJ5RGI6IChkYXRhOiB7IHF1ZXJ5OiBzdHJpbmc7IHBhcmFtcz86IGFueVtdIH0pID0+IFByb21pc2U8YW55PjtcblxuICAvLyA9PSBGbGFzaGNhcmQgR2VuZXJhdGlvbiA9PVxuICBnZW5lcmF0ZUZsYXNoY2FyZENvbnRlbnQ6IChkYXRhOiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBzb3VyY2VVcmw6IHN0cmluZyB8IG51bGw7XG4gICAgICBzb3VyY2VMYW5ndWFnZTogc3RyaW5nIHwgbnVsbDtcbiAgICAgIHRhcmdldExhbmd1YWdlOiBzdHJpbmcgfCBudWxsO1xuICB9KSA9PiB2b2lkOyAvLyBGaXJlIGFuZCBmb3JnZXQsIHJlc3VsdCBzZW50IHZpYSBmbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0XG5cbiAgLy8gPT0gT3RoZXIgZXhpc3RpbmcgdHlwZXMgPT1cbiAgc3RyZWFtT2xsYW1hUmVxdWVzdDogKGRhdGE6IHsgcHJvbXB0OiBzdHJpbmc7IGhpc3Rvcnk6IENoYXRNZXNzYWdlW107IGNvbmZpZzogYW55IH0pID0+IHZvaWQ7XG4gIHNhdmVDb25maWd1cmF0aW9uOiAoZGF0YTogeyBjb25maWdKc29uOiBzdHJpbmcgfSkgPT4gUHJvbWlzZTx2b2lkPjsgXG4gIGxvYWRDb25maWd1cmF0aW9uOiAoKSA9PiBQcm9taXNlPGFueT47IC8vIEFzc3VtaW5nIG5vIHJlcXVlc3QgZGF0YVxuXG4gIC8vID09IEludGVybmFsIEJhY2tncm91bmQgPC0+IENvbnRlbnQgU2NyaXB0IENvbW11bmljYXRpb24gPT1cbiAgX3JlcXVlc3RTZWxlY3Rpb25Gcm9tQ29udGVudFNjcmlwdDogKCkgPT4gUHJvbWlzZTx7IHRleHQ6IHN0cmluZyB9IHwgbnVsbD47XG5cbiAgLy8gPT0gT2Zmc2NyZWVuIFBpbmcgKGZvciB0ZXN0aW5nKSA9PVxuICBwaW5nT2Zmc2NyZWVuOiAoKSA9PiBQcm9taXNlPHsgcG9uZzogYm9vbGVhbjsgdGltZXN0YW1wOiBudW1iZXIgfT47XG59XG5cbi8vIFR5cGUgZm9yIHRoZSBtZXNzYWdlIHN0cnVjdHVyZVxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlPFQgZXh0ZW5kcyBrZXlvZiBQcm90b2NvbE1hcD4ge1xuICB0eXBlOiBUO1xuICBkYXRhOiBQcm90b2NvbE1hcFtUXTtcbn1cblxuLy8gQ3JlYXRlIHRoZSB0eXBlZCBtZXNzYWdpbmcgaW5zdGFuY2VcbmNvbnN0IG1lc3NhZ2luZ0luc3RhbmNlID0gZGVmaW5lRXh0ZW5zaW9uTWVzc2FnaW5nPFByb3RvY29sTWFwPigpO1xuXG4vLyBFeHBvcnQgdGhlIHNwZWNpZmljIG1ldGhvZHMgZnJvbSB0aGUgaW5zdGFuY2VcbmV4cG9ydCBjb25zdCBvbk1lc3NhZ2UgPSBtZXNzYWdpbmdJbnN0YW5jZS5vbk1lc3NhZ2U7XG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSBtZXNzYWdpbmdJbnN0YW5jZS5zZW5kTWVzc2FnZTtcblxuLy8gUkVNT1ZFIGNvbmZsaWN0aW5nIHJlLWV4cG9ydFxuLy8gZXhwb3J0IHR5cGUgeyBQcm90b2NvbE1hcCB9OyBcblxuLy8gKioqIEVYUE9SVCBUSElTIFRZUEUgKioqXG5leHBvcnQgdHlwZSBGbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0ID0ge1xuICBmbGFzaGNhcmQ6IHsgZnJvbnQ6IHN0cmluZzsgYmFjazogc3RyaW5nIH07XG4gIGNsb3plOiB7IHRleHQ6IHN0cmluZyB9O1xufSB8IG51bGw7ICIsImNvbnN0IEVfVElNRU9VVCA9IG5ldyBFcnJvcigndGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBtdXRleCB0byBiZWNvbWUgYXZhaWxhYmxlJyk7XG5jb25zdCBFX0FMUkVBRFlfTE9DS0VEID0gbmV3IEVycm9yKCdtdXRleCBhbHJlYWR5IGxvY2tlZCcpO1xuY29uc3QgRV9DQU5DRUxFRCA9IG5ldyBFcnJvcigncmVxdWVzdCBmb3IgbG9jayBjYW5jZWxlZCcpO1xuXG52YXIgX19hd2FpdGVyJDIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNsYXNzIFNlbWFwaG9yZSB7XG4gICAgY29uc3RydWN0b3IoX3ZhbHVlLCBfY2FuY2VsRXJyb3IgPSBFX0NBTkNFTEVEKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gX3ZhbHVlO1xuICAgICAgICB0aGlzLl9jYW5jZWxFcnJvciA9IF9jYW5jZWxFcnJvcjtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzID0gW107XG4gICAgfVxuICAgIGFjcXVpcmUod2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB3ZWlnaHQgJHt3ZWlnaHR9OiBtdXN0IGJlIHBvc2l0aXZlYCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0geyByZXNvbHZlLCByZWplY3QsIHdlaWdodCwgcHJpb3JpdHkgfTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBmaW5kSW5kZXhGcm9tRW5kKHRoaXMuX3F1ZXVlLCAob3RoZXIpID0+IHByaW9yaXR5IDw9IG90aGVyLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSAmJiB3ZWlnaHQgPD0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBOZWVkcyBpbW1lZGlhdGUgZGlzcGF0Y2gsIHNraXAgdGhlIHF1ZXVlXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hJdGVtKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcXVldWUuc3BsaWNlKGkgKyAxLCAwLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkV4Y2x1c2l2ZShjYWxsYmFja18xKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIkMih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChjYWxsYmFjaywgd2VpZ2h0ID0gMSwgcHJpb3JpdHkgPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBbdmFsdWUsIHJlbGVhc2VdID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgd2FpdEZvclVubG9jayh3ZWlnaHQgPSAxLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvdWxkTG9ja0ltbWVkaWF0ZWx5KHdlaWdodCwgcHJpb3JpdHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdID0gW107XG4gICAgICAgICAgICAgICAgaW5zZXJ0U29ydGVkKHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXSwgeyByZXNvbHZlLCBwcmlvcml0eSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzTG9ja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgPD0gMDtcbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hRdWV1ZSgpO1xuICAgIH1cbiAgICByZWxlYXNlKHdlaWdodCA9IDEpIHtcbiAgICAgICAgaWYgKHdlaWdodCA8PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgKz0gd2VpZ2h0O1xuICAgICAgICB0aGlzLl9kaXNwYXRjaFF1ZXVlKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5fcXVldWUuZm9yRWFjaCgoZW50cnkpID0+IGVudHJ5LnJlamVjdCh0aGlzLl9jYW5jZWxFcnJvcikpO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hRdWV1ZSgpIHtcbiAgICAgICAgdGhpcy5fZHJhaW5VbmxvY2tXYWl0ZXJzKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX3F1ZXVlWzBdLndlaWdodCA8PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hJdGVtKHRoaXMuX3F1ZXVlLnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5VbmxvY2tXYWl0ZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Rpc3BhdGNoSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgLT0gaXRlbS53ZWlnaHQ7XG4gICAgICAgIGl0ZW0ucmVzb2x2ZShbcHJldmlvdXNWYWx1ZSwgdGhpcy5fbmV3UmVsZWFzZXIoaXRlbS53ZWlnaHQpXSk7XG4gICAgfVxuICAgIF9uZXdSZWxlYXNlcih3ZWlnaHQpIHtcbiAgICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKHdlaWdodCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIF9kcmFpblVubG9ja1dhaXRlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IHdlaWdodCA9IHRoaXMuX3ZhbHVlOyB3ZWlnaHQgPiAwOyB3ZWlnaHQtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRlcnMgPSB0aGlzLl93ZWlnaHRlZFdhaXRlcnNbd2VpZ2h0IC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKCF3YWl0ZXJzKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB3YWl0ZXJzLmZvckVhY2goKHdhaXRlcikgPT4gd2FpdGVyLnJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRXYWl0ZXJzW3dlaWdodCAtIDFdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBxdWV1ZWRQcmlvcml0eSA9IHRoaXMuX3F1ZXVlWzBdLnByaW9yaXR5O1xuICAgICAgICAgICAgZm9yIChsZXQgd2VpZ2h0ID0gdGhpcy5fdmFsdWU7IHdlaWdodCA+IDA7IHdlaWdodC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdGVycyA9IHRoaXMuX3dlaWdodGVkV2FpdGVyc1t3ZWlnaHQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhaXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB3YWl0ZXJzLmZpbmRJbmRleCgod2FpdGVyKSA9PiB3YWl0ZXIucHJpb3JpdHkgPD0gcXVldWVkUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIChpID09PSAtMSA/IHdhaXRlcnMgOiB3YWl0ZXJzLnNwbGljZSgwLCBpKSlcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHdhaXRlciA9PiB3YWl0ZXIucmVzb2x2ZSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvdWxkTG9ja0ltbWVkaWF0ZWx5KHdlaWdodCwgcHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5fcXVldWVbMF0ucHJpb3JpdHkgPCBwcmlvcml0eSkgJiZcbiAgICAgICAgICAgIHdlaWdodCA8PSB0aGlzLl92YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnNlcnRTb3J0ZWQoYSwgdikge1xuICAgIGNvbnN0IGkgPSBmaW5kSW5kZXhGcm9tRW5kKGEsIChvdGhlcikgPT4gdi5wcmlvcml0eSA8PSBvdGhlci5wcmlvcml0eSk7XG4gICAgYS5zcGxpY2UoaSArIDEsIDAsIHYpO1xufVxuZnVuY3Rpb24gZmluZEluZGV4RnJvbUVuZChhLCBwcmVkaWNhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbnZhciBfX2F3YWl0ZXIkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgTXV0ZXgge1xuICAgIGNvbnN0cnVjdG9yKGNhbmNlbEVycm9yKSB7XG4gICAgICAgIHRoaXMuX3NlbWFwaG9yZSA9IG5ldyBTZW1hcGhvcmUoMSwgY2FuY2VsRXJyb3IpO1xuICAgIH1cbiAgICBhY3F1aXJlKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyJDEodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAocHJpb3JpdHkgPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBbLCByZWxlYXNlcl0gPSB5aWVsZCB0aGlzLl9zZW1hcGhvcmUuYWNxdWlyZSgxLCBwcmlvcml0eSk7XG4gICAgICAgICAgICByZXR1cm4gcmVsZWFzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHByaW9yaXR5ID0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLnJ1bkV4Y2x1c2l2ZSgoKSA9PiBjYWxsYmFjaygpLCAxLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIGlzTG9ja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VtYXBob3JlLmlzTG9ja2VkKCk7XG4gICAgfVxuICAgIHdhaXRGb3JVbmxvY2socHJpb3JpdHkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZW1hcGhvcmUud2FpdEZvclVubG9jaygxLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZW1hcGhvcmUuaXNMb2NrZWQoKSlcbiAgICAgICAgICAgIHRoaXMuX3NlbWFwaG9yZS5yZWxlYXNlKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbWFwaG9yZS5jYW5jZWwoKTtcbiAgICB9XG59XG5cbnZhciBfX2F3YWl0ZXIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHdpdGhUaW1lb3V0KHN5bmMsIHRpbWVvdXQsIHRpbWVvdXRFcnJvciA9IEVfVElNRU9VVCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjcXVpcmU6ICh3ZWlnaHRPclByaW9yaXR5LCBwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgbGV0IHdlaWdodDtcbiAgICAgICAgICAgIGlmIChpc1NlbWFwaG9yZShzeW5jKSkge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSB3ZWlnaHRPclByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlaWdodCAhPT0gdW5kZWZpbmVkICYmIHdlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHdlaWdodCAke3dlaWdodH06IG11c3QgYmUgcG9zaXRpdmVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzVGltZW91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpc1RpbWVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGltZW91dEVycm9yKTtcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXQgPSB5aWVsZCAoaXNTZW1hcGhvcmUoc3luYylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3luYy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN5bmMuYWNxdWlyZShwcmlvcml0eSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxlYXNlID0gQXJyYXkuaXNBcnJheSh0aWNrZXQpID8gdGlja2V0WzFdIDogdGlja2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRpY2tldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBydW5FeGNsdXNpdmUoY2FsbGJhY2ssIHdlaWdodCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlbGVhc2UgPSAoKSA9PiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2V0ID0geWllbGQgdGhpcy5hY3F1aXJlKHdlaWdodCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aWNrZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlID0gdGlja2V0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKHRpY2tldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlID0gdGlja2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsZWFzZSh3ZWlnaHQpIHtcbiAgICAgICAgICAgIHN5bmMucmVsZWFzZSh3ZWlnaHQpO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3luYy5jYW5jZWwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2FpdEZvclVubG9jazogKHdlaWdodE9yUHJpb3JpdHksIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzU2VtYXBob3JlKHN5bmMpKSB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0ID0gd2VpZ2h0T3JQcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHdlaWdodE9yUHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VpZ2h0ICE9PSB1bmRlZmluZWQgJiYgd2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgd2VpZ2h0ICR7d2VpZ2h0fTogbXVzdCBiZSBwb3NpdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdCh0aW1lb3V0RXJyb3IpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAoaXNTZW1hcGhvcmUoc3luYylcbiAgICAgICAgICAgICAgICAgICAgPyBzeW5jLndhaXRGb3JVbmxvY2sod2VpZ2h0LCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgOiBzeW5jLndhaXRGb3JVbmxvY2socHJpb3JpdHkpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBpc0xvY2tlZDogKCkgPT4gc3luYy5pc0xvY2tlZCgpLFxuICAgICAgICBnZXRWYWx1ZTogKCkgPT4gc3luYy5nZXRWYWx1ZSgpLFxuICAgICAgICBzZXRWYWx1ZTogKHZhbHVlKSA9PiBzeW5jLnNldFZhbHVlKHZhbHVlKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNTZW1hcGhvcmUoc3luYykge1xuICAgIHJldHVybiBzeW5jLmdldFZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGlzbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZnVuY3Rpb24gdHJ5QWNxdWlyZShzeW5jLCBhbHJlYWR5QWNxdWlyZWRFcnJvciA9IEVfQUxSRUFEWV9MT0NLRUQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiB3aXRoVGltZW91dChzeW5jLCAwLCBhbHJlYWR5QWNxdWlyZWRFcnJvcik7XG59XG5cbmV4cG9ydCB7IEVfQUxSRUFEWV9MT0NLRUQsIEVfQ0FOQ0VMRUQsIEVfVElNRU9VVCwgTXV0ZXgsIFNlbWFwaG9yZSwgdHJ5QWNxdWlyZSwgd2l0aFRpbWVvdXQgfTtcbiIsInZhciBjPShzPT4oc1tzLk5ldz0wXT1cIk5ld1wiLHNbcy5MZWFybmluZz0xXT1cIkxlYXJuaW5nXCIsc1tzLlJldmlldz0yXT1cIlJldmlld1wiLHNbcy5SZWxlYXJuaW5nPTNdPVwiUmVsZWFybmluZ1wiLHMpKShjfHx7fSksbD0ocz0+KHNbcy5NYW51YWw9MF09XCJNYW51YWxcIixzW3MuQWdhaW49MV09XCJBZ2FpblwiLHNbcy5IYXJkPTJdPVwiSGFyZFwiLHNbcy5Hb29kPTNdPVwiR29vZFwiLHNbcy5FYXN5PTRdPVwiRWFzeVwiLHMpKShsfHx7fSk7Y2xhc3MgaHtzdGF0aWMgY2FyZCh0KXtyZXR1cm57Li4udCxzdGF0ZTpoLnN0YXRlKHQuc3RhdGUpLGR1ZTpoLnRpbWUodC5kdWUpLGxhc3RfcmV2aWV3OnQubGFzdF9yZXZpZXc/aC50aW1lKHQubGFzdF9yZXZpZXcpOnZvaWQgMH19c3RhdGljIHJhdGluZyh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIil7Y29uc3QgZT10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpLGk9dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLHI9bFtgJHtlfSR7aX1gXTtpZihyPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCByYXRpbmc6WyR7dH1dYCk7cmV0dXJuIHJ9ZWxzZSBpZih0eXBlb2YgdD09XCJudW1iZXJcIilyZXR1cm4gdDt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmF0aW5nOlske3R9XWApfXN0YXRpYyBzdGF0ZSh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIil7Y29uc3QgZT10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpLGk9dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLHI9Y1tgJHtlfSR7aX1gXTtpZihyPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdGF0ZTpbJHt0fV1gKTtyZXR1cm4gcn1lbHNlIGlmKHR5cGVvZiB0PT1cIm51bWJlclwiKXJldHVybiB0O3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdGF0ZTpbJHt0fV1gKX1zdGF0aWMgdGltZSh0KXtpZih0eXBlb2YgdD09XCJvYmplY3RcIiYmdCBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIHQ7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpe2NvbnN0IGU9RGF0ZS5wYXJzZSh0KTtpZihpc05hTihlKSl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGF0ZTpbJHt0fV1gKTtyZXR1cm4gbmV3IERhdGUoZSl9ZWxzZSBpZih0eXBlb2YgdD09XCJudW1iZXJcIilyZXR1cm4gbmV3IERhdGUodCk7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRhdGU6WyR7dH1dYCl9c3RhdGljIHJldmlld19sb2codCl7cmV0dXJuey4uLnQsZHVlOmgudGltZSh0LmR1ZSkscmF0aW5nOmgucmF0aW5nKHQucmF0aW5nKSxzdGF0ZTpoLnN0YXRlKHQuc3RhdGUpLHJldmlldzpoLnRpbWUodC5yZXZpZXcpfX19Y29uc3QgWD1cIjQuNy4xXCI7RGF0ZS5wcm90b3R5cGUuc2NoZWR1bGVyPWZ1bmN0aW9uKHMsdCl7cmV0dXJuIEYodGhpcyxzLHQpfSxEYXRlLnByb3RvdHlwZS5kaWZmPWZ1bmN0aW9uKHMsdCl7cmV0dXJuIEwodGhpcyxzLHQpfSxEYXRlLnByb3RvdHlwZS5mb3JtYXQ9ZnVuY3Rpb24oKXtyZXR1cm4gTyh0aGlzKX0sRGF0ZS5wcm90b3R5cGUuZHVlRm9ybWF0PWZ1bmN0aW9uKHMsdCxlKXtyZXR1cm4gaih0aGlzLHMsdCxlKX07ZnVuY3Rpb24gRihzLHQsZSl7cmV0dXJuIG5ldyBEYXRlKGU/aC50aW1lKHMpLmdldFRpbWUoKSt0KjI0KjYwKjYwKjFlMzpoLnRpbWUocykuZ2V0VGltZSgpK3QqNjAqMWUzKX1mdW5jdGlvbiBMKHMsdCxlKXtpZighc3x8IXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlXCIpO2NvbnN0IGk9aC50aW1lKHMpLmdldFRpbWUoKS1oLnRpbWUodCkuZ2V0VGltZSgpO2xldCByPTA7c3dpdGNoKGUpe2Nhc2VcImRheXNcIjpyPU1hdGguZmxvb3IoaS8oMjQqNjAqNjAqMWUzKSk7YnJlYWs7Y2FzZVwibWludXRlc1wiOnI9TWF0aC5mbG9vcihpLyg2MCoxZTMpKTticmVha31yZXR1cm4gcn1mdW5jdGlvbiBPKHMpe2NvbnN0IHQ9aC50aW1lKHMpLGU9dC5nZXRGdWxsWWVhcigpLGk9dC5nZXRNb250aCgpKzEscj10LmdldERhdGUoKSxhPXQuZ2V0SG91cnMoKSxuPXQuZ2V0TWludXRlcygpLGQ9dC5nZXRTZWNvbmRzKCk7cmV0dXJuYCR7ZX0tJHtwKGkpfS0ke3Aocil9ICR7cChhKX06JHtwKG4pfToke3AoZCl9YH1mdW5jdGlvbiBwKHMpe3JldHVybiBzPDEwP2AwJHtzfWA6YCR7c31gfWNvbnN0IFM9WzYwLDYwLDI0LDMxLDEyXSxFPVtcInNlY29uZFwiLFwibWluXCIsXCJob3VyXCIsXCJkYXlcIixcIm1vbnRoXCIsXCJ5ZWFyXCJdO2Z1bmN0aW9uIGoocyx0LGUsaT1FKXtzPWgudGltZShzKSx0PWgudGltZSh0KSxpLmxlbmd0aCE9PUUubGVuZ3RoJiYoaT1FKTtsZXQgcj1zLmdldFRpbWUoKS10LmdldFRpbWUoKSxhO2ZvcihyLz0xZTMsYT0wO2E8Uy5sZW5ndGgmJiEocjxTW2FdKTthKyspci89U1thXTtyZXR1cm5gJHtNYXRoLmZsb29yKHIpfSR7ZT9pW2FdOlwiXCJ9YH1mdW5jdGlvbiBKKHMpe3JldHVybiBoLnRpbWUocyl9ZnVuY3Rpb24gSyhzKXtyZXR1cm4gaC5zdGF0ZShzKX1mdW5jdGlvbiBRKHMpe3JldHVybiBoLnJhdGluZyhzKX1jb25zdCBJPU9iamVjdC5mcmVlemUoW2wuQWdhaW4sbC5IYXJkLGwuR29vZCxsLkVhc3ldKSxaPVt7c3RhcnQ6Mi41LGVuZDo3LGZhY3RvcjouMTV9LHtzdGFydDo3LGVuZDoyMCxmYWN0b3I6LjF9LHtzdGFydDoyMCxlbmQ6MS8wLGZhY3RvcjouMDV9XTtmdW5jdGlvbiBHKHMsdCxlKXtsZXQgaT0xO2Zvcihjb25zdCBuIG9mIFopaSs9bi5mYWN0b3IqTWF0aC5tYXgoTWF0aC5taW4ocyxuLmVuZCktbi5zdGFydCwwKTtzPU1hdGgubWluKHMsZSk7bGV0IHI9TWF0aC5tYXgoMixNYXRoLnJvdW5kKHMtaSkpO2NvbnN0IGE9TWF0aC5taW4oTWF0aC5yb3VuZChzK2kpLGUpO3JldHVybiBzPnQmJihyPU1hdGgubWF4KHIsdCsxKSkscj1NYXRoLm1pbihyLGEpLHttaW5faXZsOnIsbWF4X2l2bDphfX1mdW5jdGlvbiBtKHMsdCxlKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgocyx0KSxlKX1mdW5jdGlvbiBOKHMsdCl7Y29uc3QgZT1EYXRlLlVUQyhzLmdldFVUQ0Z1bGxZZWFyKCkscy5nZXRVVENNb250aCgpLHMuZ2V0VVRDRGF0ZSgpKSxpPURhdGUuVVRDKHQuZ2V0VVRDRnVsbFllYXIoKSx0LmdldFVUQ01vbnRoKCksdC5nZXRVVENEYXRlKCkpO3JldHVybiBNYXRoLmZsb29yKChpLWUpLzg2NGU1KX1jb25zdCBrPS45LEM9MzY1MDAsVD1PYmplY3QuZnJlZXplKFsuNDAyNTUsMS4xODM4NSwzLjE3MywxNS42OTEwNSw3LjE5NDksLjUzNDUsMS40NjA0LC4wMDQ2LDEuNTQ1NzUsLjExOTIsMS4wMTkyNSwxLjkzOTUsLjExLC4yOTYwNSwyLjI2OTgsLjIzMTUsMi45ODk4LC41MTY1NSwuNjYyMV0pLFU9ITEscT0hMCx0dD1gdiR7WH0gdXNpbmcgRlNSUy01LjBgLF89LjAxLGI9MTAwLFI9T2JqZWN0LmZyZWV6ZShbT2JqZWN0LmZyZWV6ZShbXyxiXSksT2JqZWN0LmZyZWV6ZShbXyxiXSksT2JqZWN0LmZyZWV6ZShbXyxiXSksT2JqZWN0LmZyZWV6ZShbXyxiXSksT2JqZWN0LmZyZWV6ZShbMSwxMF0pLE9iamVjdC5mcmVlemUoWy4wMDEsNF0pLE9iamVjdC5mcmVlemUoWy4wMDEsNF0pLE9iamVjdC5mcmVlemUoWy4wMDEsLjc1XSksT2JqZWN0LmZyZWV6ZShbMCw0LjVdKSxPYmplY3QuZnJlZXplKFswLC44XSksT2JqZWN0LmZyZWV6ZShbLjAwMSwzLjVdKSxPYmplY3QuZnJlZXplKFsuMDAxLDVdKSxPYmplY3QuZnJlZXplKFsuMDAxLC4yNV0pLE9iamVjdC5mcmVlemUoWy4wMDEsLjldKSxPYmplY3QuZnJlZXplKFswLDRdKSxPYmplY3QuZnJlZXplKFswLDFdKSxPYmplY3QuZnJlZXplKFsxLDZdKSxPYmplY3QuZnJlZXplKFswLDJdKSxPYmplY3QuZnJlZXplKFswLDJdKV0pLHo9cz0+e2xldCB0PVsuLi5UXTtyZXR1cm4gcz8udyYmKHMudy5sZW5ndGg9PT0xOT90PVsuLi5zLnddOnMudy5sZW5ndGg9PT0xNyYmKHQ9cz8udy5jb25jYXQoWzAsMF0pLHRbNF09Kyh0WzVdKjIrdFs0XSkudG9GaXhlZCg4KSx0WzVdPSsoTWF0aC5sb2codFs1XSozKzEpLzMpLnRvRml4ZWQoOCksdFs2XT0rKHRbNl0rLjUpLnRvRml4ZWQoOCksY29uc29sZS5kZWJ1ZyhcIltGU1JTIFY1XWF1dG8gZmlsbCB3IHRvIDE5IGxlbmd0aFwiKSkpLHQ9dC5tYXAoKGUsaSk9Pm0oZSxSW2ldWzBdLFJbaV1bMV0pKSx7cmVxdWVzdF9yZXRlbnRpb246cz8ucmVxdWVzdF9yZXRlbnRpb258fGssbWF4aW11bV9pbnRlcnZhbDpzPy5tYXhpbXVtX2ludGVydmFsfHxDLHc6dCxlbmFibGVfZnV6ejpzPy5lbmFibGVfZnV6ej8/VSxlbmFibGVfc2hvcnRfdGVybTpzPy5lbmFibGVfc2hvcnRfdGVybT8/cX19O2Z1bmN0aW9uIHYocyx0KXtjb25zdCBlPXtkdWU6cz9oLnRpbWUocyk6bmV3IERhdGUsc3RhYmlsaXR5OjAsZGlmZmljdWx0eTowLGVsYXBzZWRfZGF5czowLHNjaGVkdWxlZF9kYXlzOjAscmVwczowLGxhcHNlczowLHN0YXRlOmMuTmV3LGxhc3RfcmV2aWV3OnZvaWQgMH07cmV0dXJuIHQmJnR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dChlKTplfWNsYXNzIGV0e2M7czA7czE7czI7Y29uc3RydWN0b3IodCl7Y29uc3QgZT1pdCgpO3RoaXMuYz0xLHRoaXMuczA9ZShcIiBcIiksdGhpcy5zMT1lKFwiIFwiKSx0aGlzLnMyPWUoXCIgXCIpLHQ9PW51bGwmJih0PStuZXcgRGF0ZSksdGhpcy5zMC09ZSh0KSx0aGlzLnMwPDAmJih0aGlzLnMwKz0xKSx0aGlzLnMxLT1lKHQpLHRoaXMuczE8MCYmKHRoaXMuczErPTEpLHRoaXMuczItPWUodCksdGhpcy5zMjwwJiYodGhpcy5zMis9MSl9bmV4dCgpe2NvbnN0IHQ9MjA5MTYzOSp0aGlzLnMwK3RoaXMuYyoyMzI4MzA2NDM2NTM4Njk2M2UtMjY7cmV0dXJuIHRoaXMuczA9dGhpcy5zMSx0aGlzLnMxPXRoaXMuczIsdGhpcy5zMj10LSh0aGlzLmM9dHwwKSx0aGlzLnMyfXNldCBzdGF0ZSh0KXt0aGlzLmM9dC5jLHRoaXMuczA9dC5zMCx0aGlzLnMxPXQuczEsdGhpcy5zMj10LnMyfWdldCBzdGF0ZSgpe3JldHVybntjOnRoaXMuYyxzMDp0aGlzLnMwLHMxOnRoaXMuczEsczI6dGhpcy5zMn19fWZ1bmN0aW9uIGl0KCl7bGV0IHM9NDAyMjg3MTE5NztyZXR1cm4gZnVuY3Rpb24odCl7dD1TdHJpbmcodCk7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspe3MrPXQuY2hhckNvZGVBdChlKTtsZXQgaT0uMDI1MTk2MDMyODI0MTY5MzgqcztzPWk+Pj4wLGktPXMsaSo9cyxzPWk+Pj4wLGktPXMscys9aSo0Mjk0OTY3Mjk2fXJldHVybihzPj4+MCkqMjMyODMwNjQzNjUzODY5NjNlLTI2fX1mdW5jdGlvbiBydChzKXtjb25zdCB0PW5ldyBldChzKSxlPSgpPT50Lm5leHQoKTtyZXR1cm4gZS5pbnQzMj0oKT0+dC5uZXh0KCkqNDI5NDk2NzI5NnwwLGUuZG91YmxlPSgpPT5lKCkrKGUoKSoyMDk3MTUyfDApKjExMTAyMjMwMjQ2MjUxNTY1ZS0zMixlLnN0YXRlPSgpPT50LnN0YXRlLGUuaW1wb3J0U3RhdGU9aT0+KHQuc3RhdGU9aSxlKSxlfWNvbnN0ICQ9LS41LEQ9MTkvODE7ZnVuY3Rpb24gUChzLHQpe3JldHVybitNYXRoLnBvdygxK0Qqcy90LCQpLnRvRml4ZWQoOCl9Y2xhc3MgWXtwYXJhbTtpbnRlcnZhbE1vZGlmaWVyO19zZWVkO2NvbnN0cnVjdG9yKHQpe3RoaXMucGFyYW09bmV3IFByb3h5KHoodCksdGhpcy5wYXJhbXNfaGFuZGxlcl9wcm94eSgpKSx0aGlzLmludGVydmFsTW9kaWZpZXI9dGhpcy5jYWxjdWxhdGVfaW50ZXJ2YWxfbW9kaWZpZXIodGhpcy5wYXJhbS5yZXF1ZXN0X3JldGVudGlvbil9Z2V0IGludGVydmFsX21vZGlmaWVyKCl7cmV0dXJuIHRoaXMuaW50ZXJ2YWxNb2RpZmllcn1zZXQgc2VlZCh0KXt0aGlzLl9zZWVkPXR9Y2FsY3VsYXRlX2ludGVydmFsX21vZGlmaWVyKHQpe2lmKHQ8PTB8fHQ+MSl0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0ZWQgcmV0ZW50aW9uIHJhdGUgc2hvdWxkIGJlIGluIHRoZSByYW5nZSAoMCwxXVwiKTtyZXR1cm4rKChNYXRoLnBvdyh0LDEvJCktMSkvRCkudG9GaXhlZCg4KX1nZXQgcGFyYW1ldGVycygpe3JldHVybiB0aGlzLnBhcmFtfXNldCBwYXJhbWV0ZXJzKHQpe3RoaXMudXBkYXRlX3BhcmFtZXRlcnModCl9cGFyYW1zX2hhbmRsZXJfcHJveHkoKXtjb25zdCB0PXRoaXM7cmV0dXJue3NldDpmdW5jdGlvbihlLGkscil7cmV0dXJuIGk9PT1cInJlcXVlc3RfcmV0ZW50aW9uXCImJk51bWJlci5pc0Zpbml0ZShyKSYmKHQuaW50ZXJ2YWxNb2RpZmllcj10LmNhbGN1bGF0ZV9pbnRlcnZhbF9tb2RpZmllcihOdW1iZXIocikpKSxSZWZsZWN0LnNldChlLGksciksITB9fX11cGRhdGVfcGFyYW1ldGVycyh0KXtjb25zdCBlPXoodCk7Zm9yKGNvbnN0IGkgaW4gZSlpZihpIGluIHRoaXMucGFyYW0pe2NvbnN0IHI9aTt0aGlzLnBhcmFtW3JdPWVbcl19fWluaXRfc3RhYmlsaXR5KHQpe3JldHVybiBNYXRoLm1heCh0aGlzLnBhcmFtLndbdC0xXSwuMSl9aW5pdF9kaWZmaWN1bHR5KHQpe3JldHVybiB0aGlzLmNvbnN0cmFpbl9kaWZmaWN1bHR5KHRoaXMucGFyYW0ud1s0XS1NYXRoLmV4cCgodC0xKSp0aGlzLnBhcmFtLndbNV0pKzEpfWFwcGx5X2Z1enoodCxlKXtpZighdGhpcy5wYXJhbS5lbmFibGVfZnV6enx8dDwyLjUpcmV0dXJuIE1hdGgucm91bmQodCk7Y29uc3QgaT1ydCh0aGlzLl9zZWVkKSgpLHttaW5faXZsOnIsbWF4X2l2bDphfT1HKHQsZSx0aGlzLnBhcmFtLm1heGltdW1faW50ZXJ2YWwpO3JldHVybiBNYXRoLmZsb29yKGkqKGEtcisxKStyKX1uZXh0X2ludGVydmFsKHQsZSl7Y29uc3QgaT1NYXRoLm1pbihNYXRoLm1heCgxLE1hdGgucm91bmQodCp0aGlzLmludGVydmFsTW9kaWZpZXIpKSx0aGlzLnBhcmFtLm1heGltdW1faW50ZXJ2YWwpO3JldHVybiB0aGlzLmFwcGx5X2Z1enooaSxlKX1saW5lYXJfZGFtcGluZyh0LGUpe3JldHVybisodCooMTAtZSkvOSkudG9GaXhlZCg4KX1uZXh0X2RpZmZpY3VsdHkodCxlKXtjb25zdCBpPS10aGlzLnBhcmFtLndbNl0qKGUtMykscj10K3RoaXMubGluZWFyX2RhbXBpbmcoaSx0KTtyZXR1cm4gdGhpcy5jb25zdHJhaW5fZGlmZmljdWx0eSh0aGlzLm1lYW5fcmV2ZXJzaW9uKHRoaXMuaW5pdF9kaWZmaWN1bHR5KGwuRWFzeSkscikpfWNvbnN0cmFpbl9kaWZmaWN1bHR5KHQpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heCgrdC50b0ZpeGVkKDgpLDEpLDEwKX1tZWFuX3JldmVyc2lvbih0LGUpe3JldHVybisodGhpcy5wYXJhbS53WzddKnQrKDEtdGhpcy5wYXJhbS53WzddKSplKS50b0ZpeGVkKDgpfW5leHRfcmVjYWxsX3N0YWJpbGl0eSh0LGUsaSxyKXtjb25zdCBhPWwuSGFyZD09PXI/dGhpcy5wYXJhbS53WzE1XToxLG49bC5FYXN5PT09cj90aGlzLnBhcmFtLndbMTZdOjE7cmV0dXJuK20oZSooMStNYXRoLmV4cCh0aGlzLnBhcmFtLndbOF0pKigxMS10KSpNYXRoLnBvdyhlLC10aGlzLnBhcmFtLndbOV0pKihNYXRoLmV4cCgoMS1pKSp0aGlzLnBhcmFtLndbMTBdKS0xKSphKm4pLF8sMzY1MDApLnRvRml4ZWQoOCl9bmV4dF9mb3JnZXRfc3RhYmlsaXR5KHQsZSxpKXtyZXR1cm4rbSh0aGlzLnBhcmFtLndbMTFdKk1hdGgucG93KHQsLXRoaXMucGFyYW0ud1sxMl0pKihNYXRoLnBvdyhlKzEsdGhpcy5wYXJhbS53WzEzXSktMSkqTWF0aC5leHAoKDEtaSkqdGhpcy5wYXJhbS53WzE0XSksXywzNjUwMCkudG9GaXhlZCg4KX1uZXh0X3Nob3J0X3Rlcm1fc3RhYmlsaXR5KHQsZSl7cmV0dXJuK20odCpNYXRoLmV4cCh0aGlzLnBhcmFtLndbMTddKihlLTMrdGhpcy5wYXJhbS53WzE4XSkpLF8sMzY1MDApLnRvRml4ZWQoOCl9Zm9yZ2V0dGluZ19jdXJ2ZT1QO25leHRfc3RhdGUodCxlLGkpe2NvbnN0e2RpZmZpY3VsdHk6cixzdGFiaWxpdHk6YX09dD8/e2RpZmZpY3VsdHk6MCxzdGFiaWxpdHk6MH07aWYoZTwwKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkZWx0YV90IFwiJHtlfVwiYCk7aWYoaTwwfHxpPjQpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGdyYWRlIFwiJHtpfVwiYCk7aWYocj09PTAmJmE9PT0wKXJldHVybntkaWZmaWN1bHR5OnRoaXMuaW5pdF9kaWZmaWN1bHR5KGkpLHN0YWJpbGl0eTp0aGlzLmluaXRfc3RhYmlsaXR5KGkpfTtpZihpPT09MClyZXR1cm57ZGlmZmljdWx0eTpyLHN0YWJpbGl0eTphfTtpZihyPDF8fGE8Xyl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbWVtb3J5IHN0YXRlIHsgZGlmZmljdWx0eTogJHtyfSwgc3RhYmlsaXR5OiAke2F9IH1gKTtjb25zdCBuPXRoaXMuZm9yZ2V0dGluZ19jdXJ2ZShlLGEpLGQ9dGhpcy5uZXh0X3JlY2FsbF9zdGFiaWxpdHkocixhLG4saSksdT10aGlzLm5leHRfZm9yZ2V0X3N0YWJpbGl0eShyLGEsbiksbz10aGlzLm5leHRfc2hvcnRfdGVybV9zdGFiaWxpdHkoYSxpKTtsZXQgZj1kO2lmKGk9PT0xKXtsZXRbeSx3XT1bMCwwXTt0aGlzLnBhcmFtLmVuYWJsZV9zaG9ydF90ZXJtJiYoeT10aGlzLnBhcmFtLndbMTddLHc9dGhpcy5wYXJhbS53WzE4XSk7Y29uc3QgZz1hL01hdGguZXhwKHkqdyk7Zj1tKCtnLnRvRml4ZWQoOCksXyx1KX1yZXR1cm4gZT09PTAmJnRoaXMucGFyYW0uZW5hYmxlX3Nob3J0X3Rlcm0mJihmPW8pLHtkaWZmaWN1bHR5OnRoaXMubmV4dF9kaWZmaWN1bHR5KHIsaSksc3RhYmlsaXR5OmZ9fX1mdW5jdGlvbiBIKCl7Y29uc3Qgcz10aGlzLnJldmlld190aW1lLmdldFRpbWUoKSx0PXRoaXMuY3VycmVudC5yZXBzLGU9dGhpcy5jdXJyZW50LmRpZmZpY3VsdHkqdGhpcy5jdXJyZW50LnN0YWJpbGl0eTtyZXR1cm5gJHtzfV8ke3R9XyR7ZX1gfWZ1bmN0aW9uIGF0KHMpe3JldHVybiBmdW5jdGlvbigpe2NvbnN0IHQ9UmVmbGVjdC5nZXQodGhpcy5jdXJyZW50LHMpPz8wLGU9dGhpcy5jdXJyZW50LnJlcHM7cmV0dXJuIFN0cmluZyh0K2V8fDApfX12YXIgeD0ocz0+KHMuU0NIRURVTEVSPVwiU2NoZWR1bGVyXCIscy5TRUVEPVwiU2VlZFwiLHMpKSh4fHx7fSk7Y2xhc3MgQXtsYXN0O2N1cnJlbnQ7cmV2aWV3X3RpbWU7bmV4dD1uZXcgTWFwO2FsZ29yaXRobTtpbml0U2VlZFN0cmF0ZWd5O2NvbnN0cnVjdG9yKHQsZSxpLHI9e3NlZWQ6SH0pe3RoaXMuYWxnb3JpdGhtPWksdGhpcy5pbml0U2VlZFN0cmF0ZWd5PXIuc2VlZC5iaW5kKHRoaXMpLHRoaXMubGFzdD1oLmNhcmQodCksdGhpcy5jdXJyZW50PWguY2FyZCh0KSx0aGlzLnJldmlld190aW1lPWgudGltZShlKSx0aGlzLmluaXQoKX1pbml0KCl7Y29uc3R7c3RhdGU6dCxsYXN0X3JldmlldzplfT10aGlzLmN1cnJlbnQ7bGV0IGk9MDt0IT09Yy5OZXcmJmUmJihpPU4oZSx0aGlzLnJldmlld190aW1lKSksdGhpcy5jdXJyZW50Lmxhc3RfcmV2aWV3PXRoaXMucmV2aWV3X3RpbWUsdGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cz1pLHRoaXMuY3VycmVudC5yZXBzKz0xLHRoaXMuYWxnb3JpdGhtLnNlZWQ9dGhpcy5pbml0U2VlZFN0cmF0ZWd5KCl9cHJldmlldygpe3JldHVybntbbC5BZ2Fpbl06dGhpcy5yZXZpZXcobC5BZ2FpbiksW2wuSGFyZF06dGhpcy5yZXZpZXcobC5IYXJkKSxbbC5Hb29kXTp0aGlzLnJldmlldyhsLkdvb2QpLFtsLkVhc3ldOnRoaXMucmV2aWV3KGwuRWFzeSksW1N5bWJvbC5pdGVyYXRvcl06dGhpcy5wcmV2aWV3SXRlcmF0b3IuYmluZCh0aGlzKX19KnByZXZpZXdJdGVyYXRvcigpe2Zvcihjb25zdCB0IG9mIEkpeWllbGQgdGhpcy5yZXZpZXcodCl9cmV2aWV3KHQpe2NvbnN0e3N0YXRlOmV9PXRoaXMubGFzdDtsZXQgaTtzd2l0Y2goZSl7Y2FzZSBjLk5ldzppPXRoaXMubmV3U3RhdGUodCk7YnJlYWs7Y2FzZSBjLkxlYXJuaW5nOmNhc2UgYy5SZWxlYXJuaW5nOmk9dGhpcy5sZWFybmluZ1N0YXRlKHQpO2JyZWFrO2Nhc2UgYy5SZXZpZXc6aT10aGlzLnJldmlld1N0YXRlKHQpO2JyZWFrfWlmKGkpcmV0dXJuIGk7dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBncmFkZVwiKX1idWlsZExvZyh0KXtjb25zdHtsYXN0X3JldmlldzplLGR1ZTppLGVsYXBzZWRfZGF5czpyfT10aGlzLmxhc3Q7cmV0dXJue3JhdGluZzp0LHN0YXRlOnRoaXMuY3VycmVudC5zdGF0ZSxkdWU6ZXx8aSxzdGFiaWxpdHk6dGhpcy5jdXJyZW50LnN0YWJpbGl0eSxkaWZmaWN1bHR5OnRoaXMuY3VycmVudC5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czp0aGlzLmN1cnJlbnQuZWxhcHNlZF9kYXlzLGxhc3RfZWxhcHNlZF9kYXlzOnIsc2NoZWR1bGVkX2RheXM6dGhpcy5jdXJyZW50LnNjaGVkdWxlZF9kYXlzLHJldmlldzp0aGlzLnJldmlld190aW1lfX19Y2xhc3MgViBleHRlbmRzIEF7bmV3U3RhdGUodCl7Y29uc3QgZT10aGlzLm5leHQuZ2V0KHQpO2lmKGUpcmV0dXJuIGU7Y29uc3QgaT1oLmNhcmQodGhpcy5jdXJyZW50KTtzd2l0Y2goaS5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLmluaXRfZGlmZmljdWx0eSh0KSxpLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5pbml0X3N0YWJpbGl0eSh0KSx0KXtjYXNlIGwuQWdhaW46aS5zY2hlZHVsZWRfZGF5cz0wLGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKDEpLGkuc3RhdGU9Yy5MZWFybmluZzticmVhaztjYXNlIGwuSGFyZDppLnNjaGVkdWxlZF9kYXlzPTAsaS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoNSksaS5zdGF0ZT1jLkxlYXJuaW5nO2JyZWFrO2Nhc2UgbC5Hb29kOmkuc2NoZWR1bGVkX2RheXM9MCxpLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcigxMCksaS5zdGF0ZT1jLkxlYXJuaW5nO2JyZWFrO2Nhc2UgbC5FYXN5Ontjb25zdCBhPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoaS5zdGFiaWxpdHksdGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cyk7aS5zY2hlZHVsZWRfZGF5cz1hLGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKGEsITApLGkuc3RhdGU9Yy5SZXZpZXc7YnJlYWt9ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyYWRlXCIpfWNvbnN0IHI9e2NhcmQ6aSxsb2c6dGhpcy5idWlsZExvZyh0KX07cmV0dXJuIHRoaXMubmV4dC5zZXQodCxyKSxyfWxlYXJuaW5nU3RhdGUodCl7Y29uc3QgZT10aGlzLm5leHQuZ2V0KHQpO2lmKGUpcmV0dXJuIGU7Y29uc3R7c3RhdGU6aSxkaWZmaWN1bHR5OnIsc3RhYmlsaXR5OmF9PXRoaXMubGFzdCxuPWguY2FyZCh0aGlzLmN1cnJlbnQpLGQ9dGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cztzd2l0Y2gobi5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShyLHQpLG4uc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfc2hvcnRfdGVybV9zdGFiaWxpdHkoYSx0KSx0KXtjYXNlIGwuQWdhaW46e24uc2NoZWR1bGVkX2RheXM9MCxuLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcig1LCExKSxuLnN0YXRlPWk7YnJlYWt9Y2FzZSBsLkhhcmQ6e24uc2NoZWR1bGVkX2RheXM9MCxuLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcigxMCksbi5zdGF0ZT1pO2JyZWFrfWNhc2UgbC5Hb29kOntjb25zdCBvPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwobi5zdGFiaWxpdHksZCk7bi5zY2hlZHVsZWRfZGF5cz1vLG4uZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKG8sITApLG4uc3RhdGU9Yy5SZXZpZXc7YnJlYWt9Y2FzZSBsLkVhc3k6e2NvbnN0IG89dGhpcy5hbGdvcml0aG0ubmV4dF9zaG9ydF90ZXJtX3N0YWJpbGl0eShhLGwuR29vZCksZj10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKG8sZCkseT1NYXRoLm1heCh0aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKG4uc3RhYmlsaXR5LGQpLGYrMSk7bi5zY2hlZHVsZWRfZGF5cz15LG4uZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKHksITApLG4uc3RhdGU9Yy5SZXZpZXc7YnJlYWt9ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdyYWRlXCIpfWNvbnN0IHU9e2NhcmQ6bixsb2c6dGhpcy5idWlsZExvZyh0KX07cmV0dXJuIHRoaXMubmV4dC5zZXQodCx1KSx1fXJldmlld1N0YXRlKHQpe2NvbnN0IGU9dGhpcy5uZXh0LmdldCh0KTtpZihlKXJldHVybiBlO2NvbnN0IGk9dGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cyx7ZGlmZmljdWx0eTpyLHN0YWJpbGl0eTphfT10aGlzLmxhc3Qsbj10aGlzLmFsZ29yaXRobS5mb3JnZXR0aW5nX2N1cnZlKGksYSksZD1oLmNhcmQodGhpcy5jdXJyZW50KSx1PWguY2FyZCh0aGlzLmN1cnJlbnQpLG89aC5jYXJkKHRoaXMuY3VycmVudCksZj1oLmNhcmQodGhpcy5jdXJyZW50KTt0aGlzLm5leHRfZHMoZCx1LG8sZixyLGEsbiksdGhpcy5uZXh0X2ludGVydmFsKGQsdSxvLGYsaSksdGhpcy5uZXh0X3N0YXRlKGQsdSxvLGYpLGQubGFwc2VzKz0xO2NvbnN0IHk9e2NhcmQ6ZCxsb2c6dGhpcy5idWlsZExvZyhsLkFnYWluKX0sdz17Y2FyZDp1LGxvZzpzdXBlci5idWlsZExvZyhsLkhhcmQpfSxnPXtjYXJkOm8sbG9nOnN1cGVyLmJ1aWxkTG9nKGwuR29vZCl9LE09e2NhcmQ6Zixsb2c6c3VwZXIuYnVpbGRMb2cobC5FYXN5KX07cmV0dXJuIHRoaXMubmV4dC5zZXQobC5BZ2Fpbix5KSx0aGlzLm5leHQuc2V0KGwuSGFyZCx3KSx0aGlzLm5leHQuc2V0KGwuR29vZCxnKSx0aGlzLm5leHQuc2V0KGwuRWFzeSxNKSx0aGlzLm5leHQuZ2V0KHQpfW5leHRfZHModCxlLGkscixhLG4sZCl7dC5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLm5leHRfZGlmZmljdWx0eShhLGwuQWdhaW4pO2NvbnN0IHU9bi9NYXRoLmV4cCh0aGlzLmFsZ29yaXRobS5wYXJhbWV0ZXJzLndbMTddKnRoaXMuYWxnb3JpdGhtLnBhcmFtZXRlcnMud1sxOF0pLG89dGhpcy5hbGdvcml0aG0ubmV4dF9mb3JnZXRfc3RhYmlsaXR5KGEsbixkKTt0LnN0YWJpbGl0eT1tKCt1LnRvRml4ZWQoOCksXyxvKSxlLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5IYXJkKSxlLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5IYXJkKSxpLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5Hb29kKSxpLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5Hb29kKSxyLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5FYXN5KSxyLnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5uZXh0X3JlY2FsbF9zdGFiaWxpdHkoYSxuLGQsbC5FYXN5KX1uZXh0X2ludGVydmFsKHQsZSxpLHIsYSl7bGV0IG4sZDtuPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoZS5zdGFiaWxpdHksYSksZD10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKGkuc3RhYmlsaXR5LGEpLG49TWF0aC5taW4obixkKSxkPU1hdGgubWF4KGQsbisxKTtjb25zdCB1PU1hdGgubWF4KHRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoci5zdGFiaWxpdHksYSksZCsxKTt0LnNjaGVkdWxlZF9kYXlzPTAsdC5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoNSksZS5zY2hlZHVsZWRfZGF5cz1uLGUuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKG4sITApLGkuc2NoZWR1bGVkX2RheXM9ZCxpLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihkLCEwKSxyLnNjaGVkdWxlZF9kYXlzPXUsci5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIodSwhMCl9bmV4dF9zdGF0ZSh0LGUsaSxyKXt0LnN0YXRlPWMuUmVsZWFybmluZyxlLnN0YXRlPWMuUmV2aWV3LGkuc3RhdGU9Yy5SZXZpZXcsci5zdGF0ZT1jLlJldmlld319Y2xhc3MgQiBleHRlbmRzIEF7bmV3U3RhdGUodCl7Y29uc3QgZT10aGlzLm5leHQuZ2V0KHQpO2lmKGUpcmV0dXJuIGU7dGhpcy5jdXJyZW50LnNjaGVkdWxlZF9kYXlzPTAsdGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cz0wO2NvbnN0IGk9aC5jYXJkKHRoaXMuY3VycmVudCkscj1oLmNhcmQodGhpcy5jdXJyZW50KSxhPWguY2FyZCh0aGlzLmN1cnJlbnQpLG49aC5jYXJkKHRoaXMuY3VycmVudCk7cmV0dXJuIHRoaXMuaW5pdF9kcyhpLHIsYSxuKSx0aGlzLm5leHRfaW50ZXJ2YWwoaSxyLGEsbiwwKSx0aGlzLm5leHRfc3RhdGUoaSxyLGEsbiksdGhpcy51cGRhdGVfbmV4dChpLHIsYSxuKSx0aGlzLm5leHQuZ2V0KHQpfWluaXRfZHModCxlLGkscil7dC5kaWZmaWN1bHR5PXRoaXMuYWxnb3JpdGhtLmluaXRfZGlmZmljdWx0eShsLkFnYWluKSx0LnN0YWJpbGl0eT10aGlzLmFsZ29yaXRobS5pbml0X3N0YWJpbGl0eShsLkFnYWluKSxlLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9kaWZmaWN1bHR5KGwuSGFyZCksZS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9zdGFiaWxpdHkobC5IYXJkKSxpLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9kaWZmaWN1bHR5KGwuR29vZCksaS5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9zdGFiaWxpdHkobC5Hb29kKSxyLmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9kaWZmaWN1bHR5KGwuRWFzeSksci5zdGFiaWxpdHk9dGhpcy5hbGdvcml0aG0uaW5pdF9zdGFiaWxpdHkobC5FYXN5KX1sZWFybmluZ1N0YXRlKHQpe3JldHVybiB0aGlzLnJldmlld1N0YXRlKHQpfXJldmlld1N0YXRlKHQpe2NvbnN0IGU9dGhpcy5uZXh0LmdldCh0KTtpZihlKXJldHVybiBlO2NvbnN0IGk9dGhpcy5jdXJyZW50LmVsYXBzZWRfZGF5cyx7ZGlmZmljdWx0eTpyLHN0YWJpbGl0eTphfT10aGlzLmxhc3Qsbj10aGlzLmFsZ29yaXRobS5mb3JnZXR0aW5nX2N1cnZlKGksYSksZD1oLmNhcmQodGhpcy5jdXJyZW50KSx1PWguY2FyZCh0aGlzLmN1cnJlbnQpLG89aC5jYXJkKHRoaXMuY3VycmVudCksZj1oLmNhcmQodGhpcy5jdXJyZW50KTtyZXR1cm4gdGhpcy5uZXh0X2RzKGQsdSxvLGYscixhLG4pLHRoaXMubmV4dF9pbnRlcnZhbChkLHUsbyxmLGkpLHRoaXMubmV4dF9zdGF0ZShkLHUsbyxmKSxkLmxhcHNlcys9MSx0aGlzLnVwZGF0ZV9uZXh0KGQsdSxvLGYpLHRoaXMubmV4dC5nZXQodCl9bmV4dF9kcyh0LGUsaSxyLGEsbixkKXt0LmRpZmZpY3VsdHk9dGhpcy5hbGdvcml0aG0ubmV4dF9kaWZmaWN1bHR5KGEsbC5BZ2Fpbik7Y29uc3QgdT10aGlzLmFsZ29yaXRobS5uZXh0X2ZvcmdldF9zdGFiaWxpdHkoYSxuLGQpO3Quc3RhYmlsaXR5PW0obixfLHUpLGUuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkhhcmQpLGUuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkhhcmQpLGkuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkdvb2QpLGkuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkdvb2QpLHIuZGlmZmljdWx0eT10aGlzLmFsZ29yaXRobS5uZXh0X2RpZmZpY3VsdHkoYSxsLkVhc3kpLHIuc3RhYmlsaXR5PXRoaXMuYWxnb3JpdGhtLm5leHRfcmVjYWxsX3N0YWJpbGl0eShhLG4sZCxsLkVhc3kpfW5leHRfaW50ZXJ2YWwodCxlLGkscixhKXtsZXQgbixkLHUsbztuPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwodC5zdGFiaWxpdHksYSksZD10aGlzLmFsZ29yaXRobS5uZXh0X2ludGVydmFsKGUuc3RhYmlsaXR5LGEpLHU9dGhpcy5hbGdvcml0aG0ubmV4dF9pbnRlcnZhbChpLnN0YWJpbGl0eSxhKSxvPXRoaXMuYWxnb3JpdGhtLm5leHRfaW50ZXJ2YWwoci5zdGFiaWxpdHksYSksbj1NYXRoLm1pbihuLGQpLGQ9TWF0aC5tYXgoZCxuKzEpLHU9TWF0aC5tYXgodSxkKzEpLG89TWF0aC5tYXgobyx1KzEpLHQuc2NoZWR1bGVkX2RheXM9bix0LmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihuLCEwKSxlLnNjaGVkdWxlZF9kYXlzPWQsZS5kdWU9dGhpcy5yZXZpZXdfdGltZS5zY2hlZHVsZXIoZCwhMCksaS5zY2hlZHVsZWRfZGF5cz11LGkuZHVlPXRoaXMucmV2aWV3X3RpbWUuc2NoZWR1bGVyKHUsITApLHIuc2NoZWR1bGVkX2RheXM9byxyLmR1ZT10aGlzLnJldmlld190aW1lLnNjaGVkdWxlcihvLCEwKX1uZXh0X3N0YXRlKHQsZSxpLHIpe3Quc3RhdGU9Yy5SZXZpZXcsZS5zdGF0ZT1jLlJldmlldyxpLnN0YXRlPWMuUmV2aWV3LHIuc3RhdGU9Yy5SZXZpZXd9dXBkYXRlX25leHQodCxlLGkscil7Y29uc3QgYT17Y2FyZDp0LGxvZzp0aGlzLmJ1aWxkTG9nKGwuQWdhaW4pfSxuPXtjYXJkOmUsbG9nOnN1cGVyLmJ1aWxkTG9nKGwuSGFyZCl9LGQ9e2NhcmQ6aSxsb2c6c3VwZXIuYnVpbGRMb2cobC5Hb29kKX0sdT17Y2FyZDpyLGxvZzpzdXBlci5idWlsZExvZyhsLkVhc3kpfTt0aGlzLm5leHQuc2V0KGwuQWdhaW4sYSksdGhpcy5uZXh0LnNldChsLkhhcmQsbiksdGhpcy5uZXh0LnNldChsLkdvb2QsZCksdGhpcy5uZXh0LnNldChsLkVhc3ksdSl9fWNsYXNzIHN0e2ZzcnM7Y29uc3RydWN0b3IodCl7dGhpcy5mc3JzPXR9cmVwbGF5KHQsZSxpKXtyZXR1cm4gdGhpcy5mc3JzLm5leHQodCxlLGkpfWhhbmRsZU1hbnVhbFJhdGluZyh0LGUsaSxyLGEsbixkKXtpZih0eXBlb2YgZT5cInVcIil0aHJvdyBuZXcgRXJyb3IoXCJyZXNjaGVkdWxlOiBzdGF0ZSBpcyByZXF1aXJlZCBmb3IgbWFudWFsIHJhdGluZ1wiKTtsZXQgdSxvO2lmKGU9PT1jLk5ldyl1PXtyYXRpbmc6bC5NYW51YWwsc3RhdGU6ZSxkdWU6ZD8/aSxzdGFiaWxpdHk6dC5zdGFiaWxpdHksZGlmZmljdWx0eTp0LmRpZmZpY3VsdHksZWxhcHNlZF9kYXlzOnIsbGFzdF9lbGFwc2VkX2RheXM6dC5lbGFwc2VkX2RheXMsc2NoZWR1bGVkX2RheXM6dC5zY2hlZHVsZWRfZGF5cyxyZXZpZXc6aX0sbz12KGkpLG8ubGFzdF9yZXZpZXc9aTtlbHNle2lmKHR5cGVvZiBkPlwidVwiKXRocm93IG5ldyBFcnJvcihcInJlc2NoZWR1bGU6IGR1ZSBpcyByZXF1aXJlZCBmb3IgbWFudWFsIHJhdGluZ1wiKTtjb25zdCBmPWQuZGlmZihpLFwiZGF5c1wiKTt1PXtyYXRpbmc6bC5NYW51YWwsc3RhdGU6dC5zdGF0ZSxkdWU6dC5sYXN0X3Jldmlld3x8dC5kdWUsc3RhYmlsaXR5OnQuc3RhYmlsaXR5LGRpZmZpY3VsdHk6dC5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czpyLGxhc3RfZWxhcHNlZF9kYXlzOnQuZWxhcHNlZF9kYXlzLHNjaGVkdWxlZF9kYXlzOnQuc2NoZWR1bGVkX2RheXMscmV2aWV3Oml9LG89ey4uLnQsc3RhdGU6ZSxkdWU6ZCxsYXN0X3JldmlldzppLHN0YWJpbGl0eTphfHx0LnN0YWJpbGl0eSxkaWZmaWN1bHR5Om58fHQuZGlmZmljdWx0eSxlbGFwc2VkX2RheXM6cixzY2hlZHVsZWRfZGF5czpmLHJlcHM6dC5yZXBzKzF9fXJldHVybntjYXJkOm8sbG9nOnV9fXJlc2NoZWR1bGUodCxlKXtjb25zdCBpPVtdO2xldCByPXYodC5kdWUpO2Zvcihjb25zdCBhIG9mIGUpe2xldCBuO2lmKGEucmV2aWV3PWgudGltZShhLnJldmlldyksYS5yYXRpbmc9PT1sLk1hbnVhbCl7bGV0IGQ9MDtyLnN0YXRlIT09Yy5OZXcmJnIubGFzdF9yZXZpZXcmJihkPWEucmV2aWV3LmRpZmYoci5sYXN0X3JldmlldyxcImRheXNcIikpLG49dGhpcy5oYW5kbGVNYW51YWxSYXRpbmcocixhLnN0YXRlLGEucmV2aWV3LGQsYS5zdGFiaWxpdHksYS5kaWZmaWN1bHR5LGEuZHVlP2gudGltZShhLmR1ZSk6dm9pZCAwKX1lbHNlIG49dGhpcy5yZXBsYXkocixhLnJldmlldyxhLnJhdGluZyk7aS5wdXNoKG4pLHI9bi5jYXJkfXJldHVybiBpfWNhbGN1bGF0ZU1hbnVhbFJlY29yZCh0LGUsaSxyKXtpZighaSlyZXR1cm4gbnVsbDtjb25zdHtjYXJkOmEsbG9nOm59PWksZD1oLmNhcmQodCk7cmV0dXJuIGQuZHVlLmdldFRpbWUoKT09PWEuZHVlLmdldFRpbWUoKT9udWxsOihkLnNjaGVkdWxlZF9kYXlzPWEuZHVlLmRpZmYoZC5kdWUsXCJkYXlzXCIpLHRoaXMuaGFuZGxlTWFudWFsUmF0aW5nKGQsYS5zdGF0ZSxoLnRpbWUoZSksbi5lbGFwc2VkX2RheXMscj9hLnN0YWJpbGl0eTp2b2lkIDAscj9hLmRpZmZpY3VsdHk6dm9pZCAwLGEuZHVlKSl9fWNsYXNzIFcgZXh0ZW5kcyBZe3N0cmF0ZWd5SGFuZGxlcj1uZXcgTWFwO1NjaGVkdWxlcjtjb25zdHJ1Y3Rvcih0KXtzdXBlcih0KTtjb25zdHtlbmFibGVfc2hvcnRfdGVybTplfT10aGlzLnBhcmFtZXRlcnM7dGhpcy5TY2hlZHVsZXI9ZT9WOkJ9cGFyYW1zX2hhbmRsZXJfcHJveHkoKXtjb25zdCB0PXRoaXM7cmV0dXJue3NldDpmdW5jdGlvbihlLGkscil7cmV0dXJuIGk9PT1cInJlcXVlc3RfcmV0ZW50aW9uXCImJk51bWJlci5pc0Zpbml0ZShyKT90LmludGVydmFsTW9kaWZpZXI9dC5jYWxjdWxhdGVfaW50ZXJ2YWxfbW9kaWZpZXIoTnVtYmVyKHIpKTppPT09XCJlbmFibGVfc2hvcnRfdGVybVwiJiYodC5TY2hlZHVsZXI9cj09PSEwP1Y6QiksUmVmbGVjdC5zZXQoZSxpLHIpLCEwfX19dXNlU3RyYXRlZ3kodCxlKXtyZXR1cm4gdGhpcy5zdHJhdGVneUhhbmRsZXIuc2V0KHQsZSksdGhpc31jbGVhclN0cmF0ZWd5KHQpe3JldHVybiB0P3RoaXMuc3RyYXRlZ3lIYW5kbGVyLmRlbGV0ZSh0KTp0aGlzLnN0cmF0ZWd5SGFuZGxlci5jbGVhcigpLHRoaXN9Z2V0U2NoZWR1bGVyKHQsZSl7Y29uc3QgaT10aGlzLnN0cmF0ZWd5SGFuZGxlci5nZXQoeC5TRUVEKSxyPXRoaXMuc3RyYXRlZ3lIYW5kbGVyLmdldCh4LlNDSEVEVUxFUil8fHRoaXMuU2NoZWR1bGVyLGE9aXx8SDtyZXR1cm4gbmV3IHIodCxlLHRoaXMse3NlZWQ6YX0pfXJlcGVhdCh0LGUsaSl7Y29uc3Qgcj10aGlzLmdldFNjaGVkdWxlcih0LGUpLnByZXZpZXcoKTtyZXR1cm4gaSYmdHlwZW9mIGk9PVwiZnVuY3Rpb25cIj9pKHIpOnJ9bmV4dCh0LGUsaSxyKXtjb25zdCBhPXRoaXMuZ2V0U2NoZWR1bGVyKHQsZSksbj1oLnJhdGluZyhpKTtpZihuPT09bC5NYW51YWwpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJldmlldyBhIG1hbnVhbCByYXRpbmdcIik7Y29uc3QgZD1hLnJldmlldyhuKTtyZXR1cm4gciYmdHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yKGQpOmR9Z2V0X3JldHJpZXZhYmlsaXR5KHQsZSxpPSEwKXtjb25zdCByPWguY2FyZCh0KTtlPWU/aC50aW1lKGUpOm5ldyBEYXRlO2NvbnN0IGE9ci5zdGF0ZSE9PWMuTmV3P01hdGgubWF4KGUuZGlmZihyLmxhc3RfcmV2aWV3LFwiZGF5c1wiKSwwKTowLG49ci5zdGF0ZSE9PWMuTmV3P3RoaXMuZm9yZ2V0dGluZ19jdXJ2ZShhLCtyLnN0YWJpbGl0eS50b0ZpeGVkKDgpKTowO3JldHVybiBpP2AkeyhuKjEwMCkudG9GaXhlZCgyKX0lYDpufXJvbGxiYWNrKHQsZSxpKXtjb25zdCByPWguY2FyZCh0KSxhPWgucmV2aWV3X2xvZyhlKTtpZihhLnJhdGluZz09PWwuTWFudWFsKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByb2xsYmFjayBhIG1hbnVhbCByYXRpbmdcIik7bGV0IG4sZCx1O3N3aXRjaChhLnN0YXRlKXtjYXNlIGMuTmV3Om49YS5kdWUsZD12b2lkIDAsdT0wO2JyZWFrO2Nhc2UgYy5MZWFybmluZzpjYXNlIGMuUmVsZWFybmluZzpjYXNlIGMuUmV2aWV3Om49YS5yZXZpZXcsZD1hLmR1ZSx1PXIubGFwc2VzLShhLnJhdGluZz09PWwuQWdhaW4mJmEuc3RhdGU9PT1jLlJldmlldz8xOjApO2JyZWFrfWNvbnN0IG89ey4uLnIsZHVlOm4sc3RhYmlsaXR5OmEuc3RhYmlsaXR5LGRpZmZpY3VsdHk6YS5kaWZmaWN1bHR5LGVsYXBzZWRfZGF5czphLmxhc3RfZWxhcHNlZF9kYXlzLHNjaGVkdWxlZF9kYXlzOmEuc2NoZWR1bGVkX2RheXMscmVwczpNYXRoLm1heCgwLHIucmVwcy0xKSxsYXBzZXM6TWF0aC5tYXgoMCx1KSxzdGF0ZTphLnN0YXRlLGxhc3RfcmV2aWV3OmR9O3JldHVybiBpJiZ0eXBlb2YgaT09XCJmdW5jdGlvblwiP2kobyk6b31mb3JnZXQodCxlLGk9ITEscil7Y29uc3QgYT1oLmNhcmQodCk7ZT1oLnRpbWUoZSk7Y29uc3Qgbj1hLnN0YXRlPT09Yy5OZXc/MDplLmRpZmYoYS5sYXN0X3JldmlldyxcImRheXNcIiksZD17cmF0aW5nOmwuTWFudWFsLHN0YXRlOmEuc3RhdGUsZHVlOmEuZHVlLHN0YWJpbGl0eTphLnN0YWJpbGl0eSxkaWZmaWN1bHR5OmEuZGlmZmljdWx0eSxlbGFwc2VkX2RheXM6MCxsYXN0X2VsYXBzZWRfZGF5czphLmVsYXBzZWRfZGF5cyxzY2hlZHVsZWRfZGF5czpuLHJldmlldzplfSx1PXtjYXJkOnsuLi5hLGR1ZTplLHN0YWJpbGl0eTowLGRpZmZpY3VsdHk6MCxlbGFwc2VkX2RheXM6MCxzY2hlZHVsZWRfZGF5czowLHJlcHM6aT8wOmEucmVwcyxsYXBzZXM6aT8wOmEubGFwc2VzLHN0YXRlOmMuTmV3LGxhc3RfcmV2aWV3OmEubGFzdF9yZXZpZXd9LGxvZzpkfTtyZXR1cm4gciYmdHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yKHUpOnV9cmVzY2hlZHVsZSh0LGU9W10saT17fSl7Y29uc3R7cmVjb3JkTG9nSGFuZGxlcjpyLHJldmlld3NPcmRlckJ5OmEsc2tpcE1hbnVhbDpuPSEwLG5vdzpkPW5ldyBEYXRlLHVwZGF0ZV9tZW1vcnlfc3RhdGU6dT0hMX09aTthJiZ0eXBlb2YgYT09XCJmdW5jdGlvblwiJiZlLnNvcnQoYSksbiYmKGU9ZS5maWx0ZXIoTT0+TS5yYXRpbmchPT1sLk1hbnVhbCkpO2NvbnN0IG89bmV3IHN0KHRoaXMpLGY9by5yZXNjaGVkdWxlKGkuZmlyc3RfY2FyZHx8digpLGUpLHk9Zi5sZW5ndGgsdz1oLmNhcmQodCksZz1vLmNhbGN1bGF0ZU1hbnVhbFJlY29yZCh3LGQseT9mW3ktMV06dm9pZCAwLHUpO3JldHVybiByJiZ0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3tjb2xsZWN0aW9uczpmLm1hcChyKSxyZXNjaGVkdWxlX2l0ZW06Zz9yKGcpOm51bGx9Ontjb2xsZWN0aW9uczpmLHJlc2NoZWR1bGVfaXRlbTpnfX19Y29uc3QgbnQ9cz0+bmV3IFcoc3x8e30pO2V4cG9ydHtBIGFzIEFic3RyYWN0U2NoZWR1bGVyLFIgYXMgQ0xBTVBfUEFSQU1FVEVSUywkIGFzIERFQ0FZLEggYXMgRGVmYXVsdEluaXRTZWVkU3RyYXRlZ3ksRCBhcyBGQUNUT1IsVyBhcyBGU1JTLFkgYXMgRlNSU0FsZ29yaXRobSx0dCBhcyBGU1JTVmVyc2lvbixhdCBhcyBHZW5TZWVkU3RyYXRlZ3lXaXRoQ2FyZElkLEkgYXMgR3JhZGVzLGIgYXMgSU5JVF9TX01BWCxsIGFzIFJhdGluZyxfIGFzIFNfTUlOLGMgYXMgU3RhdGUseCBhcyBTdHJhdGVneU1vZGUsaCBhcyBUeXBlQ29udmVydCxtIGFzIGNsYW1wLHYgYXMgY3JlYXRlRW1wdHlDYXJkLE4gYXMgZGF0ZURpZmZJbkRheXMsTCBhcyBkYXRlX2RpZmYsRiBhcyBkYXRlX3NjaGVkdWxlcixVIGFzIGRlZmF1bHRfZW5hYmxlX2Z1enoscSBhcyBkZWZhdWx0X2VuYWJsZV9zaG9ydF90ZXJtLEMgYXMgZGVmYXVsdF9tYXhpbXVtX2ludGVydmFsLGsgYXMgZGVmYXVsdF9yZXF1ZXN0X3JldGVudGlvbixUIGFzIGRlZmF1bHRfdyxKIGFzIGZpeERhdGUsUSBhcyBmaXhSYXRpbmcsSyBhcyBmaXhTdGF0ZSxQIGFzIGZvcmdldHRpbmdfY3VydmUsTyBhcyBmb3JtYXREYXRlLG50IGFzIGZzcnMseiBhcyBnZW5lcmF0b3JQYXJhbWV0ZXJzLEcgYXMgZ2V0X2Z1enpfcmFuZ2UsaiBhcyBzaG93X2RpZmZfbWVzc2FnZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImNocm9tZVwiIC8+IFxuXG5pbXBvcnQgeyBNdXRleCB9IGZyb20gJ2FzeW5jLW11dGV4JztcbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnaW5nJzsgXG5pbXBvcnQgeyBTdGF0ZSwgY3JlYXRlRW1wdHlDYXJkLCBDYXJkIGFzIEZTUlNDYXJkIH0gZnJvbSAndHMtZnNycyc7XG5pbXBvcnQgeyBCb29rbWFyaywgRmxhc2hjYXJkLCBDaGF0TWVzc2FnZURiLCBDaGF0SGlzdG9yeUl0ZW0gfSBmcm9tICcuLi9zcmMvdHlwZXMvZGInOyAvLyBJbXBvcnQgREIgdHlwZXNcblxuY29uc3QgT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEggPSAnb2Zmc2NyZWVuLmh0bWwnO1xubGV0IGNyZWF0aW5nUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsO1xuY29uc3QgY3JlYXRpb25NdXRleCA9IG5ldyBNdXRleCgpO1xuXG4vLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgb2Zmc2NyZWVuIGRvY3VtZW50IGV4aXN0cyBhbmQgY3JlYXRlIGl0IGlmIG5vdFxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlT2Zmc2NyZWVuRG9jdW1lbnQoKSB7XG4gIC8vIFVzZSBhIG11dGV4IHRvIHByZXZlbnQgbXVsdGlwbGUgY29uY3VycmVudCBjcmVhdGlvbiBhdHRlbXB0c1xuICBjb25zdCByZWxlYXNlID0gYXdhaXQgY3JlYXRpb25NdXRleC5hY3F1aXJlKCk7XG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGRvY3VtZW50IGFscmVhZHkgZXhpc3RzLlxuICAgICBjb25zdCBleGlzdGluZ0NvbnRleHRzID0gYXdhaXQgYnJvd3Nlci5ydW50aW1lLmdldENvbnRleHRzKHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIENvbnRleHRUeXBlIG1pZ2h0IGJlIG1pc3NpbmcgT0ZGU0NSRUVOX0RPQ1VNRU5UIGluIG9sZGVyIHR5cGVzXG4gICAgICAgIGNvbnRleHRUeXBlczogWydPRkZTQ1JFRU5fRE9DVU1FTlQnIGFzIGJyb3dzZXIuUnVudGltZS5Db250ZXh0VHlwZV0sXG4gICAgICAgIGRvY3VtZW50VXJsczogW2Jyb3dzZXIucnVudGltZS5nZXRVUkwoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpXSxcbiAgICAgIH0pO1xuXG4gICAgaWYgKGV4aXN0aW5nQ29udGV4dHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ1tEQiBVdGlsXSBPZmZzY3JlZW4gZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuJyk7IC8vIExlc3MgdmVyYm9zZVxuICAgICAgcmV0dXJuOyAvLyBBbHJlYWR5IGV4aXN0cywgd2UncmUgZ29vZC5cbiAgICB9XG5cbiAgICAvLyBJZiBjcmVhdGlvbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzLCB3YWl0IGZvciBpdCB0byBjb21wbGV0ZS5cbiAgICBpZiAoY3JlYXRpbmdQcm9taXNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnW0RCIFV0aWxdIFdhaXRpbmcgZm9yIGV4aXN0aW5nIG9mZnNjcmVlbiBkb2N1bWVudCBjcmVhdGlvbi4uLicpO1xuICAgICAgYXdhaXQgY3JlYXRpbmdQcm9taXNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gQ3JlYXRpbmcgb2Zmc2NyZWVuIGRvY3VtZW50Li4uJyk7XG4gICAgY3JlYXRpbmdQcm9taXNlID0gY2hyb21lLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7IC8vIFVzZSBuYXRpdmUgY2hyb21lIEFQSVxuICAgICAgdXJsOiBPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCxcbiAgICAgIHJlYXNvbnM6IFsnRE9NX1BBUlNFUicgYXMgY2hyb21lLm9mZnNjcmVlbi5SZWFzb25dLCBcbiAgICAgIGp1c3RpZmljYXRpb246ICdQcm92aWRlcyBQR2xpdGUgZGF0YWJhc2Ugb3BlcmF0aW9ucy4nLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNyZWF0aW5nUHJvbWlzZTtcbiAgICAgIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gT2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tEQiBVdGlsXSBFcnJvciBjcmVhdGluZyBvZmZzY3JlZW4gZG9jdW1lbnQ6JywgZXJyb3IpO1xuICAgICAgLy8gRG91YmxlLWNoZWNrIGlmIGl0IGV4aXN0cyBub3csIG1heWJlIGNyZWF0aW9uIHN1Y2NlZWRlZCBkZXNwaXRlIGVycm9yP1xuICAgICAgY29uc3QgY29udGV4dHNBZnRlckVycm9yID0gYXdhaXQgYnJvd3Nlci5ydW50aW1lLmdldENvbnRleHRzKHtcbiAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgIGNvbnRleHRUeXBlczogWydPRkZTQ1JFRU5fRE9DVU1FTlQnIGFzIGJyb3dzZXIuUnVudGltZS5Db250ZXh0VHlwZV0sXG4gICAgICAgICBkb2N1bWVudFVybHM6IFticm93c2VyLnJ1bnRpbWUuZ2V0VVJMKE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKV0sXG4gICAgICAgfSk7XG4gICAgICAgaWYgKGNvbnRleHRzQWZ0ZXJFcnJvci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgIC8vIE9ubHkgdGhyb3cgaWYgaXQgdHJ1bHkgZmFpbGVkIGFuZCBkb2Vzbid0IGV4aXN0XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9mZnNjcmVlbiBkb2N1bWVudCBjcmVhdGlvbiBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICB9XG4gICAgICAgIGNvbnNvbGUud2FybignW0RCIFV0aWxdIE9mZnNjcmVlbiBkb2N1bWVudCBleGlzdGVkIGRlc3BpdGUgY3JlYXRpb24gZXJyb3IvcmFjZSBjb25kaXRpb24uJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIFJlc2V0IHRoZSBwcm9taXNlIHdoZXRoZXIgaXQgc3VjY2VlZGVkIG9yIGZhaWxlZFxuICAgICAgY3JlYXRpbmdQcm9taXNlID0gbnVsbDsgXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIC8vIFJlbGVhc2UgdGhlIG11dGV4XG4gICAgcmVsZWFzZSgpO1xuICB9XG59XG5cbi8vIEV4cG9ydCBmdW5jdGlvbnMgdGhhdCBtaXJyb3IgUEdsaXRlIG1ldGhvZHMgdmlhIEB3ZWJleHQtY29yZS9tZXNzYWdpbmdcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjRGIoc3FsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBhd2FpdCBlbnN1cmVPZmZzY3JlZW5Eb2N1bWVudCgpO1xuICAvLyBjb25zb2xlLmxvZygnW0RCIFV0aWxdIFNlbmRpbmcgZGJFeGVjIG1lc3NhZ2U6JywgeyBzcWwgfSk7IC8vIExlc3MgdmVyYm9zZVxuICAvLyBQR2xpdGUgZXhlYyBkb2Vzbid0IHN1cHBvcnQgcGFyYW1zLCBzbyB3ZSBvbmx5IHNlbmQgc3FsXG4gIHJldHVybiBzZW5kTWVzc2FnZSgnZGJFeGVjJywgeyBzcWwgfSk7IFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlcnlEYihzcWw6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueVtdPiB7XG4gIGF3YWl0IGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCk7XG4gIC8vIGNvbnNvbGUubG9nKCdbREIgVXRpbF0gU2VuZGluZyBkYlF1ZXJ5IG1lc3NhZ2U6JywgeyBzcWwsIHBhcmFtcyB9KTsgLy8gTGVzcyB2ZXJib3NlXG4gIHJldHVybiBzZW5kTWVzc2FnZSgnZGJRdWVyeScsIHsgc3FsLCBwYXJhbXM6IHBhcmFtcyB8fCBbXSB9KTsgXG59XG5cbi8vIC0tLSBEYXRhYmFzZSBJbnRlcmFjdGlvbiBGdW5jdGlvbnMgLS0tXG5cbi8qKlxuICogU2F2ZXMgYSBib29rbWFyayB0byB0aGUgZGF0YWJhc2UuXG4gKiBcbiAqIEBwYXJhbSBib29rbWFya0RhdGEgUGFydGlhbCBib29rbWFyayBkYXRhICh1cmwgaXMgcmVxdWlyZWQpXG4gKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBCb29rbWFyayBvYmplY3Qgd2l0aCBpdHMgSURcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJvb2ttYXJrKGJvb2ttYXJrRGF0YTogUGljazxCb29rbWFyaywgJ3VybCc+ICYgUGFydGlhbDxPbWl0PEJvb2ttYXJrLCAnaWQnIHwgJ3NhdmVkX2F0Jz4gPik6IFByb21pc2U8Qm9va21hcms+IHtcbiAgICBjb25zdCBzcWwgPSBgXG4gICAgICAgIElOU0VSVCBJTlRPIGJvb2ttYXJrcyAodXJsLCB0aXRsZSwgdGFncywgZW1iZWRkaW5nKVxuICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0KVxuICAgICAgICBSRVRVUk5JTkcgaWQsIHVybCwgdGl0bGUsIHNhdmVkX2F0LCB0YWdzLCBlbWJlZGRpbmc7XG4gICAgYDtcbiAgICAvLyBFbWJlZGRpbmcgc2hvdWxkIG5vdyBiZSBzdHJpbmcgfCBudWxsXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICBib29rbWFya0RhdGEudXJsLFxuICAgICAgICBib29rbWFya0RhdGEudGl0bGUgPz8gbnVsbCxcbiAgICAgICAgYm9va21hcmtEYXRhLnRhZ3MgPz8gbnVsbCxcbiAgICAgICAgYm9va21hcmtEYXRhLmVtYmVkZGluZyA/PyBudWxsIFxuICAgIF07XG4gICAgY29uc3QgcmVzdWx0Um93cyA9IGF3YWl0IHF1ZXJ5RGIoc3FsLCBwYXJhbXMpO1xuICAgIGlmICghcmVzdWx0Um93cz8uWzBdKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGJvb2ttYXJrXCIpO1xuICAgIHJldHVybiByZXN1bHRSb3dzWzBdIGFzIEJvb2ttYXJrO1xufVxuXG4vKipcbiAqIFNhdmVzIGEgZmxhc2hjYXJkIHRvIHRoZSBkYXRhYmFzZSwgaW5pdGlhbGl6aW5nIEZTUlMgc3RhdGUuXG4gKiBcbiAqIEBwYXJhbSBmbGFzaGNhcmREYXRhIERhdGEgZm9yIHRoZSBuZXcgZmxhc2hjYXJkIChleGNsdWRpbmcgRlNSUyBzdGF0ZSBhbmQgaWQvY3JlYXRlZF9hdClcbiAqIEBwYXJhbSBub3cgVGhlIGN1cnJlbnQgZGF0ZS90aW1lIGZvciBpbml0aWFsaXppbmcgRlNSUyBzdGF0ZVxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgRmxhc2hjYXJkIG9iamVjdCB3aXRoIGl0cyBJRCBhbmQgaW5pdGlhbCBGU1JTIHN0YXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVGbGFzaGNhcmQoZmxhc2hjYXJkRGF0YTogT21pdDxGbGFzaGNhcmQsICdpZCcgfCAnY3JlYXRlZF9hdCcgfCBrZXlvZiBGU1JTQ2FyZCB8ICdkdWUnIHwgJ3N0YXRlJyB8ICdsYXN0X3Jldmlldyc+LCBub3c6IERhdGUgPSBuZXcgRGF0ZSgpKTogUHJvbWlzZTxGbGFzaGNhcmQ+IHtcbiAgICAvLyBHZXQgaW5pdGlhbCBGU1JTIHN0YXRlIHVzaW5nIHRzLWZzcnNcbiAgICBjb25zdCBpbml0aWFsQ2FyZFN0YXRlID0gY3JlYXRlRW1wdHlDYXJkKG5vdyk7XG4gICAgLy8gR2V0IHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRlIGVudW1cbiAgICBjb25zdCBzdGF0ZVN0cmluZyA9IFN0YXRlW2luaXRpYWxDYXJkU3RhdGUuc3RhdGVdOyBcblxuICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgSU5TRVJUIElOVE8gZmxhc2hjYXJkcyAoXG4gICAgICAgICAgICB0eXBlLCBmcm9udCwgYmFjaywgY2xvemVfdGV4dCwgc291cmNlX3VybCwgc291cmNlX2hpZ2hsaWdodCwgXG4gICAgICAgICAgICBzb3VyY2VfbGFuZ3VhZ2UsIHRhcmdldF9sYW5ndWFnZSwgY29udGV4dCwgdGFncywgXG4gICAgICAgICAgICBkdWUsIHN0YWJpbGl0eSwgZGlmZmljdWx0eSwgZWxhcHNlZF9kYXlzLCBzY2hlZHVsZWRfZGF5cywgXG4gICAgICAgICAgICByZXBzLCBsYXBzZXMsIHN0YXRlLCBsYXN0X3Jldmlld1xuICAgICAgICApXG4gICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzLCAkMTQsICQxNSwgJDE2LCAkMTcsICQxOCwgJDE5KVxuICAgICAgICBSRVRVUk5JTkcgKjsgXG4gICAgYDtcbiAgICBcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgIGZsYXNoY2FyZERhdGEudHlwZSxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5mcm9udCA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLmJhY2sgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5jbG96ZV90ZXh0ID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEuc291cmNlX3VybCA/PyBudWxsLFxuICAgICAgICBmbGFzaGNhcmREYXRhLnNvdXJjZV9oaWdobGlnaHQgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5zb3VyY2VfbGFuZ3VhZ2UgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS50YXJnZXRfbGFuZ3VhZ2UgPz8gbnVsbCxcbiAgICAgICAgZmxhc2hjYXJkRGF0YS5jb250ZXh0ID8/IG51bGwsXG4gICAgICAgIGZsYXNoY2FyZERhdGEudGFncyA/PyBudWxsLFxuICAgICAgICAvLyBGU1JTIGluaXRpYWwgc3RhdGU6XG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUuZHVlLnRvSVNPU3RyaW5nKCksIC8vIFN0b3JlIGFzIElTTyBzdHJpbmdcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5zdGFiaWxpdHksXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUuZGlmZmljdWx0eSxcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5lbGFwc2VkX2RheXMsXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUuc2NoZWR1bGVkX2RheXMsXG4gICAgICAgIGluaXRpYWxDYXJkU3RhdGUucmVwcyxcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5sYXBzZXMsXG4gICAgICAgIHN0YXRlU3RyaW5nLCAvLyBVc2UgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3RhdGVcbiAgICAgICAgaW5pdGlhbENhcmRTdGF0ZS5sYXN0X3Jldmlldz8udG9JU09TdHJpbmcoKSA/PyBudWxsIC8vIFN0b3JlIGFzIElTTyBzdHJpbmcgb3IgbnVsbFxuICAgIF07XG5cbiAgICBjb25zdCByZXN1bHRSb3dzID0gYXdhaXQgcXVlcnlEYihzcWwsIHBhcmFtcyk7XG4gICAgaWYgKCFyZXN1bHRSb3dzPy5bMF0pIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgZmxhc2hjYXJkXCIpO1xuICAgIC8vIEVuc3VyZSB0aGUgcmV0dXJuZWQgc3RhdGUgaXMgY29ycmVjdGx5IHR5cGVkIGlmIG5lZWRlZCBlbHNld2hlcmUgaW1tZWRpYXRlbHksXG4gICAgLy8gYWx0aG91Z2ggcmVhZGluZyBmcm9tIERCIGxhdGVyIHNob3VsZCB5aWVsZCB0aGUgc3RyaW5nLlxuICAgIGNvbnN0IHNhdmVkRmxhc2hjYXJkID0gcmVzdWx0Um93c1swXSBhcyBGbGFzaGNhcmQ7XG4gICAgLy8gUEdsaXRlIG1pZ2h0IHJldHVybiB0aGUgbnVtZXJpYyBlbnVtIHZhbHVlIGlmIHRoZSBjb2x1bW4gdHlwZSBhZmZpbml0eSBpcyBpbnRlZ2VyLFxuICAgIC8vIGJ1dCBzaW5jZSBpdCdzIFRFWFQsIGl0IHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyB3ZSBpbnNlcnRlZC5cbiAgICAvLyBJZiBpc3N1ZXMgYXJpc2UsIG1hbnVhbGx5IGNhc3QgaGVyZTogc2F2ZWRGbGFzaGNhcmQuc3RhdGUgPSBTdGF0ZVtzYXZlZEZsYXNoY2FyZC5zdGF0ZSBhcyBudW1iZXJdIGFzIHVua25vd24gYXMgU3RhdGU7XG4gICAgcmV0dXJuIHNhdmVkRmxhc2hjYXJkO1xufVxuXG4vKipcbiAqIFNhdmVzIGEgY2hhdCBtZXNzYWdlIHRvIHRoZSBkYXRhYmFzZS5cbiAqIFxuICogQHBhcmFtIG1lc3NhZ2VEYXRhIFRoZSBjaGF0IG1lc3NhZ2UgZGF0YVxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgQ2hhdE1lc3NhZ2VEYiBvYmplY3Qgd2l0aCBpdHMgSUQgYW5kIHRpbWVzdGFtcFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hhdE1lc3NhZ2UobWVzc2FnZURhdGE6IE9taXQ8Q2hhdE1lc3NhZ2VEYiwgJ2lkJyB8ICd0aW1lc3RhbXAnPik6IFByb21pc2U8Q2hhdE1lc3NhZ2VEYj4ge1xuICAgIGNvbnN0IHNxbCA9IGBcbiAgICAgICAgSU5TRVJUIElOVE8gY2hhdF9tZXNzYWdlcyAocm9sZSwgY29udGVudCwgZW1iZWRkaW5nLCBib29rbWFya19pZCwgZmxhc2hjYXJkX2lkKVxuICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSlcbiAgICAgICAgUkVUVVJOSU5HICo7XG4gICAgYDtcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgIG1lc3NhZ2VEYXRhLnJvbGUsXG4gICAgICAgIG1lc3NhZ2VEYXRhLmNvbnRlbnQgPz8gbnVsbCxcbiAgICAgICAgbWVzc2FnZURhdGEuZW1iZWRkaW5nID8/IG51bGwsXG4gICAgICAgIG1lc3NhZ2VEYXRhLmJvb2ttYXJrX2lkID8/IG51bGwsXG4gICAgICAgIG1lc3NhZ2VEYXRhLmZsYXNoY2FyZF9pZCA/PyBudWxsXG4gICAgXTtcbiAgICBjb25zdCByZXN1bHRSb3dzID0gYXdhaXQgcXVlcnlEYihzcWwsIHBhcmFtcyk7IFxuICAgIGlmICghcmVzdWx0Um93cz8uWzBdKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGNoYXQgbWVzc2FnZVwiKTsgXG4gICAgY29uc29sZS5sb2coJ1tkYi50cyBjcmVhdGVDaGF0TWVzc2FnZV0gUmF3IERCIHJlc3VsdCByb3c6JywgcmVzdWx0Um93c1swXSk7IFxuICAgIHJldHVybiByZXN1bHRSb3dzWzBdIGFzIENoYXRNZXNzYWdlRGI7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjaGF0IGhpc3RvcnksIGpvaW5pbmcgYm9va21hcmtzIGFuZCBmbGFzaGNhcmRzLlxuICogXG4gKiBAcGFyYW0gbGltaXQgTWF4aW11bSBudW1iZXIgb2YgbWVzc2FnZXMgdG8gcmV0cmlldmUgKG9wdGlvbmFsKVxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgQ2hhdEhpc3RvcnlJdGVtIG9iamVjdHNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENoYXRIaXN0b3J5KGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxDaGF0SGlzdG9yeUl0ZW1bXT4ge1xuICAgIC8vIENvbnN0cnVjdCB0aGUgcXVlcnkgdG8gZmV0Y2ggbWVzc2FnZXMgYW5kIGpvaW4gcmVsYXRlZCBkYXRhXG4gICAgY29uc3Qgc3FsID0gYFxuICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICBtLmlkIGFzIG1lc3NhZ2VfaWQsIC0tIEFsaWFzIHRoZSBtZXNzYWdlIElEXG4gICAgICAgICAgICBtLnJvbGUsIG0uY29udGVudCwgbS5lbWJlZGRpbmcsIG0uYm9va21hcmtfaWQsIG0uZmxhc2hjYXJkX2lkLCBtLnRpbWVzdGFtcCwgLS0gSW5jbHVkZSBtLmVtYmVkZGluZ1xuICAgICAgICAgICAgYi5pZCBhcyBib29rbWFya19pZF9qb2luZWQsIGIudXJsIGFzIGJvb2ttYXJrX3VybCwgYi50aXRsZSBhcyBib29rbWFya190aXRsZSwgYi5zYXZlZF9hdCBhcyBib29rbWFya19zYXZlZF9hdCwgYi50YWdzIGFzIGJvb2ttYXJrX3RhZ3MsIGIuZW1iZWRkaW5nIGFzIGJvb2ttYXJrX2VtYmVkZGluZywgXG4gICAgICAgICAgICBmLmlkIGFzIGZsYXNoY2FyZF9pZF9qb2luZWQsIGYuKiAtLSBTZWxlY3QgYWxsIGZsYXNoY2FyZCBmaWVsZHNcbiAgICAgICAgRlJPTSBjaGF0X21lc3NhZ2VzIG1cbiAgICAgICAgTEVGVCBKT0lOIGJvb2ttYXJrcyBiIE9OIG0uYm9va21hcmtfaWQgPSBiLmlkXG4gICAgICAgIExFRlQgSk9JTiBmbGFzaGNhcmRzIGYgT04gbS5mbGFzaGNhcmRfaWQgPSBmLmlkXG4gICAgICAgIE9SREVSIEJZIG0udGltZXN0YW1wIERFU0NcbiAgICAgICAgJHtsaW1pdCA/ICdMSU1JVCA/JyA6ICcnfVxuICAgIGA7XG4gICAgY29uc3QgcGFyYW1zID0gbGltaXQgPyBbbGltaXRdIDogW107XG4gICAgY29uc3QgcmVzdWx0Um93cyA9IGF3YWl0IHF1ZXJ5RGIoc3FsLCBwYXJhbXMpO1xuXG4gICAgaWYgKCFyZXN1bHRSb3dzKSByZXR1cm4gW107XG5cbiAgICBjb25zb2xlLmxvZygnW2RiLnRzIGdldENoYXRIaXN0b3J5XSBSYXcgREIgcmVzdWx0IHJvd3M6JywgcmVzdWx0Um93cyk7XG5cbiAgICAvLyBNYXAgdGhlIHJhdyByb3dzIHRvIHRoZSBDaGF0SGlzdG9yeUl0ZW0gdW5pb24gdHlwZVxuICAgIHJldHVybiByZXN1bHRSb3dzLm1hcCgocm93OiBhbnkpOiBDaGF0SGlzdG9yeUl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBDaGF0TWVzc2FnZURiID0ge1xuICAgICAgICAgICAgaWQ6IHJvdy5tZXNzYWdlX2lkLCAvLyBVc2UgdGhlIGV4cGxpY2l0IGFsaWFzIGhlcmVcbiAgICAgICAgICAgIHJvbGU6IHJvdy5yb2xlLFxuICAgICAgICAgICAgY29udGVudDogcm93LmNvbnRlbnQsXG4gICAgICAgICAgICBlbWJlZGRpbmc6IHJvdy5lbWJlZGRpbmcsXG4gICAgICAgICAgICBib29rbWFya19pZDogcm93LmJvb2ttYXJrX2lkLCAvLyBUaGlzIGNvbWVzIGZyb20gbS4qLCBzaG91bGQgYmUgY29ycmVjdFxuICAgICAgICAgICAgZmxhc2hjYXJkX2lkOiByb3cuZmxhc2hjYXJkX2lkLCAvLyBUaGlzIGNvbWVzIGZyb20gbS4qLCBzaG91bGQgYmUgY29ycmVjdFxuICAgICAgICAgICAgdGltZXN0YW1wOiByb3cudGltZXN0YW1wLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyb3cucm9sZSA9PT0gJ2Jvb2ttYXJrJyAmJiByb3cuYm9va21hcmtfaWRfam9pbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBib29rbWFyazogQm9va21hcmsgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHJvdy5ib29rbWFya19pZF9qb2luZWQsIC8vIFVzZSB0aGUgc3BlY2lmaWMgam9pbiBhbGlhc1xuICAgICAgICAgICAgICAgIHVybDogcm93LmJvb2ttYXJrX3VybCxcbiAgICAgICAgICAgICAgICB0aXRsZTogcm93LmJvb2ttYXJrX3RpdGxlLFxuICAgICAgICAgICAgICAgIHNhdmVkX2F0OiByb3cuYm9va21hcmtfc2F2ZWRfYXQsXG4gICAgICAgICAgICAgICAgdGFnczogcm93LmJvb2ttYXJrX3RhZ3MsXG4gICAgICAgICAgICAgICAgZW1iZWRkaW5nOiByb3cuYm9va21hcmtfZW1iZWRkaW5nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdib29rbWFyaycsIG1lc3NhZ2UsIGJvb2ttYXJrIH07XG4gICAgICAgIH0gZWxzZSBpZiAocm93LnJvbGUgPT09ICdmbGFzaGNhcmQnICYmIHJvdy5mbGFzaGNhcmRfaWRfam9pbmVkKSB7XG4gICAgICAgICAgICAgLy8gTWFwIGFsbCBmbGFzaGNhcmQgZmllbGRzIGZyb20gdGhlIHJvdyBcbiAgICAgICAgICAgICBjb25zdCBmbGFzaGNhcmQ6IEZsYXNoY2FyZCA9IHtcbiAgICAgICAgICAgICAgICAgaWQ6IHJvdy5mbGFzaGNhcmRfaWRfam9pbmVkLCAvLyBVc2UgdGhlIHNwZWNpZmljIGpvaW4gYWxpYXNcbiAgICAgICAgICAgICAgICAgdHlwZTogcm93LnR5cGUsXG4gICAgICAgICAgICAgICAgIGZyb250OiByb3cuZnJvbnQsXG4gICAgICAgICAgICAgICAgIGJhY2s6IHJvdy5iYWNrLFxuICAgICAgICAgICAgICAgICBjbG96ZV90ZXh0OiByb3cuY2xvemVfdGV4dCxcbiAgICAgICAgICAgICAgICAgc291cmNlX3VybDogcm93LnNvdXJjZV91cmwsXG4gICAgICAgICAgICAgICAgIHNvdXJjZV9oaWdobGlnaHQ6IHJvdy5zb3VyY2VfaGlnaGxpZ2h0LFxuICAgICAgICAgICAgICAgICBzb3VyY2VfbGFuZ3VhZ2U6IHJvdy5zb3VyY2VfbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgIHRhcmdldF9sYW5ndWFnZTogcm93LnRhcmdldF9sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgY29udGV4dDogcm93LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgIHRhZ3M6IHJvdy50YWdzXzEsIC8vIEtlZXAgZXhpc3RpbmcgYWxpYXMgZm9yIHRhZ3MgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHJvdy5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgICBkdWU6IHJvdy5kdWUsXG4gICAgICAgICAgICAgICAgIHN0YWJpbGl0eTogcm93LnN0YWJpbGl0eSxcbiAgICAgICAgICAgICAgICAgZGlmZmljdWx0eTogcm93LmRpZmZpY3VsdHksXG4gICAgICAgICAgICAgICAgIGVsYXBzZWRfZGF5czogcm93LmVsYXBzZWRfZGF5cyxcbiAgICAgICAgICAgICAgICAgc2NoZWR1bGVkX2RheXM6IHJvdy5zY2hlZHVsZWRfZGF5cyxcbiAgICAgICAgICAgICAgICAgcmVwczogcm93LnJlcHMsXG4gICAgICAgICAgICAgICAgIGxhcHNlczogcm93LmxhcHNlcyxcbiAgICAgICAgICAgICAgICAgc3RhdGU6IHJvdy5zdGF0ZSBhcyBTdGF0ZSxcbiAgICAgICAgICAgICAgICAgbGFzdF9yZXZpZXc6IHJvdy5sYXN0X3JldmlldyxcbiAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2ZsYXNoY2FyZCcsIG1lc3NhZ2UsIGZsYXNoY2FyZCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yIHJlZ3VsYXIgbWVzc2FnZXMsIHVzZSB0aGUgYmFzZSBtZXNzYWdlIG9iamVjdFxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ21lc3NhZ2UnLCBkYXRhOiBtZXNzYWdlIH07IFxuICAgICAgICB9XG4gICAgfSkucmV2ZXJzZSgpOyAvLyBSZXZlcnNlIGJhY2sgdG8gY2hyb25vbG9naWNhbCBvcmRlclxufVxuXG4vKipcbiAqIFJldHJpZXZlcyBmbGFzaGNhcmRzIGR1ZSBmb3IgcmV2aWV3LlxuICogXG4gKiBAcGFyYW0gbm93IFRoZSBjdXJyZW50IGRhdGUvdGltZSB0byBjb21wYXJlIGFnYWluc3QgdGhlIGR1ZSBkYXRlXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBkdWUgRmxhc2hjYXJkIG9iamVjdHNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldER1ZUZsYXNoY2FyZHMobm93OiBEYXRlID0gbmV3IERhdGUoKSk6IFByb21pc2U8Rmxhc2hjYXJkW10+IHtcbiAgICBjb25zdCBzcWwgPSBgXG4gICAgICAgIFNFTEVDVCAqIEZST00gZmxhc2hjYXJkc1xuICAgICAgICBXSEVSRSBkdWUgPD0gP1xuICAgICAgICBPUkRFUiBCWSBkdWUgQVNDO1xuICAgIGA7XG4gICAgY29uc3QgcGFyYW1zID0gW25vdy50b0lTT1N0cmluZygpXTtcbiAgICBjb25zdCByZXN1bHRSb3dzID0gYXdhaXQgcXVlcnlEYihzcWwsIHBhcmFtcyk7XG4gICAgcmV0dXJuIChyZXN1bHRSb3dzIHx8IFtdKSBhcyBGbGFzaGNhcmRbXTtcbn1cblxuLy8gRnV0dXJlIGZ1bmN0aW9ucyAodXBkYXRlRmxhc2hjYXJkU3RhdGUsIGRlbGV0ZUJvb2ttYXJrLCBldGMuKSBjYW4gYmUgYWRkZWQgaGVyZS5cblxuLy8gU2NoZW1hIGlzIGluaXRpYWxpemVkIGRpcmVjdGx5IGluIG9mZnNjcmVlbi50c1xuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTY2hlbWEoKSB7IC4uLiB9ICIsImltcG9ydCB7IHNlbmRNZXNzYWdlLCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgT2xsYW1hQ29uZmlnLCBFbWJlZGRpbmdSZXNwb25zZSB9IGZyb20gJy4uL2xsbVNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QsIExMTUVtYmVkZGluZ1Byb3ZpZGVyLCBQcm92aWRlckVtYmVkZGluZ1JlcXVlc3QsIFByb3ZpZGVyQ2hhdENvbXBsZXRpb25SZXF1ZXN0LCBDaGF0Q29tcGxldGlvblJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIC0tLSBPbGxhbWEgQ2hhdCBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbU9sbGFtYUNoYXQocmVxdWVzdDogUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5ID0gW10sIGNvbmZpZywgc2VuZENodW5rIH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IG9sbGFtYUNvbmZpZyA9IGNvbmZpZyBhcyBPbGxhbWFDb25maWc7IC8vIFR5cGUgYXNzZXJ0aW9uXG5cbiAgICBjb25zdCBtb2RlbCA9IG9sbGFtYUNvbmZpZy5jaGF0TW9kZWw7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBvbGxhbWFDb25maWcuZW5kcG9pbnQucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8gRW5zdXJlIG5vIHRyYWlsaW5nIHNsYXNoXG4gICAgY29uc3QgYXBpVXJsID0gYCR7ZW5kcG9pbnR9L2FwaS9jaGF0YDsgLy8gVXNlIE9sbGFtYSBBUEkgZW5kcG9pbnRcblxuICAgIGNvbnNvbGUubG9nKGBbb2xsYW1hUHJvdmlkZXJdIFNlbmRpbmcgY2hhdCByZXF1ZXN0IHRvICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uaGlzdG9yeSwgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPbGxhbWEgQVBJIGVycm9yICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yQm9keX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICBsZXQgYnVmZmVyID0gJyc7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkgYnJlYWs7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJzsgLy8gS2VlcCBpbmNvbXBsZXRlIGxpbmVcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnRyaW0oKSA9PT0gJycpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IEpTT04ucGFyc2UobGluZSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlQ2h1bms6IE9sbGFtYVN0cmVhbUNodW5rIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2h1bmsubWVzc2FnZT8uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUNodW5rID0geyBzdGF0dXM6ICdjaHVuaycsIGNvbnRlbnQ6IGNodW5rLm1lc3NhZ2UuY29udGVudCB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmsuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgT2xsYW1hJ3MgZG9uZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VDaHVuayA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2RvbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDogY2h1bmsubW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogY2h1bmsuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9kdXJhdGlvbjogY2h1bmsudG90YWxfZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZF9kdXJhdGlvbjogY2h1bmsubG9hZF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRfZXZhbF9jb3VudDogY2h1bmsucHJvbXB0X2V2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0X2V2YWxfZHVyYXRpb246IGNodW5rLnByb21wdF9ldmFsX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWxfY291bnQ6IGNodW5rLmV2YWxfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbF9kdXJhdGlvbjogY2h1bmsuZXZhbF9kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbb2xsYW1hUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIiwgcmVzcG9uc2VDaHVuay5zdGF0cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlQ2h1bmspIHtcbiAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsocmVzcG9uc2VDaHVuayk7IC8vIFVzZSB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW29sbGFtYVByb3ZpZGVyXSBGYWlsZWQgdG8gcGFyc2UgT2xsYW1hIHN0cmVhbSBjaHVuazpcIiwgbGluZSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgIGlmIChidWZmZXIudHJpbSgpKSB7XG4gICAgICAgICBjb25zb2xlLndhcm4oXCJbb2xsYW1hUHJvdmlkZXJdIFN0cmVhbSBlbmRlZCB3aXRoIHVucHJvY2Vzc2VkIGJ1ZmZlcjpcIiwgYnVmZmVyKTtcbiAgICAgfVxufVxuXG4vLyAtLS0gT2xsYW1hIENoYXQgQ29tcGxldGlvbiAoTm9uLVN0cmVhbWluZykgLS0tIFxuXG5hc3luYyBmdW5jdGlvbiBvbGxhbWFDaGF0Q29tcGxldGlvbihyZXF1ZXN0OiBQcm92aWRlckNoYXRDb21wbGV0aW9uUmVxdWVzdCk6IFByb21pc2U8Q2hhdENvbXBsZXRpb25SZXNwb25zZSB8IG51bGw+IHtcbiAgICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSA9IFtdLCBjb25maWcgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3Qgb2xsYW1hQ29uZmlnID0gY29uZmlnIGFzIE9sbGFtYUNvbmZpZztcblxuICAgIGNvbnN0IG1vZGVsID0gb2xsYW1hQ29uZmlnLmNoYXRNb2RlbDtcbiAgICBjb25zdCBlbmRwb2ludCA9IG9sbGFtYUNvbmZpZy5lbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIGNvbnN0IGFwaVVybCA9IGAke2VuZHBvaW50fS9hcGkvY2hhdGA7XG5cbiAgICBjb25zb2xlLmxvZyhgW29sbGFtYVByb3ZpZGVyXSBTZW5kaW5nIE5PTi1TVFJFQU1JTkcgY2hhdCByZXF1ZXN0IHRvICR7YXBpVXJsfSB3aXRoIG1vZGVsICR7bW9kZWx9YCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFsuLi5oaXN0b3J5LCB7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0IH1dLFxuICAgICAgICAgICAgICAgIHN0cmVhbTogZmFsc2UgLy8gRXhwbGljaXRseSBzZXQgc3RyZWFtIHRvIGZhbHNlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiRmFpbGVkIHRvIHJlYWQgZXJyb3IgYm9keVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtvbGxhbWFQcm92aWRlcl0gQ2hhdCBDb21wbGV0aW9uIEFQSSBlcnJvciAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtlcnJvckJvZHl9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgb24gQVBJIGVycm9yXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgLy8gVmFsaWRhdGUgdGhlIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgICAgICBpZiAoIXJlc3VsdC5tZXNzYWdlIHx8IHR5cGVvZiByZXN1bHQubWVzc2FnZS5jb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2xsYW1hUHJvdmlkZXJdIEludmFsaWQgcmVzcG9uc2UgZm9ybWF0IGZyb20gT2xsYW1hIENoYXQgQVBJIChub24tc3RyZWFtaW5nKS4gJ21lc3NhZ2UuY29udGVudCcgbm90IGZvdW5kIG9yIG5vdCBhIHN0cmluZy5cIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW29sbGFtYVByb3ZpZGVyXSBSZWNlaXZlZCBub24tc3RyZWFtaW5nIHJlc3BvbnNlOlwiLCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gTWFwIHRvIHRoZSBzdGFuZGFyZCBDaGF0Q29tcGxldGlvblJlc3BvbnNlIGZvcm1hdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLCAvLyBBc3N1bWUgcm9sZSBpcyBhc3Npc3RhbnRcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXN1bHQubWVzc2FnZS5jb250ZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzYWdlOiB7XG4gICAgICAgICAgICAgICAgIHByb21wdF90b2tlbnM6IHJlc3VsdC5wcm9tcHRfZXZhbF9jb3VudCxcbiAgICAgICAgICAgICAgICAgY29tcGxldGlvbl90b2tlbnM6IHJlc3VsdC5ldmFsX2NvdW50LFxuICAgICAgICAgICAgICAgICAvLyB0b3RhbF90b2tlbnM6IHJlc3VsdC4/LCAvLyBPbGxhbWEgbWlnaHQgbm90IHByb3ZpZGUgdG90YWwgZGlyZWN0bHkgaW4gbm9uLXN0cmVhbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW5jbHVkZSBvdGhlciBmaWVsZHMgaWYgbmVlZGVkXG4gICAgICAgIH07XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgY29uc29sZS5lcnJvcihcIltvbGxhbWFQcm92aWRlcl0gTmV0d29yayBvciBwYXJzaW5nIGVycm9yIGR1cmluZyBjaGF0IGNvbXBsZXRpb246XCIsIGVycm9yKTtcbiAgICAgICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBvbiBmZXRjaC9wYXJzZSBlcnJvclxuICAgIH1cbn1cblxuLy8gLS0tIE9sbGFtYSBFbWJlZGRpbmcgSW1wbGVtZW50YXRpb24gLS0tIFxuXG5hc3luYyBmdW5jdGlvbiBnZXRPbGxhbWFFbWJlZGRpbmdzKHJlcXVlc3Q6IFByb3ZpZGVyRW1iZWRkaW5nUmVxdWVzdCk6IFByb21pc2U8RW1iZWRkaW5nUmVzcG9uc2U+IHtcbiAgICBjb25zdCB7IGNvbnRlbnQsIGNvbmZpZyB9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBvbGxhbWFDb25maWcgPSBjb25maWcgYXMgT2xsYW1hQ29uZmlnO1xuXG4gICAgaWYgKCFvbGxhbWFDb25maWcuZW1iZWRkaW5nTW9kZWwpIHsgLy8gRG91YmxlIGNoZWNrLCB0aG91Z2ggc2VydmljZSBsYXllciBzaG91bGQgYWxzbyBjaGVja1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2xsYW1hIGNvbmZpZ3VyYXRpb24gbWlzc2luZyByZXF1aXJlZCBlbWJlZGRpbmdNb2RlbC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kZWwgPSBvbGxhbWFDb25maWcuZW1iZWRkaW5nTW9kZWw7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBvbGxhbWFDb25maWcuZW5kcG9pbnQucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICBjb25zdCBhcGlVcmwgPSBgJHtlbmRwb2ludH0vYXBpL2VtYmVkZGluZ3NgO1xuXG4gICAgY29uc29sZS5sb2coYFtvbGxhbWFQcm92aWRlcl0gUmVxdWVzdGluZyBlbWJlZGRpbmdzIGZyb20gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbGxhbWEgZW1iZWRkaW5nIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHNpbmdsZSBzdHJpbmcgaW5wdXQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbi5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBwcm9tcHQ6IGNvbnRlbnQgXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJGYWlsZWQgdG8gcmVhZCBlcnJvciBib2R5XCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9sbGFtYSBFbWJlZGRpbmdzIEFQSSBlcnJvciAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtlcnJvckJvZHl9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKCFyZXN1bHQuZW1iZWRkaW5nIHx8ICFBcnJheS5pc0FycmF5KHJlc3VsdC5lbWJlZGRpbmcpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCBmcm9tIE9sbGFtYSBFbWJlZGRpbmdzIEFQSS4gJ2VtYmVkZGluZycgYXJyYXkgbm90IGZvdW5kLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbWJlZGRpbmdzOiBbcmVzdWx0LmVtYmVkZGluZ10gXG4gICAgfTtcbn1cblxuLy8gRXhwb3J0IHRoZSBwcm92aWRlciBvYmplY3QgYWRoZXJpbmcgdG8gdGhlIGludGVyZmFjZXNcbmV4cG9ydCBjb25zdCBvbGxhbWFQcm92aWRlcjogTExNQ2hhdFByb3ZpZGVyICYgTExNRW1iZWRkaW5nUHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZXJJZDogJ29sbGFtYScsXG4gICAgc3RyZWFtQ2hhdDogc3RyZWFtT2xsYW1hQ2hhdCxcbiAgICBjaGF0Q29tcGxldGlvbjogb2xsYW1hQ2hhdENvbXBsZXRpb24sXG4gICAgZ2V0RW1iZWRkaW5nczogZ2V0T2xsYW1hRW1iZWRkaW5ncyxcbn07ICIsImltcG9ydCB7IHNlbmRNZXNzYWdlLCB0eXBlIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWVzc2FnaW5nJztcbmltcG9ydCB0eXBlIHsgT3BlblJvdXRlckNvbmZpZyB9IGZyb20gJy4uL2xsbVNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBMTE1DaGF0UHJvdmlkZXIsIFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gLS0tIE9wZW5Sb3V0ZXIgQ2hhdCBJbXBsZW1lbnRhdGlvbiAtLS0gXG5cbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbU9wZW5Sb3V0ZXJDaGF0KHJlcXVlc3Q6IFByb3ZpZGVyU3RyZWFtQ2hhdFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSA9IFtdLCBjb25maWcsIHNlbmRDaHVuayB9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBvcGVuUm91dGVyQ29uZmlnID0gY29uZmlnIGFzIE9wZW5Sb3V0ZXJDb25maWc7IC8vIFR5cGUgYXNzZXJ0aW9uXG5cbiAgICBjb25zdCBtb2RlbCA9IG9wZW5Sb3V0ZXJDb25maWcuY2hhdE1vZGVsO1xuICAgIGNvbnN0IGFwaUtleSA9IG9wZW5Sb3V0ZXJDb25maWcuYXBpS2V5O1xuICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9vcGVucm91dGVyLmFpL2FwaS92MS9jaGF0L2NvbXBsZXRpb25zXCI7XG5cbiAgICBjb25zb2xlLmxvZyhgW29wZW5Sb3V0ZXJQcm92aWRlcl0gU2VuZGluZyBjaGF0IHJlcXVlc3QgdG8gJHthcGlVcmx9IHdpdGggbW9kZWwgJHttb2RlbH1gKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthcGlLZXl9YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAvLyBUT0RPOiBDb25zaWRlciBhZGRpbmcgdGhlc2UgaGVhZGVycyBpZiBkZXNpcmVkXG4gICAgICAgICAgICAvLyAnSFRUUC1SZWZlcmVyJzogJycsIC8vIFlPVVJfU0lURV9VUkxcbiAgICAgICAgICAgIC8vICdYLVRpdGxlJzogJycsIC8vIFlPVVJfU0lURV9OQU1FXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uaGlzdG9yeSwgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8ICFyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIkZhaWxlZCB0byByZWFkIGVycm9yIGJvZHlcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlblJvdXRlciBBUEkgZXJyb3IgKCR7cmVzcG9uc2Uuc3RhdHVzfSk6ICR7ZXJyb3JCb2R5fWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBidWZmZXIgPSAnJztcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgLy8gT3BlblJvdXRlciB1c2VzIFNlcnZlci1TZW50IEV2ZW50cyAoU1NFKSBmb3JtYXRcbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lOiByZWFkZXJEb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgZG9uZSA9IHJlYWRlckRvbmU7XG5cbiAgICAgICAgYnVmZmVyICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBidWZmZXIuc3BsaXQoJ1xcbicpO1xuICAgICAgICBidWZmZXIgPSBsaW5lcy5wb3AoKSB8fCAnJztcblxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ2RhdGE6ICcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUNvbnRlbnQgPSBsaW5lLnN1YnN0cmluZyg2KS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFDb250ZW50ID09PSAnW0RPTkVdJykge1xuICAgICAgICAgICAgICAgICAgICAgc2VuZENodW5rKHsgc3RhdHVzOiAnZG9uZScsIHN0YXRzOiB7fSB9KTsgLy8gU2VuZCBzaW1wbGUgZG9uZSBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltvcGVuUm91dGVyUHJvdmlkZXJdIFN0cmVhbSBmaW5pc2hlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgLy8gRW5zdXJlIG91dGVyIGxvb3AgdGVybWluYXRlc1xuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIEV4aXQgaW5uZXIgbG9vcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBKU09OLnBhcnNlKGRhdGFDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNodW5rLmNob2ljZXM/LlswXT8uZGVsdGE/LmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQ2h1bmsoeyBzdGF0dXM6ICdjaHVuaycsIGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogRXh0cmFjdCB1c2FnZSBzdGF0cyBpZiBuZWVkZWQ/XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltvcGVuUm91dGVyUHJvdmlkZXJdIEZhaWxlZCB0byBwYXJzZSBzdHJlYW0gY2h1bms6XCIsIGRhdGFDb250ZW50LCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJ1ZmZlci50cmltKCkpIHsgXG4gICAgICAgIGNvbnNvbGUud2FybihcIltvcGVuUm91dGVyUHJvdmlkZXJdIFN0cmVhbSBlbmRlZCB3aXRoIHVucHJvY2Vzc2VkIGJ1ZmZlcjpcIiwgYnVmZmVyKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydCB0aGUgcHJvdmlkZXIgb2JqZWN0IGFkaGVyaW5nIHRvIHRoZSBpbnRlcmZhY2VcbmV4cG9ydCBjb25zdCBvcGVuUm91dGVyUHJvdmlkZXI6IExMTUNoYXRQcm92aWRlciA9IHtcbiAgICBwcm92aWRlcklkOiAnb3BlbnJvdXRlcicsXG4gICAgc3RyZWFtQ2hhdDogc3RyZWFtT3BlblJvdXRlckNoYXQsXG4gICAgLy8gTm8gZ2V0RW1iZWRkaW5ncyBmb3IgT3BlblJvdXRlciBpbiB0aGlzIGV4YW1wbGUgeWV0XG59OyAiLCIvLyBzcmMvc2VydmljZXMvbGxtU2VydmljZS50c1xuXG5pbXBvcnQgeyBxdWVyeURiIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGInOyAvLyBUbyBsb2FkIGNvbmZpZ1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIE9sbGFtYVN0cmVhbUNodW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnaW5nJzsgLy8gRm9yIHN0cmVhbWluZyByZXNwb25zZXMgYmFja1xuaW1wb3J0IHR5cGUgeyBMTE1Qcm92aWRlciwgTExNQ2hhdFByb3ZpZGVyLCBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0LCBMTE1FbWJlZGRpbmdQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL3R5cGVzJztcblxuLy8gQWRkIHByb3ZpZGVyIGltcG9ydHNcbmltcG9ydCB7IG9sbGFtYVByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvb2xsYW1hJztcbmltcG9ydCB7IG9wZW5Sb3V0ZXJQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL29wZW5yb3V0ZXInO1xuXG4vLyAtLS0gQ29uZmlndXJhdGlvbiBUeXBlcyAtLS1cblxuLy8gUmV1c2UgQ2hhdE1lc3NhZ2UgZnJvbSBtZXNzYWdpbmcudHMgaWYgc3VpdGFibGUsIG9yIHJlZGVmaW5lIGlmIG5lZWRlZFxuaW1wb3J0IHR5cGUgeyBDaGF0TWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lc3NhZ2luZyc7XG5cbi8vIEJhc2UgY29uZmlndXJhdGlvbiBzdHJ1Y3R1cmUgKHlvdSBtaWdodCBzdG9yZSB0aGlzIGFzIEpTT04gaW4gdGhlIERCKVxuZXhwb3J0IGludGVyZmFjZSBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6IExMTVByb3ZpZGVyO1xuICBjaGF0TW9kZWw6IHN0cmluZztcbiAgZW1iZWRkaW5nTW9kZWw/OiBzdHJpbmc7IC8vIE9wdGlvbmFsLCBtaWdodCBub3QgYmUgbmVlZGVkIGZvciBhbGwgcHJvdmlkZXJzIG9yIHNlcGFyYXRlIGNvbmZpZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9sbGFtYUNvbmZpZyBleHRlbmRzIExMTUNvbmZpZ0Jhc2Uge1xuICBwcm92aWRlcjogJ29sbGFtYSc7XG4gIGVuZHBvaW50OiBzdHJpbmc7IC8vIGUuZy4sIGh0dHA6Ly9sb2NhbGhvc3Q6MTE0MzRcbiAgLy8gZW1iZWRkaW5nTW9kZWwgaXMgcmVxdWlyZWQgZm9yIGxvY2FsIE9sbGFtYSBlbWJlZGRpbmdcbiAgZW1iZWRkaW5nTW9kZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuUm91dGVyQ29uZmlnIGV4dGVuZHMgTExNQ29uZmlnQmFzZSB7XG4gIHByb3ZpZGVyOiAnb3BlbnJvdXRlcic7XG4gIGFwaUtleTogc3RyaW5nO1xuICAvLyBPcGVuUm91dGVyIG1pZ2h0IHVzZSBzcGVjaWZpYyBtb2RlbCBpZGVudGlmaWVycyBkaWZmZXJlbnQgZnJvbSBPbGxhbWFcbiAgLy8gRW1iZWRkaW5nIG1vZGVsIG1pZ2h0IGJlIGltcGxpY2l0IG9yIGEgc3BlY2lmaWMgb25lIGlmIHRoZXkgb2ZmZXIgaXRcbn1cblxuLy8gQWRkIFZlbmljZUNvbmZpZyAoZXZlbiBpZiBlbXB0eSBmb3Igbm93KVxuZXhwb3J0IGludGVyZmFjZSBWZW5pY2VDb25maWcgZXh0ZW5kcyBMTE1Db25maWdCYXNlIHtcbiAgcHJvdmlkZXI6ICd2ZW5pY2UnO1xuICBhcGlLZXk/OiB1bmRlZmluZWQ7IC8vIE5vIEFQSSBrZXkgbmVlZGVkXG4gIGVtYmVkZGluZ01vZGVsPzogdW5kZWZpbmVkO1xuICAvLyBBZGQgd2FsbGV0IGFkZHJlc3Mgb3Igb3RoZXIgcmVsZXZhbnQgZmllbGRzIGxhdGVyXG59XG5cbmV4cG9ydCB0eXBlIExMTVVzZXJDb25maWcgPSBPbGxhbWFDb25maWcgfCBPcGVuUm91dGVyQ29uZmlnIHwgVmVuaWNlQ29uZmlnOyAvLyBVbmlvbiB0eXBlXG5cbi8vIC0tLSBTZXJ2aWNlIEFyZ3VtZW50IFR5cGVzIC0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbUNoYXRSZXF1ZXN0IHtcbiAgcHJvbXB0OiBzdHJpbmc7XG4gIGhpc3Rvcnk/OiBDaGF0TWVzc2FnZVtdO1xuICBjb25maWc6IExMTVVzZXJDb25maWc7IC8vIFBhc3MgdGhlIGxvYWRlZCBjb25maWdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRpbmdSZXF1ZXN0IHtcbiAgY29udGVudDogc3RyaW5nW10gfCBzdHJpbmc7IC8vIEFsbG93IHNpbmdsZSBzdHJpbmcgb3IgYXJyYXlcbiAgY29uZmlnOiBMTE1Vc2VyQ29uZmlnO1xufVxuXG4vLyAtLS0gU2VydmljZSBSZXNwb25zZSBUeXBlcyAtLS1cblxuLy8gRm9yIGNoYXQsIHdlIHN0cmVhbSBPbGxhbWFTdHJlYW1DaHVuayB2aWEgc2VuZE1lc3NhZ2Vcbi8vIEZvciBlbWJlZGRpbmdzLCB3ZSByZXR1cm4gdGhlIHZlY3RvcnMgZGlyZWN0bHlcbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkaW5nUmVzcG9uc2Uge1xuICBlbWJlZGRpbmdzOiBudW1iZXJbXVtdOyAvLyBBcnJheSBvZiBlbWJlZGRpbmcgdmVjdG9yc1xufVxuXG5cbi8vIC0tLSBTZXJ2aWNlIEludGVyZmFjZSAoQ29uY2VwdHVhbCAtIGltcGxlbWVudGF0aW9uIGZvbGxvd3MpIC0tLVxuXG4vKipcbiAqIExvYWRzIHRoZSB1c2VyJ3MgTExNIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgZGF0YWJhc2UuXG4gKi9cbmxldCB1c2VyQ29uZmlnQ2FjaGU6IExMTVVzZXJDb25maWcgfCBudWxsID0gbnVsbDtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkVXNlckNvbmZpZygpOiBQcm9taXNlPExMTVVzZXJDb25maWcgfCBudWxsPiB7XG4gIGlmICh1c2VyQ29uZmlnQ2FjaGUpIHJldHVybiB1c2VyQ29uZmlnQ2FjaGU7XG4gIGNvbnNvbGUubG9nKCdbbGxtU2VydmljZV0gTG9hZGluZyB1c2VyIGNvbmZpZ3VyYXRpb24gZnJvbSBEQi4uLicpO1xuICB0cnkge1xuICAgIC8vIHF1ZXJ5RGIgcmV0dXJucyB0aGUgcm93cyBhcnJheSBkaXJlY3RseVxuICAgIGNvbnN0IHJlc3VsdFJvd3MgPSBhd2FpdCBxdWVyeURiKCdTRUxFQ1QgY29uZmlnX2pzb24gRlJPTSB1c2VyX2NvbmZpZ3VyYXRpb24gV0hFUkUgaWQgPSAxOycpO1xuICAgIC8vIENoZWNrIHRoZSBmaXJzdCByb3cgb2YgdGhlIHJldHVybmVkIGFycmF5XG4gICAgaWYgKHJlc3VsdFJvd3M/LlswXT8uY29uZmlnX2pzb24pIHsgXG4gICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKHJlc3VsdFJvd3NbMF0uY29uZmlnX2pzb24pO1xuICAgICAgY29uc29sZS5sb2coJ1tsbG1TZXJ2aWNlXSBMb2FkZWQgY29uZmlnOicsIGNvbmZpZyk7XG4gICAgICB1c2VyQ29uZmlnQ2FjaGUgPSBjb25maWc7IC8vIENhY2hlIHRoZSBsb2FkZWQgY29uZmlnXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tsbG1TZXJ2aWNlXSBObyBjb25maWd1cmF0aW9uIGZvdW5kIGluIGRhdGFiYXNlLicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tsbG1TZXJ2aWNlXSBFcnJvciBsb2FkaW5nIGNvbmZpZ3VyYXRpb246JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cblxuLyoqXG4gKiBIYW5kbGVzIHN0cmVhbWluZyBjaGF0IHJlc3BvbnNlcyBmcm9tIHRoZSBjb25maWd1cmVkIExMTSBwcm92aWRlci5cbiAqIFNlbmRzIGNodW5rcyBiYWNrIHZpYSBzZW5kTWVzc2FnZSgnb2xsYW1hUmVzcG9uc2UnLCBjaHVuaykuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdHJlYW1DaGF0UmVzcG9uc2UocmVxdWVzdDogeyBwcm9tcHQ6IHN0cmluZzsgaGlzdG9yeTogYW55W107IGNvbmZpZzogTExNVXNlckNvbmZpZyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgcHJvbXB0LCBoaXN0b3J5LCBjb25maWcgfSA9IHJlcXVlc3Q7XG4gIGNvbnNvbGUubG9nKGBbbGxtU2VydmljZV0gUm91dGluZyBjaGF0IHN0cmVhbSBmb3IgcHJvdmlkZXI6ICR7Y29uZmlnLnByb3ZpZGVyfWApO1xuICBjb25zdCBwcm92aWRlciA9IGdldFByb3ZpZGVyKGNvbmZpZyk7XG4gIGlmICghcHJvdmlkZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHByb3ZpZGVyOiAke2NvbmZpZy5wcm92aWRlcn1gKTtcbiAgfVxuICBpZiAoIXByb3ZpZGVyLnN0cmVhbUNoYXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFByb3ZpZGVyICR7Y29uZmlnLnByb3ZpZGVyfSBkb2VzIG5vdCBzdXBwb3J0IHN0cmVhbWluZyBjaGF0LmApO1xuICB9XG4gIGNvbnN0IHByb3ZpZGVyUmVxdWVzdDogUHJvdmlkZXJTdHJlYW1DaGF0UmVxdWVzdCA9IHtcbiAgICBwcm9tcHQsXG4gICAgaGlzdG9yeSxcbiAgICBjb25maWcsXG4gICAgc2VuZENodW5rOiAoY2h1bmspID0+IHtcbiAgICAgIHNlbmRNZXNzYWdlKCdvbGxhbWFSZXNwb25zZScsIGNodW5rKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBjaHVuayB0byBVSTpcIiwgZSkpO1xuICAgIH1cbiAgfTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcm92aWRlci5zdHJlYW1DaGF0KHByb3ZpZGVyUmVxdWVzdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2xsbVNlcnZpY2VdIEVycm9yIGR1cmluZyBzdHJlYW1DaGF0IGZvciAke2NvbmZpZy5wcm92aWRlcn06YCwgZXJyb3IpO1xuICAgIC8vIEVuc3VyZSB0aGUgZXJyb3Igb2JqZWN0IGNvbmZvcm1zIHRvIE9sbGFtYVN0cmVhbUNodW5rXG4gICAgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywge1xuICAgICAgc3RhdHVzOiAnZXJyb3InLCAvLyBDb3JyZWN0bHkgdXNlIHRoZSBzdGF0dXMgZmllbGRcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcilcbiAgICB9KS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBlcnJvciBjaHVuayB0byBVSTpcIiwgZSkpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyBlbWJlZGRpbmdzIGZvciB0aGUgZ2l2ZW4gY29udGVudCB1c2luZyB0aGUgY29uZmlndXJlZCBwcm92aWRlci5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtYmVkZGluZ3MocmVxdWVzdDogRW1iZWRkaW5nUmVxdWVzdCk6IFByb21pc2U8RW1iZWRkaW5nUmVzcG9uc2U+IHtcbiAgIGNvbnN0IHsgY29uZmlnIH0gPSByZXF1ZXN0O1xuXG4gICBpZiAoIWNvbmZpZykge1xuICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBnZXRFbWJlZGRpbmdzIGNhbGxlZCB3aXRoIG51bGwgY29uZmlnLlwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTExNIGNvbmZpZ3VyYXRpb24gaXMgbWlzc2luZy4nKTtcbiAgIH1cblxuICAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBSb3V0aW5nIGVtYmVkZGluZ3MgcmVxdWVzdCBmb3IgcHJvdmlkZXI6ICR7Y29uZmlnLnByb3ZpZGVyfWApO1xuXG4gICB0cnkge1xuICAgICAgIGxldCBwcm92aWRlck1vZHVsZTogTExNRW1iZWRkaW5nUHJvdmlkZXI7XG5cbiAgICAgICAvLyBVc2Ugc3dpdGNoIHN0YXRlbWVudCBmb3IgcHJvdmlkZXIgcm91dGluZ1xuICAgICAgIHN3aXRjaCAoY29uZmlnLnByb3ZpZGVyKSB7XG4gICAgICAgICBjYXNlICdvbGxhbWEnOiB7XG4gICAgICAgICAgIGNvbnN0IHsgb2xsYW1hUHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm92aWRlcnMvb2xsYW1hJyk7XG4gICAgICAgICAgIGlmICghKCdnZXRFbWJlZGRpbmdzJyBpbiBvbGxhbWFQcm92aWRlcikpIHRocm93IG5ldyBFcnJvcignT2xsYW1hIHByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgZ2V0RW1iZWRkaW5ncycpO1xuICAgICAgICAgICBwcm92aWRlck1vZHVsZSA9IG9sbGFtYVByb3ZpZGVyIGFzIExMTUVtYmVkZGluZ1Byb3ZpZGVyO1xuICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICAgICAgIGNhc2UgJ29wZW5yb3V0ZXInOlxuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29uZmlnLnByb3ZpZGVyfSBlbWJlZGRpbmdzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuYCk7XG4gICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gVW5zdXBwb3J0ZWQgcHJvdmlkZXIgZm9yIGVtYmVkZGluZ3NcIik7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIExMTSBwcm92aWRlciBmb3IgZW1iZWRkaW5nc1wiKTtcbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICAvLyBDYWxsIHRoZSBwcm92aWRlcidzIG1ldGhvZCAocHJvdmlkZXJNb2R1bGUgaXMgZ3VhcmFudGVlZCB0byBiZSBhc3NpZ25lZCBpZiBub3QgdGhyb3duKVxuICAgICAgIHJldHVybiBhd2FpdCBwcm92aWRlck1vZHVsZS5nZXRFbWJlZGRpbmdzKHJlcXVlc3QpO1xuXG4gICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlXSBFcnJvciBkdXJpbmcgZW1iZWRkaW5nIHJvdXRpbmcgb3IgZXhlY3V0aW9uOmAsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbWJlZGRpbmcgU2VydmljZSBFcnJvcjogJHtlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvcil9YCk7XG4gICB9XG59XG5cbi8vIFJlbW92ZSBvbGQgcHJvdmlkZXIgaW1wbGVtZW50YXRpb25zIFxuXG4vLyAtLS0gTmV3IEZsYXNoY2FyZCBHZW5lcmF0aW9uIEZ1bmN0aW9uIC0tLVxuXG4vLyBEZWZpbmUgdGhlIGV4cGVjdGVkIHN0cnVjdHVyZSBvZiB0aGUgSlNPTiByZXNwb25zZSBmcm9tIHRoZSBMTE1cbmludGVyZmFjZSBGbGFzaGNhcmRHZW5lcmF0aW9uUmVzcG9uc2Uge1xuICBmcm9udEJhY2s6IHtcbiAgICBmcm9udDogc3RyaW5nO1xuICAgIGJhY2s6IHN0cmluZztcbiAgfTtcbiAgY2xvemU6IHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gIH07XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIHByb21wdCAoVXBkYXRlZCBmb3IgUmVhZGFiaWxpdHkgJiBDbGFyaXR5KVxuZnVuY3Rpb24gY3JlYXRlRmxhc2hjYXJkUHJvbXB0KHNlbGVjdGVkVGV4dDogc3RyaW5nLCBzb3VyY2VVcmw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIFVzZSBhIG11bHRpLWxpbmUgdGVtcGxhdGUgbGl0ZXJhbCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5XG4gICAgbGV0IHByb21wdCA9IGBcbkdlbmVyYXRlIHR3byB0eXBlcyBvZiBmbGFzaGNhcmRzIGZyb20gdGhlIHRleHQgYmVsb3c6IGEgY29uY2lzZSBcIkZsYXNoY2FyZFwiIChGcm9udC9CYWNrKSBhbmQgYSBcIkNsb3plXCIgZGVsZXRpb24gY2FyZC5cblxuVGV4dCBTZWxlY3Rpb246XG5cIlwiXCJcbiR7c2VsZWN0ZWRUZXh0fVxuXCJcIlwiXG4ke3NvdXJjZVVybCA/IGBcXFxcblNvdXJjZSBVUkwgKGZvciBjb250ZXh0KTogJHtzb3VyY2VVcmx9YCA6ICcnfVxuXG5JbnN0cnVjdGlvbnM6XG5cbjEuICAqKkZsYXNoY2FyZCAoRnJvbnQvQmFjayk6KipcbiAgICAqICAgRnJvbnQ6IEEgc2hvcnQgdG9waWMgb3IgY29uY2VwdCAobWF4IDggd29yZHMpLlxuICAgICogICBCYWNrOiBBIGNvbmNpc2UgZmFjdCBvciBkZWZpbml0aW9uIHJlbGF0ZWQgdG8gdGhlIGZyb250IChtYXggOCB3b3JkcykuXG4gICAgKiAgICoqSU1QT1JUQU5UOioqIERvIE5PVCBpbmNsdWRlIHRyYWlsaW5nIHB1bmN0dWF0aW9uLiBCYWNrIHNob3VsZCBPTkxZIGNvbnRhaW4gdGhlIGZhY3QsIG5vIGZpbGxlci5cblxuMi4gICoqQ2xvemUgQ2FyZDoqKlxuICAgICogICBDcmVhdGUgYSBzaW5nbGUgc2VudGVuY2UgdXNpbmcgdGhlIG1haW4gaWRlYS5cbiAgICAqICAgUmVwbGFjZSB0aGUgc2luZ2xlIG1vc3QgKm1lYW5pbmdmdWwqIGtleXdvcmQvcGhyYXNlIHdpdGgge3tjMTo6YW5zd2VyfX0uXG4gICAgKiAgICoqQVZPSUQqKiBkZWxldGluZyB0cml2aWFsIHdvcmRzICh0aGUsIGlzLCBhKSBvciB0aGUgb2J2aW91cyBtYWluIHN1YmplY3QuXG5cbjMuICAqKk91dHB1dCBGb3JtYXQ6KipcbiAgICAqICAgUmV0dXJuIE9OTFkgYSB2YWxpZCBKU09OIG9iamVjdC4gTm8gZXh0cmEgdGV4dCwgZXhwbGFuYXRpb25zLCBvciBtYXJrZG93bi5cbiAgICAqICAgVXNlIHRoaXMgRVhBQ1Qgc3RydWN0dXJlOlxuICAgIFxcYFxcYFxcYGpzb25cbiAgICB7XG4gICAgICBcImZsYXNoY2FyZFwiOiB7IFwiZnJvbnRcIjogXCJ0b3BpYy9jb25jZXB0XCIsIFwiYmFja1wiOiBcImNvbmNpc2UgZmFjdFwiIH0sXG4gICAgICBcImNsb3plXCI6IHsgXCJ0ZXh0XCI6IFwiU2VudGVuY2Ugd2l0aCB7e2MxOjphbnN3ZXJ9fSBkZWxldGlvbi5cIiB9XG4gICAgfVxuICAgIFxcYFxcYFxcYFxuXG5FeGFtcGxlczpcblxuLS0tIEV4YW1wbGUgMSAtLS1cbklucHV0IFRleHQ6IFwiVGhlIEVpZmZlbCBUb3dlciwgbG9jYXRlZCBpbiBQYXJpcywgRnJhbmNlLCB3YXMgY29tcGxldGVkIGluIDE4ODkuXCJcbk91dHB1dCBKU09OOlxuXFxgXFxgXFxganNvblxue1xuICBcImZsYXNoY2FyZFwiOiB7IFwiZnJvbnRcIjogXCJFaWZmZWwgVG93ZXIgTG9jYXRpb25cIiwgXCJiYWNrXCI6IFwiUGFyaXMsIEZyYW5jZVwiIH0sXG4gIFwiY2xvemVcIjogeyBcInRleHRcIjogXCJUaGUgRWlmZmVsIFRvd2VyLCBsb2NhdGVkIGluIFBhcmlzLCBGcmFuY2UsIHdhcyBjb21wbGV0ZWQgaW4ge3tjMTo6MTg4OX19XCIgfVxufVxuXFxgXFxgXFxgXG4oRmxhc2hjYXJkOiBHb29kIC0gY29uY2lzZSB0b3BpYy9mYWN0LiBDbG96ZTogR29vZCAtIHNwZWNpZmljIGRldGFpbCBkZWxldGVkLilcblxuLS0tIEV4YW1wbGUgMiAtLS1cbklucHV0IFRleHQ6IFwiUGhvdG9zeW50aGVzaXMgaXMgdGhlIHByb2Nlc3MgdXNlZCBieSBwbGFudHMgdG8gY29udmVydCBsaWdodCBlbmVyZ3kgaW50byBjaGVtaWNhbCBlbmVyZ3kuXCJcbk91dHB1dCBKU09OOlxuXFxgXFxgXFxganNvblxue1xuICBcImZsYXNoY2FyZFwiOiB7IFwiZnJvbnRcIjogXCJQaG90b3N5bnRoZXNpc1wiLCBcImJhY2tcIjogXCJDb252ZXJ0cyBsaWdodCB0byBjaGVtaWNhbCBlbmVyZ3lcIiB9LFxuICBcImNsb3plXCI6IHsgXCJ0ZXh0XCI6IFwiUGhvdG9zeW50aGVzaXMgaXMgdGhlIHByb2Nlc3MgdXNlZCBieSBwbGFudHMgdG8gY29udmVydCB7e2MxOjpsaWdodCBlbmVyZ3l9fSBpbnRvIGNoZW1pY2FsIGVuZXJneVwiIH1cbn1cblxcYFxcYFxcYFxuKEZsYXNoY2FyZDogR29vZCAtIGNvbmNlcHQvZGVmaW5pdGlvbi4gQ2xvemU6IEdvb2QgLSBrZXkgY29uY2VwdCBkZWxldGVkLilcblxuLS0tIEV4YW1wbGUgMyAtLS1cbklucHV0IFRleHQ6IFwiVGhlIFdhY2hvd3NraXMgd3JvdGUgYW5kIGRpcmVjdGVkIHRoZSBNYXRyaXggZmlsbSBzZXJpZXMuXCJcbk91dHB1dCBKU09OOlxuXFxgXFxgXFxganNvblxue1xuICBcImZsYXNoY2FyZFwiOiB7IFwiZnJvbnRcIjogXCJUaGUgTWF0cml4IERpcmVjdG9yc1wiLCBcImJhY2tcIjogXCJUaGUgV2FjaG93c2tpc1wiIH0sXG4gIFwiY2xvemVcIjogeyBcInRleHRcIjogXCJUaGUge3tjMTo6V2FjaG93c2tpc319IHdyb3RlIGFuZCBkaXJlY3RlZCB0aGUgTWF0cml4IGZpbG0gc2VyaWVzXCIgfVxufVxuXFxgXFxgXFxgXG4oRmxhc2hjYXJkOiBHb29kIC0gc3BlY2lmaWMgcm9sZS4gQ2xvemU6IEJldHRlciAtIGRlbGV0ZWQgdGhlIGRpcmVjdG9ycyBpbnN0ZWFkIG9mIHRoZSB0cml2aWFsICdNYXRyaXgnLilcblxuLS0tIEV4YW1wbGUgNCAoQmFkIEV4YW1wbGVzKSAtLS1cbklucHV0IFRleHQ6IFwiUmVhY3QgaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy5cIlxuQmFkIEZsYXNoY2FyZCBCYWNrOiBcIlJlYWN0IGlzIGEgSlMgbGlicmFyeSBmb3IgVUlzLlwiIChUcmFpbGluZyBwZXJpb2QpXG5CYWQgRmxhc2hjYXJkIEJhY2s6IFwiSXQgaXMgYSBsaWJyYXJ5IGZvciBidWlsZGluZyBVSXNcIiAoRXhjZWVkcyA4IHdvcmRzLCBmaWxsZXIpXG5CYWQgQ2xvemU6IFwiUmVhY3QgaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHt7YzE6OnVzZXIgaW50ZXJmYWNlc319XCIgKE9rYXksIGJ1dCBsZXNzIGlkZWFsIHRoYW4gZGVsZXRpbmcgJ0phdmFTY3JpcHQgbGlicmFyeScpXG5CYWQgQ2xvemU6IFwie3tjMTo6UmVhY3R9fSBpcyBhIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzLlwiIChUcml2aWFsIGRlbGV0aW9uIG9mIG1haW4gc3ViamVjdClcblxuTm93LCBnZW5lcmF0ZSB0aGUgZmxhc2hjYXJkcyBmb3IgdGhlIHByb3ZpZGVkIHRleHQgc2VsZWN0aW9uLiBPdXRwdXQgT05MWSB0aGUgSlNPTiBvYmplY3Q6XG5gO1xuICAgIHJldHVybiBwcm9tcHQudHJpbSgpOyAvLyBUcmltIGxlYWRpbmcvdHJhaWxpbmcgd2hpdGVzcGFjZSBmcm9tIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnJvbnQvYmFjayBhbmQgY2xvemUgZmxhc2hjYXJkIHBhaXIgZnJvbSBzZWxlY3RlZCB0ZXh0IHVzaW5nIHRoZSBjb25maWd1cmVkIExMTS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlRmxhc2hjYXJkUGFpcihzZWxlY3RlZFRleHQ6IHN0cmluZywgc291cmNlVXJsPzogc3RyaW5nKTogUHJvbWlzZTxGbGFzaGNhcmRHZW5lcmF0aW9uUmVzcG9uc2UgfCBudWxsPiB7XG4gICAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBHZW5lcmF0aW5nIGZsYXNoY2FyZCBwYWlyIGZvciB0ZXh0OiBcXFwiJHtzZWxlY3RlZFRleHQuc3Vic3RyaW5nKDAsIDUwKX0uLi5cXFwiYCk7XG5cbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkVXNlckNvbmZpZygpO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIENhbm5vdCBnZW5lcmF0ZSBmbGFzaGNhcmRzOiBMTE0gY29uZmlnIG5vdCBsb2FkZWQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHQgPSBjcmVhdGVGbGFzaGNhcmRQcm9tcHQoc2VsZWN0ZWRUZXh0LCBzb3VyY2VVcmwpO1xuICAgIGxldCBwcm92aWRlck1vZHVsZTogTExNQ2hhdFByb3ZpZGVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAvLyBGaW5kIHRoZSBwcm92aWRlciBtb2R1bGUgKHNpbWlsYXIgdG8gc3RyZWFtQ2hhdFJlc3BvbnNlKVxuICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAoY29uZmlnLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICBjYXNlICdvbGxhbWEnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBvbGxhbWFQcm92aWRlciB9ID0gYXdhaXQgaW1wb3J0KCcuL3Byb3ZpZGVycy9vbGxhbWEnKTtcbiAgICAgICAgICAgICAgICBwcm92aWRlck1vZHVsZSA9IG9sbGFtYVByb3ZpZGVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnb3BlbnJvdXRlcic6IHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyBPcGVuUm91dGVyIHByb3ZpZGVyIGV4aXN0cyBhbmQgaW1wbGVtZW50cyBjaGF0Q29tcGxldGlvblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHsgb3BlblJvdXRlclByb3ZpZGVyIH0gPSBhd2FpdCBpbXBvcnQoJy4vcHJvdmlkZXJzL29wZW5yb3V0ZXInKTtcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlck1vZHVsZSA9IG9wZW5Sb3V0ZXJQcm92aWRlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJPcGVuUm91dGVyIGZsYXNoY2FyZCBnZW5lcmF0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIG90aGVyIHByb3ZpZGVycyBpZiB0aGV5IHN1cHBvcnQgY2hhdENvbXBsZXRpb25cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBVbnN1cHBvcnRlZCBwcm92aWRlciBmb3Igbm9uLXN0cmVhbWluZyBjaGF0OlwiLCBjb25maWcucHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcm92aWRlck1vZHVsZT8uY2hhdENvbXBsZXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gUHJvdmlkZXIgJHtjb25maWcucHJvdmlkZXJ9IGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVpcmVkICdjaGF0Q29tcGxldGlvbicgbWV0aG9kLmApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIHRoZSBub24tc3RyZWFtaW5nIGNoYXQgcmVxdWVzdFxuICAgICAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gU2VuZGluZyByZXF1ZXN0IHRvIHByb3ZpZGVyIGNoYXRDb21wbGV0aW9uLi4uXCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb3ZpZGVyTW9kdWxlLmNoYXRDb21wbGV0aW9uKHtcbiAgICAgICAgICAgIHByb21wdDogcHJvbXB0LFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSwgLy8gTm8gaGlzdG9yeSBuZWVkZWQgZm9yIHRoaXMgc3BlY2lmaWMgdGFza1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlPy5tZXNzYWdlPy5jb250ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBMTE0gcmVzcG9uc2Ugd2FzIGVtcHR5IG9yIGludmFsaWQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRlbXB0IHRvIHBhcnNlIHRoZSBKU09OIGZyb20gdGhlIHJlc3BvbnNlIGNvbnRlbnRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENsZWFuIHBvdGVudGlhbCBtYXJrZG93biBjb2RlIGZlbmNlc1xuICAgICAgICAgICAgY29uc3QgY2xlYW5lZENvbnRlbnQgPSByZXNwb25zZS5tZXNzYWdlLmNvbnRlbnQucmVwbGFjZSgvYGBganNvblxcXFxuP3xgYGAvZywgJycpLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEpzb24gPSBKU09OLnBhcnNlKGNsZWFuZWRDb250ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQmFzaWMgdmFsaWRhdGlvbiBvZiB0aGUgcGFyc2VkIHN0cnVjdHVyZVxuICAgICAgICAgICAgaWYgKHBhcnNlZEpzb24uZnJvbnRCYWNrPy5mcm9udCAmJiBwYXJzZWRKc29uLmZyb250QmFjaz8uYmFjayAmJiBwYXJzZWRKc29uLmNsb3plPy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2xsbVNlcnZpY2UgZ2VuZXJhdGVGbGFzaGNhcmRQYWlyXSBTdWNjZXNzZnVsbHkgcGFyc2VkIGZsYXNoY2FyZCBKU09OOlwiLCBwYXJzZWRKc29uKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEpzb24gYXMgRmxhc2hjYXJkR2VuZXJhdGlvblJlc3BvbnNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIGdlbmVyYXRlRmxhc2hjYXJkUGFpcl0gUGFyc2VkIEpTT04gbGFja3MgZXhwZWN0ZWQgc3RydWN0dXJlOlwiLCBwYXJzZWRKc29uKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIEZhaWxlZCB0byBwYXJzZSBKU09OIGZyb20gTExNIHJlc3BvbnNlOlwiLCBwYXJzZUVycm9yLCBcIlJhdyBjb250ZW50OlwiLCByZXNwb25zZS5tZXNzYWdlLmNvbnRlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBnZW5lcmF0ZUZsYXNoY2FyZFBhaXJdIEVycm9yIGR1cmluZyBmbGFzaGNhcmQgZ2VuZXJhdGlvbjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIC0tLSBIZWxwZXIgRnVuY3Rpb24gdG8gZ2V0IFByb3ZpZGVyIC0tLSBcbi8vIChBc3N1bWVzIFVzZXJDb25maWcgaGFzIGEgcHJvdmlkZXIgZmllbGQgbGlrZSAnb2xsYW1hJyBvciAnb3BlbnJvdXRlcicpXG5mdW5jdGlvbiBnZXRQcm92aWRlcihjb25maWc6IExMTVVzZXJDb25maWcpOiBMTE1DaGF0UHJvdmlkZXIgfCBudWxsIHtcbiAgICBzd2l0Y2ggKGNvbmZpZy5wcm92aWRlcikge1xuICAgICAgICBjYXNlICdvbGxhbWEnOlxuICAgICAgICAgICAgcmV0dXJuIG9sbGFtYVByb3ZpZGVyO1xuICAgICAgICBjYXNlICdvcGVucm91dGVyJzpcbiAgICAgICAgICAgIHJldHVybiBvcGVuUm91dGVyUHJvdmlkZXI7XG4gICAgICAgIC8vIEFkZCBjYXNlcyBmb3Igb3RoZXIgcHJvdmlkZXJzIGxpa2UgJ2xtc3R1ZGlvJywgJ2phbicgaWYgdGhleSBoYXZlIHNwZWNpZmljIHByb3ZpZGVyIG9iamVjdHNcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIEhhbmRsZSBsb2NhbCBwcm92aWRlcnMgdGhhdCBtaWdodCBzaGFyZSBPbGxhbWEgbG9naWMgYnV0IGhhdmUgZGlmZmVyZW50IElEc1xuICAgICAgICAgICAgaWYgKChjb25maWcgYXMgYW55KS5lbmRwb2ludCkgeyBcbiAgICAgICAgICAgICAgICAvLyBJZiBlbmRwb2ludCBleGlzdHMsIGFzc3VtZSBpdCBtaWdodCBiZSBhbiBPbGxhbWEtY29tcGF0aWJsZSBBUElcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZWZpbmUgdGhpcyBsb2dpYyBpZiBsb2NhbCBwcm92aWRlcnMgbmVlZCBkaXN0aW5jdCBoYW5kbGluZ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW2xsbVNlcnZpY2VdIFVzaW5nIG9sbGFtYVByb3ZpZGVyIGZvciBwb3RlbnRpYWxseSBjb21wYXRpYmxlIHByb3ZpZGVyOiAke2NvbmZpZy5wcm92aWRlcn1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2xsYW1hUHJvdmlkZXI7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW2xsbVNlcnZpY2VdIFVuc3VwcG9ydGVkIHByb3ZpZGVyIGZvdW5kIGluIGNvbmZpZzogJHtjb25maWcucHJvdmlkZXJ9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIC0tLSBGbGFzaGNhcmQgR2VuZXJhdGlvbiBGdW5jdGlvbiAoVXBkYXRlZCB0byB1c2UgU3RyZWFtaW5nKSAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUZsYXNoY2FyZENvbnRlbnRGcm9tVGV4dCh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgICBmbGFzaGNhcmQ6IHsgZnJvbnQ6IHN0cmluZzsgYmFjazogc3RyaW5nIH07XG4gICAgY2xvemU6IHsgdGV4dDogc3RyaW5nIH07XG4gIH0gfCBudWxsPiB7XG4gICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZV0gR2VuZXJhdGluZyBmbGFzaGNhcmQgY29udGVudCBmb3IgdGV4dDpcIiwgdGV4dC5zdWJzdHJpbmcoMCwgNTApICsgXCIuLi5cIik7XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZFVzZXJDb25maWcoKTtcbiAgICBpZiAoIWNvbmZpZykgdGhyb3cgbmV3IEVycm9yKFwiTExNIGNvbmZpZ3VyYXRpb24gbm90IGZvdW5kLlwiKTtcblxuICAgIGNvbnN0IHByb3ZpZGVyID0gZ2V0UHJvdmlkZXIoY29uZmlnKTtcbiAgICBpZiAoIXByb3ZpZGVyKSB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHByb3ZpZGVyOiAke2NvbmZpZy5wcm92aWRlcn1gKTtcblxuICAgIC8vIC0tLSBVc2Ugc3RyZWFtQ2hhdCBpbnN0ZWFkIG9mIGNoYXRDb21wbGV0aW9uIC0tLVxuICAgIGlmICghcHJvdmlkZXIuc3RyZWFtQ2hhdCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZV0gUHJvdmlkZXIgJHtjb25maWcucHJvdmlkZXJ9IGRvZXMgbm90IHN1cHBvcnQgc3RyZWFtaW5nIGNoYXQuIENhbm5vdCBnZW5lcmF0ZSBmbGFzaGNhcmRzLmApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHQgPSBjcmVhdGVGbGFzaGNhcmRQcm9tcHQodGV4dCk7XG4gICAgbGV0IGFjY3VtdWxhdGVkQ29udGVudCA9ICcnO1xuICAgIGxldCBzdHJlYW1FcnJvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlXSBTZW5kaW5nIGZsYXNoY2FyZCBnZW5lcmF0aW9uIHByb21wdCB2aWEgc3RyZWFtQ2hhdC4uLlwiKTtcblxuICAgIHRyeSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdHJlYW0gZmluaXNoZXNcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXJSZXF1ZXN0OiBQcm92aWRlclN0cmVhbUNoYXRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIHByb21wdCxcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgaGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgc2VuZENodW5rOiAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNodW5rLnN0YXR1cyA9PT0gJ2NodW5rJyAmJiBjaHVuay5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1bXVsYXRlZENvbnRlbnQgKz0gY2h1bmsuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaHVuay5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSBmbGFzaGNhcmQgc3RyZWFtXSBSZWNlaXZlZCBlcnJvciBjaHVuazpcIiwgY2h1bmsuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtRXJyb3IgPSBjaHVuay5lcnJvciB8fCAnVW5rbm93biBzdHJlYW1pbmcgZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgcmVqZWN0IGltbWVkaWF0ZWx5LCBsZXQgaXQgZmluaXNoIHRvIHBvdGVudGlhbGx5IGNhcHR1cmUgcGFydGlhbCBjb250ZW50P1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3IgcmVqZWN0IGhlcmUgaWYgZXJyb3JzIHNob3VsZCBoYWx0IHByb2Nlc3Npbmc6IHJlamVjdChuZXcgRXJyb3Ioc3RyZWFtRXJyb3IpKTsgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmsuc3RhdHVzID09PSAnZG9uZScgfHwgY2h1bmsuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZSBmbGFzaGNhcmQgc3RyZWFtXSBTdHJlYW0gZmluaXNoZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSB3aGVuIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBJbml0aWF0ZSB0aGUgc3RyZWFtXG4gICAgICAgICAgICBwcm92aWRlci5zdHJlYW1DaGF0KHByb3ZpZGVyUmVxdWVzdCkuY2F0Y2gocmVqZWN0KTsgLy8gUmVqZWN0IHByb21pc2Ugb24gaW5pdGlhbCBzdHJlYW1DaGF0IGVycm9yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdHJlYW1FcnJvcikge1xuICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gRmxhc2hjYXJkIHN0cmVhbSBjb21wbGV0ZWQgd2l0aCBlcnJvcjpcIiwgc3RyZWFtRXJyb3IpO1xuICAgICAgICAgICAgIC8vIFBvdGVudGlhbGx5IHRyeSBwYXJzaW5nIGFjY3VtdWxhdGVkQ29udGVudCBhbnl3YXk/XG4gICAgICAgICAgICAgLy8gcmV0dXJuIG51bGw7IC8vIEZvciBub3csIHJldHVybiBudWxsIGlmIHN0cmVhbSBoYWQgZXJyb3JzXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjY3VtdWxhdGVkQ29udGVudCkge1xuICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gRmxhc2hjYXJkIHN0cmVhbSBjb21wbGV0ZWQgYnV0IGFjY3VtdWxhdGVkIGNvbnRlbnQgaXMgZW1wdHkuXCIpO1xuICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tIFBhcnNlIHRoZSBhY2N1bXVsYXRlZCByZXNwb25zZSBhcyBKU09OIC0tLVxuICAgICAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlXSBSZWNlaXZlZCBhY2N1bXVsYXRlZCBzdHJlYW0gcmVzcG9uc2UgZm9yIHBhcnNpbmc6XCIsIGFjY3VtdWxhdGVkQ29udGVudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uTWF0Y2ggPSBhY2N1bXVsYXRlZENvbnRlbnQubWF0Y2goL2BgYGpzb25cXHMqKFtcXHNcXFNdKj8pXFxzKmBgYHwoe1tcXHNcXFNdKn0pLyk7XG4gICAgICAgICAgICBpZiAoIWpzb25NYXRjaCB8fCAoIWpzb25NYXRjaFsxXSAmJiAhanNvbk1hdGNoWzJdKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gQ291bGQgbm90IGZpbmQgSlNPTiBibG9jayBpbiB0aGUgYWNjdW11bGF0ZWQgc3RyZWFtIHJlc3BvbnNlLlwiKTtcbiAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSnNvbiA9IEpTT04ucGFyc2UoYWNjdW11bGF0ZWRDb250ZW50LnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkSnNvbi5mbGFzaGNhcmQ/LmZyb250ICYmIHBhcnNlZEpzb24uZmxhc2hjYXJkPy5iYWNrICYmIHBhcnNlZEpzb24uY2xvemU/LnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlXSBTdWNjZXNzZnVsbHkgcGFyc2VkIGZsYXNoY2FyZCBKU09OIGZyb20gcmF3IHN0cmVhbSByZXNwb25zZSAoZmFsbGJhY2spLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkSnNvbiBhcyB7IGZsYXNoY2FyZDogeyBmcm9udDogc3RyaW5nOyBiYWNrOiBzdHJpbmcgfTsgY2xvemU6IHsgdGV4dDogc3RyaW5nIH0gfTtcbiAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBQYXJzZWQgZmFsbGJhY2sgc3RyZWFtIEpTT04gbGFja3MgZXhwZWN0ZWQgc3RydWN0dXJlOlwiLCBwYXJzZWRKc29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZmFsbGJhY2tFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlXSBGYWlsZWQgdG8gcGFyc2UgSlNPTiBkaXJlY3RseSBmcm9tIGFjY3VtdWxhdGVkIHN0cmVhbSAoZmFsbGJhY2sgZmFpbGVkKTpcIiwgZmFsbGJhY2tFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0ganNvbk1hdGNoWzFdIHx8IGpzb25NYXRjaFsyXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcudHJpbSgpKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlZEpzb24uZmxhc2hjYXJkPy5mcm9udCAmJiBwYXJzZWRKc29uLmZsYXNoY2FyZD8uYmFjayAmJiBwYXJzZWRKc29uLmNsb3plPy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbbGxtU2VydmljZV0gU3VjY2Vzc2Z1bGx5IHBhcnNlZCBmbGFzaGNhcmQgSlNPTiBmcm9tIGFjY3VtdWxhdGVkIHN0cmVhbSByZXNwb25zZS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEpzb24gYXMgeyBmbGFzaGNhcmQ6IHsgZnJvbnQ6IHN0cmluZzsgYmFjazogc3RyaW5nIH07IGNsb3plOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gUGFyc2VkIHN0cmVhbSBKU09OIGxhY2tzIGV4cGVjdGVkIHN0cnVjdHVyZSAoZmxhc2hjYXJkL2Nsb3plKTpcIiwgcGFyc2VkSnNvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gRXJyb3IgcGFyc2luZyBKU09OIGZyb20gYWNjdW11bGF0ZWQgc3RyZWFtIHJlc3BvbnNlOlwiLCBwYXJzZUVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCItLS0gQWNjdW11bGF0ZWQgUmF3IENvbnRlbnQgLS0tXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihhY2N1bXVsYXRlZENvbnRlbnQpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIi0tLSBFbmQgQWNjdW11bGF0ZWQgUmF3IENvbnRlbnQgLS0tXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZV0gRXJyb3IgZHVyaW5nIGZsYXNoY2FyZCBnZW5lcmF0aW9uIHN0cmVhbSBzZXR1cCBvciBwcm9taXNlIGhhbmRsaW5nOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLy8gLS0tIFRyYW5zbGF0aW9uIEZ1bmN0aW9uIC0tLVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGdpdmVuIHRleHQgdG8gdGhlIHRhcmdldCBsYW5ndWFnZSB1c2luZyB0aGUgY29uZmlndXJlZCBMTE0uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFuc2xhdGVUZXh0KHRleHRUb1RyYW5zbGF0ZTogc3RyaW5nLCB0YXJnZXRMYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc29sZS5sb2coYFtsbG1TZXJ2aWNlXSBUcmFuc2xhdGluZyB0ZXh0IHRvICR7dGFyZ2V0TGFuZ3VhZ2V9OiBcIiR7dGV4dFRvVHJhbnNsYXRlLnN1YnN0cmluZygwLCA1MCl9Li4uXCJgKTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRVc2VyQ29uZmlnKCk7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltsbG1TZXJ2aWNlIHRyYW5zbGF0ZVRleHRdIENhbm5vdCB0cmFuc2xhdGU6IExMTSBjb25maWcgbm90IGxvYWRlZC5cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3ZpZGVyID0gZ2V0UHJvdmlkZXIoY29uZmlnKTtcbiAgICBpZiAoIXByb3ZpZGVyPy5jaGF0Q29tcGxldGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbbGxtU2VydmljZSB0cmFuc2xhdGVUZXh0XSBQcm92aWRlciAke2NvbmZpZy5wcm92aWRlcn0gZG9lcyBub3Qgc3VwcG9ydCAnY2hhdENvbXBsZXRpb24nLmApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTaW1wbGUgdHJhbnNsYXRpb24gcHJvbXB0XG4gICAgY29uc3QgcHJvbXB0ID0gYFRyYW5zbGF0ZSB0aGUgZm9sbG93aW5nIHRleHQgYWNjdXJhdGVseSB0byAke3RhcmdldExhbmd1YWdlfS4gT3V0cHV0IE9OTFkgdGhlIHRyYW5zbGF0ZWQgdGV4dCwgbm90aGluZyBlbHNlOlxuXG5UZXh0IHRvIHRyYW5zbGF0ZTpcblwiXCJcIlxuJHt0ZXh0VG9UcmFuc2xhdGV9XG5cIlwiXCJcblxuVHJhbnNsYXRlZCB0ZXh0OmA7XG5cbiAgICBjb25zb2xlLmxvZyhgW2xsbVNlcnZpY2UgdHJhbnNsYXRlVGV4dF0gU2VuZGluZyB0cmFuc2xhdGlvbiBwcm9tcHQgdG8gJHtjb25maWcucHJvdmlkZXJ9Li4uYCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb3ZpZGVyLmNoYXRDb21wbGV0aW9uKHtcbiAgICAgICAgICAgIHByb21wdDogcHJvbXB0LFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSwgLy8gTm8gaGlzdG9yeSBuZWVkZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZFRleHQgPSByZXNwb25zZT8ubWVzc2FnZT8uY29udGVudD8udHJpbSgpO1xuXG4gICAgICAgIGlmICghdHJhbnNsYXRlZFRleHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSB0cmFuc2xhdGVUZXh0XSBMTE0gcmVzcG9uc2Ugd2FzIGVtcHR5IG9yIGludmFsaWQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIltsbG1TZXJ2aWNlIHRyYW5zbGF0ZVRleHRdIFJlY2VpdmVkIHRyYW5zbGF0aW9uOlwiLCB0cmFuc2xhdGVkVGV4dCk7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGVkVGV4dDtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbbGxtU2VydmljZSB0cmFuc2xhdGVUZXh0XSBFcnJvciBkdXJpbmcgdHJhbnNsYXRpb24gTExNIGNhbGw6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSAiLCJleHBvcnQgZnVuY3Rpb24gZGVmaW5lQmFja2dyb3VuZChhcmcpIHtcbiAgaWYgKGFyZyA9PSBudWxsIHx8IHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHsgbWFpbjogYXJnIH07XG4gIHJldHVybiBhcmc7XG59XG4iLCJpbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgb25NZXNzYWdlLCBzZW5kTWVzc2FnZSB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBsb2FkVXNlckNvbmZpZywgc3RyZWFtQ2hhdFJlc3BvbnNlLCBnZW5lcmF0ZUZsYXNoY2FyZENvbnRlbnRGcm9tVGV4dCwgdHJhbnNsYXRlVGV4dCB9IGZyb20gJy4uL3NyYy9zZXJ2aWNlcy9sbG1TZXJ2aWNlJztcbmltcG9ydCB7IGNyZWF0ZUZsYXNoY2FyZCwgY3JlYXRlQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9kYic7XG5pbXBvcnQgeyBkZWZpbmVCYWNrZ3JvdW5kIH0gZnJvbSAnd3h0L3V0aWxzL2RlZmluZS1iYWNrZ3JvdW5kJztcblxuY29uc29sZS5sb2coJ0JhY2tncm91bmQgc2NyaXB0IGxvYWRlZC4nKTtcblxuLy8gRGVmaW5lIHRoZSBwYXRoIGV4cGxpY2l0bHksIG1hdGNoaW5nIHRoZSBleGFtcGxlXG5jb25zdCBPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCA9ICcvb2Zmc2NyZWVuLmh0bWwnO1xuXG5hc3luYyBmdW5jdGlvbiBoYXNPZmZzY3JlZW5Eb2N1bWVudCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgLy8gQ2hlY2sgaWYgdGhlIGRvY3VtZW50IGlzIGFscmVhZHkgb3Blbi5cbiAgLy8gVXNlIHRoZSBoYXJkY29kZWQgcGF0aCB3aXRoIGdldFVSTCBmb3IgY2hlY2tpbmcgZXhpc3RpbmcgY29udGV4dHNcbiAgY29uc3Qgb2Zmc2NyZWVuVXJsID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTChPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCk7XG4gIC8vIEB0cy1pZ25vcmUgLSBjbGllbnRzIGlzIGF2YWlsYWJsZSBidXQgbWF5IHNob3cgVFMgZXJyb3JcbiAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGJyb3dzZXIucnVudGltZS5nZXRDb250ZXh0cyh7XG4gICAgLy8gQHRzLWlnbm9yZSAtIENvbnRleHRUeXBlIG1pZ2h0IGJlIG1pc3NpbmcgT0ZGU0NSRUVOX0RPQ1VNRU5UIGluIG9sZGVyIHR5cGVzXG4gICAgY29udGV4dFR5cGVzOiBbJ09GRlNDUkVFTl9ET0NVTUVOVCddLFxuICAgIGRvY3VtZW50VXJsczogW29mZnNjcmVlblVybF0gLy8gVXNlIHRoZSByZXNvbHZlZCBVUkwgZm9yIGNoZWNraW5nXG4gIH0pO1xuICByZXR1cm4gZXhpc3RpbmdDb250ZXh0cy5sZW5ndGggPiAwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCkge1xuICBpZiAoIShhd2FpdCBoYXNPZmZzY3JlZW5Eb2N1bWVudCgpKSkge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gQ3JlYXRpbmcgb2Zmc2NyZWVuIGRvY3VtZW50Li4uJyk7XG4gICAgLy8gVXNlIHRoZSBoYXJkY29kZWQgcGF0aCBkaXJlY3RseSBmb3IgY3JlYXRpb24sIGFzIGluIHRoZSBXWFQgZXhhbXBsZVxuICAgIGNvbnNvbGUubG9nKGBbQmFja2dyb3VuZF0gVXNpbmcgb2Zmc2NyZWVuIHBhdGggZm9yIGNyZWF0aW9uOiAke09GRlNDUkVFTl9ET0NVTUVOVF9QQVRIfWApOyBcbiAgICB0cnkge1xuICAgICAgLy8gQHRzLWlnbm9yZSAtIGJyb3dzZXIub2Zmc2NyZWVuIG1heSBub3QgYmUgaW4gb2xkZXIgdHlwZXNcbiAgICAgIGF3YWl0IGJyb3dzZXIub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgICAgdXJsOiBPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCwgLy8gVXNlIHRoZSBoYXJkY29kZWQgcGF0aCBkaXJlY3RseVxuICAgICAgICAvLyBVc2UgYSB2YWxpZCByZWFzb24gLSBMT0NBTF9TVE9SQUdFIGlzIGNvbW1vbiBpZiBub3QgdXNpbmcgb3RoZXJzIGxpa2UgQVVESU9fUExBWUJBQ0tcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGJyb3dzZXIub2Zmc2NyZWVuIG1heSBub3QgYmUgaW4gb2xkZXIgdHlwZXNcbiAgICAgICAgcmVhc29uczogW2Jyb3dzZXIub2Zmc2NyZWVuLlJlYXNvbi5MT0NBTF9TVE9SQUdFXSwgXG4gICAgICAgIGp1c3RpZmljYXRpb246ICdEYXRhYmFzZSBvcGVyYXRpb25zIHVzaW5nIFBHbGl0ZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gT2Zmc2NyZWVuIGRvY3VtZW50IGNyZWF0aW9uIHJlcXVlc3RlZC4nKTsgXG4gICAgICAvLyBJdCBtaWdodCB0YWtlIGEgbW9tZW50IGZvciB0aGUgZG9jdW1lbnQgdG8gYWN0dWFsbHkgbG9hZCBhbmQgcnVuIGl0cyBzY3JpcHRcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDApKTsgLy8gQWRkIGEgc21hbGwgZGVsYXlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEVycm9yIGNyZWF0aW5nIG9mZnNjcmVlbiBkb2N1bWVudDonLCBlcnJvcik7XG4gICAgICAgLy8gUmUtdGhyb3cgdGhlIGVycm9yIHNvIHRoZSBjYWxsZXIga25vd3MgaXQgZmFpbGVkXG4gICAgICAgdGhyb3cgZXJyb3I7IFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBPZmZzY3JlZW4gZG9jdW1lbnQgYWxyZWFkeSBleGlzdHMuJyk7XG4gIH1cbn1cblxuLy8gZGVmaW5lQmFja2dyb3VuZCBpcyBnbG9iYWxseSBhdmFpbGFibGUgaGVyZSB0aGFua3MgdG8gV1hUXG5jb25zb2xlLmxvZygnQmFja2dyb3VuZCBzY3JpcHQgc2V0dXAgc3RhcnRpbmcuLi4nKTtcblxuLy8gLS0tIFN0YXJ0IEJhY2tncm91bmQgTG9naWMgKFdyYXBwZWQgaW4gZGVmaW5lQmFja2dyb3VuZCkgLS0tXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVCYWNrZ3JvdW5kKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ1dYVCBCYWNrZ3JvdW5kIGRlZmluZWQgKHVzaW5nIHd4dC91dGlscy9kZWZpbmUtYmFja2dyb3VuZCknKTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIGNsaXBwaW5nIHJlcXVlc3RzIGZyb20gcG9wdXAgLS0tXG4gIG9uTWVzc2FnZSgnY2xpcFBhZ2UnLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kOiBSZWNlaXZlZCBjbGlwUGFnZSBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBpZiAoIW1lc3NhZ2UuZGF0YSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkJhY2tncm91bmQ6IGNsaXBQYWdlIG1lc3NhZ2UgcmVjZWl2ZWQgd2l0aG91dCBkYXRhLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyB0aXRsZSwgdXJsIH0gPSBtZXNzYWdlLmRhdGE7XG5cbiAgICBjb25zdCBzcWwgPSBgSU5TRVJUIElOVE8gY2xpcHMgKHRpdGxlLCB1cmwpIFZBTFVFUyAoPywgPyk7YDtcbiAgICBjb25zdCBwYXJhbXMgPSBbdGl0bGUsIHVybF07XG5cbiAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZDogU2VuZGluZyBkYkV4ZWMgbWVzc2FnZSB0byBvZmZzY3JlZW4gZm9yIGNsaXBwaW5nLi4uJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRiUmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2UoJ2RiRXhlYycsIHsgc3FsOiBzcWwsIHBhcmFtczogcGFyYW1zIH0pO1xuICAgICAgY29uc29sZS5sb2coJ0JhY2tncm91bmQ6IE9mZnNjcmVlbiBkYkV4ZWMgcmVzcG9uc2U6JywgZGJSZXN1bHQpO1xuXG4gICAgICBjb25zb2xlLmxvZyhgQmFja2dyb3VuZDogU3VjY2Vzc2Z1bGx5IGNsaXBwZWQgJHt1cmx9YCk7XG4gICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKGBjbGlwLXN1Y2Nlc3MtJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLFxuICAgICAgICB0aXRsZTogJ0Jvb2ttYXJrIFNhdmVkJyxcbiAgICAgICAgbWVzc2FnZTogYFNhdmVkOiAke3RpdGxlfWAsXG4gICAgICAgIHByaW9yaXR5OiAwXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdCYWNrZ3JvdW5kOiBFcnJvciBleGVjdXRpbmcgY2xpcCB2aWEgb2Zmc2NyZWVuOicsIGVycm9yKTtcbiAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoYGNsaXAtZXJyb3ItJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLFxuICAgICAgICB0aXRsZTogJ0Jvb2ttYXJrIFNhdmluZyBGYWlsZWQnLFxuICAgICAgICBtZXNzYWdlOiBgQ291bGQgbm90IHNhdmUgJHt0aXRsZX0uIEVycm9yOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKX1gLFxuICAgICAgICBwcmlvcml0eTogMVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyAtLS0gTGlzdGVuZXIgdG8gZmV0Y2ggT2xsYW1hIG1vZGVscyAtLS1cbiAgb25NZXNzYWdlKCdnZXRPbGxhbWFNb2RlbHMnLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gUmVjZWl2ZWQgZ2V0T2xsYW1hTW9kZWxzIG1lc3NhZ2UnLCBtZXNzYWdlLmRhdGEpO1xuICAgIGlmICghbWVzc2FnZS5kYXRhIHx8ICFtZXNzYWdlLmRhdGEuZW5kcG9pbnQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gZ2V0T2xsYW1hTW9kZWxzIG1lc3NhZ2UgbWlzc2luZyBlbmRwb2ludC5cIik7XG4gICAgICBzZW5kTWVzc2FnZSgnZ2V0T2xsYW1hTW9kZWxzUmVzdWx0JywgeyBlbmRwb2ludDogdW5kZWZpbmVkLCBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdObyBlbmRwb2ludCByZWNlaXZlZCcgfSlcbiAgICAgICAgICAuY2F0Y2goKGU6IGFueSkgPT4gY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEZhaWxlZCB0byBzZW5kIGVycm9yOicsIGUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBlbmRwb2ludCB9ID0gbWVzc2FnZS5kYXRhO1xuICAgIGNvbnN0IHJlc3BvbnNlVGFyZ2V0ID0gJ2dldE9sbGFtYU1vZGVsc1Jlc3VsdCc7XG5cbiAgICBjb25zdCBmZXRjaFVybCA9IGAke2VuZHBvaW50fS9hcGkvdGFnc2A7XG4gICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBBdHRlbXB0aW5nIHRvIGZldGNoIG1vZGVscyBmcm9tOiAke2ZldGNoVXJsfWApO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoVXJsLCBmZXRjaE9wdGlvbnMpO1xuICAgICAgXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICBsZXQgZXJyb3JCb2R5ID0gJ1tDb3VsZCBub3QgcmVhZCBlcnJvciBib2R5XSc7XG4gICAgICAgICB0cnkgeyBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7IH0gY2F0Y2gge31cbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtCYWNrZ3JvdW5kXSBGZXRjaCBmYWlsZWQ6IFN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c30uIEJvZHk6YCwgZXJyb3JCb2R5KTtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIE9sbGFtYSBtb2RlbHM6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgXG4gICAgICBjb25zdCBtb2RlbHMgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlRGF0YT8ubW9kZWxzKSA/IHJlc3BvbnNlRGF0YS5tb2RlbHMubWFwKCh0YWc6IHsgbmFtZTogc3RyaW5nIH0pID0+ICh7IGlkOiB0YWcubmFtZSwgbmFtZTogdGFnLm5hbWUgfSkpIDogW107XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFN1Y2Nlc3NmdWxseSBmZXRjaGVkIE9sbGFtYSBtb2RlbHM6JywgbW9kZWxzKTtcbiAgICAgIHNlbmRNZXNzYWdlKHJlc3BvbnNlVGFyZ2V0LCB7IGVuZHBvaW50LCBzdWNjZXNzOiB0cnVlLCBtb2RlbHM6IG1vZGVscyB9KVxuICAgICAgICAuY2F0Y2goKGU6IGFueSkgPT4gY29uc29sZS5lcnJvcihgW0JhY2tncm91bmRdIEZhaWxlZCB0byBzZW5kICR7cmVzcG9uc2VUYXJnZXR9IHN1Y2Nlc3M6YCwgZSkpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEVycm9yIGR1cmluZyBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvciBmZXRjaGluZyBtb2RlbHMuJztcbiAgICAgIGlmIChlcnJvck1lc3NhZ2UuaW5jbHVkZXMoJ0ZhaWxlZCB0byBmZXRjaCcpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBcIi4gRW5zdXJlIE9sbGFtYSBpcyBydW5uaW5nIGFuZCByZWFjaGFibGUsIGFuZCBjaGVjayBleHRlbnNpb24gaG9zdCBwZXJtaXNzaW9ucy5cIjtcbiAgICAgIH1cbiAgICAgIHNlbmRNZXNzYWdlKHJlc3BvbnNlVGFyZ2V0LCB7IGVuZHBvaW50LCBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9KVxuICAgICAgICAuY2F0Y2goKGU6IGFueSkgPT4gY29uc29sZS5lcnJvcihgW0JhY2tncm91bmRdIEZhaWxlZCB0byBzZW5kICR7cmVzcG9uc2VUYXJnZXR9IGVycm9yOmAsIGUpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgQ2hhdCBSZXF1ZXN0cyAtLS1cbiAgb25NZXNzYWdlKCdvbGxhbWFDaGF0UmVxdWVzdCcsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0JhY2tncm91bmQ6IFJlY2VpdmVkIG9sbGFtYUNoYXRSZXF1ZXN0JywgbWVzc2FnZS5kYXRhKTtcbiAgICBpZiAoIW1lc3NhZ2UuZGF0YSB8fCAhbWVzc2FnZS5kYXRhLnByb21wdCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkJhY2tncm91bmQ6IG9sbGFtYUNoYXRSZXF1ZXN0IG1lc3NhZ2UgbWlzc2luZyBwcm9tcHQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHByb21wdCwgaGlzdG9yeSB9ID0gbWVzc2FnZS5kYXRhO1xuXG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZFVzZXJDb25maWcoKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgY29uc29sZS5lcnJvcihcIkJhY2tncm91bmQ6IENhbm5vdCBwcm9jZXNzIGNoYXQgcmVxdWVzdCwgdXNlciBjb25maWcgbm90IGZvdW5kLlwiKTtcbiAgICAgIHNlbmRNZXNzYWdlKCdvbGxhbWFSZXNwb25zZScsIHtcbiAgICAgICAgbW9kZWw6ICd1bmtub3duJyxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIGVycm9yOiBcIkxMTSBjb25maWd1cmF0aW9uIG5vdCBmb3VuZC4gUGxlYXNlIHNldCBpdCB1cCBpbiB0aGUgc2V0dGluZ3MuXCJcbiAgICAgIH0pLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBjb25maWcgZXJyb3IgbWVzc2FnZTpcIiwgZSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdHJlYW1DaGF0UmVzcG9uc2UoeyBwcm9tcHQsIGhpc3Rvcnk6IGhpc3RvcnkgfHwgW10sIGNvbmZpZyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQmFja2dyb3VuZDogc3RyZWFtQ2hhdFJlc3BvbnNlIHByb2Nlc3NpbmcgaW5pdGlhdGVkLlwiKTtcbiAgICB9IGNhdGNoIChzdHJlYW1FcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0JhY2tncm91bmRdIEVycm9yIGludm9raW5nIHN0cmVhbUNoYXRSZXNwb25zZTpcIiwgc3RyZWFtRXJyb3IpO1xuICAgICAgc2VuZE1lc3NhZ2UoJ29sbGFtYVJlc3BvbnNlJywge1xuICAgICAgICBtb2RlbDogY29uZmlnLmNoYXRNb2RlbCB8fCAndW5rbm93bicsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBlcnJvcjogc3RyZWFtRXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IHN0cmVhbUVycm9yLm1lc3NhZ2UgOiBcIkVycm9yIGR1cmluZyBzdHJlYW1pbmdcIlxuICAgICAgfSkuY2F0Y2goKGU6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIHN0cmVhbSBlcnJvciBtZXNzYWdlOlwiLCBlKSk7XG4gICAgfVxuICB9KTtcblxuICAvLyAtLS0gTGlzdGVuZXIgZm9yIEZsYXNoY2FyZCBDb250ZW50IEdlbmVyYXRpb24gLS0tXG4gIG9uTWVzc2FnZSgnZ2VuZXJhdGVGbGFzaGNhcmRDb250ZW50JywgYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIFJlY2VpdmVkIGdlbmVyYXRlRmxhc2hjYXJkQ29udGVudCBtZXNzYWdlJywgbWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCByZXNwb25zZVRhcmdldCA9ICdmbGFzaGNhcmRHZW5lcmF0aW9uUmVzdWx0JztcbiAgICBpZiAoIW1lc3NhZ2UuZGF0YSB8fCAhbWVzc2FnZS5kYXRhLnRleHQpIHsgXG4gICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gTm8gdGV4dCBwcm92aWRlZCBmb3IgZmxhc2hjYXJkIGdlbmVyYXRpb24uJyk7XG4gICAgICBzZW5kTWVzc2FnZShyZXNwb25zZVRhcmdldCwgeyBkYXRhOiBudWxsLCBlcnJvcjogJ05vIHRleHQgcHJvdmlkZWQnIH0pXG4gICAgICAgIC5jYXRjaCgoZTogYW55KSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgZXJyb3IgcmVzdWx0OlwiLCBlKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgdGV4dCB9ID0gbWVzc2FnZS5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdlbmVyYXRlRmxhc2hjYXJkQ29udGVudEZyb21UZXh0KHRleHQpO1xuICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBSZWNlaXZlZCByZXN1bHQgZnJvbSBsbG1TZXJ2aWNlOicsIHJlc3VsdCk7XG5cbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MCkpO1xuICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBBdHRlbXB0aW5nIHRvIHNlbmQgZmxhc2hjYXJkIHJlc3VsdCBhZnRlciBkZWxheS4uLicpO1xuXG4gICAgICBzZW5kTWVzc2FnZShyZXNwb25zZVRhcmdldCwgeyBkYXRhOiByZXN1bHQsIGVycm9yOiB1bmRlZmluZWQgfSlcbiAgICAgICAgLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBmbGFzaGNhcmQgcmVzdWx0OlwiLCBlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEVycm9yIGR1cmluZyBmbGFzaGNhcmQgZ2VuZXJhdGlvbjonLCBlcnJvcik7XG4gICAgICBzZW5kTWVzc2FnZShyZXNwb25zZVRhcmdldCwgeyBkYXRhOiBudWxsLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvciBkdXJpbmcgZ2VuZXJhdGlvbicgfSlcbiAgICAgICAgLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBlcnJvciByZXN1bHQ6XCIsIGUpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciBmb3IgQ2hhdCBIaXN0b3J5IFJlcXVlc3RzIC0tLVxuICAvLyAuLi4gKHBsYWNlaG9sZGVyKVxuXG4gIC8vICsrKyBORVcgTElTVEVORVIgZm9yIGdldFBhZ2VJbmZvICsrK1xuICBvbk1lc3NhZ2UoJ2dldFBhZ2VJbmZvJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gUmVjZWl2ZWQgZ2V0UGFnZUluZm8gcmVxdWVzdC4nKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdGFicyA9IGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzWzBdO1xuICAgICAgaWYgKGN1cnJlbnRUYWIgJiYgY3VycmVudFRhYi51cmwgJiYgY3VycmVudFRhYi50aXRsZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltCYWNrZ3JvdW5kXSBTZW5kaW5nIHBhZ2UgaW5mbzpcIiwgeyB0aXRsZTogY3VycmVudFRhYi50aXRsZSwgdXJsOiBjdXJyZW50VGFiLnVybCB9KTtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGU6IGN1cnJlbnRUYWIudGl0bGUsIHVybDogY3VycmVudFRhYi51cmwgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltCYWNrZ3JvdW5kXSBDb3VsZCBub3QgZ2V0IGFjdGl2ZSB0YWIgaW5mby5cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gRXJyb3IgZ2V0dGluZyBwYWdlIGluZm86XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBnZXRTZWxlY3RlZFRleHQgLS0tXG4gIG9uTWVzc2FnZSgnZ2V0U2VsZWN0ZWRUZXh0JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gUmVjZWl2ZWQgZ2V0U2VsZWN0ZWRUZXh0IHJlcXVlc3QgKGZyb20gVUkpLicpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0YWJzID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICAgICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNbMF07XG4gICAgICBpZiAoIWN1cnJlbnRUYWIgfHwgIWN1cnJlbnRUYWIuaWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0JhY2tncm91bmRdIENvdWxkIG5vdCBnZXQgYWN0aXZlIHRhYiBJRCBmb3Igc2NyaXB0IGluamVjdGlvbi5cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFiSWQgPSBjdXJyZW50VGFiLmlkO1xuXG4gICAgICBsZXQgbmVlZHNJbmplY3Rpb24gPSB0cnVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgIC8vIFBpbmcgY2hlY2sgcmVtYWlucyB0aGUgc2FtZVxuICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgdHlwZTogJ3BpbmcnIH0pOyBcbiAgICAgICAgIGlmIChyZXNwb25zZSAmJiAocmVzcG9uc2UgYXMgYW55KS5wb25nKSB7XG4gICAgICAgICAgICBuZWVkc0luamVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIltCYWNrZ3JvdW5kXSBQaW5nIGZhaWxlZDogQ29udGVudCBzY3JpcHQgbGlrZWx5IG5vdCBpbmplY3RlZCBvciBpbmFjY2Vzc2libGUuXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZHNJbmplY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBJbmplY3RpbmcgY29udGVudCBzY3JpcHQgaW50byB0YWIgJHt0YWJJZH0uLi5gKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGJyb3dzZXIuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSwgLy8gVXNlIHRhYklkIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgZmlsZXM6IFsnY29udGVudC1zY3JpcHRzL2NvbnRlbnQuanMnXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBDb250ZW50IHNjcmlwdCBpbmplY3RlZC5gKTtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDApKTtcbiAgICAgICAgfSBjYXRjaCAoaW5qZWN0aW9uRXJyb3I6IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0JhY2tncm91bmRdIEZhaWxlZCB0byBpbmplY3QgY29udGVudCBzY3JpcHQgaW50byB0YWIgJHt0YWJJZH06YCwgaW5qZWN0aW9uRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVXNlIHRoZSB0eXBlZCBzZW5kTWVzc2FnZSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBjb250ZW50IHNjcmlwdFxuICAgICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBTZW5kaW5nIF9yZXF1ZXN0U2VsZWN0aW9uRnJvbUNvbnRlbnRTY3JpcHQgbWVzc2FnZSB0byB0YWIgJHt0YWJJZH0uLi5gKTtcbiAgICAgIC8vIFBhc3MgdW5kZWZpbmVkIGFzIGRhdGEgKHNpbmNlIHJlcXVlc3QgaXMgdm9pZCkgYW5kIHNwZWNpZnkgdGFiSWRcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGF3YWl0IHNlbmRNZXNzYWdlKCdfcmVxdWVzdFNlbGVjdGlvbkZyb21Db250ZW50U2NyaXB0JywgdW5kZWZpbmVkLCB7IHRhYklkIH0pOyBcbiAgICAgIGNvbnNvbGUubG9nKFwiW0JhY2tncm91bmRdIFJlY2VpdmVkIHNlbGVjdGlvbiBmcm9tIGNvbnRlbnQgc2NyaXB0IHZpYSBzZW5kTWVzc2FnZTpcIiwgc2VsZWN0aW9uKTtcbiAgICAgIC8vIHNlbGVjdGlvbiBzdHJ1Y3R1cmUgaXMgeyB0ZXh0OiBzdHJpbmcgfSB8IG51bGwgZnJvbSBQcm90b2NvbE1hcFxuICAgICAgcmV0dXJuIHNlbGVjdGlvbiAmJiB0eXBlb2Ygc2VsZWN0aW9uLnRleHQgPT09ICdzdHJpbmcnID8geyB0ZXh0OiBzZWxlY3Rpb24udGV4dCB9IDogbnVsbDtcblxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gRXJyb3IgaW4gZ2V0U2VsZWN0ZWRUZXh0IGhhbmRsZXI6XCIsIGVycm9yKTtcbiAgICAgICBpZiAoZXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoXCJDb3VsZCBub3QgZXN0YWJsaXNoIGNvbm5lY3Rpb25cIikpIHtcbiAgICAgICAgIGNvbnNvbGUud2FybihcIltCYWNrZ3JvdW5kXSBDb25uZWN0aW9uIGVycm9yIGxpa2VseSBtZWFucyB0aGUgY29udGVudCBzY3JpcHQgd2Fzbid0IHJlYWR5IG9yIHBhZ2UgaXMgcmVzdHJpY3RlZC5cIik7XG4gICAgICAgfSBlbHNlIGlmIChlcnJvci5tZXNzYWdlPy5pbmNsdWRlcyhcIk5vIG1hdGNoaW5nIG1lc3NhZ2UgaGFuZGxlclwiKSkge1xuICAgICAgICAgY29uc29sZS53YXJuKFwiW0JhY2tncm91bmRdICdObyBtYXRjaGluZyBtZXNzYWdlIGhhbmRsZXInIGxpa2VseSBtZWFucyB0aGUgY29udGVudCBzY3JpcHQgaXMgbm90IGluamVjdGVkIG9yIGxpc3RlbmluZyBjb3JyZWN0bHkgZm9yIF9yZXF1ZXN0U2VsZWN0aW9uRnJvbUNvbnRlbnRTY3JpcHQuXCIpO1xuICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoXCJbbWVzc2FnaW5nXVwiKSkgeyAvLyBDYXRjaCBwb3RlbnRpYWwgbWVzc2FnaW5nIGZvcm1hdCBlcnJvcnNcbiAgICAgICAgIGNvbnNvbGUud2FybihcIltCYWNrZ3JvdW5kXSBNZXNzYWdpbmcgZm9ybWF0IGVycm9yIGR1cmluZyBnZXRTZWxlY3RlZFRleHQuIENoZWNrIFByb3RvY29sTWFwIGFuZCBsaXN0ZW5lcnMuXCIsIGVycm9yKTtcbiAgICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vICsrKyBORVcgTElTVEVORVIgZm9yIHRyYW5zbGF0ZVRleHQgKysrXG4gIG9uTWVzc2FnZSgndHJhbnNsYXRlVGV4dCcsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJbQmFja2dyb3VuZF0gUmVjZWl2ZWQgdHJhbnNsYXRlVGV4dCByZXF1ZXN0XCIsIG1lc3NhZ2UuZGF0YSk7XG4gICAgaWYgKCFtZXNzYWdlLmRhdGEgfHwgIW1lc3NhZ2UuZGF0YS50ZXh0IHx8ICFtZXNzYWdlLmRhdGEudGFyZ2V0TGFuZykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFja2dyb3VuZDogTWlzc2luZyB0ZXh0IG9yIHRhcmdldCBsYW5ndWFnZSBmb3IgdHJhbnNsYXRpb24uXCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHRleHQgb3IgdGFyZ2V0IGxhbmd1YWdlIGZvciB0cmFuc2xhdGlvbi5cIik7XG4gICAgfVxuICAgIGNvbnN0IHsgdGV4dCwgdGFyZ2V0TGFuZyB9ID0gbWVzc2FnZS5kYXRhO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWQgPSBhd2FpdCB0cmFuc2xhdGVUZXh0KHRleHQsIHRhcmdldExhbmcpO1xuICAgICAgICBpZiAodHJhbnNsYXRlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltCYWNrZ3JvdW5kXSBUcmFuc2xhdGlvbiBzZXJ2aWNlIHJldHVybmVkIG51bGwuXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJhbnNsYXRpb24gZmFpbGVkIG9yIHJldHVybmVkIG51bGwuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0JhY2tncm91bmRdIFRyYW5zbGF0aW9uIHN1Y2Nlc3NmdWw6XCIsIHRyYW5zbGF0ZWQpO1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlZDtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQmFja2dyb3VuZF0gVHJhbnNsYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgXCJUcmFuc2xhdGlvbiBmYWlsZWRcIik7XG4gICAgfVxuICB9KTtcblxuICAvLyArKysgTkVXIExJU1RFTkVSIGZvciBzYXZlRmxhc2hjYXJkQW5kTm90aWZ5ICsrK1xuICBvbk1lc3NhZ2UoJ3NhdmVGbGFzaGNhcmRBbmROb3RpZnknLCBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gUmVjZWl2ZWQgc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeSByZXF1ZXN0OicsIG1lc3NhZ2UuZGF0YSk7XG4gICAgaWYgKCFtZXNzYWdlLmRhdGEgfHwgIW1lc3NhZ2UuZGF0YS5jYXJkRGF0YSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFja2dyb3VuZDogc2F2ZUZsYXNoY2FyZEFuZE5vdGlmeSBtZXNzYWdlIHJlY2VpdmVkIHdpdGhvdXQgY2FyZERhdGEuXCIpO1xuICAgICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKGBmbGFzaGNhcmQtc2F2ZS1lcnJvci0ke0RhdGUubm93KCl9YCwge1xuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJy9pY29uLzEyOC5wbmcnKSxcbiAgICAgICAgICAgIHRpdGxlOiAnRmxhc2hjYXJkIFNhdmUgRmFpbGVkJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBFcnJvcjogTWlzc2luZyBmbGFzaGNhcmQgZGF0YS5gLFxuICAgICAgICAgICAgcHJpb3JpdHk6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IGNhcmREYXRhIH0gPSBtZXNzYWdlLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbmV3Rmxhc2hjYXJkID0gYXdhaXQgY3JlYXRlRmxhc2hjYXJkKGNhcmREYXRhIGFzIGFueSk7XG4gICAgICBjb25zb2xlLmxvZygnW0JhY2tncm91bmRdIEZsYXNoY2FyZCBjcmVhdGVkIGluIERCOicsIG5ld0ZsYXNoY2FyZCk7XG5cbiAgICAgIGF3YWl0IGNyZWF0ZUNoYXRNZXNzYWdlKHsgcm9sZTogJ2ZsYXNoY2FyZCcsIGZsYXNoY2FyZF9pZDogbmV3Rmxhc2hjYXJkLmlkIH0pO1xuICAgICAgY29uc29sZS5sb2coYFtCYWNrZ3JvdW5kXSBBc3NvY2lhdGVkIGNoYXQgbWVzc2FnZSBjcmVhdGVkIGZvciBmbGFzaGNhcmQgSUQ6ICR7bmV3Rmxhc2hjYXJkLmlkfWApO1xuXG4gICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKGBmbGFzaGNhcmQtc2F2ZS1zdWNjZXNzLSR7RGF0ZS5ub3coKX1gLCB7XG4gICAgICAgIHR5cGU6ICdiYXNpYycsXG4gICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJy9pY29uLzEyOC5wbmcnKSxcbiAgICAgICAgdGl0bGU6ICdGbGFzaGNhcmQgU2F2ZWQnLFxuICAgICAgICBtZXNzYWdlOiBgU2F2ZWQ6ICR7Y2FyZERhdGEuZnJvbnQgfHwgJ0Nsb3plIENhcmQnfWAsXG4gICAgICAgIHByaW9yaXR5OiAwXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdGbGFzaGNhcmQ7XG5cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQmFja2dyb3VuZF0gRXJyb3Igc2F2aW5nIGZsYXNoY2FyZCBvciBjcmVhdGluZyBjaGF0IG1lc3NhZ2U6JywgZXJyb3IpO1xuICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZShgZmxhc2hjYXJkLXNhdmUtZXJyb3ItJHtEYXRlLm5vdygpfWAsIHtcbiAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnL2ljb24vMTI4LnBuZycpLFxuICAgICAgICB0aXRsZTogJ0ZsYXNoY2FyZCBTYXZlIEZhaWxlZCcsXG4gICAgICAgIG1lc3NhZ2U6IGBFcnJvcjogJHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJ31gLFxuICAgICAgICBwcmlvcml0eTogMVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBMaXN0ZW5lciB0byBzYXZlIHVzZXIgY29uZmlndXJhdGlvbiAtLS1cbiAgb25NZXNzYWdlKCdzYXZlQ29uZmlndXJhdGlvbicsIGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBSZWNlaXZlZCBzYXZlQ29uZmlndXJhdGlvbiByZXF1ZXN0Li4uJyk7IC8vIExvZyBkYXRhIHJlY2VwdGlvblxuICAgIGlmICghbWVzc2FnZS5kYXRhIHx8ICFtZXNzYWdlLmRhdGEuY29uZmlnSnNvbikge1xuICAgICAgY29uc29sZS5lcnJvcihcIltCYWNrZ3JvdW5kXSBzYXZlQ29uZmlndXJhdGlvbiBtZXNzYWdlIHJlY2VpdmVkIHdpdGhvdXQgY29uZmlnSnNvbi5cIik7XG4gICAgICAvLyBUaGUgcHJvdG9jb2wgbWFwIGV4cGVjdHMgUHJvbWlzZTx2b2lkPiwgc28gd2UgdGhyb3cgYW4gZXJyb3Igb24gZmFpbHVyZVxuICAgICAgLy8gaW5zdGVhZCBvZiByZXR1cm5pbmcgYW4gb2JqZWN0LlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29uZmlndXJhdGlvbiBKU09OIHN0cmluZyByZWNlaXZlZC5cIik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyBQYXJzZSB0aGUgSlNPTiBzdHJpbmcgdG8gZ2V0IHRoZSBjb25maWcgb2JqZWN0XG4gICAgICBjb25zdCBjb25maWdPYmplY3QgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YS5jb25maWdKc29uKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gUGFyc2VkIGNvbmZpZ3VyYXRpb24gb2JqZWN0OicsIGNvbmZpZ09iamVjdCk7XG5cbiAgICAgIC8vIFNhdmUgdGhlIHBhcnNlZCBvYmplY3QgdW5kZXIgdGhlIHVzZXJDb25maWcga2V5XG4gICAgICBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgdXNlckNvbmZpZzogY29uZmlnT2JqZWN0IH0pO1xuICAgICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBVc2VyIGNvbmZpZ3VyYXRpb24gc2F2ZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgLy8gUHJvbWlzZTx2b2lkPiByZXNvbHZlcyBpbXBsaWNpdGx5IG9uIHN1Y2Nlc3NmdWwgY29tcGxldGlvblxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBFcnJvciBzYXZpbmcgdXNlciBjb25maWd1cmF0aW9uOicsIGVycm9yKTtcbiAgICAgIC8vIFRocm93IHRoZSBlcnJvciB0byBzaWduYWwgZmFpbHVyZSwgYXMgdGhlIHJldHVybiB0eXBlIGlzIFByb21pc2U8dm9pZD5cbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yIHNhdmluZyBjb25maWcnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLSBBZGQgb3RoZXIgYmFja2dyb3VuZCBsaXN0ZW5lcnMgaGVyZSAoZS5nLiwgYWxhcm1zLCBvdGhlciBtZXNzYWdlcykgLS0tXG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBpbnN0YWxsL3VwZGF0ZSBldmVudHMgLS0tXG4gIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoZGV0YWlscykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdFeHRlbnNpb24gaW5zdGFsbGVkOicsIGRldGFpbHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlYXNvbiBmb3IgdGhlIGV2ZW50IGlzIHRoZSBpbml0aWFsIGluc3RhbGxhdGlvblxuICAgIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGVyZm9ybWluZyBmaXJzdC10aW1lIHNldHVwLi4uJyk7XG4gICAgICAvLyBPbmx5IG5lZWQgdG8gZW5zdXJlIG9mZnNjcmVlbiBkb2N1bWVudCBleGlzdHMuIFNjaGVtYSBpcyBpbml0aWFsaXplZCB3aXRoaW4gb2Zmc2NyZWVuLnRzLlxuICAgICAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCgpLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tCYWNrZ3JvdW5kXSBJbml0aWFsIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQgZmFpbGVkIG9uIGluc3RhbGw6JywgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENvbnN0cnVjdCB0aGUgVVJMIGZvciB0aGUgb25ib2FyZGluZyBwYWdlXG4gICAgICBjb25zdCB1cmwgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdvbmJvYXJkaW5nLmh0bWwnKTtcblxuICAgICAgLy8gT3BlbiB0aGUgb25ib2FyZGluZyBwYWdlIGluIGEgbmV3IHRhYlxuICAgICAgYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coYE9wZW5lZCBvbmJvYXJkaW5nIHBhZ2U6ICR7dXJsfWApO1xuICAgIH0gZWxzZSBpZiAoZGV0YWlscy5yZWFzb24gPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBPcHRpb25hbDogSGFuZGxlIHVwZGF0ZXMsIGUuZy4sIHNob3cgbm90aWZpY2F0aW9ucyBvciBtaWdyYXRlIGRhdGFcbiAgICAgIGNvbnNvbGUubG9nKGBbQmFja2dyb3VuZF0gVXBkYXRlZCBmcm9tICR7ZGV0YWlscy5wcmV2aW91c1ZlcnNpb259IHRvICR7YnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbn1gKTtcbiAgICAgIC8vIFVuY29tbWVudCB0byBvcGVuIHNldHRpbmdzIG9uIHVwZGF0ZTpcbiAgICAgIC8vIHRyeSB7XG4gICAgICAvLyAgIGF3YWl0IGJyb3dzZXIucnVudGltZS5vcGVuT3B0aW9uc1BhZ2UoKTtcbiAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIEVycm9yIG9wZW5pbmcgc2V0dGluZ3MgcGFnZSBvbiB1cGRhdGU6JywgZXJyb3IpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gLS0tIExpc3RlbmVyIGZvciBicm93c2VyIHN0YXJ0dXAgLS0tXG4gIC8vIFVzZSBvblN0YXJ0dXAgdG8gZW5zdXJlIHRoZSBvZmZzY3JlZW4gZG9jdW1lbnQgaXMgcmVhZHkgd2hlbiB0aGUgYnJvd3NlciBzdGFydHNcbiAgYnJvd3Nlci5ydW50aW1lLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1tCYWNrZ3JvdW5kXSBCcm93c2VyIHN0YXJ0dXAgZGV0ZWN0ZWQuIFNldHRpbmcgdXAgb2Zmc2NyZWVuIGRvY3VtZW50Li4uJyk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbQmFja2dyb3VuZF0gT2Zmc2NyZWVuIGRvY3VtZW50IHNldHVwIGNvbXBsZXRlIG9uIHN0YXJ0dXAuJyk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0JhY2tncm91bmRdIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQgZmFpbGVkIG9uIHN0YXJ0dXA6JywgZXJyb3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ0JhY2tncm91bmQgc2NyaXB0IHNldHVwIGNvbXBsZXRlLicpO1xufSk7ICIsIi8vICNyZWdpb24gc25pcHBldFxuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBnbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWU/LmlkXG4gID8gZ2xvYmFsVGhpcy5icm93c2VyXG4gIDogZ2xvYmFsVGhpcy5jaHJvbWU7XG4vLyAjZW5kcmVnaW9uIHNuaXBwZXRcbiIsImltcG9ydCB7IGJyb3dzZXIgYXMgX2Jyb3dzZXIgfSBmcm9tIFwiQHd4dC1kZXYvYnJvd3NlclwiO1xuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBfYnJvd3NlcjtcbmV4cG9ydCB7fTtcbiIsIi8vIHNyYy9pbmRleC50c1xudmFyIF9NYXRjaFBhdHRlcm4gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoUGF0dGVybikge1xuICAgIGlmIChtYXRjaFBhdHRlcm4gPT09IFwiPGFsbF91cmxzPlwiKSB7XG4gICAgICB0aGlzLmlzQWxsVXJscyA9IHRydWU7XG4gICAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IFsuLi5fTWF0Y2hQYXR0ZXJuLlBST1RPQ09MU107XG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBcIipcIjtcbiAgICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IFwiKlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBncm91cHMgPSAvKC4qKTpcXC9cXC8oLio/KShcXC8uKikvLmV4ZWMobWF0Y2hQYXR0ZXJuKTtcbiAgICAgIGlmIChncm91cHMgPT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4obWF0Y2hQYXR0ZXJuLCBcIkluY29ycmVjdCBmb3JtYXRcIik7XG4gICAgICBjb25zdCBbXywgcHJvdG9jb2wsIGhvc3RuYW1lLCBwYXRobmFtZV0gPSBncm91cHM7XG4gICAgICB2YWxpZGF0ZVByb3RvY29sKG1hdGNoUGF0dGVybiwgcHJvdG9jb2wpO1xuICAgICAgdmFsaWRhdGVIb3N0bmFtZShtYXRjaFBhdHRlcm4sIGhvc3RuYW1lKTtcbiAgICAgIHZhbGlkYXRlUGF0aG5hbWUobWF0Y2hQYXR0ZXJuLCBwYXRobmFtZSk7XG4gICAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IHByb3RvY29sID09PSBcIipcIiA/IFtcImh0dHBcIiwgXCJodHRwc1wiXSA6IFtwcm90b2NvbF07XG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBob3N0bmFtZTtcbiAgICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IHBhdGhuYW1lO1xuICAgIH1cbiAgfVxuICBpbmNsdWRlcyh1cmwpIHtcbiAgICBpZiAodGhpcy5pc0FsbFVybHMpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCB1ID0gdHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIiA/IG5ldyBVUkwodXJsKSA6IHVybCBpbnN0YW5jZW9mIExvY2F0aW9uID8gbmV3IFVSTCh1cmwuaHJlZikgOiB1cmw7XG4gICAgcmV0dXJuICEhdGhpcy5wcm90b2NvbE1hdGNoZXMuZmluZCgocHJvdG9jb2wpID0+IHtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzSHR0cE1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBzXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzSHR0cHNNYXRjaCh1KTtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJmaWxlXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzRmlsZU1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImZ0cFwiKVxuICAgICAgICByZXR1cm4gdGhpcy5pc0Z0cE1hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcInVyblwiKVxuICAgICAgICByZXR1cm4gdGhpcy5pc1Vybk1hdGNoKHUpO1xuICAgIH0pO1xuICB9XG4gIGlzSHR0cE1hdGNoKHVybCkge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cDpcIiAmJiB0aGlzLmlzSG9zdFBhdGhNYXRjaCh1cmwpO1xuICB9XG4gIGlzSHR0cHNNYXRjaCh1cmwpIHtcbiAgICByZXR1cm4gdXJsLnByb3RvY29sID09PSBcImh0dHBzOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybCk7XG4gIH1cbiAgaXNIb3N0UGF0aE1hdGNoKHVybCkge1xuICAgIGlmICghdGhpcy5ob3N0bmFtZU1hdGNoIHx8ICF0aGlzLnBhdGhuYW1lTWF0Y2gpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaG9zdG5hbWVNYXRjaFJlZ2V4cyA9IFtcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaCksXG4gICAgICB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLmhvc3RuYW1lTWF0Y2gucmVwbGFjZSgvXlxcKlxcLi8sIFwiXCIpKVxuICAgIF07XG4gICAgY29uc3QgcGF0aG5hbWVNYXRjaFJlZ2V4ID0gdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5wYXRobmFtZU1hdGNoKTtcbiAgICByZXR1cm4gISFob3N0bmFtZU1hdGNoUmVnZXhzLmZpbmQoKHJlZ2V4KSA9PiByZWdleC50ZXN0KHVybC5ob3N0bmFtZSkpICYmIHBhdGhuYW1lTWF0Y2hSZWdleC50ZXN0KHVybC5wYXRobmFtZSk7XG4gIH1cbiAgaXNGaWxlTWF0Y2godXJsKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IGZpbGU6Ly8gcGF0dGVybiBtYXRjaGluZy4gT3BlbiBhIFBSIHRvIGFkZCBzdXBwb3J0XCIpO1xuICB9XG4gIGlzRnRwTWF0Y2godXJsKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IGZ0cDovLyBwYXR0ZXJuIG1hdGNoaW5nLiBPcGVuIGEgUFIgdG8gYWRkIHN1cHBvcnRcIik7XG4gIH1cbiAgaXNVcm5NYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogdXJuOi8vIHBhdHRlcm4gbWF0Y2hpbmcuIE9wZW4gYSBQUiB0byBhZGQgc3VwcG9ydFwiKTtcbiAgfVxuICBjb252ZXJ0UGF0dGVyblRvUmVnZXgocGF0dGVybikge1xuICAgIGNvbnN0IGVzY2FwZWQgPSB0aGlzLmVzY2FwZUZvclJlZ2V4KHBhdHRlcm4pO1xuICAgIGNvbnN0IHN0YXJzUmVwbGFjZWQgPSBlc2NhcGVkLnJlcGxhY2UoL1xcXFxcXCovZywgXCIuKlwiKTtcbiAgICByZXR1cm4gUmVnRXhwKGBeJHtzdGFyc1JlcGxhY2VkfSRgKTtcbiAgfVxuICBlc2NhcGVGb3JSZWdleChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbiAgfVxufTtcbnZhciBNYXRjaFBhdHRlcm4gPSBfTWF0Y2hQYXR0ZXJuO1xuTWF0Y2hQYXR0ZXJuLlBST1RPQ09MUyA9IFtcImh0dHBcIiwgXCJodHRwc1wiLCBcImZpbGVcIiwgXCJmdHBcIiwgXCJ1cm5cIl07XG52YXIgSW52YWxpZE1hdGNoUGF0dGVybiA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtYXRjaFBhdHRlcm4sIHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIG1hdGNoIHBhdHRlcm4gXCIke21hdGNoUGF0dGVybn1cIjogJHtyZWFzb259YCk7XG4gIH1cbn07XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3RvY29sKG1hdGNoUGF0dGVybiwgcHJvdG9jb2wpIHtcbiAgaWYgKCFNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmluY2x1ZGVzKHByb3RvY29sKSAmJiBwcm90b2NvbCAhPT0gXCIqXCIpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICBtYXRjaFBhdHRlcm4sXG4gICAgICBgJHtwcm90b2NvbH0gbm90IGEgdmFsaWQgcHJvdG9jb2wgKCR7TWF0Y2hQYXR0ZXJuLlBST1RPQ09MUy5qb2luKFwiLCBcIil9KWBcbiAgICApO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVIb3N0bmFtZShtYXRjaFBhdHRlcm4sIGhvc3RuYW1lKSB7XG4gIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIjpcIikpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4obWF0Y2hQYXR0ZXJuLCBgSG9zdG5hbWUgY2Fubm90IGluY2x1ZGUgYSBwb3J0YCk7XG4gIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIipcIikgJiYgaG9zdG5hbWUubGVuZ3RoID4gMSAmJiAhaG9zdG5hbWUuc3RhcnRzV2l0aChcIiouXCIpKVxuICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKFxuICAgICAgbWF0Y2hQYXR0ZXJuLFxuICAgICAgYElmIHVzaW5nIGEgd2lsZGNhcmQgKCopLCBpdCBtdXN0IGdvIGF0IHRoZSBzdGFydCBvZiB0aGUgaG9zdG5hbWVgXG4gICAgKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlUGF0aG5hbWUobWF0Y2hQYXR0ZXJuLCBwYXRobmFtZSkge1xuICByZXR1cm47XG59XG5leHBvcnQge1xuICBJbnZhbGlkTWF0Y2hQYXR0ZXJuLFxuICBNYXRjaFBhdHRlcm5cbn07XG4iXSwibmFtZXMiOlsidGhpcyIsIm1vZHVsZSIsInByb3h5VGFyZ2V0IiwidmFsdWUiLCJvbk1lc3NhZ2UiLCJyZXN1bHQiLCJtZXNzYWdlIiwiRXJyb3IiLCJfX2RlZlByb3AiLCJfX2RlZk5vcm1hbFByb3AiLCJ4IiwiX2IiLCJfYjIiLCJfYSIsInYiLCJPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCIsImJyb3dzZXIiLCJjcmVhdGVFbXB0eUNhcmQiLCJTdGF0ZSIsInBhcnNlZEpzb24iLCJfYnJvd3NlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQUMsU0FBVSxRQUFRLFNBQVM7QUFHaUI7QUFDekMsa0JBQVEsTUFBTTtBQUFBLFFBQ2xCO0FBQUEsTUFPQSxHQUFHLE9BQU8sZUFBZSxjQUFjLGFBQWEsT0FBTyxTQUFTLGNBQWMsT0FBT0EsbUJBQU0sU0FBVUMsU0FBUTtBQVMvRyxZQUFJLEVBQUUsV0FBVyxV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R0FBRSxRQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sR0FBRSxPQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssR0FBRSxRQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQWlCLE9BQUssVUFBVSxZQUFVLFNBQVMsR0FBRSxHQUFFO0FBQUMsV0FBTyxFQUFFLE1BQUssR0FBRSxDQUFDO0FBQUEsRUFBQyxHQUFFLEtBQUssVUFBVSxPQUFLLFNBQVMsR0FBRSxHQUFFO0FBQUMsV0FBTyxFQUFFLE1BQUssR0FBRSxDQUFDO0FBQUEsRUFBQyxHQUFFLEtBQUssVUFBVSxTQUFPLFdBQVU7QUFBQyxXQUFPLEVBQUUsSUFBSTtBQUFBLEVBQUMsR0FBRSxLQUFLLFVBQVUsWUFBVSxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBTyxFQUFFLE1BQUssR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUUsV0FBUyxFQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBTyxJQUFJLEtBQUssSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVUsSUFBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBTyxJQUFHLElBQUUsS0FBRyxHQUFHO0FBQUEsRUFBQztBQUFDLFdBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxPQUFNLElBQUksTUFBTSxjQUFjO0FBQUUsVUFBTSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBUyxJQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBTztBQUFHLFFBQUksSUFBRTtBQUFFLFlBQU8sR0FBQztBQUFBLE1BQUUsS0FBSTtBQUFPLFlBQUUsS0FBSyxNQUFNLEtBQUcsS0FBRyxLQUFHLEtBQUcsSUFBSTtBQUFFO0FBQUEsTUFBTSxLQUFJO0FBQVUsWUFBRSxLQUFLLE1BQU0sS0FBRyxLQUFHLElBQUk7QUFBRTtBQUFBLElBQUs7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxFQUFFLFlBQVcsR0FBRyxJQUFFLEVBQUUsU0FBUSxJQUFHLEdBQUUsSUFBRSxFQUFFLFFBQU8sR0FBRyxJQUFFLEVBQUUsU0FBUSxHQUFHLElBQUUsRUFBRSxjQUFhLElBQUUsRUFBRSxXQUFZO0FBQUMsV0FBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFBRTtBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsV0FBTyxJQUFFLEtBQUcsSUFBSSxDQUFDLEtBQUcsR0FBRyxDQUFDO0FBQUEsRUFBRTtBQUFDLFFBQU0sSUFBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLElBQUUsQ0FBQyxVQUFTLE9BQU0sUUFBTyxPQUFNLFNBQVEsTUFBTTtBQUFFLFdBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUU7QUFBQyxRQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsV0FBUyxFQUFFLFdBQVMsSUFBRTtBQUFHLFFBQUksSUFBRSxFQUFFLFFBQVMsSUFBQyxFQUFFLFFBQVMsR0FBQztBQUFFLFNBQUksS0FBRyxLQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsVUFBUSxFQUFFLElBQUUsRUFBRSxDQUFDLElBQUcsSUFBSSxNQUFHLEVBQUUsQ0FBQztBQUFFLFdBQU0sR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFO0FBQUEsRUFBRTtBQUF5RyxTQUFPLE9BQU8sQ0FBQyxFQUFFLE9BQU0sRUFBRSxNQUFLLEVBQUUsTUFBSyxFQUFFLElBQUksQ0FBQztBQUFrcEQsV0FBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxF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STtBQUFBLFFBQ1I7QUFBQSxRQUNBLEdBQUcsUUFBUSwwQkFBMEIsYUFBYSxVQUFVLEtBQUssSUFBSSxDQUFDO0FBQUEsTUFDdkU7QUFBQSxFQUNMO0FBQ0EsV0FBUyxpQkFBaUIsY0FBYyxVQUFVO0FBQ2hELFFBQUksU0FBUyxTQUFTLEdBQUc7QUFDdkIsWUFBTSxJQUFJLG9CQUFvQixjQUFjLGdDQUFnQztBQUM5RSxRQUFJLFNBQVMsU0FBUyxHQUFHLEtBQUssU0FBUyxTQUFTLEtBQUssQ0FBQyxTQUFTLFdBQVcsSUFBSTtBQUM1RSxZQUFNLElBQUk7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxFQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw3LDgsMTMsMTUsMTYsMTddfQ==
