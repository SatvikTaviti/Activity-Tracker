import { Z as getStringTab, S as StorageParams, i as injectStorage, Y as computedAsync, _ as _imports_0, a7 as CHROME_STORE_CLEAR_YOUTUBE_URL } from "./general.js";
import { r as ref, j as computed, d as defineComponent, i as useI18n, u as unref, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, s as createCommentVNode, _ as _export_sfc } from "./i18n.js";
const QUERY_PARAMS_DASHBOARD = "dashboard.html";
const QUERY_PARAMS_TAB = "tab";
const QUERY_PARAMS_TAB_LIMITS = "limits";
const QUERY_PARAMS_BLOCK = "block.html";
const QUERY_PARAMS_BLOCK_DOMAIN = "domain";
function useExtensionPage() {
  const urlObj = ref(new URL(location.href));
  const isLimitPage = computed(
    () => urlObj.value.hostname == "hhfnghjdeddcfegfekjeihfmbjenlomm" && urlObj.value.pathname.includes(QUERY_PARAMS_DASHBOARD) && urlObj.value.searchParams.get(QUERY_PARAMS_TAB) == QUERY_PARAMS_TAB_LIMITS
  );
  const isBlockPage = computed(
    () => {
      var _a;
      return urlObj.value.hostname == "hhfnghjdeddcfegfekjeihfmbjenlomm" && urlObj.value.pathname.includes(QUERY_PARAMS_BLOCK) && ((_a = urlObj.value.searchParams.get(QUERY_PARAMS_BLOCK_DOMAIN)) == null ? void 0 : _a.includes("youtube.com"));
    }
  );
  function updateTab(tab) {
    let targetTab = getStringTab(tab);
    const currentTab = urlObj.value.searchParams.get(QUERY_PARAMS_TAB);
    if (window.history.replaceState && currentTab) {
      const sourceUrl = `tab=${currentTab}`;
      const targetUrl = `tab=${targetTab}`;
      window.history.replaceState(
        location.href,
        document.title,
        location.href.replace(sourceUrl, targetUrl)
      );
      urlObj.value = new URL(location.href);
    }
  }
  return {
    isLimitPage,
    isBlockPage,
    updateTab
  };
}
async function usePromoExtension() {
  const settingsStorage = injectStorage();
  const extensionPage = useExtensionPage();
  const hasReviewOnLimits = await settingsStorage.getValue(
    StorageParams.PROMO_CLEAR_YOUTUBE_ON_LIMITS
  );
  const hasReviewOnBlock = await settingsStorage.getValue(
    StorageParams.PROMO_CLEAR_YOUTUBE_ON_BLOCK
  );
  const whitelist = Object.values(
    await settingsStorage.getValue(StorageParams.RESTRICTION_LIST, [])
  );
  const isIncludeYoutube = computed(
    () => whitelist.find((x) => x.domain == "youtube.com") != void 0
  );
  const showOnLimitPage = computed(
    () => (hasReviewOnLimits == void 0 || hasReviewOnLimits == false) && extensionPage.isLimitPage.value && isIncludeYoutube.value
  );
  const showOnBlockPage = computed(
    () => (hasReviewOnBlock == void 0 || hasReviewOnBlock == false) && extensionPage.isBlockPage.value
  );
  return showOnLimitPage.value || showOnBlockPage.value;
}
const _hoisted_1 = {
  key: 0,
  class: "review-block"
};
const _hoisted_2 = { class: "btn-block" };
const _hoisted_3 = ["value"];
const __default__ = {
  name: "PromoClearYouTube"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const extensionPage = useExtensionPage();
    const showReview = ref(true);
    const canShowPromo = computedAsync(async () => await usePromoExtension());
    async function closeBlock() {
      showReview.value = false;
      await saveValue();
    }
    async function openStore() {
      showReview.value = false;
      window.open(CHROME_STORE_CLEAR_YOUTUBE_URL, "_blank");
      await saveValue();
    }
    async function saveValue() {
      let param = void 0;
      if (extensionPage.isBlockPage.value)
        param = StorageParams.PROMO_CLEAR_YOUTUBE_ON_BLOCK;
      if (extensionPage.isLimitPage.value)
        param = StorageParams.PROMO_CLEAR_YOUTUBE_ON_LIMITS;
      if (param)
        await settingsStorage.saveValue(param, true);
    }
    return (_ctx, _cache) => {
      return showReview.value && unref(canShowPromo) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("p", null, toDisplayString(unref(t)("promoClearYoutube.message")), 1),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("img", {
            height: "15",
            src: _imports_0,
            onClick: _cache[0] || (_cache[0] = ($event) => closeBlock())
          }),
          createBaseVNode("input", {
            type: "button",
            value: unref(t)("promoClearYoutube.description"),
            onClick: _cache[1] || (_cache[1] = ($event) => openStore())
          }, null, 8, _hoisted_3)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const PromoClearYouTube_vue_vue_type_style_index_0_scoped_76a7edcf_lang = "";
const PromoClearYouTube = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76a7edcf"]]);
export {
  PromoClearYouTube as P,
  useExtensionPage as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW9DbGVhcllvdVR1YmUuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb3NpdGlvbnMvdXNlRXh0ZW5zaW9uUGFnZS50cyIsIi4uL3NyYy9jb21wb3NpdGlvbnMvdXNlUHJvbW9FeHRlbnNpb24udHMiLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9tb0NsZWFyWW91VHViZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBTZXR0aW5nc1RhYiB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCB7IGdldFN0cmluZ1RhYiB9IGZyb20gJy4uL3V0aWxzL2V4dGVuc2lvbi10YWJzJztcblxuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNU19EQVNIQk9BUkQgPSAnZGFzaGJvYXJkLmh0bWwnO1xuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNU19UQUIgPSAndGFiJztcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfVEFCX0xJTUlUUyA9ICdsaW1pdHMnO1xuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNU19CTE9DSyA9ICdibG9jay5odG1sJztcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfQkxPQ0tfRE9NQUlOID0gJ2RvbWFpbic7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VFeHRlbnNpb25QYWdlKCkge1xuICBjb25zdCB1cmxPYmogPSByZWYobmV3IFVSTChsb2NhdGlvbi5ocmVmKSk7XG5cbiAgY29uc3QgaXNMaW1pdFBhZ2UgPSBjb21wdXRlZChcbiAgICAoKSA9PlxuICAgICAgdXJsT2JqLnZhbHVlLmhvc3RuYW1lID09IF9fQVBQX0lEX18gJiZcbiAgICAgIHVybE9iai52YWx1ZS5wYXRobmFtZS5pbmNsdWRlcyhRVUVSWV9QQVJBTVNfREFTSEJPQVJEKSAmJlxuICAgICAgdXJsT2JqLnZhbHVlLnNlYXJjaFBhcmFtcy5nZXQoUVVFUllfUEFSQU1TX1RBQikgPT0gUVVFUllfUEFSQU1TX1RBQl9MSU1JVFMsXG4gICk7XG5cbiAgY29uc3QgaXNCbG9ja1BhZ2UgPSBjb21wdXRlZChcbiAgICAoKSA9PlxuICAgICAgdXJsT2JqLnZhbHVlLmhvc3RuYW1lID09IF9fQVBQX0lEX18gJiZcbiAgICAgIHVybE9iai52YWx1ZS5wYXRobmFtZS5pbmNsdWRlcyhRVUVSWV9QQVJBTVNfQkxPQ0spICYmXG4gICAgICB1cmxPYmoudmFsdWUuc2VhcmNoUGFyYW1zLmdldChRVUVSWV9QQVJBTVNfQkxPQ0tfRE9NQUlOKT8uaW5jbHVkZXMoJ3lvdXR1YmUuY29tJyksXG4gICk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFiKHRhYjogU2V0dGluZ3NUYWIpIHtcbiAgICBsZXQgdGFyZ2V0VGFiID0gZ2V0U3RyaW5nVGFiKHRhYik7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IHVybE9iai52YWx1ZS5zZWFyY2hQYXJhbXMuZ2V0KFFVRVJZX1BBUkFNU19UQUIpO1xuICAgIGlmICh3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgJiYgY3VycmVudFRhYikge1xuICAgICAgY29uc3Qgc291cmNlVXJsID0gYHRhYj0ke2N1cnJlbnRUYWJ9YDtcbiAgICAgIGNvbnN0IHRhcmdldFVybCA9IGB0YWI9JHt0YXJnZXRUYWJ9YDtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShcbiAgICAgICAgbG9jYXRpb24uaHJlZixcbiAgICAgICAgZG9jdW1lbnQudGl0bGUsXG4gICAgICAgIGxvY2F0aW9uLmhyZWYucmVwbGFjZShzb3VyY2VVcmwsIHRhcmdldFVybCksXG4gICAgICApO1xuICAgICAgdXJsT2JqLnZhbHVlID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzTGltaXRQYWdlLFxuICAgIGlzQmxvY2tQYWdlLFxuICAgIHVwZGF0ZVRhYixcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZW50aXR5L3Jlc3RyaWN0aW9uJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IHVzZUV4dGVuc2lvblBhZ2UgfSBmcm9tICcuL3VzZUV4dGVuc2lvblBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0RBU0hCT0FSRCA9ICdkYXNoYm9hcmQuaHRtbCc7XG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0RBU0hCT0FSRF9UQUIgPSAndGFiJztcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfREFTSEJPQVJEX1RBQl9TRVRUSU5HUyA9ICdzZXR0aW5ncyc7XG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0JMT0NLID0gJ2Jsb2NrLmh0bWwnO1xuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNU19CTE9DS19ET01BSU4gPSAnZG9tYWluJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVByb21vRXh0ZW5zaW9uKCkge1xuICBjb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG4gIGNvbnN0IGV4dGVuc2lvblBhZ2UgPSB1c2VFeHRlbnNpb25QYWdlKCk7XG5cbiAgY29uc3QgaGFzUmV2aWV3T25MaW1pdHMgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5QUk9NT19DTEVBUl9ZT1VUVUJFX09OX0xJTUlUUyxcbiAgKTtcbiAgY29uc3QgaGFzUmV2aWV3T25CbG9jayA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfT05fQkxPQ0ssXG4gICk7XG5cbiAgY29uc3Qgd2hpdGVsaXN0ID0gT2JqZWN0LnZhbHVlcyhcbiAgICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5SRVNUUklDVElPTl9MSVNULCBbXSksXG4gICkgYXMgUmVzdHJpY3Rpb25bXTtcblxuICBjb25zdCBpc0luY2x1ZGVZb3V0dWJlID0gY29tcHV0ZWQoXG4gICAgKCkgPT4gd2hpdGVsaXN0LmZpbmQoeCA9PiB4LmRvbWFpbiA9PSAneW91dHViZS5jb20nKSAhPSB1bmRlZmluZWQsXG4gICk7XG5cbiAgY29uc3Qgc2hvd09uTGltaXRQYWdlID0gY29tcHV0ZWQoXG4gICAgKCkgPT5cbiAgICAgIChoYXNSZXZpZXdPbkxpbWl0cyA9PSB1bmRlZmluZWQgfHwgaGFzUmV2aWV3T25MaW1pdHMgPT0gZmFsc2UpICYmXG4gICAgICBleHRlbnNpb25QYWdlLmlzTGltaXRQYWdlLnZhbHVlICYmXG4gICAgICBpc0luY2x1ZGVZb3V0dWJlLnZhbHVlLFxuICApO1xuICBjb25zdCBzaG93T25CbG9ja1BhZ2UgPSBjb21wdXRlZChcbiAgICAoKSA9PlxuICAgICAgKGhhc1Jldmlld09uQmxvY2sgPT0gdW5kZWZpbmVkIHx8IGhhc1Jldmlld09uQmxvY2sgPT0gZmFsc2UpICYmXG4gICAgICBleHRlbnNpb25QYWdlLmlzQmxvY2tQYWdlLnZhbHVlLFxuICApO1xuXG4gIHJldHVybiBzaG93T25MaW1pdFBhZ2UudmFsdWUgfHwgc2hvd09uQmxvY2tQYWdlLnZhbHVlO1xufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicmV2aWV3LWJsb2NrXCIgdi1pZj1cInNob3dSZXZpZXcgJiYgY2FuU2hvd1Byb21vXCI+XG4gICAgPHA+e3sgdCgncHJvbW9DbGVhcllvdXR1YmUubWVzc2FnZScpIH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJidG4tYmxvY2tcIj5cbiAgICAgIDxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnXCIgQGNsaWNrPVwiY2xvc2VCbG9jaygpXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgOnZhbHVlPVwidCgncHJvbW9DbGVhcllvdXR1YmUuZGVzY3JpcHRpb24nKVwiIEBjbGljaz1cIm9wZW5TdG9yZSgpXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUHJvbW9DbGVhcllvdVR1YmUnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgeyBDSFJPTUVfU1RPUkVfQ0xFQVJfWU9VVFVCRV9VUkwgfSBmcm9tICcuLi91dGlscy9jaHJvbWUtdXJsJztcbmltcG9ydCB7IHVzZVByb21vRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9zaXRpb25zL3VzZVByb21vRXh0ZW5zaW9uJztcbmltcG9ydCB7IGNvbXB1dGVkQXN5bmMgfSBmcm9tICdAdnVldXNlL2NvcmUnO1xuaW1wb3J0IHsgdXNlRXh0ZW5zaW9uUGFnZSB9IGZyb20gJy4uL2NvbXBvc2l0aW9ucy91c2VFeHRlbnNpb25QYWdlJztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5cbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcbmNvbnN0IGV4dGVuc2lvblBhZ2UgPSB1c2VFeHRlbnNpb25QYWdlKCk7XG5cbmNvbnN0IHNob3dSZXZpZXcgPSByZWY8Ym9vbGVhbj4odHJ1ZSk7XG5cbmNvbnN0IGNhblNob3dQcm9tbyA9IGNvbXB1dGVkQXN5bmMoYXN5bmMgKCkgPT4gYXdhaXQgdXNlUHJvbW9FeHRlbnNpb24oKSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNsb3NlQmxvY2soKSB7XG4gIHNob3dSZXZpZXcudmFsdWUgPSBmYWxzZTtcbiAgYXdhaXQgc2F2ZVZhbHVlKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5TdG9yZSgpIHtcbiAgc2hvd1Jldmlldy52YWx1ZSA9IGZhbHNlO1xuICB3aW5kb3cub3BlbihDSFJPTUVfU1RPUkVfQ0xFQVJfWU9VVFVCRV9VUkwsICdfYmxhbmsnKTtcbiAgYXdhaXQgc2F2ZVZhbHVlKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVWYWx1ZSgpIHtcbiAgbGV0IHBhcmFtOiBTdG9yYWdlUGFyYW1zIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBpZiAoZXh0ZW5zaW9uUGFnZS5pc0Jsb2NrUGFnZS52YWx1ZSkgcGFyYW0gPSBTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfT05fQkxPQ0s7XG4gIGlmIChleHRlbnNpb25QYWdlLmlzTGltaXRQYWdlLnZhbHVlKSBwYXJhbSA9IFN0b3JhZ2VQYXJhbXMuUFJPTU9fQ0xFQVJfWU9VVFVCRV9PTl9MSU1JVFM7XG4gIGlmIChwYXJhbSkgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShwYXJhbSwgdHJ1ZSk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5yZXZpZXctYmxvY2sge1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLXdpZHRoOiA2NTVweDtcbn1cbi5yZXZpZXctYmxvY2sgLmJ0bi1ibG9jayB7XG4gIG1hcmdpbjogOHB4IDVweCAwIDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5yZXZpZXctYmxvY2sgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnJldmlldy1ibG9jayBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogNzAlO1xufVxuLnJldmlldy1ibG9jayBpbWcge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJTyxNQUFNLHlCQUF5QjtBQUMvQixNQUFNLG1CQUFtQjtBQUN6QixNQUFNLDBCQUEwQjtBQUNoQyxNQUFNLHFCQUFxQjtBQUMzQixNQUFNLDRCQUE0QjtBQUVsQyxTQUFTLG1CQUFtQjtBQUNqQyxRQUFNLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLENBQUM7QUFFekMsUUFBTSxjQUFjO0FBQUEsSUFDbEIsTUFDRSxPQUFPLE1BQU0sWUFBWSxzQ0FDekIsT0FBTyxNQUFNLFNBQVMsU0FBUyxzQkFBc0IsS0FDckQsT0FBTyxNQUFNLGFBQWEsSUFBSSxnQkFBZ0IsS0FBSztBQUFBLEVBQUE7QUFHdkQsUUFBTSxjQUFjO0FBQUEsSUFDbEIsTUFDRTs7QUFBQSxvQkFBTyxNQUFNLFlBQVksc0NBQ3pCLE9BQU8sTUFBTSxTQUFTLFNBQVMsa0JBQWtCLE9BQ2pELFlBQU8sTUFBTSxhQUFhLElBQUkseUJBQXlCLE1BQXZELG1CQUEwRCxTQUFTO0FBQUE7QUFBQSxFQUFhO0FBR3BGLFdBQVMsVUFBVSxLQUFrQjtBQUMvQixRQUFBLFlBQVksYUFBYSxHQUFHO0FBQ2hDLFVBQU0sYUFBYSxPQUFPLE1BQU0sYUFBYSxJQUFJLGdCQUFnQjtBQUM3RCxRQUFBLE9BQU8sUUFBUSxnQkFBZ0IsWUFBWTtBQUN2QyxZQUFBLFlBQVksT0FBTyxVQUFVO0FBQzdCLFlBQUEsWUFBWSxPQUFPLFNBQVM7QUFDbEMsYUFBTyxRQUFRO0FBQUEsUUFDYixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTLEtBQUssUUFBUSxXQUFXLFNBQVM7QUFBQSxNQUFBO0FBRTVDLGFBQU8sUUFBUSxJQUFJLElBQUksU0FBUyxJQUFJO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBRU8sU0FBQTtBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQUE7QUFFSjtBQ25DQSxlQUFzQixvQkFBb0I7QUFDeEMsUUFBTSxrQkFBa0I7QUFDeEIsUUFBTSxnQkFBZ0I7QUFFaEIsUUFBQSxvQkFBb0IsTUFBTSxnQkFBZ0I7QUFBQSxJQUM5QyxjQUFjO0FBQUEsRUFBQTtBQUVWLFFBQUEsbUJBQW1CLE1BQU0sZ0JBQWdCO0FBQUEsSUFDN0MsY0FBYztBQUFBLEVBQUE7QUFHaEIsUUFBTSxZQUFZLE9BQU87QUFBQSxJQUN2QixNQUFNLGdCQUFnQixTQUFTLGNBQWMsa0JBQWtCLENBQUEsQ0FBRTtBQUFBLEVBQUE7QUFHbkUsUUFBTSxtQkFBbUI7QUFBQSxJQUN2QixNQUFNLFVBQVUsS0FBSyxPQUFLLEVBQUUsVUFBVSxhQUFhLEtBQUs7QUFBQSxFQUFBO0FBRzFELFFBQU0sa0JBQWtCO0FBQUEsSUFDdEIsT0FDRyxxQkFBcUIsVUFBYSxxQkFBcUIsVUFDeEQsY0FBYyxZQUFZLFNBQzFCLGlCQUFpQjtBQUFBLEVBQUE7QUFFckIsUUFBTSxrQkFBa0I7QUFBQSxJQUN0QixPQUNHLG9CQUFvQixVQUFhLG9CQUFvQixVQUN0RCxjQUFjLFlBQVk7QUFBQSxFQUFBO0FBR3ZCLFNBQUEsZ0JBQWdCLFNBQVMsZ0JBQWdCO0FBQ2xEOzs7Ozs7O0FDakNBLE1BQUEsY0FBZTtBQUFBLEVBQ2IsTUFBTTtBQUNSOzs7O0FBYU0sVUFBQSxFQUFFLE1BQU07QUFFZCxVQUFNLGtCQUFrQjtBQUN4QixVQUFNLGdCQUFnQjtBQUVoQixVQUFBLGFBQWEsSUFBYSxJQUFJO0FBRXBDLFVBQU0sZUFBZSxjQUFjLFlBQVksTUFBTSxrQkFBbUIsQ0FBQTtBQUV4RSxtQkFBZSxhQUFhO0FBQzFCLGlCQUFXLFFBQVE7QUFDbkIsWUFBTSxVQUFVO0FBQUEsSUFDbEI7QUFFQSxtQkFBZSxZQUFZO0FBQ3pCLGlCQUFXLFFBQVE7QUFDWixhQUFBLEtBQUssZ0NBQWdDLFFBQVE7QUFDcEQsWUFBTSxVQUFVO0FBQUEsSUFDbEI7QUFFQSxtQkFBZSxZQUFZO0FBQ3pCLFVBQUksUUFBbUM7QUFDdkMsVUFBSSxjQUFjLFlBQVk7QUFBTyxnQkFBUSxjQUFjO0FBQzNELFVBQUksY0FBYyxZQUFZO0FBQU8sZ0JBQVEsY0FBYztBQUN2RCxVQUFBO0FBQWEsY0FBQSxnQkFBZ0IsVUFBVSxPQUFPLElBQUk7QUFBQSxJQUN4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
