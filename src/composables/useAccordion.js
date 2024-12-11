import { computed, inject, watch } from 'vue';

export function useAccordion(props, emit) {
    const disabled = computed(() => props.content.disabled);

    const {
        value,
        openAccordion: parentOpenAccordion,
        closeAccordion: parentCloseAccordion,
        toggleAccordion: parentToggleAccordion,
    } = inject('weweb-assets/ww-accordion-root');

    const isExpanded = computed(() => {
        return Array.isArray(value.value)
            ? value.value.includes(props.content.value)
            : value.value === props.content.value;
    });

    watch(isExpanded, val => {
        emit('trigger-event', {
            name: 'change',
            event: { value: val },
        });
    });

    function openAccordion() {
        if (disabled.value) return;
        parentOpenAccordion(props.content.value);
    }

    function closeAccordion() {
        if (disabled.value) return;
        parentCloseAccordion(props.content.value);
    }

    function toggleAccordion() {
        if (disabled.value) return;
        parentToggleAccordion(props.content.value);
    }

    return {
        disabled,
        isExpanded,
        openAccordion,
        closeAccordion,
        toggleAccordion,
    };
}
