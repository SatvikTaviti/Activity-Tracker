import { B as Browser } from "../browser-polyfill.js";
import { r as requiredArgs, t as toInteger, c as convertSummaryTimeToString, a as ranges, T as ThisWeekRange, S as StorageParams, _ as _imports_0$1, i as injectStorage, C as CHROME_STORE_REVIEW_URL, b as Settings, d as isDateEqual, l as logger, I as IS_POMODORO_ENABLED_DEFAULT, e as SettingsTab, f as TypeOfList, D as DARK_MODE_DEFAULT, g as _imports_0$2 } from "../general.js";
import { a as addMilliseconds, s as startOfDay, _ as _sfc_main$5, B as ByDaysChart, T as TabItem, u as useTabListByDays, b as useImportToCsvWithData, c as useFile, F as FileType, d as _imports_0, e as addDays, f as useBadge, g as BadgeColor, h as BadgeIcon, o as openPage, i as applyDarkMode, j as TabList, k as _imports_5$1, l as oa } from "../dark.js";
import { d as defineComponent, r as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, n as normalizeClass, b as createTextVNode, t as toDisplayString, u as unref, e as createVNode, w as withCtx, f as withDirectives, g as renderSlot, v as vShow, T as Transition, p as pushScopeId, h as popScopeId, _ as _export_sfc, i as useI18n, j as computed, k as onMounted, l as resolveComponent, m as createBlock, F as Fragment, q as renderList, s as createCommentVNode, x as createApp, y as i18n } from "../i18n.js";
import { M as Messages } from "../messages.js";
const _imports_1 = "/light-mode.svg";
const _imports_2 = "/dark-mode.svg";
const _imports_4 = "/dashboard.svg";
const _imports_5 = "/settings.svg";
var MILLISECONDS_IN_HOUR = 36e5;
function addHours(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}
function addSeconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * 1e3);
}
function startOfToday() {
  return startOfDay(Date.now());
}
const _withScopeId$2 = (n) => (pushScopeId("data-v-677b5a4c"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "expander" };
const _hoisted_2$4 = { class: "d-inline-block" };
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("polyline", {
  points: "12,2 20,10 28,2",
  "stroke-width": "3",
  fill: "none"
}, null, -1));
const _hoisted_4$3 = [
  _hoisted_3$3
];
const _hoisted_5$2 = { class: "header" };
const _hoisted_6$2 = { class: "expander-body" };
const __default__$3 = {
  name: "Expander"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    day: {},
    time: {}
  },
  setup(__props) {
    const open = ref();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: normalizeClass(["expander-trigger", open.value ? "active" : "beforeBorder"]),
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("div", _hoisted_2$4, [
            (openBlock(), createElementBlock("svg", {
              class: normalizeClass(["expander-trigger-Icon", { open: open.value }]),
              width: "40",
              height: "12",
              stroke: "cornflowerblue"
            }, _hoisted_4$3, 2))
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            createTextVNode(toDisplayString(_ctx.day) + " ", 1),
            createBaseVNode("span", null, toDisplayString(unref(convertSummaryTimeToString)(_ctx.time)), 1)
          ])
        ], 2),
        createVNode(Transition, { name: "leftToRight" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_6$2, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
const Expander_vue_vue_type_style_index_0_scoped_677b5a4c_lang = "";
const Expander = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-677b5a4c"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-bce2236d"), n = n(), popScopeId(), n);
const _hoisted_1$3 = {
  key: 0,
  class: "no-data"
};
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  height: "55",
  src: _imports_0
}, null, -1));
const _hoisted_3$2 = [
  _hoisted_2$3
];
const _hoisted_4$2 = { key: 1 };
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = { class: "no-data" };
const _hoisted_7$1 = ["onClick"];
const _hoisted_8$1 = { key: 2 };
const _hoisted_9$1 = { class: "date-block" };
const _hoisted_10$1 = ["onClick"];
const _hoisted_11$1 = ["value"];
const _hoisted_12$1 = { class: "stats-block block" };
const _hoisted_13$1 = { class: "header" };
const _hoisted_14$1 = { class: "ml-20 mr-20 by-days-chart" };
const __default__$2 = {
  name: "TabList"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const { t } = useI18n();
    const tabsByDays = ref();
    const isLoading = ref();
    const noData = ref();
    const selectedDate = ref();
    const presetRanges = ranges();
    const countOfDays = computed(
      () => tabsByDays.value != void 0 ? tabsByDays.value.days.length : 0
    );
    async function loadList(dateFrom, dateTo) {
      const tabList = await useTabListByDays(dateFrom, dateTo);
      if (tabList != null) {
        tabsByDays.value = tabList;
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
    onMounted(async () => {
      var _a, _b;
      isLoading.value = true;
      selectedDate.value = ThisWeekRange;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      await loadList(dateFrom, dateTo);
    });
    async function exportToCsv() {
      var _a, _b, _c;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      const csv = await useImportToCsvWithData((_c = tabsByDays.value) == null ? void 0 : _c.days);
      useFile(
        csv,
        FileType.CSV,
        `websites_${dateFrom.toLocaleDateString()}-${dateTo.toLocaleDateString()}.csv`
      );
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$2)) : (openBlock(), createElementBlock("div", _hoisted_4$2, [
        countOfDays.value == void 0 || countOfDays.value == 0 && !noData.value ? (openBlock(), createBlock(_sfc_main$5, { key: 0 })) : noData.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6$1, [
            createTextVNode(toDisplayString(unref(t)("noDataForPeriod.message")) + " ", 1),
            createVNode(_component_VueDatePicker, {
              range: "",
              "enable-time-picker": false,
              class: "date-picker",
              modelValue: selectedDate.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event),
                handleDate
              ],
              "preset-ranges": unref(presetRanges)
            }, {
              yearly: withCtx(({ label, range, presetDateRange }) => [
                createBaseVNode("span", {
                  onClick: ($event) => presetDateRange(range)
                }, toDisplayString(label), 9, _hoisted_7$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_8$1, [
          createBaseVNode("div", _hoisted_9$1, [
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
                }, toDisplayString(label), 9, _hoisted_10$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"]),
            createBaseVNode("input", {
              type: "button",
              value: unref(t)("exportToCsv.message"),
              onClick: _cache[2] || (_cache[2] = ($event) => exportToCsv())
            }, null, 8, _hoisted_11$1)
          ]),
          createBaseVNode("div", _hoisted_12$1, [
            createBaseVNode("div", _hoisted_13$1, toDisplayString(unref(t)("averageTimeByDays.message")), 1),
            createBaseVNode("p", null, toDisplayString(unref(convertSummaryTimeToString)(tabsByDays.value.averageTime)), 1)
          ]),
          createBaseVNode("div", _hoisted_14$1, [
            createVNode(ByDaysChart, {
              data: tabsByDays.value
            }, null, 8, ["data"])
          ]),
          createBaseVNode("div", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList((_a = tabsByDays.value) == null ? void 0 : _a.days, (tabDay, i) => {
              return openBlock(), createBlock(Expander, {
                key: i,
                day: tabDay.day,
                time: tabDay.time
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(tabDay.tabs, (tab, i2) => {
                    return openBlock(), createBlock(TabItem, {
                      key: i2,
                      item: tab,
                      summaryTimeForWholeDay: tabDay.time
                    }, null, 8, ["item", "summaryTimeForWholeDay"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["day", "time"]);
            }), 128))
          ])
        ]))
      ]));
    };
  }
});
const ByDays_vue_vue_type_style_index_0_scoped_bce2236d_lang = "";
const ByDays = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bce2236d"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "review-block"
};
const _hoisted_2$2 = ["value"];
const __default__$1 = {
  name: "Review"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const PROMPT_AT_TIME_OF_DAY = 12;
    const ADD_DAYS_FIRST = 2;
    const ADD_DAYS_NEXT = 5;
    const showReview = ref();
    onMounted(async () => {
      showReview.value = false;
      {
        const reviewDate = await settingsStorage.getValue(StorageParams.REVIEW_DATE);
        if (reviewDate == void 0) {
          let nextTime = await settingsStorage.getValue(StorageParams.REVIEW_PROMPT_AT);
          if (nextTime == void 0) {
            await settingsStorage.saveValue(
              StorageParams.REVIEW_PROMPT_AT,
              addDays(addHours(startOfToday(), PROMPT_AT_TIME_OF_DAY), ADD_DAYS_FIRST).toString()
            );
          } else {
            nextTime = new Date(nextTime);
            if (nextTime < /* @__PURE__ */ new Date())
              showReview.value = true;
          }
        }
      }
    });
    async function closeBlock() {
      showReview.value = false;
      await settingsStorage.saveValue(
        StorageParams.REVIEW_PROMPT_AT,
        addDays(addHours(startOfToday(), PROMPT_AT_TIME_OF_DAY), ADD_DAYS_NEXT).toString()
      );
    }
    async function openStore() {
      window.open(CHROME_STORE_REVIEW_URL, "_blank");
      await settingsStorage.saveValue(StorageParams.REVIEW_DATE, (/* @__PURE__ */ new Date()).toString());
    }
    return (_ctx, _cache) => {
      return showReview.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("p", null, toDisplayString(unref(t)("enjoyAndReview.message")), 1),
        createBaseVNode("img", {
          height: "15",
          src: _imports_0$1,
          onClick: _cache[0] || (_cache[0] = ($event) => closeBlock())
        }),
        createBaseVNode("input", {
          type: "button",
          value: unref(t)("enjoyAndReview.description"),
          onClick: _cache[1] || (_cache[1] = ($event) => openStore())
        }, null, 8, _hoisted_2$2)
      ])) : createCommentVNode("", true);
    };
  }
});
const Review_vue_vue_type_style_index_0_scoped_7e8d72eb_lang = "";
const Review = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7e8d72eb"]]);
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
    const sound = await storage.getValue(getSound());
    await createOffscreen();
    await Browser.runtime.sendMessage({
      message: Messages.PlayAudio,
      sound,
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
const _hoisted_1$1 = {
  key: 0,
  class: "pomodoro-popup-block"
};
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = ["value"];
const __default__ = {
  name: "PomodoroInfo"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const isEnabled = ref();
    const isWorkingTime = ref();
    onMounted(async () => {
      var _a;
      isEnabled.value = await settingsStorage.getValue(
        StorageParams.IS_POMODORO_ENABLED,
        IS_POMODORO_ENABLED_DEFAULT
      );
      isWorkingTime.value = (_a = await checkPomodoro()) == null ? void 0 : _a.isWork;
    });
    return (_ctx, _cache) => {
      return isEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("p", null, toDisplayString(unref(t)("pomodoroIsEnabled.message")), 1),
        isWorkingTime.value ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(t)("pomodoroWork.message")), 1)) : createCommentVNode("", true),
        !isWorkingTime.value ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(unref(t)("pomodoroRest.message")), 1)) : createCommentVNode("", true),
        createBaseVNode("input", {
          type: "button",
          value: unref(t)("pomodoroSettings.message"),
          onClick: _cache[0] || (_cache[0] = ($event) => unref(openPage)(unref(SettingsTab).Pomodoro))
        }, null, 8, _hoisted_4$1)
      ])) : createCommentVNode("", true);
    };
  }
});
const PomodoroInfo_vue_vue_type_style_index_0_scoped_9dbdf296_lang = "";
const PomodoroInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9dbdf296"]]);
const _withScopeId = (n) => (pushScopeId("data-v-1e47be00"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "headerBlock" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "d-inline-block" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "logo",
    height: "30",
    src: _imports_0$2
  }),
  /* @__PURE__ */ createBaseVNode("p", { class: "header" }, "Web Activity Time Tracker")
], -1));
const _hoisted_3 = { class: "icons-block" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5$1,
  height: "22"
}, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  height: "22",
  src: _imports_4
}, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  height: "22",
  src: _imports_5
}, null, -1));
const _hoisted_7 = { class: "tabs" };
const _hoisted_8 = { title: "Today" };
const _hoisted_9 = {
  for: "todayTab",
  role: "button"
};
const _hoisted_10 = { title: "All The Time" };
const _hoisted_11 = {
  for: "allTimeTab",
  role: "button"
};
const _hoisted_12 = { title: "By Days" };
const _hoisted_13 = {
  for: "byDaysTab",
  role: "button"
};
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "slider" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" })
], -1));
const _hoisted_15 = { class: "content" };
const _hoisted_16 = { id: "todayTabList" };
const _hoisted_17 = { id: "summary" };
const _hoisted_18 = { id: "byDaysTabList" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Popup",
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const activeTab = ref();
    const darkMode = ref();
    onMounted(async () => {
      activeTab.value = TypeOfList.Today;
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      if (darkMode.value)
        applyDarkMode(darkMode.value);
    });
    function selectTab(type) {
      activeTab.value = type;
    }
    async function changeDarkMode(value) {
      await settingsStorage.saveValue(StorageParams.DARK_MODE, value);
      darkMode.value = value;
      applyDarkMode(value);
      updateTab();
    }
    function updateTab() {
      const tempValue = activeTab.value;
      activeTab.value = void 0;
      setTimeout(() => {
        activeTab.value = tempValue;
      }, 50);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            darkMode.value == true ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: "dark-mode-icon",
              height: "25",
              src: _imports_1,
              title: "Disable Dark Mode",
              onClick: _cache[0] || (_cache[0] = ($event) => changeDarkMode(false))
            })) : createCommentVNode("", true),
            darkMode.value == false ? (openBlock(), createElementBlock("img", {
              key: 1,
              class: "dark-mode-icon",
              title: "Enable Dark Mode",
              height: "25",
              src: _imports_2,
              onClick: _cache[1] || (_cache[1] = ($event) => changeDarkMode(true))
            })) : createCommentVNode("", true),
            createBaseVNode("a", {
              onClick: _cache[2] || (_cache[2] = ($event) => unref(openPage)(unref(SettingsTab).Pomodoro))
            }, [
              createTextVNode(toDisplayString(unref(t)("pomodoroMode.message")), 1),
              _hoisted_4
            ]),
            createBaseVNode("a", {
              class: "filter",
              onClick: _cache[3] || (_cache[3] = ($event) => unref(openPage)(unref(SettingsTab).Dashboard))
            }, [
              createTextVNode(toDisplayString(unref(t)("dashboard.message")), 1),
              _hoisted_5
            ]),
            createBaseVNode("a", {
              class: "filter",
              onClick: _cache[4] || (_cache[4] = ($event) => unref(openPage)(unref(SettingsTab).GeneralSettings))
            }, [
              createTextVNode(toDisplayString(unref(t)("settings.message")), 1),
              _hoisted_6
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("input", {
            type: "radio",
            id: "todayTab",
            name: "tab-control",
            checked: "",
            onChange: _cache[5] || (_cache[5] = ($event) => selectTab(unref(TypeOfList).Today))
          }, null, 32),
          createBaseVNode("input", {
            type: "radio",
            id: "allTimeTab",
            name: "tab-control",
            onChange: _cache[6] || (_cache[6] = ($event) => selectTab(unref(TypeOfList).All))
          }, null, 32),
          createBaseVNode("input", {
            type: "radio",
            id: "byDaysTab",
            name: "tab-control",
            onChange: _cache[7] || (_cache[7] = ($event) => selectTab(unref(TypeOfList).ByDays))
          }, null, 32),
          createBaseVNode("ul", null, [
            createBaseVNode("li", _hoisted_8, [
              createBaseVNode("label", _hoisted_9, [
                createBaseVNode("span", null, toDisplayString(unref(t)("today.message")), 1)
              ])
            ]),
            createBaseVNode("li", _hoisted_10, [
              createBaseVNode("label", _hoisted_11, [
                createBaseVNode("span", null, toDisplayString(unref(t)("allTime.message")), 1)
              ])
            ]),
            createBaseVNode("li", _hoisted_12, [
              createBaseVNode("label", _hoisted_13, [
                createBaseVNode("span", null, toDisplayString(unref(t)("byDays.message")), 1)
              ])
            ])
          ]),
          _hoisted_14,
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("section", _hoisted_16, [
              activeTab.value == unref(TypeOfList).Today ? (openBlock(), createBlock(TabList, {
                key: 0,
                type: unref(TypeOfList).Today,
                showAllStats: false
              }, null, 8, ["type"])) : createCommentVNode("", true)
            ]),
            createBaseVNode("section", _hoisted_17, [
              activeTab.value == unref(TypeOfList).All ? (openBlock(), createBlock(TabList, {
                key: 0,
                type: unref(TypeOfList).All,
                showAllStats: true
              }, null, 8, ["type"])) : createCommentVNode("", true)
            ]),
            createBaseVNode("section", _hoisted_18, [
              activeTab.value == unref(TypeOfList).ByDays ? (openBlock(), createBlock(ByDays, { key: 0 })) : createCommentVNode("", true)
            ])
          ])
        ]),
        createVNode(PomodoroInfo),
        createVNode(Review)
      ], 64);
    };
  }
});
const Popup_vue_vue_type_style_index_0_scoped_1e47be00_lang = "";
const Popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e47be00"]]);
const app = createApp(Popup);
app.component("VueDatePicker", oa);
app.use(i18n);
app.mount("body");
const main = "";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvbGlnaHQtbW9kZS5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2RhcmstbW9kZS5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2Rhc2hib2FyZC5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2ZyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kYXRlLWZuc0AyLjMwLjAvbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRIb3Vycy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kYXRlLWZuc0AyLjMwLjAvbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRTZWNvbmRzL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RhdGUtZm5zQDIuMzAuMC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZUb2RheS9pbmRleC5qcyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0J5RGF5cy52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9SZXZpZXcudnVlIiwiLi4vLi4vc3JjL29mZnNjcmVlbi9pbmRleC50cyIsIi4uLy4uL3NyYy9mdW5jdGlvbnMvcG9tb2Rvcm8udHMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb21vZG9yb0luZm8udnVlIiwiLi4vLi4vc3JjL3BhZ2VzL1BvcHVwLnZ1ZSIsIi4uLy4uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fZWNlYjUzMWZfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2IzOTI0YWQ4X19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX184YTM2ZDg0NF9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fODYyY2VlNGNfX1wiIiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDA7XG5cbi8qKlxuICogQG5hbWUgYWRkSG91cnNcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBob3VycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBob3VycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgaG91cnMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgaG91cnMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDIgaG91cnMgdG8gMTAgSnVseSAyMDE0IDIzOjAwOjAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkSG91cnMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDIzLCAwKSwgMilcbiAqIC8vPT4gRnJpIEp1bCAxMSAyMDE0IDAxOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEhvdXJzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgYW1vdW50ICogTUlMTElTRUNPTkRTX0lOX0hPVVIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZFNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAzMCBzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZFNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMCksIDMwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGFtb3VudCAqIDEwMDApO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvZGF5LlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgdG9kYXkuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mVG9kYXkoKVxuICogLy89PiBNb24gT2N0IDYgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVG9kYXkoKSB7XG4gIHJldHVybiBzdGFydE9mRGF5KERhdGUubm93KCkpO1xufSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImV4cGFuZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImV4cGFuZGVyLXRyaWdnZXJcIiBAY2xpY2s9XCJvcGVuID0gIW9wZW5cIiA6Y2xhc3M9XCJvcGVuID8gJ2FjdGl2ZScgOiAnYmVmb3JlQm9yZGVyJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBjbGFzcz1cImV4cGFuZGVyLXRyaWdnZXItSWNvblwiXG4gICAgICAgICAgOmNsYXNzPVwieyBvcGVuOiBvcGVuIH1cIlxuICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICBzdHJva2U9XCJjb3JuZmxvd2VyYmx1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTIsMiAyMCwxMCAyOCwyXCIgc3Ryb2tlLXdpZHRoPVwiM1wiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAge3sgZGF5IH19XG4gICAgICAgIDxzcGFuPnt7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nKHRpbWUpIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cImxlZnRUb1JpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kZXItYm9keVwiIHYtc2hvdz1cIm9wZW5cIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdFeHBhbmRlcicsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgY29udmVydFN1bW1hcnlUaW1lVG9TdHJpbmcgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgZGF5OiBzdHJpbmc7XG4gIHRpbWU6IG51bWJlcjtcbn0+KCk7XG5cbmNvbnN0IG9wZW4gPSByZWY8Ym9vbGVhbj4oKTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDkwJTtcbn1cbi5oZWFkZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmV4cGFuZGVyLXRyaWdnZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuN3JlbSAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xufVxuLmV4cGFuZGVyLXRyaWdnZXI6aG92ZXIge1xuICBjb2xvcjogIzQ3N2RjYTtcbn1cbi5leHBhbmRlci10cmlnZ2VyLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0NzdkY2E7XG59XG4uZXhwYW5kZXItdHJpZ2dlci1JY29uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuLmV4cGFuZGVyLXRyaWdnZXItSWNvbi5vcGVuIHtcbiAgc3Ryb2tlOiAjZmY2MzQ3O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmV4cGFuZGVyLWJvZHkge1xuICBwYWRkaW5nOiAxcHg7XG4gIGJhY2tncm91bmQ6ICNlZmYwZjI7XG59XG4ubGVmdFRvUmlnaHQtZW50ZXItYWN0aXZlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxlZnRUb1JpZ2h0IDAuNXM7XG4gIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMC41cztcbn1cbi5sZWZ0VG9SaWdodC1sZWF2ZS1hY3RpdmUge1xuICBhbmltYXRpb246IGxlZnRUb1JpZ2h0IDAuNXMgcmV2ZXJzZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm5vLWRhdGFcIiB2LWlmPVwiaXNMb2FkaW5nXCI+XG4gICAgPGltZyBoZWlnaHQ9XCI1NVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wcmVsb2FkZXIuZ2lmXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgdi1lbHNlPlxuICAgIDxuby1kYXRhLWJ5LWRheXMgdi1pZj1cImNvdW50T2ZEYXlzID09IHVuZGVmaW5lZCB8fCAoY291bnRPZkRheXMgPT0gMCAmJiAhbm9EYXRhKVwiIC8+XG4gICAgPGRpdiB2LWVsc2UtaWY9XCJub0RhdGFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhXCI+XG4gICAgICAgIHt7IHQoJ25vRGF0YUZvclBlcmlvZC5tZXNzYWdlJykgfX1cbiAgICAgICAgPFZ1ZURhdGVQaWNrZXJcbiAgICAgICAgICByYW5nZVxuICAgICAgICAgIDplbmFibGUtdGltZS1waWNrZXI9XCJmYWxzZVwiXG4gICAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlclwiXG4gICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXG4gICAgICAgICAgOnByZXNldC1yYW5nZXM9XCJwcmVzZXRSYW5nZXNcIlxuICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSAjeWVhcmx5PVwieyBsYWJlbCwgcmFuZ2UsIHByZXNldERhdGVSYW5nZSB9XCI+XG4gICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC90ZW1wbGF0ZT48L1Z1ZURhdGVQaWNrZXJcbiAgICAgICAgPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWVsc2U+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ibG9ja1wiPlxuICAgICAgICA8VnVlRGF0ZVBpY2tlclxuICAgICAgICAgIHJhbmdlXG4gICAgICAgICAgOmVuYWJsZS10aW1lLXBpY2tlcj1cImZhbHNlXCJcbiAgICAgICAgICBjbGFzcz1cImRhdGUtcGlja2VyXCJcbiAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWREYXRlXCJcbiAgICAgICAgICA6cHJlc2V0LXJhbmdlcz1cInByZXNldFJhbmdlc1wiXG4gICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cImhhbmRsZURhdGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlICN5ZWFybHk9XCJ7IGxhYmVsLCByYW5nZSwgcHJlc2V0RGF0ZVJhbmdlIH1cIj5cbiAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInByZXNldERhdGVSYW5nZShyYW5nZSlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPjwvVnVlRGF0ZVBpY2tlclxuICAgICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgOnZhbHVlPVwidCgnZXhwb3J0VG9Dc3YubWVzc2FnZScpXCIgQGNsaWNrPVwiZXhwb3J0VG9Dc3YoKVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1ibG9jayBibG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+e3sgdCgnYXZlcmFnZVRpbWVCeURheXMubWVzc2FnZScpIH19PC9kaXY+XG4gICAgICAgIDxwPnt7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nKHRhYnNCeURheXMhLmF2ZXJhZ2VUaW1lKSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1sLTIwIG1yLTIwIGJ5LWRheXMtY2hhcnRcIj5cbiAgICAgICAgPEJ5RGF5c0NoYXJ0IDpkYXRhPVwidGFic0J5RGF5cyFcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8RXhwYW5kZXJcbiAgICAgICAgICB2LWZvcj1cIih0YWJEYXksIGkpIG9mIHRhYnNCeURheXM/LmRheXNcIlxuICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICA6ZGF5PVwidGFiRGF5LmRheVwiXG4gICAgICAgICAgOnRpbWU9XCJ0YWJEYXkudGltZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8VGFiSXRlbVxuICAgICAgICAgICAgdi1mb3I9XCIodGFiLCBpKSBvZiB0YWJEYXkudGFic1wiXG4gICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICA6aXRlbT1cInRhYlwiXG4gICAgICAgICAgICA6c3VtbWFyeVRpbWVGb3JXaG9sZURheT1cInRhYkRheS50aW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0V4cGFuZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1RhYkxpc3QnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgVGFiSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1RhYkl0ZW0udnVlJztcbmltcG9ydCBOb0RhdGFCeURheXMgZnJvbSAnLi9Ob0RhdGFCeURheXMudnVlJztcbmltcG9ydCBCeURheXNDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0J5RGF5c0NoYXJ0LnZ1ZSc7XG5pbXBvcnQgRXhwYW5kZXIgZnJvbSAnLi4vY29tcG9uZW50cy9FeHBhbmRlci52dWUnO1xuaW1wb3J0IHsgVGFiTGlzdEJ5RGF5cyB9IGZyb20gJy4uL2R0by90YWJMaXN0U3VtbWFyeSc7XG5pbXBvcnQgeyB1c2VUYWJMaXN0QnlEYXlzIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVRhYkxpc3RCeURheXMnO1xuaW1wb3J0IHsgY29udmVydFN1bW1hcnlUaW1lVG9TdHJpbmcgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xuaW1wb3J0IHsgcmFuZ2VzLCBUaGlzV2Vla1JhbmdlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyB1c2VJbXBvcnRUb0NzdldpdGhEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUltcG9ydFRvQ3N2JztcbmltcG9ydCB7IHVzZUZpbGUsIEZpbGVUeXBlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUZpbGUnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuY29uc3QgdGFic0J5RGF5cyA9IHJlZjxUYWJMaXN0QnlEYXlzPigpO1xuY29uc3QgaXNMb2FkaW5nID0gcmVmPGJvb2xlYW4+KCk7XG5jb25zdCBub0RhdGEgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IHNlbGVjdGVkRGF0ZSA9IHJlZjxEYXRlW10+KCk7XG5cbmNvbnN0IHByZXNldFJhbmdlcyA9IHJhbmdlcygpO1xuXG5jb25zdCBjb3VudE9mRGF5cyA9IGNvbXB1dGVkKCgpID0+XG4gIHRhYnNCeURheXMudmFsdWUgIT0gdW5kZWZpbmVkID8gdGFic0J5RGF5cy52YWx1ZS5kYXlzLmxlbmd0aCA6IDAsXG4pO1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkTGlzdChkYXRlRnJvbTogRGF0ZSwgZGF0ZVRvOiBEYXRlKSB7XG4gIGNvbnN0IHRhYkxpc3QgPSBhd2FpdCB1c2VUYWJMaXN0QnlEYXlzKGRhdGVGcm9tLCBkYXRlVG8pO1xuICBpZiAodGFiTGlzdCAhPSBudWxsKSB7XG4gICAgdGFic0J5RGF5cy52YWx1ZSA9IHRhYkxpc3Q7XG4gICAgaWYgKHRhYkxpc3QuZGF5cy5sZW5ndGggPT0gMCAmJiB0YWJMaXN0LnN1bW1hcnlUaW1lID09IDApIG5vRGF0YS52YWx1ZSA9IHRydWU7XG4gICAgZWxzZSBub0RhdGEudmFsdWUgPSBmYWxzZTtcbiAgfVxuICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0ZShtb2RlbERhdGE6IERhdGVbXSkge1xuICBzZWxlY3RlZERhdGUudmFsdWUgPSBtb2RlbERhdGE7XG4gIGNvbnN0IGRhdGVGcm9tID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMF0gYXMgRGF0ZTtcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGlzTG9hZGluZy52YWx1ZSA9IHRydWU7XG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IFRoaXNXZWVrUmFuZ2U7XG4gIGNvbnN0IGRhdGVGcm9tID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMF0gYXMgRGF0ZTtcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZXhwb3J0VG9Dc3YoKSB7XG4gIGNvbnN0IGRhdGVGcm9tID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMF0gYXMgRGF0ZTtcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcbiAgY29uc3QgY3N2ID0gYXdhaXQgdXNlSW1wb3J0VG9Dc3ZXaXRoRGF0YSh0YWJzQnlEYXlzLnZhbHVlPy5kYXlzKTtcbiAgdXNlRmlsZShcbiAgICBjc3YsXG4gICAgRmlsZVR5cGUuQ1NWLFxuICAgIGB3ZWJzaXRlc18ke2RhdGVGcm9tLnRvTG9jYWxlRGF0ZVN0cmluZygpfS0ke2RhdGVUby50b0xvY2FsZURhdGVTdHJpbmcoKX0uY3N2YCxcbiAgKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnN0YXRzLWJsb2NrLmJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMTBweCAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0cy1ibG9jay5ibG9jayAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wdXAtaGVhZGVyKTtcbiAgY29sb3I6IHJnYig2NiwgNjYsIDY2KTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3RhdHMtYmxvY2suYmxvY2sgcCB7XG4gIG1hcmdpbjogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcbn1cbi5kYXRlLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMjVweDtcbn1cbi5ieS1kYXlzLWNoYXJ0IHtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyZXZpZXctYmxvY2tcIiB2LWlmPVwic2hvd1Jldmlld1wiPlxuICAgIDxwPnt7IHQoJ2Vuam95QW5kUmV2aWV3Lm1lc3NhZ2UnKSB9fTwvcD5cbiAgICA8aW1nIGhlaWdodD1cIjE1XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2Nsb3NlLnN2Z1wiIEBjbGljaz1cImNsb3NlQmxvY2soKVwiIC8+XG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdlbmpveUFuZFJldmlldy5kZXNjcmlwdGlvbicpXCIgQGNsaWNrPVwib3BlblN0b3JlKClcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdSZXZpZXcnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IGFkZERheXMsIHN0YXJ0T2ZUb2RheSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGFkZEhvdXJzIH0gZnJvbSAnZGF0ZS1mbnMvZXNtJztcbmltcG9ydCB7IENIUk9NRV9TVE9SRV9SRVZJRVdfVVJMIH0gZnJvbSAnLi4vdXRpbHMvY2hyb21lLXVybCc7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5jb25zdCBQUk9NUFRfQVRfVElNRV9PRl9EQVkgPSAxMjtcbmNvbnN0IEFERF9EQVlTX0ZJUlNUID0gMjtcbmNvbnN0IEFERF9EQVlTX05FWFQgPSA1O1xuXG5jb25zdCBzaG93UmV2aWV3ID0gcmVmPGJvb2xlYW4+KCk7XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIHNob3dSZXZpZXcudmFsdWUgPSBmYWxzZTtcbiAgaWYgKF9fQlJPV1NFUl9fID09ICdjaHJvbWUnKSB7XG4gICAgY29uc3QgcmV2aWV3RGF0ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLlJFVklFV19EQVRFKTtcblxuICAgIGlmIChyZXZpZXdEYXRlID09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IG5leHRUaW1lID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuUkVWSUVXX1BST01QVF9BVCk7XG4gICAgICBpZiAobmV4dFRpbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoXG4gICAgICAgICAgU3RvcmFnZVBhcmFtcy5SRVZJRVdfUFJPTVBUX0FULFxuICAgICAgICAgIGFkZERheXMoYWRkSG91cnMoc3RhcnRPZlRvZGF5KCksIFBST01QVF9BVF9USU1FX09GX0RBWSksIEFERF9EQVlTX0ZJUlNUKS50b1N0cmluZygpLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dFRpbWUgPSBuZXcgRGF0ZShuZXh0VGltZSk7XG4gICAgICAgIGlmIChuZXh0VGltZSA8IG5ldyBEYXRlKCkpIHNob3dSZXZpZXcudmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNsb3NlQmxvY2soKSB7XG4gIHNob3dSZXZpZXcudmFsdWUgPSBmYWxzZTtcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlJFVklFV19QUk9NUFRfQVQsXG4gICAgYWRkRGF5cyhhZGRIb3VycyhzdGFydE9mVG9kYXkoKSwgUFJPTVBUX0FUX1RJTUVfT0ZfREFZKSwgQUREX0RBWVNfTkVYVCkudG9TdHJpbmcoKSxcbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3BlblN0b3JlKCkge1xuICB3aW5kb3cub3BlbihDSFJPTUVfU1RPUkVfUkVWSUVXX1VSTCwgJ19ibGFuaycpO1xuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuUkVWSUVXX0RBVEUsIG5ldyBEYXRlKCkudG9TdHJpbmcoKSk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5yZXZpZXctYmxvY2sge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG59XG4ucmV2aWV3LWJsb2NrIGlucHV0W3R5cGU9J2J1dHRvbiddIHtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnJldmlldy1ibG9jayBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDhweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnJldmlldy1ibG9jayBpbWcge1xuICBwYWRkaW5nOiA5cHggMCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVPZmZzY3JlZW4oKSB7XG4gIGNvbnN0IHBhdGggPSAnc3JjL29mZnNjcmVlbi5odG1sJztcbiAgY29uc3Qgb2Zmc2NyZWVuVXJsID0gQnJvd3Nlci5ydW50aW1lLmdldFVSTChwYXRoKTtcbiAgaWYgKGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uaGFzRG9jdW1lbnQoKSkgcmV0dXJuO1xuICBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICB1cmw6IG9mZnNjcmVlblVybCxcbiAgICByZWFzb25zOiBbJ0FVRElPX1BMQVlCQUNLJ10sXG4gICAganVzdGlmaWNhdGlvbjogJ1BsYXkgYXVkaW8gc291bmRzJyxcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBhZGRTZWNvbmRzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgdXNlQmFkZ2UsIEJhZGdlSWNvbiwgQmFkZ2VDb2xvciB9IGZyb20gJy4vdXNlQmFkZ2UnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlcyc7XG5pbXBvcnQgeyBpc0RhdGVFcXVhbCB9IGZyb20gJy4uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IHsgY3JlYXRlT2Zmc2NyZWVuIH0gZnJvbSAnLi4vb2Zmc2NyZWVuL2luZGV4JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrUG9tb2Rvcm8oKSB7XG4gIHR5cGUgUG9tb2Rvcm9QZXJpb2QgPSB7XG4gICAgcGVyaW9kOiBQZXJpb2Q7XG4gICAgaXNUYXJnZXRQZXJpb2Q6IGJvb2xlYW47XG4gICAgaXNUYXJnZXRQZXJpb2RGaW5pc2hlZE5vdzogYm9vbGVhbjtcbiAgfTtcblxuICBlbnVtIFBlcmlvZCB7XG4gICAgd29yayA9ICdXT1JLJyxcbiAgICByZXN0ID0gJ1JFU1QnLFxuICAgIGZpbmlzaGVkID0gJ0ZJTklTSCcsXG4gIH1cblxuICBmdW5jdGlvbiBpc1RhcmdldFBlcmlvZChwZXJpb2Q6IFBlcmlvZCk6IFBvbW9kb3JvUGVyaW9kIHtcbiAgICBsZXQgaXNQb21vZG9yb1RhcmdldFBlcmlvZEVuZDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IGZyZXF1ZW5jeTsgaW5kZXgrKykge1xuICAgICAgbGV0IGluZCA9IHBlcmlvZCA9PSBQZXJpb2Qud29yayA/IGluZGV4IC0gMSA6IGluZGV4O1xuICAgICAgY29uc3QgcGx1c1dvcmtpbmdUaW1lID0gd29ya1RpbWUgKiBpbmQ7XG4gICAgICBjb25zdCBwbHVzUmVzdFRpbWUgPSAocmVzdFRpbWUgKyAxKSAqIChpbmRleCAtIDEpO1xuICAgICAgY29uc3QgaXNQb21vZG9yb1RhcmdldFBlcmlvZFN0YXJ0ID0gYWRkU2Vjb25kcyhzdGFydFRpbWUsIHBsdXNXb3JraW5nVGltZSArIHBsdXNSZXN0VGltZSk7XG4gICAgICBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kID0gYWRkU2Vjb25kcyhzdGFydFRpbWUsIHBsdXNXb3JraW5nVGltZSArIHBsdXNSZXN0VGltZSArIHdvcmtUaW1lKTtcbiAgICAgIGNvbnN0IGlzVGFyZ2V0UGVyaW9kID1cbiAgICAgICAgbm93ID49IGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RTdGFydCAmJlxuICAgICAgICAoYWRkU2Vjb25kcyhub3csIC0xKSA8PSBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kIHx8IG5vdyA8PSBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kKTtcblxuICAgICAgaWYgKGlzVGFyZ2V0UGVyaW9kKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGVyaW9kOiBwZXJpb2QsXG4gICAgICAgICAgaXNUYXJnZXRQZXJpb2Q6IGlzVGFyZ2V0UGVyaW9kLFxuICAgICAgICAgIGlzVGFyZ2V0UGVyaW9kRmluaXNoZWROb3c6XG4gICAgICAgICAgICBpc0RhdGVFcXVhbChhZGRTZWNvbmRzKG5vdywgLTEpLCBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kKSB8fFxuICAgICAgICAgICAgaXNEYXRlRXF1YWwobm93LCBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcmlvZDogUGVyaW9kLmZpbmlzaGVkLFxuICAgICAgaXNUYXJnZXRQZXJpb2Q6IGZhbHNlLFxuICAgICAgaXNUYXJnZXRQZXJpb2RGaW5pc2hlZE5vdzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHBsYXkocGVyaW9kOiBQZXJpb2QpIHtcbiAgICBmdW5jdGlvbiBnZXRTb3VuZCgpIHtcbiAgICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAgIGNhc2UgUGVyaW9kLndvcms6XG4gICAgICAgICAgcmV0dXJuIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfV09SSztcbiAgICAgICAgY2FzZSBQZXJpb2QucmVzdDpcbiAgICAgICAgICByZXR1cm4gU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9SRVNUO1xuICAgICAgICBjYXNlIFBlcmlvZC5maW5pc2hlZDpcbiAgICAgICAgICByZXR1cm4gU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9GSU5JU0hFRDtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9nZ2VyLmxvZyhgW1BvbW9kb3JvXSAke3BlcmlvZH1gKTtcbiAgICBjb25zdCBzb3VuZCA9IGF3YWl0IHN0b3JhZ2UuZ2V0VmFsdWUoZ2V0U291bmQoKSk7XG4gICAgYXdhaXQgY3JlYXRlT2Zmc2NyZWVuKCk7XG4gICAgYXdhaXQgQnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2U6IE1lc3NhZ2VzLlBsYXlBdWRpbyxcbiAgICAgIHNvdW5kOiBzb3VuZCxcbiAgICAgIG9mZnNjcmVlbjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG4gIGNvbnN0IGlzUG9tb2Rvcm9FbmFibGVkID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcbiAgICBTdG9yYWdlUGFyYW1zLklTX1BPTU9ET1JPX0VOQUJMRUQsXG4gICkpIGFzIGJvb2xlYW47XG5cbiAgaWYgKCFpc1BvbW9kb3JvRW5hYmxlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKFxuICAgIChhd2FpdCBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdldFNldHRpbmcoU3RvcmFnZVBhcmFtcy5QT01PRE9ST19TVEFSVF9USU1FKSkgYXMgc3RyaW5nLFxuICApO1xuICBjb25zdCB3b3JrVGltZSA9IChhd2FpdCBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdldFNldHRpbmcoXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19JTlRFUlZBTF9XT1JLLFxuICApKSBhcyBudW1iZXI7XG4gIGNvbnN0IHJlc3RUaW1lID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1JFU1QsXG4gICkpIGFzIG51bWJlcjtcbiAgY29uc3QgZnJlcXVlbmN5ID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0ZSRVFVRU5DWSxcbiAgKSkgYXMgbnVtYmVyO1xuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgcG9tb2Rvcm9FbmRUaW1lID0gYWRkU2Vjb25kcyhzdGFydFRpbWUsIHdvcmtUaW1lICogZnJlcXVlbmN5ICsgcmVzdFRpbWUgKiBmcmVxdWVuY3kpO1xuXG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGF3YWl0IEJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KTtcblxuICBpZiAobm93ID49IHBvbW9kb3JvRW5kVGltZSkge1xuICAgIGlmIChpc0RhdGVFcXVhbChub3csIHBvbW9kb3JvRW5kVGltZSkpIHtcbiAgICAgIGxvZ2dlci5sb2coYFtQb21vZG9yb10gUG9tb2Rvcm8gZmluaXNoZWRgKTtcbiAgICAgIGF3YWl0IHBsYXkoUGVyaW9kLmZpbmlzaGVkKTtcbiAgICB9XG5cbiAgICBhd2FpdCBzdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLklTX1BPTU9ET1JPX0VOQUJMRUQsIGZhbHNlKTtcbiAgICBhd2FpdCBzdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX1NUQVJUX1RJTUUsIG51bGwpO1xuICAgIGF3YWl0IHVzZUJhZGdlKHtcbiAgICAgIHRhYklkOiBhY3RpdmVUYWJbMF0uaWQsXG4gICAgICB0ZXh0OiBudWxsLFxuICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcbiAgICAgIGljb246IEJhZGdlSWNvbi5kZWZhdWx0LFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB0YXJnZXQgPSBpc1RhcmdldFBlcmlvZChQZXJpb2Qud29yayk7XG4gIGNvbnN0IGlzV29yayA9IHRhcmdldC5pc1RhcmdldFBlcmlvZDtcblxuICBpZiAoaXNXb3JrKSB7XG4gICAgYXdhaXQgdXNlQmFkZ2Uoe1xuICAgICAgdGFiSWQ6IGFjdGl2ZVRhYlswXS5pZCxcbiAgICAgIHRleHQ6IG51bGwsXG4gICAgICBjb2xvcjogQmFkZ2VDb2xvci5ub25lLFxuICAgICAgaWNvbjogQmFkZ2VJY29uLnBvbW9kb3JvV29ya2luZ1RpbWUsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gaXNUYXJnZXRQZXJpb2QoUGVyaW9kLnJlc3QpO1xuICAgIGlmICh0YXJnZXQuaXNUYXJnZXRQZXJpb2QpIHtcbiAgICAgIGF3YWl0IHVzZUJhZGdlKHtcbiAgICAgICAgdGFiSWQ6IGFjdGl2ZVRhYlswXS5pZCxcbiAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcbiAgICAgICAgaWNvbjogQmFkZ2VJY29uLnBvbW9kb3JvUmVzdFRpbWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAodGFyZ2V0LmlzVGFyZ2V0UGVyaW9kRmluaXNoZWROb3cpIGF3YWl0IHBsYXkodGFyZ2V0LnBlcmlvZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc1dvcmssXG4gIH07XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwb21vZG9yby1wb3B1cC1ibG9ja1wiIHYtaWY9XCJpc0VuYWJsZWRcIj5cbiAgICA8cD57eyB0KCdwb21vZG9yb0lzRW5hYmxlZC5tZXNzYWdlJykgfX08L3A+XG4gICAgPHNwYW4gdi1pZj1cImlzV29ya2luZ1RpbWVcIj57eyB0KCdwb21vZG9yb1dvcmsubWVzc2FnZScpIH19PC9zcGFuPlxuICAgIDxzcGFuIHYtaWY9XCIhaXNXb3JraW5nVGltZVwiPnt7IHQoJ3BvbW9kb3JvUmVzdC5tZXNzYWdlJykgfX08L3NwYW4+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIDp2YWx1ZT1cInQoJ3BvbW9kb3JvU2V0dGluZ3MubWVzc2FnZScpXCJcbiAgICAgIEBjbGljaz1cIm9wZW5QYWdlKFNldHRpbmdzVGFiLlBvbW9kb3JvKVwiXG4gICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUG9tb2Rvcm9JbmZvJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMsIElTX1BPTU9ET1JPX0VOQUJMRURfREVGQVVMVCB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7IG9wZW5QYWdlIH0gZnJvbSAnLi4vdXRpbHMvb3Blbi1wYWdlJztcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgY2hlY2tQb21vZG9ybyB9IGZyb20gJy4uL2Z1bmN0aW9ucy9wb21vZG9ybyc7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuXG5jb25zdCBpc0VuYWJsZWQgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IGlzV29ya2luZ1RpbWUgPSByZWY8Ym9vbGVhbj4oKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgaXNFbmFibGVkLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuSVNfUE9NT0RPUk9fRU5BQkxFRCxcbiAgICBJU19QT01PRE9ST19FTkFCTEVEX0RFRkFVTFQsXG4gICk7XG5cbiAgaXNXb3JraW5nVGltZS52YWx1ZSA9IChhd2FpdCBjaGVja1BvbW9kb3JvKCkpPy5pc1dvcms7XG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnBvbW9kb3JvLXBvcHVwLWJsb2NrIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xufVxuLnBvbW9kb3JvLXBvcHVwLWJsb2NrIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogOHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucG9tb2Rvcm8tcG9wdXAtYmxvY2sgc3BhbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMjAyLCAxMDUpO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnBvbW9kb3JvLXBvcHVwLWJsb2NrIGlucHV0W3R5cGU9J2J1dHRvbiddIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImhlYWRlckJsb2NrXCI+XG4gICAgPGRpdiBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCI+XG4gICAgICA8aW1nIGNsYXNzPVwibG9nb1wiIGhlaWdodD1cIjMwXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zLzQ4eDQ4LnBuZ1wiIC8+XG4gICAgICA8cCBjbGFzcz1cImhlYWRlclwiPldlYiBBY3Rpdml0eSBUaW1lIFRyYWNrZXI8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImljb25zLWJsb2NrXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwiZGFyay1tb2RlLWljb25cIlxuICAgICAgICBoZWlnaHQ9XCIyNVwiXG4gICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9saWdodC1tb2RlLnN2Z1wiXG4gICAgICAgIHRpdGxlPVwiRGlzYWJsZSBEYXJrIE1vZGVcIlxuICAgICAgICB2LWlmPVwiZGFya01vZGUgPT0gdHJ1ZVwiXG4gICAgICAgIEBjbGljaz1cImNoYW5nZURhcmtNb2RlKGZhbHNlKVwiXG4gICAgICAvPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzcz1cImRhcmstbW9kZS1pY29uXCJcbiAgICAgICAgdGl0bGU9XCJFbmFibGUgRGFyayBNb2RlXCJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxuICAgICAgICBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGFyay1tb2RlLnN2Z1wiXG4gICAgICAgIHYtaWY9XCJkYXJrTW9kZSA9PSBmYWxzZVwiXG4gICAgICAgIEBjbGljaz1cImNoYW5nZURhcmtNb2RlKHRydWUpXCJcbiAgICAgIC8+XG5cbiAgICAgIDxhIEBjbGljaz1cIm9wZW5QYWdlKFNldHRpbmdzVGFiLlBvbW9kb3JvKVwiXG4gICAgICAgID57eyB0KCdwb21vZG9yb01vZGUubWVzc2FnZScpIH19PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcG9tb2Rvcm8uc3ZnXCIgaGVpZ2h0PVwiMjJcIlxuICAgICAgLz48L2E+XG4gICAgICA8YSBjbGFzcz1cImZpbHRlclwiIEBjbGljaz1cIm9wZW5QYWdlKFNldHRpbmdzVGFiLkRhc2hib2FyZClcIlxuICAgICAgICA+e3sgdCgnZGFzaGJvYXJkLm1lc3NhZ2UnKSB9fTxpbWcgaGVpZ2h0PVwiMjJcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGFzaGJvYXJkLnN2Z1wiXG4gICAgICAvPjwvYT5cbiAgICAgIDxhIGNsYXNzPVwiZmlsdGVyXCIgQGNsaWNrPVwib3BlblBhZ2UoU2V0dGluZ3NUYWIuR2VuZXJhbFNldHRpbmdzKVwiXG4gICAgICAgID57eyB0KCdzZXR0aW5ncy5tZXNzYWdlJykgfX08aW1nIGhlaWdodD1cIjIyXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2Z1wiXG4gICAgICAvPjwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgaWQ9XCJ0b2RheVRhYlwiXG4gICAgICBuYW1lPVwidGFiLWNvbnRyb2xcIlxuICAgICAgY2hlY2tlZFxuICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoVHlwZU9mTGlzdC5Ub2RheSlcIlxuICAgIC8+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgaWQ9XCJhbGxUaW1lVGFiXCJcbiAgICAgIG5hbWU9XCJ0YWItY29udHJvbFwiXG4gICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihUeXBlT2ZMaXN0LkFsbClcIlxuICAgIC8+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgaWQ9XCJieURheXNUYWJcIlxuICAgICAgbmFtZT1cInRhYi1jb250cm9sXCJcbiAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFR5cGVPZkxpc3QuQnlEYXlzKVwiXG4gICAgLz5cbiAgICA8dWw+XG4gICAgICA8bGkgdGl0bGU9XCJUb2RheVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidG9kYXlUYWJcIiByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+PHNwYW4+e3sgdCgndG9kYXkubWVzc2FnZScpIH19PC9zcGFuPjwvbGFiZWxcbiAgICAgICAgPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSB0aXRsZT1cIkFsbCBUaGUgVGltZVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiYWxsVGltZVRhYlwiIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgID48c3Bhbj57eyB0KCdhbGxUaW1lLm1lc3NhZ2UnKSB9fTwvc3Bhbj48L2xhYmVsXG4gICAgICAgID5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgdGl0bGU9XCJCeSBEYXlzXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJieURheXNUYWJcIiByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+PHNwYW4+e3sgdCgnYnlEYXlzLm1lc3NhZ2UnKSB9fTwvc3Bhbj48L2xhYmVsXG4gICAgICAgID5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cblxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJcIj48ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxzZWN0aW9uIGlkPVwidG9kYXlUYWJMaXN0XCI+XG4gICAgICAgIDxUYWJMaXN0XG4gICAgICAgICAgdi1pZj1cImFjdGl2ZVRhYiA9PSBUeXBlT2ZMaXN0LlRvZGF5XCJcbiAgICAgICAgICA6dHlwZT1cIlR5cGVPZkxpc3QuVG9kYXlcIlxuICAgICAgICAgIDpzaG93QWxsU3RhdHM9XCJmYWxzZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBpZD1cInN1bW1hcnlcIj5cbiAgICAgICAgPFRhYkxpc3Qgdi1pZj1cImFjdGl2ZVRhYiA9PSBUeXBlT2ZMaXN0LkFsbFwiIDp0eXBlPVwiVHlwZU9mTGlzdC5BbGxcIiA6c2hvd0FsbFN0YXRzPVwidHJ1ZVwiIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBpZD1cImJ5RGF5c1RhYkxpc3RcIj5cbiAgICAgICAgPEJ5RGF5cyB2LWlmPVwiYWN0aXZlVGFiID09IFR5cGVPZkxpc3QuQnlEYXlzXCIgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxQb21vZG9yb0luZm8gLz5cbiAgPFJldmlldyAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgVGFiTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RhYkxpc3QudnVlJztcbmltcG9ydCBCeURheXMgZnJvbSAnLi4vY29tcG9uZW50cy9CeURheXMudnVlJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9SZXZpZXcudnVlJztcbmltcG9ydCBQb21vZG9yb0luZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Qb21vZG9yb0luZm8udnVlJztcbmltcG9ydCB7IG9wZW5QYWdlIH0gZnJvbSAnLi4vdXRpbHMvb3Blbi1wYWdlJztcbmltcG9ydCB7IFNldHRpbmdzVGFiLCBUeXBlT2ZMaXN0IH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgREFSS19NT0RFX0RFRkFVTFQsIFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IGFwcGx5RGFya01vZGUgfSBmcm9tICcuLi91dGlscy9kYXJrLW1vZGUnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcblxuY29uc3QgYWN0aXZlVGFiID0gcmVmPFR5cGVPZkxpc3Q+KCk7XG5jb25zdCBkYXJrTW9kZSA9IHJlZjxib29sZWFuPigpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBhY3RpdmVUYWIudmFsdWUgPSBUeXBlT2ZMaXN0LlRvZGF5O1xuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xuICBpZiAoZGFya01vZGUudmFsdWUpIGFwcGx5RGFya01vZGUoZGFya01vZGUudmFsdWUpO1xufSk7XG5cbmZ1bmN0aW9uIHNlbGVjdFRhYih0eXBlOiBUeXBlT2ZMaXN0KSB7XG4gIGFjdGl2ZVRhYi52YWx1ZSA9IHR5cGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoYW5nZURhcmtNb2RlKHZhbHVlOiBib29sZWFuKSB7XG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5EQVJLX01PREUsIHZhbHVlKTtcbiAgZGFya01vZGUudmFsdWUgPSB2YWx1ZTtcbiAgYXBwbHlEYXJrTW9kZSh2YWx1ZSk7XG4gIHVwZGF0ZVRhYigpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYWIoKSB7XG4gIGNvbnN0IHRlbXBWYWx1ZSA9IGFjdGl2ZVRhYi52YWx1ZTtcbiAgYWN0aXZlVGFiLnZhbHVlID0gdW5kZWZpbmVkO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhY3RpdmVUYWIudmFsdWUgPSB0ZW1wVmFsdWU7XG4gIH0sIDUwKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmhlYWRlckJsb2NrIHtcbiAgaGVpZ2h0OiA1MnB4O1xufVxuLmhlYWRlckJsb2NrIC5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzRhNGE0YTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4uaGVhZGVyQmxvY2sgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmhlYWRlckJsb2NrIC5sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbi5oZWFkZXJCbG9jayAuaWNvbnMtYmxvY2sge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogN3B4IDAgMCAwO1xufVxuXG4uaGVhZGVyQmxvY2sgLmljb25zLWJsb2NrIGE6aG92ZXIge1xuICBmaWx0ZXI6IGludmVydCg0MCUpIHNlcGlhKDk0JSkgc2F0dXJhdGUoMzM3MSUpIGh1ZS1yb3RhdGUoMjI3ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTIlKTtcbn1cblxuLmhlYWRlckJsb2NrIC5pY29ucy1ibG9jayBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5oZWFkZXJCbG9jayAuaWNvbnMtYmxvY2sgYSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufVxuLmhlYWRlckJsb2NrIC5pY29ucy1ibG9jayAuZGFyay1tb2RlLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL3BhZ2VzL1BvcHVwLnZ1ZSc7XG5pbXBvcnQgVnVlRGF0ZVBpY2tlciBmcm9tICdAdnVlcGljL3Z1ZS1kYXRlcGlja2VyJztcbmltcG9ydCAnQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlci9kaXN0L21haW4uY3NzJztcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgaTE4biBmcm9tICcuL3BsdWdpbnMvaTE4bic7XG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChQb3B1cCk7XG5hcHAuY29tcG9uZW50KCdWdWVEYXRlUGlja2VyJywgVnVlRGF0ZVBpY2tlcik7XG5hcHAudXNlKGkxOG4pO1xuYXBwLm1vdW50KCdib2R5Jyk7XG4iXSwibmFtZXMiOlsiX19kZWZhdWx0X18iLCJQZXJpb2QiLCJpc1RhcmdldFBlcmlvZCIsIlZ1ZURhdGVQaWNrZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDR2YsSUFBSSx1QkFBdUI7QUFvQlosU0FBUyxTQUFTLFdBQVcsYUFBYTtBQUN2RCxlQUFhLEdBQUcsU0FBUztBQUN6QixN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LEVBQUEsT0FDSTtBQUNMLGFBQVM7QUFBQSxNQUFlO0FBQUE7QUFBQTtBQUN4QixRQUFJLE9BQU8sZ0JBQWdCO0FBQ3pCLFlBQU0sU0FBUztBQUFBLFFBQ2IsT0FBTyxVQUFVLENBQUMsRUFBRTtBQUFBLFFBQ3BCLE1BQU07QUFBQSxRQUNOLE9BQU8sV0FBVztBQUFBLFFBQ2xCLE1BQU0sVUFBVTtBQUFBLE1BQUEsQ0FDakI7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUVBLE1BQUksT0FBTztBQUFpQyxVQUFBLEtBQUssT0FBTyxNQUFNO0FBRXZELFNBQUE7QUFBQSxJQUNMO0FBQUEsRUFBQTtBQUVKOzs7Ozs7OztBQ2xJQSxNQUFBLGNBQWU7QUFBQSxFQUNiLE1BQU07QUFDUjs7OztBQVlNLFVBQUEsRUFBRSxNQUFNO0FBQ2QsVUFBTSxrQkFBa0I7QUFFeEIsVUFBTSxZQUFZO0FBQ2xCLFVBQU0sZ0JBQWdCO0FBRXRCLGNBQVUsWUFBWTs7QUFDVixnQkFBQSxRQUFRLE1BQU0sZ0JBQWdCO0FBQUEsUUFDdEMsY0FBYztBQUFBLFFBQ2Q7QUFBQSxNQUFBO0FBR1ksb0JBQUEsU0FBUyxXQUFNLGNBQUEsTUFBTixtQkFBd0I7QUFBQSxJQUFBLENBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrRUssVUFBQSxFQUFFLE1BQU07QUFDZCxVQUFNLGtCQUFrQjtBQUV4QixVQUFNLFlBQVk7QUFDbEIsVUFBTSxXQUFXO0FBRWpCLGNBQVUsWUFBWTtBQUNwQixnQkFBVSxRQUFRLFdBQVc7QUFDN0IsZUFBUyxRQUFRLE1BQU0sZ0JBQWdCLFNBQVMsY0FBYyxXQUFXLGlCQUFpQjtBQUMxRixVQUFJLFNBQVM7QUFBTyxzQkFBYyxTQUFTLEtBQUs7QUFBQSxJQUFBLENBQ2pEO0FBRUQsYUFBUyxVQUFVLE1BQWtCO0FBQ25DLGdCQUFVLFFBQVE7QUFBQSxJQUNwQjtBQUVBLG1CQUFlLGVBQWUsT0FBZ0I7QUFDNUMsWUFBTSxnQkFBZ0IsVUFBVSxjQUFjLFdBQVcsS0FBSztBQUM5RCxlQUFTLFFBQVE7QUFDakIsb0JBQWMsS0FBSztBQUNUO0lBQ1o7QUFFQSxhQUFTLFlBQVk7QUFDbkIsWUFBTSxZQUFZLFVBQVU7QUFDNUIsZ0JBQVUsUUFBUTtBQUNsQixpQkFBVyxNQUFNO0FBQ2Ysa0JBQVUsUUFBUTtBQUFBLFNBQ2pCLEVBQUU7QUFBQSxJQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJQSxNQUFNLE1BQU0sVUFBVSxLQUFLO0FBQzNCLElBQUksVUFBVSxpQkFBaUJDLEVBQWE7QUFDNUMsSUFBSSxJQUFJLElBQUk7QUFDWixJQUFJLE1BQU0sTUFBTTs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzQsNSw2XX0=
