export default {
    inherit: 'ww-layout',
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'inline-flex', 'grid'],
        linkable: true,
    },
    editor: {
        label: {
            en: 'Accordion Item',
            fr: "Item d'accordéon",
        },
        icon: 'ww-accordion-item',
    },
    states: ['focus', 'disabled'],
    triggerEvents: [
        {
            name: 'change',
            label: {
                en: 'On value change',
                fr: 'Changement de valeur',
            },
            event: {
                value: true,
            },
        },
    ],
    properties: {
        value: {
            label: {
                en: 'Value',
                fr: 'Valeur',
            },
            type: 'Text',
            section: 'style',
            description: {
                en: 'The value of the accordion',
                fr: "La valeur de l'accordéon",
            },
            defaultValue: '',
            bindable: true,
        },
        toggleAccordion: {
            type: 'Button',
            editorOnly: true,
            options: {
                text: { en: 'Toggle accordion' },
                action: 'toggleAccordion',
            },
        },
        disabled: {
            label: {
                en: 'Disabled',
                fr: 'Désactivé',
            },
            type: 'OnOff',
            section: 'style',
            description: {
                en: 'Disable the accordion',
                fr: "Désactive l'accordéon",
            },
            defaultValue: false,
            bindable: true,
        },

        triggerElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'd679aeee-613b-4f0f-9a1d-cd3d865cdc56',
                state: {
                    name: 'Accordion Trigger',
                },
            },
        },

        contentElement: {
            hidden: true,
            defaultValue: {
                isWwObject: true,
                type: 'ww-flexbox',
                state: {
                    name: 'Accordion Item',
                },
            },
        },
    },
};
