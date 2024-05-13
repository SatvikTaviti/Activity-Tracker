var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { B as Browser } from "../browser-polyfill.js";
import { i as injectStorage, a as ranges, S as StorageParams, V as VIEW_TIME_IN_BADGE_DEFAULT, h as INTERVAL_INACTIVITY_DEFAULT, D as DARK_MODE_DEFAULT, B as BLOCK_DEFERRAL_DEFAULT, T as ThisWeekRange, j as SHOW_CHANGELOG_DEFAULT, k as InactivityInterval, m as todayLocalDate, n as TypeOfUrl, o as isDomainEquals, p as convertHHMMToSeconds, L as ListWithTime, q as convertSecondsToHHMM, s as DAILY_NOTIFICATION_DEFAULT, N as NOTIFICATION_MESSAGE_DEFAULT, u as DAILY_SUMMARY_NOTIFICATION_TIME_DEFAULT, P as PomodoroSounds, I as IS_POMODORO_ENABLED_DEFAULT, v as POMODORO_INTERVAL_WORK_DEFAULT, w as POMODORO_INTERVAL_REST_DEFAULT, x as POMODORO_FREQUENCY_DEFAULT, y as POMODORO_AUDIO_AFTER_WORK_DEFAULT, z as POMODORO_AUDIO_AFTER_REST_DEFAULT, A as POMODORO_AUDIO_AFTER_FINISHED_DEFAULT, l as logger, c as convertSummaryTimeToString, e as SettingsTab, E as StorageDeserializeParam, F as convertStringTimeIntervalToSeconds, G as convertHoursToTime, f as TypeOfList, H as getEnumValueTab, g as _imports_0$4 } from "../general.js";
import { i as applyDarkMode, m as useImportToCsv, c as useFile, F as FileType, n as injectTabsRepository, p as Favicon, q as extractHostname, f as useBadge, g as BadgeColor, h as BadgeIcon, r as isSameDay, B as ByDaysChart, o as openPage, t as getTypeOfUrl, _ as _sfc_main$e, d as _imports_0$3, C as Chart, v as CategoryScale, L as LinearScale, w as BarElement, x as plugin_title, y as plugin_tooltip, z as plugin_legend, A as Bar, j as TabList, k as _imports_5, l as oa } from "../dark.js";
import { d as defineComponent, o as openBlock, c as createElementBlock, m as createBlock, w as withCtx, F as Fragment, q as renderList, z as normalizeStyle, g as renderSlot, n as normalizeClass, a as createBaseVNode, s as createCommentVNode, A as resolveDynamicComponent, B as TransitionGroup, i as useI18n, r as ref, k as onMounted, l as resolveComponent, f as withDirectives, C as vModelCheckbox, u as unref, t as toDisplayString, D as vModelSelect, e as createVNode, _ as _export_sfc, E as vModelText, j as computed, b as createTextVNode, p as pushScopeId, h as popScopeId, G as watch, x as createApp, y as i18n } from "../i18n.js";
import { M as Messages } from "../messages.js";
import { P as PromoClearYouTube, u as useExtensionPage } from "../PromoClearYouTube.js";
const _imports_1$3 = "/s-dashboard.svg";
const _imports_2$1 = "/s-whitelist.svg";
const _imports_3$1 = "/s-limits.svg";
const _imports_4 = "/s-notifications.svg";
const _imports_6 = "/s-settings.svg";
function M(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, i) {
    var s = t.get(e);
    s ? s.push(i) : t.set(e, [i]);
  }, off: function(e, i) {
    var s = t.get(e);
    s && (i ? s.splice(s.indexOf(i) >>> 0, 1) : t.set(e, []));
  }, emit: function(e, i) {
    var s = t.get(e);
    s && s.slice().map(function(n) {
      n(i);
    }), (s = t.get("*")) && s.slice().map(function(n) {
      n(e, i);
    });
  } };
}
const d = M(), C = /* @__PURE__ */ new Map(), w = {
  x: ["left", "center", "right"],
  y: ["top", "bottom"]
}, R = ((t) => () => t++)(0), V = (t) => typeof t != "string" ? [] : t.split(/\s+/gi).filter((e) => e), W = (t) => {
  typeof t == "string" && (t = V(t));
  let e = null, i = null;
  return t.forEach((s) => {
    w.y.indexOf(s) !== -1 && (i = s), w.x.indexOf(s) !== -1 && (e = s);
  }), { x: e, y: i };
};
class Y {
  constructor(e, i, s) {
    this.remaining = i, this.callback = e, this.notifyItem = s, this.resume();
  }
  pause() {
    clearTimeout(this.notifyItem.timer), this.remaining -= Date.now() - this.start;
  }
  resume() {
    this.start = Date.now(), clearTimeout(this.notifyItem.timer), this.notifyItem.timer = setTimeout(this.callback, this.remaining);
  }
}
const m = {
  position: ["top", "right"],
  cssAnimation: "vn-fade",
  velocityAnimation: {
    enter: (t) => ({
      height: [t.clientHeight, 0],
      opacity: [1, 0]
    }),
    leave: {
      height: 0,
      opacity: [0, 1]
    }
  }
}, j = defineComponent({
  name: "velocity-group",
  emits: ["after-leave", "leave", "enter"],
  methods: {
    enter(t, e) {
      this.$emit("enter", t, e);
    },
    leave(t, e) {
      this.$emit("leave", t, e);
    },
    afterLeave() {
      this.$emit("after-leave");
    }
  }
}), v = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
};
function G(t, e, i, s, n, c) {
  return openBlock(), createBlock(TransitionGroup, {
    tag: "span",
    css: false,
    onEnter: t.enter,
    onLeave: t.leave,
    onAfterLeave: t.afterLeave
  }, {
    default: withCtx(() => [
      renderSlot(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["onEnter", "onLeave", "onAfterLeave"]);
}
const z = /* @__PURE__ */ v(j, [["render", G]]), F = defineComponent({
  name: "css-group",
  inheritAttrs: false,
  props: {
    name: { type: String, required: true }
  }
});
function P(t, e, i, s, n, c) {
  return openBlock(), createBlock(TransitionGroup, {
    tag: "span",
    name: t.name
  }, {
    default: withCtx(() => [
      renderSlot(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["name"]);
}
const q = /* @__PURE__ */ v(F, [["render", P]]), h = "[-+]?[0-9]*.?[0-9]+", L = [
  {
    name: "px",
    regexp: new RegExp(`^${h}px$`)
  },
  {
    name: "%",
    regexp: new RegExp(`^${h}%$`)
  },
  /**
   * Fallback option
   * If no suffix specified, assigning "px"
   */
  {
    name: "px",
    regexp: new RegExp(`^${h}$`)
  }
], J = (t) => {
  if (t === "auto")
    return {
      type: t,
      value: 0
    };
  for (let e = 0; e < L.length; e++) {
    const i = L[e];
    if (i.regexp.test(t))
      return {
        type: i.name,
        value: parseFloat(t)
      };
  }
  return {
    type: "",
    value: t
  };
}, K = (t) => {
  switch (typeof t) {
    case "number":
      return { type: "px", value: t };
    case "string":
      return J(t);
    default:
      return { type: "", value: t };
  }
}, f = {
  IDLE: 0,
  DESTROYED: 2
}, Q = defineComponent({
  name: "notifications",
  components: {
    VelocityGroup: z,
    CssGroup: q
  },
  props: {
    group: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 300
    },
    reverse: {
      type: Boolean,
      default: false
    },
    position: {
      type: [String, Array],
      default: m.position
    },
    classes: {
      type: String,
      default: "vue-notification"
    },
    animationType: {
      type: String,
      default: "css"
    },
    animation: {
      type: Object,
      default: m.velocityAnimation
    },
    animationName: {
      type: String,
      default: m.cssAnimation
    },
    speed: {
      type: Number,
      default: 300
    },
    /* Todo */
    cooldown: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 3e3
    },
    delay: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1 / 0
    },
    ignoreDuplicates: {
      type: Boolean,
      default: false
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", "destroy", "start"],
  data() {
    return {
      list: [],
      velocity: C.get("velocity"),
      timerControl: null
    };
  },
  computed: {
    actualWidth() {
      return K(this.width);
    },
    isVA() {
      return this.animationType === "velocity";
    },
    componentName() {
      return this.isVA ? "velocity-group" : "css-group";
    },
    styles() {
      const { x: t, y: e } = W(this.position), i = this.actualWidth.value, s = this.actualWidth.type, n = {
        width: i + s
      };
      return e && (n[e] = "0px"), t && (t === "center" ? n.left = `calc(50% - ${+i / 2}${s})` : n[t] = "0px"), n;
    },
    active() {
      return this.list.filter((t) => t.state !== f.DESTROYED);
    },
    botToTop() {
      return this.styles.hasOwnProperty("bottom");
    }
  },
  mounted() {
    d.on("add", this.addItem), d.on("close", this.closeItem);
  },
  methods: {
    destroyIfNecessary(t) {
      this.$emit("click", t), this.closeOnClick && this.destroy(t);
    },
    pauseTimeout() {
      var t;
      this.pauseOnHover && ((t = this.timerControl) == null || t.pause());
    },
    resumeTimeout() {
      var t;
      this.pauseOnHover && ((t = this.timerControl) == null || t.resume());
    },
    addItem(t = {}) {
      if (t.group || (t.group = ""), t.data || (t.data = {}), this.group !== t.group)
        return;
      if (t.clean || t.clear) {
        this.destroyAll();
        return;
      }
      const e = typeof t.duration == "number" ? t.duration : this.duration, i = typeof t.speed == "number" ? t.speed : this.speed, s = typeof t.ignoreDuplicates == "boolean" ? t.ignoreDuplicates : this.ignoreDuplicates, { title: n, text: c, type: o, data: l, id: I } = t, r = {
        id: I || R(),
        title: n,
        text: c,
        type: o,
        state: f.IDLE,
        speed: i,
        length: e + 2 * i,
        data: l
      };
      e >= 0 && (this.timerControl = new Y(() => this.destroy(r), r.length, r));
      const O = this.reverse ? !this.botToTop : this.botToTop;
      let u = -1;
      const S = this.active.some((E) => E.title === t.title && E.text === t.text);
      (!s || !S) && (O ? (this.list.push(r), this.$emit("start", r), this.active.length > this.max && (u = 0)) : (this.list.unshift(r), this.$emit("start", r), this.active.length > this.max && (u = this.active.length - 1)), u !== -1 && this.destroy(this.active[u]));
    },
    closeItem(t) {
      this.destroyById(t);
    },
    notifyClass(t) {
      return [
        "vue-notification-template",
        this.classes,
        t.type || ""
      ];
    },
    notifyWrapperStyle(t) {
      return this.isVA ? void 0 : { transition: `all ${t.speed}ms` };
    },
    destroy(t) {
      clearTimeout(t.timer), t.state = f.DESTROYED, this.clean(), this.$emit("destroy", t);
    },
    destroyById(t) {
      const e = this.list.find((i) => i.id === t);
      e && this.destroy(e);
    },
    destroyAll() {
      this.active.forEach(this.destroy);
    },
    getAnimation(t, e) {
      var s;
      const i = (s = this.animation) == null ? void 0 : s[t];
      return typeof i == "function" ? i.call(this, e) : i;
    },
    enter(t, e) {
      if (!this.isVA)
        return;
      const i = this.getAnimation("enter", t);
      this.velocity(t, i, {
        duration: this.speed,
        complete: e
      });
    },
    leave(t, e) {
      if (!this.isVA)
        return;
      const i = this.getAnimation("leave", t);
      this.velocity(t, i, {
        duration: this.speed,
        complete: e
      });
    },
    clean() {
      this.list = this.list.filter((t) => t.state !== f.DESTROYED);
    }
  }
});
const U = ["data-id"], X = ["onClick"], Z = ["innerHTML"], tt = ["innerHTML"];
function et(t, e, i, s, n, c) {
  return openBlock(), createElementBlock("div", {
    class: "vue-notification-group",
    style: normalizeStyle(t.styles)
  }, [
    (openBlock(), createBlock(resolveDynamicComponent(t.componentName), {
      name: t.animationName,
      onEnter: t.enter,
      onLeave: t.leave,
      onAfterLeave: t.clean
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.active, (o) => (openBlock(), createElementBlock("div", {
          key: o.id,
          class: "vue-notification-wrapper",
          style: normalizeStyle(t.notifyWrapperStyle(o)),
          "data-id": o.id,
          onMouseenter: e[0] || (e[0] = (...l) => t.pauseTimeout && t.pauseTimeout(...l)),
          onMouseleave: e[1] || (e[1] = (...l) => t.resumeTimeout && t.resumeTimeout(...l))
        }, [
          renderSlot(t.$slots, "body", {
            class: normalizeClass([t.classes, o.type]),
            item: o,
            close: () => t.destroy(o)
          }, () => [
            createBaseVNode("div", {
              class: normalizeClass(t.notifyClass(o)),
              onClick: (l) => t.destroyIfNecessary(o)
            }, [
              o.title ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "notification-title",
                innerHTML: o.title
              }, null, 8, Z)) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: "notification-content",
                innerHTML: o.text
              }, null, 8, tt)
            ], 10, X)
          ])
        ], 44, U))), 128))
      ]),
      _: 3
    }, 40, ["name", "onEnter", "onLeave", "onAfterLeave"]))
  ], 4);
}
const it = /* @__PURE__ */ v(Q, [["render", et]]), A = (t) => {
  typeof t == "string" && (t = { title: "", text: t }), typeof t == "object" && d.emit("add", t);
};
A.close = (t) => {
  d.emit("close", t);
};
const rt = () => ({ notify: A });
function st(t, e = {}) {
  Object.entries(e).forEach((s) => C.set(...s));
  const i = e.name || "notify";
  t.config.globalProperties["$" + i] = A, t.component(e.componentName || "Notifications", it);
}
const at = {
  install: st
};
(function() {
  var o;
  try {
    if (typeof document != "undefined") {
      var e = document.createElement("style");
      e.nonce = (o = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : o.content, e.appendChild(document.createTextNode(".vue-notification-group{display:block;position:fixed;z-index:5000}.vue-notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification-title{font-weight:600}.vue-notification-template{display:block;box-sizing:border-box;background:white;text-align:left}.vue-notification{display:block;box-sizing:border-box;text-align:left;font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44A4FC;border-left:5px solid #187FE7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#E54D42;border-left-color:#b82e24}.vue-notification.success{background:#68CD86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter-from,.vn-fade-leave-to{opacity:0}")), document.head.appendChild(e);
    }
  } catch (i) {
    console.error("vite-plugin-css-injected-by-js", i);
  }
})();
async function useRemoveAllData() {
  const storage = injectStorage();
  await storage.saveIntervalList([]);
  await Browser.runtime.sendMessage(Messages.ClearAllData);
}
async function useRestoreData(json) {
  if (json != null && json != void 0 && json != "") {
    const data = JSON.parse(json);
    await Browser.runtime.sendMessage({
      message: Messages.Restore,
      data
    });
  }
}
const _hoisted_1$d = { class: "settings-item" };
const _hoisted_2$b = { class: "setting-header" };
const _hoisted_3$b = { class: "description" };
const _hoisted_4$a = { class: "settings-item" };
const _hoisted_5$a = { class: "setting-header" };
const _hoisted_6$a = { class: "description" };
const _hoisted_7$9 = { class: "settings-item" };
const _hoisted_8$7 = { class: "setting-header" };
const _hoisted_9$7 = { class: "settings-item" };
const _hoisted_10$7 = { class: "setting-header d-inline-block" };
const _hoisted_11$5 = { class: "d-inline-block ml-10" };
const _hoisted_12$5 = ["value"];
const _hoisted_13$5 = ["value"];
const _hoisted_14$3 = ["value"];
const _hoisted_15$3 = ["value"];
const _hoisted_16$2 = ["value"];
const _hoisted_17$2 = ["value"];
const _hoisted_18$2 = ["value"];
const _hoisted_19$2 = ["value"];
const _hoisted_20$1 = { class: "description" };
const _hoisted_21$1 = { class: "settings-item" };
const _hoisted_22$1 = { class: "setting-header d-inline-block" };
const _hoisted_23$1 = { class: "description" };
const _hoisted_24$1 = { class: "export-block" };
const _hoisted_25$1 = ["onClick"];
const _hoisted_26$1 = ["value"];
const _hoisted_27$1 = { class: "settings-item" };
const _hoisted_28$1 = { class: "setting-header d-inline-block" };
const _hoisted_29$1 = { class: "description" };
const _hoisted_30$1 = ["value"];
const _hoisted_31$1 = { class: "settings-item" };
const _hoisted_32$1 = { class: "setting-header d-inline-block" };
const _hoisted_33$1 = { class: "description" };
const _hoisted_34$1 = ["value"];
const _hoisted_35$1 = ["value"];
const _hoisted_36$1 = { class: "settings-item" };
const _hoisted_37$1 = { class: "setting-header" };
const _hoisted_38 = { class: "description" };
const _hoisted_39 = {
  key: 0,
  id: "removeAllConfirmModal",
  class: "modal"
};
const _hoisted_40 = { class: "modal-content" };
const _hoisted_41 = { class: "text-center" };
const _hoisted_42 = { class: "text-center" };
const _hoisted_43 = ["value"];
const _hoisted_44 = ["value"];
const __default__$c = {
  name: "GeneralSettings"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const notification = rt();
    const viewTimeInBadge = ref();
    const intervalInactivity = ref();
    const allowDeferringBlock = ref();
    const darkMode = ref();
    const selectedDate = ref();
    const presetRanges = ranges();
    const needToConfirmDeleteAllData = ref();
    const showChangelog = ref();
    const restoreFile = ref();
    onMounted(async () => {
      viewTimeInBadge.value = await settingsStorage.getValue(
        StorageParams.VIEW_TIME_IN_BADGE,
        VIEW_TIME_IN_BADGE_DEFAULT
      );
      intervalInactivity.value = await settingsStorage.getValue(
        StorageParams.INTERVAL_INACTIVITY,
        INTERVAL_INACTIVITY_DEFAULT
      );
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      allowDeferringBlock.value = await settingsStorage.getValue(
        StorageParams.BLOCK_DEFERRAL,
        BLOCK_DEFERRAL_DEFAULT
      );
      selectedDate.value = ThisWeekRange;
      showChangelog.value = await settingsStorage.getValue(
        StorageParams.SHOW_CHANGELOG,
        SHOW_CHANGELOG_DEFAULT
      );
    });
    async function onChange(storageParam, target) {
      if (target != null)
        await save(
          storageParam,
          storageParam == StorageParams.INTERVAL_INACTIVITY ? Number(target.value) : target.checked
        );
      if (storageParam == StorageParams.DARK_MODE)
        applyDarkMode(target.checked);
    }
    async function save(storageParam, value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam, value);
    }
    async function handleDate(modelData) {
      selectedDate.value = modelData;
    }
    async function exportToCsv() {
      var _a, _b;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      if (dateFrom == void 0 || dateTo == void 0) {
        notification.notify({
          title: "No time period selected",
          type: "warn"
        });
      } else {
        const csv = await useImportToCsv(dateFrom, dateTo);
        useFile(
          csv,
          FileType.CSV,
          `websites_${dateFrom.toLocaleDateString()}-${dateTo.toLocaleDateString()}.csv`
        );
      }
    }
    async function removeAll() {
      needToConfirmDeleteAllData.value = true;
    }
    async function removeAllConfirm() {
      await useRemoveAllData();
      needToConfirmDeleteAllData.value = false;
    }
    function cancel() {
      needToConfirmDeleteAllData.value = false;
    }
    async function backup() {
      const repo = await injectTabsRepository();
      const tabs = repo.getTabs();
      const json = JSON.stringify(tabs);
      useFile(json, FileType.JSON, `backup-${todayLocalDate()}.json`);
    }
    function restore() {
      restoreFile.value.click();
    }
    function restoreFileUpload() {
      try {
        const file = restoreFile.value.files[0];
        if (file != null && file.type === FileType.JSON) {
          var reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.onload = async (readerEvent) => {
            var _a;
            if (readerEvent != null) {
              let content = (_a = readerEvent.target) == null ? void 0 : _a.result;
              if (content != null) {
                await useRestoreData(content);
              }
            }
          };
        } else {
          notification.notify({
            title: "Wrong restore file format",
            type: "warn"
          });
        }
      } catch {
        notification.notify({
          title: "Wrong restore file format",
          type: "warn"
        });
      }
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$d, [
          createBaseVNode("label", _hoisted_2$b, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "viewTimeInBadge",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => viewTimeInBadge.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => onChange(unref(StorageParams).VIEW_TIME_IN_BADGE, $event.target))
            }, null, 544), [
              [vModelCheckbox, viewTimeInBadge.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("viewTimeInBadge.message")), 1),
            createBaseVNode("p", _hoisted_3$b, toDisplayString(unref(t)("viewTimeInBadge.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$a, [
          createBaseVNode("label", _hoisted_5$a, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "blockDeferral",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => allowDeferringBlock.value = $event),
              onChange: _cache[3] || (_cache[3] = ($event) => onChange(unref(StorageParams).BLOCK_DEFERRAL, $event.target))
            }, null, 544), [
              [vModelCheckbox, allowDeferringBlock.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("allowDeferringBlock.message")), 1),
            createBaseVNode("p", _hoisted_6$a, toDisplayString(unref(t)("allowDeferringBlock.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$9, [
          createBaseVNode("label", _hoisted_8$7, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "darkMode",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => darkMode.value = $event),
              onChange: _cache[5] || (_cache[5] = ($event) => onChange(unref(StorageParams).DARK_MODE, $event.target))
            }, null, 544), [
              [vModelCheckbox, darkMode.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("darkTheme.message")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_9$7, [
          createBaseVNode("label", _hoisted_10$7, toDisplayString(unref(t)("intervalInactivity.message")), 1),
          createBaseVNode("div", _hoisted_11$5, [
            withDirectives(createBaseVNode("select", {
              class: "option",
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => intervalInactivity.value = $event),
              onChange: _cache[7] || (_cache[7] = ($event) => onChange(unref(StorageParams).INTERVAL_INACTIVITY, $event.target))
            }, [
              createBaseVNode("option", {
                value: unref(InactivityInterval).Seconds_30
              }, "30 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_12$5),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Seconds_45
              }, "45 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_13$5),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_1
              }, "1 " + toDisplayString(unref(t)("min.message")), 9, _hoisted_14$3),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_2
              }, "2 " + toDisplayString(unref(t)("2min.message")), 9, _hoisted_15$3),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_5
              }, "5 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_16$2),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_10
              }, "10 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_17$2),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_20
              }, "20 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_18$2),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_30
              }, "30 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_19$2)
            ], 544), [
              [vModelSelect, intervalInactivity.value]
            ])
          ]),
          createBaseVNode("p", _hoisted_20$1, toDisplayString(unref(t)("intervalInactivity.description")), 1)
        ]),
        createBaseVNode("div", _hoisted_21$1, [
          createBaseVNode("label", _hoisted_22$1, toDisplayString(unref(t)("exportToCsvSetting.message")), 1),
          createBaseVNode("p", _hoisted_23$1, toDisplayString(unref(t)("exportToCsvSetting.description")), 1),
          createBaseVNode("div", _hoisted_24$1, [
            createVNode(_component_VueDatePicker, {
              range: "",
              "enable-time-picker": false,
              class: "date-picker",
              modelValue: selectedDate.value,
              "onUpdate:modelValue": [
                _cache[8] || (_cache[8] = ($event) => selectedDate.value = $event),
                handleDate
              ],
              "preset-ranges": unref(presetRanges)
            }, {
              yearly: withCtx(({ label, range, presetDateRange }) => [
                createBaseVNode("span", {
                  onClick: ($event) => presetDateRange(range)
                }, toDisplayString(label), 9, _hoisted_25$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"]),
            createBaseVNode("input", {
              type: "button",
              value: unref(t)("exportToCsv.message"),
              onClick: _cache[9] || (_cache[9] = ($event) => exportToCsv())
            }, null, 8, _hoisted_26$1)
          ])
        ]),
        createBaseVNode("div", _hoisted_27$1, [
          createBaseVNode("label", _hoisted_28$1, toDisplayString(unref(t)("removeAllData.message")), 1),
          createBaseVNode("p", _hoisted_29$1, toDisplayString(unref(t)("removeAllData.description")), 1),
          createBaseVNode("input", {
            type: "button",
            value: unref(t)("remove.message"),
            onClick: _cache[10] || (_cache[10] = ($event) => removeAll())
          }, null, 8, _hoisted_30$1)
        ]),
        createBaseVNode("div", _hoisted_31$1, [
          createBaseVNode("label", _hoisted_32$1, toDisplayString(unref(t)("backupAndRestore.message")), 1),
          createBaseVNode("p", _hoisted_33$1, toDisplayString(unref(t)("backupAndRestore.description")), 1),
          createBaseVNode("input", {
            type: "button",
            value: unref(t)("backup.message"),
            onClick: _cache[11] || (_cache[11] = ($event) => backup())
          }, null, 8, _hoisted_34$1),
          createBaseVNode("input", {
            type: "file",
            ref_key: "restoreFile",
            ref: restoreFile,
            style: { "display": "none" },
            onChange: _cache[12] || (_cache[12] = ($event) => restoreFileUpload()),
            accept: "application/json"
          }, null, 544),
          createBaseVNode("input", {
            type: "button",
            class: "ml-10",
            value: unref(t)("restore.message"),
            onClick: _cache[13] || (_cache[13] = ($event) => restore())
          }, null, 8, _hoisted_35$1)
        ]),
        createBaseVNode("div", _hoisted_36$1, [
          createBaseVNode("label", _hoisted_37$1, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "showChangelog",
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => showChangelog.value = $event),
              onChange: _cache[15] || (_cache[15] = ($event) => onChange(unref(StorageParams).SHOW_CHANGELOG, $event.target))
            }, null, 544), [
              [vModelCheckbox, showChangelog.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("showChangelog.message")), 1),
            createBaseVNode("p", _hoisted_38, toDisplayString(unref(t)("showChangelog.description")), 1)
          ])
        ]),
        needToConfirmDeleteAllData.value ? (openBlock(), createElementBlock("div", _hoisted_39, [
          createBaseVNode("div", _hoisted_40, [
            createBaseVNode("p", _hoisted_41, toDisplayString(unref(t)("removeAllDataConfirm.message")), 1),
            createBaseVNode("div", _hoisted_42, [
              createBaseVNode("input", {
                type: "button",
                class: "alert",
                value: unref(t)("remove.message"),
                onClick: _cache[16] || (_cache[16] = ($event) => removeAllConfirm())
              }, null, 8, _hoisted_43),
              createBaseVNode("input", {
                type: "button",
                class: "info ml-10",
                value: unref(t)("cancel.message"),
                onClick: _cache[17] || (_cache[17] = ($event) => cancel())
              }, null, 8, _hoisted_44)
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const GeneralSettings_vue_vue_type_style_index_0_scoped_626be72c_lang = "";
const GeneralSettings = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-626be72c"]]);
const _imports_0$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAigAAAIoBlCJR2wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFBSURBVDiNjZGxS0JRFIe/c68N2dhgWEFROji5lIQJahhB9Oe6aPgkiAJ3l0oSs62hUJf33j0tKvJ6zzzj4Xzf5f5+Mqmf3yPsitm63Wk/frLBTBvlrDq/ifJlEPaAojrfmzbK2Q1hDygCGWNCuRHhFcir87uz+sV+Ejy5KmXU+W0gDwytM3cCMKuWDjSlniqnwItRW0t3nsZRGLQDFIChDU11u/v8LouDdZIkGEBWX4mTOHFBEvxHEJUIDBSC5Z8jcKxgRfKgyvF89WFDU4nCAKk4gbP4KMFyoQRqxI+7NdHFSmA5YCzIEOHISejFVWwS4EVgl2JdReANyMVJZA28DGx2fXaooXgKJ0Qqlv/gxSRJZBN4ncSAtoCCwsBYja1qMelWbyRWawqDeSZNA3wDfWu1mm71RknwqsRarQJ94OcXgrPje7Q9MoQAAAAASUVORK5CYII=";
function getFavicon(url) {
  return `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
}
const _hoisted_1$c = { class: "title mt-0" };
const _hoisted_2$a = {
  readonly: "",
  class: "url-list"
};
const _hoisted_3$a = ["onClick"];
const _hoisted_4$9 = { class: "mt-20" };
const _hoisted_5$9 = ["placeholder"];
const _hoisted_6$9 = ["value", "disabled"];
const __default__$b = {
  name: "WhiteList"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  setup(__props) {
    const { t } = useI18n();
    const notification = rt();
    const settingsStorage = injectStorage();
    const whiteList = ref();
    const newWebsiteForWhiteList = ref();
    onMounted(async () => {
      whiteList.value = Object.values(await settingsStorage.getValue(StorageParams.BLACK_LIST, []));
    });
    function addToWhiteList() {
      var _a, _b;
      const existingItem = (_a = whiteList.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x), extractHostname(newWebsiteForWhiteList.value))
      );
      if (existingItem !== void 0) {
        notification.notify({
          title: "You have already added this site",
          type: "error"
        });
      } else {
        const newWebsite = extractHostname(newWebsiteForWhiteList.value);
        (_b = whiteList.value) == null ? void 0 : _b.push(newWebsite);
        save(whiteList.value);
        newWebsiteForWhiteList.value = "";
      }
    }
    function deleteFromWhiteList(url) {
      whiteList.value = whiteList.value.filter((x) => x != url);
      save(whiteList.value);
    }
    async function save(value) {
      if (value != void 0)
        await settingsStorage.saveValue(StorageParams.BLACK_LIST, value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1$c, toDisplayString(unref(t)("whiteList.message")), 1),
        createBaseVNode("ul", _hoisted_2$a, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(whiteList.value, (url, i) => {
            return openBlock(), createElementBlock("li", { key: i }, [
              createBaseVNode("div", null, [
                createBaseVNode("img", {
                  src: _imports_0$2,
                  height: "16",
                  onClick: ($event) => deleteFromWhiteList(url)
                }, null, 8, _hoisted_3$a),
                createVNode(Favicon, {
                  type: unref(TypeOfUrl).WebSite,
                  favicon: unref(getFavicon)(url)
                }, null, 8, ["type", "favicon"]),
                createBaseVNode("span", null, toDisplayString(url), 1)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_4$9, [
          withDirectives(createBaseVNode("input", {
            type: "text",
            class: "d-inline-block custom-width",
            placeholder: unref(t)("enterWebsite.message"),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newWebsiteForWhiteList.value = $event)
          }, null, 8, _hoisted_5$9), [
            [vModelText, newWebsiteForWhiteList.value]
          ]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn ml-10",
            value: unref(t)("addWebsite.message"),
            disabled: newWebsiteForWhiteList.value == null || newWebsiteForWhiteList.value == "",
            onClick: _cache[1] || (_cache[1] = ($event) => addToWhiteList())
          }, null, 8, _hoisted_6$9)
        ])
      ]);
    };
  }
});
const WhiteList_vue_vue_type_style_index_0_scoped_a38a67eb_lang = "";
const WhiteList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-a38a67eb"]]);
const _imports_1$2 = "/edit.svg";
class Restriction {
  constructor(domain, hours, minutes) {
    __publicField(this, "domain");
    __publicField(this, "time");
    this.domain = domain;
    this.time = convertHHMMToSeconds(hours, minutes);
  }
}
const _hoisted_1$b = {
  readonly: "",
  class: "url-list"
};
const _hoisted_2$9 = ["onClick"];
const _hoisted_3$9 = ["onClick"];
const _hoisted_4$8 = {
  key: 0,
  class: "time-value d-inline-block"
};
const _hoisted_5$8 = {
  key: 1,
  class: "blocked"
};
const _hoisted_6$8 = { class: "limits-time-block mt-20" };
const _hoisted_7$8 = ["disabled", "placeholder"];
const _hoisted_8$6 = ["value", "disabled"];
const _hoisted_9$6 = {
  key: 0,
  class: "mt-10"
};
const _hoisted_10$6 = { class: "block-checkbox" };
const __default__$a = {
  name: "ListWithTime"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
    type: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const notification = rt();
    const settingsStorage = injectStorage();
    const list = ref();
    const isEdit = ref();
    const time = ref({
      hours: 0,
      minutes: 30
    });
    const newWebsiteForList = ref();
    const storageParam = ref();
    const isCheckedCompletelyBlocked = computed(
      () => time.value != void 0 && time.value.hours == 0 && time.value.minutes == 0
    );
    const showCompletelyBlockValue = computed(
      () => props.type == ListWithTime.Limits && newWebsiteForList.value != void 0 && newWebsiteForList.value != ""
    );
    onMounted(async () => {
      switch (props.type) {
        case ListWithTime.Limits:
          list.value = Object.values(
            await settingsStorage.getValue(StorageParams.RESTRICTION_LIST, [])
          );
          storageParam.value = StorageParams.RESTRICTION_LIST;
          break;
        case ListWithTime.Notifications:
          list.value = Object.values(
            await settingsStorage.getValue(StorageParams.NOTIFICATION_LIST, [])
          );
          storageParam.value = StorageParams.NOTIFICATION_LIST;
          break;
      }
    });
    function addToList() {
      var _a, _b;
      const existingItem = (_a = list.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x.domain), extractHostname(newWebsiteForList.value))
      );
      if (existingItem !== void 0) {
        notification.notify({
          title: "You have already added this site",
          type: "error"
        });
      } else {
        const newLimit = new Restriction(
          extractHostname(newWebsiteForList.value),
          time.value.hours,
          time.value.minutes
        );
        (_b = list.value) == null ? void 0 : _b.push(newLimit);
        save(list.value);
        newWebsiteForList.value = "";
      }
    }
    function completelyBlock() {
      time.value.hours = 0;
      time.value.minutes = 0;
    }
    function completelyBlocked(time2) {
      return props.type == ListWithTime.Limits && time2 == 0;
    }
    function getTime(time2) {
      const timeObj = convertSecondsToHHMM(time2);
      return `${timeObj.hours}:${timeObj.minutes < 10 ? "0" + timeObj.minutes : timeObj.minutes}`;
    }
    const isDisabledSaving = computed(() => {
      var _a, _b;
      if (props.type == ListWithTime.Notifications && ((_a = time.value) == null ? void 0 : _a.hours) == 0 && ((_b = time.value) == null ? void 0 : _b.minutes) == 0)
        return true;
      return newWebsiteForList.value == "" || newWebsiteForList.value == void 0 || time.value == null;
    });
    function deleteFromList(url) {
      list.value = list.value.filter((x) => x.domain != url);
      save(list.value);
      newWebsiteForList.value = "";
      isEdit.value = false;
    }
    function editItemFromList(url, timeForUrl) {
      isEdit.value = true;
      newWebsiteForList.value = url;
      const timeObj = convertSecondsToHHMM(timeForUrl);
      time.value.hours = timeObj.hours;
      time.value.minutes = timeObj.minutes;
    }
    function editItem() {
      var _a;
      const existingItem = (_a = list.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x.domain), extractHostname(newWebsiteForList.value))
      );
      if (existingItem != void 0) {
        existingItem.time = convertHHMMToSeconds(time.value.hours, time.value.minutes);
        save(list.value);
        newWebsiteForList.value = "";
        isEdit.value = false;
      }
    }
    async function save(value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam.value, value);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("ul", _hoisted_1$b, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (limit, i) => {
            return openBlock(), createElementBlock("li", { key: i }, [
              createBaseVNode("div", null, [
                createBaseVNode("img", {
                  src: _imports_0$2,
                  height: "16",
                  onClick: ($event) => deleteFromList(limit.domain)
                }, null, 8, _hoisted_2$9),
                createBaseVNode("img", {
                  src: _imports_1$2,
                  height: "16",
                  onClick: ($event) => editItemFromList(limit.domain, limit.time)
                }, null, 8, _hoisted_3$9),
                createVNode(Favicon, {
                  type: unref(TypeOfUrl).WebSite,
                  favicon: unref(getFavicon)(limit.domain)
                }, null, 8, ["type", "favicon"]),
                createBaseVNode("span", null, toDisplayString(limit.domain), 1),
                createBaseVNode("div", null, [
                  !completelyBlocked(limit.time) ? (openBlock(), createElementBlock("p", _hoisted_4$8, toDisplayString(unref(t)("limit.message")) + " : " + toDisplayString(getTime(limit.time)), 1)) : createCommentVNode("", true),
                  completelyBlocked(limit.time) ? (openBlock(), createElementBlock("p", _hoisted_5$8, toDisplayString(unref(t)("completelyBlocked.message")), 1)) : createCommentVNode("", true)
                ])
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_6$8, [
          withDirectives(createBaseVNode("input", {
            type: "text",
            disabled: isEdit.value,
            class: "d-inline-block",
            placeholder: unref(t)("enterWebsite.message"),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newWebsiteForList.value = $event)
          }, null, 8, _hoisted_7$8), [
            [vModelText, newWebsiteForList.value]
          ]),
          createVNode(_component_VueDatePicker, {
            modelValue: time.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => time.value = $event),
            "time-picker": "",
            class: "date-picker height"
          }, null, 8, ["modelValue"]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn",
            value: !isEdit.value ? unref(t)("addWebsite.message") : unref(t)("save.message"),
            disabled: isDisabledSaving.value,
            onClick: _cache[2] || (_cache[2] = ($event) => isEdit.value ? editItem() : addToList())
          }, null, 8, _hoisted_8$6)
        ]),
        showCompletelyBlockValue.value ? (openBlock(), createElementBlock("div", _hoisted_9$6, [
          createBaseVNode("label", _hoisted_10$6, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "viewTimeInBadge",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isCheckedCompletelyBlocked.value = $event),
              onChange: completelyBlock
            }, null, 544), [
              [vModelCheckbox, isCheckedCompletelyBlocked.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("completelyBlocked.description")), 1)
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const ListWithTime_vue_vue_type_style_index_0_scoped_fbc84126_lang = "";
const ListWithTimeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-fbc84126"]]);
const _hoisted_1$a = { class: "title mt-0" };
const _hoisted_2$8 = { class: "description" };
const _hoisted_3$8 = { class: "description" };
const __default__$9 = {
  name: "Limits"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1$a, toDisplayString(unref(t)("limits.message")), 1),
        createBaseVNode("p", _hoisted_2$8, toDisplayString(unref(t)("limits.description")), 1),
        createBaseVNode("p", _hoisted_3$8, toDisplayString(unref(t)("limitsTip.message")), 1),
        createVNode(ListWithTimeComponent, {
          type: unref(ListWithTime).Limits
        }, null, 8, ["type"]),
        createVNode(PromoClearYouTube)
      ]);
    };
  }
});
const Limits_vue_vue_type_style_index_0_scoped_ef067dd9_lang = "";
const Limits = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-ef067dd9"]]);
const _hoisted_1$9 = { class: "settings-item" };
const _hoisted_2$7 = { class: "setting-header" };
const _hoisted_3$7 = { class: "description" };
const _hoisted_4$7 = { class: "settings-item" };
const _hoisted_5$7 = { class: "setting-header d-inline-block" };
const _hoisted_6$7 = { class: "settings-item" };
const _hoisted_7$7 = { class: "setting-header" };
const _hoisted_8$5 = { class: "description" };
const _hoisted_9$5 = { class: "settings-item" };
const _hoisted_10$5 = { class: "setting-header" };
const _hoisted_11$4 = { class: "description" };
const _hoisted_12$4 = ["placeholder"];
const _hoisted_13$4 = ["value", "disabled"];
const __default__$8 = {
  name: "DailyNotifications"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const showDailyNotifacation = ref();
    const dailyNotificationTime = ref();
    const notificationTime = ref();
    const notificationMessage = ref();
    onMounted(async () => {
      showDailyNotifacation.value = await settingsStorage.getValue(
        StorageParams.DAILY_NOTIFICATION,
        DAILY_NOTIFICATION_DEFAULT
      );
      notificationMessage.value = await settingsStorage.getValue(
        StorageParams.NOTIFICATION_MESSAGE,
        NOTIFICATION_MESSAGE_DEFAULT
      );
      dailyNotificationTime.value = await settingsStorage.getValue(
        StorageParams.DAILY_SUMMARY_NOTIFICATION_TIME,
        DAILY_SUMMARY_NOTIFICATION_TIME_DEFAULT
      );
      const timeObj = convertSecondsToHHMM(dailyNotificationTime.value);
      notificationTime.value = timeObj;
    });
    async function saveNotificationMessage() {
      save(StorageParams.NOTIFICATION_MESSAGE, notificationMessage.value);
    }
    async function handleDate(modelData) {
      if (modelData != null) {
        notificationTime.value = modelData;
        await save(
          StorageParams.DAILY_SUMMARY_NOTIFICATION_TIME,
          convertHHMMToSeconds(notificationTime.value.hours, notificationTime.value.minutes)
        );
        Browser.runtime.sendMessage(Messages.RescheduleJobs);
      }
    }
    async function onChange(storageParam, target) {
      if (target != null)
        await save(storageParam, target.checked);
    }
    async function save(storageParam, value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam, value);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$9, [
          createBaseVNode("label", _hoisted_2$7, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "blockDeferral",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showDailyNotifacation.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => onChange(unref(StorageParams).DAILY_NOTIFICATION, $event.target))
            }, null, 544), [
              [vModelCheckbox, showDailyNotifacation.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("showDailyNotifacation.message")), 1),
            createBaseVNode("p", _hoisted_3$7, toDisplayString(unref(t)("showDailyNotifacation.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$7, [
          createBaseVNode("p", _hoisted_5$7, toDisplayString(unref(t)("notificationTimeSetting.message")), 1),
          createVNode(_component_VueDatePicker, {
            modelValue: notificationTime.value,
            "onUpdate:modelValue": [
              _cache[2] || (_cache[2] = ($event) => notificationTime.value = $event),
              handleDate
            ],
            "time-picker": "",
            class: "date-picker d-inline-block"
          }, null, 8, ["modelValue"])
        ]),
        createBaseVNode("div", _hoisted_6$7, [
          createBaseVNode("label", _hoisted_7$7, toDisplayString(unref(t)("notificationTime.message")), 1),
          createBaseVNode("p", _hoisted_8$5, toDisplayString(unref(t)("notificationTime.description")), 1),
          createVNode(ListWithTimeComponent, {
            type: unref(ListWithTime).Notifications
          }, null, 8, ["type"])
        ]),
        createBaseVNode("div", _hoisted_9$5, [
          createBaseVNode("label", _hoisted_10$5, toDisplayString(unref(t)("notificationMessage.message")), 1),
          createBaseVNode("p", _hoisted_11$4, toDisplayString(unref(t)("notificationMessage.description")), 1),
          withDirectives(createBaseVNode("input", {
            type: "text",
            class: "",
            placeholder: unref(t)("enterNotification.message"),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => notificationMessage.value = $event)
          }, null, 8, _hoisted_12$4), [
            [vModelText, notificationMessage.value]
          ]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn ml-10 width",
            value: unref(t)("save.message"),
            disabled: notificationMessage.value == "",
            onClick: _cache[4] || (_cache[4] = ($event) => saveNotificationMessage())
          }, null, 8, _hoisted_13$4)
        ])
      ]);
    };
  }
});
const Notifications_vue_vue_type_style_index_0_scoped_bf210849_lang = "";
const DailyNotifications = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-bf210849"]]);
const _imports_0$1 = "/pomodoro.png";
const _imports_1$1 = "/pomodoro-rest.png";
const _imports_2 = "/stop.svg";
const _imports_3 = "/start.svg";
function playSound(sound) {
  const myAudio = new Audio(Browser.runtime.getURL(`assets/pomodoro-sounds/${sound}`));
  myAudio.play();
}
const _hoisted_1$8 = { class: "title-audio d-inline-block" };
const _hoisted_2$6 = ["value"];
const _hoisted_3$6 = ["value"];
const _hoisted_4$6 = ["value"];
const _hoisted_5$6 = ["value"];
const _hoisted_6$6 = ["value"];
const _hoisted_7$6 = ["value"];
const _hoisted_8$4 = ["value"];
const _hoisted_9$4 = ["value"];
const _hoisted_10$4 = ["value"];
const _hoisted_11$3 = ["value"];
const _hoisted_12$3 = ["value"];
const _hoisted_13$3 = ["value"];
const _hoisted_14$2 = ["value"];
const _hoisted_15$2 = { class: "preview" };
const __default__$7 = {
  name: "PomodoroSoundsSelector"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: {
    option: {},
    value: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const audioAfterPeriod = ref(props.value);
    function playAudio() {
      playSound(audioAfterPeriod.value);
    }
    async function onAudioChange(target) {
      await settingsStorage.saveValue(props.option, target.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$8, toDisplayString(unref(t)("pomodoroSoundAfter.message")), 1),
        withDirectives(createBaseVNode("select", {
          class: "option",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => audioAfterPeriod.value = $event),
          onChange: _cache[1] || (_cache[1] = ($event) => onAudioChange($event.target))
        }, [
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 1"]
          }, toDisplayString(unref(t)("sound.message")) + " 1", 9, _hoisted_2$6),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 2"]
          }, toDisplayString(unref(t)("sound.message")) + " 2", 9, _hoisted_3$6),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 3"]
          }, toDisplayString(unref(t)("sound.message")) + " 3", 9, _hoisted_4$6),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 4"]
          }, toDisplayString(unref(t)("sound.message")) + " 4", 9, _hoisted_5$6),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 5"]
          }, toDisplayString(unref(t)("sound.message")) + " 5", 9, _hoisted_6$6),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 6"]
          }, toDisplayString(unref(t)("sound.message")) + " 6", 9, _hoisted_7$6),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 7"]
          }, toDisplayString(unref(t)("sound.message")) + " 7", 9, _hoisted_8$4),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 8"]
          }, toDisplayString(unref(t)("sound.message")) + " 8", 9, _hoisted_9$4),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 9"]
          }, toDisplayString(unref(t)("sound.message")) + " 9", 9, _hoisted_10$4),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 10"]
          }, toDisplayString(unref(t)("sound.message")) + " 10", 9, _hoisted_11$3),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 11"]
          }, toDisplayString(unref(t)("sound.message")) + " 11", 9, _hoisted_12$3),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 12"]
          }, toDisplayString(unref(t)("sound.message")) + " 12", 9, _hoisted_13$3),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 13"]
          }, toDisplayString(unref(t)("sound.message")) + " 13", 9, _hoisted_14$2)
        ], 544), [
          [vModelSelect, audioAfterPeriod.value]
        ]),
        createBaseVNode("img", {
          src: _imports_3,
          height: "22",
          onClick: playAudio,
          class: "play"
        }),
        createBaseVNode("span", _hoisted_15$2, toDisplayString(unref(t)("clickToPreview.message")), 1)
      ], 64);
    };
  }
});
const PomodoroSoundsSelector_vue_vue_type_style_index_0_scoped_725e6873_lang = "";
const PomodoroSoundsSelector = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-725e6873"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-4e5050f6"), n = n(), popScopeId(), n);
const _hoisted_1$7 = { class: "title mt-0" };
const _hoisted_2$5 = { class: "description" };
const _hoisted_3$5 = { class: "explanation-block" };
const _hoisted_4$5 = { class: "explanation" };
const _hoisted_5$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "ml-5",
    src: _imports_0$1,
    height: "30"
  })
], -1));
const _hoisted_6$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "ml-5",
  src: _imports_1$1,
  height: "30"
}, null, -1));
const _hoisted_7$5 = { class: "explanation" };
const _hoisted_8$3 = { class: "explanation" };
const _hoisted_9$3 = { class: "pomodoro-block mt-20" };
const _hoisted_10$3 = { class: "title" };
const _hoisted_11$2 = { class: "pomodoro-block" };
const _hoisted_12$2 = { class: "pomodoro-block" };
const _hoisted_13$2 = { class: "title" };
const _hoisted_14$1 = { class: "pomodoro-block" };
const _hoisted_15$1 = { class: "pomodoro-block" };
const _hoisted_16$1 = { class: "title" };
const _hoisted_17$1 = { class: "pomodoro-block" };
const _hoisted_18$1 = {
  key: 0,
  class: "ml-5",
  src: _imports_2,
  height: "20"
};
const _hoisted_19$1 = {
  key: 1,
  class: "ml-5",
  src: _imports_3,
  height: "22"
};
const __default__$6 = {
  name: "Pomodoro"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const workTime = ref({
      hours: 0,
      minutes: 25
    });
    const restTime = ref({
      hours: 0,
      minutes: 5
    });
    const frequency = ref(3);
    const isEnabled = ref();
    const audioAfterWork = ref();
    const audioAfterRest = ref();
    const audioAfterFinished = ref();
    const isDisabled = computed(
      () => frequency.value <= 0 || timeIsEmpty(workTime) || timeIsEmpty(restTime)
    );
    onMounted(async () => {
      isEnabled.value = await settingsStorage.getValue(
        StorageParams.IS_POMODORO_ENABLED,
        IS_POMODORO_ENABLED_DEFAULT
      );
      workTime.value = convertSecondsToHHMM(
        await settingsStorage.getValue(
          StorageParams.POMODORO_INTERVAL_WORK,
          POMODORO_INTERVAL_WORK_DEFAULT
        )
      );
      restTime.value = convertSecondsToHHMM(
        await settingsStorage.getValue(
          StorageParams.POMODORO_INTERVAL_REST,
          POMODORO_INTERVAL_REST_DEFAULT
        )
      );
      frequency.value = await settingsStorage.getValue(
        StorageParams.POMODORO_FREQUENCY,
        POMODORO_FREQUENCY_DEFAULT
      );
      audioAfterWork.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_WORK,
        POMODORO_AUDIO_AFTER_WORK_DEFAULT
      );
      audioAfterRest.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_REST,
        POMODORO_AUDIO_AFTER_REST_DEFAULT
      );
      audioAfterFinished.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_FINISHED,
        POMODORO_AUDIO_AFTER_FINISHED_DEFAULT
      );
    });
    function timeIsEmpty(time) {
      return time.value == void 0 || time.value.hours == 0 && time.value.minutes == 0;
    }
    async function changeStatus() {
      await settingsStorage.saveValue(StorageParams.IS_POMODORO_ENABLED, !isEnabled.value);
      await settingsStorage.saveValue(
        StorageParams.POMODORO_INTERVAL_WORK,
        convertHHMMToSeconds(workTime.value.hours, workTime.value.minutes)
      );
      await settingsStorage.saveValue(
        StorageParams.POMODORO_INTERVAL_REST,
        convertHHMMToSeconds(restTime.value.hours, restTime.value.minutes)
      );
      await settingsStorage.saveValue(StorageParams.POMODORO_START_TIME, (/* @__PURE__ */ new Date()).toString());
      await settingsStorage.saveValue(StorageParams.POMODORO_FREQUENCY, frequency.value);
      isEnabled.value = !isEnabled.value;
      if (isEnabled.value)
        await useBadge({
          text: null,
          color: BadgeColor.none,
          icon: BadgeIcon.pomodoroWorkingTime
        });
      else {
        await settingsStorage.saveValue(StorageParams.POMODORO_START_TIME, null);
        await useBadge({
          text: null,
          color: BadgeColor.none,
          icon: BadgeIcon.default
        });
      }
      logger.log(`Change pomodoro status to ${String(isEnabled.value).toUpperCase()}`);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$7, toDisplayString(unref(t)("pomodoro.message")), 1),
        createBaseVNode("p", _hoisted_2$5, toDisplayString(unref(t)("pomodoro.description")), 1),
        createBaseVNode("div", _hoisted_3$5, [
          createBaseVNode("p", _hoisted_4$5, [
            createTextVNode(toDisplayString(unref(t)("pomodoroExplanationIcon.message")) + " ", 1),
            _hoisted_5$5,
            createTextVNode(". " + toDisplayString(unref(t)("pomodoroExplanationIcon.description")) + " ", 1),
            _hoisted_6$5,
            createTextVNode(". ")
          ]),
          createBaseVNode("p", _hoisted_7$5, toDisplayString(unref(t)("pomodoroExplanationTime.message")), 1),
          createBaseVNode("p", _hoisted_8$3, toDisplayString(unref(t)("pomodoroExplanationStop.message")), 1)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(isEnabled.value ? "disabled" : "")
        }, [
          createBaseVNode("div", _hoisted_9$3, [
            createBaseVNode("p", _hoisted_10$3, toDisplayString(unref(t)("pomodoroWork.message")), 1),
            createVNode(_component_VueDatePicker, {
              modelValue: workTime.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => workTime.value = $event),
              "time-picker": "",
              class: "date-picker"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_11$2, [
            audioAfterWork.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_WORK,
              value: audioAfterWork.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_12$2, [
            createBaseVNode("p", _hoisted_13$2, toDisplayString(unref(t)("pomodoroRest.message")), 1),
            createVNode(_component_VueDatePicker, {
              modelValue: restTime.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => restTime.value = $event),
              "time-picker": "",
              class: "date-picker"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_14$1, [
            audioAfterRest.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_REST,
              value: audioAfterRest.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_15$1, [
            createBaseVNode("p", _hoisted_16$1, toDisplayString(unref(t)("pomodoroFrequency.message")), 1),
            withDirectives(createBaseVNode("input", {
              type: "number",
              class: "frequency",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => frequency.value = $event)
            }, null, 512), [
              [vModelText, frequency.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_17$1, [
            audioAfterFinished.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_FINISHED,
              value: audioAfterFinished.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ])
        ], 2),
        createBaseVNode("button", {
          class: normalizeClass(["d-inline-block mt-15", [isEnabled.value ? "stop" : "start", isDisabled.value ? "disabled" : ""]]),
          onClick: _cache[3] || (_cache[3] = ($event) => changeStatus())
        }, [
          isEnabled.value ? (openBlock(), createElementBlock("img", _hoisted_18$1)) : createCommentVNode("", true),
          !isEnabled.value ? (openBlock(), createElementBlock("img", _hoisted_19$1)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(!isEnabled.value ? unref(t)("start.message") : unref(t)("stop.message")), 1)
        ], 2)
      ], 64);
    };
  }
});
const Pomodoro_vue_vue_type_style_index_0_scoped_4e5050f6_lang = "";
const Pomodoro = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4e5050f6"]]);
const _hoisted_1$6 = { class: "container" };
const _hoisted_2$4 = { class: "block" };
const _hoisted_3$4 = { class: "title" };
const _hoisted_4$4 = { class: "value" };
const _hoisted_5$4 = { class: "block" };
const _hoisted_6$4 = { class: "title" };
const _hoisted_7$4 = { class: "value" };
const _hoisted_8$2 = { class: "block" };
const _hoisted_9$2 = { class: "title" };
const _hoisted_10$2 = { class: "value" };
const __default__$5 = {
  name: "WebsiteStatsDetails"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    details: {}
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("p", _hoisted_3$4, toDisplayString(unref(t)("allTime.message")), 1),
          createBaseVNode("p", _hoisted_4$4, toDisplayString(unref(convertSummaryTimeToString)(_ctx.details.summaryTime)), 1)
        ]),
        createBaseVNode("div", _hoisted_5$4, [
          createBaseVNode("p", _hoisted_6$4, toDisplayString(unref(t)("sessions.message")), 1),
          createBaseVNode("p", _hoisted_7$4, toDisplayString(_ctx.details.sessions), 1)
        ]),
        createBaseVNode("div", _hoisted_8$2, [
          createBaseVNode("p", _hoisted_9$2, toDisplayString(unref(t)("averageDailyUsage.message")), 1),
          createBaseVNode("p", _hoisted_10$2, toDisplayString(unref(convertSummaryTimeToString)(_ctx.details.averageTime)), 1)
        ])
      ]);
    };
  }
});
const WebsiteStatsDetails_vue_vue_type_style_index_0_scoped_772a5983_lang = "";
const WebsiteStatsDetails = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-772a5983"]]);
async function useTabStatsByDays(dateFrom, dateTo, domain) {
  const repo = await injectTabsRepository();
  const tab = repo.getTab(domain);
  let daysTabs = [];
  if (tab == void 0)
    return null;
  const isTheSameDay = isSameDay(dateFrom, dateTo);
  const unSortedTabsByDays = isTheSameDay ? tab.days.filter((s) => isSameDay(new Date(s.date), dateFrom)) : tab.days.filter((s) => new Date(s.date) >= dateFrom && new Date(s.date) <= dateTo);
  if (unSortedTabsByDays.length == 0)
    return {
      days: [],
      averageTime: 0,
      summaryTime: 0,
      sessions: 0
    };
  unSortedTabsByDays.forEach((tabDay) => {
    if (new Date(tabDay.date) >= dateFrom && new Date(tabDay.date) <= dateTo || isTheSameDay && isSameDay(new Date(tabDay.date), dateFrom)) {
      let dayTab = daysTabs.find((x) => x.day == tabDay.date);
      if (dayTab == void 0) {
        dayTab = {
          day: tabDay.date,
          tabs: [],
          time: tabDay.summary,
          sessions: tabDay.counter
        };
        dayTab.tabs.push({
          favicon: tab.favicon,
          url: tab.url,
          sessions: tabDay.counter,
          summaryTime: tabDay.summary
        });
        daysTabs.push(dayTab);
      } else {
        dayTab.time += tabDay.summary;
        dayTab.sessions += tabDay.counter;
        dayTab.tabs.push({
          favicon: tab.favicon,
          url: tab.url,
          sessions: tabDay.counter,
          summaryTime: tabDay.summary
        });
      }
    }
  });
  daysTabs.sort(function(a, b) {
    return new Date(a.day).valueOf() - new Date(b.day).valueOf();
  });
  daysTabs.forEach((dayTab) => {
    dayTab.tabs.sort(function(a, b) {
      return b.summaryTime - a.summaryTime;
    });
  });
  const summaryTime = daysTabs.map((x) => x.time).reduce(function(a, b) {
    return a + b;
  });
  const totalSessions = daysTabs.map((x) => x.sessions).reduce(function(a, b) {
    return a + b;
  });
  const averageTime = Math.round(summaryTime / daysTabs.length);
  return {
    days: daysTabs,
    summaryTime,
    averageTime,
    sessions: totalSessions
  };
}
const _withScopeId$2 = (n) => (pushScopeId("data-v-b3d08563"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "settings-item" };
const _hoisted_2$3 = {
  key: 0,
  class: "no-data"
};
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("img", {
  height: "55",
  src: _imports_0$3
}, null, -1));
const _hoisted_4$3 = [
  _hoisted_3$3
];
const _hoisted_5$3 = { key: 1 };
const _hoisted_6$3 = { key: 1 };
const _hoisted_7$3 = { class: "no-data" };
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = { key: 2 };
const _hoisted_10$1 = { class: "date-block" };
const _hoisted_11$1 = { class: "title" };
const _hoisted_12$1 = ["onClick"];
const _hoisted_13$1 = { class: "mt-20 ml-10 mr-10 by-days-chart" };
const __default__$4 = {
  name: "WebsiteStats"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    domain: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const presetRanges = ranges();
    const tabInfoByDays = ref();
    const isLoading = ref();
    const noData = ref(false);
    const selectedDate = ref();
    const tab = ref();
    const countOfDays = computed(
      () => tabInfoByDays.value != void 0 ? tabInfoByDays.value.days.length : 0
    );
    onMounted(async () => {
      var _a, _b;
      isLoading.value = true;
      selectedDate.value = ThisWeekRange;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      const repo = await injectTabsRepository();
      tab.value = repo.getTab(props.domain);
      if (tab == void 0) {
        noData.value = true;
        return;
      }
      await loadList(dateFrom, dateTo);
    });
    async function loadList(dateFrom, dateTo) {
      var _a;
      const tabList = await useTabStatsByDays(dateFrom, dateTo, (_a = tab.value) == null ? void 0 : _a.url);
      if (tabList != null) {
        tabInfoByDays.value = tabList;
        if (tabList.days.length == 0 && tabList.summaryTime == 0)
          noData.value = true;
        else
          noData.value = false;
      }
      isLoading.value = false;
    }
    async function handleDate(modelData) {
      var _a, _b;
      selectedDate.value = modelData;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      await loadList(dateFrom, dateTo);
    }
    return (_ctx, _cache) => {
      var _a, _b, _c;
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("label", {
          class: "title link",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(openPage)(unref(SettingsTab).Dashboard))
        }, toDisplayString(unref(t)("dashboard.message")), 1),
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, _hoisted_4$3)) : (openBlock(), createElementBlock("div", _hoisted_5$3, [
          countOfDays.value == void 0 || countOfDays.value == 0 && !noData.value ? (openBlock(), createBlock(_sfc_main$e, { key: 0 })) : noData.value ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
            createBaseVNode("div", _hoisted_7$3, [
              createTextVNode(toDisplayString(unref(t)("noDataForPeriod.message")) + " ", 1),
              createVNode(_component_VueDatePicker, {
                range: "",
                "enable-time-picker": false,
                class: "date-picker",
                modelValue: selectedDate.value,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => selectedDate.value = $event),
                  handleDate
                ],
                "preset-ranges": unref(presetRanges)
              }, {
                yearly: withCtx(({ label, range, presetDateRange }) => [
                  createBaseVNode("span", {
                    onClick: ($event) => presetDateRange(range)
                  }, toDisplayString(label), 9, _hoisted_8$1)
                ]),
                _: 1
              }, 8, ["modelValue", "preset-ranges"])
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_9$1, [
            createBaseVNode("div", _hoisted_10$1, [
              createBaseVNode("div", null, [
                createVNode(Favicon, {
                  favicon: (_a = tab.value) == null ? void 0 : _a.favicon,
                  type: unref(getTypeOfUrl)((_b = tab.value) == null ? void 0 : _b.url)
                }, null, 8, ["favicon", "type"]),
                createBaseVNode("span", _hoisted_11$1, toDisplayString((_c = tab.value) == null ? void 0 : _c.url), 1)
              ]),
              createVNode(_component_VueDatePicker, {
                range: "",
                "enable-time-picker": false,
                class: "date-picker mt-10",
                modelValue: selectedDate.value,
                "onUpdate:modelValue": [
                  _cache[2] || (_cache[2] = ($event) => selectedDate.value = $event),
                  handleDate
                ],
                "preset-ranges": unref(presetRanges)
              }, {
                yearly: withCtx(({ label, range, presetDateRange }) => [
                  createBaseVNode("span", {
                    onClick: ($event) => presetDateRange(range)
                  }, toDisplayString(label), 9, _hoisted_12$1)
                ]),
                _: 1
              }, 8, ["modelValue", "preset-ranges"])
            ]),
            createBaseVNode("div", _hoisted_13$1, [
              createVNode(ByDaysChart, {
                data: tabInfoByDays.value
              }, null, 8, ["data"])
            ]),
            createBaseVNode("div", null, [
              createVNode(WebsiteStatsDetails, {
                details: tabInfoByDays.value
              }, null, 8, ["details"])
            ])
          ]))
        ]))
      ]);
    };
  }
});
const WebsiteStats_vue_vue_type_style_index_0_scoped_b3d08563_lang = "";
const WebsiteStats = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b3d08563"]]);
const _imports_0 = "/by-hours.svg";
const _imports_1 = "/by-intervals.svg";
function ascending$1(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function bisector(f2) {
  let compare1, compare2, delta;
  if (f2.length !== 2) {
    compare1 = ascending$1;
    compare2 = (d2, x) => ascending$1(f2(d2), x);
    delta = (d2, x) => f2(d2) - x;
  } else {
    compare1 = f2 === ascending$1 || f2 === descending ? f2 : zero$1;
    compare2 = f2;
    delta = f2;
  }
  function left2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center2(a, x, lo = 0, hi = a.length) {
    const i = left2(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left: left2, center: center2, right: right2 };
}
function zero$1() {
  return 0;
}
function number$2(x) {
  return x === null ? NaN : +x;
}
const ascendingBisect = bisector(ascending$1);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
const bisect = bisectRight;
const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(start2, stop, count) {
  const step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start2)
      ++i1;
    if (i2 / inc > stop)
      --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start2)
      ++i1;
    if (i2 * inc > stop)
      --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2)
    return tickSpec(start2, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  if (!(count > 0))
    return [];
  if (start2 === stop)
    return [start2];
  const reverse = stop < start2, [i1, i2, inc] = reverse ? tickSpec(stop, start2, count) : tickSpec(start2, stop, count);
  if (!(i2 >= i1))
    return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  return tickSpec(start2, stop, count)[2];
}
function tickStep(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  const reverse = stop < start2, inc = reverse ? tickIncrement(stop, start2, count) : tickIncrement(start2, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}
function identity$3(x) {
  return x;
}
var top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6;
function translateX(x) {
  return "translate(" + x + ",0)";
}
function translateY(y) {
  return "translate(0," + y + ")";
}
function number$1(scale) {
  return (d2) => +scale(d2);
}
function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round())
    offset = Math.round(offset);
  return (d2) => +scale(d2) + offset;
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$3 : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number$1)(scale.copy(), offset), selection2 = context.selection ? context.selection() : context, path = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d2) {
        return isFinite(d2 = position(d2)) ? transform(d2 + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d2) {
        var p = this.parentNode.__axis;
        return transform((p && isFinite(p = p(d2)) ? p : position(d2)) + offset);
      });
    }
    tickExit.remove();
    path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d2) {
      return transform(position(d2) + offset);
    });
    line.attr(x + "2", k * tickSizeInner);
    text.attr(x, k * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = Array.from(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset = +_, axis2) : offset;
  };
  return axis2;
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames$1(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set$1(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set$1(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy2 = {}, _ = this._;
    for (var t in _)
      copy2[t] = _[t].slice();
    return new Dispatch(copy2);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
var xhtml = "http://www.w3.org/1999/xhtml";
const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select2) {
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select2) {
  return function() {
    return array(select2.apply(this, arguments));
  };
}
function selection_selectAll(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll(select2);
  else
    select2 = selectorAll(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select2.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection$1(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node) {
    return node.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$1(x) {
  return function() {
    return x;
  };
}
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function selection_data(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$1(value);
  for (var m2 = groups.length, update = new Array(m2), enter = new Array(m2), exit = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    var parent = parents[j2], group = groups[j2], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j2, parents)), dataLength = data.length, enterGroup = enter[j2] = new Array(dataLength), updateGroup = update[j2] = new Array(dataLength), exitGroup = exit[j2] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n = group0.length, merge = merges[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Selection$1(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j2 = -1, m2 = groups.length; ++j2 < m2; ) {
    for (var group = groups[j2], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m2 = groups.length, sortgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, sortgroup = sortgroups[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}
function selection_size() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v2);
  };
}
function attrFunctionNS$1(fullname, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v2);
  };
}
function selection_attr(name, value) {
  var fullname = namespace(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1(name, value, priority) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v2, priority);
  };
}
function selection_style(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      delete this[name];
    else
      this[name] = v2;
  };
}
function selection_property(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
  this.textContent = "";
}
function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.textContent = v2 == null ? "" : v2;
  };
}
function selection_text(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.innerHTML = v2 == null ? "" : v2;
  };
}
function selection_html(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name) {
  var create2 = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name, before) {
  var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove);
}
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j2 = 0, i = -1, m2 = on.length, o; j2 < m2; ++j2) {
      if (o = on[j2], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j2 = 0, m2 = on.length; j2 < m2; ++j2) {
        if ((o = on[j2]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j2 = 0, m2 = on.length, o; j2 < m2; ++j2) {
        for (i = 0, o = on[j2]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}
function dispatchEvent(node, type, params) {
  var window2 = defaultView(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}
var root = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function select(selector2) {
  return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root);
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m2, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m2 = reHex.exec(format2)) ? (l = m2[1].length, m2 = parseInt(m2[1], 16), l === 6 ? rgbn(m2) : l === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format2)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format2)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format2)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format2)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h2, s, l, a) {
  if (a <= 0)
    h2 = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h2 = s = NaN;
  else if (s <= 0)
    h2 = NaN;
  return new Hsl(h2, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h2 = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h2 = (g - b) / s + (g < b) * 6;
    else if (g === max)
      h2 = (b - r) / s + 2;
    else
      h2 = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h2 *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h2;
  }
  return new Hsl(h2, s, l, o.opacity);
}
function hsl(h2, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h2, s, l, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb(h2, m1, m2),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant = (x) => () => x;
function linear$1(a, d2) {
  return function(t) {
    return a + t * d2;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d2 = b - a;
  return d2 ? linear$1(a, d2) : constant(isNaN(a) ? b : a);
}
const interpolateRgb = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb$1(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$1.gamma = rgbGamma;
  return rgb$1;
}(1);
function numberArray(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x[i] = interpolate$1(a[i], b[i]);
  for (; i < nb; ++i)
    c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c[i] = x[i](t);
    return c;
  };
}
function date(a, b) {
  var d2 = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d2.setTime(a * (1 - t) + b * t), d2;
  };
}
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate$1(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q2 = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q2.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q2[0] ? one(q2[0].x) : zero(b) : (b = q2.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q2[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate$1(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
var degrees = 180 / Math.PI;
var identity$2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a, b, c, d2, e, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d2)
    c -= a * skewX, d2 -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d2 * d2))
    c /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a * d2 < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f2,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var svgNode;
function parseCss(value) {
  const m2 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m2.isIdentity ? identity$2 : decompose(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
}
function parseSvg(value) {
  if (value == null)
    return identity$2;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity$2;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q2) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q2.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q2) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q2.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q2) {
    if (a !== b) {
      q2.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q2) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q2.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q2 = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q2);
    rotate(a.rotate, b.rotate, s, q2);
    skewX(a.skewX, b.skewX, s, q2);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q2);
    a = b = null;
    return function(t) {
      var i = -1, n = q2.length, o;
      while (++i < n)
        s[(o = q2[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f2) {
  setTimeout(f2, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout$1)
    timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
function timeout(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule2;
}
function set(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > STARTED)
    throw new Error("too late; already running");
  return schedule2;
}
function get(node, id2) {
  var schedule2 = node.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2]))
    throw new Error("transition not found");
  return schedule2;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule2, 0, self.time);
  function schedule2(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed)
      start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j2, n, o;
    if (self.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name)
        continue;
      if (o.state === STARTED)
        return timeout(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING)
      return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j2 = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j2] = o;
      }
    }
    tween.length = j2 + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}
function interrupt(node, name) {
  var schedules = node.__transition, schedule2, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING && schedule2.state < ENDING;
    schedule2.state = ENDED;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}
function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition, name, value) {
  var id2 = transition._id;
  transition.each(function() {
    var schedule2 = set(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get(node, id2).value[name];
  };
}
function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
}
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function transition_delay(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
}
function durationFunction(id2, value) {
  return function() {
    set(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set(this, id2).duration = value;
  };
}
function transition_duration(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
}
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set(this, id2).ease = value;
  };
}
function transition_ease(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
}
function easeVarying(id2, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (typeof v2 !== "function")
      throw new Error();
    set(this, id2).ease = v2;
  };
}
function transition_easeVarying(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition) {
  if (transition._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n = group0.length, merge = merges[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule2 = sit(this, id2), on = schedule2.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id2, i, subgroup, get(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
function transition_selectAll(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selectorAll(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select2.call(node, node.__data__, i, group), child, inherit2 = get(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var Selection = selection.prototype.constructor;
function transition_selection() {
  return new Selection(this._groups, this._parents);
}
function styleNull(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text(value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}
function transition_transition() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule2 = set(this, id2), on = schedule2.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0)
      resolve();
  });
}
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function newId() {
  return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}
function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j2 = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j2 = (j2 + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out:
    for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
  var d2 = formatDecimalParts(x, p);
  if (!d2)
    return x + "";
  var coefficient = d2[0], exponent2 = d2[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
}
function formatRounded(x, p) {
  var d2 = formatDecimalParts(x, p);
  if (!d2)
    return x + "";
  var coefficient = d2[0], exponent2 = d2[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};
function identity$1(x) {
  return x;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$1 : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$1 : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "−" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim(value);
        if (valueNegative && +value === 0 && sign !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f2 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f2(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}
function constants(x) {
  return function() {
    return x;
  };
}
function number(x) {
  return +x;
}
var unit = [0, 1];
function identity(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b)
    t = a, a = b, b = t;
  return function(x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, interpolate2) {
  var j2 = Math.min(domain.length, range.length) - 1, d2 = new Array(j2), r = new Array(j2), i = -1;
  if (domain[j2] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j2) {
    d2[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate2(range[i], range[i + 1]);
  }
  return function(x) {
    var i2 = bisect(domain, x, 1, j2) - 1;
    return r[i2](d2[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate2 = interpolate$1, transform, untransform, unknown, clamp = identity, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate2)))(transform(clamp(x)));
  }
  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate2 = interpolateRound, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, rescale()) : interpolate2;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity, identity);
}
function tickFormat(start2, stop, count, specifier) {
  var step = tickStep(start2, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d2 = domain();
    return ticks(d2[0], d2[d2.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d2 = domain();
    return tickFormat(d2[0], d2[d2.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d2 = domain();
    var i0 = 0;
    var i1 = d2.length - 1;
    var start2 = d2[i0];
    var stop = d2[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count);
      if (step === prestep) {
        d2[i0] = start2;
        d2[i1] = stop;
        return domain(d2);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location2) {
    return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Transform.prototype;
const _hoisted_1$4 = { class: "description d-inline-block" };
const _hoisted_2$2 = { class: "d-inline-block mr-10 ml-10" };
const _hoisted_3$2 = ["value"];
const _hoisted_4$2 = ["value"];
const _hoisted_5$2 = ["value"];
const _hoisted_6$2 = ["value"];
const _hoisted_7$2 = { class: "description d-inline-block" };
const __default__$3 = {
  name: "TimeIntervalChart"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    let MinValue;
    ((MinValue2) => {
      MinValue2[MinValue2["Seconds_10"] = 10] = "Seconds_10";
      MinValue2[MinValue2["Min_1"] = 60] = "Min_1";
      MinValue2[MinValue2["Min_5"] = 300] = "Min_5";
      MinValue2[MinValue2["Min_10"] = 600] = "Min_10";
    })(MinValue || (MinValue = {}));
    const { t } = useI18n();
    const storage = injectStorage();
    const chart = ref();
    const minValue = ref();
    const todayIntervals = ref();
    onMounted(async () => {
      minValue.value = 10;
      const timeIntervalList = await storage.getDeserializeList(
        StorageDeserializeParam.TIMEINTERVAL_LIST
      );
      todayIntervals.value = timeIntervalList == null ? void 0 : timeIntervalList.filter((x) => x.day == todayLocalDate());
      renderChart();
    });
    function renderChart() {
      var _a;
      const dataForChart = [];
      (_a = todayIntervals.value) == null ? void 0 : _a.forEach((interval2) => {
        interval2.intervals.forEach((int) => {
          const from = int.split("-")[0];
          const to = int.split("-")[1];
          if (convertStringTimeIntervalToSeconds(to) - convertStringTimeIntervalToSeconds(from) > minValue.value) {
            dataForChart.push({ domain: interval2.domain, interval: convertInterval(int) });
          }
        });
      });
      drawIntervalChart(dataForChart);
    }
    function refreshChart() {
      chart.value.innerHTML = "";
      renderChart();
    }
    function convertInterval(interval2) {
      function convert(item) {
        item = item.map((x) => x.length == 1 ? `0${x}` : x);
        return item.join(":");
      }
      const sourceTimeFrom = interval2.split("-")[0].split(":");
      const sourceTimeTo = interval2.split("-")[1].split(":");
      return `${convert(sourceTimeFrom)}-${convert(sourceTimeTo)}`;
    }
    function drawIntervalChart(data) {
      data.forEach((item) => {
        const hFrom = getHourFrom(item.interval);
        const hTo = getHourTo(item.interval);
        if (hFrom != hTo) {
          const sourceTimeFrom = item.interval.split("-")[0].split(":");
          const sourceTimeTo = item.interval.split("-")[1].split(":");
          const timeTo = `${sourceTimeFrom[0]}:59:59`;
          const timeFrom = `${sourceTimeTo[0]}:00:00`;
          data.push({ domain: item.domain, interval: item.interval.split("-")[0] + "-" + timeTo });
          data.push({ domain: item.domain, interval: timeFrom + "-" + item.interval.split("-")[1] });
        }
      });
      const margin = { top: 10, right: 10, bottom: 20, left: 20 };
      const width = chart.value.offsetWidth;
      const height = 400;
      const tickDistance = 4.38;
      const tooltip = select("#timeIntervalChartD3").append("div").style("opacity", 0).style("display", "none").style("position", "absolute").style("background-color", "white").style("color", "black").style("border", "1px solid grey").attr("class", "tooltip").style("border-width", "1px").style("border-radius", "3px").style("padding", "5px");
      const mouseover = function(e) {
        tooltip.style("opacity", 1).style("display", "block");
        select(".tooltip").style("left", e.layerX + 15 + "px").style("top", e.layerY + 15 + "px");
      };
      const mousemove = function(event, data2) {
        tooltip.html(`<b>${data2.domain}</b><br>${data2.interval}`);
      };
      const mouseleave = function(e) {
        tooltip.style("opacity", 0).style("display", "none");
      };
      const svg = select("#timeIntervalChartD3").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(${margin.left},${margin.top})`);
      const y = linear([height, 0]).domain([0, 60]);
      const yAxis = axisLeft(y);
      const x = linear([0, width]).domain([0, 24]);
      const xAxis = axisBottom(x).ticks(24);
      svg.append("g").attr("class", "grid").style("color", "#e5e5e5").attr("transform", `translate(0, ${height})`).call(xAxis.tickSize(-height));
      svg.append("g").attr("class", "grid").style("color", "#e5e5e5").call(yAxis.tickSize(-width));
      svg.selectAll("text").style("fill", "black");
      svg.selectAll(".bar").data(data).enter().append("rect").style("fill", "#5668e2").style("cursor", "pointer").style("stroke-width", "1").attr("class", "bar").attr("x", (data2) => x(getHourFrom(data2.interval)) + 2).attr("width", chart.value.offsetWidth / 24 - 4).attr("y", (data2) => y(getMinutesTo(data2.interval)) - 1).attr("height", (data2) => {
        const offset = getMinutesTo(data2.interval) - getMinutesFrom(data2.interval);
        if (offset == 0) {
          const offsetSeconds = getSecondsTo(data2.interval) - getSecondsFrom(data2.interval);
          if (offsetSeconds <= 3)
            return 0;
          else
            return 1;
        } else
          return offset * tickDistance;
      }).on("mouseover", mouseover).on("mousemove", mousemove).on("mouseleave", mouseleave);
      function getHourFrom(interval2) {
        const time = interval2.split("-")[0];
        return Number(time.split(":")[0]);
      }
      function getHourTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[0]);
      }
      function getMinutesFrom(interval2) {
        var time = interval2.split("-")[0];
        return Number(time.split(":")[1]);
      }
      function getMinutesTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[1]);
      }
      function getSecondsFrom(interval2) {
        var time = interval2.split("-")[0];
        return Number(time.split(":")[2]);
      }
      function getSecondsTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[2]);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("p", _hoisted_1$4, toDisplayString(unref(t)("intervalsChart.message")), 1),
          createBaseVNode("div", _hoisted_2$2, [
            withDirectives(createBaseVNode("select", {
              class: "option",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => minValue.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => refreshChart())
            }, [
              createBaseVNode("option", {
                value: 10
                /* Seconds_10 */
              }, "10 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_3$2),
              createBaseVNode("option", {
                value: 60
                /* Min_1 */
              }, "1 " + toDisplayString(unref(t)("min.message")), 9, _hoisted_4$2),
              createBaseVNode("option", {
                value: 300
                /* Min_5 */
              }, "5 " + toDisplayString(unref(t)("2min.message")), 9, _hoisted_5$2),
              createBaseVNode("option", {
                value: 600
                /* Min_10 */
              }, "10 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_6$2)
            ], 544), [
              [vModelSelect, minValue.value]
            ])
          ]),
          createBaseVNode("p", _hoisted_7$2, toDisplayString(unref(t)("intervalsChart.description")), 1)
        ]),
        createBaseVNode("div", {
          ref_key: "chart",
          ref: chart,
          id: "timeIntervalChartD3"
        }, null, 512)
      ], 64);
    };
  }
});
const TimeIntervalChart_vue_vue_type_style_index_0_scoped_5eb26ffa_lang = "";
const TimeIntervalChart = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5eb26ffa"]]);
const _hoisted_1$3 = { class: "description" };
const __default__$2 = {
  name: "HourlyChart"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const { t } = useI18n();
    const storage = injectStorage();
    Chart.register(CategoryScale, LinearScale, BarElement, plugin_title, plugin_tooltip, plugin_legend);
    const options = ref();
    const data = ref();
    const isLoaded = ref();
    const objects = [];
    const hours = [];
    isLoaded.value = false;
    function convertTimIntervalToObject(timeInterval, domain) {
      const array2 = timeInterval.split("-");
      const time1 = array2[0].split(":");
      const time2 = array2[1].split(":");
      if (time1[0] == time2[0]) {
        return [
          {
            hour: Number(time1[0]),
            summary: convertStringTimeIntervalToSeconds(array2[1]) - convertStringTimeIntervalToSeconds(array2[0]),
            domain
          }
        ];
      } else {
        const arr = [];
        const firstPart1 = array2[0];
        const firstPart2 = `${time1[0]}:59:59`;
        const hourForFirstPart = firstPart1.split(":");
        arr.push({
          hour: Number(hourForFirstPart[0]),
          summary: convertStringTimeIntervalToSeconds(firstPart2) - convertStringTimeIntervalToSeconds(firstPart1),
          domain
        });
        const secondPart1 = `${time2[0]}:00:00`;
        const secondPart2 = `${time2[0]}:${time2[1]}:${time2[2]}`;
        const hourForsecondPart = secondPart1.split(":");
        arr.push({
          hour: Number(hourForsecondPart[0]),
          summary: convertStringTimeIntervalToSeconds(secondPart2) - convertStringTimeIntervalToSeconds(secondPart1),
          domain
        });
        return arr;
      }
    }
    function fillData(timeIntervalList) {
      const items = timeIntervalList == null ? void 0 : timeIntervalList.filter((x) => x.day == todayLocalDate());
      const domains = items.map((x) => x.domain);
      const result = [];
      const intervalsObj = [];
      domains.forEach((domain) => {
        const intervals = items.filter((x) => x.domain == domain);
        intervals.forEach((array2) => {
          const i = array2.intervals;
          i.forEach((time) => {
            const objs = convertTimIntervalToObject(time, domain);
            if (objs != null && objs.length > 0) {
              objs.forEach((obj) => {
                const existDomain = intervalsObj.find((x) => x.domain == domain && x.hour == obj.hour);
                if (existDomain != void 0) {
                  existDomain.summary += obj.summary;
                } else
                  intervalsObj.push(obj);
              });
            }
          });
        });
      });
      const tempArray = [];
      for (let index = 0; index < 24; index++) {
        const obj = objects.find((x) => x.hour == index);
        const intervalObj = intervalsObj.filter((x) => x.hour == index);
        const summary = intervalObj.length == 0 ? 0 : intervalObj.map((x) => x.summary).reduce((a, b) => a + b);
        if (obj == void 0) {
          const newObj = {
            summary,
            hour: index,
            domains: intervalObj
          };
          objects.push(newObj);
        } else {
          obj.summary += summary;
          intervalObj.forEach((element) => {
            obj.domains.push(element);
          });
        }
        tempArray.push(0);
      }
      objects.forEach((obj) => {
        const emptyArray = Object.assign([], tempArray);
        emptyArray[obj.hour] = Number(obj.summary / 60);
        result.push({
          backgroundColor: ["#5668e2"],
          data: emptyArray
        });
      });
      return result;
    }
    async function buildChart() {
      const timeIntervalList = await storage.getDeserializeList(
        StorageDeserializeParam.TIMEINTERVAL_LIST
      );
      for (let index = 0; index <= 23; index++) {
        hours.push(index);
      }
      const dataForChart = fillData(timeIntervalList);
      data.value = {
        labels: hours,
        datasets: dataForChart
      };
      options.value = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "none"
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}:00-${Number(context.label) + 1}:00 ${convertHoursToTime(
                  context.raw
                )}`;
              }
            }
          }
        },
        scales: {
          y: {
            min: 0,
            max: 60,
            ticks: {
              stepSize: 5
            }
          },
          x: {
            stacked: true,
            min: 0,
            max: 23
          }
        }
      };
      isLoaded.value = true;
    }
    onMounted(async () => await buildChart());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$3, toDisplayString(unref(t)("timeChartDescription.message")), 1),
        isLoaded.value ? (openBlock(), createBlock(unref(Bar), {
          key: 0,
          data: data.value,
          options: options.value
        }, null, 8, ["data", "options"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-73914ee4"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "settings-item" };
const _hoisted_2$1 = { class: "title" };
const _hoisted_3$1 = { class: "chart chartByHours" };
const _hoisted_4$1 = { class: "mt-10 mb-20" };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "ml-5",
  src: _imports_0,
  height: "22"
}, null, -1));
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "ml-5",
  src: _imports_1,
  height: "22"
}, null, -1));
const _hoisted_7$1 = { class: "tab-items" };
const __default__$1 = {
  name: "Dashboard"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const { t } = useI18n();
    const chart = ref();
    let TypeOfChart;
    ((TypeOfChart2) => {
      TypeOfChart2[TypeOfChart2["Horly"] = 0] = "Horly";
      TypeOfChart2[TypeOfChart2["Interval"] = 1] = "Interval";
    })(TypeOfChart || (TypeOfChart = {}));
    onMounted(() => {
      chart.value = 0;
    });
    function openChart(type) {
      chart.value = type;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(t)("dashboard.message")), 1)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("button", {
              class: normalizeClass(["chart-btn", chart.value == 0 ? "active" : ""]),
              onClick: _cache[0] || (_cache[0] = ($event) => openChart(
                0
                /* Horly */
              ))
            }, [
              _hoisted_5$1,
              createTextVNode(" " + toDisplayString(unref(t)("byHours.message")), 1)
            ], 2),
            createBaseVNode("button", {
              class: normalizeClass(["ml-10", "chart-btn", chart.value == 1 ? "active" : ""]),
              onClick: _cache[1] || (_cache[1] = ($event) => openChart(
                1
                /* Interval */
              ))
            }, [
              _hoisted_6$1,
              createTextVNode(" " + toDisplayString(unref(t)("intervals.message")), 1)
            ], 2)
          ]),
          chart.value == 0 ? (openBlock(), createBlock(_sfc_main$3, { key: 0 })) : createCommentVNode("", true),
          chart.value == 1 ? (openBlock(), createBlock(TimeIntervalChart, { key: 1 })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          chart.value == 0 ? (openBlock(), createBlock(TabList, {
            key: 0,
            type: unref(TypeOfList).Dashboard,
            showAllStats: false
          }, null, 8, ["type"])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const Dashboad_vue_vue_type_style_index_0_scoped_73914ee4_lang = "";
const Dashboad = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-73914ee4"]]);
const _hoisted_1$1 = { class: "main" };
const __default__ = {
  name: "DashboadContainer"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: {},
    domain: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _ctx.type == unref(SettingsTab).Dashboard ? (openBlock(), createBlock(Dashboad, { key: 0 })) : createCommentVNode("", true),
        _ctx.type == unref(SettingsTab).WebsiteStats ? (openBlock(), createBlock(WebsiteStats, {
          key: 1,
          domain: _ctx.domain
        }, null, 8, ["domain"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DashboadContainer_vue_vue_type_style_index_0_scoped_858be692_lang = "";
const DashboadContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-858be692"]]);
const _withScopeId = (n) => (pushScopeId("data-v-37a10e36"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "settings-tabs" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "header-block" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "d-inline-block logo",
    height: "30",
    src: _imports_0$4
  }),
  /* @__PURE__ */ createBaseVNode("p", { class: "d-inline-block title" }, "Web Activity Time Tracker")
], -1));
const _hoisted_3 = { class: "settings-tab mt-20" };
const _hoisted_4 = ["checked"];
const _hoisted_5 = {
  name: "tabName",
  for: "timeIntervalChart-tab"
};
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1$3,
  height: "30"
}, null, -1));
const _hoisted_7 = { class: "settings-content" };
const _hoisted_8 = { class: "settings-tab" };
const _hoisted_9 = ["checked"];
const _hoisted_10 = {
  name: "tabName",
  for: "white-list-tab"
};
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2$1,
  height: "30"
}, null, -1));
const _hoisted_12 = { class: "settings-content" };
const _hoisted_13 = { class: "main" };
const _hoisted_14 = { class: "settings-tab" };
const _hoisted_15 = ["checked"];
const _hoisted_16 = {
  name: "tabName",
  for: "limits-tab"
};
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3$1,
  height: "30"
}, null, -1));
const _hoisted_18 = { class: "settings-content" };
const _hoisted_19 = { class: "main" };
const _hoisted_20 = { class: "settings-tab" };
const _hoisted_21 = ["checked"];
const _hoisted_22 = {
  name: "tabName",
  for: "notification-tab"
};
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_4,
  height: "30"
}, null, -1));
const _hoisted_24 = { class: "settings-content" };
const _hoisted_25 = { class: "main" };
const _hoisted_26 = { class: "settings-tab" };
const _hoisted_27 = ["checked"];
const _hoisted_28 = {
  name: "tabName",
  for: "pomodoro-tab"
};
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5,
  height: "30"
}, null, -1));
const _hoisted_30 = { class: "settings-content" };
const _hoisted_31 = { class: "main" };
const _hoisted_32 = { class: "settings-tab" };
const _hoisted_33 = ["checked"];
const _hoisted_34 = {
  name: "tabName",
  for: "general-tab"
};
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_6,
  height: "30"
}, null, -1));
const _hoisted_36 = { class: "settings-content" };
const _hoisted_37 = { class: "main" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const { t } = useI18n();
    const extensionPage = useExtensionPage();
    const settingsStorage = injectStorage();
    const selectedTab = ref();
    const currentUrl = ref(new URL(location.href));
    const selectedWebsite = ref();
    const darkMode = ref();
    watch(currentUrl, () => {
      getCurrentTab();
    });
    onMounted(async () => {
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      applyDarkMode(darkMode.value);
      getCurrentTab();
    });
    function getCurrentTab() {
      const tabName = currentUrl.value.searchParams.get("tab");
      if (tabName != null && tabName != "") {
        selectedTab.value = getEnumValueTab(tabName);
        const domain = currentUrl.value.searchParams.get("website");
        if (selectedTab.value == SettingsTab.WebsiteStats) {
          if (domain != null && domain != "")
            selectedWebsite.value = domain;
          else
            selectedTab.value = SettingsTab.Dashboard;
        } else if (domain != null && domain != "") {
          window.history.replaceState(
            location.href,
            document.title,
            location.href.replace(`&website=${domain}`, "")
          );
        }
      }
    }
    function selectTab(value) {
      selectedTab.value = value;
      extensionPage.updateTab(value);
      currentUrl.value = new URL(location.href);
    }
    return (_ctx, _cache) => {
      const _component_notifications = resolveComponent("notifications");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_notifications, { position: "bottom right" }),
        createBaseVNode("div", _hoisted_1, [
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("input", {
              type: "radio",
              id: "timeIntervalChart-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Dashboard || selectedTab.value == unref(SettingsTab).WebsiteStats,
              onChange: _cache[0] || (_cache[0] = ($event) => selectTab(unref(SettingsTab).Dashboard))
            }, null, 40, _hoisted_4),
            createBaseVNode("label", _hoisted_5, [
              _hoisted_6,
              createTextVNode(toDisplayString(unref(t)("dashboard.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_7, [
              selectedTab.value == unref(SettingsTab).Dashboard || selectedTab.value == unref(SettingsTab).WebsiteStats ? (openBlock(), createBlock(DashboadContainer, {
                key: 0,
                type: selectedTab.value,
                domain: selectedWebsite.value
              }, null, 8, ["type", "domain"])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("input", {
              type: "radio",
              id: "white-list-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).WhiteList,
              onChange: _cache[1] || (_cache[1] = ($event) => selectTab(unref(SettingsTab).WhiteList))
            }, null, 40, _hoisted_9),
            createBaseVNode("label", _hoisted_10, [
              _hoisted_11,
              createTextVNode(toDisplayString(unref(t)("whiteListSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                selectedTab.value == unref(SettingsTab).WhiteList ? (openBlock(), createBlock(WhiteList, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("input", {
              type: "radio",
              id: "limits-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Limits,
              onChange: _cache[2] || (_cache[2] = ($event) => selectTab(unref(SettingsTab).Limits))
            }, null, 40, _hoisted_15),
            createBaseVNode("label", _hoisted_16, [
              _hoisted_17,
              createTextVNode(toDisplayString(unref(t)("limitsSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                selectedTab.value == unref(SettingsTab).Limits ? (openBlock(), createBlock(Limits, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("input", {
              type: "radio",
              id: "notification-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Notifications,
              onChange: _cache[3] || (_cache[3] = ($event) => selectTab(unref(SettingsTab).Notifications))
            }, null, 40, _hoisted_21),
            createBaseVNode("label", _hoisted_22, [
              _hoisted_23,
              createTextVNode(toDisplayString(unref(t)("notificationsSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                selectedTab.value == unref(SettingsTab).Notifications ? (openBlock(), createBlock(DailyNotifications, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("input", {
              type: "radio",
              id: "pomodoro-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Pomodoro,
              onChange: _cache[4] || (_cache[4] = ($event) => selectTab(unref(SettingsTab).Pomodoro))
            }, null, 40, _hoisted_27),
            createBaseVNode("label", _hoisted_28, [
              _hoisted_29,
              createTextVNode(toDisplayString(unref(t)("pomodoroMode.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                selectedTab.value == unref(SettingsTab).Pomodoro ? (openBlock(), createBlock(Pomodoro, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("input", {
              type: "radio",
              id: "general-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).GeneralSettings,
              onChange: _cache[5] || (_cache[5] = ($event) => selectTab(unref(SettingsTab).GeneralSettings))
            }, null, 40, _hoisted_33),
            createBaseVNode("label", _hoisted_34, [
              _hoisted_35,
              createTextVNode(toDisplayString(unref(t)("generalSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", _hoisted_37, [
                selectedTab.value == unref(SettingsTab).GeneralSettings ? (openBlock(), createBlock(GeneralSettings, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
const Dashboard_vue_vue_type_style_index_0_scoped_37a10e36_lang = "";
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37a10e36"]]);
const app = createApp(Settings);
app.use(at);
app.use(i18n);
app.component("VueDatePicker", oa);
app.mount("body");
const dashboard = "";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3MtZGFzaGJvYXJkLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcy13aGl0ZWxpc3Quc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zLWxpbWl0cy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3Mtbm90aWZpY2F0aW9ucy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3Mtc2V0dGluZ3Muc3ZnIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BreXZnK3Z1ZTMtbm90aWZpY2F0aW9uQDIuOS4xX3Z1ZUAzLjQuMjdfdHlwZXNjcmlwdEA1LjQuNV8vbm9kZV9tb2R1bGVzL0BreXZnL3Z1ZTMtbm90aWZpY2F0aW9uL2Rpc3QvaW5kZXguZXMuanMiLCIuLi8uLi9zcmMvZnVuY3Rpb25zL3VzZVJlbW92ZUFsbERhdGEudHMiLCIuLi8uLi9zcmMvZnVuY3Rpb25zL3VzZVJlc3RvcmVEYXRhLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvR2VuZXJhbFNldHRpbmdzLnZ1ZSIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnBuZyIsIi4uLy4uL3NyYy91dGlscy9mYXZpY29uLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvV2hpdGVMaXN0LnZ1ZSIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmciLCIuLi8uLi9zcmMvZW50aXR5L3Jlc3RyaWN0aW9uLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTGlzdFdpdGhUaW1lLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0xpbWl0cy52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZSIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcG9tb2Rvcm8ucG5nIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9wb21vZG9yby1yZXN0LnBuZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvc3RvcC5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3N0YXJ0LnN2ZyIsIi4uLy4uL3NyYy9mdW5jdGlvbnMvcGxheVNvdW5kLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUG9tb2Rvcm9Tb3VuZHNTZWxlY3Rvci52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb21vZG9yby52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9XZWJzaXRlU3RhdHNEZXRhaWxzLnZ1ZSIsIi4uLy4uL3NyYy9mdW5jdGlvbnMvdXNlVGFiU3RhdHNCeURheXMudHMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9XZWJzaXRlU3RhdHMudnVlIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9ieS1ob3Vycy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2J5LWludGVydmFscy5zdmciLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMy4yLjQvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9hc2NlbmRpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMy4yLjQvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDMuMi40L25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmlzZWN0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMy4yLjQvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9udW1iZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMy4yLjQvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMy4yLjQvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aWNrcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1heGlzQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1heGlzL3NyYy9pZGVudGl0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1heGlzQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1heGlzL3NyYy9heGlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWRpc3BhdGNoQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1kaXNwYXRjaC9zcmMvZGlzcGF0Y2guanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RvckFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdENoaWxkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGRyZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zcGFyc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXRhLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2pvaW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9tZXJnZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29yZGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NhbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2Rlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zaXplLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vYXR0ci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvd2luZG93LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3R5bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9wcm9wZXJ0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi90ZXh0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaHRtbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JhaXNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbG93ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hcHBlbmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbG9uZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kaXNwYXRjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2l0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1jb2xvckAzLjEuMC9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2RlZmluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1jb2xvckAzLjEuMC9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29uc3RhbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMy4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jb2xvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAzLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3JnYi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAzLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlckFycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMy4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdmFsdWUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMy4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAzLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9kZWNvbXBvc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMy4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vcGFyc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMy4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdGltZXJAMy4wLjEvbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lckAzLjAuMS9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVvdXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdHJhbnNpdGlvbkAzLjAuMV9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2NoZWR1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdHJhbnNpdGlvbkAzLjAuMV9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2ludGVycnVwdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL2ludGVycnVwdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90d2Vlbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbnRlcnBvbGF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9hdHRyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRyYW5zaXRpb25AMy4wLjFfZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHJUd2Vlbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kZWxheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kdXJhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9lYXNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRyYW5zaXRpb25AMy4wLjFfZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2VWYXJ5aW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRyYW5zaXRpb25AMy4wLjFfZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ZpbHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9tZXJnZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9vbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9yZW1vdmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdHJhbnNpdGlvbkAzLjAuMV9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRyYW5zaXRpb25AMy4wLjFfZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdHJhbnNpdGlvbkAzLjAuMV9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdHJhbnNpdGlvbkAzLjAuMV9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGVUd2Vlbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90ZXh0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRyYW5zaXRpb25AMy4wLjFfZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHRUd2Vlbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRyYW5zaXRpb25AMy4wLjFfZDMtc2VsZWN0aW9uQDMuMC4wL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2VuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1lYXNlQDMuMC4xL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jdWJpYy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10cmFuc2l0aW9uQDMuMC4xX2QzLXNlbGVjdGlvbkAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdHJhbnNpdGlvbkAzLjAuMV9kMy1zZWxlY3Rpb25AMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMy4xLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0RGVjaW1hbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMy4xLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZXhwb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDMuMS4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdEdyb3VwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAzLjEuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXROdW1lcmFscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMy4xLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0U3BlY2lmaWVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAzLjEuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRUcmltLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAzLjEuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRQcmVmaXhBdXRvLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAzLjEuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRSb3VuZGVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAzLjEuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRUeXBlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMy4xLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvaWRlbnRpdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDMuMS4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2xvY2FsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMy4xLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZGVmYXVsdExvY2FsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMy4xLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uRml4ZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDMuMS4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvblByZWZpeC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMy4xLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUm91bmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVANC4wLjIvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9pbml0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDQuMC4yL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29uc3RhbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVANC4wLjIvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9udW1iZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVANC4wLjIvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9jb250aW51b3VzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDQuMC4yL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvdGlja0Zvcm1hdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zY2FsZUA0LjAuMi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2xpbmVhci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy16b29tQDMuMC4wL25vZGVfbW9kdWxlcy9kMy16b29tL3NyYy90cmFuc2Zvcm0uanMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9UaW1lSW50ZXJ2YWxDaGFydC52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ib3VybHlDaGFydC52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hZC52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hZENvbnRhaW5lci52dWUiLCIuLi8uLi9zcmMvcGFnZXMvRGFzaGJvYXJkLnZ1ZSIsIi4uLy4uL3NyYy9kYXNoYm9hcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzFkNzdmOGViX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19iNTM2OWNmYl9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fN2Y5YWM4MzFfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2UwZDZlMjZiX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX182YzM2YTk0YV9fXCIiLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgeSwgb3BlbkJsb2NrIGFzIGEsIGNyZWF0ZUJsb2NrIGFzIGcsIFRyYW5zaXRpb25Hcm91cCBhcyB4LCB3aXRoQ3R4IGFzICQsIHJlbmRlclNsb3QgYXMgVCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIHAsIG5vcm1hbGl6ZVN0eWxlIGFzIGIsIHJlc29sdmVEeW5hbWljQ29tcG9uZW50IGFzIGssIEZyYWdtZW50IGFzIF8sIHJlbmRlckxpc3QgYXMgQiwgbm9ybWFsaXplQ2xhc3MgYXMgRCwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIE4sIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBIIH0gZnJvbSBcInZ1ZVwiO1xuZnVuY3Rpb24gTSh0KSB7XG4gIHJldHVybiB7IGFsbDogdCA9IHQgfHwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgb246IGZ1bmN0aW9uKGUsIGkpIHtcbiAgICB2YXIgcyA9IHQuZ2V0KGUpO1xuICAgIHMgPyBzLnB1c2goaSkgOiB0LnNldChlLCBbaV0pO1xuICB9LCBvZmY6IGZ1bmN0aW9uKGUsIGkpIHtcbiAgICB2YXIgcyA9IHQuZ2V0KGUpO1xuICAgIHMgJiYgKGkgPyBzLnNwbGljZShzLmluZGV4T2YoaSkgPj4+IDAsIDEpIDogdC5zZXQoZSwgW10pKTtcbiAgfSwgZW1pdDogZnVuY3Rpb24oZSwgaSkge1xuICAgIHZhciBzID0gdC5nZXQoZSk7XG4gICAgcyAmJiBzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgIG4oaSk7XG4gICAgfSksIChzID0gdC5nZXQoXCIqXCIpKSAmJiBzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgIG4oZSwgaSk7XG4gICAgfSk7XG4gIH0gfTtcbn1cbmNvbnN0IGQgPSBNKCksIEMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB3ID0ge1xuICB4OiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0sXG4gIHk6IFtcInRvcFwiLCBcImJvdHRvbVwiXVxufSwgUiA9ICgodCkgPT4gKCkgPT4gdCsrKSgwKSwgViA9ICh0KSA9PiB0eXBlb2YgdCAhPSBcInN0cmluZ1wiID8gW10gOiB0LnNwbGl0KC9cXHMrL2dpKS5maWx0ZXIoKGUpID0+IGUpLCBXID0gKHQpID0+IHtcbiAgdHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IFYodCkpO1xuICBsZXQgZSA9IG51bGwsIGkgPSBudWxsO1xuICByZXR1cm4gdC5mb3JFYWNoKChzKSA9PiB7XG4gICAgdy55LmluZGV4T2YocykgIT09IC0xICYmIChpID0gcyksIHcueC5pbmRleE9mKHMpICE9PSAtMSAmJiAoZSA9IHMpO1xuICB9KSwgeyB4OiBlLCB5OiBpIH07XG59O1xuY2xhc3MgWSB7XG4gIGNvbnN0cnVjdG9yKGUsIGksIHMpIHtcbiAgICB0aGlzLnJlbWFpbmluZyA9IGksIHRoaXMuY2FsbGJhY2sgPSBlLCB0aGlzLm5vdGlmeUl0ZW0gPSBzLCB0aGlzLnJlc3VtZSgpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm5vdGlmeUl0ZW0udGltZXIpLCB0aGlzLnJlbWFpbmluZyAtPSBEYXRlLm5vdygpIC0gdGhpcy5zdGFydDtcbiAgfVxuICByZXN1bWUoKSB7XG4gICAgdGhpcy5zdGFydCA9IERhdGUubm93KCksIGNsZWFyVGltZW91dCh0aGlzLm5vdGlmeUl0ZW0udGltZXIpLCB0aGlzLm5vdGlmeUl0ZW0udGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgfVxufVxuY29uc3QgbSA9IHtcbiAgcG9zaXRpb246IFtcInRvcFwiLCBcInJpZ2h0XCJdLFxuICBjc3NBbmltYXRpb246IFwidm4tZmFkZVwiLFxuICB2ZWxvY2l0eUFuaW1hdGlvbjoge1xuICAgIGVudGVyOiAodCkgPT4gKHtcbiAgICAgIGhlaWdodDogW3QuY2xpZW50SGVpZ2h0LCAwXSxcbiAgICAgIG9wYWNpdHk6IFsxLCAwXVxuICAgIH0pLFxuICAgIGxlYXZlOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBvcGFjaXR5OiBbMCwgMV1cbiAgICB9XG4gIH1cbn0sIGogPSB5KHtcbiAgbmFtZTogXCJ2ZWxvY2l0eS1ncm91cFwiLFxuICBlbWl0czogW1wiYWZ0ZXItbGVhdmVcIiwgXCJsZWF2ZVwiLCBcImVudGVyXCJdLFxuICBtZXRob2RzOiB7XG4gICAgZW50ZXIodCwgZSkge1xuICAgICAgdGhpcy4kZW1pdChcImVudGVyXCIsIHQsIGUpO1xuICAgIH0sXG4gICAgbGVhdmUodCwgZSkge1xuICAgICAgdGhpcy4kZW1pdChcImxlYXZlXCIsIHQsIGUpO1xuICAgIH0sXG4gICAgYWZ0ZXJMZWF2ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJhZnRlci1sZWF2ZVwiKTtcbiAgICB9XG4gIH1cbn0pLCB2ID0gKHQsIGUpID0+IHtcbiAgY29uc3QgaSA9IHQuX192Y2NPcHRzIHx8IHQ7XG4gIGZvciAoY29uc3QgW3MsIG5dIG9mIGUpXG4gICAgaVtzXSA9IG47XG4gIHJldHVybiBpO1xufTtcbmZ1bmN0aW9uIEcodCwgZSwgaSwgcywgbiwgYykge1xuICByZXR1cm4gYSgpLCBnKHgsIHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIGNzczogITEsXG4gICAgb25FbnRlcjogdC5lbnRlcixcbiAgICBvbkxlYXZlOiB0LmxlYXZlLFxuICAgIG9uQWZ0ZXJMZWF2ZTogdC5hZnRlckxlYXZlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiAkKCgpID0+IFtcbiAgICAgIFQodC4kc2xvdHMsIFwiZGVmYXVsdFwiKVxuICAgIF0pLFxuICAgIF86IDNcbiAgfSwgOCwgW1wib25FbnRlclwiLCBcIm9uTGVhdmVcIiwgXCJvbkFmdGVyTGVhdmVcIl0pO1xufVxuY29uc3QgeiA9IC8qIEBfX1BVUkVfXyAqLyB2KGosIFtbXCJyZW5kZXJcIiwgR11dKSwgRiA9IHkoe1xuICBuYW1lOiBcImNzcy1ncm91cFwiLFxuICBpbmhlcml0QXR0cnM6ICExLFxuICBwcm9wczoge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogITAgfVxuICB9XG59KTtcbmZ1bmN0aW9uIFAodCwgZSwgaSwgcywgbiwgYykge1xuICByZXR1cm4gYSgpLCBnKHgsIHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIG5hbWU6IHQubmFtZVxuICB9LCB7XG4gICAgZGVmYXVsdDogJCgoKSA9PiBbXG4gICAgICBUKHQuJHNsb3RzLCBcImRlZmF1bHRcIilcbiAgICBdKSxcbiAgICBfOiAzXG4gIH0sIDgsIFtcIm5hbWVcIl0pO1xufVxuY29uc3QgcSA9IC8qIEBfX1BVUkVfXyAqLyB2KEYsIFtbXCJyZW5kZXJcIiwgUF1dKSwgaCA9IFwiWy0rXT9bMC05XSouP1swLTldK1wiLCBMID0gW1xuICB7XG4gICAgbmFtZTogXCJweFwiLFxuICAgIHJlZ2V4cDogbmV3IFJlZ0V4cChgXiR7aH1weCRgKVxuICB9LFxuICB7XG4gICAgbmFtZTogXCIlXCIsXG4gICAgcmVnZXhwOiBuZXcgUmVnRXhwKGBeJHtofSUkYClcbiAgfSxcbiAgLyoqXG4gICAqIEZhbGxiYWNrIG9wdGlvblxuICAgKiBJZiBubyBzdWZmaXggc3BlY2lmaWVkLCBhc3NpZ25pbmcgXCJweFwiXG4gICAqL1xuICB7XG4gICAgbmFtZTogXCJweFwiLFxuICAgIHJlZ2V4cDogbmV3IFJlZ0V4cChgXiR7aH0kYClcbiAgfVxuXSwgSiA9ICh0KSA9PiB7XG4gIGlmICh0ID09PSBcImF1dG9cIilcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdCxcbiAgICAgIHZhbHVlOiAwXG4gICAgfTtcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBMLmxlbmd0aDsgZSsrKSB7XG4gICAgY29uc3QgaSA9IExbZV07XG4gICAgaWYgKGkucmVnZXhwLnRlc3QodCkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBpLm5hbWUsXG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHQpXG4gICAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJcIixcbiAgICB2YWx1ZTogdFxuICB9O1xufSwgSyA9ICh0KSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHQpIHtcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICByZXR1cm4geyB0eXBlOiBcInB4XCIsIHZhbHVlOiB0IH07XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgcmV0dXJuIEoodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiXCIsIHZhbHVlOiB0IH07XG4gIH1cbn0sIGYgPSB7XG4gIElETEU6IDAsXG4gIERFU1RST1lFRDogMlxufSwgUSA9IHkoe1xuICBuYW1lOiBcIm5vdGlmaWNhdGlvbnNcIixcbiAgY29tcG9uZW50czoge1xuICAgIFZlbG9jaXR5R3JvdXA6IHosXG4gICAgQ3NzR3JvdXA6IHFcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBncm91cDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9LFxuICAgIHJldmVyc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6IG0ucG9zaXRpb25cbiAgICB9LFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwidnVlLW5vdGlmaWNhdGlvblwiXG4gICAgfSxcbiAgICBhbmltYXRpb25UeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcImNzc1wiXG4gICAgfSxcbiAgICBhbmltYXRpb246IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IG0udmVsb2NpdHlBbmltYXRpb25cbiAgICB9LFxuICAgIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG0uY3NzQW5pbWF0aW9uXG4gICAgfSxcbiAgICBzcGVlZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwXG4gICAgfSxcbiAgICAvKiBUb2RvICovXG4gICAgY29vbGRvd246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzZTNcbiAgICB9LFxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEgLyAwXG4gICAgfSxcbiAgICBpZ25vcmVEdXBsaWNhdGVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITFcbiAgICB9LFxuICAgIGNsb3NlT25DbGljazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICEwXG4gICAgfSxcbiAgICBwYXVzZU9uSG92ZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFtcImNsaWNrXCIsIFwiZGVzdHJveVwiLCBcInN0YXJ0XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHZlbG9jaXR5OiBDLmdldChcInZlbG9jaXR5XCIpLFxuICAgICAgdGltZXJDb250cm9sOiBudWxsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3R1YWxXaWR0aCgpIHtcbiAgICAgIHJldHVybiBLKHRoaXMud2lkdGgpO1xuICAgIH0sXG4gICAgaXNWQSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvblR5cGUgPT09IFwidmVsb2NpdHlcIjtcbiAgICB9LFxuICAgIGNvbXBvbmVudE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZBID8gXCJ2ZWxvY2l0eS1ncm91cFwiIDogXCJjc3MtZ3JvdXBcIjtcbiAgICB9LFxuICAgIHN0eWxlcygpIHtcbiAgICAgIGNvbnN0IHsgeDogdCwgeTogZSB9ID0gVyh0aGlzLnBvc2l0aW9uKSwgaSA9IHRoaXMuYWN0dWFsV2lkdGgudmFsdWUsIHMgPSB0aGlzLmFjdHVhbFdpZHRoLnR5cGUsIG4gPSB7XG4gICAgICAgIHdpZHRoOiBpICsgc1xuICAgICAgfTtcbiAgICAgIHJldHVybiBlICYmIChuW2VdID0gXCIwcHhcIiksIHQgJiYgKHQgPT09IFwiY2VudGVyXCIgPyBuLmxlZnQgPSBgY2FsYyg1MCUgLSAkeytpIC8gMn0ke3N9KWAgOiBuW3RdID0gXCIwcHhcIiksIG47XG4gICAgfSxcbiAgICBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcigodCkgPT4gdC5zdGF0ZSAhPT0gZi5ERVNUUk9ZRUQpO1xuICAgIH0sXG4gICAgYm90VG9Ub3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHlsZXMuaGFzT3duUHJvcGVydHkoXCJib3R0b21cIik7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGQub24oXCJhZGRcIiwgdGhpcy5hZGRJdGVtKSwgZC5vbihcImNsb3NlXCIsIHRoaXMuY2xvc2VJdGVtKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRlc3Ryb3lJZk5lY2Vzc2FyeSh0KSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xpY2tcIiwgdCksIHRoaXMuY2xvc2VPbkNsaWNrICYmIHRoaXMuZGVzdHJveSh0KTtcbiAgICB9LFxuICAgIHBhdXNlVGltZW91dCgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgdGhpcy5wYXVzZU9uSG92ZXIgJiYgKCh0ID0gdGhpcy50aW1lckNvbnRyb2wpID09IG51bGwgfHwgdC5wYXVzZSgpKTtcbiAgICB9LFxuICAgIHJlc3VtZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMucGF1c2VPbkhvdmVyICYmICgodCA9IHRoaXMudGltZXJDb250cm9sKSA9PSBudWxsIHx8IHQucmVzdW1lKCkpO1xuICAgIH0sXG4gICAgYWRkSXRlbSh0ID0ge30pIHtcbiAgICAgIGlmICh0Lmdyb3VwIHx8ICh0Lmdyb3VwID0gXCJcIiksIHQuZGF0YSB8fCAodC5kYXRhID0ge30pLCB0aGlzLmdyb3VwICE9PSB0Lmdyb3VwKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAodC5jbGVhbiB8fCB0LmNsZWFyKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUFsbCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlID0gdHlwZW9mIHQuZHVyYXRpb24gPT0gXCJudW1iZXJcIiA/IHQuZHVyYXRpb24gOiB0aGlzLmR1cmF0aW9uLCBpID0gdHlwZW9mIHQuc3BlZWQgPT0gXCJudW1iZXJcIiA/IHQuc3BlZWQgOiB0aGlzLnNwZWVkLCBzID0gdHlwZW9mIHQuaWdub3JlRHVwbGljYXRlcyA9PSBcImJvb2xlYW5cIiA/IHQuaWdub3JlRHVwbGljYXRlcyA6IHRoaXMuaWdub3JlRHVwbGljYXRlcywgeyB0aXRsZTogbiwgdGV4dDogYywgdHlwZTogbywgZGF0YTogbCwgaWQ6IEkgfSA9IHQsIHIgPSB7XG4gICAgICAgIGlkOiBJIHx8IFIoKSxcbiAgICAgICAgdGl0bGU6IG4sXG4gICAgICAgIHRleHQ6IGMsXG4gICAgICAgIHR5cGU6IG8sXG4gICAgICAgIHN0YXRlOiBmLklETEUsXG4gICAgICAgIHNwZWVkOiBpLFxuICAgICAgICBsZW5ndGg6IGUgKyAyICogaSxcbiAgICAgICAgZGF0YTogbFxuICAgICAgfTtcbiAgICAgIGUgPj0gMCAmJiAodGhpcy50aW1lckNvbnRyb2wgPSBuZXcgWSgoKSA9PiB0aGlzLmRlc3Ryb3kociksIHIubGVuZ3RoLCByKSk7XG4gICAgICBjb25zdCBPID0gdGhpcy5yZXZlcnNlID8gIXRoaXMuYm90VG9Ub3AgOiB0aGlzLmJvdFRvVG9wO1xuICAgICAgbGV0IHUgPSAtMTtcbiAgICAgIGNvbnN0IFMgPSB0aGlzLmFjdGl2ZS5zb21lKChFKSA9PiBFLnRpdGxlID09PSB0LnRpdGxlICYmIEUudGV4dCA9PT0gdC50ZXh0KTtcbiAgICAgICghcyB8fCAhUykgJiYgKE8gPyAodGhpcy5saXN0LnB1c2gociksIHRoaXMuJGVtaXQoXCJzdGFydFwiLCByKSwgdGhpcy5hY3RpdmUubGVuZ3RoID4gdGhpcy5tYXggJiYgKHUgPSAwKSkgOiAodGhpcy5saXN0LnVuc2hpZnQociksIHRoaXMuJGVtaXQoXCJzdGFydFwiLCByKSwgdGhpcy5hY3RpdmUubGVuZ3RoID4gdGhpcy5tYXggJiYgKHUgPSB0aGlzLmFjdGl2ZS5sZW5ndGggLSAxKSksIHUgIT09IC0xICYmIHRoaXMuZGVzdHJveSh0aGlzLmFjdGl2ZVt1XSkpO1xuICAgIH0sXG4gICAgY2xvc2VJdGVtKHQpIHtcbiAgICAgIHRoaXMuZGVzdHJveUJ5SWQodCk7XG4gICAgfSxcbiAgICBub3RpZnlDbGFzcyh0KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBcInZ1ZS1ub3RpZmljYXRpb24tdGVtcGxhdGVcIixcbiAgICAgICAgdGhpcy5jbGFzc2VzLFxuICAgICAgICB0LnR5cGUgfHwgXCJcIlxuICAgICAgXTtcbiAgICB9LFxuICAgIG5vdGlmeVdyYXBwZXJTdHlsZSh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZBID8gdm9pZCAwIDogeyB0cmFuc2l0aW9uOiBgYWxsICR7dC5zcGVlZH1tc2AgfTtcbiAgICB9LFxuICAgIGRlc3Ryb3kodCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHQudGltZXIpLCB0LnN0YXRlID0gZi5ERVNUUk9ZRUQsIHRoaXMuY2xlYW4oKSwgdGhpcy4kZW1pdChcImRlc3Ryb3lcIiwgdCk7XG4gICAgfSxcbiAgICBkZXN0cm95QnlJZCh0KSB7XG4gICAgICBjb25zdCBlID0gdGhpcy5saXN0LmZpbmQoKGkpID0+IGkuaWQgPT09IHQpO1xuICAgICAgZSAmJiB0aGlzLmRlc3Ryb3koZSk7XG4gICAgfSxcbiAgICBkZXN0cm95QWxsKCkge1xuICAgICAgdGhpcy5hY3RpdmUuZm9yRWFjaCh0aGlzLmRlc3Ryb3kpO1xuICAgIH0sXG4gICAgZ2V0QW5pbWF0aW9uKHQsIGUpIHtcbiAgICAgIHZhciBzO1xuICAgICAgY29uc3QgaSA9IChzID0gdGhpcy5hbmltYXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBzW3RdO1xuICAgICAgcmV0dXJuIHR5cGVvZiBpID09IFwiZnVuY3Rpb25cIiA/IGkuY2FsbCh0aGlzLCBlKSA6IGk7XG4gICAgfSxcbiAgICBlbnRlcih0LCBlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNWQSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgaSA9IHRoaXMuZ2V0QW5pbWF0aW9uKFwiZW50ZXJcIiwgdCk7XG4gICAgICB0aGlzLnZlbG9jaXR5KHQsIGksIHtcbiAgICAgICAgZHVyYXRpb246IHRoaXMuc3BlZWQsXG4gICAgICAgIGNvbXBsZXRlOiBlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxlYXZlKHQsIGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1ZBKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBpID0gdGhpcy5nZXRBbmltYXRpb24oXCJsZWF2ZVwiLCB0KTtcbiAgICAgIHRoaXMudmVsb2NpdHkodCwgaSwge1xuICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGVlZCxcbiAgICAgICAgY29tcGxldGU6IGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xlYW4oKSB7XG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKCh0KSA9PiB0LnN0YXRlICE9PSBmLkRFU1RST1lFRCk7XG4gICAgfVxuICB9XG59KTtcbmNvbnN0IFUgPSBbXCJkYXRhLWlkXCJdLCBYID0gW1wib25DbGlja1wiXSwgWiA9IFtcImlubmVySFRNTFwiXSwgdHQgPSBbXCJpbm5lckhUTUxcIl07XG5mdW5jdGlvbiBldCh0LCBlLCBpLCBzLCBuLCBjKSB7XG4gIHJldHVybiBhKCksIHAoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcInZ1ZS1ub3RpZmljYXRpb24tZ3JvdXBcIixcbiAgICBzdHlsZTogYih0LnN0eWxlcylcbiAgfSwgW1xuICAgIChhKCksIGcoayh0LmNvbXBvbmVudE5hbWUpLCB7XG4gICAgICBuYW1lOiB0LmFuaW1hdGlvbk5hbWUsXG4gICAgICBvbkVudGVyOiB0LmVudGVyLFxuICAgICAgb25MZWF2ZTogdC5sZWF2ZSxcbiAgICAgIG9uQWZ0ZXJMZWF2ZTogdC5jbGVhblxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6ICQoKCkgPT4gW1xuICAgICAgICAoYSghMCksIHAoXywgbnVsbCwgQih0LmFjdGl2ZSwgKG8pID0+IChhKCksIHAoXCJkaXZcIiwge1xuICAgICAgICAgIGtleTogby5pZCxcbiAgICAgICAgICBjbGFzczogXCJ2dWUtbm90aWZpY2F0aW9uLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogYih0Lm5vdGlmeVdyYXBwZXJTdHlsZShvKSksXG4gICAgICAgICAgXCJkYXRhLWlkXCI6IG8uaWQsXG4gICAgICAgICAgb25Nb3VzZWVudGVyOiBlWzBdIHx8IChlWzBdID0gKC4uLmwpID0+IHQucGF1c2VUaW1lb3V0ICYmIHQucGF1c2VUaW1lb3V0KC4uLmwpKSxcbiAgICAgICAgICBvbk1vdXNlbGVhdmU6IGVbMV0gfHwgKGVbMV0gPSAoLi4ubCkgPT4gdC5yZXN1bWVUaW1lb3V0ICYmIHQucmVzdW1lVGltZW91dCguLi5sKSlcbiAgICAgICAgfSwgW1xuICAgICAgICAgIFQodC4kc2xvdHMsIFwiYm9keVwiLCB7XG4gICAgICAgICAgICBjbGFzczogRChbdC5jbGFzc2VzLCBvLnR5cGVdKSxcbiAgICAgICAgICAgIGl0ZW06IG8sXG4gICAgICAgICAgICBjbG9zZTogKCkgPT4gdC5kZXN0cm95KG8pXG4gICAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgICAgTihcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBEKHQubm90aWZ5Q2xhc3MobykpLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAobCkgPT4gdC5kZXN0cm95SWZOZWNlc3NhcnkobylcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgby50aXRsZSA/IChhKCksIHAoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJub3RpZmljYXRpb24tdGl0bGVcIixcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IG8udGl0bGVcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgWikpIDogSChcIlwiLCAhMCksXG4gICAgICAgICAgICAgIE4oXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIm5vdGlmaWNhdGlvbi1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBvLnRleHRcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgdHQpXG4gICAgICAgICAgICBdLCAxMCwgWClcbiAgICAgICAgICBdKVxuICAgICAgICBdLCA0NCwgVSkpKSwgMTI4KSlcbiAgICAgIF0pLFxuICAgICAgXzogM1xuICAgIH0sIDQwLCBbXCJuYW1lXCIsIFwib25FbnRlclwiLCBcIm9uTGVhdmVcIiwgXCJvbkFmdGVyTGVhdmVcIl0pKVxuICBdLCA0KTtcbn1cbmNvbnN0IGl0ID0gLyogQF9fUFVSRV9fICovIHYoUSwgW1tcInJlbmRlclwiLCBldF1dKSwgQSA9ICh0KSA9PiB7XG4gIHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSB7IHRpdGxlOiBcIlwiLCB0ZXh0OiB0IH0pLCB0eXBlb2YgdCA9PSBcIm9iamVjdFwiICYmIGQuZW1pdChcImFkZFwiLCB0KTtcbn07XG5BLmNsb3NlID0gKHQpID0+IHtcbiAgZC5lbWl0KFwiY2xvc2VcIiwgdCk7XG59O1xuY29uc3QgcnQgPSAoKSA9PiAoeyBub3RpZnk6IEEgfSk7XG5mdW5jdGlvbiBzdCh0LCBlID0ge30pIHtcbiAgT2JqZWN0LmVudHJpZXMoZSkuZm9yRWFjaCgocykgPT4gQy5zZXQoLi4ucykpO1xuICBjb25zdCBpID0gZS5uYW1lIHx8IFwibm90aWZ5XCI7XG4gIHQuY29uZmlnLmdsb2JhbFByb3BlcnRpZXNbXCIkXCIgKyBpXSA9IEEsIHQuY29tcG9uZW50KGUuY29tcG9uZW50TmFtZSB8fCBcIk5vdGlmaWNhdGlvbnNcIiwgaXQpO1xufVxuY29uc3QgYXQgPSB7XG4gIGluc3RhbGw6IHN0XG59O1xuZXhwb3J0IHtcbiAgYXQgYXMgZGVmYXVsdCxcbiAgQSBhcyBub3RpZnksXG4gIHJ0IGFzIHVzZU5vdGlmaWNhdGlvblxufTtcbihmdW5jdGlvbigpe3ZhciBvO1widXNlIHN0cmljdFwiO3RyeXtpZih0eXBlb2YgZG9jdW1lbnQhPVwidW5kZWZpbmVkXCIpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLm5vbmNlPShvPWRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIm1ldGFbcHJvcGVydHk9Y3NwLW5vbmNlXVwiKSk9PW51bGw/dm9pZCAwOm8uY29udGVudCxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiLnZ1ZS1ub3RpZmljYXRpb24tZ3JvdXB7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjUwMDB9LnZ1ZS1ub3RpZmljYXRpb24td3JhcHBlcntkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjt3aWR0aDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MH0ubm90aWZpY2F0aW9uLXRpdGxle2ZvbnQtd2VpZ2h0OjYwMH0udnVlLW5vdGlmaWNhdGlvbi10ZW1wbGF0ZXtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOndoaXRlO3RleHQtYWxpZ246bGVmdH0udnVlLW5vdGlmaWNhdGlvbntkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmxlZnQ7Zm9udC1zaXplOjEycHg7cGFkZGluZzoxMHB4O21hcmdpbjowIDVweCA1cHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM0NEE0RkM7Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkICMxODdGRTd9LnZ1ZS1ub3RpZmljYXRpb24ud2FybntiYWNrZ3JvdW5kOiNmZmI2NDg7Ym9yZGVyLWxlZnQtY29sb3I6I2Y0OGEwNn0udnVlLW5vdGlmaWNhdGlvbi5lcnJvcntiYWNrZ3JvdW5kOiNFNTRENDI7Ym9yZGVyLWxlZnQtY29sb3I6I2I4MmUyNH0udnVlLW5vdGlmaWNhdGlvbi5zdWNjZXNze2JhY2tncm91bmQ6IzY4Q0Q4Njtib3JkZXItbGVmdC1jb2xvcjojNDJhODVmfS52bi1mYWRlLWVudGVyLWFjdGl2ZSwudm4tZmFkZS1sZWF2ZS1hY3RpdmUsLnZuLWZhZGUtbW92ZXt0cmFuc2l0aW9uOmFsbCAuNXN9LnZuLWZhZGUtZW50ZXItZnJvbSwudm4tZmFkZS1sZWF2ZS10b3tvcGFjaXR5OjB9XCIpKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGUpfX1jYXRjaChpKXtjb25zb2xlLmVycm9yKFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCIsaSl9fSkoKTtcbiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVJlbW92ZUFsbERhdGEoKSB7XG4gIGNvbnN0IHN0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG4gIGF3YWl0IHN0b3JhZ2Uuc2F2ZUludGVydmFsTGlzdChbXSk7XG4gIGF3YWl0IEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShNZXNzYWdlcy5DbGVhckFsbERhdGEpO1xufVxuIiwiaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlUmVzdG9yZURhdGEoanNvbjogc3RyaW5nKSB7XG4gIGlmIChqc29uICE9IG51bGwgJiYganNvbiAhPSB1bmRlZmluZWQgJiYganNvbiAhPSAnJykge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgIGF3YWl0IEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlOiBNZXNzYWdlcy5SZXN0b3JlLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2xhc3M9XCJmaWxsZWQtaW5cIlxuICAgICAgICBpZD1cInZpZXdUaW1lSW5CYWRnZVwiXG4gICAgICAgIHYtbW9kZWw9XCJ2aWV3VGltZUluQmFkZ2VcIlxuICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5WSUVXX1RJTUVfSU5fQkFER0UsICRldmVudC50YXJnZXQpXCJcbiAgICAgIC8+XG4gICAgICA8c3Bhbj57eyB0KCd2aWV3VGltZUluQmFkZ2UubWVzc2FnZScpIH19PC9zcGFuPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICB7eyB0KCd2aWV3VGltZUluQmFkZ2UuZGVzY3JpcHRpb24nKSB9fVxuICAgICAgPC9wPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2xhc3M9XCJmaWxsZWQtaW5cIlxuICAgICAgICBpZD1cImJsb2NrRGVmZXJyYWxcIlxuICAgICAgICB2LW1vZGVsPVwiYWxsb3dEZWZlcnJpbmdCbG9ja1wiXG4gICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZShTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMLCAkZXZlbnQudGFyZ2V0KVwiXG4gICAgICAvPlxuICAgICAgPHNwYW4+e3sgdCgnYWxsb3dEZWZlcnJpbmdCbG9jay5tZXNzYWdlJykgfX08L3NwYW4+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIHt7IHQoJ2FsbG93RGVmZXJyaW5nQmxvY2suZGVzY3JpcHRpb24nKSB9fVxuICAgICAgPC9wPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2xhc3M9XCJmaWxsZWQtaW5cIlxuICAgICAgICBpZD1cImRhcmtNb2RlXCJcbiAgICAgICAgdi1tb2RlbD1cImRhcmtNb2RlXCJcbiAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuREFSS19NT0RFLCAkZXZlbnQudGFyZ2V0KVwiXG4gICAgICAvPlxuICAgICAgPHNwYW4+e3sgdCgnZGFya1RoZW1lLm1lc3NhZ2UnKSB9fTwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlciBkLWlubGluZS1ibG9ja1wiPnt7IHQoJ2ludGVydmFsSW5hY3Rpdml0eS5tZXNzYWdlJykgfX0gPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbWwtMTBcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgY2xhc3M9XCJvcHRpb25cIlxuICAgICAgICB2LW1vZGVsPVwiaW50ZXJ2YWxJbmFjdGl2aXR5XCJcbiAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuSU5URVJWQUxfSU5BQ1RJVklUWSwgJGV2ZW50LnRhcmdldClcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5TZWNvbmRzXzMwXCI+MzAge3sgdCgnc2VjLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5TZWNvbmRzXzQ1XCI+NDUge3sgdCgnc2VjLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fMVwiPjEge3sgdCgnbWluLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fMlwiPjIge3sgdCgnMm1pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJJbmFjdGl2aXR5SW50ZXJ2YWwuTWluXzVcIj41IHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLk1pbl8xMFwiPjEwIHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLk1pbl8yMFwiPjIwIHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLk1pbl8zMFwiPjMwIHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgdCgnaW50ZXJ2YWxJbmFjdGl2aXR5LmRlc2NyaXB0aW9uJykgfX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgnZXhwb3J0VG9Dc3ZTZXR0aW5nLm1lc3NhZ2UnKSB9fTwvbGFiZWw+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHQoJ2V4cG9ydFRvQ3N2U2V0dGluZy5kZXNjcmlwdGlvbicpIH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleHBvcnQtYmxvY2tcIj5cbiAgICAgIDxWdWVEYXRlUGlja2VyXG4gICAgICAgIHJhbmdlXG4gICAgICAgIDplbmFibGUtdGltZS1waWNrZXI9XCJmYWxzZVwiXG4gICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXJcIlxuICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWREYXRlXCJcbiAgICAgICAgOnByZXNldC1yYW5nZXM9XCJwcmVzZXRSYW5nZXNcIlxuICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiaGFuZGxlRGF0ZVwiXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSAjeWVhcmx5PVwieyBsYWJlbCwgcmFuZ2UsIHByZXNldERhdGVSYW5nZSB9XCI+XG4gICAgICAgICAgPHNwYW4gQGNsaWNrPVwicHJlc2V0RGF0ZVJhbmdlKHJhbmdlKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9WdWVEYXRlUGlja2VyPlxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdleHBvcnRUb0Nzdi5tZXNzYWdlJylcIiBAY2xpY2s9XCJleHBvcnRUb0NzdigpXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdyZW1vdmVBbGxEYXRhLm1lc3NhZ2UnKSB9fTwvbGFiZWw+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHQoJ3JlbW92ZUFsbERhdGEuZGVzY3JpcHRpb24nKSB9fTwvcD5cbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIDp2YWx1ZT1cInQoJ3JlbW92ZS5tZXNzYWdlJylcIiBAY2xpY2s9XCJyZW1vdmVBbGwoKVwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgnYmFja3VwQW5kUmVzdG9yZS5tZXNzYWdlJykgfX08L2xhYmVsPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCdiYWNrdXBBbmRSZXN0b3JlLmRlc2NyaXB0aW9uJykgfX08L3A+XG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdiYWNrdXAubWVzc2FnZScpXCIgQGNsaWNrPVwiYmFja3VwKClcIiAvPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgcmVmPVwicmVzdG9yZUZpbGVcIlxuICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCJcbiAgICAgIEBjaGFuZ2U9XCJyZXN0b3JlRmlsZVVwbG9hZCgpXCJcbiAgICAgIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIC8+XG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1sLTEwXCIgOnZhbHVlPVwidCgncmVzdG9yZS5tZXNzYWdlJylcIiBAY2xpY2s9XCJyZXN0b3JlKClcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcbiAgICAgICAgaWQ9XCJzaG93Q2hhbmdlbG9nXCJcbiAgICAgICAgdi1tb2RlbD1cInNob3dDaGFuZ2Vsb2dcIlxuICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5TSE9XX0NIQU5HRUxPRywgJGV2ZW50LnRhcmdldClcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuPnt7IHQoJ3Nob3dDaGFuZ2Vsb2cubWVzc2FnZScpIH19PC9zcGFuPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICB7eyB0KCdzaG93Q2hhbmdlbG9nLmRlc2NyaXB0aW9uJykgfX1cbiAgICAgIDwvcD5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cInJlbW92ZUFsbENvbmZpcm1Nb2RhbFwiIGNsYXNzPVwibW9kYWxcIiB2LWlmPVwibmVlZFRvQ29uZmlybURlbGV0ZUFsbERhdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7IHQoJ3JlbW92ZUFsbERhdGFDb25maXJtLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImFsZXJ0XCJcbiAgICAgICAgICA6dmFsdWU9XCJ0KCdyZW1vdmUubWVzc2FnZScpXCJcbiAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVBbGxDb25maXJtKClcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaW5mbyBtbC0xMFwiIDp2YWx1ZT1cInQoJ2NhbmNlbC5tZXNzYWdlJylcIiBAY2xpY2s9XCJjYW5jZWwoKVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnR2VuZXJhbFNldHRpbmdzJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQge1xuICBCTE9DS19ERUZFUlJBTF9ERUZBVUxULFxuICBEQVJLX01PREVfREVGQVVMVCxcbiAgSU5URVJWQUxfSU5BQ1RJVklUWV9ERUZBVUxULFxuICBTdG9yYWdlUGFyYW1zLFxuICBWSUVXX1RJTUVfSU5fQkFER0VfREVGQVVMVCxcbiAgSW5hY3Rpdml0eUludGVydmFsLFxuICBTSE9XX0NIQU5HRUxPR19ERUZBVUxULFxufSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IHJhbmdlcywgVGhpc1dlZWtSYW5nZSwgdG9kYXlMb2NhbERhdGUgfSBmcm9tICcuLi91dGlscy9kYXRlJztcbmltcG9ydCB7IHVzZUltcG9ydFRvQ3N2IH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUltcG9ydFRvQ3N2JztcbmltcG9ydCB7IEZpbGVUeXBlLCB1c2VGaWxlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUZpbGUnO1xuaW1wb3J0IHsgdXNlUmVtb3ZlQWxsRGF0YSB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VSZW1vdmVBbGxEYXRhJztcbmltcG9ydCB7IGluamVjdFRhYnNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9pbmplY3QtdGFicy1yZXBvc2l0b3J5JztcbmltcG9ydCB7IHVzZVJlc3RvcmVEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVJlc3RvcmVEYXRhJztcbmltcG9ydCB7IGFwcGx5RGFya01vZGUgfSBmcm9tICcuLi91dGlscy9kYXJrLW1vZGUnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuY29uc3Qgbm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XG5cbmNvbnN0IHZpZXdUaW1lSW5CYWRnZSA9IHJlZjxib29sZWFuPigpO1xuY29uc3QgaW50ZXJ2YWxJbmFjdGl2aXR5ID0gcmVmPEluYWN0aXZpdHlJbnRlcnZhbD4oKTtcbmNvbnN0IGFsbG93RGVmZXJyaW5nQmxvY2sgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IGRhcmtNb2RlID0gcmVmPGJvb2xlYW4+KCk7XG5jb25zdCBzZWxlY3RlZERhdGUgPSByZWY8RGF0ZVtdPigpO1xuXG5jb25zdCBwcmVzZXRSYW5nZXMgPSByYW5nZXMoKTtcblxuY29uc3QgbmVlZFRvQ29uZmlybURlbGV0ZUFsbERhdGEgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IHNob3dDaGFuZ2Vsb2cgPSByZWY8Ym9vbGVhbj4oKTtcblxuY29uc3QgcmVzdG9yZUZpbGUgPSByZWY8YW55PigpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICB2aWV3VGltZUluQmFkZ2UudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5WSUVXX1RJTUVfSU5fQkFER0UsXG4gICAgVklFV19USU1FX0lOX0JBREdFX0RFRkFVTFQsXG4gICk7XG4gIGludGVydmFsSW5hY3Rpdml0eS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLklOVEVSVkFMX0lOQUNUSVZJVFksXG4gICAgSU5URVJWQUxfSU5BQ1RJVklUWV9ERUZBVUxULFxuICApO1xuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xuICBhbGxvd0RlZmVycmluZ0Jsb2NrLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuQkxPQ0tfREVGRVJSQUwsXG4gICAgQkxPQ0tfREVGRVJSQUxfREVGQVVMVCxcbiAgKTtcbiAgc2VsZWN0ZWREYXRlLnZhbHVlID0gVGhpc1dlZWtSYW5nZTtcbiAgc2hvd0NoYW5nZWxvZy52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlNIT1dfQ0hBTkdFTE9HLFxuICAgIFNIT1dfQ0hBTkdFTE9HX0RFRkFVTFQsXG4gICk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2Uoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB0YXJnZXQ6IGFueSkge1xuICBpZiAodGFyZ2V0ICE9IG51bGwpXG4gICAgYXdhaXQgc2F2ZShcbiAgICAgIHN0b3JhZ2VQYXJhbSxcbiAgICAgIHN0b3JhZ2VQYXJhbSA9PSBTdG9yYWdlUGFyYW1zLklOVEVSVkFMX0lOQUNUSVZJVFkgPyBOdW1iZXIodGFyZ2V0LnZhbHVlKSA6IHRhcmdldC5jaGVja2VkLFxuICAgICk7XG5cbiAgaWYgKHN0b3JhZ2VQYXJhbSA9PSBTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSkgYXBwbHlEYXJrTW9kZSh0YXJnZXQuY2hlY2tlZCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmUoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB2YWx1ZTogYW55KSB7XG4gIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoc3RvcmFnZVBhcmFtLCB2YWx1ZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURhdGUobW9kZWxEYXRhOiBEYXRlW10pIHtcbiAgc2VsZWN0ZWREYXRlLnZhbHVlID0gbW9kZWxEYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleHBvcnRUb0NzdigpIHtcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xuICBjb25zdCBkYXRlVG8gPSBzZWxlY3RlZERhdGUudmFsdWU/LlsxXSBhcyBEYXRlO1xuICBpZiAoZGF0ZUZyb20gPT0gdW5kZWZpbmVkIHx8IGRhdGVUbyA9PSB1bmRlZmluZWQpIHtcbiAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcbiAgICAgIHRpdGxlOiAnTm8gdGltZSBwZXJpb2Qgc2VsZWN0ZWQnLFxuICAgICAgdHlwZTogJ3dhcm4nLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNzdiA9IGF3YWl0IHVzZUltcG9ydFRvQ3N2KGRhdGVGcm9tLCBkYXRlVG8pO1xuICAgIHVzZUZpbGUoXG4gICAgICBjc3YsXG4gICAgICBGaWxlVHlwZS5DU1YsXG4gICAgICBgd2Vic2l0ZXNfJHtkYXRlRnJvbS50b0xvY2FsZURhdGVTdHJpbmcoKX0tJHtkYXRlVG8udG9Mb2NhbGVEYXRlU3RyaW5nKCl9LmNzdmAsXG4gICAgKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XG4gIG5lZWRUb0NvbmZpcm1EZWxldGVBbGxEYXRhLnZhbHVlID0gdHJ1ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQWxsQ29uZmlybSgpIHtcbiAgYXdhaXQgdXNlUmVtb3ZlQWxsRGF0YSgpO1xuICBuZWVkVG9Db25maXJtRGVsZXRlQWxsRGF0YS52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjYW5jZWwoKSB7XG4gIG5lZWRUb0NvbmZpcm1EZWxldGVBbGxEYXRhLnZhbHVlID0gZmFsc2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJhY2t1cCgpIHtcbiAgY29uc3QgcmVwbyA9IGF3YWl0IGluamVjdFRhYnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IHRhYnMgPSByZXBvLmdldFRhYnMoKTtcbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHRhYnMpO1xuICB1c2VGaWxlKGpzb24sIEZpbGVUeXBlLkpTT04sIGBiYWNrdXAtJHt0b2RheUxvY2FsRGF0ZSgpfS5qc29uYCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmUoKSB7XG4gIHJlc3RvcmVGaWxlLnZhbHVlLmNsaWNrKCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVGaWxlVXBsb2FkKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZpbGUgPSByZXN0b3JlRmlsZS52YWx1ZS5maWxlc1swXTtcbiAgICBpZiAoZmlsZSAhPSBudWxsICYmIGZpbGUudHlwZSA9PT0gRmlsZVR5cGUuSlNPTikge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlLCAnVVRGLTgnKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBhc3luYyByZWFkZXJFdmVudCA9PiB7XG4gICAgICAgIGlmIChyZWFkZXJFdmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQ/LnJlc3VsdDtcbiAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCB1c2VSZXN0b3JlRGF0YShjb250ZW50IGFzIHN0cmluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcbiAgICAgICAgdGl0bGU6ICdXcm9uZyByZXN0b3JlIGZpbGUgZm9ybWF0JyxcbiAgICAgICAgdHlwZTogJ3dhcm4nLFxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcbiAgICAgIHRpdGxlOiAnV3JvbmcgcmVzdG9yZSBmaWxlIGZvcm1hdCcsXG4gICAgICB0eXBlOiAnd2FybicsXG4gICAgfSk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmV4cG9ydC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5cbi5leHBvcnQtYmxvY2sgLmRhdGUtcGlja2VyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUFpZ0FBQUlvQmxDSlIyd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFGQlNVUkJWRGlOalpHeFMwSlJGSWUvYzY4TjJkaGdXRUZST2ppNWxJUUphaGhCOU9lNmFQZ2tpQUozbDBvU3M2MmhVSmYzM2owdEt2SjZ6enpqNFh6ZjVmNStNcW1mM3lQc2l0bTYzV2svZnJMQlRCdmxyRHEvaWZKbEVQYUFvanJmbXpiSzJRMWhEeWdDR1dOQ3VSSGhGY2lyODd1eitzVitFank1S21YVStXMGdEd3l0TTNjQ01LdVdEalNsbmlxbndJdFJXMHQzbnNaUkdMUURGSUNoRFUxMXUvdjhMb3VEZFpJa0dFQldYNG1UT0hGQkV2eEhFSlVJREJTQzVaOGpjS3hnUmZLZ3l2Rjg5V0ZEVTRuQ0FLazRnYlA0S01GeW9RUnF4SSs3TmRIRlNtQTVZQ3pJRU9ISVNlakZWV3dTNEVWZ2wySmRSZUFOeU1WSlpBMjhER3gyZlhhb29YZ0tKMFFxbHYvZ3hTUkpaQk40bmNTQXRvQ0N3c0JZamExcU1lbFdieVJXYXdxRGVTWk5BM3dEZld1MW1tNzFSa253cXNSYXJRSjk0T2NYZ3JQamU3UTlNb1FBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEZhdmljb24odXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBodHRwczovL3d3dy5nb29nbGUuY29tL3MyL2Zhdmljb25zP2RvbWFpbj0ke3VybH0mc3o9NjRgO1xufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwIGNsYXNzPVwidGl0bGUgbXQtMFwiPnt7IHQoJ3doaXRlTGlzdC5tZXNzYWdlJykgfX08L3A+XG4gICAgPHVsIHJlYWRvbmx5IGNsYXNzPVwidXJsLWxpc3RcIj5cbiAgICAgIDxsaSB2LWZvcj1cIih1cmwsIGkpIG9mIHdoaXRlTGlzdFwiIDprZXk9XCJpXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGVsZXRlLnBuZ1wiIGhlaWdodD1cIjE2XCIgQGNsaWNrPVwiZGVsZXRlRnJvbVdoaXRlTGlzdCh1cmwpXCIgLz5cbiAgICAgICAgICA8RmF2aWNvbiA6dHlwZT1cIlR5cGVPZlVybC5XZWJTaXRlXCIgOmZhdmljb249XCJnZXRGYXZpY29uKHVybClcIiAvPlxuICAgICAgICAgIDxzcGFuPnt7IHVybCB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGRpdiBjbGFzcz1cIm10LTIwXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzcz1cImQtaW5saW5lLWJsb2NrIGN1c3RvbS13aWR0aFwiXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cInQoJ2VudGVyV2Vic2l0ZS5tZXNzYWdlJylcIlxuICAgICAgICB2LW1vZGVsPVwibmV3V2Vic2l0ZUZvcldoaXRlTGlzdFwiXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cImQtaW5saW5lLWJsb2NrIHNtYWxsLWJ0biBtbC0xMFwiXG4gICAgICAgIDp2YWx1ZT1cInQoJ2FkZFdlYnNpdGUubWVzc2FnZScpXCJcbiAgICAgICAgOmRpc2FibGVkPVwibmV3V2Vic2l0ZUZvcldoaXRlTGlzdCA9PSBudWxsIHx8IG5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QgPT0gJydcIlxuICAgICAgICBAY2xpY2s9XCJhZGRUb1doaXRlTGlzdCgpXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1doaXRlTGlzdCcsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgRmF2aWNvbiBmcm9tICcuL0Zhdmljb24udnVlJztcbmltcG9ydCB7IGdldEZhdmljb24gfSBmcm9tICcuLi91dGlscy9mYXZpY29uJztcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBUeXBlT2ZVcmwgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgeyBpc0RvbWFpbkVxdWFscyB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQgeyBleHRyYWN0SG9zdG5hbWUgfSBmcm9tICcuLi91dGlscy9leHRyYWN0LWhvc3RuYW1lJztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5cbmNvbnN0IG5vdGlmaWNhdGlvbiA9IHVzZU5vdGlmaWNhdGlvbigpO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbmNvbnN0IHdoaXRlTGlzdCA9IHJlZjxzdHJpbmdbXT4oKTtcbmNvbnN0IG5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QgPSByZWY8c3RyaW5nPigpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICB3aGl0ZUxpc3QudmFsdWUgPSBPYmplY3QudmFsdWVzKGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkJMQUNLX0xJU1QsIFtdKSk7XG59KTtcblxuZnVuY3Rpb24gYWRkVG9XaGl0ZUxpc3QoKSB7XG4gIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHdoaXRlTGlzdC52YWx1ZT8uZmluZCh4ID0+XG4gICAgaXNEb21haW5FcXVhbHMoZXh0cmFjdEhvc3RuYW1lKHgpLCBleHRyYWN0SG9zdG5hbWUobmV3V2Vic2l0ZUZvcldoaXRlTGlzdC52YWx1ZSEpKSxcbiAgKTtcbiAgaWYgKGV4aXN0aW5nSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbm90aWZpY2F0aW9uLm5vdGlmeSh7XG4gICAgICB0aXRsZTogJ1lvdSBoYXZlIGFscmVhZHkgYWRkZWQgdGhpcyBzaXRlJyxcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbmV3V2Vic2l0ZSA9IGV4dHJhY3RIb3N0bmFtZShuZXdXZWJzaXRlRm9yV2hpdGVMaXN0LnZhbHVlISk7XG4gICAgd2hpdGVMaXN0LnZhbHVlPy5wdXNoKG5ld1dlYnNpdGUpO1xuICAgIHNhdmUod2hpdGVMaXN0LnZhbHVlKTtcbiAgICBuZXdXZWJzaXRlRm9yV2hpdGVMaXN0LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlRnJvbVdoaXRlTGlzdCh1cmw6IHN0cmluZykge1xuICB3aGl0ZUxpc3QudmFsdWUgPSB3aGl0ZUxpc3QudmFsdWUhLmZpbHRlcih4ID0+IHggIT0gdXJsKTtcbiAgc2F2ZSh3aGl0ZUxpc3QudmFsdWUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzYXZlKHZhbHVlOiBhbnkpIHtcbiAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLkJMQUNLX0xJU1QsIHZhbHVlKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmFib3V0IC5hYm91dC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20td2lkdGgge1xuICB3aWR0aDogNTM4cHg7XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzgxYTRhYjUxX19cIiIsImltcG9ydCB7IGNvbnZlcnRISE1NVG9TZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcblxuZXhwb3J0IGNsYXNzIFJlc3RyaWN0aW9uIHtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHRpbWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihkb21haW46IHN0cmluZywgaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyKSB7XG4gICAgdGhpcy5kb21haW4gPSBkb21haW47XG4gICAgdGhpcy50aW1lID0gY29udmVydEhITU1Ub1NlY29uZHMoaG91cnMsIG1pbnV0ZXMpO1xuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDx1bCByZWFkb25seSBjbGFzcz1cInVybC1saXN0XCI+XG4gICAgPGxpIHYtZm9yPVwiKGxpbWl0LCBpKSBvZiBsaXN0XCIgOmtleT1cImlcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2RlbGV0ZS5wbmdcIiBoZWlnaHQ9XCIxNlwiIEBjbGljaz1cImRlbGV0ZUZyb21MaXN0KGxpbWl0LmRvbWFpbilcIiAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgQGNsaWNrPVwiZWRpdEl0ZW1Gcm9tTGlzdChsaW1pdC5kb21haW4sIGxpbWl0LnRpbWUpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEZhdmljb24gOnR5cGU9XCJUeXBlT2ZVcmwuV2ViU2l0ZVwiIDpmYXZpY29uPVwiZ2V0RmF2aWNvbihsaW1pdC5kb21haW4pXCIgLz5cbiAgICAgICAgPHNwYW4+e3sgbGltaXQuZG9tYWluIH19PC9zcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGltZS12YWx1ZSBkLWlubGluZS1ibG9ja1wiIHYtaWY9XCIhY29tcGxldGVseUJsb2NrZWQobGltaXQudGltZSlcIj5cbiAgICAgICAgICAgIHt7IHQoJ2xpbWl0Lm1lc3NhZ2UnKSB9fSA6IHt7IGdldFRpbWUobGltaXQudGltZSkgfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJibG9ja2VkXCIgdi1pZj1cImNvbXBsZXRlbHlCbG9ja2VkKGxpbWl0LnRpbWUpXCI+XG4gICAgICAgICAgICB7eyB0KCdjb21wbGV0ZWx5QmxvY2tlZC5tZXNzYWdlJykgfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgPC91bD5cbiAgPGRpdiBjbGFzcz1cImxpbWl0cy10aW1lLWJsb2NrIG10LTIwXCI+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICA6ZGlzYWJsZWQ9XCJpc0VkaXRcIlxuICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiXG4gICAgICA6cGxhY2Vob2xkZXI9XCJ0KCdlbnRlcldlYnNpdGUubWVzc2FnZScpXCJcbiAgICAgIHYtbW9kZWw9XCJuZXdXZWJzaXRlRm9yTGlzdFwiXG4gICAgLz5cbiAgICA8VnVlRGF0ZVBpY2tlciB2LW1vZGVsPVwidGltZVwiIHRpbWUtcGlja2VyIGNsYXNzPVwiZGF0ZS1waWNrZXIgaGVpZ2h0XCIgLz5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBzbWFsbC1idG5cIlxuICAgICAgOnZhbHVlPVwiIWlzRWRpdCA/IHQoJ2FkZFdlYnNpdGUubWVzc2FnZScpIDogdCgnc2F2ZS5tZXNzYWdlJylcIlxuICAgICAgOmRpc2FibGVkPVwiaXNEaXNhYmxlZFNhdmluZ1wiXG4gICAgICBAY2xpY2s9XCJpc0VkaXQgPyBlZGl0SXRlbSgpIDogYWRkVG9MaXN0KClcIlxuICAgIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibXQtMTBcIiB2LWlmPVwic2hvd0NvbXBsZXRlbHlCbG9ja1ZhbHVlXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiYmxvY2stY2hlY2tib3hcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBjbGFzcz1cImZpbGxlZC1pblwiXG4gICAgICAgIGlkPVwidmlld1RpbWVJbkJhZGdlXCJcbiAgICAgICAgdi1tb2RlbD1cImlzQ2hlY2tlZENvbXBsZXRlbHlCbG9ja2VkXCJcbiAgICAgICAgQGNoYW5nZT1cImNvbXBsZXRlbHlCbG9ja1wiXG4gICAgICAvPlxuICAgICAgPHNwYW4+e3sgdCgnY29tcGxldGVseUJsb2NrZWQuZGVzY3JpcHRpb24nKSB9fTwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdMaXN0V2l0aFRpbWUnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEZhdmljb24gZnJvbSAnLi9GYXZpY29uLnZ1ZSc7XG5pbXBvcnQgeyBnZXRGYXZpY29uIH0gZnJvbSAnLi4vdXRpbHMvZmF2aWNvbic7XG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3V0aWxzL3RpbWUnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IExpc3RXaXRoVGltZSwgVHlwZU9mVXJsIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgaXNEb21haW5FcXVhbHMgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IHsgZXh0cmFjdEhvc3RuYW1lIH0gZnJvbSAnLi4vdXRpbHMvZXh0cmFjdC1ob3N0bmFtZSc7XG5pbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcywgY29udmVydFNlY29uZHNUb0hITU0gfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9lbnRpdHkvcmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgQmFzZVRpbWVMaXN0IH0gZnJvbSAnLi4vZW50aXR5L2Jhc2VUaW1lTGlzdCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vZW50aXR5L25vdGlmaWNhdGlvbic7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgdHlwZTogTGlzdFdpdGhUaW1lO1xufT4oKTtcblxuY29uc3Qgbm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbmNvbnN0IGxpc3QgPSByZWY8QmFzZVRpbWVMaXN0W10+KCk7XG5jb25zdCBpc0VkaXQgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IHRpbWUgPSByZWY8VGltZT4oe1xuICBob3VyczogMCxcbiAgbWludXRlczogMzAsXG59KTtcbmNvbnN0IG5ld1dlYnNpdGVGb3JMaXN0ID0gcmVmPHN0cmluZz4oKTtcbmNvbnN0IHN0b3JhZ2VQYXJhbSA9IHJlZjxTdG9yYWdlUGFyYW1zPigpO1xuY29uc3QgaXNDaGVja2VkQ29tcGxldGVseUJsb2NrZWQgPSBjb21wdXRlZChcbiAgKCkgPT4gdGltZS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgdGltZS52YWx1ZS5ob3VycyA9PSAwICYmIHRpbWUudmFsdWUubWludXRlcyA9PSAwLFxuKTtcbmNvbnN0IHNob3dDb21wbGV0ZWx5QmxvY2tWYWx1ZSA9IGNvbXB1dGVkKFxuICAoKSA9PlxuICAgIHByb3BzLnR5cGUgPT0gTGlzdFdpdGhUaW1lLkxpbWl0cyAmJlxuICAgIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlICE9IHVuZGVmaW5lZCAmJlxuICAgIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlICE9ICcnLFxuKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgc3dpdGNoIChwcm9wcy50eXBlKSB7XG4gICAgY2FzZSBMaXN0V2l0aFRpbWUuTGltaXRzOlxuICAgICAgbGlzdC52YWx1ZSA9IE9iamVjdC52YWx1ZXMoXG4gICAgICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLlJFU1RSSUNUSU9OX0xJU1QsIFtdKSxcbiAgICAgICkgYXMgUmVzdHJpY3Rpb25bXTtcbiAgICAgIHN0b3JhZ2VQYXJhbS52YWx1ZSA9IFN0b3JhZ2VQYXJhbXMuUkVTVFJJQ1RJT05fTElTVDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTGlzdFdpdGhUaW1lLk5vdGlmaWNhdGlvbnM6XG4gICAgICBsaXN0LnZhbHVlID0gT2JqZWN0LnZhbHVlcyhcbiAgICAgICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX0xJU1QsIFtdKSxcbiAgICAgICkgYXMgTm90aWZpY2F0aW9uc1tdO1xuICAgICAgc3RvcmFnZVBhcmFtLnZhbHVlID0gU3RvcmFnZVBhcmFtcy5OT1RJRklDQVRJT05fTElTVDtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYWRkVG9MaXN0KCkge1xuICBjb25zdCBleGlzdGluZ0l0ZW0gPSBsaXN0LnZhbHVlPy5maW5kKHggPT5cbiAgICBpc0RvbWFpbkVxdWFscyhleHRyYWN0SG9zdG5hbWUoeC5kb21haW4pLCBleHRyYWN0SG9zdG5hbWUobmV3V2Vic2l0ZUZvckxpc3QudmFsdWUhKSksXG4gICk7XG4gIGlmIChleGlzdGluZ0l0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgIG5vdGlmaWNhdGlvbi5ub3RpZnkoe1xuICAgICAgdGl0bGU6ICdZb3UgaGF2ZSBhbHJlYWR5IGFkZGVkIHRoaXMgc2l0ZScsXG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld0xpbWl0ID0gbmV3IFJlc3RyaWN0aW9uKFxuICAgICAgZXh0cmFjdEhvc3RuYW1lKG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlISksXG4gICAgICB0aW1lLnZhbHVlLmhvdXJzLFxuICAgICAgdGltZS52YWx1ZS5taW51dGVzLFxuICAgICk7XG4gICAgbGlzdC52YWx1ZT8ucHVzaChuZXdMaW1pdCk7XG4gICAgc2F2ZShsaXN0LnZhbHVlKTtcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlbHlCbG9jaygpIHtcbiAgdGltZS52YWx1ZS5ob3VycyA9IDA7XG4gIHRpbWUudmFsdWUubWludXRlcyA9IDA7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlbHlCbG9ja2VkKHRpbWU6IG51bWJlcikge1xuICByZXR1cm4gcHJvcHMudHlwZSA9PSBMaXN0V2l0aFRpbWUuTGltaXRzICYmIHRpbWUgPT0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZSh0aW1lOiBudW1iZXIpIHtcbiAgY29uc3QgdGltZU9iaiA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKHRpbWUpO1xuICByZXR1cm4gYCR7dGltZU9iai5ob3Vyc306JHt0aW1lT2JqLm1pbnV0ZXMgPCAxMCA/ICcwJyArIHRpbWVPYmoubWludXRlcyA6IHRpbWVPYmoubWludXRlc31gO1xufVxuXG5jb25zdCBpc0Rpc2FibGVkU2F2aW5nID0gY29tcHV0ZWQoKCkgPT4ge1xuICBpZiAoXG4gICAgcHJvcHMudHlwZSA9PSBMaXN0V2l0aFRpbWUuTm90aWZpY2F0aW9ucyAmJlxuICAgIHRpbWUudmFsdWU/LmhvdXJzID09IDAgJiZcbiAgICB0aW1lLnZhbHVlPy5taW51dGVzID09IDBcbiAgKVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gKFxuICAgIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlID09ICcnIHx8IG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlID09IHVuZGVmaW5lZCB8fCB0aW1lLnZhbHVlID09IG51bGxcbiAgKTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxldGVGcm9tTGlzdCh1cmw6IHN0cmluZykge1xuICBsaXN0LnZhbHVlID0gbGlzdC52YWx1ZSEuZmlsdGVyKHggPT4geC5kb21haW4gIT0gdXJsKTtcbiAgc2F2ZShsaXN0LnZhbHVlKTtcbiAgbmV3V2Vic2l0ZUZvckxpc3QudmFsdWUgPSAnJztcbiAgaXNFZGl0LnZhbHVlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGVkaXRJdGVtRnJvbUxpc3QodXJsOiBzdHJpbmcsIHRpbWVGb3JVcmw6IG51bWJlcikge1xuICBpc0VkaXQudmFsdWUgPSB0cnVlO1xuICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9IHVybDtcbiAgY29uc3QgdGltZU9iaiA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKHRpbWVGb3JVcmwpO1xuICB0aW1lLnZhbHVlLmhvdXJzID0gdGltZU9iai5ob3VycztcbiAgdGltZS52YWx1ZS5taW51dGVzID0gdGltZU9iai5taW51dGVzO1xufVxuXG5mdW5jdGlvbiBlZGl0SXRlbSgpIHtcbiAgY29uc3QgZXhpc3RpbmdJdGVtID0gbGlzdC52YWx1ZT8uZmluZCh4ID0+XG4gICAgaXNEb21haW5FcXVhbHMoZXh0cmFjdEhvc3RuYW1lKHguZG9tYWluKSwgZXh0cmFjdEhvc3RuYW1lKG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlISkpLFxuICApO1xuICBpZiAoZXhpc3RpbmdJdGVtICE9IHVuZGVmaW5lZCkge1xuICAgIGV4aXN0aW5nSXRlbS50aW1lID0gY29udmVydEhITU1Ub1NlY29uZHModGltZS52YWx1ZS5ob3VycywgdGltZS52YWx1ZS5taW51dGVzKTtcbiAgICBzYXZlKGxpc3QudmFsdWUpO1xuICAgIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlID0gJyc7XG4gICAgaXNFZGl0LnZhbHVlID0gZmFsc2U7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZSh2YWx1ZTogYW55KSB7XG4gIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoc3RvcmFnZVBhcmFtLnZhbHVlISwgdmFsdWUpO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ubGltaXRzLXRpbWUtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4ubGltaXRzLXRpbWUtYmxvY2sgLmRhdGUtcGlja2VyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5ibG9ja2VkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogNTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cCBjbGFzcz1cInRpdGxlIG10LTBcIj57eyB0KCdsaW1pdHMubWVzc2FnZScpIH19PC9wPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgIHt7IHQoJ2xpbWl0cy5kZXNjcmlwdGlvbicpIH19XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgIHt7IHQoJ2xpbWl0c1RpcC5tZXNzYWdlJykgfX1cbiAgICA8L3A+XG4gICAgPExpc3RXaXRoVGltZUNvbXBvbmVudCA6dHlwZT1cIkxpc3RXaXRoVGltZS5MaW1pdHNcIiAvPlxuICAgIDxQcm9tb0NsZWFyWW91VHViZSAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdMaW1pdHMnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IExpc3RXaXRoVGltZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RXaXRoVGltZS52dWUnO1xuaW1wb3J0IFByb21vQ2xlYXJZb3VUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhcllvdVR1YmUudnVlJztcbmltcG9ydCB7IExpc3RXaXRoVGltZSB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uYWJvdXQgLmFib3V0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3M9XCJmaWxsZWQtaW5cIlxuICAgICAgICAgIGlkPVwiYmxvY2tEZWZlcnJhbFwiXG4gICAgICAgICAgdi1tb2RlbD1cInNob3dEYWlseU5vdGlmYWNhdGlvblwiXG4gICAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuREFJTFlfTk9USUZJQ0FUSU9OLCAkZXZlbnQudGFyZ2V0KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuPnt7IHQoJ3Nob3dEYWlseU5vdGlmYWNhdGlvbi5tZXNzYWdlJykgfX08L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7eyB0KCdzaG93RGFpbHlOb3RpZmFjYXRpb24uZGVzY3JpcHRpb24nKSB9fVxuICAgICAgICA8L3A+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XG4gICAgICA8cCBjbGFzcz1cInNldHRpbmctaGVhZGVyIGQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgIHt7IHQoJ25vdGlmaWNhdGlvblRpbWVTZXR0aW5nLm1lc3NhZ2UnKSB9fVxuICAgICAgPC9wPlxuICAgICAgPFZ1ZURhdGVQaWNrZXJcbiAgICAgICAgdi1tb2RlbD1cIm5vdGlmaWNhdGlvblRpbWVcIlxuICAgICAgICB0aW1lLXBpY2tlclxuICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiaGFuZGxlRGF0ZVwiXG4gICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXIgZC1pbmxpbmUtYmxvY2tcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXJcIj57eyB0KCdub3RpZmljYXRpb25UaW1lLm1lc3NhZ2UnKSB9fTwvbGFiZWw+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIHt7IHQoJ25vdGlmaWNhdGlvblRpbWUuZGVzY3JpcHRpb24nKSB9fVxuICAgICAgPC9wPlxuICAgICAgPExpc3RXaXRoVGltZUNvbXBvbmVudCA6dHlwZT1cIkxpc3RXaXRoVGltZS5Ob3RpZmljYXRpb25zXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXJcIj57eyB0KCdub3RpZmljYXRpb25NZXNzYWdlLm1lc3NhZ2UnKSB9fTwvbGFiZWw+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIHt7IHQoJ25vdGlmaWNhdGlvbk1lc3NhZ2UuZGVzY3JpcHRpb24nKSB9fVxuICAgICAgPC9wPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9XCJcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJ0KCdlbnRlck5vdGlmaWNhdGlvbi5tZXNzYWdlJylcIlxuICAgICAgICB2LW1vZGVsPVwibm90aWZpY2F0aW9uTWVzc2FnZVwiXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cImQtaW5saW5lLWJsb2NrIHNtYWxsLWJ0biBtbC0xMCB3aWR0aFwiXG4gICAgICAgIDp2YWx1ZT1cInQoJ3NhdmUubWVzc2FnZScpXCJcbiAgICAgICAgOmRpc2FibGVkPVwibm90aWZpY2F0aW9uTWVzc2FnZSA9PSAnJ1wiXG4gICAgICAgIEBjbGljaz1cInNhdmVOb3RpZmljYXRpb25NZXNzYWdlKClcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGFpbHlOb3RpZmljYXRpb25zJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBOT1RJRklDQVRJT05fTUVTU0FHRV9ERUZBVUxULCBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQge1xuICBEQUlMWV9OT1RJRklDQVRJT05fREVGQVVMVCxcbiAgREFJTFlfU1VNTUFSWV9OT1RJRklDQVRJT05fVElNRV9ERUZBVUxULFxufSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IGNvbnZlcnRISE1NVG9TZWNvbmRzLCBjb252ZXJ0U2Vjb25kc1RvSEhNTSB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XG5pbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgTGlzdFdpdGhUaW1lQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdFdpdGhUaW1lLnZ1ZSc7XG5pbXBvcnQgUHJvbW9DbGVhcllvdVR1YmUgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9tb0NsZWFyWW91VHViZS52dWUnO1xuaW1wb3J0IHsgTGlzdFdpdGhUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuXG5jb25zdCBzaG93RGFpbHlOb3RpZmFjYXRpb24gPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IGRhaWx5Tm90aWZpY2F0aW9uVGltZSA9IHJlZjxudW1iZXI+KCk7XG5jb25zdCBub3RpZmljYXRpb25UaW1lID0gcmVmPFRpbWU+KCk7XG5jb25zdCBub3RpZmljYXRpb25NZXNzYWdlID0gcmVmPHN0cmluZz4oKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgc2hvd0RhaWx5Tm90aWZhY2F0aW9uLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuREFJTFlfTk9USUZJQ0FUSU9OLFxuICAgIERBSUxZX05PVElGSUNBVElPTl9ERUZBVUxULFxuICApO1xuXG4gIG5vdGlmaWNhdGlvbk1lc3NhZ2UudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5OT1RJRklDQVRJT05fTUVTU0FHRSxcbiAgICBOT1RJRklDQVRJT05fTUVTU0FHRV9ERUZBVUxULFxuICApO1xuXG4gIGRhaWx5Tm90aWZpY2F0aW9uVGltZS52YWx1ZSA9IChhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5EQUlMWV9TVU1NQVJZX05PVElGSUNBVElPTl9USU1FLFxuICAgIERBSUxZX1NVTU1BUllfTk9USUZJQ0FUSU9OX1RJTUVfREVGQVVMVCxcbiAgKSkgYXMgbnVtYmVyO1xuXG4gIGNvbnN0IHRpbWVPYmogPSBjb252ZXJ0U2Vjb25kc1RvSEhNTShkYWlseU5vdGlmaWNhdGlvblRpbWUudmFsdWUpO1xuICBub3RpZmljYXRpb25UaW1lLnZhbHVlID0gdGltZU9iajtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBzYXZlTm90aWZpY2F0aW9uTWVzc2FnZSgpIHtcbiAgc2F2ZShTdG9yYWdlUGFyYW1zLk5PVElGSUNBVElPTl9NRVNTQUdFLCBub3RpZmljYXRpb25NZXNzYWdlLnZhbHVlKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0ZShtb2RlbERhdGE6IFRpbWUpIHtcbiAgaWYgKG1vZGVsRGF0YSAhPSBudWxsKSB7XG4gICAgbm90aWZpY2F0aW9uVGltZS52YWx1ZSA9IG1vZGVsRGF0YTtcbiAgICBhd2FpdCBzYXZlKFxuICAgICAgU3RvcmFnZVBhcmFtcy5EQUlMWV9TVU1NQVJZX05PVElGSUNBVElPTl9USU1FLFxuICAgICAgY29udmVydEhITU1Ub1NlY29uZHMobm90aWZpY2F0aW9uVGltZS52YWx1ZS5ob3Vycywgbm90aWZpY2F0aW9uVGltZS52YWx1ZS5taW51dGVzKSxcbiAgICApO1xuICAgIEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShNZXNzYWdlcy5SZXNjaGVkdWxlSm9icyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2Uoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB0YXJnZXQ6IGFueSkge1xuICBpZiAodGFyZ2V0ICE9IG51bGwpIGF3YWl0IHNhdmUoc3RvcmFnZVBhcmFtLCB0YXJnZXQuY2hlY2tlZCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmUoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB2YWx1ZTogYW55KSB7XG4gIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoc3RvcmFnZVBhcmFtLCB2YWx1ZSk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5kYXRlLXBpY2tlciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4ud2lkdGgge1xuICB3aWR0aDogNTQwcHg7XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2ExNjZhNTUwX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19mYTE2MjA0YV9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fOGI5NDNiOGZfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzI4NzcxMjYxX19cIiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBQb21vZG9yb1NvdW5kcyB9IGZyb20gJy4uL3V0aWxzL3BvbW9kb3JvJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlTb3VuZChzb3VuZDogUG9tb2Rvcm9Tb3VuZHMpIHtcbiAgY29uc3QgbXlBdWRpbyA9IG5ldyBBdWRpbyhCcm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBhc3NldHMvcG9tb2Rvcm8tc291bmRzLyR7c291bmR9YCkpO1xuICBteUF1ZGlvLnBsYXkoKTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHAgY2xhc3M9XCJ0aXRsZS1hdWRpbyBkLWlubGluZS1ibG9ja1wiPnt7IHQoJ3BvbW9kb3JvU291bmRBZnRlci5tZXNzYWdlJykgfX08L3A+XG4gIDxzZWxlY3QgY2xhc3M9XCJvcHRpb25cIiB2LW1vZGVsPVwiYXVkaW9BZnRlclBlcmlvZFwiIEBjaGFuZ2U9XCJvbkF1ZGlvQ2hhbmdlKCRldmVudC50YXJnZXQpXCI+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgMSddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDE8L29wdGlvbj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAyJ11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gMjwvb3B0aW9uPlxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDMnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSAzPC9vcHRpb24+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgNCddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDQ8L29wdGlvbj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCA1J11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gNTwvb3B0aW9uPlxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDYnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSA2PC9vcHRpb24+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgNyddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDc8L29wdGlvbj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCA4J11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gODwvb3B0aW9uPlxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDknXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSA5PC9vcHRpb24+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgMTAnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSAxMDwvb3B0aW9uPlxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDExJ11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gMTE8L29wdGlvbj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMiddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEyPC9vcHRpb24+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgMTMnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSAxMzwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbiAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvc3RhcnQuc3ZnXCIgaGVpZ2h0PVwiMjJcIiBAY2xpY2s9XCJwbGF5QXVkaW9cIiBjbGFzcz1cInBsYXlcIiAvPlxuICA8c3BhbiBjbGFzcz1cInByZXZpZXdcIj57eyB0KCdjbGlja1RvUHJldmlldy5tZXNzYWdlJykgfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUG9tb2Rvcm9Tb3VuZHNTZWxlY3RvcicsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IFBvbW9kb3JvQXVkaW9QYXJhbXMsIFBvbW9kb3JvU291bmRzIH0gZnJvbSAnLi4vdXRpbHMvcG9tb2Rvcm8nO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3BsYXlTb3VuZCc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBvcHRpb246IFBvbW9kb3JvQXVkaW9QYXJhbXM7XG4gIHZhbHVlOiBQb21vZG9yb1NvdW5kcztcbn0+KCk7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuY29uc3QgYXVkaW9BZnRlclBlcmlvZCA9IHJlZjxQb21vZG9yb1NvdW5kcz4ocHJvcHMudmFsdWUpO1xuXG5mdW5jdGlvbiBwbGF5QXVkaW8oKSB7XG4gIHBsYXlTb3VuZChhdWRpb0FmdGVyUGVyaW9kLnZhbHVlKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb25BdWRpb0NoYW5nZSh0YXJnZXQ6IGFueSkge1xuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKHByb3BzLm9wdGlvbiwgdGFyZ2V0LnZhbHVlKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnBsYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udGl0bGUtYXVkaW8ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJldmlldyB7XG4gIGNvbG9yOiBncmV5O1xufVxuLm9wdGlvbiB7XG4gIGhlaWdodDogMzhweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8cCBjbGFzcz1cInRpdGxlIG10LTBcIj57eyB0KCdwb21vZG9yby5tZXNzYWdlJykgfX08L3A+XG4gIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICB7eyB0KCdwb21vZG9yby5kZXNjcmlwdGlvbicpIH19XG4gIDwvcD5cbiAgPGRpdiBjbGFzcz1cImV4cGxhbmF0aW9uLWJsb2NrXCI+XG4gICAgPHAgY2xhc3M9XCJleHBsYW5hdGlvblwiPlxuICAgICAge3sgdCgncG9tb2Rvcm9FeHBsYW5hdGlvbkljb24ubWVzc2FnZScpIH19XG4gICAgICA8c3Bhbj48aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wb21vZG9yby5wbmdcIiBoZWlnaHQ9XCIzMFwiIC8+PC9zcGFuPi5cbiAgICAgIHt7IHQoJ3BvbW9kb3JvRXhwbGFuYXRpb25JY29uLmRlc2NyaXB0aW9uJykgfX1cbiAgICAgIDxpbWcgY2xhc3M9XCJtbC01XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3BvbW9kb3JvLXJlc3QucG5nXCIgaGVpZ2h0PVwiMzBcIiAvPi5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3M9XCJleHBsYW5hdGlvblwiPlxuICAgICAge3sgdCgncG9tb2Rvcm9FeHBsYW5hdGlvblRpbWUubWVzc2FnZScpIH19XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzPVwiZXhwbGFuYXRpb25cIj57eyB0KCdwb21vZG9yb0V4cGxhbmF0aW9uU3RvcC5tZXNzYWdlJykgfX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IDpjbGFzcz1cImlzRW5hYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9jayBtdC0yMFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ3BvbW9kb3JvV29yay5tZXNzYWdlJykgfX08L3A+XG4gICAgICA8VnVlRGF0ZVBpY2tlciB2LW1vZGVsPVwid29ya1RpbWVcIiB0aW1lLXBpY2tlciBjbGFzcz1cImRhdGUtcGlja2VyXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9tb2Rvcm8tYmxvY2tcIj5cbiAgICAgIDxQb21vZG9yb1NvdW5kc1NlbGVjdG9yXG4gICAgICAgIHYtaWY9XCJhdWRpb0FmdGVyV29ya1wiXG4gICAgICAgIDpvcHRpb249XCJTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX1dPUktcIlxuICAgICAgICA6dmFsdWU9XCJhdWRpb0FmdGVyV29ya1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ3BvbW9kb3JvUmVzdC5tZXNzYWdlJykgfX08L3A+XG4gICAgICA8VnVlRGF0ZVBpY2tlciB2LW1vZGVsPVwicmVzdFRpbWVcIiB0aW1lLXBpY2tlciBjbGFzcz1cImRhdGUtcGlja2VyXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9tb2Rvcm8tYmxvY2tcIj5cbiAgICAgIDxQb21vZG9yb1NvdW5kc1NlbGVjdG9yXG4gICAgICAgIHYtaWY9XCJhdWRpb0FmdGVyUmVzdFwiXG4gICAgICAgIDpvcHRpb249XCJTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX1JFU1RcIlxuICAgICAgICA6dmFsdWU9XCJhdWRpb0FmdGVyUmVzdFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ3BvbW9kb3JvRnJlcXVlbmN5Lm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmcmVxdWVuY3lcIiB2LW1vZGVsPVwiZnJlcXVlbmN5XCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9tb2Rvcm8tYmxvY2tcIj5cbiAgICAgIDxQb21vZG9yb1NvdW5kc1NlbGVjdG9yXG4gICAgICAgIHYtaWY9XCJhdWRpb0FmdGVyRmluaXNoZWRcIlxuICAgICAgICA6b3B0aW9uPVwiU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9GSU5JU0hFRFwiXG4gICAgICAgIDp2YWx1ZT1cImF1ZGlvQWZ0ZXJGaW5pc2hlZFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbXQtMTVcIlxuICAgIDpjbGFzcz1cIltpc0VuYWJsZWQgPyAnc3RvcCcgOiAnc3RhcnQnLCBpc0Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnXVwiXG4gICAgQGNsaWNrPVwiY2hhbmdlU3RhdHVzKClcIlxuICA+XG4gICAgPGltZyB2LWlmPVwiaXNFbmFibGVkXCIgY2xhc3M9XCJtbC01XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3N0b3Auc3ZnXCIgaGVpZ2h0PVwiMjBcIiAvPlxuICAgIDxpbWcgdi1pZj1cIiFpc0VuYWJsZWRcIiBjbGFzcz1cIm1sLTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvc3RhcnQuc3ZnXCIgaGVpZ2h0PVwiMjJcIiAvPlxuICAgIHt7ICFpc0VuYWJsZWQgPyB0KCdzdGFydC5tZXNzYWdlJykgOiB0KCdzdG9wLm1lc3NhZ2UnKSB9fVxuICA8L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQb21vZG9ybycsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcywgY29udmVydFNlY29uZHNUb0hITU0gfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7XG4gIElTX1BPTU9ET1JPX0VOQUJMRURfREVGQVVMVCxcbiAgUE9NT0RPUk9fQVVESU9fQUZURVJfRklOSVNIRURfREVGQVVMVCxcbiAgUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVF9ERUZBVUxULFxuICBQT01PRE9ST19BVURJT19BRlRFUl9XT1JLX0RFRkFVTFQsXG4gIFBPTU9ET1JPX0ZSRVFVRU5DWV9ERUZBVUxULFxuICBQT01PRE9ST19JTlRFUlZBTF9SRVNUX0RFRkFVTFQsXG4gIFBPTU9ET1JPX0lOVEVSVkFMX1dPUktfREVGQVVMVCxcbiAgU3RvcmFnZVBhcmFtcyxcbn0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuaW1wb3J0IHsgdXNlQmFkZ2UsIEJhZGdlQ29sb3IsIEJhZGdlSWNvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VCYWRnZSc7XG5pbXBvcnQgeyBQb21vZG9yb1NvdW5kcyB9IGZyb20gJy4uL3V0aWxzL3BvbW9kb3JvJztcbmltcG9ydCBQb21vZG9yb1NvdW5kc1NlbGVjdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvUG9tb2Rvcm9Tb3VuZHNTZWxlY3Rvci52dWUnO1xuaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbmNvbnN0IHdvcmtUaW1lID0gcmVmPFRpbWU+KHtcbiAgaG91cnM6IDAsXG4gIG1pbnV0ZXM6IDI1LFxufSk7XG5jb25zdCByZXN0VGltZSA9IHJlZjxUaW1lPih7XG4gIGhvdXJzOiAwLFxuICBtaW51dGVzOiA1LFxufSk7XG5jb25zdCBmcmVxdWVuY3kgPSByZWY8bnVtYmVyPigzKTtcbmNvbnN0IGlzRW5hYmxlZCA9IHJlZjxib29sZWFuPigpO1xuY29uc3QgYXVkaW9BZnRlcldvcmsgPSByZWY8UG9tb2Rvcm9Tb3VuZHM+KCk7XG5jb25zdCBhdWRpb0FmdGVyUmVzdCA9IHJlZjxQb21vZG9yb1NvdW5kcz4oKTtcbmNvbnN0IGF1ZGlvQWZ0ZXJGaW5pc2hlZCA9IHJlZjxQb21vZG9yb1NvdW5kcz4oKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSBjb21wdXRlZChcbiAgKCkgPT4gZnJlcXVlbmN5LnZhbHVlIDw9IDAgfHwgdGltZUlzRW1wdHkod29ya1RpbWUpIHx8IHRpbWVJc0VtcHR5KHJlc3RUaW1lKSxcbik7XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGlzRW5hYmxlZC52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLklTX1BPTU9ET1JPX0VOQUJMRUQsXG4gICAgSVNfUE9NT0RPUk9fRU5BQkxFRF9ERUZBVUxULFxuICApO1xuICB3b3JrVGltZS52YWx1ZSA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKFxuICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fSU5URVJWQUxfV09SSyxcbiAgICAgIFBPTU9ET1JPX0lOVEVSVkFMX1dPUktfREVGQVVMVCxcbiAgICApLFxuICApO1xuICByZXN0VGltZS52YWx1ZSA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKFxuICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fSU5URVJWQUxfUkVTVCxcbiAgICAgIFBPTU9ET1JPX0lOVEVSVkFMX1JFU1RfREVGQVVMVCxcbiAgICApLFxuICApO1xuICBmcmVxdWVuY3kudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19GUkVRVUVOQ1ksXG4gICAgUE9NT0RPUk9fRlJFUVVFTkNZX0RFRkFVTFQsXG4gICk7XG5cbiAgYXVkaW9BZnRlcldvcmsudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9XT1JLLFxuICAgIFBPTU9ET1JPX0FVRElPX0FGVEVSX1dPUktfREVGQVVMVCxcbiAgKTtcblxuICBhdWRpb0FmdGVyUmVzdC52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX1JFU1QsXG4gICAgUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVF9ERUZBVUxULFxuICApO1xuXG4gIGF1ZGlvQWZ0ZXJGaW5pc2hlZC52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX0ZJTklTSEVELFxuICAgIFBPTU9ET1JPX0FVRElPX0FGVEVSX0ZJTklTSEVEX0RFRkFVTFQsXG4gICk7XG59KTtcblxuZnVuY3Rpb24gdGltZUlzRW1wdHkodGltZTogUmVmPFRpbWUgfCB1bmRlZmluZWQ+KSB7XG4gIHJldHVybiB0aW1lLnZhbHVlID09IHVuZGVmaW5lZCB8fCAodGltZS52YWx1ZS5ob3VycyA9PSAwICYmIHRpbWUudmFsdWUubWludXRlcyA9PSAwKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hhbmdlU3RhdHVzKCkge1xuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuSVNfUE9NT0RPUk9fRU5BQkxFRCwgIWlzRW5hYmxlZC52YWx1ZSk7XG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19JTlRFUlZBTF9XT1JLLFxuICAgIGNvbnZlcnRISE1NVG9TZWNvbmRzKHdvcmtUaW1lLnZhbHVlLmhvdXJzLCB3b3JrVGltZS52YWx1ZS5taW51dGVzKSxcbiAgKTtcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1JFU1QsXG4gICAgY29udmVydEhITU1Ub1NlY29uZHMocmVzdFRpbWUudmFsdWUuaG91cnMsIHJlc3RUaW1lLnZhbHVlLm1pbnV0ZXMpLFxuICApO1xuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fU1RBUlRfVElNRSwgbmV3IERhdGUoKS50b1N0cmluZygpKTtcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0ZSRVFVRU5DWSwgZnJlcXVlbmN5LnZhbHVlKTtcblxuICBpc0VuYWJsZWQudmFsdWUgPSAhaXNFbmFibGVkLnZhbHVlO1xuXG4gIGlmIChpc0VuYWJsZWQudmFsdWUpXG4gICAgYXdhaXQgdXNlQmFkZ2Uoe1xuICAgICAgdGV4dDogbnVsbCxcbiAgICAgIGNvbG9yOiBCYWRnZUNvbG9yLm5vbmUsXG4gICAgICBpY29uOiBCYWRnZUljb24ucG9tb2Rvcm9Xb3JraW5nVGltZSxcbiAgICB9KTtcbiAgZWxzZSB7XG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX1NUQVJUX1RJTUUsIG51bGwpO1xuICAgIGF3YWl0IHVzZUJhZGdlKHtcbiAgICAgIHRleHQ6IG51bGwsXG4gICAgICBjb2xvcjogQmFkZ2VDb2xvci5ub25lLFxuICAgICAgaWNvbjogQmFkZ2VJY29uLmRlZmF1bHQsXG4gICAgfSk7XG4gIH1cblxuICBsb2dnZXIubG9nKGBDaGFuZ2UgcG9tb2Rvcm8gc3RhdHVzIHRvICR7U3RyaW5nKGlzRW5hYmxlZC52YWx1ZSkudG9VcHBlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gcGxheUF1ZGlvKHNvdW5kOiBQb21vZG9yb1NvdW5kcykge1xuICBjb25zdCBteUF1ZGlvID0gbmV3IEF1ZGlvKEJyb3dzZXIucnVudGltZS5nZXRVUkwoYGFzc2V0cy9wb21vZG9yby1zb3VuZHMvJHtzb3VuZH1gKSk7XG4gIG15QXVkaW8ucGxheSgpO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucG9tb2Rvcm8tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRhdGUtcGlja2VyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDAgMTVweDtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmZyZXF1ZW5jeSB7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IGF1dG8gMDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uYmxvY2tlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbn1cbmJ1dHRvbi5zdGFydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTQ4LCA2MikgIWltcG9ydGFudDtcbn1cbmJ1dHRvbi5zdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgNTksIDU5KSAhaW1wb3J0YW50O1xufVxuLmV4cGxhbmF0aW9uLWJsb2NrIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZXhwbGFuYXRpb24tYmxvY2sgLmV4cGxhbmF0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4uZGlzYWJsZWQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ2FsbFRpbWUubWVzc2FnZScpIH19PC9wPlxuICAgICAgPHAgY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyhkZXRhaWxzLnN1bW1hcnlUaW1lKSB9fVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ3Nlc3Npb25zLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgIDxwIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgZGV0YWlscy5zZXNzaW9ucyB9fVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ2F2ZXJhZ2VEYWlseVVzYWdlLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgIDxwIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgY29udmVydFN1bW1hcnlUaW1lVG9TdHJpbmcoZGV0YWlscy5hdmVyYWdlVGltZSkgfX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnV2Vic2l0ZVN0YXRzRGV0YWlscycsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgVGFiTGlzdEJ5RGF5cyB9IGZyb20gJy4uL2R0by90YWJMaXN0U3VtbWFyeSc7XG5pbXBvcnQgeyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XG5cbmRlZmluZVByb3BzPHtcbiAgZGV0YWlsczogVGFiTGlzdEJ5RGF5cztcbn0+KCk7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4udGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGF1dG87XG59XG4uYmxvY2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3IDIzNyAyMzcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYigxODUgMjU1IDE3MSk7XG59XG4uYmxvY2sgcC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyZXk7XG59XG4uYmxvY2sgcC52YWx1ZSB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgQ3VycmVudFRhYkl0ZW0gfSBmcm9tICcuLi9kdG8vY3VycmVudFRhYkl0ZW0nO1xuaW1wb3J0IHsgRGF5VGFicywgVGFiTGlzdEJ5RGF5cyB9IGZyb20gJy4uL2R0by90YWJMaXN0U3VtbWFyeSc7XG5pbXBvcnQgeyBpbmplY3RUYWJzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3JlcG9zaXRvcnkvaW5qZWN0LXRhYnMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VUYWJTdGF0c0J5RGF5cyhcbiAgZGF0ZUZyb206IERhdGUsXG4gIGRhdGVUbzogRGF0ZSxcbiAgZG9tYWluOiBzdHJpbmcsXG4pOiBQcm9taXNlPFRhYkxpc3RCeURheXMgfCBudWxsPiB7XG4gIGNvbnN0IHJlcG8gPSBhd2FpdCBpbmplY3RUYWJzUmVwb3NpdG9yeSgpO1xuICBjb25zdCB0YWIgPSByZXBvLmdldFRhYihkb21haW4pO1xuICBsZXQgZGF5c1RhYnM6IERheVRhYnNbXSA9IFtdO1xuXG4gIGlmICh0YWIgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBpc1RoZVNhbWVEYXkgPSBpc1NhbWVEYXkoZGF0ZUZyb20sIGRhdGVUbyk7XG5cbiAgY29uc3QgdW5Tb3J0ZWRUYWJzQnlEYXlzID0gaXNUaGVTYW1lRGF5XG4gICAgPyB0YWIuZGF5cy5maWx0ZXIocyA9PiBpc1NhbWVEYXkobmV3IERhdGUocy5kYXRlKSwgZGF0ZUZyb20pKVxuICAgIDogdGFiLmRheXMuZmlsdGVyKHMgPT4gbmV3IERhdGUocy5kYXRlKSA+PSBkYXRlRnJvbSAmJiBuZXcgRGF0ZShzLmRhdGUpIDw9IGRhdGVUbyk7XG5cbiAgaWYgKHVuU29ydGVkVGFic0J5RGF5cy5sZW5ndGggPT0gMClcbiAgICByZXR1cm4ge1xuICAgICAgZGF5czogW10sXG4gICAgICBhdmVyYWdlVGltZTogMCxcbiAgICAgIHN1bW1hcnlUaW1lOiAwLFxuICAgICAgc2Vzc2lvbnM6IDAsXG4gICAgfTtcblxuICB1blNvcnRlZFRhYnNCeURheXMuZm9yRWFjaCh0YWJEYXkgPT4ge1xuICAgIGlmIChcbiAgICAgIChuZXcgRGF0ZSh0YWJEYXkuZGF0ZSkgPj0gZGF0ZUZyb20gJiYgbmV3IERhdGUodGFiRGF5LmRhdGUpIDw9IGRhdGVUbykgfHxcbiAgICAgIChpc1RoZVNhbWVEYXkgJiYgaXNTYW1lRGF5KG5ldyBEYXRlKHRhYkRheS5kYXRlKSwgZGF0ZUZyb20pKVxuICAgICkge1xuICAgICAgbGV0IGRheVRhYiA9IGRheXNUYWJzLmZpbmQoeCA9PiB4LmRheSA9PSB0YWJEYXkuZGF0ZSk7XG4gICAgICBpZiAoZGF5VGFiID09IHVuZGVmaW5lZCkge1xuICAgICAgICBkYXlUYWIgPSB7XG4gICAgICAgICAgZGF5OiB0YWJEYXkuZGF0ZSxcbiAgICAgICAgICB0YWJzOiBbXSxcbiAgICAgICAgICB0aW1lOiB0YWJEYXkuc3VtbWFyeSxcbiAgICAgICAgICBzZXNzaW9uczogdGFiRGF5LmNvdW50ZXIsXG4gICAgICAgIH07XG4gICAgICAgIGRheVRhYi50YWJzLnB1c2goe1xuICAgICAgICAgIGZhdmljb246IHRhYi5mYXZpY29uLFxuICAgICAgICAgIHVybDogdGFiLnVybCxcbiAgICAgICAgICBzZXNzaW9uczogdGFiRGF5LmNvdW50ZXIsXG4gICAgICAgICAgc3VtbWFyeVRpbWU6IHRhYkRheS5zdW1tYXJ5LFxuICAgICAgICB9KTtcbiAgICAgICAgZGF5c1RhYnMucHVzaChkYXlUYWIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF5VGFiLnRpbWUgKz0gdGFiRGF5LnN1bW1hcnk7XG4gICAgICAgIGRheVRhYi5zZXNzaW9ucyArPSB0YWJEYXkuY291bnRlcjtcbiAgICAgICAgZGF5VGFiLnRhYnMucHVzaCh7XG4gICAgICAgICAgZmF2aWNvbjogdGFiLmZhdmljb24sXG4gICAgICAgICAgdXJsOiB0YWIudXJsLFxuICAgICAgICAgIHNlc3Npb25zOiB0YWJEYXkuY291bnRlcixcbiAgICAgICAgICBzdW1tYXJ5VGltZTogdGFiRGF5LnN1bW1hcnksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGF5c1RhYnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBuZXcgRGF0ZShhLmRheSkudmFsdWVPZigpIC0gbmV3IERhdGUoYi5kYXkpLnZhbHVlT2YoKTtcbiAgfSk7XG5cbiAgZGF5c1RhYnMuZm9yRWFjaChkYXlUYWIgPT4ge1xuICAgIGRheVRhYi50YWJzLnNvcnQoZnVuY3Rpb24gKGE6IEN1cnJlbnRUYWJJdGVtLCBiOiBDdXJyZW50VGFiSXRlbSkge1xuICAgICAgcmV0dXJuIGIuc3VtbWFyeVRpbWUgLSBhLnN1bW1hcnlUaW1lO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBzdW1tYXJ5VGltZSA9IGRheXNUYWJzXG4gICAgLm1hcCh4ID0+IHgudGltZSlcbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfSk7XG5cbiAgY29uc3QgdG90YWxTZXNzaW9ucyA9IGRheXNUYWJzXG4gICAgLm1hcCh4ID0+IHguc2Vzc2lvbnMpXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH0pO1xuXG4gIGNvbnN0IGF2ZXJhZ2VUaW1lID0gTWF0aC5yb3VuZChzdW1tYXJ5VGltZSAvIGRheXNUYWJzLmxlbmd0aCk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXlzOiBkYXlzVGFicyxcbiAgICBzdW1tYXJ5VGltZTogc3VtbWFyeVRpbWUsXG4gICAgYXZlcmFnZVRpbWU6IGF2ZXJhZ2VUaW1lLFxuICAgIHNlc3Npb25zOiB0b3RhbFNlc3Npb25zLFxuICB9O1xufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInRpdGxlIGxpbmtcIiBAY2xpY2s9XCJvcGVuUGFnZShTZXR0aW5nc1RhYi5EYXNoYm9hcmQpXCI+XG4gICAgICB7eyB0KCdkYXNoYm9hcmQubWVzc2FnZScpIH19XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwibm8tZGF0YVwiIHYtaWY9XCJpc0xvYWRpbmdcIj5cbiAgICAgIDxpbWcgaGVpZ2h0PVwiNTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcHJlbG9hZGVyLmdpZlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWVsc2U+XG4gICAgICA8bm8tZGF0YS1ieS1kYXlzIHYtaWY9XCJjb3VudE9mRGF5cyA9PSB1bmRlZmluZWQgfHwgKGNvdW50T2ZEYXlzID09IDAgJiYgIW5vRGF0YSlcIiAvPlxuICAgICAgPGRpdiB2LWVsc2UtaWY9XCJub0RhdGFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vLWRhdGFcIj5cbiAgICAgICAgICB7eyB0KCdub0RhdGFGb3JQZXJpb2QubWVzc2FnZScpIH19XG4gICAgICAgICAgPFZ1ZURhdGVQaWNrZXJcbiAgICAgICAgICAgIHJhbmdlXG4gICAgICAgICAgICA6ZW5hYmxlLXRpbWUtcGlja2VyPVwiZmFsc2VcIlxuICAgICAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlclwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWREYXRlXCJcbiAgICAgICAgICAgIDpwcmVzZXQtcmFuZ2VzPVwicHJlc2V0UmFuZ2VzXCJcbiAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI3llYXJseT1cInsgbGFiZWwsIHJhbmdlLCBwcmVzZXREYXRlUmFuZ2UgfVwiPlxuICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPjwvVnVlRGF0ZVBpY2tlclxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ibG9ja1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RmF2aWNvbiA6ZmF2aWNvbj1cInRhYj8uZmF2aWNvblwiIDp0eXBlPVwiZ2V0VHlwZU9mVXJsKHRhYj8udXJsISlcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPiB7eyB0YWI/LnVybCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxWdWVEYXRlUGlja2VyXG4gICAgICAgICAgICByYW5nZVxuICAgICAgICAgICAgOmVuYWJsZS10aW1lLXBpY2tlcj1cImZhbHNlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXIgbXQtMTBcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXG4gICAgICAgICAgICA6cHJlc2V0LXJhbmdlcz1cInByZXNldFJhbmdlc1wiXG4gICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiaGFuZGxlRGF0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlICN5ZWFybHk9XCJ7IGxhYmVsLCByYW5nZSwgcHJlc2V0RGF0ZVJhbmdlIH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicHJlc2V0RGF0ZVJhbmdlKHJhbmdlKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT48L1Z1ZURhdGVQaWNrZXJcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMjAgbWwtMTAgbXItMTAgYnktZGF5cy1jaGFydFwiPlxuICAgICAgICAgIDxieS1kYXlzLWNoYXJ0IDpkYXRhPVwidGFiSW5mb0J5RGF5cyFcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8d2Vic2l0ZS1zdGF0cy1kZXRhaWxzIDpkZXRhaWxzPVwidGFiSW5mb0J5RGF5cyFcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdXZWJzaXRlU3RhdHMnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vRmF2aWNvbi52dWUnO1xuaW1wb3J0IE5vRGF0YUJ5RGF5cyBmcm9tICcuL05vRGF0YUJ5RGF5cy52dWUnO1xuaW1wb3J0IEJ5RGF5c0NoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQnlEYXlzQ2hhcnQudnVlJztcbmltcG9ydCBXZWJzaXRlU3RhdHNEZXRhaWxzIGZyb20gJy4uL2NvbXBvbmVudHMvV2Vic2l0ZVN0YXRzRGV0YWlscy52dWUnO1xuaW1wb3J0IHsgb3BlblBhZ2UgfSBmcm9tICcuLi91dGlscy9vcGVuLXBhZ2UnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgVGhpc1dlZWtSYW5nZSwgcmFuZ2VzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyB1c2VUYWJTdGF0c0J5RGF5cyB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VUYWJTdGF0c0J5RGF5cyc7XG5pbXBvcnQgeyBUYWJMaXN0QnlEYXlzIH0gZnJvbSAnLi4vZHRvL3RhYkxpc3RTdW1tYXJ5JztcbmltcG9ydCB7IFRhYiB9IGZyb20gJy4uL2VudGl0eS90YWInO1xuaW1wb3J0IHsgZ2V0VHlwZU9mVXJsIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXR5cGUtb2YtdXJsJztcbmltcG9ydCB7IGluamVjdFRhYnNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9pbmplY3QtdGFicy1yZXBvc2l0b3J5JztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGRvbWFpbjogc3RyaW5nO1xufT4oKTtcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5jb25zdCBwcmVzZXRSYW5nZXMgPSByYW5nZXMoKTtcblxuY29uc3QgdGFiSW5mb0J5RGF5cyA9IHJlZjxUYWJMaXN0QnlEYXlzPigpO1xuY29uc3QgaXNMb2FkaW5nID0gcmVmPGJvb2xlYW4+KCk7XG5jb25zdCBub0RhdGEgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuY29uc3Qgc2VsZWN0ZWREYXRlID0gcmVmPERhdGVbXT4oKTtcbmNvbnN0IHRhYiA9IHJlZjxUYWI+KCk7XG5cbmNvbnN0IGNvdW50T2ZEYXlzID0gY29tcHV0ZWQoKCkgPT5cbiAgdGFiSW5mb0J5RGF5cy52YWx1ZSAhPSB1bmRlZmluZWQgPyB0YWJJbmZvQnlEYXlzLnZhbHVlLmRheXMubGVuZ3RoIDogMCxcbik7XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGlzTG9hZGluZy52YWx1ZSA9IHRydWU7XG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IFRoaXNXZWVrUmFuZ2U7XG4gIGNvbnN0IGRhdGVGcm9tID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMF0gYXMgRGF0ZTtcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcbiAgY29uc3QgcmVwbyA9IGF3YWl0IGluamVjdFRhYnNSZXBvc2l0b3J5KCk7XG4gIHRhYi52YWx1ZSA9IHJlcG8uZ2V0VGFiKHByb3BzLmRvbWFpbik7XG4gIGlmICh0YWIgPT0gdW5kZWZpbmVkKSB7XG4gICAgbm9EYXRhLnZhbHVlID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhd2FpdCBsb2FkTGlzdChkYXRlRnJvbSwgZGF0ZVRvKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkTGlzdChkYXRlRnJvbTogRGF0ZSwgZGF0ZVRvOiBEYXRlKSB7XG4gIGNvbnN0IHRhYkxpc3QgPSBhd2FpdCB1c2VUYWJTdGF0c0J5RGF5cyhkYXRlRnJvbSwgZGF0ZVRvLCB0YWIudmFsdWU/LnVybCEpO1xuICBpZiAodGFiTGlzdCAhPSBudWxsKSB7XG4gICAgdGFiSW5mb0J5RGF5cy52YWx1ZSA9IHRhYkxpc3Q7XG4gICAgaWYgKHRhYkxpc3QuZGF5cy5sZW5ndGggPT0gMCAmJiB0YWJMaXN0LnN1bW1hcnlUaW1lID09IDApIG5vRGF0YS52YWx1ZSA9IHRydWU7XG4gICAgZWxzZSBub0RhdGEudmFsdWUgPSBmYWxzZTtcbiAgfVxuICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0ZShtb2RlbERhdGE6IERhdGVbXSkge1xuICBzZWxlY3RlZERhdGUudmFsdWUgPSBtb2RlbERhdGE7XG4gIGNvbnN0IGRhdGVGcm9tID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMF0gYXMgRGF0ZTtcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZGF0ZS1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ieS1kYXlzLWNoYXJ0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fMzU3NjFjODFfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzlkY2M4ZTM4X19cIiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhID09IG51bGwgfHwgYiA9PSBudWxsID8gTmFOIDogYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT0gbnVsbCB8fCBiID09IG51bGwgPyBOYU5cbiAgICA6IGIgPCBhID8gLTFcbiAgICA6IGIgPiBhID8gMVxuICAgIDogYiA+PSBhID8gMFxuICAgIDogTmFOO1xufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBkZXNjZW5kaW5nIGZyb20gXCIuL2Rlc2NlbmRpbmcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmlzZWN0b3IoZikge1xuICBsZXQgY29tcGFyZTEsIGNvbXBhcmUyLCBkZWx0YTtcblxuICAvLyBJZiBhbiBhY2Nlc3NvciBpcyBzcGVjaWZpZWQsIHByb21vdGUgaXQgdG8gYSBjb21wYXJhdG9yLiBJbiB0aGlzIGNhc2Ugd2VcbiAgLy8gY2FuIHRlc3Qgd2hldGhlciB0aGUgc2VhcmNoIHZhbHVlIGlzIChzZWxmLSkgY29tcGFyYWJsZS4gV2UgY2Fu4oCZdCBkbyB0aGlzXG4gIC8vIGZvciBhIGNvbXBhcmF0b3IgKGV4Y2VwdCBmb3Igc3BlY2lmaWMsIGtub3duIGNvbXBhcmF0b3JzKSBiZWNhdXNlIHdlIGNhbuKAmXRcbiAgLy8gdGVsbCBpZiB0aGUgY29tcGFyYXRvciBpcyBzeW1tZXRyaWMsIGFuZCBhbiBhc3ltbWV0cmljIGNvbXBhcmF0b3IgY2Fu4oCZdCBiZVxuICAvLyB1c2VkIHRvIHRlc3Qgd2hldGhlciBhIHNpbmdsZSB2YWx1ZSBpcyBjb21wYXJhYmxlLlxuICBpZiAoZi5sZW5ndGggIT09IDIpIHtcbiAgICBjb21wYXJlMSA9IGFzY2VuZGluZztcbiAgICBjb21wYXJlMiA9IChkLCB4KSA9PiBhc2NlbmRpbmcoZihkKSwgeCk7XG4gICAgZGVsdGEgPSAoZCwgeCkgPT4gZihkKSAtIHg7XG4gIH0gZWxzZSB7XG4gICAgY29tcGFyZTEgPSBmID09PSBhc2NlbmRpbmcgfHwgZiA9PT0gZGVzY2VuZGluZyA/IGYgOiB6ZXJvO1xuICAgIGNvbXBhcmUyID0gZjtcbiAgICBkZWx0YSA9IGY7XG4gIH1cblxuICBmdW5jdGlvbiBsZWZ0KGEsIHgsIGxvID0gMCwgaGkgPSBhLmxlbmd0aCkge1xuICAgIGlmIChsbyA8IGhpKSB7XG4gICAgICBpZiAoY29tcGFyZTEoeCwgeCkgIT09IDApIHJldHVybiBoaTtcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbWlkID0gKGxvICsgaGkpID4+PiAxO1xuICAgICAgICBpZiAoY29tcGFyZTIoYVttaWRdLCB4KSA8IDApIGxvID0gbWlkICsgMTtcbiAgICAgICAgZWxzZSBoaSA9IG1pZDtcbiAgICAgIH0gd2hpbGUgKGxvIDwgaGkpO1xuICAgIH1cbiAgICByZXR1cm4gbG87XG4gIH1cblxuICBmdW5jdGlvbiByaWdodChhLCB4LCBsbyA9IDAsIGhpID0gYS5sZW5ndGgpIHtcbiAgICBpZiAobG8gPCBoaSkge1xuICAgICAgaWYgKGNvbXBhcmUxKHgsIHgpICE9PSAwKSByZXR1cm4gaGk7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+Pj4gMTtcbiAgICAgICAgaWYgKGNvbXBhcmUyKGFbbWlkXSwgeCkgPD0gMCkgbG8gPSBtaWQgKyAxO1xuICAgICAgICBlbHNlIGhpID0gbWlkO1xuICAgICAgfSB3aGlsZSAobG8gPCBoaSk7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbnRlcihhLCB4LCBsbyA9IDAsIGhpID0gYS5sZW5ndGgpIHtcbiAgICBjb25zdCBpID0gbGVmdChhLCB4LCBsbywgaGkgLSAxKTtcbiAgICByZXR1cm4gaSA+IGxvICYmIGRlbHRhKGFbaSAtIDFdLCB4KSA+IC1kZWx0YShhW2ldLCB4KSA/IGkgLSAxIDogaTtcbiAgfVxuXG4gIHJldHVybiB7bGVmdCwgY2VudGVyLCByaWdodH07XG59XG5cbmZ1bmN0aW9uIHplcm8oKSB7XG4gIHJldHVybiAwO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyKHgpIHtcbiAgcmV0dXJuIHggPT09IG51bGwgPyBOYU4gOiAreDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBudW1iZXJzKHZhbHVlcywgdmFsdWVvZikge1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuaW1wb3J0IGJpc2VjdG9yIGZyb20gXCIuL2Jpc2VjdG9yLmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG5jb25zdCBhc2NlbmRpbmdCaXNlY3QgPSBiaXNlY3Rvcihhc2NlbmRpbmcpO1xuZXhwb3J0IGNvbnN0IGJpc2VjdFJpZ2h0ID0gYXNjZW5kaW5nQmlzZWN0LnJpZ2h0O1xuZXhwb3J0IGNvbnN0IGJpc2VjdExlZnQgPSBhc2NlbmRpbmdCaXNlY3QubGVmdDtcbmV4cG9ydCBjb25zdCBiaXNlY3RDZW50ZXIgPSBiaXNlY3RvcihudW1iZXIpLmNlbnRlcjtcbmV4cG9ydCBkZWZhdWx0IGJpc2VjdFJpZ2h0O1xuIiwiY29uc3QgZTEwID0gTWF0aC5zcXJ0KDUwKSxcbiAgICBlNSA9IE1hdGguc3FydCgxMCksXG4gICAgZTIgPSBNYXRoLnNxcnQoMik7XG5cbmZ1bmN0aW9uIHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBjb25zdCBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyBNYXRoLm1heCgwLCBjb3VudCksXG4gICAgICBwb3dlciA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChzdGVwKSksXG4gICAgICBlcnJvciA9IHN0ZXAgLyBNYXRoLnBvdygxMCwgcG93ZXIpLFxuICAgICAgZmFjdG9yID0gZXJyb3IgPj0gZTEwID8gMTAgOiBlcnJvciA+PSBlNSA/IDUgOiBlcnJvciA+PSBlMiA/IDIgOiAxO1xuICBsZXQgaTEsIGkyLCBpbmM7XG4gIGlmIChwb3dlciA8IDApIHtcbiAgICBpbmMgPSBNYXRoLnBvdygxMCwgLXBvd2VyKSAvIGZhY3RvcjtcbiAgICBpMSA9IE1hdGgucm91bmQoc3RhcnQgKiBpbmMpO1xuICAgIGkyID0gTWF0aC5yb3VuZChzdG9wICogaW5jKTtcbiAgICBpZiAoaTEgLyBpbmMgPCBzdGFydCkgKytpMTtcbiAgICBpZiAoaTIgLyBpbmMgPiBzdG9wKSAtLWkyO1xuICAgIGluYyA9IC1pbmM7XG4gIH0gZWxzZSB7XG4gICAgaW5jID0gTWF0aC5wb3coMTAsIHBvd2VyKSAqIGZhY3RvcjtcbiAgICBpMSA9IE1hdGgucm91bmQoc3RhcnQgLyBpbmMpO1xuICAgIGkyID0gTWF0aC5yb3VuZChzdG9wIC8gaW5jKTtcbiAgICBpZiAoaTEgKiBpbmMgPCBzdGFydCkgKytpMTtcbiAgICBpZiAoaTIgKiBpbmMgPiBzdG9wKSAtLWkyO1xuICB9XG4gIGlmIChpMiA8IGkxICYmIDAuNSA8PSBjb3VudCAmJiBjb3VudCA8IDIpIHJldHVybiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQgKiAyKTtcbiAgcmV0dXJuIFtpMSwgaTIsIGluY107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpY2tzKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBzdG9wID0gK3N0b3AsIHN0YXJ0ID0gK3N0YXJ0LCBjb3VudCA9ICtjb3VudDtcbiAgaWYgKCEoY291bnQgPiAwKSkgcmV0dXJuIFtdO1xuICBpZiAoc3RhcnQgPT09IHN0b3ApIHJldHVybiBbc3RhcnRdO1xuICBjb25zdCByZXZlcnNlID0gc3RvcCA8IHN0YXJ0LCBbaTEsIGkyLCBpbmNdID0gcmV2ZXJzZSA/IHRpY2tTcGVjKHN0b3AsIHN0YXJ0LCBjb3VudCkgOiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQpO1xuICBpZiAoIShpMiA+PSBpMSkpIHJldHVybiBbXTtcbiAgY29uc3QgbiA9IGkyIC0gaTEgKyAxLCB0aWNrcyA9IG5ldyBBcnJheShuKTtcbiAgaWYgKHJldmVyc2UpIHtcbiAgICBpZiAoaW5jIDwgMCkgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkyIC0gaSkgLyAtaW5jO1xuICAgIGVsc2UgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkyIC0gaSkgKiBpbmM7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGluYyA8IDApIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB0aWNrc1tpXSA9IChpMSArIGkpIC8gLWluYztcbiAgICBlbHNlIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB0aWNrc1tpXSA9IChpMSArIGkpICogaW5jO1xuICB9XG4gIHJldHVybiB0aWNrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICByZXR1cm4gdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50KVsyXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBzdG9wID0gK3N0b3AsIHN0YXJ0ID0gK3N0YXJ0LCBjb3VudCA9ICtjb3VudDtcbiAgY29uc3QgcmV2ZXJzZSA9IHN0b3AgPCBzdGFydCwgaW5jID0gcmV2ZXJzZSA/IHRpY2tJbmNyZW1lbnQoc3RvcCwgc3RhcnQsIGNvdW50KSA6IHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgcmV0dXJuIChyZXZlcnNlID8gLTEgOiAxKSAqIChpbmMgPCAwID8gMSAvIC1pbmMgOiBpbmMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geDtcbn1cbiIsImltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eS5qc1wiO1xuXG52YXIgdG9wID0gMSxcbiAgICByaWdodCA9IDIsXG4gICAgYm90dG9tID0gMyxcbiAgICBsZWZ0ID0gNCxcbiAgICBlcHNpbG9uID0gMWUtNjtcblxuZnVuY3Rpb24gdHJhbnNsYXRlWCh4KSB7XG4gIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwwKVwiO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVZKHkpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyB5ICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIG51bWJlcihzY2FsZSkge1xuICByZXR1cm4gZCA9PiArc2NhbGUoZCk7XG59XG5cbmZ1bmN0aW9uIGNlbnRlcihzY2FsZSwgb2Zmc2V0KSB7XG4gIG9mZnNldCA9IE1hdGgubWF4KDAsIHNjYWxlLmJhbmR3aWR0aCgpIC0gb2Zmc2V0ICogMikgLyAyO1xuICBpZiAoc2NhbGUucm91bmQoKSkgb2Zmc2V0ID0gTWF0aC5yb3VuZChvZmZzZXQpO1xuICByZXR1cm4gZCA9PiArc2NhbGUoZCkgKyBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGVudGVyaW5nKCkge1xuICByZXR1cm4gIXRoaXMuX19heGlzO1xufVxuXG5mdW5jdGlvbiBheGlzKG9yaWVudCwgc2NhbGUpIHtcbiAgdmFyIHRpY2tBcmd1bWVudHMgPSBbXSxcbiAgICAgIHRpY2tWYWx1ZXMgPSBudWxsLFxuICAgICAgdGlja0Zvcm1hdCA9IG51bGwsXG4gICAgICB0aWNrU2l6ZUlubmVyID0gNixcbiAgICAgIHRpY2tTaXplT3V0ZXIgPSA2LFxuICAgICAgdGlja1BhZGRpbmcgPSAzLFxuICAgICAgb2Zmc2V0ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgPyAwIDogMC41LFxuICAgICAgayA9IG9yaWVudCA9PT0gdG9wIHx8IG9yaWVudCA9PT0gbGVmdCA/IC0xIDogMSxcbiAgICAgIHggPSBvcmllbnQgPT09IGxlZnQgfHwgb3JpZW50ID09PSByaWdodCA/IFwieFwiIDogXCJ5XCIsXG4gICAgICB0cmFuc2Zvcm0gPSBvcmllbnQgPT09IHRvcCB8fCBvcmllbnQgPT09IGJvdHRvbSA/IHRyYW5zbGF0ZVggOiB0cmFuc2xhdGVZO1xuXG4gIGZ1bmN0aW9uIGF4aXMoY29udGV4dCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aWNrVmFsdWVzID09IG51bGwgPyAoc2NhbGUudGlja3MgPyBzY2FsZS50aWNrcy5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50cykgOiBzY2FsZS5kb21haW4oKSkgOiB0aWNrVmFsdWVzLFxuICAgICAgICBmb3JtYXQgPSB0aWNrRm9ybWF0ID09IG51bGwgPyAoc2NhbGUudGlja0Zvcm1hdCA/IHNjYWxlLnRpY2tGb3JtYXQuYXBwbHkoc2NhbGUsIHRpY2tBcmd1bWVudHMpIDogaWRlbnRpdHkpIDogdGlja0Zvcm1hdCxcbiAgICAgICAgc3BhY2luZyA9IE1hdGgubWF4KHRpY2tTaXplSW5uZXIsIDApICsgdGlja1BhZGRpbmcsXG4gICAgICAgIHJhbmdlID0gc2NhbGUucmFuZ2UoKSxcbiAgICAgICAgcmFuZ2UwID0gK3JhbmdlWzBdICsgb2Zmc2V0LFxuICAgICAgICByYW5nZTEgPSArcmFuZ2VbcmFuZ2UubGVuZ3RoIC0gMV0gKyBvZmZzZXQsXG4gICAgICAgIHBvc2l0aW9uID0gKHNjYWxlLmJhbmR3aWR0aCA/IGNlbnRlciA6IG51bWJlcikoc2NhbGUuY29weSgpLCBvZmZzZXQpLFxuICAgICAgICBzZWxlY3Rpb24gPSBjb250ZXh0LnNlbGVjdGlvbiA/IGNvbnRleHQuc2VsZWN0aW9uKCkgOiBjb250ZXh0LFxuICAgICAgICBwYXRoID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcIi5kb21haW5cIikuZGF0YShbbnVsbF0pLFxuICAgICAgICB0aWNrID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcIi50aWNrXCIpLmRhdGEodmFsdWVzLCBzY2FsZSkub3JkZXIoKSxcbiAgICAgICAgdGlja0V4aXQgPSB0aWNrLmV4aXQoKSxcbiAgICAgICAgdGlja0VudGVyID0gdGljay5lbnRlcigpLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGlja1wiKSxcbiAgICAgICAgbGluZSA9IHRpY2suc2VsZWN0KFwibGluZVwiKSxcbiAgICAgICAgdGV4dCA9IHRpY2suc2VsZWN0KFwidGV4dFwiKTtcblxuICAgIHBhdGggPSBwYXRoLm1lcmdlKHBhdGguZW50ZXIoKS5pbnNlcnQoXCJwYXRoXCIsIFwiLnRpY2tcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvbWFpblwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKSk7XG5cbiAgICB0aWNrID0gdGljay5tZXJnZSh0aWNrRW50ZXIpO1xuXG4gICAgbGluZSA9IGxpbmUubWVyZ2UodGlja0VudGVyLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICAgICAgLmF0dHIoeCArIFwiMlwiLCBrICogdGlja1NpemVJbm5lcikpO1xuXG4gICAgdGV4dCA9IHRleHQubWVyZ2UodGlja0VudGVyLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgICAgIC5hdHRyKHgsIGsgKiBzcGFjaW5nKVxuICAgICAgICAuYXR0cihcImR5XCIsIG9yaWVudCA9PT0gdG9wID8gXCIwZW1cIiA6IG9yaWVudCA9PT0gYm90dG9tID8gXCIwLjcxZW1cIiA6IFwiMC4zMmVtXCIpKTtcblxuICAgIGlmIChjb250ZXh0ICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHBhdGggPSBwYXRoLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICB0aWNrID0gdGljay50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgbGluZSA9IGxpbmUudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIHRleHQgPSB0ZXh0LnRyYW5zaXRpb24oY29udGV4dCk7XG5cbiAgICAgIHRpY2tFeGl0ID0gdGlja0V4aXQudHJhbnNpdGlvbihjb250ZXh0KVxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBlcHNpbG9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGlzRmluaXRlKGQgPSBwb3NpdGlvbihkKSkgPyB0cmFuc2Zvcm0oZCArIG9mZnNldCkgOiB0aGlzLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTsgfSk7XG5cbiAgICAgIHRpY2tFbnRlclxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBlcHNpbG9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgdmFyIHAgPSB0aGlzLnBhcmVudE5vZGUuX19heGlzOyByZXR1cm4gdHJhbnNmb3JtKChwICYmIGlzRmluaXRlKHAgPSBwKGQpKSA/IHAgOiBwb3NpdGlvbihkKSkgKyBvZmZzZXQpOyB9KTtcbiAgICB9XG5cbiAgICB0aWNrRXhpdC5yZW1vdmUoKTtcblxuICAgIHBhdGhcbiAgICAgICAgLmF0dHIoXCJkXCIsIG9yaWVudCA9PT0gbGVmdCB8fCBvcmllbnQgPT09IHJpZ2h0XG4gICAgICAgICAgICA/ICh0aWNrU2l6ZU91dGVyID8gXCJNXCIgKyBrICogdGlja1NpemVPdXRlciArIFwiLFwiICsgcmFuZ2UwICsgXCJIXCIgKyBvZmZzZXQgKyBcIlZcIiArIHJhbmdlMSArIFwiSFwiICsgayAqIHRpY2tTaXplT3V0ZXIgOiBcIk1cIiArIG9mZnNldCArIFwiLFwiICsgcmFuZ2UwICsgXCJWXCIgKyByYW5nZTEpXG4gICAgICAgICAgICA6ICh0aWNrU2l6ZU91dGVyID8gXCJNXCIgKyByYW5nZTAgKyBcIixcIiArIGsgKiB0aWNrU2l6ZU91dGVyICsgXCJWXCIgKyBvZmZzZXQgKyBcIkhcIiArIHJhbmdlMSArIFwiVlwiICsgayAqIHRpY2tTaXplT3V0ZXIgOiBcIk1cIiArIHJhbmdlMCArIFwiLFwiICsgb2Zmc2V0ICsgXCJIXCIgKyByYW5nZTEpKTtcblxuICAgIHRpY2tcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHRyYW5zZm9ybShwb3NpdGlvbihkKSArIG9mZnNldCk7IH0pO1xuXG4gICAgbGluZVxuICAgICAgICAuYXR0cih4ICsgXCIyXCIsIGsgKiB0aWNrU2l6ZUlubmVyKTtcblxuICAgIHRleHRcbiAgICAgICAgLmF0dHIoeCwgayAqIHNwYWNpbmcpXG4gICAgICAgIC50ZXh0KGZvcm1hdCk7XG5cbiAgICBzZWxlY3Rpb24uZmlsdGVyKGVudGVyaW5nKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIDEwKVxuICAgICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIG9yaWVudCA9PT0gcmlnaHQgPyBcInN0YXJ0XCIgOiBvcmllbnQgPT09IGxlZnQgPyBcImVuZFwiIDogXCJtaWRkbGVcIik7XG5cbiAgICBzZWxlY3Rpb25cbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7IHRoaXMuX19heGlzID0gcG9zaXRpb247IH0pO1xuICB9XG5cbiAgYXhpcy5zY2FsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzY2FsZSA9IF8sIGF4aXMpIDogc2NhbGU7XG4gIH07XG5cbiAgYXhpcy50aWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aWNrQXJndW1lbnRzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpLCBheGlzO1xuICB9O1xuXG4gIGF4aXMudGlja0FyZ3VtZW50cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrQXJndW1lbnRzID0gXyA9PSBudWxsID8gW10gOiBBcnJheS5mcm9tKF8pLCBheGlzKSA6IHRpY2tBcmd1bWVudHMuc2xpY2UoKTtcbiAgfTtcblxuICBheGlzLnRpY2tWYWx1ZXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1ZhbHVlcyA9IF8gPT0gbnVsbCA/IG51bGwgOiBBcnJheS5mcm9tKF8pLCBheGlzKSA6IHRpY2tWYWx1ZXMgJiYgdGlja1ZhbHVlcy5zbGljZSgpO1xuICB9O1xuXG4gIGF4aXMudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrRm9ybWF0ID0gXywgYXhpcykgOiB0aWNrRm9ybWF0O1xuICB9O1xuXG4gIGF4aXMudGlja1NpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVJbm5lciA9IHRpY2tTaXplT3V0ZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZUlubmVyO1xuICB9O1xuXG4gIGF4aXMudGlja1NpemVJbm5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZUlubmVyID0gK18sIGF4aXMpIDogdGlja1NpemVJbm5lcjtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplT3V0ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVPdXRlciA9ICtfLCBheGlzKSA6IHRpY2tTaXplT3V0ZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrUGFkZGluZyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrUGFkZGluZyA9ICtfLCBheGlzKSA6IHRpY2tQYWRkaW5nO1xuICB9O1xuXG4gIGF4aXMub2Zmc2V0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG9mZnNldCA9ICtfLCBheGlzKSA6IG9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gYXhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNUb3Aoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXModG9wLCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzUmlnaHQoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMocmlnaHQsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNCb3R0b20oc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMoYm90dG9tLCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzTGVmdChzY2FsZSkge1xuICByZXR1cm4gYXhpcyhsZWZ0LCBzY2FsZSk7XG59XG4iLCJ2YXIgbm9vcCA9IHt2YWx1ZTogKCkgPT4ge319O1xuXG5mdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBfID0ge30sIHQ7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoISh0ID0gYXJndW1lbnRzW2ldICsgXCJcIikgfHwgKHQgaW4gXykgfHwgL1tcXHMuXS8udGVzdCh0KSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsImV4cG9ydCB2YXIgeGh0bWwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeGh0bWw6IHhodG1sLFxuICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIHhtbDogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxufTtcbiIsImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4vbmFtZXNwYWNlLmpzXCI7XG5pbXBvcnQge3hodG1sfSBmcm9tIFwiLi9uYW1lc3BhY2VzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0b3JJbmhlcml0KG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCxcbiAgICAgICAgdXJpID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIHVyaSA9PT0geGh0bWwgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0geGh0bWxcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0b3JGaXhlZChmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiAoZnVsbG5hbWUubG9jYWxcbiAgICAgID8gY3JlYXRvckZpeGVkXG4gICAgICA6IGNyZWF0b3JJbmhlcml0KShmdWxsbmFtZSk7XG59XG4iLCJmdW5jdGlvbiBub25lKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBub25lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCIvLyBHaXZlbiBzb21ldGhpbmcgYXJyYXkgbGlrZSAob3IgbnVsbCksIHJldHVybnMgc29tZXRoaW5nIHRoYXQgaXMgc3RyaWN0bHkgYW5cbi8vIGFycmF5LiBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgYXJyYXktbGlrZSBvYmplY3RzIHBhc3NlZCB0byBkMy5zZWxlY3RBbGxcbi8vIG9yIHNlbGVjdGlvbi5zZWxlY3RBbGwgYXJlIGNvbnZlcnRlZCBpbnRvIHByb3BlciBhcnJheXMgd2hlbiBjcmVhdGluZyBhXG4vLyBzZWxlY3Rpb247IHdlIGRvbuKAmXQgZXZlciB3YW50IHRvIGNyZWF0ZSBhIHNlbGVjdGlvbiBiYWNrZWQgYnkgYSBsaXZlXG4vLyBIVE1MQ29sbGVjdGlvbiBvciBOb2RlTGlzdC4gSG93ZXZlciwgbm90ZSB0aGF0IHNlbGVjdGlvbi5zZWxlY3RBbGwgd2lsbCB1c2UgYVxuLy8gc3RhdGljIE5vZGVMaXN0IGFzIGEgZ3JvdXAsIHNpbmNlIGl0IHNhZmVseSBkZXJpdmVkIGZyb20gcXVlcnlTZWxlY3RvckFsbC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5KHgpIHtcbiAgcmV0dXJuIHggPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheSh4KSA/IHggOiBBcnJheS5mcm9tKHgpO1xufVxuIiwiZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBlbXB0eSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgYXJyYXkgZnJvbSBcIi4uL2FycmF5LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsLmpzXCI7XG5cbmZ1bmN0aW9uIGFycmF5QWxsKHNlbGVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFycmF5KHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ID09PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IGFycmF5QWxsKHNlbGVjdCk7XG4gIGVsc2Ugc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzdWJncm91cHMucHVzaChzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCBwYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkTWF0Y2hlcihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG4iLCJpbXBvcnQge2NoaWxkTWF0Y2hlcn0gZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxudmFyIGZpbmQgPSBBcnJheS5wcm90b3R5cGUuZmluZDtcblxuZnVuY3Rpb24gY2hpbGRGaW5kKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmluZC5jYWxsKHRoaXMuY2hpbGRyZW4sIG1hdGNoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2hpbGRGaXJzdCgpIHtcbiAgcmV0dXJuIHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChtYXRjaCA9PSBudWxsID8gY2hpbGRGaXJzdFxuICAgICAgOiBjaGlsZEZpbmQodHlwZW9mIG1hdGNoID09PSBcImZ1bmN0aW9uXCIgPyBtYXRjaCA6IGNoaWxkTWF0Y2hlcihtYXRjaCkpKTtcbn1cbiIsImltcG9ydCB7Y2hpbGRNYXRjaGVyfSBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG52YXIgZmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlcjtcblxuZnVuY3Rpb24gY2hpbGRyZW4oKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbkZpbHRlcihtYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMuY2hpbGRyZW4sIG1hdGNoKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0QWxsKG1hdGNoID09IG51bGwgPyBjaGlsZHJlblxuICAgICAgOiBjaGlsZHJlbkZpbHRlcih0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IG1hdGNoIDogY2hpbGRNYXRjaGVyKG1hdGNoKSkpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2UuanNcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZW50ZXIgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudGVyTm9kZShwYXJlbnQsIGRhdHVtKSB7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50O1xuICB0aGlzLm5hbWVzcGFjZVVSSSA9IHBhcmVudC5uYW1lc3BhY2VVUkk7XG4gIHRoaXMuX25leHQgPSBudWxsO1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX19kYXRhX18gPSBkYXR1bTtcbn1cblxuRW50ZXJOb2RlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEVudGVyTm9kZSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLl9uZXh0KTsgfSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbihjaGlsZCwgbmV4dCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgbmV4dCk7IH0sXG4gIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7IH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7IH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtFbnRlck5vZGV9IGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGJpbmRJbmRleChwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhKSB7XG4gIHZhciBpID0gMCxcbiAgICAgIG5vZGUsXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZml0IGludG8gdXBkYXRlLlxuICAvLyBQdXQgYW55IG51bGwgbm9kZXMgaW50byBlbnRlci5cbiAgLy8gUHV0IGFueSByZW1haW5pbmcgZGF0YSBpbnRvIGVudGVyLlxuICBmb3IgKDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGRvbuKAmXQgZml0IGludG8gZXhpdC5cbiAgZm9yICg7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRLZXkocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSwga2V5KSB7XG4gIHZhciBpLFxuICAgICAgbm9kZSxcbiAgICAgIG5vZGVCeUtleVZhbHVlID0gbmV3IE1hcCxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAga2V5VmFsdWVzID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKSxcbiAgICAgIGtleVZhbHVlO1xuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBub2RlLlxuICAvLyBJZiBtdWx0aXBsZSBub2RlcyBoYXZlIHRoZSBzYW1lIGtleSwgdGhlIGR1cGxpY2F0ZXMgYXJlIGFkZGVkIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAga2V5VmFsdWVzW2ldID0ga2V5VmFsdWUgPSBrZXkuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkgKyBcIlwiO1xuICAgICAgaWYgKG5vZGVCeUtleVZhbHVlLmhhcyhrZXlWYWx1ZSkpIHtcbiAgICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlQnlLZXlWYWx1ZS5zZXQoa2V5VmFsdWUsIG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBkYXR1bS5cbiAgLy8gSWYgdGhlcmUgYSBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGtleSwgam9pbiBhbmQgYWRkIGl0IHRvIHVwZGF0ZS5cbiAgLy8gSWYgdGhlcmUgaXMgbm90IChvciB0aGUga2V5IGlzIGEgZHVwbGljYXRlKSwgYWRkIGl0IHRvIGVudGVyLlxuICBmb3IgKGkgPSAwOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAga2V5VmFsdWUgPSBrZXkuY2FsbChwYXJlbnQsIGRhdGFbaV0sIGksIGRhdGEpICsgXCJcIjtcbiAgICBpZiAobm9kZSA9IG5vZGVCeUtleVZhbHVlLmdldChrZXlWYWx1ZSkpIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlLmRlbGV0ZShrZXlWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlc1tpXSkgPT09IG5vZGUpKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0dW0obm9kZSkge1xuICByZXR1cm4gbm9kZS5fX2RhdGFfXztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBBcnJheS5mcm9tKHRoaXMsIGRhdHVtKTtcblxuICB2YXIgYmluZCA9IGtleSA/IGJpbmRLZXkgOiBiaW5kSW5kZXgsXG4gICAgICBwYXJlbnRzID0gdGhpcy5fcGFyZW50cyxcbiAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHZhbHVlID0gY29uc3RhbnQodmFsdWUpO1xuXG4gIGZvciAodmFyIG0gPSBncm91cHMubGVuZ3RoLCB1cGRhdGUgPSBuZXcgQXJyYXkobSksIGVudGVyID0gbmV3IEFycmF5KG0pLCBleGl0ID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW2pdLFxuICAgICAgICBncm91cCA9IGdyb3Vwc1tqXSxcbiAgICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICAgIGRhdGEgPSBhcnJheWxpa2UodmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpKSxcbiAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBlbnRlckdyb3VwID0gZW50ZXJbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIHVwZGF0ZUdyb3VwID0gdXBkYXRlW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICBleGl0R3JvdXAgPSBleGl0W2pdID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKTtcblxuICAgIGJpbmQocGFyZW50LCBncm91cCwgZW50ZXJHcm91cCwgdXBkYXRlR3JvdXAsIGV4aXRHcm91cCwgZGF0YSwga2V5KTtcblxuICAgIC8vIE5vdyBjb25uZWN0IHRoZSBlbnRlciBub2RlcyB0byB0aGVpciBmb2xsb3dpbmcgdXBkYXRlIG5vZGUsIHN1Y2ggdGhhdFxuICAgIC8vIGFwcGVuZENoaWxkIGNhbiBpbnNlcnQgdGhlIG1hdGVyaWFsaXplZCBlbnRlciBub2RlIGJlZm9yZSB0aGlzIG5vZGUsXG4gICAgLy8gcmF0aGVyIHRoYW4gYXQgdGhlIGVuZCBvZiB0aGUgcGFyZW50IG5vZGUuXG4gICAgZm9yICh2YXIgaTAgPSAwLCBpMSA9IDAsIHByZXZpb3VzLCBuZXh0OyBpMCA8IGRhdGFMZW5ndGg7ICsraTApIHtcbiAgICAgIGlmIChwcmV2aW91cyA9IGVudGVyR3JvdXBbaTBdKSB7XG4gICAgICAgIGlmIChpMCA+PSBpMSkgaTEgPSBpMCArIDE7XG4gICAgICAgIHdoaWxlICghKG5leHQgPSB1cGRhdGVHcm91cFtpMV0pICYmICsraTEgPCBkYXRhTGVuZ3RoKTtcbiAgICAgICAgcHJldmlvdXMuX25leHQgPSBuZXh0IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlID0gbmV3IFNlbGVjdGlvbih1cGRhdGUsIHBhcmVudHMpO1xuICB1cGRhdGUuX2VudGVyID0gZW50ZXI7XG4gIHVwZGF0ZS5fZXhpdCA9IGV4aXQ7XG4gIHJldHVybiB1cGRhdGU7XG59XG5cbi8vIEdpdmVuIHNvbWUgZGF0YSwgdGhpcyByZXR1cm5zIGFuIGFycmF5LWxpa2UgdmlldyBvZiBpdDogYW4gb2JqZWN0IHRoYXRcbi8vIGV4cG9zZXMgYSBsZW5ndGggcHJvcGVydHkgYW5kIGFsbG93cyBudW1lcmljIGluZGV4aW5nLiBOb3RlIHRoYXQgdW5saWtlXG4vLyBzZWxlY3RBbGwsIHRoaXMgaXNu4oCZdCB3b3JyaWVkIGFib3V0IOKAnGxpdmXigJ0gY29sbGVjdGlvbnMgYmVjYXVzZSB0aGUgcmVzdWx0aW5nXG4vLyBhcnJheSB3aWxsIG9ubHkgYmUgdXNlZCBicmllZmx5IHdoaWxlIGRhdGEgaXMgYmVpbmcgYm91bmQuIChJdCBpcyBwb3NzaWJsZSB0b1xuLy8gY2F1c2UgdGhlIGRhdGEgdG8gY2hhbmdlIHdoaWxlIGl0ZXJhdGluZyBieSB1c2luZyBhIGtleSBmdW5jdGlvbiwgYnV0IHBsZWFzZVxuLy8gZG9u4oCZdDsgd2XigJlkIHJhdGhlciBhdm9pZCBhIGdyYXR1aXRvdXMgY29weS4pXG5mdW5jdGlvbiBhcnJheWxpa2UoZGF0YSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgXCJsZW5ndGhcIiBpbiBkYXRhXG4gICAgPyBkYXRhIC8vIEFycmF5LCBUeXBlZEFycmF5LCBOb2RlTGlzdCwgYXJyYXktbGlrZVxuICAgIDogQXJyYXkuZnJvbShkYXRhKTsgLy8gTWFwLCBTZXQsIGl0ZXJhYmxlLCBzdHJpbmcsIG9yIGFueXRoaW5nIGVsc2Vcbn1cbiIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlLmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2V4aXQgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9uZW50ZXIsIG9udXBkYXRlLCBvbmV4aXQpIHtcbiAgdmFyIGVudGVyID0gdGhpcy5lbnRlcigpLCB1cGRhdGUgPSB0aGlzLCBleGl0ID0gdGhpcy5leGl0KCk7XG4gIGlmICh0eXBlb2Ygb25lbnRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZW50ZXIgPSBvbmVudGVyKGVudGVyKTtcbiAgICBpZiAoZW50ZXIpIGVudGVyID0gZW50ZXIuc2VsZWN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgZW50ZXIgPSBlbnRlci5hcHBlbmQob25lbnRlciArIFwiXCIpO1xuICB9XG4gIGlmIChvbnVwZGF0ZSAhPSBudWxsKSB7XG4gICAgdXBkYXRlID0gb251cGRhdGUodXBkYXRlKTtcbiAgICBpZiAodXBkYXRlKSB1cGRhdGUgPSB1cGRhdGUuc2VsZWN0aW9uKCk7XG4gIH1cbiAgaWYgKG9uZXhpdCA9PSBudWxsKSBleGl0LnJlbW92ZSgpOyBlbHNlIG9uZXhpdChleGl0KTtcbiAgcmV0dXJuIGVudGVyICYmIHVwZGF0ZSA/IGVudGVyLm1lcmdlKHVwZGF0ZSkub3JkZXIoKSA6IHVwZGF0ZTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHZhciBzZWxlY3Rpb24gPSBjb250ZXh0LnNlbGVjdGlvbiA/IGNvbnRleHQuc2VsZWN0aW9uKCkgOiBjb250ZXh0O1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSBzZWxlY3Rpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IC0xLCBtID0gZ3JvdXBzLmxlbmd0aDsgKytqIDwgbTspIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IGdyb3VwLmxlbmd0aCAtIDEsIG5leHQgPSBncm91cFtpXSwgbm9kZTsgLS1pID49IDA7KSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGlmIChuZXh0ICYmIG5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obmV4dCkgXiA0KSBuZXh0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xuICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wYXJlKSB7XG4gIGlmICghY29tcGFyZSkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICBmdW5jdGlvbiBjb21wYXJlTm9kZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgJiYgYiA/IGNvbXBhcmUoYS5fX2RhdGFfXywgYi5fX2RhdGFfXykgOiAhYSAtICFiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc29ydGdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc29ydGdyb3VwID0gc29ydGdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc29ydGdyb3VwW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGdyb3VwLnNvcnQoY29tcGFyZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc29ydGdyb3VwcywgdGhpcy5fcGFyZW50cykub3JkZXIoKTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIG5vZGUgPSBncm91cFtpXTtcbiAgICAgIGlmIChub2RlKSByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQgc2l6ZSA9IDA7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzKSArK3NpemU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuIHNpemU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLm5vZGUoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi4vbmFtZXNwYWNlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBmdWxsbmFtZS5sb2NhbFxuICAgICAgICA/IG5vZGUuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKVxuICAgICAgICA6IG5vZGUuZ2V0QXR0cmlidXRlKGZ1bGxuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KSkpKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gKG5vZGUub3duZXJEb2N1bWVudCAmJiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIC8vIG5vZGUgaXMgYSBOb2RlXG4gICAgICB8fCAobm9kZS5kb2N1bWVudCAmJiBub2RlKSAvLyBub2RlIGlzIGEgV2luZG93XG4gICAgICB8fCBub2RlLmRlZmF1bHRWaWV3OyAvLyBub2RlIGlzIGEgRG9jdW1lbnRcbn1cbiIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlLCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdiwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgICAgPyBzdHlsZVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHN0eWxlRnVuY3Rpb25cbiAgICAgICAgICAgIDogc3R5bGVDb25zdGFudCkobmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKVxuICAgICAgOiBzdHlsZVZhbHVlKHRoaXMubm9kZSgpLCBuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVmFsdWUobm9kZSwgbmFtZSkge1xuICByZXR1cm4gbm9kZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpXG4gICAgICB8fCBkZWZhdWx0Vmlldyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG59XG4iLCJmdW5jdGlvbiBwcm9wZXJ0eVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgZWxzZSB0aGlzW25hbWVdID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gcHJvcGVydHlSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gcHJvcGVydHlGdW5jdGlvblxuICAgICAgICAgIDogcHJvcGVydHlDb25zdGFudCkobmFtZSwgdmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKVtuYW1lXTtcbn1cbiIsImZ1bmN0aW9uIGNsYXNzQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudHJpbSgpLnNwbGl0KC9efFxccysvKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NMaXN0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0IHx8IG5ldyBDbGFzc0xpc3Qobm9kZSk7XG59XG5cbmZ1bmN0aW9uIENsYXNzTGlzdChub2RlKSB7XG4gIHRoaXMuX25vZGUgPSBub2RlO1xuICB0aGlzLl9uYW1lcyA9IGNsYXNzQXJyYXkobm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKTtcbn1cblxuQ2xhc3NMaXN0LnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgdGhpcy5fbmFtZXMucHVzaChuYW1lKTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnNwbGljZShpLCAxKTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfSxcbiAgY29udGFpbnM6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKSA+PSAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjbGFzc2VkQWRkKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LmFkZChuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRSZW1vdmUobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QucmVtb3ZlKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFRydWUobmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzZWRBZGQodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkRmFsc2UobmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzZWRSZW1vdmUodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkRnVuY3Rpb24obmFtZXMsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAodmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKSA/IGNsYXNzZWRBZGQgOiBjbGFzc2VkUmVtb3ZlKSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBuYW1lcyA9IGNsYXNzQXJyYXkobmFtZSArIFwiXCIpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBsaXN0ID0gY2xhc3NMaXN0KHRoaXMubm9kZSgpKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWxpc3QuY29udGFpbnMobmFtZXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBjbGFzc2VkRnVuY3Rpb24gOiB2YWx1ZVxuICAgICAgPyBjbGFzc2VkVHJ1ZVxuICAgICAgOiBjbGFzc2VkRmFsc2UpKG5hbWVzLCB2YWx1ZSkpO1xufVxuIiwiZnVuY3Rpb24gdGV4dFJlbW92ZSgpIHtcbiAgdGhpcy50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyB0ZXh0UmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyB0ZXh0RnVuY3Rpb25cbiAgICAgICAgICA6IHRleHRDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS50ZXh0Q29udGVudDtcbn1cbiIsImZ1bmN0aW9uIGh0bWxSZW1vdmUoKSB7XG4gIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaHRtbENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBodG1sRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gaHRtbFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gaHRtbEZ1bmN0aW9uXG4gICAgICAgICAgOiBodG1sQ29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkuaW5uZXJIVE1MO1xufVxuIiwiZnVuY3Rpb24gcmFpc2UoKSB7XG4gIGlmICh0aGlzLm5leHRTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJhaXNlKTtcbn1cbiIsImZ1bmN0aW9uIGxvd2VyKCkge1xuICBpZiAodGhpcy5wcmV2aW91c1NpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcywgdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChsb3dlcik7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3IuanNcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3IuanNcIjtcblxuZnVuY3Rpb24gY29uc3RhbnROdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSksXG4gICAgICBzZWxlY3QgPSBiZWZvcmUgPT0gbnVsbCA/IGNvbnN0YW50TnVsbCA6IHR5cGVvZiBiZWZvcmUgPT09IFwiZnVuY3Rpb25cIiA/IGJlZm9yZSA6IHNlbGVjdG9yKGJlZm9yZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IG51bGwpO1xuICB9KTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyZW1vdmUpO1xufVxuIiwiZnVuY3Rpb24gc2VsZWN0aW9uX2Nsb25lU2hhbGxvdygpIHtcbiAgdmFyIGNsb25lID0gdGhpcy5jbG9uZU5vZGUoZmFsc2UpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVEZWVwKCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZSh0cnVlKSwgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICByZXR1cm4gcGFyZW50ID8gcGFyZW50Lmluc2VydEJlZm9yZShjbG9uZSwgdGhpcy5uZXh0U2libGluZykgOiBjbG9uZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGVlcCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZGVlcCA/IHNlbGVjdGlvbl9jbG9uZURlZXAgOiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcGVydHkoXCJfX2RhdGFfX1wiLCB2YWx1ZSlcbiAgICAgIDogdGhpcy5ub2RlKCkuX19kYXRhX187XG59XG4iLCJmdW5jdGlvbiBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCwgdGhpcy5fX2RhdGFfXyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUmVtb3ZlKHR5cGVuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb247XG4gICAgaWYgKCFvbikgcmV0dXJuO1xuICAgIGZvciAodmFyIGogPSAwLCBpID0gLTEsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGlmIChvID0gb25bal0sICghdHlwZW5hbWUudHlwZSB8fCBvLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUpICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25bKytpXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgrK2kpIG9uLmxlbmd0aCA9IGk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fX29uO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbkFkZCh0eXBlbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbiwgbywgbGlzdGVuZXIgPSBjb250ZXh0TGlzdGVuZXIodmFsdWUpO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICAgIGlmICgobyA9IG9uW2pdKS50eXBlID09PSB0eXBlbmFtZS50eXBlICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyID0gbGlzdGVuZXIsIG8ub3B0aW9ucyA9IG9wdGlvbnMpO1xuICAgICAgICBvLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGVuYW1lLnR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICBvID0ge3R5cGU6IHR5cGVuYW1lLnR5cGUsIG5hbWU6IHR5cGVuYW1lLm5hbWUsIHZhbHVlOiB2YWx1ZSwgbGlzdGVuZXI6IGxpc3RlbmVyLCBvcHRpb25zOiBvcHRpb25zfTtcbiAgICBpZiAoIW9uKSB0aGlzLl9fb24gPSBbb107XG4gICAgZWxzZSBvbi5wdXNoKG8pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHR5cGVuYW1lcyA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiksIGksIG4gPSB0eXBlbmFtZXMubGVuZ3RoLCB0O1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBvbiA9IHRoaXMubm9kZSgpLl9fb247XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgZm9yIChpID0gMCwgbyA9IG9uW2pdOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICgodCA9IHR5cGVuYW1lc1tpXSkudHlwZSA9PT0gby50eXBlICYmIHQubmFtZSA9PT0gby5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb24gPSB2YWx1ZSA/IG9uQWRkIDogb25SZW1vdmU7XG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHRoaXMuZWFjaChvbih0eXBlbmFtZXNbaV0sIHZhbHVlLCBvcHRpb25zKSk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlLCB0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIHdpbmRvdyA9IGRlZmF1bHRWaWV3KG5vZGUpLFxuICAgICAgZXZlbnQgPSB3aW5kb3cuQ3VzdG9tRXZlbnQ7XG5cbiAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZXZlbnQgPSBuZXcgZXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgIGlmIChwYXJhbXMpIGV2ZW50LmluaXRFdmVudCh0eXBlLCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUpLCBldmVudC5kZXRhaWwgPSBwYXJhbXMuZGV0YWlsO1xuICAgIGVsc2UgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaENvbnN0YW50KHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hGdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBkaXNwYXRjaEZ1bmN0aW9uXG4gICAgICA6IGRpc3BhdGNoQ29uc3RhbnQpKHR5cGUsIHBhcmFtcykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qKCkge1xuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgeWllbGQgbm9kZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBzZWxlY3Rpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkIGZyb20gXCIuL3NlbGVjdENoaWxkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuIGZyb20gXCIuL3NlbGVjdENoaWxkcmVuLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VudGVyIGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2V4aXQgZnJvbSBcIi4vZXhpdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9qb2luIGZyb20gXCIuL2pvaW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlcy5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW0uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb24uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2guanNcIjtcbmltcG9ydCBzZWxlY3Rpb25faXRlcmF0b3IgZnJvbSBcIi4vaXRlcmF0b3IuanNcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fc2VsZWN0aW9uKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuU2VsZWN0aW9uLnByb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBTZWxlY3Rpb24sXG4gIHNlbGVjdDogc2VsZWN0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiBzZWxlY3Rpb25fc2VsZWN0QWxsLFxuICBzZWxlY3RDaGlsZDogc2VsZWN0aW9uX3NlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHNlbGVjdGlvbl9maWx0ZXIsXG4gIGRhdGE6IHNlbGVjdGlvbl9kYXRhLFxuICBlbnRlcjogc2VsZWN0aW9uX2VudGVyLFxuICBleGl0OiBzZWxlY3Rpb25fZXhpdCxcbiAgam9pbjogc2VsZWN0aW9uX2pvaW4sXG4gIG1lcmdlOiBzZWxlY3Rpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogc2VsZWN0aW9uX3NlbGVjdGlvbixcbiAgb3JkZXI6IHNlbGVjdGlvbl9vcmRlcixcbiAgc29ydDogc2VsZWN0aW9uX3NvcnQsXG4gIGNhbGw6IHNlbGVjdGlvbl9jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX25vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fbm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3NpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9lYWNoLFxuICBhdHRyOiBzZWxlY3Rpb25fYXR0cixcbiAgc3R5bGU6IHNlbGVjdGlvbl9zdHlsZSxcbiAgcHJvcGVydHk6IHNlbGVjdGlvbl9wcm9wZXJ0eSxcbiAgY2xhc3NlZDogc2VsZWN0aW9uX2NsYXNzZWQsXG4gIHRleHQ6IHNlbGVjdGlvbl90ZXh0LFxuICBodG1sOiBzZWxlY3Rpb25faHRtbCxcbiAgcmFpc2U6IHNlbGVjdGlvbl9yYWlzZSxcbiAgbG93ZXI6IHNlbGVjdGlvbl9sb3dlcixcbiAgYXBwZW5kOiBzZWxlY3Rpb25fYXBwZW5kLFxuICBpbnNlcnQ6IHNlbGVjdGlvbl9pbnNlcnQsXG4gIHJlbW92ZTogc2VsZWN0aW9uX3JlbW92ZSxcbiAgY2xvbmU6IHNlbGVjdGlvbl9jbG9uZSxcbiAgZGF0dW06IHNlbGVjdGlvbl9kYXR1bSxcbiAgb246IHNlbGVjdGlvbl9vbixcbiAgZGlzcGF0Y2g6IHNlbGVjdGlvbl9kaXNwYXRjaCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IHNlbGVjdGlvbl9pdGVyYXRvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uO1xuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uc3RydWN0b3IsIGZhY3RvcnksIHByb3RvdHlwZSkge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBmYWN0b3J5LnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQocGFyZW50LCBkZWZpbml0aW9uKSB7XG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikgcHJvdG90eXBlW2tleV0gPSBkZWZpbml0aW9uW2tleV07XG4gIHJldHVybiBwcm90b3R5cGU7XG59XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yKCkge31cblxuZXhwb3J0IHZhciBkYXJrZXIgPSAwLjc7XG5leHBvcnQgdmFyIGJyaWdodGVyID0gMSAvIGRhcmtlcjtcblxudmFyIHJlSSA9IFwiXFxcXHMqKFsrLV0/XFxcXGQrKVxcXFxzKlwiLFxuICAgIHJlTiA9IFwiXFxcXHMqKFsrLV0/KD86XFxcXGQqXFxcXC4pP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KVxcXFxzKlwiLFxuICAgIHJlUCA9IFwiXFxcXHMqKFsrLV0/KD86XFxcXGQqXFxcXC4pP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KSVcXFxccypcIixcbiAgICByZUhleCA9IC9eIyhbMC05YS1mXXszLDh9KSQvLFxuICAgIHJlUmdiSW50ZWdlciA9IG5ldyBSZWdFeHAoYF5yZ2JcXFxcKCR7cmVJfSwke3JlSX0sJHtyZUl9XFxcXCkkYCksXG4gICAgcmVSZ2JQZXJjZW50ID0gbmV3IFJlZ0V4cChgXnJnYlxcXFwoJHtyZVB9LCR7cmVQfSwke3JlUH1cXFxcKSRgKSxcbiAgICByZVJnYmFJbnRlZ2VyID0gbmV3IFJlZ0V4cChgXnJnYmFcXFxcKCR7cmVJfSwke3JlSX0sJHtyZUl9LCR7cmVOfVxcXFwpJGApLFxuICAgIHJlUmdiYVBlcmNlbnQgPSBuZXcgUmVnRXhwKGBecmdiYVxcXFwoJHtyZVB9LCR7cmVQfSwke3JlUH0sJHtyZU59XFxcXCkkYCksXG4gICAgcmVIc2xQZXJjZW50ID0gbmV3IFJlZ0V4cChgXmhzbFxcXFwoJHtyZU59LCR7cmVQfSwke3JlUH1cXFxcKSRgKSxcbiAgICByZUhzbGFQZXJjZW50ID0gbmV3IFJlZ0V4cChgXmhzbGFcXFxcKCR7cmVOfSwke3JlUH0sJHtyZVB9LCR7cmVOfVxcXFwpJGApO1xuXG52YXIgbmFtZWQgPSB7XG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gIGFxdWE6IDB4MDBmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcbiAgYXp1cmU6IDB4ZjBmZmZmLFxuICBiZWlnZTogMHhmNWY1ZGMsXG4gIGJpc3F1ZTogMHhmZmU0YzQsXG4gIGJsYWNrOiAweDAwMDAwMCxcbiAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxuICBibHVlOiAweDAwMDBmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gIGJyb3duOiAweGE1MmEyYSxcbiAgYnVybHl3b29kOiAweGRlYjg4NyxcbiAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXG4gIGNob2NvbGF0ZTogMHhkMjY5MWUsXG4gIGNvcmFsOiAweGZmN2Y1MCxcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxuICBjb3Juc2lsazogMHhmZmY4ZGMsXG4gIGNyaW1zb246IDB4ZGMxNDNjLFxuICBjeWFuOiAweDAwZmZmZixcbiAgZGFya2JsdWU6IDB4MDAwMDhiLFxuICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxuICBkYXJrZ3JheTogMHhhOWE5YTksXG4gIGRhcmtncmVlbjogMHgwMDY0MDAsXG4gIGRhcmtncmV5OiAweGE5YTlhOSxcbiAgZGFya2toYWtpOiAweGJkYjc2YixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXG4gIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgZGFya3JlZDogMHg4YjAwMDAsXG4gIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcbiAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcbiAgZGFya3Zpb2xldDogMHg5NDAwZDMsXG4gIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxuICBkaW1ncmF5OiAweDY5Njk2OSxcbiAgZGltZ3JleTogMHg2OTY5NjksXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxuICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcbiAgZnVjaHNpYTogMHhmZjAwZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxuICBnb2xkOiAweGZmZDcwMCxcbiAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgZ3JheTogMHg4MDgwODAsXG4gIGdyZWVuOiAweDAwODAwMCxcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxuICBncmV5OiAweDgwODA4MCxcbiAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxuICBob3RwaW5rOiAweGZmNjliNCxcbiAgaW5kaWFucmVkOiAweGNkNWM1YyxcbiAgaW5kaWdvOiAweDRiMDA4MixcbiAgaXZvcnk6IDB4ZmZmZmYwLFxuICBraGFraTogMHhmMGU2OGMsXG4gIGxhdmVuZGVyOiAweGU2ZTZmYSxcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDAsXG4gIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxuICBsaWdodGN5YW46IDB4ZTBmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDMsXG4gIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxLFxuICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxuICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxuICBsaWdodHllbGxvdzogMHhmZmZmZTAsXG4gIGxpbWU6IDB4MDBmZjAwLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxuICBsaW5lbjogMHhmYWYwZTYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICBtYXJvb246IDB4ODAwMDAwLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXG4gIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxuICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxuICBtb2NjYXNpbjogMHhmZmU0YjUsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgbmF2eTogMHgwMDAwODAsXG4gIG9sZGxhY2U6IDB4ZmRmNWU2LFxuICBvbGl2ZTogMHg4MDgwMDAsXG4gIG9saXZlZHJhYjogMHg2YjhlMjMsXG4gIG9yYW5nZTogMHhmZmE1MDAsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gIG9yY2hpZDogMHhkYTcwZDYsXG4gIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcbiAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxuICBwZXJ1OiAweGNkODUzZixcbiAgcGluazogMHhmZmMwY2IsXG4gIHBsdW06IDB4ZGRhMGRkLFxuICBwb3dkZXJibHVlOiAweGIwZTBlNixcbiAgcHVycGxlOiAweDgwMDA4MCxcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXG4gIHJlZDogMHhmZjAwMDAsXG4gIHJvc3licm93bjogMHhiYzhmOGYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTEsXG4gIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcbiAgc2FsbW9uOiAweGZhODA3MixcbiAgc2FuZHlicm93bjogMHhmNGE0NjAsXG4gIHNlYWdyZWVuOiAweDJlOGI1NyxcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICBzaWVubmE6IDB4YTA1MjJkLFxuICBzaWx2ZXI6IDB4YzBjMGMwLFxuICBza3libHVlOiAweDg3Y2VlYixcbiAgc2xhdGVibHVlOiAweDZhNWFjZCxcbiAgc2xhdGVncmF5OiAweDcwODA5MCxcbiAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgc25vdzogMHhmZmZhZmEsXG4gIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgdGFuOiAweGQyYjQ4YyxcbiAgdGVhbDogMHgwMDgwODAsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICB0b21hdG86IDB4ZmY2MzQ3LFxuICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxuICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICB3aGVhdDogMHhmNWRlYjMsXG4gIHdoaXRlOiAweGZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gIHllbGxvdzogMHhmZmZmMDAsXG4gIHllbGxvd2dyZWVuOiAweDlhY2QzMlxufTtcblxuZGVmaW5lKENvbG9yLCBjb2xvciwge1xuICBjb3B5KGNoYW5uZWxzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IHRoaXMuY29uc3RydWN0b3IsIHRoaXMsIGNoYW5uZWxzKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgfSxcbiAgaGV4OiBjb2xvcl9mb3JtYXRIZXgsIC8vIERlcHJlY2F0ZWQhIFVzZSBjb2xvci5mb3JtYXRIZXguXG4gIGZvcm1hdEhleDogY29sb3JfZm9ybWF0SGV4LFxuICBmb3JtYXRIZXg4OiBjb2xvcl9mb3JtYXRIZXg4LFxuICBmb3JtYXRIc2w6IGNvbG9yX2Zvcm1hdEhzbCxcbiAgZm9ybWF0UmdiOiBjb2xvcl9mb3JtYXRSZ2IsXG4gIHRvU3RyaW5nOiBjb2xvcl9mb3JtYXRSZ2Jcbn0pO1xuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIZXgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIZXg4KCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRIZXg4KCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhzbCgpIHtcbiAgcmV0dXJuIGhzbENvbnZlcnQodGhpcykuZm9ybWF0SHNsKCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdFJnYigpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0UmdiKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yKGZvcm1hdCkge1xuICB2YXIgbSwgbDtcbiAgZm9ybWF0ID0gKGZvcm1hdCArIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKG0gPSByZUhleC5leGVjKGZvcm1hdCkpID8gKGwgPSBtWzFdLmxlbmd0aCwgbSA9IHBhcnNlSW50KG1bMV0sIDE2KSwgbCA9PT0gNiA/IHJnYm4obSkgLy8gI2ZmMDAwMFxuICAgICAgOiBsID09PSAzID8gbmV3IFJnYigobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpLCAxKSAvLyAjZjAwXG4gICAgICA6IGwgPT09IDggPyByZ2JhKG0gPj4gMjQgJiAweGZmLCBtID4+IDE2ICYgMHhmZiwgbSA+PiA4ICYgMHhmZiwgKG0gJiAweGZmKSAvIDB4ZmYpIC8vICNmZjAwMDAwMFxuICAgICAgOiBsID09PSA0ID8gcmdiYSgobSA+PiAxMiAmIDB4ZikgfCAobSA+PiA4ICYgMHhmMCksIChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpKSAvIDB4ZmYpIC8vICNmMDAwXG4gICAgICA6IG51bGwpIC8vIGludmFsaWQgaGV4XG4gICAgICA6IChtID0gcmVSZ2JJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0sIG1bMl0sIG1bM10sIDEpIC8vIHJnYigyNTUsIDAsIDApXG4gICAgICA6IChtID0gcmVSZ2JQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIDEpIC8vIHJnYigxMDAlLCAwJSwgMCUpXG4gICAgICA6IChtID0gcmVSZ2JhSW50ZWdlci5leGVjKGZvcm1hdCkpID8gcmdiYShtWzFdLCBtWzJdLCBtWzNdLCBtWzRdKSAvLyByZ2JhKDI1NSwgMCwgMCwgMSlcbiAgICAgIDogKG0gPSByZVJnYmFQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIG1bNF0pIC8vIHJnYigxMDAlLCAwJSwgMCUsIDEpXG4gICAgICA6IChtID0gcmVIc2xQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBoc2xhKG1bMV0sIG1bMl0gLyAxMDAsIG1bM10gLyAxMDAsIDEpIC8vIGhzbCgxMjAsIDUwJSwgNTAlKVxuICAgICAgOiAobSA9IHJlSHNsYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgbVs0XSkgLy8gaHNsYSgxMjAsIDUwJSwgNTAlLCAxKVxuICAgICAgOiBuYW1lZC5oYXNPd25Qcm9wZXJ0eShmb3JtYXQpID8gcmdibihuYW1lZFtmb3JtYXRdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgOiBmb3JtYXQgPT09IFwidHJhbnNwYXJlbnRcIiA/IG5ldyBSZ2IoTmFOLCBOYU4sIE5hTiwgMClcbiAgICAgIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gcmdibihuKSB7XG4gIHJldHVybiBuZXcgUmdiKG4gPj4gMTYgJiAweGZmLCBuID4+IDggJiAweGZmLCBuICYgMHhmZiwgMSk7XG59XG5cbmZ1bmN0aW9uIHJnYmEociwgZywgYiwgYSkge1xuICBpZiAoYSA8PSAwKSByID0gZyA9IGIgPSBOYU47XG4gIHJldHVybiBuZXcgUmdiKHIsIGcsIGIsIGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiQ29udmVydChvKSB7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IFJnYjtcbiAgbyA9IG8ucmdiKCk7XG4gIHJldHVybiBuZXcgUmdiKG8uciwgby5nLCBvLmIsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2IociwgZywgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IHJnYkNvbnZlcnQocikgOiBuZXcgUmdiKHIsIGcsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMuciA9ICtyO1xuICB0aGlzLmcgPSArZztcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoUmdiLCByZ2IsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBjbGFtcCgpIHtcbiAgICByZXR1cm4gbmV3IFJnYihjbGFtcGkodGhpcy5yKSwgY2xhbXBpKHRoaXMuZyksIGNsYW1waSh0aGlzLmIpLCBjbGFtcGEodGhpcy5vcGFjaXR5KSk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiAoLTAuNSA8PSB0aGlzLnIgJiYgdGhpcy5yIDwgMjU1LjUpXG4gICAgICAgICYmICgtMC41IDw9IHRoaXMuZyAmJiB0aGlzLmcgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5iICYmIHRoaXMuYiA8IDI1NS41KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBoZXg6IHJnYl9mb3JtYXRIZXgsIC8vIERlcHJlY2F0ZWQhIFVzZSBjb2xvci5mb3JtYXRIZXguXG4gIGZvcm1hdEhleDogcmdiX2Zvcm1hdEhleCxcbiAgZm9ybWF0SGV4ODogcmdiX2Zvcm1hdEhleDgsXG4gIGZvcm1hdFJnYjogcmdiX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IHJnYl9mb3JtYXRSZ2Jcbn0pKTtcblxuZnVuY3Rpb24gcmdiX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIGAjJHtoZXgodGhpcy5yKX0ke2hleCh0aGlzLmcpfSR7aGV4KHRoaXMuYil9YDtcbn1cblxuZnVuY3Rpb24gcmdiX2Zvcm1hdEhleDgoKSB7XG4gIHJldHVybiBgIyR7aGV4KHRoaXMucil9JHtoZXgodGhpcy5nKX0ke2hleCh0aGlzLmIpfSR7aGV4KChpc05hTih0aGlzLm9wYWNpdHkpID8gMSA6IHRoaXMub3BhY2l0eSkgKiAyNTUpfWA7XG59XG5cbmZ1bmN0aW9uIHJnYl9mb3JtYXRSZ2IoKSB7XG4gIGNvbnN0IGEgPSBjbGFtcGEodGhpcy5vcGFjaXR5KTtcbiAgcmV0dXJuIGAke2EgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIn0ke2NsYW1waSh0aGlzLnIpfSwgJHtjbGFtcGkodGhpcy5nKX0sICR7Y2xhbXBpKHRoaXMuYil9JHthID09PSAxID8gXCIpXCIgOiBgLCAke2F9KWB9YDtcbn1cblxuZnVuY3Rpb24gY2xhbXBhKG9wYWNpdHkpIHtcbiAgcmV0dXJuIGlzTmFOKG9wYWNpdHkpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG9wYWNpdHkpKTtcbn1cblxuZnVuY3Rpb24gY2xhbXBpKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpIHx8IDApKTtcbn1cblxuZnVuY3Rpb24gaGV4KHZhbHVlKSB7XG4gIHZhbHVlID0gY2xhbXBpKHZhbHVlKTtcbiAgcmV0dXJuICh2YWx1ZSA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHZhbHVlLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gaHNsYShoLCBzLCBsLCBhKSB7XG4gIGlmIChhIDw9IDApIGggPSBzID0gbCA9IE5hTjtcbiAgZWxzZSBpZiAobCA8PSAwIHx8IGwgPj0gMSkgaCA9IHMgPSBOYU47XG4gIGVsc2UgaWYgKHMgPD0gMCkgaCA9IE5hTjtcbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBuZXcgSHNsKG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IEhzbDtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBvO1xuICBvID0gby5yZ2IoKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBoID0gTmFOLFxuICAgICAgcyA9IG1heCAtIG1pbixcbiAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gIGlmIChzKSB7XG4gICAgaWYgKHIgPT09IG1heCkgaCA9IChnIC0gYikgLyBzICsgKGcgPCBiKSAqIDY7XG4gICAgZWxzZSBpZiAoZyA9PT0gbWF4KSBoID0gKGIgLSByKSAvIHMgKyAyO1xuICAgIGVsc2UgaCA9IChyIC0gZykgLyBzICsgNDtcbiAgICBzIC89IGwgPCAwLjUgPyBtYXggKyBtaW4gOiAyIC0gbWF4IC0gbWluO1xuICAgIGggKj0gNjA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaHNsQ29udmVydChoKSA6IG5ldyBIc2woaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5mdW5jdGlvbiBIc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhzbCwgaHNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgMC41ID8gbCA6IDEgLSBsKSAqIHMsXG4gICAgICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGhzbDJyZ2IoaCA+PSAyNDAgPyBoIC0gMjQwIDogaCArIDEyMCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCA8IDEyMCA/IGggKyAyNDAgOiBoIC0gMTIwLCBtMSwgbTIpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfSxcbiAgY2xhbXAoKSB7XG4gICAgcmV0dXJuIG5ldyBIc2woY2xhbXBoKHRoaXMuaCksIGNsYW1wdCh0aGlzLnMpLCBjbGFtcHQodGhpcy5sKSwgY2xhbXBhKHRoaXMub3BhY2l0eSkpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gKDAgPD0gdGhpcy5zICYmIHRoaXMucyA8PSAxIHx8IGlzTmFOKHRoaXMucykpXG4gICAgICAgICYmICgwIDw9IHRoaXMubCAmJiB0aGlzLmwgPD0gMSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgZm9ybWF0SHNsKCkge1xuICAgIGNvbnN0IGEgPSBjbGFtcGEodGhpcy5vcGFjaXR5KTtcbiAgICByZXR1cm4gYCR7YSA9PT0gMSA/IFwiaHNsKFwiIDogXCJoc2xhKFwifSR7Y2xhbXBoKHRoaXMuaCl9LCAke2NsYW1wdCh0aGlzLnMpICogMTAwfSUsICR7Y2xhbXB0KHRoaXMubCkgKiAxMDB9JSR7YSA9PT0gMSA/IFwiKVwiIDogYCwgJHthfSlgfWA7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gY2xhbXBoKHZhbHVlKSB7XG4gIHZhbHVlID0gKHZhbHVlIHx8IDApICUgMzYwO1xuICByZXR1cm4gdmFsdWUgPCAwID8gdmFsdWUgKyAzNjAgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xhbXB0KHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSB8fCAwKSk7XG59XG5cbi8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbmZ1bmN0aW9uIGhzbDJyZ2IoaCwgbTEsIG0yKSB7XG4gIHJldHVybiAoaCA8IDYwID8gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjBcbiAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICA6IGggPCAyNDAgPyBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwXG4gICAgICA6IG0xKSAqIDI1NTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHggPT4gKCkgPT4geDtcbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuIiwiaW1wb3J0IHtyZ2IgYXMgY29sb3JSZ2J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGJhc2lzIGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5pbXBvcnQgYmFzaXNDbG9zZWQgZnJvbSBcIi4vYmFzaXNDbG9zZWQuanNcIjtcbmltcG9ydCBub2dhbW1hLCB7Z2FtbWF9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiByZ2JHYW1tYSh5KSB7XG4gIHZhciBjb2xvciA9IGdhbW1hKHkpO1xuXG4gIGZ1bmN0aW9uIHJnYihzdGFydCwgZW5kKSB7XG4gICAgdmFyIHIgPSBjb2xvcigoc3RhcnQgPSBjb2xvclJnYihzdGFydCkpLnIsIChlbmQgPSBjb2xvclJnYihlbmQpKS5yKSxcbiAgICAgICAgZyA9IGNvbG9yKHN0YXJ0LmcsIGVuZC5nKSxcbiAgICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgICAgb3BhY2l0eSA9IG5vZ2FtbWEoc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5yID0gcih0KTtcbiAgICAgIHN0YXJ0LmcgPSBnKHQpO1xuICAgICAgc3RhcnQuYiA9IGIodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxuXG4gIHJnYi5nYW1tYSA9IHJnYkdhbW1hO1xuXG4gIHJldHVybiByZ2I7XG59KSgxKTtcblxuZnVuY3Rpb24gcmdiU3BsaW5lKHNwbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgdmFyIG4gPSBjb2xvcnMubGVuZ3RoLFxuICAgICAgICByID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBnID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBpLCBjb2xvcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb2xvciA9IGNvbG9yUmdiKGNvbG9yc1tpXSk7XG4gICAgICByW2ldID0gY29sb3IuciB8fCAwO1xuICAgICAgZ1tpXSA9IGNvbG9yLmcgfHwgMDtcbiAgICAgIGJbaV0gPSBjb2xvci5iIHx8IDA7XG4gICAgfVxuICAgIHIgPSBzcGxpbmUocik7XG4gICAgZyA9IHNwbGluZShnKTtcbiAgICBiID0gc3BsaW5lKGIpO1xuICAgIGNvbG9yLm9wYWNpdHkgPSAxO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBjb2xvci5yID0gcih0KTtcbiAgICAgIGNvbG9yLmcgPSBnKHQpO1xuICAgICAgY29sb3IuYiA9IGIodCk7XG4gICAgICByZXR1cm4gY29sb3IgKyBcIlwiO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgcmdiQmFzaXMgPSByZ2JTcGxpbmUoYmFzaXMpO1xuZXhwb3J0IHZhciByZ2JCYXNpc0Nsb3NlZCA9IHJnYlNwbGluZShiYXNpc0Nsb3NlZCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIGlmICghYikgYiA9IFtdO1xuICB2YXIgbiA9IGEgPyBNYXRoLm1pbihiLmxlbmd0aCwgYS5sZW5ndGgpIDogMCxcbiAgICAgIGMgPSBiLnNsaWNlKCksXG4gICAgICBpO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIGNbaV0gPSBhW2ldICogKDEgLSB0KSArIGJbaV0gKiB0O1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXJBcnJheSh4KSB7XG4gIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoeCkgJiYgISh4IGluc3RhbmNlb2YgRGF0YVZpZXcpO1xufVxuIiwiaW1wb3J0IHZhbHVlIGZyb20gXCIuL3ZhbHVlLmpzXCI7XG5pbXBvcnQgbnVtYmVyQXJyYXksIHtpc051bWJlckFycmF5fSBmcm9tIFwiLi9udW1iZXJBcnJheS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiAoaXNOdW1iZXJBcnJheShiKSA/IG51bWJlckFycmF5IDogZ2VuZXJpY0FycmF5KShhLCBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWNBcnJheShhLCBiKSB7XG4gIHZhciBuYiA9IGIgPyBiLmxlbmd0aCA6IDAsXG4gICAgICBuYSA9IGEgPyBNYXRoLm1pbihuYiwgYS5sZW5ndGgpIDogMCxcbiAgICAgIHggPSBuZXcgQXJyYXkobmEpLFxuICAgICAgYyA9IG5ldyBBcnJheShuYiksXG4gICAgICBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBuYTsgKytpKSB4W2ldID0gdmFsdWUoYVtpXSwgYltpXSk7XG4gIGZvciAoOyBpIDwgbmI7ICsraSkgY1tpXSA9IGJbaV07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgY1tpXSA9IHhbaV0odCk7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBkID0gbmV3IERhdGU7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBkLnNldFRpbWUoYSAqICgxIC0gdCkgKyBiICogdCksIGQ7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICogKDEgLSB0KSArIGIgKiB0O1xuICB9O1xufVxuIiwiaW1wb3J0IHZhbHVlIGZyb20gXCIuL3ZhbHVlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGkgPSB7fSxcbiAgICAgIGMgPSB7fSxcbiAgICAgIGs7XG5cbiAgaWYgKGEgPT09IG51bGwgfHwgdHlwZW9mIGEgIT09IFwib2JqZWN0XCIpIGEgPSB7fTtcbiAgaWYgKGIgPT09IG51bGwgfHwgdHlwZW9mIGIgIT09IFwib2JqZWN0XCIpIGIgPSB7fTtcblxuICBmb3IgKGsgaW4gYikge1xuICAgIGlmIChrIGluIGEpIHtcbiAgICAgIGlba10gPSB2YWx1ZShhW2tdLCBiW2tdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY1trXSA9IGJba107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKGsgaW4gaSkgY1trXSA9IGlba10odCk7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG4iLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG52YXIgcmVBID0gL1stK10/KD86XFxkK1xcLj9cXGQqfFxcLj9cXGQrKSg/OltlRV1bLStdP1xcZCspPy9nLFxuICAgIHJlQiA9IG5ldyBSZWdFeHAocmVBLnNvdXJjZSwgXCJnXCIpO1xuXG5mdW5jdGlvbiB6ZXJvKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBiO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbmUoYikge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBiKHQpICsgXCJcIjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYmkgPSByZUEubGFzdEluZGV4ID0gcmVCLmxhc3RJbmRleCA9IDAsIC8vIHNjYW4gaW5kZXggZm9yIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGFtLCAvLyBjdXJyZW50IG1hdGNoIGluIGFcbiAgICAgIGJtLCAvLyBjdXJyZW50IG1hdGNoIGluIGJcbiAgICAgIGJzLCAvLyBzdHJpbmcgcHJlY2VkaW5nIGN1cnJlbnQgbnVtYmVyIGluIGIsIGlmIGFueVxuICAgICAgaSA9IC0xLCAvLyBpbmRleCBpbiBzXG4gICAgICBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuXG4gIC8vIENvZXJjZSBpbnB1dHMgdG8gc3RyaW5ncy5cbiAgYSA9IGEgKyBcIlwiLCBiID0gYiArIFwiXCI7XG5cbiAgLy8gSW50ZXJwb2xhdGUgcGFpcnMgb2YgbnVtYmVycyBpbiBhICYgYi5cbiAgd2hpbGUgKChhbSA9IHJlQS5leGVjKGEpKVxuICAgICAgJiYgKGJtID0gcmVCLmV4ZWMoYikpKSB7XG4gICAgaWYgKChicyA9IGJtLmluZGV4KSA+IGJpKSB7IC8vIGEgc3RyaW5nIHByZWNlZGVzIHRoZSBuZXh0IG51bWJlciBpbiBiXG4gICAgICBicyA9IGIuc2xpY2UoYmksIGJzKTtcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBicztcbiAgICB9XG4gICAgaWYgKChhbSA9IGFtWzBdKSA9PT0gKGJtID0gYm1bMF0pKSB7IC8vIG51bWJlcnMgaW4gYSAmIGIgbWF0Y2hcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJtOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBibTtcbiAgICB9IGVsc2UgeyAvLyBpbnRlcnBvbGF0ZSBub24tbWF0Y2hpbmcgbnVtYmVyc1xuICAgICAgc1srK2ldID0gbnVsbDtcbiAgICAgIHEucHVzaCh7aTogaSwgeDogbnVtYmVyKGFtLCBibSl9KTtcbiAgICB9XG4gICAgYmkgPSByZUIubGFzdEluZGV4O1xuICB9XG5cbiAgLy8gQWRkIHJlbWFpbnMgb2YgYi5cbiAgaWYgKGJpIDwgYi5sZW5ndGgpIHtcbiAgICBicyA9IGIuc2xpY2UoYmkpO1xuICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gIH1cblxuICAvLyBTcGVjaWFsIG9wdGltaXphdGlvbiBmb3Igb25seSBhIHNpbmdsZSBtYXRjaC5cbiAgLy8gT3RoZXJ3aXNlLCBpbnRlcnBvbGF0ZSBlYWNoIG9mIHRoZSBudW1iZXJzIGFuZCByZWpvaW4gdGhlIHN0cmluZy5cbiAgcmV0dXJuIHMubGVuZ3RoIDwgMiA/IChxWzBdXG4gICAgICA/IG9uZShxWzBdLngpXG4gICAgICA6IHplcm8oYikpXG4gICAgICA6IChiID0gcS5sZW5ndGgsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbzsgaSA8IGI7ICsraSkgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgICAgIH0pO1xufVxuIiwiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgcmdiIGZyb20gXCIuL3JnYi5qc1wiO1xuaW1wb3J0IHtnZW5lcmljQXJyYXl9IGZyb20gXCIuL2FycmF5LmpzXCI7XG5pbXBvcnQgZGF0ZSBmcm9tIFwiLi9kYXRlLmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuaW1wb3J0IG9iamVjdCBmcm9tIFwiLi9vYmplY3QuanNcIjtcbmltcG9ydCBzdHJpbmcgZnJvbSBcIi4vc3RyaW5nLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBudW1iZXJBcnJheSwge2lzTnVtYmVyQXJyYXl9IGZyb20gXCIuL251bWJlckFycmF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHQgPSB0eXBlb2YgYiwgYztcbiAgcmV0dXJuIGIgPT0gbnVsbCB8fCB0ID09PSBcImJvb2xlYW5cIiA/IGNvbnN0YW50KGIpXG4gICAgICA6ICh0ID09PSBcIm51bWJlclwiID8gbnVtYmVyXG4gICAgICA6IHQgPT09IFwic3RyaW5nXCIgPyAoKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIHJnYikgOiBzdHJpbmcpXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IHJnYlxuICAgICAgOiBiIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGVcbiAgICAgIDogaXNOdW1iZXJBcnJheShiKSA/IG51bWJlckFycmF5XG4gICAgICA6IEFycmF5LmlzQXJyYXkoYikgPyBnZW5lcmljQXJyYXlcbiAgICAgIDogdHlwZW9mIGIudmFsdWVPZiAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBiLnRvU3RyaW5nICE9PSBcImZ1bmN0aW9uXCIgfHwgaXNOYU4oYikgPyBvYmplY3RcbiAgICAgIDogbnVtYmVyKShhLCBiKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoYSAqICgxIC0gdCkgKyBiICogdCk7XG4gIH07XG59XG4iLCJ2YXIgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cbmV4cG9ydCB2YXIgaWRlbnRpdHkgPSB7XG4gIHRyYW5zbGF0ZVg6IDAsXG4gIHRyYW5zbGF0ZVk6IDAsXG4gIHJvdGF0ZTogMCxcbiAgc2tld1g6IDAsXG4gIHNjYWxlWDogMSxcbiAgc2NhbGVZOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhciBzY2FsZVgsIHNjYWxlWSwgc2tld1g7XG4gIGlmIChzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYikpIGEgLz0gc2NhbGVYLCBiIC89IHNjYWxlWDtcbiAgaWYgKHNrZXdYID0gYSAqIGMgKyBiICogZCkgYyAtPSBhICogc2tld1gsIGQgLT0gYiAqIHNrZXdYO1xuICBpZiAoc2NhbGVZID0gTWF0aC5zcXJ0KGMgKiBjICsgZCAqIGQpKSBjIC89IHNjYWxlWSwgZCAvPSBzY2FsZVksIHNrZXdYIC89IHNjYWxlWTtcbiAgaWYgKGEgKiBkIDwgYiAqIGMpIGEgPSAtYSwgYiA9IC1iLCBza2V3WCA9IC1za2V3WCwgc2NhbGVYID0gLXNjYWxlWDtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2xhdGVYOiBlLFxuICAgIHRyYW5zbGF0ZVk6IGYsXG4gICAgcm90YXRlOiBNYXRoLmF0YW4yKGIsIGEpICogZGVncmVlcyxcbiAgICBza2V3WDogTWF0aC5hdGFuKHNrZXdYKSAqIGRlZ3JlZXMsXG4gICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgc2NhbGVZOiBzY2FsZVlcbiAgfTtcbn1cbiIsImltcG9ydCBkZWNvbXBvc2UsIHtpZGVudGl0eX0gZnJvbSBcIi4vZGVjb21wb3NlLmpzXCI7XG5cbnZhciBzdmdOb2RlO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ3NzKHZhbHVlKSB7XG4gIGNvbnN0IG0gPSBuZXcgKHR5cGVvZiBET01NYXRyaXggPT09IFwiZnVuY3Rpb25cIiA/IERPTU1hdHJpeCA6IFdlYktpdENTU01hdHJpeCkodmFsdWUgKyBcIlwiKTtcbiAgcmV0dXJuIG0uaXNJZGVudGl0eSA/IGlkZW50aXR5IDogZGVjb21wb3NlKG0uYSwgbS5iLCBtLmMsIG0uZCwgbS5lLCBtLmYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKCFzdmdOb2RlKSBzdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICBzdmdOb2RlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB2YWx1ZSk7XG4gIGlmICghKHZhbHVlID0gc3ZnTm9kZS50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpKSkgcmV0dXJuIGlkZW50aXR5O1xuICB2YWx1ZSA9IHZhbHVlLm1hdHJpeDtcbiAgcmV0dXJuIGRlY29tcG9zZSh2YWx1ZS5hLCB2YWx1ZS5iLCB2YWx1ZS5jLCB2YWx1ZS5kLCB2YWx1ZS5lLCB2YWx1ZS5mKTtcbn1cbiIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4uL251bWJlci5qc1wiO1xuaW1wb3J0IHtwYXJzZUNzcywgcGFyc2VTdmd9IGZyb20gXCIuL3BhcnNlLmpzXCI7XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlLCBweENvbW1hLCBweFBhcmVuLCBkZWdQYXJlbikge1xuXG4gIGZ1bmN0aW9uIHBvcChzKSB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID8gcy5wb3AoKSArIFwiIFwiIDogXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChcInRyYW5zbGF0ZShcIiwgbnVsbCwgcHhDb21tYSwgbnVsbCwgcHhQYXJlbik7XG4gICAgICBxLnB1c2goe2k6IGkgLSA0LCB4OiBudW1iZXIoeGEsIHhiKX0sIHtpOiBpIC0gMiwgeDogbnVtYmVyKHlhLCB5Yil9KTtcbiAgICB9IGVsc2UgaWYgKHhiIHx8IHliKSB7XG4gICAgICBzLnB1c2goXCJ0cmFuc2xhdGUoXCIgKyB4YiArIHB4Q29tbWEgKyB5YiArIHB4UGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJvdGF0ZShhLCBiLCBzLCBxKSB7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIGlmIChhIC0gYiA+IDE4MCkgYiArPSAzNjA7IGVsc2UgaWYgKGIgLSBhID4gMTgwKSBhICs9IDM2MDsgLy8gc2hvcnRlc3QgcGF0aFxuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIsIG51bGwsIGRlZ1BhcmVuKSAtIDIsIHg6IG51bWJlcihhLCBiKX0pO1xuICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBza2V3WChhLCBiLCBzLCBxKSB7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwic2tld1goXCIsIG51bGwsIGRlZ1BhcmVuKSAtIDIsIHg6IG51bWJlcihhLCBiKX0pO1xuICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2tld1goXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjYWxlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIsIG51bGwsIFwiLFwiLCBudWxsLCBcIilcIik7XG4gICAgICBxLnB1c2goe2k6IGkgLSA0LCB4OiBudW1iZXIoeGEsIHhiKX0sIHtpOiBpIC0gMiwgeDogbnVtYmVyKHlhLCB5Yil9KTtcbiAgICB9IGVsc2UgaWYgKHhiICE9PSAxIHx8IHliICE9PSAxKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiArIHhiICsgXCIsXCIgKyB5YiArIFwiKVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG4gICAgYSA9IHBhcnNlKGEpLCBiID0gcGFyc2UoYik7XG4gICAgdHJhbnNsYXRlKGEudHJhbnNsYXRlWCwgYS50cmFuc2xhdGVZLCBiLnRyYW5zbGF0ZVgsIGIudHJhbnNsYXRlWSwgcywgcSk7XG4gICAgcm90YXRlKGEucm90YXRlLCBiLnJvdGF0ZSwgcywgcSk7XG4gICAgc2tld1goYS5za2V3WCwgYi5za2V3WCwgcywgcSk7XG4gICAgc2NhbGUoYS5zY2FsZVgsIGEuc2NhbGVZLCBiLnNjYWxlWCwgYi5zY2FsZVksIHMsIHEpO1xuICAgIGEgPSBiID0gbnVsbDsgLy8gZ2NcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGkgPSAtMSwgbiA9IHEubGVuZ3RoLCBvO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyA9IGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlQ3NzLCBcInB4LCBcIiwgXCJweClcIiwgXCJkZWcpXCIpO1xuZXhwb3J0IHZhciBpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyA9IGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlU3ZnLCBcIiwgXCIsIFwiKVwiLCBcIilcIik7XG4iLCJ2YXIgZnJhbWUgPSAwLCAvLyBpcyBhbiBhbmltYXRpb24gZnJhbWUgcGVuZGluZz9cbiAgICB0aW1lb3V0ID0gMCwgLy8gaXMgYSB0aW1lb3V0IHBlbmRpbmc/XG4gICAgaW50ZXJ2YWwgPSAwLCAvLyBhcmUgYW55IHRpbWVycyBhY3RpdmU/XG4gICAgcG9rZURlbGF5ID0gMTAwMCwgLy8gaG93IGZyZXF1ZW50bHkgd2UgY2hlY2sgZm9yIGNsb2NrIHNrZXdcbiAgICB0YXNrSGVhZCxcbiAgICB0YXNrVGFpbCxcbiAgICBjbG9ja0xhc3QgPSAwLFxuICAgIGNsb2NrTm93ID0gMCxcbiAgICBjbG9ja1NrZXcgPSAwLFxuICAgIGNsb2NrID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBcIm9iamVjdFwiICYmIHBlcmZvcm1hbmNlLm5vdyA/IHBlcmZvcm1hbmNlIDogRGF0ZSxcbiAgICBzZXRGcmFtZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpIDogZnVuY3Rpb24oZikgeyBzZXRUaW1lb3V0KGYsIDE3KTsgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIGNsb2NrTm93IHx8IChzZXRGcmFtZShjbGVhck5vdyksIGNsb2NrTm93ID0gY2xvY2subm93KCkgKyBjbG9ja1NrZXcpO1xufVxuXG5mdW5jdGlvbiBjbGVhck5vdygpIHtcbiAgY2xvY2tOb3cgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoKSB7XG4gIHRoaXMuX2NhbGwgPVxuICB0aGlzLl90aW1lID1cbiAgdGhpcy5fbmV4dCA9IG51bGw7XG59XG5cblRpbWVyLnByb3RvdHlwZSA9IHRpbWVyLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRpbWVyLFxuICByZXN0YXJ0OiBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB0aW1lID0gKHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWUpICsgKGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5KTtcbiAgICBpZiAoIXRoaXMuX25leHQgJiYgdGFza1RhaWwgIT09IHRoaXMpIHtcbiAgICAgIGlmICh0YXNrVGFpbCkgdGFza1RhaWwuX25leHQgPSB0aGlzO1xuICAgICAgZWxzZSB0YXNrSGVhZCA9IHRoaXM7XG4gICAgICB0YXNrVGFpbCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMuX2NhbGwgPSBjYWxsYmFjaztcbiAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICBzbGVlcCgpO1xuICB9LFxuICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2FsbCkge1xuICAgICAgdGhpcy5fY2FsbCA9IG51bGw7XG4gICAgICB0aGlzLl90aW1lID0gSW5maW5pdHk7XG4gICAgICBzbGVlcCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXJGbHVzaCgpIHtcbiAgbm93KCk7IC8vIEdldCB0aGUgY3VycmVudCB0aW1lLCBpZiBub3QgYWxyZWFkeSBzZXQuXG4gICsrZnJhbWU7IC8vIFByZXRlbmQgd2XigJl2ZSBzZXQgYW4gYWxhcm0sIGlmIHdlIGhhdmVu4oCZdCBhbHJlYWR5LlxuICB2YXIgdCA9IHRhc2tIZWFkLCBlO1xuICB3aGlsZSAodCkge1xuICAgIGlmICgoZSA9IGNsb2NrTm93IC0gdC5fdGltZSkgPj0gMCkgdC5fY2FsbC5jYWxsKHVuZGVmaW5lZCwgZSk7XG4gICAgdCA9IHQuX25leHQ7XG4gIH1cbiAgLS1mcmFtZTtcbn1cblxuZnVuY3Rpb24gd2FrZSgpIHtcbiAgY2xvY2tOb3cgPSAoY2xvY2tMYXN0ID0gY2xvY2subm93KCkpICsgY2xvY2tTa2V3O1xuICBmcmFtZSA9IHRpbWVvdXQgPSAwO1xuICB0cnkge1xuICAgIHRpbWVyRmx1c2goKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmcmFtZSA9IDA7XG4gICAgbmFwKCk7XG4gICAgY2xvY2tOb3cgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBva2UoKSB7XG4gIHZhciBub3cgPSBjbG9jay5ub3coKSwgZGVsYXkgPSBub3cgLSBjbG9ja0xhc3Q7XG4gIGlmIChkZWxheSA+IHBva2VEZWxheSkgY2xvY2tTa2V3IC09IGRlbGF5LCBjbG9ja0xhc3QgPSBub3c7XG59XG5cbmZ1bmN0aW9uIG5hcCgpIHtcbiAgdmFyIHQwLCB0MSA9IHRhc2tIZWFkLCB0MiwgdGltZSA9IEluZmluaXR5O1xuICB3aGlsZSAodDEpIHtcbiAgICBpZiAodDEuX2NhbGwpIHtcbiAgICAgIGlmICh0aW1lID4gdDEuX3RpbWUpIHRpbWUgPSB0MS5fdGltZTtcbiAgICAgIHQwID0gdDEsIHQxID0gdDEuX25leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQyID0gdDEuX25leHQsIHQxLl9uZXh0ID0gbnVsbDtcbiAgICAgIHQxID0gdDAgPyB0MC5fbmV4dCA9IHQyIDogdGFza0hlYWQgPSB0MjtcbiAgICB9XG4gIH1cbiAgdGFza1RhaWwgPSB0MDtcbiAgc2xlZXAodGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgaWYgKGZyYW1lKSByZXR1cm47IC8vIFNvb25lc3QgYWxhcm0gYWxyZWFkeSBzZXQsIG9yIHdpbGwgYmUuXG4gIGlmICh0aW1lb3V0KSB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB2YXIgZGVsYXkgPSB0aW1lIC0gY2xvY2tOb3c7IC8vIFN0cmljdGx5IGxlc3MgdGhhbiBpZiB3ZSByZWNvbXB1dGVkIGNsb2NrTm93LlxuICBpZiAoZGVsYXkgPiAyNCkge1xuICAgIGlmICh0aW1lIDwgSW5maW5pdHkpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHdha2UsIHRpbWUgLSBjbG9jay5ub3coKSAtIGNsb2NrU2tldyk7XG4gICAgaWYgKGludGVydmFsKSBpbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW50ZXJ2YWwpIGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpLCBpbnRlcnZhbCA9IHNldEludGVydmFsKHBva2UsIHBva2VEZWxheSk7XG4gICAgZnJhbWUgPSAxLCBzZXRGcmFtZSh3YWtlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICBkZWxheSA9IGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5O1xuICB0LnJlc3RhcnQoZWxhcHNlZCA9PiB7XG4gICAgdC5zdG9wKCk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCArIGRlbGF5KTtcbiAgfSwgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cbiIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHt0aW1lciwgdGltZW91dH0gZnJvbSBcImQzLXRpbWVyXCI7XG5cbnZhciBlbXB0eU9uID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcImVuZFwiLCBcImNhbmNlbFwiLCBcImludGVycnVwdFwiKTtcbnZhciBlbXB0eVR3ZWVuID0gW107XG5cbmV4cG9ydCB2YXIgQ1JFQVRFRCA9IDA7XG5leHBvcnQgdmFyIFNDSEVEVUxFRCA9IDE7XG5leHBvcnQgdmFyIFNUQVJUSU5HID0gMjtcbmV4cG9ydCB2YXIgU1RBUlRFRCA9IDM7XG5leHBvcnQgdmFyIFJVTk5JTkcgPSA0O1xuZXhwb3J0IHZhciBFTkRJTkcgPSA1O1xuZXhwb3J0IHZhciBFTkRFRCA9IDY7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUsIGlkLCBpbmRleCwgZ3JvdXAsIHRpbWluZykge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb247XG4gIGlmICghc2NoZWR1bGVzKSBub2RlLl9fdHJhbnNpdGlvbiA9IHt9O1xuICBlbHNlIGlmIChpZCBpbiBzY2hlZHVsZXMpIHJldHVybjtcbiAgY3JlYXRlKG5vZGUsIGlkLCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpbmRleDogaW5kZXgsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBncm91cDogZ3JvdXAsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBvbjogZW1wdHlPbixcbiAgICB0d2VlbjogZW1wdHlUd2VlbixcbiAgICB0aW1lOiB0aW1pbmcudGltZSxcbiAgICBkZWxheTogdGltaW5nLmRlbGF5LFxuICAgIGR1cmF0aW9uOiB0aW1pbmcuZHVyYXRpb24sXG4gICAgZWFzZTogdGltaW5nLmVhc2UsXG4gICAgdGltZXI6IG51bGwsXG4gICAgc3RhdGU6IENSRUFURURcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IENSRUFURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHNjaGVkdWxlZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IFNUQVJURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZSB8fCAhKHNjaGVkdWxlID0gc2NoZWR1bGVbaWRdKSkgdGhyb3cgbmV3IEVycm9yKFwidHJhbnNpdGlvbiBub3QgZm91bmRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKG5vZGUsIGlkLCBzZWxmKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHR3ZWVuO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIHNlbGYgdGltZXIgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjcmVhdGVkLlxuICAvLyBOb3RlIHRoZSBhY3R1YWwgZGVsYXkgaXMgbm90IGtub3duIHVudGlsIHRoZSBmaXJzdCBjYWxsYmFjayFcbiAgc2NoZWR1bGVzW2lkXSA9IHNlbGY7XG4gIHNlbGYudGltZXIgPSB0aW1lcihzY2hlZHVsZSwgMCwgc2VsZi50aW1lKTtcblxuICBmdW5jdGlvbiBzY2hlZHVsZShlbGFwc2VkKSB7XG4gICAgc2VsZi5zdGF0ZSA9IFNDSEVEVUxFRDtcbiAgICBzZWxmLnRpbWVyLnJlc3RhcnQoc3RhcnQsIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG5cbiAgICAvLyBJZiB0aGUgZWxhcHNlZCBkZWxheSBpcyBsZXNzIHRoYW4gb3VyIGZpcnN0IHNsZWVwLCBzdGFydCBpbW1lZGlhdGVseS5cbiAgICBpZiAoc2VsZi5kZWxheSA8PSBlbGFwc2VkKSBzdGFydChlbGFwc2VkIC0gc2VsZi5kZWxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChlbGFwc2VkKSB7XG4gICAgdmFyIGksIGosIG4sIG87XG5cbiAgICAvLyBJZiB0aGUgc3RhdGUgaXMgbm90IFNDSEVEVUxFRCwgdGhlbiB3ZSBwcmV2aW91c2x5IGVycm9yZWQgb24gc3RhcnQuXG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNDSEVEVUxFRCkgcmV0dXJuIHN0b3AoKTtcblxuICAgIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICAgIG8gPSBzY2hlZHVsZXNbaV07XG4gICAgICBpZiAoby5uYW1lICE9PSBzZWxmLm5hbWUpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBXaGlsZSB0aGlzIGVsZW1lbnQgYWxyZWFkeSBoYXMgYSBzdGFydGluZyB0cmFuc2l0aW9uIGR1cmluZyB0aGlzIGZyYW1lLFxuICAgICAgLy8gZGVmZXIgc3RhcnRpbmcgYW4gaW50ZXJydXB0aW5nIHRyYW5zaXRpb24gdW50aWwgdGhhdCB0cmFuc2l0aW9uIGhhcyBhXG4gICAgICAvLyBjaGFuY2UgdG8gdGljayAoYW5kIHBvc3NpYmx5IGVuZCk7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzU0IVxuICAgICAgaWYgKG8uc3RhdGUgPT09IFNUQVJURUQpIHJldHVybiB0aW1lb3V0KHN0YXJ0KTtcblxuICAgICAgLy8gSW50ZXJydXB0IHRoZSBhY3RpdmUgdHJhbnNpdGlvbiwgaWYgYW55LlxuICAgICAgaWYgKG8uc3RhdGUgPT09IFJVTk5JTkcpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiaW50ZXJydXB0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuXG4gICAgICAvLyBDYW5jZWwgYW55IHByZS1lbXB0ZWQgdHJhbnNpdGlvbnMuXG4gICAgICBlbHNlIGlmICgraSA8IGlkKSB7XG4gICAgICAgIG8uc3RhdGUgPSBFTkRFRDtcbiAgICAgICAgby50aW1lci5zdG9wKCk7XG4gICAgICAgIG8ub24uY2FsbChcImNhbmNlbFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBvLmluZGV4LCBvLmdyb3VwKTtcbiAgICAgICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWZlciB0aGUgZmlyc3QgdGljayB0byBlbmQgb2YgdGhlIGN1cnJlbnQgZnJhbWU7IHNlZSBkMy9kMyMxNTc2LlxuICAgIC8vIE5vdGUgdGhlIHRyYW5zaXRpb24gbWF5IGJlIGNhbmNlbGVkIGFmdGVyIHN0YXJ0IGFuZCBiZWZvcmUgdGhlIGZpcnN0IHRpY2shXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgc2NoZWR1bGVkIGJlZm9yZSB0aGUgc3RhcnQgZXZlbnQ7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzE2IVxuICAgIC8vIEFzc3VtaW5nIHRoaXMgaXMgc3VjY2Vzc2Z1bCwgc3Vic2VxdWVudCBjYWxsYmFja3MgZ28gc3RyYWlnaHQgdG8gdGljay5cbiAgICB0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09IFNUQVJURUQpIHtcbiAgICAgICAgc2VsZi5zdGF0ZSA9IFJVTk5JTkc7XG4gICAgICAgIHNlbGYudGltZXIucmVzdGFydCh0aWNrLCBzZWxmLmRlbGF5LCBzZWxmLnRpbWUpO1xuICAgICAgICB0aWNrKGVsYXBzZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIHN0YXJ0IGV2ZW50LlxuICAgIC8vIE5vdGUgdGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIHRoZSB0d2VlbiBhcmUgaW5pdGlhbGl6ZWQuXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJUSU5HO1xuICAgIHNlbGYub24uY2FsbChcInN0YXJ0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApO1xuICAgIGlmIChzZWxmLnN0YXRlICE9PSBTVEFSVElORykgcmV0dXJuOyAvLyBpbnRlcnJ1cHRlZFxuICAgIHNlbGYuc3RhdGUgPSBTVEFSVEVEO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgdHdlZW4sIGRlbGV0aW5nIG51bGwgdHdlZW4uXG4gICAgdHdlZW4gPSBuZXcgQXJyYXkobiA9IHNlbGYudHdlZW4ubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBqID0gLTE7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChvID0gc2VsZi50d2VlbltpXS52YWx1ZS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApKSB7XG4gICAgICAgIHR3ZWVuWysral0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICB0d2Vlbi5sZW5ndGggPSBqICsgMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xuICAgIHZhciB0ID0gZWxhcHNlZCA8IHNlbGYuZHVyYXRpb24gPyBzZWxmLmVhc2UuY2FsbChudWxsLCBlbGFwc2VkIC8gc2VsZi5kdXJhdGlvbikgOiAoc2VsZi50aW1lci5yZXN0YXJ0KHN0b3ApLCBzZWxmLnN0YXRlID0gRU5ESU5HLCAxKSxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gdHdlZW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIHR3ZWVuW2ldLmNhbGwobm9kZSwgdCk7XG4gICAgfVxuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIGVuZCBldmVudC5cbiAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gRU5ESU5HKSB7XG4gICAgICBzZWxmLm9uLmNhbGwoXCJlbmRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBzZWxmLnN0YXRlID0gRU5ERUQ7XG4gICAgc2VsZi50aW1lci5zdG9wKCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpZF07XG4gICAgZm9yICh2YXIgaSBpbiBzY2hlZHVsZXMpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtTVEFSVElORywgRU5ESU5HLCBFTkRFRH0gZnJvbSBcIi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBuYW1lKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHNjaGVkdWxlLFxuICAgICAgYWN0aXZlLFxuICAgICAgZW1wdHkgPSB0cnVlLFxuICAgICAgaTtcblxuICBpZiAoIXNjaGVkdWxlcykgcmV0dXJuO1xuXG4gIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG5cbiAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgIGlmICgoc2NoZWR1bGUgPSBzY2hlZHVsZXNbaV0pLm5hbWUgIT09IG5hbWUpIHsgZW1wdHkgPSBmYWxzZTsgY29udGludWU7IH1cbiAgICBhY3RpdmUgPSBzY2hlZHVsZS5zdGF0ZSA+IFNUQVJUSU5HICYmIHNjaGVkdWxlLnN0YXRlIDwgRU5ESU5HO1xuICAgIHNjaGVkdWxlLnN0YXRlID0gRU5ERUQ7XG4gICAgc2NoZWR1bGUudGltZXIuc3RvcCgpO1xuICAgIHNjaGVkdWxlLm9uLmNhbGwoYWN0aXZlID8gXCJpbnRlcnJ1cHRcIiA6IFwiY2FuY2VsXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNjaGVkdWxlLmluZGV4LCBzY2hlZHVsZS5ncm91cCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgfVxuXG4gIGlmIChlbXB0eSkgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xufVxuIiwiaW1wb3J0IGludGVycnVwdCBmcm9tIFwiLi4vaW50ZXJydXB0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpbnRlcnJ1cHQodGhpcywgbmFtZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gdHdlZW5SZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9IHR3ZWVuMCA9IHR3ZWVuO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMSA9IHR3ZWVuMS5zbGljZSgpO1xuICAgICAgICAgIHR3ZWVuMS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHdlZW5GdW5jdGlvbihpZCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSAodHdlZW4wID0gdHdlZW4pLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciB0ID0ge25hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0sIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjFbaV0gPSB0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gbikgdHdlZW4xLnB1c2godCk7XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIG5hbWUgKz0gXCJcIjtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgdHdlZW4gPSBnZXQodGhpcy5ub2RlKCksIGlkKS50d2VlbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuLmxlbmd0aCwgdDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh0ID0gdHdlZW5baV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbCA/IHR3ZWVuUmVtb3ZlIDogdHdlZW5GdW5jdGlvbikoaWQsIG5hbWUsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0d2VlblZhbHVlKHRyYW5zaXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRyYW5zaXRpb24uX2lkO1xuXG4gIHRyYW5zaXRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpO1xuICAgIChzY2hlZHVsZS52YWx1ZSB8fCAoc2NoZWR1bGUudmFsdWUgPSB7fSkpW25hbWVdID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZ2V0KG5vZGUsIGlkKS52YWx1ZVtuYW1lXTtcbiAgfTtcbn1cbiIsImltcG9ydCB7Y29sb3J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSZ2IsIGludGVycG9sYXRlU3RyaW5nfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYztcbiAgcmV0dXJuICh0eXBlb2YgYiA9PT0gXCJudW1iZXJcIiA/IGludGVycG9sYXRlTnVtYmVyXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IGludGVycG9sYXRlUmdiXG4gICAgICA6IChjID0gY29sb3IoYikpID8gKGIgPSBjLCBpbnRlcnBvbGF0ZVJnYilcbiAgICAgIDogaW50ZXJwb2xhdGVTdHJpbmcpKGEsIGIpO1xufVxuIiwiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAsIHZhbHVlMSA9IHZhbHVlKHRoaXMpLCBzdHJpbmcxO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSksIGkgPSBmdWxsbmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB0aGlzLmF0dHJUd2VlbihuYW1lLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbikoZnVsbG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJhdHRyLlwiICsgbmFtZSwgdmFsdWUpKVxuICAgICAgOiB2YWx1ZSA9PSBudWxsID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkoZnVsbG5hbWUpXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KShmdWxsbmFtZSwgaSwgdmFsdWUpKTtcbn1cbiIsImltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGF0dHJJbnRlcnBvbGF0ZShuYW1lLCBpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgaS5jYWxsKHRoaXMsIHQpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlTlMoZnVsbG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgaS5jYWxsKHRoaXMsIHQpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clR3ZWVuTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgYXR0ckludGVycG9sYXRlTlMoZnVsbG5hbWUsIGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5mdW5jdGlvbiBhdHRyVHdlZW4obmFtZSwgdmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiBhdHRySW50ZXJwb2xhdGUobmFtZSwgaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBrZXkgPSBcImF0dHIuXCIgKyBuYW1lO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCAoZnVsbG5hbWUubG9jYWwgPyBhdHRyVHdlZW5OUyA6IGF0dHJUd2VlbikoZnVsbG5hbWUsIHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge2dldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gZGVsYXlGdW5jdGlvbihpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGluaXQodGhpcywgaWQpLmRlbGF5ID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlbGF5Q29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZGVsYXlGdW5jdGlvblxuICAgICAgICAgIDogZGVsYXlDb25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZGVsYXk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkdXJhdGlvbkZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkdXJhdGlvbkNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZHVyYXRpb25GdW5jdGlvblxuICAgICAgICAgIDogZHVyYXRpb25Db25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZHVyYXRpb247XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaChlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZWFzZTtcbn1cbiIsImltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBlYXNlVmFyeWluZyhpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodHlwZW9mIHYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICAgIHNldCh0aGlzLCBpZCkuZWFzZSA9IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy5lYWNoKGVhc2VWYXJ5aW5nKHRoaXMuX2lkLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHttYXRjaGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgaWYgKHRyYW5zaXRpb24uX2lkICE9PSB0aGlzLl9pZCkgdGhyb3cgbmV3IEVycm9yO1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSB0cmFuc2l0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIHN0YXJ0KG5hbWUpIHtcbiAgcmV0dXJuIChuYW1lICsgXCJcIikudHJpbSgpLnNwbGl0KC9efFxccysvKS5ldmVyeShmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiAhdCB8fCB0ID09PSBcInN0YXJ0XCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgb24wLCBvbjEsIHNpdCA9IHN0YXJ0KG5hbWUpID8gaW5pdCA6IHNldDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNpdCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub247XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjApIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24obmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMlxuICAgICAgPyBnZXQodGhpcy5ub2RlKCksIGlkKS5vbi5vbihuYW1lKVxuICAgICAgOiB0aGlzLmVhY2gob25GdW5jdGlvbihpZCwgbmFtZSwgbGlzdGVuZXIpKTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZUZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5fX3RyYW5zaXRpb24pIGlmICgraSAhPT0gaWQpIHJldHVybjtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vbihcImVuZC5yZW1vdmVcIiwgcmVtb3ZlRnVuY3Rpb24odGhpcy5faWQpKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0b3J9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkID0gdGhpcy5faWQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICAgIHNjaGVkdWxlKHN1Ymdyb3VwW2ldLCBuYW1lLCBpZCwgaSwgc3ViZ3JvdXAsIGdldChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0b3JBbGx9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkID0gdGhpcy5faWQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBmb3IgKHZhciBjaGlsZHJlbiA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSwgY2hpbGQsIGluaGVyaXQgPSBnZXQobm9kZSwgaWQpLCBrID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgayA8IGw7ICsraykge1xuICAgICAgICAgIGlmIChjaGlsZCA9IGNoaWxkcmVuW2tdKSB7XG4gICAgICAgICAgICBzY2hlZHVsZShjaGlsZCwgbmFtZSwgaWQsIGssIGNoaWxkcmVuLCBpbmhlcml0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3ViZ3JvdXBzLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxudmFyIFNlbGVjdGlvbiA9IHNlbGVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9ncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge3N0eWxlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3NldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcbmltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tIFwiLi9pbnRlcnBvbGF0ZS5qc1wiO1xuXG5mdW5jdGlvbiBzdHlsZU51bGwobmFtZSwgaW50ZXJwb2xhdGUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICBzdHJpbmcxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgc3RyaW5nMTAgPSBzdHJpbmcxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSxcbiAgICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSBzdHJpbmcxID0gdmFsdWUxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlTWF5YmVSZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIG9uMCwgb24xLCBsaXN0ZW5lcjAsIGtleSA9IFwic3R5bGUuXCIgKyBuYW1lLCBldmVudCA9IFwiZW5kLlwiICsga2V5LCByZW1vdmU7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICBvbiA9IHNjaGVkdWxlLm9uLFxuICAgICAgICBsaXN0ZW5lciA9IHNjaGVkdWxlLnZhbHVlW2tleV0gPT0gbnVsbCA/IHJlbW92ZSB8fCAocmVtb3ZlID0gc3R5bGVSZW1vdmUobmFtZSkpIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmIChvbiAhPT0gb24wIHx8IGxpc3RlbmVyMCAhPT0gbGlzdGVuZXIpIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24oZXZlbnQsIGxpc3RlbmVyMCA9IGxpc3RlbmVyKTtcblxuICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGkgPSAobmFtZSArPSBcIlwiKSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVOdWxsKG5hbWUsIGkpKVxuICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgc3R5bGVSZW1vdmUobmFtZSkpXG4gICAgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlRnVuY3Rpb24obmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcInN0eWxlLlwiICsgbmFtZSwgdmFsdWUpKSlcbiAgICAgIC5lYWNoKHN0eWxlTWF5YmVSZW1vdmUodGhpcy5faWQsIG5hbWUpKVxuICAgIDogdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVDb25zdGFudChuYW1lLCBpLCB2YWx1ZSksIHByaW9yaXR5KVxuICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgbnVsbCk7XG59XG4iLCJmdW5jdGlvbiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBpLmNhbGwodGhpcywgdCksIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVUd2VlbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIHQsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0ID0gKGkwID0gaSkgJiYgc3R5bGVJbnRlcnBvbGF0ZShuYW1lLCBpLCBwcmlvcml0eSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBrZXkgPSBcInN0eWxlLlwiICsgKG5hbWUgKz0gXCJcIik7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSk7XG59XG4iLCJpbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWUxID09IG51bGwgPyBcIlwiIDogdmFsdWUxO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy50d2VlbihcInRleHRcIiwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gdGV4dEZ1bmN0aW9uKHR3ZWVuVmFsdWUodGhpcywgXCJ0ZXh0XCIsIHZhbHVlKSlcbiAgICAgIDogdGV4dENvbnN0YW50KHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiKSk7XG59XG4iLCJmdW5jdGlvbiB0ZXh0SW50ZXJwb2xhdGUoaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSBpLmNhbGwodGhpcywgdCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRUd2Vlbih2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIHRleHRJbnRlcnBvbGF0ZShpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGtleSA9IFwidGV4dFwiO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgdGV4dFR3ZWVuKHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQwID0gdGhpcy5faWQsXG4gICAgICBpZDEgPSBuZXdJZCgpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHZhciBpbmhlcml0ID0gZ2V0KG5vZGUsIGlkMCk7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkMSwgaSwgZ3JvdXAsIHtcbiAgICAgICAgICB0aW1lOiBpbmhlcml0LnRpbWUgKyBpbmhlcml0LmRlbGF5ICsgaW5oZXJpdC5kdXJhdGlvbixcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogaW5oZXJpdC5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlOiBpbmhlcml0LmVhc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKGdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQxKTtcbn1cbiIsImltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG9uMCwgb24xLCB0aGF0ID0gdGhpcywgaWQgPSB0aGF0Ll9pZCwgc2l6ZSA9IHRoYXQuc2l6ZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGNhbmNlbCA9IHt2YWx1ZTogcmVqZWN0fSxcbiAgICAgICAgZW5kID0ge3ZhbHVlOiBmdW5jdGlvbigpIHsgaWYgKC0tc2l6ZSA9PT0gMCkgcmVzb2x2ZSgpOyB9fTtcblxuICAgIHRoYXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICAgIGlmIChvbiAhPT0gb24wKSB7XG4gICAgICAgIG9uMSA9IChvbjAgPSBvbikuY29weSgpO1xuICAgICAgICBvbjEuXy5jYW5jZWwucHVzaChjYW5jZWwpO1xuICAgICAgICBvbjEuXy5pbnRlcnJ1cHQucHVzaChjYW5jZWwpO1xuICAgICAgICBvbjEuXy5lbmQucHVzaChlbmQpO1xuICAgICAgfVxuXG4gICAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgICB9KTtcblxuICAgIC8vIFRoZSBzZWxlY3Rpb24gd2FzIGVtcHR5LCByZXNvbHZlIGVuZCBpbW1lZGlhdGVseVxuICAgIGlmIChzaXplID09PSAwKSByZXNvbHZlKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0clR3ZWVuIGZyb20gXCIuL2F0dHJUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZGVsYXkgZnJvbSBcIi4vZGVsYXkuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2R1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lYXNlIGZyb20gXCIuL2Vhc2UuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2VWYXJ5aW5nIGZyb20gXCIuL2Vhc2VWYXJ5aW5nLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fb24gZnJvbSBcIi4vb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3QuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGwuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdGlvbiBmcm9tIFwiLi9zZWxlY3Rpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlIGZyb20gXCIuL3N0eWxlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zdHlsZVR3ZWVuIGZyb20gXCIuL3N0eWxlVHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dFR3ZWVuIGZyb20gXCIuL3RleHRUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90d2VlbiBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZW5kIGZyb20gXCIuL2VuZC5qc1wiO1xuXG52YXIgaWQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNpdGlvbihncm91cHMsIHBhcmVudHMsIG5hbWUsIGlkKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG4gIHRoaXMuX25hbWUgPSBuYW1lO1xuICB0aGlzLl9pZCA9IGlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2l0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdGlvbigpLnRyYW5zaXRpb24obmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdJZCgpIHtcbiAgcmV0dXJuICsraWQ7XG59XG5cbnZhciBzZWxlY3Rpb25fcHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUgPSB0cmFuc2l0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zaXRpb24sXG4gIHNlbGVjdDogdHJhbnNpdGlvbl9zZWxlY3QsXG4gIHNlbGVjdEFsbDogdHJhbnNpdGlvbl9zZWxlY3RBbGwsXG4gIHNlbGVjdENoaWxkOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogc2VsZWN0aW9uX3Byb3RvdHlwZS5zZWxlY3RDaGlsZHJlbixcbiAgZmlsdGVyOiB0cmFuc2l0aW9uX2ZpbHRlcixcbiAgbWVyZ2U6IHRyYW5zaXRpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogdHJhbnNpdGlvbl9zZWxlY3Rpb24sXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25fdHJhbnNpdGlvbixcbiAgY2FsbDogc2VsZWN0aW9uX3Byb3RvdHlwZS5jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlcyxcbiAgbm9kZTogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fcHJvdG90eXBlLmVtcHR5LFxuICBlYWNoOiBzZWxlY3Rpb25fcHJvdG90eXBlLmVhY2gsXG4gIG9uOiB0cmFuc2l0aW9uX29uLFxuICBhdHRyOiB0cmFuc2l0aW9uX2F0dHIsXG4gIGF0dHJUd2VlbjogdHJhbnNpdGlvbl9hdHRyVHdlZW4sXG4gIHN0eWxlOiB0cmFuc2l0aW9uX3N0eWxlLFxuICBzdHlsZVR3ZWVuOiB0cmFuc2l0aW9uX3N0eWxlVHdlZW4sXG4gIHRleHQ6IHRyYW5zaXRpb25fdGV4dCxcbiAgdGV4dFR3ZWVuOiB0cmFuc2l0aW9uX3RleHRUd2VlbixcbiAgcmVtb3ZlOiB0cmFuc2l0aW9uX3JlbW92ZSxcbiAgdHdlZW46IHRyYW5zaXRpb25fdHdlZW4sXG4gIGRlbGF5OiB0cmFuc2l0aW9uX2RlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbl9kdXJhdGlvbixcbiAgZWFzZTogdHJhbnNpdGlvbl9lYXNlLFxuICBlYXNlVmFyeWluZzogdHJhbnNpdGlvbl9lYXNlVmFyeWluZyxcbiAgZW5kOiB0cmFuc2l0aW9uX2VuZCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IHNlbGVjdGlvbl9wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXVxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyB0ICogdCAqIHQgOiAodCAtPSAyKSAqIHQgKiB0ICsgMikgLyAyO1xufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHtlYXNlQ3ViaWNJbk91dH0gZnJvbSBcImQzLWVhc2VcIjtcbmltcG9ydCB7bm93fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGRlZmF1bHRUaW1pbmcgPSB7XG4gIHRpbWU6IG51bGwsIC8vIFNldCBvbiB1c2UuXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMjUwLFxuICBlYXNlOiBlYXNlQ3ViaWNJbk91dFxufTtcblxuZnVuY3Rpb24gaW5oZXJpdChub2RlLCBpZCkge1xuICB2YXIgdGltaW5nO1xuICB3aGlsZSAoISh0aW1pbmcgPSBub2RlLl9fdHJhbnNpdGlvbikgfHwgISh0aW1pbmcgPSB0aW1pbmdbaWRdKSkge1xuICAgIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRyYW5zaXRpb24gJHtpZH0gbm90IGZvdW5kYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1pbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGlkLFxuICAgICAgdGltaW5nO1xuXG4gIGlmIChuYW1lIGluc3RhbmNlb2YgVHJhbnNpdGlvbikge1xuICAgIGlkID0gbmFtZS5faWQsIG5hbWUgPSBuYW1lLl9uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlkID0gbmV3SWQoKSwgKHRpbWluZyA9IGRlZmF1bHRUaW1pbmcpLnRpbWUgPSBub3coKSwgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkLCBpLCBncm91cCwgdGltaW5nIHx8IGluaGVyaXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnRlcnJ1cHQgZnJvbSBcIi4vaW50ZXJydXB0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiO1xuXG5zZWxlY3Rpb24ucHJvdG90eXBlLmludGVycnVwdCA9IHNlbGVjdGlvbl9pbnRlcnJ1cHQ7XG5zZWxlY3Rpb24ucHJvdG90eXBlLnRyYW5zaXRpb24gPSBzZWxlY3Rpb25fdHJhbnNpdGlvbjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHggPSBNYXRoLnJvdW5kKHgpKSA+PSAxZTIxXG4gICAgICA/IHgudG9Mb2NhbGVTdHJpbmcoXCJlblwiKS5yZXBsYWNlKC8sL2csIFwiXCIpXG4gICAgICA6IHgudG9TdHJpbmcoMTApO1xufVxuXG4vLyBDb21wdXRlcyB0aGUgZGVjaW1hbCBjb2VmZmljaWVudCBhbmQgZXhwb25lbnQgb2YgdGhlIHNwZWNpZmllZCBudW1iZXIgeCB3aXRoXG4vLyBzaWduaWZpY2FudCBkaWdpdHMgcCwgd2hlcmUgeCBpcyBwb3NpdGl2ZSBhbmQgcCBpcyBpbiBbMSwgMjFdIG9yIHVuZGVmaW5lZC5cbi8vIEZvciBleGFtcGxlLCBmb3JtYXREZWNpbWFsUGFydHMoMS4yMykgcmV0dXJucyBbXCIxMjNcIiwgMF0uXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGVjaW1hbFBhcnRzKHgsIHApIHtcbiAgaWYgKChpID0gKHggPSBwID8geC50b0V4cG9uZW50aWFsKHAgLSAxKSA6IHgudG9FeHBvbmVudGlhbCgpKS5pbmRleE9mKFwiZVwiKSkgPCAwKSByZXR1cm4gbnVsbDsgLy8gTmFOLCDCsUluZmluaXR5XG4gIHZhciBpLCBjb2VmZmljaWVudCA9IHguc2xpY2UoMCwgaSk7XG5cbiAgLy8gVGhlIHN0cmluZyByZXR1cm5lZCBieSB0b0V4cG9uZW50aWFsIGVpdGhlciBoYXMgdGhlIGZvcm0gXFxkXFwuXFxkK2VbLStdXFxkK1xuICAvLyAoZS5nLiwgMS4yZSszKSBvciB0aGUgZm9ybSBcXGRlWy0rXVxcZCsgKGUuZy4sIDFlKzMpLlxuICByZXR1cm4gW1xuICAgIGNvZWZmaWNpZW50Lmxlbmd0aCA+IDEgPyBjb2VmZmljaWVudFswXSArIGNvZWZmaWNpZW50LnNsaWNlKDIpIDogY29lZmZpY2llbnQsXG4gICAgK3guc2xpY2UoaSArIDEpXG4gIF07XG59XG4iLCJpbXBvcnQge2Zvcm1hdERlY2ltYWxQYXJ0c30gZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4ID0gZm9ybWF0RGVjaW1hbFBhcnRzKE1hdGguYWJzKHgpKSwgeCA/IHhbMV0gOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihncm91cGluZywgdGhvdXNhbmRzKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgd2lkdGgpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgdCA9IFtdLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgZyA9IGdyb3VwaW5nWzBdLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgd2hpbGUgKGkgPiAwICYmIGcgPiAwKSB7XG4gICAgICBpZiAobGVuZ3RoICsgZyArIDEgPiB3aWR0aCkgZyA9IE1hdGgubWF4KDEsIHdpZHRoIC0gbGVuZ3RoKTtcbiAgICAgIHQucHVzaCh2YWx1ZS5zdWJzdHJpbmcoaSAtPSBnLCBpICsgZykpO1xuICAgICAgaWYgKChsZW5ndGggKz0gZyArIDEpID4gd2lkdGgpIGJyZWFrO1xuICAgICAgZyA9IGdyb3VwaW5nW2ogPSAoaiArIDEpICUgZ3JvdXBpbmcubGVuZ3RoXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdC5yZXZlcnNlKCkuam9pbih0aG91c2FuZHMpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obnVtZXJhbHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1swLTldL2csIGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBudW1lcmFsc1sraV07XG4gICAgfSk7XG4gIH07XG59XG4iLCIvLyBbW2ZpbGxdYWxpZ25dW3NpZ25dW3N5bWJvbF1bMF1bd2lkdGhdWyxdWy5wcmVjaXNpb25dW35dW3R5cGVdXG52YXIgcmUgPSAvXig/OiguKT8oWzw+PV5dKSk/KFsrXFwtKCBdKT8oWyQjXSk/KDApPyhcXGQrKT8oLCk/KFxcLlxcZCspPyh+KT8oW2EteiVdKT8kL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgaWYgKCEobWF0Y2ggPSByZS5leGVjKHNwZWNpZmllcikpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGZvcm1hdDogXCIgKyBzcGVjaWZpZXIpO1xuICB2YXIgbWF0Y2g7XG4gIHJldHVybiBuZXcgRm9ybWF0U3BlY2lmaWVyKHtcbiAgICBmaWxsOiBtYXRjaFsxXSxcbiAgICBhbGlnbjogbWF0Y2hbMl0sXG4gICAgc2lnbjogbWF0Y2hbM10sXG4gICAgc3ltYm9sOiBtYXRjaFs0XSxcbiAgICB6ZXJvOiBtYXRjaFs1XSxcbiAgICB3aWR0aDogbWF0Y2hbNl0sXG4gICAgY29tbWE6IG1hdGNoWzddLFxuICAgIHByZWNpc2lvbjogbWF0Y2hbOF0gJiYgbWF0Y2hbOF0uc2xpY2UoMSksXG4gICAgdHJpbTogbWF0Y2hbOV0sXG4gICAgdHlwZTogbWF0Y2hbMTBdXG4gIH0pO1xufVxuXG5mb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlID0gRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZTsgLy8gaW5zdGFuY2VvZlxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICB0aGlzLmZpbGwgPSBzcGVjaWZpZXIuZmlsbCA9PT0gdW5kZWZpbmVkID8gXCIgXCIgOiBzcGVjaWZpZXIuZmlsbCArIFwiXCI7XG4gIHRoaXMuYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24gPT09IHVuZGVmaW5lZCA/IFwiPlwiIDogc3BlY2lmaWVyLmFsaWduICsgXCJcIjtcbiAgdGhpcy5zaWduID0gc3BlY2lmaWVyLnNpZ24gPT09IHVuZGVmaW5lZCA/IFwiLVwiIDogc3BlY2lmaWVyLnNpZ24gKyBcIlwiO1xuICB0aGlzLnN5bWJvbCA9IHNwZWNpZmllci5zeW1ib2wgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzcGVjaWZpZXIuc3ltYm9sICsgXCJcIjtcbiAgdGhpcy56ZXJvID0gISFzcGVjaWZpZXIuemVybztcbiAgdGhpcy53aWR0aCA9IHNwZWNpZmllci53aWR0aCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogK3NwZWNpZmllci53aWR0aDtcbiAgdGhpcy5jb21tYSA9ICEhc3BlY2lmaWVyLmNvbW1hO1xuICB0aGlzLnByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICtzcGVjaWZpZXIucHJlY2lzaW9uO1xuICB0aGlzLnRyaW0gPSAhIXNwZWNpZmllci50cmltO1xuICB0aGlzLnR5cGUgPSBzcGVjaWZpZXIudHlwZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHNwZWNpZmllci50eXBlICsgXCJcIjtcbn1cblxuRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5maWxsXG4gICAgICArIHRoaXMuYWxpZ25cbiAgICAgICsgdGhpcy5zaWduXG4gICAgICArIHRoaXMuc3ltYm9sXG4gICAgICArICh0aGlzLnplcm8gPyBcIjBcIiA6IFwiXCIpXG4gICAgICArICh0aGlzLndpZHRoID09PSB1bmRlZmluZWQgPyBcIlwiIDogTWF0aC5tYXgoMSwgdGhpcy53aWR0aCB8IDApKVxuICAgICAgKyAodGhpcy5jb21tYSA/IFwiLFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMucHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyBcIlwiIDogXCIuXCIgKyBNYXRoLm1heCgwLCB0aGlzLnByZWNpc2lvbiB8IDApKVxuICAgICAgKyAodGhpcy50cmltID8gXCJ+XCIgOiBcIlwiKVxuICAgICAgKyB0aGlzLnR5cGU7XG59O1xuIiwiLy8gVHJpbXMgaW5zaWduaWZpY2FudCB6ZXJvcywgZS5nLiwgcmVwbGFjZXMgMS4yMDAwayB3aXRoIDEuMmsuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzKSB7XG4gIG91dDogZm9yICh2YXIgbiA9IHMubGVuZ3RoLCBpID0gMSwgaTAgPSAtMSwgaTE7IGkgPCBuOyArK2kpIHtcbiAgICBzd2l0Y2ggKHNbaV0pIHtcbiAgICAgIGNhc2UgXCIuXCI6IGkwID0gaTEgPSBpOyBicmVhaztcbiAgICAgIGNhc2UgXCIwXCI6IGlmIChpMCA9PT0gMCkgaTAgPSBpOyBpMSA9IGk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogaWYgKCErc1tpXSkgYnJlYWsgb3V0OyBpZiAoaTAgPiAwKSBpMCA9IDA7IGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTAgPiAwID8gcy5zbGljZSgwLCBpMCkgKyBzLnNsaWNlKGkxICsgMSkgOiBzO1xufVxuIiwiaW1wb3J0IHtmb3JtYXREZWNpbWFsUGFydHN9IGZyb20gXCIuL2Zvcm1hdERlY2ltYWwuanNcIjtcblxuZXhwb3J0IHZhciBwcmVmaXhFeHBvbmVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWxQYXJ0cyh4LCBwKTtcbiAgaWYgKCFkKSByZXR1cm4geCArIFwiXCI7XG4gIHZhciBjb2VmZmljaWVudCA9IGRbMF0sXG4gICAgICBleHBvbmVudCA9IGRbMV0sXG4gICAgICBpID0gZXhwb25lbnQgLSAocHJlZml4RXhwb25lbnQgPSBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCAvIDMpKSkgKiAzKSArIDEsXG4gICAgICBuID0gY29lZmZpY2llbnQubGVuZ3RoO1xuICByZXR1cm4gaSA9PT0gbiA/IGNvZWZmaWNpZW50XG4gICAgICA6IGkgPiBuID8gY29lZmZpY2llbnQgKyBuZXcgQXJyYXkoaSAtIG4gKyAxKS5qb2luKFwiMFwiKVxuICAgICAgOiBpID4gMCA/IGNvZWZmaWNpZW50LnNsaWNlKDAsIGkpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShpKVxuICAgICAgOiBcIjAuXCIgKyBuZXcgQXJyYXkoMSAtIGkpLmpvaW4oXCIwXCIpICsgZm9ybWF0RGVjaW1hbFBhcnRzKHgsIE1hdGgubWF4KDAsIHAgKyBpIC0gMSkpWzBdOyAvLyBsZXNzIHRoYW4gMXkhXG59XG4iLCJpbXBvcnQge2Zvcm1hdERlY2ltYWxQYXJ0c30gZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIHZhciBkID0gZm9ybWF0RGVjaW1hbFBhcnRzKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXTtcbiAgcmV0dXJuIGV4cG9uZW50IDwgMCA/IFwiMC5cIiArIG5ldyBBcnJheSgtZXhwb25lbnQpLmpvaW4oXCIwXCIpICsgY29lZmZpY2llbnRcbiAgICAgIDogY29lZmZpY2llbnQubGVuZ3RoID4gZXhwb25lbnQgKyAxID8gY29lZmZpY2llbnQuc2xpY2UoMCwgZXhwb25lbnQgKyAxKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoZXhwb25lbnQgKyAxKVxuICAgICAgOiBjb2VmZmljaWVudCArIG5ldyBBcnJheShleHBvbmVudCAtIGNvZWZmaWNpZW50Lmxlbmd0aCArIDIpLmpvaW4oXCIwXCIpO1xufVxuIiwiaW1wb3J0IGZvcm1hdERlY2ltYWwgZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuaW1wb3J0IGZvcm1hdFByZWZpeEF1dG8gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0by5qc1wiO1xuaW1wb3J0IGZvcm1hdFJvdW5kZWQgZnJvbSBcIi4vZm9ybWF0Um91bmRlZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiJVwiOiAoeCwgcCkgPT4gKHggKiAxMDApLnRvRml4ZWQocCksXG4gIFwiYlwiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygyKSxcbiAgXCJjXCI6ICh4KSA9PiB4ICsgXCJcIixcbiAgXCJkXCI6IGZvcm1hdERlY2ltYWwsXG4gIFwiZVwiOiAoeCwgcCkgPT4geC50b0V4cG9uZW50aWFsKHApLFxuICBcImZcIjogKHgsIHApID0+IHgudG9GaXhlZChwKSxcbiAgXCJnXCI6ICh4LCBwKSA9PiB4LnRvUHJlY2lzaW9uKHApLFxuICBcIm9cIjogKHgpID0+IE1hdGgucm91bmQoeCkudG9TdHJpbmcoOCksXG4gIFwicFwiOiAoeCwgcCkgPT4gZm9ybWF0Um91bmRlZCh4ICogMTAwLCBwKSxcbiAgXCJyXCI6IGZvcm1hdFJvdW5kZWQsXG4gIFwic1wiOiBmb3JtYXRQcmVmaXhBdXRvLFxuICBcIlhcIjogKHgpID0+IE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCksXG4gIFwieFwiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNilcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5pbXBvcnQgZm9ybWF0R3JvdXAgZnJvbSBcIi4vZm9ybWF0R3JvdXAuanNcIjtcbmltcG9ydCBmb3JtYXROdW1lcmFscyBmcm9tIFwiLi9mb3JtYXROdW1lcmFscy5qc1wiO1xuaW1wb3J0IGZvcm1hdFNwZWNpZmllciBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXIuanNcIjtcbmltcG9ydCBmb3JtYXRUcmltIGZyb20gXCIuL2Zvcm1hdFRyaW0uanNcIjtcbmltcG9ydCBmb3JtYXRUeXBlcyBmcm9tIFwiLi9mb3JtYXRUeXBlcy5qc1wiO1xuaW1wb3J0IHtwcmVmaXhFeHBvbmVudH0gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0by5qc1wiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5LmpzXCI7XG5cbnZhciBtYXAgPSBBcnJheS5wcm90b3R5cGUubWFwLFxuICAgIHByZWZpeGVzID0gW1wieVwiLFwielwiLFwiYVwiLFwiZlwiLFwicFwiLFwiblwiLFwiwrVcIixcIm1cIixcIlwiLFwia1wiLFwiTVwiLFwiR1wiLFwiVFwiLFwiUFwiLFwiRVwiLFwiWlwiLFwiWVwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obG9jYWxlKSB7XG4gIHZhciBncm91cCA9IGxvY2FsZS5ncm91cGluZyA9PT0gdW5kZWZpbmVkIHx8IGxvY2FsZS50aG91c2FuZHMgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogZm9ybWF0R3JvdXAobWFwLmNhbGwobG9jYWxlLmdyb3VwaW5nLCBOdW1iZXIpLCBsb2NhbGUudGhvdXNhbmRzICsgXCJcIiksXG4gICAgICBjdXJyZW5jeVByZWZpeCA9IGxvY2FsZS5jdXJyZW5jeSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGxvY2FsZS5jdXJyZW5jeVswXSArIFwiXCIsXG4gICAgICBjdXJyZW5jeVN1ZmZpeCA9IGxvY2FsZS5jdXJyZW5jeSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGxvY2FsZS5jdXJyZW5jeVsxXSArIFwiXCIsXG4gICAgICBkZWNpbWFsID0gbG9jYWxlLmRlY2ltYWwgPT09IHVuZGVmaW5lZCA/IFwiLlwiIDogbG9jYWxlLmRlY2ltYWwgKyBcIlwiLFxuICAgICAgbnVtZXJhbHMgPSBsb2NhbGUubnVtZXJhbHMgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogZm9ybWF0TnVtZXJhbHMobWFwLmNhbGwobG9jYWxlLm51bWVyYWxzLCBTdHJpbmcpKSxcbiAgICAgIHBlcmNlbnQgPSBsb2NhbGUucGVyY2VudCA9PT0gdW5kZWZpbmVkID8gXCIlXCIgOiBsb2NhbGUucGVyY2VudCArIFwiXCIsXG4gICAgICBtaW51cyA9IGxvY2FsZS5taW51cyA9PT0gdW5kZWZpbmVkID8gXCLiiJJcIiA6IGxvY2FsZS5taW51cyArIFwiXCIsXG4gICAgICBuYW4gPSBsb2NhbGUubmFuID09PSB1bmRlZmluZWQgPyBcIk5hTlwiIDogbG9jYWxlLm5hbiArIFwiXCI7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllcikge1xuICAgIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xuXG4gICAgdmFyIGZpbGwgPSBzcGVjaWZpZXIuZmlsbCxcbiAgICAgICAgYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24sXG4gICAgICAgIHNpZ24gPSBzcGVjaWZpZXIuc2lnbixcbiAgICAgICAgc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCxcbiAgICAgICAgemVybyA9IHNwZWNpZmllci56ZXJvLFxuICAgICAgICB3aWR0aCA9IHNwZWNpZmllci53aWR0aCxcbiAgICAgICAgY29tbWEgPSBzcGVjaWZpZXIuY29tbWEsXG4gICAgICAgIHByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24sXG4gICAgICAgIHRyaW0gPSBzcGVjaWZpZXIudHJpbSxcbiAgICAgICAgdHlwZSA9IHNwZWNpZmllci50eXBlO1xuXG4gICAgLy8gVGhlIFwiblwiIHR5cGUgaXMgYW4gYWxpYXMgZm9yIFwiLGdcIi5cbiAgICBpZiAodHlwZSA9PT0gXCJuXCIpIGNvbW1hID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gVGhlIFwiXCIgdHlwZSwgYW5kIGFueSBpbnZhbGlkIHR5cGUsIGlzIGFuIGFsaWFzIGZvciBcIi4xMn5nXCIuXG4gICAgZWxzZSBpZiAoIWZvcm1hdFR5cGVzW3R5cGVdKSBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCAmJiAocHJlY2lzaW9uID0gMTIpLCB0cmltID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gSWYgemVybyBmaWxsIGlzIHNwZWNpZmllZCwgcGFkZGluZyBnb2VzIGFmdGVyIHNpZ24gYW5kIGJlZm9yZSBkaWdpdHMuXG4gICAgaWYgKHplcm8gfHwgKGZpbGwgPT09IFwiMFwiICYmIGFsaWduID09PSBcIj1cIikpIHplcm8gPSB0cnVlLCBmaWxsID0gXCIwXCIsIGFsaWduID0gXCI9XCI7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAvLyBGb3IgU0ktcHJlZml4LCB0aGUgc3VmZml4IGlzIGxhemlseSBjb21wdXRlZC5cbiAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5UHJlZml4IDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICBzdWZmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lTdWZmaXggOiAvWyVwXS8udGVzdCh0eXBlKSA/IHBlcmNlbnQgOiBcIlwiO1xuXG4gICAgLy8gV2hhdCBmb3JtYXQgZnVuY3Rpb24gc2hvdWxkIHdlIHVzZT9cbiAgICAvLyBJcyB0aGlzIGFuIGludGVnZXIgdHlwZT9cbiAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgIHZhciBmb3JtYXRUeXBlID0gZm9ybWF0VHlwZXNbdHlwZV0sXG4gICAgICAgIG1heWJlU3VmZml4ID0gL1tkZWZncHJzJV0vLnRlc3QodHlwZSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgLy8gb3IgY2xhbXAgdGhlIHNwZWNpZmllZCBwcmVjaXNpb24gdG8gdGhlIHN1cHBvcnRlZCByYW5nZS5cbiAgICAvLyBGb3Igc2lnbmlmaWNhbnQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFsxLCAyMV0uXG4gICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gNlxuICAgICAgICA6IC9bZ3Byc10vLnRlc3QodHlwZSkgPyBNYXRoLm1heCgxLCBNYXRoLm1pbigyMSwgcHJlY2lzaW9uKSlcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgcHJlY2lzaW9uKSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHZhciB2YWx1ZVByZWZpeCA9IHByZWZpeCxcbiAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IHN1ZmZpeCxcbiAgICAgICAgICBpLCBuLCBjO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJjXCIpIHtcbiAgICAgICAgdmFsdWVTdWZmaXggPSBmb3JtYXRUeXBlKHZhbHVlKSArIHZhbHVlU3VmZml4O1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHNpZ24uIC0wIGlzIG5vdCBsZXNzIHRoYW4gMCwgYnV0IDEgLyAtMCBpcyFcbiAgICAgICAgdmFyIHZhbHVlTmVnYXRpdmUgPSB2YWx1ZSA8IDAgfHwgMSAvIHZhbHVlIDwgMDtcblxuICAgICAgICAvLyBQZXJmb3JtIHRoZSBpbml0aWFsIGZvcm1hdHRpbmcuXG4gICAgICAgIHZhbHVlID0gaXNOYU4odmFsdWUpID8gbmFuIDogZm9ybWF0VHlwZShNYXRoLmFicyh2YWx1ZSksIHByZWNpc2lvbik7XG5cbiAgICAgICAgLy8gVHJpbSBpbnNpZ25pZmljYW50IHplcm9zLlxuICAgICAgICBpZiAodHJpbSkgdmFsdWUgPSBmb3JtYXRUcmltKHZhbHVlKTtcblxuICAgICAgICAvLyBJZiBhIG5lZ2F0aXZlIHZhbHVlIHJvdW5kcyB0byB6ZXJvIGFmdGVyIGZvcm1hdHRpbmcsIGFuZCBubyBleHBsaWNpdCBwb3NpdGl2ZSBzaWduIGlzIHJlcXVlc3RlZCwgaGlkZSB0aGUgc2lnbi5cbiAgICAgICAgaWYgKHZhbHVlTmVnYXRpdmUgJiYgK3ZhbHVlID09PSAwICYmIHNpZ24gIT09IFwiK1wiKSB2YWx1ZU5lZ2F0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcHJlZml4IGFuZCBzdWZmaXguXG4gICAgICAgIHZhbHVlUHJlZml4ID0gKHZhbHVlTmVnYXRpdmUgPyAoc2lnbiA9PT0gXCIoXCIgPyBzaWduIDogbWludXMpIDogc2lnbiA9PT0gXCItXCIgfHwgc2lnbiA9PT0gXCIoXCIgPyBcIlwiIDogc2lnbikgKyB2YWx1ZVByZWZpeDtcbiAgICAgICAgdmFsdWVTdWZmaXggPSAodHlwZSA9PT0gXCJzXCIgPyBwcmVmaXhlc1s4ICsgcHJlZml4RXhwb25lbnQgLyAzXSA6IFwiXCIpICsgdmFsdWVTdWZmaXggKyAodmFsdWVOZWdhdGl2ZSAmJiBzaWduID09PSBcIihcIiA/IFwiKVwiIDogXCJcIik7XG5cbiAgICAgICAgLy8gQnJlYWsgdGhlIGZvcm1hdHRlZCB2YWx1ZSBpbnRvIHRoZSBpbnRlZ2VyIOKAnHZhbHVl4oCdIHBhcnQgdGhhdCBjYW4gYmVcbiAgICAgICAgLy8gZ3JvdXBlZCwgYW5kIGZyYWN0aW9uYWwgb3IgZXhwb25lbnRpYWwg4oCcc3VmZml44oCdIHBhcnQgdGhhdCBpcyBub3QuXG4gICAgICAgIGlmIChtYXliZVN1ZmZpeCkge1xuICAgICAgICAgIGkgPSAtMSwgbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgaWYgKGMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpLCA0OCA+IGMgfHwgYyA+IDU3KSB7XG4gICAgICAgICAgICAgIHZhbHVlU3VmZml4ID0gKGMgPT09IDQ2ID8gZGVjaW1hbCArIHZhbHVlLnNsaWNlKGkgKyAxKSA6IHZhbHVlLnNsaWNlKGkpKSArIHZhbHVlU3VmZml4O1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGZpbGwgY2hhcmFjdGVyIGlzIG5vdCBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBiZWZvcmUgcGFkZGluZy5cbiAgICAgIGlmIChjb21tYSAmJiAhemVybykgdmFsdWUgPSBncm91cCh2YWx1ZSwgSW5maW5pdHkpO1xuXG4gICAgICAvLyBDb21wdXRlIHRoZSBwYWRkaW5nLlxuICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlUHJlZml4Lmxlbmd0aCArIHZhbHVlLmxlbmd0aCArIHZhbHVlU3VmZml4Lmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gbGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpIDogXCJcIjtcblxuICAgICAgLy8gSWYgdGhlIGZpbGwgY2hhcmFjdGVyIGlzIFwiMFwiLCBncm91cGluZyBpcyBhcHBsaWVkIGFmdGVyIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgemVybykgdmFsdWUgPSBncm91cChwYWRkaW5nICsgdmFsdWUsIHBhZGRpbmcubGVuZ3RoID8gd2lkdGggLSB2YWx1ZVN1ZmZpeC5sZW5ndGggOiBJbmZpbml0eSksIHBhZGRpbmcgPSBcIlwiO1xuXG4gICAgICAvLyBSZWNvbnN0cnVjdCB0aGUgZmluYWwgb3V0cHV0IGJhc2VkIG9uIHRoZSBkZXNpcmVkIGFsaWdubWVudC5cbiAgICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSBcIjxcIjogdmFsdWUgPSB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nOyBicmVhaztcbiAgICAgICAgY2FzZSBcIj1cIjogdmFsdWUgPSB2YWx1ZVByZWZpeCArIHBhZGRpbmcgKyB2YWx1ZSArIHZhbHVlU3VmZml4OyBicmVhaztcbiAgICAgICAgY2FzZSBcIl5cIjogdmFsdWUgPSBwYWRkaW5nLnNsaWNlKDAsIGxlbmd0aCA9IHBhZGRpbmcubGVuZ3RoID4+IDEpICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZy5zbGljZShsZW5ndGgpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogdmFsdWUgPSBwYWRkaW5nICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4OyBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bWVyYWxzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBmb3JtYXQudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzcGVjaWZpZXIgKyBcIlwiO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0UHJlZml4KHNwZWNpZmllciwgdmFsdWUpIHtcbiAgICB2YXIgZiA9IG5ld0Zvcm1hdCgoc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllciksIHNwZWNpZmllci50eXBlID0gXCJmXCIsIHNwZWNpZmllcikpLFxuICAgICAgICBlID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMsXG4gICAgICAgIGsgPSBNYXRoLnBvdygxMCwgLWUpLFxuICAgICAgICBwcmVmaXggPSBwcmVmaXhlc1s4ICsgZSAvIDNdO1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGYoayAqIHZhbHVlKSArIHByZWZpeDtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IG5ld0Zvcm1hdCxcbiAgICBmb3JtYXRQcmVmaXg6IGZvcm1hdFByZWZpeFxuICB9O1xufVxuIiwiaW1wb3J0IGZvcm1hdExvY2FsZSBmcm9tIFwiLi9sb2NhbGUuanNcIjtcblxudmFyIGxvY2FsZTtcbmV4cG9ydCB2YXIgZm9ybWF0O1xuZXhwb3J0IHZhciBmb3JtYXRQcmVmaXg7XG5cbmRlZmF1bHRMb2NhbGUoe1xuICB0aG91c2FuZHM6IFwiLFwiLFxuICBncm91cGluZzogWzNdLFxuICBjdXJyZW5jeTogW1wiJFwiLCBcIlwiXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRMb2NhbGUoZGVmaW5pdGlvbikge1xuICBsb2NhbGUgPSBmb3JtYXRMb2NhbGUoZGVmaW5pdGlvbik7XG4gIGZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIGZvcm1hdFByZWZpeCA9IGxvY2FsZS5mb3JtYXRQcmVmaXg7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgLWV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzIC0gZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCBtYXgpIHtcbiAgc3RlcCA9IE1hdGguYWJzKHN0ZXApLCBtYXggPSBNYXRoLmFicyhtYXgpIC0gc3RlcDtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIGV4cG9uZW50KG1heCkgLSBleHBvbmVudChzdGVwKSkgKyAxO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRSYW5nZShkb21haW4sIHJhbmdlKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogYnJlYWs7XG4gICAgY2FzZSAxOiB0aGlzLnJhbmdlKGRvbWFpbik7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRoaXMucmFuZ2UocmFuZ2UpLmRvbWFpbihkb21haW4pOyBicmVhaztcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbnRlcnBvbGF0b3IoZG9tYWluLCBpbnRlcnBvbGF0b3IpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiBicmVhaztcbiAgICBjYXNlIDE6IHtcbiAgICAgIGlmICh0eXBlb2YgZG9tYWluID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuaW50ZXJwb2xhdG9yKGRvbWFpbik7XG4gICAgICBlbHNlIHRoaXMucmFuZ2UoZG9tYWluKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aGlzLmRvbWFpbihkb21haW4pO1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0b3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5pbnRlcnBvbGF0b3IoaW50ZXJwb2xhdG9yKTtcbiAgICAgIGVsc2UgdGhpcy5yYW5nZShpbnRlcnBvbGF0b3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uc3RhbnRzKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyKHgpIHtcbiAgcmV0dXJuICt4O1xufVxuIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZSBhcyBpbnRlcnBvbGF0ZVZhbHVlLCBpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciB1bml0ID0gWzAsIDFdO1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKGEsIGIpIHtcbiAgcmV0dXJuIChiIC09IChhID0gK2EpKVxuICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiAoeCAtIGEpIC8gYjsgfVxuICAgICAgOiBjb25zdGFudChpc05hTihiKSA/IE5hTiA6IDAuNSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wZXIoYSwgYikge1xuICB2YXIgdDtcbiAgaWYgKGEgPiBiKSB0ID0gYSwgYSA9IGIsIGIgPSB0O1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5tYXgoYSwgTWF0aC5taW4oYiwgeCkpOyB9O1xufVxuXG4vLyBub3JtYWxpemUoYSwgYikoeCkgdGFrZXMgYSBkb21haW4gdmFsdWUgeCBpbiBbYSxiXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXIgdCBpbiBbMCwxXS5cbi8vIGludGVycG9sYXRlKGEsIGIpKHQpIHRha2VzIGEgcGFyYW1ldGVyIHQgaW4gWzAsMV0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmFuZ2UgdmFsdWUgeCBpbiBbYSxiXS5cbmZ1bmN0aW9uIGJpbWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBkMCA9IGRvbWFpblswXSwgZDEgPSBkb21haW5bMV0sIHIwID0gcmFuZ2VbMF0sIHIxID0gcmFuZ2VbMV07XG4gIGlmIChkMSA8IGQwKSBkMCA9IG5vcm1hbGl6ZShkMSwgZDApLCByMCA9IGludGVycG9sYXRlKHIxLCByMCk7XG4gIGVsc2UgZDAgPSBub3JtYWxpemUoZDAsIGQxKSwgcjAgPSBpbnRlcnBvbGF0ZShyMCwgcjEpO1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gcjAoZDAoeCkpOyB9O1xufVxuXG5mdW5jdGlvbiBwb2x5bWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBqID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKSAtIDEsXG4gICAgICBkID0gbmV3IEFycmF5KGopLFxuICAgICAgciA9IG5ldyBBcnJheShqKSxcbiAgICAgIGkgPSAtMTtcblxuICAvLyBSZXZlcnNlIGRlc2NlbmRpbmcgZG9tYWlucy5cbiAgaWYgKGRvbWFpbltqXSA8IGRvbWFpblswXSkge1xuICAgIGRvbWFpbiA9IGRvbWFpbi5zbGljZSgpLnJldmVyc2UoKTtcbiAgICByYW5nZSA9IHJhbmdlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgd2hpbGUgKCsraSA8IGopIHtcbiAgICBkW2ldID0gbm9ybWFsaXplKGRvbWFpbltpXSwgZG9tYWluW2kgKyAxXSk7XG4gICAgcltpXSA9IGludGVycG9sYXRlKHJhbmdlW2ldLCByYW5nZVtpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgaSA9IGJpc2VjdChkb21haW4sIHgsIDEsIGopIC0gMTtcbiAgICByZXR1cm4gcltpXShkW2ldKHgpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFxuICAgICAgLmRvbWFpbihzb3VyY2UuZG9tYWluKCkpXG4gICAgICAucmFuZ2Uoc291cmNlLnJhbmdlKCkpXG4gICAgICAuaW50ZXJwb2xhdGUoc291cmNlLmludGVycG9sYXRlKCkpXG4gICAgICAuY2xhbXAoc291cmNlLmNsYW1wKCkpXG4gICAgICAudW5rbm93bihzb3VyY2UudW5rbm93bigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVyKCkge1xuICB2YXIgZG9tYWluID0gdW5pdCxcbiAgICAgIHJhbmdlID0gdW5pdCxcbiAgICAgIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIHVudHJhbnNmb3JtLFxuICAgICAgdW5rbm93bixcbiAgICAgIGNsYW1wID0gaWRlbnRpdHksXG4gICAgICBwaWVjZXdpc2UsXG4gICAgICBvdXRwdXQsXG4gICAgICBpbnB1dDtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKTtcbiAgICBpZiAoY2xhbXAgIT09IGlkZW50aXR5KSBjbGFtcCA9IGNsYW1wZXIoZG9tYWluWzBdLCBkb21haW5bbiAtIDFdKTtcbiAgICBwaWVjZXdpc2UgPSBuID4gMiA/IHBvbHltYXAgOiBiaW1hcDtcbiAgICBvdXRwdXQgPSBpbnB1dCA9IG51bGw7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiB4ID09IG51bGwgfHwgaXNOYU4oeCA9ICt4KSA/IHVua25vd24gOiAob3V0cHV0IHx8IChvdXRwdXQgPSBwaWVjZXdpc2UoZG9tYWluLm1hcCh0cmFuc2Zvcm0pLCByYW5nZSwgaW50ZXJwb2xhdGUpKSkodHJhbnNmb3JtKGNsYW1wKHgpKSk7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIGNsYW1wKHVudHJhbnNmb3JtKChpbnB1dCB8fCAoaW5wdXQgPSBwaWVjZXdpc2UocmFuZ2UsIGRvbWFpbi5tYXAodHJhbnNmb3JtKSwgaW50ZXJwb2xhdGVOdW1iZXIpKSkoeSkpKTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gQXJyYXkuZnJvbShfLCBudW1iZXIpLCByZXNjYWxlKCkpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBBcnJheS5mcm9tKF8pLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IEFycmF5LmZyb20oXyksIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVSb3VuZCwgcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gXyA/IHRydWUgOiBpZGVudGl0eSwgcmVzY2FsZSgpKSA6IGNsYW1wICE9PSBpZGVudGl0eTtcbiAgfTtcblxuICBzY2FsZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0ZSA9IF8sIHJlc2NhbGUoKSkgOiBpbnRlcnBvbGF0ZTtcbiAgfTtcblxuICBzY2FsZS51bmtub3duID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHVua25vd24gPSBfLCBzY2FsZSkgOiB1bmtub3duO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbih0LCB1KSB7XG4gICAgdHJhbnNmb3JtID0gdCwgdW50cmFuc2Zvcm0gPSB1O1xuICAgIHJldHVybiByZXNjYWxlKCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRpbnVvdXMoKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lcigpKGlkZW50aXR5LCBpZGVudGl0eSk7XG59XG4iLCJpbXBvcnQge3RpY2tTdGVwfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Zm9ybWF0LCBmb3JtYXRQcmVmaXgsIGZvcm1hdFNwZWNpZmllciwgcHJlY2lzaW9uRml4ZWQsIHByZWNpc2lvblByZWZpeCwgcHJlY2lzaW9uUm91bmR9IGZyb20gXCJkMy1mb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGlja0Zvcm1hdChzdGFydCwgc3RvcCwgY291bnQsIHNwZWNpZmllcikge1xuICB2YXIgc3RlcCA9IHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCksXG4gICAgICBwcmVjaXNpb247XG4gIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIgPT0gbnVsbCA/IFwiLGZcIiA6IHNwZWNpZmllcik7XG4gIHN3aXRjaCAoc3BlY2lmaWVyLnR5cGUpIHtcbiAgICBjYXNlIFwic1wiOiB7XG4gICAgICB2YXIgdmFsdWUgPSBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKTtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblByZWZpeChzdGVwLCB2YWx1ZSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICAgICAgcmV0dXJuIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2FzZSBcIlwiOlxuICAgIGNhc2UgXCJlXCI6XG4gICAgY2FzZSBcImdcIjpcbiAgICBjYXNlIFwicFwiOlxuICAgIGNhc2UgXCJyXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblJvdW5kKHN0ZXAsIE1hdGgubWF4KE1hdGguYWJzKHN0YXJ0KSwgTWF0aC5hYnMoc3RvcCkpKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiZVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiZlwiOlxuICAgIGNhc2UgXCIlXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvbkZpeGVkKHN0ZXApKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbiAtIChzcGVjaWZpZXIudHlwZSA9PT0gXCIlXCIpICogMjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KHNwZWNpZmllcik7XG59XG4iLCJpbXBvcnQge3RpY2tzLCB0aWNrSW5jcmVtZW50fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCBjb250aW51b3VzLCB7Y29weX0gZnJvbSBcIi4vY29udGludW91cy5qc1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCB0aWNrRm9ybWF0IGZyb20gXCIuL3RpY2tGb3JtYXQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcmlzaChzY2FsZSkge1xuICB2YXIgZG9tYWluID0gc2NhbGUuZG9tYWluO1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrcyhkWzBdLCBkW2QubGVuZ3RoIC0gMV0sIGNvdW50ID09IG51bGwgPyAxMCA6IGNvdW50KTtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgcmV0dXJuIHRpY2tGb3JtYXQoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCwgc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPT0gbnVsbCkgY291bnQgPSAxMDtcblxuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgdmFyIGkwID0gMDtcbiAgICB2YXIgaTEgPSBkLmxlbmd0aCAtIDE7XG4gICAgdmFyIHN0YXJ0ID0gZFtpMF07XG4gICAgdmFyIHN0b3AgPSBkW2kxXTtcbiAgICB2YXIgcHJlc3RlcDtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgbWF4SXRlciA9IDEwO1xuXG4gICAgaWYgKHN0b3AgPCBzdGFydCkge1xuICAgICAgc3RlcCA9IHN0YXJ0LCBzdGFydCA9IHN0b3AsIHN0b3AgPSBzdGVwO1xuICAgICAgc3RlcCA9IGkwLCBpMCA9IGkxLCBpMSA9IHN0ZXA7XG4gICAgfVxuICAgIFxuICAgIHdoaWxlIChtYXhJdGVyLS0gPiAwKSB7XG4gICAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgICAgaWYgKHN0ZXAgPT09IHByZXN0ZXApIHtcbiAgICAgICAgZFtpMF0gPSBzdGFydFxuICAgICAgICBkW2kxXSA9IHN0b3BcbiAgICAgICAgcmV0dXJuIGRvbWFpbihkKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPCAwKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5mbG9vcihzdG9wICogc3RlcCkgLyBzdGVwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwcmVzdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lYXIoKSB7XG4gIHZhciBzY2FsZSA9IGNvbnRpbnVvdXMoKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGxpbmVhcigpKTtcbiAgfTtcblxuICBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtKGssIHgsIHkpIHtcbiAgdGhpcy5rID0gaztcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zZm9ybSxcbiAgc2NhbGU6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gayA9PT0gMSA/IHRoaXMgOiBuZXcgVHJhbnNmb3JtKHRoaXMuayAqIGssIHRoaXMueCwgdGhpcy55KTtcbiAgfSxcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IDAgJiB5ID09PSAwID8gdGhpcyA6IG5ldyBUcmFuc2Zvcm0odGhpcy5rLCB0aGlzLnggKyB0aGlzLmsgKiB4LCB0aGlzLnkgKyB0aGlzLmsgKiB5KTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgcmV0dXJuIFtwb2ludFswXSAqIHRoaXMuayArIHRoaXMueCwgcG9pbnRbMV0gKiB0aGlzLmsgKyB0aGlzLnldO1xuICB9LFxuICBhcHBseVg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCAqIHRoaXMuayArIHRoaXMueDtcbiAgfSxcbiAgYXBwbHlZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkgKiB0aGlzLmsgKyB0aGlzLnk7XG4gIH0sXG4gIGludmVydDogZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICByZXR1cm4gWyhsb2NhdGlvblswXSAtIHRoaXMueCkgLyB0aGlzLmssIChsb2NhdGlvblsxXSAtIHRoaXMueSkgLyB0aGlzLmtdO1xuICB9LFxuICBpbnZlcnRYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuICh4IC0gdGhpcy54KSAvIHRoaXMuaztcbiAgfSxcbiAgaW52ZXJ0WTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiAoeSAtIHRoaXMueSkgLyB0aGlzLms7XG4gIH0sXG4gIHJlc2NhbGVYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHguY29weSgpLmRvbWFpbih4LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WCwgdGhpcykubWFwKHguaW52ZXJ0LCB4KSk7XG4gIH0sXG4gIHJlc2NhbGVZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkuY29weSgpLmRvbWFpbih5LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WSwgdGhpcykubWFwKHkuaW52ZXJ0LCB5KSk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnggKyBcIixcIiArIHRoaXMueSArIFwiKSBzY2FsZShcIiArIHRoaXMuayArIFwiKVwiO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0gbmV3IFRyYW5zZm9ybSgxLCAwLCAwKTtcblxudHJhbnNmb3JtLnByb3RvdHlwZSA9IFRyYW5zZm9ybS5wcm90b3R5cGU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybShub2RlKSB7XG4gIHdoaWxlICghbm9kZS5fX3pvb20pIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHJldHVybiBub2RlLl9fem9vbTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgnaW50ZXJ2YWxzQ2hhcnQubWVzc2FnZScpIH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJkLWlubGluZS1ibG9jayBtci0xMCBtbC0xMFwiPlxuICAgICAgPHNlbGVjdCBjbGFzcz1cIm9wdGlvblwiIHYtbW9kZWw9XCJtaW5WYWx1ZVwiIEBjaGFuZ2U9XCJyZWZyZXNoQ2hhcnQoKVwiPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIk1pblZhbHVlLlNlY29uZHNfMTBcIj4xMCB7eyB0KCdzZWMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiTWluVmFsdWUuTWluXzFcIj4xIHt7IHQoJ21pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJNaW5WYWx1ZS5NaW5fNVwiPjUge3sgdCgnMm1pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJNaW5WYWx1ZS5NaW5fMTBcIj4xMCB7eyB0KCdtaW5zLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvbiBkLWlubGluZS1ibG9ja1wiPnt7IHQoJ2ludGVydmFsc0NoYXJ0LmRlc2NyaXB0aW9uJykgfX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IHJlZj1cImNoYXJ0XCIgaWQ9XCJ0aW1lSW50ZXJ2YWxDaGFydEQzXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVGltZUludGVydmFsQ2hhcnQnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgU3RvcmFnZURlc2VyaWFsaXplUGFyYW0gfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IFRpbWVJbnRlcnZhbCB9IGZyb20gJy4uL2VudGl0eS90aW1lLWludGVydmFsJztcbmltcG9ydCB7IHRvZGF5TG9jYWxEYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XG5cbmVudW0gTWluVmFsdWUge1xuICBTZWNvbmRzXzEwID0gMTAsXG4gIE1pbl8xID0gNjAsXG4gIE1pbl81ID0gMzAwLFxuICBNaW5fMTAgPSA2MDAsXG59XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuY29uc3Qgc3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcblxuY29uc3QgY2hhcnQgPSByZWY8YW55PigpO1xuY29uc3QgbWluVmFsdWUgPSByZWY8bnVtYmVyPigpO1xuY29uc3QgdG9kYXlJbnRlcnZhbHMgPSByZWY8VGltZUludGVydmFsW10+KCk7XG5cbnR5cGUgRGF0YUZvckNoYXJ0ID0ge1xuICBkb21haW46IHN0cmluZztcbiAgaW50ZXJ2YWw6IHN0cmluZztcbn07XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIG1pblZhbHVlLnZhbHVlID0gTWluVmFsdWUuU2Vjb25kc18xMDtcbiAgY29uc3QgdGltZUludGVydmFsTGlzdCA9IChhd2FpdCBzdG9yYWdlLmdldERlc2VyaWFsaXplTGlzdChcbiAgICBTdG9yYWdlRGVzZXJpYWxpemVQYXJhbS5USU1FSU5URVJWQUxfTElTVCxcbiAgKSkgYXMgVGltZUludGVydmFsW107XG5cbiAgdG9kYXlJbnRlcnZhbHMudmFsdWUgPSB0aW1lSW50ZXJ2YWxMaXN0Py5maWx0ZXIoeCA9PiB4LmRheSA9PSB0b2RheUxvY2FsRGF0ZSgpKTtcbiAgcmVuZGVyQ2hhcnQoKTtcbn0pO1xuXG5mdW5jdGlvbiByZW5kZXJDaGFydCgpIHtcbiAgY29uc3QgZGF0YUZvckNoYXJ0OiBEYXRhRm9yQ2hhcnRbXSA9IFtdO1xuICB0b2RheUludGVydmFscy52YWx1ZT8uZm9yRWFjaChpbnRlcnZhbCA9PiB7XG4gICAgaW50ZXJ2YWwuaW50ZXJ2YWxzLmZvckVhY2goaW50ID0+IHtcbiAgICAgIGNvbnN0IGZyb20gPSBpbnQuc3BsaXQoJy0nKVswXTtcbiAgICAgIGNvbnN0IHRvID0gaW50LnNwbGl0KCctJylbMV07XG4gICAgICBpZiAoXG4gICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHModG8pIC0gY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhmcm9tKSA+XG4gICAgICAgIG1pblZhbHVlLnZhbHVlIVxuICAgICAgKSB7XG4gICAgICAgIGRhdGFGb3JDaGFydC5wdXNoKHsgZG9tYWluOiBpbnRlcnZhbC5kb21haW4sIGludGVydmFsOiBjb252ZXJ0SW50ZXJ2YWwoaW50KSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGRyYXdJbnRlcnZhbENoYXJ0KGRhdGFGb3JDaGFydCk7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hDaGFydCgpIHtcbiAgY2hhcnQudmFsdWUuaW5uZXJIVE1MID0gJyc7XG4gIHJlbmRlckNoYXJ0KCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRJbnRlcnZhbChpbnRlcnZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgZnVuY3Rpb24gY29udmVydChpdGVtOiBzdHJpbmdbXSkge1xuICAgIGl0ZW0gPSBpdGVtLm1hcCh4ID0+ICh4Lmxlbmd0aCA9PSAxID8gYDAke3h9YCA6IHgpKTtcbiAgICByZXR1cm4gaXRlbS5qb2luKCc6Jyk7XG4gIH1cblxuICBjb25zdCBzb3VyY2VUaW1lRnJvbSA9IGludGVydmFsLnNwbGl0KCctJylbMF0uc3BsaXQoJzonKTtcbiAgY29uc3Qgc291cmNlVGltZVRvID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVsxXS5zcGxpdCgnOicpO1xuICByZXR1cm4gYCR7Y29udmVydChzb3VyY2VUaW1lRnJvbSl9LSR7Y29udmVydChzb3VyY2VUaW1lVG8pfWA7XG59XG5cbmZ1bmN0aW9uIGRyYXdJbnRlcnZhbENoYXJ0KGRhdGE6IERhdGFGb3JDaGFydFtdKSB7XG4gIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICBjb25zdCBoRnJvbSA9IGdldEhvdXJGcm9tKGl0ZW0uaW50ZXJ2YWwpO1xuICAgIGNvbnN0IGhUbyA9IGdldEhvdXJUbyhpdGVtLmludGVydmFsKTtcbiAgICBpZiAoaEZyb20gIT0gaFRvKSB7XG4gICAgICBjb25zdCBzb3VyY2VUaW1lRnJvbSA9IGl0ZW0uaW50ZXJ2YWwuc3BsaXQoJy0nKVswXS5zcGxpdCgnOicpO1xuICAgICAgY29uc3Qgc291cmNlVGltZVRvID0gaXRlbS5pbnRlcnZhbC5zcGxpdCgnLScpWzFdLnNwbGl0KCc6Jyk7XG4gICAgICBjb25zdCB0aW1lVG8gPSBgJHtzb3VyY2VUaW1lRnJvbVswXX06NTk6NTlgO1xuICAgICAgY29uc3QgdGltZUZyb20gPSBgJHtzb3VyY2VUaW1lVG9bMF19OjAwOjAwYDtcbiAgICAgIGRhdGEucHVzaCh7IGRvbWFpbjogaXRlbS5kb21haW4sIGludGVydmFsOiBpdGVtLmludGVydmFsLnNwbGl0KCctJylbMF0gKyAnLScgKyB0aW1lVG8gfSk7XG4gICAgICBkYXRhLnB1c2goeyBkb21haW46IGl0ZW0uZG9tYWluLCBpbnRlcnZhbDogdGltZUZyb20gKyAnLScgKyBpdGVtLmludGVydmFsLnNwbGl0KCctJylbMV0gfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAyMCwgbGVmdDogMjAgfTtcbiAgY29uc3Qgd2lkdGggPSBjaGFydC52YWx1ZS5vZmZzZXRXaWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gNDAwO1xuXG4gIGNvbnN0IHRpY2tEaXN0YW5jZSA9IDQuMzg7XG5cbiAgY29uc3QgdG9vbHRpcCA9IGQzXG4gICAgLnNlbGVjdCgnI3RpbWVJbnRlcnZhbENoYXJ0RDMnKVxuICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJylcbiAgICAuc3R5bGUoJ2NvbG9yJywgJ2JsYWNrJylcbiAgICAuc3R5bGUoJ2JvcmRlcicsICcxcHggc29saWQgZ3JleScpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgIC5zdHlsZSgnYm9yZGVyLXdpZHRoJywgJzFweCcpXG4gICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywgJzNweCcpXG4gICAgLnN0eWxlKCdwYWRkaW5nJywgJzVweCcpO1xuXG4gIGNvbnN0IG1vdXNlb3ZlciA9IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICB0b29sdGlwLnN0eWxlKCdvcGFjaXR5JywgMSkuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICBkMy5zZWxlY3QoJy50b29sdGlwJylcbiAgICAgIC5zdHlsZSgnbGVmdCcsIGUubGF5ZXJYICsgMTUgKyAncHgnKVxuICAgICAgLnN0eWxlKCd0b3AnLCBlLmxheWVyWSArIDE1ICsgJ3B4Jyk7XG4gIH07XG4gIGNvbnN0IG1vdXNlbW92ZSA9IGZ1bmN0aW9uIChldmVudDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICB0b29sdGlwLmh0bWwoYDxiPiR7ZGF0YS5kb21haW59PC9iPjxicj4ke2RhdGEuaW50ZXJ2YWx9YCk7XG4gIH07XG4gIGNvbnN0IG1vdXNlbGVhdmUgPSBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgdG9vbHRpcC5zdHlsZSgnb3BhY2l0eScsIDApLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfTtcblxuICAvL2NyZWF0ZSB0aGUgc3ZnXG4gIGNvbnN0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdCgnI3RpbWVJbnRlcnZhbENoYXJ0RDMnKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcblxuICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoW2hlaWdodCwgMF0pLmRvbWFpbihbMCwgNjBdKTtcbiAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCh5KTtcblxuICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoWzAsIHdpZHRoXSkuZG9tYWluKFswLCAyNF0pO1xuICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oeCkudGlja3MoMjQpO1xuXG4gIHN2Z1xuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCdjbGFzcycsICdncmlkJylcbiAgICAuc3R5bGUoJ2NvbG9yJywgJyNlNWU1ZTUnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7aGVpZ2h0fSlgKVxuICAgIC5jYWxsKHhBeGlzLnRpY2tTaXplKC1oZWlnaHQpKTtcblxuICBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZ3JpZCcpLnN0eWxlKCdjb2xvcicsICcjZTVlNWU1JykuY2FsbCh5QXhpcy50aWNrU2l6ZSgtd2lkdGgpKTtcbiAgc3ZnLnNlbGVjdEFsbCgndGV4dCcpLnN0eWxlKCdmaWxsJywgJ2JsYWNrJyk7XG5cbiAgLy9kcmF3IHRoZSBiYXJzLCBvZmZzZXQgeSBhbmQgYmFyIGhlaWdodCBiYXNlZCBvbiBkYXRhXG4gIHN2Z1xuICAgIC5zZWxlY3RBbGwoJy5iYXInKVxuICAgIC5kYXRhKGRhdGEpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnIzU2NjhlMicpXG4gICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMScpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2JhcicpXG4gICAgLmF0dHIoJ3gnLCAoZGF0YTogYW55KSA9PiB4KGdldEhvdXJGcm9tKGRhdGEuaW50ZXJ2YWwpKSArIDIpXG4gICAgLmF0dHIoJ3dpZHRoJywgY2hhcnQudmFsdWUub2Zmc2V0V2lkdGggLyAyNCAtIDQpXG4gICAgLmF0dHIoJ3knLCAoZGF0YTogYW55KSA9PiB5KGdldE1pbnV0ZXNUbyhkYXRhLmludGVydmFsKSkgLSAxKVxuICAgIC5hdHRyKCdoZWlnaHQnLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBnZXRNaW51dGVzVG8oZGF0YS5pbnRlcnZhbCkgLSBnZXRNaW51dGVzRnJvbShkYXRhLmludGVydmFsKTtcbiAgICAgIGlmIChvZmZzZXQgPT0gMCkge1xuICAgICAgICBjb25zdCBvZmZzZXRTZWNvbmRzID0gZ2V0U2Vjb25kc1RvKGRhdGEuaW50ZXJ2YWwpIC0gZ2V0U2Vjb25kc0Zyb20oZGF0YS5pbnRlcnZhbCk7XG4gICAgICAgIGlmIChvZmZzZXRTZWNvbmRzIDw9IDMpIHJldHVybiAwO1xuICAgICAgICBlbHNlIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHJldHVybiBvZmZzZXQgKiB0aWNrRGlzdGFuY2U7XG4gICAgfSlcbiAgICAub24oJ21vdXNlb3ZlcicsIG1vdXNlb3ZlcilcbiAgICAub24oJ21vdXNlbW92ZScsIG1vdXNlbW92ZSlcbiAgICAub24oJ21vdXNlbGVhdmUnLCBtb3VzZWxlYXZlKTtcblxuICBmdW5jdGlvbiBnZXRIb3VyRnJvbShpbnRlcnZhbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCB0aW1lID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVswXTtcbiAgICByZXR1cm4gTnVtYmVyKHRpbWUuc3BsaXQoJzonKVswXSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIb3VyVG8oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzFdO1xuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzBdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1pbnV0ZXNGcm9tKGludGVydmFsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHZhciB0aW1lID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVswXTtcbiAgICByZXR1cm4gTnVtYmVyKHRpbWUuc3BsaXQoJzonKVsxXSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNaW51dGVzVG8oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzFdO1xuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlY29uZHNGcm9tKGludGVydmFsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHZhciB0aW1lID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVswXTtcbiAgICByZXR1cm4gTnVtYmVyKHRpbWUuc3BsaXQoJzonKVsyXSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWNvbmRzVG8oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzFdO1xuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzJdKTtcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHJnYigxOTcsIDE5NywgMTk3KSBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5ncmlkIGxpbmUge1xuICBzdHJva2U6IGdyYXk7XG4gIHN0cm9rZS1vcGFjaXR5OiAwLjI7XG4gIGNvbG9yOiBibGFjaztcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCd0aW1lQ2hhcnREZXNjcmlwdGlvbi5tZXNzYWdlJykgfX08L3A+XG4gIDxCYXIgOmRhdGE9XCJkYXRhXCIgOm9wdGlvbnM9XCJvcHRpb25zXCIgdi1pZj1cImlzTG9hZGVkXCIgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdIb3VybHlDaGFydCcsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBCYXIgfSBmcm9tICd2dWUtY2hhcnRqcyc7XG5pbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kLFxuICBCYXJFbGVtZW50LFxuICBMaW5lYXJTY2FsZSxcbiAgQ2F0ZWdvcnlTY2FsZSxcbn0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgU3RvcmFnZURlc2VyaWFsaXplUGFyYW0gfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IFRpbWVJbnRlcnZhbCB9IGZyb20gJy4uL2VudGl0eS90aW1lLWludGVydmFsJztcbmltcG9ydCB7IHRvZGF5TG9jYWxEYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyBjb252ZXJ0SG91cnNUb1RpbWUsIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5cbnR5cGUgRGF0YUZvckNoYXJ0ID0ge1xuICBzdW1tYXJ5OiBudW1iZXI7XG4gIGhvdXI6IG51bWJlcjtcbiAgZG9tYWluczogRG9tYWluc0ludGVydmFsW107XG59O1xuXG50eXBlIERvbWFpbnNJbnRlcnZhbCA9IHtcbiAgaG91cjogbnVtYmVyO1xuICBzdW1tYXJ5OiBudW1iZXI7XG4gIGRvbWFpbjogc3RyaW5nO1xufTtcblxuY29uc3Qgc3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcblxuQ2hhcnRKUy5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCk7XG5cbmNvbnN0IG9wdGlvbnMgPSByZWY8YW55PigpO1xuY29uc3QgZGF0YSA9IHJlZjxhbnk+KCk7XG5jb25zdCBpc0xvYWRlZCA9IHJlZjxib29sZWFuPigpO1xuXG5jb25zdCBvYmplY3RzOiBEYXRhRm9yQ2hhcnRbXSA9IFtdO1xuY29uc3QgaG91cnM6IG51bWJlcltdID0gW107XG5cbmlzTG9hZGVkLnZhbHVlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNvbnZlcnRUaW1JbnRlcnZhbFRvT2JqZWN0KFxuICB0aW1lSW50ZXJ2YWw6IHN0cmluZyxcbiAgZG9tYWluOiBzdHJpbmcsXG4pOiBEb21haW5zSW50ZXJ2YWxbXSB8IG51bGwge1xuICBjb25zdCBhcnJheSA9IHRpbWVJbnRlcnZhbC5zcGxpdCgnLScpO1xuICBjb25zdCB0aW1lMSA9IGFycmF5WzBdLnNwbGl0KCc6Jyk7XG4gIGNvbnN0IHRpbWUyID0gYXJyYXlbMV0uc3BsaXQoJzonKTtcbiAgaWYgKHRpbWUxWzBdID09IHRpbWUyWzBdKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaG91cjogTnVtYmVyKHRpbWUxWzBdKSxcbiAgICAgICAgc3VtbWFyeTpcbiAgICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKGFycmF5WzFdKSAtXG4gICAgICAgICAgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhhcnJheVswXSksXG4gICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgfSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGNvbnN0IGZpcnN0UGFydDEgPSBhcnJheVswXTtcbiAgICBjb25zdCBmaXJzdFBhcnQyID0gYCR7dGltZTFbMF19OjU5OjU5YDtcbiAgICBjb25zdCBob3VyRm9yRmlyc3RQYXJ0ID0gZmlyc3RQYXJ0MS5zcGxpdCgnOicpO1xuICAgIGFyci5wdXNoKHtcbiAgICAgIGhvdXI6IE51bWJlcihob3VyRm9yRmlyc3RQYXJ0WzBdKSxcbiAgICAgIHN1bW1hcnk6XG4gICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMoZmlyc3RQYXJ0MikgLVxuICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKGZpcnN0UGFydDEpLFxuICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgfSk7XG4gICAgY29uc3Qgc2Vjb25kUGFydDEgPSBgJHt0aW1lMlswXX06MDA6MDBgO1xuICAgIGNvbnN0IHNlY29uZFBhcnQyID0gYCR7dGltZTJbMF19OiR7dGltZTJbMV19OiR7dGltZTJbMl19YDtcbiAgICBjb25zdCBob3VyRm9yc2Vjb25kUGFydCA9IHNlY29uZFBhcnQxLnNwbGl0KCc6Jyk7XG4gICAgYXJyLnB1c2goe1xuICAgICAgaG91cjogTnVtYmVyKGhvdXJGb3JzZWNvbmRQYXJ0WzBdKSxcbiAgICAgIHN1bW1hcnk6XG4gICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMoc2Vjb25kUGFydDIpIC1cbiAgICAgICAgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhzZWNvbmRQYXJ0MSksXG4gICAgICBkb21haW46IGRvbWFpbixcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxEYXRhKHRpbWVJbnRlcnZhbExpc3Q6IFRpbWVJbnRlcnZhbFtdKSB7XG4gIGNvbnN0IGl0ZW1zID0gdGltZUludGVydmFsTGlzdD8uZmlsdGVyKHggPT4geC5kYXkgPT0gdG9kYXlMb2NhbERhdGUoKSk7XG4gIGNvbnN0IGRvbWFpbnMgPSBpdGVtcy5tYXAoeCA9PiB4LmRvbWFpbik7XG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgY29uc3QgaW50ZXJ2YWxzT2JqOiBEb21haW5zSW50ZXJ2YWxbXSA9IFtdO1xuICBkb21haW5zLmZvckVhY2goZG9tYWluID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbHMgPSBpdGVtcy5maWx0ZXIoeCA9PiB4LmRvbWFpbiA9PSBkb21haW4pO1xuICAgIGludGVydmFscy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgIGNvbnN0IGkgPSBhcnJheS5pbnRlcnZhbHM7XG4gICAgICBpLmZvckVhY2godGltZSA9PiB7XG4gICAgICAgIGNvbnN0IG9ianMgPSBjb252ZXJ0VGltSW50ZXJ2YWxUb09iamVjdCh0aW1lLCBkb21haW4pO1xuICAgICAgICBpZiAob2JqcyAhPSBudWxsICYmIG9ianMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG9ianMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhpc3REb21haW4gPSBpbnRlcnZhbHNPYmouZmluZCh4ID0+IHguZG9tYWluID09IGRvbWFpbiAmJiB4LmhvdXIgPT0gb2JqLmhvdXIpO1xuICAgICAgICAgICAgaWYgKGV4aXN0RG9tYWluICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGlzdERvbWFpbi5zdW1tYXJ5ICs9IG9iai5zdW1tYXJ5O1xuICAgICAgICAgICAgfSBlbHNlIGludGVydmFsc09iai5wdXNoKG9iaik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCB0ZW1wQXJyYXk6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIGNvbnN0IG9iaiA9IG9iamVjdHMuZmluZCh4ID0+IHguaG91ciA9PSBpbmRleCk7XG4gICAgY29uc3QgaW50ZXJ2YWxPYmogPSBpbnRlcnZhbHNPYmouZmlsdGVyKHggPT4geC5ob3VyID09IGluZGV4KTtcbiAgICBjb25zdCBzdW1tYXJ5ID1cbiAgICAgIGludGVydmFsT2JqLmxlbmd0aCA9PSAwID8gMCA6IGludGVydmFsT2JqLm1hcCh4ID0+IHguc3VtbWFyeSkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gICAgaWYgKG9iaiA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgc3VtbWFyeTogc3VtbWFyeSxcbiAgICAgICAgaG91cjogaW5kZXgsXG4gICAgICAgIGRvbWFpbnM6IGludGVydmFsT2JqLFxuICAgICAgfTtcbiAgICAgIG9iamVjdHMucHVzaChuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouc3VtbWFyeSArPSBzdW1tYXJ5O1xuICAgICAgaW50ZXJ2YWxPYmouZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgb2JqLmRvbWFpbnMucHVzaChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRlbXBBcnJheS5wdXNoKDApO1xuICB9XG5cbiAgb2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgY29uc3QgZW1wdHlBcnJheTogbnVtYmVyW10gPSBPYmplY3QuYXNzaWduKFtdLCB0ZW1wQXJyYXkpO1xuICAgIGVtcHR5QXJyYXlbb2JqLmhvdXJdID0gTnVtYmVyKG9iai5zdW1tYXJ5IC8gNjApO1xuICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogWycjNTY2OGUyJ10sXG4gICAgICBkYXRhOiBlbXB0eUFycmF5LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiBidWlsZENoYXJ0KCkge1xuICBjb25zdCB0aW1lSW50ZXJ2YWxMaXN0ID0gKGF3YWl0IHN0b3JhZ2UuZ2V0RGVzZXJpYWxpemVMaXN0KFxuICAgIFN0b3JhZ2VEZXNlcmlhbGl6ZVBhcmFtLlRJTUVJTlRFUlZBTF9MSVNULFxuICApKSBhcyBUaW1lSW50ZXJ2YWxbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSAyMzsgaW5kZXgrKykge1xuICAgIGhvdXJzLnB1c2goaW5kZXgpO1xuICB9XG4gIGxldCBtaW51dGVzOiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgNjA7IGluZGV4KyspIHtcbiAgICBtaW51dGVzLnB1c2goaW5kZXgpO1xuICB9XG5cbiAgY29uc3QgZGF0YUZvckNoYXJ0ID0gZmlsbERhdGEodGltZUludGVydmFsTGlzdCk7XG4gIGRhdGEudmFsdWUgPSB7XG4gICAgbGFiZWxzOiBob3VycyxcbiAgICBkYXRhc2V0czogZGF0YUZvckNoYXJ0LFxuICB9O1xuXG4gIG9wdGlvbnMudmFsdWUgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgcG9zaXRpb246ICdub25lJyxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbiAoY29udGV4dDogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Y29udGV4dC5sYWJlbH06MDAtJHtOdW1iZXIoY29udGV4dC5sYWJlbCkgKyAxfTowMCAke2NvbnZlcnRIb3Vyc1RvVGltZShcbiAgICAgICAgICAgICAgY29udGV4dC5yYXcsXG4gICAgICAgICAgICApfWA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzY2FsZXM6IHtcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDYwLFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIHN0ZXBTaXplOiA1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHg6IHtcbiAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDIzLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICBpc0xvYWRlZC52YWx1ZSA9IHRydWU7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiBhd2FpdCBidWlsZENoYXJ0KCkpO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwidGl0bGVcIj4ge3sgdCgnZGFzaGJvYXJkLm1lc3NhZ2UnKSB9fSA8L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNoYXJ0IGNoYXJ0QnlIb3Vyc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtdC0xMCBtYi0yMFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICA6Y2xhc3M9XCJbJ2NoYXJ0LWJ0bicsIGNoYXJ0ID09IFR5cGVPZkNoYXJ0Lkhvcmx5ID8gJ2FjdGl2ZScgOiAnJ11cIlxuICAgICAgICBAY2xpY2s9XCJvcGVuQ2hhcnQoVHlwZU9mQ2hhcnQuSG9ybHkpXCJcbiAgICAgID5cbiAgICAgICAgPGltZyBjbGFzcz1cIm1sLTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvYnktaG91cnMuc3ZnXCIgaGVpZ2h0PVwiMjJcIiAvPlxuICAgICAgICB7eyB0KCdieUhvdXJzLm1lc3NhZ2UnKSB9fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIDpjbGFzcz1cIlsnbWwtMTAnLCAnY2hhcnQtYnRuJywgY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSW50ZXJ2YWwgPyAnYWN0aXZlJyA6ICcnXVwiXG4gICAgICAgIEBjbGljaz1cIm9wZW5DaGFydChUeXBlT2ZDaGFydC5JbnRlcnZhbClcIlxuICAgICAgPlxuICAgICAgICA8aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9ieS1pbnRlcnZhbHMuc3ZnXCIgaGVpZ2h0PVwiMjJcIiAvPlxuICAgICAgICB7eyB0KCdpbnRlcnZhbHMubWVzc2FnZScpIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8SG91cmx5Q2hhcnQgdi1pZj1cImNoYXJ0ID09IFR5cGVPZkNoYXJ0Lkhvcmx5XCIgLz5cbiAgICA8VGltZUludGVydmFsQ2hhcnQgdi1pZj1cImNoYXJ0ID09IFR5cGVPZkNoYXJ0LkludGVydmFsXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0YWItaXRlbXNcIj5cbiAgICA8VGFiTGlzdCA6dHlwZT1cIlR5cGVPZkxpc3QuRGFzaGJvYXJkXCIgOnNob3dBbGxTdGF0cz1cImZhbHNlXCIgdi1pZj1cImNoYXJ0ID09IFR5cGVPZkNoYXJ0Lkhvcmx5XCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGFzaGJvYXJkJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgVGltZUludGVydmFsQ2hhcnQgZnJvbSAnLi9UaW1lSW50ZXJ2YWxDaGFydC52dWUnO1xuaW1wb3J0IEhvdXJseUNoYXJ0IGZyb20gJy4vSG91cmx5Q2hhcnQudnVlJztcbmltcG9ydCBUYWJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVGFiTGlzdC52dWUnO1xuaW1wb3J0IHsgVHlwZU9mTGlzdCB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5jb25zdCBjaGFydCA9IHJlZjxUeXBlT2ZDaGFydD4oKTtcblxuZW51bSBUeXBlT2ZDaGFydCB7XG4gIEhvcmx5LFxuICBJbnRlcnZhbCxcbn1cblxub25Nb3VudGVkKCgpID0+IHtcbiAgY2hhcnQudmFsdWUgPSBUeXBlT2ZDaGFydC5Ib3JseTtcbn0pO1xuXG5mdW5jdGlvbiBvcGVuQ2hhcnQodHlwZTogVHlwZU9mQ2hhcnQpIHtcbiAgY2hhcnQudmFsdWUgPSB0eXBlO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uY2hhcnQge1xuICBtYXJnaW46IDIwcHggMDtcbiAgd2lkdGg6IDgwJTtcbn1cbi50YWItaXRlbXMge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbi5jaGFydEJ5SG91cnMge1xuICBoZWlnaHQ6IDM5MHB4O1xufVxuLmNoYXJ0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uY2hhcnQtYnRuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiZmYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICA8RGFzaGJvYWQgdi1pZj1cInR5cGUgPT0gU2V0dGluZ3NUYWIuRGFzaGJvYXJkXCIgLz5cbiAgICA8V2Vic2l0ZVN0YXRzIHYtaWY9XCJ0eXBlID09IFNldHRpbmdzVGFiLldlYnNpdGVTdGF0c1wiIDpkb21haW49XCJkb21haW4hXCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGFzaGJvYWRDb250YWluZXInLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgU2V0dGluZ3NUYWIgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgV2Vic2l0ZVN0YXRzIGZyb20gJy4vV2Vic2l0ZVN0YXRzLnZ1ZSc7XG5pbXBvcnQgRGFzaGJvYWQgZnJvbSAnLi9EYXNoYm9hZC52dWUnO1xuXG5kZWZpbmVQcm9wczx7XG4gIHR5cGU6IFNldHRpbmdzVGFiO1xuICBkb21haW46IHN0cmluZyB8IHVuZGVmaW5lZDtcbn0+KCk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5tYWluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPG5vdGlmaWNhdGlvbnMgcG9zaXRpb249XCJib3R0b20gcmlnaHRcIiAvPlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFic1wiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYmxvY2tcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJkLWlubGluZS1ibG9jayBsb2dvXCIgaGVpZ2h0PVwiMzBcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvNDh4NDgucG5nXCIgLz5cbiAgICAgIDxwIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgdGl0bGVcIj5XZWIgQWN0aXZpdHkgVGltZSBUcmFja2VyPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWIgbXQtMjBcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBpZD1cInRpbWVJbnRlcnZhbENoYXJ0LXRhYlwiXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuRGFzaGJvYXJkIHx8IHNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLldlYnNpdGVTdGF0c1wiXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLkRhc2hib2FyZClcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cInRpbWVJbnRlcnZhbENoYXJ0LXRhYlwiXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLWRhc2hib2FyZC5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcbiAgICAgICAgICB0KCdkYXNoYm9hcmQubWVzc2FnZScpXG4gICAgICAgIH19PC9sYWJlbFxuICAgICAgPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxuICAgICAgICA8RGFzaGJvYWRDb250YWluZXJcbiAgICAgICAgICB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuRGFzaGJvYXJkIHx8IHNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLldlYnNpdGVTdGF0c1wiXG4gICAgICAgICAgOnR5cGU9XCJzZWxlY3RlZFRhYlwiXG4gICAgICAgICAgOmRvbWFpbj1cInNlbGVjdGVkV2Vic2l0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBpZD1cIndoaXRlLWxpc3QtdGFiXCJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5XaGl0ZUxpc3RcIlxuICAgICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihTZXR0aW5nc1RhYi5XaGl0ZUxpc3QpXCJcbiAgICAgIC8+XG4gICAgICA8bGFiZWwgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJ3aGl0ZS1saXN0LXRhYlwiXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLXdoaXRlbGlzdC5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcbiAgICAgICAgICB0KCd3aGl0ZUxpc3RTZXR0aW5ncy5tZXNzYWdlJylcbiAgICAgICAgfX08L2xhYmVsXG4gICAgICA+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgPFdoaXRlTGlzdCB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuV2hpdGVMaXN0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBpZD1cImxpbWl0cy10YWJcIlxuICAgICAgICBuYW1lPVwic2V0dGluZ3MtZ3JvdXBcIlxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkxpbWl0c1wiXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLkxpbWl0cylcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cImxpbWl0cy10YWJcIlxuICAgICAgICA+PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcy1saW1pdHMuc3ZnXCIgaGVpZ2h0PVwiMzBcIiAvPnt7XG4gICAgICAgICAgdCgnbGltaXRzU2V0dGluZ3MubWVzc2FnZScpXG4gICAgICAgIH19PC9sYWJlbFxuICAgICAgPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgIDxMaW1pdHMgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkxpbWl0c1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIGlkPVwibm90aWZpY2F0aW9uLXRhYlwiXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuTm90aWZpY2F0aW9uc1wiXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLk5vdGlmaWNhdGlvbnMpXCJcbiAgICAgIC8+XG4gICAgICA8bGFiZWwgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJub3RpZmljYXRpb24tdGFiXCJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3Mtbm90aWZpY2F0aW9ucy5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcbiAgICAgICAgICB0KCdub3RpZmljYXRpb25zU2V0dGluZ3MubWVzc2FnZScpXG4gICAgICAgIH19PC9sYWJlbFxuICAgICAgPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgIDxEYWlseU5vdGlmaWNhdGlvbnMgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLk5vdGlmaWNhdGlvbnNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIGlkPVwicG9tb2Rvcm8tdGFiXCJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5Qb21vZG9yb1wiXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLlBvbW9kb3JvKVwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIG5hbWU9XCJ0YWJOYW1lXCIgZm9yPVwicG9tb2Rvcm8tdGFiXCJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3BvbW9kb3JvLnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xuICAgICAgICAgIHQoJ3BvbW9kb3JvTW9kZS5tZXNzYWdlJylcbiAgICAgICAgfX08L2xhYmVsXG4gICAgICA+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgPFBvbW9kb3JvIHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5Qb21vZG9yb1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFiXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgaWQ9XCJnZW5lcmFsLXRhYlwiXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuR2VuZXJhbFNldHRpbmdzXCJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuR2VuZXJhbFNldHRpbmdzKVwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIG5hbWU9XCJ0YWJOYW1lXCIgZm9yPVwiZ2VuZXJhbC10YWJcIlxuICAgICAgICA+PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcy1zZXR0aW5ncy5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcbiAgICAgICAgICB0KCdnZW5lcmFsU2V0dGluZ3MubWVzc2FnZScpXG4gICAgICAgIH19PC9sYWJlbFxuICAgICAgPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgIDxHZW5lcmFsU2V0dGluZ3Mgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkdlbmVyYWxTZXR0aW5nc1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIGlkPVwiYWJvdXQtdGFiXCJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5BYm91dFwiXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLkFib3V0KVwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiYWJvdXRcIiBuYW1lPVwidGFiTmFtZVwiIGZvcj1cImFib3V0LXRhYlwiXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLWFib3V0LnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xuICAgICAgICAgIHQoJ2Fib3V0U2V0dGluZ3MubWVzc2FnZScpXG4gICAgICAgIH19PC9sYWJlbFxuICAgICAgPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgIDxBYm91dCB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuQWJvdXRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIC0tPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCBHZW5lcmFsU2V0dGluZ3MgZnJvbSAnLi4vY29tcG9uZW50cy9HZW5lcmFsU2V0dGluZ3MudnVlJztcbmltcG9ydCBXaGl0ZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9XaGl0ZUxpc3QudnVlJztcbmltcG9ydCBMaW1pdHMgZnJvbSAnLi4vY29tcG9uZW50cy9MaW1pdHMudnVlJztcbmltcG9ydCBEYWlseU5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZSc7XG5pbXBvcnQgUG9tb2Rvcm8gZnJvbSAnLi4vY29tcG9uZW50cy9Qb21vZG9yby52dWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQudnVlJztcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IERhc2hib2FkQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRGFzaGJvYWRDb250YWluZXIudnVlJztcbmltcG9ydCB7IHVzZUV4dGVuc2lvblBhZ2UgfSBmcm9tICcuLi9jb21wb3NpdGlvbnMvdXNlRXh0ZW5zaW9uUGFnZSc7XG5pbXBvcnQgeyBnZXRFbnVtVmFsdWVUYWIgfSBmcm9tICcuLi91dGlscy9leHRlbnNpb24tdGFicyc7XG5pbXBvcnQgeyBhcHBseURhcmtNb2RlIH0gZnJvbSAnLi4vdXRpbHMvZGFyay1tb2RlJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMsIERBUktfTU9ERV9ERUZBVUxUIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuY29uc3QgZXh0ZW5zaW9uUGFnZSA9IHVzZUV4dGVuc2lvblBhZ2UoKTtcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcblxuY29uc3Qgc2VsZWN0ZWRUYWIgPSByZWY8U2V0dGluZ3NUYWI+KCk7XG5jb25zdCBjdXJyZW50VXJsID0gcmVmKG5ldyBVUkwobG9jYXRpb24uaHJlZikpO1xuY29uc3Qgc2VsZWN0ZWRXZWJzaXRlID0gcmVmPHN0cmluZz4oKTtcbmNvbnN0IGRhcmtNb2RlID0gcmVmPGJvb2xlYW4+KCk7XG5cbndhdGNoKGN1cnJlbnRVcmwsICgpID0+IHtcbiAgZ2V0Q3VycmVudFRhYigpO1xufSk7XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGRhcmtNb2RlLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuREFSS19NT0RFLCBEQVJLX01PREVfREVGQVVMVCk7XG4gIGFwcGx5RGFya01vZGUoZGFya01vZGUudmFsdWUhKTtcbiAgZ2V0Q3VycmVudFRhYigpO1xufSk7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRUYWIoKSB7XG4gIGNvbnN0IHRhYk5hbWUgPSBjdXJyZW50VXJsLnZhbHVlLnNlYXJjaFBhcmFtcy5nZXQoJ3RhYicpO1xuICBpZiAodGFiTmFtZSAhPSBudWxsICYmIHRhYk5hbWUgIT0gJycpIHtcbiAgICBzZWxlY3RlZFRhYi52YWx1ZSA9IGdldEVudW1WYWx1ZVRhYih0YWJOYW1lKTtcbiAgICBjb25zdCBkb21haW4gPSBjdXJyZW50VXJsLnZhbHVlLnNlYXJjaFBhcmFtcy5nZXQoJ3dlYnNpdGUnKTtcbiAgICBpZiAoc2VsZWN0ZWRUYWIudmFsdWUgPT0gU2V0dGluZ3NUYWIuV2Vic2l0ZVN0YXRzKSB7XG4gICAgICBpZiAoZG9tYWluICE9IG51bGwgJiYgZG9tYWluICE9ICcnKSBzZWxlY3RlZFdlYnNpdGUudmFsdWUgPSBkb21haW47XG4gICAgICBlbHNlIHNlbGVjdGVkVGFiLnZhbHVlID0gU2V0dGluZ3NUYWIuRGFzaGJvYXJkO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluICE9IG51bGwgJiYgZG9tYWluICE9ICcnKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgICAgIGxvY2F0aW9uLmhyZWYsXG4gICAgICAgIGRvY3VtZW50LnRpdGxlLFxuICAgICAgICBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoYCZ3ZWJzaXRlPSR7ZG9tYWlufWAsICcnKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFRhYih2YWx1ZTogU2V0dGluZ3NUYWIpIHtcbiAgc2VsZWN0ZWRUYWIudmFsdWUgPSB2YWx1ZTtcbiAgZXh0ZW5zaW9uUGFnZS51cGRhdGVUYWIodmFsdWUpO1xuICBjdXJyZW50VXJsLnZhbHVlID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1haW4ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59XG4uaGVhZGVyLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItYmxvY2sgLnRpdGxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaGVhZGVyLWJsb2NrIC5sb2dvIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxNXB4O1xufVxuLnRhYi1zZXBhcmF0b3Ige1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFib3V0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vcGFnZXMvRGFzaGJvYXJkLnZ1ZSc7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgVnVlRGF0ZVBpY2tlciBmcm9tICdAdnVlcGljL3Z1ZS1kYXRlcGlja2VyJztcbmltcG9ydCAnQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlci9kaXN0L21haW4uY3NzJztcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgaTE4biBmcm9tICcuL3BsdWdpbnMvaTE4bic7XG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChTZXR0aW5ncyk7XG5hcHAudXNlKE5vdGlmaWNhdGlvbnMpO1xuYXBwLnVzZShpMThuKTtcbmFwcC5jb21wb25lbnQoJ1Z1ZURhdGVQaWNrZXInLCBWdWVEYXRlUGlja2VyKTtcbmFwcC5tb3VudCgnYm9keScpO1xuIl0sIm5hbWVzIjpbInkiLCJhIiwiZyIsIngiLCIkIiwiVCIsInAiLCJiIiwiayIsIl8iLCJCIiwiRCIsIk4iLCJIIiwiX19kZWZhdWx0X18iLCJ1c2VOb3RpZmljYXRpb24iLCJ0aW1lIiwiYXNjZW5kaW5nIiwiZiIsImQiLCJ6ZXJvIiwibGVmdCIsInJpZ2h0IiwiY2VudGVyIiwibnVtYmVyIiwic3RhcnQiLCJ0aWNrcyIsInRpY2tGb3JtYXQiLCJheGlzIiwiZm9ybWF0IiwiaWRlbnRpdHkiLCJzZWxlY3Rpb24iLCJwYXJzZVR5cGVuYW1lcyIsImdldCIsInNldCIsImNvcHkiLCJkb2N1bWVudCIsInNlbGVjdG9yIiwic2VsZWN0IiwibSIsImoiLCJTZWxlY3Rpb24iLCJkYXR1bSIsImNvbnN0YW50IiwiYXR0clJlbW92ZSIsImF0dHJSZW1vdmVOUyIsImF0dHJDb25zdGFudCIsImF0dHJDb25zdGFudE5TIiwiYXR0ckZ1bmN0aW9uIiwidiIsImF0dHJGdW5jdGlvbk5TIiwic3R5bGVSZW1vdmUiLCJzdHlsZUNvbnN0YW50Iiwic3R5bGVGdW5jdGlvbiIsInRleHRDb25zdGFudCIsInRleHRGdW5jdGlvbiIsImNyZWF0ZSIsIndpbmRvdyIsImgiLCJsaW5lYXIiLCJjb2xvciIsInJnYiIsImNvbG9yUmdiIiwidmFsdWUiLCJxIiwiaSIsInN0cmluZyIsInRpbWVvdXQiLCJub3ciLCJpZCIsInNjaGVkdWxlIiwiZW1wdHkiLCJpbnRlcnBvbGF0ZSIsImludGVycG9sYXRlVHJhbnNmb3JtIiwiY2hpbGRyZW4iLCJpbmhlcml0Iiwic3R5bGUiLCJyZW1vdmUiLCJlYXNlQ3ViaWNJbk91dCIsImV4cG9uZW50IiwibG9jYWxlIiwiZm9ybWF0UHJlZml4IiwiaW50ZXJwb2xhdGVWYWx1ZSIsImxvY2F0aW9uIiwiTWluVmFsdWUiLCJpbnRlcnZhbCIsImQzLnNlbGVjdCIsImRhdGEiLCJkMy5zY2FsZUxpbmVhciIsImQzLmF4aXNMZWZ0IiwiZDMuYXhpc0JvdHRvbSIsIkNoYXJ0SlMiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJhcnJheSIsIlR5cGVPZkNoYXJ0IiwiTm90aWZpY2F0aW9ucyIsIlZ1ZURhdGVQaWNrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BQWUsZUFBQTtBQ0FmLE1BQWUsZUFBQTtBQ0FmLE1BQWUsZUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0NmLFNBQVMsRUFBRSxHQUFHO0FBQ1osU0FBTyxFQUFFLEtBQUssSUFBSSxLQUFxQixvQkFBSSxJQUFHLEdBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNuRSxRQUFJLElBQUksRUFBRSxJQUFJLENBQUM7QUFDZixRQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNoQyxHQUFLLEtBQUssU0FBUyxHQUFHLEdBQUc7QUFDckIsUUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQ2YsVUFBTSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUUsQ0FBQTtBQUFBLEVBQzNELEdBQUssTUFBTSxTQUFTLEdBQUcsR0FBRztBQUN0QixRQUFJLElBQUksRUFBRSxJQUFJLENBQUM7QUFDZixTQUFLLEVBQUUsTUFBTyxFQUFDLElBQUksU0FBUyxHQUFHO0FBQzdCLFFBQUUsQ0FBQztBQUFBLElBQ0osQ0FBQSxJQUFJLElBQUksRUFBRSxJQUFJLEdBQUcsTUFBTSxFQUFFLE1BQUssRUFBRyxJQUFJLFNBQVMsR0FBRztBQUNoRCxRQUFFLEdBQUcsQ0FBQztBQUFBLElBQ1osQ0FBSztBQUFBLEVBQ0w7QUFDQTtBQUNBLE1BQU0sSUFBSSxFQUFDLEdBQUksSUFBb0Isb0JBQUksSUFBRyxHQUFJLElBQUk7QUFBQSxFQUNoRCxHQUFHLENBQUMsUUFBUSxVQUFVLE9BQU87QUFBQSxFQUM3QixHQUFHLENBQUMsT0FBTyxRQUFRO0FBQ3JCLEdBQUcsS0FBSyxDQUFDLE1BQU0sTUFB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Q2Y7SUFBQSxDQUNmO0FBRUQsYUFBUyxnQkFBZ0I7QUFDdkIsWUFBTSxVQUFVLFdBQVcsTUFBTSxhQUFhLElBQUksS0FBSztBQUNuRCxVQUFBLFdBQVcsUUFBUSxXQUFXLElBQUk7QUFDeEIsb0JBQUEsUUFBUSxnQkFBZ0IsT0FBTztBQUMzQyxjQUFNLFNBQVMsV0FBVyxNQUFNLGFBQWEsSUFBSSxTQUFTO0FBQ3RELFlBQUEsWUFBWSxTQUFTLFlBQVksY0FBYztBQUM3QyxjQUFBLFVBQVUsUUFBUSxVQUFVO0FBQUksNEJBQWdCLFFBQVE7QUFBQTtBQUN2RCx3QkFBWSxRQUFRLFlBQVk7QUFBQSxRQUM1QixXQUFBLFVBQVUsUUFBUSxVQUFVLElBQUk7QUFDekMsaUJBQU8sUUFBUTtBQUFBLFlBQ2IsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLFlBQ1QsU0FBUyxLQUFLLFFBQVEsWUFBWSxNQUFNLElBQUksRUFBRTtBQUFBLFVBQUE7QUFBQSxRQUVsRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsYUFBUyxVQUFVLE9BQW9CO0FBQ3JDLGtCQUFZLFFBQVE7QUFDcEIsb0JBQWMsVUFBVSxLQUFLO0FBQzdCLGlCQUFXLFFBQVEsSUFBSSxJQUFJLFNBQVMsSUFBSTtBQUFBLElBQzFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5BLE1BQU0sTUFBTSxVQUFVLFFBQVE7QUFDOUIsSUFBSSxJQUFJQyxFQUFhO0FBQ3JCLElBQUksSUFBSSxJQUFJO0FBQ1osSUFBSSxVQUFVLGlCQUFpQkMsRUFBYTtBQUM1QyxJQUFJLE1BQU0sTUFBTTs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzUsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDQsNDUsNDYsNDcsNDgsNDksNTAsNTEsNTIsNTMsNTQsNTUsNTYsNTcsNTgsNTksNjAsNjEsNjIsNjMsNjQsNjUsNjYsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsNzUsNzYsNzcsNzgsNzksODAsODEsODIsODMsODQsODUsODYsODcsODgsODksOTAsOTEsOTIsOTMsOTQsOTUsOTYsOTcsOTgsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDEwNywxMDgsMTA5LDExMCwxMTEsMTEyLDExMywxMTQsMTE1LDExNiwxMTcsMTE4LDExOSwxMjAsMTIxLDEyMiwxMjMsMTI0LDEyNSwxMjYsMTI3LDEyOCwxMjksMTMwLDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTM5LDE0MCwxNDEsMTQyLDE0MywxNDQsMTQ1LDE0NiwxNDcsMTQ4LDE0OSwxNTAsMTUxXX0=
