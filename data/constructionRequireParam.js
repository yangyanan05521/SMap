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
        "paramName": "pageNum",
        "type": "int",
        "required": "是",
        "default": "无",
        "description": "页码，根据输入的页面获取对应的数据（注意：当访问到最后一页时，会更新用户的登录时间，届时用户再次访问，将进入下一次的增量提取）"
    }
]