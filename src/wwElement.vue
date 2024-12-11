<template>
    <div class="ww-accordion-item">
        <wwElement
            :uid="uid"
            :content="content"
            v-bind="content.triggerElement"
            role="dialog"
            class="ww-accordion-item-content"
        />
        <WwExpandTransition>
            <div v-if="isExpanded" key="item-wrapper">
                <wwElement v-bind="content.contentElement" role="dialog" class="ww-accordion-item-content" />
            </div>
        </WwExpandTransition>
    </div>
</template>

<script>
import { provide } from 'vue';
import WwExpandTransition from './wwExpandTransition.vue';
import { useAccordion } from './composables/useAccordion';

export default {
    components: { WwExpandTransition },
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ['trigger-event'],
    setup(props, { emit }) {
        const accordion = useAccordion(props, emit);

        provide('weweb-assets/ww-accordion-item', {
            openAccordion: accordion.openAccordion,
            closeAccordion: accordion.closeAccordion,
            toggleAccordion: accordion.toggleAccordion,
            disabled: accordion.disabled,
            isExpanded: accordion.isExpanded,
        });

        wwLib.wwElement.useRegisterElementLocalContext('ww-accordion-item', {
            isExpanded: accordion.isExpanded,
        });

        return {
            isExpanded: accordion.isExpanded,
        };
    },
};
</script>

<style lang="scss" scoped>
.ww-accordion-item {
    display: flex;
    flex-direction: column;
}
</style>
