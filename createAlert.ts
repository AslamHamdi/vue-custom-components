export const createAlert = (options: object): { close: () => void }  => {
    return {
        close: () => close()
    }
}