/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed, onMounted, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
import PostItem from './PostItem.vue';
import { useMockData } from '../composables/useMockData';
const props = withDefaults(defineProps(), {
    theme: 'default'
});
const { loadMorePosts } = useMockData(props.theme);
const posts = ref([]);
const columns = ref([[], []]);
const waterfallRef = ref(null);
const { width: windowWidth } = useWindowSize();
// 初始加载
const loadInitialPosts = () => {
    posts.value = loadMorePosts([], 10);
    distributePosts();
};
// 加载更多
const loadMore = ($state) => {
    setTimeout(() => {
        const newPosts = loadMorePosts(posts.value, 5);
        posts.value = [...posts.value, ...newPosts];
        distributePosts();
        $state.loaded();
        if (posts.value.length > 30) {
            $state.complete();
        }
    }, 1000);
};
// 分配帖子到列
const distributePosts = () => {
    const newColumns = [[], []];
    posts.value.forEach((post, index) => {
        const columnIndex = getShortestColumnIndex(newColumns);
        newColumns[columnIndex].push(post);
    });
    columns.value = newColumns;
};
// 获取当前最短的列
const getShortestColumnIndex = (cols) => {
    if (cols[0].length === 0 && cols[1].length === 0)
        return 0;
    if (cols[0].length === 0)
        return 0;
    if (cols[1].length === 0)
        return 1;
    return cols[0].length <= cols[1].length ? 0 : 1;
};
// 响应式调整列数
const columnCount = computed(() => {
    return windowWidth.value < 768 ? 1 : 2;
});
watch(columnCount, () => {
    distributePosts();
});
onMounted(() => {
    loadInitialPosts();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    theme: 'default'
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "waterfall" },
    ref: "waterfallRef",
});
/** @type {typeof __VLS_ctx.waterfallRef} */ ;
for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "waterfall-column" },
        key: (index),
    });
    for (const [post] of __VLS_getVForSourceType((column))) {
        /** @type {[typeof PostItem, ]} */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(PostItem, new PostItem({
            key: (post.id),
            post: (post),
        }));
        const __VLS_1 = __VLS_0({
            key: (post.id),
            post: (post),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['waterfall']} */ ;
/** @type {__VLS_StyleScopedClasses['waterfall-column']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PostItem: PostItem,
            columns: columns,
            waterfallRef: waterfallRef,
        };
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=WaterfallFlow.vue.js.map