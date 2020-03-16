import Route from '@ember/routing/route';
import { hash } from 'rsvp';
export default class D3 extends Route.extend({

  // anything which *must* be merged to prototype here
  model(params:any) {
    console.log(params)
    return hash({
      params,
      pieData: [
        ["癫痫竞品1", 2575385.5, null, "0.1952"],
        ["开浦兰", 679346.1875, null, "0.0515"],
        ["癫痫竞品2", 279866.65625, null, "0.0212"],
        ["维派特", 0, null, "0.0000"],
        ["其他竞品", 9662320.65625, null, "0.7322"]
      ],
      barData: [
        ['2018Q1', 2263262.25, 2584466.75, "0.8757", "all", null],
        ['2018Q2', 2194822.96875, 2643496, "0.8303", "all", null],
        ['2018Q3', 2359731.25, 2770609.75, "0.8517", "all", null],
        ['2018Q4', 2165844.0625, 2914783.4375, "0.7431", "all", null],
        ['2019Q1', 704715.671875, 2274136, "0.3099", "all", null],
        ['2019Q2', 677539.40625, 2806879, "0.2414", "all", null],
        ['2019Q3', 679346.203125, 2975934, "0.2283", "all", null]
      ],
      multiLineData: [[
        { label: '2018-01', name: "开浦兰", value: 0.715, count: 2300, other: 0.0000 },
        { label: '2018-04', name: "开浦兰", value: 0.663, count: 2400, other: 0.0000 },
        { label: '2018-07', name: "开浦兰", value: 0.18, count: 2300, other: 0.0000 },
        { label: '2018-10', name: "开浦兰", value: 0.3788, count: 2300, other: 0.0000 }
      ],
      [
        { label: '2018-01', name: "癫痫竞品1", value: 0.15, count: 2100, other: 0.0000 },
        { label: '2018-04', name: "癫痫竞品1", value: 0.63, count: 2400, other: 0.0000 },
        { label: '2018-07', name: "癫痫竞品1", value: 0.18, count: 200, other: 0.0000 },
        { label: '2018-10', name: "癫痫竞品1", value: 0.78, count: 300, other: 0.0000 }
      ],
      [
        { label: '2018-01', name: "维派特", value: 0.5, count: 100, other: 0.0000 },
        { label: '2018-04', name: "维派特", value: 0.3, count: 400, other: 0.0000 },
        { label: '2018-07', name: "维派特", value: 0.1, count: 2500, other: 0.0000 },
        { label: '2018-10', name: "维派特", value: 0.7, count: 3100, other: 0.0000 }
      ]],
      mapData: [
        ["广东", 1, 73016024],
        ["河南", 1, 60152736],
        ["四川", 1, 27159970],
        ["山东", 1, 43637940],
        ["湖北", 1, 35873840],
        ["云南", 1, 17326168],
        ["安徽", 1, 21021256],
        ["江苏", 1, 60300712],
        ["广西", 1, 22048222],
        ["新疆", 1, 16058669],
        ["山西", 1, 13599313],
        ["黑龙江", 1, 15741184],
        ["内蒙古", 1, 10746780],
        ["甘肃", 1, 11707872],
        ["湖南", 1, 25126570],
        ["海南", 1, 4299725],
        ["河北", 1, 32167712],
        ["辽宁", 1, 26218364],
        ["江西", 1, 16163486],
        ["浙江", 1, 54601164],
        ["贵州", 1, 15356775],
        ["陕西", 1, 23325402],
        ["西藏", 1, 647135.5],
        ["福建", 1, 24284596],
        ["吉林", 1, 13055209],
        ["青海", 1, 1306673.5],
        ["宁夏", 1, 7425240],
        ["天津", 1, 16975870],
        ["北京", 1, 40752892],
        ["上海", 1, 22434950],
        ["重庆", 1, 11345040]
      ],
      stackData: [
        {month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400},
        {month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400},
        {month: new Date(2015, 2, 1), apples:  640, bananas:  960, cherries: 640, dates: 400},
        {month: new Date(2015, 3, 1), apples:  320, bananas:  480, cherries: 640, dates: 400}
      ],
      scatterData: [
        // ["CITY", "PROV_MOM", "CITY_MOM", "CITY_SALES"],
        ["三门峡市", 0.0661353886127472, 0.0267854742705822, 1503753.625],
        ["信阳市", 0.01353886127472, 0.021118011325597763, 3141647],
        ["南阳市", 0.0353886127472, 0.009368316270411015, 6627635],
        ["周口市", 0.053886127472, 0.10186182707548141, 3373589],
        ["商丘市", 0.03886127472, 0.07964722067117691, 3416614.75],
        ["安阳市", 0.0886127472, -0.04314463213086128, 2674676.5],
        ["平顶山市", 0.086127472, -0.058747705072164536, 4709144.5],
        ["开封市", 0.06127472, -0.05621219053864479, 2482781],
        ["新乡市", 0.0127472, -0.03616794943809509, 3960186.75],
        ["洛阳市", 0.027472, -0.033699262887239456, 5285980.5],
        ["济源市", 0.07472, 0.0066471765749156475, 501105.1875],
        ["漯河市", 0.0472, 0.025013713166117668, 1548921.5],
        ["濮阳市", 0.072, 0.01931016333401203, 2402496.75],
        ["焦作市", 0.013661353886127472, -0.1028456762433052, 2677141],
        ["许昌市", 0.023661353886127472, 0.11013109982013702, 2085245.375],
        ["驻马店市", 0.033661353886127472, 0.1704568713903427, 2854248.25],
        ["鹤壁市", 0.043661353886127472, 0.0008722419734112918, 754340.875],
        ["郑州市", 0.053661353886127472, 0.2283380776643753, 10153230]
      ]

    })
  }
}) {
    queryParams = {
      chapter: {}
    };
  // normal class body definition here
}