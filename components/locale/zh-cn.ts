import { Locale } from './types';

const locale: Locale = {
    momentLocale: 'zh-cn',
    Timeline: {
        expand: '展开',
        fold: '收起',
    },
    Balloon: {
        close: '关闭',
    },
    Card: {
        expand: '展开',
        fold: '收起',
    },
    Calendar: {
        today: '今天',
        now: '此刻',
        ok: '确定',
        clear: '清除',
        month: '月',
        year: '年',
        prevYear: '上一年',
        nextYear: '下一年',
        prevMonth: '上个月',
        nextMonth: '下个月',
        prevDecade: '上十年',
        nextDecade: '后十年',
        yearSelectAriaLabel: '选择年份',
        monthSelectAriaLabel: '选择月份',
    },
    DatePicker: {
        placeholder: '请选择日期',
        datetimePlaceholder: '请选择日期和时间',
        monthPlaceholder: '请选择月',
        yearPlaceholder: '请选择年',
        weekPlaceholder: '请选择周',
        now: '此刻',
        selectTime: '选择时间',
        selectDate: '选择日期',
        ok: '确定',
        clear: '清除',
        startPlaceholder: '起始日期',
        endPlaceholder: '结束日期',
        hour: '时',
        minute: '分',
        second: '秒',
        monthBeforeYear: false,
    },
    Dialog: {
        close: '关闭',
        ok: '确定',
        cancel: '取消',
    },
    Drawer: {
        close: '关闭',
    },
    Message: {
        closeAriaLabel: '关闭',
    },
    Pagination: {
        prev: '上一页',
        next: '下一页',
        goTo: '到第',
        page: '页',
        go: '确定',
        total: '第{current}页，共{total}页',
        labelPrev: '上一页，当前第{current}页',
        labelNext: '下一页，当前第{current}页',
        inputAriaLabel: '请输入跳转到第几页',
        selectAriaLabel: '请选择每页显示几条',
        pageSize: '每页显示：',
    },
    Input: {
        clear: '清除',
    },
    TextArea: {
        clear: '清除',
    },
    List: {
        empty: '没有数据',
    },
    Select: {
        selectPlaceholder: '请选择',
        autoCompletePlaceholder: '请输入',
        notFoundContent: '无选项',
        maxTagPlaceholder: '已选择 {selected}/{total} 项',
        selectAll: '全选',
    },
    TreeSelect: {
        maxTagPlaceholder: '已选择 {selected}/{total} 项',
        shortMaxTagPlaceholder: '已选择 {selected} 项',
    },
    Table: {
        empty: '没有数据',
        ok: '确认',
        reset: '重置',
        asc: '升序',
        desc: '降序',
        expanded: '已展开',
        folded: '已折叠',
        filter: '筛选',
        selectAll: '全选',
    },
    TimePicker: {
        placeholder: '请选择时间',
        clear: '清除',
        hour: '时',
        minute: '分',
        second: '秒',
        ok: '确定',
    },
    Transfer: {
        items: '项',
        item: '项',
        moveAll: '移动全部',
        searchPlaceholder: '请输入',
        moveToLeft: '撤销选中元素',
        moveToRight: '提交选中元素',
    },
    Upload: {
        card: {
            cancel: '取消',
            addPhoto: '上传图片',
            download: '下载',
            delete: '删除',
        },
        drag: {
            text: '点击或者拖动文件到虚线框内上传',
            hint: '支持 docx, xls, PDF, rar, zip, PNG, JPG 等类型的文件',
        },
        upload: {
            delete: '删除',
        },
    },
    Search: {
        buttonText: '搜索',
    },
    Tag: {
        delete: '删除',
    },
    Rating: {
        description: '评分选项',
    },
    Switch: {
        on: '已打开',
        off: '已关闭',
    },
    Tab: {
        closeAriaLabel: '关闭',
    },
    Form: {
        Validate: {
            default: '%s 校验失败',
            required: '%s 是必填字段',
            format: {
                number: '%s 不是合法的数字',
                email: '%s 不是合法的 email 地址',
                url: '%s 不是合法的 URL 地址',
                tel: '%s 不是合法的电话号码',
            },
            number: {
                length: '%s 长度必须是 %s',
                min: '%s 不得小于 %s',
                max: '%s 不得大于 %s',
                minLength: '%s 字段字符长度不得少于 %s',
                maxLength: '%s 字段字符长度不得超过 %s',
            },
            string: {
                length: '%s 长度必须是 %s',
                min: '%s 不得小于 %s',
                max: '%s 不得大于 %s',
                minLength: '%s 长度不得少于 %s',
                maxLength: '%s 长度不得超过 %s',
            },
            array: {
                length: '%s 个数必须是 %s',
                minLength: '%s 个数不得少于 %s',
                maxLength: '%s 个数不得超过 %s',
            },
            pattern: '%s 数值 %s 不匹配正则 %s',
        },
    },
};

export default locale;
