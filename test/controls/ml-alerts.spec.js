import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, expect, test, vi, it } from "vitest";
import * as alertControl from '../../src/createAlert'
import * as Vue from 'vue';


describe("ML alert control", () => {


    test('moveAlertsOnAdd should move alert', () => {
        const alertObject = {
            alertVNode: {
                el: {
                    offsetHeight: 12
                }
            },
            container: {}
        }
        const alerts = [alertObject]
        const result = alertControl.moveAlertsOnAdd({}, alerts, 12);
        expect(result).toEqual(36);
    })

    test('should move on close', () => {
        let mockComponent = {
            props: {
                offset: 0
            }
        }
        alertControl.moveAlertsOnClose(0, [{
            toastVNode: {
                el: {
                    style: {
                        'top': '100'
                    }
                },
                component: mockComponent
            },
        }], 10)
        expect(mockComponent).toEqual({ props: { offset: 78 } })
    })

    // describe('createToast', () => {
    //     test('should work if the content is a VNode', () => {
    //         vi.spyOn(alertControl, 'setupVNode');
    //         alertControl.createAlert({ __v_isVNode: true });
    //         expect(alertControl.setupVNode).toHaveBeenCalled()
    //     })
    // })


})

