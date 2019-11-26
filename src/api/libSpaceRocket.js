// Библиотека
// Функции, связывающие Базу данных (backend, Space) и приложение (frontend, Rocket)


const frontType = (backType) => {
    switch (backType) {
        case "INTEGER":
            return ('numeric');
        case "VARCHAR":
        case "TEXT":
            return ('string');
        default:
            return ('string');
    }
};


export const convertColumnsDefBackToFront = (backColumnsDef) => {
    let frontColumnsDef = backColumnsDef.map((c) => {
            return {
                'field': c.f_name,
                'title': c.f_label,
                'type': frontType(c.f_type_name),
                'initialEditValue': c.f_default,
                'editable': true


            }
        }
    );
    return frontColumnsDef;
};
/*

title: 'Заголовк поля/колонки таблицы БД',
    field
:
'Field name in db table',
    type
:
"oneOf(['string', 'boolean', 'numeric', 'date', 'datetime', 'time', 'currency'])",
    editable
:
"oneOf(['always', 'onUpdate', 'onAdd', 'never'])",
    initialEditValue
:
'Default initial value',
    lookup
:
{
    34
:
    'Выбор', 63
:
    'значения', 77
:
    'из списка'
}
,
hidden: false,
    sorting
:
true,

    [{
        "table_rf": 1148,
        "f_no": 1,
        "f_name": "table_rf",
        "f_label": "ТаблицыБД",
        "f_camel": "",
        "f_type_rf": 1152,
        "f_type_name": "INTEGER",
        "f_length": 4,
        "f_prec": 0,
        "f_null": "N",
        "f_indexes": "p11",
        "f_spr_rf": 1147,
        "f_spr_name": "ТаблицыБД",
        "f_group_rf": 1147,
        "f_group_name": "ТаблицыБД",
        "f_params": "?",
        "f_default": "0",
        "f_info": "?"
    },
        {
            "table_rf": 1148,
            "f_no": 2,
            "f_name": "t_label",
            "f_label": "Подпись",
            "f_camel": "",
            "f_type_rf": 1153,
            "f_type_name": "VARCHAR",
            "f_length": 80,
            "f_prec": 0,
            "f_null": "N",
            "f_indexes": "",
            "f_spr_rf": 1,
            "f_spr_name": " ",
            "f_group_rf": 1,
            "f_group_name": " ",
            "f_params": "?",
            "f_default": "?",
            "f_info": "Русское название таблицы"
        },
        {
            "table_rf": 1148,
            "f_no": 3,
            "f_name": "t_info",
            "f_label": "Описание",
            "f_camel": "",
            "f_type_rf": 1154,
            "f_type_name": "TEXT",
            "f_length": 0,
            "f_prec": 0,
            "f_null": "Y",
            "f_indexes": "",
            "f_spr_rf": 1,
            "f_spr_name": " ",
            "f_group_rf": 1,
            "f_group_name": " ",
            "f_params": "?",
            "f_default": "",
            "f_info": "Описание таблицы"
        }],
    "xssxx"
:
"xssxx"
}*/
