import { expect, test } from "vitest";
import * as alertControl from '../../src/createAlert'

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
            alertVNode: {
                el: {
                    style: {
                        'top': '100'
                    }
                },
                component: mockComponent
            }
        }], 10)
        expect(mockComponent).toEqual({ props: { offset: 78 } })
    })

    test('should return if no alertVNode el', () => {
        const result = alertControl.moveAlertsOnClose(0, [{ alertVNode: {} }], 10)
        expect(result).toBeUndefined();
    })

    test('should return if no alertVNode component', () => {
        const result = alertControl.moveAlertsOnClose(0, [{
            alertVNode: {
                el: {
                    style: {
                        'top': '100'
                    }
                },
            },
        }], 10)
        expect(result).toBeUndefined();
    })
})

