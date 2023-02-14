import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import MlButton from '../../src/components/customs/ml-button.vue'

describe("ML button component", () => {

    test("component mounted", async () => {
        expect(MlButton).toBeTruthy();
    })

    //#region primary button
    test("render correct styles for info", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'primary',
                type2: 'info'
            },
        });

        expect(wrapper.find('button').classes()).toEqual(
            expect.arrayContaining(["bg-custom-orange-100"])
        );
    })

    test("render correct styles for error", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'primary',
                type2: 'error'
            },
        });

        expect(wrapper.find('button').classes()).toEqual(
            expect.arrayContaining(["bg-custom-error-200"])
        );
    })

    test("render correct styles for warning", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'primary',
                type2: 'warning'
            },
        });

        expect(wrapper.find('button').classes()).toEqual(
            expect.arrayContaining(["bg-custom-warning-300"])
        );
    })

    test("render correct styles for succeess", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'primary',
                type2: 'success'
            },
        });

        expect(wrapper.find('button').classes()).toEqual(
            expect.arrayContaining(["bg-custom-success-300"])
        );
    })
    //#endregion

    //#region secondarybutton
    test("render correct styles for secondary info", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'secondary',
                type2: 'info'
            },
        });

        expect(wrapper.find('button').classes()).toEqual(
            expect.arrayContaining(["enabled:outline-custom-orange-400"])
        );
    })

    test("render correct styles for secondary error", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'secondary',
                type2: 'error'
            },
        });

        expect(wrapper.find('button').classes()).toEqual(
            expect.arrayContaining(["enabled:outline-custom-error-200"])
        );
    })

    test("render correct styles for secondary warning", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'secondary',
                type2: 'warning'
            },
        });

        expect(wrapper.find('button').classes()).toEqual(
            expect.arrayContaining(["enabled:outline-custom-warning-300"])
        );
    })

    test("render correct styles for secondary succeess", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'secondary',
                type2: 'success'
            },
        });

        expect(wrapper.find('button').classes()).toEqual(
            expect.arrayContaining(["enabled:outline-custom-success-300"])
        );
    })
    //#endregion


    test("render button text", async () => {
        const wrapper = mount(MlButton, {
            props: {
                type: 'secondary',
                type2: 'info',
                text: "Testoo"
            },
        });

        expect(wrapper.props('text')).toBe("Testoo")
    })
})