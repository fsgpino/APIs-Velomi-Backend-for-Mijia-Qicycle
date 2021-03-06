// Settings file to APIs Velomi Backend

// Mode strict
"use strict";

// Settings
module.exports = {
    proxy: {
        url:'app-apis.velomi.com',
        options: {
            https: false,
            limit: '1mb'
        }
    },
    ota: {
        bms24: {
            url:"http://app-apis.velomi.com/files/china/bms/otafile_017024022.bin",
            md5:"897bd1a9ef27ab5eba0fcd665b1f6295",
            type:"bms",
            hardware:18,
            software:24,
            eeprom:23,
            ticket:"BMS24",
            remark:"BMS24",
            sort:1
        },
        mc15: {
            url:"http://app-apis.velomi.com/files/china/mc/otafile_005015000.bin",
            md5:"4654a01b58ff7225c6135aa561aefb15",
            type:"mc",
            hardware:5,
            software:15,
            eeprom:0,
            ticket:"MC15",
            remark:"MC15",
            sort:1
        },
        mc17: {
            url:"http://app-apis.velomi.com/files/china/mc/otafile_005017000.bin",
            md5:"fa7ebc569a958df8147b23027bd0c7ba",
            type:"mc",
            hardware:5,
            software:17,
            eeprom:0,
            ticket:"MC17",
            remark:"MC17",
            sort:1
        },
        mc19: {
            url:"http://app-apis.velomi.com/files/china/mc/otafile_005019000_cf.bin",
            md5:"eec249c636c7e01a74ddd6e7350080ef",
            type:"mc",
            hardware:5,
            software:19,
            eeprom:0,
            ticket:"MC19",
            remark:"MC19",
            sort:1
        }
    }
};
