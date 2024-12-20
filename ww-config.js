export default {
    inherit: 'ww-text',
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'inline-flex'],
        linkable: true,
    },
    editor: {
        label: {
            en: 'Accordion Item',
            fr: "Item d'accordéon",
        },
        icon: 'ww-accordion-item',
        infoTags: () => {
            return [];
        },
        workflowHints: () => {
            return false;
        },
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
    actions: [],
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
