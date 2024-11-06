import { playerData } from "../data/player-stats/playerdata.js";
export function getCatchQuality() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
    let lvlFiveHund = 0;
    if (((_d = (_c = (_b = (_a = playerData[0]) === null || _a === void 0 ? void 0 : _a.FishingRod) === null || _b === void 0 ? void 0 : _b.Attachment) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.rod_butt) >= 500) {
        lvlFiveHund = (_h = (_g = (_f = (_e = playerData[0]) === null || _e === void 0 ? void 0 : _e.FishingRod) === null || _f === void 0 ? void 0 : _f.Attachment) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.rod_butt;
        console.log(lvlFiveHund);
    }
    let qualities = [
        { name: "dead", probability: 1 }, // 100%
        { name: "alive", probability: 0.20 + ((_m = (_l = (_k = (_j = playerData[0]) === null || _j === void 0 ? void 0 : _j.FishingRod) === null || _k === void 0 ? void 0 : _k.Attachment) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.rod_butt) / 150 }, // 20%
        { name: "average", probability: 0.0010 + ((_r = (_q = (_p = (_o = playerData[0]) === null || _o === void 0 ? void 0 : _o.FishingRod) === null || _p === void 0 ? void 0 : _p.Attachment) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.rod_butt) / 300 }, // 20%
        { name: "good", probability: 0.0005 + ((_v = (_u = (_t = (_s = playerData[0]) === null || _s === void 0 ? void 0 : _s.FishingRod) === null || _t === void 0 ? void 0 : _t.Attachment) === null || _u === void 0 ? void 0 : _u[0]) === null || _v === void 0 ? void 0 : _v.rod_butt) / (600 + lvlFiveHund) }, // 0.05
        { name: "excellent", probability: 0.010 + ((_z = (_y = (_x = (_w = playerData[0]) === null || _w === void 0 ? void 0 : _w.FishingRod) === null || _x === void 0 ? void 0 : _x.Attachment) === null || _y === void 0 ? void 0 : _y[0]) === null || _z === void 0 ? void 0 : _z.rod_butt) / 1100 } // 0.005
    ];
    console.log(qualities);
    if (qualities[1].probability >= 1) {
        // Exclude 'dead' from the selection when 'alive' is dominant.
        qualities[0].probability = 0;
        console.log(qualities);
    }
    if (qualities[2].probability >= 1) {
        // Exclude 'dead' from the selection when 'alive' is dominant.
        qualities[1].probability = 0;
        console.log(qualities);
    }
    if (((_3 = (_2 = (_1 = (_0 = playerData[0]) === null || _0 === void 0 ? void 0 : _0.FishingRod) === null || _1 === void 0 ? void 0 : _1.Attachment) === null || _2 === void 0 ? void 0 : _2[0]) === null || _3 === void 0 ? void 0 : _3.rod_butt) >= 500) {
        qualities[2].probability = 0;
    }
    if (((_7 = (_6 = (_5 = (_4 = playerData[0]) === null || _4 === void 0 ? void 0 : _4.FishingRod) === null || _5 === void 0 ? void 0 : _5.Attachment) === null || _6 === void 0 ? void 0 : _6[0]) === null || _7 === void 0 ? void 0 : _7.rod_butt) === 1000) {
        return "excellent";
    }
    console.log(qualities[0].probability);
    const totalWeight = qualities.reduce((acc, quality) => acc + quality.probability, 0);
    const randomNumber = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    for (const quality of qualities) {
        cumulativeWeight += quality.probability;
        if (randomNumber < cumulativeWeight) {
            return quality.name; // Return the quality if it matches the random number
        }
    }
    return "dead"; // Fallback if no other quality is selected
}
