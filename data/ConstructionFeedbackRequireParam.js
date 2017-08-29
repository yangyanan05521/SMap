[
    {
        "paramName": "username",
        "type": "string",
        "required": "是",
        "default": "无",
        "description": "用户名"
    },
    {
        "paramName": "password",
        "type": "string",
        "required": "是",
        "default": "无",
        "description": "密码"
    },
    {
        "paramName": "startTime",
        "type": "string",
        "required": "是",
        "default": "无",
        "description": "开始时间（注意，由于时间格式的特殊性，需要转码，请使用URLEncoder，UTF-8格式转码）"
    },
    {
        "paramName": "endTime",
        "type": "string",
        "required": "是",
        "default": "无",
        "description": "结束时间（注意，由于时间格式的特殊性，需要转码，请使用URLEncoder，UTF-8格式转码）"
    },
    {
        "paramName": "pageNum",
        "type": "int",
        "required": "是",
        "default": "无",
        "description": "页码（注意：当访问到最后一页时，会更新用户的登录时间，届时用户再次访问，将进入下一次的增量提取）"
    }
]