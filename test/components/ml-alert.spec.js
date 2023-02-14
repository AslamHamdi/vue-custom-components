import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import MlAlert from '../../src/components/customs/ml-alert.vue'

const mock = vi.fn(() => console.log('executed'))

describe("ML alert component", () => {

    beforeEach(() => {
        vi.useFakeTimers()
    })
    afterEach(() => {
        vi.restoreAllMocks()
    })

    test("component mounted", async () => {
        expect(MlAlert).toBeTruthy();
    })

    //#region alert styling
    test("render correct styles for info", async () => {
        const wrapper = mount(MlAlert, {
            props: {
                visible: true,
                variation: 'all',
                type: 'info'
            },
        });
        expect(wrapper.findAll('div').at(1).classes()).toEqual(
            expect.arrayContaining(["bg-custom-info-100"])
        );
    })

    test("render correct styles for warning", async () => {
        const wrapper = mount(MlAlert, {
            props: {
                visible: true,
                variation: 'all',
                type: 'warning'
            },
        });
        expect(wrapper.findAll('div').at(1).classes()).toEqual(
            expect.arrayContaining(["bg-custom-warning-100"])
        );
    })

    test("render correct styles for error", async () => {
        const wrapper = mount(MlAlert, {
            props: {
                visible: true,
                variation: 'all',
                type: 'error'
            },
        });
        expect(wrapper.findAll('div').at(1).classes()).toEqual(
            expect.arrayContaining(["bg-custom-error-100"])
        );
    })

    test("render correct styles for success", async () => {
        const wrapper = mount(MlAlert, {
            props: {
                visible: true,
                variation: 'all',
                type: 'success'
            },
        });
        expect(wrapper.findAll('div').at(1).classes()).toEqual(
            expect.arrayContaining(["bg-custom-success-100"])
        );
    })

    //#endregion
})