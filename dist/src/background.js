var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var browserPolyfill = { exports: {} };
  (function(module, exports) {
    (function(global2, factory) {
      {
        factory(module);
      }
    })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function(module2) {
      var _a, _b;
      if (!((_b = (_a = globalThis.chrome) == null ? void 0 : _a.runtime) == null ? void 0 : _b.id)) {
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
          let hasOwnProperty2 = Function.call.bind(Object.prototype.hasOwnProperty);
          const wrapObject = (target, wrappers = {}, metadata = {}) => {
            let cache2 = /* @__PURE__ */ Object.create(null);
            let handlers = {
              has(proxyTarget2, prop) {
                return prop in target || prop in cache2;
              },
              get(proxyTarget2, prop, receiver) {
                if (prop in cache2) {
                  return cache2[prop];
                }
                if (!(prop in target)) {
                  return void 0;
                }
                let value = target[prop];
                if (typeof value === "function") {
                  if (typeof wrappers[prop] === "function") {
                    value = wrapMethod(target, target[prop], wrappers[prop]);
                  } else if (hasOwnProperty2(metadata, prop)) {
                    let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                    value = wrapMethod(target, target[prop], wrapper);
                  } else {
                    value = value.bind(target);
                  }
                } else if (typeof value === "object" && value !== null && (hasOwnProperty2(wrappers, prop) || hasOwnProperty2(metadata, prop))) {
                  value = wrapObject(value, wrappers[prop], metadata[prop]);
                } else if (hasOwnProperty2(metadata, "*")) {
                  value = wrapObject(value, wrappers[prop], metadata["*"]);
                } else {
                  Object.defineProperty(cache2, prop, {
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
                cache2[prop] = value;
                return value;
              },
              set(proxyTarget2, prop, value, receiver) {
                if (prop in cache2) {
                  cache2[prop] = value;
                } else {
                  target[prop] = value;
                }
                return true;
              },
              defineProperty(proxyTarget2, prop, desc) {
                return Reflect.defineProperty(cache2, prop, desc);
              },
              deleteProperty(proxyTarget2, prop) {
                return Reflect.deleteProperty(cache2, prop);
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
            return function onMessage(message, sender, sendResponse) {
              let didCallSendResponse = false;
              let wrappedSendResponse;
              let sendResponsePromise = new Promise((resolve) => {
                wrappedSendResponse = function(response) {
                  didCallSendResponse = true;
                  resolve(response);
                };
              });
              let result;
              try {
                result = listener(message, sender, wrappedSendResponse);
              } catch (err) {
                result = Promise.reject(err);
              }
              const isResultThenable = result !== true && isThenable(result);
              if (result !== true && !isResultThenable && !didCallSendResponse) {
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
                sendPromisedResult(result);
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
  })(browserPolyfill);
  var browserPolyfillExports = browserPolyfill.exports;
  const Browser = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports);
  function isValidPage(tab) {
    if (tab == null || tab == void 0 || !tab.url || !tab.id)
      return false;
    if (!tab.url.startsWith("http:") && !tab.url.startsWith("https:") && !tab.url.startsWith("file:") || tab.url.startsWith("chrome://") || tab.url.startsWith("chrome-extension://"))
      return false;
    return true;
  }
  function extractHostname(url) {
    let hostname;
    if (url == void 0)
      return "";
    if (url.startsWith("file:")) {
      return url;
    }
    if (url.indexOf("//") > -1) {
      hostname = url.split("/")[2];
    } else {
      hostname = url.split("/")[0];
    }
    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];
    return hostname;
  }
  /*!
    * shared v9.13.1
    * (c) 2024 kazuya kawaguchi
    * Released under the MIT License.
    */
  const inBrowser = typeof window !== "undefined";
  const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString$1(val) === "[object Date]";
  const isRegExp = (val) => toTypeString$1(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject$1(val) && Object.keys(val).length === 0;
  const assign = Object.assign;
  let _globalThis$1;
  const getGlobalThis$1 = () => {
    return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
  function hasOwn$1(obj, key) {
    return hasOwnProperty$2.call(obj, key);
  }
  const isArray$1 = Array.isArray;
  const isFunction$1 = (val) => typeof val === "function";
  const isString$1 = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isObject$2 = (val) => val !== null && typeof val === "object";
  const isPromise$1 = (val) => {
    return isObject$2(val) && isFunction$1(val.then) && isFunction$1(val.catch);
  };
  const objectToString$1 = Object.prototype.toString;
  const toTypeString$1 = (value) => objectToString$1.call(value);
  const isPlainObject$1 = (val) => {
    if (!isObject$2(val))
      return false;
    const proto = Object.getPrototypeOf(val);
    return proto === null || proto.constructor === Object;
  };
  const toDisplayString = (val) => {
    return val == null ? "" : isArray$1(val) || isPlainObject$1(val) && val.toString === objectToString$1 ? JSON.stringify(val, null, 2) : String(val);
  };
  function join(items, separator = "") {
    return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
  }
  function incrementer(code2) {
    let current = code2;
    return () => ++current;
  }
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const isNotObjectOrIsArray = (val) => !isObject$2(val) || isArray$1(val);
  function deepCopy(src, des) {
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
      throw new Error("Invalid value");
    }
    const stack = [{ src, des }];
    while (stack.length) {
      const { src: src2, des: des2 } = stack.pop();
      Object.keys(src2).forEach((key) => {
        if (isNotObjectOrIsArray(src2[key]) || isNotObjectOrIsArray(des2[key])) {
          des2[key] = src2[key];
        } else {
          stack.push({ src: src2[key], des: des2[key] });
        }
      });
    }
  }
  /*!
    * message-compiler v9.13.1
    * (c) 2024 kazuya kawaguchi
    * Released under the MIT License.
    */
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject$1(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const CompileWarnCodes = {
    USE_MODULO_SYNTAX: 1,
    __EXTEND_POINT__: 2
  };
  const CompileErrorCodes = {
    // tokenizer error codes
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    // parser error codes
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    // generator error codes
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    // minifier error codes
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    // Special value for higher-order compilers to pick up the last code
    // to avoid collision of error codes. This should always be kept as the last
    // item.
    __EXTEND_POINT__: 17
  };
  const errorMessages = {
    // tokenizer error messages
    [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
    [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
    [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
    [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
    [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
    [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
    [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
    [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
    [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
    [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
    // parser error messages
    [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
    [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
    [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
    [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
    // generator error messages
    [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
    // minimizer error messages
    [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
  };
  function createCompileError(code2, loc, options = {}) {
    const { domain, messages, args } = options;
    const msg = format((messages || errorMessages)[code2] || "", ...args || []);
    const error = new SyntaxError(String(msg));
    error.code = code2;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  /*!
    * core-base v9.13.1
    * (c) 2024 kazuya kawaguchi
    * Released under the MIT License.
    */
  function initFeatureFlags$1() {
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
      getGlobalThis$1().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
    if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") {
      getGlobalThis$1().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
    }
  }
  const pathStateMachine = [];
  pathStateMachine[
    0
    /* States.BEFORE_PATH */
  ] = {
    [
      "w"
      /* PathCharTypes.WORKSPACE */
    ]: [
      0
      /* States.BEFORE_PATH */
    ],
    [
      "i"
      /* PathCharTypes.IDENT */
    ]: [
      3,
      0
      /* Actions.APPEND */
    ],
    [
      "["
      /* PathCharTypes.LEFT_BRACKET */
    ]: [
      4
      /* States.IN_SUB_PATH */
    ],
    [
      "o"
      /* PathCharTypes.END_OF_FAIL */
    ]: [
      7
      /* States.AFTER_PATH */
    ]
  };
  pathStateMachine[
    1
    /* States.IN_PATH */
  ] = {
    [
      "w"
      /* PathCharTypes.WORKSPACE */
    ]: [
      1
      /* States.IN_PATH */
    ],
    [
      "."
      /* PathCharTypes.DOT */
    ]: [
      2
      /* States.BEFORE_IDENT */
    ],
    [
      "["
      /* PathCharTypes.LEFT_BRACKET */
    ]: [
      4
      /* States.IN_SUB_PATH */
    ],
    [
      "o"
      /* PathCharTypes.END_OF_FAIL */
    ]: [
      7
      /* States.AFTER_PATH */
    ]
  };
  pathStateMachine[
    2
    /* States.BEFORE_IDENT */
  ] = {
    [
      "w"
      /* PathCharTypes.WORKSPACE */
    ]: [
      2
      /* States.BEFORE_IDENT */
    ],
    [
      "i"
      /* PathCharTypes.IDENT */
    ]: [
      3,
      0
      /* Actions.APPEND */
    ],
    [
      "0"
      /* PathCharTypes.ZERO */
    ]: [
      3,
      0
      /* Actions.APPEND */
    ]
  };
  pathStateMachine[
    3
    /* States.IN_IDENT */
  ] = {
    [
      "i"
      /* PathCharTypes.IDENT */
    ]: [
      3,
      0
      /* Actions.APPEND */
    ],
    [
      "0"
      /* PathCharTypes.ZERO */
    ]: [
      3,
      0
      /* Actions.APPEND */
    ],
    [
      "w"
      /* PathCharTypes.WORKSPACE */
    ]: [
      1,
      1
      /* Actions.PUSH */
    ],
    [
      "."
      /* PathCharTypes.DOT */
    ]: [
      2,
      1
      /* Actions.PUSH */
    ],
    [
      "["
      /* PathCharTypes.LEFT_BRACKET */
    ]: [
      4,
      1
      /* Actions.PUSH */
    ],
    [
      "o"
      /* PathCharTypes.END_OF_FAIL */
    ]: [
      7,
      1
      /* Actions.PUSH */
    ]
  };
  pathStateMachine[
    4
    /* States.IN_SUB_PATH */
  ] = {
    [
      "'"
      /* PathCharTypes.SINGLE_QUOTE */
    ]: [
      5,
      0
      /* Actions.APPEND */
    ],
    [
      '"'
      /* PathCharTypes.DOUBLE_QUOTE */
    ]: [
      6,
      0
      /* Actions.APPEND */
    ],
    [
      "["
      /* PathCharTypes.LEFT_BRACKET */
    ]: [
      4,
      2
      /* Actions.INC_SUB_PATH_DEPTH */
    ],
    [
      "]"
      /* PathCharTypes.RIGHT_BRACKET */
    ]: [
      1,
      3
      /* Actions.PUSH_SUB_PATH */
    ],
    [
      "o"
      /* PathCharTypes.END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* PathCharTypes.ELSE */
    ]: [
      4,
      0
      /* Actions.APPEND */
    ]
  };
  pathStateMachine[
    5
    /* States.IN_SINGLE_QUOTE */
  ] = {
    [
      "'"
      /* PathCharTypes.SINGLE_QUOTE */
    ]: [
      4,
      0
      /* Actions.APPEND */
    ],
    [
      "o"
      /* PathCharTypes.END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* PathCharTypes.ELSE */
    ]: [
      5,
      0
      /* Actions.APPEND */
    ]
  };
  pathStateMachine[
    6
    /* States.IN_DOUBLE_QUOTE */
  ] = {
    [
      '"'
      /* PathCharTypes.DOUBLE_QUOTE */
    ]: [
      4,
      0
      /* Actions.APPEND */
    ],
    [
      "o"
      /* PathCharTypes.END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* PathCharTypes.ELSE */
    ]: [
      6,
      0
      /* Actions.APPEND */
    ]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code2 = ch.charCodeAt(0);
    switch (code2) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[
      0
      /* Actions.APPEND */
    ] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[
      1
      /* Actions.PUSH */
    ] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions[
      2
      /* Actions.INC_SUB_PATH_DEPTH */
    ] = () => {
      actions[
        0
        /* Actions.APPEND */
      ]();
      subPathDepth++;
    };
    actions[
      3
      /* Actions.PUSH_SUB_PATH */
    ] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions[
          0
          /* Actions.APPEND */
        ]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[
            1
            /* Actions.PUSH */
          ]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions[
          0
          /* Actions.APPEND */
        ]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap[
        "l"
        /* PathCharTypes.ELSE */
      ] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveWithKeyValue(obj, path) {
    return isObject$2(obj) ? obj[path] : null;
  }
  function resolveValue(obj, path) {
    if (!isObject$2(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
      const val = last[hit[i]];
      if (val === void 0) {
        return null;
      }
      if (isFunction$1(last)) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
  const DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject$2(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = isObject$2(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages) => {
      return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
    };
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = isFunction$1(options.messages) ? options.messages(key) : isObject$2(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    const normalize = isPlainObject$1(options.processor) && isFunction$1(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject$1(options.processor) && isFunction$1(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = isPlainObject$1(options.processor) && isString$1(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const linked = (key, ...args) => {
      const [arg1, arg2] = args;
      let type2 = "text";
      let modifier = "";
      if (args.length === 1) {
        if (isObject$2(arg1)) {
          modifier = arg1.modifier || modifier;
          type2 = arg1.type || type2;
        } else if (isString$1(arg1)) {
          modifier = arg1 || modifier;
        }
      } else if (args.length === 2) {
        if (isString$1(arg1)) {
          modifier = arg1 || modifier;
        }
        if (isString$1(arg2)) {
          type2 = arg2 || type2;
        }
      }
      const ret = message(key)(ctx);
      const msg = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        type2 === "vnode" && isArray$1(ret) && modifier ? ret[0] : ret
      );
      return modifier ? _modifier(modifier)(msg, type2) : msg;
    };
    const ctx = {
      [
        "list"
        /* HelperNameMap.LIST */
      ]: list,
      [
        "named"
        /* HelperNameMap.NAMED */
      ]: named,
      [
        "plural"
        /* HelperNameMap.PLURAL */
      ]: plural,
      [
        "linked"
        /* HelperNameMap.LINKED */
      ]: linked,
      [
        "message"
        /* HelperNameMap.MESSAGE */
      ]: message,
      [
        "type"
        /* HelperNameMap.TYPE */
      ]: type,
      [
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ]: interpolate,
      [
        "normalize"
        /* HelperNameMap.NORMALIZE */
      ]: normalize,
      [
        "values"
        /* HelperNameMap.VALUES */
      ]: assign({}, _list, _named)
    };
    return ctx;
  }
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function initI18nDevTools(i18n2, version, meta) {
    devtools && devtools.emit("i18n:init", {
      timestamp: Date.now(),
      i18n: i18n2,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(
    "function:translate"
    /* IntlifyDevToolsHooks.FunctionTranslate */
  );
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const code$1$1 = CompileWarnCodes.__EXTEND_POINT__;
  const inc$1$1 = incrementer(code$1$1);
  const CoreWarnCodes = {
    NOT_FOUND_KEY: code$1$1,
    // 2
    FALLBACK_TO_TRANSLATE: inc$1$1(),
    // 3
    CANNOT_FORMAT_NUMBER: inc$1$1(),
    // 4
    FALLBACK_TO_NUMBER_FORMAT: inc$1$1(),
    // 5
    CANNOT_FORMAT_DATE: inc$1$1(),
    // 6
    FALLBACK_TO_DATE_FORMAT: inc$1$1(),
    // 7
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: inc$1$1(),
    // 8
    __EXTEND_POINT__: inc$1$1()
    // 9
  };
  const code$2 = CompileErrorCodes.__EXTEND_POINT__;
  const inc$2 = incrementer(code$2);
  const CoreErrorCodes = {
    INVALID_ARGUMENT: code$2,
    // 17
    INVALID_DATE_ARGUMENT: inc$2(),
    // 18
    INVALID_ISO_DATE_ARGUMENT: inc$2(),
    // 19
    NOT_SUPPORT_NON_STRING_MESSAGE: inc$2(),
    // 20
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: inc$2(),
    // 21
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: inc$2(),
    // 22
    NOT_SUPPORT_LOCALE_TYPE: inc$2(),
    // 23
    __EXTEND_POINT__: inc$2()
    // 24
  };
  function createCoreError(code2) {
    return createCompileError(code2, null, void 0);
  }
  function getLocale(context, options) {
    return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
  }
  let _resolveLocale;
  function resolveLocale(locale) {
    if (isString$1(locale)) {
      return locale;
    } else {
      if (isFunction$1(locale)) {
        if (locale.resolvedOnce && _resolveLocale != null) {
          return _resolveLocale;
        } else if (locale.constructor.name === "Function") {
          const resolve = locale();
          if (isPromise$1(resolve)) {
            throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
          }
          return _resolveLocale = resolve;
        } else {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
        }
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
      }
    }
  }
  function fallbackWithSimple(ctx, fallback, start2) {
    return [.../* @__PURE__ */ new Set([
      start2,
      ...isArray$1(fallback) ? fallback : isObject$2(fallback) ? Object.keys(fallback) : isString$1(fallback) ? [fallback] : [start2]
    ])];
  }
  function fallbackWithLocaleChain(ctx, fallback, start2) {
    const startLocale = isString$1(start2) ? start2 : DEFAULT_LOCALE;
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(startLocale);
    if (!chain) {
      chain = [];
      let block2 = [start2];
      while (isArray$1(block2)) {
        block2 = appendBlockToChain(chain, block2, fallback);
      }
      const defaults = isArray$1(fallback) || !isPlainObject$1(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
      block2 = isString$1(defaults) ? [defaults] : defaults;
      if (isArray$1(block2)) {
        appendBlockToChain(chain, block2, false);
      }
      context.__localeChainCache.set(startLocale, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block2, blocks) {
    let follow = true;
    for (let i = 0; i < block2.length && isBoolean(follow); i++) {
      const locale = block2[i];
      if (isString$1(locale)) {
        follow = appendLocaleToChain(chain, block2[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((isArray$1(blocks) || isPlainObject$1(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  const VERSION$1 = "9.13.1";
  const NOT_REOSLVED = -1;
  const DEFAULT_LOCALE = "en-US";
  const MISSING_RESOLVE_VALUE = "";
  const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
  function getDefaultLinkedModifiers() {
    return {
      upper: (val, type) => {
        return type === "text" && isString$1(val) ? val.toUpperCase() : type === "vnode" && isObject$2(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
      },
      lower: (val, type) => {
        return type === "text" && isString$1(val) ? val.toLowerCase() : type === "vnode" && isObject$2(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
      },
      capitalize: (val, type) => {
        return type === "text" && isString$1(val) ? capitalize(val) : type === "vnode" && isObject$2(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
      }
    };
  }
  let _compiler;
  let _resolver;
  function registerMessageResolver(resolver) {
    _resolver = resolver;
  }
  let _fallbacker;
  function registerLocaleFallbacker(fallbacker) {
    _fallbacker = fallbacker;
  }
  let _additionalMeta = null;
  const setAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
  let _fallbackContext = null;
  const setFallbackContext = (context) => {
    _fallbackContext = context;
  };
  const getFallbackContext = () => _fallbackContext;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn;
    const version = isString$1(options.version) ? options.version : VERSION$1;
    const locale = isString$1(options.locale) || isFunction$1(options.locale) ? options.locale : DEFAULT_LOCALE;
    const _locale = isFunction$1(locale) ? DEFAULT_LOCALE : locale;
    const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || isString$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
    const messages = isPlainObject$1(options.messages) ? options.messages : { [_locale]: {} };
    const datetimeFormats = isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [_locale]: {} };
    const numberFormats = isPlainObject$1(options.numberFormats) ? options.numberFormats : { [_locale]: {} };
    const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction$1(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
    const processor = isPlainObject$1(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction$1(options.messageCompiler) ? options.messageCompiler : _compiler;
    const messageResolver = isFunction$1(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
    const localeFallbacker = isFunction$1(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
    const fallbackContext = isObject$2(options.fallbackContext) ? options.fallbackContext : void 0;
    const internalOptions = options;
    const __datetimeFormatters = isObject$2(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = isObject$2(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = isObject$2(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler,
      messageResolver,
      localeFallbacker,
      fallbackContext,
      onWarn,
      __meta
    };
    {
      context.datetimeFormats = datetimeFormats;
      context.numberFormats = numberFormats;
      context.__datetimeFormatters = __datetimeFormatters;
      context.__numberFormatters = __numberFormatters;
    }
    if (__INTLIFY_PROD_DEVTOOLS__) {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return isString$1(ret) ? ret : key;
    } else {
      return key;
    }
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    ctx.localeFallbacker(ctx, fallback, locale);
  }
  function isAlmostSameLocale(locale, compareLocale) {
    if (locale === compareLocale)
      return false;
    return locale.split("-")[0] === compareLocale.split("-")[0];
  }
  function isImplicitFallback(targetLocale, locales2) {
    const index = locales2.indexOf(targetLocale);
    if (index === -1) {
      return false;
    }
    for (let i = index + 1; i < locales2.length; i++) {
      if (isAlmostSameLocale(targetLocale, locales2[i])) {
        return true;
      }
    }
    return false;
  }
  const isMessageAST = (val) => isObject$2(val) && (val.t === 0 || val.type === 0) && ("b" in val || "body" in val);
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => isFunction$1(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = isString$1(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = getLocale(context, options);
    escapeParameter && escapeParams(options);
    let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages[locale] || {}
    ];
    let format2 = formatScope;
    let cacheBaseKey = key;
    if (!resolvedMessage && !(isString$1(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
      if (enableDefaultMsg) {
        format2 = defaultMsgOrKey;
        cacheBaseKey = format2;
      }
    }
    if (!resolvedMessage && (!(isString$1(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString$1(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let occurred = false;
    const onError = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
    if (occurred) {
      return format2;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged, key) : messaged;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      const payloads = {
        timestamp: Date.now(),
        key: isString$1(key) ? key : isMessageFunction(format2) ? format2.key : "",
        locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
        format: isString$1(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
        message: ret
      };
      payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (isArray$1(options.list)) {
      options.list = options.list.map((item) => isString$1(item) ? escapeHtml(item) : item);
    } else if (isObject$2(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (isString$1(options.named[key])) {
          options.named[key] = escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
    const locales2 = localeFallbacker(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format2 = null;
    const type = "translate";
    for (let i = 0; i < locales2.length; i++) {
      targetLocale = locales2[i];
      message = messages[targetLocale] || {};
      if ((format2 = resolveValue2(message, key)) === null) {
        format2 = message[key];
      }
      if (isString$1(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
        break;
      }
      if (!isImplicitFallback(targetLocale, locales2)) {
        const missingRet = handleMissing(
          context,
          // eslint-disable-line @typescript-eslint/no-explicit-any
          key,
          targetLocale,
          missingWarn,
          type
        );
        if (missingRet !== key) {
          format2 = missingRet;
        }
      }
    }
    return [format2, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format2)) {
      const msg2 = format2;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    if (messageCompiler == null) {
      const msg2 = () => format2;
      msg2.locale = targetLocale;
      msg2.key = key;
      return msg2;
    }
    const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format2;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    const messaged = msg(msgCtx);
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString$1(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (isNumber(arg2)) {
      options.plural = arg2;
    } else if (isString$1(arg2)) {
      options.default = arg2;
    } else if (isPlainObject$1(arg2) && !isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (isArray$1(arg2)) {
      options.list = arg2;
    }
    if (isNumber(arg3)) {
      options.plural = arg3;
    } else if (isString$1(arg3)) {
      options.default = arg3;
    } else if (isPlainObject$1(arg3)) {
      assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
    return {
      locale,
      key,
      warnHtmlMessage,
      onError: (err) => {
        onError && onError(err);
        {
          throw err;
        }
      },
      onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
    const resolveMessage = (key) => {
      let val = resolveValue2(message, key);
      if (val == null && fallbackContext) {
        const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
        val = resolveValue2(message2, key);
      }
      if (isString$1(val) || isMessageAST(val)) {
        let occurred = false;
        const onError = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, onError);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __datetimeFormatters } = context;
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = getLocale(context, options);
    const locales2 = localeFallbacker(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      fallbackLocale,
      locale
    );
    if (!isString$1(key) || key === "") {
      return new Intl.DateTimeFormat(locale, overrides).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format2 = null;
    const type = "datetime format";
    for (let i = 0; i < locales2.length; i++) {
      targetLocale = locales2[i];
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format2 = datetimeFormat[key];
      if (isPlainObject$1(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
    }
    if (!isPlainObject$1(format2) || !isString$1(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  const DATETIME_FORMAT_OPTIONS_KEYS = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits"
  ];
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    let value;
    if (isString$1(arg1)) {
      const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!matches) {
        throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
      }
      const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
      value = new Date(dateTime);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
      }
      value = arg1;
    } else if (isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    if (isString$1(arg2)) {
      options.key = arg2;
    } else if (isPlainObject$1(arg2)) {
      Object.keys(arg2).forEach((key) => {
        if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
          overrides[key] = arg2[key];
        } else {
          options[key] = arg2[key];
        }
      });
    }
    if (isString$1(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject$1(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject$1(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __numberFormatters } = context;
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = getLocale(context, options);
    const locales2 = localeFallbacker(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      fallbackLocale,
      locale
    );
    if (!isString$1(key) || key === "") {
      return new Intl.NumberFormat(locale, overrides).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format2 = null;
    const type = "number format";
    for (let i = 0; i < locales2.length; i++) {
      targetLocale = locales2[i];
      numberFormat = numberFormats[targetLocale] || {};
      format2 = numberFormat[key];
      if (isPlainObject$1(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
    }
    if (!isPlainObject$1(format2) || !isString$1(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  const NUMBER_FORMAT_OPTIONS_KEYS = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay"
  ];
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    if (!isNumber(arg1)) {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const value = arg1;
    if (isString$1(arg2)) {
      options.key = arg2;
    } else if (isPlainObject$1(arg2)) {
      Object.keys(arg2).forEach((key) => {
        if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
          overrides[key] = arg2[key];
        } else {
          options[key] = arg2[key];
        }
      });
    }
    if (isString$1(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject$1(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject$1(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  {
    initFeatureFlags$1();
  }
  /**
  * @vue/shared v3.4.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **/
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function makeMap(str, expectsLowerCase) {
    const set2 = new Set(str.split(","));
    return expectsLowerCase ? (val) => set2.has(val.toLowerCase()) : (val) => set2.has(val);
  }
  const EMPTY_OBJ = {};
  const NOOP = () => {
  };
  const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
  (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
  const extend = Object.assign;
  const remove$5 = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
  const isArray = Array.isArray;
  const isMap = (val) => toTypeString(val) === "[object Map]";
  const isSet = (val) => toTypeString(val) === "[object Set]";
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value) || isObject(value)) {
      return value;
    }
  }
  const listDelimiterRE = /;(?![^(]*\))/g;
  const propertyDelimiterRE = /:([^]+)/;
  const styleCommentRE = /\/\*[^]*?\*\//g;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  /**
  * @vue/reactivity v3.4.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **/
  let activeEffectScope;
  class EffectScope {
    constructor(detached = false) {
      this.detached = detached;
      this._active = true;
      this.effects = [];
      this.cleanups = [];
      this.parent = activeEffectScope;
      if (!detached && activeEffectScope) {
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
          this
        ) - 1;
      }
    }
    get active() {
      return this._active;
    }
    run(fn) {
      if (this._active) {
        const currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      activeEffectScope = this.parent;
    }
    stop(fromParent) {
      if (this._active) {
        let i, l;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        }
        if (!this.detached && this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = void 0;
        this._active = false;
      }
    }
  }
  function effectScope(detached) {
    return new EffectScope(detached);
  }
  function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) {
      scope.effects.push(effect);
    }
  }
  function getCurrentScope() {
    return activeEffectScope;
  }
  let activeEffect;
  class ReactiveEffect {
    constructor(fn, trigger2, scheduler, scope) {
      this.fn = fn;
      this.trigger = trigger2;
      this.scheduler = scheduler;
      this.active = true;
      this.deps = [];
      this._dirtyLevel = 4;
      this._trackId = 0;
      this._runnings = 0;
      this._shouldSchedule = false;
      this._depsLength = 0;
      recordEffectScope(this, scope);
    }
    get dirty() {
      if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
        this._dirtyLevel = 1;
        pauseTracking();
        for (let i = 0; i < this._depsLength; i++) {
          const dep = this.deps[i];
          if (dep.computed) {
            triggerComputed(dep.computed);
            if (this._dirtyLevel >= 4) {
              break;
            }
          }
        }
        if (this._dirtyLevel === 1) {
          this._dirtyLevel = 0;
        }
        resetTracking();
      }
      return this._dirtyLevel >= 4;
    }
    set dirty(v) {
      this._dirtyLevel = v ? 4 : 0;
    }
    run() {
      this._dirtyLevel = 0;
      if (!this.active) {
        return this.fn();
      }
      let lastShouldTrack = shouldTrack;
      let lastEffect = activeEffect;
      try {
        shouldTrack = true;
        activeEffect = this;
        this._runnings++;
        preCleanupEffect(this);
        return this.fn();
      } finally {
        postCleanupEffect(this);
        this._runnings--;
        activeEffect = lastEffect;
        shouldTrack = lastShouldTrack;
      }
    }
    stop() {
      if (this.active) {
        preCleanupEffect(this);
        postCleanupEffect(this);
        this.onStop && this.onStop();
        this.active = false;
      }
    }
  }
  function triggerComputed(computed2) {
    return computed2.value;
  }
  function preCleanupEffect(effect2) {
    effect2._trackId++;
    effect2._depsLength = 0;
  }
  function postCleanupEffect(effect2) {
    if (effect2.deps.length > effect2._depsLength) {
      for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
        cleanupDepEffect(effect2.deps[i], effect2);
      }
      effect2.deps.length = effect2._depsLength;
    }
  }
  function cleanupDepEffect(dep, effect2) {
    const trackId = dep.get(effect2);
    if (trackId !== void 0 && effect2._trackId !== trackId) {
      dep.delete(effect2);
      if (dep.size === 0) {
        dep.cleanup();
      }
    }
  }
  let shouldTrack = true;
  let pauseScheduleStack = 0;
  const trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function pauseScheduling() {
    pauseScheduleStack++;
  }
  function resetScheduling() {
    pauseScheduleStack--;
    while (!pauseScheduleStack && queueEffectSchedulers.length) {
      queueEffectSchedulers.shift()();
    }
  }
  function trackEffect(effect2, dep, debuggerEventExtraInfo) {
    if (dep.get(effect2) !== effect2._trackId) {
      dep.set(effect2, effect2._trackId);
      const oldDep = effect2.deps[effect2._depsLength];
      if (oldDep !== dep) {
        if (oldDep) {
          cleanupDepEffect(oldDep, effect2);
        }
        effect2.deps[effect2._depsLength++] = dep;
      } else {
        effect2._depsLength++;
      }
    }
  }
  const queueEffectSchedulers = [];
  function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
    pauseScheduling();
    for (const effect2 of dep.keys()) {
      let tracking;
      if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
        effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
        effect2._dirtyLevel = dirtyLevel;
      }
      if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
        effect2.trigger();
        if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
          effect2._shouldSchedule = false;
          if (effect2.scheduler) {
            queueEffectSchedulers.push(effect2.scheduler);
          }
        }
      }
    }
    resetScheduling();
  }
  const createDep = (cleanup, computed2) => {
    const dep = /* @__PURE__ */ new Map();
    dep.cleanup = cleanup;
    dep.computed = computed2;
    return dep;
  };
  const targetMap = /* @__PURE__ */ new WeakMap();
  const ITERATE_KEY = Symbol("");
  const MAP_KEY_ITERATE_KEY = Symbol("");
  function track(target, type, key) {
    if (shouldTrack && activeEffect) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
      }
      trackEffect(
        activeEffect,
        dep
      );
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray(target)) {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    pauseScheduling();
    for (const dep of deps) {
      if (dep) {
        triggerEffects(
          dep,
          4
        );
      }
    }
    resetScheduling();
  }
  const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  const builtInSymbols = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
  );
  const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        pauseScheduling();
        const res = toRaw(this)[key].apply(this, args);
        resetScheduling();
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function hasOwnProperty(key) {
    if (!isSymbol(key))
      key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
  }
  class BaseReactiveHandler {
    constructor(_isReadonly = false, _isShallow = false) {
      this._isReadonly = _isReadonly;
      this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
      const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return isShallow2;
      } else if (key === "__v_raw") {
        if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
        // this means the reciever is a user proxy of the reactive proxy
        Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
          return target;
        }
        return;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2) {
        if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
          return Reflect.get(arrayInstrumentations, key, receiver);
        }
        if (key === "hasOwnProperty") {
          return hasOwnProperty;
        }
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (isShallow2) {
        return res;
      }
      if (isRef(res)) {
        return targetIsArray && isIntegerKey(key) ? res : res.value;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    }
  }
  class MutableReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(false, isShallow2);
    }
    set(target, key, value, receiver) {
      let oldValue = target[key];
      if (!this._isShallow) {
        const isOldValueReadonly = isReadonly(oldValue);
        if (!isShallow(value) && !isReadonly(value)) {
          oldValue = toRaw(oldValue);
          value = toRaw(value);
        }
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          if (isOldValueReadonly) {
            return false;
          } else {
            oldValue.value = value;
            return true;
          }
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
      }
      return result;
    }
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0);
      }
      return result;
    }
    has(target, key) {
      const result = Reflect.has(target, key);
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    ownKeys(target) {
      track(
        target,
        "iterate",
        isArray(target) ? "length" : ITERATE_KEY
      );
      return Reflect.ownKeys(target);
    }
  }
  class ReadonlyReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(true, isShallow2);
    }
    set(target, key) {
      return true;
    }
    deleteProperty(target, key) {
      return true;
    }
  }
  const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
  const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
  const toShallow = (value) => value;
  const getProto = (v) => Reflect.getPrototypeOf(v);
  function get(target, key, isReadonly2 = false, isShallow2 = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (hasChanged(key, rawKey)) {
        track(rawTarget, "get", key);
      }
      track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (hasChanged(key, rawKey)) {
        track(rawTarget, "has", key);
      }
      track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    }
    get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow2) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(
        rawTarget,
        "iterate",
        isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
      );
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get(this, key);
      },
      get size() {
        return size(this);
      },
      has,
      add,
      set,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has,
      add,
      set,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(
        method,
        true,
        true
      );
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  const [
    mutableInstrumentations,
    readonlyInstrumentations,
    shallowInstrumentations,
    shallowReadonlyInstrumentations
  ] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(
        hasOwn(instrumentations, key) && key in target ? instrumentations : target,
        key,
        receiver
      );
    };
  }
  const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  const reactiveMap = /* @__PURE__ */ new WeakMap();
  const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  const readonlyMap = /* @__PURE__ */ new WeakMap();
  const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(
      target,
      false,
      mutableHandlers,
      mutableCollectionHandlers,
      reactiveMap
    );
  }
  function readonly(target) {
    return createReactiveObject(
      target,
      true,
      readonlyHandlers,
      readonlyCollectionHandlers,
      readonlyMap
    );
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(
      target,
      targetType === 2 ? collectionHandlers : baseHandlers
    );
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
  }
  function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
  }
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  const toReactive = (value) => isObject(value) ? reactive(value) : value;
  const toReadonly = (value) => isObject(value) ? readonly(value) : value;
  class ComputedRefImpl {
    constructor(getter, _setter, isReadonly2, isSSR) {
      this.getter = getter;
      this._setter = _setter;
      this.dep = void 0;
      this.__v_isRef = true;
      this["__v_isReadonly"] = false;
      this.effect = new ReactiveEffect(
        () => getter(this._value),
        () => triggerRefValue(
          this,
          this.effect._dirtyLevel === 2 ? 2 : 3
        )
      );
      this.effect.computed = this;
      this.effect.active = this._cacheable = !isSSR;
      this["__v_isReadonly"] = isReadonly2;
    }
    get value() {
      const self2 = toRaw(this);
      if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
        triggerRefValue(self2, 4);
      }
      trackRefValue(self2);
      if (self2.effect._dirtyLevel >= 2) {
        triggerRefValue(self2, 2);
      }
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
    // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
    get _dirty() {
      return this.effect.dirty;
    }
    set _dirty(v) {
      this.effect.dirty = v;
    }
    // #endregion
  }
  function computed$1(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
      getter = getterOrOptions;
      setter = NOOP;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    return cRef;
  }
  function trackRefValue(ref2) {
    var _a;
    if (shouldTrack && activeEffect) {
      ref2 = toRaw(ref2);
      trackEffect(
        activeEffect,
        (_a = ref2.dep) != null ? _a : ref2.dep = createDep(
          () => ref2.dep = void 0,
          ref2 instanceof ComputedRefImpl ? ref2 : void 0
        )
      );
    }
  }
  function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
    ref2 = toRaw(ref2);
    const dep = ref2.dep;
    if (dep) {
      triggerEffects(
        dep,
        dirtyLevel
      );
    }
  }
  function isRef(r) {
    return !!(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value, false);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  class RefImpl {
    constructor(value, __v_isShallow) {
      this.__v_isShallow = __v_isShallow;
      this.dep = void 0;
      this.__v_isRef = true;
      this._rawValue = __v_isShallow ? value : toRaw(value);
      this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
      trackRefValue(this);
      return this._value;
    }
    set value(newVal) {
      const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
      newVal = useDirectValue ? newVal : toRaw(newVal);
      if (hasChanged(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = useDirectValue ? newVal : toReactive(newVal);
        triggerRefValue(this, 4);
      }
    }
  }
  /**
  * @vue/runtime-core v3.4.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **/
  function callWithErrorHandling(fn, instance, type, args) {
    try {
      return args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    if (isArray(fn)) {
      const values = [];
      for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
      }
      return values;
    }
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        pauseTracking();
        callWithErrorHandling(
          appErrorHandler,
          null,
          10,
          [err, exposedInstance, errorInfo]
        );
        resetTracking();
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    {
      console.error(err);
    }
  }
  let isFlushing = false;
  let isFlushPending = false;
  const queue = [];
  let flushIndex = 0;
  const pendingPostFlushCbs = [];
  let activePostFlushCbs = null;
  let postFlushIndex = 0;
  const resolvedPromise = /* @__PURE__ */ Promise.resolve();
  function findInsertionIndex(id) {
    let start2 = flushIndex + 1;
    let end = queue.length;
    while (start2 < end) {
      const middle = start2 + end >>> 1;
      const middleJob = queue[middle];
      const middleJobId = getId(middleJob);
      if (middleJobId < id || middleJobId === id && middleJob.pre) {
        start2 = middle + 1;
      } else {
        end = middle;
      }
    }
    return start2;
  }
  function queueJob(job) {
    if (!queue.length || !queue.includes(
      job,
      isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
    )) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      resolvedPromise.then(flushJobs);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
      if (!activePostFlushCbs || !activePostFlushCbs.includes(
        cb,
        cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
      )) {
        pendingPostFlushCbs.push(cb);
      }
    } else {
      pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)].sort(
        (a, b) => getId(a) - getId(b)
      );
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  const getId = (job) => job.id == null ? Infinity : job.id;
  const comparator = (a, b) => {
    const diff = getId(a) - getId(b);
    if (diff === 0) {
      if (a.pre && !b.pre)
        return -1;
      if (b.pre && !a.pre)
        return 1;
    }
    return diff;
  };
  function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    queue.sort(comparator);
    const check = NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (!!({ "MANPATH": "/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/opt/homebrew/share/man::", "npm_package_dependencies__vueuse_core": "^10.2.1", "npm_config_legacy_peer_deps": "true", "TERM_PROGRAM": "vscode", "NODE": "/opt/homebrew/Cellar/node/22.1.0/bin/node", "npm_package_devDependencies_typescript": "^5.0.4", "INIT_CWD": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master", "SHELL": "/bin/zsh", "TERM": "xterm-256color", "npm_package_devDependencies__types_webextension_polyfill": "^0.10.0", "npm_package_devDependencies_vite": "^4.1.4", "TMPDIR": "/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/", "HOMEBREW_REPOSITORY": "/opt/homebrew", "TERM_PROGRAM_VERSION": "1.82.2", "npm_package_scripts_dev": "vite build --watch --mode development", "npm_package_devDependencies__vitejs_plugin_vue": "^4.0.0", "MallocNanoZone": "0", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "ZDOTDIR": "/Users/satviktaviti", "npm_package_dependencies_rollup_plugin_copy": "^3.4.0", "npm_package_private": "true", "npm_config_registry": "https://registry.npmjs.org/", "USER": "satviktaviti", "COMMAND_MODE": "unix2003", "npm_package_dependencies_vue_chartjs": "^5.2.0", "PNPM_SCRIPT_SRC_DIR": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master", "npm_package_devDependencies__intlify_unplugin_vue_i18n": "^0.12.2", "SSH_AUTH_SOCK": "/private/tmp/com.apple.launchd.gDICtmAzmH/Listeners", "__CF_USER_TEXT_ENCODING": "0x1F5:0x0:0x0", "npm_package_devDependencies__kyvg_vue3_notification": "^2.9.1", "npm_execpath": "/usr/local/lib/node_modules/pnpm/bin/pnpm.cjs", "npm_config_frozen_lockfile": "", "PATH": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.bin:/usr/local/lib/node_modules/pnpm/dist/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.10/bin", "npm_package_dependencies_vue": "^3.2.47", "__CFBundleIdentifier": "com.microsoft.VSCode", "USER_ZDOTDIR": "/Users/satviktaviti", "PWD": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master", "npm_command": "run-script", "npm_package_dependencies_date_fns": "^2.30.0", "npm_lifecycle_event": "dev", "LANG": "en_US.UTF-8", "npm_package_name": "web-activity-time-tracker", "NODE_PATH": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.11/node_modules/vite/bin/node_modules:/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.11/node_modules/vite/node_modules:/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.11/node_modules:/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.pnpm/node_modules", "npm_package_scripts_start": "vite build --watch --mode production", "XPC_FLAGS": "0x0", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "npm_package_dependencies_vue_i18n": "^9.2.2", "npm_config_node_gyp": "/usr/local/lib/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", "XPC_SERVICE_NAME": "0", "npm_package_version": "1.0.0", "npm_package_dependencies_chart_js": "^4.3.0", "VSCODE_INJECTION": "1", "HOME": "/Users/satviktaviti", "SHLVL": "2", "npm_package_type": "module", "npm_package_devDependencies_webextension_polyfill": "^0.10.0", "VSCODE_GIT_ASKPASS_MAIN": "/private/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/AppTranslocation/2423DAF9-C6A2-4F4D-BFA7-8B50960C517A/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", "npm_package_devDependencies__types_d3": "^7.4.0", "HOMEBREW_PREFIX": "/opt/homebrew", "npm_package_dependencies_d3": "^7.8.5", "LOGNAME": "satviktaviti", "npm_package_scripts_format": "prettier --write .", "npm_lifecycle_script": "vite build --watch --mode development", "VSCODE_GIT_IPC_HANDLE": "/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/vscode-git-c96f21d2e9.sock", "npm_package_devDependencies_vite_plugin_web_extension": "^3.0.0", "npm_package_devDependencies__vuepic_vue_datepicker": "^5.3.0", "npm_config_user_agent": "pnpm/9.0.6 npm/? node/v22.1.0 darwin arm64", "HOMEBREW_CELLAR": "/opt/homebrew/Cellar", "INFOPATH": "/opt/homebrew/share/info:/opt/homebrew/share/info:", "GIT_ASKPASS": "/private/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/AppTranslocation/2423DAF9-C6A2-4F4D-BFA7-8B50960C517A/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", "VSCODE_GIT_ASKPASS_NODE": "/private/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/AppTranslocation/2423DAF9-C6A2-4F4D-BFA7-8B50960C517A/d/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", "npm_package_scripts_script_zip": "vite build --mode production && powershell scripts/zip.ps1", "COLORTERM": "truecolor", "npm_package_devDependencies_vue_tsc": "^1.2.0", "npm_node_execpath": "/opt/homebrew/Cellar/node/22.1.0/bin/node", "NODE_ENV": "production", "VITE_PLUGIN_WEB_EXTENSION_CHILD_BUILD": "true" }.NODE_ENV !== "production") && check(job))
            ;
          callWithErrorHandling(job, null, 14);
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs();
      isFlushing = false;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs();
      }
    }
  }
  let currentRenderingInstance = null;
  let currentScopeId = null;
  const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
  const isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  const ssrContextKey = Symbol.for("v-scx");
  const useSSRContext = () => {
    {
      const ctx = inject(ssrContextKey);
      return ctx;
    }
  };
  const INITIAL_WATCHER_VALUE = {};
  function watch(source, cb, options) {
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, {
    immediate,
    deep,
    flush,
    once,
    onTrack,
    onTrigger
  } = EMPTY_OBJ) {
    if (cb && once) {
      const _cb = cb;
      cb = (...args) => {
        _cb(...args);
        unwatch();
      };
    }
    const instance = currentInstance;
    const reactiveGetter = (source2) => deep === true ? source2 : (
      // for deep: false, only traverse root-level properties
      traverse(source2, deep === false ? 1 : void 0)
    );
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => reactiveGetter(source);
      forceTrigger = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
      getter = () => source.map((s2) => {
        if (isRef(s2)) {
          return s2.value;
        } else if (isReactive(s2)) {
          return reactiveGetter(s2);
        } else if (isFunction(s2)) {
          return callWithErrorHandling(s2, instance, 2);
        } else
          ;
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = () => callWithErrorHandling(source, instance, 2);
      } else {
        getter = () => {
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(
            source,
            instance,
            3,
            [onCleanup]
          );
        };
      }
    } else {
      getter = NOOP;
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
      cleanup = effect.onStop = () => {
        callWithErrorHandling(fn, instance, 4);
        cleanup = effect.onStop = void 0;
      };
    };
    let ssrCleanup;
    if (isInSSRComponentSetup) {
      onCleanup = NOOP;
      if (!cb) {
        getter();
      } else if (immediate) {
        callWithAsyncErrorHandling(cb, instance, 3, [
          getter(),
          isMultiSource ? [] : void 0,
          onCleanup
        ]);
      }
      if (flush === "sync") {
        const ctx = useSSRContext();
        ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
      } else {
        return NOOP;
      }
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!effect.active || !effect.dirty) {
        return;
      }
      if (cb) {
        const newValue = effect.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance, 3, [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            onCleanup
          ]);
          oldValue = newValue;
        }
      } else {
        effect.run();
      }
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") {
      scheduler = job;
    } else if (flush === "post") {
      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    } else {
      job.pre = true;
      if (instance)
        job.id = instance.uid;
      scheduler = () => queueJob(job);
    }
    const effect = new ReactiveEffect(getter, NOOP, scheduler);
    const scope = getCurrentScope();
    const unwatch = () => {
      effect.stop();
      if (scope) {
        remove$5(scope.effects, effect);
      }
    };
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = effect.run();
      }
    } else if (flush === "post") {
      queuePostRenderEffect(
        effect.run.bind(effect),
        instance && instance.suspense
      );
    } else {
      effect.run();
    }
    if (ssrCleanup)
      ssrCleanup.push(unwatch);
    return unwatch;
  }
  function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) {
      return value;
    }
    seen.add(value);
    depth--;
    if (isRef(value)) {
      traverse(value.value, depth, seen);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], depth, seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, depth, seen);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], depth, seen);
      }
    }
    return value;
  }
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function defineComponent(options, extraOptions) {
    return isFunction(options) ? (
      // #8326: extend call and options.name access are considered side-effects
      // by Rollup, so we have to wrap it in a pure-annotated IIFE.
      /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
    ) : options;
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        const reset = setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        reset();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    }
  }
  const createHook = (lifecycle) => (hook, target = currentInstance) => (
    // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
    (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
  );
  const onMounted = createHook("m");
  const onUnmounted = createHook("um");
  let currentApp = null;
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
      const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
      } else
        ;
    }
  }
  const internalObjectProto = {};
  const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
  const queuePostRenderEffect = queueEffectWithSuspense;
  const isTeleport = (type) => type.__isTeleport;
  const Fragment = Symbol.for("v-fgt");
  const Text = Symbol.for("v-txt");
  const Comment = Symbol.for("v-cmt");
  let currentBlock = null;
  function isVNode$1(value) {
    return value ? value.__v_isVNode === true : false;
  }
  const normalizeKey = ({ key }) => key != null ? key : null;
  const normalizeRef = ({
    ref: ref2,
    ref_key,
    ref_for
  }) => {
    if (typeof ref2 === "number") {
      ref2 = "" + ref2;
    }
    return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
      ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (
      // avoid a block node from tracking itself
      !isBlockNode && // has current parent block
      currentBlock && // presence of a patch flag indicates this node needs patching on updates.
      // component nodes also should always be patched, because even if the
      // component doesn't need to update, it needs to persist the instance on to
      // the next vnode so that it can be properly unmounted later.
      (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
      // vnode should not be considered dynamic due to handler caching.
      vnode.patchFlag !== 32
    ) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  const createVNode = _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      type = Comment;
    }
    if (isVNode$1(type)) {
      const cloned = cloneVNode(
        type,
        props,
        true
        /* mergeRef: true */
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (!isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag |= -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    return createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      isBlockNode,
      true
    );
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
    const { props, ref: ref2, patchFlag, children, transition } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
      ) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor,
      ctx: vnode.ctx,
      ce: vnode.ce
    };
    if (transition && cloneTransition) {
      cloned.transition = transition.clone(cloned);
    }
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !isInternalObject(children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  let currentInstance = null;
  const getCurrentInstance = () => currentInstance || currentRenderingInstance;
  let internalSetCurrentInstance;
  {
    const g = getGlobalThis();
    const registerGlobalSetter = (key, setter) => {
      let setters;
      if (!(setters = g[key]))
        setters = g[key] = [];
      setters.push(setter);
      return (v) => {
        if (setters.length > 1)
          setters.forEach((set2) => set2(v));
        else
          setters[0](v);
      };
    };
    internalSetCurrentInstance = registerGlobalSetter(
      `__VUE_INSTANCE_SETTERS__`,
      (v) => currentInstance = v
    );
    registerGlobalSetter(
      `__VUE_SSR_SETTERS__`,
      (v) => isInSSRComponentSetup = v
    );
  }
  const setCurrentInstance = (instance) => {
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return () => {
      instance.scope.off();
      internalSetCurrentInstance(prev);
    };
  };
  let isInSSRComponentSetup = false;
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  const computed = (getterOrOptions, debugOptions) => {
    const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
    return c;
  };
  function h$5(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode$1(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode$1(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  /*!
    * vue-i18n v9.13.1
    * (c) 2024 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VERSION = "9.13.1";
  function initFeatureFlags() {
    if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") {
      getGlobalThis$1().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
    }
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
      getGlobalThis$1().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
  }
  const code$1 = CoreWarnCodes.__EXTEND_POINT__;
  const inc$1 = incrementer(code$1);
  ({
    FALLBACK_TO_ROOT: code$1,
    // 9
    NOT_SUPPORTED_PRESERVE: inc$1(),
    // 10
    NOT_SUPPORTED_FORMATTER: inc$1(),
    // 11
    NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
    // 12
    NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
    // 13
    COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
    // 14
    NOT_FOUND_PARENT_SCOPE: inc$1(),
    // 15
    IGNORE_OBJ_FLATTEN: inc$1(),
    // 16
    NOTICE_DROP_ALLOW_COMPOSITION: inc$1(),
    // 17
    NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: inc$1()
    // 18
  });
  const code = CoreErrorCodes.__EXTEND_POINT__;
  const inc = incrementer(code);
  const I18nErrorCodes = {
    // composer module errors
    UNEXPECTED_RETURN_TYPE: code,
    // 24
    // legacy module errors
    INVALID_ARGUMENT: inc(),
    // 25
    // i18n module errors
    MUST_BE_CALL_SETUP_TOP: inc(),
    // 26
    NOT_INSTALLED: inc(),
    // 27
    NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
    // 28
    // directive module errors
    REQUIRED_VALUE: inc(),
    // 29
    INVALID_VALUE: inc(),
    // 30
    // vue-devtools errors
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
    // 31
    NOT_INSTALLED_WITH_PROVIDE: inc(),
    // 32
    // unexpected error
    UNEXPECTED_ERROR: inc(),
    // 33
    // not compatible legacy vue-i18n constructor
    NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
    // 34
    // bridge support vue 2.x only
    BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
    // 35
    // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
    // 36
    // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
    // 37
    // for enhancement
    __EXTEND_POINT__: inc()
    // 38
  };
  function createI18nError(code2, ...args) {
    return createCompileError(code2, null, void 0);
  }
  const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
  const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
  const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
  const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
  const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
  const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
  function handleFlatJson(obj) {
    if (!isObject$2(obj)) {
      return obj;
    }
    for (const key in obj) {
      if (!hasOwn$1(obj, key)) {
        continue;
      }
      if (!key.includes(".")) {
        if (isObject$2(obj[key])) {
          handleFlatJson(obj[key]);
        }
      } else {
        const subKeys = key.split(".");
        const lastIndex = subKeys.length - 1;
        let currentObj2 = obj;
        let hasStringValue = false;
        for (let i = 0; i < lastIndex; i++) {
          if (!(subKeys[i] in currentObj2)) {
            currentObj2[subKeys[i]] = {};
          }
          if (!isObject$2(currentObj2[subKeys[i]])) {
            hasStringValue = true;
            break;
          }
          currentObj2 = currentObj2[subKeys[i]];
        }
        if (!hasStringValue) {
          currentObj2[subKeys[lastIndex]] = obj[key];
          delete obj[key];
        }
        if (isObject$2(currentObj2[subKeys[lastIndex]])) {
          handleFlatJson(currentObj2[subKeys[lastIndex]]);
        }
      }
    }
    return obj;
  }
  function getLocaleMessages(locale, options) {
    const { messages, __i18n, messageResolver, flatJson } = options;
    const ret = isPlainObject$1(messages) ? messages : isArray$1(__i18n) ? {} : { [locale]: {} };
    if (isArray$1(__i18n)) {
      __i18n.forEach((custom) => {
        if ("locale" in custom && "resource" in custom) {
          const { locale: locale2, resource } = custom;
          if (locale2) {
            ret[locale2] = ret[locale2] || {};
            deepCopy(resource, ret[locale2]);
          } else {
            deepCopy(resource, ret);
          }
        } else {
          isString$1(custom) && deepCopy(JSON.parse(custom), ret);
        }
      });
    }
    if (messageResolver == null && flatJson) {
      for (const key in ret) {
        if (hasOwn$1(ret, key)) {
          handleFlatJson(ret[key]);
        }
      }
    }
    return ret;
  }
  function getComponentOptions(instance) {
    return instance.type;
  }
  function adjustI18nResources(gl, options, componentOptions) {
    let messages = isObject$2(options.messages) ? options.messages : {};
    if ("__i18nGlobal" in componentOptions) {
      messages = getLocaleMessages(gl.locale.value, {
        messages,
        __i18n: componentOptions.__i18nGlobal
      });
    }
    const locales2 = Object.keys(messages);
    if (locales2.length) {
      locales2.forEach((locale) => {
        gl.mergeLocaleMessage(locale, messages[locale]);
      });
    }
    {
      if (isObject$2(options.datetimeFormats)) {
        const locales3 = Object.keys(options.datetimeFormats);
        if (locales3.length) {
          locales3.forEach((locale) => {
            gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
          });
        }
      }
      if (isObject$2(options.numberFormats)) {
        const locales3 = Object.keys(options.numberFormats);
        if (locales3.length) {
          locales3.forEach((locale) => {
            gl.mergeNumberFormat(locale, options.numberFormats[locale]);
          });
        }
      }
    }
  }
  function createTextNode(key) {
    return createVNode(Text, null, key, 0);
  }
  const DEVTOOLS_META = "__INTLIFY_META__";
  const NOOP_RETURN_ARRAY = () => [];
  const NOOP_RETURN_FALSE = () => false;
  let composerID = 0;
  function defineCoreMissingHandler(missing) {
    return (ctx, locale, key, type) => {
      return missing(locale, key, getCurrentInstance() || void 0, type);
    };
  }
  const getMetaInfo = /* @__NO_SIDE_EFFECTS__ */ () => {
    const instance = getCurrentInstance();
    let meta = null;
    return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
  };
  function createComposer(options = {}, VueI18nLegacy) {
    const { __root, __injectWithOption } = options;
    const _isGlobal = __root === void 0;
    const flatJson = options.flatJson;
    const _ref = inBrowser ? ref : shallowRef;
    const translateExistCompatible = !!options.translateExistCompatible;
    let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
    const _locale = _ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.locale.value : isString$1(options.locale) ? options.locale : DEFAULT_LOCALE
    );
    const _fallbackLocale = _ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.fallbackLocale.value : isString$1(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
    );
    const _messages = _ref(getLocaleMessages(_locale.value, options));
    const _datetimeFormats = _ref(isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
    const _numberFormats = _ref(isPlainObject$1(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
    let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    let _fallbackFormat = !!options.fallbackFormat;
    let _missing = isFunction$1(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction$1(options.missing) ? defineCoreMissingHandler(options.missing) : null;
    let _postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
    let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    let _escapeParameter = !!options.escapeParameter;
    const _modifiers = __root ? __root.modifiers : isPlainObject$1(options.modifiers) ? options.modifiers : {};
    let _pluralRules = options.pluralRules || __root && __root.pluralRules;
    let _context;
    const getCoreContext = () => {
      _isGlobal && setFallbackContext(null);
      const ctxOptions = {
        version: VERSION,
        locale: _locale.value,
        fallbackLocale: _fallbackLocale.value,
        messages: _messages.value,
        modifiers: _modifiers,
        pluralRules: _pluralRules,
        missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
        missingWarn: _missingWarn,
        fallbackWarn: _fallbackWarn,
        fallbackFormat: _fallbackFormat,
        unresolving: true,
        postTranslation: _postTranslation === null ? void 0 : _postTranslation,
        warnHtmlMessage: _warnHtmlMessage,
        escapeParameter: _escapeParameter,
        messageResolver: options.messageResolver,
        messageCompiler: options.messageCompiler,
        __meta: { framework: "vue" }
      };
      {
        ctxOptions.datetimeFormats = _datetimeFormats.value;
        ctxOptions.numberFormats = _numberFormats.value;
        ctxOptions.__datetimeFormatters = isPlainObject$1(_context) ? _context.__datetimeFormatters : void 0;
        ctxOptions.__numberFormatters = isPlainObject$1(_context) ? _context.__numberFormatters : void 0;
      }
      const ctx = createCoreContext(ctxOptions);
      _isGlobal && setFallbackContext(ctx);
      return ctx;
    };
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    function trackReactivityValues() {
      return [
        _locale.value,
        _fallbackLocale.value,
        _messages.value,
        _datetimeFormats.value,
        _numberFormats.value
      ];
    }
    const locale = computed({
      get: () => _locale.value,
      set: (val) => {
        _locale.value = val;
        _context.locale = _locale.value;
      }
    });
    const fallbackLocale = computed({
      get: () => _fallbackLocale.value,
      set: (val) => {
        _fallbackLocale.value = val;
        _context.fallbackLocale = _fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, val);
      }
    });
    const messages = computed(() => _messages.value);
    const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
    const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
    function getPostTranslationHandler() {
      return isFunction$1(_postTranslation) ? _postTranslation : null;
    }
    function setPostTranslationHandler(handler) {
      _postTranslation = handler;
      _context.postTranslation = handler;
    }
    function getMissingHandler() {
      return _missing;
    }
    function setMissingHandler(handler) {
      if (handler !== null) {
        _runtimeMissing = defineCoreMissingHandler(handler);
      }
      _missing = handler;
      _context.missing = _runtimeMissing;
    }
    const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
      trackReactivityValues();
      let ret;
      try {
        if ({ "MANPATH": "/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/opt/homebrew/share/man::", "npm_package_dependencies__vueuse_core": "^10.2.1", "npm_config_legacy_peer_deps": "true", "TERM_PROGRAM": "vscode", "NODE": "/opt/homebrew/Cellar/node/22.1.0/bin/node", "npm_package_devDependencies_typescript": "^5.0.4", "INIT_CWD": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master", "SHELL": "/bin/zsh", "TERM": "xterm-256color", "npm_package_devDependencies__types_webextension_polyfill": "^0.10.0", "npm_package_devDependencies_vite": "^4.1.4", "TMPDIR": "/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/", "HOMEBREW_REPOSITORY": "/opt/homebrew", "TERM_PROGRAM_VERSION": "1.82.2", "npm_package_scripts_dev": "vite build --watch --mode development", "npm_package_devDependencies__vitejs_plugin_vue": "^4.0.0", "MallocNanoZone": "0", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "ZDOTDIR": "/Users/satviktaviti", "npm_package_dependencies_rollup_plugin_copy": "^3.4.0", "npm_package_private": "true", "npm_config_registry": "https://registry.npmjs.org/", "USER": "satviktaviti", "COMMAND_MODE": "unix2003", "npm_package_dependencies_vue_chartjs": "^5.2.0", "PNPM_SCRIPT_SRC_DIR": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master", "npm_package_devDependencies__intlify_unplugin_vue_i18n": "^0.12.2", "SSH_AUTH_SOCK": "/private/tmp/com.apple.launchd.gDICtmAzmH/Listeners", "__CF_USER_TEXT_ENCODING": "0x1F5:0x0:0x0", "npm_package_devDependencies__kyvg_vue3_notification": "^2.9.1", "npm_execpath": "/usr/local/lib/node_modules/pnpm/bin/pnpm.cjs", "npm_config_frozen_lockfile": "", "PATH": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.bin:/usr/local/lib/node_modules/pnpm/dist/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.10/bin", "npm_package_dependencies_vue": "^3.2.47", "__CFBundleIdentifier": "com.microsoft.VSCode", "USER_ZDOTDIR": "/Users/satviktaviti", "PWD": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master", "npm_command": "run-script", "npm_package_dependencies_date_fns": "^2.30.0", "npm_lifecycle_event": "dev", "LANG": "en_US.UTF-8", "npm_package_name": "web-activity-time-tracker", "NODE_PATH": "/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.11/node_modules/vite/bin/node_modules:/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.11/node_modules/vite/node_modules:/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.11/node_modules:/Users/satviktaviti/Downloads/web-activity-time-tracker-master/node_modules/.pnpm/node_modules", "npm_package_scripts_start": "vite build --watch --mode production", "XPC_FLAGS": "0x0", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "npm_package_dependencies_vue_i18n": "^9.2.2", "npm_config_node_gyp": "/usr/local/lib/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", "XPC_SERVICE_NAME": "0", "npm_package_version": "1.0.0", "npm_package_dependencies_chart_js": "^4.3.0", "VSCODE_INJECTION": "1", "HOME": "/Users/satviktaviti", "SHLVL": "2", "npm_package_type": "module", "npm_package_devDependencies_webextension_polyfill": "^0.10.0", "VSCODE_GIT_ASKPASS_MAIN": "/private/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/AppTranslocation/2423DAF9-C6A2-4F4D-BFA7-8B50960C517A/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", "npm_package_devDependencies__types_d3": "^7.4.0", "HOMEBREW_PREFIX": "/opt/homebrew", "npm_package_dependencies_d3": "^7.8.5", "LOGNAME": "satviktaviti", "npm_package_scripts_format": "prettier --write .", "npm_lifecycle_script": "vite build --watch --mode development", "VSCODE_GIT_IPC_HANDLE": "/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/vscode-git-c96f21d2e9.sock", "npm_package_devDependencies_vite_plugin_web_extension": "^3.0.0", "npm_package_devDependencies__vuepic_vue_datepicker": "^5.3.0", "npm_config_user_agent": "pnpm/9.0.6 npm/? node/v22.1.0 darwin arm64", "HOMEBREW_CELLAR": "/opt/homebrew/Cellar", "INFOPATH": "/opt/homebrew/share/info:/opt/homebrew/share/info:", "GIT_ASKPASS": "/private/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/AppTranslocation/2423DAF9-C6A2-4F4D-BFA7-8B50960C517A/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", "VSCODE_GIT_ASKPASS_NODE": "/private/var/folders/db/y8936cy56d92mttwslfwvhs80000gn/T/AppTranslocation/2423DAF9-C6A2-4F4D-BFA7-8B50960C517A/d/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", "npm_package_scripts_script_zip": "vite build --mode production && powershell scripts/zip.ps1", "COLORTERM": "truecolor", "npm_package_devDependencies_vue_tsc": "^1.2.0", "npm_node_execpath": "/opt/homebrew/Cellar/node/22.1.0/bin/node", "NODE_ENV": "production", "VITE_PLUGIN_WEB_EXTENSION_CHILD_BUILD": "true" }.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
          /* @__PURE__ */ setAdditionalMeta(/* @__PURE__ */ getMetaInfo());
        }
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        if (__INTLIFY_PROD_DEVTOOLS__)
          ;
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
      if (warnType !== "translate exists" && // for not `te` (e.g `t`)
      isNumber(ret) && ret === NOT_REOSLVED || warnType === "translate exists" && !ret) {
        const [key, arg2] = argumentParser();
        return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
      } else if (successCondition(ret)) {
        return ret;
      } else {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
      }
    };
    function t(...args) {
      return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString$1(val));
    }
    function rt(...args) {
      const [arg1, arg2, arg3] = args;
      if (arg3 && !isObject$2(arg3)) {
        throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
      }
      return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
    }
    function d2(...args) {
      return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
    }
    function n(...args) {
      return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
    }
    function normalize(values) {
      return values.map((val) => isString$1(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
    }
    const interpolate = (val) => val;
    const processor = {
      normalize,
      interpolate,
      type: "vnode"
    };
    function translateVNode(...args) {
      return wrapWithDeps(
        (context) => {
          let ret;
          const _context2 = context;
          try {
            _context2.processor = processor;
            ret = Reflect.apply(translate, null, [_context2, ...args]);
          } finally {
            _context2.processor = null;
          }
          return ret;
        },
        () => parseTranslateArgs(...args),
        "translate",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[TranslateVNodeSymbol](...args),
        (key) => [createTextNode(key)],
        (val) => isArray$1(val)
      );
    }
    function numberParts(...args) {
      return wrapWithDeps(
        (context) => Reflect.apply(number, null, [context, ...args]),
        () => parseNumberArgs(...args),
        "number format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[NumberPartsSymbol](...args),
        NOOP_RETURN_ARRAY,
        (val) => isString$1(val) || isArray$1(val)
      );
    }
    function datetimeParts(...args) {
      return wrapWithDeps(
        (context) => Reflect.apply(datetime, null, [context, ...args]),
        () => parseDateTimeArgs(...args),
        "datetime format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[DatetimePartsSymbol](...args),
        NOOP_RETURN_ARRAY,
        (val) => isString$1(val) || isArray$1(val)
      );
    }
    function setPluralRules(rules) {
      _pluralRules = rules;
      _context.pluralRules = _pluralRules;
    }
    function te(key, locale2) {
      return wrapWithDeps(() => {
        if (!key) {
          return false;
        }
        const targetLocale = isString$1(locale2) ? locale2 : _locale.value;
        const message = getLocaleMessage(targetLocale);
        const resolved = _context.messageResolver(message, key);
        return !translateExistCompatible ? isMessageAST(resolved) || isMessageFunction(resolved) || isString$1(resolved) : resolved != null;
      }, () => [key], "translate exists", (root) => {
        return Reflect.apply(root.te, root, [key, locale2]);
      }, NOOP_RETURN_FALSE, (val) => isBoolean(val));
    }
    function resolveMessages(key) {
      let messages2 = null;
      const locales2 = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
      for (let i = 0; i < locales2.length; i++) {
        const targetLocaleMessages = _messages.value[locales2[i]] || {};
        const messageValue = _context.messageResolver(targetLocaleMessages, key);
        if (messageValue != null) {
          messages2 = messageValue;
          break;
        }
      }
      return messages2;
    }
    function tm(key) {
      const messages2 = resolveMessages(key);
      return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
    }
    function getLocaleMessage(locale2) {
      return _messages.value[locale2] || {};
    }
    function setLocaleMessage(locale2, message) {
      if (flatJson) {
        const _message = { [locale2]: message };
        for (const key in _message) {
          if (hasOwn$1(_message, key)) {
            handleFlatJson(_message[key]);
          }
        }
        message = _message[locale2];
      }
      _messages.value[locale2] = message;
      _context.messages = _messages.value;
    }
    function mergeLocaleMessage(locale2, message) {
      _messages.value[locale2] = _messages.value[locale2] || {};
      const _message = { [locale2]: message };
      if (flatJson) {
        for (const key in _message) {
          if (hasOwn$1(_message, key)) {
            handleFlatJson(_message[key]);
          }
        }
      }
      message = _message[locale2];
      deepCopy(message, _messages.value[locale2]);
      _context.messages = _messages.value;
    }
    function getDateTimeFormat(locale2) {
      return _datetimeFormats.value[locale2] || {};
    }
    function setDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = format2;
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function mergeDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function getNumberFormat(locale2) {
      return _numberFormats.value[locale2] || {};
    }
    function setNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = format2;
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    function mergeNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    composerID++;
    if (__root && inBrowser) {
      watch(__root.locale, (val) => {
        if (_inheritLocale) {
          _locale.value = val;
          _context.locale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
      watch(__root.fallbackLocale, (val) => {
        if (_inheritLocale) {
          _fallbackLocale.value = val;
          _context.fallbackLocale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
    }
    const composer = {
      id: composerID,
      locale,
      fallbackLocale,
      get inheritLocale() {
        return _inheritLocale;
      },
      set inheritLocale(val) {
        _inheritLocale = val;
        if (val && __root) {
          _locale.value = __root.locale.value;
          _fallbackLocale.value = __root.fallbackLocale.value;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      },
      get availableLocales() {
        return Object.keys(_messages.value).sort();
      },
      messages,
      get modifiers() {
        return _modifiers;
      },
      get pluralRules() {
        return _pluralRules || {};
      },
      get isGlobal() {
        return _isGlobal;
      },
      get missingWarn() {
        return _missingWarn;
      },
      set missingWarn(val) {
        _missingWarn = val;
        _context.missingWarn = _missingWarn;
      },
      get fallbackWarn() {
        return _fallbackWarn;
      },
      set fallbackWarn(val) {
        _fallbackWarn = val;
        _context.fallbackWarn = _fallbackWarn;
      },
      get fallbackRoot() {
        return _fallbackRoot;
      },
      set fallbackRoot(val) {
        _fallbackRoot = val;
      },
      get fallbackFormat() {
        return _fallbackFormat;
      },
      set fallbackFormat(val) {
        _fallbackFormat = val;
        _context.fallbackFormat = _fallbackFormat;
      },
      get warnHtmlMessage() {
        return _warnHtmlMessage;
      },
      set warnHtmlMessage(val) {
        _warnHtmlMessage = val;
        _context.warnHtmlMessage = val;
      },
      get escapeParameter() {
        return _escapeParameter;
      },
      set escapeParameter(val) {
        _escapeParameter = val;
        _context.escapeParameter = val;
      },
      t,
      getLocaleMessage,
      setLocaleMessage,
      mergeLocaleMessage,
      getPostTranslationHandler,
      setPostTranslationHandler,
      getMissingHandler,
      setMissingHandler,
      [SetPluralRulesSymbol]: setPluralRules
    };
    {
      composer.datetimeFormats = datetimeFormats;
      composer.numberFormats = numberFormats;
      composer.rt = rt;
      composer.te = te;
      composer.tm = tm;
      composer.d = d2;
      composer.n = n;
      composer.getDateTimeFormat = getDateTimeFormat;
      composer.setDateTimeFormat = setDateTimeFormat;
      composer.mergeDateTimeFormat = mergeDateTimeFormat;
      composer.getNumberFormat = getNumberFormat;
      composer.setNumberFormat = setNumberFormat;
      composer.mergeNumberFormat = mergeNumberFormat;
      composer[InejctWithOptionSymbol] = __injectWithOption;
      composer[TranslateVNodeSymbol] = translateVNode;
      composer[DatetimePartsSymbol] = datetimeParts;
      composer[NumberPartsSymbol] = numberParts;
    }
    return composer;
  }
  const baseFormatProps = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
      validator: (val) => val === "parent" || val === "global",
      default: "parent"
      /* ComponentI18nScope */
    },
    i18n: {
      type: Object
    }
  };
  function getInterpolateArg({ slots }, keys) {
    if (keys.length === 1 && keys[0] === "default") {
      const ret = slots.default ? slots.default() : [];
      return ret.reduce((slot, current) => {
        return [
          ...slot,
          // prettier-ignore
          ...current.type === Fragment ? current.children : [current]
        ];
      }, []);
    } else {
      return keys.reduce((arg, key) => {
        const slot = slots[key];
        if (slot) {
          arg[key] = slot();
        }
        return arg;
      }, {});
    }
  }
  function getFragmentableTag(tag) {
    return Fragment;
  }
  const TranslationImpl = /* @__PURE__ */ defineComponent({
    /* eslint-disable */
    name: "i18n-t",
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: (val) => isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const { slots, attrs } = context;
      const i18n2 = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      return () => {
        const keys = Object.keys(slots).filter((key) => key !== "_");
        const options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== void 0) {
          options.plural = isString$1(props.plural) ? +props.plural : props.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n2[TranslateVNodeSymbol](props.keypath, arg, options);
        const assignedAttrs = assign({}, attrs);
        const tag = isString$1(props.tag) || isObject$2(props.tag) ? props.tag : getFragmentableTag();
        return h$5(tag, assignedAttrs, children);
      };
    }
  });
  const Translation = TranslationImpl;
  function isVNode(target) {
    return isArray$1(target) && !isString$1(target[0]);
  }
  function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
      const options = { part: true };
      let overrides = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (isString$1(props.format)) {
        options.key = props.format;
      } else if (isObject$2(props.format)) {
        if (isString$1(props.format.key)) {
          options.key = props.format.key;
        }
        overrides = Object.keys(props.format).reduce((options2, prop) => {
          return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
        }, {});
      }
      const parts = partFormatter(...[props.value, options, overrides]);
      let children = [options.key];
      if (isArray$1(parts)) {
        children = parts.map((part, index) => {
          const slot = slots[part.type];
          const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
          if (isVNode(node)) {
            node[0].key = `${part.type}-${index}`;
          }
          return node;
        });
      } else if (isString$1(parts)) {
        children = [parts];
      }
      const assignedAttrs = assign({}, attrs);
      const tag = isString$1(props.tag) || isObject$2(props.tag) ? props.tag : getFragmentableTag();
      return h$5(tag, assignedAttrs, children);
    };
  }
  const NumberFormatImpl = /* @__PURE__ */ defineComponent({
    /* eslint-disable */
    name: "i18n-n",
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[NumberPartsSymbol](...args)
      ));
    }
  });
  const NumberFormat = NumberFormatImpl;
  const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
    /* eslint-disable */
    name: "i18n-d",
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[DatetimePartsSymbol](...args)
      ));
    }
  });
  const DatetimeFormat = DatetimeFormatImpl;
  function getComposer$2(i18n2, instance) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      return i18nInternal.__getInstance(instance) || i18n2.global;
    } else {
      const vueI18n = i18nInternal.__getInstance(instance);
      return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
    }
  }
  function vTDirective(i18n2) {
    const _process = (binding) => {
      const { instance, modifiers, value } = binding;
      if (!instance || !instance.$) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const composer = getComposer$2(i18n2, instance.$);
      const parsedValue = parseValue(value);
      return [
        Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
        composer
      ];
    };
    const register = (el, binding) => {
      const [textContent, composer] = _process(binding);
      if (inBrowser && i18n2.global === composer) {
        el.__i18nWatcher = watch(composer.locale, () => {
          binding.instance && binding.instance.$forceUpdate();
        });
      }
      el.__composer = composer;
      el.textContent = textContent;
    };
    const unregister = (el) => {
      if (inBrowser && el.__i18nWatcher) {
        el.__i18nWatcher();
        el.__i18nWatcher = void 0;
        delete el.__i18nWatcher;
      }
      if (el.__composer) {
        el.__composer = void 0;
        delete el.__composer;
      }
    };
    const update = (el, { value }) => {
      if (el.__composer) {
        const composer = el.__composer;
        const parsedValue = parseValue(value);
        el.textContent = Reflect.apply(composer.t, composer, [
          ...makeParams(parsedValue)
        ]);
      }
    };
    const getSSRProps = (binding) => {
      const [textContent] = _process(binding);
      return { textContent };
    };
    return {
      created: register,
      unmounted: unregister,
      beforeUpdate: update,
      getSSRProps
    };
  }
  function parseValue(value) {
    if (isString$1(value)) {
      return { path: value };
    } else if (isPlainObject$1(value)) {
      if (!("path" in value)) {
        throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
      }
      return value;
    } else {
      throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
  }
  function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString$1(locale)) {
      options.locale = locale;
    }
    if (isNumber(choice)) {
      options.plural = choice;
    }
    if (isNumber(plural)) {
      options.plural = plural;
    }
    return [path, named, options];
  }
  function apply(app, i18n2, ...options) {
    const pluginOptions = isPlainObject$1(options[0]) ? options[0] : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
    if (globalInstall) {
      [!useI18nComponentName ? Translation.name : "i18n", "I18nT"].forEach((name) => app.component(name, Translation));
      [NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
      [DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
    }
    {
      app.directive("t", vTDirective(i18n2));
    }
  }
  const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
  function createI18n(options = {}, VueI18nLegacy) {
    const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
    const __allowComposition = true;
    const __instances = /* @__PURE__ */ new Map();
    const [globalScope, __global] = createGlobal(options);
    const symbol = /* @__PURE__ */ makeSymbol("");
    function __getInstance(component) {
      return __instances.get(component) || null;
    }
    function __setInstance(component, instance) {
      __instances.set(component, instance);
    }
    function __deleteInstance(component) {
      __instances.delete(component);
    }
    {
      const i18n2 = {
        // mode
        get mode() {
          return "composition";
        },
        // allowComposition
        get allowComposition() {
          return __allowComposition;
        },
        // install plugin
        async install(app, ...options2) {
          app.__VUE_I18N_SYMBOL__ = symbol;
          app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
          if (isPlainObject$1(options2[0])) {
            const opts = options2[0];
            i18n2.__composerExtend = opts.__composerExtend;
            i18n2.__vueI18nExtend = opts.__vueI18nExtend;
          }
          let globalReleaseHandler = null;
          if (__globalInjection) {
            globalReleaseHandler = injectGlobalFields(app, i18n2.global);
          }
          {
            apply(app, i18n2, ...options2);
          }
          const unmountApp = app.unmount;
          app.unmount = () => {
            globalReleaseHandler && globalReleaseHandler();
            i18n2.dispose();
            unmountApp();
          };
        },
        // global accessor
        get global() {
          return __global;
        },
        dispose() {
          globalScope.stop();
        },
        // @internal
        __instances,
        // @internal
        __getInstance,
        // @internal
        __setInstance,
        // @internal
        __deleteInstance
      };
      return i18n2;
    }
  }
  function useI18n(options = {}) {
    const instance = getCurrentInstance();
    if (instance == null) {
      throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
    }
    if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
      throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
    }
    const i18n2 = getI18nInstance(instance);
    const gl = getGlobalComposer(i18n2);
    const componentOptions = getComponentOptions(instance);
    const scope = getScope(options, componentOptions);
    if (scope === "global") {
      adjustI18nResources(gl, options, componentOptions);
      return gl;
    }
    if (scope === "parent") {
      let composer2 = getComposer(i18n2, instance, options.__useComponent);
      if (composer2 == null) {
        composer2 = gl;
      }
      return composer2;
    }
    const i18nInternal = i18n2;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
      const composerOptions = assign({}, options);
      if ("__i18n" in componentOptions) {
        composerOptions.__i18n = componentOptions.__i18n;
      }
      if (gl) {
        composerOptions.__root = gl;
      }
      composer = createComposer(composerOptions);
      if (i18nInternal.__composerExtend) {
        composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
      }
      setupLifeCycle(i18nInternal, instance, composer);
      i18nInternal.__setInstance(instance, composer);
    }
    return composer;
  }
  function createGlobal(options, legacyMode, VueI18nLegacy) {
    const scope = effectScope();
    {
      const obj = scope.run(() => createComposer(options));
      if (obj == null) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      return [scope, obj];
    }
  }
  function getI18nInstance(instance) {
    {
      const i18n2 = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
      if (!i18n2) {
        throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
      }
      return i18n2;
    }
  }
  function getScope(options, componentOptions) {
    return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
  }
  function getGlobalComposer(i18n2) {
    return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
  }
  function getComposer(i18n2, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = getParentComponentInstance(target, useComponent);
    while (current != null) {
      const i18nInternal = i18n2;
      if (i18n2.mode === "composition") {
        composer = i18nInternal.__getInstance(current);
      }
      if (composer != null) {
        break;
      }
      if (root === current) {
        break;
      }
      current = current.parent;
    }
    return composer;
  }
  function getParentComponentInstance(target, useComponent = false) {
    if (target == null) {
      return null;
    }
    {
      return !useComponent ? target.parent : target.vnode.ctx || target.parent;
    }
  }
  function setupLifeCycle(i18n2, target, composer) {
    {
      onMounted(() => {
      }, target);
      onUnmounted(() => {
        const _composer = composer;
        i18n2.__deleteInstance(target);
        const dispose = _composer[DisposeSymbol];
        if (dispose) {
          dispose();
          delete _composer[DisposeSymbol];
        }
      }, target);
    }
  }
  const globalExportProps = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ];
  const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
  function injectGlobalFields(app, composer) {
    const i18n2 = /* @__PURE__ */ Object.create(null);
    globalExportProps.forEach((prop) => {
      const desc = Object.getOwnPropertyDescriptor(composer, prop);
      if (!desc) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const wrap = isRef(desc.value) ? {
        get() {
          return desc.value.value;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        set(val) {
          desc.value.value = val;
        }
      } : {
        get() {
          return desc.get && desc.get();
        }
      };
      Object.defineProperty(i18n2, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n2;
    globalExportMethods.forEach((method) => {
      const desc = Object.getOwnPropertyDescriptor(composer, method);
      if (!desc || !desc.value) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
    const dispose = () => {
      delete app.config.globalProperties.$i18n;
      globalExportMethods.forEach((method) => {
        delete app.config.globalProperties[`$${method}`];
      });
    };
    return dispose;
  }
  {
    initFeatureFlags();
  }
  registerMessageResolver(resolveValue);
  registerLocaleFallbacker(fallbackWithLocaleChain);
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const target = getGlobalThis$1();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  const extName$4 = {
    message: "Web Activity Time Tracker - Block Sites, Web Analytics & Pomodoro"
  };
  const extDescription$4 = {
    message: "Track time of your web activity, limit and block distracting websites. Monitor your web usage."
  };
  const settings$4 = {
    message: "Settings"
  };
  const today$4 = {
    message: "Today"
  };
  const allTime$4 = {
    message: "Total time"
  };
  const byDays$4 = {
    message: "Daily"
  };
  const noData$4 = {
    message: "No data"
  };
  const noDataForPeriod$4 = {
    message: "No data for the selected period"
  };
  const showAll$4 = {
    message: "Show all the websites"
  };
  const sortBy$4 = {
    message: "Sorting by"
  };
  const usageTime$4 = {
    message: "Usage Time"
  };
  const session$4 = {
    message: "session"
  };
  const someSession$4 = {
    message: "sessions"
  };
  const sessions$4 = {
    message: "Sessions"
  };
  const days$4 = {
    message: "days"
  };
  const aggregate$4 = {
    message: "Aggregate data since"
  };
  const websites$4 = {
    message: "websites"
  };
  const cannotOpenFile$4 = {
    message: "You cannot open a local file due to security protocol"
  };
  const document$4 = {
    message: "Document"
  };
  const limit$4 = {
    message: "Limit"
  };
  const d$4 = {
    message: "d"
  };
  const h$4 = {
    message: "h"
  };
  const m$4 = {
    message: "m"
  };
  const s$4 = {
    message: "s"
  };
  const firstActiveDay$4 = {
    message: "The first active day"
  };
  const numberOfActiveDays$4 = {
    message: "Number of active days"
  };
  const totalNumberOfDays$4 = {
    message: "Total number of days"
  };
  const todayTime$4 = {
    message: "All the time today"
  };
  const averageTime$4 = {
    message: "Average time for active days"
  };
  const averageDailyUsage$4 = {
    message: "Average daily usage"
  };
  const mostActiveDay$4 = {
    message: "The most active day"
  };
  const mostInactiveDay$4 = {
    message: "The most inactive day"
  };
  const todayInclude$4 = {
    message: "Today is included in the statistics. Click to exclude."
  };
  const todayEcclude$4 = {
    message: "Today is excluded from the statistics. Click to include."
  };
  const averageTimeByDays$4 = {
    message: "Average time on selected days"
  };
  const exportToCsv$4 = {
    message: "Export to CSV"
  };
  const week$4 = {
    message: "This week"
  };
  const month$4 = {
    message: "This month"
  };
  const lastMonth$4 = {
    message: "Last month"
  };
  const generalSettings$4 = {
    message: "Settings"
  };
  const whiteListSettings$4 = {
    message: "WhiteList"
  };
  const limitsSettings$4 = {
    message: "Limits"
  };
  const notificationsSettings$4 = {
    message: "Notifications"
  };
  const pomodoroMode$4 = {
    message: "Pomodoro"
  };
  const pomodoroSettings$4 = {
    message: "Pomodoro Settings"
  };
  const pomodoro$5 = {
    message: "Pomodoro",
    description: "The Pomodoro method is a time management technique based on alternating periods of focused work and rest. According to the classics of the Pomodoro method, the work period lasts 25 minutes, the rest period is 5 minutes."
  };
  const pomodoroExplanationIcon$4 = {
    message: "When Pomodoro mode is on and operation mode is active, you will see this icon",
    description: "During rest periods, you will see this extension icon"
  };
  const pomodoroExplanationTime$4 = {
    message: "During Pomodoro mode, the extension continues to take into account the time you spent on the sites, all limits and notifications work."
  };
  const pomodoroExplanationStop$4 = {
    message: "After clicking 'Stop', work and rest time is reset to zero."
  };
  const pomodoroWork$4 = {
    message: "Period of work"
  };
  const pomodoroRest$4 = {
    message: "Period of rest"
  };
  const pomodoroFrequency$4 = {
    message: "Number of repetitions"
  };
  const start$4 = {
    message: "Run"
  };
  const stop$4 = {
    message: "Stop"
  };
  const pomodoroIsEnabled$4 = {
    message: "Pomodoro Mode is enabled"
  };
  const pomodoroSoundAfter$4 = {
    message: "Sound after complete period"
  };
  const clickToPreview$4 = {
    message: "Click to listen"
  };
  const sound$4 = {
    message: "Sound"
  };
  const aboutSettings$4 = {
    message: "About"
  };
  const viewTimeInBadge$4 = {
    message: "Display time tracker in icon",
    description: "You are able to see current 'spent time' information in short format on the extension icon"
  };
  const deferringDescription$4 = {
    message: "You can postpone the blocking for 5 minutes only once during the day"
  };
  const allowDeferringBlock$4 = {
    message: "Allow deferring block for 5 minutes",
    description: "After the site is blocked, you can postpone the blocking for 5 minutes during the day only once"
  };
  const intervalInactivity$4 = {
    message: "Stop the tracker if there is no action for",
    description: "These are any actions with the mouse or keyboard"
  };
  const exportToCsvSetting$4 = {
    message: "Exporting your web activity data to CSV",
    description: "You can export your web activity for any date range"
  };
  const sec$4 = {
    message: "seconds"
  };
  const min$4 = {
    message: "minute"
  };
  const mins$4 = {
    message: "minutes"
  };
  const whiteList$4 = {
    message: "Activity and spent time for these websites will not be tracked"
  };
  const addWebsite$4 = {
    message: "Add Website"
  };
  const enterWebsite$4 = {
    message: "Enter website name..."
  };
  const enterNotification$4 = {
    message: "Enter notification message..."
  };
  const limits$4 = {
    message: "Daily access restrictions for the websites",
    description: "Set the maximum time allowed to visit the website per day. After this time, the site will be blocked."
  };
  const limitsTip$4 = {
    message: "If you set the blocking time to 0 hours 0 minutes, the website will be blocked immediately"
  };
  const save$4 = {
    message: "Save"
  };
  const showDailyNotifacation$4 = {
    message: "Daily Summary Notifications",
    description: "At the end of each day, you will receive a notification with a summary of your daily usage"
  };
  const notificationTime$4 = {
    message: "Notifications for websites",
    description: "Show notifications every time you spend a selected period of time on the website"
  };
  const notificationMessage$4 = {
    message: "Notification message",
    description: "You will see this message in notification for websites every time"
  };
  const notificationTimeSetting$4 = {
    message: "Notification time with summary information about your daily usage"
  };
  const github$4 = {
    message: "Leave your feedback or report an issue on "
  };
  const question$4 = {
    message: "You can also ask questions and leave your suggestions"
  };
  const supportForm$4 = {
    message: "support form"
  };
  const doYouEnjoy$4 = {
    message: "Do you enjoy Web Activity Time Tracker?"
  };
  const review$4 = {
    message: "Leave a review!"
  };
  const promoClearYoutube$4 = {
    message: "Would you like to block shorts, comments, recommended videos, subscriptions, and other YouTube distractions? We've created another extension that will help you watch YouTube without distractions.",
    description: "Install"
  };
  const block$4 = {
    message: "You've reached your limit for today on "
  };
  const todayUsageTime$4 = {
    message: "Total usage time for today "
  };
  const comparedToYesterday$4 = {
    message: " compared to yesterday "
  };
  const mostVisited$4 = {
    message: "Most visited website "
  };
  const dashboard$4 = {
    message: "Dashboard"
  };
  const timeChartDescription$4 = {
    message: "This is a chart of time during the day by the hour"
  };
  const enjoyAndReview$4 = {
    message: "Enjoying the extension?",
    description: "Rate Web Activity Time Tracker"
  };
  const removeAllData$4 = {
    message: "Remove all data",
    description: "You can delete all data and statistics of visited websites for all time"
  };
  const remove$4 = {
    message: "Remove"
  };
  const removeAllDataConfirm$4 = {
    message: "Are you sure you want to delete all data?"
  };
  const cancel$4 = {
    message: "Cancel"
  };
  const backupAndRestore$4 = {
    message: "Backup and restore",
    description: "You can download a backup copy of all data for all visited sites"
  };
  const backup$4 = {
    message: "Backup"
  };
  const restore$4 = {
    message: "Restore"
  };
  const welcome$4 = {
    message: "Welcome to Web Activity Time Tracker",
    description: "Web Activity Time Tracker is <b>open-source</b>, <b>free</b> and <b>no ads</b> extension, which can help you track the time you spent on browsing websites and the count of visit."
  };
  const getStarted$4 = {
    message: "Get started"
  };
  const welcomeStart$4 = {
    message: "You can quickly start using the extension in just 3 easy steps"
  };
  const pinIcon$4 = {
    message: "Pin the icon"
  };
  const pinIconPart1$4 = {
    message: "To use this extension more conveniently, you can pin the icon to toolbar. Click the icon"
  };
  const pinIconPart2$4 = {
    message: "and then click the pin icon"
  };
  const browse$4 = {
    message: "Browse any websites",
    description: "When you visit any website, you will see that the time is displayed on the icon, just like here"
  };
  const seeData$4 = {
    message: "View your data on the popup page and on the dashboard",
    description: "Click on the extension icon to open a popup page and you will be able to read the data visualized using a pie chart, for today, for all time or by day. In the popup window, you can open the dashboard and it will show you today's time by the clock. And you can set a daily time limit for any websites, notifications for websites, or export data to CSV."
  };
  const close$4 = {
    message: "Close"
  };
  const useExtension$4 = {
    message: "Use the extension"
  };
  const next$4 = {
    message: "Next"
  };
  const showChangelog$4 = {
    message: "Show changelog",
    description: "Show the list of changes after updating extension"
  };
  const byHours$4 = {
    message: "Hourly"
  };
  const intervals$4 = {
    message: "Intervals"
  };
  const intervalsChart$4 = {
    message: "Only time intervals greater than",
    description: "are shown"
  };
  const completelyBlocked$4 = {
    message: "Completely Blocked",
    description: "Completely Block"
  };
  const tryMyOtherApps$4 = {
    message: "Try my other apps"
  };
  const clearYoutube$4 = {
    message: "Clean YouTube",
    description: "Chrome extension that can hide YouTube shorts, recomended videos, comments, feed, homepage recommendations and other distractions. Watch YouTube free of distractions."
  };
  const trackerjam$4 = {
    message: "TrackerJam",
    description: "Automatic web tracker for teams. Detailed reports for each team member, detailing time spent on websites, track any URL's inside domain, productivity scores, top domains with categories and etc."
  };
  const darkTheme$4 = {
    message: "Dark theme"
  };
  const en = {
    extName: extName$4,
    extDescription: extDescription$4,
    settings: settings$4,
    today: today$4,
    allTime: allTime$4,
    byDays: byDays$4,
    noData: noData$4,
    noDataForPeriod: noDataForPeriod$4,
    showAll: showAll$4,
    sortBy: sortBy$4,
    usageTime: usageTime$4,
    session: session$4,
    someSession: someSession$4,
    sessions: sessions$4,
    days: days$4,
    aggregate: aggregate$4,
    websites: websites$4,
    cannotOpenFile: cannotOpenFile$4,
    document: document$4,
    limit: limit$4,
    d: d$4,
    h: h$4,
    m: m$4,
    s: s$4,
    firstActiveDay: firstActiveDay$4,
    numberOfActiveDays: numberOfActiveDays$4,
    totalNumberOfDays: totalNumberOfDays$4,
    todayTime: todayTime$4,
    averageTime: averageTime$4,
    averageDailyUsage: averageDailyUsage$4,
    mostActiveDay: mostActiveDay$4,
    mostInactiveDay: mostInactiveDay$4,
    todayInclude: todayInclude$4,
    todayEcclude: todayEcclude$4,
    averageTimeByDays: averageTimeByDays$4,
    exportToCsv: exportToCsv$4,
    week: week$4,
    month: month$4,
    lastMonth: lastMonth$4,
    generalSettings: generalSettings$4,
    whiteListSettings: whiteListSettings$4,
    limitsSettings: limitsSettings$4,
    notificationsSettings: notificationsSettings$4,
    pomodoroMode: pomodoroMode$4,
    pomodoroSettings: pomodoroSettings$4,
    pomodoro: pomodoro$5,
    pomodoroExplanationIcon: pomodoroExplanationIcon$4,
    pomodoroExplanationTime: pomodoroExplanationTime$4,
    pomodoroExplanationStop: pomodoroExplanationStop$4,
    pomodoroWork: pomodoroWork$4,
    pomodoroRest: pomodoroRest$4,
    pomodoroFrequency: pomodoroFrequency$4,
    start: start$4,
    stop: stop$4,
    pomodoroIsEnabled: pomodoroIsEnabled$4,
    pomodoroSoundAfter: pomodoroSoundAfter$4,
    clickToPreview: clickToPreview$4,
    sound: sound$4,
    aboutSettings: aboutSettings$4,
    viewTimeInBadge: viewTimeInBadge$4,
    deferringDescription: deferringDescription$4,
    allowDeferringBlock: allowDeferringBlock$4,
    intervalInactivity: intervalInactivity$4,
    exportToCsvSetting: exportToCsvSetting$4,
    sec: sec$4,
    min: min$4,
    "2min": {
      message: "minutes"
    },
    mins: mins$4,
    whiteList: whiteList$4,
    addWebsite: addWebsite$4,
    enterWebsite: enterWebsite$4,
    enterNotification: enterNotification$4,
    limits: limits$4,
    limitsTip: limitsTip$4,
    save: save$4,
    showDailyNotifacation: showDailyNotifacation$4,
    notificationTime: notificationTime$4,
    notificationMessage: notificationMessage$4,
    notificationTimeSetting: notificationTimeSetting$4,
    github: github$4,
    question: question$4,
    supportForm: supportForm$4,
    doYouEnjoy: doYouEnjoy$4,
    review: review$4,
    promoClearYoutube: promoClearYoutube$4,
    block: block$4,
    "5mins": {
      message: "+ 5 minutes"
    },
    todayUsageTime: todayUsageTime$4,
    comparedToYesterday: comparedToYesterday$4,
    mostVisited: mostVisited$4,
    dashboard: dashboard$4,
    timeChartDescription: timeChartDescription$4,
    enjoyAndReview: enjoyAndReview$4,
    removeAllData: removeAllData$4,
    remove: remove$4,
    removeAllDataConfirm: removeAllDataConfirm$4,
    cancel: cancel$4,
    backupAndRestore: backupAndRestore$4,
    backup: backup$4,
    restore: restore$4,
    welcome: welcome$4,
    getStarted: getStarted$4,
    welcomeStart: welcomeStart$4,
    pinIcon: pinIcon$4,
    pinIconPart1: pinIconPart1$4,
    pinIconPart2: pinIconPart2$4,
    browse: browse$4,
    seeData: seeData$4,
    close: close$4,
    useExtension: useExtension$4,
    next: next$4,
    showChangelog: showChangelog$4,
    byHours: byHours$4,
    intervals: intervals$4,
    intervalsChart: intervalsChart$4,
    completelyBlocked: completelyBlocked$4,
    tryMyOtherApps: tryMyOtherApps$4,
    clearYoutube: clearYoutube$4,
    trackerjam: trackerjam$4,
    darkTheme: darkTheme$4
  };
  const extName$3 = {
    message: "Web Activity Time Tracker - Блокировка сайтов и Веб аналитика"
  };
  const extDescription$3 = {
    message: "Отслеживайте время вашей веб-активности и блокируйте отвлекающие сайты. Следите за тем, сколько времени вы проводите на сайтах."
  };
  const settings$3 = {
    message: "Настройки"
  };
  const today$3 = {
    message: "Сегодня"
  };
  const allTime$3 = {
    message: "За все время"
  };
  const byDays$3 = {
    message: "По дням"
  };
  const noData$3 = {
    message: "Нет данных"
  };
  const noDataForPeriod$3 = {
    message: "Нет данных за выбранный период"
  };
  const showAll$3 = {
    message: "Показать все сайты"
  };
  const sortBy$3 = {
    message: "Сортировать по"
  };
  const usageTime$3 = {
    message: "Время использования"
  };
  const session$3 = {
    message: "сессия"
  };
  const someSession$3 = {
    message: "сессий"
  };
  const sessions$3 = {
    message: "Сессии"
  };
  const days$3 = {
    message: "дней"
  };
  const aggregate$3 = {
    message: "Данные с "
  };
  const websites$3 = {
    message: "сайтов"
  };
  const cannotOpenFile$3 = {
    message: "Вы не можете открыть локальный файл из-за правил безопасности"
  };
  const document$3 = {
    message: "Документ"
  };
  const limit$3 = {
    message: "Лимит"
  };
  const d$3 = {
    message: "д"
  };
  const h$3 = {
    message: "ч"
  };
  const m$3 = {
    message: "мин"
  };
  const s$3 = {
    message: "сек"
  };
  const firstActiveDay$3 = {
    message: "Первый активный день"
  };
  const numberOfActiveDays$3 = {
    message: "Всего активных дней"
  };
  const totalNumberOfDays$3 = {
    message: "Всего дней"
  };
  const todayTime$3 = {
    message: "Общее время сегодня"
  };
  const averageTime$3 = {
    message: "Среднее время по активным дням"
  };
  const averageDailyUsage$3 = {
    message: "Среднее ежедневное использование"
  };
  const mostActiveDay$3 = {
    message: "Самый активный день"
  };
  const mostInactiveDay$3 = {
    message: "Самый неактивный день"
  };
  const todayInclude$3 = {
    message: "Сегодняшний день включен в статистику. Нажмите, если хотите исключить из статистики."
  };
  const todayEcclude$3 = {
    message: "Сегодняшний день исключен из статистику. Нажмите, если хотите включить в статистику."
  };
  const averageTimeByDays$3 = {
    message: "Среднее время по выбранным дням"
  };
  const exportToCsv$3 = {
    message: "Экспортировать в CSV"
  };
  const week$3 = {
    message: "Эта неделя"
  };
  const month$3 = {
    message: "Этот месяц"
  };
  const lastMonth$3 = {
    message: "Последний месяц"
  };
  const generalSettings$3 = {
    message: "Настройки"
  };
  const whiteListSettings$3 = {
    message: "Белый список"
  };
  const limitsSettings$3 = {
    message: "Лимиты"
  };
  const notificationsSettings$3 = {
    message: "Уведомления"
  };
  const pomodoroMode$3 = {
    message: "Pomodoro"
  };
  const pomodoroSettings$3 = {
    message: "Настройки Pomodoro"
  };
  const pomodoro$4 = {
    message: "Pomodoro",
    description: "Метод Pomodoro — это техника тайм-менеджмента, завязанная на чередовании периодов сфокусированной работы и отдыха. По классике метода помодоро период работы длится 25 минут, период отдыха 5 минут."
  };
  const pomodoroExplanationIcon$3 = {
    message: "Когда режим Pomodoro включен и активен режим работы, то вы будете видеть эту иконку",
    description: "В периоды отдыха вы будете видеть эту иконку расширения"
  };
  const pomodoroExplanationTime$3 = {
    message: "Во время режима Pomodoro, расширение продолжает учитывать время, которые вы провели на сайтах,работают все лимиты и уведомления."
  };
  const pomodoroExplanationStop$3 = {
    message: "После нажатия 'Остановить', время работы и отдыха обнуляется."
  };
  const pomodoroWork$3 = {
    message: "Период работы"
  };
  const pomodoroRest$3 = {
    message: "Период отдыха"
  };
  const pomodoroFrequency$3 = {
    message: "Количество повторов"
  };
  const start$3 = {
    message: "Запустить"
  };
  const stop$3 = {
    message: "Остановить"
  };
  const pomodoroIsEnabled$3 = {
    message: "Режим Pomodoro включен"
  };
  const pomodoroSoundAfter$3 = {
    message: "Воспроизведение после завершения периода"
  };
  const clickToPreview$3 = {
    message: "Нажмите для прослушивания"
  };
  const sound$3 = {
    message: "Мелодия"
  };
  const aboutSettings$3 = {
    message: "О программе"
  };
  const viewTimeInBadge$3 = {
    message: "Показывать индикатор времени",
    description: "Вы можете увидеть текущее затраченное время в сокращенном формате на значке расширения"
  };
  const deferringDescription$3 = {
    message: "Вы можете отложить блокировку на 5 минут только один раз в течение дня"
  };
  const allowDeferringBlock$3 = {
    message: "Разрешить отсрочку блокировки на 5 минут",
    description: "После того, как сайт будет заблокирован, вы можете один раз в течение дня отложить блокировку на 5 минут"
  };
  const intervalInactivity$3 = {
    message: "Остановить трекер, если нет никаких действий в течение:",
    description: "Это любые действия с помощью мыши или клавиатуры"
  };
  const exportToCsvSetting$3 = {
    message: "Экспорт данных вашей веб-активности в формат CSV",
    description: "Вы можете экспортировать свою веб-активность для любого диапазона дат"
  };
  const sec$3 = {
    message: "секунд"
  };
  const min$3 = {
    message: "минута"
  };
  const mins$3 = {
    message: "минут"
  };
  const whiteList$3 = {
    message: "Активность и время для этих сайтов отслеживаться не будут"
  };
  const addWebsite$3 = {
    message: "Добавить сайт"
  };
  const enterWebsite$3 = {
    message: "Введите сайт..."
  };
  const enterNotification$3 = {
    message: "Введите текст уведомления..."
  };
  const limits$3 = {
    message: "Ежедневные ограничения доступа к сайтам",
    description: "Установите максимальное время, разрешенное для посещения сайта в день. По истечении этого времени сайт будет заблокирован."
  };
  const limitsTip$3 = {
    message: "Если вы установите время блокировки на 0 часов 0 минут, сайт будет немедленно заблокирован"
  };
  const save$3 = {
    message: "Сохранить"
  };
  const showDailyNotifacation$3 = {
    message: "Ежедневные итоговые уведомления",
    description: "В конце каждого дня вы будете получать уведомление с краткой информацией о вашем ежедневном использовании"
  };
  const notificationTimeSetting$3 = {
    message: "Время показа уведомления с краткой информацией о вашем ежедневном использовании"
  };
  const notificationTime$3 = {
    message: "Уведомления для сайтов",
    description: "Показывать уведомления каждый раз, когда вы проводите указанный период времени на сайте"
  };
  const notificationMessage$3 = {
    message: "Текст уведомления",
    description: "Вы будете видеть это сообщение в уведомлении для сайтов"
  };
  const github$3 = {
    message: "Если у вас есть вопрос или вы хотели бы сообщить о проблеме, вы можете сделать это на"
  };
  const question$3 = {
    message: "Также вы можете задать вопросы или оставить свои предложения "
  };
  const supportForm$3 = {
    message: "поддержка"
  };
  const doYouEnjoy$3 = {
    message: "Вам нравится Web Activity Time Tracker?"
  };
  const review$3 = {
    message: "Оставьте отзыв!"
  };
  const block$3 = {
    message: "Вы достигли лимита использования сегодня на "
  };
  const todayUsageTime$3 = {
    message: "Общее время использования на сегодняшний день "
  };
  const comparedToYesterday$3 = {
    message: " по сравнению со вчерашним днем "
  };
  const mostVisited$3 = {
    message: "Самый посещаемый сайт "
  };
  const dashboard$3 = {
    message: "Дашборд"
  };
  const timeChartDescription$3 = {
    message: "Это график времени в течение дня по часам"
  };
  const enjoyAndReview$3 = {
    message: "Вам нравится расширение?",
    description: "Оцените Web Activity Time Tracker"
  };
  const promoClearYoutube$3 = {
    message: "Хотели бы вы блокировать шортсы, комментарии, рекомендованные видео, подписки и другие отвлекающие элементы YouTube? Мы создали еще одно расширение, которое поможет вам смотреть YouTube без отвлекающих факторов.",
    description: "Установить"
  };
  const removeAllData$3 = {
    message: "Удалить все данные",
    description: "Вы можете удалить все данные и статистику посещенных сайтов за все время"
  };
  const remove$3 = {
    message: "Удалить"
  };
  const removeAllDataConfirm$3 = {
    message: "Вы уверены, что хотите удалить все данные, включая статистику посещенных сайтов?"
  };
  const cancel$3 = {
    message: "Отмена"
  };
  const backupAndRestore$3 = {
    message: "Резервное копирование и восстановление",
    description: "Вы можете скачать резервную копию всех данных по всем посещенным сайтам"
  };
  const backup$3 = {
    message: "Скачать резервную копию"
  };
  const restore$3 = {
    message: "Восстановить из резервной копиии"
  };
  const welcome$3 = {
    message: "Добро пожаловать в Web Activity Time Tracker",
    description: "Web Activity Time Tracker это <b>бесплатное</b>, <b>без рекламы</b> и <b>с открытым исходным кодом</b> расширение, которое поможем вам отслеживать время, потраченное вами на просмотр веб-сайтов, и покажет количество посещений."
  };
  const getStarted$3 = {
    message: "Руководство"
  };
  const welcomeStart$3 = {
    message: "Вы можете быстро начать использовать расширение всего за 3 простых шага"
  };
  const pinIcon$3 = {
    message: "Закрепите значок"
  };
  const pinIconPart1$3 = {
    message: "Чтобы более удобно использовать это расширение, вы можете прикрепить значок к панели инструментов. Нажмите на значок"
  };
  const pinIconPart2$3 = {
    message: "и затем нажмите на значок закрепления"
  };
  const browse$3 = {
    message: "Просматривайте любые веб-сайты",
    description: "При посещении любого веб-сайта вы увидите, что время отображается на значке, точно так же, как здесь"
  };
  const seeData$3 = {
    message: "Просматривайте ваши данные на всплывающей странице и на панели мониторинга",
    description: "Нажмите на значок расширения, чтобы открыть всплывающую страницу, и вы сможете увидеть данные посещения сайтов за сегодня, за все время и по дням. Во всплывающем окне вы можете открыть панель мониторинга, и вы увидите сегодняшнее время по часам. Там же вы можете установить ежедневное ограничение по времени для любых веб-сайтов, уведомления для веб-сайтов или экспортировать данные в CSV."
  };
  const close$3 = {
    message: "Закрыть"
  };
  const useExtension$3 = {
    message: "Начать пользоваться"
  };
  const next$3 = {
    message: "Продолжить"
  };
  const showChangelog$3 = {
    message: "Показывать список изменений",
    description: "Показывать список изменений после обновления расширения"
  };
  const byHours$3 = {
    message: "По часам"
  };
  const intervals$3 = {
    message: "Интервалы",
    description: "Отображаются только временные интервалы, превышающие 5 секунд"
  };
  const intervalsChart$3 = {
    message: "Отображаются только временные интервалы, превышающие",
    description: ""
  };
  const completelyBlocked$3 = {
    message: "Полностью заблокирован",
    description: "Полностью заблокировать"
  };
  const tryMyOtherApps$3 = {
    message: "Попробуйте другие мои приложения"
  };
  const clearYoutube$3 = {
    message: "Clean YouTube",
    description: "Расширение для Chrome, которое может скрывать шортс YouTube, рекомендуемые видео, комментарии, ленту новостей, рекомендации по домашней странице и другие отвлекающие факторы. Смотрите YouTube без отвлекающих факторов."
  };
  const trackerjam$3 = {
    message: "TrackerJam",
    description: "Автоматический веб-трекер для команд. Подробные отчеты для каждого члена команды, детализация времени, проведенного на веб-сайтах, отслеживание любых URL внутри домена, показатели продуктивности, топ доменов с категориями и т.д."
  };
  const darkTheme$3 = {
    message: "Темная тема"
  };
  const ru = {
    extName: extName$3,
    extDescription: extDescription$3,
    settings: settings$3,
    today: today$3,
    allTime: allTime$3,
    byDays: byDays$3,
    noData: noData$3,
    noDataForPeriod: noDataForPeriod$3,
    showAll: showAll$3,
    sortBy: sortBy$3,
    usageTime: usageTime$3,
    session: session$3,
    someSession: someSession$3,
    sessions: sessions$3,
    days: days$3,
    aggregate: aggregate$3,
    websites: websites$3,
    cannotOpenFile: cannotOpenFile$3,
    document: document$3,
    limit: limit$3,
    d: d$3,
    h: h$3,
    m: m$3,
    s: s$3,
    firstActiveDay: firstActiveDay$3,
    numberOfActiveDays: numberOfActiveDays$3,
    totalNumberOfDays: totalNumberOfDays$3,
    todayTime: todayTime$3,
    averageTime: averageTime$3,
    averageDailyUsage: averageDailyUsage$3,
    mostActiveDay: mostActiveDay$3,
    mostInactiveDay: mostInactiveDay$3,
    todayInclude: todayInclude$3,
    todayEcclude: todayEcclude$3,
    averageTimeByDays: averageTimeByDays$3,
    exportToCsv: exportToCsv$3,
    week: week$3,
    month: month$3,
    lastMonth: lastMonth$3,
    generalSettings: generalSettings$3,
    whiteListSettings: whiteListSettings$3,
    limitsSettings: limitsSettings$3,
    notificationsSettings: notificationsSettings$3,
    pomodoroMode: pomodoroMode$3,
    pomodoroSettings: pomodoroSettings$3,
    pomodoro: pomodoro$4,
    pomodoroExplanationIcon: pomodoroExplanationIcon$3,
    pomodoroExplanationTime: pomodoroExplanationTime$3,
    pomodoroExplanationStop: pomodoroExplanationStop$3,
    pomodoroWork: pomodoroWork$3,
    pomodoroRest: pomodoroRest$3,
    pomodoroFrequency: pomodoroFrequency$3,
    start: start$3,
    stop: stop$3,
    pomodoroIsEnabled: pomodoroIsEnabled$3,
    pomodoroSoundAfter: pomodoroSoundAfter$3,
    clickToPreview: clickToPreview$3,
    sound: sound$3,
    aboutSettings: aboutSettings$3,
    viewTimeInBadge: viewTimeInBadge$3,
    deferringDescription: deferringDescription$3,
    allowDeferringBlock: allowDeferringBlock$3,
    intervalInactivity: intervalInactivity$3,
    exportToCsvSetting: exportToCsvSetting$3,
    sec: sec$3,
    min: min$3,
    "2min": {
      message: "минуты"
    },
    mins: mins$3,
    whiteList: whiteList$3,
    addWebsite: addWebsite$3,
    enterWebsite: enterWebsite$3,
    enterNotification: enterNotification$3,
    limits: limits$3,
    limitsTip: limitsTip$3,
    save: save$3,
    showDailyNotifacation: showDailyNotifacation$3,
    notificationTimeSetting: notificationTimeSetting$3,
    notificationTime: notificationTime$3,
    notificationMessage: notificationMessage$3,
    github: github$3,
    question: question$3,
    supportForm: supportForm$3,
    doYouEnjoy: doYouEnjoy$3,
    review: review$3,
    block: block$3,
    "5mins": {
      message: "+ 5 минут"
    },
    todayUsageTime: todayUsageTime$3,
    comparedToYesterday: comparedToYesterday$3,
    mostVisited: mostVisited$3,
    dashboard: dashboard$3,
    timeChartDescription: timeChartDescription$3,
    enjoyAndReview: enjoyAndReview$3,
    promoClearYoutube: promoClearYoutube$3,
    removeAllData: removeAllData$3,
    remove: remove$3,
    removeAllDataConfirm: removeAllDataConfirm$3,
    cancel: cancel$3,
    backupAndRestore: backupAndRestore$3,
    backup: backup$3,
    restore: restore$3,
    welcome: welcome$3,
    getStarted: getStarted$3,
    welcomeStart: welcomeStart$3,
    pinIcon: pinIcon$3,
    pinIconPart1: pinIconPart1$3,
    pinIconPart2: pinIconPart2$3,
    browse: browse$3,
    seeData: seeData$3,
    close: close$3,
    useExtension: useExtension$3,
    next: next$3,
    showChangelog: showChangelog$3,
    byHours: byHours$3,
    intervals: intervals$3,
    intervalsChart: intervalsChart$3,
    completelyBlocked: completelyBlocked$3,
    tryMyOtherApps: tryMyOtherApps$3,
    clearYoutube: clearYoutube$3,
    trackerjam: trackerjam$3,
    darkTheme: darkTheme$3
  };
  const extName$2 = {
    message: "Web Activity Time Tracker - Blockieren Sie Websites und Webanalysen"
  };
  const extDescription$2 = {
    message: "Verfolgen und begrenzen Sie die Zeit Ihrer Webaktivitäten und blockieren Sie den Zugang zu den Websites. Überwachen Sie Ihre Internetnutzung."
  };
  const settings$2 = {
    message: "Einstellungen"
  };
  const today$2 = {
    message: "Heute"
  };
  const allTime$2 = {
    message: "Gesamte Zeit"
  };
  const byDays$2 = {
    message: "Täglich"
  };
  const noData$2 = {
    message: "Keine Daten verfügbar"
  };
  const noDataForPeriod$2 = {
    message: "Keine Daten für den ausgewählten Zeitraum"
  };
  const showAll$2 = {
    message: "Alle Websites anzeigen"
  };
  const sortBy$2 = {
    message: "Sortieren nach"
  };
  const usageTime$2 = {
    message: "Verwendungszeit"
  };
  const session$2 = {
    message: "Sitzung"
  };
  const someSession$2 = {
    message: "Sitzungen"
  };
  const sessions$2 = {
    message: "Sitzungen"
  };
  const days$2 = {
    message: "Tage"
  };
  const aggregate$2 = {
    message: "Gesammelte Daten seit"
  };
  const websites$2 = {
    message: "Webseiten"
  };
  const cannotOpenFile$2 = {
    message: "Aufgrund des Sicherheitsprotokolls können Sie eine lokale Datei nicht öffnen"
  };
  const document$2 = {
    message: "Dokument"
  };
  const limit$2 = {
    message: "Limit"
  };
  const d$2 = {
    message: "d"
  };
  const h$2 = {
    message: "h"
  };
  const m$2 = {
    message: "m"
  };
  const s$2 = {
    message: "s"
  };
  const firstActiveDay$2 = {
    message: "Der erste aktive Tag"
  };
  const numberOfActiveDays$2 = {
    message: "Gesamtzahl der aktiven Tage"
  };
  const totalNumberOfDays$2 = {
    message: "Alle Tage"
  };
  const todayTime$2 = {
    message: "Gesamtzeit heute"
  };
  const averageTime$2 = {
    message: "Durchschnittliche Zeit an aktiven Tagen"
  };
  const averageDailyUsage$2 = {
    message: "Durchschnittliche tägliche Nutzung"
  };
  const mostActiveDay$2 = {
    message: "Der aktivste Tag"
  };
  const mostInactiveDay$2 = {
    message: "Der inaktivste Tag"
  };
  const todayInclude$2 = {
    message: "Der heutige Tag ist in der Statistik enthalten. Aus der Statistik ausschließen."
  };
  const todayEcclude$2 = {
    message: "Der heutige Tag ist aus der Statistik ausgeschlossen. In die Statistik einbeziehen."
  };
  const averageTimeByDays$2 = {
    message: "Durchschnittliche Zeit für ausgewählte Tage"
  };
  const exportToCsv$2 = {
    message: "Als CSV exportieren"
  };
  const week$2 = {
    message: "Diese Woche"
  };
  const month$2 = {
    message: "Diesen Monat"
  };
  const lastMonth$2 = {
    message: "Letzter Monat"
  };
  const generalSettings$2 = {
    message: "Einstellungen"
  };
  const whiteListSettings$2 = {
    message: "Weiße Liste"
  };
  const limitsSettings$2 = {
    message: "Beschränkungen"
  };
  const notificationsSettings$2 = {
    message: "Benachrichtigungen"
  };
  const pomodoroMode$2 = {
    message: "Pomodoro"
  };
  const pomodoroSettings$2 = {
    message: "Pomodoro Einstellungen"
  };
  const pomodoro$3 = {
    message: "Pomodoro",
    description: "Die Pomodoro-Methode ist eine Zeitmanagementtechnik, die auf dem Wechsel von konzentrierten Arbeits- und Ruhephasen basiert. Bei der klassischen Pomodoro-Methode dauert die Arbeitsphase 25 Minuten und die Ruhephase 5 Minuten."
  };
  const pomodoroExplanationIcon$2 = {
    message: "Wenn der Pomodoro-Modus aktiviert ist und der Betriebsmodus aktiv ist, sehen Sie dieses Symbol",
    description: "Während der Ruhezeiten sehen Sie dieses Erweiterungssymbol"
  };
  const pomodoroExplanationTime$2 = {
    message: "Während des Pomodoro-Modus berücksichtigt die Erweiterung weiterhin die Zeit, die Sie auf den Seiten verbracht haben, alle Grenzen und Benachrichtigungen funktionieren."
  };
  const pomodoroExplanationStop$2 = {
    message: "Nach dem Drücken von 'Stop' werden die Betriebs- und Ruhezeiten auf Null zurückgesetzt."
  };
  const pomodoroWork$2 = {
    message: "Zeitraum der Arbeit"
  };
  const pomodoroRest$2 = {
    message: "Ruhezeit"
  };
  const pomodoroFrequency$2 = {
    message: "Anzahl der Wiederholungen"
  };
  const start$2 = {
    message: "Starten Sie"
  };
  const stop$2 = {
    message: "Stop"
  };
  const pomodoroIsEnabled$2 = {
    message: "Der Pomodoro-Modus ist aktiviert"
  };
  const pomodoroSoundAfter$2 = {
    message: "Ton nach vollständiger Periode"
  };
  const clickToPreview$2 = {
    message: "Zum Anhören klicken"
  };
  const sound$2 = {
    message: "Ton"
  };
  const aboutSettings$2 = {
    message: "Über die Erweiterung"
  };
  const viewTimeInBadge$2 = {
    message: "Zeitindikator anzeigen",
    description: 'Die aktuellen Informationen zur "verbrauchten Zeit" im Kurzformat anzeigen'
  };
  const deferringDescription$2 = {
    message: "Die Sperre kann nur einmal pro Tag um 5 Minuten verschoben werden"
  };
  const allowDeferringBlock$2 = {
    message: "Verzögerung der Sperre um 5 Minuten zulassen",
    description: "Nachdem die Site gesperrt wurde, können Sie die Sperrung einmal täglich um 5 Minuten verschieben"
  };
  const intervalInactivity$2 = {
    message: "Zeiterfassung stoppen, bei Inaktivität für:",
    description: "Betrifft alle Aktionen mit der Maus oder der Tastatur"
  };
  const exportToCsvSetting$2 = {
    message: "Ihre Webaktivitätsdaten als CSV-Datei exportieren",
    description: "Ihre Webaktivitäten für einen beliebigen Zeitraum exportieren"
  };
  const sec$2 = {
    message: "Sekunden"
  };
  const min$2 = {
    message: "Minute"
  };
  const mins$2 = {
    message: "Minuten"
  };
  const whiteList$2 = {
    message: "Aktivität und Zeit für diese Websites werden nicht erfasst."
  };
  const addWebsite$2 = {
    message: "Website hinzufügen"
  };
  const enterWebsite$2 = {
    message: "Namen der Website eingeben..."
  };
  const enterNotification$2 = {
    message: "Text für die Benachrichtigung eingeben..."
  };
  const limits$2 = {
    message: "Tägliche Zugriffsbeschränkungen für Websites",
    description: "Legen Sie die maximale Zeit fest, die pro Tag für den Besuch der Website zulässig ist. Nach dieser Zeit wird die Website gesperrt."
  };
  const limitsTip$2 = {
    message: "Setzen Sie die Blockierungszeit auf 0 Stunden 0 Minuten, um die Website sofort zu blockieren."
  };
  const save$2 = {
    message: "Speichern"
  };
  const showDailyNotifacation$2 = {
    message: "Tägliche Zusammenfassung als Benachrichtigung",
    description: "Am Ende jedes Tages erhalten Sie eine Benachrichtigung mit einer Zusammenfassung Ihrer täglichen Nutzung."
  };
  const notificationTime$2 = {
    message: "Benachrichtigungen für Websites",
    description: "Jedes Mal eine Benachrichtigung anzeigen, wenn Sie den angegebenen Zeitraum auf einer Website verbringen."
  };
  const notificationMessage$2 = {
    message: "Benachrichtigungstext",
    description: "Dieser Text wird in der Benachrichtigung für Websites angezeigt"
  };
  const notificationTimeSetting$2 = {
    message: "Tägliche Zusammenfassung um folgende Uhrzeit anzeigen:"
  };
  const github$2 = {
    message: "Feedback zur Erweiterung geben oder ein Problem melden: "
  };
  const question$2 = {
    message: "Eine Frage stellen oder Verbesserungen vorschlagen: "
  };
  const supportForm$2 = {
    message: "Unterstützungsformular"
  };
  const doYouEnjoy$2 = {
    message: "Gefällt Ihnen diese Erweiterung?"
  };
  const review$2 = {
    message: "Schreiben Sie eine Bewertung!"
  };
  const block$2 = {
    message: "Sie haben Ihr tägliches Nutzungslimit erreicht für "
  };
  const todayUsageTime$2 = {
    message: "Bisherige Gesamtnutzungszeit "
  };
  const comparedToYesterday$2 = {
    message: " im Vergleich zu gestern "
  };
  const mostVisited$2 = {
    message: "Die meistbesuchte Website "
  };
  const dashboard$2 = {
    message: "Übersicht"
  };
  const timeChartDescription$2 = {
    message: "Dies ist eine stundenweise Zeitleiste für den Tag"
  };
  const enjoyAndReview$2 = {
    message: "Gefällt Ihnen diese Erweiterung?",
    description: "Web Activity Time Tracker bewerten"
  };
  const removeAllData$2 = {
    message: "Alle Daten entfernen",
    description: "Alle Daten und Statistiken der besuchten Websites für immer löschen."
  };
  const remove$2 = {
    message: "Löschen"
  };
  const removeAllDataConfirm$2 = {
    message: "Sind Sie sicher, dass Sie alle Daten löschen möchten?"
  };
  const cancel$2 = {
    message: "Abbrechen"
  };
  const backupAndRestore$2 = {
    message: "Sicherung und Wiederherstellen",
    description: "Sie können eine Sicherungskopie aller Daten für alle besuchten Websites herunterladen"
  };
  const backup$2 = {
    message: "Sicherung"
  };
  const restore$2 = {
    message: "Wiederherstellen"
  };
  const welcome$2 = {
    message: "Willkommen bei Web Activity Time Tracker",
    description: "Web Activity Time Tracker ist eine <b>open-source</b>, <b>kostenlose</b> und <b>werbefreie</b> Erweiterung, mit der Sie die Zeit, die Sie für das Durchsuchen von Websites aufgewendet haben, und die Anzahl der Besuche nachverfolgen können."
  };
  const getStarted$2 = {
    message: "Anleitung"
  };
  const welcomeStart$2 = {
    message: "Sie können die Erweiterung in nur 3 einfachen Schritten schnell verwenden"
  };
  const pinIcon$2 = {
    message: "Pin das Symbol"
  };
  const pinIconPart1$2 = {
    message: "Um diese Erweiterung bequemer zu verwenden, können Sie das Symbol an die Symbolleiste anheften. Klicken Sie auf das Symbol"
  };
  const pinIconPart2$2 = {
    message: "und klicken Sie dann auf das Pin-Symbol"
  };
  const browse$2 = {
    message: "Durchsuchen Sie alle Websites",
    description: "Wenn Sie eine Website besuchen, werden Sie sehen, dass die Uhrzeit auf dem Symbol angezeigt wird, genau wie hier"
  };
  const seeData$2 = {
    message: "Zeigen Sie Ihre Daten auf der Popup-Seite und im Dashboard an",
    description: "Klicken Sie auf das Erweiterungssymbol, um eine Popup-Seite zu öffnen, und Sie können die mit einem Kreisdiagramm gerenderten Daten für heute, für alle Zeiten oder für Tage lesen. In einem Popup-Fenster können Sie das Dashboard öffnen, und es zeigt Ihnen die heutige Zeit nach Stunden an. Und Sie können ein tägliches Zeitlimit für alle Websites festlegen, Benachrichtigungen für Websites festlegen oder Daten in CSV exportieren."
  };
  const close$2 = {
    message: "Schließen"
  };
  const useExtension$2 = {
    message: "Verwenden Sie die Erweiterung"
  };
  const next$2 = {
    message: "Weiter"
  };
  const showChangelog$2 = {
    message: "Änderungsliste anzeigen",
    description: "Zeigen Sie die Liste der Änderungen nach dem Aktualisieren der Erweiterung an"
  };
  const byHours$2 = {
    message: "Stundenweise"
  };
  const intervals$2 = {
    message: "Intervalle"
  };
  const intervalsChart$2 = {
    message: "Nur Zeitintervalle größer als",
    description: "werden angezeigt"
  };
  const promoClearYoutube$2 = {
    message: "Möchten Sie Kurzfilme, Kommentare, empfohlene Videos, Abonnements und andere YouTube-Ablenkungen blockieren? Wir haben eine weitere Erweiterung erstellt, mit der Sie YouTube ohne Ablenkung ansehen können.",
    description: "Install"
  };
  const completelyBlocked$2 = {
    message: "Vollständig blockiert",
    description: "Vollständig blockieren"
  };
  const tryMyOtherApps$2 = {
    message: "Probieren Sie meine anderen Apps aus"
  };
  const clearYoutube$2 = {
    message: "Clean YouTube",
    description: "Chrome-Erweiterung, die YouTube-Shorts, empfohlene Videos, Kommentare, Feeds, Homepage-Empfehlungen und andere Ablenkungen ausblenden kann. Sieh dir YouTube ohne Ablenkungen an."
  };
  const trackerjam$2 = {
    message: "TrackerJam",
    description: "Automatischer Web-Tracker für Teams. Detaillierte Berichte für jedes Teammitglied, mit detaillierten Angaben zur auf Websites verbrachten Zeit, Verfolgung aller URLs innerhalb der Domain, Produktivitätsbewertungen, Top-Domains mit Kategorien usw."
  };
  const darkTheme$2 = {
    message: "Dunkles Thema"
  };
  const de = {
    extName: extName$2,
    extDescription: extDescription$2,
    settings: settings$2,
    today: today$2,
    allTime: allTime$2,
    byDays: byDays$2,
    noData: noData$2,
    noDataForPeriod: noDataForPeriod$2,
    showAll: showAll$2,
    sortBy: sortBy$2,
    usageTime: usageTime$2,
    session: session$2,
    someSession: someSession$2,
    sessions: sessions$2,
    days: days$2,
    aggregate: aggregate$2,
    websites: websites$2,
    cannotOpenFile: cannotOpenFile$2,
    document: document$2,
    limit: limit$2,
    d: d$2,
    h: h$2,
    m: m$2,
    s: s$2,
    firstActiveDay: firstActiveDay$2,
    numberOfActiveDays: numberOfActiveDays$2,
    totalNumberOfDays: totalNumberOfDays$2,
    todayTime: todayTime$2,
    averageTime: averageTime$2,
    averageDailyUsage: averageDailyUsage$2,
    mostActiveDay: mostActiveDay$2,
    mostInactiveDay: mostInactiveDay$2,
    todayInclude: todayInclude$2,
    todayEcclude: todayEcclude$2,
    averageTimeByDays: averageTimeByDays$2,
    exportToCsv: exportToCsv$2,
    week: week$2,
    month: month$2,
    lastMonth: lastMonth$2,
    generalSettings: generalSettings$2,
    whiteListSettings: whiteListSettings$2,
    limitsSettings: limitsSettings$2,
    notificationsSettings: notificationsSettings$2,
    pomodoroMode: pomodoroMode$2,
    pomodoroSettings: pomodoroSettings$2,
    pomodoro: pomodoro$3,
    pomodoroExplanationIcon: pomodoroExplanationIcon$2,
    pomodoroExplanationTime: pomodoroExplanationTime$2,
    pomodoroExplanationStop: pomodoroExplanationStop$2,
    pomodoroWork: pomodoroWork$2,
    pomodoroRest: pomodoroRest$2,
    pomodoroFrequency: pomodoroFrequency$2,
    start: start$2,
    stop: stop$2,
    pomodoroIsEnabled: pomodoroIsEnabled$2,
    pomodoroSoundAfter: pomodoroSoundAfter$2,
    clickToPreview: clickToPreview$2,
    sound: sound$2,
    aboutSettings: aboutSettings$2,
    viewTimeInBadge: viewTimeInBadge$2,
    deferringDescription: deferringDescription$2,
    allowDeferringBlock: allowDeferringBlock$2,
    intervalInactivity: intervalInactivity$2,
    exportToCsvSetting: exportToCsvSetting$2,
    sec: sec$2,
    min: min$2,
    "2min": {
      message: "Minuten"
    },
    mins: mins$2,
    whiteList: whiteList$2,
    addWebsite: addWebsite$2,
    enterWebsite: enterWebsite$2,
    enterNotification: enterNotification$2,
    limits: limits$2,
    limitsTip: limitsTip$2,
    save: save$2,
    showDailyNotifacation: showDailyNotifacation$2,
    notificationTime: notificationTime$2,
    notificationMessage: notificationMessage$2,
    notificationTimeSetting: notificationTimeSetting$2,
    github: github$2,
    question: question$2,
    supportForm: supportForm$2,
    doYouEnjoy: doYouEnjoy$2,
    review: review$2,
    block: block$2,
    "5mins": {
      message: "+ 5 Minuten"
    },
    todayUsageTime: todayUsageTime$2,
    comparedToYesterday: comparedToYesterday$2,
    mostVisited: mostVisited$2,
    dashboard: dashboard$2,
    timeChartDescription: timeChartDescription$2,
    enjoyAndReview: enjoyAndReview$2,
    removeAllData: removeAllData$2,
    remove: remove$2,
    removeAllDataConfirm: removeAllDataConfirm$2,
    cancel: cancel$2,
    backupAndRestore: backupAndRestore$2,
    backup: backup$2,
    restore: restore$2,
    welcome: welcome$2,
    getStarted: getStarted$2,
    welcomeStart: welcomeStart$2,
    pinIcon: pinIcon$2,
    pinIconPart1: pinIconPart1$2,
    pinIconPart2: pinIconPart2$2,
    browse: browse$2,
    seeData: seeData$2,
    close: close$2,
    useExtension: useExtension$2,
    next: next$2,
    showChangelog: showChangelog$2,
    byHours: byHours$2,
    intervals: intervals$2,
    intervalsChart: intervalsChart$2,
    promoClearYoutube: promoClearYoutube$2,
    completelyBlocked: completelyBlocked$2,
    tryMyOtherApps: tryMyOtherApps$2,
    clearYoutube: clearYoutube$2,
    trackerjam: trackerjam$2,
    darkTheme: darkTheme$2
  };
  const extName$1 = {
    message: "Web Activity Time Tracker - 阻止网站、网络分析和番茄钟"
  };
  const extDescription$1 = {
    message: "追踪和限制您的网站活动时间，并阻止访问网站。监控您的网站使用情况"
  };
  const settings$1 = {
    message: "设置"
  };
  const today$1 = {
    message: "今天"
  };
  const allTime$1 = {
    message: "总时间"
  };
  const byDays$1 = {
    message: "每天"
  };
  const noData$1 = {
    message: "无数据"
  };
  const noDataForPeriod$1 = {
    message: "所选时间段内无数据"
  };
  const showAll$1 = {
    message: "显示所有网站"
  };
  const sortBy$1 = {
    message: "排序"
  };
  const usageTime$1 = {
    message: "使用时间"
  };
  const session$1 = {
    message: "会话"
  };
  const someSession$1 = {
    message: "会话"
  };
  const sessions$1 = {
    message: "会话"
  };
  const days$1 = {
    message: "天"
  };
  const aggregate$1 = {
    message: "汇总数据自"
  };
  const websites$1 = {
    message: "网站"
  };
  const cannotOpenFile$1 = {
    message: "由于安全协议，您无法打开本地文件"
  };
  const document$1 = {
    message: "文件"
  };
  const limit$1 = {
    message: "限制"
  };
  const d$1 = {
    message: "d"
  };
  const h$1 = {
    message: "h"
  };
  const m$1 = {
    message: "m"
  };
  const s$1 = {
    message: "s"
  };
  const firstActiveDay$1 = {
    message: "第一个活动日"
  };
  const numberOfActiveDays$1 = {
    message: "活动天数"
  };
  const totalNumberOfDays$1 = {
    message: "总天数"
  };
  const todayTime$1 = {
    message: "今天所有的时间"
  };
  const averageTime$1 = {
    message: "活动日的平均时间"
  };
  const averageDailyUsage$1 = {
    message: "平均每日使用量"
  };
  const mostActiveDay$1 = {
    message: "最活跃的一天"
  };
  const mostInactiveDay$1 = {
    message: "最不活跃的一天"
  };
  const todayInclude$1 = {
    message: "今天包含在统计数据中。点击以排除。"
  };
  const todayEcclude$1 = {
    message: "今天不包含在统计数据中。点击以包含。"
  };
  const averageTimeByDays$1 = {
    message: "所选日期的平均时间"
  };
  const exportToCsv$1 = {
    message: "导出 CSV"
  };
  const week$1 = {
    message: "本周"
  };
  const month$1 = {
    message: "本月"
  };
  const lastMonth$1 = {
    message: "上月"
  };
  const generalSettings$1 = {
    message: "设置"
  };
  const whiteListSettings$1 = {
    message: "白名单"
  };
  const limitsSettings$1 = {
    message: "限制"
  };
  const notificationsSettings$1 = {
    message: "通知"
  };
  const pomodoroMode$1 = {
    message: "Pomodoro"
  };
  const pomodoroSettings$1 = {
    message: "Pomodoro 设置"
  };
  const pomodoro$2 = {
    message: "Pomodoro",
    description: "Pomodoro 工作法是一种时间管理技术，以交替集中工作和休息为基础。根据经典的 Pomodoro 方法，工作时间为 25 分钟，休息时间为 5 分钟。"
  };
  const pomodoroExplanationIcon$1 = {
    message: "启用 Pomodoro 模式并激活操作模式后，您将看到以下图标",
    description: "在休息时间，您会看到这个扩展图标"
  };
  const pomodoroExplanationTime$1 = {
    message: "在 Pomodoro 模式下，扩展会继续考虑你在网站上花费的时间、所有限制和通知。"
  };
  const pomodoroExplanationStop$1 = {
    message: "按下 '停止' 键后，运行时间和休息时间将重置为零"
  };
  const pomodoroWork$1 = {
    message: "工作期限"
  };
  const pomodoroRest$1 = {
    message: "休息时间"
  };
  const pomodoroFrequency$1 = {
    message: "重复次数"
  };
  const start$1 = {
    message: "启动"
  };
  const stop$1 = {
    message: "停止"
  };
  const pomodoroIsEnabled$1 = {
    message: "番茄钟模式已启用"
  };
  const pomodoroSoundAfter$1 = {
    message: "完整时段后的声音"
  };
  const clickToPreview$1 = {
    message: "点击收听"
  };
  const sound$1 = {
    message: "声音"
  };
  const aboutSettings$1 = {
    message: "关于"
  };
  const viewTimeInBadge$1 = {
    message: "在图标中显示时间跟踪器",
    description: "您可以在扩展程序图标上以简短格式查看当前的“花费时间”信息。"
  };
  const deferringDescription$1 = {
    message: "您一天只能将拦截推迟 5 分钟一次。"
  };
  const allowDeferringBlock$1 = {
    message: "允许推迟拦截 5 分钟",
    description: "站点被拦截后，您一天中只能将拦截推迟 5 分钟一次。"
  };
  const intervalInactivity$1 = {
    message: "如果没有操作，则停止跟踪器：",
    description: "可以是使用鼠标或键盘进行的任何操作"
  };
  const exportToCsvSetting$1 = {
    message: "将您的网站活动数据导出为 CSV 格式",
    description: "您可以导出任何日期范围内的网站活动。"
  };
  const sec$1 = {
    message: "秒"
  };
  const min$1 = {
    message: "分钟"
  };
  const mins$1 = {
    message: "分钟"
  };
  const whiteList$1 = {
    message: "这些网站的活动和花费时间将不会被跟踪。"
  };
  const addWebsite$1 = {
    message: "添加网站"
  };
  const enterWebsite$1 = {
    message: "输入网站名称..."
  };
  const enterNotification$1 = {
    message: "输入通知消息..."
  };
  const limits$1 = {
    message: "网站的每日访问限制",
    description: "设置每天允许访问网站的最长时间。超过此时间后，该网站将被拦截。"
  };
  const limitsTip$1 = {
    message: "如果您将拦截时间设置为 0 小时 0 分钟，那么该网站将立即被拦截。"
  };
  const save$1 = {
    message: "保存"
  };
  const showDailyNotifacation$1 = {
    message: "每日摘要通知",
    description: "每天结束时，您将收到一条通知，其中包含您的每日使用情况摘要。"
  };
  const notificationTime$1 = {
    message: "网站通知",
    description: "每次在网站上花费特定时间时显示通知。"
  };
  const notificationMessage$1 = {
    message: "通知消息",
    description: "每次在网站通知中，您都会看到这条消息。"
  };
  const notificationTimeSetting$1 = {
    message: "包含有关您日常使用情况的摘要信息的通知时间："
  };
  const github$1 = {
    message: "在以下位置留下您的反馈或报告问题："
  };
  const question$1 = {
    message: "您还可以提问并留下您的建议。"
  };
  const supportForm$1 = {
    message: "支持表单"
  };
  const doYouEnjoy$1 = {
    message: "您喜欢 Web Activity Time Tracker 吗？"
  };
  const review$1 = {
    message: "留下评论吧！"
  };
  const block$1 = {
    message: "您今天已达到限制在 "
  };
  const todayUsageTime$1 = {
    message: "今天的总使用时间"
  };
  const comparedToYesterday$1 = {
    message: " 与昨天相比 "
  };
  const mostVisited$1 = {
    message: "访问最多的网站 "
  };
  const dashboard$1 = {
    message: "仪表板"
  };
  const timeChartDescription$1 = {
    message: "这是按小时显示一天时间的图表。"
  };
  const enjoyAndReview$1 = {
    message: "喜欢这个扩展程序吗？",
    description: "给 Web Activity Time Tracker 评分"
  };
  const removeAllData$1 = {
    message: "删除所有数据",
    description: "您可以删除所有访问过网站的所有数据和统计信息。"
  };
  const remove$1 = {
    message: "删除"
  };
  const removeAllDataConfirm$1 = {
    message: "您确定要删除所有数据吗？"
  };
  const cancel$1 = {
    message: "取消"
  };
  const backupAndRestore$1 = {
    message: "备份和恢复",
    description: "您可以下载所有访问过网站的所有数据的备份副本。"
  };
  const backup$1 = {
    message: "备份"
  };
  const restore$1 = {
    message: "恢复"
  };
  const welcome$1 = {
    message: "欢迎使用 Web Activity Time Tracker",
    description: "Web Activity Time Tracker  是一款<b>开源</b>、<b>免费</b>且<b>无广告</b>的扩展程序，它可以帮助您跟踪在浏览网站上花费的时间和访问次数。"
  };
  const getStarted$1 = {
    message: "开始使用"
  };
  const welcomeStart$1 = {
    message: "您可以通过三个简单的步骤快速开始使用扩展程序："
  };
  const pinIcon$1 = {
    message: "固定图标"
  };
  const pinIconPart1$1 = {
    message: "为了更方便地使用此扩展程序，您可以将图标固定到工具栏上。点击图标："
  };
  const pinIconPart2$1 = {
    message: "然后点击固定图标。"
  };
  const browse$1 = {
    message: "浏览任何网站",
    description: "当您访问任何网站时，您会看到时间显示在图标上，就像这里一样："
  };
  const seeData$1 = {
    message: "在弹出页面和仪表板上查看您的数据",
    description: "点击扩展图标以打开弹出页面，您将能够使用饼图读取数据可视化信息，包括今天、所有时间或按天分类。在弹出窗口中，您可以打开仪表板，它将按时钟显示您今天的时间。您还可以为任何网站设置每日时间限制、网站通知或导出数据到 CSV。"
  };
  const close$1 = {
    message: "关闭"
  };
  const useExtension$1 = {
    message: "使用扩展程序"
  };
  const next$1 = {
    message: "接下来"
  };
  const showChangelog$1 = {
    message: "显示更新日志",
    description: "显示更新扩展程序后的更改列表"
  };
  const byHours$1 = {
    message: "每小时"
  };
  const intervals$1 = {
    message: "时间间隔"
  };
  const intervalsChart$1 = {
    message: "只有时间间隔大于",
    description: "展示"
  };
  const promoClearYoutube$1 = {
    message: "您想屏蔽短片、评论、推荐视频、订阅和其他 YouTube 干扰内容吗？ 我们创建了另一个扩展程序，可帮助您不受干扰地观看 YouTube",
    description: "安装"
  };
  const completelyBlocked$1 = {
    message: "完全封锁",
    description: "完全封锁"
  };
  const tryMyOtherApps$1 = {
    message: "试试我的其他应用程序"
  };
  const clearYoutube$1 = {
    message: "Clean YouTube",
    description: "Chrome扩展程序，可以隐藏YouTube短片，推荐视频，评论，feed，主页推荐和其他分心。 观看YouTube免费分心。"
  };
  const trackerjam$1 = {
    message: "TrackerJam",
    description: "团队自动网络跟踪器。为每个团队成员提供详细报告，包括在网站上花费的时间、域内任何 URL 的跟踪、工作效率评分、顶级域分类等。"
  };
  const darkTheme$1 = {
    message: "黑暗主题"
  };
  const zh = {
    extName: extName$1,
    extDescription: extDescription$1,
    settings: settings$1,
    today: today$1,
    allTime: allTime$1,
    byDays: byDays$1,
    noData: noData$1,
    noDataForPeriod: noDataForPeriod$1,
    showAll: showAll$1,
    sortBy: sortBy$1,
    usageTime: usageTime$1,
    session: session$1,
    someSession: someSession$1,
    sessions: sessions$1,
    days: days$1,
    aggregate: aggregate$1,
    websites: websites$1,
    cannotOpenFile: cannotOpenFile$1,
    document: document$1,
    limit: limit$1,
    d: d$1,
    h: h$1,
    m: m$1,
    s: s$1,
    firstActiveDay: firstActiveDay$1,
    numberOfActiveDays: numberOfActiveDays$1,
    totalNumberOfDays: totalNumberOfDays$1,
    todayTime: todayTime$1,
    averageTime: averageTime$1,
    averageDailyUsage: averageDailyUsage$1,
    mostActiveDay: mostActiveDay$1,
    mostInactiveDay: mostInactiveDay$1,
    todayInclude: todayInclude$1,
    todayEcclude: todayEcclude$1,
    averageTimeByDays: averageTimeByDays$1,
    exportToCsv: exportToCsv$1,
    week: week$1,
    month: month$1,
    lastMonth: lastMonth$1,
    generalSettings: generalSettings$1,
    whiteListSettings: whiteListSettings$1,
    limitsSettings: limitsSettings$1,
    notificationsSettings: notificationsSettings$1,
    pomodoroMode: pomodoroMode$1,
    pomodoroSettings: pomodoroSettings$1,
    pomodoro: pomodoro$2,
    pomodoroExplanationIcon: pomodoroExplanationIcon$1,
    pomodoroExplanationTime: pomodoroExplanationTime$1,
    pomodoroExplanationStop: pomodoroExplanationStop$1,
    pomodoroWork: pomodoroWork$1,
    pomodoroRest: pomodoroRest$1,
    pomodoroFrequency: pomodoroFrequency$1,
    start: start$1,
    stop: stop$1,
    pomodoroIsEnabled: pomodoroIsEnabled$1,
    pomodoroSoundAfter: pomodoroSoundAfter$1,
    clickToPreview: clickToPreview$1,
    sound: sound$1,
    aboutSettings: aboutSettings$1,
    viewTimeInBadge: viewTimeInBadge$1,
    deferringDescription: deferringDescription$1,
    allowDeferringBlock: allowDeferringBlock$1,
    intervalInactivity: intervalInactivity$1,
    exportToCsvSetting: exportToCsvSetting$1,
    sec: sec$1,
    min: min$1,
    "2min": {
      message: "分钟"
    },
    mins: mins$1,
    whiteList: whiteList$1,
    addWebsite: addWebsite$1,
    enterWebsite: enterWebsite$1,
    enterNotification: enterNotification$1,
    limits: limits$1,
    limitsTip: limitsTip$1,
    save: save$1,
    showDailyNotifacation: showDailyNotifacation$1,
    notificationTime: notificationTime$1,
    notificationMessage: notificationMessage$1,
    notificationTimeSetting: notificationTimeSetting$1,
    github: github$1,
    question: question$1,
    supportForm: supportForm$1,
    doYouEnjoy: doYouEnjoy$1,
    review: review$1,
    block: block$1,
    "5mins": {
      message: "再加 5 分钟"
    },
    todayUsageTime: todayUsageTime$1,
    comparedToYesterday: comparedToYesterday$1,
    mostVisited: mostVisited$1,
    dashboard: dashboard$1,
    timeChartDescription: timeChartDescription$1,
    enjoyAndReview: enjoyAndReview$1,
    removeAllData: removeAllData$1,
    remove: remove$1,
    removeAllDataConfirm: removeAllDataConfirm$1,
    cancel: cancel$1,
    backupAndRestore: backupAndRestore$1,
    backup: backup$1,
    restore: restore$1,
    welcome: welcome$1,
    getStarted: getStarted$1,
    welcomeStart: welcomeStart$1,
    pinIcon: pinIcon$1,
    pinIconPart1: pinIconPart1$1,
    pinIconPart2: pinIconPart2$1,
    browse: browse$1,
    seeData: seeData$1,
    close: close$1,
    useExtension: useExtension$1,
    next: next$1,
    showChangelog: showChangelog$1,
    byHours: byHours$1,
    intervals: intervals$1,
    intervalsChart: intervalsChart$1,
    promoClearYoutube: promoClearYoutube$1,
    completelyBlocked: completelyBlocked$1,
    tryMyOtherApps: tryMyOtherApps$1,
    clearYoutube: clearYoutube$1,
    trackerjam: trackerjam$1,
    darkTheme: darkTheme$1
  };
  const extName = {
    message: "Web Activity Time Tracker - Bloquear sitios, análisis web y Pomodoro"
  };
  const extDescription = {
    message: "Controla el tiempo de tu actividad web, limita y bloquea los sitios web que te distraen. Monitoriza tu uso de la web."
  };
  const settings = {
    message: "Ajustes"
  };
  const today = {
    message: "Hoy"
  };
  const allTime = {
    message: "Tiempo total"
  };
  const byDays = {
    message: "Diario"
  };
  const noData = {
    message: "Sin datos"
  };
  const noDataForPeriod = {
    message: "No hay datos para el periodo seleccionado"
  };
  const showAll = {
    message: "Mostrar todos los sitios web"
  };
  const sortBy = {
    message: "Clasificación por"
  };
  const usageTime = {
    message: "Tiempo de uso"
  };
  const session = {
    message: "sesión"
  };
  const someSession = {
    message: "sesiones"
  };
  const sessions = {
    message: "Sesiones"
  };
  const days = {
    message: "días"
  };
  const aggregate = {
    message: "Datos agregados desde"
  };
  const websites = {
    message: "sitios web"
  };
  const cannotOpenFile = {
    message: "No se puede abrir un archivo local debido al protocolo de seguridad"
  };
  const document = {
    message: "Documento"
  };
  const limit = {
    message: "Límite"
  };
  const d = {
    message: "d"
  };
  const h = {
    message: "h"
  };
  const m = {
    message: "m"
  };
  const s = {
    message: "s"
  };
  const firstActiveDay = {
    message: "El primer día activo"
  };
  const numberOfActiveDays = {
    message: "Número de días activos"
  };
  const totalNumberOfDays = {
    message: "Número total de días"
  };
  const todayTime = {
    message: "Todo el tiempo hoy"
  };
  const averageTime = {
    message: "Tiempo medio de los días activos"
  };
  const averageDailyUsage = {
    message: "Uso medio diario"
  };
  const mostActiveDay = {
    message: "El día más activo"
  };
  const mostInactiveDay = {
    message: "El día más inactivo"
  };
  const todayInclude = {
    message: "Hoy está incluido en las estadísticas. Haga clic para excluir."
  };
  const todayEcclude = {
    message: "El día de hoy está excluido de las estadísticas. Haga clic para incluir."
  };
  const averageTimeByDays = {
    message: "Tiempo medio en los días seleccionados"
  };
  const exportToCsv = {
    message: "Exportar a CSV"
  };
  const week = {
    message: "Esta semana"
  };
  const month = {
    message: "Este mes"
  };
  const lastMonth = {
    message: "El mes pasado"
  };
  const generalSettings = {
    message: "Ajustes"
  };
  const whiteListSettings = {
    message: "ListaBlanca"
  };
  const limitsSettings = {
    message: "Límites"
  };
  const notificationsSettings = {
    message: "Notificaciones"
  };
  const pomodoroMode = {
    message: "Pomodoro"
  };
  const pomodoroSettings = {
    message: "Ajustes Pomodoro"
  };
  const pomodoro$1 = {
    message: "Pomodoro",
    description: "El método Pomodoro es una técnica de gestión del tiempo basada en la alternancia de periodos de trabajo concentrado y de descanso. Según los clásicos del método Pomodoro, el periodo de trabajo dura 25 minutos, el de descanso 5 minutos."
  };
  const pomodoroExplanationIcon = {
    message: "Cuando el modo Pomodoro está activado y el modo de funcionamiento está activo, verá este icono",
    description: "Durante los periodos de descanso, verá este icono de extensión"
  };
  const pomodoroExplanationTime = {
    message: "Durante el modo Pomodoro, la extensión sigue teniendo en cuenta el tiempo que pasó en los sitios, todos los límites y las notificaciones de trabajo."
  };
  const pomodoroExplanationStop = {
    message: "Tras pulsar 'Parar', el tiempo de trabajo y de descanso se pone a cero."
  };
  const pomodoroWork = {
    message: "Período de trabajo"
  };
  const pomodoroRest = {
    message: "Periodo de descanso"
  };
  const pomodoroFrequency = {
    message: "Número de repeticiones"
  };
  const start = {
    message: "Ejecutar"
  };
  const stop = {
    message: "Stop"
  };
  const pomodoroIsEnabled = {
    message: "Modo Pomodoro activado"
  };
  const pomodoroSoundAfter = {
    message: "Sonido tras periodo completo"
  };
  const clickToPreview = {
    message: "Haga clic para escuchar"
  };
  const sound = {
    message: "Sonido"
  };
  const aboutSettings = {
    message: "Acerca de"
  };
  const viewTimeInBadge = {
    message: "Mostrar el cronómetro en un icono",
    description: "En el icono de extensión puede ver la información actual sobre el 'tiempo transcurrido' en formato abreviado"
  };
  const deferringDescription = {
    message: "Puedes posponer el bloqueo durante 5 minutos sólo una vez al día"
  };
  const allowDeferringBlock = {
    message: "Permitir el bloqueo diferido durante 5 minutos",
    description: "Una vez bloqueado el sitio, puede posponer el bloqueo durante 5 minutos a lo largo del día una sola vez"
  };
  const intervalInactivity = {
    message: "Detener el rastreador si no hay ninguna acción para",
    description: "Se trata de cualquier acción con el ratón o el teclado"
  };
  const exportToCsvSetting = {
    message: "Exportación de los datos de actividad web a CSV",
    description: "Puede exportar su actividad web para cualquier intervalo de fechas"
  };
  const sec = {
    message: "segundos"
  };
  const min = {
    message: "minuto"
  };
  const mins = {
    message: "minutos"
  };
  const whiteList = {
    message: "La actividad y el tiempo de permanencia en estos sitios web no se rastrearán."
  };
  const addWebsite = {
    message: "Añadir sitio web"
  };
  const enterWebsite = {
    message: "Introduzca el nombre del sitio web..."
  };
  const enterNotification = {
    message: "Introducir mensaje de notificación..."
  };
  const limits = {
    message: "Restricciones diarias de acceso a los sitios web",
    description: "Establezca el tiempo máximo permitido para visitar el sitio web al día. Transcurrido este tiempo, el sitio se bloqueará."
  };
  const limitsTip = {
    message: "Si establece el tiempo de bloqueo en 0 horas 0 minutos, el sitio web se bloqueará inmediatamente"
  };
  const save = {
    message: "Guardar"
  };
  const showDailyNotifacation = {
    message: "Notificaciones diarias resumidas",
    description: "Al final de cada día, recibirás una notificación con un resumen de tu uso diario"
  };
  const notificationTime = {
    message: "Notificaciones para sitios web",
    description: "Mostrar notificaciones cada vez que pase un periodo de tiempo seleccionado en el sitio web."
  };
  const notificationMessage = {
    message: "Mensaje de notificación",
    description: "Verás este mensaje en la notificación de sitios web cada vez que"
  };
  const notificationTimeSetting = {
    message: "Hora de notificación con información resumida sobre su uso diario"
  };
  const github = {
    message: "Deje su opinión o informe de un problema en"
  };
  const question = {
    message: "También puede hacer preguntas y dejar sus sugerencias"
  };
  const supportForm = {
    message: "formulario de asistencia"
  };
  const doYouEnjoy = {
    message: "¿Te gusta Web Activity Time Tracker?"
  };
  const review = {
    message: "Deja tu opinión"
  };
  const promoClearYoutube = {
    message: "¿Te gustaría bloquear los cortos, los comentarios, los vídeos recomendados, las suscripciones y otras distracciones de YouTube? Hemos creado otra extensión que te ayudará a ver YouTube sin distracciones.",
    description: "Instale"
  };
  const block = {
    message: "Has alcanzado tu límite por hoy en"
  };
  const todayUsageTime = {
    message: "Tiempo total de uso para hoy "
  };
  const comparedToYesterday = {
    message: " en comparación con ayer "
  };
  const mostVisited = {
    message: "Sitio web más visitado "
  };
  const dashboard = {
    message: "Cuadro de mandos"
  };
  const timeChartDescription = {
    message: "Este es un gráfico del tiempo durante el día por horas"
  };
  const enjoyAndReview = {
    message: "¿Disfrutando de la ampliación?",
    description: "Valora Web Activity Time Tracker"
  };
  const removeAllData = {
    message: "Eliminar todos los datos",
    description: "Puede borrar todos los datos y estadísticas de los sitios web visitados para siempre"
  };
  const remove = {
    message: "Eliminar"
  };
  const removeAllDataConfirm = {
    message: "¿Estás seguro de que quieres borrar todos los datos?"
  };
  const cancel = {
    message: "Cancelar"
  };
  const backupAndRestore = {
    message: "Copia de seguridad y restauración",
    description: "Puedes descargar una copia de seguridad de todos los datos de todos los sitios visitados"
  };
  const backup = {
    message: "Copia de seguridad"
  };
  const restore = {
    message: "Restaurar"
  };
  const welcome = {
    message: "Bienvenido a Web Activity Time Tracker",
    description: "Web Activity Time Tracker es una extensión de código abierto, gratuita y sin publicidad, que puede ayudarte a controlar el tiempo que pasas navegando por páginas web y el recuento de visitas."
  };
  const getStarted = {
    message: "Empezar"
  };
  const welcomeStart = {
    message: "Puede empezar a utilizar rápidamente la extensión en sólo 3 sencillos pasos"
  };
  const pinIcon = {
    message: "Anclar el icono"
  };
  const pinIconPart1 = {
    message: "Para utilizar esta extensión más cómodamente, puede fijar el icono a la barra de herramientas. Haga clic en el icono"
  };
  const pinIconPart2 = {
    message: "y, a continuación, haga clic en el icono de la chincheta"
  };
  const browse = {
    message: "Navegar por cualquier sitio web",
    description: "Cuando visite cualquier sitio web, verá que la hora aparece en el icono, como aquí"
  };
  const seeData = {
    message: "Visualiza tus datos en la página emergente y en el cuadro de mandos",
    description: "Haz clic en el icono de la extensión para abrir una página emergente y podrás leer los datos visualizados mediante un gráfico circular, para hoy, para todo el tiempo o por día. En la ventana emergente, puedes abrir el panel de control y te mostrará el tiempo de hoy según el reloj. Y puedes establecer un límite de tiempo diario para cualquier sitio web, notificaciones para sitios web o exportar los datos a CSV."
  };
  const close = {
    message: "Cerrar"
  };
  const useExtension = {
    message: "Utilizar la extensión"
  };
  const next = {
    message: "Siguiente"
  };
  const showChangelog = {
    message: "Mostrar el registro de cambios",
    description: "Mostrar la lista de cambios tras actualizar la extensión"
  };
  const byHours = {
    message: "Por hora"
  };
  const intervals = {
    message: "Intervalos"
  };
  const intervalsChart = {
    message: "Sólo los intervalos de tiempo superiores a",
    description: "se muestran"
  };
  const completelyBlocked = {
    message: "Completamente bloqueado",
    description: "Completamente bloqueado"
  };
  const tryMyOtherApps = {
    message: "Pruebe mis otras aplicaciones"
  };
  const clearYoutube = {
    message: "Clean YouTube",
    description: "Extensión de Chrome que puede ocultar los cortos de YouTube, los vídeos recomendados, los comentarios, el feed, las recomendaciones de la página de inicio y otras distracciones. Vea YouTube sin distracciones."
  };
  const trackerjam = {
    message: "TrackerJam",
    description: "Rastreador web automático para equipos. Informes detallados para cada miembro del equipo, detallando el tiempo empleado en sitios web, seguimiento de cualquier URL dentro del dominio, puntuaciones de productividad, dominios principales con categorías y etc."
  };
  const darkTheme = {
    message: "Tema oscuro"
  };
  const es = {
    extName,
    extDescription,
    settings,
    today,
    allTime,
    byDays,
    noData,
    noDataForPeriod,
    showAll,
    sortBy,
    usageTime,
    session,
    someSession,
    sessions,
    days,
    aggregate,
    websites,
    cannotOpenFile,
    document,
    limit,
    d,
    h,
    m,
    s,
    firstActiveDay,
    numberOfActiveDays,
    totalNumberOfDays,
    todayTime,
    averageTime,
    averageDailyUsage,
    mostActiveDay,
    mostInactiveDay,
    todayInclude,
    todayEcclude,
    averageTimeByDays,
    exportToCsv,
    week,
    month,
    lastMonth,
    generalSettings,
    whiteListSettings,
    limitsSettings,
    notificationsSettings,
    pomodoroMode,
    pomodoroSettings,
    pomodoro: pomodoro$1,
    pomodoroExplanationIcon,
    pomodoroExplanationTime,
    pomodoroExplanationStop,
    pomodoroWork,
    pomodoroRest,
    pomodoroFrequency,
    start,
    stop,
    pomodoroIsEnabled,
    pomodoroSoundAfter,
    clickToPreview,
    sound,
    aboutSettings,
    viewTimeInBadge,
    deferringDescription,
    allowDeferringBlock,
    intervalInactivity,
    exportToCsvSetting,
    sec,
    min,
    "2min": {
      message: "minutos"
    },
    mins,
    whiteList,
    addWebsite,
    enterWebsite,
    enterNotification,
    limits,
    limitsTip,
    save,
    showDailyNotifacation,
    notificationTime,
    notificationMessage,
    notificationTimeSetting,
    github,
    question,
    supportForm,
    doYouEnjoy,
    review,
    promoClearYoutube,
    block,
    "5mins": {
      message: "+ 5 minutos"
    },
    todayUsageTime,
    comparedToYesterday,
    mostVisited,
    dashboard,
    timeChartDescription,
    enjoyAndReview,
    removeAllData,
    remove,
    removeAllDataConfirm,
    cancel,
    backupAndRestore,
    backup,
    restore,
    welcome,
    getStarted,
    welcomeStart,
    pinIcon,
    pinIconPart1,
    pinIconPart2,
    browse,
    seeData,
    close,
    useExtension,
    next,
    showChangelog,
    byHours,
    intervals,
    intervalsChart,
    completelyBlocked,
    tryMyOtherApps,
    clearYoutube,
    trackerjam,
    darkTheme
  };
  const locales = {
    en,
    ru,
    de,
    zh,
    es
  };
  const i18n = createI18n({
    legacy: false,
    locale: Browser.i18n.getUILanguage(),
    fallbackLocale: "en",
    globalInjection: true,
    messages: locales
  });
  function getMessagesFromLocale() {
    let locale = i18n.global.locale.value;
    if (Object.keys(locales).indexOf(locale) == -1)
      locale = "en";
    return i18n.global.getLocaleMessage(locale);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number2 = Number(dirtyNumber);
    if (isNaN(number2)) {
      return number2;
    }
    return number2 < 0 ? Math.ceil(number2) : Math.floor(number2);
  }
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
        console.warn(new Error().stack);
      }
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  function addMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    if (!amount) {
      return date;
    }
    var dayOfMonth = date.getDate();
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
      return endOfDesiredMonth;
    } else {
      date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
      return date;
    }
  }
  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
  }
  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }
  function startOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function startOfDay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function addSeconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, amount * 1e3);
  }
  var millisecondsInHour = 36e5;
  function differenceInMilliseconds(dateLeft, dateRight) {
    requiredArgs(2, arguments);
    return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
  }
  var roundingMap = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function trunc(value) {
      return value < 0 ? Math.ceil(value) : Math.floor(value);
    }
    // Math.trunc is not supported by IE
  };
  var defaultRoundingMethod = "trunc";
  function getRoundingMethod(method) {
    return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
  }
  function differenceInHours(dateLeft, dateRight, options) {
    requiredArgs(2, arguments);
    var diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour;
    return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
  }
  function endOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var month2 = date.getMonth();
    date.setFullYear(date.getFullYear(), month2 + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date;
  }
  function startOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function endOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setDate(date.getDate() + diff);
    date.setHours(23, 59, 59, 999);
    return date;
  }
  function startOfToday() {
    return startOfDay(Date.now());
  }
  function startOfTomorrow() {
    var now = /* @__PURE__ */ new Date();
    var year = now.getFullYear();
    var month2 = now.getMonth();
    var day = now.getDate();
    var date = /* @__PURE__ */ new Date(0);
    date.setFullYear(year, month2, day + 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function startOfYesterday() {
    var now = /* @__PURE__ */ new Date();
    var year = now.getFullYear();
    var month2 = now.getMonth();
    var day = now.getDate();
    var date = /* @__PURE__ */ new Date(0);
    date.setFullYear(year, month2, day - 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function subMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMonths(dirtyDate, -amount);
  }
  function todayLocalDate() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("en-US");
  }
  function getToday() {
    return startOfToday().getTime();
  }
  [startOfWeek(/* @__PURE__ */ new Date()), endOfWeek(/* @__PURE__ */ new Date())];
  [startOfMonth(/* @__PURE__ */ new Date()), endOfMonth(/* @__PURE__ */ new Date())];
  [
    startOfMonth(subMonths(/* @__PURE__ */ new Date(), 1)),
    endOfMonth(subMonths(/* @__PURE__ */ new Date(), 1))
  ];
  function isDateEqual(first, second) {
    return first.getFullYear() == second.getFullYear() && first.getMonth() == second.getMonth() && first.getDate() == second.getDate() && first.getHours() == second.getHours() && first.getMinutes() == second.getMinutes() && first.getSeconds() == second.getSeconds();
  }
  function print(logFn, style, ...args) {
    if (typeof args[0] === "string") {
      const newArgs = [...args];
      logFn(
        `%cWeb Activity Time Tracker%c${(/* @__PURE__ */ new Date()).toLocaleTimeString()}%c ${newArgs.shift()}`,
        style,
        "background-color: #eaf1fb; padding: 2px 4px; border-radius: 3px",
        "",
        ...newArgs
      );
    } else {
      logFn("%cWeb Activity Time Tracker", style, ...args);
    }
  }
  function log(...args) {
    print(
      console.log,
      "color: white; background-color: #1e8e3e; padding: 2px 4px; border-radius: 3px; font-weight: bold",
      ...args
    );
  }
  const logger = {
    log
  };
  class Tab {
    constructor() {
      __publicField(this, "url", "");
      __publicField(this, "favicon", "");
      __publicField(this, "summaryTime", 0);
      __publicField(this, "counter", 0);
      __publicField(this, "days", []);
    }
    init(url) {
      this.url = url;
    }
    incSummaryTime() {
      this.summaryTime += 1;
      const day = this.days.find((x) => x.date == todayLocalDate());
      if (day === void 0) {
        const newTab = this.addNewDay();
        newTab.incSummaryTime();
      } else
        day.incSummaryTime();
    }
    incCounter() {
      this.counter += 1;
      logger.log(`Counter ${this.url} - ${this.counter}`);
      const day = this.days.find((x) => x.date == todayLocalDate());
      if (day === void 0) {
        const newTab = this.addNewDay();
        newTab.incCounter();
      } else
        day.incCounter();
    }
    addNewDay() {
      const newTabDay = new TabDay();
      newTabDay.init(todayLocalDate());
      this.days.push(newTabDay);
      return newTabDay;
    }
    deserialize(input) {
      var _a;
      this.url = input.url;
      this.counter = input.counter;
      this.favicon = input.favicon;
      this.summaryTime = input.summaryTime;
      if (((_a = input.days) == null ? void 0 : _a.length) > 0)
        this.days = input.days.map((x) => new TabDay().deserialize(x));
      return this;
    }
    setFavicon(favicon) {
      this.favicon = favicon;
    }
  }
  class TabDay {
    constructor() {
      __publicField(this, "counter", 0);
      __publicField(this, "date", "");
      __publicField(this, "summary", 0);
    }
    init(date) {
      this.date = date;
    }
    incSummaryTime() {
      this.summary += 1;
    }
    incCounter() {
      this.counter += 1;
    }
    deserialize(input) {
      this.counter = input.counter;
      this.date = input.date;
      this.summary = input.summary;
      return this;
    }
  }
  class TimeInterval {
    constructor() {
      __publicField(this, "domain", "");
      __publicField(this, "intervals", []);
      __publicField(this, "day", "");
    }
    init(day, domain) {
      this.domain = domain;
      this.intervals = [];
      this.day = day;
    }
    addInterval() {
      const stringDate = this.getCurrentStringDate();
      this.intervals.push(stringDate + "-" + stringDate);
      logger.log(`Add interval ${this.domain} - ${stringDate} - ${stringDate}`);
    }
    closeInterval() {
      const stringDate = this.getCurrentStringDate();
      const currentInterval = this.intervals[this.intervals.length - 1];
      if (currentInterval != null) {
        if (currentInterval.split("-")[0] == currentInterval.split("-")[1]) {
          this.intervals.pop();
          this.intervals.push(currentInterval.split("-")[0] + "-" + stringDate);
          logger.log(
            `Close interval ${this.domain} - ${currentInterval.split("-")[0]} - ${stringDate}`
          );
        }
      }
    }
    deserialize(input) {
      this.domain = input.domain;
      this.day = input.day;
      this.intervals = input.intervals;
      return this;
    }
    getCurrentStringDate() {
      const date = /* @__PURE__ */ new Date();
      return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
  }
  var PomodoroSounds = /* @__PURE__ */ ((PomodoroSounds2) => {
    PomodoroSounds2["Sound 1"] = "1.mp3";
    PomodoroSounds2["Sound 2"] = "2.mp3";
    PomodoroSounds2["Sound 3"] = "3.mp3";
    PomodoroSounds2["Sound 4"] = "4.mp3";
    PomodoroSounds2["Sound 5"] = "5.mp3";
    PomodoroSounds2["Sound 6"] = "6.mp3";
    PomodoroSounds2["Sound 7"] = "7.mp3";
    PomodoroSounds2["Sound 8"] = "8.mp3";
    PomodoroSounds2["Sound 9"] = "9.mp3";
    PomodoroSounds2["Sound 10"] = "10.mp3";
    PomodoroSounds2["Sound 11"] = "11.mp3";
    PomodoroSounds2["Sound 12"] = "12.mp3";
    PomodoroSounds2["Sound 13"] = "13.mp3";
    return PomodoroSounds2;
  })(PomodoroSounds || {});
  const MINUTE_IN_SECONDS = 60;
  const DAY_MINUTES = 1440;
  const SECOND = 1e3;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  function getNextTimeOfDay(timeOfDay) {
    const todaysTime = getToday() + timeOfDay;
    return todaysTime > Date.now() ? todaysTime : todaysTime + DAY_MINUTES;
  }
  var StorageParams = /* @__PURE__ */ ((StorageParams2) => {
    StorageParams2["BLACK_LIST"] = "black_list";
    StorageParams2["RESTRICTION_LIST"] = "restriction_list";
    StorageParams2["NOTIFICATION_LIST"] = "notification_list";
    StorageParams2["NOTIFICATION_MESSAGE"] = "notification_message";
    StorageParams2["INTERVAL_INACTIVITY"] = "inactivity_interval";
    StorageParams2["DARK_MODE"] = "night_mode";
    StorageParams2["VIEW_TIME_IN_BADGE"] = "view_time_in_badge";
    StorageParams2["SHOW_CHANGELOG"] = "show_changelog";
    StorageParams2["BLOCK_DEFERRAL"] = "view_block_deferral";
    StorageParams2["BLOCK_DEFERRAL_TIME"] = "view_block_deferral_time";
    StorageParams2["DAILY_SUMMARY_NOTIFICATION_TIME"] = "daily-summary-notification-time";
    StorageParams2["DAILY_NOTIFICATION"] = "daily_notification";
    StorageParams2["REVIEW_DATE"] = "review_date";
    StorageParams2["REVIEW_PROMPT_AT"] = "review_prompt_at";
    StorageParams2["INSTALL_DATE"] = "install-date";
    StorageParams2["PROMO_CLEAR_YOUTUBE_ON_LIMITS"] = "promo-clear-youtube-on-limits";
    StorageParams2["PROMO_CLEAR_YOUTUBE_ON_BLOCK"] = "promo-clear-youtube-on-block";
    StorageParams2["IS_POMODORO_ENABLED"] = "is-pomodoro-enabled";
    StorageParams2["POMODORO_START_TIME"] = "pomodoro-start-time";
    StorageParams2["POMODORO_INTERVAL_WORK"] = "pomodoro-interval-work";
    StorageParams2["POMODORO_AUDIO_AFTER_WORK"] = "pomodoro-audio-after-work";
    StorageParams2["POMODORO_AUDIO_AFTER_REST"] = "pomodoro-audio-after-rest";
    StorageParams2["POMODORO_AUDIO_AFTER_FINISHED"] = "pomodoro-audio-after-finished";
    StorageParams2["POMODORO_INTERVAL_REST"] = "pomodoro-interval-rest";
    StorageParams2["POMODORO_FREQUENCY"] = "pomodoro-frequency";
    return StorageParams2;
  })(StorageParams || {});
  var StorageDeserializeParam = /* @__PURE__ */ ((StorageDeserializeParam2) => {
    StorageDeserializeParam2["TABS"] = "tabs";
    StorageDeserializeParam2["TIMEINTERVAL_LIST"] = "time_interval";
    return StorageDeserializeParam2;
  })(StorageDeserializeParam || {});
  function createDeserializeParambject(param) {
    switch (param) {
      case "tabs":
        return new Tab();
      case "time_interval":
        return new TimeInterval();
    }
  }
  const NOTIFICATION_MESSAGE_DEFAULT = "You have spent a lot of time on this site";
  const INTERVAL_INACTIVITY_DEFAULT = 30;
  const INTERVAL_SAVE_STORAGE_DEFAULT = 5e3;
  const DARK_MODE_DEFAULT = false;
  const VIEW_TIME_IN_BADGE_DEFAULT = true;
  const BLOCK_DEFERRAL_DEFAULT = true;
  const DAILY_SUMMARY_NOTIFICATION_TIME_DEFAULT = 20 * HOUR / 1e3;
  const DAILY_NOTIFICATION_DEFAULT = true;
  const SHOW_CHANGELOG_DEFAULT = false;
  const SHOW_PROMO_CLEAR_YOUTUBE_DEFAULT = false;
  const IS_POMODORO_ENABLED_DEFAULT = false;
  const POMODORO_INTERVAL_WORK_DEFAULT = 25 * MINUTE_IN_SECONDS;
  const POMODORO_INTERVAL_REST_DEFAULT = 5 * MINUTE_IN_SECONDS;
  const POMODORO_FREQUENCY_DEFAULT = 3;
  const POMODORO_AUDIO_AFTER_WORK_DEFAULT = PomodoroSounds["Sound 3"];
  const POMODORO_AUDIO_AFTER_REST_DEFAULT = PomodoroSounds["Sound 8"];
  const POMODORO_AUDIO_AFTER_FINISHED_DEFAULT = PomodoroSounds["Sound 10"];
  function getDefaultValue(param) {
    switch (param) {
      case "black_list":
        return [];
      case "restriction_list":
        return [];
      case "notification_list":
        return [];
      case "notification_message":
        return NOTIFICATION_MESSAGE_DEFAULT;
      case "inactivity_interval":
        return INTERVAL_INACTIVITY_DEFAULT;
      case "night_mode":
        return DARK_MODE_DEFAULT;
      case "view_time_in_badge":
        return VIEW_TIME_IN_BADGE_DEFAULT;
      case "view_block_deferral":
        return BLOCK_DEFERRAL_DEFAULT;
      case "view_block_deferral_time":
        return [];
      case "daily-summary-notification-time":
        return DAILY_SUMMARY_NOTIFICATION_TIME_DEFAULT;
      case "daily_notification":
        return DAILY_NOTIFICATION_DEFAULT;
      case "show_changelog":
        return SHOW_CHANGELOG_DEFAULT;
      case "promo-clear-youtube-on-block":
      case "promo-clear-youtube-on-limits":
        return SHOW_PROMO_CLEAR_YOUTUBE_DEFAULT;
      case "is-pomodoro-enabled":
        return IS_POMODORO_ENABLED_DEFAULT;
      case "pomodoro-interval-work":
        return POMODORO_INTERVAL_WORK_DEFAULT;
      case "pomodoro-interval-rest":
        return POMODORO_INTERVAL_REST_DEFAULT;
      case "pomodoro-frequency":
        return POMODORO_FREQUENCY_DEFAULT;
      case "pomodoro-audio-after-work":
        return POMODORO_AUDIO_AFTER_WORK_DEFAULT;
      case "pomodoro-audio-after-rest":
        return POMODORO_AUDIO_AFTER_REST_DEFAULT;
      case "pomodoro-audio-after-finished":
        return POMODORO_AUDIO_AFTER_FINISHED_DEFAULT;
    }
  }
  function isEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  function isDomainEquals(first, second) {
    if (first === second)
      return true;
    else {
      var resultUrl = function(url) {
        if (url.indexOf("www.") > -1)
          return url.split("www.")[1];
        return url;
      };
      if (resultUrl(first) === resultUrl(second))
        return true;
      else
        return false;
    }
  }
  function getPercentage(time, totalTime) {
    return (time / totalTime * 100).toFixed(2);
  }
  class LocalStorage {
    async getDeserializeList(param) {
      return new Promise(async (resolve) => {
        const obj = await Browser.storage.local.get(param);
        const list = obj[param];
        if (list != void 0) {
          let tempList = [];
          for (let i = 0; i < list.length; i++) {
            const obj2 = createDeserializeParambject(param);
            tempList.push(obj2.deserialize(list[i]));
          }
          return resolve(tempList);
        } else
          resolve([]);
      });
    }
    async saveTabs(value) {
      return await Browser.storage.local.set({ [StorageDeserializeParam.TABS]: value });
    }
    async saveIntervalList(value) {
      return await Browser.storage.local.set({ [StorageDeserializeParam.TIMEINTERVAL_LIST]: value });
    }
    async saveValue(name, value) {
      return await Browser.storage.local.set({
        [name]: value
      });
    }
    async getValue(name, defaultValue) {
      let value = await Browser.storage.local.get(name);
      if (isEmpty(value) && defaultValue != void 0) {
        await this.saveValue(name, defaultValue);
        return defaultValue;
      }
      return value[name];
    }
  }
  function injectStorage() {
    return new LocalStorage();
  }
  const _Settings = class _Settings {
    constructor() {
      __publicField(this, "_settings", /* @__PURE__ */ new Map());
      if (_Settings.instance) {
        throw new Error("Error - use Settings.getInstance()");
      }
    }
    static getInstance() {
      _Settings.instance = _Settings.instance || new _Settings();
      return _Settings.instance;
    }
    async getSetting(param) {
      if (this._settings.has(param))
        return this._settings.get(param);
      else
        return await this.getValue(param);
    }
    async reloadSetting(param) {
      await this.getValue(param);
    }
    async getValue(param) {
      const storage = injectStorage();
      const value = await storage.getValue(param, getDefaultValue(param));
      this._settings.set(param, value);
      return value;
    }
  };
  __publicField(_Settings, "instance");
  let Settings = _Settings;
  async function isInBlackList(url) {
    const blackList = await Settings.getInstance().getSetting(StorageParams.BLACK_LIST);
    const array = Object.values(blackList);
    return (array == null ? void 0 : array.find((x) => isDomainEquals(extractHostname(x), extractHostname(url)))) !== void 0;
  }
  class TabsRepository {
    constructor() {
      __publicField(this, "tabs");
      this.tabs = [];
    }
    async initAsync() {
      this.tabs = await injectStorage().getDeserializeList(StorageDeserializeParam.TABS);
    }
    getTabs() {
      return this.tabs;
    }
    removeAllTabs() {
      this.tabs = [];
    }
    getTodayTabs() {
      return this.tabs.filter((x) => x.days.find((s2) => s2.date === todayLocalDate()));
    }
    getTab(domain) {
      var _a;
      return (_a = this.tabs) == null ? void 0 : _a.find((x) => x.url === domain);
    }
    async addTab(domain) {
      const tabFromStorage = this.getTab(domain);
      const isInBlackListFlag = await isInBlackList(domain);
      if (!isInBlackListFlag && !tabFromStorage) {
        const newTab = new Tab();
        newTab.init(domain);
        this.tabs.push(newTab);
        return newTab;
      }
      return void 0;
    }
  }
  let instanse = null;
  async function createAndInitInstance() {
    let repo = new TabsRepository();
    await repo.initAsync();
    return repo;
  }
  async function injectTabsRepositorySingleton() {
    if (instanse == null) {
      instanse = await createAndInitInstance();
    }
    return instanse;
  }
  async function injectTabsRepository() {
    return createAndInitInstance();
  }
  var BadgeIcon = /* @__PURE__ */ ((BadgeIcon2) => {
    BadgeIcon2["default"] = "/128x128.png";
    BadgeIcon2["pomodoroWorkingTime"] = "/assets/icons/pomodoro.png";
    BadgeIcon2["pomodoroRestTime"] = "/assets/icons/pomodoro-rest.png";
    return BadgeIcon2;
  })(BadgeIcon || {});
  var BadgeColor = /* @__PURE__ */ ((BadgeColor2) => {
    BadgeColor2["red"] = "#fdb8b8";
    BadgeColor2["green"] = "#6ec05e";
    BadgeColor2["blue"] = "#1a73e8";
    BadgeColor2["none"] = "#000";
    return BadgeColor2;
  })(BadgeColor || {});
  async function useBadge(badge) {
    if (badge.color != "#000")
      await Browser.action.setBadgeBackgroundColor({ color: badge.color });
    await Browser.action.setBadgeText({
      tabId: badge.tabId,
      text: badge.text
    });
    if (badge.icon) {
      await Browser.action.setIcon({
        path: badge.icon
      });
      await Browser.action.setBadgeText({
        tabId: badge.tabId,
        text: badge.text
      });
    } else
      await Browser.action.setIcon({
        path: "/128x128.png"
        /* default */
      });
  }
  async function useDailyIntervals() {
    async function closeInterval(domain) {
      if (domain == null)
        return;
      const storage = injectStorage();
      const timeIntervalList = await storage.getDeserializeList(
        StorageDeserializeParam.TIMEINTERVAL_LIST
      );
      const item = timeIntervalList == null ? void 0 : timeIntervalList.find((x) => x.domain === domain && x.day == todayLocalDate());
      item == null ? void 0 : item.closeInterval();
      await storage.saveIntervalList(timeIntervalList);
    }
    async function addInterval(domain) {
      if (domain == null)
        return;
      const storage = injectStorage();
      let timeIntervalList = await storage.getDeserializeList(
        StorageDeserializeParam.TIMEINTERVAL_LIST
      );
      if (timeIntervalList == void 0)
        timeIntervalList = [];
      const item = timeIntervalList == null ? void 0 : timeIntervalList.find((x) => x.domain === domain && x.day == todayLocalDate());
      if (item != void 0) {
        if (item.day == todayLocalDate())
          item.addInterval();
        else {
          const newInterval = new TimeInterval();
          newInterval.init(todayLocalDate(), domain);
          newInterval.addInterval();
          timeIntervalList.push(newInterval);
        }
      } else {
        const newInterval = new TimeInterval();
        newInterval.init(todayLocalDate(), domain);
        newInterval.addInterval();
        timeIntervalList.push(newInterval);
      }
      await storage.saveIntervalList(timeIntervalList);
    }
    return {
      closeInterval,
      addInterval
    };
  }
  const _ActiveTab = class _ActiveTab {
    constructor() {
      __publicField(this, "_activeTabUrl");
      __publicField(this, "_activeTabDomain");
      if (_ActiveTab.instance) {
        throw new Error("Error - use ActiveTab.getInstance()");
      }
      this._activeTabUrl = null;
      this._activeTabDomain = null;
    }
    static getInstance() {
      _ActiveTab.instance = _ActiveTab.instance || new _ActiveTab();
      return _ActiveTab.instance;
    }
    setActiveTab(value) {
      this._activeTabUrl = value;
      this._activeTabDomain = value != null ? extractHostname(value) : null;
    }
    getActiveTabUrl() {
      return this._activeTabUrl;
    }
    getActiveTabDomain() {
      return this._activeTabDomain;
    }
  };
  __publicField(_ActiveTab, "instance");
  let ActiveTab = _ActiveTab;
  async function isInDeferList(url) {
    const deferList = await Settings.getInstance().getSetting(
      StorageParams.BLOCK_DEFERRAL_TIME
    );
    const array = Object.values(deferList);
    const item = array == null ? void 0 : array.find((x) => isDomainEquals(x.domain, url));
    if (item != void 0)
      log(
        `Deferring time ${url} ${new Date(item.time)} diff ${differenceInHours(
          new Date(item.time),
          /* @__PURE__ */ new Date()
        )}`
      );
    return item != void 0 && item.time > Date.now();
  }
  async function isLimitExceeded(url, tab) {
    const limitList = await Settings.getInstance().getSetting(
      StorageParams.RESTRICTION_LIST
    );
    const array = Object.values(limitList);
    const item = array == null ? void 0 : array.find((x) => isDomainEquals(x.domain, url));
    if (item != void 0) {
      const date = tab.days.find((x) => x.date == todayLocalDate());
      if (date != void 0) {
        if (date.summary >= item.time) {
          log(`Limit Exceeded: website ${url} limit ${item.time} summary time ${date.summary}`);
          if (await isInDeferList(url)) {
            log(`Page ${url} is in deffering list`);
            return {
              IsLimitExceeded: false,
              LimitTime: null
            };
          }
          return {
            IsLimitExceeded: true,
            LimitTime: item.time
          };
        }
      }
    }
    return {
      IsLimitExceeded: false,
      LimitTime: null
    };
  }
  function buildBlockQuery(domain, url, limitTime, summaryCounter, favicon) {
    return `?domain=${domain}&url=${url}&summaryTime=${limitTime}&summaryCounter=${summaryCounter}&favicon=${favicon}`;
  }
  const NO_FAVICON = 'data:image/svg+xml,%3Csvg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="%23000000"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E%3Crect x="0" fill="none" width="20" height="20"%3E%3C/rect%3E%3Cg%3E%3Cpath d="M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm7.5 6.48c-.274.896-.908 1.64-1.75 2.05-.45-1.69-1.658-3.074-3.27-3.75.13-.444.41-.83.79-1.09-.43-.28-1-.42-1.34.07-.53.69 0 1.61.21 2v.14c-.555-.337-.99-.84-1.24-1.44-.966-.03-1.922.208-2.76.69-.087-.565-.032-1.142.16-1.68.733.07 1.453-.23 1.92-.8.46-.52-.13-1.18-.59-1.58h.36c1.36-.01 2.702.335 3.89 1 1.36 1.005 2.194 2.57 2.27 4.26.24 0 .7-.55.91-.92.172.34.32.69.44 1.05zM9 16.84c-2.05-2.08.25-3.75-1-5.24-.92-.85-2.29-.26-3.11-1.23-.282-1.473.267-2.982 1.43-3.93.52-.44 4-1 5.42.22.83.715 1.415 1.674 1.67 2.74.46.035.918-.066 1.32-.29.41 2.98-3.15 6.74-5.73 7.73zM5.15 2.09c.786-.3 1.676-.028 2.16.66-.42.38-.94.63-1.5.72.02-.294.085-.584.19-.86l-.85-.52z"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E';
  async function useBlockPage(domain, url, limitTime, summaryCounter, favIconUrl) {
    const favicon = favIconUrl == void 0 || favIconUrl == "" || favIconUrl.startsWith("chrome://favicon/") ? NO_FAVICON : favIconUrl;
    const blockUrl = Browser.runtime.getURL("src/block.html") + buildBlockQuery(domain, url, limitTime, summaryCounter, favicon);
    const tab = await Browser.tabs.query({ currentWindow: true, active: true });
    await Browser.tabs.update(tab[0].id, { url: blockUrl });
  }
  function convertSummaryTimeToBadgeString(summaryTime) {
    const sec2 = summaryTime;
    const min2 = Number((summaryTime / 60).toFixed(0));
    const hours = Number((summaryTime / (60 * 60)).toFixed(1));
    if (sec2 < 60)
      return `${sec2}s`;
    else if (min2 < 60)
      return `${min2}m`;
    else
      return `${hours}h`;
  }
  function convertLimitTimeToString(summaryTime) {
    const totalHours = summaryTime % (3600 * 24);
    let hours = Math.floor(totalHours / 3600);
    const totalSeconds = summaryTime % 3600;
    let mins2 = Math.floor(totalSeconds / 60);
    function appendTime(value, stringPrefix, isUseZero = false) {
      return `${isUseZero ? zeroAppend(value) : value} ${stringPrefix}`;
    }
    return `${appendTime(hours, getMessagesFromLocale()["h"]["message"])} ${appendTime(
      mins2,
      getMessagesFromLocale()["m"]["message"],
      true
    )}`;
  }
  function zeroAppend(time) {
    if (time < 10)
      return `0${time}`;
    else
      return time;
  }
  function useNotificationList() {
    async function isNeedToShowNotification(url, tab) {
      const notificationList = await Settings.getInstance().getSetting(
        StorageParams.NOTIFICATION_LIST
      );
      const array = Object.values(notificationList);
      const item = array == null ? void 0 : array.find((x) => isDomainEquals(x.domain, url));
      if (item != void 0) {
        const date = tab.days.find((x) => x.date == todayLocalDate());
        if (date != void 0) {
          if (date.summary != 0 && (date.summary == item.time || date.summary % item.time == 0)) {
            log(
              `Time for notification: website ${url} time ${item.time} summary time ${date.summary}`
            );
            return true;
          }
        }
      }
      return false;
    }
    async function isDomainInNotificationsLimit(url) {
      const notificationList = await Settings.getInstance().getSetting(
        StorageParams.NOTIFICATION_LIST
      );
      const array = Object.values(notificationList);
      const item = array == null ? void 0 : array.find((x) => isDomainEquals(x.domain, url));
      return item != void 0;
    }
    return {
      isNeedToShowNotification,
      isDomainInNotificationsLimit
    };
  }
  var NotificationType = /* @__PURE__ */ ((NotificationType2) => {
    NotificationType2["DailySummaryNotification"] = "daily-summary-notification";
    NotificationType2["WebSiteNotification"] = "website-notification";
    return NotificationType2;
  })(NotificationType || {});
  async function useNotification(notificationType, title, message) {
    await Browser.notifications.clear(notificationType);
    await new Promise((res) => setTimeout(res, 3 * SECOND));
    return Browser.notifications.create(notificationType, {
      type: "basic",
      title,
      message,
      iconUrl: Browser.runtime.getURL("128x128.png"),
      isClickable: false
    });
  }
  const activeTabInstance = ActiveTab.getInstance();
  let currentObj;
  async function initTracker() {
    setInterval(trackTime, 1e3);
    setInterval(saveTabs, INTERVAL_SAVE_STORAGE_DEFAULT);
  }
  async function trackTime() {
    var _a;
    const repo = await injectTabsRepositorySingleton();
    const window2 = await Browser.windows.getLastFocused({ populate: true });
    if (window2.focused) {
      const activeTab = (_a = window2.tabs) == null ? void 0 : _a.find((t) => t.active === true);
      if (isValidPage(activeTab)) {
        const activeDomain = extractHostname(activeTab.url);
        if (await isInBlackList(activeDomain) && await canChangeBadge()) {
          await useBadge({
            tabId: activeTab == null ? void 0 : activeTab.id,
            text: "n/a",
            color: BadgeColor.green
          });
        } else {
          if (currentObj != null && currentObj.activeDomain == activeDomain && !isActiveTabWasChanged(activeDomain)) {
            await mainTrackerWrapper(activeTab, activeDomain, currentObj.tab);
            return;
          }
          let tab = repo.getTab(activeDomain);
          if (tab == void 0) {
            tab = await repo.addTab(activeDomain);
          }
          if (tab != void 0) {
            await mainTrackerWrapper(activeTab, activeDomain, tab);
          }
        }
      } else
        await closeOpenInterval();
    } else {
      await closeOpenInterval();
    }
  }
  async function closeOpenInterval() {
    (await useDailyIntervals()).closeInterval(activeTabInstance.getActiveTabDomain());
    activeTabInstance.setActiveTab(null);
    currentObj = null;
  }
  async function mainTracker(state, activeTab, activeDomain, tab) {
    function isAudible() {
      return state === "idle" && activeTab.audible;
    }
    currentObj = {
      tab,
      activeDomain
    };
    const isAudibleValue = isAudible();
    if (state === "active" || isAudibleValue) {
      const limitExceeded = await isLimitExceeded(activeDomain, tab);
      if (limitExceeded.IsLimitExceeded) {
        const summaryCounter = tab.days.at(-1).counter;
        await useBlockPage(
          activeDomain,
          activeTab.url,
          limitExceeded.LimitTime,
          summaryCounter,
          activeTab.favIconUrl
        );
        return;
      }
      if (isActiveTabWasChanged(activeDomain)) {
        tab.incCounter();
        (await useDailyIntervals()).closeInterval(activeTabInstance.getActiveTabDomain());
        activeTabInstance.setActiveTab(activeTab.url);
        (await useDailyIntervals()).addInterval(activeTabInstance.getActiveTabDomain());
      }
      if (tab.favicon == "" && activeTab.favIconUrl != void 0)
        tab.setFavicon(activeTab.favIconUrl);
      if (await useNotificationList().isNeedToShowNotification(activeDomain, tab)) {
        const message = await Settings.getInstance().getSetting(
          StorageParams.NOTIFICATION_MESSAGE
        );
        const title = `${activeDomain} notification`;
        await useNotification(NotificationType.WebSiteNotification, title, message);
      }
      tab.incSummaryTime();
      const viewInBadge = await Settings.getInstance().getSetting(StorageParams.VIEW_TIME_IN_BADGE);
      if (await canChangeBadge()) {
        if (viewInBadge)
          await useBadge({
            tabId: activeTab == null ? void 0 : activeTab.id,
            text: convertSummaryTimeToBadgeString(tab.days.at(-1).summary),
            color: BadgeColor.blue
          });
        else
          await useBadge({
            tabId: activeTab == null ? void 0 : activeTab.id,
            text: null,
            color: BadgeColor.none
          });
      }
    } else
      await closeOpenInterval();
  }
  async function mainTrackerWrapper(activeTab, activeDomain, tab) {
    const inactivityInterval = await Settings.getInstance().getSetting(
      StorageParams.INTERVAL_INACTIVITY
    );
    const number2 = Number(inactivityInterval);
    const state = await Browser.idle.queryState(number2);
    await mainTracker(state, activeTab, activeDomain, tab);
  }
  function isActiveTabWasChanged(activeDomain) {
    return activeDomain != activeTabInstance.getActiveTabDomain();
  }
  async function saveTabs() {
    const storage = injectStorage();
    const repo = await injectTabsRepositorySingleton();
    const tabs = repo.getTabs();
    await storage.saveTabs(tabs);
  }
  async function canChangeBadge() {
    return !await Settings.getInstance().getSetting(StorageParams.IS_POMODORO_ENABLED);
  }
  async function useWebUsageSummaryForDay() {
    const repo = await injectTabsRepository();
    const unSortedTabs = repo.getTabs();
    if (unSortedTabs.length == 0)
      return null;
    const dataToday = getData(todayLocalDate(), repo);
    const dataYesterday = getData(startOfYesterday().toLocaleDateString("en-US"), repo);
    return {
      time: dataToday == null ? 0 : dataToday.time,
      mostVisitedSite: dataToday == null ? void 0 : dataToday.mostVisitedSite,
      mostVisitedSiteTime: dataToday == null ? void 0 : dataToday.mostVisitedSiteTime,
      timeYesterDay: dataYesterday == null ? 0 : dataYesterday.time,
      percentageFromYesterday: dataToday == null ? "0%" : dataYesterday == null ? "100%" : `${getPercentage(dataToday.time, dataYesterday.time)}%`
    };
  }
  function getData(date, repo) {
    var _a;
    const unSortedTabs = repo.getTabs();
    if (unSortedTabs.length == 0)
      return null;
    const targetTabs = unSortedTabs.filter((x) => x.days.find((s2) => s2.date === date));
    if (targetTabs.length == 0)
      return null;
    const tabs = targetTabs.sort(function(a, b) {
      return b.days.find((s2) => s2.date === date).summary - a.days.find((s2) => s2.date === date).summary;
    });
    const summaryTimeList = tabs == null ? void 0 : tabs.map(function(tab) {
      return tab.days.find((day) => day.date === date).summary;
    });
    const summaryTime = summaryTimeList != void 0 && summaryTimeList.length > 0 ? summaryTimeList.reduce(function(a, b) {
      return a + b;
    }) : 0;
    const mostVisitedTab = tabs[0];
    const mostVisitedSite = mostVisitedTab.url;
    const mostVisitedSiteTime = (_a = mostVisitedTab.days.find((s2) => s2.date === date)) == null ? void 0 : _a.summary;
    return {
      time: summaryTime,
      mostVisitedSite,
      mostVisitedSiteTime
    };
  }
  async function dailySummaryNotification() {
    const showDailyNotifacation2 = await Settings.getInstance().getSetting(
      StorageParams.DAILY_NOTIFICATION
    );
    if (showDailyNotifacation2) {
      const data = await useWebUsageSummaryForDay();
      if (data == null)
        return;
      const title = `${getMessagesFromLocale()["todayUsageTime"]["message"]}${convertLimitTimeToString(data.time)}`;
      const messageWithMostVisitedWebsite = data.mostVisitedSite == void 0 ? "" : `${data.mostVisitedSite} ${getMessagesFromLocale()["mostVisited"]["message"]}${convertLimitTimeToString(data.mostVisitedSiteTime)}`;
      const message = [
        `${data.percentageFromYesterday}${getMessagesFromLocale()["comparedToYesterday"]["message"]}`,
        messageWithMostVisitedWebsite
      ].join("\n");
      return await useNotification(NotificationType.DailySummaryNotification, title, message);
    }
  }
  async function removeOldTimeIntervals() {
    const storage = injectStorage();
    let timeIntervalList = await storage.getDeserializeList(
      StorageDeserializeParam.TIMEINTERVAL_LIST
    );
    if (timeIntervalList == void 0)
      timeIntervalList = [];
    const arrayToRemove = [];
    timeIntervalList.forEach((interval) => {
      if (new Date(interval.day) < new Date(todayLocalDate()))
        arrayToRemove.push(timeIntervalList.indexOf(interval));
    });
    arrayToRemove.forEach((index) => {
      if (index > -1)
        timeIntervalList.splice(index, 1);
    });
    await storage.saveIntervalList(timeIntervalList);
  }
  var Messages = /* @__PURE__ */ ((Messages2) => {
    Messages2["RescheduleJobs"] = "reschedule-jobs";
    Messages2["ClearAllData"] = "clear-data";
    Messages2["Restore"] = "restore-data";
    Messages2["PlayAudio"] = "play-audio";
    return Messages2;
  })(Messages || {});
  function scheduleJobs() {
    Browser.alarms.onAlarm.addListener(async (alarm) => {
      log(`[schedule-jobs] Alarm ${alarm.name} triggered`, alarm);
      switch (alarm.name) {
        case "@alarm/daily-summary-notification": {
          await dailySummaryNotification();
          break;
        }
        case "@alarm/remove-old-time-intervals": {
          await removeOldTimeIntervals();
          break;
        }
      }
      log(`[schedule-jobs] ${alarm.name} finished`);
    });
    Browser.runtime.onMessage.addListener((message) => {
      if (message == Messages.RescheduleJobs)
        rescheduleJobs();
    });
    rescheduleJobs();
  }
  async function rescheduleJobs() {
    log("Reschedule jobs");
    const dailySummaryNotificationTime = await Settings.getInstance().getSetting(
      StorageParams.DAILY_SUMMARY_NOTIFICATION_TIME
    );
    await Browser.alarms.clear(
      "@alarm/daily-summary-notification"
      /* DailySummaryNotification */
    );
    const nextTime = getNextTimeOfDay(dailySummaryNotificationTime * SECOND);
    log(`[schedule-jobs] ${"@alarm/daily-summary-notification"} start time ${new Date(nextTime)}`);
    Browser.alarms.create("@alarm/daily-summary-notification", {
      when: nextTime,
      periodInMinutes: DAY_MINUTES
    });
    await createAlarmIfMissing("@alarm/remove-old-time-intervals", {
      when: startOfTomorrow().getTime(),
      periodInMinutes: DAY_MINUTES
    });
  }
  async function createAlarmIfMissing(name, alarmInfo) {
    const existing = await Browser.alarms.get(name).catch(() => void 0);
    if (existing == null) {
      log(
        `[schedule-jobs] ${name} start time ${alarmInfo.when != void 0 ? new Date(alarmInfo.when) : null}`
      );
      Browser.alarms.create(name, alarmInfo);
    }
  }
  async function createOffscreen() {
    const path = "src/offscreen.html";
    const offscreenUrl = Browser.runtime.getURL(path);
    if (await chrome.offscreen.hasDocument())
      return;
    await chrome.offscreen.createDocument({
      url: offscreenUrl,
      reasons: ["AUDIO_PLAYBACK"],
      justification: "Play audio sounds"
    });
  }
  async function checkPomodoro() {
    let Period;
    ((Period2) => {
      Period2["work"] = "WORK";
      Period2["rest"] = "REST";
      Period2["finished"] = "FINISH";
    })(Period || (Period = {}));
    function isTargetPeriod(period) {
      let isPomodoroTargetPeriodEnd;
      for (let index = 1; index <= frequency; index++) {
        let ind = period == "WORK" ? index - 1 : index;
        const plusWorkingTime = workTime * ind;
        const plusRestTime = (restTime + 1) * (index - 1);
        const isPomodoroTargetPeriodStart = addSeconds(startTime, plusWorkingTime + plusRestTime);
        isPomodoroTargetPeriodEnd = addSeconds(startTime, plusWorkingTime + plusRestTime + workTime);
        const isTargetPeriod2 = now >= isPomodoroTargetPeriodStart && (addSeconds(now, -1) <= isPomodoroTargetPeriodEnd || now <= isPomodoroTargetPeriodEnd);
        if (isTargetPeriod2) {
          return {
            period,
            isTargetPeriod: isTargetPeriod2,
            isTargetPeriodFinishedNow: isDateEqual(addSeconds(now, -1), isPomodoroTargetPeriodEnd) || isDateEqual(now, isPomodoroTargetPeriodEnd)
          };
        }
      }
      return {
        period: "FINISH",
        isTargetPeriod: false,
        isTargetPeriodFinishedNow: false
      };
    }
    async function play(period) {
      function getSound() {
        switch (period) {
          case "WORK":
            return StorageParams.POMODORO_AUDIO_AFTER_WORK;
          case "REST":
            return StorageParams.POMODORO_AUDIO_AFTER_REST;
          case "FINISH":
            return StorageParams.POMODORO_AUDIO_AFTER_FINISHED;
        }
      }
      logger.log(`[Pomodoro] ${period}`);
      const sound2 = await storage.getValue(getSound());
      await createOffscreen();
      await Browser.runtime.sendMessage({
        message: Messages.PlayAudio,
        sound: sound2,
        offscreen: true
      });
    }
    const storage = injectStorage();
    const isPomodoroEnabled = await Settings.getInstance().getSetting(
      StorageParams.IS_POMODORO_ENABLED
    );
    if (!isPomodoroEnabled)
      return;
    const startTime = new Date(
      await Settings.getInstance().getSetting(StorageParams.POMODORO_START_TIME)
    );
    const workTime = await Settings.getInstance().getSetting(
      StorageParams.POMODORO_INTERVAL_WORK
    );
    const restTime = await Settings.getInstance().getSetting(
      StorageParams.POMODORO_INTERVAL_REST
    );
    const frequency = await Settings.getInstance().getSetting(
      StorageParams.POMODORO_FREQUENCY
    );
    const now = /* @__PURE__ */ new Date();
    const pomodoroEndTime = addSeconds(startTime, workTime * frequency + restTime * frequency);
    const activeTab = await Browser.tabs.query({ active: true });
    if (now >= pomodoroEndTime) {
      if (isDateEqual(now, pomodoroEndTime)) {
        logger.log(`[Pomodoro] Pomodoro finished`);
        await play(
          "FINISH"
          /* finished */
        );
      }
      await storage.saveValue(StorageParams.IS_POMODORO_ENABLED, false);
      await storage.saveValue(StorageParams.POMODORO_START_TIME, null);
      await useBadge({
        tabId: activeTab[0].id,
        text: null,
        color: BadgeColor.none,
        icon: BadgeIcon.default
      });
      return;
    }
    let target = isTargetPeriod(
      "WORK"
      /* work */
    );
    const isWork = target.isTargetPeriod;
    if (isWork) {
      await useBadge({
        tabId: activeTab[0].id,
        text: null,
        color: BadgeColor.none,
        icon: BadgeIcon.pomodoroWorkingTime
      });
    } else {
      target = isTargetPeriod(
        "REST"
        /* rest */
      );
      if (target.isTargetPeriod) {
        await useBadge({
          tabId: activeTab[0].id,
          text: null,
          color: BadgeColor.none,
          icon: BadgeIcon.pomodoroRestTime
        });
      }
    }
    if (target.isTargetPeriodFinishedNow)
      await play(target.period);
    return {
      isWork
    };
  }
  logger.log("Start background script");
  let pomodoroTimer;
  self.onerror = (err) => {
    console.error("Unhandled error:", err);
  };
  Browser.storage.onChanged.addListener(async (changes, namespace) => {
    for (var key in changes) {
      if (Object.values(StorageParams).includes(key))
        await Settings.getInstance().reloadSetting(key);
      if (key == StorageParams.IS_POMODORO_ENABLED) {
        const value = changes[StorageParams.IS_POMODORO_ENABLED].newValue;
        pomodoro(value);
      }
    }
  });
  Browser.runtime.setUninstallURL("https://webtracker.online/goodbye.html");
  Browser.runtime.onInstalled.addListener(async (details) => {
    if (details.reason == "install") {
      logger.log("Extension installed:", details);
      const settingsStorage = injectStorage();
      await settingsStorage.saveValue(StorageParams.INSTALL_DATE, todayLocalDate());
      const initialPageUrl = Browser.runtime.getURL("src/welcome.html");
      await Browser.tabs.create({
        url: initialPageUrl,
        active: true
      });
    }
    if (details.reason == "update") {
      const showChangelog2 = await Settings.getInstance().getSetting(
        StorageParams.SHOW_CHANGELOG
      );
      if (showChangelog2)
        await Browser.tabs.create({
          url: "https://webtracker.online/releasenotes.html",
          active: true
        });
    }
  });
  Browser.runtime.onStartup.addListener(() => {
    logger.log(`onStartup event`);
  });
  Browser.windows.onFocusChanged.addListener(() => {
    logger.log("onFocusChanged");
  });
  async function pomodoro(value) {
    if (value == void 0) {
      const settingsStorage = injectStorage();
      value = await settingsStorage.getValue(StorageParams.IS_POMODORO_ENABLED);
    }
    if (value == true)
      pomodoroTimer = setInterval(checkPomodoro, 1e3);
    else
      clearInterval(pomodoroTimer);
  }
  pomodoro();
  scheduleJobs();
  initTracker();
  Browser.runtime.onMessage.addListener(async (message) => {
    if (message == Messages.ClearAllData) {
      const storage = injectStorage();
      const repo = await injectTabsRepositorySingleton();
      repo.removeAllTabs();
      await storage.saveTabs([]);
    }
    if (message.message == Messages.Restore) {
      const storage = injectStorage();
      await storage.saveTabs(message.data);
      const repo = await injectTabsRepositorySingleton();
      repo.initAsync();
    }
  });
})();