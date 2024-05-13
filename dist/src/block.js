var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "../browser-polyfill.js";
import { r as requiredArgs, J as toDate, R as millisecondsInHour, a4 as MINUTE, b as Settings, S as StorageParams, o as isDomainEquals, a5 as log, i as injectStorage, a6 as convertLimitTimeToString, B as BLOCK_DEFERRAL_DEFAULT, g as _imports_0 } from "../general.js";
import { P as PromoClearYouTube } from "../PromoClearYouTube.js";
import { d as defineComponent, i as useI18n, r as ref, k as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, s as createCommentVNode, e as createVNode, o as openBlock, p as pushScopeId, h as popScopeId, _ as _export_sfc, x as createApp, y as i18n } from "../i18n.js";
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
class Deffering {
  constructor(domain, minutes) {
    __publicField(this, "domain");
    __publicField(this, "time");
    this.domain = domain;
    this.time = Date.now() + minutes * MINUTE;
  }
}
async function canDefering(url) {
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
  if (item == void 0)
    return true;
  return item != void 0 && differenceInHours(new Date(item.time), /* @__PURE__ */ new Date()) > 24;
}
async function defering(url, timeInMinutes) {
  const settingsStorage = injectStorage();
  const deferList = await Settings.getInstance().getSetting(
    StorageParams.BLOCK_DEFERRAL_TIME
  );
  const array = Object.values(deferList);
  const item = array == null ? void 0 : array.find((x) => isDomainEquals(x.domain, url));
  if (item != void 0)
    item.time = Date.now() + timeInMinutes * MINUTE;
  else
    array.push(new Deffering(url, 5));
  await settingsStorage.saveValue(StorageParams.BLOCK_DEFERRAL_TIME, array);
}
function getValueFromQuery(url) {
  const urlObj = new URL(url);
  const domain = urlObj.searchParams.get(
    "domain"
    /* Domain */
  );
  const sourceUrl = urlObj.searchParams.get(
    "url"
    /* URL */
  );
  const favicon = urlObj.searchParams.get(
    "favicon"
    /* Favicon */
  );
  const limitTime = Number(urlObj.searchParams.get(
    "summaryTime"
    /* LimitTime */
  ));
  const summaryCounter = Number(urlObj.searchParams.get(
    "summaryCounter"
    /* SummaryCounter */
  ));
  return {
    domain,
    url: sourceUrl,
    limitTime,
    summaryCounter,
    favicon
  };
}
const _withScopeId = (n) => (pushScopeId("data-v-16494d36"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "block-container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "header" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "d-inline-block",
    height: "40",
    src: _imports_0
  }),
  /* @__PURE__ */ createBaseVNode("p", { class: "d-inline-block header" }, "Web Activity Time Tracker")
], -1));
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "source-url" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "value" };
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { class: "value" };
const _hoisted_9 = ["value"];
const _hoisted_10 = { class: "desctiption" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Block",
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const webSite = ref();
    const sourceUrl = ref();
    const limitTime = ref();
    const favicon = ref();
    const limitTimeString = ref();
    const summaryCounter = ref();
    const allowDeferringBlock = ref();
    const haveToShowDeffering = ref();
    onMounted(async () => {
      const queryObj = getValueFromQuery(location.href);
      webSite.value = queryObj.domain ?? "";
      sourceUrl.value = queryObj.url ?? "";
      limitTime.value = queryObj.limitTime;
      favicon.value = queryObj.favicon ?? "";
      limitTimeString.value = convertLimitTimeToString(queryObj.limitTime);
      summaryCounter.value = queryObj.summaryCounter ?? 0;
      allowDeferringBlock.value = await settingsStorage.getValue(
        StorageParams.BLOCK_DEFERRAL,
        BLOCK_DEFERRAL_DEFAULT
      );
      haveToShowDeffering.value = await canDefering(webSite.value);
    });
    async function deferring() {
      if (webSite.value != void 0 && limitTime.value != void 0 && allowDeferringBlock.value && haveToShowDeffering.value) {
        await defering(webSite.value, 5);
        if (sourceUrl.value != "")
          window.open(sourceUrl.value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, toDisplayString(unref(t)("block.message")), 1),
        createBaseVNode("div", null, [
          createBaseVNode("img", {
            class: "favicon",
            height: "35",
            src: favicon.value
          }, null, 8, _hoisted_3),
          createBaseVNode("span", null, toDisplayString(webSite.value), 1)
        ]),
        createBaseVNode("p", _hoisted_4, toDisplayString(sourceUrl.value), 1),
        createBaseVNode("table", null, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_5, toDisplayString(unref(t)("limit.message")) + ":", 1),
            createBaseVNode("td", _hoisted_6, toDisplayString(limitTimeString.value), 1)
          ]),
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_7, toDisplayString(unref(t)("sessions.message")) + ":", 1),
            createBaseVNode("td", _hoisted_8, toDisplayString(summaryCounter.value), 1)
          ])
        ]),
        allowDeferringBlock.value && haveToShowDeffering.value ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "button",
          class: "mt-20",
          value: unref(t)("5mins.message"),
          onClick: _cache[0] || (_cache[0] = ($event) => deferring())
        }, null, 8, _hoisted_9)) : createCommentVNode("", true),
        createBaseVNode("p", _hoisted_10, toDisplayString(unref(t)("deferringDescription.message")), 1),
        createVNode(PromoClearYouTube)
      ]);
    };
  }
});
const Block_vue_vue_type_style_index_0_scoped_16494d36_lang = "";
const Block = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16494d36"]]);
const app = createApp(Block);
app.use(i18n);
app.mount("body");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kYXRlLWZuc0AyLjMwLjAvbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGF0ZS1mbnNAMi4zMC4wL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZGF0ZS1mbnNAMi4zMC4wL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluSG91cnMvaW5kZXguanMiLCIuLi8uLi9zcmMvZW50aXR5L2RlZmZlcmluZy50cyIsIi4uLy4uL3NyYy9mdW5jdGlvbnMvZGVmZXJMaXN0LnRzIiwiLi4vLi4vc3JjL3V0aWxzL2Jsb2NrLXBhZ2UudHMiLCIuLi8uLi9zcmMvcGFnZXMvQmxvY2sudnVlIiwiLi4vLi4vc3JjL2Jsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG59O1xuXG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkhvdXJzXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBob3Vyc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBob3VycyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAwNjo1MDowMCBhbmQgMiBKdWx5IDIwMTQgMTk6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Ib3VycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTksIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCA1MClcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyBtaWxsaXNlY29uZHNJbkhvdXI7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB7IE1JTlVURSB9IGZyb20gJy4uL3V0aWxzL3RpbWUnO1xuaW1wb3J0IHsgQmFzZVRpbWVMaXN0IH0gZnJvbSAnLi9iYXNlVGltZUxpc3QnO1xuXG5leHBvcnQgY2xhc3MgRGVmZmVyaW5nIGltcGxlbWVudHMgQmFzZVRpbWVMaXN0IHtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHRpbWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihkb21haW46IHN0cmluZywgbWludXRlczogbnVtYmVyKSB7XG4gICAgdGhpcy5kb21haW4gPSBkb21haW47XG4gICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKSArIG1pbnV0ZXMgKiBNSU5VVEU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkhvdXJzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgaXNEb21haW5FcXVhbHMgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7IERlZmZlcmluZyB9IGZyb20gJy4uL2VudGl0eS9kZWZmZXJpbmcnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgTUlOVVRFIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBsb2cgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNJbkRlZmVyTGlzdCh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBkZWZlckxpc3QgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxuICAgIFN0b3JhZ2VQYXJhbXMuQkxPQ0tfREVGRVJSQUxfVElNRSxcbiAgKSkgYXMgRGVmZmVyaW5nW107XG4gIGNvbnN0IGFycmF5ID0gT2JqZWN0LnZhbHVlcyhkZWZlckxpc3QpO1xuICBjb25zdCBpdGVtID0gYXJyYXk/LmZpbmQoeCA9PiBpc0RvbWFpbkVxdWFscyh4LmRvbWFpbiwgdXJsKSk7XG4gIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICBsb2coXG4gICAgICBgRGVmZXJyaW5nIHRpbWUgJHt1cmx9ICR7bmV3IERhdGUoaXRlbS50aW1lKX0gZGlmZiAke2RpZmZlcmVuY2VJbkhvdXJzKFxuICAgICAgICBuZXcgRGF0ZShpdGVtLnRpbWUpLFxuICAgICAgICBuZXcgRGF0ZSgpLFxuICAgICAgKX1gLFxuICAgICk7XG4gIHJldHVybiBpdGVtICE9IHVuZGVmaW5lZCAmJiBpdGVtLnRpbWUgPiBEYXRlLm5vdygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FuRGVmZXJpbmcodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgZGVmZXJMaXN0ID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsXG4gICkpIGFzIERlZmZlcmluZ1tdO1xuICBjb25zdCBhcnJheSA9IE9iamVjdC52YWx1ZXMoZGVmZXJMaXN0KTtcbiAgY29uc3QgaXRlbSA9IGFycmF5Py5maW5kKHggPT4gaXNEb21haW5FcXVhbHMoeC5kb21haW4sIHVybCkpO1xuICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgbG9nKFxuICAgICAgYERlZmVycmluZyB0aW1lICR7dXJsfSAke25ldyBEYXRlKGl0ZW0udGltZSl9IGRpZmYgJHtkaWZmZXJlbmNlSW5Ib3VycyhcbiAgICAgICAgbmV3IERhdGUoaXRlbS50aW1lKSxcbiAgICAgICAgbmV3IERhdGUoKSxcbiAgICAgICl9YCxcbiAgICApO1xuICBpZiAoaXRlbSA9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBpdGVtICE9IHVuZGVmaW5lZCAmJiBkaWZmZXJlbmNlSW5Ib3VycyhuZXcgRGF0ZShpdGVtLnRpbWUpLCBuZXcgRGF0ZSgpKSA+IDI0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJpbmcodXJsOiBzdHJpbmcsIHRpbWVJbk1pbnV0ZXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbiAgY29uc3QgZGVmZXJMaXN0ID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsXG4gICkpIGFzIERlZmZlcmluZ1tdO1xuICBjb25zdCBhcnJheSA9IE9iamVjdC52YWx1ZXMoZGVmZXJMaXN0KTtcbiAgY29uc3QgaXRlbSA9IGFycmF5Py5maW5kKHggPT4gaXNEb21haW5FcXVhbHMoeC5kb21haW4sIHVybCkpO1xuICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpIGl0ZW0udGltZSA9IERhdGUubm93KCkgKyB0aW1lSW5NaW51dGVzICogTUlOVVRFO1xuICBlbHNlIGFycmF5LnB1c2gobmV3IERlZmZlcmluZyh1cmwsIDUpKTtcblxuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuQkxPQ0tfREVGRVJSQUxfVElNRSwgYXJyYXkpO1xufVxuIiwiZXhwb3J0IGVudW0gQmxvY2tQYXJhbXMge1xuICBEb21haW4gPSAnZG9tYWluJyxcbiAgVVJMID0gJ3VybCcsXG4gIExpbWl0VGltZSA9ICdzdW1tYXJ5VGltZScsXG4gIFN1bW1hcnlDb3VudGVyID0gJ3N1bW1hcnlDb3VudGVyJyxcbiAgRmF2aWNvbiA9ICdmYXZpY29uJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQmxvY2tRdWVyeShcbiAgZG9tYWluOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBsaW1pdFRpbWU6IG51bWJlcixcbiAgc3VtbWFyeUNvdW50ZXI6IG51bWJlcixcbiAgZmF2aWNvbjogc3RyaW5nLFxuKSB7XG4gIHJldHVybiBgP2RvbWFpbj0ke2RvbWFpbn0mdXJsPSR7dXJsfSZzdW1tYXJ5VGltZT0ke2xpbWl0VGltZX0mc3VtbWFyeUNvdW50ZXI9JHtzdW1tYXJ5Q291bnRlcn0mZmF2aWNvbj0ke2Zhdmljb259YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRnJvbVF1ZXJ5KHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKTtcbiAgY29uc3QgZG9tYWluID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoQmxvY2tQYXJhbXMuRG9tYWluKTtcbiAgY29uc3Qgc291cmNlVXJsID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoQmxvY2tQYXJhbXMuVVJMKTtcbiAgY29uc3QgZmF2aWNvbiA9IHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KEJsb2NrUGFyYW1zLkZhdmljb24pO1xuICBjb25zdCBsaW1pdFRpbWUgPSBOdW1iZXIodXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoQmxvY2tQYXJhbXMuTGltaXRUaW1lKSk7XG4gIGNvbnN0IHN1bW1hcnlDb3VudGVyID0gTnVtYmVyKHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KEJsb2NrUGFyYW1zLlN1bW1hcnlDb3VudGVyKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkb21haW46IGRvbWFpbixcbiAgICB1cmw6IHNvdXJjZVVybCxcbiAgICBsaW1pdFRpbWU6IGxpbWl0VGltZSxcbiAgICBzdW1tYXJ5Q291bnRlcjogc3VtbWFyeUNvdW50ZXIsXG4gICAgZmF2aWNvbjogZmF2aWNvbixcbiAgfTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJsb2NrLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiIGhlaWdodD1cIjQwXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zLzQ4eDQ4LnBuZ1wiIC8+XG4gICAgICA8cCBjbGFzcz1cImQtaW5saW5lLWJsb2NrIGhlYWRlclwiPldlYiBBY3Rpdml0eSBUaW1lIFRyYWNrZXI8L3A+XG4gICAgPC9kaXY+XG4gICAgPHA+XG4gICAgICB7eyB0KCdibG9jay5tZXNzYWdlJykgfX1cbiAgICA8L3A+XG4gICAgPGRpdj5cbiAgICAgIDxpbWcgY2xhc3M9XCJmYXZpY29uXCIgaGVpZ2h0PVwiMzVcIiA6c3JjPVwiZmF2aWNvblwiIC8+XG4gICAgICA8c3Bhbj57eyB3ZWJTaXRlIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwic291cmNlLXVybFwiPnt7IHNvdXJjZVVybCB9fTwvcD5cbiAgICA8dGFibGU+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnbGltaXQubWVzc2FnZScpIH19OjwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInZhbHVlXCI+e3sgbGltaXRUaW1lU3RyaW5nIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnc2Vzc2lvbnMubWVzc2FnZScpIH19OjwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInZhbHVlXCI+e3sgc3VtbWFyeUNvdW50ZXIgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDxpbnB1dFxuICAgICAgdi1pZj1cImFsbG93RGVmZXJyaW5nQmxvY2sgJiYgaGF2ZVRvU2hvd0RlZmZlcmluZ1wiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwibXQtMjBcIlxuICAgICAgOnZhbHVlPVwidCgnNW1pbnMubWVzc2FnZScpXCJcbiAgICAgIEBjbGljaz1cImRlZmVycmluZygpXCJcbiAgICAvPlxuICAgIDxwIGNsYXNzPVwiZGVzY3RpcHRpb25cIj57eyB0KCdkZWZlcnJpbmdEZXNjcmlwdGlvbi5tZXNzYWdlJykgfX08L3A+XG4gICAgPFByb21vQ2xlYXJZb3VUdWJlIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21RdWVyeSB9IGZyb20gJy4uL3V0aWxzL2Jsb2NrLXBhZ2UnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgQkxPQ0tfREVGRVJSQUxfREVGQVVMVCwgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgY29udmVydExpbWl0VGltZVRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcbmltcG9ydCBQcm9tb0NsZWFyWW91VHViZSBmcm9tICcuLi9jb21wb25lbnRzL1Byb21vQ2xlYXJZb3VUdWJlLnZ1ZSc7XG5pbXBvcnQgeyBjYW5EZWZlcmluZywgZGVmZXJpbmcgfSBmcm9tICcuLi9mdW5jdGlvbnMvZGVmZXJMaXN0JztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5cbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcblxuY29uc3Qgd2ViU2l0ZSA9IHJlZjxzdHJpbmc+KCk7XG5jb25zdCBzb3VyY2VVcmwgPSByZWY8c3RyaW5nPigpO1xuY29uc3QgbGltaXRUaW1lID0gcmVmPG51bWJlcj4oKTtcbmNvbnN0IGZhdmljb24gPSByZWY8c3RyaW5nPigpO1xuY29uc3QgbGltaXRUaW1lU3RyaW5nID0gcmVmPHN0cmluZz4oKTtcbmNvbnN0IHN1bW1hcnlDb3VudGVyID0gcmVmPG51bWJlcj4oKTtcbmNvbnN0IGFsbG93RGVmZXJyaW5nQmxvY2sgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IGhhdmVUb1Nob3dEZWZmZXJpbmcgPSByZWY8Ym9vbGVhbj4oKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnlPYmogPSBnZXRWYWx1ZUZyb21RdWVyeShsb2NhdGlvbi5ocmVmKTtcbiAgd2ViU2l0ZS52YWx1ZSA9IHF1ZXJ5T2JqLmRvbWFpbiA/PyAnJztcbiAgc291cmNlVXJsLnZhbHVlID0gcXVlcnlPYmoudXJsID8/ICcnO1xuICBsaW1pdFRpbWUudmFsdWUgPSBxdWVyeU9iai5saW1pdFRpbWU7XG4gIGZhdmljb24udmFsdWUgPSBxdWVyeU9iai5mYXZpY29uID8/ICcnO1xuICBsaW1pdFRpbWVTdHJpbmcudmFsdWUgPSBjb252ZXJ0TGltaXRUaW1lVG9TdHJpbmcocXVlcnlPYmoubGltaXRUaW1lKTtcbiAgc3VtbWFyeUNvdW50ZXIudmFsdWUgPSBxdWVyeU9iai5zdW1tYXJ5Q291bnRlciA/PyAwO1xuXG4gIGFsbG93RGVmZXJyaW5nQmxvY2sudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5CTE9DS19ERUZFUlJBTCxcbiAgICBCTE9DS19ERUZFUlJBTF9ERUZBVUxULFxuICApO1xuICBoYXZlVG9TaG93RGVmZmVyaW5nLnZhbHVlID0gYXdhaXQgY2FuRGVmZXJpbmcod2ViU2l0ZS52YWx1ZSk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZGVmZXJyaW5nKCkge1xuICBpZiAoXG4gICAgd2ViU2l0ZS52YWx1ZSAhPSB1bmRlZmluZWQgJiZcbiAgICBsaW1pdFRpbWUudmFsdWUgIT0gdW5kZWZpbmVkICYmXG4gICAgYWxsb3dEZWZlcnJpbmdCbG9jay52YWx1ZSAmJlxuICAgIGhhdmVUb1Nob3dEZWZmZXJpbmcudmFsdWVcbiAgKSB7XG4gICAgYXdhaXQgZGVmZXJpbmcod2ViU2l0ZS52YWx1ZSwgNSk7XG4gICAgaWYgKHNvdXJjZVVybC52YWx1ZSAhPSAnJykgd2luZG93Lm9wZW4oc291cmNlVXJsLnZhbHVlKTtcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmJsb2NrLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ibG9jay1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmJsb2NrLWNvbnRhaW5lciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdGF0cyBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG59XG50YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxudGFibGUgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGFibGUgLnZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kZXNjdGlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRhNGE0YTtcbn1cbi5mYXZpY29uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uc291cmNlLXVybCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgY29sb3I6IGdyZXk7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vcGFnZXMvQmxvY2sudnVlJztcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgaTE4biBmcm9tICcuL3BsdWdpbnMvaTE4bic7XG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChCbG9jayk7XG5hcHAudXNlKGkxOG4pO1xuYXBwLm1vdW50KCdib2R5Jyk7XG4iXSwi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
