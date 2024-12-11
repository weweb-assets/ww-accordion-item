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
import { inject, provide, toRef, computed, watch } from 'vue';
import WwExpandTransition from './wwExpandTransition.vue';

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
        const { disabled } = toRef(() => props.content.disabled);

        const {
            value,
            openAccordion: parentOpenAccordion,
            closeAccordion: parentCloseAccordion,
            toggleAccordion: parentToggleAccordion,
        } = inject('weweb-assets/ww-accordion-root');

        const isExpanded = computed(() => value.value === props.content.value);

        watch(isExpanded, val => {
            emit('trigger-event', {
                name: 'change',
                event: {
                    value: val,
                },
            });
        });

        function openAccordion() {
            parentOpenAccordion(props.content.value);
        }
        function closeAccordion() {
            parentCloseAccordion(props.content.value);
        }
        function toggleAccordion() {
            console.log('test');
            parentToggleAccordion(props.content.value);
        }

        provide('weweb-assets/ww-accordion-item', {
            openAccordion,
            closeAccordion,
            toggleAccordion,
            disabled,
            isExpanded,
        });

        wwLib.wwElement.useRegisterElementLocalContext('ww-accordion-item', { isExpanded });

        return {
            isExpanded,
            parent,
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
