/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "post-card" },
});
if (__VLS_ctx.post.media.type === 'image') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: (__VLS_ctx.post.media.url),
        alt: (__VLS_ctx.post.title),
        ...{ class: "post-media" },
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "video-wrapper" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({
        src: (__VLS_ctx.post.media.url),
        controls: true,
        muted: true,
        playsinline: true,
        preload: "metadata",
        ...{ class: "post-media" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "post-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "post-title" },
});
(__VLS_ctx.post.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "post-tag" },
});
(__VLS_ctx.post.tag);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "post-user" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: (__VLS_ctx.post.avatar),
    alt: (__VLS_ctx.post.username),
    ...{ class: "post-avatar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "post-username" },
});
(__VLS_ctx.post.username);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "post-stats" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({});
(__VLS_ctx.post.likes);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({});
(__VLS_ctx.post.comments);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({});
(__VLS_ctx.post.shares);
/** @type {__VLS_StyleScopedClasses['post-card']} */ ;
/** @type {__VLS_StyleScopedClasses['post-media']} */ ;
/** @type {__VLS_StyleScopedClasses['video-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['post-media']} */ ;
/** @type {__VLS_StyleScopedClasses['post-content']} */ ;
/** @type {__VLS_StyleScopedClasses['post-title']} */ ;
/** @type {__VLS_StyleScopedClasses['post-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['post-user']} */ ;
/** @type {__VLS_StyleScopedClasses['post-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['post-username']} */ ;
/** @type {__VLS_StyleScopedClasses['post-stats']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=PostItem.vue.js.map