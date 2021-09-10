export const getDataRequest = (type) => ({type});

export const getDataFail = (type, error) => ({type, payload: error});

export const getDataSuccess = (type, data) => ({type, payload: data});

export function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
export const percent = (p) => {
    if (p.length > 3) {
        let n = Number(p.substring(0, 3))
        return n / 100
    } else if (p.length === 3) {
        let n = Number(p.substring(0, 2))
        return n / 100
    } else {
        let n = Number(p.substring(0, 1))
        return n / 100
    }
}
